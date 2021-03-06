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

package SwingGUI;


import com.hazelcast.client.HazelcastClient;
import com.hazelcast.client.config.ClientConfig;
import com.hazelcast.core.HazelcastInstance;
import graphXML.ImportGEXF;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import kodemat.visu.VisuClient;
import kodemat.visu.VisuServer;
import kodemat.visu.layoutScripts.CeMAT_StaplerScript;
import kodemat.visu.unity.network.KodematSocketServer;
import kodemat.visudata.VisuHelper;

/**
 *
 * @author 
 */
public class KoDeMatManager extends javax.swing.JFrame {
    private static  VisuServer server;
    private static  KodematSocketServer socketServer;
     /*
     * Haselcast Client
     */
    HazelcastInstance client;
    private VisuHelper helper;
    
    
    /**
     * Creates new form KoDeMatManager
     */
    public KoDeMatManager() {
        initComponents();
         server = new VisuServer();
         socketServer = new KodematSocketServer();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jButton2 = new javax.swing.JButton();
        startServerButton = new javax.swing.JButton();
        cliearComponentsButton = new javax.swing.JButton();
        jButton4 = new javax.swing.JButton();
        jButton5 = new javax.swing.JButton();
        layout1Button = new javax.swing.JButton();
        layout2Button = new javax.swing.JButton();
        scriptButton = new javax.swing.JToggleButton();
        jMenuBar1 = new javax.swing.JMenuBar();
        jMenu1 = new javax.swing.JMenu();
        jMenu2 = new javax.swing.JMenu();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jButton2.setText("Stop Server");
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });
        jPanel1.add(jButton2, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 40, 400, 40));

        startServerButton.setText("Start Server");
        startServerButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                startServerButtonActionPerformed(evt);
            }
        });
        jPanel1.add(startServerButton, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 400, 40));

        cliearComponentsButton.setText("Clear Components");
        cliearComponentsButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cliearComponentsButtonActionPerformed(evt);
            }
        });
        jPanel1.add(cliearComponentsButton, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 80, 400, 40));

        jButton4.setText("Desktop Client");
        jButton4.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton4ActionPerformed(evt);
            }
        });
        jPanel1.add(jButton4, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 120, 210, 40));

        jButton5.setText("VR Client");
        jButton5.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton5ActionPerformed(evt);
            }
        });
        jPanel1.add(jButton5, new org.netbeans.lib.awtextra.AbsoluteConstraints(210, 120, 190, 40));

        layout1Button.setText("Layout 1");
        layout1Button.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                layout1ButtonActionPerformed(evt);
            }
        });
        jPanel1.add(layout1Button, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 160, 140, 40));

        layout2Button.setText("Layout 2");
        layout2Button.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                layout2ButtonActionPerformed(evt);
            }
        });
        jPanel1.add(layout2Button, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 160, 130, 40));

        scriptButton.setText("Script");
        scriptButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                scriptButtonActionPerformed(evt);
            }
        });
        jPanel1.add(scriptButton, new org.netbeans.lib.awtextra.AbsoluteConstraints(270, 160, 130, 40));

        getContentPane().add(jPanel1, java.awt.BorderLayout.CENTER);

        jMenu1.setText("File");
        jMenuBar1.add(jMenu1);

        jMenu2.setText("Edit");
        jMenuBar1.add(jMenu2);

        setJMenuBar(jMenuBar1);

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void startServerButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_startServerButtonActionPerformed
             
new Thread(new Runnable(){
public void run(){
  server.server_Start(); 
  socketServer.server_Start();
  startServerButton.setText("Started");
}
}).start();

   new Thread(new Runnable(){
public void run(){
   
 
}
}).start();
     
    }//GEN-LAST:event_startServerButtonActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
       server.server_stop();
       socketServer.stop();
    }//GEN-LAST:event_jButton2ActionPerformed

    private void cliearComponentsButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cliearComponentsButtonActionPerformed
        this.connectToServer();
                new Thread(new Runnable(){
public void run(){
helper.deleteAllComponents();   

//clear also the orders map
helper.getEHBOrdersMap().clear();

        shutdown();
}
}).start();
  
        
    }//GEN-LAST:event_cliearComponentsButtonActionPerformed

    private void layout1ButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_layout1ButtonActionPerformed
