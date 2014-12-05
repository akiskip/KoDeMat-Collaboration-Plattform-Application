/* 
 * Copyright 2014 Institute fml (TU Munich) and Institute FLW (TU Dortmund).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package kodemat.visu.appstates;

import com.hazelcast.core.EntryEvent;
import com.hazelcast.core.EntryListener;
import com.hazelcast.core.IMap;
import com.hazelcast.core.LifecycleEvent;
import com.hazelcast.core.LifecycleEvent.LifecycleState;
import com.hazelcast.core.LifecycleListener;
import com.jme3.app.Application;
import com.jme3.app.state.AbstractAppState;
import com.jme3.app.state.AppStateManager;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import com.hazelcast.client.config.ClientConfig;

import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.IQueue;
import com.hazelcast.core.ItemEvent;
import com.hazelcast.core.ItemListener;
import com.hazelcast.core.MapEvent;
import com.jme3.app.SimpleApplication;
import com.jme3.light.DirectionalLight;
import com.jme3.scene.Node;
import java.util.ArrayList;
import java.util.logging.Logger;
import javax.swing.JOptionPane;
import kodemat.admin.VisuKodematUser;
import kodemat.visu.ClientStateChangeInterface;
import kodemat.visu.VisuClientConnectionInfo;
import kodemat.visu.VisuHazelcastClient;
import kodemat.visudata.command.VisuCommand;

/**
 *
 * @author Moritz Roidl, Orthodoxos Kipouridis
 */
public class VisuHazelcastAppState extends AbstractAppState {

    private static final Logger logger = Logger.getLogger(VisuHazelcastAppState.class.getName());
    public final ExecutorService threadPool = Executors.newFixedThreadPool(1);
    private VisuClientStateViewAppState clientStateViewAppState;
    private NiftyGuiAppState niftyGuiAppState;
    private boolean client_initialized = false;
    private List<String> addressList;
    private IMap<String, VisuKodematUser> users;
    private IQueue<VisuCommand> commands;
    CommandListener commandListener = new CommandListener();
    private List<ClientStateListener> clientStateListeners = new LinkedList<>();
    private ClientStateChangeInterface clientStateChangeInterface;
    private HazelcastInstance client;
    private boolean connected;
    public ClientConfig clientConfig;
    public String uuid;
    Class params;
    public String Name;
    private VisuClientConnectionInfo connectionInfo = new VisuClientConnectionInfo("localhost:5801", null, null, null);
    final VisuKodematUser kodematUser;
    private String clientUUID;
 SimpleApplication application;
    public boolean isConnected() {
        return connected;
    }

    public void setConnected(boolean connected) {
        if (connected == true) {
            this.client_start();
        } else {
            this.cleanup();
        }

    }
    private Node modelNode;

    public VisuHazelcastAppState() {
        this.kodematUser = new  VisuKodematUser();
    }
    
    public VisuHazelcastAppState(VisuKodematUser kodematUser) {
        this.kodematUser = kodematUser;
    }

    public VisuHazelcastAppState(VisuClientConnectionInfo connectionInfo, VisuKodematUser kodematUser) {

        this.connectionInfo = connectionInfo;
        this.kodematUser = kodematUser;
    }

    public VisuHazelcastAppState(ClientStateChangeInterface clientStateChangeInterface, VisuKodematUser kodematUser) {
        this.clientStateChangeInterface = clientStateChangeInterface;
        this.kodematUser = kodematUser;
    }

    @Override
    public void initialize(AppStateManager stateManager, Application app) {
        super.initialize(stateManager, app);

         application = (SimpleApplication) app;
        Node sceneNode = new Node("Scene1");

        modelNode = (Node) application.getRootNode().getChild("Scene");
        modelNode.attachChild(sceneNode);

        modelNode.addLight(new DirectionalLight());
//        create the scenegraph and camera appstates
//        this.createAdditionalAppStates(stateManager);

        niftyGuiAppState = stateManager.getState(NiftyGuiAppState.class);
        clientStateViewAppState = stateManager.getState(VisuClientStateViewAppState.class);

        if (niftyGuiAppState != null) {
            this.clientStateChangeInterface = niftyGuiAppState.getHudController();
        } else if (clientStateViewAppState != null) {
            this.clientStateChangeInterface = clientStateViewAppState.getClientStateView();
        }

    }

    @Override
    public void setEnabled(boolean enabled) {
        super.setEnabled(enabled);
    }

    public void createAdditionalAppStates(AppStateManager stateManager) {
        VisuScenegraphAppState clientScenegraphAppState = new VisuScenegraphAppState(this, modelNode);
        stateManager.attach(clientScenegraphAppState);

    }


    @Override
    public void cleanup() {
        super.cleanup();
        Runnable r = new Runnable() {
            @Override
            public void run() {
                client.shutdown();
            }
        };
        threadPool.submit(r);
        threadPool.shutdown();
    }

    public HazelcastInstance getClient() {
        return client;
    }

    public void client_start() {
        if (client_initialized == false) {
            
//            ClientConfig cfg = fileBuild("./hazelcast-client-full.xml");
//                get the client config based on the properties 
            ClientConfig cfg = connectionInfo.getCliectConfig();

//            TODO:check this line could be that is the reason that we see more clients from same ip
            addressList = cfg.getAddresses();

//            start the client and add it to the cluster
            try{
            client =  new VisuHazelcastClient().getHaselcastClient(cfg);
            }
            catch(Exception ex){
                System.out.println("Client register failed, trying with default config");
                  client =  new VisuHazelcastClient().getHaselcastClient();
            }
           clientUUID= client.getLocalEndpoint().getUuid();
         
           
            
           //init and get the users class
            users =  this.setUpClientsUserMap(kodematUser);
            

            if (clientStateChangeInterface != null) {
                clientStateChangeInterface.changeLocalClientState("CLIENT_CONNECTION_OPENED", addressList);
            }

            //add a lifecyclelistener to the Hazelcastinstance
            client.getLifecycleService().addLifecycleListener( lcl);

            
            if (clientStateChangeInterface != null) {
                clientStateChangeInterface.setNumberOfClients(users.size());
            }

            users.addEntryListener(EL, true);
            
            client_initialized = true;
            for (ClientStateListener csl : clientStateListeners) {
                csl.clientStarted();
            }
        }
        
    }
 
        public void checkUsernameUsed(){
                    int n = JOptionPane.showConfirmDialog(null, "The username is already in use, please choose another ",
                "Warning",
                JOptionPane.OK_OPTION);
        if (n == JOptionPane.OK_OPTION) {
 client.shutdown();
 application.stop();

   
        }
        }
    
    
    
    
   LifecycleListener lcl = new LifecycleListener() {
                @Override
                public void stateChanged(LifecycleEvent le) {
                    LifecycleState state = le.getState();
                    if (clientStateChangeInterface != null) {
                        clientStateChangeInterface.changeLocalClientState(state.name(), addressList);
                    }

                    if (state == LifecycleState.SHUTDOWN) {
                        for (ClientStateListener csl : clientStateListeners) {

                            csl.connectionLost();
                        }
                    }
                    if (state == LifecycleState.STARTED) {
                        for (ClientStateListener csl : clientStateListeners) {
                            csl.connectionOpened();
                        }

                    }
                }
            };
            
            EntryListener EL = new EntryListener() {
                @Override
                public void entryAdded(EntryEvent ee) {
                    if (clientStateChangeInterface != null) {
                        clientStateChangeInterface.changeRemoteState("", ee.getValue().toString(), "connect");
                        clientStateChangeInterface.setNumberOfClients(users.size());

                    }
                }

                @Override
                public void entryRemoved(EntryEvent ee) {
                    if (clientStateChangeInterface != null) {
                        clientStateChangeInterface.changeRemoteState("", ee.getValue().toString(), "disconnect");
                        clientStateChangeInterface.setNumberOfClients(users.size());
                    }

                }

                @Override
                public void entryUpdated(EntryEvent ee) {
                }

                @Override
                public void entryEvicted(EntryEvent ee) {
                }

        @Override
        public void mapEvicted(MapEvent me) {
            throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        }

        @Override
        public void mapCleared(MapEvent me) {
            throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        }
            };
    /**
     *
     * @param csl
     */
    public void registerClientStateListener(ClientStateListener csl) {
        clientStateListeners.add(csl);
    }

    public void deregisterClientStateListener(ClientStateListener csl) {
        clientStateListeners.remove(csl);
    }

    public String getClientUUID() {
      return this.clientUUID;
    }

    public interface ClientStateListener {

        void clientStarted();

        void connectionOpened();

        void connectionLost();
    }
   /**
     * Method that should be called every time a new user (client) joins the session
     * refers only to human clients 
     * @param kodematUser 
     */
    public IMap setUpClientsUserMap(VisuKodematUser kodematUser){

        
        String uuid1 = this.getClientUUID();
       VisuKodematUser user = (VisuKodematUser)client.getMap("users").get(kodematUser.getUsername());
        if( user== null)
        {  
                       user= kodematUser;
            user.setUserUUID(uuid1);
        client.getMap("users").put(kodematUser.getUsername(), user);//updating the UUID with client name in the map	   
      user = (VisuKodematUser)client.getMap("users").get(kodematUser.getUsername());
      client.getMap("kodemat.visu.selectedcomponents").put(kodematUser.getUsername(), new ArrayList<Long>());
        }
        else
        {
            
            this.checkUsernameUsed();
//       TODO:     The following should be changed when user management is implemented so that when the same user reconnects he gets the UUID updated
            
//            user= kodematUser;
//            user.setUserUUID(uuid1);
//        client.getMap("users").put(kodematUser.getUsername(), user);//updating the UUID with client name in the map	   
//      user = (VisuKodematUser)client.getMap("users").get(kodematUser.getUsername());
//      client.getMap("kodemat.visu.selectedcomponents").put(kodematUser.getUsername(), new ArrayList<Long>());
        }
        return client.getMap("users");
    }
    

    
    

    
    
    
    
    class CommandListener implements ItemListener<VisuCommand> {

        @Override
        public void itemAdded(ItemEvent<VisuCommand> ie) {
            if (clientStateChangeInterface != null) {
                clientStateChangeInterface.setCommandQueueInfo(commands.size());
            }
        }

        @Override
        public void itemRemoved(ItemEvent<VisuCommand> ie) {
            if (clientStateChangeInterface != null) {
                clientStateChangeInterface.setCommandQueueInfo(commands.size());
            }
        }
    }
}