//      if(helper == null)
           this.connectToServer();
        
        new Thread(new Runnable(){
public void run(){
  new ImportGEXF(helper,"./CeMAT_Demo_Layout.gexf");
shutdown();
}
}).start();
  
    }//GEN-LAST:event_layout1ButtonActionPerformed

    private void jButton4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton4ActionPerformed
    
      
      
new Thread(new Runnable(){
public void run(){
    VisuClient  visuClient = new VisuClient();
       visuClient.setSettings(visuClient.getAndSetSettings());
 visuClient.start();
}
}).start();
   
    }//GEN-LAST:event_jButton4ActionPerformed

    private void jButton5ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton5ActionPerformed
          
new Thread(new Runnable(){
public void run(){
    VisuClient  visuClient = new VisuClient();
       visuClient.setSettings(visuClient.getAndSetSettings());
 visuClient.start();
}
}).start();
    }//GEN-LAST:event_jButton5ActionPerformed

    private void layout2ButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_layout2ButtonActionPerformed
           this.connectToServer();
        
        new Thread(new Runnable(){
public void run(){
  new ImportGEXF(helper,"./CeMAT_Demo_Layout2.gexf");
shutdown();
}
}).start();
    }//GEN-LAST:event_layout2ButtonActionPerformed


    private void scriptButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_scriptButtonActionPerformed

        if(scriptButton.isSelected()){ 

             new Thread(new Runnable(){
public void run(){  
    CeMAT_StaplerScript  script = new CeMAT_StaplerScript();
        script.startTest(1);
}
}).start();
        }
        else{  
//            script.execute();
        }   
    
    }//GEN-LAST:event_scriptButtonActionPerformed

    
  

    public void connectToServer() {
        //conf file for haselcast
        
        client = getHaselcastClient();
       helper = getHelper();
    }
   
    public VisuHelper getHelper() {
      VisuHelper  helper = new VisuHelper(this.client,true,false);
        return helper;
    }
       
    public HazelcastInstance getHaselcastClient() {

        Properties globalProps = new Properties();
        try {
            globalProps.load(new FileReader("./prop.properties"));
        } catch (FileNotFoundException ex) {
//            Exceptions.printStackTrace(ex);
        } catch (IOException ex) {
//            Exceptions.printStackTrace(ex);
        }
        String serverAddress = globalProps.getProperty("hazelcast.client.addresses");
        if (serverAddress == null || serverAddress.equals("")) {
            throw new IllegalStateException("Could not find server adress");
        } else {
            System.out.println("CONNECTING TO SERVER " + serverAddress);
        }

        ClientConfig clientConfig = new ClientConfig();

        clientConfig.addAddress(serverAddress);

        clientConfig.setSmartRouting(true);
        clientConfig.setRedoOperation(true);
        client = HazelcastClient.newHazelcastClient(clientConfig);
//        client = Hazelcast.newHazelcastInstance(this.fileBuild(propertiesFile));

        return client;
    }

    public void shutdown() {
        client.shutdown();
    }

    public void sleep(long millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException ex) {
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(KoDeMatManager.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(KoDeMatManager.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(KoDeMatManager.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(KoDeMatManager.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new KoDeMatManager().setVisible(true);
            }
        });
    }
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton cliearComponentsButton;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton4;
    private javax.swing.JButton jButton5;
    private javax.swing.JMenu jMenu1;
    private javax.swing.JMenu jMenu2;
    private javax.swing.JMenuBar jMenuBar1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JButton layout1Button;
    private javax.swing.JButton layout2Button;
    private javax.swing.JToggleButton scriptButton;
    private javax.swing.JButton startServerButton;
    // End of variables declaration//GEN-END:variables
}
