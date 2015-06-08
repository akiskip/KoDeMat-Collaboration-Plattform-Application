
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["preface.html#preface"] = "Preface";
index.add({
    url: "preface.html#preface",
    title: "Preface",
    body: "# Preface  Welcome to the Hazelcast Reference Manual. This manual includes concepts, instructions and samples to guide you on how to use Hazelcast and build Hazelcast applications.  As the reader of this manual, you must be familiar with the Java programming language and you should have installed your preferred IDE.  "
});

documentTitles["preface.html#product-naming"] = "Product Naming";
index.add({
    url: "preface.html#product-naming",
    title: "Product Naming",
    body: "##### Product Naming  Throughout this manual:  - **Hazelcast** refers to the open source edition of Hazelcast in-memory data grid middleware. It is also the name of the company providing the Hazelcast product. - **Hazelcast Enterprise** refers to the commercial edition of Hazelcast.  "
});

documentTitles["preface.html#licensing"] = "Licensing";
index.add({
    url: "preface.html#licensing",
    title: "Licensing",
    body: "##### Licensing  Hazelcast is free provided under the Apache 2 license. Hazelcast Enterprise is commercially licensed by Hazelcast, Inc.  For more detailed information on licensing, please see the [License Questions appendix](#license-questions).  "
});

documentTitles["preface.html#trademarks"] = "Trademarks";
index.add({
    url: "preface.html#trademarks",
    title: "Trademarks",
    body: "##### Trademarks  Hazelcast is a registered trademark of Hazelcast, Inc. All other trademarks in this manual are held by their respective owners.    "
});

documentTitles["preface.html#customer-support"] = "Customer Support";
index.add({
    url: "preface.html#customer-support",
    title: "Customer Support",
    body: "##### Customer Support  Support for Hazelcast is provided via [GitHub](https://github.com/hazelcast/hazelcast/issues), [Mail Group](https://groups.google.com/forum/#!forum/hazelcast) and [StackOverflow](http://www.stackoverflow.com).   For information on support for Hazelcast Enterprise, please see [hazelcast.com/pricing](http://hazelcast.com/pricing/).  "
});

documentTitles["preface.html#contributing-to-hazelcast"] = "Contributing to Hazelcast";
index.add({
    url: "preface.html#contributing-to-hazelcast",
    title: "Contributing to Hazelcast",
    body: "##### Contributing to Hazelcast  You can contribute to the Hazelcast code, report a bug or request an enhancement. Please see the following resources.  - [Developing with Git](https://hazelcast.atlassian.net/wiki/display/COM/Developing+with+Git): Document that explains the branch mechanism of Hazelcast and how to request changes. - [Hazelcast Contributor Agreement form](https://hazelcast.atlassian.net/wiki/display/COM/Hazelcast+Contributor+Agreement): Form that each contributing developer needs to fill and send back to Hazelcast. - [Hazelcast on GitHub](https://github.com/hazelcast/hazelcast): Hazelcast repository where the code is developed, issues and pull requests are managed.   "
});

documentTitles["preface.html#typographical-conventions"] = "Typographical Conventions";
index.add({
    url: "preface.html#typographical-conventions",
    title: "Typographical Conventions",
    body: "##### Typographical Conventions  Below table shows the conventions used in this manual.  |Convention|Description| |:-|:-| |**bold font**| - Indicates part of a sentence that require the reader's specific attention. &lt;br&gt; - Also indicates property/parameter values.| |*italic font*|- When italicized words are enclosed with \&quot;&lt;\&quot; and \&quot;&gt;\&quot;, indicates a variable in command or code syntax that you must replace, e.g. `hazelcast-&lt;`*version*`&gt;.jar`. &lt;br&gt; - Note and Related Information text is in italics.| |`monospace`|- Indicates files, folders, class and library names, code snippets, and inline code words in a sentence.| |***RELATED INFORMATION***|- Indicates a resource that is relevant to the topic, usually with a link or cross-reference.| |![image](images/NoteSmall.jpg) ***NOTE***| Indicates information that is of special interest or importance, e.g. an additional action required only in certain circumstances.| |element &amp; attribute|Mostly used in the context of declarative configuration, i.e. configuration performed by the Hazelcast XML file.  Element refers to an XML tag used to configure a Hazelcast feature. Attribute is a parameter owned by an element, contributing into the declaration of that element's configuration. Please see the following example.&lt;br&gt;&lt;/br&gt;`&lt;port port-count=\&quot;100\&quot;&gt;5701&lt;/port&gt;`&lt;br&gt;&lt;/br&gt; In this example, `port-count` is an **attribute** of the `port` **element**.  &lt;br&gt;&lt;/br&gt;        "
});



documentTitles["whatsnew.html#whats-new-in-hazelcast-34"] = "What's New in Hazelcast 3.4";
index.add({
    url: "whatsnew.html#whats-new-in-hazelcast-34",
    title: "What's New in Hazelcast 3.4",
    body: "# What's New in Hazelcast 3.4    "
});

documentTitles["whatsnew.html#release-notes"] = "Release Notes";
index.add({
    url: "whatsnew.html#release-notes",
    title: "Release Notes",
    body: "## Release Notes  "
});

documentTitles["whatsnew.html#new-features"] = "New Features";
index.add({
    url: "whatsnew.html#new-features",
    title: "New Features",
    body: "### New Features This section provides the new features introduced with Hazelcast 3.4 release.   - **High-Density Memory Store**: Used with the Hazelcast JCache implementation, High-Density Memory Store is introduced with this release. High-Density Memory Store is the enterprise grade backend storage solution. This solution minimizes the garbage collection pressure and thus enables predictable application scaling and boosts performance. For more information, please see [High-Density Memory Store section](#high-density-memory-store). - **Jetty Based Session Replication**: We have introduced Jetty-based web session replication with this release. This is a feature of Hazelcast Enterprise. It enables session replication for Java EE web applications that are deployed into Jetty servlet containers, without having to perform any changes in those applications. For more information, please see [Jetty Based Web Session Replication section](#jetty-based-web-session-replication). - **Hazelcast Configuration Import**: This feature, which is an element named `&lt;import&gt;`, enables you to compose the Hazelcast declarative (XML) configuration file out of smaller configuration snippets. For more information, please see [Composing XML Configuration section](#composing-xml-configuration). - **Back Pressure**: Starting with this release, Hazelcast provides the back pressure feature which prevents the overload caused by pending asynchronous backups. For more information, please see [Back Pressure section](#back-pressure).       "
});



documentTitles["whatsnewimprovements.html#enhancements"] = "Enhancements";
index.add({
    url: "whatsnewimprovements.html#enhancements",
    title: "Enhancements",
    body: "### Enhancements  **3.4.2 Enhancements**  This section lists the enhancements performed for Hazelcast 3.4.2 release.  - The method `contains` for ISet scans all the items [[#4620]](https://github.com/hazelcast/hazelcast/issues/4620).   **3.4.1 Enhancements**  This section lists the enhancements performed for Hazelcast 3.4.1 release.  - When the near cache is used, cached entries from the remote node are evicted by idleness, despite being read [[#4358]](https://github.com/hazelcast/hazelcast/issues/4358). - HazelcastQueryResultsRegion is never expired/evicted. The cleanup() method in LocalRegionCache for the query cache instances is never called, thus the query cache lives forever [[#3882]](https://github.com/hazelcast/hazelcast/issues/3882).  **3.4 Enhancements**  This section lists the enhancements performed for Hazelcast 3.4 release.  - Event packets sent to the client do not have \&quot;partitionId\&quot; [[#4071]](https://github.com/hazelcast/hazelcast/issues/4071). - Spring Configuration for ReplicatedMap is Missing [[#3966]](https://github.com/hazelcast/hazelcast/issues/3966). - `NodeMulticastListener` floods log file with INFO-level messages when debug is enabled [[#3787]](https://github.com/hazelcast/hazelcast/issues/3787). - A Hazelcast client should not be a `HazelcastInstance`. It should be a \&quot;factory\&quot; and this factory should be able to shut down Hazelcast clients. [[#3781]](https://github.com/hazelcast/hazelcast/issues/3781). - `InvalidateSessionAttributesEntryProcessor` could avoid creating strings at every call to process [[#3767]](https://github.com/hazelcast/hazelcast/issues/3767). - The timeout for `SocketConnector` cannot be configured [[#3613]](https://github.com/hazelcast/hazelcast/issues/3613). - The method `MultiMap.get()` returns `collection`, but this method should return the correct collection type (`Set` or `List`) [[#3214]](https://github.com/hazelcast/hazelcast/issues/3214). - `HazelcastConnection` is not aligned with `HazecastInstance` [[#2997]](https://github.com/hazelcast/hazelcast/issues/2997). - Support for Log4j 2.x has been implemented [[#2345]](https://github.com/hazelcast/hazelcast/issues/2345). - Management Center console behavior on node shutdown [[#2215]](https://github.com/hazelcast/hazelcast/issues/2215). - When `queue-store` is not enabled, `QueueStoreFactory` should not be instantiated [[#1906]](https://github.com/hazelcast/hazelcast/issues/1906). - Management Center should be able to say when cluster is safe and all backups are up to date [[#963]](https://github.com/hazelcast/hazelcast/issues/963).  "
});



documentTitles["whatsnewfixes.html#fixes"] = "Fixes";
index.add({
    url: "whatsnewfixes.html#fixes",
    title: "Fixes",
    body: "### Fixes   **3.4.2 Fixes**  This section lists issues solved for Hazelcast 3.4.2 release.  - While executing unit tests, `SlowOperationDetectorThread` and `CleanupThread` may not be terminated before the next test is started [[#4757]](https://github.com/hazelcast/hazelcast/issues/4757). - When multiple nodes join sequentially after partitions are assigned/distributed, old nodes fail to clean backup replicas larger than the configured backup count. This causes a memory leak. Also, when multiple nodes leave the cluster at the same time (or in a short period), the new partition owner looses some partition replica versions and this causes backup nodes for those specific replica indexes to fail synchronizing data from the owner node, although the owner node holds the whole partition data [[#4687]](https://github.com/hazelcast/hazelcast/issues/4687). - After cluster merges due to a network-split, Hazelcast infinitely logs `WaitNotifyServiceImpl$WaitingOp::WrongTargetException` warnings [[#4676]](https://github.com/hazelcast/hazelcast/issues/4676). - A strange `mapName` parameter occurred when using wildcard configuration for a custom `MapStoreFacory` [[#4667]](https://github.com/hazelcast/hazelcast/issues/4667). - The method `IExecutorService.submitToKeyOwner` encountered two errors: the `onResponse` method is invoked with null and a cast exception is thrown in a Hazelcast thread [[#4627]](https://github.com/hazelcast/hazelcast/issues/4627). - The method `init` in an implementation of the `MapLoaderLifecyleSupport` interface is not invoked [[#4623]](https://github.com/hazelcast/hazelcast/issues/4623). - The method `readData` in `NearCacheConfig` reads the `maxSize` twice [[#4609]](https://github.com/hazelcast/hazelcast/issues/4609). - The system property `hazelcast.client.request.retry.count` is not handled properly [[#4592]](https://github.com/hazelcast/hazelcast/issues/4592).   **3.4.1 Fixes**  This section lists issues solved for Hazelcast 3.4.1 release.  - IMap.getAll does not put data to RecordStore upon loading from map store [[#4458]](https://github.com/hazelcast/hazelcast/issues/4458). - In the ClientNearCache class, there is a comparator which is used in a TreeSet to find the entries that should be evicted. If there are CacheRecords with the same hit count or lastAccessTime (depending on the policy, i.e. LFU or LRU), all of them should be evicted [[#4451]](https://github.com/hazelcast/hazelcast/issues/4451). - When using write-behind and the entries, which have not been stored yet, are evicted, duplicate calls to the map store is made [[#4448]](https://github.com/hazelcast/hazelcast/issues/4448). - There is a memory leak caused by the empty await queues in WaitNotifyService. When more then one thread try to lock on an IMap key at the same time, a memory leak occurs [[#4432]](https://github.com/hazelcast/hazelcast/issues/4432). - ClientListener is not configurable via ListenerConfig. HazelcastInstanceImpl.initializeListeners(Config config) does not honor ClientListener instances [[#4429]](https://github.com/hazelcast/hazelcast/issues/4429). - The CacheConfig(CacheSimpleConfig simpleConfig) constructor is broken. Variable assignments should be fixed [[#4423]](https://github.com/hazelcast/hazelcast/issues/4423). - In ReplicatedMap, the containsKey method should return false on the removed keys [[#4420]](https://github.com/hazelcast/hazelcast/issues/4420). - During the Hazelcast.shutdownAll() process, LockService is shut down before the MapService and this may cause null pointer exception if there is something like isLocked check in some internal IMap operations [[#4382]](https://github.com/hazelcast/hazelcast/issues/4382). - Hazelcast clients shut down in the case of an IP change of one or more of the configured node (DNS) addresses [[#4349]](https://github.com/hazelcast/hazelcast/issues/4349). - Write-behind system coalesces all operations on a specific key in a configured write-delay-seconds window and it should also store only the latest change on that key in that window. Problem with the current behavior is; a continuously updated key may not be persisted ever due to the shifted store time during the updates [[#4341]](https://github.com/hazelcast/hazelcast/issues/4341). - Issue with contains pattern in Config.getXXXConfig(). Since the actual wildcard search always does a contains matching, you cannot set a configuration for startsWith, for instance [[#4315]](https://github.com/hazelcast/hazelcast/issues/4315). - ReplicatedMapMBean is not present in JMX [[#4173]](https://github.com/hazelcast/hazelcast/issues/4173).  **3.4 Fixes**  This section lists issues solved for **Hazelcast 3.4** release.  - Deadlock happens in MapReduce implementation when there is a high load on the system. The issue has been solved by offloading Distributed MapReduce result collection to the async executor [[#4238]](https://github.com/hazelcast/hazelcast/issues/4238). - When the class `ClientExecutorServiceSubmitTest.java` is compiled using the Eclipse compiler, it gives a compile error: \&quot;*The method submit(Runnable, ExecutionCallback) is ambiguous for the type IExecutorService*\&quot;. The reason is that the `IExecutorService.java` class does not have some generics. The issue has been solved by adding these missing generics to the `IExecutorService.java` class [[#4234]](https://github.com/hazelcast/hazelcast/issues/4234). - JCache declarative listener registration does not work [[#4215]](https://github.com/hazelcast/hazelcast/issues/4215). - JCache evicts the records which are not expired yet. To solve this issue, the `clear` method should be removed that runs when the size is smaller than the minimum eviction element count (`MIN_EVICTION_ELEMENT_COUNT`) [[#4124]](https://github.com/hazelcast/hazelcast/issues/4124). - Hazelcast Enterprise Native Memory operations should be updated in relation with the Hazelcast sync listener changes [[#4089]](https://github.com/hazelcast/hazelcast/issues/4089). - The completion listener (JCache) relies on event ordering but if the completion listener is registered in another node then event ordering is not guaranteed [[#4073]](https://github.com/hazelcast/hazelcast/issues/4073). - AWS joiner classname should be fixed since EC2 discovery is not working after the restructure [[#4025]](https://github.com/hazelcast/hazelcast/issues/4025). - If an IMap has a near cache configured, accessing the near cache via the method `get(key)` does not count as an access to the underlying IMap. The near cache has its own `max-idle-seconds` element. However, if an entry is expired/evicted in the IMap, it also causes a near cache removal operation for the entry regardless of the `max-idle-seconds` of that entry in the near cache. The entry expires and is evicted even if the near cache is being hit constantly. When a near cache is hit, the underlying map should reset the idle time for that key [[#4016]](https://github.com/hazelcast/hazelcast/issues/4016). - Getting a pre-configured Cache instance is not working as expected [[#4009]](https://github.com/hazelcast/hazelcast/issues/4009). - Bounded Queue section in the Reference Manual is unclear and wrong [[#3995]](https://github.com/hazelcast/hazelcast/issues/3995). - The method `checkFullyProcessed` of MapReduce throws null pointer exception. The reason may be that multiple threads attempt to start the final processing state in the JobSupervisor [[#3952]](https://github.com/hazelcast/hazelcast/issues/3952). - Merge operation after a split brain syndrome does not guarantee that the merging is over [[#3863]](https://github.com/hazelcast/hazelcast/issues/3863). - When a client with near cache configuration enabled is shut down, `RejectedExecutionException` is thrown [[#3669]](https://github.com/hazelcast/hazelcast/issues/3669). - In Hazelcast `IMap` and `TransactionalMap`, read-only operations such as `get()`, `containsKey()`, `keySet()`, and `containsValue()` break the transaction atomicity [[#3191]](https://github.com/hazelcast/hazelcast/issues/3191). - Documentation should clearly list features of and differences between native clients [[#2385]](https://github.com/hazelcast/hazelcast/issues/2385). - Sections of Hazelcast configuration should be able to be imported so that these sections can be shared between other Hazelcast configurations [[#406]](https://github.com/hazelcast/hazelcast/issues/406)."
});



documentTitles["upgradingfrom2x.html#upgrading-hazelcast"] = "Upgrading Hazelcast";
index.add({
    url: "upgradingfrom2x.html#upgrading-hazelcast",
    title: "Upgrading Hazelcast",
    body: "## Upgrading Hazelcast   "
});

documentTitles["upgradingfrom2x.html#upgrading-from-2x"] = "Upgrading from 2.x";
index.add({
    url: "upgradingfrom2x.html#upgrading-from-2x",
    title: "Upgrading from 2.x",
    body: "### Upgrading from 2.x   In this section, we list the changes what users should take into account before upgrading to latest Hazelcast from 2.x.  - **Removal of deprecated static methods:** The static methods of Hazelcast class reaching Hazelcast data components have been removed. The functionality of these methods can be reached from HazelcastInstance interface. Namely you should replace following:  ```java Map&lt;Integer, String&gt; customers = Hazelcast.getMap( \&quot;customers\&quot; ); ```  with  ```java HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); // or if you already started an instance named \&quot;instance1\&quot; // HazelcastInstance hazelcastInstance = Hazelcast.getHazelcastInstanceByName( \&quot;instance1\&quot; ); Map&lt;Integer, String&gt; customers = hazelcastInstance.getMap( \&quot;customers\&quot; ); ``` - **Removal of lite members:** With 3.0 there will be no member type as lite member. As 3.0 clients are smart client that they know in which node the data is located, you can replace your lite members with native clients.  - **Renaming \&quot;instance\&quot; to \&quot;distributed object\&quot;:** Before 3.0 there was a confusion for the term \&quot;instance\&quot;. It was used for both the cluster members and the distributed objects (map, queue, topic, etc. instances). Starting 3.0, the term instance will be only used for Hazelcast instances, namely cluster members. We will use the term \&quot;distributed object\&quot; for map, queue, etc. instances. So you should replace the related methods with the new renamed ones. As 3.0 clients are smart client that they know in which node the data is located, you can replace your lite members with native clients.  ```java public static void main( String[] args ) throws InterruptedException {   HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();   IMap map = hazelcastInstance.getMap( \&quot;test\&quot; );   Collection&lt;Instance&gt; instances = hazelcastInstance.getInstances();   for ( Instance instance : instances ) {     if ( instance.getInstanceType() == Instance.InstanceType.MAP ) {       System.out.println( \&quot;There is a map with name: \&quot; + instance.getId() );     }   } } ```  with  ```java public static void main( String[] args ) throws InterruptedException {   HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();   IMap map = hz.getMap( \&quot;test\&quot; );   Collection&lt;DistributedObject&gt; objects = hazelcastInstance.getDistributedObjects();   for ( DistributedObject distributedObject : objects ) {     if ( distributedObject instanceof IMap ) {       System.out.println( \&quot;There is a map with name: \&quot; + distributedObject.getName() );     }   } } ```  - **Package structure change:** PartitionService has been moved to package `com.hazelcast.core` from `com.hazelcast.partition`.   - **Listener API change:** Before 3.0, `removeListener` methods was taking the Listener object as parameter. But, it causes confusion as same listener object may be used as parameter for different listener registrations. So we have changed the listener API. `addListener` methods return you an unique ID and you can remove listener by using this ID. So you should do following replacement if needed:  ```java IMap map = hazelcastInstance.getMap( \&quot;map\&quot; ); map.addEntryListener( listener, true ); map.removeEntryListener( listener ); ```      with 	 ```java IMap map = hazelcastInstance.getMap( \&quot;map\&quot; ); String listenerId = map.addEntryListener( listener, true ); map.removeEntryListener( listenerId ); ```  - **IMap changes:** - `tryRemove(K key, long timeout, TimeUnit timeunit)` returns boolean indicating whether operation is successful. - `tryLockAndGet(K key, long time, TimeUnit timeunit)` is removed. - `putAndUnlock(K key, V value)` is removed. - `lockMap(long time, TimeUnit timeunit)` and `unlockMap()` are removed. - `getMapEntry(K key)` is renamed as `getEntryView(K key)`. The returned object's type, MapEntry class is renamed as EntryView. - There is no predefined names for merge policies. You just give the full class name of the merge policy implementation.  ```xml &lt;merge-policy&gt;com.hazelcast.map.merge.PassThroughMergePolicy&lt;/merge-policy&gt; ```  Also MergePolicy interface has been renamed to MapMergePolicy and also returning null from the implemented `merge()` method causes the existing entry to be removed.  - **IQueue changes:** There is no change on IQueue API but there are changes on how `IQueue` is configured. With Hazelcast 3.0 there will not be backing map configuration for queue. Settings like backup count will be directly configured on queue config. For queue configuration details, please see the [Queue section](#queue). - **Transaction API change:** In Hazelcast 3.0, transaction API is completely different. Please see the [Transactions chapter](#transactions). - **ExecutorService API change:** Classes MultiTask and DistributedTask have been removed. All the functionality is supported by the newly presented interface IExecutorService. Please see the [Executor Service section](#executor-service). - **LifeCycleService API:** The lifecycle has been simplified. `pause()`, `resume()`, `restart()` methods have been removed. - **AtomicNumber:** `AtomicNumber` class has been renamed to `IAtomicLong`. - **ICountDownLatch:** `await()` operation has been removed. We expect users to use `await()` method with timeout parameters. - **ISemaphore API:** The `ISemaphore` has been substantially changed. `attach()`, `detach()` methods have been removed. - In 2.x releases, the default value for `max-size` eviction policy was **cluster_wide_map_size**. In 3.x releases, default is **PER_NODE**. After upgrading, the `max-size` should be set according to this new default, if it is not changed. Otherwise, it is likely that OutOfMemory exception may be thrown.  "
});

documentTitles["upgradingfrom2x.html#upgrading-from-3x"] = "Upgrading from 3.x";
index.add({
    url: "upgradingfrom2x.html#upgrading-from-3x",
    title: "Upgrading from 3.x",
    body: "### Upgrading from 3.x   In this section, we list the changes what users should take into account before upgrading to latest Hazelcast from 3.x versions.  - **Introducing the `spring-aware` element:** By default, Hazelcast uses `SpringManagedContext` to scan `SpringAware` annotations. This may cause some performance penalties even if the users do not use `SpringAware`.  By introducing the `spring-aware` element, now it is possible to disable it by adding the `&lt;hz:spring-aware enabled=\&quot;false\&quot;/&gt;` tag to the configuration. Please see the [Spring Integration section](#spring-integration).       "
});



documentTitles["documentrevisionhistory.html#document-revision-history"] = "Document Revision History";
index.add({
    url: "documentrevisionhistory.html#document-revision-history",
    title: "Document Revision History",
    body: "## Document Revision History  |Chapter|Section|Description| |:-------|:-------|:-----------| |[Chapter 1 - Preface](#preface)||Added as a new chapter as the front matter of this manual.| |[Chapter 2 - What's New in Hazelcast 3.4](#what-s-new-in-hazelcast-3-4)|[Upgrading from 3.x](#upgrading-from-3-x)|Added as a new section.| |[Chapter 4 - Overview](#overview)||Separated from [Getting Started](#getting-started) as a new chapter.| ||[Data Partitioning](#data-partitioning)|Added as a new section explaining how the partitioning works in Hazelcast.| |[Chapter 5 - Hazelcast Clusters](#hazelcast-clusters)||Added as a new chapter to explain the Hazelcast clusters and their features.| |[Chapter 6 - Distributed Data Structures](#distributed-data-structures)|[Map Persistence](#map-persistence)|Thread information related to MapLoader interface added as a note. ||[Eviction](#eviction)|New `max-size` policies `FREE_HEAP_SIZE` and `FREE_HEAP_PERCENTAGE` descriptions added. ||[Bounded Queue](#bounded-queue)|Whole section modified for a more cleaner description.| ||[Queue Configuration](#queue-configuration)|Added as a new section to explain the important elements to configure a distributed queue.| |[Chapter 7 - Distributed Events](#distributed-events)||The whole chapter improved by adding sections describing each listener.| |[Chapter 12 - Hazelcast JCache](#hazelcast-jcache)||Improved the whole chapter by adding an overview to JCache, an extensive description of the JCache API and Hazelcast's JCache extension, namely ICache.| ||[JCache Eviction](#jcache-eviction)|Added as a new section. |[Chapter 13 - Integrated Clustering](#integrated-clustering)|[Jetty Based Web Session Replication](#jetty-based-web-session-replication)|Added as a new section to explain replicating sessions for Jetty based web applications.| ||[Hibernate Second Level Cache](#hibernate-second-level-cache)|Added the last paragraph to the section [HazelcastLocalCacheRegionFactory](#hazelcastlocalcacheregionfactory). This paragraph describes eviction support when Hazelcast is configured for Hibernate using local cache region factory.| |[Chapter 14 - Storage](#storage)|[High-Density Memory Store](#high-density-memory-store)|Added as a new section.| |[Chapter 15 - Clients](#clients)|[Java Client](#java-client)|Added information related to load balancer configuration.| |[Chapter 19 - Performance](#performance)|[Back Pressure](#back-pressure)|Added as a new section.| ||[Hazelcast Performance on AWS](#hazelcast-performance-on-aws)|Added as a new section that provides best practices to improve the Hazelcast performance on Amazon Web Service.| |[Chapter 20 - Hazelcast Simulator](#hazelcast-simulator)||Added as a new chapter providing comprehensive information on the Hazelcast Simulator feature. |[Chapter 22 - Hazelcast Configuration](#hazelcast-configuration)|[Composing XML Configuration](#composing-xml-configuration)|Added as a new section that explains how to compose a Hazelcast XML Configuration file from multiple XML configuration snippets.| |||The whole (formerly known as the *Configuration* chapter) chapter redesigned to include all the Hazelcast configuration elements and attributes.| |[Chapter 24 - License Questions](#license-questions)||Added as a new chapter describing the license information of dependencies.| |[Chapter 25 - FAQ](#frequently-asked-questions)||Updated with new questions related to socket communications, the OOM exception \&quot;unable to create new native thread\&quot;, and virtualization to be used on AWS.| |[Chapter 26 - Glossary](#glossary)||Added as a new chapter.|       &lt;br&gt; &lt;/br&gt;   "
});



documentTitles["gettingstarted.html#getting-started"] = "Getting Started";
index.add({
    url: "gettingstarted.html#getting-started",
    title: "Getting Started",
    body: "# Getting Started  "
});

documentTitles["gettingstarted.html#installation"] = "Installation";
index.add({
    url: "gettingstarted.html#installation",
    title: "Installation",
    body: "## Installation  "
});

documentTitles["gettingstarted.html#hazelcast"] = "Hazelcast";
index.add({
    url: "gettingstarted.html#hazelcast",
    title: "Hazelcast",
    body: "### Hazelcast  To download and install Hazelcast, you only need to:  -   Download `hazelcast-&lt;`*version*`&gt;.zip` from [www.hazelcast.org](http://www.hazelcast.org/download/).  -   Unzip `hazelcast-&lt;`*version*`&gt;.zip` file.  -   Add `hazelcast-&lt;`*version*`&gt;.jar` file into your classpath.   As an alternative to downloading and installing Hazelcast, you can find Hazelcast in standard Maven repositories. If your project uses Maven, you do not need to add additional repositories to your `pom.xml` or add `hazelcast-&lt;`*version*`&gt;.jar` file into your classpath (Maven does that for you). Just add the following lines to your `pom.xml`:  ```xml &lt;dependencies&gt; 	&lt;dependency&gt; 		&lt;groupId&gt;com.hazelcast&lt;/groupId&gt; 		&lt;artifactId&gt;hazelcast&lt;/artifactId&gt; 		&lt;version&gt;3.4&lt;/version&gt; 	&lt;/dependency&gt; &lt;/dependencies&gt; ```  "
});



documentTitles["installinghzenterprise.html#hazelcast-enterprise"] = "Hazelcast Enterprise";
index.add({
    url: "installinghzenterprise.html#hazelcast-enterprise",
    title: "Hazelcast Enterprise",
    body: "### Hazelcast Enterprise  There are two Maven repositories defined for Hazelcast Enterprise:  ``` &lt;repository&gt;        &lt;id&gt;Hazelcast Private Snapshot Repository&lt;/id&gt;        &lt;url&gt;https://repository-hazelcast-l337.forge.cloudbees.com/snapshot/&lt;/url&gt; &lt;/repository&gt; &lt;repository&gt;         &lt;id&gt;Hazelcast Private Release Repository&lt;/id&gt;         &lt;url&gt;https://repository-hazelcast-l337.forge.cloudbees.com/release/&lt;/url&gt; &lt;/repository&gt; ```  Hazelcast Enterprise customers may also define dependencies, a sample of which is shown below.  ``` &lt;dependency&gt;      &lt;groupId&gt;com.hazelcast&lt;/groupId&gt;      &lt;artifactId&gt;hazelcast-enterprise-tomcat6&lt;/artifactId&gt;      &lt;version&gt;${project.version}&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt;      &lt;groupId&gt;com.hazelcast&lt;/groupId&gt;      &lt;artifactId&gt;hazelcast-enterprise-tomcat7&lt;/artifactId&gt;      &lt;version&gt;${project.version}&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt;       &lt;groupId&gt;com.hazelcast&lt;/groupId&gt;       &lt;artifactId&gt;hazelcast-enterprise&lt;/artifactId&gt;       &lt;version&gt;${project.version}&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt;       &lt;groupId&gt;com.hazelcast&lt;/groupId&gt;       &lt;artifactId&gt;hazelcast-enterprise-all&lt;/artifactId&gt;       &lt;version&gt;${project.version}&lt;/version&gt; &lt;/dependency&gt; ```  "
});

documentTitles["installinghzenterprise.html#setting-the-license-key-for-hazelcast-enterprise"] = "Setting the License Key for Hazelcast Enterprise";
index.add({
    url: "installinghzenterprise.html#setting-the-license-key-for-hazelcast-enterprise",
    title: "Setting the License Key for Hazelcast Enterprise",
    body: "##### Setting the License Key for Hazelcast Enterprise  To use Hazelcast Enterprise, you need to set the license key in configuration.  -   **Declarative Configuration**  ```xml &lt;hazelcast&gt;   ...   &lt;license-key&gt;HAZELCAST_ENTERPRISE_LICENSE_KEY&lt;/license-key&gt;   ... &lt;/hazelcast&gt; ```  -   **Programmatic Configuration**  ```java Config config = new Config(); config.setLicenseKey( \&quot;HAZELCAST_ENTERPRISE_LICENSE_KEY\&quot; ); ```  -   **Spring XML Configuration**  ```xml &lt;hz:config&gt;   ...   &lt;hz:license-key&gt;HAZELCAST_ENTERPRISE_LICENSE_KEY&lt;/hz:license-key&gt;   ... &lt;/hz:config&gt; ```  -   **JVM System Property**  ```plain -Dhazelcast.enterprise.license.key=HAZELCAST_ENTERPRISE_LICENSE_KEY ```  &lt;br&gt; &lt;/br&gt;   "
});



documentTitles["startingclusterclient.html#starting-the-cluster-and-client"] = "Starting the Cluster and Client";
index.add({
    url: "startingclusterclient.html#starting-the-cluster-and-client",
    title: "Starting the Cluster and Client",
    body: "## Starting the Cluster and Client   Having installed hazelcast, you can get started.   In this short tutorial, we will:  1. Create a simple Java application using Hazelcast distributed map and queue.  2. Run our application twice to have two nodes (JVMs) clustered.  3. Connect to our cluster from another Java application by using the Hazelcast Native Java Client API.  Let's begin.   -	The following code will start the first node, and will create and use the `customers` map and queue.  ```java import com.hazelcast.core.Hazelcast; import com.hazelcast.core.HazelcastInstance;  import java.util.Map; import java.util.Queue;  public class GettingStarted {   public static void main( String[] args ) {     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     Map&lt;Integer, String&gt; customers = hazelcastInstance.getMap( \&quot;customers\&quot; );     customers.put( 1, \&quot;Joe\&quot; );     customers.put( 2, \&quot;Ali\&quot; );     customers.put( 3, \&quot;Avi\&quot; );      System.out.println( \&quot;Customer with key 1: \&quot; + customers.get(1) );     System.out.println( \&quot;Map Size:\&quot; + hazelcastInstance.size() );      Queue&lt;String&gt; queueCustomers = hazelcastInstance.getQueue( \&quot;customers\&quot; );     queueCustomers.offer( \&quot;Tom\&quot; );     queueCustomers.offer( \&quot;Mary\&quot; );     queueCustomers.offer( \&quot;Jane\&quot; );     System.out.println( \&quot;First customer: \&quot; + queueCustomers.poll() );     System.out.println( \&quot;Second customer: \&quot;+ queueCustomers.peek() );     System.out.println( \&quot;Queue size: \&quot; + queueCustomers.size() );   } } ``` -   Run this GettingStarted class a second time to get the second node started. The nodes will form a cluster, so you should see something like this:  ``` Members [2] {   Member [127.0.0.1:5701]   Member [127.0.0.1:5702] this }                               ```  -   Now, add `hazelcast-client-`*`&lt;version&gt;`*`.jar` to your classpath. This is required to use a Hazelcast client.   -   The following code will start a Hazelcast Client, connect to our two node cluster, and print the size of our `customers` map.  ```java     package com.hazelcast.test;  import com.hazelcast.client.config.ClientConfig; import com.hazelcast.client.HazelcastClient; import com.hazelcast.core.HazelcastInstance; import com.hazelcast.core.IMap;  public class GettingStartedClient {     public static void main( String[] args ) {         ClientConfig clientConfig = new ClientConfig();         HazelcastInstance client = HazelcastClient.newHazelcastClient( clientConfig );         IMap map = client.getMap( \&quot;customers\&quot; );         System.out.println( \&quot;Map Size:\&quot; + map.size() );     } } ``` -   When you run it, you will see the client properly connecting to the cluster and printing the map size as **3**.  Hazelcast also offers a tool, **Management Center**, that enables you to monitor your cluster. To use it, deploy the `mancenter-`*`&lt;version&gt;`*`.war` included in the ZIP file to your web server. You can use it to monitor your maps, queues, and other distributed data structures and nodes. Please see the [Management Center section](#management-center) for usage explanations.   By default, Hazelcast uses Multicast to discover other nodes that can form a cluster.  If you are working with other Hazelcast developers on the same network, you may find yourself joining their clusters under the default settings.  Hazelcast provides a way to segregate clusters within the same network when using Multicast. Please see the FAQ item [How do I create separate clusters](#how-do-i-create-separate-clusters) for more information.  Alternatively, if you do not wish to use the default Multicast mechanism, you can provide a fixed list of IP addresses that are allowed to join. Please see the [Configuring TCP/IP Cluster section](#network-configuration) for more information.  &lt;br&gt; &lt;/br&gt;   ***RELATED INFORMATION***  *You can also check the video tutorials [here](http://hazelcast.org/getting-started/).*  "
});



documentTitles["configuringhazelcast.html#configuring-hazelcast"] = "Configuring Hazelcast";
index.add({
    url: "configuringhazelcast.html#configuring-hazelcast",
    title: "Configuring Hazelcast",
    body: "## Configuring Hazelcast  When Hazelcast starts up, it checks for the configuration as follows:  -	First, it looks for the `hazelcast.config` system property. If it is set, its value is used as the path. This is useful if you want to be able to change your Hazelcast configuration: you can do this because it is not embedded within the application. You can set the `config` option with the following command:   	`- Dhazelcast.config=`*`&lt;path to the hazelcast.xml&gt;`*. 	 	The path can be a normal one or a classpath reference with the prefix `CLASSPATH`. -	If the above system property is not set, Hazelcast then checks whether there is a `hazelcast.xml` file in the working directory. -	If not, then it checks whether `hazelcast.xml` exists on the classpath. -	If none of the above works, Hazelcast loads the default configuration, i.e. `hazelcast-default.xml` that comes with `hazelcast.jar`.    When you download and unzip `hazelcast-&lt;`*version*`&gt;.zip` you will see a `hazelcast.xml` in the `/bin` folder. This is the configuration XML file for Hazelcast. Part of this configuration XML is shown below.  ![](images/HazelcastXML.jpg)  For most users, default configuration should be fine. If not, you can tailor this XML file according to your needs by adding/removing/modifying properties (Declarative Configuration). Please refer to the [Configuration Properties section](#advanced-configuration-properties) for details.  Besides declarative configuration, you can configure your cluster programmatically (Programmatic Configuration). Just instantiate a `Config` object and add/remove/modify properties.  You can also use wildcards while configuring Hazelcast. Please refer to the [Using Wildcard section](#using-wildcard) for details.  &lt;br&gt;&lt;/br&gt;   ***RELATED INFORMATION***  *Please refer to the [Hazelcast Configuration chapter](#hazelcast-configuration) for more information.*  "
});



documentTitles["overview.html#overview"] = "Overview";
index.add({
    url: "overview.html#overview",
    title: "Overview",
    body: "# Overview  "
});

documentTitles["overview.html#hazelcast-overview"] = "Hazelcast Overview";
index.add({
    url: "overview.html#hazelcast-overview",
    title: "Hazelcast Overview",
    body: "## Hazelcast Overview  Hazelcast is an open source In-Memory Data Grid (IMDG).  It provides elastically scalable distributed In-Memory computing, widely recognized as the fastest and most scalable approach to application performance. Hazelcast does this in open source. More importantly, Hazelcast makes distributed computing simple by offering distributed implementations of many developer friendly interfaces from Java such as Map, Queue, ExecutorService, Lock, and JCache. For example, the Map interface provides an In-Memory Key Value store which confers many of the advantages of NoSQL in terms of developer friendliness and developer productivity.  In addition to distributing data In-Memory, Hazelcast provides a convenient set of APIs to access the CPUs in your cluster for maximum processing speed.  Hazelcast is designed to be lightweight and easy to use. Since Hazelcast is delivered as a compact library (JAR) and since it has no external dependencies other than Java, it easily plugs into your software solution and provides distributed data structures and distributed computing utilities.   Hazelcast is highly scalable and available (100% operational, never failing). Distributed applications can use Hazelcast for distributed caching, synchronization, clustering, processing, pub/sub messaging, etc. Hazelcast is implemented in Java and has clients for Java, C/C++, .NET and REST. Hazelcast also speaks memcache protocol. It plugs into Hibernate and can easily be used with any existing database system.  If you are looking for In-Memory speed, elastic scalability, and the developer friendliness of NoSQL, Hazelcast is a great choice.  ###Hazelcast is simple  Hazelcast is written in Java with no other dependencies. It exposes the same API from the familiar Java util package, exposing the same interfaces. Just add `hazelcast.jar` to your classpath, and you can quickly enjoy JVMs clustering and you can start building scalable applications.   ###Hazelcast is Peer-to-Peer  Unlike many NoSQL solutions, Hazelcast is peer-to-peer. There is no master and slave; there is no single point of failure. All nodes store equal amounts of data and do equal amounts of processing. You can embed Hazelcast in your existing application or use it in client and server mode where your application is a client to Hazelcast nodes.  ###Hazelcast is scalable  Hazelcast is designed to scale up to hundreds and thousands of nodes. Simply add new nodes and they will automatically discover the cluster and will linearly increase both memory and processing capacity. The nodes maintain a TCP connection between each other and all communication is performed through this layer.  ###Hazelcast is fast  Hazelcast stores everything in-memory. It is designed to perform very fast reads and updates.  ###Hazelcast is redundant  Hazelcast keeps the backup of each data entry on multiple nodes. On a node failure, the data is restored from the backup and the cluster will continue to operate without downtime.  ###Sharding in Hazelcast  Hazelcast shards are called Partitions. By default, Hazelcast has 271 partitions. Given a key, we serialize, hash and mode it with the number of partitions to find the partition the key belongs to. The partitions themselves are distributed equally among the members of the cluster. Hazelcast also creates the backups of partitions and distributes them among nodes for redundancy.  ***RELATED INFORMATION***  *Please refer to the [Data Partitioning section](#data-partitioning) for more information on how Hazelcast partitions your data.* &lt;br&gt;&lt;/br&gt;   ###Hazelcast Topology  If you have an application whose main focal point is asynchronous or high performance computing and lots of task executions, then embedded deployment is very useful. In this type, nodes include both the application and data. See the below illustration.  ![](images/P2Pcluster.jpg)    You can have a cluster of server nodes that can be independently created and scaled. Your clients communicate with these server nodes to reach to the data on them. Hazelcast provides native clients (Java, .NET and C++), Memcache clients and REST clients. See the below illustration.  ![](images/CSCluster.jpg)  "
});



documentTitles["whyhazelcast.html#why-hazelcast"] = "Why Hazelcast?";
index.add({
    url: "whyhazelcast.html#why-hazelcast",
    title: "Why Hazelcast?",
    body: "## Why Hazelcast?    **A Glance at Traditional Data Persistence**  Data is at the core of software systems. In conventional architectures, a relational database persists and provides access to data. Applications are talking directly with a database which has its backup as another machine. To increase performance, tuning or a faster machine is required. This can cost a large amount of money or effort.  There is also the idea of keeping copies of data next to the database, which is performed using technologies like external key-value stores or second level caching. This helps to offload the database. However, when the database is saturated or the applications perform mostly \&quot;put\&quot; operations (writes), this approach is of no use because it insulates the database only from the \&quot;get\&quot; loads (reads). Even if the applications are read-intensive, there can be consistency problems: when data changes, what happens to the cache, and how are the changes handled? This is when concepts like time-to-live (TTL) or write-through come in.  However, in the case of TTL, if the access is less frequent then the TTL, the result will always be a cache miss. On the other hand, in the case of write-through caches; if there are more than one of these caches in a cluster, then we again have consistency issues. This can be avoided by having the nodes communicating with each other so that entry invalidations can be propagated.  We can conclude that an ideal cache would combine TTL and write-through features. And, there are several cache servers and in-memory database solutions in this field. However, those are stand-alone single instances with a distribution mechanism to an extent provided by other technologies. This brings us back to square one: we would experience saturation or capacity issues if the product is a single instance or if consistency is not provided by the distribution.  **And, there is Hazelcast**  Hazelcast, a brand new approach to data, is designed around the concept of distribution. Hazelcast shares data around the cluster for flexibility and performance. It is an in-memory data grid for clustering and highly scalable data distribution.  One of the main features of Hazelcast is not having a master node. Each node in the cluster is configured to be the same in terms of functionality. The oldest node (the first node created in the node cluster) manages the cluster members, i.e. automatically performs the data assignment to nodes. If the oldest node dies, the second oldest node will manage the cluster members.  Another main feature is the data being held entirely in-memory. This is fast. In the case of a failure, such as a node crash, no data will be lost since Hazelcast distributes copies of data across all the nodes of cluster.  As shown in the feature list in the [Hazelcast Overview](#hazelcast-overview), Hazelcast supports a number of distributed data structures and distributed computing utilities. This provides powerful ways of accessing distributed clustered memory and accessing CPUs for true distributed computing.   **Hazelcast's Distinctive Strengths**   * It is open source. * It is a small JAR file. You do not need to install software. * It is a library, it does not impose an architecture on Hazelcast users. * It provides out of the box distributed data structures (i.e. Map, Queue, MultiMap, Topic, Lock, Executor, etc.). * There is no \&quot;master\&quot;, so no single point of failure in Hazelcast cluster; each node in the cluster is configured to be functionally the same. * When the size of your memory and compute requirement increases, new nodes can be dynamically joined to the cluster to scale elastically. * Data is resilient to node failure. Data backups are distributed across the cluster. This is a big benefit when a node in the cluster crashes: data will not be lost. * Nodes are always aware of each other: they communicate, unlike traditional key-value caching solutions. * You can build your own custom distributed data structures using the Service Programming Interface (SPI) if you are not happy with the data structures provided.  Finally, Hazelcast has a vibrant open source community enabling it to be continuously developed.  Hazelcast is a fit when you need:  -	analytic applications requiring big data processing by partitioning the data, -	to retain frequently accessed data in the grid, -	a cache, particularly an open source JCache provider with elastic distributed scalability, -	a primary data store for applications with utmost performance, scalability and low-latency requirements, -	an In-Memory NoSQL Key Value Store, -	publish/subscribe communication at highest speed and scalability between applications, -	applications that need to scale elastically in distributed and cloud environments, -	a highly available distributed cache for applications, -	an alternative to Coherence, Gemfire and Terracotta.  "
});



documentTitles["datapartitioning.html#data-partitioning"] = "Data Partitioning";
index.add({
    url: "datapartitioning.html#data-partitioning",
    title: "Data Partitioning",
    body: "## Data Partitioning  As you read in the [Sharding in Hazelcast section](#sharding-in-hazelcast), Hazelcast shards are called Partitions. Partitions are memory segments each of which can contain hundreds or thousands of data entries depending on your memory capacity.   By default, Hazelcast offers 271 partitions. When you start a node, these 271 partitions will be owned by that node. The following is an illustration of the partitions in a 1 node Hazelcast cluster.  ![](images/NodePartition.jpg)  When you start a second node, i.e. there will be a 2 node Hazelcast cluster, the partitions are distributed as shown in the following illustration.   ![](images/BackupPartitions.jpg)  The blacks are primary partitions and blue ones are replicas (backups). In the above illustration, the first node has 135 primary partitions (black) and each of these partitions are backed up in the second node (blue). At the same time, the first node has the replica partitions of the second node's primary partitions.  As you add more nodes, Hazelcast moves one by one some of the primary and replica partitions to the new nodes, making all nodes equal and redundant. Only the minimum amount of partitions will be moved to scale out Hazelcast. The following is an illustration of the partition distributions in a 4 node Hazelcast cluster.  ![](images/4NodeCluster.jpg)  As you see, the partitions themselves are distributed equally among the members of the cluster. Hazelcast creates the backups of partitions and distributes them among nodes for redundancy.  "
});

documentTitles["datapartitioning.html#how-the-data-is-partitioned"] = "How the Data is Partitioned";
index.add({
    url: "datapartitioning.html#how-the-data-is-partitioned",
    title: "How the Data is Partitioned",
    body: "### How the Data is Partitioned  Hazelcast distributes data entries into the partitions using a hashing algorithm. Given an object key (e.g. for map) or an object name (e.g. for topic or list):  - the key or name is serialized, i.e. converted into byte array, - this byte array is hashed, and - the result of the hash is mod by the number of partitions.  The result of this modulo - *MOD(hash result, partition count)* -  gives the partition in which the data will be stored.   "
});

documentTitles["datapartitioning.html#partition-table"] = "Partition Table";
index.add({
    url: "datapartitioning.html#partition-table",
    title: "Partition Table",
    body: "### Partition Table  When you start a node, a partition table is created within it. This table stores the information of which partitions belong to which nodes. Purpose of this table is to make all nodes in the cluster aware of this information. As a result, each node knows where the data is.  The oldest node in the cluster (the one which was started first) sends the partition table to all nodes periodically. By this way, each node in the cluster is informed about the partition ownership changes, if any. The ownerships may be changed when, for example, a new node joins to the cluster, or when a node leaves.  ![image](images/NoteSmall.jpg) ***NOTE:*** *If the oldest node goes down, the next oldest node starts to send the partition table information to the other nodes.*  You can configure the partition table sending frequency using the `hazelcast.partition.table.send.interval` system property. It is set to 15 seconds by default.   "
});

documentTitles["datapartitioning.html#repartitioning"] = "Repartitioning";
index.add({
    url: "datapartitioning.html#repartitioning",
    title: "Repartitioning",
    body: "### Repartitioning  Repartitioning is the process of redistribution of partition ownerships. Hazelcast performs the repartitioning in the following cases:  - When a node joins to the cluster. - When a node leaves the cluster.  In these cases, the partition table in the oldest node is updated with the new partition ownerships.    "
});



documentTitles["usecases.html#use-cases"] = "Use Cases";
index.add({
    url: "usecases.html#use-cases",
    title: "Use Cases",
    body: "## Use Cases  Some example usages are listed below. Hazelcast can be used: -	To share server configuration/information to see how a cluster performs,    -	To cluster highly changing data with event notifications (e.g. user based events) and to queue and distribute background tasks,    -	As a simple Memcache with near cache,    -	As a cloud-wide scheduler of certain processes that need to be performed on some nodes,    -	To share information (user information, queues, maps, etc.) on the fly with multiple nodes in different installations under OSGI environments,    -	To share thousands of keys in a cluster where there is a web service interface on an application server and some validation,    -	As a distributed topic (publish/subscribe server) to build scalable chat servers for smartphones,    -	As a front layer for a Cassandra back-end,    -	To distribute user object states across the cluster, to pass messages between objects and to share system data structures (static initialization state, mirrored objects, object identity generators),    -	As a multi-tenancy cache where each tenant has its own map,    -	To share datasets (e.g. table-like data structure) to be used by applications,    -	To distribute the load and collect status from Amazon EC2 servers where front-end is developed using, for example, Spring framework,    -	As a real time streamer for performance detection,  -	As storage for session data in web applications (enables horizontal scalability of the web application). "
});



documentTitles["resources.html#resources"] = "Resources";
index.add({
    url: "resources.html#resources",
    title: "Resources",
    body: "## Resources   -	Hazelcast source code can be found at [Github/Hazelcast](https://github.com/hazelcast/hazelcast). -	Hazelcast API can be found at [Hazelcast.org/docs/Javadoc](http://www.hazelcast.org/docs/latest/javadoc/). -	Code samples can be downloaded from [Hazelcast.org/download](http://hazelcast.org/download/). -	More use cases and resources can be found at [Hazelcast.com](http://www.hazelcast.com). -	Questions and discussions can be posted at [Hazelcast mail group](https://groups.google.com/forum/#!forum/hazelcast).  &lt;br&gt; &lt;/br&gt;    "
});



documentTitles["hazelcastclusters.html#hazelcast-clusters"] = "Hazelcast Clusters";
index.add({
    url: "hazelcastclusters.html#hazelcast-clusters",
    title: "Hazelcast Clusters",
    body: "# Hazelcast Clusters  This chapter describes Hazelcast clusters and the ways cluster members use to form a Hazelcast cluster.   "
});

documentTitles["hazelcastclusters.html#hazelcast-cluster-discovery"] = "Hazelcast Cluster Discovery";
index.add({
    url: "hazelcastclusters.html#hazelcast-cluster-discovery",
    title: "Hazelcast Cluster Discovery",
    body: "## Hazelcast Cluster Discovery  A Hazelcast cluster is a network of cluster members that run Hazelcast. Cluster members, or nodes, automatically join together to form a cluster. This automatic joining takes place with various discovery mechanisms that the cluster members use to find each other. Hazelcast uses the following discovery mechanisms:  - Multicast Auto-discovery - Discovery by TCP/IP - EC2 Cloud Auto-discovery  Each discovery mechanism is explained in the following sections.  	 ![image](images/NoteSmall.jpg) ***NOTE:*** *After a cluster is formed, communication between cluster members is always via TCP/IP, regardless of the discovery mechanism used.*    "
});

documentTitles["hazelcastclusters.html#multicast-auto-discovery"] = "Multicast Auto-discovery";
index.add({
    url: "hazelcastclusters.html#multicast-auto-discovery",
    title: "Multicast Auto-discovery",
    body: "### Multicast Auto-discovery  With the multicast auto-discovery mechanism, Hazelcast allows cluster members to find each other using multicast communication. The cluster members do not need to know concrete addresses of each other, they just multicast to everyone for listening. It depends on your environment if multicast is possible or allowed.  The following is an example declarative configuration.  ```xml    &lt;network&gt;         &lt;join&gt;             &lt;multicast enabled=\&quot;true\&quot;&gt;                 &lt;multicast-group&gt;224.2.2.3&lt;/multicast-group&gt;                 &lt;multicast-port&gt;54327&lt;/multicast-port&gt;                 &lt;multicast-time-to-live&gt;32&lt;/multicast-time-to-live&gt;                 &lt;multicast-timeout-seconds&gt;2&lt;/multicast-timeout-seconds&gt;                 &lt;trusted-interfaces&gt;                    &lt;interface&gt;192.168.1.102&lt;/interface&gt;                 &lt;/trusted-interfaces&gt;                &lt;/multicast&gt;             &lt;tcp-ip enabled=\&quot;false\&quot;&gt;            &lt;/tcp-ip&gt;             &lt;aws enabled=\&quot;false\&quot;&gt;             &lt;/aws&gt;         &lt;/join&gt;    &lt;network&gt;      ```  You should pay attention to the `multicast-timeout-seconds` element. This element specifies the time in seconds that a node should wait for a valid multicast response from another node running in the network before declaring itself as the leader node (first node joined to the cluster) and creating its own cluster. This only applies to the startup of nodes where no leader has been assigned yet. If you specify a high value for the `multicast-timeout-seconds` like 60 seconds, it means until a leader is selected, each node is going to wait 60 seconds before moving on. Therefore, be careful when providing a high value. If the value is too low, the nodes might give up too early and create their own cluster.  &lt;br&gt;&lt;/br&gt; ***RELATED INFORMATION***  *Please refer to the [multicast element section](#multicast-element) for the full description of multicast discovery configuration.* &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["hazelcastclusters.html#discovery-by-tcpip"] = "Discovery by TCP/IP";
index.add({
    url: "hazelcastclusters.html#discovery-by-tcpip",
    title: "Discovery by TCP/IP",
    body: "### Discovery by TCP/IP  If multicast is not the preferred way of discovery for your environment, then you can configure Hazelcast to be a full TCP/IP cluster. When configuring the Hazelcast for discovery by TCP/IP, you must list all or a subset of the nodes' hostnames and/or IP addresses. Note that you do not have to list all  cluster members, but at least one of them has to be active in the cluster when a new member joins.  The following is an example declarative configuration. You should set the  `enabled` attribute of `tcp-ip` element to `true`.  ```xml &lt;hazelcast&gt;   ...   &lt;network&gt;     ...     &lt;join&gt;       &lt;multicast enabled=\&quot;false\&quot;&gt;       &lt;/multicast&gt;       &lt;tcp-ip enabled=\&quot;true\&quot;&gt;         &lt;member&gt;machine1&lt;/member&gt;         &lt;member&gt;machine2&lt;/member&gt;         &lt;member&gt;machine3:5799&lt;/member&gt;         &lt;member&gt;192.168.1.0-7&lt;/member&gt;         &lt;member&gt;192.168.1.21&lt;/member&gt;       &lt;/tcp-ip&gt;       ...     &lt;/join&gt;     ...   &lt;/network&gt;   ... &lt;/hazelcast&gt; ```  As shown above, you can provide IP addresses or hostnames for `member` elements. You can also give a range of IP addresses like `192.168.1.0-7`.  Instead of providing members line by line, you have the option to use the `members` element and write comma-separated IP addresses, as shown below.  `&lt;members&gt;192.168.1.0-7,192.168.1.21&lt;/members&gt;`  If you do not provide ports for the members, Hazelcast automatically tries the ports 5701, 5702, and so on.  By default, Hazelcast binds to all local network interfaces to accept incoming traffic. You can change this behavior using the system property `hazelcast.socket.bind.any`. If you set this property to `false`, Hazelcast uses the interfaces specified in the `interfaces` element (please refer to the [Specifying Network Interfaces section](#specifying-network-interfaces)). If no interfaces are provided, then it will try to resolve one interface to bind, given in the `member` elements.  &lt;br&gt;&lt;/br&gt; ***RELATED INFORMATION***  *Please refer to the [tcp-ip element section](#tcp-ip-element) for the full description of discovery by TCP/IP configuration.* &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["hazelcastclusters.html#ec2-cloud-auto-discovery"] = "EC2 Cloud Auto-discovery";
index.add({
    url: "hazelcastclusters.html#ec2-cloud-auto-discovery",
    title: "EC2 Cloud Auto-discovery",
    body: "### EC2 Cloud Auto-discovery  Hazelcast supports EC2 Auto Discovery. It is useful when you do not want or cannot provide the list of possible IP addresses. To configure your cluster to use EC2 Auto Discovery, disable join over multicast and TCP/IP, enable AWS, and provide your credentials (access and secret keys).   You need to add *hazelcast-cloud.jar* dependency to your project. Note that it is also bundled inside *hazelcast-all.jar*. The Hazelcast cloud module does not depend on any other third party modules.  The following is an example declarative configuration.   ```xml &lt;join&gt;   &lt;multicast enabled=\&quot;false\&quot;&gt;   &lt;/multicast&gt;   &lt;tcp-ip enabled=\&quot;false\&quot;&gt;   &lt;/tcp-ip&gt;   &lt;aws enabled=\&quot;true\&quot;&gt;     &lt;access-key&gt;my-access-key&lt;/access-key&gt;     &lt;secret-key&gt;my-secret-key&lt;/secret-key&gt;     &lt;region&gt;us-west-1&lt;/region&gt;     &lt;host-header&gt;ec2.amazonaws.com&lt;/host-header&gt;     &lt;security-group-name&gt;hazelcast-sg&lt;/security-group-name&gt;     &lt;tag-key&gt;type&lt;/tag-key&gt;     &lt;tag-value&gt;hz-nodes&lt;/tag-value&gt;   &lt;/aws&gt; &lt;/join&gt; ```    &lt;br&gt;&lt;/br&gt; ***RELATED INFORMATION***  *Please refer to the [aws element section](#aws-element) for the full description of EC2 auto-discovery configuration.* &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["hazelcastclusters.html#debugging"] = "Debugging";
index.add({
    url: "hazelcastclusters.html#debugging",
    title: "Debugging",
    body: "#### Debugging  When and if needed, Hazelcast can log the events for the instances that exist in a region. To see what has happened or to trace the activities while forming the cluster, change the log level in your logging mechanism to FINEST or DEBUG. After this change, you can also see whether the instances are accepted or rejected, and the reason the instances were rejected in the generated log. Note that changing the log level to one of the mentioned levels may affect the performance of the cluster. Please see the [Logging Configuration section](#logging-configuration) for information on logging mechanisms.  &lt;br&gt; &lt;/br&gt; ***RELATED INFORMATION***  *You can download the white paper *\&quot;Hazelcast on AWS: Best Practices for Deployment\&quot;* from [Hazelcast.com](http://hazelcast.com/resources/hazelcast-on-aws-best-practices-for-deployment/).* &lt;br&gt; &lt;/br&gt;       "
});



documentTitles["distributed-data-structures.html#distributed-data-structures"] = "Distributed Data Structures";
index.add({
    url: "distributed-data-structures.html#distributed-data-structures",
    title: "Distributed Data Structures",
    body: "# Distributed Data Structures  As mentioned in the [Overview section](#hazelcast-overview), Hazelcast offers distributed implementations of Java interfaces. Below is the Java interface list with links to each section in this manual.  - **Standard utility collections:**  	- [Map](#map): The distributed implementation of `java.util.Map` lets you read from and write to a Hazelcast map with methods like get and put. 	- [Queue](#queue): The distributed queue is an implementation of `java.util.concurrent.BlockingQueue`. You can add an item in one machine and remove it from another one. 	- [Set](#set): The distributed and concurrent implementation of `java.util.Set`. It does not allow duplicate elements and does not preserve their order. 	- [List](#list): Very similar to Hazelcast List, except that it allows duplicate elements and preserves their order. 	- [MultiMap](#multimap): This is a specialized Hazelcast map. It is distributed, where multiple values under a single key can be stored. 	- [ReplicatedMap](#replicated-map): This does not partition data, i.e. it does not spread data to different cluster members. Instead, it replicates the data to all nodes. - **Topic**: Distributed mechanism for publishing messages that are delivered to multiple subscribers; this is also known as a publish/subscribe (pub/sub) messaging model. Please see the [Topic section](#topic) for more information. - **Concurrency utilities**: 	- [Lock](#lock): Distributed implementation of `java.util.concurrent.locks.Lock`. When you lock using Hazelcast Lock, the critical section that it guards is guaranteed to be executed by only one thread in the entire cluster. 	- [Semaphore](#isemaphore): Distributed implementation of `java.util.concurrent.Semaphore`. When performing concurrent activities, semaphores offer permits to control the thread counts. 	- [AtomicLong](#iatomiclong): Distributed implementation of `java.util.concurrent.atomic.AtomicLong`. Most of AtomicLong's operations are available. However, these operations involve remote calls and hence their performances differ from AtomicLong, due to being distributed. 	- [AtomicReference](#iatomicreference): When you need to deal with a reference in a distributed environment, you can use Hazelcast AtomicReference. This is the distributed version of `java.util.concurrent.atomic.AtomicReference`. 	- [IdGenerator](#idgenerator): You use Hazelcast IdGenerator to generate cluster-wide unique identifiers. ID generation occurs almost at the speed of `AtomicLong.incrementAndGet()`. 	- [CountdownLatch](#icountdownlatch): Distributed implementation of `java.util.concurrent.CountDownLatch`. Hazelcast CountDownLatch is a gate keeper for concurrent activities, enabling the threads to wait for other threads to complete their operations.  Common Features of all Hazelcast Data Structures:   -   If a member goes down, its backup replica (which holds the same data) will dynamically redistribute the data, including the ownership and locks on them, to the remaining live nodes. As a result, no data will be lost. -   There is no single cluster master that can cause single point of failure. Every node in the cluster has equal rights and responsibilities. No single node is superior. There is no dependency on an external 'server' or 'master'.  Here is an example of how you can retrieve existing data structure instances (map, queue, set, lock, topic, etc.) and how you can listen for instance events, such as an instance being created or destroyed.  ```java import java.util.Collection; import com.hazelcast.config.Config; import com.hazelcast.core.*;  public class Sample implements DistributedObjectListener {   public static void main(String[] args) {     Sample sample = new Sample();      Config config = new Config();     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(config);     hazelcastInstance.addDistributedObjectListener(sample);      Collection&lt;DistributedObject&gt; distributedObjects = hazelcastInstance.getDistributedObjects();     for (DistributedObject distributedObject : distributedObjects) {       System.out.println(distributedObject.getName() + \&quot;,\&quot; + distributedObject.getId());     }   }    @Override   public void distributedObjectCreated(DistributedObjectEvent event) {     DistributedObject instance = event.getDistributedObject();     System.out.println(\&quot;Created \&quot; + instance.getName() + \&quot;,\&quot; + instance.getId());   }    @Override   public void distributedObjectDestroyed(DistributedObjectEvent event) {     DistributedObject instance = event.getDistributedObject();     System.out.println(\&quot;Destroyed \&quot; + instance.getName() + \&quot;,\&quot; + instance.getId());   } } ```  "
});



documentTitles["map.html#map"] = "Map";
index.add({
    url: "map.html#map",
    title: "Map",
    body: "## Map  "
});

documentTitles["map.html#map-overview"] = "Map Overview";
index.add({
    url: "map.html#map-overview",
    title: "Map Overview",
    body: "### Map Overview  Hazelcast Map (`IMap`) extends the interface `java.util.concurrent.ConcurrentMap` and hence `java.util.Map`. It is the distributed implementation of Java map. You can perfrom operations like reading and writing from/to a Hazelcast map with the well known get and put methods.  "
});

documentTitles["map.html#how-distributed-map-works"] = "How Distributed Map Works";
index.add({
    url: "map.html#how-distributed-map-works",
    title: "How Distributed Map Works",
    body: "#### How Distributed Map Works  Hazelcast will partition your map entries and almost evenly distribute onto all Hazelcast members. Each member carries approximately \&quot;(1/n `*` total-data) + backups\&quot;, **n** being the number of nodes in the cluster. For example, if you have a node with 1000 objects to be stored in the cluster, and then you start a second node, each node will both store 500 objects and back up the 500 objects in the other node.  Let's create a Hazelcast instance (node) and fill a map named `Capitals` with key-value pairs using the following code.  ```java public class FillMapMember {   public static void main( String[] args ) {      HazelcastInstance hzInstance = Hazelcast.newHazelcastInstance();     Map&lt;String, String&gt; capitalcities = hzInstance.getMap( \&quot;capitals\&quot; );      capitalcities.put( \&quot;1\&quot;, \&quot;Tokyo\&quot; );     capitalcities.put( \&quot;2\&quot;, \&quot;Paris” );     capitalcities.put( \&quot;3\&quot;, \&quot;Washington\&quot; );     capitalcities.put( \&quot;4\&quot;, \&quot;Ankara\&quot; );     capitalcities.put( \&quot;5\&quot;, \&quot;Brussels\&quot; );     capitalcities.put( \&quot;6\&quot;, \&quot;Amsterdam\&quot; );     capitalcities.put( \&quot;7\&quot;, \&quot;New Delhi\&quot; );     capitalcities.put( \&quot;8\&quot;, \&quot;London\&quot; );     capitalcities.put( \&quot;9\&quot;, \&quot;Berlin\&quot; );     capitalcities.put( \&quot;10\&quot;, \&quot;Oslo\&quot; );     capitalcities.put( \&quot;11\&quot;, \&quot;Moscow\&quot; );     ...     ...     capitalcities.put( \&quot;120\&quot;, \&quot;Stockholm\&quot; )   } } ```  When you run this code, a node is created with a map whose entries are distributed across the node's partitions. See the below illustration. For now, this is a single node cluster.  ![](images/1Node.jpg)  ![image](images/NoteSmall.jpg) ***NOTE:*** *Please note that some of the partitions will not contain any data entries since we only have 120 objects and the partition count is 271 by default. This count is configurable and can be changed using the system property `hazelcast.partition.count`. Please see the [Advanced Configuration Properties section](#advanced-configuration-properties).*  Now, let's create a second node by running the above code again. This will create a cluster with 2 nodes. This is also where backups of entries are created; remember the backup partitions mentioned in the [Hazelcast Overview section](#hazelcast-overview). The following illustration shows two nodes and how the data and its backup is distributed.  ![](images/2Nodes.jpg)  As you see, when a new member joins the cluster, it takes ownership and loads some of the data in the cluster. Eventually, it will carry almost \&quot;(1/n `*` total-data) + backups\&quot; of the data, reducing the load on other nodes.  `HazelcastInstance::getMap` returns an instance of `com.hazelcast.core.IMap` which extends the `java.util.concurrent.ConcurrentMap` interface. Methods like `ConcurrentMap.putIfAbsent(key,value)` and `ConcurrentMap.replace(key,value)` can be used on the distributed map, as shown in the example below.  ```java import com.hazelcast.core.Hazelcast; import com.hazelcast.core.HazelcastInstance; import java.util.concurrent.ConcurrentMap;  HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();  Customer getCustomer( String id ) {     ConcurrentMap&lt;String, Customer&gt; customers = hazelcastInstance.getMap( \&quot;customers\&quot; );     Customer customer = customers.get( id );     if (customer == null) {         customer = new Customer( id );         customer = customers.putIfAbsent( id, customer );     }     return customer; }                 public boolean updateCustomer( Customer customer ) {     ConcurrentMap&lt;String, Customer&gt; customers = hazelcastInstance.getMap( \&quot;customers\&quot; );     return ( customers.replace( customer.getId(), customer ) != null );             }                  public boolean removeCustomer( Customer customer ) {     ConcurrentMap&lt;String, Customer&gt; customers = hazelcastInstance.getMap( \&quot;customers\&quot; );     return customers.remove( customer.getId(), customer );            } ```  All `ConcurrentMap` operations such as `put` and `remove` might wait if the key is locked by another thread in the local or remote JVM. But, they will eventually return with success. `ConcurrentMap` operations never throw a `java.util.ConcurrentModificationException`.  Also see:  -   [Data Affinity section](#data-affinity). -   [Map Configuration with wildcards](#using-wildcard). -   [Map Configuration section](#map-configuration) for a full description of Hazelcast Distributed Map configuration.  "
});



documentTitles["map-backups.html#map-backups"] = "Map Backups";
index.add({
    url: "map-backups.html#map-backups",
    title: "Map Backups",
    body: "### Map Backups   Hazelcast distributes map entries onto multiple JVMs (cluster members). Each JVM holds some portion of the data.   Distributed maps have 1 backup by default. If a member goes down, you do not lose data. Backup operations are synchronous, so when a `map.put(key, value)` returns, it is guaranteed that the entry is replicated to one other node. For the reads, it is also guaranteed that `map.get(key)` returns the latest value of the entry. Consistency is strictly enforced.   "
});

documentTitles["map-backups.html#sync-backup"] = "Sync Backup";
index.add({
    url: "map-backups.html#sync-backup",
    title: "Sync Backup",
    body: "#### Sync Backup  To provide data safety, Hazelcast allows you to specify the number of backup copies you want to have. That way, data on a JVM will be copied onto other JVM(s). You select the number of backup copies using the `backup-count` property.  ```xml &lt;hazelcast&gt;   &lt;map name=\&quot;default\&quot;&gt;     &lt;backup-count&gt;1&lt;/backup-count&gt;   &lt;/map&gt; &lt;/hazelcast&gt; ```  When this count is 1, a map entry will have its backup on one other node in the cluster. If you set it to 2, then a map entry will have its backup on two other nodes. You can set it to 0 if you do not want your entries to be backed up, e.g. if performance is more important than backing up. The maximum value for this count is 6.  Hazelcast supports both synchronous and asynchronous backups. By default, backup operations are synchronous and configured with `backup-count`. In this case, backup operations block operations until backups are successfully copied to backup nodes (or deleted from backup nodes in case of remove) and acknowledgements are received. Therefore, backups are updated before a `put` operation is completed. Sync backup operations have a blocking cost which may lead to latency issues.  "
});

documentTitles["map-backups.html#async-backup"] = "Async Backup";
index.add({
    url: "map-backups.html#async-backup",
    title: "Async Backup",
    body: "#### Async Backup  Asynchronous backups, on the other hand, do not block operations. They are fire &amp; forget and do not require acknowledgements; the backup operations are performed at some point in time. Async backup is configured using the `async-backup-count` property. An example is shown below.    ```xml &lt;hazelcast&gt;   &lt;map name=\&quot;default\&quot;&gt;     &lt;backup-count&gt;0&lt;/backup-count&gt;     &lt;async-backup-count&gt;1&lt;/async-backup-count&gt;   &lt;/map&gt; &lt;/hazelcast&gt; ```  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *Backups increase memory usage since they are also kept in memory.*  ![image](images/NoteSmall.jpg) ***NOTE:*** *A map can have both sync and aysnc backups at the same time.*    "
});

documentTitles["map-backups.html#read-backup-data"] = "Read Backup Data";
index.add({
    url: "map-backups.html#read-backup-data",
    title: "Read Backup Data",
    body: "#### Read Backup Data  By default, Hazelcast has one sync backup copy. If `backup-count` is set to more than 1, then each member will carry both owned entries and backup copies of other members. So for the `map.get(key)` call, it is possible that the calling member has a backup copy of that key. By default, `map.get(key)` will always read the value from the actual owner of the key for consistency. It is possible to enable backup reads (read local backup entries) by setting the value of the `read-backup-data` property to **true**. Its default value is **false** for strong consistency. Enabling backup reads can improve performance.   ```xml &lt;hazelcast&gt;   &lt;map name=\&quot;default\&quot;&gt;     &lt;backup-count&gt;0&lt;/backup-count&gt;     &lt;async-backup-count&gt;1&lt;/async-backup-count&gt;     &lt;read-backup-data&gt;true&lt;/read-backup-data&gt;   &lt;/map&gt; &lt;/hazelcast&gt; ```  This feature is available when there is at least 1 sync or async backup. "
});



documentTitles["map-eviction.html#map-eviction"] = "Map Eviction";
index.add({
    url: "map-eviction.html#map-eviction",
    title: "Map Eviction",
    body: "### Map Eviction  Unless you delete the map entries manually or use an eviction policy, they will remain in the map. Hazelcast supports policy based eviction for distributed maps. Currently supported policies are LRU (Least Recently Used) and LFU (Least Frequently Used).   There are other eviction properties, shown in the following sample declarative configuration.   ```xml &lt;hazelcast&gt;   &lt;map name=\&quot;default\&quot;&gt;     ...     &lt;time-to-live-seconds&gt;0&lt;/time-to-live-seconds&gt;     &lt;max-idle-seconds&gt;0&lt;/max-idle-seconds&gt;     &lt;eviction-policy&gt;LRU&lt;/eviction-policy&gt;     &lt;max-size policy=\&quot;PER_NODE\&quot;&gt;5000&lt;/max-size&gt;     &lt;eviction-percentage&gt;25&lt;/eviction-percentage&gt;     ...   &lt;/map&gt; &lt;/hazelcast&gt; ```  Let's describe each property.   -	`time-to-live`: Maximum time in seconds for each entry to stay in the map. If it is not 0, entries that are older than this time and not updated for this time are evicted automatically. Valid values are integers between 0 and `Integer.MAX VALUE`. Default value is 0, which means infinite. If it is not 0, entries are evicted regardless of the set `eviction-policy`.   -	`max-idle-seconds`: Maximum time in seconds for each entry to stay idle in the map. Entries that are idle for more than this time are evicted automatically. An entry is idle if no `get`, `put` or `containsKey` is called. Valid values are integers between 0 and `Integer.MAX VALUE`. Default value is 0, which means infinite. -	`eviction-policy`: Valid values are described below. 	- NONE: Default policy. If set, no items will be evicted and the property `max-size` will be ignored.  You still can combine it with `time-to-live-seconds` and `max-idle-seconds`. 	- LRU: Least Recently Used. 	- LFU: Least Frequently Used.	  -	`max-size`: Maximum size of the map. When maximum size is reached, the map is evicted based on the policy defined. Valid values are integers between 0 and `Integer.MAX VALUE`. Default value is 0. If you want `max-size` to work, set the `eviction-policy` property to a value other than NONE. Its attributes are described below. 	- `PER_NODE`: Maximum number of map entries in each JVM. This is the default policy.	 	 		`&lt;max-size policy=\&quot;PER_NODE\&quot;&gt;5000&lt;/max-size&gt;` 		 	- `PER_PARTITION`: Maximum number of map entries within each partition. Storage size depends on the partition count in a JVM. This attribute should not be used often. Avoid using this attribute with a small cluster: if the cluster is small it will be hosting more partitions, and therefore map entries, than that of a larger cluster. Thus, for a small cluster, eviction of the entries will decrease performance (the number of entries is large). 	 		`&lt;max-size policy=\&quot;PER_PARTITION\&quot;&gt;27100&lt;/max-size&gt;`  	- `USED_HEAP_SIZE`: Maximum used heap size in megabytes for each JVM. 	 		`&lt;max-size policy=\&quot;USED_HEAP_SIZE\&quot;&gt;4096&lt;/max-size&gt;`  	- `USED_HEAP_PERCENTAGE`: Maximum used heap size percentage for each JVM. If, for example, JVM is configured to have 1000 MB and this value is 10, then the map entries will be evicted when used heap size exceeds 100 MB. 	 		`&lt;max-size policy=\&quot;USED_HEAP_PERCENTAGE\&quot;&gt;10&lt;/max-size&gt;`  	- `FREE_HEAP_SIZE`: Minimum free heap size in megabytes for each JVM.  		`&lt;max-size policy=\&quot;FREE_HEAP_SIZE\&quot;&gt;512&lt;/max-size&gt;`  	- `FREE_HEAP_PERCENTAGE`: Minimum free heap size percentage for each JVM. If, for example, JVM is configured to have 1000 MB and this value is 10, then the map entries will be evicted when free heap size is below 100 MB.  		`&lt;max-size policy=\&quot;FREE_HEAP_PERCENTAGE\&quot;&gt;10&lt;/max-size&gt;`  -	`eviction-percentage`: When `max-size` is reached, the specified percentage of the map will be evicted. For example, if set to 25, 25% of the entries will be evicted. Setting this property to a smaller value will cause eviction of a smaller number of map entries. Therefore, if map entries are inserted frequently, smaller percentage values may lead to overheads. Valid values are integers between 0 and 100. The default value is 25.   "
});

documentTitles["map-eviction.html#sample-eviction-configuration"] = "Sample Eviction Configuration";
index.add({
    url: "map-eviction.html#sample-eviction-configuration",
    title: "Sample Eviction Configuration",
    body: "#### Sample Eviction Configuration   ```xml &lt;map name=\&quot;documents\&quot;&gt;   &lt;max-size policy=\&quot;PER_NODE\&quot;&gt;10000&lt;/max-size&gt;   &lt;eviction-policy&gt;LRU&lt;/eviction-policy&gt;    &lt;max-idle-seconds&gt;60&lt;/max-idle-seconds&gt; &lt;/map&gt; ```  In the above sample, `documents` map starts to evict its entries from a member when the map size exceeds 10000 in that member. Then, the entries least recently used will be evicted. The entries not used for more than 60 seconds will be evicted as well.   "
});

documentTitles["map-eviction.html#evicting-specific-entries"] = "Evicting Specific Entries";
index.add({
    url: "map-eviction.html#evicting-specific-entries",
    title: "Evicting Specific Entries",
    body: "#### Evicting Specific Entries   The eviction policies and configurations explained above apply to all the entries of a map. The entries that meet the specified eviction conditions are evicted.   But you may want to evict some specific map entries.  In this case, you can use the `ttl` and `timeunit` parameters of the method `map.put()`. A sample code line is given below.  `myMap.put( \&quot;1\&quot;, \&quot;John\&quot;, 50, TimeUnit.SECONDS )`  The map entry with the key \&quot;1\&quot; will be evicted 50 seconds after it is put into `myMap`.   "
});

documentTitles["map-eviction.html#evicting-all-entries"] = "Evicting All Entries";
index.add({
    url: "map-eviction.html#evicting-all-entries",
    title: "Evicting All Entries",
    body: "#### Evicting All Entries  The method `evictAll()` evicts all keys from the map except the locked ones. If a MapStore is defined for the map, `deleteAll` is not called by `evictAll`. If you want to call the method `deleteAll`, use `clear()`.   A sample is given below.  ```java public class EvictAll {      public static void main(String[] args) {         final int numberOfKeysToLock = 4;         final int numberOfEntriesToAdd = 1000;          HazelcastInstance node1 = Hazelcast.newHazelcastInstance();         HazelcastInstance node2 = Hazelcast.newHazelcastInstance();          IMap&lt;Integer, Integer&gt; map = node1.getMap(EvictAll.class.getCanonicalName());         for (int i = 0; i &lt; numberOfEntriesToAdd; i++) {             map.put(i, i);         }          for (int i = 0; i &lt; numberOfKeysToLock; i++) {             map.lock(i);         }          // should keep locked keys and evict all others.         map.evictAll();          System.out.printf(\&quot;# After calling evictAll...\n\&quot;);         System.out.printf(\&quot;# Expected map size\t: %d\n\&quot;, numberOfKeysToLock);         System.out.printf(\&quot;# Actual map size\t: %d\n\&quot;, map.size());      } } ```   ![image](images/NoteSmall.jpg) ***NOTE:*** *Only EVICT_ALL event is fired for any registered listeners.*            "
});



documentTitles["map-inmemoryformat.html#in-memory-format"] = "In Memory Format";
index.add({
    url: "map-inmemoryformat.html#in-memory-format",
    title: "In Memory Format",
    body: "### In Memory Format  IMap has an `in-memory-format` configuration option. By default, Hazelcast stores data into memory in binary (serialized) format. But sometimes, it can be efficient to store the entries in their object form, especially in cases of local processing like entry processor and queries. By setting `in-memory-format` in map's configuration, you can decide how the data will be stored in memory. You have the following format options.  -   `BINARY` (default): This is the default option. The data will be stored in serialized binary format. You can use this option if you mostly perform regular map operations, such as `put` and `get`.  -   `OBJECT`: The data will be stored in deserialized form. This configuration is good for maps where entry processing and queries form the majority of all operations and the objects are complex ones, making the serialization cost respectively high. By storing objects, entry processing will not contain the deserialization cost.   Regular operations like `get` rely on the object instance. When the `OBJECT` format is used and a `get` is performed, the map does not return the stored instance, but creates a clone. Therefore, this whole `get` operation includes a serialization first on the node owning the instance, and then a deserialization on the node calling the instance. When the `BINARY` format is used, only a deserialization is required; this is faster.  Similarly, a `put` operation is faster when the `BINARY` format is used. If the format was `OBJECT`, map would create a clone of the instance, and there would first a serialization and then deserialization. When BINARY is used, only a deserialization is needed.   ![image](images/NoteSmall.jpg) ***NOTE:*** *If a value is stored in `OBJECT` format, a change on a returned value does not affect the stored instance. In this case, the returned instance is not the actual one but a clone. Therefore, changes made on an object after it is returned will not reflect on the actual stored data. Similarly, when a value is written to a map and the value is stored in `OBJECT` format, it will be a copy of the `put` value. Therefore, changes made on the object after it is stored will not reflect on the stored data.*"
});



documentTitles["map-persistence.html#map-persistence"] = "Map Persistence";
index.add({
    url: "map-persistence.html#map-persistence",
    title: "Map Persistence",
    body: "### Map Persistence  Hazelcast allows you to load and store the distributed map entries from/to a persistent data store such as a relational database. To do this, you can use Hazelcast's `MapStore` and `MapLoader` interfaces.  When you provide a `MapLoader` implementation and request an entry (`IMap.get()`) that does not exist in memory, `MapLoader`'s `load` or `loadAll` methods will load that entry from the data store. This loaded entry is placed into the map and will stay there until it is removed or evicted.  When a `MapStore` implementation is provided, an entry is also put into a user defined data store.   ![image](images/NoteSmall.jpg) ***NOTE:*** *Data store needs to be a centralized system that is accessible from all Hazelcast Nodes. Persistence to local file system is not supported.*  Following is a `MapStore` example.  ```java public class PersonMapStore implements MapStore&lt;Long, Person&gt; {     private final Connection con;      public PersonMapStore() {         try {             con = DriverManager.getConnection(\&quot;jdbc:hsqldb:mydatabase\&quot;, \&quot;SA\&quot;, \&quot;\&quot;);             con.createStatement().executeUpdate(                     \&quot;create table if not exists person (id bigint, name varchar(45))\&quot;);         } catch (SQLException e) {             throw new RuntimeException(e);         }     }      public synchronized void delete(Long key) {         System.out.println(\&quot;Delete:\&quot; + key);         try {             con.createStatement().executeUpdate(                     format(\&quot;delete from person where id = %s\&quot;, key));         } catch (SQLException e) {             throw new RuntimeException(e);         }     }      public synchronized void store(Long key, Person value) {         try {             con.createStatement().executeUpdate(                     format(\&quot;insert into person values(%s,'%s')\&quot;, key, value.name));         } catch (SQLException e) {             throw new RuntimeException(e);         }     }      public synchronized void storeAll(Map&lt;Long, Person&gt; map) {         for (Map.Entry&lt;Long, Person&gt; entry : map.entrySet())             store(entry.getKey(), entry.getValue());     }      public synchronized void deleteAll(Collection&lt;Long&gt; keys) {         for (Long key : keys) delete(key);     }      public synchronized Person load(Long key) {         try {             ResultSet resultSet = con.createStatement().executeQuery(                     format(\&quot;select name from person where id =%s\&quot;, key));             try {                 if (!resultSet.next()) return null;                 String name = resultSet.getString(1);                 return new Person(name);             } finally {                 resultSet.close();             }         } catch (SQLException e) {             throw new RuntimeException(e);         }     }      public synchronized Map&lt;Long, Person&gt; loadAll(Collection&lt;Long&gt; keys) {         Map&lt;Long, Person&gt; result = new HashMap&lt;Long, Person&gt;();         for (Long key : keys) result.put(key, load(key));         return result;     }      public Set&lt;Long&gt; loadAllKeys() {         return null;     } } ```  ![image](images/NoteSmall.jpg) ***NOTE:*** *Loading process is performed on a thread different than the partition threads using ExecutorService.*  &lt;br&gt;&lt;/br&gt; ***RELATED INFORMATION***  *For more MapStore/MapLoader code samples please see [here](https://github.com/hazelcast/hazelcast-code-samples/tree/master/distributed-map/mapstore/src/main/java).* &lt;br&gt;&lt;/br&gt;  Hazelcast supports read-through, write-through, and write-behind persistence modes which are explained in below subsections.  "
});

documentTitles["map-persistence.html#read-through"] = "Read-Through";
index.add({
    url: "map-persistence.html#read-through",
    title: "Read-Through",
    body: "#### Read-Through  If an entry does not exist in the memory when an application asks for it, Hazelcast asks your loader implementation to load that entry from the data store.  If the entry exists there, the loader implementation gets it, hands it to Hazelcast, and Hazelcast puts it into the memory. This is read-through persistence mode.    "
});

documentTitles["map-persistence.html#write-through"] = "Write-Through";
index.add({
    url: "map-persistence.html#write-through",
    title: "Write-Through",
    body: "#### Write-Through  `MapStore` can be configured to be write-through by setting the `write-delay-seconds` property to **0**. This means the entries will be put to the data store synchronously.  In this mode, when the `map.put(key,value)` call returns:  -   `MapStore.store(key,value)` is successfully called so the entry is persisted.  -   In-Memory entry is updated.  -   In-Memory backup copies are successfully created on other JVMs (if `backup-count` is greater than 0).  The same behavior goes for a `map.remove(key)` call. The only difference is that  `MapStore.delete(key)` is called when the entry will be deleted.  If `MapStore` throws an exception, then the exception will be propagated back to the original `put` or `remove` call in the form of `RuntimeException`.   "
});

documentTitles["map-persistence.html#write-behind"] = "Write-Behind";
index.add({
    url: "map-persistence.html#write-behind",
    title: "Write-Behind",
    body: "#### Write-Behind  You can configure `MapStore` as write-behind by setting the `write-delay-seconds` property to a value bigger than **0**. This means the modified entries will be put to the data store asynchronously after a configured delay.   ![image](images/NoteSmall.jpg) ***NOTE:*** *In write-behind mode, by default Hazelcast coalesces updates on a specific key, i.e. applies only the last update on it. But you can also set `MapStoreConfig#setWriteCoalescing` to `FALSE` and you can store all updates on a key to the store.*  ![image](images/NoteSmall.jpg) ***NOTE:*** *When you set `MapStoreConfig#setWriteCoalescing` to `FALSE`, after you reached per-node max write-behind-queue capacity, subsequent put operations will fail with `ReachedMaxSizeException`. This exception will be thrown to prevent uncontrolled grow of write-behind queues. You can set per node max capacity with `GroupProperty#MAP_WRITE_BEHIND_QUEUE_CAPACITY` *   In this mode, when the `map.put(key,value)` call returns:  -   In-Memory entry is updated.  -   In-Memory backup copies are successfully created on other JVMs (if `backup-count` is greater than 0).  -   The entry is marked as dirty so that after `write-delay-seconds`, it can be persisted with `MapStore.store(key,value)` call.  The same behavior goes for the `map.remove(key)`, the only difference is that  `MapStore.delete(key)` is called when the entry will be deleted.  If `MapStore` throws an exception, then Hazelcast tries to store the entry again. If the entry still cannot be stored, a log message is printed and the entry is re-queued.   For batch write operations, which are only allowed in write-behind mode, Hazelcast will call `MapStore.storeAll(map)` and `MapStore.deleteAll(collection)` to do all writes in a single call. &lt;br&gt;&lt;/br&gt;  ![image](images/NoteSmall.jpg) ***NOTE:*** *If a map entry is marked as dirty, i.e. it is waiting to be persisted to the `MapStore` in a write-behind scenario, the eviction process forces the entry to be stored. By this way, you will have control on the number of entries waiting to be stored, and thus you can prevent a possible OutOfMemory exception.* &lt;br&gt;&lt;/br&gt;   ![image](images/NoteSmall.jpg) ***NOTE:*** *`MapStore` or `MapLoader` implementations should not use Hazelcast Map/Queue/MultiMap/List/Set operations. Your implementation should only work with your data store. Otherwise, you may get into deadlock situations.*  Here is a sample configuration:  ```xml &lt;hazelcast&gt;   ...   &lt;map name=\&quot;default\&quot;&gt;     ...     &lt;map-store enabled=\&quot;true\&quot;&gt;       &lt;!--         Name of the class implementing MapLoader and/or MapStore.         The class should implement at least of these interfaces and         contain no-argument constructor. Note that the inner classes are not supported.       --&gt;       &lt;class-name&gt;com.hazelcast.examples.DummyStore&lt;/class-name&gt;       &lt;!--         Number of seconds to delay to call the MapStore.store(key, value).         If the value is zero then it is write-through so MapStore.store(key, value)         will be called as soon as the entry is updated.         Otherwise it is write-behind so updates will be stored after write-delay-seconds         value by calling Hazelcast.storeAll(map). Default value is 0.       --&gt;       &lt;write-delay-seconds&gt;60&lt;/write-delay-seconds&gt;       &lt;!--         Used to create batch chunks when writing map store.         In default mode all entries will be tried to persist in one go.         To create batch chunks, minimum meaningful value for write-batch-size         is 2. For values smaller than 2, it works as in default mode.       --&gt;       &lt;write-batch-size&gt;1000&lt;/write-batch-size&gt;     &lt;/map-store&gt;   &lt;/map&gt; &lt;/hazelcast&gt; ```  "
});

documentTitles["map-persistence.html#mapstorefactory-and-maploaderlifecyclesupport-interfaces"] = "MapStoreFactory And MapLoaderLifecycleSupport Interfaces";
index.add({
    url: "map-persistence.html#mapstorefactory-and-maploaderlifecyclesupport-interfaces",
    title: "MapStoreFactory And MapLoaderLifecycleSupport Interfaces",
    body: "#### MapStoreFactory And MapLoaderLifecycleSupport Interfaces  A configuration can be applied to more than one map using wildcards (see [Using Wildcard](#using-wildcard)), meaning that the configuration is shared among the maps. But `MapStore` does not know which entries to store when there is one configuration applied to multiple maps. To overcome this, Hazelcast provides the `MapStoreFactory` interface.  Using the `MapStoreFactory` interface, `MapStore`s for each map can be created when a wildcard configuration is used. Sample code is shown below.  ```java Config config = new Config(); MapConfig mapConfig = config.getMapConfig( \&quot;*\&quot; ); MapStoreConfig mapStoreConfig = mapConfig.getMapStoreConfig(); mapStoreConfig.setFactoryImplementation( new MapStoreFactory&lt;Object, Object&gt;() {   @Override   public MapLoader&lt;Object, Object&gt; newMapStore( String mapName, Properties properties ) {     return null;   } }); ```  If the configuration implements the `MapLoaderLifecycleSupport` interface, then the user can initialize the `MapLoader` implementation with the given map name, configuration properties, and the Hazelcast instance. See the following example code.  ```java public interface MapLoaderLifecycleSupport {    /**    * Initializes this MapLoader implementation. Hazelcast will call    * this method when the map is first used on the    * HazelcastInstance. Implementation can    * initialize required resources for the implementing    * mapLoader such as reading a config file and/or creating    * database connection.    */   void init( HazelcastInstance hazelcastInstance, Properties properties, String mapName );    /**    * Hazelcast will call this method before shutting down.    * This method can be overridden to cleanup the resources    * held by this map loader implementation, such as closing the    * database connections etc.    */   void destroy(); } ```   "
});

documentTitles["map-persistence.html#initialization-on-startup"] = "Initialization On Startup";
index.add({
    url: "map-persistence.html#initialization-on-startup",
    title: "Initialization On Startup",
    body: "#### Initialization On Startup  You can use the `MapLoader.loadAllKeys` API to pre-populate the in-memory map when the map is first touched/used. If `MapLoader.loadAllKeys` returns NULL then nothing will be loaded. Your `MapLoader.loadAllKeys` implementation can return all or some of the keys. For example, you may select and return only the `hot` keys. `MapLoader.loadAllKeys` is the fastest way of pre-populating the map since Hazelcast will optimize the loading process by having each node loading its owned portion of the entries.  The `InitialLoadMode` configuration parameter in the class [`MapStoreConfig`](https://github.com/hazelcast/hazelcast/blob/5f4f6a876e572f91431ad22f01ad5af9f5837f72/hazelcast/src/main/java/com/hazelcast/config/MapStoreConfig.java) has two values: `LAZY` and `EAGER`. If `InitialLoadMode` is set to `LAZY`, data is not loaded during the map creation. If it is set to `EAGER`, the whole data is loaded while the map is created and everything becomes ready to use. Also, if you add indices to your map with the [`MapIndexConfig`](https://github.com/hazelcast/hazelcast/blob/da5cceee74e471e33f65f43f31d891c9741e31e3/hazelcast/src/main/java/com/hazelcast/config/MapIndexConfig.java) class or the [`addIndex`](#indexing) method, then `InitialLoadMode` is overridden and `MapStoreConfig` behaves as if `EAGER` mode is on.  Here is the `MapLoader` initialization flow:  1. When `getMap()` is first called from any node, initialization will start depending on the the value of `InitialLoadMode`. If it is set to `EAGER`, initialization starts.  If it is set to `LAZY`, initialization does not start but data is loaded each time a partition loading completes. 2. Hazelcast will call `MapLoader.loadAllKeys()` to get all your keys on each node. 3. Each node will figure out the list of keys it owns. 4. Each node will load all its owned keys by calling `MapLoader.loadAll(keys)`. 5. Each node puts its owned entries into the map by calling `IMap.putTransient(key,value)`.  ![image](images/NoteSmall.jpg) ***NOTE:*** *If the load mode is `LAZY` and when the `clear()` method is called (which triggers `MapStore.deleteAll()`), Hazelcast will remove **ONLY** the loaded entries from your map and datastore. Since the whole data is not loaded for this case (`LAZY` mode), please note that there may be still entries in your datastore.*  "
});

documentTitles["map-persistence.html#forcing-all-keys-to-be-loaded"] = "Forcing All Keys To Be Loaded";
index.add({
    url: "map-persistence.html#forcing-all-keys-to-be-loaded",
    title: "Forcing All Keys To Be Loaded",
    body: "#### Forcing All Keys To Be Loaded  The method `loadAll` loads some or all keys into a data store in order to optimize the multiple load operations. The method has two signatures (i.e. the same method can take two different parameter lists). One signature loads the given keys and the other loads all keys. Please see the sample code below.   ```java public class LoadAll {      public static void main(String[] args) {         final int numberOfEntriesToAdd = 1000;         final String mapName = LoadAll.class.getCanonicalName();         final Config config = createNewConfig(mapName);         final HazelcastInstance node = Hazelcast.newHazelcastInstance(config);         final IMap&lt;Integer, Integer&gt; map = node.getMap(mapName);                 populateMap(map, numberOfEntriesToAdd);         System.out.printf(\&quot;# Map store has %d elements\n\&quot;, numberOfEntriesToAdd);             map.evictAll();         System.out.printf(\&quot;# After evictAll map size\t: %d\n\&quot;, map.size());                  map.loadAll(true);         System.out.printf(\&quot;# After loadAll map size\t: %d\n\&quot;, map.size());     } } ```   "
});

documentTitles["map-persistence.html#post-processing-map-store"] = "Post Processing Map Store";
index.add({
    url: "map-persistence.html#post-processing-map-store",
    title: "Post Processing Map Store",
    body: "#### Post Processing Map Store  In some scenarios, you may need to modify the object after storing it into the map store. For example, you can get an ID or version auto generated by your database and then you need to modify your object stored in the distributed map but not to break the sync between database and data grid. You can do that by implementing the `PostProcessingMapStore` interface to put the modified object into the distributed map. That will cause an extra step of `Serialization`, so use it only when needed. (This explanation is only valid when using the `write-through` map store configuration.)  Here is an example of post processing map store:  ```java class ProcessingStore extends MapStore&lt;Integer, Employee&gt; implements PostProcessingMapStore {   @Override   public void store( Integer key, Employee employee ) {     EmployeeId id = saveEmployee();     employee.setId( id.getId() );   } } ``` "
});



documentTitles["map-nearcache.html#near-cache"] = "Near Cache";
index.add({
    url: "map-nearcache.html#near-cache",
    title: "Near Cache",
    body: "### Near Cache  Map entries in Hazelcast are partitioned across the cluster. Imagine that you are reading the key `k` so many times and `k` is owned by another member in your cluster. Each `map.get(k)` will be a remote operation, meaning lots of network trips. If you have a map that is read-mostly, then you should consider creating a Near Cache for the map so that reads can be much faster and consume less network traffic. All these benefits do not come free. When using Near Cache, you should consider the following issues:  -   JVM will have to hold extra cached data so it will increase the memory consumption.  -   If invalidation is turned on and entries are updated frequently, then invalidations will be costly.  -   Near Cache breaks the strong consistency guarantees; you might be reading stale data.  Near Cache is highly recommended for the maps that are read-mostly. Here is a Near Cache configuration for a map:  ```xml &lt;hazelcast&gt;   ...   &lt;map name=\&quot;my-read-mostly-map\&quot;&gt;     ...     &lt;near-cache&gt;       &lt;!--         Maximum size of the near cache. When max size is reached,         cache is evicted based on the policy defined.         Any integer between 0 and Integer.MAX_VALUE. 0 means         Integer.MAX_VALUE. Default is 0.       --&gt;       &lt;max-size&gt;5000&lt;/max-size&gt;              &lt;!--         Maximum number of seconds for each entry to stay in the near cache. Entries that are         older than &lt;time-to-live-seconds&gt; will get automatically evicted from the near cache.         Any integer between 0 and Integer.MAX_VALUE. 0 means infinite. Default is 0.       --&gt;       &lt;time-to-live-seconds&gt;0&lt;/time-to-live-seconds&gt;        &lt;!--         Maximum number of seconds each entry can stay in the near cache as untouched (not-read).         Entries that are not read (touched) more than &lt;max-idle-seconds&gt; value will get removed         from the near cache.         Any integer between 0 and Integer.MAX_VALUE. 0 means         Integer.MAX_VALUE. Default is 0.       --&gt;       &lt;max-idle-seconds&gt;60&lt;/max-idle-seconds&gt;        &lt;!--         Valid values are:         NONE (no extra eviction, &lt;time-to-live-seconds&gt; may still apply),         LRU  (Least Recently Used),         LFU  (Least Frequently Used).         NONE is the default.         Regardless of the eviction policy used, &lt;time-to-live-seconds&gt; will still apply.       --&gt;       &lt;eviction-policy&gt;LRU&lt;/eviction-policy&gt;        &lt;!--         Should the cached entries get evicted if the entries are changed (updated or removed).         true of false. Default is true.       --&gt;       &lt;invalidate-on-change&gt;true&lt;/invalidate-on-change&gt;        &lt;!--         You may want also local entries to be cached.         This is useful when in memory format for near cache is different than the map's one.         By default it is disabled.       --&gt;       &lt;cache-local-entries&gt;false&lt;/cache-local-entries&gt;     &lt;/near-cache&gt;   &lt;/map&gt; &lt;/hazelcast&gt; ```  ![image](images/NoteSmall.jpg) ***NOTE:*** *Programmatically, near cache configuration is done by using the class [NearCacheConfig](https://github.com/hazelcast/hazelcast/blob/607aa5484958af706ee18a1eb15d89afd12ee7af/hazelcast/src/main/java/com/hazelcast/config/NearCacheConfig.java). And this class is used both in nodes and clients. To create a Near Cache in a client (native Java client), use the method `addNearCacheConfig` in the class `ClientConfig` (please see the [Java Client section](#java-client)). Please note that Near Cache configuration is specific to the node or client itself, a map in a node may not have near cache configured while the same map in a client may have.* ![image](images/NoteSmall.jpg) ***NOTE:*** *If you are using NearCache, you should take into account that your hits to keys in NearCache are not reflected as hits to original keys on remote nodes; this has an impact on `IMaps max idle seconds or time-to-live seconds expiration`, so even there is a hit on a key in NearCache, your original key on remote node may expire. "
});



documentTitles["map-locks.html#map-locks"] = "Map Locks";
index.add({
    url: "map-locks.html#map-locks",
    title: "Map Locks",
    body: "### Map Locks  Hazelcast Distributed Map (IMap) is thread-safe to meet your thread safety requirements. When these requirements increase or you want to have more control on the concurrency, consider the following Hazelcast features and solutions.  Let's work on a sample case as shown below.  ```java public class RacyUpdateMember {     public static void main( String[] args ) throws Exception {         HazelcastInstance hz = Hazelcast.newHazelcastInstance();         IMap&lt;String, Value&gt; map = hz.getMap( \&quot;map\&quot; );         String key = \&quot;1\&quot;;         map.put( key, new Value() );         System.out.println( \&quot;Starting\&quot; );         for ( int k = 0; k &lt; 1000; k++ ) {             if ( k % 100 == 0 ) System.out.println( \&quot;At: \&quot; + k );             Value value = map.get( key );             Thread.sleep( 10 );             value.amount++;             map.put( key, value );         }         System.out.println( \&quot;Finished! Result = \&quot; + map.get(key).amount );     }      static class Value implements Serializable {         public int amount;     } } ```  If the above code is run by more than one cluster member simultaneously, there will be likely a race condition. You can solve this with Hazelcast.  "
});

documentTitles["map-locks.html#pessimistic-locking"] = "Pessimistic Locking";
index.add({
    url: "map-locks.html#pessimistic-locking",
    title: "Pessimistic Locking",
    body: "#### Pessimistic Locking  One way to solve the race issue is the lock mechanism provided by Hazelcast distributed map, i.e. the `map.lock` and `map.unlock` methods. You simply lock the entry until you are finished with it. See the below sample code.  ```java public class PessimisticUpdateMember {     public static void main( String[] args ) throws Exception {         HazelcastInstance hz = Hazelcast.newHazelcastInstance();         IMap&lt;String, Value&gt; map = hz.getMap( \&quot;map\&quot; );         String key = \&quot;1\&quot;;         map.put( key, new Value() );         System.out.println( \&quot;Starting\&quot; );         for ( int k = 0; k &lt; 1000; k++ ) {             map.lock( key );             try {                 Value value = map.get( key );                 Thread.sleep( 10 );                 value.amount++;                 map.put( key, value );             } finally {                 map.unlock( key );             }         }         System.out.println( \&quot;Finished! Result = \&quot; + map.get( key ).amount );     }      static class Value implements Serializable {         public int amount;     } } ```  The IMap lock will automatically be collected by the garbage collector when the map entry is removed.  The IMap lock is reentrant, but it does not support fairness.  Another way to solve the race issue can be acquiring a predictable `Lock` object from Hazelcast. This way, every value in the map can be given a lock or you can create a stripe of locks.   "
});

documentTitles["map-locks.html#optimistic-locking"] = "Optimistic Locking";
index.add({
    url: "map-locks.html#optimistic-locking",
    title: "Optimistic Locking",
    body: "#### Optimistic Locking  The Hazelcast way of optimistic locking is to use the `map.replace` method. See the below sample code.   ```java public class OptimisticMember {     public static void main( String[] args ) throws Exception {         HazelcastInstance hz = Hazelcast.newHazelcastInstance();         IMap&lt;String, Value&gt; map = hz.getMap( \&quot;map\&quot; );         String key = \&quot;1\&quot;;         map.put( key, new Value() );         System.out.println( \&quot;Starting\&quot; );         for ( int k = 0; k &lt; 1000; k++ ) {             if ( k % 10 == 0 ) System.out.println( \&quot;At: \&quot; + k );             for (; ; ) {                 Value oldValue = map.get( key );                 Value newValue = new Value( oldValue );                 Thread.sleep( 10 );                 newValue.amount++;                 if ( map.replace( key, oldValue, newValue ) )                     break;             }         }         System.out.println( \&quot;Finished! Result = \&quot; + map.get( key ).amount );     }      static class Value implements Serializable {         public int amount;          public Value() {         }          public Value( Value that ) {             this.amount = that.amount;         }          public boolean equals( Object o ) {             if ( o == this ) return true;             if ( !( o instanceof Value ) ) return false;             Value that = ( Value ) o;             return that.amount == this.amount;         }     } } ```  ![image](images/NoteSmall.jpg) ***NOTE:*** *Above sample code is intentionally broken.*  "
});

documentTitles["map-locks.html#pessimistic-vs-optimistic-locking"] = "Pessimistic vs. Optimistic Locking";
index.add({
    url: "map-locks.html#pessimistic-vs-optimistic-locking",
    title: "Pessimistic vs. Optimistic Locking",
    body: "#### Pessimistic vs. Optimistic Locking  Depending on the locking requirements, one locking strategy can be picked.  Optimistic locking is better for mostly read only systems. It has a performance boost over pessimistic locking.  Pessimistic locking is good if there are lots of updates on the same key. It is more robust than optimistic locking from the perspective of data consistency. In Hazelcast, use `IExecutorService` to submit a task to a key owner, or to a member or members. This is the recommended way to perform task executions that use pessimistic or optimistic locking techniques. `IExecutorService` will have less network hops and less data over wire, and tasks will be executed very near to the data. Please refer to the [Data Affinity section](#data-affinity).  "
});

documentTitles["map-locks.html#aba-problem"] = "ABA Problem";
index.add({
    url: "map-locks.html#aba-problem",
    title: "ABA Problem",
    body: "#### ABA Problem  The ABA problem occurs in environments when a shared resource is open to change by multiple threads. Even if one thread sees the same value for a particular key in consecutive reads, it does not mean nothing has changed between the reads. Another thread may come and change the value, do work, and change the value back, but the first thread can think that nothing has changed.  To prevent these kind of problems, one solution is to use a version number and to check it before any write to be sure that nothing has changed between consecutive reads. Although all the other fields will be equal, the version field will prevent objects from being seen as equal. This is the optimistic locking strategy, and it is used in environments which do not expect intensive concurrent changes on a specific key.  In Hazelcast, you can apply optimistic locking strategy with the map `replace` method. This method compares values in object or data forms depending on the in-memory format configuration. If the values are equal, it replaces the old value with the new one. If you want to use your defined `equals` method, in-memory format should be `Object`. Otherwise, Hazelcast serializes objects to binary forms and compares them.  "
});



documentTitles["map-entrystatistics.html#entry-statistics"] = "Entry Statistics";
index.add({
    url: "map-entrystatistics.html#entry-statistics",
    title: "Entry Statistics",
    body: "### Entry Statistics  Hazelcast keeps extra information about each map entry, such as creation time, last update time, last access time, number of hits, and version. This information is exposed to the developer via a `IMap.getEntryView(key)` call. Here is an example:  ```java import com.hazelcast.core.Hazelcast; import com.hazelcast.core.EntryView;  HazelcastInstance hz = Hazelcast.newHazelcastInstance(); EntryView entry = hz.getMap( \&quot;quotes\&quot; ).getEntryView( \&quot;1\&quot; ); System.out.println ( \&quot;size in memory  : \&quot; + entry.getCost() ); System.out.println ( \&quot;creationTime    : \&quot; + entry.getCreationTime() ); System.out.println ( \&quot;expirationTime  : \&quot; + entry.getExpirationTime() ); System.out.println ( \&quot;number of hits  : \&quot; + entry.getHits() ); System.out.println ( \&quot;lastAccessedTime: \&quot; + entry.getLastAccessTime() ); System.out.println ( \&quot;lastUpdateTime  : \&quot; + entry.getLastUpdateTime() ); System.out.println ( \&quot;version         : \&quot; + entry.getVersion() ); System.out.println ( \&quot;key             : \&quot; + entry.getKey() ); System.out.println ( \&quot;value           : \&quot; + entry.getValue() ); ```   "
});



documentTitles["map-entrylistener.html#entry-listener"] = "Entry Listener";
index.add({
    url: "map-entrylistener.html#entry-listener",
    title: "Entry Listener",
    body: "### Entry Listener  You can listen to map entry events. Hazelcast distributed map offers the method `addEntryListener` to add an entry listener to the map.   Let's take a look at the below sample code.  ```java public class Listen {    public static void main( String[] args ) {     HazelcastInstance hz = Hazelcast.newHazelcastInstance();     IMap&lt;String, String&gt; map = hz.getMap( \&quot;somemap\&quot; );     map.addEntryListener( new MyEntryListener(), true );      System.out.println( \&quot;EntryListener registered\&quot; );   }    static class MyEntryListener implements EntryListener&lt;String, String&gt; {     @Override     public void entryAdded( EntryEvent&lt;String, String&gt; event ) {       System.out.println( \&quot;Entry Added:\&quot; + event );     }      @Override     public void entryRemoved( EntryEvent&lt;String, String&gt; event ) {       System.out.println( \&quot;Entry Removed:\&quot; + event );     }      @Override     public void entryUpdated( EntryEvent&lt;String, String&gt; event ) {       System.out.println( \&quot;Entry Updated:\&quot; + event );     }      @Override     public void entryEvicted( EntryEvent&lt;String, String&gt; event ) {       System.out.println( \&quot;Entry Evicted:\&quot; + event );     }      @Override     public void mapEvicted( MapEvent event ) {       System.out.println( \&quot;Map Evicted:\&quot; + event );     }         @Override     public void mapCleared( MapEvent event ) {       System.out.println( \&quot;Map Cleared:\&quot; + event );     }    } } ```  And, now let's perform some modifications on the map entries using the below sample code.  ```java public class Modify {    public static void main( String[] args ) {     HazelcastInstance hz = Hazelcast.newHazelcastInstance();     IMap&lt;String, String&gt; map = hz.getMap( \&quot;somemap\&quot;);     String key = \&quot;\&quot; + System.nanoTime();     String value = \&quot;1\&quot;;     map.put( key, value );     map.put( key, \&quot;2\&quot; );     map.delete( key );   } } ```  If you execute the class `Listen` and then execute `Modify`, you might get the below output produced by `Listen`.   ``` entryAdded:EntryEvent {Address[192.168.1.100]:5702} key=251359212222282,     oldValue=null, value=1, event=ADDED, by Member [192.168.1.100]:5702  entryUpdated:EntryEvent {Address[192.168.1.100]:5702} key=251359212222282,     oldValue=1, value=2, event=UPDATED, by Member [192.168.1.100]:5702  entryRemoved:EntryEvent {Address[192.168.1.100]:5702} key=251359212222282,     oldValue=2, value=2, event=REMOVED, by Member [192.168.1.100]:5702 ```  Entry Listener runs on event threads which are also used by other listeners (e.g. collection listeners, pub/sub message listeners, etc.). This means entry listeners can access other partitions. Consider this when you run long tasks, since listening to those tasks may cause other event listeners to starve.  "
});



documentTitles["map-interceptors.html#interceptors"] = "Interceptors";
index.add({
    url: "map-interceptors.html#interceptors",
    title: "Interceptors",
    body: "### Interceptors  You can add intercept operations and then execute your own business logic synchronously blocking the operations. You can change the returned value from a `get` operation, change the value to be `put` or `cancel` operations by throwing an exception.  Interceptors are different from listeners. With listeners, you take an action after the operation has been completed. Interceptor actions are synchronous and you can alter the behavior of operation, change the values, or totally cancel it.  Map interceptors are chained, so adding the same interceptor multiple times to the same map can result in duplicate effects. This can easily happen when the interceptor is added to the map at node initialization, so that each node adds the same interceptor. When adding the interceptor in this way, be sure that the `hashCode()` method is implemented to return the same value for every instance of the interceptor. It is not strictly necessary, but it is a good idea to also implement `equals()` as this will ensure that the map interceptor can be removed reliably.  IMap API has two methods for adding and removing an interceptor to the map,`addInterceptor` and `removeInterceptor`:  ```java /**  * Adds an interceptor for this map. Added interceptor will intercept operations  * and execute user defined methods and will cancel operations if user defined method throw exception.  *   *  * @param interceptor map interceptor  * @return id of registered interceptor  */ String addInterceptor( MapInterceptor interceptor );  /**  * Removes the given interceptor for this map. So it will not intercept operations anymore.  *   *  * @param id registration id of map interceptor  */ void removeInterceptor( String id ); ```  Here is the `MapInterceptor` interface:  ```java public interface MapInterceptor extends Serializable {    /**    * Intercept the get operation before it returns a value.    * Return another object to change the return value of get(..)    * Returning null will cause the get(..) operation to return the original value,    * namely return null if you do not want to change anything.    *     *    * @param value the original value to be returned as the result of get(..) operation    * @return the new value that will be returned by get(..) operation    */   Object interceptGet( Object value );    /**    * Called after get(..) operation is completed.    *     *    * @param value the value returned as the result of get(..) operation    */   void afterGet( Object value );    /**    * Intercept put operation before modifying map data.    * Return the object to be put into the map.    * Returning null will cause the put(..) operation to operate as expected,    * namely no interception. Throwing an exception will cancel the put operation.    *     *    * @param oldValue the value currently in map    * @param newValue the new value to be put    * @return new value after intercept operation    */   Object interceptPut( Object oldValue, Object newValue );    /**    * Called after put(..) operation is completed.    *     *    * @param value the value returned as the result of put(..) operation    */   void afterPut( Object value );    /**    * Intercept remove operation before removing the data.    * Return the object to be returned as the result of remove operation.    * Throwing an exception will cancel the remove operation.    *     *    * @param removedValue the existing value to be removed    * @return the value to be returned as the result of remove operation    */   Object interceptRemove( Object removedValue );    /**    * Called after remove(..) operation is completed.    *     *    * @param value the value returned as the result of remove(..) operation    */   void afterRemove( Object value ); } ```  **Example Usage:**  ```java public class InterceptorTest {    @Test   public void testMapInterceptor() throws InterruptedException {     HazelcastInstance hazelcastInstance1 = Hazelcast.newHazelcastInstance();     HazelcastInstance hazelcastInstance2 = Hazelcast.newHazelcastInstance();     IMap&lt;Object, Object&gt; map = hazelcastInstance1.getMap( \&quot;testMapInterceptor\&quot; );     SimpleInterceptor interceptor = new SimpleInterceptor();     map.addInterceptor( interceptor );     map.put( 1, \&quot;New York\&quot; );     map.put( 2, \&quot;Istanbul\&quot; );     map.put( 3, \&quot;Tokyo\&quot; );     map.put( 4, \&quot;London\&quot; );     map.put( 5, \&quot;Paris\&quot; );     map.put( 6, \&quot;Cairo\&quot; );     map.put( 7, \&quot;Hong Kong\&quot; );      try {       map.remove( 1 );     } catch ( Exception ignore ) {     }     try {       map.remove( 2 );     } catch ( Exception ignore ) {     }      assertEquals( map.size(), 6) ;      assertEquals( map.get( 1 ), null );     assertEquals( map.get( 2 ), \&quot;ISTANBUL:\&quot; );     assertEquals( map.get( 3 ), \&quot;TOKYO:\&quot; );     assertEquals( map.get( 4 ), \&quot;LONDON:\&quot; );     assertEquals( map.get( 5 ), \&quot;PARIS:\&quot; );     assertEquals( map.get( 6 ), \&quot;CAIRO:\&quot; );     assertEquals( map.get( 7 ), \&quot;HONG KONG:\&quot; );      map.removeInterceptor( interceptor );     map.put( 8, \&quot;Moscow\&quot; );      assertEquals( map.get( 8 ), \&quot;Moscow\&quot; );     assertEquals( map.get( 1 ), null );     assertEquals( map.get( 2 ), \&quot;ISTANBUL\&quot; );     assertEquals( map.get( 3 ), \&quot;TOKYO\&quot; );     assertEquals( map.get( 4 ), \&quot;LONDON\&quot; );     assertEquals( map.get( 5 ), \&quot;PARIS\&quot; );     assertEquals( map.get( 6 ), \&quot;CAIRO\&quot; );     assertEquals( map.get( 7 ), \&quot;HONG KONG\&quot; );   }    static class SimpleInterceptor implements MapInterceptor, Serializable {      @Override     public Object interceptGet( Object value ) {       if (value == null)         return null;       return value + \&quot;:\&quot;;     }      @Override     public void afterGet( Object value ) {     }      @Override     public Object interceptPut( Object oldValue, Object newValue ) {       return newValue.toString().toUpperCase();     }      @Override     public void afterPut( Object value ) {     }      @Override     public Object interceptRemove( Object removedValue ) {       if(removedValue.equals( \&quot;ISTANBUL\&quot; ))         throw new RuntimeException( \&quot;you can not remove this\&quot; );       return removedValue;     }      @Override     public void afterRemove( Object value ) {       // do something     }   } } ```   "
});



documentTitles["queue.html#queue"] = "Queue";
index.add({
    url: "queue.html#queue",
    title: "Queue",
    body: "## Queue  "
});

documentTitles["queue.html#queue-overview"] = "Queue Overview";
index.add({
    url: "queue.html#queue-overview",
    title: "Queue Overview",
    body: "### Queue Overview  Hazelcast distributed queue is an implementation of `java.util.concurrent.BlockingQueue`. Being distributed, it enables all cluster members to interact with it. Using Hazelcast distributed queue, you can add an item in one machine and remove it from another one.  ```java import com.hazelcast.core.Hazelcast; import java.util.concurrent.BlockingQueue; import java.util.concurrent.TimeUnit;  HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); BlockingQueue&lt;MyTask&gt; queue = hazelcastInstance.getQueue( \&quot;tasks\&quot; ); queue.put( new MyTask() ); MyTask task = queue.take();  boolean offered = queue.offer( new MyTask(), 10, TimeUnit.SECONDS ); task = queue.poll( 5, TimeUnit.SECONDS ); if ( task != null ) {   //process task } ```  FIFO ordering will apply to all queue operations across the cluster. User objects (such as `MyTask` in the example above) that are enqueued or dequeued have to be `Serializable`.  Hazelcast distributed queue performs no batching while iterating over the queue. All items will be copied locally and iteration will occur locally.  "
});



documentTitles["samplequeuecode.html#sample-queue-code"] = "Sample Queue Code";
index.add({
    url: "samplequeuecode.html#sample-queue-code",
    title: "Sample Queue Code",
    body: "### Sample Queue Code  The following sample code illustrates a producer and consumer connected by a distributed queue.  Let's put one integer on the queue every second, 100 integers total.  ```java import com.hazelcast.core.Hazelcast; import com.hazelcast.core.HazelcastInstance; import com.hazelcast.core.IQueue;  public class ProducerMember {   public static void main( String[] args ) throws Exception {     HazelcastInstance hz = Hazelcast.newHazelcastInstance();     IQueue&lt;Integer&gt; queue = hz.getQueue( \&quot;queue\&quot; );     for ( int k = 1; k &lt; 100; k++ ) {       queue.put( k );       System.out.println( \&quot;Producing: \&quot; + k );       Thread.sleep(1000);     }     queue.put( -1 );     System.out.println( \&quot;Producer Finished!\&quot; );   } } ```   `Producer` puts a **-1** on the queue to show that the `put`'s are finished. Now, let's create a `Consumer` class that take a message from this queue, as shown below.   ```java import com.hazelcast.core.Hazelcast; import com.hazelcast.core.HazelcastInstance; import com.hazelcast.core.IQueue;  public class ConsumerMember {   public static void main( String[] args ) throws Exception {     HazelcastInstance hz = Hazelcast.newHazelcastInstance();     IQueue&lt;Integer&gt; queue = hz.getQueue( \&quot;queue\&quot; );     while ( true ) {       int item = queue.take();       System.out.println( \&quot;Consumed: \&quot; + item );       if ( item == -1 ) {         queue.put( -1 );         break;       }       Thread.sleep( 5000 );     }     System.out.println( \&quot;Consumer Finished!\&quot; );   } } ```  As seen in the above sample code, `Consumer` waits 5 seconds before it consumes the next message. It stops once it receives **-1**. Also note that `Consumer` puts **-1** back on the queue before the loop is ended.   When you first start `Producer` and then start `Consumer`, items produced on the queue will be consumed from the same queue.  From the above sample code, you can see that an item is produced every second, and consumed every 5 seconds. Therefore, the consumer keeps growing. To balance the produce/consume operation, let's start another consumer. By this way, consumption is distributed to these two consumers, as seen in the sample outputs below.   The second consumer is started. After a while, here is the first consumer output:  ```plain ... Consumed 13  Consumed 15 Consumer 17 ... ```  Here is the second consumer output:  ```plain ... Consumed 14  Consumed 16 Consumer 18 ... ```  In the case of a lot of producers and consumers for the queue, using a list of queues may solve the queue bottlenecks. In this case, be aware that the order of the messages being sent to different queues is not guaranteed. Since in most cases strict ordering is not important, a list of queues is a good solution.  ![image](images/NoteSmall.jpg) ***NOTE:*** *The items are taken from the queue in the same order they were put on the queue. However, if there is more than one consumer, this order is not guaranteed.* "
});



documentTitles["boundedqueue.html#bounded-queue"] = "Bounded Queue";
index.add({
    url: "boundedqueue.html#bounded-queue",
    title: "Bounded Queue",
    body: "### Bounded Queue  A bounded queue is a queue with a limited capacity. When the bounded queue is full, no more items can be put into the queue until some items are taken out.  A Hazelcast distributed queue can be turned into a bounded queue by setting the capacity limit using the `max-size` property.  Queue capacity can be set using the `max-size` property in the configuration, as shown below. `max-size` specifies the maximum size of the queue. Once the queue size reaches this value, `put` operations will be blocked until the queue size goes below `max-size`, that happens when a consumer removes items from the queue.  Let's set **10** as the maximum size of our sample queue in the Sample Queue Code.   ```xml &lt;hazelcast&gt;   ...   &lt;queue name=\&quot;queue\&quot;&gt;     &lt;max-size&gt;10&lt;/max-size&gt;   &lt;/queue&gt;   ... &lt;/hazelcast&gt; ```  When the producer is started, 10 items are put into the queue and then the queue will not allow more `put` operations. When the consumer is started, it will remove items from the queue. This means that the producer can `put` more items into the queue until there are 10 items in the queue again, at which point `put` operation again become blocked.  But in this sample code, the producer is 5 times faster than the consumer. It will effectively always be waiting for the consumer to remove items before it can put more on the queue. For this sample code, if maximum throughput was the goal, it would be a good option to start multiple consumers to prevent the queue from filling up.   "
});



documentTitles["queue-persistence.html#queue-persistence"] = "Queue Persistence";
index.add({
    url: "queue-persistence.html#queue-persistence",
    title: "Queue Persistence",
    body: "### Queue Persistence   Hazelcast allows you to load and store the distributed queue items from/to a persistent datastore using the interface `QueueStore`. If queue store is enabled, each item added to the queue will also be stored at the configured queue store. When the number of items in the queue exceeds the memory limit, the items will only persisted in the queue store, they will not be stored in the queue memory.   `QueueStore` interface enables you to store, load, and delete items with methods like `store`, `storeAll`, `load` and `delete`. The following example class includes all of the `QueueStore` methods.  ```java public class TheQueueStore implements QueueStore&lt;Item&gt; {     @Override     public void delete(Long key) {         System.out.println(\&quot;delete\&quot;);     }      @Override     public void store(Long key, Item value) {         System.out.println(\&quot;store\&quot;);     }      @Override     public void storeAll(Map&lt;Long, Item&gt; map) {         System.out.println(\&quot;store all\&quot;);     }      @Override     public void deleteAll(Collection&lt;Long&gt; keys) {         System.out.println(\&quot;deleteAll\&quot;);     }      @Override     public Item load(Long key) {         System.out.println(\&quot;load\&quot;);         return null;     }      @Override     public Map&lt;Long, Item&gt; loadAll(Collection&lt;Long&gt; keys) {         System.out.println(\&quot;loadAll\&quot;);         return null;     }      @Override     public Set&lt;Long&gt; loadAllKeys() {         System.out.println(\&quot;loadAllKeys\&quot;);         return null;     } ```  `Item` must be serializable. Following is an example queue store configuration.  ```xml &lt;queue-store&gt;   &lt;class-name&gt;com.hazelcast.QueueStoreImpl&lt;/class-name&gt;   &lt;properties&gt;     &lt;property name=\&quot;binary\&quot;&gt;false&lt;/property&gt;     &lt;property name=\&quot;memory-limit\&quot;&gt;10000&lt;/property&gt;     &lt;property name=\&quot;bulk-load\&quot;&gt;500&lt;/property&gt;   &lt;/properties&gt; &lt;/queue-store&gt; ```  Let's explain the properties.  -   **Binary**:     By default, Hazelcast stores the queue items in serialized form in memory. Before it inserts the queue items into datastore, it deserializes them. But if you will not reach the queue store from an external application, you might prefer that the items be inserted in binary form. You can get rid of the de-serialization step; this would be a performance optimization. The binary feature is disabled by default.      -   **Memory Limit**:     This is the number of items after which Hazelcast will store items only to datastore. For example, if the memory limit is 1000, then the 1001st item will be put only to datastore. This feature is useful when you want to avoid out-of-memory conditions. The default number for `memory-limit` is 1000. If you want to always use memory, you can set it to `Integer.MAX_VALUE`.      -   **Bulk Load**:     When the queue is initialized, items are loaded from `QueueStore` in bulks. Bulk load is the size of these bulks. By default, `bulk-load` is 250.  "
});



documentTitles["queueconfiguration.html#configuring-queue"] = "Configuring Queue";
index.add({
    url: "queueconfiguration.html#configuring-queue",
    title: "Configuring Queue",
    body: "### Configuring Queue  An example declarative configuration is shown below.  ```xml &lt;hazelcast&gt;   ...   &lt;queue name=\&quot;tasks\&quot;&gt;     &lt;max-size&gt;10&lt;/max-size&gt;     &lt;backup-count&gt;1&lt;/backup-count&gt;     &lt;async-backup-count&gt;1&lt;/async-backup-count&gt;     &lt;empty-queue-ttl&gt;10&lt;/empty-queue-ttl&gt;   &lt;/queue&gt; &lt;/hazelcast&gt; ```  Hazelcast distributed queue has one synchronous backup by default. By having this backup, when a cluster member with a queue goes down, another member having the backups will continue. Therefore, no items are lost. You can define the count of synchronous backups using the `backup-count` element in the declarative configuration. A queue can also have asynchronous backups, you can define the count using the `async-backup-count` element.   The `max-size` element defines the maximum size of the queue. You can use the `empty-queue-ttl` element when you want to purge unused or empty queues after a period of time. If you define a value (time in seconds) for this element, then your queue will be destroyed if it stays empty or unused for the time you give.  &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***  *Please refer to the [Queue Configuration section](#queue-configuration) for a full description of Hazelcast Distributed Queue configuration.*  "
});



documentTitles["multimap.html#multimap"] = "MultiMap";
index.add({
    url: "multimap.html#multimap",
    title: "MultiMap",
    body: "## MultiMap  Hazelcast `MultiMap` is a specialized map where you can store multiple values under a single key. Just like any other distributed data structure implementation in Hazelcast, `MultiMap` is distributed and thread-safe.  Hazelcast `MultiMap` is not an implementation of `java.util.Map` due to the difference in method signatures. It supports most features of Hazelcast Map except for indexing, predicates and MapLoader/MapStore. Yet, like Hazelcast Map, entries are almost evenly distributed onto all cluster members. When a new member joins the cluster, the same ownership logic used in the distributed map applies.   "
});

documentTitles["multimap.html#sample-multimap-code"] = "Sample MultiMap Code";
index.add({
    url: "multimap.html#sample-multimap-code",
    title: "Sample MultiMap Code",
    body: "### Sample MultiMap Code  Let's write code that puts data into a MultiMap.   ```java public class PutMember {   public static void main( String[] args ) {     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     MultiMap &lt;String , String &gt; map = hazelcastInstance.getMultiMap( \&quot;map\&quot; );      map.put( \&quot;a\&quot;, \&quot;1\&quot; );     map.put( \&quot;a\&quot;, \&quot;2\&quot; );     map.put( \&quot;b\&quot;, \&quot;3\&quot; );      System.out.println( \&quot;PutMember:Done\&quot; );   } } ```  Now let's print the entries in this MultiMap.  ```java public class PrintMember {   public static void main( String[] args ) {      HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     MultiMap &lt;String, String &gt; map = hazelcastInstance.getMultiMap( \&quot;map\&quot; );     for ( String key : map.keySet() ){       Collection &lt;String &gt; values = map.get( key );       System.out.println( \&quot;%s -&gt; %s\n\&quot;,key, values );     }   } } ```  After you run the first code sample, run the `PrintMember` sample. You will see the key **`a`** has two values, as shown below.  `b -&gt; [3]`  `a -&gt; [2, 1]`  "
});

documentTitles["multimap.html#configuring-multimap"] = "Configuring MultiMap";
index.add({
    url: "multimap.html#configuring-multimap",
    title: "Configuring MultiMap",
    body: "### Configuring MultiMap  When using MultiMap, the collection type of the values can be either **Set** or **List**. You configure the collection type with the `valueCollectionType` parameter. If you choose `Set`, duplicate and null values are not allowed in your collection and ordering is irrelevant. If you choose `List`, ordering is relevant and your collection can include duplicate and null values.  You can also enable statistics for your MultiMap with the `statisticsEnabled` parameter. If you enable `statisticsEnabled`, statistics can be retrieved with `getLocalMultiMapStats()` method. &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***  *Please refer to the [MultiMap Configuration section](#multimap-configuration) for a full description of Hazelcast Distributed MultiMap configuration.*   "
});



documentTitles["set.html#set"] = "Set";
index.add({
    url: "set.html#set",
    title: "Set",
    body: "## Set  Hazelcast Set is a distributed and concurrent implementation of `java.util.Set`.  * Hazelcast Set does not allow duplicate elements. * Hazelcast Set does not preserve the order of elements. * Hazelcast Set is a non-partitioned data structure: all the data that belongs to a set will live on one single partition in that node. * Hazelcast Set cannot be scaled beyond the capacity of a single machine. Since the whole set lives on a single partition, storing large amount of data on a single set may cause memory pressure. Therefore, you should use multiple sets to store large amount of data; this way all the sets will be spread across the cluster, hence sharing the load. * A backup of Hazelcast Set is stored on a partition of another node in the cluster so that data is not lost in the event of a primary node failure. * All items are copied to the local node and iteration occurs locally. * The equals method implemented in Hazelcast Set uses a serialized byte version of objects, as opposed to `java.util.HashSet`.  "
});

documentTitles["set.html#sample-set-code"] = "Sample Set Code";
index.add({
    url: "set.html#sample-set-code",
    title: "Sample Set Code",
    body: "### Sample Set Code  ```java import com.hazelcast.core.Hazelcast; import java.util.Set; import java.util.Iterator;  HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();  Set&lt;Price&gt; set = hazelcastInstance.getSet( \&quot;IBM-Quote-History\&quot; ); set.add( new Price( 10, time1 ) ); set.add( new Price( 11, time2 ) ); set.add( new Price( 12, time3 ) ); set.add( new Price( 11, time4 ) ); //.... Iterator&lt;Price&gt; iterator = set.iterator(); while ( iterator.hasNext() ) {    Price price = iterator.next();    //analyze } ```  "
});

documentTitles["set.html#event-registration-and-configuration-for-set"] = "Event Registration and Configuration for Set";
index.add({
    url: "set.html#event-registration-and-configuration-for-set",
    title: "Event Registration and Configuration for Set",
    body: "### Event Registration and Configuration for Set  Hazelcast Set uses `ItemListener` to listen to events which occur when items are added and removed.  ```java import java.util.Queue; import java.util.Map;  import java.util.Set;  import com.hazelcast.core.Hazelcast; import com.hazelcast.core.ItemListener; import com.hazelcast.core.EntryListener; import com.hazelcast.core.EntryEvent;   public class Sample implements ItemListener {    public static void main( String[] args ) {      Sample sample = new Sample();     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     ISet&lt;Price&gt; set = hazelcastInstance.getSet( \&quot;default\&quot; );     set.addItemListener( sample, true );               Price price = new Price( 10, time1 )     set.add( price );     set.remove( price );   }     public void itemAdded( Object item ) {     System.out.println( \&quot;Item added = \&quot; + item );   }    public void itemRemoved( Object item ) {     System.out.println( \&quot;Item removed = \&quot; + item );   }      }         ```  &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***  *To learn more about the configuration of listeners please refer to the [Listener Configurations section](#listener-configurations).*  &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [Set Configuration section](#set-configuration) for a full description of Hazelcast Distributed Set configuration.*  "
});



documentTitles["list.html#list"] = "List";
index.add({
    url: "list.html#list",
    title: "List",
    body: "## List  Hazelcast List is similar to Hazelcast Set, but Hazelcast List also allows duplicate elements.  * Besides allowing duplicate elements, Hazelcast List preserves the order of elements. * Hazelcast List is a non-partitioned data structure where values and each backup are represented by their own single partition. * Hazelcast List cannot be scaled beyond the capacity of a single machine. * All items are copied to local and iteration occurs locally.  "
});

documentTitles["list.html#sample-list-code"] = "Sample List Code";
index.add({
    url: "list.html#sample-list-code",
    title: "Sample List Code",
    body: "### Sample List Code  ```java import com.hazelcast.core.Hazelcast; import java.util.List; import java.util.Iterator;  HazelcastInstance hz = Hazelcast.newHazelcastInstance();  List&lt;Price&gt; list = hz.getList( \&quot;IBM-Quote-Frequency\&quot; ); list.add( new Price( 10 ) ); list.add( new Price( 11 ) ); list.add( new Price( 12 ) ); list.add( new Price( 11 ) ); list.add( new Price( 12 ) );          //.... Iterator&lt;Price&gt; iterator = list.iterator(); while ( iterator.hasNext() ) {    Price price = iterator.next();    //analyze } ```  "
});

documentTitles["list.html#event-registration-and-configuration-for-list"] = "Event Registration and Configuration for List";
index.add({
    url: "list.html#event-registration-and-configuration-for-list",
    title: "Event Registration and Configuration for List",
    body: "### Event Registration and Configuration for List  Hazelcast List uses `ItemListener` to listen to events which occur when items are added and removed.   ```java import java.util.Queue; import java.util.Map;  import java.util.Set;  import com.hazelcast.core.Hazelcast; import com.hazelcast.core.ItemListener; import com.hazelcast.core.EntryListener; import com.hazelcast.core.EntryEvent;   public class Sample implements ItemListener{    public static void main( String[] args ) {      Sample sample = new Sample();     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     IList&lt;Price&gt; list = hazelcastInstance.getList( \&quot;default\&quot; );     list.addItemListener( sample, true );               Price price = new Price( 10, time1 )     list.add( price );     list.remove( price );   }     public void itemAdded( Object item ) {     System.out.println( \&quot;Item added = \&quot; + item );   }    public void itemRemoved( Object item ) {     System.out.println( \&quot;Item removed = \&quot; + item );   }      }         ```  &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***  *To learn more about the configuration of listeners please refer to the [Listener Configurations section](#listener-configurations).*  &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [List Configuration section](#list-configuration) for a full description of Hazelcast Distributed List configuration.*   "
});



documentTitles["topic.html#topic"] = "Topic";
index.add({
    url: "topic.html#topic",
    title: "Topic",
    body: "## Topic  Hazelcast provides a distribution mechanism for publishing messages that are delivered to multiple subscribers. This is also known as a publish/subscribe (pub/sub) messaging model. Publishing and subscribing operations are cluster wide. When a member subscribes to a topic, it is actually registering for messages published by any member in the cluster, including the new members that joined after you add the listener.  ![image](images/NoteSmall.jpg) ***NOTE:*** *Publish operation is async. It does not wait for operations to run in remote nodes, it works as fire and forget.*  "
});

documentTitles["topic.html#sample-topic-code"] = "Sample Topic Code";
index.add({
    url: "topic.html#sample-topic-code",
    title: "Sample Topic Code",
    body: "### Sample Topic Code  ```java import com.hazelcast.core.Topic; import com.hazelcast.core.Hazelcast; import com.hazelcast.core.MessageListener;  public class Sample implements MessageListener&lt;MyEvent&gt; {    public static void main( String[] args ) {     Sample sample = new Sample();     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     ITopic topic = hazelcastInstance.getTopic( \&quot;default\&quot; );     topic.addMessageListener( sample );     topic.publish( new MyEvent() );   }    public void onMessage( Message&lt;MyEvent&gt; message ) {     MyEvent myEvent = message.getMessageObject();     System.out.println( \&quot;Message received = \&quot; + myEvent.toString() );     if ( myEvent.isHeavyweight() ) {       messageExecutor.execute( new Runnable() {           public void run() {             doHeavyweightStuff( myEvent );           }       } );     }   }    // ...    private final Executor messageExecutor = Executors.newSingleThreadExecutor(); } ```   "
});



documentTitles["topicstatistics.html#statistics"] = "Statistics";
index.add({
    url: "topicstatistics.html#statistics",
    title: "Statistics",
    body: "### Statistics  Topic has two statistic variables that you can query. These values are incremental and local to the member.  ```java HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); ITopic&lt;Object&gt; myTopic = hazelcastInstance.getTopic( \&quot;myTopicName\&quot; );  myTopic.getLocalTopicStats().getPublishOperationCount(); myTopic.getLocalTopicStats().getReceiveOperationCount(); ```   `getPublishOperationCount` and `getReceiveOperationCount` returns the total number of published and received messages since the start of this node, respectively. Please note that these values are not backed up, so if the node goes down, these values will be lost.  You can disable this feature with topic configuration. Please see the [Topic Configuration section](#topic-configuration).  ![image](images/NoteSmall.jpg) ***NOTE:*** *These statistics values can be also viewed in Management Center. Please see the [Topics section](#topics)*.     "
});



documentTitles["topicinternals.html#internals"] = "Internals";
index.add({
    url: "topicinternals.html#internals",
    title: "Internals",
    body: "### Internals  Each node has a list of all registrations in the cluster. When a new node is registered for a topic, it sends a registration message to all members in the cluster. Also, when a new node joins the cluster, it will receive all registrations made so far in the cluster.  The behavior of a topic varies depending on the value of the configuration parameter `globalOrderEnabled`.  - If `globalOrderEnabled` is disabled:   Messages are ordered, i.e. listeners (subscribers) process the messages in the order that the messages are published. If cluster member M publishes messages *m1, m2, m3, ..., mn* to a topic **T**, then Hazelcast makes sure that all of the subscribers of topic **T** will receive and process *m1, m2, m3, ..., mn* in the given order.  Here is how it works. Let's say that we have three nodes (*node1*, *node2* and *node3*) and that *node1* and *node2* are registered to a topic named `news`. Note that all three nodes know that *node1* and *node2* are registered to `news`. 	 In this example, *node1* publishes two messages: `a1` and `a2`, and *node3* publishes two messages: `c1` and `c2`. When *node1* and *node3* publish a message, they will check their local list for registered nodes, and they will discover that *node1* and *node2* are in their lists, then they will fire messages to those nodes. One possible order of the messages received can be the following.  *node1* -&gt; `c1`, `b1`, `a2`, `c2`  *node2* -&gt; `c1`, `c2`, `a1`, `a2`  - If `globalOrderEnabled` is enabled:   When enabled, `globalOrderEnabled` guarantees that all nodes listening to the same topic will get its messages in the same order.  Here is how it works. Let's say that we have three nodes (*node1*, *node2* and *node3*) and that *node1* and *node2* are registered to a topic named `news`. Note that all three nodes know that *node1* and *node2* are registered to `news`.  In this example, *node1* publishes two messages: `a1` and `a2`, and *node3* publishes two messages: `c1` and `c2`. When a node publishes messages over the topic `news`, it first calculates which partition the `news` ID corresponds to. Then it sends an operation to the owner of the partition for that node to publish messages. Let's assume that `news` corresponds to a partition that *node2* owns. *node1* and *node3* first sends all messages to *node2*. Assume that the messages are published in the following order:  *node1* -&gt; `a1`, `c1`, `a2`, `c2`  *node2* then publishes these messages by looking at registrations in its local list. It sends these messages to *node1* and *node2* (it makes a local dispatch for itself).  *node1* -&gt; `a1`, `c1`, `a2`, `c2`  *node2* -&gt; `a1`, `c1`, `a2`, `c2`  This way, we guarantee that all nodes will see the events in the same order.  In both cases, there is a `StripedExecutor` in EventService that is responsible for dispatching the received message. For all events in Hazelcast, the order that events are generated and the order they are published to the user are guaranteed to be the same via this `StripedExecutor`.  In `StripedExecutor`, there are as many threads as are specified in the property  `hazelcast.event.thread.count` (default is 5). For a specific event source (for a particular topic name), *hash of that source's name % 5* gives the ID of the responsible thread. Note that there can be another event source (entry listener of a map, item listener of a collection, etc.) corresponding to the same thread. In order not to make other messages to block, heavy processing should not be done in this thread. If there is time consuming work that needs to be done, the work should be handed over to another thread. Please see the [Sample Topic Code section](#sample-topic-code)."
});



documentTitles["topicconfiguration.html#configuring-topic"] = "Configuring Topic";
index.add({
    url: "topicconfiguration.html#configuring-topic",
    title: "Configuring Topic",
    body: "### Configuring Topic  **Declarative Configuration:**  ```xml &lt;hazelcast&gt;   ...   &lt;topic name=\&quot;yourTopicName\&quot;&gt;     &lt;global-ordering-enabled&gt;true&lt;/global-ordering-enabled&gt;     &lt;statistics-enabled&gt;true&lt;/statistics-enabled&gt;     &lt;message-listeners&gt;       &lt;message-listener&gt;MessageListenerImpl&lt;/message-listener&gt;     &lt;/message-listeners&gt;   &lt;/topic&gt;   ... &lt;/hazelcast&gt; ```  **Programmatic Configuration:**  ```java TopicConfig topicConfig = new TopicConfig(); topicConfig.setGlobalOrderingEnabled( true ); topicConfig.setStatisticsEnabled( true ); topicConfig.setName( \&quot;yourTopicName\&quot; ); MessageListener&lt;String&gt; implementation = new MessageListener&lt;String&gt;() {   @Override   public void onMessage( Message&lt;String&gt; message ) {     // process the message   } }; topicConfig.addMessageListenerConfig( new ListenerConfig( implementation ) ); HazelcastInstance instance = Hazelcast.newHazelcastInstance() ```  Default values are:  - `global-ordering` is **false**, meaning that by default, there is no guarantee of global order.  - `statistics` is **true**, meaning that by default, statistics are calculated.  Topic related but not topic specific configuration parameters:     - `hazelcast.event.queue.capacity`: default value is 1,000,000    - `hazelcast.event.queue.timeout.millis`: default value is 250    - `hazelcast.event.thread.count`: default value is 5     &lt;br&gt;&lt;/br&gt; ***RELATED INFORMATION***   *For description of these parameters, please see the [Global Event Configuration section](#global-event-configuration).*  &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***  *Please refer to the [Topic Configuration section](#topic-configuration) for a full description of Hazelcast Distributed Topic configuration.*    "
});



documentTitles["lock.html#lock"] = "Lock";
index.add({
    url: "lock.html#lock",
    title: "Lock",
    body: "## Lock  ILock is the distributed implementation of `java.util.concurrent.locks.Lock`. Meaning if you lock using an ILock, the critical section that it guards is guaranteed to be executed by only one thread in the entire cluster. Even though locks are great for synchronization, they can lead to problems if not used properly. Also note that Hazelcast Lock does not support fairness.  A few warnings when using locks:  - Always use locks with *try*-*catch* blocks. It will ensure that locks will be released if an exception is thrown from the code in a critical section. Also note that the lock method is outside the *try*-*catch* block, because we do not want to unlock if the lock operation itself fails.  ```java import com.hazelcast.core.Hazelcast; import java.util.concurrent.locks.Lock;  HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); Lock lock = hazelcastInstance.getLock( \&quot;myLock\&quot; ); lock.lock(); try {   // do something here } finally {   lock.unlock(); } ```  - If a lock is not released in the cluster, another thread that is trying to get the lock can wait forever. To avoid this, use `tryLock` with a timeout value. You can set a high value (normally it should not take that long) for `tryLock`. You can check the return value of `tryLock` as follows:  ```java if ( lock.tryLock ( 10, TimeUnit.SECONDS ) ) {   try {       // do some stuff here..     } finally {       lock.unlock();     }    } else {   // warning } ```  - You can also avoid indefinitely waiting threads by using lock with lease time: the lock will be released in the given lease time. Lock can be safely unlocked before the lease time expires. Note that the unlock operation can throw an `IllegalMonitorStateException` if lock is released because the lease time expires. If that is the case, critical section guarantee is broken.  	Please see the below example.  ```java lock.lock( 5, TimeUnit.SECONDS ) try {   // do some stuff here.. } finally {   try {     lock.unlock();   } catch ( IllegalMonitorStateException ex ){     // WARNING Critical section guarantee can be broken   } } ```  - Locks are fail-safe. If a member holds a lock and some other members go down, the cluster will keep your locks safe and available. Moreover, when a member leaves the cluster, all the locks acquired by that dead member will be removed so that those locks are immediately available for live members.   - Locks are re-entrant: the same thread can lock multiple times on the same lock. Note that for other threads to be  able to require this lock, the owner of the lock must call `unlock` as many times as the owner called `lock`.  - In the split-brain scenario, the cluster behaves as if it were two different clusters. Since two separate clusters are not aware of each other, two nodes from different clusters can acquire the same lock. For more information on places where split brain syndrome can be handled, please see [split brain syndrome](#network-partitioning-split-brain-syndrome).  - Locks are not automatically removed. If a lock is not used anymore, Hazelcast will not automatically garbage collect the lock.  This can lead to an `OutOfMemoryError`. If you create locks on the fly, make sure they are destroyed.  - Hazelcast IMap also provides locking support on the entry level with the method `IMap.lock(key)`. Although the same infrastructure  is used, `IMap.lock(key)` is not an ILock and it is not possible to expose it directly.  "
});



documentTitles["lockicondition.html#icondition"] = "ICondition";
index.add({
    url: "lockicondition.html#icondition",
    title: "ICondition",
    body: "### ICondition  `ICondition` is the distributed implementation of the `notify`, `notifyAll` and `wait` operations on the Java object. You can use it to synchronize threads across the cluster. More specifically, you use `ICondition` when a thread's work depends on another thread's output. A good example can be producer/consumer methodology.   Please see the below code snippets for a sample producer/consumer implementation.  **Producer thread:**  ```java HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); Lock lock = hazelcastInstance.getLock( \&quot;myLockId\&quot; ); ICondition condition = lock.newCondition( \&quot;myConditionId\&quot; );  lock.lock(); try {   while ( !shouldProduce() ) {     condition.await(); // frees the lock and waits for signal                        // when it wakes up it re-acquires the lock                        // if available or waits for it to become                        // available   }   produce();   condition.signalAll(); } finally {   lock.unlock(); } ```  **Consumer thread:**         ```java        HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); Lock lock = hazelcastInstance.getLock( \&quot;myLockId\&quot; ); ICondition condition = lock.newCondition( \&quot;myConditionId\&quot; );  lock.lock(); try {   while ( !canConsume() ) {     condition.await(); // frees the lock and waits for signal                        // when it wakes up it re-acquires the lock if                         // available or waits for it to become                        // available   }   consume();   condition.signalAll(); } finally {   lock.unlock(); } ```  "
});



documentTitles["iatomiclong.html#iatomiclong"] = "IAtomicLong";
index.add({
    url: "iatomiclong.html#iatomiclong",
    title: "IAtomicLong",
    body: "## IAtomicLong  Hazelcast `IAtomicLong` is the distributed implementation of `java.util.concurrent.atomic.AtomicLong`. It offers most of AtomicLong's operations such as `get`, `set`, `getAndSet`, `compareAndSet` and `incrementAndGet`. Since IAtomicLong is a distributed implementation, these operations involve remote calls and hence their performances differ from AtomicLong.   The following sample code creates an instance, increments it by a million, and prints the count.  ```java public class Member {   public static void main( String[] args ) {     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); 	     IAtomicLong counter = hazelcastInstance.getAtomicLong( \&quot;counter\&quot; );     for ( int k = 0; k &lt; 1000 * 1000; k++ ) { 	  if ( k % 500000 == 0 ) { 	    System.out.println( \&quot;At: \&quot; + k );       }       counter.incrementAndGet();     }     System.out.printf( \&quot;Count is %s\n\&quot;, counter.get() );   } } ```  When you start other instances with the code above, you will see the count as *member count* times *a million*.  You can send functions to an IAtomicLong. `Function` is a Hazelcast owned, single method interface. The following sample `Function` implementation doubles the original value.  ```java private static class Add2Function implements Function &lt;Long, Long&gt; {    @Override   public Long apply( Long input ) {      return input + 2;   } } ```  You can use the following methods to execute functions on IAtomicLong.  - `apply`: It applies the function to the value in IAtomicLong without changing the actual value and returning the result. - `alter`: It alters the value stored in the IAtomicLong by applying the function. It will not send back a result. - `alterAndGet`: It alters the value stored in the IAtomicLong by applying the function, storing the result in the IAtomicLong and returning the result. - `getAndAlter`: It alters the value stored in the IAtomicLong by applying the function and returning the original value.  The following sample code includes these methods.  ```java public class Member {   public static void main( String[] args ) {     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); 		     IAtomicLong atomicLong = hazelcastInstance.getAtomicLong( \&quot;counter\&quot; );      atomicLong.set( 1 );     long result = atomicLong.apply( new Add2Function() ); 		     System.out.println( \&quot;apply.result: \&quot; + result); 		     System.out.println( \&quot;apply.value: \&quot; + atomicLong.get() );      atomicLong.set( 1 );     atomicLong.alter( new Add2Function() ); 			     System.out.println( \&quot;alter.value: \&quot; + atomicLong.get() );      atomicLong.set( 1 );     result = atomicLong.alterAndGet( new Add2Function() ); 		     System.out.println( \&quot;alterAndGet.result: \&quot; + result ); 		     System.out.println( \&quot;alterAndGet.value: \&quot; + atomicLong.get() );      atomicLong.set( 1 );     result = atomicLong.getAndAlter( new Add2Function() ); 		     System.out.println( \&quot;getAndAlter.result: \&quot; + result ); 		     System.out.println( \&quot;getAndAlter.value: \&quot; + atomicLong.get() );   } } ```  The reason for using a function instead of a simple code line like `atomicLong.set(atomicLong.get() + 2));` is that the IAtomicLong read and write operations are not atomic. Since `IAtomicLong` is a distributed implementation, those operations can be remote ones, which may lead to race problems. By using functions, the data is not pulled into the code, but the code is sent to the data. This makes it more scalable.  ![image](images/NoteSmall.jpg) ***NOTE:*** *IAtomicLong has 1 synchronous backup and no asynchronous backups. Its backup count is not configurable.*  "
});



documentTitles["isemaphore.html#isemaphore"] = "ISemaphore";
index.add({
    url: "isemaphore.html#isemaphore",
    title: "ISemaphore",
    body: "## ISemaphore  Hazelcast ISemaphore is the distributed implementation of `java.util.concurrent.Semaphore`. Semaphores offer **permit**s to control the thread counts in the case of performing concurrent activities. To execute a concurrent activity, a thread grants a permit or waits until a permit becomes available. When the execution is completed, the permit is released.  ![image](images/NoteSmall.jpg) ***NOTE:*** *Semaphore with a single permit may be considered as a lock. But unlike the locks, when semaphores are used, any thread can release the permit and semaphores can have multiple permits.*  ![image](images/NoteSmall.jpg) ***NOTE:*** *Hazelcast Semaphore does not support fairness.*  When a permit is acquired on ISemaphore:  -	if there are permits, the number of permits in the semaphore is decreased by one and the calling thread performs its activity. If there is contention, the longest waiting thread will acquire the permit before all other threads. -	if no permits are available, the calling thread blocks until a permit becomes available. When a timeout happens during this block, the thread is interrupted. In the case where the semaphore is destroyed, an `InstanceDestroyedException` is thrown.  The following sample code uses an `IAtomicLong` resource 1000 times, increments the resource when a thread starts to use it, and decrements it when the thread completes.  ```java public class SemaphoreMember {   public static void main( String[] args ) throws Exception{     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();      ISemaphore semaphore = hazelcastInstance.getSemaphore( \&quot;semaphore\&quot; );      IAtomicLong resource = hazelcastInstance.getAtomicLong( \&quot;resource\&quot; );      for ( int k = 0 ; k &lt; 1000 ; k++ ) {       System.out.println( \&quot;At iteration: \&quot; + k + \&quot;, Active Threads: \&quot; + resource.get() );       semaphore.acquire();       try {         resource.incrementAndGet();         Thread.sleep( 1000 );         resource.decrementAndGet();       } finally {          semaphore.release();       }     }     System.out.println(\&quot;Finished\&quot;);   } } ```  Let's limit the concurrent access to this resource by allowing at most 3 threads. You can configure it declaratively by setting the `initial-permits` property, as shown below.  ```xml &lt;semaphore name=\&quot;semaphore\&quot;&gt;    &lt;initial-permits&gt;3&lt;/initial-permits&gt; &lt;/semaphore&gt; ```  ![image](images/NoteSmall.jpg) ***NOTE:*** *If there is a shortage of permits while the semaphore is being created, value of this property can be set to a negative number.*  If you execute the above `SemaphoreMember` class 5 times, the output will be similar to the following:  `At iteration: 0, Active Threads: 1`  `At iteration: 1, Active Threads: 2`  `At iteration: 2, Active Threads: 3`  `At iteration: 3, Active Threads: 3`  `At iteration: 4, Active Threads: 3`  As can be seen, the maximum count of concurrent threads is equal or smaller than 3. If you remove the semaphore acquire/release statements in `SemaphoreMember`, you will see that there is no limitation on the number of concurrent usages.  Hazelcast also provides backup support for `ISemaphore`. When a member goes down, another member can take over the semaphore with the permit information (permits are automatically released when a member goes down). To enable this, configure synchronous or asynchronous backup with the properties `backup-count` and `async-backup-count`(by default, synchronous backup is already enabled).  A sample configuration is shown below.  ```xml &lt;semaphore name=\&quot;semaphore\&quot;&gt;   &lt;initial-permits&gt;3&lt;/initial-permits&gt;   &lt;backup-count&gt;1&lt;/backup-count&gt; &lt;/semaphore&gt; ```  ![image](images/NoteSmall.jpg) ***NOTE:*** *If high performance is more important (than not losing the permit information), you can disable the backups by setting `backup-count` to 0.*  &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [Semaphore Configuration section](#semaphore-configuration) for a full description of Hazelcast Distributed Semaphore configuration.*   "
});



documentTitles["iatomicreference.html#iatomicreference"] = "IAtomicReference";
index.add({
    url: "iatomicreference.html#iatomicreference",
    title: "IAtomicReference",
    body: "## IAtomicReference  The `IAtomicLong` is very useful if you need to deal with a long, but in some cases you need to deal with a reference. That is why Hazelcast also supports the `IAtomicReference` which is the distributed version of the `java.util.concurrent.atomic.AtomicReference`.  Here is an IAtomicReference example.  ```java public class Member {     public static void main(String[] args) {         Config config = new Config();          HazelcastInstance hz = Hazelcast.newHazelcastInstance(config);          IAtomicReference&lt;String&gt; ref = hz.getAtomicReference(\&quot;reference\&quot;);         ref.set(\&quot;foo\&quot;);         System.out.println(ref.get());         System.exit(0);     }  } ```  When you execute the above example, you will see the following output.  `foo`  Just like `IAtomicLong`, `IAtomicReference` has methods that accept a 'function' as an argument, such as `alter`, `alterAndGet`, `getAndAlter` and `apply`. There are two big advantages of using these methods:  -	From a performance point of view, it is better to send the function to the data then the data to the function. Often the function is a lot smaller than the data and therefore cheaper to send over the line. Also the function only needs to be transferred once to the target machine, and the data needs to be transferred twice. -	You do not need to deal with concurrency control. If you would perform a load, transform, store, you could run into a data race since another thread might have updated the value you are about to overwrite.   There are some issues you need to know, described below.  -	`IAtomicReference` works based on the byte-content and not on the object-reference. If you use the `compareAndSet` method, do not change to original value because its serialized content will then be different.  It is also important to know that if you rely on Java serialization, sometimes (especially with hashmaps) the same object can result in different binary content. -	`IAtomicReference` will always have 1 synchronous backup. -	All methods returning an object will return a private copy. You can modify the private copy, but the rest of the world will be shielded from your changes. If you want these changes to be visible to the rest of the world, you need to write the change back to the `IAtomicReference`; but be careful with introducing a data-race.  -	The 'in memory format' of an `IAtomicReference` is `binary`. The receiving side does not need to have the class definition available, unless it needs to be deserialized on the other side (e.g. because a method like 'alter' is executed). This deserialization is done for every call that needs to have the object instead of the binary content, so be careful with expensive object graphs that need to be deserialized. -	If you have an object with many fields or an object graph, and you only need to calculate some information or need a subset of fields, you can use the `apply` method. With the `apply` method, the whole object does not need to be sent over the line, only the information that is relevant.  &lt;br&gt;&lt;/br&gt;"
});



documentTitles["icountdownlatch.html#icountdownlatch"] = "ICountDownLatch";
index.add({
    url: "icountdownlatch.html#icountdownlatch",
    title: "ICountDownLatch",
    body: "## ICountDownLatch    Hazelcast `ICountDownLatch` is the distributed implementation of `java.util.concurrent.CountDownLatch`. As you may know, `CountDownLatch` is considered to be a gate keeper for concurrent activities. It enables the threads to wait for other threads to complete their operations.  The following code samples describe the mechanism of `ICountDownLatch`. Assume that there is a leader process and there are follower processes that will wait until the leader completes. Here is the leader:  ```java public class Leader {   public static void main( String[] args ) throws Exception {     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     ICountDownLatch latch = hazelcastInstance.getCountDownLatch( \&quot;countDownLatch\&quot; );     System.out.println( \&quot;Starting\&quot; );     latch.trySetCount( 1 );     Thread.sleep( 30000 );     latch.countDown();     System.out.println( \&quot;Leader finished\&quot; );     latch.destroy();   } } ```  Since only a single step is needed to be completed as a sample, the above code initializes the latch with 1. Then, the code sleeps for a while to simulate a process and starts the countdown. Finally, it clears up the latch. Let's write a follower:   ```java public class Follower {   public static void main( String[] args ) throws Exception {     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     ICountDownLatch latch = hazelcastInstance.getCountDownLatch( \&quot;countDownLatch\&quot; );     System.out.println( \&quot;Waiting\&quot; );     boolean success = latch.await( 10, TimeUnit.SECONDS );     System.out.println( \&quot;Complete: \&quot; + success );   } }  ```  The follower class above first retrieves `ICountDownLatch` and then calls the `await` method to enable the thread to listen for the latch. The method `await` has a timeout value as a parameter. This is useful when `countDown` method fails. To see `ICountDownLatch` in action, start the leader first and then start one or more followers. You will see that the followers will wait until the leader completes.  In a distributed environment, the counting down cluster member may go down. In this case, all listeners are notified immediately and automatically by Hazelcast. The state of the current process just before the failure should be verified and 'how to continue now' should be decided (e.g. restart all process operations, continue with the first failed process operation, throw an exception, etc.).  Although the `ICountDownLatch` is a very useful synchronization aid, you will probably not use it on a daily basis. Unlike Java’s implementation, Hazelcast’s `ICountDownLatch` count can be re-set after a countdown has finished but not during an active count.  ![image](images/NoteSmall.jpg) ***NOTE:*** *ICountDownLatch has 1 synchronous backup and no asynchronous backups. Its backup count is not configurable. Also, the count cannot be re-set during an active count, it should be re-set after the countdown is finished.*  "
});



documentTitles["idgenerator.html#idgenerator"] = "IdGenerator";
index.add({
    url: "idgenerator.html#idgenerator",
    title: "IdGenerator",
    body: "## IdGenerator  Hazelcast IdGenerator is used to generate cluster-wide unique identifiers. Generated identifiers are long type primitive values between 0 and `Long.MAX_VALUE`.   ID generation occurs almost at the speed of `AtomicLong.incrementAndGet()`. A group of 1 million identifiers is allocated for each cluster member. In the background, this allocation takes place with an `IAtomicLong` incremented by 1 million. Once a cluster member generates IDs (allocation is done), `IdGenerator` increments a local counter. If a cluster member uses all IDs in the group, it will get another 1 million IDs. By this way, only one time of network traffic is needed, meaning that 999,999 identifiers are generated in memory instead of over the network. This is fast.  Let's write a sample identifier generator.  ```java public class IdGeneratorExample {   public static void main( String[] args ) throws Exception {     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     IdGenerator idGen = hazelcastInstance.getIdGenerator( \&quot;newId\&quot; );     while (true) {       Long id = idGen.newId();       System.err.println( \&quot;Id: \&quot; + id );       Thread.sleep( 1000 );     }   } } ```  Let's run the above code two times. The output will be similar to the following.  ```plain Members [1] {   Member [127.0.0.1]:5701 this } Id: 1 Id: 2 Id: 3 ```   ```plain Members [2] {   Member [127.0.0.1]:5701   Member [127.0.0.1]:5702 this } Id: 1000001 Id: 1000002 Id: 1000003 ```  You can see that the generated IDs are unique and counting upwards. If you see duplicated identifiers, it means your instances could not form a cluster.    ![image](images/NoteSmall.jpg) ***NOTE:*** *Generated IDs are unique during the life cycle of the cluster. If the entire cluster is restarted, IDs start from 0 again or you can initialize to a value using the `init()` method of IdGenerator.*  ![image](images/NoteSmall.jpg) ***NOTE:*** *IdGenerator has 1 synchronous backup and no asynchronous backups. Its backup count is not configurable.*   "
});



documentTitles["replicatedmap.html#replicated-map"] = "Replicated Map";
index.add({
    url: "replicatedmap.html#replicated-map",
    title: "Replicated Map",
    body: "## Replicated Map  A replicated map is a weakly consistent, distributed key-value data structure provided by Hazelcast.  All other data structures are partitioned in design. A replicated map does not partition data (it does not spread data to different cluster members); instead, it replicates the data to all nodes.  This leads to higher memory consumption. However, a replicated map has faster read and write access since the data are available on all nodes and writes take place on local nodes, eventually being replicated to all other nodes.  Weak consistency compared to eventually consistency means that replication is done on a best efforts basis. Lost or missing updates are neither tracked nor resent. This kind of data structure is suitable for immutable objects, catalogue data or idempotent calculable data (like HTML pages).  Replicated map nearly fully implements the `java.util.Map` interface, but it lacks the methods from `java.util.concurrent.ConcurrentMap` since there are no atomic guarantees to writes or reads.  ```java import com.hazelcast.core.Hazelcast; import com.hazelcast.core.HazelcastInstance; import java.util.Collection; import java.util.Map;  HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); Map&lt;String, Customer&gt; customers = hazelcastInstance.getReplicatedMap(\&quot;customers\&quot;); customers.put( \&quot;1\&quot;, new Customer( \&quot;Joe\&quot;, \&quot;Smith\&quot; ) ); customers.put( \&quot;2\&quot;, new Customer( \&quot;Ali\&quot;, \&quot;Selam\&quot; ) ); customers.put( \&quot;3\&quot;, new Customer( \&quot;Avi\&quot;, \&quot;Noyan\&quot; ) );  Collection&lt;Customer&gt; colCustomers = customers.values(); for ( Customer customer : colCustomers ) {   // process customer } ```  `HazelcastInstance::getReplicatedMap`returns `com.hazelcast.core.ReplicatedMap` which, as stated above, extends the `java.util.Map` interface.  The `com.hazelcast.core.ReplicatedMap` interface has some additional methods for registering entry listeners or retrieving values in an expected order. "
});



documentTitles["considerations.html#for-consideration"] = "For Consideration";
index.add({
    url: "considerations.html#for-consideration",
    title: "For Consideration",
    body: "### For Consideration  A replicated map **does not** support ordered writes! In case of a conflict caused by two nodes simultaneously written to the same key, a vector clock algorithm is used to resolve and decide on one of the values.  Due to the weakly consistent nature and the previously mentioned behaviors of replicated map, there is a chance of reading stale data at any time. There is no read guarantee like repeatable reads. "
});



documentTitles["breakagemapcontract.html#breakage-of-the-map-contract"] = "Breakage of the Map-Contract";
index.add({
    url: "breakagemapcontract.html#breakage-of-the-map-contract",
    title: "Breakage of the Map-Contract",
    body: "### Breakage of the Map-Contract  ReplicatedMap offers a distributed `java.util.Map::clear` implementation, but due to the asynchronous nature and the weakly consistency of it, there is no point in time where you can say the map is empty. Every node applies that to its local dataset in \&quot;a near point in time\&quot;. If you need a definite point in time to empty the map, you may want to consider using a lock around the `clear` operation.  You can simulate the `clear` method by locking your user codebase and executing a remote operation that will utilize `DistributedObject::destroy` to destroy the node's own proxy and storage of the ReplicatedMap. A new proxy instance and storage will be created on the next retrieval of the ReplicatedMap using `HazelcastInstance::getReplicatedMap`. You will have to reallocate the ReplicatedMap in your code. Afterwards, just release the lock when finished. "
});



documentTitles["technicaldesign.html#technical-design"] = "Technical design";
index.add({
    url: "technicaldesign.html#technical-design",
    title: "Technical design",
    body: "### Technical design  There are several technical design decisions for configurable behavior.  **Initial provisioning**  If a new member joins, there are two ways of handling the initial provisioning that is executed to replicate all existing values to the new member.  First, you can have an async fill up which does not block reads while the fill up operation is underway. That way, you have immediate access on the new member, but it will take time until all values are eventually accessible. Not yet replicated values are returned as non existing (null). Write operations to already existing keys during this async phase can be lost since the vector clock for an entry might not be initialized by another member yet, and it might be seen as an old update by other members.  Or second, you can preform a synchronous initial fill up which blocks every read or write access to the map until the fill up operation is finished. Use this way with caution since it might block your application from operating.  **Replication delay**  By default, the replication of values is delayed by 100 milliseconds when no current waiting replication is found. This collects multiple updates and minimizes the operations overhead on replication. A hard limit of 1000 replications is built into the system to prevent `OutOfMemory` situations where you put lots of data into the replicated map in a very short time. The delay is configurable. A value of \&quot;0\&quot; means immediate replication. You can configure the trade off between replication overhead and time for the value to be replicated.  **Concurrency Level**  The concurrency level configuration defines the number of mutexes and segments inside the replicated map storage. A mutex/segment is chosen by calculating the `hashCode` of the key and using the module by the concurrency level. If multiple keys fall into the same mutex, they will wait for other mutex holders on the same mutex to finish their operation.  For high amount of values or high contention on the mutexes, this value can be changed. "
});



documentTitles["inmemoryformat.html#in-memory-format-on-replicatedmap"] = "In Memory Format on ReplicatedMap";
index.add({
    url: "inmemoryformat.html#in-memory-format-on-replicatedmap",
    title: "In Memory Format on ReplicatedMap",
    body: "### In Memory Format on ReplicatedMap  Currently two `in-memory-format` values are usable with the ReplicatedMap.  - `OBJECT` (default): The data will be stored in deserialized form. This configuration is the default choice since data replication is mostly used for high speed access. Please be aware that changing values without a `Map::put` is not reflected on other nodes but is visible on the changing nodes for later value accesses.  - `BINARY`: The data is stored in serialized binary format and has to be deserialized on every request. This option offers higher encapsulation since changes to values are always discarded as long as the newly changed object is not explicitly `Map::put` into the map again. "
});



documentTitles["entrylistener.html#entrylistener-on-replicatedmap"] = "EntryListener on ReplicatedMap";
index.add({
    url: "entrylistener.html#entrylistener-on-replicatedmap",
    title: "EntryListener on ReplicatedMap",
    body: "### EntryListener on ReplicatedMap  A `com.hazelcast.core.EntryListener` used on a ReplicatedMap serves the same purpose as it would on other data structures in Hazelcast. You can use it to react on add, update, and remove operations. Eviction is not yet supported by replicated maps.  The fundamental difference in ReplicatedMap behavior, compared to the other data structures, is that an EntryListener only reflects changes on local data. Since replication is asynchronous, all listener events are fired only when an operation is finished on a local node. Events can fire at different times on different nodes.  ```java import com.hazelcast.core.EntryEvent; import com.hazelcast.core.EntryListener; import com.hazelcast.core.Hazelcast; import com.hazelcast.core.HazelcastInstance; import com.hazelcast.core.ReplicatedMap;  HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); ReplicatedMap&lt;String, Customer&gt; customers = hazelcastInstance.getReplicatedMap(\&quot;customers\&quot;);  customers.addEntryListener( new EntryListener&lt;String, Customer&gt;() {   @Override   public void entryAdded( EntryEvent&lt;String, Customer&gt; event ) {     log( \&quot;Entry added: \&quot; + event );   }    @Override   public void entryUpdated( EntryEvent&lt;String, Customer&gt; event ) {     log( \&quot;Entry updated: \&quot; + event );   }    @Override   public void entryRemoved( EntryEvent&lt;String, Customer&gt; event ) {     log( \&quot;Entry removed: \&quot; + event );   }    @Override   public void entryEvicted( EntryEvent&lt;String, Customer&gt; event ) {     // Currently not supported, will never fire   } });  customers.put( \&quot;1\&quot;, new Customer( \&quot;Joe\&quot;, \&quot;Smith\&quot; ) ); // add event customers.put( \&quot;1\&quot;, new Customer( \&quot;Ali\&quot;, \&quot;Selam\&quot; ) ); // update event customers.remove( \&quot;1\&quot; ); // remove event ```  "
});



documentTitles["distributedevents.html#distributed-events"] = "Distributed Events";
index.add({
    url: "distributedevents.html#distributed-events",
    title: "Distributed Events",
    body: "# Distributed Events  You can register for Hazelcast entry events so you will be notified when those events occur. Event Listeners are cluster-wide so when a listener is registered in one member of cluster, it is actually registering for events originated at any member in the cluster. When a new member joins, events originated at the new member will also be delivered.  An Event is created only if you registered an event listener. If no listener is registered, then no event will be created. If you provided a predicate when you registered the event listener, pass the predicate before sending the event to the listener (node/client).  As a rule of thumb, your event listener should not implement heavy processes in its event methods which block the thread for a long time. If needed, you can use `ExecutorService` to transfer long running processes to another thread and offload the current listener thread.    "
});

documentTitles["distributedevents.html#event-listeners-for-hazelcast-nodes"] = "Event Listeners for Hazelcast Nodes";
index.add({
    url: "distributedevents.html#event-listeners-for-hazelcast-nodes",
    title: "Event Listeners for Hazelcast Nodes",
    body: "## Event Listeners for Hazelcast Nodes  Hazelcast offers the following event listeners:  - **Membership Listener** for cluster membership events. - **Distributed Object Listener** for distributed object creation and destroy events. - **Migration Listener** for partition migration start and complete events. - **Lifecycle Listener** for HazelcastInstance lifecycle events. - **Entry Listener** for IMap and MultiMap entry events (please refer to the [Entry Listener section](#entry-listener)). - **Item Listener** for IQueue, ISet and IList item events (please refer to the Event Registration and Configuration parts of the sections [Set](#set) and [List](#list)). - **Message Listener** for ITopic message events. - **Client Listener** for client connection events.    "
});

documentTitles["distributedevents.html#membership-listener"] = "Membership Listener";
index.add({
    url: "distributedevents.html#membership-listener",
    title: "Membership Listener",
    body: "### Membership Listener  The Membership Listener allows to get notified for the following events:  - A new member is added to the cluster. - An existing member leaves the cluster. - An attribute of a member is changed. Please refer to the [Member Attributes section](#member-attributes) to learn about member attributes.  The following is an example Membership Listener class.  ```java public class ClusterMembershipListener      implements MembershipListener {       public void memberAdded(MembershipEvent membershipEvent) {   System.err.println(\&quot;Added: \&quot; + membershipEvent); }  public void memberRemoved(MembershipEvent membershipEvent) {        System.err.println(\&quot;Removed: \&quot; + membershipEvent);      }   public void memberAttributeChanged(MemberAttributeEvent memberAttributeEvent) {        System.err.println(\&quot;Member attribute changed: \&quot; + memberAttributeEvent);      }       } ```  When a respective event is fired, the membership listener outputs the addresses of the members joined/left and which attribute is changed on which member.  "
});

documentTitles["distributedevents.html#distributed-object-listener"] = "Distributed Object Listener";
index.add({
    url: "distributedevents.html#distributed-object-listener",
    title: "Distributed Object Listener",
    body: "### Distributed Object Listener  The Distributed Object Listener allows to get notified when a distributed object is created or destroyed throughout the cluster.  The following is an example Distributed Object Listener class.   ```java public class Sample implements DistributedObjectListener {   public static void main(String[] args) {     Sample sample = new Sample();      Config config = new Config();     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(config);     hazelcastInstance.addDistributedObjectListener(sample);      Collection&lt;DistributedObject&gt; distributedObjects = hazelcastInstance.getDistributedObjects();     for (DistributedObject distributedObject : distributedObjects) {       System.out.println(distributedObject.getName() + \&quot;,\&quot; + distributedObject.getId());     }   }    @Override   public void distributedObjectCreated(DistributedObjectEvent event) {     DistributedObject instance = event.getDistributedObject();     System.out.println(\&quot;Created \&quot; + instance.getName() + \&quot;,\&quot; + instance.getId());   }    @Override   public void distributedObjectDestroyed(DistributedObjectEvent event) {     DistributedObject instance = event.getDistributedObject();     System.out.println(\&quot;Destroyed \&quot; + instance.getName() + \&quot;,\&quot; + instance.getId());   } } ```  When a respective event is fired, the distributed object listener outputs the name, service (e.g. if a Map service provides the distributed object, than it is a Map object) and ID of the object, along with the event type.   "
});

documentTitles["distributedevents.html#migration-listener"] = "Migration Listener";
index.add({
    url: "distributedevents.html#migration-listener",
    title: "Migration Listener",
    body: "### Migration Listener  The Migration Listener allows to get notified for the following events:  - A partition migration is started. - A partition migration is completed. - A partition migration is failed.   The following is an example Migration Listener class.   ```java public class ClusterMigrationListener implements MigrationListener {      @Override      public void migrationStarted(MigrationEvent migrationEvent) {        System.err.println(\&quot;Started: \&quot; + migrationEvent);      }     @Override      public void migrationCompleted(MigrationEvent migrationEvent) {        System.err.println(\&quot;Completed: \&quot; + migrationEvent);      }      @Override      public void migrationFailed(MigrationEvent migrationEvent) {        System.err.println(\&quot;Failed: \&quot; + migrationEvent);      } }      ```  When a respective event is fired, the migration listener outputs the partition ID, status of the migration, the old member and the new member. The following is an example output:  ``` Started: MigrationEvent{partitionId=98, oldOwner=Member [127.0.0.1]:5701, newOwner=Member [127.0.0.1]:5702 this}  ```    "
});

documentTitles["distributedevents.html#lifecycle-listener"] = "Lifecycle Listener";
index.add({
    url: "distributedevents.html#lifecycle-listener",
    title: "Lifecycle Listener",
    body: "### Lifecycle Listener  The Lifecycle Listener allows to get notified for the following events:  - A member is starting. - A member is started. - A member is shutting down. - A member's shutdown is completed. - A member is merging with the cluster. - A member's merge operation is completed. - A Hazelcast Client is connected to the cluster. - A Hazelcast Client is disconnected from the cluster.   The following is an example Lifecycle Listener class.   ```java public class NodeLifecycleListener implements LifecycleListener {      @Override      public void stateChanged(LifecycleEvent event) {        System.err.println(event);      } } ```  This listener is local to an individual node. It notifies the application that uses Hazelcast about the events mentioned above for a particular node.    "
});

documentTitles["distributedevents.html#item-listener"] = "Item Listener";
index.add({
    url: "distributedevents.html#item-listener",
    title: "Item Listener",
    body: "### Item Listener  The Item Listener is used by the Hazelcast IQueue, ISet and IList interfaces. It allows to get notified when an item is added or removed.  The following is an example Item Listener class.   ```java public class Sample implements ItemListener {    public static void main( String[] args ) {      Sample sample = new Sample();     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     ISet&lt;Price&gt; set = hazelcastInstance.getSet( \&quot;default\&quot; );     set.addItemListener( sample, true );       Price price = new Price( 10, time1 )     set.add( price );     set.remove( price );   }     public void itemAdded( Object item ) {     System.out.println( \&quot;Item added = \&quot; + item );   }    public void itemRemoved( Object item ) {     System.out.println( \&quot;Item removed = \&quot; + item );   }      } ```  "
});

documentTitles["distributedevents.html#message-listener"] = "Message Listener";
index.add({
    url: "distributedevents.html#message-listener",
    title: "Message Listener",
    body: "### Message Listener  The Message Listener is used by the ITopic interface. It allows to get notified when a message is received for the registered topic.  The following is an example Message Listener class.   ```java public class Sample implements MessageListener&lt;MyEvent&gt; {    public static void main( String[] args ) {     Sample sample = new Sample();     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     ITopic topic = hazelcastInstance.getTopic( \&quot;default\&quot; );     topic.addMessageListener( sample );     topic.publish( new MyEvent() );   }    public void onMessage( Message&lt;MyEvent&gt; message ) {     MyEvent myEvent = message.getMessageObject();     System.out.println( \&quot;Message received = \&quot; + myEvent.toString() );     if ( myEvent.isHeavyweight() ) {       messageExecutor.execute( new Runnable() {           public void run() {             doHeavyweightStuff( myEvent );           }       } );     }   } ```  "
});

documentTitles["distributedevents.html#client-listener"] = "Client Listener";
index.add({
    url: "distributedevents.html#client-listener",
    title: "Client Listener",
    body: "### Client Listener  The Client Listener is used by the Hazelcast nodes. It notifies the nodes when a client is connected or disconnected to/from the cluster.   ![image](images/NoteSmall.jpg) ***NOTE:*** *You can also add event listeners to a Hazelcast client. Please refer to [Client Listenerconfig](#client-listenerconfig) for the related information.*  "
});

documentTitles["distributedevents.html#event-listeners-for-hazelcast-clients"] = "Event Listeners for Hazelcast Clients";
index.add({
    url: "distributedevents.html#event-listeners-for-hazelcast-clients",
    title: "Event Listeners for Hazelcast Clients",
    body: "## Event Listeners for Hazelcast Clients  You can add event listeners also to a Hazelcast Java client. You can configure the following listeners to listen to the events on the client side. Please see the respective sections under the [Event Listeners for Hazelcast Nodes section](#event-listeners-for-hazelcast-nodes) for the example codes.   - **Lifecycle Listener**: It allows to get notified when the client is starting, started, shutting down and shutdown. - **Membership Listener**: It allows to get notified when a node joins to/leaves the cluster to which the client is connected, or when an attribute is changed in a node. - **DistributedObject Listener**: It allows to get notified when a distributed object is created or destroyed throughout the cluster to which the client is connected.  &lt;br&gt;&lt;/br&gt; ***RELATED INFORMATION***  *Please refer to the [Client Listenerconfig section](#client-listenerconfig) for more information.* &lt;br&gt;&lt;/br&gt;  &lt;br&gt;&lt;/br&gt; ***RELATED INFORMATION***  *Please refer to the [Listener Configurations section](#listener-configurations) for a configuration wrap-up of event listeners.* &lt;br&gt;&lt;/br&gt;   "
});



documentTitles["globaleventconfiguration.html#global-event-configuration"] = "Global Event Configuration";
index.add({
    url: "globaleventconfiguration.html#global-event-configuration",
    title: "Global Event Configuration",
    body: "## Global Event Configuration  - `hazelcast.event.queue.capacity`: default value is 1000000 - `hazelcast.event.queue.timeout.millis`: default value is 250 - `hazelcast.event.thread.count`: default value is 5  A striped executor in each node controls and dispatches the received events. This striped executor also guarantees the event order. For all events in Hazelcast, the order that events are generated and the order they are published are guaranteed for given keys. For map and multimap, the order is preserved for the operations on the same key of the entry. For list, set, topic and queue, the order is preserved for events on that instance of the distributed data structure.  You achieve the order guarantee by making only one thread responsible for a particular set of events (entry events of a key in a map, item events of a collection, etc.) in `StripedExecutor`.  If the event queue reaches the capacity (`hazelcast.event.queue.capacity`) and the last item cannot be put into the event queue for the period specified in `hazelcast.event.queue.timeout.millis`, these events will be dropped with a warning message, such as \&quot;EventQueue overloaded\&quot;.  If event listeners are performing a computation that takes a long time, the event queue can reach its maximum capacity and lose events. For map and multimap, you can configure `hazelcast.event.thread.count` to a higher value so that less collision occurs for keys, and therefore worker threads will not block each other in `StripedExecutor`. For list, set,  topic and queue, you should offload heavy work to another thread. To preserve order guarantee, you should implement similar logic with `StripedExecutor` in the offloaded thread pool. &lt;br&gt; &lt;/br&gt;   ***RELATED INFORMATION***  *Please refer to the [Listener Configurations section](#listener-configurations) on how to configure each listener.*  "
});



documentTitles["distributedcomputing.html#distributed-computing"] = "Distributed Computing";
index.add({
    url: "distributedcomputing.html#distributed-computing",
    title: "Distributed Computing",
    body: "# Distributed Computing  From Wikipedia: Distributed computing refers to the use of distributed systems to solve computational problems. In distributed computing, a problem is divided into many tasks, each of which is solved by one or more computers.  "
});

documentTitles["distributedcomputing.html#executor-service"] = "Executor Service";
index.add({
    url: "distributedcomputing.html#executor-service",
    title: "Executor Service",
    body: "## Executor Service  One of the coolest features of Java 1.5 is the Executor framework, which allows you to asynchronously execute your tasks (logical units of work), such as database query, complex calculation, and image rendering.  "
});

documentTitles["distributedcomputing.html#executor-overview"] = "Executor Overview";
index.add({
    url: "distributedcomputing.html#executor-overview",
    title: "Executor Overview",
    body: "### Executor Overview  The default implementation of this framework (`ThreadPoolExecutor`) is designed to run within a single JVM. In distributed systems, this implementation is not desired since you may want a task submitted in one JVM and processed in another one. Hazelcast offers `IExecutorService` for you to use in distributed environments: it implements `java.util.concurrent.ExecutorService` to serve the applications requiring computational and data processing power.  With `IExecutorService`, you can execute tasks asynchronously and perform other useful tasks. If your task execution takes longer than expected, you can cancel the task execution. In the Java Executor framework, tasks are implemented as `java.util.concurrent.Callable` and `java.util.Runnable`. If you need to return a value and submit to Executor, use Callable. Otherwise, use Runnable (if you do not need to return a value). Tasks should be `Serializable` since they will be distributed.  "
});

documentTitles["distributedcomputing.html#callable"] = "Callable";
index.add({
    url: "distributedcomputing.html#callable",
    title: "Callable",
    body: "#### Callable  Below is a sample Callable.  ```java import com.hazelcast.core.HazelcastInstance; import com.hazelcast.core.HazelcastInstanceAware; import com.hazelcast.core.IMap;  import java.io.Serializable; import java.util.concurrent.Callable;  public class SumTask     implements Callable&lt;Integer&gt;, Serializable, HazelcastInstanceAware {            private transient HazelcastInstance hazelcastInstance;    public void setHazelcastInstance( HazelcastInstance hazelcastInstance ) {     this.hazelcastInstance = hazelcastInstance;   }    public Integer call() throws Exception {     IMap&lt;String, Integer&gt; map = hazelcastInstance.getMap( \&quot;map\&quot; );     int result = 0;     for ( String key : map.localKeySet() ) {       System.out.println( \&quot;Calculating for key: \&quot; + key );       result += map.get( key );     }     System.out.println( \&quot;Local Result: \&quot; + result );     return result;   } } ```  To execute a task with the executor framework, you obtain an `ExecutorService` instance (generally via `Executors`) and you submit a task which returns a `Future`. After executing the task, you do not have to wait for the execution to complete, you can process other things. When ready, you use the `Future` object to retrieve the result as shown in the code example below.  ```java ExecutorService executorService = Executors.newSingleThreadExecutor(); Future&lt;String&gt; future = executorService.submit( new Echo( \&quot;myinput\&quot; ) ); //while it is executing, do some useful stuff //when ready, get the result of your execution String result = future.get(); ```  Please note that the Echo callable in the above code sample also implements a Serializable interface, since it may be sent to another JVM to be processed.  ![image](images/NoteSmall.jpg) ***NOTE:*** *When a task is deserialized, HazelcastInstance needs to be accessed. To do this, the task should implement `HazelcastInstanceAware` interface. Please see the [HazelcastInstanceAware Interface section](#hazelcastinstanceaware-interface) for more information.* &lt;br&gt;&lt;/br&gt;   "
});

documentTitles["distributedcomputing.html#runnable"] = "Runnable";
index.add({
    url: "distributedcomputing.html#runnable",
    title: "Runnable",
    body: "#### Runnable  Let's see example code that is Runnable. Below is a task that waits for some time and echoes a message.  ```java public class EchoTask implements Runnable, Serializable {   private final String msg;    public EchoTask( String msg ) {     this.msg = msg;   }    @Override   public void run() {     try {       Thread.sleep( 5000 );     } catch ( InterruptedException e ) {     }     System.out.println( \&quot;echo:\&quot; + msg );   } } ```  Now let's write a class that submits and executes echo messages. Executor is retrieved from `HazelcastInstance` and 1000 echo tasks are submitted.  ```java public class MasterMember {   public static void main( String[] args ) throws Exception {     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();     IExecutorService executor = hazelcastInstance.getExecutorService( \&quot;exec\&quot; );     for ( int k = 1; k &lt;= 1000; k++ ) {       Thread.sleep( 1000 );       System.out.println( \&quot;Producing echo task: \&quot; + k );       executor.execute( new EchoTask( String.valueOf( k ) ) );     }     System.out.println( \&quot;EchoTaskMain finished!\&quot; );   } } ```  "
});

documentTitles["distributedcomputing.html#executor-thread-configuration"] = "Executor Thread Configuration";
index.add({
    url: "distributedcomputing.html#executor-thread-configuration",
    title: "Executor Thread Configuration",
    body: "#### Executor Thread Configuration  By default, Executor is configured to have 8 threads in the pool. You can change that with the `pool-size` property in the declarative configuration (`hazelcast.xml`). An example is shown below (using the above Executor).  ```xml &lt;executor-service name=\&quot;exec\&quot;&gt;   &lt;pool-size&gt;1&lt;/pool-size&gt; &lt;/executor-service&gt; ```  &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [Executor Service Configuration section](#executor-service-configuration) for a full description of Hazelcast Distributed Executor Service configuration.*   "
});

documentTitles["distributedcomputing.html#scaling"] = "Scaling";
index.add({
    url: "distributedcomputing.html#scaling",
    title: "Scaling",
    body: "#### Scaling   Executor service can be scaled both vertically (scale up) and horizontally (scale out).   To scale up, you should improve the processing capacity of the JVM. You can do this by increasing the `pool-size` property mentioned in the [Executor Thread Configuration section](#executor-thread-configuration) (i.e., increasing the thread count). However, please be aware of your JVM's capacity. If you think it cannot handle such an additional load caused by increasing the thread count, you may want to consider improving the JVM's resources (CPU, memory, etc.). As an example, set the `pool-size` to 5 and run the above `MasterMember`. You will see that `EchoTask` is run as soon as it is produced.   To scale out, more JVMs should be added instead of increasing only one JVM's capacity. In reality, you may want to expand your cluster by adding more physical or virtual machines. For the EchoTask example in the [Runnable section](#runnable), you can create another Hazelcast instance. That instance will automatically get involved in the executions started in `MasterMember` and start processing. "
});



documentTitles["execution.html#execution"] = "Execution";
index.add({
    url: "execution.html#execution",
    title: "Execution",
    body: "### Execution  The distributed executor service is a distributed implementation of `java.util.concurrent.ExecutorService`. It allows you to execute your code in the cluster. In this section, all the code examples are based on the [Echo class above](#callable). Please note that Echo class is `Serializable`. You can have Hazelcast execute your code (`Runnable, Callable`);  - on a specific cluster member you choose, - on the member owning the key you choose, - on the member Hazelcast will pick, and - on all or subset of the cluster members.  ```java import com.hazelcast.core.Member; import com.hazelcast.core.Hazelcast; import com.hazelcast.core.IExecutorService; import java.util.concurrent.Callable; import java.util.concurrent.Future;    import java.util.Set;  public void echoOnTheMember( String input, Member member ) throws Exception {   Callable&lt;String&gt; task = new Echo( input );   HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();   IExecutorService executorService =        hazelcastInstance.getExecutorService( \&quot;default\&quot; );          Future&lt;String&gt; future = executorService.submitToMember( task, member );   String echoResult = future.get(); }  public void echoOnTheMemberOwningTheKey( String input, Object key ) throws Exception {   Callable&lt;String&gt; task = new Echo( input );   HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();   IExecutorService executorService =       hazelcastInstance.getExecutorService( \&quot;default\&quot; );          Future&lt;String&gt; future = executorService.submitToKeyOwner( task, key );   String echoResult = future.get(); }  public void echoOnSomewhere( String input ) throws Exception {    HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();   IExecutorService executorService =       hazelcastInstance.getExecutorService( \&quot;default\&quot; );          Future&lt;String&gt; future = executorService.submit( new Echo( input ) );   String echoResult = future.get(); }  public void echoOnMembers( String input, Set&lt;Member&gt; members ) throws Exception {   HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();   IExecutorService executorService =        hazelcastInstance.getExecutorService( \&quot;default\&quot; );          Map&lt;Member, Future&lt;String&gt;&gt; futures = executorService       .submitToMembers( new Echo( input ), members );          for ( Future&lt;String&gt; future : futures.values() ) {     String echoResult = future.get();     // ...   } } ```   ![image](images/NoteSmall.jpg) ***NOTE:*** *You can obtain the set of cluster members via `HazelcastInstance#getCluster().getMembers()` call.*   "
});



documentTitles["executioncancellation.html#execution-cancellation"] = "Execution Cancellation";
index.add({
    url: "executioncancellation.html#execution-cancellation",
    title: "Execution Cancellation",
    body: "### Execution Cancellation  A task in the code you execute in a cluster might take longer than expected. If you cannot stop/cancel that task, it will keep eating your resources. The standard Java executor framework solves this problem with the `cancel()` API and by encouraging us to code and design for cancellations. That is a highly ignored part of software development.  ```java public class Fibonacci&lt;Long&gt; implements Callable&lt;Long&gt;, Serializable {   int input = 0;     public Fibonacci() {    }     public Fibonacci( int input ) {      this.input = input;   }     public Long call() {     return calculate( input );   }    private long calculate( int n ) {     if ( Thread.currentThread().isInterrupted() ) {       return 0;     }     if ( n &lt;= 1 ) {       return n;     } else {       return calculate( n - 1 ) + calculate( n - 2 );     }   } } ```  The Fibanacci callable class above calculates the Fibonacci number for a given number. In the `calculate` method, we check if the current thread is interrupted so that the code can respond to cancellations once the execution is started. The `fib()` method below submits the Fibonacci calculation task for number 'n' and waits a maximum of 3 seconds for the result. If the execution does not completed in 3 seconds, `future.get()` will throw a `TimeoutException` and upon catching it, we cancel the execution, saving some CPU cycles.  ```java long fib( int n ) throws Exception {   HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();   IExecutorService es = hazelcastInstance.getExecutorService();   Future future = es.submit( new Fibonacci( n ) );     try {     return future.get( 3, TimeUnit.SECONDS );   } catch ( TimeoutException e ) {     future.cancel( true );               }   return -1; } ```  `fib(20)` will probably take less than 3 seconds. However, `fib(50)` will take much longer. (This is not an example for writing better Fibonacci calculation code, but for showing how to cancel a running execution that takes too long.) The method `future.cancel(false)` can only cancel execution before it is running (executing), but `future.cancel(true)` can interrupt running executions if your code is able to handle the interruption. If you are willing to cancel an already running task, then your task should be designed to handle interruptions. If the `calculate (int n)` method did not have the `(Thread.currentThread().isInterrupted())` line, then you would not be able to cancel the execution after it is started.   "
});



documentTitles["executioncallback.html#execution-callback"] = "Execution Callback";
index.add({
    url: "executioncallback.html#execution-callback",
    title: "Execution Callback",
    body: "### Execution Callback  `ExecutionCallback` offered by Hazelcast allows you to asynchronously be notified when the execution is done.   Let's use the Fibonacci series to explain this. The example code below is the calculation.  ```java public class Fibonacci&lt;Long&gt; implements Callable&lt;Long&gt;, Serializable {   int input = 0;    public Fibonacci() {   }    public Fibonacci( int input ) {     this.input = input;   }    public Long call() {     return calculate( input );   }    private long calculate( int n ) {     if (n &lt;= 1) {       return n;     } else {       return calculate( n - 1 ) + calculate( n - 2 );     }   } } ```  The example code below prints the result asynchronously.   ```java import com.hazelcast.core.Hazelcast; import com.hazelcast.core.ExecutionCallback; import com.hazelcast.core.IExecutorService; import java.util.concurrent.Future;  HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); IExecutorService es = hazelcastInstance.getExecutorService(); Callable&lt;Long&gt; task = new Fibonacci( 10 );  es.submit(task, new ExecutionCallback&lt;Long&gt; () {    @Override   public void onResponse( Long response ) {     System.out.println( \&quot;Fibonacci calculation result = \&quot; + response );   }    @Override   public void onFailure( Throwable t ) {     t.printStackTrace();   } }; ```  `ExecutionCallback` has the methods `onResponse` and `onFailure`. In the above code, `onResponse` is called upon a valid response and prints the calculation result, whereas `onFailure` is called upon a failure and prints the stacktrace.  "
});



documentTitles["entryprocessor.html#entry-processor"] = "Entry Processor";
index.add({
    url: "entryprocessor.html#entry-processor",
    title: "Entry Processor",
    body: "## Entry Processor  Hazelcast supports entry processing. An entry processor is a function that executes your code on a map entry in an atomic way.   "
});

documentTitles["entryprocessor.html#entry-processor-overview"] = "Entry Processor Overview";
index.add({
    url: "entryprocessor.html#entry-processor-overview",
    title: "Entry Processor Overview",
    body: "### Entry Processor Overview  An entry processor enables fast in-memory operations on a map without having to worry about locks or concurrency issues. It can be applied to a single map entry or to all map entries. It supports choosing target entries using predicates. You do not need any explicit lock on entry: Hazelcast locks the entry, runs the EntryProcessor, and then unlocks the entry.  Hazelcast sends the entry processor to each cluster member and these members apply it to map entries. Therefore, if you add more members, your processing is completed faster.  If entry processing is the major operation for a map and if the map consists of complex objects, then using `OBJECT` as `in-memory-format` is recommended to minimize serialization cost. By default, the entry value is stored as a byte array (`BINARY` format). When it is stored as an object (`OBJECT` format), then the entry processor is applied directly on the object. In that case, no serialization or deserialization is performed. But if there is a defined event listener, a new entry value will be serialized when passing to the event publisher service.  ![image](images/NoteSmall.jpg) ***NOTE***: *When `in-memory-format` is `OBJECT`, old value of the updated entry will be null.*  The methods below are in the IMap interface for entry processing.  ```java /**  * Applies the user defined EntryProcessor to the entry mapped by the key.  * Returns the the object which is result of the process() method of EntryProcessor.  */ Object executeOnKey( K key, EntryProcessor entryProcessor );  /**  * Applies the user defined EntryProcessor to the entries mapped by the collection of keys.  * the results mapped by each key in the collection.  */ Map&lt;K, Object&gt; executeOnKeys( Set&lt;K&gt; keys, EntryProcessor entryProcessor );  /**  * Applies the user defined EntryProcessor to the entry mapped by the key with  * specified ExecutionCallback to listen event status and returns immediately.  */ void submitToKey( K key, EntryProcessor entryProcessor, ExecutionCallback callback );   /**  * Applies the user defined EntryProcessor to the all entries in the map.  * Returns the results mapped by each key in the map.  */ Map&lt;K, Object&gt; executeOnEntries( EntryProcessor entryProcessor ); 	    /**  * Applies the user defined EntryProcessor to the entries in the map which satisfies   provided predicate.  * Returns the results mapped by each key in the map.  */ Map&lt;K, Object&gt; executeOnEntries( EntryProcessor entryProcessor, Predicate predicate ); ```  And, here is the EntryProcessor interface:  ```java public interface EntryProcessor&lt;K, V&gt; extends Serializable {   Object process( Map.Entry&lt;K, V&gt; entry );    EntryBackupProcessor&lt;K, V&gt; getBackupProcessor(); } ```  ![image](images/NoteSmall.jpg) ***NOTE***: *If you want to execute a task on a single key, you can also use `executeOnKeyOwner` provided by Executor Service. But, in this case, you need to perform a lock and serialization.*  When using `executeOnEntries` method, if the number of entries is high and you do need the results, then returning null in `process()` method is a good practice. By this way, results of the processing is not stored in the map and hence out of memory errors are eliminated.   If your code modifies the data, then you should also provide a processor for backup entries. This is required to prevent the primary map entries from having different values than the backups; it causes the entry processor to be applied both on the primary and backup entries.  ```java public interface EntryBackupProcessor&lt;K, V&gt; extends Serializable {     void processBackup( Map.Entry&lt;K, V&gt; entry ); } ```   ![image](images/NoteSmall.jpg) ***NOTE***: *You should explicitly call `setValue` method of `Map.Entry` when modifying data in Entry Processor. Otherwise, Entry Processor will be accepted as read-only.*  "
});



documentTitles["entryprocessorsamplecode.html#sample-entry-processor-code"] = "Sample Entry Processor Code";
index.add({
    url: "entryprocessorsamplecode.html#sample-entry-processor-code",
    title: "Sample Entry Processor Code",
    body: "### Sample Entry Processor Code  ```java public class EntryProcessorTest {    @Test   public void testMapEntryProcessor() throws InterruptedException {     Config config = new Config().getMapConfig( \&quot;default\&quot; )         .setInMemoryFormat( MapConfig.InMemoryFormat.OBJECT );              HazelcastInstance hazelcastInstance1 = Hazelcast.newHazelcastInstance( config );     HazelcastInstance hazelcastInstance2 = Hazelcast.newHazelcastInstance( config );     IMap&lt;Integer, Integer&gt; map = hazelcastInstance1.getMap( \&quot;mapEntryProcessor\&quot; );     map.put( 1, 1 );     EntryProcessor entryProcessor = new IncrementingEntryProcessor();     map.executeOnKey( 1, entryProcessor );     assertEquals( map.get( 1 ), (Object) 2 );     hazelcastInstance1.getLifecycleService().shutdown();     hazelcastInstance2.getLifecycleService().shutdown();   }    @Test   public void testMapEntryProcessorAllKeys() throws InterruptedException {     StaticNodeFactory factory = new StaticNodeFactory( 2 );     Config config = new Config().getMapConfig( \&quot;default\&quot; )         .setInMemoryFormat( MapConfig.InMemoryFormat.OBJECT );              HazelcastInstance hazelcastInstance1 = factory.newHazelcastInstance( config );     HazelcastInstance hazelcastInstance2 = factory.newHazelcastInstance( config );     IMap&lt;Integer, Integer&gt; map = hazelcastInstance1         .getMap( \&quot;mapEntryProcessorAllKeys\&quot; );              int size = 100;     for ( int i = 0; i &lt; size; i++ ) {       map.put( i, i );     }     EntryProcessor entryProcessor = new IncrementingEntryProcessor();     Map&lt;Integer, Object&gt; res = map.executeOnEntries( entryProcessor );     for ( int i = 0; i &lt; size; i++ ) {       assertEquals( map.get( i ), (Object) (i + 1) );     }     for ( int i = 0; i &lt; size; i++ ) {       assertEquals( map.get( i ) + 1, res.get( i ) );     }     hazelcastInstance1.getLifecycleService().shutdown();     hazelcastInstance2.getLifecycleService().shutdown();   }    static class IncrementingEntryProcessor       implements EntryProcessor, EntryBackupProcessor, Serializable {            public Object process( Map.Entry entry ) {       Integer value = (Integer) entry.getValue();       entry.setValue( value + 1 );       return value + 1;     }      public EntryBackupProcessor getBackupProcessor() {       return IncrementingEntryProcessor.this;     }      public void processBackup( Map.Entry entry ) {       entry.setValue( (Integer) entry.getValue() + 1 );     }   } } ```  "
});



documentTitles["entryprocessorabstract.html#abstract-entry-processor"] = "Abstract Entry Processor";
index.add({
    url: "entryprocessorabstract.html#abstract-entry-processor",
    title: "Abstract Entry Processor",
    body: "### Abstract Entry Processor  You can use the `AbstractEntryProcessor` when the same processing will be performed both on the primary and backup map entries (i.e. the same logic applies to them). If you use `EntryProcessor`, you need to apply the same logic to the backup entries separately. The `AbstractEntryProcessor` class makes this primary/backup processing easier.  Please see the example code below.  ```java public abstract class AbstractEntryProcessor &lt;K, V&gt;     implements EntryProcessor &lt;K, V&gt; {        private final EntryBackupProcessor &lt;K,V&gt; entryBackupProcessor;   public AbstractEntryProcessor() {     this(true);   }    public AbstractEntryProcessor(boolean applyOnBackup) {     if ( applyOnBackup ) {       entryBackupProcessor = new EntryBackupProcessorImpl();     } else {       entryBackupProcessor = null;     }   }     @Override   public abstract Object process(Map.Entry&lt;K, V&gt; entry);    @Override   public final EntryBackupProcessor &lt;K, V&gt; getBackupProcessor() {     return entryBackupProcessor;   }    private class EntryBackupProcessorImpl implements EntryBackupProcessor &lt;K,V&gt;{     @Override     public void processBackup(Map.Entry&lt;K, V&gt; entry) {       process(entry);      }   }	 } ```  In the above example, the method `getBackupProcessor` returns an `EntryBackupProcessor` instance. This means the same processing will be applied to both the primary and backup entries. If you want to apply the processing only upon the primary entries, then make the `getBackupProcessor` method return null.   "
});



documentTitles["distributedquery.html#distributed-query"] = "Distributed Query";
index.add({
    url: "distributedquery.html#distributed-query",
    title: "Distributed Query",
    body: "# Distributed Query  Distributed queries access data from multiple data sources stored on either the same or different computers.  "
});

documentTitles["distributedquery.html#query-overview"] = "Query Overview";
index.add({
    url: "distributedquery.html#query-overview",
    title: "Query Overview",
    body: "## Query Overview   Hazelcast partitions your data and spreads it across cluster of servers. You can iterate over the map entries and look for certain entries (specified by predicates) you are interested in. However, this is not very efficient because you will have to bring the entire entry set and iterate locally. Instead, Hazelcast allows you to run distributed queries on your distributed map.   "
});

documentTitles["distributedquery.html#how-it-works"] = "How It Works";
index.add({
    url: "distributedquery.html#how-it-works",
    title: "How It Works",
    body: "### How It Works  1.	The requested predicate is sent to each member in the cluster. 2.	Each member looks at its own local entries and filters them according to the predicate. At this stage, key/value pairs of the entries are deserialized and then passed to the predicate. 3.	The predicate requester merges all the results coming from each member into a single set.  If you add new members to the cluster, the partition count for each member is reduced and hence the time spent by each member on iterating its entries is reduced. Therefore, the above querying approach is highly scalable. Another reason it is highly scalable is the pool of partition threads that evaluates the entries concurrently in each member. The network traffic is also reduced since only filtered data is sent to the requester.  Hazelcast offers the following APIs for distributed query purposes:  - Criteria API - Distributed SQL Query &lt;br&gt;&lt;/br&gt;   "
});

documentTitles["distributedquery.html#employee-map-query-example"] = "Employee Map Query Example";
index.add({
    url: "distributedquery.html#employee-map-query-example",
    title: "Employee Map Query Example",
    body: "### Employee Map Query Example  Assume that you have an \&quot;employee\&quot; map containing values of `Employee` objects, as coded below.  ```java import java.io.Serializable;  public class Employee implements Serializable { private String name; private int age; private boolean active; private double salary;  public Employee(String name, int age, boolean live, double price) {     this.name = name;     this.age = age;     this.active = live;     this.salary = price; }  public Employee() { }  public String getName() {     return name; }  public int getAge() {     return age; }  public double getSalary() {     return salary; }  public boolean isActive() {     return active; } } ```  Now, let's look for the employees who are active and have an age less than 30 using the aforementioned APIs (Criteria API and Distributed SQL Query). The following subsections describes each query mechanism for this example.  ![image](images/NoteSmall.jpg)***NOTE:*** *When using Portable objects, if one field of an object exists on one node but does not exist on another one, Hazelcast does not throw an unknown field exception. Instead, Hazelcast treats that predicate, which tries to perform a query on an unknown field, as an always false predicate.*   "
});



documentTitles["querycriteriaapi.html#criteria-api"] = "Criteria API";
index.add({
    url: "querycriteriaapi.html#criteria-api",
    title: "Criteria API",
    body: "### Criteria API  Criteria API is a programming interface offered by Hazelcast that is similar to the Java Persistence Query Language (JPQL). Below is the code for the [above example query](#employee-map-query-example).  ```java import com.hazelcast.core.IMap; import com.hazelcast.query.Predicate; import com.hazelcast.query.PredicateBuilder; import com.hazelcast.query.EntryObject; import com.hazelcast.config.Config;  IMap&lt;String, Employee&gt; map = hazelcastInstance.getMap( \&quot;employee\&quot; );  EntryObject e = new PredicateBuilder().getEntryObject(); Predicate predicate = e.is( \&quot;active\&quot; ).and( e.get( \&quot;age\&quot; ).lessThan( 30 ) );  Set&lt;Employee&gt; employees = map.values( predicate ); ```  In the above example code, `predicate` verifies whether the entry is active and its `age` value is less than 30. This `predicate` is applied to the `employee` map using the `map.values(predicate)` method. This method sends the predicate to all cluster members and merges the results coming from them. Since the predicate is communicated between the members, it needs to be serializable.  ![image](images/NoteSmall.jpg)***NOTE:*** *Predicates can also be applied to `keySet`, `entrySet` and `localKeySet` of Hazelcast distributed  &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;map.*  "
});

documentTitles["querycriteriaapi.html#predicates-class"] = "Predicates Class";
index.add({
    url: "querycriteriaapi.html#predicates-class",
    title: "Predicates Class",
    body: "#### Predicates Class  The `Predicates` class offered by Hazelcast includes many operators for your query requirements. Some of them are explained below.  - `equal`: checks if the result of an expression is equal to a given value. - `notEqual`: checks if the result of an expression is not equal to a given value. - `instanceOf`: checks if the result of an expression has a certain type. - `like`: checks if the result of an expression matches some string pattern. % (percentage sign) is placeholder for many characters,  (underscore) is placeholder for only one character. - `greaterThan`: checks if the result of an expression is greater than a certain value. - `greaterEqual`: checks if the result of an expression is greater or equal than a certain value. - `lessThan`: checks if the result of an expression is less than a certain value. - `lessEqual`: checks if the result of an expression is than than or equal to a certain value. - `between`: checks if the result of an expression is between 2 values (this is inclusive). - `in`: checks if the result of an expression is an element of a certain collection. - `isNot`: checks if the result of an expression is false. - `regex`: checks if the result of an expression matches some regular expression. &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please see the [Predicates class](https://github.com/hazelcast/hazelcast/blob/2709bc81cd499a3160827de24422cdb6cf98fe36/hazelcast/src/main/java/com/hazelcast/query/Predicates.java) for all predicates provided.*   "
});

documentTitles["querycriteriaapi.html#joining-predicates-with-and-or-not"] = "Joining Predicates with AND, OR, NOT";
index.add({
    url: "querycriteriaapi.html#joining-predicates-with-and-or-not",
    title: "Joining Predicates with AND, OR, NOT",
    body: "#### Joining Predicates with AND, OR, NOT  Predicates can be joined using the `and`, `or` and `not` operators, as shown in the below examples.  ```java public Set&lt;Person&gt; getWithNameAndAge( String name, int age ) {   Predicate namePredicate = Predicates.equal( \&quot;name\&quot;, name );   Predicate agePredicate = Predicates.equal( \&quot;age\&quot;, age );   Predicate predicate = Predicates.and( namePredicate, agePredicate );   return personMap.values( predicate ); } ```  ```java public Set&lt;Person&gt; getWithNameOrAge( String name, int age ) {   Predicate namePredicate = Predicates.equal( \&quot;name\&quot;, name );   Predicate agePredicate = Predicates.equal( \&quot;age\&quot;, age );   Predicate predicate = Predicates.or( namePredicate, agePredicate );   return personMap.values( predicate ); } ```  ```java public Set&lt;Person&gt; getNotWithName( String name ) {   Predicate namePredicate = Predicates.equal( \&quot;name\&quot;, name );   Predicate predicate = Predicates.not( namePredicate );   return personMap.values( predicate ); } ```   "
});

documentTitles["querycriteriaapi.html#predicatebuilder"] = "PredicateBuilder";
index.add({
    url: "querycriteriaapi.html#predicatebuilder",
    title: "PredicateBuilder",
    body: "#### PredicateBuilder  You can simplify predicate usage with the `PredicateBuilder` class, which offers simpler predicate building. Please see the below example code which selects all people with a certain name and age.  ```java public Set&lt;Person&gt; getWithNameAndAgeSimplified( String name, int age ) {   EntryObject e = new PredicateBuilder().getEntryObject();   Predicate agePredicate = e.get( \&quot;age\&quot; ).equal( age );   Predicate predicate = e.get( \&quot;name\&quot; ).equal( name ).and( agePredicate );   return personMap.values( predicate ); } ```   "
});



documentTitles["querysql.html#distributed-sql-query"] = "Distributed SQL Query";
index.add({
    url: "querysql.html#distributed-sql-query",
    title: "Distributed SQL Query",
    body: "### Distributed SQL Query  `com.hazelcast.query.SqlPredicate` takes the regular SQL `where` clause. Here is an example:  ```java IMap&lt;Employee&gt; map = hazelcastInstance.getMap( \&quot;employee\&quot; ); Set&lt;Employee&gt; employees = map.values( new SqlPredicate( \&quot;active AND age &lt; 30\&quot; ) ); ```  "
});

documentTitles["querysql.html#supported-sql-syntax"] = "Supported SQL syntax:";
index.add({
    url: "querysql.html#supported-sql-syntax",
    title: "Supported SQL syntax:",
    body: "#### Supported SQL syntax:  **AND/OR:** `&lt;expression&gt; AND &lt;expression&gt; AND &lt;expression&gt;... `  - `active AND age&gt;30` - `active=false OR age = 45 OR name = 'Joe' ` - `active AND ( age &gt; 20 OR salary &lt; 60000 ) `  **Equality:** `=, !=, &lt;, &lt;=, &gt;, &gt;=`  - `&lt;expression&gt; = value` - `age &lt;= 30` - `name = \&quot;Joe\&quot;` - `salary != 50000`  **BETWEEN: ** `&lt;attribute&gt; [NOT] BETWEEN &lt;value1&gt; AND &lt;value2&gt;`  - `age BETWEEN 20 AND 33 ( same as age &gt;= 20  AND age &lt;= 33 )` - `age NOT BETWEEN 30 AND 40 ( same as age &lt; 30 OR age &gt; 40 )`  **LIKE:** `&lt;attribute&gt; [NOT] LIKE 'expression'`  The `%` (percentage sign) is placeholder for multiple characters, an `_` (underscore) is placeholder for only one character.  - `name LIKE 'Jo%'` (true for 'Joe', 'Josh', 'Joseph' etc.) - `name LIKE 'Jo_'` (true for 'Joe'; false for 'Josh') - `name NOT LIKE 'Jo_'` (true for 'Josh'; false for 'Joe') - `name LIKE 'J_s%'` (true for 'Josh', 'Joseph'; false 'John', 'Joe')  **IN:** `&lt;attribute&gt; [NOT] IN (val1, val2,...)`  - `age IN ( 20, 30, 40 )` - `age NOT IN ( 60, 70 )` - `active AND ( salary &gt;= 50000 OR ( age NOT BETWEEN 20 AND 30 ) )` - `age IN ( 20, 30, 40 ) AND salary BETWEEN ( 50000, 80000 )`   "
});



documentTitles["querypagingpredicate.html#paging-predicate-order-limit"] = "Paging Predicate (Order &amp; Limit)";
index.add({
    url: "querypagingpredicate.html#paging-predicate-order-limit",
    title: "Paging Predicate (Order &amp; Limit)",
    body: "### Paging Predicate (Order &amp; Limit)  Hazelcast provides paging for defined predicates. With its `PagingPredicate` class, you can get a collection of keys, values, or entries page by page by filtering them with predicates and giving the size of the pages. Also, you can sort the entries by specifying comparators.  In the example code below, the `greaterEqual` predicate gets values from the \&quot;students\&quot; map. This predicate has a filter to retrieve the objects with a \&quot;age\&quot; greater than or equal to 18. Then a `PagingPredicate` is constructed in which the page size is 5, so there will be 5 objects in each page.  The first time the values are called creates the first page. You can get the subsequent pages by using the `nextPage()` method of `PagingPredicate` and querying the map again with the updated `PagingPredicate`.   ```java IMap&lt;Integer, Student&gt; map = hazelcastInstance.getMap( \&quot;students\&quot; ); Predicate greaterEqual = Predicates.greaterEqual( \&quot;age\&quot;, 18 ); PagingPredicate pagingPredicate = new PagingPredicate( greaterEqual, 5 ); // Retrieve the first page Collection&lt;Student&gt; values = map.values( pagingPredicate ); ... // Set up next page pagingPredicate.nextPage(); // Retrieve next page values = map.values( pagingPredicate ); ... ```  If a comparator is not specified for `PagingPredicate`, but you want to get a collection of keys or values page by page, this collection must be an instance of `Comparable` (i.e. it must implement `java.lang.Comparable`). Otherwise, the `java.lang.IllegalArgument` exception is thrown.  Paging Predicate is not supported in Transactional Context. &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***  *Please refer to the [Javadoc](http://hazelcast.org/docs/latest/javadoc/com/hazelcast/query/Predicates.html) for all predicates.*    "
});



documentTitles["queryindexing.html#indexing"] = "Indexing";
index.add({
    url: "queryindexing.html#indexing",
    title: "Indexing",
    body: "### Indexing  Hazelcast distributed queries will run on each member in parallel and only results will return the conn. When a query runs on a member, Hazelcast will iterate through the entire owned entries and find the matching ones. This can be made faster by indexing the mostly queried fields, just like you would do for your database. Indexing will add overhead for each `write` operation but queries will be a lot faster. If you query your map a lot, make sure to add indexes for the most frequently queried fields. For example, if your `active and age &lt; 30` query, make sure you add index for `active` and `age` fields. Here is how to do it.  ```java IMap map = hazelcastInstance.getMap( \&quot;employees\&quot; ); // ordered, since we have ranged queries for this field map.addIndex( \&quot;age\&quot;, true ); // not ordered, because boolean field cannot have range map.addIndex( \&quot;active\&quot;, false ); ```  `IMap.addIndex(fieldName, ordered)` is used for adding index. For each indexed field, if you have ranged queries such as `age&gt;30`, `age BETWEEN 40 AND 60`, then you should set the `ordered` parameter to `true`. Otherwise, set it to `false`.  Also, you can define `IMap` indexes in configuration. An example is shown below.  ```xml &lt;map name=\&quot;default\&quot;&gt;   ...   &lt;indexes&gt;     &lt;index ordered=\&quot;false\&quot;&gt;name&lt;/index&gt;     &lt;index ordered=\&quot;true\&quot;&gt;age&lt;/index&gt;   &lt;/indexes&gt; &lt;/map&gt; ```  You can also define `IMap` indexes using programmatic configuration, as in the example below.  ```java mapConfig.addMapIndexConfig( new MapIndexConfig( \&quot;name\&quot;, false ) ); mapConfig.addMapIndexConfig( new MapIndexConfig( \&quot;age\&quot;, true ) ); ```  The following is the Spring declarative configuration for the same sample.  ```xml &lt;hz:map name=\&quot;default\&quot;&gt;   &lt;hz:indexes&gt;     &lt;hz:index attribute=\&quot;name\&quot;/&gt;     &lt;hz:index attribute=\&quot;age\&quot; ordered=\&quot;true\&quot;/&gt;   &lt;/hz:indexes&gt; &lt;/hz:map&gt; ``` &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *Non-primitive types to be indexed should implement *`Comparable`*.*  "
});



documentTitles["querythreadconfiguration.html#query-thread-configuration"] = "Query Thread Configuration";
index.add({
    url: "querythreadconfiguration.html#query-thread-configuration",
    title: "Query Thread Configuration",
    body: "### Query Thread Configuration  You can change the size of the thread pool dedicated to query operations using the `pool-size` property. Below is an example of that declarative configuration.  ```xml &lt;executor-service name=\&quot;hz:query\&quot;&gt;   &lt;pool-size&gt;100&lt;/pool-size&gt; &lt;/executor-service&gt; ```  Below is an example of the equivalent programmatic configuration.  ```java Config cfg = new Config(); cfg.getExecutorConfig(\&quot;hz:query\&quot;).setPoolSize(100); ``` "
});



documentTitles["mapreduce.html#mapreduce"] = "MapReduce";
index.add({
    url: "mapreduce.html#mapreduce",
    title: "MapReduce",
    body: "## MapReduce  You have likely heard about MapReduce ever since Google released its [research white paper](http://research.google.com/archive/mapreduce.html) on this concept. With Hadoop as the most common and well known implementation, MapReduce gained a broad audience and made it into all kinds of business applications dominated by data warehouses.  MapReduce is a software framework for processing large amounts of data in a distributed way. Therefore, the processing is normally spread over several machines. The basic idea behind MapReduce is to map your source data into a collection of key-value pairs and reducing those pairs, grouped by key, in a second step towards the final result.  The main idea can be summarized with the following steps.    1. Read the source data.   2. Map the data to one or multiple key-value pairs.   3. Reduce all pairs with the same key.  **Use Cases**  The best known examples for MapReduce algorithms are text processing tools, such as counting the word frequency in large texts or websites. Apart from that, there are more interesting examples of use cases listed below.   - Log Analysis  - Data Querying  - Aggregation and summing  - Distributed Sort  - ETL (Extract Transform Load)  - Credit and Risk management  - Fraud detection  - and more...   "
});



documentTitles["mr-essentials.html#mapreduce-essentials"] = "MapReduce Essentials";
index.add({
    url: "mr-essentials.html#mapreduce-essentials",
    title: "MapReduce Essentials",
    body: "### MapReduce Essentials  This section will give a deeper insight on the MapReduce pattern and helps you understand the semantics behind the different MapReduce phases and how they are implemented in Hazelcast.  In addition to this, the following sections compare Hadoop and Hazelcast MapReduce implementations to help adopters with Hadoop backgrounds to quickly get familiar with Hazelcast MapReduce.  "
});

documentTitles["mr-essentials.html#mapreduce-workflow-example"] = "MapReduce Workflow Example";
index.add({
    url: "mr-essentials.html#mapreduce-workflow-example",
    title: "MapReduce Workflow Example",
    body: "#### MapReduce Workflow Example  The flowchart below demonstrates the basic workflow of the word count example (distributed occurrences analysis) mentioned in the [MapReduce section](#mapreduce). From left to right, it iterates over all the entries of a data structure (in this case an IMap). In the mapping phase, it splits the sentence into single words and emits a key-value pair per word: the word is the key, 1 is the value. In the next phase, values are collected (grouped) and transported to their corresponding reducers, where they are eventually reduced to a single key-value pair, the value being the number of occurrences of the word. At the last step, the different reducer results are grouped up to the final result and returned to the requester.  ![](images/mapreduce/MapReduceWorkflow.jpg)  In pseudo code, the corresponding map and reduce function would look like the following. A Hazelcast code example will be shown in the next section.  ```plain map( key:String, document:String ):Void -&gt;   for each w:word in document:     emit( w, 1 )  reduce( word:String, counts:List[Int] ):Int -&gt;   return sum( counts ) ```  "
});

documentTitles["mr-essentials.html#mapreduce-phases"] = "MapReduce Phases";
index.add({
    url: "mr-essentials.html#mapreduce-phases",
    title: "MapReduce Phases",
    body: "#### MapReduce Phases  As seen in the workflow example, a MapReduce process consists of multiple phases. The original MapReduce pattern describes two phases (map, reduce) and one optional phase (combine). In Hazelcast, these phases are either only existing virtually to explain the data flow or are executed in parallel during the real operation while the general idea is still persisting.  (K x V)\* -&gt; (L x W)*  [(k*1*, v*1*), ..., (k*n*, v*n*)] -&gt; [(l*1*, w*1*), ..., (l*m*, w*m*)]  **Mapping Phase**  The mapping phase iterates all key-value pairs of any kind of legal input source. The mapper then analyzes the input pairs and emits zero or more new key-value pairs.  K x V -&gt; (L x W)*  (k, v) -&gt; [(l*1*, w*1*), ..., (l*n*, w*n*)]  **Combine Phase**  In the combine phase, multiple key-value pairs with the same key are collected and combined to an intermediate result before being send to the reducers. **Combine phase is also optional in Hazelcast, but is highly recommended to lower the traffic.**  In terms of the word count example, this can be explained using the sentences \&quot;Saturn is a planet but the Earth is a planet, too\&quot;. As shown above, we would send two key-value pairs (planet, 1). The registered combiner now collects those two pairs and combines them into an intermediate result of (planet, 2). Instead of two key-value pairs sent through the wire, there is now only one for the key \&quot;planet\&quot;.  The pseudo code for a combiner is similar to the reducer.  ```text combine( word:String, counts:List[Int] ):Void -&gt;   emit( word, sum( counts ) ) ```  **Grouping / Shuffling Phase**  The grouping or shuffling phase only exists virtually in Hazelcast since it is not a real phase; emitted key-value pairs with the same key are always transferred to the same reducer in the same job. They are grouped together, which is equivalent to the shuffling phase.  **Reducing Phase**  In the reducing phase, the collected intermediate key-value pairs are reduced by their keys to build the final by-key result. This value can be a sum of all the emitted values of the same key, an average value, or something completely different, depending on the use case.  Here is a reduced representation of this phase.  L x W\* -&gt; X*  (l, [w*1*, ..., w*n*]) -&gt; [x*1*, ..., x*n*]  **Producing the Final Result**  This is not a real MapReduce phase, but it is the final step in Hazelcast after all reducers are notified that reducing has finished. The original job initiator then requests all reduced results and builds the final result.   "
});

documentTitles["mr-essentials.html#additional-mapreduce-resources"] = "Additional MapReduce Resources";
index.add({
    url: "mr-essentials.html#additional-mapreduce-resources",
    title: "Additional MapReduce Resources",
    body: "#### Additional MapReduce Resources  The Internet is full of useful resources to find deeper information on MapReduce. Below is a short collection of more introduction material. In addition, there are books written about all kinds of MapReduce patterns and how to write a MapReduce function for your use case. To name them all is out of scope of this documentation.   - &lt;http://research.google.com/archive/mapreduce.html&gt;  - &lt;http://en.wikipedia.org/wiki/MapReduce&gt;  - &lt;http://hci.stanford.edu/courses/cs448g/a2/files/map_reduce_tutorial.pdf&gt;  - &lt;http://ksat.me/map-reduce-a-really-simple-introduction-kloudo/&gt;  - &lt;http://www.slideshare.net/franebandov/an-introduction-to-mapreduce-6789635&gt;   "
});



documentTitles["mr-introduction.html#introduction-to-mapreduce-api"] = "Introduction to MapReduce API";
index.add({
    url: "mr-introduction.html#introduction-to-mapreduce-api",
    title: "Introduction to MapReduce API",
    body: "### Introduction to MapReduce API  This section explains the basics of the Hazelcast MapReduce framework. While walking through the different API classes, we will build the [word count example that was discussed earlier](#mapreduce-essentials) and create it step by step.  The Hazelcast API for MapReduce operations consists of a fluent DSL-like configuration syntax to build and submit jobs. `JobTracker` is the basic entry point to all MapReduce operations and is retrieved from `com.hazelcast.core.HazelcastInstance` by calling `getJobTracker` and supplying the name of the required `JobTracker` configuration. The configuration for `JobTracker`s will be discussed later, for now we focus on the API itself. In addition, the complete submission part of the API is built to support a fully reactive way of programming.  To give an easy introduction to people used to Hadoop, we created the class names to be as familiar as possible to their counterparts on Hadoop. That means while most users will recognize a lot of similar sounding classes, the way to configure the jobs is more fluent due to the DSL-like styled API.  While building the example, we will go through as many options as possible, e.g. we create a specialized `JobTracker` configuration (at the end). Special `JobTracker` configuration is not required, because for all other Hazelcast features you can use \&quot;default\&quot; as the configuration name. However, special configurations offer better options to predict behavior of the framework execution.  The full example is available [here](http://github.com/noctarius/hz-map-reduce) as a ready to run Maven project.  "
});

documentTitles["mr-introduction.html#jobtracker"] = "JobTracker";
index.add({
    url: "mr-introduction.html#jobtracker",
    title: "JobTracker",
    body: ""
});

documentTitles["mr-introduction.html#job"] = "Job";
index.add({
    url: "mr-introduction.html#job",
    title: "Job",
    body: "#### JobTracker  `JobTracker` creates Job instances, whereas every instance of `com.hazelcast.mapreduce.Job` defines a single MapReduce configuration. The same Job can be submitted multiple times, no matter if it is executed in parallel or after the previous execution is finished.  ![image](images/NoteSmall.jpg) ***NOTE:*** *After retrieving the `JobTracker`, be aware that it should only be used with data structures derived from the same HazelcastInstance. Otherwise, you can get unexpected behavior.*  To retrieve a `JobTracker` from Hazelcast, we will start by using the \&quot;default\&quot; configuration for convenience reasons to show the basic way.  ```java import com.hazelcast.mapreduce.*;  JobTracker jobTracker = hazelcastInstance.getJobTracker( \&quot;default\&quot; ); ```  `JobTracker` is retrieved using the same kind of entry point as most other Hazelcast features. After building the cluster connection, you use the created HazelcastInstance to request the configured (or default) `JobTracker` from Hazelcast.  The next step will be to create a new `Job` and configure it to execute our first MapReduce request against cluster data.  #### Job  As mentioned in the [JobTracker section](#jobtracker), a Job is created using the retrieved `JobTracker` instance. A Job defines exactly one configuration of a MapReduce task. Mapper, combiner and reducers will be defined per job but since the Job instance is only a configuration, it is possible to be submitted multiple times, no matter if executions happening in parallel or one after the other.  A submitted job is always identified using a unique combination of the `JobTracker`'s name and a jobId generated on submit-time. The way for retrieving the jobId will be shown in one of the later sections.  To create a Job, a second class `com.hazelcast.mapreduce.KeyValueSource` is necessary. We will have a deeper look at the KeyValueSource class in the next section, for now it is enough to know that it is used to wrap any kind of data or data structure into a well defined set of key-value pairs.  Below example code is a direct follow up of the example of the [JobTracker section](#jobtracker) and reuses the already created HazelcastInstance and `JobTracker` instances.  We start by retrieving an instance of our data map and create the Job instance afterwards. Implementations used to configure the Job will be discussed while walking further through the API documentation, they are not yet discussed.  ![image](images/NoteSmall.jpg) ***NOTE:*** *Since the Job class is highly dependent upon generics to support type safety, the generics change over time and may not be assignment compatible to old variable types. To make use of the full potential of the fluent API, we recommend you use fluent method chaining as shown in this example to prevent the need for too many variables.*  ```java IMap&lt;String, String&gt; map = hazelcastInstance.getMap( \&quot;articles\&quot; ); KeyValueSource&lt;String, String&gt; source = KeyValueSource.fromMap( map ); Job&lt;String, String&gt; job = jobTracker.newJob( source );  ICompletableFuture&lt;Map&lt;String, Long&gt;&gt; future = job     .mapper( new TokenizerMapper() )     .combiner( new WordCountCombinerFactory() )     .reducer( new WordCountReducerFactory() )     .submit();  // Attach a callback listener future.andThen( buildCallback() );  // Wait and retrieve the result Map&lt;String, Long&gt; result = future.get(); ```  As seen above, we create the Job instance and define a mapper, combiner, reducer and eventually submit the request to the cluster. The `submit` method returns an ICompletableFuture that can be used to attach our callbacks or just to wait for the result to be processed in a blocking fashion.  There are more options available for job configurations such as defining a general chunk size or on what keys the operation will operate. For more information, please refer to the Javadoc matching your Hazelcast version.  "
});

documentTitles["mr-introduction.html#keyvaluesource"] = "KeyValueSource";
index.add({
    url: "mr-introduction.html#keyvaluesource",
    title: "KeyValueSource",
    body: "#### KeyValueSource  `KeyValueSource` is able to either wrap Hazelcast data structures (like IMap, MultiMap, IList, ISet) into key-value pair input sources, or build your own custom key-value input source. The latter option makes it possible to feed Hazelcast MapReduce with all kinds of data, such as just-in-time downloaded web page contents or data files. People familiar with Hadoop will recognize similarities with the Input class.  You can imagine a `KeyValueSource` as a bigger `java.util.Iterator` implementation. Whereas most methods are required to be implemented, the `getAllKeys` method is optional to implement. If implementation is able to gather all keys upfront, it should be implemented and `isAllKeysSupported` must return `true`. That way, Job configured KeyPredicates are able to evaluate keys upfront before sending them to the cluster. Otherwise, they are serialized and transferred as well, to be evaluated at execution time.  As shown in the example above, the abstract `KeyValueSource` class provides a number of static methods to easily wrap Hazelcast data structures into `KeyValueSource` implementations already provided by Hazelcast. The data structures' generics are inherited into the resulting `KeyValueSource` instance. For data structures like IList or ISet, the key type is always String. While mapping, the key is the data structure's name whereas the value type and value itself are inherited from the IList or ISet itself.  ```java // KeyValueSource from com.hazelcast.core.IMap IMap&lt;String, String&gt; map = hazelcastInstance.getMap( \&quot;my-map\&quot; ); KeyValueSource&lt;String, String&gt; source = KeyValueSource.fromMap( map ); ```  ```java // KeyValueSource from com.hazelcast.core.MultiMap MultiMap&lt;String, String&gt; multiMap = hazelcastInstance.getMultiMap( \&quot;my-multimap\&quot; ); KeyValueSource&lt;String, String&gt; source = KeyValueSource.fromMultiMap( multiMap ); ```  ```java // KeyValueSource from com.hazelcast.core.IList IList&lt;String&gt; list = hazelcastInstance.getList( \&quot;my-list\&quot; ); KeyValueSource&lt;String, String&gt; source = KeyValueSource.fromList( list ); ```  ```java // KeyValueSource from com.hazelcast.core.IList ISet&lt;String&gt; set = hazelcastInstance.getSet( \&quot;my-set\&quot; ); KeyValueSource&lt;String, String&gt; source = KeyValueSource.fromSet( set ); ```  **PartitionIdAware**  The `com.hazelcast.mapreduce.PartitionIdAware` interface can be implemented by the `KeyValueSource` implementation if the underlying data set is aware of the Hazelcast partitioning schema (as it is for all internal data structures). If this interface is implemented, the same `KeyValueSource` instance is reused multiple times for all partitions on the cluster node. As a consequence, the `close` and `open` methods are also executed multiple times but once per partitionId.  "
});

documentTitles["mr-introduction.html#mapper"] = "Mapper";
index.add({
    url: "mr-introduction.html#mapper",
    title: "Mapper",
    body: "#### Mapper  Using the `Mapper` interface, you will implement the mapping logic. Mappers can transform, split, calculate, aggregate data from data sources. In Hazelcast, it is also possible to integrate data from more than the KeyValueSource data source by implementing `com.hazelcast.core.HazelcastInstanceAware` and requesting additional maps, multimaps, list, sets.  The mappers `map` function is called once per available entry in the data structure. If you work on distributed data structures that operate in a partition based fashion, then multiple mappers work in parallel on the different cluster nodes, on the nodes' assigned partitions. Mappers then prepare and maybe transform the input key-value pair and emit zero or more key-value pairs for reducing phase.  For our word count example, we retrieve an input document (a text document) and we transform it by splitting the text into the available words. After that, as discussed in the [pseudo code](#mapreduce-workflow-example), we emit every single word with a key-value pair with the word as the key and 1 as the value.  A common implementation of that `Mapper` might look like the following example:  ```java public class TokenizerMapper implements Mapper&lt;String, String, String, Long&gt; {   private static final Long ONE = Long.valueOf( 1L );    @Override   public void map(String key, String document, Context&lt;String, Long&gt; context) {     StringTokenizer tokenizer = new StringTokenizer( document.toLowerCase() );     while ( tokenizer.hasMoreTokens() ) {       context.emit( tokenizer.nextToken(), ONE );     }   } } ```  The code splits the mapped texts into their tokens, iterates over the tokenizer as long as there are more tokens, and emits a pair per word. Note that we're not yet collecting multiple occurrences of the same word, we just fire every word on its own.  **LifecycleMapper / LifecycleMapperAdapter**  The LifecycleMapper interface or its adapter class LifecycleMapperAdapter can be used to make the Mapper implementation lifecycle aware. That means it will be notified when mapping of a partition or set of data begins and when the last entry was mapped.  Only special algorithms might need those additional lifecycle events to prepare, clean up, or emit additional values.  "
});

documentTitles["mr-introduction.html#combiner-combinerfactory"] = "Combiner / CombinerFactory";
index.add({
    url: "mr-introduction.html#combiner-combinerfactory",
    title: "Combiner / CombinerFactory",
    body: "#### Combiner / CombinerFactory  As stated in the introduction, a Combiner is used to minimize traffic between the different cluster nodes when transmitting mapped values from mappers to the reducers. It does this by aggregating multiple values for the same emitted key. This is a fully optional operation, but using it is highly recommended.  Combiners can be seen as an intermediate reducer. The calculated value is always assigned back to the key for which the combiner initially was created. Since combiners are created per emitted key, the Combiner implementation itself is not defined in the jobs configuration; instead, a CombinerFactory is created that is able to create the expected Combiner instance.  Because Hazelcast MapReduce is executing mapping and reducing phase in parallel, the Combiner implementation must be able to deal with chunked data. Therefore, you must reset its internal state whenever you call `finalizeChunk`. Calling that method creates a chunk of intermediate data to be grouped (shuffled) and sent to the reducers.  Combiners can override `beginCombine` and `finalizeCombine` to perform preparation or cleanup work.  For our word count example, we are going to have a simple CombinerFactory and Combiner implementation similar to the following example.  ```java public class WordCountCombinerFactory     implements CombinerFactory&lt;String, Long, Long&gt; {    @Override   public Combiner&lt;Long, Long&gt; newCombiner( String key ) {     return new WordCountCombiner();   }    private class WordCountCombiner extends Combiner&lt;Long, Long&gt; {     private long sum = 0;      @Override     public void combine( Long value ) {       sum++;     }      @Override     public Long finalizeChunk() {       return sum;     }              @Override     public void reset() {       sum = 0;     }   } } ```  The Combiner must be able to return its current value as a chunk and reset the internal state by setting `sum` back to 0. Since combiners are always called from a single thread, no synchronization or volatility of the variables is necessary.  "
});

documentTitles["mr-introduction.html#reducer-reducerfactory"] = "Reducer / ReducerFactory";
index.add({
    url: "mr-introduction.html#reducer-reducerfactory",
    title: "Reducer / ReducerFactory",
    body: "#### Reducer / ReducerFactory  Reducers do the last bit of algorithm work. This can be aggregating values, calculating averages, or any other work that is expected from the algorithm.  Since values arrive in chunks, the `reduce` method is called multiple times for every emitted value of the creation key. This also can happen multiple times per chunk if no Combiner implementation was configured for a job configuration.  In difference of the combiners, a reducers `finalizeReduce` method is only called once per reducer (which means once per key). Therefore, a reducer does not need to reset its internal state at any time.  Reducers can override `beginReduce` to perform preparation work.  For our word count example, the implementation will look similar to the following code example.  ```java public class WordCountReducerFactory implements ReducerFactory&lt;String, Long, Long&gt; {    @Override   public Reducer&lt;Long, Long&gt; newReducer( String key ) {     return new WordCountReducer();   }    private class WordCountReducer extends Reducer&lt;Long, Long&gt; {     private volatile long sum = 0;      @Override     public void reduce( Long value ) {       sum += value.longValue();     }      @Override     public Long finalizeReduce() {       return sum;     }   } } ```  Different from combiners, reducers tend to switch threads if running out of data to prevent blocking threads from the `JobTracker` configuration. They are rescheduled at a later point when new data to be processed arrives but unlikely to be executed on the same thread as before. As of Hazelcast version 3.3.3 the guarantee for memory visibility on the new thread is ensured by the framework. This means the previous requirement for making fields volatile is dropped.  "
});

documentTitles["mr-introduction.html#collator"] = "Collator";
index.add({
    url: "mr-introduction.html#collator",
    title: "Collator",
    body: "#### Collator  A Collator is an optional operation that is executed on the job emitting node and is able to modify the finally reduced result before returned to the user's codebase. Only special use cases are likely to use collators.  For an imaginary use case, we might want to know how many words were all over in the documents we analyzed. For this case, a Collator implementation can be given to the `submit` method of the Job instance.  A collator would look like the following snippet:  ```java public class WordCountCollator implements Collator&lt;Map.Entry&lt;String, Long&gt;, Long&gt; {    @Override   public Long collate( Iterable&lt;Map.Entry&lt;String, Long&gt;&gt; values ) {     long sum = 0;      for ( Map.Entry&lt;String, Long&gt; entry : values ) {       sum += entry.getValue().longValue();     }     return sum;   } } ```  The definition of the input type is a bit strange, but because Combiner and Reducer implementations are optional, the input type heavily depends on the state of the data. As stated above, collators are non-typical use cases and the generics of the framework always help in finding the correct signature.  "
});

documentTitles["mr-introduction.html#keypredicate"] = "KeyPredicate";
index.add({
    url: "mr-introduction.html#keypredicate",
    title: "KeyPredicate",
    body: "#### KeyPredicate  A `KeyPredicate` can be used to pre-select whether or not a key should be selected for mapping in the mapping phase. If the `KeyValueSource` implementation is able to know all keys prior to execution, the keys are filtered before the operations are divided among the different cluster nodes.  A `KeyPredicate` can also be used to select only a special range of data (e.g. a time-frame) or similar use cases.  A basic `KeyPredicate` implementation that only maps keys containing the word \&quot;hazelcast\&quot; might look like the following code example:  ```java public class WordCountKeyPredicate implements KeyPredicate&lt;String&gt; {    @Override   public boolean evaluate( String s ) {     return s != null &amp;&amp; s.toLowerCase().contains( \&quot;hazelcast\&quot; );   } } ```  "
});

documentTitles["mr-introduction.html#trackablejob-and-job-monitoring"] = "TrackableJob and Job Monitoring";
index.add({
    url: "mr-introduction.html#trackablejob-and-job-monitoring",
    title: "TrackableJob and Job Monitoring",
    body: "#### TrackableJob and Job Monitoring  You can retrieve a `TrackableJob` instance after submitting a job. It is requested from the `JobTracker` using the unique jobId (per `JobTracker`). It can be used to get runtime statistics of the job. The information available is limited to the number of processed (mapped) records and the processing state of the different partitions or nodes (if `KeyValueSource` is not PartitionIdAware).  To retrieve the jobId after submission of the job, use `com.hazelcast.mapreduce.JobCompletableFuture` instead of the `com.hazelcast.core.ICompletableFuture` as the variable type for the returned future.  The example code below gives a quick introduction on how to retrieve the instance and the runtime data. For more information, please have a look at the Javadoc corresponding your running Hazelcast version.  ```java IMap&lt;String, String&gt; map = hazelcastInstance.getMap( \&quot;articles\&quot; ); KeyValueSource&lt;String, String&gt; source = KeyValueSource.fromMap( map ); Job&lt;String, String&gt; job = jobTracker.newJob( source );  JobCompletableFuture&lt;Map&lt;String, Long&gt;&gt; future = job     .mapper( new TokenizerMapper() )     .combiner( new WordCountCombinerFactory() )     .reducer( new WordCountReducerFactory() )     .submit();  String jobId = future.getJobId(); TrackableJob trackableJob = jobTracker.getTrackableJob(jobId);  JobProcessInformation stats = trackableJob.getJobProcessInformation(); int processedRecords = stats.getProcessedRecords(); log( \&quot;ProcessedRecords: \&quot; + processedRecords );  JobPartitionState[] partitionStates = stats.getPartitionStates(); for ( JobPartitionState partitionState : partitionStates ) {   log( \&quot;PartitionOwner: \&quot; + partitionState.getOwner()           + \&quot;, Processing state: \&quot; + partitionState.getState().name() ); }  ```   ![image](images/NoteSmall.jpg) ***NOTE:*** *Caching of the JobProcessInformation does not work on Java native clients since current values are retrieved while retrieving the instance to minimize traffic between executing node and client.*   "
});

documentTitles["mr-introduction.html#jobtracker-configuration"] = "JobTracker Configuration";
index.add({
    url: "mr-introduction.html#jobtracker-configuration",
    title: "JobTracker Configuration",
    body: "#### JobTracker Configuration  The `JobTracker` configuration is used to setup behavior of the Hazelcast MapReduce framework.  Every `JobTracker` is capable of running multiple MapReduce jobs at once; one configuration is meant as a shared resource for all jobs created by the same `JobTracker`. The configuration gives full control over the expected load behavior and thread counts to be used.  The following snippet shows a typical `JobTracker` configuration. We will discuss the configuration properties one by one:  ```xml &lt;jobtracker name=\&quot;default\&quot;&gt;   &lt;max-thread-size&gt;0&lt;/max-thread-size&gt;   &lt;!-- Queue size 0 means number of partitions * 2 --&gt;   &lt;queue-size&gt;0&lt;/queue-size&gt;   &lt;retry-count&gt;0&lt;/retry-count&gt;   &lt;chunk-size&gt;1000&lt;/chunk-size&gt;   &lt;communicate-stats&gt;true&lt;/communicate-stats&gt;   &lt;topology-changed-strategy&gt;CANCEL_RUNNING_OPERATION&lt;/topology-changed-strategy&gt; &lt;/jobtracker&gt; ```  - **max-thread-size:** Configures the maximum thread pool size of the JobTracker. - **queue-size:** Defines the maximum number of tasks that are able to wait to be processed. A value of 0 means an unbounded queue. Very low numbers can prevent successful execution since job might not be correctly scheduled or intermediate chunks might be lost. - **retry-count:** Currently not used. Reserved for later use where the framework will automatically try to restart / retry operations from an available save point. - **chunk-size:** Defines the number of emitted values before a chunk is sent to the reducers. If your emitted values are big or you want to better balance your work, you might want to change this to a lower or higher value. A value of 0 means immediate transmission, but remember that low values mean higher traffic costs. A very high value might cause an OutOfMemoryError to occur if the emitted values do not fit into heap memory before being sent to the reducers. To prevent this, you might want to use a combiner to pre-reduce values on mapping nodes. - **communicate-stats:** Defines if statistics (for example, statistics about processed entries) are transmitted to the job emitter. This can show progress to a user inside of an UI system, but it produces additional traffic. If not needed, you might want to deactivate this. - **topology-changed-strategy:** Defines how the MapReduce framework will react on topology changes while executing a job. Currently, only CANCEL_RUNNING_OPERATION is fully supported, which throws an exception to the job emitter (will throw a `com.hazelcast.mapreduce.TopologyChangedException`).   &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [MapReduce Jobtracker Configuration section](#mapreduce-jobtracker-configuration) for a full description of Hazelcast MapReduce JobTracker configuration (includes an example programmatic configuration).*  "
});



documentTitles["mr-architecture.html#hazelcast-mapreduce-architecture"] = "Hazelcast MapReduce Architecture";
index.add({
    url: "mr-architecture.html#hazelcast-mapreduce-architecture",
    title: "Hazelcast MapReduce Architecture",
    body: "### Hazelcast MapReduce Architecture  This section explains some of the internals of the MapReduce framework. This is more advanced information. If you're not interested in how it works internally, you might want to skip this section.  "
});

documentTitles["mr-architecture.html#node-interoperation-example"] = "Node Interoperation Example";
index.add({
    url: "mr-architecture.html#node-interoperation-example",
    title: "Node Interoperation Example",
    body: "#### Node Interoperation Example  To understand the following technical internals, we first have a short look at what happens in terms of an example workflow.  As a simple example, think of an `IMap&lt;String, Integer&gt;` and emitted keys having the same types. Imagine you have a three node cluster and you initiate the MapReduce job on the first node. After you requested the JobTracker from your running / connected Hazelcast, we submit the task and retrieve the ICompletableFuture which gives us a chance to wait for the result to be calculated or to add a callback (and being more reactive).  The example expects that the chunk size is 0 or 1, so an emitted value is directly sent to the reducers. Internally, the job is prepared, started, and executed on all nodes as shown below. The first node acts as the job owner (job emitter).  ```plain Node1 starts MapReduce job Node1 emits key=Foo, value=1 Node1 does PartitionService::getKeyOwner(Foo) =&gt; results in Node3  Node2 emits key=Foo, value=14 Node2 asks jobOwner (Node1) for keyOwner of Foo =&gt; results in Node3  Node1 sends chunk for key=Foo to Node3  Node3 receives chunk for key=Foo and looks if there is already a Reducer,       if not creates one for key=Foo Node3 processes chunk for key=Foo  Node2 sends chunk for key=Foo to Node3  Node3 receives chunk for key=Foo and looks if there is already a Reducer and uses       the previous one Node3 processes chunk for key=Foo  Node1 send LastChunk information to Node3 because processing local values finished  Node2 emits key=Foo, value=27 Node2 has cached keyOwner of Foo =&gt; results in Node3 Node2 sends chunk for key=Foo to Node3  Node3 receives chunk for key=Foo and looks if there is already a Reducer and uses       the previous one Node3 processes chunk for key=Foo  Node2 send LastChunk information to Node3 because processing local values finished  Node3 finishes reducing for key=Foo  Node1 registers its local partitions are processed Node2 registers its local partitions are processed  Node1 sees all partitions processed and requests reducing from all nodes  Node1 merges all reduced results together in a final structure and returns it ```  The flow is quite complex but extremely powerful since everything is executed in parallel. Reducers do not wait until all values are emitted, but they immediately begin to reduce (when first chunk for an emitted key arrives).  "
});

documentTitles["mr-architecture.html#internal-architecture"] = "Internal Architecture";
index.add({
    url: "mr-architecture.html#internal-architecture",
    title: "Internal Architecture",
    body: "#### Internal Architecture  Beginning with the package level, there is one basic package: `com.hazelcast.mapreduce`. This includes the external API and the **impl** package which itself contains the internal implementation.   - The **impl** package contains all the default `KeyValueSource` implementations and abstract base and support classes for the exposed API.  - The **client** package contains all classes that are needed on client and server (node) side when a client offers a MapReduce job.  - The **notification** package contains all \&quot;notification\&quot; or event classes that notify other members about progress on operations.  - The **operation** package contains all operations that are used by the workers or job owner to coordinate work and sync partition or reducer processing.  - The **task** package contains all classes that execute the actual MapReduce operation. It features the supervisor, mapping phase implementation and mapping and reducing tasks.  "
});

documentTitles["mr-architecture.html#mapreduce-job-walk-through"] = "MapReduce Job Walk-Through";
index.add({
    url: "mr-architecture.html#mapreduce-job-walk-through",
    title: "MapReduce Job Walk-Through",
    body: "#### MapReduce Job Walk-Through  And now to the technical walk-through: a MapReduce Job is always retrieved from a named `JobTracker`, which is implemented in `NodeJobTracker` (extends `AbstractJobTracker`) and is configured using the configuration DSL. All of the internal implementation is completely ICompletableFuture-driven and mostly non-blocking in design.  On submit, the Job creates a unique UUID which afterwards acts as a jobId and is combined with the JobTracker's name to be uniquely identifiable inside the cluster. Then, the preparation is sent around the cluster and every member prepares its execution by creating a JobSupervisor, MapCombineTask, and ReducerTask. The job-emitting JobSupervisor gains special capabilities to synchronize and control JobSupervisors on other nodes for the same job.  If preparation is finished on all nodes, the job itself is started by executing a StartProcessingJobOperation on every node. This initiates a MappingPhase implementation (defaults to KeyValueSourceMappingPhase) and starts the actual mapping on the nodes.  The mapping process is currently a single threaded operation per node, but will be extended to run in parallel on multiple partitions (configurable per Job) in future versions. The Mapper is now called on every available value on the partition and eventually emits values. For every emitted value, either a configured CombinerFactory is called to create a Combiner or a cached one is used (or the default CollectingCombinerFactory is used to create Combiners). When the chunk limit is reached on a node, a IntermediateChunkNotification is prepared by collecting emitted keys to their corresponding nodes. This is either done by asking the job owner to assign members or by an already cached assignment. In later versions, a PartitionStrategy might also be configurable.  The IntermediateChunkNotification is then sent to the reducers (containing only values for this node) and is offered to the ReducerTask. On every offer, the ReducerTask checks if it is already running and if not, it submits itself to the configured ExecutorService (from the JobTracker configuration).  If reducer queue runs out of work, the ReducerTask is removed from the ExecutorService to not block threads but eventually will be resubmitted on next chunk of work.  On every phase, the partition state is changed to keep track of the currently running operations. A JobPartitionState can be in one of the following states with self-explanatory titles: `[WAITING, MAPPING, REDUCING, PROCESSED, CANCELLED]`. If you have a deeper interest of these states, look at the Javadoc.  - Node asks for new partition to process: WAITING =&gt; MAPPING - Node emits first chunk to a reducer: MAPPING =&gt; REDUCING - All nodes signal that they finished mapping phase and reducing is finished, too: REDUCING =&gt; PROCESSED  Eventually (or hopefully), all JobPartitionStates reach the state of PROCESSED. Then, the job emitter's JobSupervisor asks all nodes for their reduced results and executes a potentially offered Collator. With this Collator, the overall result is calculated before it removes itself from the JobTracker, doing some final cleanup and returning the result to the requester (using the internal TrackableJobFuture).  If a job is cancelled while execution, all partitions are immediately set to the CANCELLED state and a CancelJobSupervisorOperation is executed on all nodes to kill the running processes.  While the operation is running in addition to the default operations, some more operations like ProcessStatsUpdateOperation (updates processed records statistics) or NotifyRemoteExceptionOperation (notifies the nodes that the sending node encountered an unrecoverable situation and the Job needs to be cancelled - e.g. NullPointerException inside of a Mapper) are executed against the job owner to keep track of the process.    "
});



documentTitles["aggregators.html#aggregators"] = "Aggregators";
index.add({
    url: "aggregators.html#aggregators",
    title: "Aggregators",
    body: "## Aggregators  Based on the Hazelcast MapReduce framework, Aggregators are ready-to-use data aggregations. These are typical operations like sum up values, finding minimum or maximum values, calculating averages, and other operations that you would expect  in the relational database world.    Aggregation operations are implemented, as mentioned above, on top of the MapReduce framework and all operations can be achieved using pure MapReduce calls. However, using the Aggregation feature is more convenient for a big set of standard operations.  "
});

documentTitles["aggregators.html#aggregations-basics"] = "Aggregations Basics";
index.add({
    url: "aggregators.html#aggregations-basics",
    title: "Aggregations Basics",
    body: "### Aggregations Basics  This section will quickly guide you through the basics of the Aggregations framework and some of its available classes. We also will implement a first base example.  Aggregations are available on both types of map interfaces, `com.hazelcast.core.IMap` and `com.hazelcast .core.MultiMap`, using the `aggregate` methods. Two overloaded methods are available that customize resource management of the underlying MapReduce framework by supplying a custom configured `com.hazelcast.mapreduce.JobTracker` instance. To find out how to configure the MapReduce framework, please see the [JobTracker Configuration section](#jobtracker-configuration). We will later see another way to configure the automatically used MapReduce framework if no special `JobTracker` is supplied.  To make Aggregations more convenient to use and future proof, the API is heavily optimized for Java 8 and future versions. The API is still fully compatible with any Java version Hazelcast supports (Java 6 and Java 7). The biggest difference is how you work with the Java generics: on Java 6 and 7, the process to resolve generics is not as strong as on Java 8 and upcoming Java versions. In addition, the whole Aggregations API has full Java 8 Project Lambda (or Closure,  [JSR 335](https://jcp.org/en/jsr/detail?id=335)) support.  For illustration of the differences in Java 6 and 7 in comparison to Java 8, we will have a quick look at code examples for both. After that, we will focus on using Java 8 syntax to keep examples short and easy to understand, and we will see some hints as to what the code looks like in Java 6 or 7.  The first example will produce the sum of some `int` values stored in a Hazelcast IMap. This example does not use much of the functionality of the Aggregations framework, but it will show the main difference.  ```java IMap&lt;String, Integer&gt; personAgeMapping = hazelcastInstance.getMap( \&quot;person-age\&quot; ); for ( int i = 0; i &lt; 1000; i++ ) {   String lastName = RandomUtil.randomLastName();   int age = RandomUtil.randomAgeBetween( 20, 80 );   personAgeMapping.put( lastName, Integer.valueOf( age ) ); } ```  With our demo data prepared, we can see how to produce the sums in different Java versions.  "
});

documentTitles["aggregators.html#aggregations-and-java-6-or-java-7"] = "Aggregations and Java 6 or Java 7";
index.add({
    url: "aggregators.html#aggregations-and-java-6-or-java-7",
    title: "Aggregations and Java 6 or Java 7",
    body: "#### Aggregations and Java 6 or Java 7  Since Java 6 and 7 are not as strong on resolving generics as Java 8, you need to be a bit more verbose with the code you write. You might also consider using raw types, but breaking the type safety to ease this process.  For a short introduction on what the following code example means, look at the source code comments. We will later dig deeper into the different options.   ```java // No filter applied, select all entries Supplier&lt;String, Integer, Integer&gt; supplier = Supplier.all(); // Choose the sum aggregation Aggregation&lt;String, Integer, Integer&gt; aggregation = Aggregations.integerSum(); // Execute the aggregation int sum = personAgeMapping.aggregate( supplier, aggregation ); ```  "
});

documentTitles["aggregators.html#aggregations-and-java-8"] = "Aggregations and Java 8";
index.add({
    url: "aggregators.html#aggregations-and-java-8",
    title: "Aggregations and Java 8",
    body: "#### Aggregations and Java 8  With Java 8, the Aggregations API looks simpler because Java 8 can resolve the generic parameters for us. That means the above lines of Java 6/7 example code will end up in just one easy line on Java 8.  ``` int sum = personAgeMapping.aggregate( Supplier.all(), Aggregations.integerSum() ); ```   "
});

documentTitles["aggregators.html#quick-look-at-the-mapreduce-framework"] = "Quick look at the MapReduce Framework";
index.add({
    url: "aggregators.html#quick-look-at-the-mapreduce-framework",
    title: "Quick look at the MapReduce Framework",
    body: "#### Quick look at the MapReduce Framework  As mentioned before, the Aggregations implementation is based on the Hazelcast MapReduce framework and therefore you might find overlaps in their APIs. One overload of the `aggregate` method can be supplied with a `JobTracker` which is part of the MapReduce framework.  If you implement your own aggregations, you will use a mixture of the Aggregations and the MapReduce API. If you will implement your own aggregation, e.g. to make the life of colleagues easier, please read the [Implementing Aggregations section](#implementing-aggregations).  For the full MapReduce documentation please see the [MapReduce section](#mapreduce).   "
});



documentTitles["aggregatorsintroduction.html#introduction-to-aggregations-api"] = "Introduction to Aggregations API";
index.add({
    url: "aggregatorsintroduction.html#introduction-to-aggregations-api",
    title: "Introduction to Aggregations API",
    body: "### Introduction to Aggregations API  We now look into the possible options of what can be achieved using the Aggregations API. To work on some deeper examples, let's quickly have a look at the available classes and interfaces and discuss their usage.  "
});

documentTitles["aggregatorsintroduction.html#supplier"] = "Supplier";
index.add({
    url: "aggregatorsintroduction.html#supplier",
    title: "Supplier",
    body: "#### Supplier  The `com.hazelcast.mapreduce.aggregation.Supplier` provides filtering and data extraction to the aggregation operation. This class already provides a few different static methods to achieve the most common cases. `Supplier.all()` accepts all incoming values and does not apply any data extraction or transformation upon them before supplying them to the aggregation function itself.  For filtering data sets, you have two different options by default. You can either supply a `com.hazelcast.query.Predicate` if you want to filter on values and / or keys, or you can supply a `com.hazelcast.mapreduce.KeyPredicate` if you can decide directly on the data key without the need to deserialize the value.  "
});

documentTitles["aggregatorsintroduction.html#basic-filtering"] = "Basic Filtering";
index.add({
    url: "aggregatorsintroduction.html#basic-filtering",
    title: "Basic Filtering",
    body: "##### Basic Filtering  As mentioned above, all APIs are fully Java 8 and Lambda compatible. Let's have a look on how we can do basic filtering using those two options.  First, we have a look at a `KeyPredicate` and only accept people whose last name is \&quot;Jones\&quot;.  ```java Supplier&lt;...&gt; supplier = Supplier.fromKeyPredicate(     lastName -&gt; \&quot;Jones\&quot;.equalsIgnoreCase( lastName ) ); ```  ```java class JonesKeyPredicate implements KeyPredicate&lt;String&gt; {   public boolean evaluate( String key ) {     return \&quot;Jones\&quot;.equalsIgnoreCase( key );   } } ```  Using the standard Hazelcast `Predicate` interface, you can also filter based on the value of a data entry. In the following example, you can only select values which are divisible by 4 without a remainder.   ```java Supplier&lt;...&gt; supplier = Supplier.fromPredicate(     entry -&gt; entry.getValue() % 4 == 0 ); ```  ```java class DivisiblePredicate implements Predicate&lt;String, Integer&gt; {   public boolean apply( Map.Entry&lt;String, Integer&gt; entry ) {     return entry.getValue() % 4 == 0;   } } ```  "
});

documentTitles["aggregatorsintroduction.html#extracting-and-transforming-data"] = "Extracting and Transforming Data";
index.add({
    url: "aggregatorsintroduction.html#extracting-and-transforming-data",
    title: "Extracting and Transforming Data",
    body: "##### Extracting and Transforming Data  As well as filtering, `Supplier` can also extract or transform data before providing it to the aggregation operation itself. The following example shows how to transform an input value to a string.   ```java Supplier&lt;String, Integer, String&gt; supplier = Supplier.all(     value -&gt; Integer.toString(value) ); ```  You can see a Java 6 / 7 example in the [Aggregations Examples section](#aggregation-examples).  Apart from the fact we transformed the input value of type `int` (or Integer) to a string, we can see that the generic information of the resulting `Supplier` has changed as well. This indicates that we now have an aggregation working on string values.  "
});

documentTitles["aggregatorsintroduction.html#chaining-multiple-filtering-rules"] = "Chaining Multiple Filtering Rules";
index.add({
    url: "aggregatorsintroduction.html#chaining-multiple-filtering-rules",
    title: "Chaining Multiple Filtering Rules",
    body: "##### Chaining Multiple Filtering Rules  Another feature of `Supplier` is its ability to chain multiple filtering rules. Let's combine all of the above examples into one rule set:  ```java Supplier&lt;String, Integer, String&gt; supplier =     Supplier.fromKeyPredicate(         lastName -&gt; \&quot;Jones\&quot;.equalsIgnoreCase( lastName ),         Supplier.fromPredicate(             entry -&gt; entry.getValue() % 4 == 0,               Supplier.all( value -&gt; Integer.toString(value) )         )     ); ```  "
});

documentTitles["aggregatorsintroduction.html#implementing-based-on-special-requirements"] = "Implementing Based on Special Requirements";
index.add({
    url: "aggregatorsintroduction.html#implementing-based-on-special-requirements",
    title: "Implementing Based on Special Requirements",
    body: "##### Implementing Based on Special Requirements  Last but not least, you might prefer to (or need to) implement your `Supplier` based on special requirements. This is a very basic task. The `Supplier` abstract class has just one method. &lt;br&gt;&lt;/br&gt;  ![image](images/NoteSmall.jpg) ***NOTE:*** *Due to a limitation of the Java Lambda API, you cannot implement abstract classes using Lambdas. Instead it is recommended that you create a standard named class.*   ```java class MyCustomSupplier extends Supplier&lt;String, Integer, String&gt; {   public String apply( Map.Entry&lt;String, Integer&gt; entry ) {     Integer value = entry.getValue();     if (value == null) {       return null;     }     return value % 4 == 0 ? String.valueOf( value ) : null;   } } ```  `Supplier`s are expected to return null from the `apply` method whenever the input value should not be mapped to the aggregation process. This can be used, as in the example above, to implement filter rules directly. Implementing filters using the `KeyPredicate` and `Predicate` interfaces might be more convenient.  To use your own `Supplier`, just pass it to the aggregate method or use it in combination with other `Supplier`s.  ```java int sum = personAgeMapping.aggregate( new MyCustomSupplier(), Aggregations.count() ); ```  ```java Supplier&lt;String, Integer, String&gt; supplier =     Supplier.fromKeyPredicate(         lastName -&gt; \&quot;Jones\&quot;.equalsIgnoreCase( lastName ),         new MyCustomSupplier()      ); int sum = personAgeMapping.aggregate( supplier, Aggregations.count() ); ```  "
});

documentTitles["aggregatorsintroduction.html#aggregation-and-aggregations"] = "Aggregation and Aggregations";
index.add({
    url: "aggregatorsintroduction.html#aggregation-and-aggregations",
    title: "Aggregation and Aggregations",
    body: "#### Aggregation and Aggregations  The `com.hazelcast.mapreduce.aggregation.Aggregation` interface defines the aggregation operation itself. It contains a set of MapReduce API implementations like `Mapper`, `Combiner`, `Reducer`, and `Collator`. These implementations are normally unique to the chosen `Aggregation`. This interface can also be implemented with your aggregation operations based on MapReduce calls. For more information, refer to [Implementing Aggregations section](#implementing-aggregations).  The `com.hazelcast.mapreduce.aggregation.Aggregations` class provides a common predefined set of aggregations. This class contains type safe aggregations of the following types:   - Average (Integer, Long, Double, BigInteger, BigDecimal)  - Sum (Integer, Long, Double, BigInteger, BigDecimal)  - Min (Integer, Long, Double, BigInteger, BigDecimal, Comparable)  - Max (Integer, Long, Double, BigInteger, BigDecimal, Comparable)  - DistinctValues  - Count  Those aggregations are similar to their counterparts on relational databases and can be equated to SQL statements as set out below.   "
});

documentTitles["aggregatorsintroduction.html#average"] = "Average";
index.add({
    url: "aggregatorsintroduction.html#average",
    title: "Average",
    body: "##### Average #####  Calculates an average value based on all selected values.  ```java map.aggregate( Supplier.all( person -&gt; person.getAge() ),                Aggregations.integerAvg() ); ```  ```sql SELECT AVG(person.age) FROM person; ```  "
});

documentTitles["aggregatorsintroduction.html#sum"] = "Sum";
index.add({
    url: "aggregatorsintroduction.html#sum",
    title: "Sum",
    body: "##### Sum #####  Calculates a sum based on all selected values.  ```java map.aggregate( Supplier.all( person -&gt; person.getAge() ),                Aggregations.integerSum() ); ```  ```sql SELECT SUM(person.age) FROM person; ```  "
});

documentTitles["aggregatorsintroduction.html#minimum-min"] = "Minimum (Min)";
index.add({
    url: "aggregatorsintroduction.html#minimum-min",
    title: "Minimum (Min)",
    body: "##### Minimum (Min) #####  Finds the minimal value over all selected values.  ```java map.aggregate( Supplier.all( person -&gt; person.getAge() ),                Aggregations.integerMin() ); ```  ```sql SELECT MIN(person.age) FROM person; ```  "
});

documentTitles["aggregatorsintroduction.html#maximum-max"] = "Maximum (Max)";
index.add({
    url: "aggregatorsintroduction.html#maximum-max",
    title: "Maximum (Max)",
    body: "##### Maximum (Max) #####  Finds the maximal value over all selected values.  ```java map.aggregate( Supplier.all( person -&gt; person.getAge() ),                Aggregations.integerMax() ); ```  ```sql SELECT MAX(person.age) FROM person; ```  "
});

documentTitles["aggregatorsintroduction.html#distinct-values"] = "Distinct Values";
index.add({
    url: "aggregatorsintroduction.html#distinct-values",
    title: "Distinct Values",
    body: "##### Distinct Values #####     Returns a collection of distinct values over the selected values  ```java map.aggregate( Supplier.all( person -&gt; person.getAge() ),                Aggregations.distinctValues() ); ```  ```sql SELECT DISTINCT person.age FROM person; ```  "
});

documentTitles["aggregatorsintroduction.html#count"] = "Count";
index.add({
    url: "aggregatorsintroduction.html#count",
    title: "Count",
    body: "##### Count #####      Returns the element count over all selected values   ```java map.aggregate( Supplier.all(), Aggregations.count() ); ```  ```sql SELECT COUNT(*) FROM person; ```   "
});

documentTitles["aggregatorsintroduction.html#propertyextractor"] = "PropertyExtractor";
index.add({
    url: "aggregatorsintroduction.html#propertyextractor",
    title: "PropertyExtractor",
    body: "#### PropertyExtractor  We used the `com.hazelcast.mapreduce.aggregation.PropertyExtractor` interface before when we had a look at the example on how to use a `Supplier` to [transform a value to another type](#extracting-and-transforming-data). It can also be used to extract attributes from values.  ```java class Person {   private String firstName;   private String lastName;   private int age;      // getters and setters }  PropertyExtractor&lt;Person, Integer&gt; propertyExtractor = (person) -&gt; person.getAge(); ```  ```java class AgeExtractor implements PropertyExtractor&lt;Person, Integer&gt; {   public Integer extract( Person value ) {     return value.getAge();   } } ```  In this example, we extract the value from the person's age attribute. The value type changes from Person to `Integer` which is reflected in the generics information to stay type safe.  `PropertyExtractor`s are meant to be used for any kind of transformation of data. You might even want to have multiple transformation steps chained one after another.  "
});

documentTitles["aggregatorsintroduction.html#aggregation-configuration"] = "Aggregation Configuration";
index.add({
    url: "aggregatorsintroduction.html#aggregation-configuration",
    title: "Aggregation Configuration",
    body: "#### Aggregation Configuration  As stated before, the easiest way to configure the resources used by the underlying MapReduce framework is to supply a `JobTracker` to the aggregation call itself by passing it to either `IMap::aggregate` or `MultiMap::aggregate`.  There is another way to implicitly configure the underlying used `JobTracker`. If no specific `JobTracker` was passed for the aggregation call, internally one will be created using the following naming specifications:  For `IMap` aggregation calls the naming specification is created as:  - `hz::aggregation-map-` and the concatenated name of the map.  For `MultiMap` it is very similar:  - `hz::aggregation-multimap-` and the concatenated name of the MultiMap.  Knowing that (the specification of the name), we can configure the `JobTracker` as expected  (as described in the [Jobtracker section](#jobtracker)) using the naming spec we just learned. For more information on configuration of the  `JobTracker`, please see the [JobTracker Configuration section](#jobtracker-configuration).   To finish this section, let's have a quick example for the above naming specs:  ```java IMap&lt;String, Integer&gt; map = hazelcastInstance.getMap( \&quot;mymap\&quot; );  // The internal JobTracker name resolves to 'hz::aggregation-map-mymap'  map.aggregate( ... ); ```  ```java MultiMap&lt;String, Integer&gt; multimap = hazelcastInstance.getMultiMap( \&quot;mymultimap\&quot; );  // The internal JobTracker name resolves to 'hz::aggregation-multimap-mymultimap'  multimap.aggregate( ... ); ```  "
});



documentTitles["aggregatorsexample.html#aggregations-examples"] = "Aggregations Examples";
index.add({
    url: "aggregatorsexample.html#aggregations-examples",
    title: "Aggregations Examples",
    body: "### Aggregations Examples  For the final example, imagine you are working for an international company and you have an employee database stored in Hazelcast `IMap` with all employees worldwide and a `MultiMap` for assigning employees to their certain locations or offices. In addition, there is another `IMap` which holds the salary per employee.  Let's have a look at our data model:  ```java class Employee implements Serializable {   private String firstName;   private String lastName;   private String companyName;   private String address;   private String city;   private String county;   private String state;   private int zip;   private String phone1;   private String phone2;   private String email;   private String web;    // getters and setters }  class SalaryMonth implements Serializable {   private Month month;   private int salary;      // getters and setters }  class SalaryYear implements Serializable {   private String email;   private int year;   private List&lt;SalaryMonth&gt; months;      // getters and setters      public int getAnnualSalary() {     int sum = 0;     for ( SalaryMonth salaryMonth : getMonths() ) {       sum += salaryMonth.getSalary();     }     return sum;   } } ```  The two `IMap`s and the `MultiMap` are keyed by the string of email. They are defined as follows:  ```java IMap&lt;String, Employee&gt; employees = hz.getMap( \&quot;employees\&quot; ); IMap&lt;String, SalaryYear&gt; salaries = hz.getMap( \&quot;salaries\&quot; ); MultiMap&lt;String, String&gt; officeAssignment = hz.getMultiMap( \&quot;office-employee\&quot; ); ```  So far, we know all the important information to work out some example aggregations. We will look into some deeper implementation details and how we can work around some current limitations that will be eliminated in future versions of the API.  Let's start with a very basic example. We want to know the average salary of all of our employees. To do this, we need a `PropertyExtractor` and the average aggregation for type `Integer`.  ```java IMap&lt;String, SalaryYear&gt; salaries = hazelcastInstance.getMap( \&quot;salaries\&quot; ); PropertyExtractor&lt;SalaryYear, Integer&gt; extractor =     (salaryYear) -&gt; salaryYear.getAnnualSalary(); int avgSalary = salaries.aggregate( Supplier.all( extractor ),                                     Aggregations.integerAvg() ); ```  That's it. Internally, we created a MapReduce task based on the predefined aggregation and fired it up immediately. Currently, all aggregation calls are blocking operations, so it is not yet possible to execute the aggregation in a reactive way (using `com.hazelcast.core.ICompletableFuture`) but this will be part of an upcoming version.  "
});

documentTitles["aggregatorsexample.html#map-join-example"] = "Map Join Example";
index.add({
    url: "aggregatorsexample.html#map-join-example",
    title: "Map Join Example",
    body: "#### Map Join Example  The following example is a little more complex. We only want to have our US based employees selected into the average salary calculation, so we need to execute some kind of a join operation between the employees and salaries maps.  ```java class USEmployeeFilter implements KeyPredicate&lt;String&gt;, HazelcastInstanceAware {   private transient HazelcastInstance hazelcastInstance;      public void setHazelcastInstance( HazelcastInstance hazelcastInstance ) {     this.hazelcastInstance = hazelcastInstance;   }      public boolean evaluate( String email ) {     IMap&lt;String, Employee&gt; employees = hazelcastInstance.getMap( \&quot;employees\&quot; );     Employee employee = employees.get( email );     return \&quot;US\&quot;.equals( employee.getCountry() );   } } ```  Using the `HazelcastInstanceAware` interface, we get the current instance of Hazelcast injected into our filter and we can perform data joins on other data structures of the cluster. We now only select employees that work as part of our US offices into the aggregation.  ```java IMap&lt;String, SalaryYear&gt; salaries = hazelcastInstance.getMap( \&quot;salaries\&quot; ); PropertyExtractor&lt;SalaryYear, Integer&gt; extractor =     (salaryYear) -&gt; salaryYear.getAnnualSalary(); int avgSalary = salaries.aggregate( Supplier.fromKeyPredicate(                                         new USEmployeeFilter(), extractor                                     ), Aggregations.integerAvg() ); ```  "
});

documentTitles["aggregatorsexample.html#grouping-example"] = "Grouping Example";
index.add({
    url: "aggregatorsexample.html#grouping-example",
    title: "Grouping Example",
    body: "#### Grouping Example  For our next example, we will do some grouping based on the different worldwide offices. Currently, a group aggregator is not yet  available, so we need a small workaround to achieve this goal. (In later versions of the Aggregations API this will not be  required because it will be available out of the box in a much more convenient way.)  Again, let's start with our filter. This time, we want to filter based on an office name and we need to do some data joins to achieve this kind of filtering.   **A short tip:** to minimize the data transmission on the aggregation we can use [Data Affinity](#data-affinity) rules to influence the partitioning of data. Be aware that this is an expert feature of Hazelcast.  ```java class OfficeEmployeeFilter implements KeyPredicate&lt;String&gt;, HazelcastInstanceAware {   private transient HazelcastInstance hazelcastInstance;   private String office;      // Deserialization Constructor   public OfficeEmployeeFilter() {   }       public OfficeEmployeeFilter( String office ) {     this.office = office;   }      public void setHazelcastInstance( HazelcastInstance hazelcastInstance ) {     this.hazelcastInstance = hazelcastInstance;   }      public boolean evaluate( String email ) {     MultiMap&lt;String, String&gt; officeAssignment = hazelcastInstance         .getMultiMap( \&quot;office-employee\&quot; );      return officeAssignment.containsEntry( office, email );       } } ```  Now we can execute our aggregations. As mentioned before, we currently need to do the grouping on our own by executing multiple aggregations in a row.  ```java Map&lt;String, Integer&gt; avgSalariesPerOffice = new HashMap&lt;String, Integer&gt;();  IMap&lt;String, SalaryYear&gt; salaries = hazelcastInstance.getMap( \&quot;salaries\&quot; ); MultiMap&lt;String, String&gt; officeAssignment =     hazelcastInstance.getMultiMap( \&quot;office-employee\&quot; );  PropertyExtractor&lt;SalaryYear, Integer&gt; extractor =     (salaryYear) -&gt; salaryYear.getAnnualSalary();  for ( String office : officeAssignment.keySet() ) {   OfficeEmployeeFilter filter = new OfficeEmployeeFilter( office );   int avgSalary = salaries.aggregate( Supplier.fromKeyPredicate( filter, extractor ),                                       Aggregations.integerAvg() );                                          avgSalariesPerOffice.put( office, avgSalary ); } ```  "
});

documentTitles["aggregatorsexample.html#simple-count-example"] = "Simple Count Example";
index.add({
    url: "aggregatorsexample.html#simple-count-example",
    title: "Simple Count Example",
    body: "#### Simple Count Example  After the previous example, we want to end this section by executing one final and easy aggregation. We want to know how many employees we currently have on a worldwide basis. Before reading the next lines of example code, you can try to do it on your own to see if you understood how to execute aggregations.  ```java IMap&lt;String, Employee&gt; employees = hazelcastInstance.getMap( \&quot;employees\&quot; ); int count = employees.size(); ```  Ok, after that quick joke, we look at the real two code lines:  ```java IMap&lt;String, Employee&gt; employees = hazelcastInstance.getMap( \&quot;employees\&quot; ); int count = employees.aggregate( Supplier.all(), Aggregations.count() ); ```  We now have an overview of how to use aggregations in real life situations. If you want to do your colleagues a favor, you might want to write your own additional set of aggregations. If so, then read the next section, [Implementing Aggregations](#implementing-aggregations).  "
});



documentTitles["aggregatorsimplementation.html#implementing-aggregations"] = "Implementing Aggregations";
index.add({
    url: "aggregatorsimplementation.html#implementing-aggregations",
    title: "Implementing Aggregations",
    body: "### Implementing Aggregations  This section explains how to implement your own aggregations in your own application. It is meant to be an advanced section, so if you do not intend to implement your own aggregation, you might want to stop reading here and come back later when you need to know how to implement your own aggregation.  The main interface for making your own aggregation is `com.hazelcast.mapreduce.aggregation.Aggregation`. It consists of four methods.   ```java interface Aggregation&lt;Key, Supplied, Result&gt; {   Mapper getMapper(Supplier&lt;Key, ?, Supplied&gt; supplier);   CombinerFactory getCombinerFactory();   ReducerFactory getReducerFactory();   Collator&lt;Map.Entry, Result&gt; getCollator(); } ```   An `Aggregation` implementation is just defining a MapReduce task with a small difference: the `Mapper` is always expected to work on a `Supplier` that filters and / or transforms the mapped input value to some output value.  `getMapper` and `getReducerFactory` are expected to return non-null values. `getCombinerFactory` and `getCollator` are optional operations and do not need to be implemented. If you can decide to implement them depending on the use case you want to achieve.  For more information on how you implement mappers, combiners, reducers, and collators, refer to the [MapReduce section](#mapreduce).  For best speed and traffic usage, as mentioned in the [MapReduce section](#mapreduce), you should add a `Combiner` to your aggregation whenever it is possible to do some kind of pre-reduction step.  Your implementation also should use `DataSerializable` or `IdentifiedDataSerializable` for best compatibility and speed / stream-size reasons.  &lt;br&gt;&lt;/br&gt;"
});



documentTitles["continuousquery.html#continuous-query"] = "Continuous Query";
index.add({
    url: "continuousquery.html#continuous-query",
    title: "Continuous Query",
    body: "## Continuous Query  Continuous query enables you to listen to the modifications performed on specific map entries. It is an entry listener with predicates. Please see the [Entry Listener section](#entry-listener) for information on how to add entry listeners to a map.  As an example, let's listen to the changes made on an employee with the surname \&quot;Smith\&quot;. First, let's create the `Employee` class.  ```java import java.io.Serializable;  public class Employee implements Serializable {      private final String surname;      public Employee(String surname) {         this.surname = surname;     }      @Override     public String toString() {         return \&quot;Employee{\&quot; +                 \&quot;surname='\&quot; + surname + '\'' +                 '}';     } } ```  Then, let's create the continuous query by adding the entry listener with the `surname` predicate.  ```java import com.hazelcast.core.*; import com.hazelcast.query.SqlPredicate;  public class ContinuousQuery {      public static void main(String[] args) {         HazelcastInstance hz = Hazelcast.newHazelcastInstance();         IMap&lt;String, String&gt; map = hz.getMap(\&quot;map\&quot;);         map.addEntryListener(new MyEntryListener(),                 new SqlPredicate(\&quot;surname=smith\&quot;), true);         System.out.println(\&quot;Entry Listener registered\&quot;);     }      static class MyEntryListener             implements EntryListener&lt;String, String&gt; {         @Override         public void entryAdded(EntryEvent&lt;String, String&gt; event) {             System.out.println(\&quot;Entry Added:\&quot; + event);         }          @Override         public void entryRemoved(EntryEvent&lt;String, String&gt; event) {             System.out.println(\&quot;Entry Removed:\&quot; + event);         }          @Override         public void entryUpdated(EntryEvent&lt;String, String&gt; event) {             System.out.println(\&quot;Entry Updated:\&quot; + event);         }          @Override         public void entryEvicted(EntryEvent&lt;String, String&gt; event) {             System.out.println(\&quot;Entry Evicted:\&quot; + event);         }          @Override         public void mapEvicted(MapEvent event) {             System.out.println(\&quot;Map Evicted:\&quot; + event);          }     } } ```  And now, let's play with the employee \&quot;smith\&quot; and see how that employee will be listened to.  ```java import com.hazelcast.core.Hazelcast; import com.hazelcast.core.HazelcastInstance; import com.hazelcast.core.IMap;  public class Modify {      public static void main(String[] args) {         HazelcastInstance hz = Hazelcast.newHazelcastInstance();         IMap&lt;String, Employee&gt; map = hz.getMap(\&quot;map\&quot;);          map.put(\&quot;1\&quot;, new Employee(\&quot;smith\&quot;));         map.put(\&quot;2\&quot;, new Employee(\&quot;jordan\&quot;));         System.out.println(\&quot;done\&quot;);         System.exit(0);     } } ```  When you first run the class `ContinuousQuery` and then run `Modify`, you will see output similar to the listing below.  ``` entryAdded:EntryEvent {Address[192.168.178.10]:5702} key=1,oldValue=null, value=Person{name= smith }, event=ADDED, by Member [192.168.178.10]:5702 ```  &lt;br&gt; &lt;/br&gt;     "
});



documentTitles["userdefinedservices.html#user-defined-services"] = "User Defined Services";
index.add({
    url: "userdefinedservices.html#user-defined-services",
    title: "User Defined Services",
    body: "# User Defined Services  In the case of special/custom needs, Hazelcast's SPI (Service Provider Interface) module allows users to develop their own distributed data structures and services.   "
});

documentTitles["userdefinedservices.html#sample-case"] = "Sample Case";
index.add({
    url: "userdefinedservices.html#sample-case",
    title: "Sample Case",
    body: "## Sample Case  Throughout this section, we create a distributed counter that will be the guide to reveal the Hazelcast SPI usage.  Here is our counter.  ```java public interface Counter{    int inc(int amount); } ```  This counter will have the following features: - It will be stored in Hazelcast.  - Different cluster members can call it.  - It will be scalable, meaning that the capacity for the number of counters scales with the number of cluster members. - It will be highly available, meaning that if a member hosting this counter goes down, a backup will be available on a different member.  All these features will be realized with the steps below. In each step, a new functionality to this counter will be added.  1. Create the class. 2. Enable the class. 3. Add properties. 5. Place a remote call. 5. Create the containers. 6. Enable partition migration. 6. Create the backups.    "
});



documentTitles["spicreateclass.html#create-the-class"] = "Create the Class";
index.add({
    url: "spicreateclass.html#create-the-class",
    title: "Create the Class",
    body: "### Create the Class  To have the counter as a functioning distributed object, we need a class. This class (named CounterService in the following sample) will be the gateway between Hazelcast internals and the counter, allowing us to add features to the counter. In the following sample, the class `CounterService` is created. Its lifecycle will be managed by Hazelcast.   `CounterService` should implement the interface `com.hazelcast.spi.ManagedService` as shown below.  ```java import com.hazelcast.spi.ManagedService; import com.hazelcast.spi.NodeEngine;  import java.util.Properties; import java.util.concurrent.ConcurrentHashMap; import java.util.concurrent.ConcurrentMap;  public class CounterService implements ManagedService {     private NodeEngine nodeEngine;      @Override     public void init( NodeEngine nodeEngine, Properties properties ) {         System.out.println( \&quot;CounterService.init\&quot; );         this.nodeEngine = nodeEngine;     }      @Override     public void shutdown( boolean terminate ) {         System.out.println( \&quot;CounterService.shutdown\&quot; );     }      @Override     public void reset() {     }  } ```  As can be seen from the code, `CounterService` implements the following methods.   - `init`: This is called when `CounterService` is initialized. `NodeEngine` enables access to Hazelcast internals such as `HazelcastInstance` and `PartitionService`. Also, the object `Properties` will provide us with the ability to create our own properties. - `shutdown`: This is called when `CounterService` is shutdown. It cleans up the resources. - `reset`: This is called when cluster members are faced with the Split-Brain issue. This occurs when disconnected members that have created their own cluster are merged back into the main cluster. Services can also implement the `SplitBrainHandleService` to indicate that they can take part in the merge process. For `CounterService` we are going to implement as a no-op.  "
});



documentTitles["spienableclass.html#enable-the-class"] = "Enable the Class";
index.add({
    url: "spienableclass.html#enable-the-class",
    title: "Enable the Class",
    body: "### Enable the Class  Now, we need to enable the class `CounterService`. The declarative way of doing this is shown below.  ```xml &lt;network&gt;    &lt;join&gt;&lt;multicast enabled=\&quot;true\&quot;/&gt; &lt;/join&gt; &lt;/network&gt; &lt;services&gt;    &lt;service enabled=\&quot;true\&quot;&gt;       &lt;name&gt;CounterService&lt;/name&gt;       &lt;class-name&gt;CounterService&lt;/class-name&gt;    &lt;/service&gt; &lt;/services&gt; ```  `CounterService` is declared within the `services` configuration element.   - Setting the `enabled` attribute as `true` enables the service. - The `name` attribute defines the name of the service. It should be a unique name (`CounterService` in our case) since it will be looked up when a remote call is made. Note that the value of this attribute will be sent at each request, and that a longer `name` value means more data (de)serialization. A good practice is to give an understandable name with the shortest possible length. - `class-name` is the class name of the service (`CounterService` in our case). The class should have a *no-arg* constructor. Otherwise, the object cannot be initialized.  Note that multicast is enabled as the join mechanism. In the later sections for the `CounterService` example, we will see why.   &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [Services Configuration section](#services-configuration) for a full description of Hazelcast SPI configuration.*   "
});



documentTitles["spiaddproperties.html#add-properties"] = "Add Properties";
index.add({
    url: "spiaddproperties.html#add-properties",
    title: "Add Properties",
    body: "### Add Properties  The `init` method for `CounterService` takes the `Properties` object as an argument. This means we can add properties to the service that are passed to the method `init`. You can add properties declaratively as shown below.  ```xml &lt;service enabled=\&quot;true\&quot;&gt;    &lt;name&gt;CounterService&lt;/name&gt;    &lt;class-name&gt;CounterService&lt;/class-name&gt;    &lt;properties&gt;        &lt;someproperty&gt;10&lt;/someproperty&gt;    &lt;/properties&gt; &lt;/service&gt; ```  If you want to parse a more complex XML, you can use the interface `com.hazelcast.spi.ServiceConfigurationParser`. It gives you access to the XML DOM tree.  "
});



documentTitles["spistartservice.html#start-the-service"] = "Start the Service";
index.add({
    url: "spistartservice.html#start-the-service",
    title: "Start the Service",
    body: "### Start the Service  Now, let's start a `HazelcastInstance` as shown below, which will start the `CounterService`.   ```java import com.hazelcast.core.Hazelcast;  public class Member {     public static void main(String[] args) {         Hazelcast.newHazelcastInstance();     } } ```  Once it is started, the `CounterService#init` method prints the following output.  `CounterService.init`  Once the HazelcastInstance is shutdown (for example with Ctrl+C), the `CounterService#shutdown` method prints the following output.  `CounterService.shutdown`  "
});



documentTitles["spiproxy.html#place-a-remote-call-proxy"] = "Place a Remote Call - Proxy";
index.add({
    url: "spiproxy.html#place-a-remote-call-proxy",
    title: "Place a Remote Call - Proxy",
    body: "### Place a Remote Call - Proxy  In the previous sections for the `CounterService` example, we started `CounterService` as part of a HazelcastInstance startup.  Now, let's connect the `Counter` interface to `CounterService` and perform a remote call to the cluster member hosting the counter data. Then, we will return a dummy result.   Remote calls are performed via a proxy in Hazelcast. Proxies expose the methods at the client side. Once a method is called, proxy creates an operation object, sends this object to the cluster member responsible from executing that operation, and then sends the result.   "
});

documentTitles["spiproxy.html#making-counter-a-distributed-object"] = "Making Counter a Distributed Object";
index.add({
    url: "spiproxy.html#making-counter-a-distributed-object",
    title: "Making Counter a Distributed Object",
    body: "#### Making Counter a Distributed Object  First, we need to make the `Counter` interface a distributed object by extending the `DistributedObject` interface, as shown below.   ```java import com.hazelcast.core.DistributedObject;  public interface Counter extends DistributedObject {     int inc(int amount); } ```  "
});

documentTitles["spiproxy.html#making-the-counterservice-implement-managedservice-and-remoteservice"] = "Making the CounterService Implement ManagedService and RemoteService";
index.add({
    url: "spiproxy.html#making-the-counterservice-implement-managedservice-and-remoteservice",
    title: "Making the CounterService Implement ManagedService and RemoteService",
    body: "#### Making the CounterService Implement ManagedService and RemoteService  Now, we need to make the `CounterService` class implement not only the `ManagedService` interface, but also the interface `com.hazelcast.spi.RemoteService`. This way, a client will be able to get a handle of a counter proxy.   ```java import com.hazelcast.core.DistributedObject; import com.hazelcast.spi.ManagedService; import com.hazelcast.spi.NodeEngine; import com.hazelcast.spi.RemoteService;  import java.util.Properties;  public class CounterService implements ManagedService, RemoteService {     public static final String NAME = \&quot;CounterService\&quot;;      private NodeEngine nodeEngine;      @Override     public DistributedObject createDistributedObject(String objectName) {         return new CounterProxy(objectName, nodeEngine, this);     }      @Override     public void destroyDistributedObject(String objectName) {         // for the time being a no-op, but in the later examples this will be implemented     }      @Override     public void init(NodeEngine nodeEngine, Properties properties) {         this.nodeEngine = nodeEngine;     }      @Override     public void shutdown(boolean terminate) {     }      @Override     public void reset() {     } } ```  The `CounterProxy` returned by the method `createDistributedObject` is a local representation to (potentially) remote managed data and logic. &lt;br&gt;&lt;/br&gt;  ![image](images/NoteSmall.jpg) ***NOTE:*** *Note that caching and removing the proxy instance are done outside of this service.* &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["spiproxy.html#implementing-counterproxy"] = "Implementing CounterProxy";
index.add({
    url: "spiproxy.html#implementing-counterproxy",
    title: "Implementing CounterProxy",
    body: "#### Implementing CounterProxy  Now, it is time to implement the `CounterProxy` as shown below.  ```java import com.hazelcast.spi.AbstractDistributedObject; import com.hazelcast.spi.InvocationBuilder; import com.hazelcast.spi.NodeEngine; import com.hazelcast.util.ExceptionUtil;  import java.util.concurrent.Future;  public class CounterProxy extends AbstractDistributedObject&lt;CounterService&gt; implements Counter {     private final String name;      public CounterProxy(String name, NodeEngine nodeEngine, CounterService counterService) {         super(nodeEngine, counterService);         this.name = name;     }      @Override     public String getServiceName() {         return CounterService.NAME;     }      @Override     public String getName() {         return name;     }      @Override     public int inc(int amount) {         NodeEngine nodeEngine = getNodeEngine();         IncOperation operation = new IncOperation(name, amount);         int partitionId = nodeEngine.getPartitionService().getPartitionId(name);         InvocationBuilder builder = nodeEngine.getOperationService()                 .createInvocationBuilder(CounterService.NAME, operation, partitionId);         try {             final Future&lt;Integer&gt; future = builder.invoke();             return future.get();         } catch (Exception e) {             throw ExceptionUtil.rethrow(e);         }     } } ```   `CounterProxy` is a local representation of remote data/functionality. It does not include the counter state. Therefore, the method `inc` should be invoked on the cluster member hosting the real counter. You can invoke it using Hazelcast SPI; then it will send the operations to the correct member and return the results.  Let's dig deeper into the method `inc`.  - First, we create `IncOperation` with a given `name` and `amount`. - Then, we get the partition ID based on the `name`; by this way, all operations for a given name will result in the same partition ID. - Then, we create an `InvocationBuilder` where the connection between operation and partition is made. - Finally, we invoke the `InvocationBuilder` and wait for its result. This waiting is performed with a `future.get()`. In our case, timeout is not important. However, it is a good practice to use a timeout for a real system since operations should complete in a certain amount of time.   "
});

documentTitles["spiproxy.html#dealing-with-exceptions"] = "Dealing with Exceptions";
index.add({
    url: "spiproxy.html#dealing-with-exceptions",
    title: "Dealing with Exceptions",
    body: "#### Dealing with Exceptions  Hazelcast's `ExceptionUtil` is a good solution when it comes to dealing with execution exceptions. When the execution of the operation fails with an exception, an `ExecutionException` is thrown and handled with the method `ExceptionUtil.rethrow(Throwable)`.   If it is an `InterruptedException`, we have two options: Either propagating the exception or just using the `ExceptionUtil.rethrow` for all exceptions. Please see below sample.   ```java   try {      final Future&lt;Integer&gt; future = invocation.invoke();      return future.get();   } catch(InterruptedException e){      throw e;   } catch(Exception e){      throw ExceptionUtil.rethrow(e);   } ```  "
});

documentTitles["spiproxy.html#implementing-the-partitionawareoperation-interface"] = "Implementing the PartitionAwareOperation Interface";
index.add({
    url: "spiproxy.html#implementing-the-partitionawareoperation-interface",
    title: "Implementing the PartitionAwareOperation Interface",
    body: "#### Implementing the PartitionAwareOperation Interface  Now, let's write the `IncOperation`. It implements `PartitionAwareOperation` interface, meaning that it will be executed on the partition that hosts the counter.   ```java import com.hazelcast.nio.ObjectDataInput; import com.hazelcast.nio.ObjectDataOutput; import com.hazelcast.spi.AbstractOperation; import com.hazelcast.spi.PartitionAwareOperation;  import java.io.IOException;  class IncOperation extends AbstractOperation implements PartitionAwareOperation {     private String objectId;     private int amount, returnValue;      // Important to have a no-arg constructor for deserialization     public IncOperation() {     }      public IncOperation(String objectId, int amount) {         this.amount = amount;         this.objectId = objectId;     }      @Override     public void run() throws Exception {         System.out.println(\&quot;Executing \&quot; + objectId + \&quot;.inc() on: \&quot; + getNodeEngine().getThisAddress());         returnValue = 0;     }      @Override     public boolean returnsResponse() {         return true;     }      @Override     public Object getResponse() {         return returnValue;     }      @Override     protected void writeInternal(ObjectDataOutput out) throws IOException {         super.writeInternal(out);         out.writeUTF(objectId);         out.writeInt(amount);     }      @Override     protected void readInternal(ObjectDataInput in) throws IOException {         super.readInternal(in);         objectId = in.readUTF();         amount = in.readInt();     } } ```  The method `run` does the actual execution. Since `IncOperation` will return a response, the method `returnsResponse` returns `true`. If your method is asynchronous and does not need to return a response, it is better to return `false` since it will be faster. The actual response is stored in the field `returnValue`; you can retrieve it with the method `getResponse`.  There are two more methods in the above code: `writeInternal` and `readInternal`. Since `IncOperation` needs to be serialized, these two methods should be overwritten, and hence, `objectId` and `amount` will be serialized and available when those operations are executed.   For the deserialization, note that the operation must have a *no-arg* constructor.  "
});

documentTitles["spiproxy.html#running-the-code"] = "Running the Code";
index.add({
    url: "spiproxy.html#running-the-code",
    title: "Running the Code",
    body: "#### Running the Code  Now, let's run our code.  ```java import com.hazelcast.core.Hazelcast; import com.hazelcast.core.HazelcastInstance;  import java.util.UUID;  public class Member {     public static void main(String[] args) {         HazelcastInstance[] instances = new HazelcastInstance[2];         for (int k = 0; k &lt; instances.length; k++)             instances[k] = Hazelcast.newHazelcastInstance();          Counter[] counters = new Counter[4];         for (int k = 0; k &lt; counters.length; k++)             counters[k] = instances[0].getDistributedObject(CounterService.NAME, k+\&quot;counter\&quot;);          for (Counter counter : counters)             System.out.println(counter.inc(1));          System.out.println(\&quot;Finished\&quot;);         System.exit(0);     } } ```  Once run, you will see the output as below.  `Executing 0counter.inc() on: Address[192.168.1.103]:5702`  `0`  `Executing 1counter.inc() on: Address[192.168.1.103]:5702`  `0`  `Executing 2counter.inc() on: Address[192.168.1.103]:5701`  `0`  `Executing 3counter.inc() on: Address[192.168.1.103]:5701`  `0`  `Finished`  Note that counters are stored in different cluster members. Also note that increment is not active for now since the value remains as **0**.   Until now, we have performed the basics to get this up and running. In the next section, we will make a real counter, cache the proxy instances and deal with proxy instance destruction.   "
});



documentTitles["spicreatecontainer.html#create-the-containers"] = "Create the Containers";
index.add({
    url: "spicreatecontainer.html#create-the-containers",
    title: "Create the Containers",
    body: "### Create the Containers  Let's create a Container for every partition in the system. This container will contain all counters and proxies.   ```java import java.util.HashMap; import java.util.Map;  class Container {     private final Map&lt;String, Integer&gt; values = new HashMap();      int inc(String id, int amount) {         Integer counter = values.get(id);         if (counter == null) {             counter = 0;         }         counter += amount;         values.put(id, counter);         return counter;     }          public void init(String objectName) {         values.put(objectName,0);     }      public void destroy(String objectName) {         values.remove(objectName);     }          ... } ```  Hazelcast guarantees that a single thread will be active in a single partition. Therefore, when accessing a container, concurrency control will not be an issue.   The code in our example uses a `Container` instance per partition approach. With this approach, there will not be any mutable shared state between partitions. This approach also makes operations on partitions simpler since you do not need to filter out data that does not belong to a certain partition.  "
});

documentTitles["spicreatecontainer.html#integrating-the-container-in-the-counterservice"] = "Integrating the Container in the CounterService";
index.add({
    url: "spicreatecontainer.html#integrating-the-container-in-the-counterservice",
    title: "Integrating the Container in the CounterService",
    body: "#### Integrating the Container in the CounterService  Let's integrate the `Container` in the `CounterService`, as shown below.  ```java import com.hazelcast.spi.ManagedService; import com.hazelcast.spi.NodeEngine; import com.hazelcast.spi.RemoteService;  import java.util.HashMap; import java.util.Map; import java.util.Properties;  public class CounterService implements ManagedService, RemoteService {     public final static String NAME = \&quot;CounterService\&quot;;     Container[] containers;     private NodeEngine nodeEngine;      @Override     public void init(NodeEngine nodeEngine, Properties properties) {         this.nodeEngine = nodeEngine;         containers = new Container[nodeEngine.getPartitionService().getPartitionCount()];         for (int k = 0; k &lt; containers.length; k++)             containers[k] = new Container();     }      @Override     public void shutdown(boolean terminate) {     }      @Override     public CounterProxy createDistributedObject(String objectName) {         int partitionId = nodeEngine.getPartitionService().getPartitionId(objectName);         Container container = containers[partitionId];         container.init(objectName);         return new CounterProxy(objectName, nodeEngine, this);     }      @Override     public void destroyDistributedObject(String objectName) {         int partitionId = nodeEngine.getPartitionService().getPartitionId(objectName);         Container container = containers[partitionId];         container.destroy(objectName);     }      @Override     public void reset() {     }      public static class Container {         final Map&lt;String, Integer&gt; values = new HashMap&lt;String, Integer&gt;();          private void init(String objectName) {             values.put(objectName, 0);         }          private void destroy(String objectName){             values.remove(objectName);         }     } } ```       We create a container for every partition with the method `init`. Then we create the proxy with the method `createDistributedObject`. And finally, we need to remove the value of the object with the method `destroyDistributedObject`, otherwise we may get an OutOfMemory exception.  "
});

documentTitles["spicreatecontainer.html#connecting-the-incoperationrun-method-to-the-container"] = "Connecting the IncOperation.run Method to the Container";
index.add({
    url: "spicreatecontainer.html#connecting-the-incoperationrun-method-to-the-container",
    title: "Connecting the IncOperation.run Method to the Container",
    body: "#### Connecting the IncOperation.run Method to the Container  As the last step in creating a Container, we connect the method `IncOperation.run` to the Container, as shown below.  ```java import com.hazelcast.nio.ObjectDataInput; import com.hazelcast.nio.ObjectDataOutput; import com.hazelcast.spi.AbstractOperation; import com.hazelcast.spi.PartitionAwareOperation;  import java.io.IOException; import java.util.Map;  class IncOperation extends AbstractOperation implements PartitionAwareOperation {     private String objectId;     private int amount, returnValue;      public IncOperation() {     }      public IncOperation(String objectId, int amount) {         this.amount = amount;         this.objectId = objectId;     }      @Override     public void run() throws Exception {         System.out.println(\&quot;Executing \&quot; + objectId + \&quot;.inc() on: \&quot; + getNodeEngine().getThisAddress());         CounterService service = getService();         CounterService.Container container = service.containers[getPartitionId()];         Map&lt;String, Integer&gt; valuesMap = container.values;          Integer counter = valuesMap.get(objectId);         counter += amount;         valuesMap.put(objectId, counter);         returnValue = counter;     }      @Override     public boolean returnsResponse() {         return true;     }      @Override     public Object getResponse() {         return returnValue;     }      @Override     protected void writeInternal(ObjectDataOutput out) throws IOException {         super.writeInternal(out);         out.writeUTF(objectId);         out.writeInt(amount);     }      @Override     protected void readInternal(ObjectDataInput in) throws IOException {         super.readInternal(in);         objectId = in.readUTF();         amount = in.readInt();     } } ```  `partitionId` has a range between **0** and **partitionCount** and can be used as an index for the container array. Therefore, you can use `partitionId` to retrieve the container, and once the container has been retrieved, you can access the value.   "
});

documentTitles["spicreatecontainer.html#running-the-sample-code"] = "Running the Sample Code";
index.add({
    url: "spicreatecontainer.html#running-the-sample-code",
    title: "Running the Sample Code",
    body: "#### Running the Sample Code  Let's run the following sample code.  ```java import com.hazelcast.core.Hazelcast; import com.hazelcast.core.HazelcastInstance;  public class Member {     public static void main(String[] args) {         HazelcastInstance[] instances = new HazelcastInstance[2];         for (int k = 0; k &lt; instances.length; k++)             instances[k] = Hazelcast.newHazelcastInstance();          Counter[] counters = new Counter[4];         for (int k = 0; k &lt; counters.length; k++)             counters[k] = instances[0].getDistributedObject(CounterService.NAME, k+\&quot;counter\&quot;);          System.out.println(\&quot;Round 1\&quot;);         for (Counter counter: counters)             System.out.println(counter.inc(1));          System.out.println(\&quot;Round 2\&quot;);         for (Counter counter: counters)             System.out.println(counter.inc(1));          System.out.println(\&quot;Finished\&quot;);         System.exit(0);     } } ```  The output will be as follows. It indicates that we have now a basic distributed counter up and running.  ``` Round 1 Executing 0counter.inc() on: Address[192.168.1.103]:5702 1 Executing 1counter.inc() on: Address[192.168.1.103]:5702 1 Executing 2counter.inc() on: Address[192.168.1.103]:5701 1 Executing 3counter.inc() on: Address[192.168.1.103]:5701 1 Round 2 Executing 0counter.inc() on: Address[192.168.1.103]:5702 2 Executing 1counter.inc() on: Address[192.168.1.103]:5702 2 Executing 2counter.inc() on: Address[192.168.1.103]:5701 2 Executing 3counter.inc() on: Address[192.168.1.103]:5701 2 Finished ```   "
});



documentTitles["spipartitionmigration.html#partition-migration"] = "Partition Migration";
index.add({
    url: "spipartitionmigration.html#partition-migration",
    title: "Partition Migration",
    body: "### Partition Migration  In the previous section, we created a real distributed counter. Now, we need to make sure that the content of the partition containers is migrated to different cluster members when a member joins or leaves the cluster. To make this happen, first we need to add three new methods (`applyMigrationData`, `toMigrationData` and `clear`) to the `Container`, as shown below.    ```java import java.util.HashMap; import java.util.Map;  class Container {     private final Map&lt;String, Integer&gt; values = new HashMap();      int inc(String id, int amount) {         Integer counter = values.get(id);         if (counter == null) {             counter = 0;         }         counter += amount;         values.put(id, counter);         return counter;     }      void clear() {         values.clear();     }      void applyMigrationData(Map&lt;String, Integer&gt; migrationData) {         values.putAll(migrationData);     }      Map&lt;String, Integer&gt; toMigrationData() {         return new HashMap(values);     }      public void init(String objectName) {         values.put(objectName,0);     }      public void destroy(String objectName) {         values.remove(objectName);     } } ```  - `toMigrationData`: This method is called when Hazelcast wants to start the partition migration from the member owning the partition. The result of the `toMigrationData` method is the partition data in a form that can be serialized to another member. - `applyMigrationData`: This method is called when `migrationData` (created by the method `toMigrationData`) will be applied to the member that will be the new partition owner. - `clear`: This method is called when the partition migration is successfully completed and the old partition owner gets rid of all data in the partition. This method is also called when the partition migration operation fails and the to-be-the-new partition owner needs to roll back its changes.  "
});

documentTitles["spipartitionmigration.html#transferring-migrationdata"] = "Transferring migrationData";
index.add({
    url: "spipartitionmigration.html#transferring-migrationdata",
    title: "Transferring migrationData",
    body: "#### Transferring migrationData  After you add these three methods to the `Container`, you need to create a `CounterMigrationOperation` class that transfers `migrationData` from one member to another and calls the method `applyMigrationData` on the correct partition of the new partition owner. A sample is shown below.  ```java import com.hazelcast.nio.ObjectDataInput; import com.hazelcast.nio.ObjectDataOutput; import com.hazelcast.spi.AbstractOperation;  import java.io.IOException; import java.util.HashMap; import java.util.Map;  public class CounterMigrationOperation extends AbstractOperation {      Map&lt;String, Integer&gt; migrationData;      public CounterMigrationOperation() {     }      public CounterMigrationOperation(Map&lt;String, Integer&gt; migrationData) {         this.migrationData = migrationData;     }      @Override     public void run() throws Exception {         CounterService service = getService();         Container container = service.containers[getPartitionId()];         container.applyMigrationData(migrationData);     }      @Override     protected void writeInternal(ObjectDataOutput out) throws IOException {         out.writeInt(migrationData.size());         for (Map.Entry&lt;String, Integer&gt; entry : migrationData.entrySet()) {             out.writeUTF(entry.getKey());             out.writeInt(entry.getValue());         }     }      @Override     protected void readInternal(ObjectDataInput in) throws IOException {         int size = in.readInt();         migrationData = new HashMap&lt;String, Integer&gt;();         for (int i = 0; i &lt; size; i++)             migrationData.put(in.readUTF(), in.readInt());     } } ```   &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *During a partition migration, no other operations are executed on the related partition.* &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["spipartitionmigration.html#letting-hazelcast-know-counterservice-can-do-partition-migrations"] = "Letting Hazelcast Know CounterService Can Do Partition Migrations";
index.add({
    url: "spipartitionmigration.html#letting-hazelcast-know-counterservice-can-do-partition-migrations",
    title: "Letting Hazelcast Know CounterService Can Do Partition Migrations",
    body: "#### Letting Hazelcast Know CounterService Can Do Partition Migrations  We need to make our `CounterService` class implement the `MigrationAwareService` interface. This will let Hazelcast know that the `CounterService` can perform partition migration. See the below code.  ```java import com.hazelcast.core.DistributedObject; import com.hazelcast.partition.MigrationEndpoint; import com.hazelcast.spi.*;  import java.util.Map; import java.util.Properties;  public class CounterService implements ManagedService, RemoteService, MigrationAwareService {     public final static String NAME = \&quot;CounterService\&quot;;     Container[] containers;     private NodeEngine nodeEngine;      @Override     public void init(NodeEngine nodeEngine, Properties properties) {         this.nodeEngine = nodeEngine;         containers = new Container[nodeEngine.getPartitionService().getPartitionCount()];         for (int k = 0; k &lt; containers.length; k++)             containers[k] = new Container();     }      @Override     public void shutdown(boolean terminate) {     }      @Override     public DistributedObject createDistributedObject(String objectName) {         int partitionId = nodeEngine.getPartitionService().getPartitionId(objectName);         Container container = containers[partitionId];         container.init(objectName);         return new CounterProxy(objectName, nodeEngine,this);     }      @Override     public void destroyDistributedObject(String objectName) {         int partitionId = nodeEngine.getPartitionService().getPartitionId(objectName);         Container container = containers[partitionId];         container.destroy(objectName);     }      @Override     public void beforeMigration(PartitionMigrationEvent e) {         //no-op     }      @Override     public void clearPartitionReplica(int partitionId) {         Container container = containers[partitionId];         container.clear();     }      @Override     public Operation prepareReplicationOperation(PartitionReplicationEvent e) {         if (e.getReplicaIndex() &gt; 1) {             return null;         }         Container container = containers[e.getPartitionId()];         Map&lt;String, Integer&gt; data = container.toMigrationData();         return data.isEmpty() ? null : new CounterMigrationOperation(data);     }      @Override     public void commitMigration(PartitionMigrationEvent e) {         if (e.getMigrationEndpoint() == MigrationEndpoint.SOURCE) {             Container c = containers[e.getPartitionId()];             c.clear();         }          //todo     }      @Override     public void rollbackMigration(PartitionMigrationEvent e) {         if (e.getMigrationEndpoint() == MigrationEndpoint.DESTINATION) {             Container c = containers[e.getPartitionId()];             c.clear();         }     }      @Override     public void reset() {     } } ```  With the `MigrationAwareService` interface, some additional methods are exposed. For example, the method `prepareMigrationOperation` returns all the data of the partition that is going to be moved.  The method `commitMigration` commits the data, meaning in this case, it clears the partition container of the old owner.   "
});

documentTitles["spipartitionmigration.html#running-the-sample-code"] = "Running the Sample Code";
index.add({
    url: "spipartitionmigration.html#running-the-sample-code",
    title: "Running the Sample Code",
    body: "#### Running the Sample Code  We can run the following code.  ```java import com.hazelcast.core.Hazelcast; import com.hazelcast.core.HazelcastInstance;  public class Member {     public static void main(String[] args) throws Exception {         HazelcastInstance[] instances = new HazelcastInstance[3];         for (int k = 0; k &lt; instances.length; k++)             instances[k] = Hazelcast.newHazelcastInstance();          Counter[] counters = new Counter[4];         for (int k = 0; k &lt; counters.length; k++)             counters[k] = instances[0].getDistributedObject(CounterService.NAME, k + \&quot;counter\&quot;);          for (Counter counter : counters)             System.out.println(counter.inc(1));          Thread.sleep(10000);          System.out.println(\&quot;Creating new members\&quot;);          for (int k = 0; k &lt; 3; k++) {             Hazelcast.newHazelcastInstance();         }          Thread.sleep(10000);          for (Counter counter : counters)             System.out.println(counter.inc(1));          System.out.println(\&quot;Finished\&quot;);         System.exit(0);     } } ```  And we get the following output.  ``` Executing 0counter.inc() on: Address[192.168.1.103]:5702 Executing backup 0counter.inc() on: Address[192.168.1.103]:5703 1 Executing 1counter.inc() on: Address[192.168.1.103]:5703 Executing backup 1counter.inc() on: Address[192.168.1.103]:5701 1 Executing 2counter.inc() on: Address[192.168.1.103]:5701 Executing backup 2counter.inc() on: Address[192.168.1.103]:5703 1 Executing 3counter.inc() on: Address[192.168.1.103]:5701 Executing backup 3counter.inc() on: Address[192.168.1.103]:5703 1 Creating new members Executing 0counter.inc() on: Address[192.168.1.103]:5705 Executing backup 0counter.inc() on: Address[192.168.1.103]:5703 2 Executing 1counter.inc() on: Address[192.168.1.103]:5703 Executing backup 1counter.inc() on: Address[192.168.1.103]:5704 2 Executing 2counter.inc() on: Address[192.168.1.103]:5705 Executing backup 2counter.inc() on: Address[192.168.1.103]:5704 2 Executing 3counter.inc() on: Address[192.168.1.103]:5704 Executing backup 3counter.inc() on: Address[192.168.1.103]:5705 2 Finished ```  You can see that the counters have moved. `0counter` moved from *192.168.1.103:5702* to *192.168.1.103:5705* and it is incremented correctly. Our counters can now move around in the cluster. You will see the the counters will be redistributed once you add or remove a cluster member.  "
});



documentTitles["spicreatebackups.html#create-the-backups"] = "Create the Backups";
index.add({
    url: "spicreatebackups.html#create-the-backups",
    title: "Create the Backups",
    body: "### Create the Backups  Finally, we make sure that the data of counter is available on another node when a member goes down. We need to have the `IncOperation` class implement the `BackupAwareOperation` interface contained in the SPI package. See the following code.  ```java class IncOperation extends AbstractOperation  	implements PartitionAwareOperation, BackupAwareOperation {    ...           @Override    public int getAsyncBackupCount() {       return 0;    }     @Override    public int getSyncBackupCount() {       return 1;    }     @Override    public boolean shouldBackup() {       return true;    }     @Override    public Operation getBackupOperation() {       return new IncBackupOperation(objectId, amount);    } } ```  The methods `getAsyncBackupCount` and `getSyncBackupCount` specify the count for asynchronous and synchronous backups. Our sample has one synchronous backup and no asynchronous backups. In the above code, counts of the backups are hard-coded, but they can also be passed to `IncOperation` as parameters.   The method `shouldBackup` specifies whether our Operation needs a backup or not. For our sample, it returns `true`, meaning the Operation will always have a backup even if there are no changes. Of course, in real systems, we want to have backups if there is a change. For `IncOperation` for example, having a backup when `amount` is null would be a good practice.  The method `getBackupOperation` returns the operation (`IncBackupOperation`) that actually performs the backup creation; the backup itself is an operation and will run on the same infrastructure.   If a backup should be made and `getSyncBackupCount` returns **3**, then three `IncBackupOperation` instances are created and sent to the three machines containing the backup partition. If fewer machines are available, then backups need to be created. Hazelcast will just send a smaller number of operations.   "
});

documentTitles["spicreatebackups.html#performing-the-backup-with-incbackupoperation"] = "Performing the Backup with IncBackupOperation";
index.add({
    url: "spicreatebackups.html#performing-the-backup-with-incbackupoperation",
    title: "Performing the Backup with IncBackupOperation",
    body: "#### Performing the Backup with IncBackupOperation  Now, let's have a look at the `IncBackupOperation`.  ```java public class IncBackupOperation  	extends AbstractOperation implements BackupOperation {    private String objectId;    private int amount;     public IncBackupOperation() {    }     public IncBackupOperation(String objectId, int amount) {       this.amount = amount;       this.objectId = objectId;    }     @Override    protected void writeInternal(ObjectDataOutput out) throws IOException {       super.writeInternal(out);       out.writeUTF(objectId);       out.writeInt(amount);    }     @Override    protected void readInternal(ObjectDataInput in) throws IOException {       super.readInternal(in);       objectId = in.readUTF();       amount = in.readInt();    }     @Override    public void run() throws Exception {       CounterService service = getService();       System.out.println(\&quot;Executing backup \&quot; + objectId + \&quot;.inc() on: \&quot;          + getNodeEngine().getThisAddress());       Container c = service.containers[getPartitionId()];       c.inc(objectId, amount);    } } ``` &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *Hazelcast will also make sure that a new IncOperation for that particular key will not be executed before the (synchronous) backup operation has completed.* &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["spicreatebackups.html#running-the-sample-code"] = "Running the Sample Code";
index.add({
    url: "spicreatebackups.html#running-the-sample-code",
    title: "Running the Sample Code",
    body: "#### Running the Sample Code  Let's see the backup functionality in action with the following code.  ```java public class Member {    public static void main(String[] args) throws Exception {       HazelcastInstance[] instances = new HazelcastInstance[2];       for (int k = 0; k &lt; instances.length; k++)           instances[k] = Hazelcast.newHazelcastInstance();            Counter counter = instances[0].getDistributedObject(CounterService.NAME, \&quot;counter\&quot;);       counter.inc(1);       System.out.println(\&quot;Finished\&quot;);       System.exit(0);     } } ```  Once it is run, the following output will be seen.  ``` Executing counter0.inc() on: Address[192.168.1.103]:5702 Executing backup counter0.inc() on: Address[192.168.1.103]:5701 Finished ```  As it can be seen, both `IncOperation` and `IncBackupOperation` are executed. Notice that these operations have been executed on different cluster members to guarantee high availability.  "
});



documentTitles["spiwaitnotifyservice.html#waitnotifyservice"] = "WaitNotifyService";
index.add({
    url: "spiwaitnotifyservice.html#waitnotifyservice",
    title: "WaitNotifyService",
    body: "## WaitNotifyService  `WaitNotifyService` is an interface offered by SPI for the objects (e.g. Lock, Semaphore) to be used when a thread needs to wait for a lock to be released.  `WaitNotifyService` keeps a list of waiters. For each notify operation:  - it looks for a waiter, - it asks the waiter whether it wants to keep waiting, - if the waiter responds *no*, the service executes its registered operation (operation itself knows where to send a response), - it rinses and repeats until a waiter wants to keep waiting.   Each waiter can sit on a wait-notify queue for, at most, its operation's call timeout. For example, by default, each waiter can wait here for at most 1 minute. There is a continuous task that scans expired/timed-out waiters and invalidates them with `CallTimeoutException`. Each waiter on the remote side should retry and keep waiting if it still wants to wait. This is a liveness check for remote waiters.   This way, it is possible to distinguish an unresponsive node and a long (~infinite) wait. On the caller side, if the waiting thread does not get a response for either a call timeout or for more than *2 times the call-timeout*, it will exit with `OperationTimeoutException`.    Note that this behavior breaks the fairness. Hazelcast does not support fairness for any of the data structures with blocking operations (i.e. lock and semaphore)."
});



documentTitles["transactions.html#transactions"] = "Transactions";
index.add({
    url: "transactions.html#transactions",
    title: "Transactions",
    body: "# Transactions  You can use Hazelcast in transactional context.   "
});

documentTitles["transactions.html#transaction-interface"] = "Transaction Interface";
index.add({
    url: "transactions.html#transaction-interface",
    title: "Transaction Interface",
    body: "## Transaction Interface  You create a `TransactionContext` to begin, commit, and rollback a transaction. You can obtain transaction-aware instances of queues, maps, sets, lists, multimaps via `TransactionContext`, work with them, and commit/rollback in one shot.  Hazelcast supports two types of transactions: LOCAL (One Phase) and TWO\_PHASE. With the type, you have influence over how much guarantee you get when a member crashes while a transaction is committing. The default behavior is TWO\_PHASE.  - **LOCAL**: Unlike the name suggests, LOCAL is a two phase commit. First, all cohorts are asked to prepare; if everyone agrees, then all cohorts are asked to commit. A problem can happen during the commit phase: if one or more members crash, then the system could be left in an inconsistent state.  - **TWO\_PHASE**: The TWO\_PHASE commit is more than the classic two phase commit (if you want a regular two phase commit, use local). Before TWO\_PHASE commits, it copies the commit-log to other members, so in case of member failure, another member can complete the commit.  ```java import java.util.Queue; import java.util.Map; import java.util.Set; import com.hazelcast.core.Hazelcast; import com.hazelcast.core.Transaction;   HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();  TransactionOptions options = new TransactionOptions()     .setTransactionType( TransactionType.LOCAL );      TransactionContext context = hazelcastInstance.newTransactionContext( options ) context.beginTransaction();  TransactionalQueue queue = context.getQueue( \&quot;myqueue\&quot; ); TransactionalMap map = context.getMap( \&quot;mymap\&quot; ); TransactionalSet set = context.getSet( \&quot;myset\&quot; );  try {   Object obj = queue.poll();   //process obj   map.put( \&quot;1\&quot;, \&quot;value1\&quot; );   set.add( \&quot;value\&quot; );   //do other things..   context.commitTransaction(); } catch ( Throwable t ) {   context.rollbackTransaction(); } ```  In a transaction, operations will not be executed immediately. Their changes will be local to the `TransactionContext` until committed. However, they will ensure the changes via locks.   For the above example, when `map.put` is executed, no data will be put to the map but the key will get locked for changes. While committing, operations will be executed, the value will be put to the map, and the key will be unlocked.  Isolation is always `REPEATABLE_READ`. If you are in a transaction, you can read the data in your transaction and the data that is already committed. If you are not in a transaction, you can only read the committed data.   Implementation is different for queue/set/list and map/multimap. For queue operations (offer, poll), offered and/or polled objects are copied to the owner member in order to safely commit/rollback. For map/multimap, Hazelcast first acquires the locks for the write operations (put, remove) and holds the differences (what is added/removed/updated) locally for each transaction. When the transaction is set to commit, Hazelcast will release the locks and apply the differences. When rolling back, Hazelcast will release the locks and discard the differences.  `MapStore` and `QueueStore` does not participate in transactions. Hazelcast will suppress exceptions thrown by store in a transaction. Please refer to the [XA Transactions section](#xa-transactions) for further information.  "
});



documentTitles["xatransactions.html#xa-transactions"] = "XA Transactions";
index.add({
    url: "xatransactions.html#xa-transactions",
    title: "XA Transactions",
    body: "## XA Transactions  XA describes the interface between the global transaction manager and the local resource manager. XA allows multiple resources (such as databases, application servers, message queues, transactional caches, etc.) to be accessed within the same transaction, thereby preserving the ACID properties across applications. XA uses a two-phase commit to ensure that all resources either commit or rollback any particular transaction consistently (all do the same).  By implementing the `XAResource` interface, Hazelcast provides XA transactions. You can obtain the `XAResource` instance via `TransactionContext`. Below is example code that uses Atomikos for transaction management.    ```java UserTransactionManager tm = new UserTransactionManager(); tm.setTransactionTimeout(60); tm.begin();  HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); TransactionContext context = hazelcastInstance.newTransactionContext(); XAResource xaResource = context.getXaResource();  Transaction transaction = tm.getTransaction(); transaction.enlistResource(xaResource); // other resources (database, app server etc...) can be enlisted  try {   TransactionalMap map = context.getMap(\&quot;m\&quot;);   map.put(\&quot;key\&quot;, \&quot;value\&quot;);   // other resource operations    tm.commit(); } catch (Exception e) {   tm.rollback(); } ```"
});



documentTitles["j2eeintegration.html#j2ee-integration"] = "J2EE Integration";
index.add({
    url: "j2eeintegration.html#j2ee-integration",
    title: "J2EE Integration",
    body: "## J2EE Integration  Hazelcast can be integrated into J2EE containers via the Hazelcast Resource Adapter (`hazelcast-jca-rar-`*version*`.rar`). After proper configuration, Hazelcast can participate in standard J2EE transactions.  ```java &lt;%@page import=\&quot;javax.resource.ResourceException\&quot; %&gt; &lt;%@page import=\&quot;javax.transaction.*\&quot; %&gt; &lt;%@page import=\&quot;javax.naming.*\&quot; %&gt; &lt;%@page import=\&quot;javax.resource.cci.*\&quot; %&gt; &lt;%@page import=\&quot;java.util.*\&quot; %&gt; &lt;%@page import=\&quot;com.hazelcast.core.*\&quot; %&gt; &lt;%@page import=\&quot;com.hazelcast.jca.*\&quot; %&gt;  &lt;% UserTransaction txn = null; HazelcastConnection conn = null; HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();  try {   Context context = new InitialContext();   txn = (UserTransaction) context.lookup( \&quot;java:comp/UserTransaction\&quot; );   txn.begin();    HazelcastConnectionFactory cf = (HazelcastConnectionFactory)       context.lookup ( \&quot;java:comp/env/HazelcastCF\&quot; );            conn = cf.getConnection();    TransactionalMap&lt;String, String&gt; txMap = conn.getTransactionalMap( \&quot;default\&quot; );   txMap.put( \&quot;key\&quot;, \&quot;value\&quot; );    txn.commit();      } catch ( Throwable e ) {   if ( txn != null ) {     try {       txn.rollback();     } catch ( Exception ix ) {       ix.printStackTrace();     };   }   e.printStackTrace(); } finally {   if ( conn != null ) {     try {       conn.close();     } catch (Exception ignored) {};   } } %&gt; ```  "
});

documentTitles["j2eeintegration.html#sample-code-for-j2ee-integration"] = "Sample Code for J2EE Integration";
index.add({
    url: "j2eeintegration.html#sample-code-for-j2ee-integration",
    title: "Sample Code for J2EE Integration",
    body: "### Sample Code for J2EE Integration  Please see our sample application for [J2EE Integration](https://github.com/hazelcast/hazelcast-code-samples/tree/master/hazelcast-integration/jca-ra).   "
});



documentTitles["resourceadapterconfiguration.html#resource-adapter-configuration"] = "Resource Adapter Configuration";
index.add({
    url: "resourceadapterconfiguration.html#resource-adapter-configuration",
    title: "Resource Adapter Configuration",
    body: "### Resource Adapter Configuration  Deploying and configuring the Hazelcast resource adapter is no different than configuring any other resource adapter since the Hazelcast resource adapter is a standard JCA one. However, resource adapter installation and configuration is container specific, so please consult your J2EE vendor documentation for details. The most common steps are:  1. Add the `hazelcast-`*version*`.jar` and `hazelcast-jca-`*version*`.jar` to the container's classpath. Usually there is a lib directory that is loaded automatically by the container on startup. 2. Deploy `hazelcast-jca-rar-`*version*`.rar`. Usually there is some kind of a deploy directory. The name of the directory varies by container. 3. Make container specific configurations when/after deploying `hazelcast-jca-rar-`*version*`.rar`. Besides container specific configurations, set the JNDI name for the Hazelcast resource. 4. Configure your application to use the Hazelcast resource. Update `web.xml` and/or `ejb-jar.xml` to let the container know that your application will use the Hazelcast resource and define the resource reference. 5. Make the container specific application configuration to specify the JNDI name used for the resource in the application.  "
});



documentTitles["sampleglassfishconfiguration.html#sample-glassfish-v3-web-application-configuration"] = "Sample Glassfish v3 Web Application Configuration";
index.add({
    url: "sampleglassfishconfiguration.html#sample-glassfish-v3-web-application-configuration",
    title: "Sample Glassfish v3 Web Application Configuration",
    body: "### Sample Glassfish v3 Web Application Configuration  1. Place the `hazelcast-`*version*`.jar` and `hazelcast-jca-`*version*`.jar` into the `GLASSFISH_HOME/glassfish/domains/domain1/lib/ext/` folder. 2. Place the `hazelcast-jca-rar-`*version*`.rar` into `GLASSFISH_HOME/glassfish/domains/domain1/autodeploy/` folder. 3. Add the following lines to the `web.xml` file.  ```xml &lt;resource-ref&gt;   &lt;res-ref-name&gt;HazelcastCF&lt;/res-ref-name&gt;   &lt;res-type&gt;com.hazelcast.jca.ConnectionFactoryImpl&lt;/res-type&gt;   &lt;res-auth&gt;Container&lt;/res-auth&gt; &lt;/resource-ref&gt; ```  Notice that we did not have to put `sun-ra.xml` into the RAR file since it already comes with the `hazelcast-ra-`*version*`.rar` file.  If the Hazelcast resource is used from EJBs, you should configure `ejb-jar.xml` for resource reference and JNDI definitions, just like for the `web.xml` file.  "
});



documentTitles["samplejbossconfiguration.html#sample-jboss-as-5-web-application-configuration"] = "Sample JBoss AS 5 Web Application Configuration";
index.add({
    url: "samplejbossconfiguration.html#sample-jboss-as-5-web-application-configuration",
    title: "Sample JBoss AS 5 Web Application Configuration",
    body: "### Sample JBoss AS 5 Web Application Configuration  - Place the `hazelcast-`*version*`.jar` and `hazelcast-jca-`*version*`.jar` into the `JBOSS_HOME/server/deploy/default/lib` folder. - Place the `hazelcast-jca-rar-`*version*`.rar` into the `JBOSS_HOME/server/deploy/default/deploy` folder. - Create a `hazelcast-ds.xml` file containing the following content in the `JBOSS_HOME/server/deploy/default/deploy` folder. Make sure to set the `rar-name` element to `hazelcast-ra-`*version*`.rar`.  ```xml &lt;?xml version=\&quot;1.0\&quot; encoding=\&quot;UTF-8\&quot;?&gt; &lt;!DOCTYPE connection-factories   PUBLIC \&quot;-//JBoss//DTD JBOSS JCA Config 1.5//EN\&quot;   \&quot;http://www.jboss.org/j2ee/dtd/jboss-ds_1_5.dtd\&quot;&gt;  &lt;connection-factories&gt;   &lt;tx-connection-factory&gt;     &lt;local-transaction/&gt;     &lt;track-connection-by-tx&gt;true&lt;/track-connection-by-tx&gt;     &lt;jndi-name&gt;HazelcastCF&lt;/jndi-name&gt;     &lt;rar-name&gt;hazelcast-jca-rar-&lt;version&gt;.rar&lt;/rar-name&gt;     &lt;connection-definition&gt;        javax.resource.cci.ConnectionFactory     &lt;/connection-definition&gt;   &lt;/tx-connection-factory&gt; &lt;/connection-factories&gt; ```  - Add the following lines to the `web.xml` file.  ```xml &lt;resource-ref&gt;   &lt;res-ref-name&gt;HazelcastCF&lt;/res-ref-name&gt;   &lt;res-type&gt;com.hazelcast.jca.ConnectionFactoryImpl&lt;/res-type&gt;   &lt;res-auth&gt;Container&lt;/res-auth&gt; &lt;/resource-ref&gt; ```  - Add the following lines to the `jboss-web.xml` file.  ```xml &lt;resource-ref&gt;   &lt;res-ref-name&gt;HazelcastCF&lt;/res-ref-name&gt;   &lt;jndi-name&gt;java:HazelcastCF&lt;/jndi-name&gt; &lt;/resource-ref&gt; ```  If the Hazelcast resource is used from EJBs, you should configure `ejb-jar.xml` and `jboss.xml` for resource reference and JNDI definitions.  &lt;br&gt; &lt;/br&gt;   "
});



documentTitles["samplejboss7configuration.html#sample-jboss-as-7-eap-6-web-application-configuration"] = "Sample JBoss AS 7 / EAP 6 Web Application Configuration";
index.add({
    url: "samplejboss7configuration.html#sample-jboss-as-7-eap-6-web-application-configuration",
    title: "Sample JBoss AS 7 / EAP 6 Web Application Configuration",
    body: "### Sample JBoss AS 7 / EAP 6 Web Application Configuration  Deployment on JBoss AS 7 or JBoss EAP 6 is a fairly straightforward process. The steps you perform are shown below. The only non-trivial step is the creation of a new JBoss module with Hazelcast libraries.       - Create the folder `&lt;jboss_home&gt;/modules/system/layers/base/com/hazelcast/main`. - Place the `hazelcast-`&lt;*version*&gt;`.jar` and `hazelcast-jca-`&lt;*version*&gt;`.jar` into the folder you created in the previous step. - Create the file `module.xml` and place it in the same folder. This file should have the following content.    ```xml &lt;module xmlns=\&quot;urn:jboss:module:1.0\&quot; name=\&quot;com.hazelcast\&quot;&gt;   &lt;resources&gt;     &lt;resource-root path=\&quot;.\&quot;/&gt;     &lt;resource-root path=\&quot;hazelcast-&lt;version&gt;.jar\&quot;/&gt;     &lt;resource-root path=\&quot;hazelcast-jca-&lt;version&gt;.jar\&quot;/&gt;   &lt;/resources&gt;   &lt;dependencies&gt;     &lt;module name=\&quot;javax.api\&quot;/&gt;     &lt;module name=\&quot;javax.resource.api\&quot;/&gt;     &lt;module name=\&quot;javax.validation.api\&quot;/&gt;     &lt;module name=\&quot;org.jboss.ironjacamar.api\&quot;/&gt;   &lt;/dependencies&gt; &lt;/module&gt; ```  At this point, you have a new JBoss module with Hazelcast in it. You can now start JBoss and deploy the `hazelcast-jca-rar-`&lt;*version*&gt;`.rar` file via JBoss CLI or Administration Console.  Once the Hazelcast Resource Adapter is deployed, you can start using it. The easiest way is to let a container inject `ConnectionFactory` into your beans.       ```java package com.hazelcast.examples.rar;  import com.hazelcast.core.TransactionalMap; import com.hazelcast.jca.HazelcastConnection;  import javax.annotation.Resource; import javax.resource.ResourceException; import javax.resource.cci.ConnectionFactory; import java.util.logging.Level; import java.util.logging.Logger;  @javax.ejb.Stateless public class ExampleBean implements ExampleInterface {     private final static Logger log = Logger.getLogger(ExampleBean.class.getName());      @Resource(mappedName = \&quot;java:/HazelcastCF\&quot;)     protected ConnectionFactory connectionFactory;      public void insert(String key, String value) {         HazelcastConnection hzConn = null;         try {             hzConn = getConnection();             TransactionalMap&lt;String,String&gt; txmap = hzConn.getTransactionalMap(\&quot;txmap\&quot;);             txmap.put(key, value);         } finally {             closeConnection(hzConn);         }     }      private HazelcastConnection getConnection() {         try {             return (HazelcastConnection) connectionFactory.getConnection();         } catch (ResourceException e) {             throw new RuntimeException(\&quot;Error while getting Hazelcast connection\&quot;, e);         }     }      private void closeConnection(HazelcastConnection hzConn) {         if (hzConn != null) {             try {                 hzConn.close();             } catch (ResourceException e) {                 log.log(Level.WARNING, \&quot;Error while closing Hazelcast connection.\&quot;, e);             }         }     } } ```  "
});

documentTitles["samplejboss7configuration.html#known-issues"] = "Known Issues";
index.add({
    url: "samplejboss7configuration.html#known-issues",
    title: "Known Issues",
    body: "#### Known Issues  - There is a regression in JBoss EAP 6.1.0 causing failure during Hazelcast Resource Adapter deployment. The issue is fixed in JBoss EAP 6.1.1. See [this](https://bugzilla.redhat.com/show_bug.cgi?id=976294) for additional details.  "
});



documentTitles["jcache.html#hazelcast-jcache"] = "Hazelcast JCache";
index.add({
    url: "jcache.html#hazelcast-jcache",
    title: "Hazelcast JCache",
    body: "# Hazelcast JCache  This chapter describes the basics of JCache: the standardized Java caching layer API. The JCache caching API is specified by the Java Community Process (JCP) as Java Specification Request (JSR) 107.  Caching keeps data in memory that either are slow to calculate/process or originate from another underlying backend system whereas caching is used to prevent additional request round trips for frequently used data. In both cases, caching could be used to gain performance or decrease application latencies.  "
});

documentTitles["jcache.html#jcache-overview"] = "JCache Overview";
index.add({
    url: "jcache.html#jcache-overview",
    title: "JCache Overview",
    body: "## JCache Overview  Starting with Hazelcast release 3.3.1, a specification compliant JCache implementation is offered. To show our commitment to this important specification the Java world was waiting for over a decade, we do not just provide a simple wrapper around our existing APIs but implemented a caching structure from ground up to optimize the behavior to the needs of JCache. As mentioned before, the Hazelcast JCache implementation is 100% TCK (Technology Compatibility Kit) compliant and therefore passes all specification requirements.  In addition to the given specification, we added some features like asynchronous versions of almost all operations to give the user extra power.    This chapter gives a basic understanding of how to configure your application and how to setup Hazelcast to be your JCache provider. It also shows examples of basic JCache usage as well as the additionally offered features that are not part of JSR-107. To gain a full understanding of the JCache functionality and provided guarantees of different operations, read the specification document (which is also the main documentation for functionality) at the specification page of JSR-107:  [https://www.jcp.org/en/jsr/detail?id=107](https://www.jcp.org/en/jsr/detail?id=107)  "
});



documentTitles["jcache-setup.html#setup-and-configuration"] = "Setup and Configuration";
index.add({
    url: "jcache-setup.html#setup-and-configuration",
    title: "Setup and Configuration",
    body: "## Setup and Configuration  This sub-chapter shows what is necessary to provide the JCache API and the Hazelcast JCache implementation for your application. In addition, it demonstrates the different configuration options as well as a description of the configuration properties.  "
});

documentTitles["jcache-setup.html#application-setup"] = "Application Setup";
index.add({
    url: "jcache-setup.html#application-setup",
    title: "Application Setup",
    body: "### Application Setup  To provide your application with this JCache functionality, your application needs the JCache API inside its classpath. This API is the bridge between the specified JCache standard and the implementation provided by Hazelcast.  The way to integrate the JCache API JAR into the application classpath depends on the build system used. For Maven, Gradle, SBT, Ivy and many other build systems, all using Maven based dependency repositories, perform the integration by adding the Maven coordinates to the build descriptor.  As already mentioned, next to the default Hazelcast coordinates that might be already part of the application, you have to add JCache coordinates.  For Maven users, the coordinates look like the following code:  ```xml &lt;dependency&gt;   &lt;groupId&gt;javax.cache&lt;/groupId&gt;   &lt;artifactId&gt;cache-api&lt;/artifactId&gt;   &lt;version&gt;1.0.0&lt;/version&gt; &lt;/dependency&gt; ``` With other build systems, you might need to describe the coordinates in a different way.  "
});

documentTitles["jcache-setup.html#activating-hazelcast-as-jcache-provider"] = "Activating Hazelcast as JCache Provider";
index.add({
    url: "jcache-setup.html#activating-hazelcast-as-jcache-provider",
    title: "Activating Hazelcast as JCache Provider",
    body: "#### Activating Hazelcast as JCache Provider  To activate Hazelcast as the JCache provider implementation, add either `hazelcast-all.jar` or `hazelcast.jar` to the classpath (if not already available) by either one of the following Maven snippets.  If you use `hazelcast-all.jar`:  ```xml &lt;dependency&gt;   &lt;groupId&gt;com.hazelcast&lt;/groupId&gt;   &lt;artifactId&gt;hazelcast-all&lt;/artifactId&gt;   &lt;version&gt;3.4&lt;/version&gt; &lt;/dependency&gt; ```  If you use `hazelcast.jar`:  ```xml &lt;dependency&gt;   &lt;groupId&gt;com.hazelcast&lt;/groupId&gt;   &lt;artifactId&gt;hazelcast&lt;/artifactId&gt;   &lt;version&gt;3.4&lt;/version&gt; &lt;/dependency&gt; ``` The users of other build systems have to adjust the way of defining the dependency to their needs.  "
});

documentTitles["jcache-setup.html#connecting-clients-to-remote-server"] = "Connecting Clients to Remote Server";
index.add({
    url: "jcache-setup.html#connecting-clients-to-remote-server",
    title: "Connecting Clients to Remote Server",
    body: "#### Connecting Clients to Remote Server  When the users want to use Hazelcast clients to connect to a remote cluster, the `hazelcast-client.jar` dependency is also required on the client side applications. This JAR is already included in `hazelcast-all.jar`. Or, you can add it to the classpath using the following Maven snippet:  ```xml &lt;dependency&gt;   &lt;groupId&gt;com.hazelcast&lt;/groupId&gt;   &lt;artifactId&gt;hazelcast&lt;/artifactId&gt;   &lt;version&gt;3.4&lt;/version&gt; &lt;/dependency&gt; ```  For other build systems, e.g. ANT, the users have to download these dependencies from either the JSR-107 specification and Hazelcast community website ([http://www.hazelcast.org](http://www.hazelcast.org)) or from the Maven repository search page ([http://search.maven.org](http://search.maven.org)).  "
});



documentTitles["jcache-quickexample.html#quick-example"] = "Quick Example";
index.add({
    url: "jcache-quickexample.html#quick-example",
    title: "Quick Example",
    body: "### Quick Example  Before moving on to configuration, let's have a look at a basic introductory example. The following code shows how to use the Hazelcast JCache integration inside an application in an easy but typesafe way.  ```java // Retrieve the CachingProvider which is automatically backed by // the chosen Hazelcast server or client provider CachingProvider cachingProvider = Caching.getCachingProvider();  // Create a CacheManager CacheManager cacheManager = cachingProvider.getCacheManager();  // Create a simple but typesafe configuration for the cache CompleteConfiguration&lt;String, String&gt; config =     new MutableConfiguration&lt;String, String&gt;()         .setTypes( String.class, String.class );  // Create and get the cache Cache&lt;String, String&gt; cache = cacheManager.createCache( \&quot;example\&quot;, config ); // Alternatively to request an already existing cache // Cache&lt;String, String&gt; cache = cacheManager //     .getCache( name, String.class, String.class );  // Put a value into the cache cache.put( \&quot;world\&quot;, \&quot;Hello World\&quot; );  // Retrieve the value again from the cache String value = cache.get( \&quot;world\&quot; );  // Print the value 'Hello World' System.out.println( value ); ```  Although the example is simple, let's go through the code lines one by one.  "
});

documentTitles["jcache-quickexample.html#getting-the-hazelcast-jcache-implementation"] = "Getting the Hazelcast JCache Implementation";
index.add({
    url: "jcache-quickexample.html#getting-the-hazelcast-jcache-implementation",
    title: "Getting the Hazelcast JCache Implementation",
    body: "#### Getting the Hazelcast JCache Implementation  First of all, we retrieve the `javax.cache.spi.CachingProvider` using the static method from `javax.cache.Caching::getCachingManager` which automatically picks up Hazelcast as the underlying JCache implementation, if available in the classpath. This way the Hazelcast implementation of a `CachingProvider` will automatically start a new Hazelcast node or client (depending on the chosen provider type) and pick up the configuration from either the command line parameter or from the classpath. We will show how to use an existing `HazelcastInstance` later in this chapter, for now we keep it simple.  "
});

documentTitles["jcache-quickexample.html#setting-up-the-jcache-entry-point"] = "Setting up the JCache Entry Point";
index.add({
    url: "jcache-quickexample.html#setting-up-the-jcache-entry-point",
    title: "Setting up the JCache Entry Point",
    body: "#### Setting up the JCache Entry Point  In the next line, we ask the `CachingProvider` to return a `javax.cache.CacheManager`. This is the general application's entry point into JCache. The `CachingProvider` creates and manages named caches.  "
});

documentTitles["jcache-quickexample.html#configuring-the-cache-before-creating-it"] = "Configuring the Cache Before Creating It";
index.add({
    url: "jcache-quickexample.html#configuring-the-cache-before-creating-it",
    title: "Configuring the Cache Before Creating It",
    body: "#### Configuring the Cache Before Creating It  The next few lines create a simple `javax.cache.configuration.MutableConfiguration` to configure the cache before actually creating it. In this case, we only configure the key and value types to make the cache typesafe which is highly recommended and checked on retrieval of the cache.  "
});

documentTitles["jcache-quickexample.html#creating-the-cache"] = "Creating the Cache";
index.add({
    url: "jcache-quickexample.html#creating-the-cache",
    title: "Creating the Cache",
    body: "#### Creating the Cache  To create the cache, we call `javax.cache.CacheManager::createCache` with a name for the cache and the previously created configuration; the call returns the created cache. If you need to retrieve a previously created cache, you can use the corresponding method overload `javax.cache.CacheManager::getCache`. If the cache was created using type parameters, you must retrieve the cache afterward using the type checking version of `getCache`.  "
});

documentTitles["jcache-quickexample.html#get-put-and-getandput"] = "get, put, and getAndPut";
index.add({
    url: "jcache-quickexample.html#get-put-and-getandput",
    title: "get, put, and getAndPut",
    body: "#### get, put, and getAndPut  The following lines are simple `put` and `get` calls from the `java.util.Map` interface. The `javax.cache.Cache::put` has a `void` return type and does not return the previously assigned value of the key. To imitate the `java.util.Map::put` method, the JCache cache has a method called `getAndPut`.  "
});



documentTitles["jcache-jcacheconfiguration.html#jcache-configuration"] = "JCache Configuration";
index.add({
    url: "jcache-jcacheconfiguration.html#jcache-configuration",
    title: "JCache Configuration",
    body: "### JCache Configuration  Hazelcast JCache provides two different ways of cache configuration:  - programmatically: the typical Hazelcast way, using the Config API seen above), - and declaratively: using `hazelcast.xml` or `hazelcast-client.xml`.  "
});

documentTitles["jcache-jcacheconfiguration.html#jcache-declarative-configuration"] = "JCache Declarative Configuration";
index.add({
    url: "jcache-jcacheconfiguration.html#jcache-declarative-configuration",
    title: "JCache Declarative Configuration",
    body: "#### JCache Declarative Configuration  You can declare your JCache cache configuration using the `hazelcast.xml` or `hazelcast-client.xml` configuration files. Using this declarative configuration makes the creation of the `javax.cache.Cache` fully transparent and automatically ensures internal thread safety. You do not need a call to `javax.cache.Cache::createCache` in this case: you can retrieve the cache using `javax.cache.Cache::getCache` overloads and by passing in the name defined in the configuration for the cache.  To retrieve the cache defined in the declaration files, you need only perform a simple call (example below) because the cache is created automatically by the implementation.  ```java CachingProvider cachingProvider = Caching.getCachingProvider(); CacheManager cacheManager = cachingProvider.getCacheManager(); Cache&lt;Object, Object&gt; cache = cacheManager     .getCache( \&quot;default\&quot;, Object.class, Object.class ); ```  Note that this section only describes the JCache provided standard properties. For the Hazelcast specific properties, please see the [ICache Configuration section](#icache-configuration).  ```xml &lt;cache name=\&quot;default\&quot;&gt;   &lt;key-type class-name=\&quot;java.lang.Object\&quot; /&gt;   &lt;value-type class-name=\&quot;java.lang.Object\&quot; /&gt;   &lt;statistics-enabled&gt;false&lt;/statistics-enabled&gt;   &lt;management-enabled&gt;false&lt;/management-enabled&gt;    &lt;read-through&gt;true&lt;/read-through&gt;   &lt;write-through&gt;true&lt;/write-through&gt;   &lt;cache-loader-factory      class-name=\&quot;com.example.cache.MyCacheLoaderFactory\&quot; /&gt;   &lt;cache-writer-factory      class-name=\&quot;com.example.cache.MyCacheWriterFactory\&quot; /&gt;   &lt;expiry-policy-factory      class-name=\&quot;com.example.cache.MyExpirePolicyFactory\&quot; /&gt;    &lt;entry-listeners&gt;     &lt;entry-listener old-value-required=\&quot;false\&quot; synchronous=\&quot;false\&quot;&gt;       &lt;entry-listener-factory          class-name=\&quot;com.example.cache.MyEntryListenerFactory\&quot; /&gt;       &lt;entry-event-filter-factory          class-name=\&quot;com.example.cache.MyEntryEventFilterFactory\&quot; /&gt;     &lt;/entry-listener&gt;     ...   &lt;/entry-listeners&gt; &lt;/cache&gt; ```  - `key-type#class-name`: The fully qualified class name of the cache key type, defaults to `java.lang.Object`. - `value-type#class-name`: The fully qualified class name of the cache value type, defaults to `java.lang.Object`. - `statistics-enabled`: If set to true, statistics like cache hits and misses are collected. Its default value is false. - `management-enabled`: If set to true, JMX beans are enabled and collected statistics are provided - It doesn't automatically enables statistics collection, defaults to false. - `read-through`: If set to true, enables read-through behavior of the cache to an underlying configured `javax.cache.integration.CacheLoader` which is also known as lazy-loading, defaults to false. - `write-through`: If set to true, enables write-through behavior of the cache to an underlying configured `javax.cache.integration.CacheWriter` which passes any changed value to the external backend resource, defaults to false. - `cache-loader-factory#class-name`: The fully qualified class name of the `javax.cache.configuration.Factory` implementation providing a `javax.cache.integration.CacheLoader` instance to the cache. - `cache-writer-factory#class-name`: The fully qualified class name of the `javax.cache.configuration.Factory` implementation providing a `javax.cache.integration.CacheWriter` instance to the cache. - `expiry-policy-factory#-class-name`: The fully qualified class name of the `javax.cache.configuration.Factory` implementation providing a `javax.cache.expiry.ExpiryPolicy` instance to the cache. - `entry-listener`: A set of attributes and elements, explained below, to describe a `javax.cache.event.CacheEntryListener`.   - `entry-listener#old-value-required`: If set to true, previously assigned values for the affected keys will be sent to the `javax.cache.event.CacheEntryListener` implementation. Setting this attribute to true creates additional traffic, defaults to false.   - `entry-listener#synchronous`: If set to true, the `javax.cache.event.CacheEntryListener` implementation will be called in a synchronous manner, defaults to false.   - `entry-listener/entry-listener-factory#class-name`: The fully qualified class name of the `javax.cache.configuration.Factory` implementation providing a `javax.cache.event.CacheEntryListener` instance.   - `entry-listener/entry-event-filter-factory#class-name`: The fully qualified class name of the `javax.cache.configuration.Factory` implementation providing a `javax.cache.event.CacheEntryEventFilter` instance.  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *The JMX MBeans provided by Hazelcast JCache show statistics of the local node only. To show the cluster-wide statistics, the user should collect statistic information from all nodes and accumulate them to the overall statistics.* &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["jcache-jcacheconfiguration.html#jcache-programmatic-configuration"] = "JCache Programmatic Configuration";
index.add({
    url: "jcache-jcacheconfiguration.html#jcache-programmatic-configuration",
    title: "JCache Programmatic Configuration",
    body: "#### JCache Programmatic Configuration  To configure the JCache programmatically:  - either instantiate `javax.cache.configuration.MutableConfiguration` if you will use only the JCache standard configuration, - or instantiate `com.hazelcast.config.CacheConfig` for a deeper Hazelcast integration.  `com.hazelcast.config.CacheConfig` offers additional options that are specific to Hazelcast like asynchronous and synchronous backup counts. Both classes share the same supertype interface `javax.cache.configuration.CompleteConfiguration` which is part of the JCache standard.  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *To stay vendor independent, try to keep your code as near as possible to the standard JCache API. We recommend you to use declarative configuration and use the `javax.cache.configuration.Configuration` or `javax.cache.configuration.CompleteConfiguration` interfaces in your code only when you need to pass the configuration instance throughout your code.* &lt;br&gt;&lt;/br&gt;  If you don't need to configure Hazelcast specific properties, it is recommended that you instantiate `javax.cache.configuration.MutableConfiguration` and that you use the setters to configure Hazelcast as shown in the example in the [Quick Example section](#quick-example). Since the configurable properties are the same as the ones explained in the [JCache Declarative Configuration section](#jcache-declarative-configuration), they are not mentioned here. For Hazelcast specific properties, please read the [ICache Configuration section](#icache-configuration) section.  "
});



documentTitles["jcache-providers.html#jcache-providers"] = "JCache Providers";
index.add({
    url: "jcache-providers.html#jcache-providers",
    title: "JCache Providers",
    body: "## JCache Providers  Use JCache providers to create caches for a specification compliant implementation. Those providers abstract the platform specific behavior and bindings, and provide the different JCache required features.  Hazelcast has two types of providers. Depending on your application setup and the cluster topology, you can use the Client Provider (used from Hazelcast clients) or the Server Provider (used by cluster nodes).  "
});

documentTitles["jcache-providers.html#provider-configuration"] = "Provider Configuration";
index.add({
    url: "jcache-providers.html#provider-configuration",
    title: "Provider Configuration",
    body: "### Provider Configuration  You configure the JCache `javax.cache.spi.CachingProvider` by either specifying the provider at the command line or by declaring the provider inside the Hazelcast configuration XML file. For more information on setting properties in this XML configuration file, please see the [JCache Declarative Configuration section](#jcache-declarative-configuration).  Hazelcast implements a delegating `CachingProvider` that can automatically be configured for either client or server mode and that delegates to the real underlying implementation based on the user's choice. It is recommended that you use this `CachingProvider` implementation.  The delegating `CachingProvider`s fully qualified class name is:  ```plain com.hazelcast.cache.HazelcastCachingProvider ```  To configure the delegating provider at the command line, add the following parameter to the Java startup call, depending on the chosen provider:  ```plain -Dhazelcast.jcache.provider.type=[client|server] ```  By default, the delegating `CachingProvider` is automatically picked up by the JCache SPI and provided as shown above. In cases where multiple `javax.cache.spi.CachingProvider` implementations reside on the classpath (like in some Application Server scenarios), you can select a `CachingProvider` by explicitly calling `Caching::getCachingProvider` overloads and providing them using the canonical class name of the provider to be used. The class names of server and client providers provided by Hazelcast are mentioned in the following two subsections.  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *Hazelcast advises that you use the `Caching::getCachingProvider` overloads to select a `CachingProvider` explicitly. This ensures that uploading to later environments or Application Server versions doesn't result in unexpected behavior like choosing a wrong `CachingProvider`.* &lt;br&gt;&lt;/br&gt;  For more information on cluster topologies and Hazelcast clients, please see the [Hazelcast Topology section](#hazelcast-topology).  "
});



documentTitles["jcache-clientprovider.html#jcache-client-provider"] = "JCache Client Provider";
index.add({
    url: "jcache-clientprovider.html#jcache-client-provider",
    title: "JCache Client Provider",
    body: "### JCache Client Provider  For cluster topologies where Hazelcast light clients are used to connect to a remote Hazelcast cluster, use the Client Provider to configure JCache.  The Client Provider provides the same features as the Server Provider. However, it does not hold data on its own but instead delegates requests and calls to the remotely connected cluster.  The Client Provider can connect to multiple clusters at the same time. This can be achieved by scoping the client side `CacheManager` with different Hazelcast configuration files. For more information, please see the [Scopes and Namespaces section](#scopes-and-namespaces).  For requesting this `CachingProvider` using `Caching#getCachingProvider( String )` or `Caching#getCachingProvider( String, ClassLoader )`, use the following fully qualified class name:  ```plain com.hazelcast.client.cache.impl.HazelcastClientCachingProvider ```  "
});



documentTitles["jcache-serverprovider.html#jcache-server-provider"] = "JCache Server Provider";
index.add({
    url: "jcache-serverprovider.html#jcache-server-provider",
    title: "JCache Server Provider",
    body: "### JCache Server Provider  If a Hazelcast node is embedded into an application directly and the Hazelcast client is not used, the Server Provider is required. In this case, the node itself becomes a part of the distributed cache and requests and operations are distributed directly across the cluster by its given key.  The Server Provider provides the same features as the Client provider, but it keeps data in the local Hazelcast node and also distributes non-owned keys to other direct cluster members.  Like the Client Provider, the Server Provider is able to connect to multiple clusters at the same time. This can be achieved by scoping the client side `CacheManager` with different Hazelcast configuration files. For more information please see the [Scopes and Namespaces section](#scopes-and-namespaces).  To request this `CachingProvider` using `Caching#getCachingProvider( String )` or `Caching#getCachingProvider( String, ClassLoader )`, use the following fully qualified class name:  ```plain com.hazelcast.cache.impl.HazelcastServerCachingProvider ```  "
});



documentTitles["jcache-api.html#introduction-to-the-jcache-api"] = "Introduction to the JCache API";
index.add({
    url: "jcache-api.html#introduction-to-the-jcache-api",
    title: "Introduction to the JCache API",
    body: "## Introduction to the JCache API  This section explains the JCache API by providing simple examples and use cases. While walking through the examples, we will have a look at a couple of the standard API classes and see how these classes are used.  "
});

documentTitles["jcache-api.html#jcache-api-walk-through"] = "JCache API Walk-through";
index.add({
    url: "jcache-api.html#jcache-api-walk-through",
    title: "JCache API Walk-through",
    body: "### JCache API Walk-through  The code in this subsection creates a small account application by providing a caching layer over an imagined database abstraction. The database layer will be simulated using single demo data in a simple DAO interface. To show the difference between the \&quot;database\&quot; access and retrieving values from the cache, a small waiting time is used in the DAO implementation to simulate network and database latency.  "
});

documentTitles["jcache-api.html#basic-user-class"] = "Basic User Class";
index.add({
    url: "jcache-api.html#basic-user-class",
    title: "Basic User Class",
    body: "#### Basic User Class  Before we implement the JCache caching layer, let's have a quick look at some basic classes we need for this example.  The `User` class is the representation of a user table in the database. To keep it simple, it has just two properties: `userId` and `username`.  ```java public class User {   private int userId;   private String username;    // Getters and setters } ``` "
});

documentTitles["jcache-api.html#dao-interface-example"] = "DAO Interface Example";
index.add({
    url: "jcache-api.html#dao-interface-example",
    title: "DAO Interface Example",
    body: "#### DAO Interface Example  The DAO interface is also kept easy in this example. It provides a simple method to retrieve (find) a user by its `userId`.  ```java public interface UserDAO {   User findUserById( int userId );   boolean storeUser( int userId, User user );   boolean removeUser( int userId );   Collection&lt;Integer&gt; allUserIds(); } ``` "
});

documentTitles["jcache-api.html#configuration-example"] = "Configuration Example";
index.add({
    url: "jcache-api.html#configuration-example",
    title: "Configuration Example",
    body: "#### Configuration Example  To show most of the standard features, the configuration example is a little more complex.  ```java // Create javax.cache.configuration.CompleteConfiguration subclass CompleteConfiguration&lt;Integer, User&gt; config =     new MutableConfiguration&lt;Integer, User&gt;()         // Configure the cache to be typesafe         .setTypes( Integer.class, User.class )         // Configure to expire entries 30 secs after creation in the cache         .setExpiryPolicyFactory( FactoryBuilder.factoryOf(             new AccessedExpiryPolicy( new Duration( TimeUnit.SECONDS, 30 ) )         ) )         // Configure read-through of the underlying store         .setReadThrough( true )         // Configure write-through to the underlying store         .setWriteThrough( true )         // Configure the javax.cache.integration.CacheLoader         .setCacheLoaderFactory( FactoryBuilder.factoryOf(             new UserCacheLoader( userDao )         ) )         // Configure the javax.cache.integration.CacheWriter         .setCacheWriterFactory( FactoryBuilder.factoryOf(             new UserCacheWriter( userDao )         ) )         // Configure the javax.cache.event.CacheEntryListener with no         // javax.cache.event.CacheEntryEventFilter, to include old value         // and to be executed synchronously         .addCacheEntryListenerConfiguration(             new MutableCacheEntryListenerConfiguration&lt;Integer, User&gt;(                 new UserCacheEntryListenerFactory(),                 null, true, true             )         ); ```  Let's go through this configuration line by line.  "
});

documentTitles["jcache-api.html#setting-the-cache-type-and-expire-policy"] = "Setting the Cache Type and Expire Policy";
index.add({
    url: "jcache-api.html#setting-the-cache-type-and-expire-policy",
    title: "Setting the Cache Type and Expire Policy",
    body: "#### Setting the Cache Type and Expire Policy  First, we set the expected types for the cache, which is already known from the previous example. On the next line, an `javax.cache.expiry.ExpirePolicy` is configured. Almost all integration `ExpirePolicy` implementations are configured using `javax.cache.configuration.Factory` instances. `Factory` and `FactoryBuilder` are explained later in this chapter.  "
});

documentTitles["jcache-api.html#configuring-read-through-and-write-through"] = "Configuring Read-Through and Write-Through";
index.add({
    url: "jcache-api.html#configuring-read-through-and-write-through",
    title: "Configuring Read-Through and Write-Through",
    body: "#### Configuring Read-Through and Write-Through  The next two lines configure the thread that will be read-through and write-through to the underlying backend resource that is configured over the next few lines. The JCache API offers `javax.cache.integration.CacheLoader` and `javax.cache.integration.CacheWriter` to implement adapter classes to any kind of backend resource, e.g. JPA, JDBC, or any other backend technology implementable in Java. The interfaces provides the typical CRUD operations like `create`, `get`, `update`, `delete` and some bulk operation versions of those common operations. We will look into the implementation of those implementations later.  "
});

documentTitles["jcache-api.html#configuring-entry-listeners"] = "Configuring Entry Listeners";
index.add({
    url: "jcache-api.html#configuring-entry-listeners",
    title: "Configuring Entry Listeners",
    body: "#### Configuring Entry Listeners  The last configuration setting defines entry listeners based on sub-interfaces of `javax.cache.event.CacheEntryListener`. This config does not use a `javax.cache.event.CacheEntryEventFilter` since the listener is meant to be fired on every change that happens on the cache. Again we will look in the implementation of the listener in later in this chapter.  "
});

documentTitles["jcache-api.html#full-example-code"] = "Full Example Code";
index.add({
    url: "jcache-api.html#full-example-code",
    title: "Full Example Code",
    body: "#### Full Example Code  A full running example that is presented in this subsection is available in the [code samples repository](https://github.com/hazelcast/hazelcast-code-samples/tree/master/jcache/src/main/java/com/hazelcast/examples/application). The application is built to be a command line app. It offers a small shell to accept different commands. After startup, you can enter `help` to see all available commands and their descriptions.  "
});



documentTitles["jcache-apibasics.html#roundup-of-basics"] = "Roundup of Basics";
index.add({
    url: "jcache-apibasics.html#roundup-of-basics",
    title: "Roundup of Basics",
    body: "### Roundup of Basics  In the [Quick Example section](#quick-example), we have already seen a couple of the base classes and explained how those work. Following are quick descriptions of them.  **`javax.cache.Caching`**:  The access point into the JCache API. It retrieves the general `CachingProvider` backed by any compliant JCache implementation, such as Hazelcast JCache.  **`javax.cache.spi.CachingProvider`**:  The SPI that is implemented to bridge between the JCache API and the implementation itself. Hazelcast nodes and clients use different providers chosen as seen in the [Provider Configuration section](#provider-configuration) which enable the JCache API to interact with Hazelcast clusters.  When a `javax.cache.spi.CachingProvider::getCacheManager` overload is used that takes a `java.lang.ClassLoader` argument, this classloader will be part of the scope of the created `java.cache.Cache` and it is not possible to retrieve it on other nodes. We advise not to use those overloads, those are not meant to be used in distributed environments!  **`javax.cache.CacheManager`**:  The `CacheManager` provides the capability to create new and manage existing JCache caches.  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *A `javax.cache.Cache` instance created with key and value types in the configuration provides a type checking of those types at retrieval of the cache. For that reason, all non-types retrieval methods like `getCache` throw an exception because types cannot be checked.* &lt;br&gt;&lt;/br&gt;  **`javax.cache.configuration.Configuration`**, **`javax.cache.configuration.MutableConfiguration`**:  These two classes are used to configure a cache prior to retrieving it from a `CacheManager`. The `Configuration` interface, therefore, acts as a common super type for all compatible configuration classes such as `MutableConfiguration`.  Hazelcast itself offers a special implementation (`com.hazelcast.config.CacheConfig`) of the `Configuration` interface which offers more options on the specific Hazelcast properties that can be set to configure features like synchronous and asynchronous backups counts or selecting the underlying [In Memory Format](#in-memory-format) of the cache. For more information on this configuration class, please see the reference in [JCache Programmatic Configuration section](#jcache-programmatic-configuration).  **`javax.cache.Cache`**:  This interface represents the cache instance itself. It is comparable to `java.util.Map` but offers special operations dedicated to the caching use case. Therefore, for example `javax.cache.Cache::put`, unlike `java.util.Map::put`, does not return the old value previously assigned to the given key.  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *Bulk operations on the `Cache` interface guarantee atomicity per entry but not over all given keys in the same bulk operations since no transactional behavior is applied over the whole batch process.* &lt;br&gt;&lt;/br&gt;  "
});



documentTitles["jcache-apifactory.html#factory-and-factorybuilder"] = "Factory and FactoryBuilder";
index.add({
    url: "jcache-apifactory.html#factory-and-factorybuilder",
    title: "Factory and FactoryBuilder",
    body: "### Factory and FactoryBuilder  The `javax.cache.configuration.Factory` implementations are used to configure features like `CacheEntryListener`, `ExpirePolicy` and `CacheLoader`s or `CacheWriter`s. These factory implementations are required to distribute the different features to nodes in a cluster environment like Hazelcast. Therefore, these factory implementations have to be serializable.  `Factory` implementations are easy to do: they follow the default Provider- or Factory-Pattern. The sample class `UserCacheEntryListenerFactory` shown below implements a custom JCache `Factory`.  ```java public class UserCacheEntryListenerFactory     implements Factory&lt;CacheEntryListener&lt;Integer, User&gt;&gt; {    @Override   public CacheEntryListener&lt;Integer, User&gt; create() {     // Just create a new listener instance     return new UserCacheEntryListener();   } } ```  To simplify the process for the users, JCache API offers a set of helper methods collected in `javax.cache.configuration.FactoryBuilder`. In the above configuration example, `FactoryBuilder::factoryOf` is used to create a singleton factory for the given instance.  "
});



documentTitles["jcache-apicacheloader.html#cacheloader"] = "CacheLoader";
index.add({
    url: "jcache-apicacheloader.html#cacheloader",
    title: "CacheLoader",
    body: "### CacheLoader  `javax.cache.integration.CacheLoader` loads cache entries from any external backend resource. If the cache is configured to be `read-through`, then `CacheLoader::load` is called transparently from the cache when the key or the value is not yet found in the cache. If no value is found for a given key, it returns null.  If the cache is not configured to be `read-through`, nothing is loaded automatically. However, the user code must call `javax.cache.Cache::loadAll` to load data for the given set of keys into the cache.  For the bulk load operation (`loadAll()`), some keys may not be found in the returned result set. In this case, a `javax.cache.integration.CompletionListener` parameter can be used as an asynchronous callback after all the key-value pairs are loaded because loading many key-value pairs can take lots of time.  Let's look at the `UserCacheLoader` implementation.  ```java public class UserCacheLoader     implements CacheLoader&lt;Integer, User&gt;, Serializable {    private final UserDao userDao;    public UserCacheLoader( UserDao userDao ) {     // Store the dao instance created externally     this.userDao = userDao;   }    @Override   public User load( Integer key ) throws CacheLoaderException {     // Just call through into the dao     return userDao.findUserById( key );   }    @Override   public Map&lt;Integer, User&gt; loadAll( Iterable&lt;? extends Integer&gt; keys )       throws CacheLoaderException {      // Create the resulting map       Map&lt;Integer, User&gt; loaded = new HashMap&lt;Integer, User&gt;();     // For every key in the given set of keys     for ( Integer key : keys ) {       // Try to retrieve the user       User user = userDao.findUserById( key );       // If user is not found do not add the key to the result set       if ( user != null ) {         loaded.put( key, user );       }     }     return loaded;   } } ```  The implementation is quite straight forward. An important note is that any kind of exception has to be wrapped into `javax.cache.integration.CacheLoaderException`.  "
});



documentTitles["jcache-apicachewriter.html#cachewriter"] = "CacheWriter";
index.add({
    url: "jcache-apicachewriter.html#cachewriter",
    title: "CacheWriter",
    body: "### CacheWriter  A `javax.cache.integration.CacheWriter` is used to update an external backend resource. If the cache is configured to be `write-through` this process is executed transparently to the users code otherwise at the current state there is no way to trigger writing changed entries to the external resource to a user defined point in time.  If bulk operations throw an exception, `java.util.Collection` has to be cleaned of all successfully written keys so the cache implementation can determine what keys are written and can be applied to the cache state.  ```java public class UserCacheWriter     implements CacheWriter&lt;Integer, User&gt;, Serializable {    private final UserDao userDao;    public UserCacheWriter( UserDao userDao ) {     // Store the dao instance created externally     this.userDao = userDao;   }    @Override   public void write( Cache.Entry&lt;? extends Integer, ? extends User&gt; entry )       throws CacheWriterException {      // Store the user using the dao     userDao.storeUser( entry.getKey(), entry.getValue() );   }    @Override   public void writeAll( Collection&lt;Cache.Entry&lt;...&gt;&gt; entries )       throws CacheWriterException {      // Retrieve the iterator to clean up the collection from     // written keys in case of an exception     Iterator&lt;Cache.Entry&lt;...&gt;&gt; iterator = entries.iterator();     while ( iterator.hasNext() ) {       // Write entry using dao       write( iterator.next() );       // Remove from collection of keys       iterator.remove();     }   }    @Override   public void delete( Object key ) throws CacheWriterException {     // Test for key type     if ( !( key instanceof Integer ) ) {       throw new CacheWriterException( \&quot;Illegal key type\&quot; );     }     // Remove user using dao     userDao.removeUser( ( Integer ) key );   }    @Override   public void deleteAll( Collection&lt;?&gt; keys ) throws CacheWriterException {     // Retrieve the iterator to clean up the collection from     // written keys in case of an exception     Iterator&lt;?&gt; iterator = keys.iterator();     while ( iterator.hasNext() ) {       // Write entry using dao       delete( iterator.next() );       // Remove from collection of keys       iterator.remove();     }   } } ```  Again the implementation is pretty straight forward and also as above all exceptions thrown by the external resource, like `java.sql.SQLException` has to be wrapped into a `javax.cache.integration.CacheWriterException`. Note this is a different exception from the one thrown by `CacheLoader`.  "
});



documentTitles["jcache-ep.html#jcache-entryprocessor"] = "JCache EntryProcessor";
index.add({
    url: "jcache-ep.html#jcache-entryprocessor",
    title: "JCache EntryProcessor",
    body: "### JCache EntryProcessor  With `javax.cache.processor.EntryProcessor`, you can apply an atomic function to a cache entry. In a distributed environment like Hazelcast, you can move the mutating function to the node that owns the key. If the value object is big, it might prevent traffic by sending the object to the mutator and sending it back to the owner to update it.  By default, Hazelcast JCache sends the complete changed value to the backup partition. Again, this can cause a lot of traffic if the object is big. Another option to prevent this is part of the Hazelcast ICache extension. Further information is available at [BackupAwareEntryProcessor](#backupawareentryprocessor).  An arbitrary number of arguments can be passed to the `Cache::invoke` and `Cache::invokeAll` methods. All of those arguments need to be fully serializable because in a distributed environment like Hazelcast, it is very likely that these arguments have to be passed around the cluster.  ```java public class UserUpdateEntryProcessor     implements EntryProcessor&lt;Integer, User, User&gt; {    @Override   public User process( MutableEntry&lt;Integer, User&gt; entry, Object... arguments )       throws EntryProcessorException {      // Test arguments length     if ( arguments.length &lt; 1 ) {       throw new EntryProcessorException( \&quot;One argument needed: username\&quot; );     }      // Get first argument and test for String type     Object argument = arguments[0];     if ( !( argument instanceof String ) ) {       throw new EntryProcessorException(           \&quot;First argument has wrong type, required java.lang.String\&quot; );     }      // Retrieve the value from the MutableEntry     User user = entry.getValue();      // Retrieve the new username from the first argument     String newUsername = ( String ) arguments[0];      // Set the new username     user.setUsername( newUsername );      // Set the changed user to mark the entry as dirty     entry.setValue( user );      // Return the changed user to return it to the caller     return user;   } } ```  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *By executing the bulk `Cache::invokeAll` operation, atomicity is only guaranteed for a single cache entry. No transactional rules are applied to the bulk operation.*  ![image](images/NoteSmall.jpg) ***NOTE:*** *JCache `EntryProcessor` implementations are not allowed to call `javax.cache.Cache` methods; this prevents operations from deadlocking between different calls.* &lt;br&gt;&lt;/br&gt;  In addition, when using a `Cache::invokeAll` method, a `java.util.Map` is returned that maps the key to its `javax.cache.processor.EntryProcessorResult`, and which itself wraps the actual result or a thrown `javax.cache.processor.EntryProcessorException`.  "
});



documentTitles["jcache-cacheentrylistener.html#cacheentrylistener"] = "CacheEntryListener";
index.add({
    url: "jcache-cacheentrylistener.html#cacheentrylistener",
    title: "CacheEntryListener",
    body: "### CacheEntryListener  The `javax.cache.event.CacheEntryListener` implementation is straight forward. `CacheEntryListener` is a super-interface which is used as a marker for listener classes in JCache. The specification brings a set of sub-interfaces.  - `CacheEntryCreatedListener`: Fires after a cache entry is added (even on read-through by a `CacheLoader`) to the cache. - `CacheEntryUpdatedListener`: Fires after an already existing cache entry was updates. - `CacheEntryRemovedListener`: Fires after a cache entry was removed (not expired) from the cache. - `CacheEntryExpiredListener`: Fires after a cache entry has been expired. Expiry does not have to be parallel process, it is only required to be executed on the keys that are requested by `Cache::get` and some other operations. For a full table of expiry please see the [https://www.jcp.org/en/jsr/detail?id=107](https://www.jcp.org/en/jsr/detail?id=107) point 6.    To configure `CacheEntryListener`, add a `javax.cache.configuration.CacheEntryListenerConfiguration` instance to the JCache configuration class, as seen in the above example configuration. In addition listeners can be configured to be executed synchronously (blocking the calling thread) or asynchronously (fully running in parallel).  In this example application, the listener is implemented to print event information on the console. That visualizes what is going on in the cache.  ```java public class UserCacheEntryListener     implements CacheEntryCreatedListener&lt;Integer, User&gt;,         CacheEntryUpdatedListener&lt;Integer, User&gt;,         CacheEntryRemovedListener&lt;Integer, User&gt;,         CacheEntryExpiredListener&lt;Integer, User&gt; {    @Override   public void onCreated( Iterable&lt;CacheEntryEvent&lt;...&gt;&gt; cacheEntryEvents )       throws CacheEntryListenerException {      printEvents( cacheEntryEvents );   }    @Override   public void onUpdated( Iterable&lt;CacheEntryEvent&lt;...&gt;&gt; cacheEntryEvents )       throws CacheEntryListenerException {      printEvents( cacheEntryEvents );   }    @Override   public void onRemoved( Iterable&lt;CacheEntryEvent&lt;...&gt;&gt; cacheEntryEvents )       throws CacheEntryListenerException {      printEvents( cacheEntryEvents );   }    @Override   public void onExpired( Iterable&lt;CacheEntryEvent&lt;...&gt;&gt; cacheEntryEvents )       throws CacheEntryListenerException {      printEvents( cacheEntryEvents );   }    private void printEvents( Iterable&lt;CacheEntryEvent&lt;...&gt;&gt; cacheEntryEvents ) {     Iterator&lt;CacheEntryEvent&lt;...&gt;&gt; iterator = cacheEntryEvents.iterator();     while ( iterator.hasNext() ) {       CacheEntryEvent&lt;...&gt; event = iterator.next();       System.out.println( event.getEventType() );     }   } } ```  "
});



documentTitles["jcache-expirepolicy.html#expirepolicy"] = "ExpirePolicy";
index.add({
    url: "jcache-expirepolicy.html#expirepolicy",
    title: "ExpirePolicy",
    body: "### ExpirePolicy  In JCache, `javax.cache.expiry.ExpirePolicy` implementations are used to automatically expire cache entries based on different rules.  Expiry timeouts are defined using `javax.cache.expiry.Duration`, which is a pair of `java.util.concurrent.TimeUnit`, which describes a time unit and a long, defining the timeout value. The minimum allowed `TimeUnit` is `TimeUnit.MILLISECONDS`. The long value `durationAmount` must be equal or greater than zero. A value of zero (or `Duration.ZERO`) indicates that the cache entry expires immediately.  By default, JCache delivers a set of predefined expiry strategies in the standard API.  - `AccessedExpiryPolicy`: Expires after a given set of time measured from creation of the cache entry, the expiry timeout is updated on accessing the key. - `CreatedExpiryPolicy`: Expires after a given set of time measured from creation of the cache entry, the expiry timeout is never updated. - `EternalExpiryPolicy`: Never expires, this is the default behavior, similar to `ExpiryPolicy` to be set to null. - `ModifiedExpiryPolicy`: Expires after a given set of time measured from creation of the cache entry, the expiry timeout is updated on updating the key. - `TouchedExpiryPolicy`: Expires after a given set of time measured from creation of the cache entry, the expiry timeout is updated on accessing or updating the key.  Because `EternalExpirePolicy` does not expire cache entries, it is still possible to evict values from memory if an underlying `CacheLoader` is defined.  "
});



documentTitles["jcache-icache.html#hazelcast-jcache-extension-icache"] = "Hazelcast JCache Extension - ICache";
index.add({
    url: "jcache-icache.html#hazelcast-jcache-extension-icache",
    title: "Hazelcast JCache Extension - ICache",
    body: "## Hazelcast JCache Extension - ICache  Hazelcast provides extension methods to Cache API through the interface `com.hazelcast.cache.ICache`.  It has two sets of extensions:  * Asynchronous version of all cache operations. * Cache operations with custom `ExpiryPolicy` parameter to apply on that specific operation.  "
});

documentTitles["jcache-icache.html#scopes-and-namespaces"] = "Scopes and Namespaces";
index.add({
    url: "jcache-icache.html#scopes-and-namespaces",
    title: "Scopes and Namespaces",
    body: "### Scopes and Namespaces  As mentioned before, a `CacheManager` can be scoped in the case of client to connect to multiple clusters, or in the case of an embedded node, a `CacheManager` can be scoped to join different clusters at the same time. This process is called scoping. To apply it, request a `CacheManager` by passing a `java.net.URI` instance to `CachingProvider::getCacheManager`. The `java.net.URI` instance must point to either a Hazelcast configuration or to the name of a named `com.hazelcast.core.HazelcastInstance` instance.  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *Multiple requests for the same `java.net.URI` result in returning a `CacheManager` instance that shares the same `HazelcastInstance` as the `CacheManager` returned by the previous call.* &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["jcache-icache.html#configuration-scope"] = "Configuration Scope";
index.add({
    url: "jcache-icache.html#configuration-scope",
    title: "Configuration Scope",
    body: "#### Configuration Scope  To connect or join different clusters, apply a configuration scope to the `CacheManager`. If the same `URI` is used to request a `CacheManager` that was created previously, those `CacheManager`s share the same underlying `HazelcastInstance`.  To apply a configuration scope, pass in the path of the configuration file using the location property `HazelcastCachingProvider#HAZELCAST_CONFIG_LOCATION` (which resolves to `hazelcast.config.location`) as a mapping inside a `java.util.Properties` instance to the `CachingProvider#getCacheManager(uri, classLoader, properties)` call.  Here is an example of using Configuration Scope.  ```java CachingProvider cachingProvider = Caching.getCachingProvider();  // Create Properties instance pointing to a Hazelcast config file Properties properties = new Properties(); properties.setProperty( HazelcastCachingProvider.HAZELCAST_CONFIG_LOCATION,     \&quot;classpath://my-configs/scoped-hazelcast.xml\&quot; );  URI cacheManagerName = new URI( \&quot;my-cache-manager\&quot; ); CacheManager cacheManager = cachingProvider     .getCacheManager( cacheManagerName, null, properties ); ```  Here is an example using `HazelcastCachingProvider::propertiesByLocation` helper method.  ```java CachingProvider cachingProvider = Caching.getCachingProvider();  // Create Properties instance pointing to a Hazelcast config file String configFile = \&quot;classpath://my-configs/scoped-hazelcast.xml\&quot;; Properties properties = HazelcastCachingProvider     .propertiesByLocation( configFile );  URI cacheManagerName = new URI( \&quot;my-cache-manager\&quot; ); CacheManager cacheManager = cachingProvider     .getCacheManager( cacheManagerName, null, properties ); ```  The retrieved `CacheManager` is scoped to use the `HazelcastInstance` that was just created and was configured using the given XML configuration file.  Available protocols for config file URL include `classpath://` to point to a classpath location, `file://` to point to a filesystem location, `http://` an `https://` for remote web locations. In addition, everything that does not specify a protocol is recognized as a placeholder that can be configured using a system property.  ```java String configFile = \&quot;my-placeholder\&quot;; Properties properties = HazelcastCachingProvider     .propertiesByLocation( configFile ); ```  Can be set on the command line by:  ```plain -Dmy-placeholder=classpath://my-configs/scoped-hazelcast.xml ```  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *No check is performed to prevent creating multiple `CacheManager`s with the same cluster configuration on different configuration files. If the same cluster is referred from different configuration files, multiple cluster members or clients are created.*  ![image](images/NoteSmall.jpg) ***NOTE:*** *The configuration file location will not be a part of the resulting identity of the `CacheManager`. An attempt to create a `CacheManager` with a different set of properties but an already used name will result in undefined behavior.* &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["jcache-icache.html#named-instance-scope"] = "Named Instance Scope";
index.add({
    url: "jcache-icache.html#named-instance-scope",
    title: "Named Instance Scope",
    body: "#### Named Instance Scope  A `CacheManager` can be bound to an existing and named `HazelcastInstance` instance. This requires that the instance was created using a `com.hazelcast.config.Config` and requires that an `instanceName` be set. Multiple `CacheManager`s created using an equal `java.net.URI` will share the same `HazelcastInstance`.  A named scope is applied nearly the same way as the configuration scope: pass in the instance name using the `HazelcastCachingProvider#HAZELCAST_INSTANCE_NAME` (which resolves to `hazelcast.instance.name`) property as a mapping inside a `java.util.Properties` instance to the `CachingProvider#getCacheManager(uri, classLoader, properties)` call.  Here is an example of Named Instance Scope.  ```java Config config = new Config(); config.setInstanceName( \&quot;my-named-hazelcast-instance\&quot; ); // Create a named HazelcastInstance Hazelcast.newHazelcastInstance( config );  CachingProvider cachingProvider = Caching.getCachingProvider();  // Create Properties instance pointing to a named HazelcastInstance Properties properties = new Properties(); properties.setProperty( HazelcastCachingProvider.HAZELCAST_INSTANCE_NAME,      \&quot;my-named-hazelcast-instance\&quot; );  URI cacheManagerName = new URI( \&quot;my-cache-manager\&quot; ); CacheManager cacheManager = cachingProvider     .getCacheManager( cacheManagerName, null, properties ); ```  Here is an example using `HazelcastCachingProvider::propertiesByInstanceName` method.  ```java Config config = new Config(); config.setInstanceName( \&quot;my-named-hazelcast-instance\&quot; ); // Create a named HazelcastInstance Hazelcast.newHazelcastInstance( config );  CachingProvider cachingProvider = Caching.getCachingProvider();  // Create Properties instance pointing to a named HazelcastInstance Properties properties = HazelcastCachingProvider     .propertiesByInstanceName( \&quot;my-named-hazelcast-instance\&quot; );  URI cacheManagerName = new URI( \&quot;my-cache-manager\&quot; ); CacheManager cacheManager = cachingProvider     .getCacheManager( cacheManager, null, properties ); ```  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *The `instanceName` will not be a part of the resulting identity of the `CacheManager`. An attempt to create a `CacheManager` with a different set of properties but an already used name will result in undefined behavior.* &lt;br&gt;&lt;/br&gt;   "
});

documentTitles["jcache-icache.html#namespaces"] = "Namespaces";
index.add({
    url: "jcache-icache.html#namespaces",
    title: "Namespaces",
    body: "#### Namespaces  The `java.net.URI`s that don't use the above mentioned Hazelcast specific schemes are recognized as namespacing. Those `CacheManager`s share the same underlying default `HazelcastInstance` created (or set) by the `CachingProvider`, but they cache with the same names but differently namespaces on `CacheManager` level, and therefore won't share the same data. This is useful where multiple applications might share the same Hazelcast JCache implementation (e.g. on application or OSGi servers) but are developed by independent teams. To prevent interfering on caches using the same name, every application can use its own namespace when retrieving the `CacheManager`.  Here is an example of using namespacing.  ```java CachingProvider cachingProvider = Caching.getCachingProvider();  URI nsApp1 = new URI( \&quot;application-1\&quot; ); CacheManager cacheManagerApp1 = cachingProvider.getCacheManager( nsApp1, null );  URI nsApp2 = new URI( \&quot;application-2\&quot; ); CacheManager cacheManagerApp2 = cachingProvider.getCacheManager( nsApp2, null ); ```  That way both applications share the same `HazelcastInstance` instance but not the same caches.  "
});



documentTitles["jcache-retrievingicacheinstance.html#retrieving-an-icache-instance"] = "Retrieving an ICache Instance";
index.add({
    url: "jcache-retrievingicacheinstance.html#retrieving-an-icache-instance",
    title: "Retrieving an ICache Instance",
    body: "### Retrieving an ICache Instance  Besides [Scopes and Namespaces](#scopes-and-namespaces), which are implemented using the URI feature of the specification, all other extended operations are required to retrieve the `com.hazelcast.cache.ICache` interface instance from the JCache `javax.cache.Cache` instance. For Hazelcast, both interfaces are implemented on the same object instance. It is recommended that you stay with the specification way to retrieve the `ICache` version, since `ICache` might be subject to change without notification.  To retrieve or unwrap the `ICache` instance, you can execute the following code snippet:  ```java CachingProvider cachingProvider = Caching.getCachingProvider(); CacheManager cacheManager = cachingProvider.getCacheManager(); Cache&lt;Object, Object&gt; cache = cacheManager.getCache( ... );  ICache&lt;Object, Object&gt; unwrappedCache = cache.unwrap( ICache.class ); ```  After unwrapping the `Cache` instance into an `ICache` instance, you have access to all of the following operations, e.g. [Async Operations](#async-operations) and [Additional Methods](#additional-methods).  "
});



documentTitles["jcache-icacheconf.html#icache-configuration"] = "ICache Configuration";
index.add({
    url: "jcache-icacheconf.html#icache-configuration",
    title: "ICache Configuration",
    body: "### ICache Configuration  As mentioned in the [JCache Declarative Configuration section](#jcache-declarative-configuration), the Hazelcast ICache extension offers additional configuration properties over the default JCache configuration. These additional properties include internal storage format, backup counts and eviction policy.  The declarative configuration for ICache is a superset of the previously discussed JCache configuration:  ```xml &lt;cache&gt;   &lt;!-- ... default cache configuration goes here ... --&gt;   &lt;backup-count&gt;1&lt;/backup-count&gt;   &lt;async-backup-count&gt;1&lt;/async-backup-count&gt;   &lt;in-memory-format&gt;BINARY&lt;/in-memory-format&gt;   &lt;eviction size=\&quot;10000\&quot; max-size-policy=\&quot;ENTRY-COUNT\&quot; eviction-policy=\&quot;LRU\&quot; /&gt; &lt;/cache&gt; ```  - `backup-count`: The number of synchronous backups. Those backups are executed before the mutating cache operation is finished. The mutating operation is blocked. `backup-count` default value is 1. - `async-backup-count`: The number of asynchronous backups. Those backups are executed asynchronously so the mutating operation is not blocked and it will be done immediately. `async-backup-count` default value is 0.   - `in-memory-format`: Defines the internal storage format. For more information, please see the [In Memory Format section](#in-memory-format). Default is `BINARY`. - `eviction`: Defines the used eviction strategies and sizes for the cache. For more information on eviction, please see the [JCache Eviction](#jcache-eviction).   - `size`: The maximum number of records or maximum size in bytes depending on the `max-size-policy` property. Size can be any integer between `0` and `Integer.MAX_VALUE`. Default max-size-policy is `ENTRY_COUNT` and default size is `10.000`.   - `max-size-policy`: The size policy property defines a maximum size. If maximum size is reached, the cache is evicted based on the eviction policy. Default max-size-policy is `ENTRY_COUNT` and default size is `10.000`. The following eviction policies are available:     - `ENTRY_COUNT`: Maximum number of cache entries in the cache. **Available on heap based cache record store only.**     - `USED_NATIVE_MEMORY_SIZE`: Maximum used native memory size in megabytes for each instance. **Available on High-Density Memory cache record store only.**     - `USED_NATIVE_MEMORY_PERCENTAGE`: Maximum used native memory size percentage for each instance. **Available on High-Density Memory cache record store only.**     - `FREE_NATIVE_MEMORY_SIZE`: Maximum free native memory size in megabytes for each instance. **Available on High-Density Memory cache record store only.**     - `FREE_NATIVE_MEMORY_PERCENTAGE`: Maximum free native memory size percentage for each instance. **Available on High-Density Memory cache record store only.**   - `eviction-policy`: The defined eviction policy to compare values with to find the best matching eviction candidate. Default is `LRU`.     - `LRU`: Less Recently Used - finds the best eviction candidate based on the lastAccessTime.     - `LFU`: Less Frequently Used - finds the best eviction candidate based on the number of hits.  Since `javax.cache.configuration.MutableConfiguration` misses the above additional configuration properties, Hazelcast ICache extension provides an extended configuration class called `com.hazelcast.config.CacheConfig`. This class is an implementation of `javax.cache.configuration.CompleteConfiguration` and all the properties shown above can be configured using its corresponding setter methods.  "
});



documentTitles["jcache-asyncoperations.html#async-operations"] = "Async Operations";
index.add({
    url: "jcache-asyncoperations.html#async-operations",
    title: "Async Operations",
    body: "### Async Operations  As another addition of Hazelcast ICache over the normal JCache specification, Hazelcast provides asynchronous versions of almost all methods, returning a `com.hazelcast.core.ICompletableFuture`. By using these methods and the returned future objects, you can use JCache in a reactive way by registering zero or more callbacks on the future to prevent blocking the current thread.   Name of the asynchronous versions of the methods append the phrase `Async` to the method name. Sample code is shown below using the method `putAsync()`.  ```java ICache&lt;Integer, String&gt; unwrappedCache = cache.unwrap( ICache.class ); ICompletableFuture&lt;String&gt; future = unwrappedCache.putAsync( 1, \&quot;value\&quot; ); future.andThen( new ExecutionCallback&lt;String&gt;() {   public void onResponse( String response ) {     System.out.println( \&quot;Previous value: \&quot; + response );   }    public void onFailure( Throwable t ) {     t.printStackTrace();   } } ); ```  Following methods are available in asynchronous versions:   - `get(key)`:   - `getAsync(key)`   - `getAsync(key, expiryPolicy)`  - `put(key, value)`:   - `putAsync(key, value)`   - `putAsync(key, value, expiryPolicy)`  - `putIfAbsent(key, value)`:   - `putIfAbsentAsync(key, value)`   - `putIfAbsentAsync(key, value, expiryPolicy)`  - `getAndPut(key, value)`:   - `getAndPutAsync(key, value)`   - `getAndPutAsync(key, value, expiryPolicy)`  - `remove(key)`:   - `removeAsync(key)`  - `remove(key, value)`:   - `removeAsync(key, value)`  - `getAndRemove(key)`:   - `getAndRemoveAsync(key)`  - `replace(key, value)`:   - `replaceAsync(key, value)`   - `replaceAsync(key, value, expiryPolicy)`  - `replace(key, oldValue, newValue)`:   - `replaceAsync(key, oldValue, newValue)`   - `replaceAsync(key, oldValue, newValue, expiryPolicy)`  - `getAndReplace(key, value)`:   - `getAndReplaceAsync(key, value)`   - `getAndReplaceAsync(key, value, expiryPolicy)`  The methods with a given `javax.cache.expiry.ExpiryPolicy` are further discussed in the [Custom ExpiryPolicy section](#custom-expirypolicy).  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *Asynchronous versions of the methods are not compatible with synchronous events.* &lt;br&gt;&lt;/br&gt;  "
});



documentTitles["jcache-customexpirypolicy.html#custom-expirypolicy"] = "Custom ExpiryPolicy";
index.add({
    url: "jcache-customexpirypolicy.html#custom-expirypolicy",
    title: "Custom ExpiryPolicy",
    body: "### Custom ExpiryPolicy  The JCache specification has an option to configure a single `ExpiryPolicy` per cache. Hazelcast ICache extension offers the possibility to define a custom `ExpiryPolicy` per key by providing a set of method overloads with an `expirePolicy` parameter, as in the list of asynchronous methods in the [Async Methods section](#async-methods). This means that custom expiry policies can passed to a cache operation.  Here is how an `ExpirePolicy` is set on JCache configuration:  ```java CompleteConfiguration&lt;String, String&gt; config =     new MutableConfiguration&lt;String, String&gt;()         setExpiryPolicyFactory(             AccessedExpiryPolicy.factoryOf( Duration.ONE_MINUTE )         ); ```  To pass a custom `ExpirePolicy`, a set of overloads is provided and can be used as shown in the following code snippet:  ```java ICache&lt;Integer, String&gt; unwrappedCache = cache.unwrap( ICache.class ); unwrappedCache.put( 1, \&quot;value\&quot;, new AccessedExpiryPolicy( Duration.ONE_DAY ) ); ```  The `ExpirePolicy` instance can be pre-created, cached, and re-used, but only for each cache instance. This is because `ExpirePolicy` implementations can be marked as `java.io.Closeable`. The following list shows the provided method overloads over `javax.cache.Cache` by `com.hazelcast.cache.ICache` featuring the `ExpiryPolicy` parameter:   - `get(key)`:   - `get(key, expiryPolicy)`  - `getAll(keys)`:   - `getAll(keys, expirePolicy)`  - `put(key, value)`:   - `put(key, value, expirePolicy)`  - `getAndPut(key, value)`:   - `getAndPut(key, value, expirePolicy)`  - `putAll(map)`:   - `putAll(map, expirePolicy)`  - `putIfAbsent(key, value)`:   - `putIfAbsent(key, value, expirePolicy)`  - `replace(key, value)`:   - `replace(key, value, expirePolicy)`  - `replace(key, oldValue, newValue)`:   - `replace(key, oldValue, newValue, expirePolicy)`  - `getAndReplace(key, value)`:   - `getAndReplace(key, value, expirePolicy)`  Asynchronous method overloads are not listed here. Please see the [Async Operations section](#async-operations) for the list of asynchronous method overloads.  "
});



documentTitles["jcache-eviction.html#jcache-eviction"] = "JCache Eviction";
index.add({
    url: "jcache-eviction.html#jcache-eviction",
    title: "JCache Eviction",
    body: "### JCache Eviction  Growing to an infinite size is in general not the expected behavior of caches. Implementing an [expiry policy](#expirepolicy) is one way to prevent the infinite growth but sometimes it is hard to define a meaningful expiration timeout. Therefore, Hazelcast JCache provides the eviction feature. Eviction offers the possibility to remove entries based on the cache size or amount of used memory (Hazelcast Enterprise Only) and not based on timeouts.  "
});

documentTitles["jcache-eviction.html#general-information"] = "General information";
index.add({
    url: "jcache-eviction.html#general-information",
    title: "General information",
    body: "#### General information  Since a cache is designed for high throughput and fast reads, a lot of effort went into designing the eviction system as predictable as possible. All built-in implementations provide an amortized O(1) runtime. The default operation runtime is rendered as O(1) but can be faster than the normal runtime cost if the algorithm finds an expired entry while sampling.  Most importantly, in typical production system two common types of caches are found:  - **Reference Caches**: Caches for reference data are normally small and are used to speed up the de-referencing as a lookup table. Those caches are commonly tend to be small and contain a previously known, fixed number of elements (e.g. states of the USA or abbreviations of elements). - **Active DataSet Caches**:  The other type of caches normally caches an active data set. These caches run to their maximum size and evict the oldest or not frequently used entries to keep in memory bounds. They sit in front of a database or HTML generators to cache the latest requested data.  Hazelcast JCache eviction supports both types of caches using a slightly different approach based on the configured maximum size of the cache. For detailed information, please see the [Eviction Algorithm section](#eviction-algorithm).  "
});

documentTitles["jcache-eviction.html#eviction-policies"] = "Eviction Policies";
index.add({
    url: "jcache-eviction.html#eviction-policies",
    title: "Eviction Policies",
    body: "#### Eviction Policies  Hazelcast JCache provides two commonly known eviction policies, LRU and LFU, but loosens the rules for predictable runtime behavior. LRU, normally recognized as `Least Recently Used`, is implemented as `Less Recently Used`, and LFU known as `Least Frequently Used` is implemented as `Less Frequently Used`. The details about this difference is explained in the [Eviction Algorithm section](#eviction-algorithm).  Eviction Policies are configured by providing the corresponding abbreviation to the configuration as shown in the [ICache Configuration section](#icache-configuration). As already mentioned, two built-in policies are available:  To configure the use of the LRU (Less Recently Used) policy:  ```xml &lt;eviction size=\&quot;10000\&quot; max-size-policy=\&quot;ENTRY-COUNT\&quot; eviction-policy=\&quot;LRU\&quot; /&gt; ```  And to configure the use of the LFU (Less Frequently Used) policy:  ```xml &lt;eviction size=\&quot;10000\&quot; max-size-policy=\&quot;ENTRY-COUNT\&quot; eviction-policy=\&quot;LFU\&quot; /&gt; ```  The default eviction policy is LRU. Therefore, Hazelcast JCache does not offer the possibility to perform no eviction.  "
});

documentTitles["jcache-eviction.html#eviction-strategy"] = "Eviction Strategy";
index.add({
    url: "jcache-eviction.html#eviction-strategy",
    title: "Eviction Strategy",
    body: "#### Eviction Strategy  Eviction strategies implement the logic of selecting one or more eviction candidates from the underlying storage implementation and passing them to the eviction policies. Hazelcast JCache provides an amortized O(1) cost implementation for this strategy to select a fixed number of samples from the current partition that it is executed against.  The default implementation is `com.hazelcast.cache.impl.eviction.impl.strategy.sampling.SamplingBasedEvictionStrategy` which, as mentioned, samples random 15 elements. A detailed description of the algorithm will be explained in the next section.  "
});

documentTitles["jcache-eviction.html#eviction-algorithm"] = "Eviction Algorithm";
index.add({
    url: "jcache-eviction.html#eviction-algorithm",
    title: "Eviction Algorithm",
    body: "#### Eviction Algorithm  The Hazelcast JCache eviction algorithm is specially designed for the use case of high performance caches and with predictability in mind. The built-in implementations provide an amortized O(1) runtime and therefore provide a highly predictable runtime behavior which does not rely on any kind of background threads to handle the eviction. Therefore, the algorithm takes some assumptions into account to prevent network operations and concurrent accesses.  As an explanation of how the algorithm works, let's examine the following flowchart step by step.  ![](images/eviction/eviction-flowchart.jpg)  1. A new cache is created. Without any special settings, the eviction is configured to kick in when the **cache** exceeds 10.000 elements and an LRU (Less Recently Used) policy is set up. 2. The user puts in a new entry (e.g. a key-value pair). 3. For every put, the eviction strategy evaluates the current cache size and decides if an eviction is necessary or not. If not the entry is stored in step 10. 4. If eviction is required, a new sampling is started. The built-in sampler is implemented as an lazy iterator. 5. The sampling algorithm selects a random sample from the underlying data storage. 6. The eviction strategy tests the sampled entry to already be expired (lazy expiration). If expired, the sampling stops and the entry is removed in step 9. 7. If not yet expired, the entry (eviction candidate) is compared to the last best matching candidate (based on the eviction policy) and the new best matching candidate is remembered. 8. The sampling is repeated for 15 times and then the best matching eviction candidate is returned to the eviction strategy. 9. The expired or best matching eviction candidate is removed from the underlying data storage. 10. The new put entry is stored. 11. The put operation returns to the user.  As seen by the flowchart, the general eviction operation is easy. As long as the cache does not reach its maximum capacity or you execute updates (put/replace), no eviction is executed.  To prevent network operations and concurrent access, as mentioned earlier, the cache size is estimated based on the size of the currently handled partition. Due to the imbalanced partitions, the single partitions might start to evict earlier than the other partitions.  As mentioned in the [General Information section](#general-information), typically two types of caches are found in the production systems. For small caches, referred to as *Reference Caches*, the eviction algorithm has a special set of rules depending on the maximum configured cache size. Please see the [Reference Caches section](#reference-caches) for details. The other type of cache is referred to as *Active DataSet Cache*, which in most cases makes heavy use of the eviction to keep the most active data set in the memory. Those kinds of caches using a very simple but efficient way to estimate the cluster-wide cache size.  All of the following calculations have a well known set of fixed variables:  - `GlobalCapacity`: The user defined maximum cache size (cluster-wide). - `PartitionCount`: The number of partitions in the cluster (defaults to 271). - `BalancedPartitionSize`: The number of elements in a balanced partition state, `BalancedPartitionSize := GlobalCapacity / PartitionCount`. - `Deviation`: An approximated standard deviation (tests proofed it to be pretty near), `Deviation := sqrt(BalancedPartitionSize)`.  "
});

documentTitles["jcache-eviction.html#reference-caches"] = "Reference Caches";
index.add({
    url: "jcache-eviction.html#reference-caches",
    title: "Reference Caches",
    body: "##### Reference Caches  A Reference Cache is typically small and the number of elements to store in the reference caches is normally  known prior to creating the cache. Typical examples of reference caches are lookup tables for abbreviations or the states of a country. They tend to have a fixed but small element number and the eviction is an unlikely event and rather undesirable behavior.  Since an imbalanced partition is the worst problem in the small and mid-sized caches than for the caches with millions of entries, the normal estimation rule (as discussed in a bit) is not applied to these kinds of caches. To prevent unwanted eviction on the small and mid-sized caches, Hazelcast implements a special set of rules to estimate the cluster size.  To adjust the imbalance of partitions as found in the typical runtime, the actual calculated maximum cache size (as known as the eviction threshold) is slightly higher than the user defined size. That means more elements can be stored into the cache than expected by the user. This needs to be taken into account especially for large objects, since those can easily exceed the expected memory consumption!  **Small caches:**  If a cache is configured with no more than `4.000` element, this cache is considered to be a small cache. The actual partition size is derived from the number of elements (`GlobalCapacity`) and the deviation using the following formula:  ```plain MaxPartitionSize := Deviation * 5 + BalancedPartitionSize ```  This formula ends up with big partition sizes which summed up exceed the expected maximum cache size (set by the user),  but since the small caches typically have a well known maximum number of elements, this is not a big issue. Only if the small caches are used for a use case other than using it as a reference cache, this needs to be taken into account.  **Mid-sized caches**  A mid-sized cache is defined as a cache with a maximum number of elements that is bigger than `4.000` but not bigger than `1.000.000` elements. The calculation of mid-sized caches is similar to that of the small caches but with a different multiplier. To calculate the maximum number of elements per partition, the following formula is used:  ```plain MaxPartitionSize := Deviation * 3 + BalancedPartitionSize ```  "
});

documentTitles["jcache-eviction.html#active-dataset-caches"] = "Active DataSet Caches";
index.add({
    url: "jcache-eviction.html#active-dataset-caches",
    title: "Active DataSet Caches",
    body: "##### Active DataSet Caches  For large caches, where the maximum cache size is bigger than `1.000.000` elements, there is no additional calculation needed. The maximum partition size is considered to be equal to `BalancedPartitionSize` since statistically big partitions are expected to almost balance themselves. Therefore, the formula is as easy as the following:  ```plain MaxPartitionSize := BalancedPartitionSize ```  "
});

documentTitles["jcache-eviction.html#cache-size-estimation"] = "Cache size estimation";
index.add({
    url: "jcache-eviction.html#cache-size-estimation",
    title: "Cache size estimation",
    body: "##### Cache size estimation  As mentioned earlier, Hazelcast JCache provides an estimation algorithm to prevent cluster-wide network operations, concurrent access to other partitions and background tasks. It also offers a highly predictable operation runtime when the eviction is necessary.  The estimation algorithm is based on the previously calculated maximum partition size (please see the [Reference Caches section](#reference-caches) and [Active DataSet Caches section](#active-dataset-caches)) and is calculated against the current partition only.  The algorithm to reckon the number of stored entries in the cache (cluster-wide) and if the eviction is necessary is shown in the following pseudo-code example:  ```plain RequiresEviction[Boolean] := CurrentPartitionSize &gt;= MaxPartitionSize ``` "
});



documentTitles["jcache-additionalmethods.html#additional-methods"] = "Additional Methods";
index.add({
    url: "jcache-additionalmethods.html#additional-methods",
    title: "Additional Methods",
    body: "### Additional Methods  In addition to the operations explained in the [Async Operations section](#async-operations) and [Custom ExpiryPolicy section](#custom-expirypolicy), Hazelcast ICache also provides a set of convenience methods. These methods are not part of the JCache specification.   - `size()`: Returns the estimated size of the distributed cache.  - `destroy()`: Destroys the cache and removes the data from memory. This is different from the method `javax.cache.Cache::close`.  - `getLocalCacheStatistics()`: Returns a `com.hazelcast.cache.CacheStatistics` instance providing the same statistics data as the JMX beans. This method is not available yet on Hazelcast clients: the exception `java.lang.UnsupportedOperationException` is thrown when you use this method on a Hazelcast client.  "
});



documentTitles["jcache-backupawareep.html#backupawareentryprocessor"] = "BackupAwareEntryProcessor";
index.add({
    url: "jcache-backupawareep.html#backupawareentryprocessor",
    title: "BackupAwareEntryProcessor",
    body: "### BackupAwareEntryProcessor  Another feature, especially interesting for distributed environments like Hazelcast, is the JCache specified `javax.cache.processor.EntryProcessor`. For more general information, please see the [JCache EntryProcessor section](#jcache-entryprocessor).  Since Hazelcast provides backups of cached entries on other nodes, the default way to backup an object changed by an `EntryProcessor` is to serialize the complete object and send it to the backup partition. This can be a huge network overhead for big objects.  Hazelcast offers a sub-interface for `EntryProcessor` called `com.hazelcast.cache.BackupAwareEntryProcessor`. This allows the user to create or pass another `EntryProcessor` to run on backup partitions and apply delta changes to the backup entries.  The backup partition `EntryProcessor` can either be the currently running processor (by returning `this`) or it can be a specialized `EntryProcessor` implementation (other from the currently running one) which does different operations or leaves out operations, e.g. sending emails.  If we again take the `EntryProcessor` example from the demonstration application provided in the [JCache EntryProcessor sectiob](#jcache-entryprocessor), the changed code will look like the following snippet.  ```java public class UserUpdateEntryProcessor     implements BackupAwareEntryProcessor&lt;Integer, User, User&gt; {    @Override   public User process( MutableEntry&lt;Integer, User&gt; entry, Object... arguments )       throws EntryProcessorException {      // Test arguments length     if ( arguments.length &lt; 1 ) {       throw new EntryProcessorException( \&quot;One argument needed: username\&quot; );     }      // Get first argument and test for String type     Object argument = arguments[0];     if ( !( argument instanceof String ) ) {       throw new EntryProcessorException(           \&quot;First argument has wrong type, required java.lang.String\&quot; );     }      // Retrieve the value from the MutableEntry     User user = entry.getValue();      // Retrieve the new username from the first argument     String newUsername = ( String ) arguments[0];      // Set the new username     user.setUsername( newUsername );      // Set the changed user to mark the entry as dirty     entry.setValue( user );      // Return the changed user to return it to the caller     return user;   }    public EntryProcessor&lt;K, V, T&gt; createBackupEntryProcessor() {     return this;   } } ```  You can use the additional method `BackupAwareEntryProcessor::createBackupEntryProcessor` to create or return the `EntryProcessor` implementation to run on the backup partition (in the example above, the same processor again).  &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *For the backup runs, the returned value from the backup processor is ignored and not returned to the user.* &lt;br&gt;&lt;/br&gt;  "
});



documentTitles["jcache-speccompliance.html#jcache-specification-compliance"] = "JCache Specification Compliance";
index.add({
    url: "jcache-speccompliance.html#jcache-specification-compliance",
    title: "JCache Specification Compliance",
    body: "## JCache Specification Compliance  Hazelcast JCache is fully compliant with the JSR 107 TCK (Technology Compatibility Kit), therefore it is officially a JCache implementation. This is tested by running the TCK against the Hazelcast implementation.  You can test Hazelcast JCache for compliance by executing the TCK. Just perform the instructions below:   1. Checkout the TCK from [https://github.com/jsr107/jsr107tck](https://github.com/jsr107/jsr107tck). 2. Change the properties in `tck-parent/pom.xml` as shown below. 3. Run the TCK by `mvn clean install`.   ```xml &lt;properties&gt;   &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;   &lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;    &lt;CacheInvocationContextImpl&gt;     javax.cache.annotation.impl.cdi.CdiCacheKeyInvocationContextImpl   &lt;/CacheInvocationContextImpl&gt;    &lt;domain-lib-dir&gt;${project.build.directory}/domainlib&lt;/domain-lib-dir&gt;   &lt;domain-jar&gt;domain.jar&lt;/domain-jar&gt;     &lt;!-- ################################################################# --&gt;   &lt;!-- Change the following properties on the command line        to override with the coordinates for your implementation--&gt;   &lt;implementation-groupId&gt;com.hazelcast&lt;/implementation-groupId&gt;   &lt;implementation-artifactId&gt;hazelcast&lt;/implementation-artifactId&gt;   &lt;implementation-version&gt;3.4&lt;/implementation-version&gt;    &lt;!-- Change the following properties to your CacheManager and        Cache implementation. Used by the unwrap tests. --&gt;   &lt;CacheManagerImpl&gt;     com.hazelcast.client.cache.impl.HazelcastClientCacheManager   &lt;/CacheManagerImpl&gt;   &lt;CacheImpl&gt;com.hazelcast.cache.ICache&lt;/CacheImpl&gt;   &lt;CacheEntryImpl&gt;     com.hazelcast.cache.impl.CacheEntry   &lt;/CacheEntryImpl&gt;    &lt;!-- Change the following to point to your MBeanServer, so that        the TCK can resolve it. --&gt;   &lt;javax.management.builder.initial&gt;     com.hazelcast.cache.impl.TCKMBeanServerBuilder   &lt;/javax.management.builder.initial&gt;   &lt;org.jsr107.tck.management.agentId&gt;     TCKMbeanServer   &lt;/org.jsr107.tck.management.agentId&gt;   &lt;jsr107.api.version&gt;1.0.0&lt;/jsr107.api.version&gt;    &lt;!-- ################################################################# --&gt; &lt;/properties&gt; ```  This will run the tests using an embedded Hazelcast Member. "
});



documentTitles["integratedclustering.html#integrated-clustering"] = "Integrated Clustering";
index.add({
    url: "integratedclustering.html#integrated-clustering",
    title: "Integrated Clustering",
    body: "# Integrated Clustering  "
});

documentTitles["integratedclustering.html#hibernate-second-level-cache"] = "Hibernate Second Level Cache";
index.add({
    url: "integratedclustering.html#hibernate-second-level-cache",
    title: "Hibernate Second Level Cache",
    body: "## Hibernate Second Level Cache  Hazelcast provides distributed second level cache for your Hibernate entities, collections and queries.   "
});

documentTitles["integratedclustering.html#sample-code-for-hibernate"] = "Sample Code for Hibernate";
index.add({
    url: "integratedclustering.html#sample-code-for-hibernate",
    title: "Sample Code for Hibernate",
    body: "### Sample Code for Hibernate  Please see our [sample application](https://github.com/hazelcast/hazelcast-code-samples/tree/master/hazelcast-integration/hibernate-2ndlevel-cache) for Hibernate Second Level Cache.  "
});

documentTitles["integratedclustering.html#supported-hibernate-versions"] = "Supported Hibernate Versions";
index.add({
    url: "integratedclustering.html#supported-hibernate-versions",
    title: "Supported Hibernate Versions",
    body: "### Supported Hibernate Versions  - hibernate 3.3.x+ - hibernate 4.x  "
});

documentTitles["integratedclustering.html#hibernate-configuration"] = "Hibernate Configuration";
index.add({
    url: "integratedclustering.html#hibernate-configuration",
    title: "Hibernate Configuration",
    body: "### Hibernate Configuration  To configure for Hibernate, add `hazelcast-hibernate3-&lt;`*hazelcastversion*`&gt;.jar` or `hazelcast-hibernate4-&lt;`*hazelcastversion*`&gt;.jar`  into your classpath depending on your Hibernate version.  Then add the following properties into your Hibernate configuration file (e.g. `hibernate.cfg.xml`).  **Enabling the use of second level cache**  ```xml &lt;property name=\&quot;hibernate.cache.use_second_level_cache\&quot;&gt;true&lt;/property&gt; ```  **Hibernate RegionFactory**  -   *HazelcastCacheRegionFactory*  	`HazelcastCacheRegionFactory` uses Hazelcast Distributed Map to cache the data, so all cache operations go through the wire.  	```xml     	&lt;property name=\&quot;hibernate.cache.region.factory_class\&quot;&gt; 	  com.hazelcast.hibernate.HazelcastCacheRegionFactory 	&lt;/property&gt; 	```  -   *HazelcastLocalCacheRegionFactory*  	You can use `HazelcastLocalCacheRegionFactory` which stores data in a local node and sends invalidation messages when an entry is updated/deleted locally.  	```xml 	&lt;property name=\&quot;hibernate.cache.region.factory_class\&quot;&gt; 	  com.hazelcast.hibernate.HazelcastLocalCacheRegionFactory 	&lt;/property&gt; 	```  **Optional Settings**  -   To enable use of query cache:  	```xml 	&lt;property name=\&quot;hibernate.cache.use_query_cache\&quot;&gt;true&lt;/property&gt; 	```  -   To force minimal puts into query cache:  	```xml 	&lt;property name=\&quot;hibernate.cache.use_minimal_puts\&quot;&gt;true&lt;/property&gt; 	``` 	 ![image](images/NoteSmall.jpg) ***NOTE:*** *QueryCache is always LOCAL to the node and never distributed across Hazelcast Cluster.*  "
});

documentTitles["integratedclustering.html#hazelcast-configuration-for-hibernate"] = "Hazelcast Configuration for Hibernate";
index.add({
    url: "integratedclustering.html#hazelcast-configuration-for-hibernate",
    title: "Hazelcast Configuration for Hibernate",
    body: "### Hazelcast Configuration for Hibernate  -   To configure Hazelcast for Hibernate, put the configuration file named `hazelcast.xml` into the root of your classpath. If Hazelcast cannot find `hazelcast.xml`, then it will use the default configuration from `hazelcast.jar`.  -   You can define a custom-named Hazelcast configuration XML file with one of these Hibernate configuration properties.  ```xml &lt;property name=\&quot;hibernate.cache.provider_configuration_file_resource_path\&quot;&gt;   hazelcast-custom-config.xml &lt;/property&gt; ```   ```xml &lt;property name=\&quot;hibernate.cache.hazelcast.configuration_file_path\&quot;&gt;   hazelcast-custom-config.xml &lt;/property&gt; ```  Hazelcast creates a separate distributed map for each Hibernate cache region. You can easily configure these regions via Hazelcast map configuration. You can define **backup**, **eviction**, **TTL** and **Near Cache** properties.  - [Backup Configuration](#map-backups)  - [Eviction And TTL Configuration](#eviction)  - [Near Cache Configuration](#near-cache)  "
});

documentTitles["integratedclustering.html#regionfactory-options"] = "RegionFactory Options";
index.add({
    url: "integratedclustering.html#regionfactory-options",
    title: "RegionFactory Options",
    body: "### RegionFactory Options  "
});

documentTitles["integratedclustering.html#hazelcastcacheregionfactory"] = "HazelcastCacheRegionFactory";
index.add({
    url: "integratedclustering.html#hazelcastcacheregionfactory",
    title: "HazelcastCacheRegionFactory",
    body: "##### HazelcastCacheRegionFactory  `HazelcastCacheRegionFactory` uses standard Hazelcast Distributed Maps. All operations like `get`, `put`, and `remove` will be performed using the Distributed Map logic. The only downside of using `HazelcastCacheRegionFactory` may be the lower performance compared to `HazelcastLocalCacheRegionFactory` since operations are handled as distributed calls.  ![image](images/NoteSmall.jpg) ***NOTE:*** *If you use `HazelcastCacheRegionFactory`, you can see your maps on [Management Center](#management-center).*  With `HazelcastCacheRegionFactory`, all of the following caches are distributed across Hazelcast Cluster.  - Entity Cache - Collection Cache - Timestamp Cache   "
});

documentTitles["integratedclustering.html#hazelcastlocalcacheregionfactory"] = "HazelcastLocalCacheRegionFactory";
index.add({
    url: "integratedclustering.html#hazelcastlocalcacheregionfactory",
    title: "HazelcastLocalCacheRegionFactory",
    body: "##### HazelcastLocalCacheRegionFactory  With `HazelcastLocalCacheRegionFactory`, each cluster member has a local map and each of them is registered to a Hazelcast Topic (ITopic). Whenever a `put` or `remove` operation is performed on a member, an invalidation message is generated on the ITopic and sent to the other members. Those other members remove the related key-value pair on their local maps as soon as they get these invalidation messages. The new value is only updated on this member when a `get` operation runs on that key. In the case of `get` operations, invalidation messages are not generated and reads are performed on the local map.  An illustration of the above logic is shown below.  ![image](images/HZLocalCacheRgnFactory.jpg)  If your operations are mostly reads, then this option gives better performance.  ![image](images/NoteSmall.jpg) ***NOTE:*** *If you use `HazelcastLocalCacheRegionFactory`, you cannot see your maps on [Management Center](#management-center).*  With `HazelcastLocalCacheRegionFactory`, all of the following caches are not distributed and are kept locally in the Hazelcast Node.  - Entity Cache - Collection Cache - Timestamp Cache  Entity and Collection are invalidated on update. When they are updated on a node, an invalidation message is sent to all other nodes in order to remove the entity from their local cache. When needed, each node reads that data from the underlying DB.   Timestamp cache is replicated. On every update, a replication message is sent to all the other nodes.  Eviction support is limited to maximum size of the map (defined by `max-size` configuration element) and TTL only. When maximum size is hit, 20% of the entries will be evicted automatically.      "
});

documentTitles["integratedclustering.html#hazelcast-modes-for-hibernate-usage"] = "Hazelcast Modes for Hibernate Usage";
index.add({
    url: "integratedclustering.html#hazelcast-modes-for-hibernate-usage",
    title: "Hazelcast Modes for Hibernate Usage",
    body: "### Hazelcast Modes for Hibernate Usage  Hibernate 2nd Level Cache can use Hazelcast in two modes: Peer-to-Peer and Client/Server.  "
});

documentTitles["integratedclustering.html#p2p-peer-to-peer"] = "P2P (Peer-to-Peer)";
index.add({
    url: "integratedclustering.html#p2p-peer-to-peer",
    title: "P2P (Peer-to-Peer)",
    body: "##### P2P (Peer-to-Peer)  With P2P mode, each Hibernate deployment launches its own Hazelcast Instance. You can also configure Hibernate to use an existing instance, so instead of creating a new `HazelcastInstance` for each `SessionFactory`, you can use an existing instance by setting the `hibernate.cache.hazelcast.instance_name` Hibernate property to the `HazelcastInstance`'s name. For more information, please see the [Named HazelcastInstance section](#named-hazelcastinstance).  **Disabling shutdown during SessionFactory.close()**  Shutting down `HazelcastInstance` can be disabled during `SessionFactory.close()`. To achieve this set the Hibernate property `hibernate.cache.hazelcast.shutdown_on_session_factory_close` to false. *(In this case Hazelcast property `hazelcast.shutdownhook.enabled` should not be set to false.)* Default value is `true`.   "
});

documentTitles["integratedclustering.html#clientserver"] = "Client/Server";
index.add({
    url: "integratedclustering.html#clientserver",
    title: "Client/Server",
    body: "##### Client/Server  -   You can set up Hazelcast to connect to the cluster as Native Client. Native client is not a member; it connects to one of the cluster members and delegates all cluster wide operations to it. When the relied cluster member dies, client will transparently switch to another live member.  ```xml    &lt;property name=\&quot;hibernate.cache.hazelcast.use_native_client\&quot;&gt;true&lt;/property&gt; ```  To set up Native Client, add the Hazelcast **group-name**, **group-password** and **cluster member address** properties. Native Client will connect to the defined member and will get the addresses of all members in the cluster. If the connected member dies or leaves the cluster, the client will automatically switch to another member in the cluster.  ```xml   &lt;property name=\&quot;hibernate.cache.hazelcast.native_client_address\&quot;&gt;10.34.22.15&lt;/property&gt; &lt;property name=\&quot;hibernate.cache.hazelcast.native_client_group\&quot;&gt;dev&lt;/property&gt; &lt;property name=\&quot;hibernate.cache.hazelcast.native_client_password\&quot;&gt;dev-pass&lt;/property&gt; ```  ![image](images/NoteSmall.jpg) ***NOTE***: *To use Native Client, add `hazelcast-client-&lt;version&gt;.jar` into your classpath. Refer to [Clients](#clients) for more information.*  "
});

documentTitles["integratedclustering.html#hibernate-concurrency-strategies"] = "Hibernate Concurrency Strategies";
index.add({
    url: "integratedclustering.html#hibernate-concurrency-strategies",
    title: "Hibernate Concurrency Strategies",
    body: "### Hibernate Concurrency Strategies  Hibernate has four cache concurrency strategies: *read-only*, *read-write*, *nonstrict-read-write* and *transactional*. Hibernate does not force cache providers to support all those strategies. Hazelcast supports the first three: *read-only*, *read-write*, and *nonstrict-read-write*. It has no support for *transactional* strategy yet.  -   If you are using XML based class configurations, add a *cache* element into your configuration with the *usage* attribute set to one of the *read-only*, *read-write*, or *nonstrict-read-write* strategies.     ```xml &lt;class name=\&quot;eg.Immutable\&quot; mutable=\&quot;false\&quot;&gt;   &lt;cache usage=\&quot;read-only\&quot;/&gt;   ....  &lt;/class&gt;  &lt;class name=\&quot;eg.Cat\&quot; .... &gt;   &lt;cache usage=\&quot;read-write\&quot;/&gt;   ....   &lt;set name=\&quot;kittens\&quot; ... &gt;     &lt;cache usage=\&quot;read-write\&quot;/&gt;     ....   &lt;/set&gt; &lt;/class&gt; ``` -   If you are using Hibernate-Annotations, then you can add a *class-cache* or *collection-cache* element into your Hibernate configuration file with the *usage* attribute set to *read only*, *read/write*, or *nonstrict read/write*.  ```xml     &lt;class-cache usage=\&quot;read-only\&quot; class=\&quot;eg.Immutable\&quot;/&gt; &lt;class-cache usage=\&quot;read-write\&quot; class=\&quot;eg.Cat\&quot;/&gt; &lt;collection-cache collection=\&quot;eg.Cat.kittens\&quot; usage=\&quot;read-write\&quot;/&gt; ```  -   Or alternatively, you can put Hibernate Annotation's *@Cache* annotation on your entities and collections.  ```java     @Cache(usage = CacheConcurrencyStrategy.READ_WRITE) public class Cat implements Serializable {   ... } ```  "
});

documentTitles["integratedclustering.html#advanced-settings"] = "Advanced Settings";
index.add({
    url: "integratedclustering.html#advanced-settings",
    title: "Advanced Settings",
    body: "### Advanced Settings  **Accessing underlying HazelcastInstance**  Using `com.hazelcast.hibernate.instance.HazelcastAccessor`, you can access the underlying `HazelcastInstance` used by Hibernate `SessionFactory`.  ```java    SessionFactory sessionFactory = ...; HazelcastInstance hazelcastInstance = HazelcastAccessor     .getHazelcastInstance(sessionFactory);         ```  **Changing/setting lock timeout value of *read-write* strategy**  You can set a lock timeout value using the `hibernate.cache.hazelcast.lock_timeout_in_seconds` Hibernate property. The value should be in seconds. The default value is 300 seconds.    &lt;br&gt;&lt;/br&gt; "
});



documentTitles["websessionreplication.html#web-session-replication"] = "Web Session Replication";
index.add({
    url: "websessionreplication.html#web-session-replication",
    title: "Web Session Replication",
    body: "## Web Session Replication  If you are using Tomcat as your web container, please see the [Tomcat based Web Session Replication section](#tomcat-based-web-session-replication).   "
});

documentTitles["websessionreplication.html#filter-based-web-session-replication"] = "Filter Based Web Session Replication";
index.add({
    url: "websessionreplication.html#filter-based-web-session-replication",
    title: "Filter Based Web Session Replication",
    body: "### Filter Based Web Session Replication  ***Sample Code***: *Please see our [sample application](https://github.com/hazelcast/hazelcast-code-samples/tree/master/hazelcast-integration/filter-based-session-replication) for Filter Based Web Session Replication.* &lt;br&gt;&lt;/br&gt;  Assume that you have more than one web server (A, B, C) with a load balancer in front of it. If server A goes down, your users on that server will be directed to one of the live servers (B or C), but their sessions will be lost.  We need to have all these sessions backed up somewhere if we do not want to lose the sessions upon server crashes. Hazelcast Web Manager (WM) allows you to cluster user HTTP sessions automatically. The following are required before enabling Hazelcast Session Clustering:  -   Target application or web server should support Java 1.6 or higher.  -   Target application or web server should support Servlet 3.0 or higher spec.  -   Session objects that need to be clustered have to be Serializable.  Here are the steps to setup Hazelcast Session Clustering:  -	Put the `hazelcast` and `hazelcast-wm` jars in your `WEB-INF/lib` directory. Optionally, if you wish to connect to a cluster as a client, add `hazelcast-client` as well.  -	Put the following XML into `web.xml` file. Make sure Hazelcast filter is placed before all the other filters if any; for example, you can put it at the top.  ```xml              &lt;filter&gt;   &lt;filter-name&gt;hazelcast-filter&lt;/filter-name&gt;   &lt;filter-class&gt;com.hazelcast.web.WebFilter&lt;/filter-class&gt;   &lt;!--     Name of the distributed map storing     your web session objects   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;map-name&lt;/param-name&gt;     &lt;param-value&gt;my-sessions&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     TTL value of the distributed map storing     your web session objects.     Any integer between 0 and Integer.MAX_VALUE.     Default is 0 which is infinite.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;session-ttl-seconds&lt;/param-name&gt;     &lt;param-value&gt;0&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     How is your load-balancer configured?     sticky-session means all requests of a session     is routed to the node where the session is first created.     This is excellent for performance.     If sticky-session is set to false, when a session is updated     on a node, entry for this session on all other nodes is invalidated.     You have to know how your load-balancer is configured before     setting this parameter. Default is true.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;sticky-session&lt;/param-name&gt;     &lt;param-value&gt;true&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     Name of session id cookie   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;cookie-name&lt;/param-name&gt;     &lt;param-value&gt;hazelcast.sessionId&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     Domain of session id cookie. Default is based on incoming request.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;cookie-domain&lt;/param-name&gt;     &lt;param-value&gt;.mywebsite.com&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     Should cookie only be sent using a secure protocol? Default is false.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;cookie-secure&lt;/param-name&gt;     &lt;param-value&gt;false&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     Should HttpOnly attribute be set on cookie ? Default is false.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;cookie-http-only&lt;/param-name&gt;     &lt;param-value&gt;false&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     Are you debugging? Default is false.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;debug&lt;/param-name&gt;     &lt;param-value&gt;true&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     Configuration xml location;       * as servlet resource OR       * as classpath resource OR       * as URL     Default is one of hazelcast-default.xml     or hazelcast.xml in classpath.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;config-location&lt;/param-name&gt;     &lt;param-value&gt;/WEB-INF/hazelcast.xml&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     Do you want to use an existing HazelcastInstance?     Default is null.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;instance-name&lt;/param-name&gt;     &lt;param-value&gt;default&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     Do you want to connect as a client to an existing cluster?     Default is false.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;use-client&lt;/param-name&gt;     &lt;param-value&gt;false&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     Client configuration location;       * as servlet resource OR       * as classpath resource OR       * as URL     Default is null.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;client-config-location&lt;/param-name&gt;     &lt;param-value&gt;/WEB-INF/hazelcast-client.properties&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     Do you want to shutdown HazelcastInstance during     web application undeploy process?     Default is true.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;shutdown-on-destroy&lt;/param-name&gt;     &lt;param-value&gt;true&lt;/param-value&gt;   &lt;/init-param&gt;   &lt;!--     Do you want to cache sessions locally in each instance?     Default is false.   --&gt;   &lt;init-param&gt;     &lt;param-name&gt;deferred-write&lt;/param-name&gt;     &lt;param-value&gt;false&lt;/param-value&gt;   &lt;/init-param&gt; &lt;/filter&gt; &lt;filter-mapping&gt;   &lt;filter-name&gt;hazelcast-filter&lt;/filter-name&gt;   &lt;url-pattern&gt;/*&lt;/url-pattern&gt;   &lt;dispatcher&gt;FORWARD&lt;/dispatcher&gt;   &lt;dispatcher&gt;INCLUDE&lt;/dispatcher&gt;   &lt;dispatcher&gt;REQUEST&lt;/dispatcher&gt; &lt;/filter-mapping&gt;  &lt;listener&gt;   &lt;listener-class&gt;com.hazelcast.web.SessionListener&lt;/listener-class&gt; &lt;/listener&gt; ```  - Package and deploy your `war` file as you would normally do.  It is that easy. All HTTP requests will go through Hazelcast `WebFilter` and it will put the session objects into Hazelcast distributed map if needed.  "
});

documentTitles["websessionreplication.html#spring-security-support"] = "Spring Security Support";
index.add({
    url: "websessionreplication.html#spring-security-support",
    title: "Spring Security Support",
    body: "### Spring Security Support  ***Sample Code***: *Please see our [sample application](https://github.com/hazelcast/hazelcast-code-samples/tree/master/hazelcast-integration/spring-security) for Spring Security Support.* &lt;br&gt;&lt;br/&gt;  If Spring based security is used for your application, you should use `com.hazelcast.web.spring.SpringAwareWebFilter` instead of `com.hazelcast.web.WebFilter` in your filter definition.  ```xml ...  &lt;filter&gt;   &lt;filter-name&gt;hazelcast-filter&lt;/filter-name&gt;   &lt;filter-class&gt;com.hazelcast.web.spring.SpringAwareWebFilter&lt;/filter-class&gt;     ... &lt;/filter&gt;   ... ```  `SpringAwareWebFilter` notifies Spring by publishing events to Spring context. These events are used by the `org.springframework.security.core.session.SessionRegistry` instance.   As before, you must also define `com.hazelcast.web.SessionListener` in your `web.xml`. However, you do not need to define `org.springframework.security.web.session.HttpSessionEventPublisher` in your `web.xml` as before, since `SpringAwareWebFilter` already informs Spring about session based events like `create` or `destroy`.      "
});

documentTitles["websessionreplication.html#client-mode-vs-p2p-mode"] = "Client Mode vs. P2P Mode";
index.add({
    url: "websessionreplication.html#client-mode-vs-p2p-mode",
    title: "Client Mode vs. P2P Mode",
    body: "#### Client Mode vs. P2P Mode  Hazelcast Session Replication works as P2P by default. To switch to Client/Server architecture, you need to set the `use-client` parameter to **true**. P2P mode is more flexible and requires no configuration in advance; in Client/Server architecture, clients need to connect to an existing Hazelcast Cluster. In case of connection problems, clients will try to reconnect to the cluster. The default retry count is 3.  "
});

documentTitles["websessionreplication.html#caching-locally-with-deferred-write"] = "Caching Locally with `deferred-write`";
index.add({
    url: "websessionreplication.html#caching-locally-with-deferred-write",
    title: "Caching Locally with `deferred-write`",
    body: "#### Caching Locally with `deferred-write`  If the value for `deferred-write` is set as **true**, Hazelcast will cache the session locally and will update the local session when an attribute is set or deleted. At the end of the request, it will update the distributed map with all the updates. It will not update the distributed map upon each attribute update, but will only call it once at the end of the request. It will also cache it, i.e. whenever there is a read for the attribute, it will read it from the cache.   **Important note about `deferred-write=false` setting**:  If `deferred-write` is **false**, you will not have a local attribute cache as mentioned above. In this case, any update (i.e. `setAttribute`) on the session will directly be available in the cluster. One exception to this behavior is the changes to the session attribute objects. To update an attribute cluster-wide, `setAttribute` must be called after changes are made to the attribute object.  The following example explains how to update an attribute in the case of `deferred-write=false` setting:   ``` session.setAttribute(\&quot;myKey\&quot;, new ArrayList()); List list1 = session.getAttribute(\&quot;myKey\&quot;); list1.add(\&quot;myValue\&quot;);  session.setAttribute(\&quot;myKey\&quot;, list1); // changes updated in the cluster ```  "
});

documentTitles["websessionreplication.html#sessionid-generation"] = "SessionId Generation";
index.add({
    url: "websessionreplication.html#sessionid-generation",
    title: "SessionId Generation",
    body: "#### SessionId Generation  SessionId generation is done by the Hazelcast Web Session Module if session replication is configured in the web application. The default cookie name for the sessionId is `hazelcast.sessionId`. This name is configurable with a `cookie-name` parameter in the `web.xml` file of the application. `hazelcast.sessionId` is just a UUID prefixed with “HZ” character and without “-“ character, e.g. `HZ6F2D036789E4404893E99C05D8CA70C7`.  When called by the target application, the value of `HttpSession.getId()` is the same as the value of `hazelcast.sessionId`.  "
});

documentTitles["websessionreplication.html#session-expiry"] = "Session Expiry";
index.add({
    url: "websessionreplication.html#session-expiry",
    title: "Session Expiry",
    body: "#### Session Expiry  Hazelcast automatically removes sessions from the cluster if the sessions are expired on the Web Container. This removal is done by `com.hazelcast.web.SessionListener`, which is an implementation of `javax.servlet.http.HttpSessionListener`.   Default session expiration configuration depends on the Servlet Container that is being used. You can also define it in your web.xml.  ```xml     &lt;session-config&gt;         &lt;session-timeout&gt;60&lt;/session-timeout&gt;     &lt;/session-config&gt; ```  If you want to override session expiry configuration with a Hazelcast specific configuration, you can use `session-ttl-seconds` to specify TTL on the Hazelcast Session Replication Distributed Map.  "
});

documentTitles["websessionreplication.html#sticky-session"] = "sticky-session";
index.add({
    url: "websessionreplication.html#sticky-session",
    title: "sticky-session",
    body: "#### sticky-session  Hazelcast holds whole session attributes in a distributed map and in a local HTTP session. Local session is required for fast access to data and distributed map is needed for fail-safety.  - If `sticky-session` is not used, whenever a session attribute is updated in a node (in both node local session and clustered cache), that attribute should be invalidated in all other nodes' local sessions, because now they have dirty values. Therefore, when a request arrives at one of those other nodes, that attribute value is fetched from clustered cache.  - To overcome the performance penalty of sending invalidation messages during updates, you can use sticky sessions. If Hazelcast knows sessions are sticky, invalidation will not be sent because Hazelcast assumes there is no other local session at the moment. When a server is down, requests belonging to a session hold in that server will routed to other server, and that server will fetch session data from clustered cache. That means, using sticky sessions, one will not suffer the  performance penalty of accessing clustered data and can benefit recover from a server failure.    &lt;br&gt;&lt;/br&gt; "
});



documentTitles["tomcatsessionreplication.html#tomcat-based-web-session-replication"] = "Tomcat Based Web Session Replication";
index.add({
    url: "tomcatsessionreplication.html#tomcat-based-web-session-replication",
    title: "Tomcat Based Web Session Replication",
    body: "### Tomcat Based Web Session Replication  ![image](images/NoteSmall.jpg) ***NOTE:*** *This feature is supported for Hazelcast Enterprise 3.3 or higher.*   ![](images/enterprise-onlycopy.jpg)   ***Sample Code:*** *Please see our [sample application](https://github.com/hazelcast/hazelcast-code-samples/tree/master/hazelcast-integration/enterprise-session-replication) for Tomcat Based Web Session Replication.* &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["tomcatsessionreplication.html#overview"] = "Overview";
index.add({
    url: "tomcatsessionreplication.html#overview",
    title: "Overview",
    body: "#### Overview  Session Replication with Hazelcast Enterprise is a container specific module that enables session replication for JEE Web Applications without requiring changes to the application.  ***Features***  1. Seamless Tomcat 6 &amp; 7 integration 2. Support for sticky and non-sticky sessions 3. Tomcat failover 4. Deferred write for performance boost &lt;br&gt;&lt;/br&gt;  ***Supported Containers***  Tomcat Web Session Replication Module has been tested against the following containers.  - Tomcat 6.0.x - It can be downloaded [here](http://tomcat.apache.org/download-60.cgi). - Tomcat 7.0.x - It can be downloaded [here](http://tomcat.apache.org/download-70.cgi).  The latest tested versions are **6.0.39** and **7.0.40**. &lt;br&gt;&lt;/br&gt;  ***Requirements***   - Tomcat instance must be running with Java 1.6 or higher.  - Session objects that need to be clustered have to be Serializable.  "
});

documentTitles["tomcatsessionreplication.html#how-tomcat-session-replication-works"] = "How Tomcat Session Replication works";
index.add({
    url: "tomcatsessionreplication.html#how-tomcat-session-replication-works",
    title: "How Tomcat Session Replication works",
    body: "#### How Tomcat Session Replication works  Tomcat Session Replication in Hazelcast Enterprise is a Hazelcast Module where each created `HttpSession` Object is kept in the Hazelcast Distributed Map. If configured with Sticky Sessions, each Tomcat Instance has its own local copy of the session for performance boost.   Since the sessions are in Hazelcast Distributed Map, you can use all the available features offered by Hazelcast Distributed Map implementation, such as MapStore and WAN Replication.  Tomcat Web Sessions run in two different modes:  - **P2P**: all Tomcat instances launch its own Hazelcast Instance and join to the Hazelcast Cluster and, - **Client/Server**: all Tomcat instances put/retrieve the session data to/from an existing Hazelcast Cluster.  "
});

documentTitles["tomcatsessionreplication.html#p2p-peer-to-peer-deployment"] = "P2P (Peer-to-Peer) Deployment";
index.add({
    url: "tomcatsessionreplication.html#p2p-peer-to-peer-deployment",
    title: "P2P (Peer-to-Peer) Deployment",
    body: "#### P2P (Peer-to-Peer) Deployment  P2P deployment launches an embedded Hazelcast Node in each server instance.  ***Features***  This type of deployment is simple: just configure your Tomcat and launch. There is no need for an  external Hazelcast cluster.  ***Sample P2P Configuration to use Hazelcast Session Replication***  - Go to [hazelcast.com](http://www.hazelcast.com/products/hazelcast-enterprise/) and download the latest Hazelcast Enterprise. - Unzip the Hazelcast Enterprise zip file into the folder `$HAZELCAST_ENTERPRISE_ROOT`. - Update `$HAZELCAST_ENTERPRISE_ROOT/bin/hazelcast.xml` with the provided Hazelcast Enterprise License Key.  - Put `$HAZELCAST_ENTERPRISE_ROOT/lib/hazelcast-enterprise-all-`&lt;*version*&gt;`.jar`,    `$HAZELCAST_ENTERPRISE_ROOT/lib/hazelcast-enterprise-`&lt;*tomcatversion*&gt;`-`&lt;*version*&gt;`.jar` and `hazelcast.xml` in the folder `$CATALINA_HOME/lib/`.  - Put a `&lt;Listener&gt;` element into the file `$CATALINA_HOME$/conf/server.xml` as shown below.  ```xml &lt;Server&gt; 	...     &lt;Listener className=\&quot;com.hazelcast.session.P2PLifecycleListener\&quot;/&gt;     ... &lt;/Server&gt; ```  - Put a `&lt;Manager&gt;` element into the file `$CATALINA_HOME$/conf/context.xml` as shown below.  ```xml &lt;Context&gt; 	...     &lt;Manager className=\&quot;com.hazelcast.session.HazelcastSessionManager\&quot;/&gt;     ... &lt;/Context&gt; ```  - Start Tomcat instances with a configured load balancer and deploy the web application.  ***Optional Attributes for Listener Element***  - Optionally, you can add `configLocation` attribute into the `&lt;Listener&gt;` element. If not provided, `hazelcast.xml` in the classpath is used by default. URL or full filesystem path as a `configLocation` value is supported.  &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["tomcatsessionreplication.html#clientserver-deployment"] = "Client/Server Deployment";
index.add({
    url: "tomcatsessionreplication.html#clientserver-deployment",
    title: "Client/Server Deployment",
    body: "#### Client/Server Deployment  In this deployment type, Tomcat instances work as clients on an existing Hazelcast Cluster.  ***Features***  -	The existing Hazelcast cluster is used as the Session Replication Cluster. -	Offloading Session Cache from Tomcat to the Hazelcast Cluster. -	The architecture is completely independent. Complete reboot of Tomcat instances. &lt;br&gt;&lt;/br&gt;  ***Sample Client/Server Configuration to use Hazelcast Session Replication***  - Go to [hazelcast.com](http://www.hazelcast.com/products/hazelcast-enterprise/) and download the latest Hazelcast Enterprise. - Unzip the Hazelcast Enterprise zip file into the folder `$HAZELCAST_ENTERPRISE_ROOT`. - Put `$HAZELCAST_ENTERPRISE_ROOT/lib/hazelcast-client-`&lt;*version*&gt;`.jar`,            `$HAZELCAST_ENTERPRISE_ROOT/lib/hazelcast-enterprise-`&lt;*version*&gt;`.jar` and           `$HAZELCAST_ENTERPRISE_ROOT/lib/hazelcast-enterprise-`&lt;*tomcatversion*&gt;`-`&lt;*version*&gt;`.jar` in the folder `$CATALINA_HOME/lib/`.  - Put a `&lt;Listener&gt;` element into the `$CATALINA_HOME$/conf/server.xml` as shown below.  ```xml &lt;Server&gt; 	...     &lt;Listener className=\&quot;com.hazelcast.session.ClientServerLifecycleListener\&quot;/&gt;     ... &lt;/Server&gt; ```  - Update the `&lt;Manager&gt;` element in the `$CATALINA_HOME$/conf/context.xml` as shown below.  ```xml &lt;Context&gt;      &lt;Manager className=\&quot;com.hazelcast.session.HazelcastSessionManager\&quot;       clientOnly=\&quot;true\&quot;/&gt; &lt;/Context&gt; ``` - Launch a Hazelcast Instance using `$HAZELCAST_ENTERPRISE_ROOT/bin/server.sh` or `$HAZELCAST_ENTERPRISE_ROOT/bin/server.bat`.  - Start Tomcat instances with a configured load balancer and deploy the web application.    ***Optional Attributes for Listener Element***  - Optionally, you can add `configLocation` attribute into the `&lt;Listener&gt;` element. If not provided, `hazelcast-client-default.xml` in `hazelcast-client-`&lt;*version*&gt;`.jar` file is used by default. Any client XML file in the classpath, URL or full filesystem path as a `configLocation` value is also supported.  "
});

documentTitles["tomcatsessionreplication.html#optional-attributes-for-manager-element"] = "Optional Attributes for Manager Element";
index.add({
    url: "tomcatsessionreplication.html#optional-attributes-for-manager-element",
    title: "Optional Attributes for Manager Element",
    body: "#### Optional Attributes for Manager Element  `&lt;Manager&gt;` element is used both in P2P and Client/Server mode. You can use the following attributes to configure Tomcat Session Replication Module to better serve your needs.  - Add `mapName` attribute into `&lt;Manager&gt;` element. Its default value is *default Hazelcast Distributed Map*. Use this attribute if you have a specially configured map for special cases like WAN Replication, Eviction, MapStore, etc. - Add `sticky` attribute into `&lt;Manager&gt;` element. Its default value is *true*. - Add `processExpiresFrequency` attribute into `&lt;Manager&gt;` element. It specifies the frequency of session validity check, in seconds. Its default value is *6* and the minimum value that you can set is *1*. - Add `deferredWrite` attribute into `&lt;Manager&gt;` elemenet. Its default value is *true*.  &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["tomcatsessionreplication.html#session-caching-and-deferredwrite-parameter"] = "Session Caching and deferredWrite parameter";
index.add({
    url: "tomcatsessionreplication.html#session-caching-and-deferredwrite-parameter",
    title: "Session Caching and deferredWrite parameter",
    body: "#### Session Caching and deferredWrite parameter  Tomcat Web Session Replication Module has its own nature of caching. Attribute changes during the HTTP Request/HTTP Response cycle is cached by default. Distributing those changes to the Hazelcast Cluster is costly. Because of that, Session Replication is only done at the end of each request for updated and deleted attributes. The risk in this approach is losing data if a Tomcat crash happens in the middle of the HTTP Request operation.  You can change that behavior by setting `deferredWrite=false` in your `&lt;Manager&gt;` element. By disabling it, all updates that are done on session objects are directly distributed into Hazelcast Cluster.  "
});

documentTitles["tomcatsessionreplication.html#session-expiry"] = "Session Expiry";
index.add({
    url: "tomcatsessionreplication.html#session-expiry",
    title: "Session Expiry",
    body: "#### Session Expiry  Based on Tomcat configuration or `sessionTimeout` setting in `web.xml`, sessions are expired over time. This requires a cleanup on the Hazelcast Cluster since there is no need to keep expired sessions in the cluster.   `processExpiresFrequency`, which is defined in [`&lt;Manager&gt;`](#optional-manager-tag-parameters), is the only setting that controls the behavior of session expiry policy in the Tomcat Web Session Replication Module. By setting this, you can set the frequency of the session expiration checks in the Tomcat Instance.  "
});

documentTitles["tomcatsessionreplication.html#enabling-session-replication-in-multi-app-environment"] = "Enabling Session Replication in Multi-App environment";
index.add({
    url: "tomcatsessionreplication.html#enabling-session-replication-in-multi-app-environment",
    title: "Enabling Session Replication in Multi-App environment",
    body: "#### Enabling Session Replication in Multi-App environment  Tomcat can be configured in two ways to enable Session Replication for deployed applications.  - Server Context.xml Configuration - Application Context.xml Configuration  ***Server Context.xml Configuration***  By configuring `$CATALINA_HOME$/conf/context.xml`, you can enable session replication for all applications deployed in the Tomcat Instance.    ***Application Context.xml Configuration***  By configuring `$CATALINA_HOME/conf/[enginename]/[hostname]/[applicationName].xml`, you can enable Session Replication per deployed application.  "
});

documentTitles["tomcatsessionreplication.html#session-affinity"] = "Session Affinity";
index.add({
    url: "tomcatsessionreplication.html#session-affinity",
    title: "Session Affinity",
    body: "#### Session Affinity   ***Sticky Sessions (default)***  Sticky Sessions are used to improve the performance since the sessions do not move around the cluster.   Request goes always to the same instance where the session was firstly created. By using a sticky session, you eliminate session replication problems mostly, except for the failover cases. In case of failovers, Hazelcast helps you not lose existing sessions.   ***Non-Sticky Sessions***  Non-Sticky Sessions are not good for performance because you need to move session data all over the cluster every time a new request comes in.  However, load balancing might be super easy with Non-Sticky caches. In case of heavy load, you can distribute the request to the least used Tomcat instance. Hazelcast supports Non-Sticky Sessions as well.   "
});

documentTitles["tomcatsessionreplication.html#tomcat-failover-and-jvmroute-parameter"] = "Tomcat Failover and jvmRoute Parameter";
index.add({
    url: "tomcatsessionreplication.html#tomcat-failover-and-jvmroute-parameter",
    title: "Tomcat Failover and jvmRoute Parameter",
    body: "#### Tomcat Failover and jvmRoute Parameter  Each HTTP Request is redirected to the same Tomcat instance if sticky sessions are enabled. The parameter `jvmRoute` is added to the end of session ID as a suffix, to make Load Balancer aware of the target Tomcat instance.   When Tomcat Failure happens and Load Balancer cannot redirect the request to the owning instance, it sends a request to one of the available Tomcat instances. Since the `jvmRoute` parameter of session ID is different than that of the target Tomcat instance, Hazelcast Session Replication Module updates the session ID of the session with the new `jvmRoute` parameter. That means that the Session is moved to another Tomcat instance and Load Balancer will redirect all subsequent HTTP Requests to the new Tomcat Instance.  ![image](images/NoteSmall.jpg) ***NOTE:*** *If stickySession is enabled, `jvmRoute` parameter must be set in `$CATALINA_HOME$/conf/server.xml` and unique among Tomcat instances in the cluster.*  ```xml  &lt;Engine name=\&quot;Catalina\&quot; defaultHost=\&quot;localhost\&quot; jvmRoute=\&quot;tomcat-8080\&quot;&gt; ```   &lt;br&gt;&lt;/br&gt;"
});



documentTitles["jettysessionreplication.html#jetty-based-web-session-replication"] = "Jetty Based Web Session Replication";
index.add({
    url: "jettysessionreplication.html#jetty-based-web-session-replication",
    title: "Jetty Based Web Session Replication",
    body: "### Jetty Based Web Session Replication    ![image](images/NoteSmall.jpg) ***NOTE:*** *This feature is supported for Hazelcast Enterprise 3.4 or higher.*      ![](images/enterprise-onlycopy.jpg)      ***Sample Code:*** *Please see our [sample application](https://github.com/hazelcast/hazelcast-code-samples/tree/master/hazelcast-integration/enterprise-session-replication) for Jetty Based Web Session Replication.*  &lt;br&gt;&lt;/br&gt;    "
});

documentTitles["jettysessionreplication.html#overview"] = "Overview";
index.add({
    url: "jettysessionreplication.html#overview",
    title: "Overview",
    body: "#### Overview    Jetty Web Session Replication with Hazelcast Enterprise is a container specific module that enables session replication for JEE Web Applications without requiring changes to the application.      ***Features***    1. Jetty 7 &amp; 8 &amp; 9 support  2. Support for sticky and non-sticky sessions  3. Jetty failover  4. Deferred write for performance boost  5. Client/Server and P2P modes  6. Declarative and programmatic configuration  &lt;br&gt;&lt;/br&gt;    ***Supported Containers***    Jetty Web Session Replication Module has been tested against the following containers.    - Jetty 7  - It can be downloaded [here](http://download.eclipse.org/jetty/stable-7/dist/).  - Jetty 8  - It can be downloaded [here](http://download.eclipse.org/jetty/stable-8/dist/).  - Jetty 9  - It can be downloaded [here](http://download.eclipse.org/jetty/stable-9/dist/).    Latest tested versions are **7.6.16.v20140903**, **8.1.16.v20140903** and **9.2.3.v20140905**  &lt;br&gt;&lt;/br&gt;      ***Requirements***     - Jetty instance must be running with Java 1.6 or higher.   - Session objects that need to be clustered have to be Serializable.   - Hazelcast Jetty-based Web Session Replication is built on top of the `jetty-nosql` module. This module (`jetty-nosql-&lt;*jettyversion*&gt;.jar`) needs to be added to `$JETTY_HOME/lib/ext`.     This module can be found [here](http://mvnrepository.com/artifact/org.eclipse.jetty/jetty-nosql).    "
});

documentTitles["jettysessionreplication.html#how-jetty-session-replication-works"] = "How Jetty Session Replication works";
index.add({
    url: "jettysessionreplication.html#how-jetty-session-replication-works",
    title: "How Jetty Session Replication works",
    body: "#### How Jetty Session Replication works    Jetty Session Replication in Hazelcast Enterprise is a Hazelcast Module where each created `HttpSession` Object's state is kept in Hazelcast Distributed Map.     Since the session data are in Hazelcast Distributed Map, you can use all the available features offered by Hazelcast Distributed Map implementation, such as MapStore and WAN Replication.    Jetty Web Session Replication runs in two different modes:    - **P2P**: all Jetty instances launch its own Hazelcast Instance and join to the Hazelcast Cluster and,  - **Client/Server**: all Jetty instances put/retrieve the session data to/from an existing Hazelcast Cluster.      "
});

documentTitles["jettysessionreplication.html#p2p-peer-to-peer-deployment"] = "P2P (Peer-to-Peer) Deployment";
index.add({
    url: "jettysessionreplication.html#p2p-peer-to-peer-deployment",
    title: "P2P (Peer-to-Peer) Deployment",
    body: "#### P2P (Peer-to-Peer) Deployment    P2P deployment launches embedded Hazelcast Node in each server instance.    ***Features***    This type of deployment is simple: just configure your Jetty and launch. There is no need for an  external Hazelcast cluster.    ***Sample P2P Configuration to use Hazelcast Session Replication***    - Go to [hazelcast.com](http://www.hazelcast.com/products/hazelcast-enterprise/) and download the latest Hazelcast Enterprise.  - Unzip the Hazelcast Enterprise zip file into the folder `$HAZELCAST_ENTERPRISE_ROOT`.  - Update `$HAZELCAST_ENTERPRISE_ROOT/bin/hazelcast.xml` with the provided Hazelcast Enterprise License Key.   - Put `hazelcast.xml` in the folder `$JETTY_HOME/etc`.  - Put `$HAZELCAST_ENTERPRISE_ROOT/lib/hazelcast-enterprise-all-`&lt;*version*&gt;`.jar`,    `$HAZELCAST_ENTERPRISE_ROOT/lib/hazelcast-enterprise-`&lt;*jettyversion*&gt;`-`&lt;*version*&gt;`.jar` in the folder `$JETTY_HOME/lib/ext`.  - Configure Session ID Manager and Session Manager. Please see the following explanations for configuring these managers.    *Configuring the HazelcastSessionIdManager*    You need to configure a `com.hazelcast.session.HazelcastSessionIdManager` instance in `jetty.xml`. Add the following lines to your `jetty.xml`.    ```xml  &lt;Set name=\&quot;sessionIdManager\&quot;&gt;      &lt;New id=\&quot;hazelcastIdMgr\&quot; class=\&quot;com.hazelcast.session.HazelcastSessionIdManager\&quot;&gt;          &lt;Arg&gt;&lt;Ref id=\&quot;Server\&quot;/&gt;&lt;/Arg&gt;          &lt;Set name=\&quot;configLocation\&quot;&gt;etc/hazelcast.xml&lt;/Set&gt;      &lt;/New&gt;  &lt;/Set&gt;  ```    *Configuring the HazelcastSessionManager*      `HazelcastSessionManager` can be configured from a `context.xml` file. Each application has a context file in the `$CATALINA_HOME$/contexts` folder. You need to create this context file if it does not exist.   The context filename must be the same as the application name, e.g. `example.war` should have a context file named `example.xml`.    The file `context.xml` should have the following content.    ```xml  &lt;Ref name=\&quot;Server\&quot; id=\&quot;Server\&quot;&gt;      &lt;Call id=\&quot;hazelcastIdMgr\&quot; name=\&quot;getSessionIdManager\&quot;/&gt;  &lt;/Ref&gt;  &lt;Set name=\&quot;sessionHandler\&quot;&gt;      &lt;New class=\&quot;org.eclipse.jetty.server.session.SessionHandler\&quot;&gt;          &lt;Arg&gt;              &lt;New id=\&quot;hazelcastMgr\&quot; class=\&quot;com.hazelcast.session.HazelcastSessionManager\&quot;&gt;                  &lt;Set name=\&quot;idManager\&quot;&gt;                      &lt;Ref id=\&quot;hazelcastIdMgr\&quot;/&gt;                  &lt;/Set&gt;              &lt;/New&gt;          &lt;/Arg&gt;      &lt;/New&gt;  &lt;/Set&gt;  ```    - Start Jetty instances with a configured load balancer and deploy the web application.    ![image](images/NoteSmall.jpg) ***NOTE:*** *In Jetty 9, there is no folder with the name *`contexts`*. You have to put the file *`context.xml`* under the *`webapps`* directory. And you need to add the following lines to *`context.xml`*.*      ```xml  &lt;Ref name=\&quot;Server\&quot; id=\&quot;Server\&quot;&gt;      &lt;Call id=\&quot;hazelcastIdMgr\&quot; name=\&quot;getSessionIdManager\&quot;/&gt;  &lt;/Ref&gt;  &lt;Set name=\&quot;sessionHandler\&quot;&gt;      &lt;New class=\&quot;org.eclipse.jetty.server.session.SessionHandler\&quot;&gt;          &lt;Arg&gt;              &lt;New id=\&quot;hazelcastMgr\&quot; class=\&quot;com.hazelcast.session.HazelcastSessionManager\&quot;&gt;                  &lt;Set name=\&quot;sessionIdManager\&quot;&gt;                      &lt;Ref id=\&quot;hazelcastIdMgr\&quot;/&gt;                  &lt;/Set&gt;              &lt;/New&gt;          &lt;/Arg&gt;      &lt;/New&gt;  &lt;/Set&gt;  ```          "
});

documentTitles["jettysessionreplication.html#clientserver-deployment"] = "Client/Server Deployment";
index.add({
    url: "jettysessionreplication.html#clientserver-deployment",
    title: "Client/Server Deployment",
    body: "#### Client/Server Deployment    In client/server deployment type, Jetty instances work as clients to an existing Hazelcast Cluster.    ***Features***    -	Existing Hazelcast cluster is used as the Session Replication Cluster.  -	The architecture is completely independent. Complete reboot of Jetty instances without losing data.  &lt;br&gt;&lt;/br&gt;    ***Sample Client/Server Configuration to use Hazelcast Session Replication***    - Go to [hazelcast.com](http://www.hazelcast.com/products/hazelcast-enterprise/) and download the latest Hazelcast Enterprise.  - Unzip the Hazelcast Enterprise zip file into the folder `$HAZELCAST_ENTERPRISE_ROOT`.  - Update `$HAZELCAST_ENTERPRISE_ROOT/bin/hazelcast.xml` with the provided Hazelcast Enterprise License Key.   - Put `hazelcast.xml` in the folder `$JETTY_HOME/etc`.  - Put `$HAZELCAST_ENTERPRISE_ROOT/lib/hazelcast-enterprise-all-`&lt;*version*&gt;`.jar`,    `$HAZELCAST_ENTERPRISE_ROOT/lib/hazelcast-enterprise-`&lt;*jettyversion*&gt;`-`&lt;*version*&gt;`.jar` in the folder `$JETTY_HOME/lib/ext`.  - Configure Session ID Manager and Session Manager. Please see below explanations for configuring these managers.    *Configuring the HazelcastSessionIdManager*    You need to configure a `com.hazelcast.session.HazelcastSessionIdManager` instance in `jetty.xml`. Add the following lines to your `jetty.xml`.    ```xml  &lt;Set name=\&quot;sessionIdManager\&quot;&gt;      &lt;New id=\&quot;hazelcastIdMgr\&quot; class=\&quot;com.hazelcast.session.HazelcastSessionIdManager\&quot;&gt;          &lt;Arg&gt;&lt;Ref id=\&quot;Server\&quot;/&gt;&lt;/Arg&gt;          &lt;Set name=\&quot;configLocation\&quot;&gt;etc/hazelcast.xml&lt;/Set&gt;          &lt;Set name=\&quot;clientOnly\&quot;&gt;true&lt;/Set&gt;      &lt;/New&gt;  &lt;/Set&gt;  ```    *Configuring the HazelcastSessionManager*    `HazelcastSessionManager` can be configured from a `context.xml` file. Each application has a context file under the `$CATALINA_HOME$/contexts` folder. You need to create this context file if it does not exist.   The context filename must be the same as the application name, e.g. `example.war` should have a context file named `example.xml`.      ```xml      &lt;Ref name=\&quot;Server\&quot; id=\&quot;Server\&quot;&gt;          &lt;Call id=\&quot;hazelcastIdMgr\&quot; name=\&quot;getSessionIdManager\&quot;/&gt;      &lt;/Ref&gt;          &lt;Set name=\&quot;sessionHandler\&quot;&gt;          &lt;New class=\&quot;org.eclipse.jetty.server.session.SessionHandler\&quot;&gt;              &lt;Arg&gt;                  &lt;New id=\&quot;hazelMgr\&quot; class=\&quot;com.hazelcast.session.HazelcastSessionManager\&quot;&gt;                      &lt;Set name=\&quot;idManager\&quot;&gt;                          &lt;Ref id=\&quot;hazelcastIdMgr\&quot;/&gt;                      &lt;/Set&gt;                  &lt;/New&gt;              &lt;/Arg&gt;          &lt;/New&gt;      &lt;/Set&gt;  ```    ![image](images/NoteSmall.jpg) ***NOTE:*** *In Jetty 9, there is no folder with name *`contexts`*. You have to put the file *`context.xml`* file under *`webapps`* directory. And you need to add below lines to *`context.xml`*.*    ```xml      &lt;Ref name=\&quot;Server\&quot; id=\&quot;Server\&quot;&gt;          &lt;Call id=\&quot;hazelcastIdMgr\&quot; name=\&quot;getSessionIdManager\&quot;/&gt;      &lt;/Ref&gt;          &lt;Set name=\&quot;sessionHandler\&quot;&gt;          &lt;New class=\&quot;org.eclipse.jetty.server.session.SessionHandler\&quot;&gt;              &lt;Arg&gt;                  &lt;New id=\&quot;hazelMgr\&quot; class=\&quot;com.hazelcast.session.HazelcastSessionManager\&quot;&gt;                      &lt;Set name=\&quot;sessionIdManager\&quot;&gt;                          &lt;Ref id=\&quot;hazelcastIdMgr\&quot;/&gt;                      &lt;/Set&gt;                  &lt;/New&gt;              &lt;/Arg&gt;          &lt;/New&gt;      &lt;/Set&gt;  ```    - Launch a Hazelcast Instance using `$HAZELCAST_ENTERPRISE_ROOT/bin/server.sh` or `$HAZELCAST_ENTERPRISE_ROOT/bin/server.bat`.    - Start Tomcat instances with a configured load balancer and deploy the web application.        "
});

documentTitles["jettysessionreplication.html#optional-hazelcastsessionidmanager-parameters"] = "Optional HazelcastSessionIdManager Parameters";
index.add({
    url: "jettysessionreplication.html#optional-hazelcastsessionidmanager-parameters",
    title: "Optional HazelcastSessionIdManager Parameters",
    body: "#### Optional HazelcastSessionIdManager Parameters    `HazelcastSessionIdManager` is used both in P2P and Client/Server mode. Use the following parameters to configure the Jetty Session Replication Module to better serve your needs.    - `workerName`: Set this attribute to a unique value for each Jetty instance to enable session affinity with a sticky-session configured load balancer.  - `cleanUpPeriod`: Defines the working period of session clean-up task in milliseconds.  - `configLocation`: specifies the location of `hazelcast.xml`.    &lt;br&gt;&lt;/br&gt;    "
});

documentTitles["jettysessionreplication.html#optional-hazelcastsessionmanager-parameters"] = "Optional HazelcastSessionManager Parameters";
index.add({
    url: "jettysessionreplication.html#optional-hazelcastsessionmanager-parameters",
    title: "Optional HazelcastSessionManager Parameters",
    body: "#### Optional HazelcastSessionManager Parameters    `HazelcastSessionManager` is used both in P2P and Client/Server mode. Use the following parameters to configure Jetty Session Replication Module to better serve your needs.    - `savePeriod`: Sets the interval of saving session data to the Hazelcast cluster. Jetty Web Session Replication Module has its own nature of caching. Attribute changes during the HTTP Request/HTTP Response cycle are cached by default. Distributing those changes to the Hazelcast Cluster is costly, so Session Replication is only done at the end of each request for updated and deleted attributes. The risk with this approach is losing data if a Jetty crash happens in the middle of the HTTP Request operation.  You can change that behavior by setting the `savePeriod` attribute.    Notes:    - If `savePeriod` is set to **-2**, `HazelcastSessionManager.save` method is called for every `doPutOrRemove` operation.  - If it is set to **-1**, the same method is never called if Jetty is not shut down.  - If it is set to **0** (the default value), the same method is called at the end of request.  - If it is set to **1**, the same method is called at the end of request if session is dirty.    &lt;br&gt;&lt;/br&gt;      "
});

documentTitles["jettysessionreplication.html#session-expiry"] = "Session Expiry";
index.add({
    url: "jettysessionreplication.html#session-expiry",
    title: "Session Expiry",
    body: "#### Session Expiry    Based on Tomcat configuration or `sessionTimeout` setting in `web.xml`, the sessions are expired over time. This requires a cleanup on Hazelcast Cluster, since there is no need to keep expired sessions in it.     `cleanUpPeriod`, which is defined in `HazelcastSessionIdManager`, is the only setting that controls the behavior of session expiry policy in Jetty Web Session Replication Module. By setting this, you can set the frequency of the session expiration checks in the Jetty Instance.      "
});

documentTitles["jettysessionreplication.html#session-affinity"] = "Session Affinity";
index.add({
    url: "jettysessionreplication.html#session-affinity",
    title: "Session Affinity",
    body: "#### Session Affinity     `HazelcastSessionIdManager` can work in sticky and non-sticky setups.    The clustered session mechanism works in conjunction with a load balancer that supports stickiness. Stickiness can be based on various data items, such as source IP address, or characteristics of the session ID, or a load-balancer specific mechanism.   For those load balancers that examine the session ID, `HazelcastSessionIdManager` appends a node ID to the session ID, which can be used for routing.  You must configure the `HazelcastSessionIdManager` with a `workerName` that is unique across the cluster.   Typically the name relates to the physical node on which the instance is executed. If this name is not unique, your load balancer might fail to distribute your sessions correctly.  If sticky sessions are enabled, the `workerName` parameter has to be set, as shown below.      ```xml  &lt;Set name=\&quot;sessionIdManager\&quot;&gt;      &lt;New id=\&quot;hazelcastIdMgr\&quot; class=\&quot;com.hazelcast.session.HazelcastSessionIdManager\&quot;&gt;          &lt;Arg&gt;&lt;Ref id=\&quot;Server\&quot;/&gt;&lt;/Arg&gt;          &lt;Set name=\&quot;configLocation\&quot;&gt;etc/hazelcast.xml&lt;/Set&gt;          &lt;Set name=\&quot;workerName\&quot;&gt;unique-worker-1&lt;/Set&gt;      &lt;/New&gt;  &lt;/Set&gt;  ```      &lt;br&gt;&lt;/br&gt;"
});



documentTitles["springintegration.html#spring-integration"] = "Spring Integration";
index.add({
    url: "springintegration.html#spring-integration",
    title: "Spring Integration",
    body: "## Spring Integration  "
});

documentTitles["springintegration.html#supported-versions"] = "Supported Versions";
index.add({
    url: "springintegration.html#supported-versions",
    title: "Supported Versions",
    body: "### Supported Versions  - Spring 2.5+  "
});

documentTitles["springintegration.html#spring-configuration"] = "Spring Configuration";
index.add({
    url: "springintegration.html#spring-configuration",
    title: "Spring Configuration",
    body: "### Spring Configuration  ***Sample Code***: *Please see our [sample application](https://github.com/hazelcast/hazelcast-code-samples/tree/master/hazelcast-integration/spring-configuration) for Spring Configuration.* &lt;br&gt;&lt;/br&gt;   "
});

documentTitles["springintegration.html#bean-declaration-by-spring-beans-namespace"] = "Bean Declaration by Spring *beans* Namespace";
index.add({
    url: "springintegration.html#bean-declaration-by-spring-beans-namespace",
    title: "Bean Declaration by Spring *beans* Namespace",
    body: "#### Bean Declaration by Spring *beans* Namespace   ***Classpath Configuration***   This configuration requires the following jar file in the classpath:  - `hazelcast-`&lt;*version*&gt;`.jar`  ***Bean Declaration***   You can declare Hazelcast Objects using the default Spring *beans* namespace. You can find an example usage of Hazelcast Instance declaration as follows:  ```xml &lt;bean id=\&quot;instance\&quot; class=\&quot;com.hazelcast.core.Hazelcast\&quot; factory-method=\&quot;newHazelcastInstance\&quot;&gt;   &lt;constructor-arg&gt;     &lt;bean class=\&quot;com.hazelcast.config.Config\&quot;&gt;       &lt;property name=\&quot;groupConfig\&quot;&gt;         &lt;bean class=\&quot;com.hazelcast.config.GroupConfig\&quot;&gt;           &lt;property name=\&quot;name\&quot; value=\&quot;dev\&quot;/&gt;           &lt;property name=\&quot;password\&quot; value=\&quot;pwd\&quot;/&gt;         &lt;/bean&gt;       &lt;/property&gt;       &lt;!-- and so on ... --&gt;     &lt;/bean&gt;   &lt;/constructor-arg&gt; &lt;/bean&gt;  &lt;bean id=\&quot;map\&quot; factory-bean=\&quot;instance\&quot; factory-method=\&quot;getMap\&quot;&gt;   &lt;constructor-arg value=\&quot;map\&quot;/&gt; &lt;/bean&gt; ```  "
});

documentTitles["springintegration.html#bean-declaration-by-hazelcast-namespace"] = "Bean Declaration by *hazelcast* Namespace";
index.add({
    url: "springintegration.html#bean-declaration-by-hazelcast-namespace",
    title: "Bean Declaration by *hazelcast* Namespace",
    body: "#### Bean Declaration by *hazelcast* Namespace   ***Classpath Configuration***   Hazelcast-Spring integration requires the following JAR files in the classpath:  - `hazelcast-spring-`&lt;*version*&gt;`.jar` - `hazelcast-`&lt;*version*&gt;`.jar`  or  - `hazelcast-all-`&lt;*version*&gt;`.jar`  ***Bean Declaration***   Hazelcast has its own namespace **hazelcast** for bean definitions. You can easily add the namespace declaration *xmlns:hz=\&quot;http://www.hazelcast.com/schema/spring\&quot;* to the `beans` element in the context file so that *hz* namespace shortcut can be used as a bean declaration.  Here is an example schema definition for Hazelcast 3.3.x:  ```xml &lt;beans xmlns=\&quot;http://www.springframework.org/schema/beans\&quot;        xmlns:xsi=\&quot;http://www.w3.org/2001/XMLSchema-instance\&quot;        xmlns:hz=\&quot;http://www.hazelcast.com/schema/spring\&quot;        xsi:schemaLocation=\&quot;http://www.springframework.org/schema/beans                 http://www.springframework.org/schema/beans/spring-beans-3.0.xsd                 http://www.hazelcast.com/schema/spring                 http://www.hazelcast.com/schema/spring/hazelcast-spring.xsd\&quot;&gt; ```  "
});

documentTitles["springintegration.html#supported-configurations-with-hazelcast-namespace"] = "Supported Configurations with *hazelcast* Namespace";
index.add({
    url: "springintegration.html#supported-configurations-with-hazelcast-namespace",
    title: "Supported Configurations with *hazelcast* Namespace",
    body: "#### Supported Configurations with *hazelcast* Namespace  - **Hazelcast Instance Configuration**  ```xml &lt;hz:hazelcast id=\&quot;instance\&quot;&gt;   &lt;hz:config&gt;     &lt;hz:group name=\&quot;dev\&quot; password=\&quot;password\&quot;/&gt;     &lt;hz:network port=\&quot;5701\&quot; port-auto-increment=\&quot;false\&quot;&gt;       &lt;hz:join&gt;         &lt;hz:multicast enabled=\&quot;false\&quot;                       multicast-group=\&quot;224.2.2.3\&quot;                       multicast-port=\&quot;54327\&quot;/&gt;         &lt;hz:tcp-ip enabled=\&quot;true\&quot;&gt;           &lt;hz:members&gt;10.10.1.2, 10.10.1.3&lt;/hz:members&gt;         &lt;/hz:tcp-ip&gt;       &lt;/hz:join&gt;     &lt;/hz:network&gt;     &lt;hz:map name=\&quot;map\&quot;             backup-count=\&quot;2\&quot;             max-size=\&quot;0\&quot;             eviction-percentage=\&quot;30\&quot;             read-backup-data=\&quot;true\&quot;             eviction-policy=\&quot;NONE\&quot;             merge-policy=\&quot;com.hazelcast.map.merge.PassThroughMergePolicy\&quot;/&gt;   &lt;/hz:config&gt; &lt;/hz:hazelcast&gt; ```  -   **Hazelcast Client Configuration**  ```xml &lt;hz:client id=\&quot;client\&quot;&gt;   &lt;hz:group name=\&quot;${cluster.group.name}\&quot; password=\&quot;${cluster.group.password}\&quot; /&gt;   &lt;hz:network connection-attempt-limit=\&quot;3\&quot;               connection-attempt-period=\&quot;3000\&quot;               connection-timeout=\&quot;1000\&quot;               redo-operation=\&quot;true\&quot;               smart-routing=\&quot;true\&quot;&gt;     &lt;hz:member&gt;10.10.1.2:5701&lt;/hz:member&gt;     &lt;hz:member&gt;10.10.1.3:5701&lt;/hz:member&gt;   &lt;/hz:network&gt; &lt;/hz:client&gt; ```  -   **Hazelcast Supported Type Configurations and Examples**  	- `map` 	- `multiMap` 	- `replicatedmap` 	- `queue` 	- `topic` 	- `set` 	- `list` 	- `executorService` 	- `idGenerator` 	- `atomicLong` 	- `atomicReference` 	- `semaphore` 	- `countDownLatch` 	- `lock`   ```xml &lt;hz:map id=\&quot;map\&quot; instance-ref=\&quot;client\&quot; name=\&quot;map\&quot; lazy-init=\&quot;true\&quot; /&gt; &lt;hz:multiMap id=\&quot;multiMap\&quot; instance-ref=\&quot;instance\&quot; name=\&quot;multiMap\&quot;     lazy-init=\&quot;false\&quot; /&gt; &lt;hz:replicatedmap id=\&quot;replicatedmap\&quot; instance-ref=\&quot;instance\&quot;      name=\&quot;replicatedmap\&quot; lazy-init=\&quot;false\&quot; /&gt; &lt;hz:queue id=\&quot;queue\&quot; instance-ref=\&quot;client\&quot; name=\&quot;queue\&quot;      lazy-init=\&quot;true\&quot; depends-on=\&quot;instance\&quot;/&gt; &lt;hz:topic id=\&quot;topic\&quot; instance-ref=\&quot;instance\&quot; name=\&quot;topic\&quot;      depends-on=\&quot;instance, client\&quot;/&gt; &lt;hz:set id=\&quot;set\&quot; instance-ref=\&quot;instance\&quot; name=\&quot;set\&quot; /&gt; &lt;hz:list id=\&quot;list\&quot; instance-ref=\&quot;instance\&quot; name=\&quot;list\&quot;/&gt; &lt;hz:executorService id=\&quot;executorService\&quot; instance-ref=\&quot;client\&quot;      name=\&quot;executorService\&quot;/&gt; &lt;hz:idGenerator id=\&quot;idGenerator\&quot; instance-ref=\&quot;instance\&quot;      name=\&quot;idGenerator\&quot;/&gt; &lt;hz:atomicLong id=\&quot;atomicLong\&quot; instance-ref=\&quot;instance\&quot; name=\&quot;atomicLong\&quot;/&gt; &lt;hz:atomicReference id=\&quot;atomicReference\&quot; instance-ref=\&quot;instance\&quot;      name=\&quot;atomicReference\&quot;/&gt; &lt;hz:semaphore id=\&quot;semaphore\&quot; instance-ref=\&quot;instance\&quot; name=\&quot;semaphore\&quot;/&gt; &lt;hz:countDownLatch id=\&quot;countDownLatch\&quot; instance-ref=\&quot;instance\&quot;      name=\&quot;countDownLatch\&quot;/&gt; &lt;hz:lock id=\&quot;lock\&quot; instance-ref=\&quot;instance\&quot; name=\&quot;lock\&quot;/&gt; ```  -   **Supported Spring Bean Attributes**  Hazelcast also supports `lazy-init`, `scope` and `depends-on` bean attributes.  ```xml &lt;hz:hazelcast id=\&quot;instance\&quot; lazy-init=\&quot;true\&quot; scope=\&quot;singleton\&quot;&gt;   ... &lt;/hz:hazelcast&gt; &lt;hz:client id=\&quot;client\&quot; scope=\&quot;prototype\&quot; depends-on=\&quot;instance\&quot;&gt;   ... &lt;/hz:client&gt; ```  -   **MapStore and NearCache Configuration**  For map-store, you should set either the *class-name* or the *implementation* attribute.  ```xml &lt;hz:config&gt;   &lt;hz:map name=\&quot;map1\&quot;&gt;     &lt;hz:near-cache time-to-live-seconds=\&quot;0\&quot; max-idle-seconds=\&quot;60\&quot;         eviction-policy=\&quot;LRU\&quot; max-size=\&quot;5000\&quot;  invalidate-on-change=\&quot;true\&quot;/&gt;      &lt;hz:map-store enabled=\&quot;true\&quot; class-name=\&quot;com.foo.DummyStore\&quot;         write-delay-seconds=\&quot;0\&quot;/&gt;   &lt;/hz:map&gt;    &lt;hz:map name=\&quot;map2\&quot;&gt;     &lt;hz:map-store enabled=\&quot;true\&quot; implementation=\&quot;dummyMapStore\&quot;         write-delay-seconds=\&quot;0\&quot;/&gt;   &lt;/hz:map&gt;    &lt;bean id=\&quot;dummyMapStore\&quot; class=\&quot;com.foo.DummyStore\&quot; /&gt; &lt;/hz:config&gt; ```  "
});

documentTitles["springintegration.html#spring-managed-context-with-springaware"] = "Spring Managed Context with @SpringAware";
index.add({
    url: "springintegration.html#spring-managed-context-with-springaware",
    title: "Spring Managed Context with @SpringAware",
    body: "### Spring Managed Context with @SpringAware  Hazelcast Distributed Objects could be marked with @SpringAware if the object wants:  - to apply bean properties, - to apply factory callbacks such as `ApplicationContextAware`, `BeanNameAware`, - to apply bean post-processing annotations such as `InitializingBean`, `@PostConstruct`.  Hazelcast Distributed `ExecutorService`, or more generally any Hazelcast managed object, can benefit from these features. To enable SpringAware objects, you must first configure `HazelcastInstance` as explained in the [Spring Configuration section](#spring-configuration). To disable SpringAware objects, you need to add `&lt;hz:spring-aware enabled=\&quot;false\&quot; /&gt;` tag to the configuration.  "
});

documentTitles["springintegration.html#springaware-examples"] = "SpringAware Examples";
index.add({
    url: "springintegration.html#springaware-examples",
    title: "SpringAware Examples",
    body: "#### SpringAware Examples  - Configure a Hazelcast Instance (3.3.x) via Spring Configuration and define *someBean* as Spring Bean.   ```xml &lt;beans xmlns=\&quot;http://www.springframework.org/schema/beans\&quot;        xmlns:xsi=\&quot;http://www.w3.org/2001/XMLSchema-instance\&quot;        xmlns:context=\&quot;http://www.springframework.org/schema/context\&quot;        xmlns:hz=\&quot;http://www.hazelcast.com/schema/spring\&quot;        xsi:schemaLocation=\&quot;http://www.springframework.org/schema/beans                 http://www.springframework.org/schema/beans/spring-beans-3.0.xsd                 http://www.springframework.org/schema/context                 http://www.springframework.org/schema/context/spring-context-3.0.xsd                 http://www.hazelcast.com/schema/spring                 http://www.hazelcast.com/schema/spring/hazelcast-spring.xsd\&quot;&gt;    &lt;context:annotation-config /&gt;    &lt;hz:hazelcast id=\&quot;instance\&quot;&gt;     &lt;hz:config&gt;       &lt;!--Uncomment below line to disable SpringAware objects--&gt;       &lt;!--&lt;hz:spring-aware enabled=\&quot;false\&quot;--&gt;       &lt;hz:group name=\&quot;dev\&quot; password=\&quot;password\&quot;/&gt;       &lt;hz:network port=\&quot;5701\&quot; port-auto-increment=\&quot;false\&quot;&gt;         &lt;hz:join&gt;           &lt;hz:multicast enabled=\&quot;false\&quot; /&gt;           &lt;hz:tcp-ip enabled=\&quot;true\&quot;&gt;             &lt;hz:members&gt;10.10.1.2, 10.10.1.3&lt;/hz:members&gt;           &lt;/hz:tcp-ip&gt;         &lt;/hz:join&gt;       &lt;/hz:network&gt;       ...     &lt;/hz:config&gt;   &lt;/hz:hazelcast&gt;    &lt;bean id=\&quot;someBean\&quot; class=\&quot;com.hazelcast.examples.spring.SomeBean\&quot;       scope=\&quot;singleton\&quot; /&gt;   ... &lt;/beans&gt; ``` **Distributed Map Example:**  - Create a class called `SomeValue` which contains Spring Bean definitions like `ApplicationContext` and `SomeBean`.  ```java @SpringAware @Component(\&quot;someValue\&quot;) @Scope(\&quot;prototype\&quot;) public class SomeValue implements Serializable, ApplicationContextAware {    private transient ApplicationContext context;    private transient SomeBean someBean;    private transient boolean init = false;    public void setApplicationContext( ApplicationContext applicationContext )     throws BeansException {     context = applicationContext;   }    @Autowired   public void setSomeBean( SomeBean someBean)  {     this.someBean = someBean;   }    @PostConstruct   public void init() {     someBean.doSomethingUseful();     init = true;   }   ... } ```  - Get `SomeValue` Object from Context and put it into Hazelcast Distributed Map on Node-1.  ```java HazelcastInstance hazelcastInstance =      (HazelcastInstance) context.getBean( \&quot;hazelcast\&quot; ); SomeValue value = (SomeValue) context.getBean( \&quot;someValue\&quot; ) IMap&lt;String, SomeValue&gt; map = hazelcastInstance.getMap( \&quot;values\&quot; ); map.put( \&quot;key\&quot;, value ); ```  - Read `SomeValue` Object from Hazelcast Distributed Map and assert that `init` method is called since it is annotated with `@PostConstruct`.  ```java HazelcastInstance hazelcastInstance =      (HazelcastInstance) context.getBean( \&quot;hazelcast\&quot; ); IMap&lt;String, SomeValue&gt; map = hazelcastInstance.getMap( \&quot;values\&quot; ); SomeValue value = map.get( \&quot;key\&quot; ); Assert.assertTrue( value.init ); ```  **ExecutorService Example:**  - Create a Callable Class called SomeTask which contains Spring Bean definitions like `ApplicationContext`, `SomeBean`.   ```java @SpringAware public class SomeTask     implements Callable&lt;Long&gt;, ApplicationContextAware, Serializable {    private transient ApplicationContext context;    private transient SomeBean someBean;    public Long call() throws Exception {     return someBean.value;   }    public void setApplicationContext( ApplicationContext applicationContext )       throws BeansException {     context = applicationContext;   }    @Autowired   public void setSomeBean( SomeBean someBean ) {     this.someBean = someBean;   } } ```  - Submit `SomeTask` to two Hazelcast Members and assert that `someBean` is autowired.  ```java HazelcastInstance hazelcastInstance =     (HazelcastInstance) context.getBean( \&quot;hazelcast\&quot; ); SomeBean bean = (SomeBean) context.getBean( \&quot;someBean\&quot; );  Future&lt;Long&gt; f = hazelcastInstance.getExecutorService().submit(new SomeTask()); Assert.assertEquals(bean.value, f.get().longValue());  // choose a member Member member = hazelcastInstance.getCluster().getMembers().iterator().next();  Future&lt;Long&gt; f2 = (Future&lt;Long&gt;) hazelcast.getExecutorService()     .submitToMember(new SomeTask(), member); Assert.assertEquals(bean.value, f2.get().longValue()); ```   ![image](images/NoteSmall.jpg) ***NOTE:*** *Spring managed properties/fields are marked as `transient`.*    "
});

documentTitles["springintegration.html#spring-cache"] = "Spring Cache";
index.add({
    url: "springintegration.html#spring-cache",
    title: "Spring Cache",
    body: "### Spring Cache   ***Sample Code***: *Please see our sample application for [Spring Cache](https://github.com/hazelcast/hazelcast-code-samples/tree/master/hazelcast-integration/spring-cache-manager).* &lt;br&gt;&lt;/br&gt;  As of version 3.1, Spring Framework provides support for adding caching into an existing Spring application.   "
});

documentTitles["springintegration.html#declarative-spring-cache-configuration"] = "Declarative Spring Cache Configuration";
index.add({
    url: "springintegration.html#declarative-spring-cache-configuration",
    title: "Declarative Spring Cache Configuration",
    body: "#### Declarative Spring Cache Configuration  ```xml &lt;cache:annotation-driven cache-manager=\&quot;cacheManager\&quot; /&gt;  &lt;hz:hazelcast id=\&quot;hazelcast\&quot;&gt;   ... &lt;/hz:hazelcast&gt;  &lt;bean id=\&quot;cacheManager\&quot; class=\&quot;com.hazelcast.spring.cache.HazelcastCacheManager\&quot;&gt;   &lt;constructor-arg ref=\&quot;instance\&quot;/&gt; &lt;/bean&gt; ```  "
});

documentTitles["springintegration.html#annotation-based-spring-cache-configuration"] = "Annotation Based Spring Cache Configuration";
index.add({
    url: "springintegration.html#annotation-based-spring-cache-configuration",
    title: "Annotation Based Spring Cache Configuration",
    body: "#### Annotation Based Spring Cache Configuration  Annotation Based Configuration does not require any XML definition.  - Implement a `CachingConfiguration` class with related Annotations.  ```java @Configuration @EnableCaching public class CachingConfiguration implements CachingConfigurer{     @Bean     public CacheManager cacheManager() {         ClientConfig config = new ClientConfig();         HazelcastInstance client = HazelcastClient.newHazelcastClient(config);         return new HazelcastCacheManager(client);     }     @Bean     public KeyGenerator keyGenerator() {         return null;     } ```  - Launch Application Context and register `CachingConfiguration`.  ```java AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(); context.register(CachingConfiguration.class); context.refresh(); ```  For more information about Spring Cache, please see [Spring Cache Abstraction](http://static.springsource.org/spring/docs/3.1.x/spring-framework-reference/html/cache.html).    "
});

documentTitles["springintegration.html#hibernate-2nd-level-cache-config"] = "Hibernate 2nd Level Cache Config";
index.add({
    url: "springintegration.html#hibernate-2nd-level-cache-config",
    title: "Hibernate 2nd Level Cache Config",
    body: "### Hibernate 2nd Level Cache Config  ***Sample Code***: *Please see our [sample application](https://github.com/hazelcast/hazelcast-code-samples/tree/master/hazelcast-integration/spring-hibernate-2ndlevel-cache) for Hibernate 2nd Level Cache Config.* &lt;br&gt;&lt;/br&gt;  If you are using Hibernate with Hazelcast as 2nd level cache provider, you can easily create `RegionFactory` instances within Spring configuration (by Spring version 3.1). That way, you can use the same `HazelcastInstance` as Hibernate L2 cache instance.  ```xml &lt;hz:hibernate-region-factory id=\&quot;regionFactory\&quot; instance-ref=\&quot;instance\&quot;     mode=\&quot;LOCAL\&quot; /&gt; ... &lt;bean id=\&quot;sessionFactory\&quot;        class=\&quot;org.springframework.orm.hibernate3.LocalSessionFactoryBean\&quot;  	  scope=\&quot;singleton\&quot;&gt;   &lt;property name=\&quot;dataSource\&quot; ref=\&quot;dataSource\&quot;/&gt;   &lt;property name=\&quot;cacheRegionFactory\&quot; ref=\&quot;regionFactory\&quot; /&gt;   ... &lt;/bean&gt; ```  **Hibernate RegionFactory Modes**  - LOCAL - DISTRIBUTED   Please refer to the Hibernate [RegionFactory Options section](#regionfactory-options) for more information.  "
});

documentTitles["springintegration.html#best-practices"] = "Best Practices";
index.add({
    url: "springintegration.html#best-practices",
    title: "Best Practices",
    body: "### Best Practices  "
});

documentTitles["springintegration.html#avoid-out-of-memory-error-with-large-distributed-data-structures"] = "Avoid Out of Memory Error with Large Distributed Data Structures";
index.add({
    url: "springintegration.html#avoid-out-of-memory-error-with-large-distributed-data-structures",
    title: "Avoid Out of Memory Error with Large Distributed Data Structures",
    body: "#### Avoid Out of Memory Error with Large Distributed Data Structures  Spring tries to create a new `Map`/`Collection` instance and fill the new instance by iterating and converting values of the original `Map`/`Collection` (`IMap`, `IQueue`, etc.) to required types when generic type parameters of the original `Map`/`Collection` and the target property/attribute do not match.  Since Hazelcast `Map`s/`Collection`s are designed to hold very large data which a single machine cannot carry, iterating through whole values can cause out of memory errors.  To avoid this issue, the target property/attribute can be declared as un-typed `Map`/`Collection` as shown below.  ```java public class SomeBean {   @Autowired   IMap map; // instead of IMap&lt;K, V&gt; map    @Autowired   IQueue queue; // instead of IQueue&lt;E&gt; queue    ... } ```  Or, parameters of injection methods (constructor, setter) can be un-typed as shown below.  ```java public class SomeBean {    IMap&lt;K, V&gt; map;    IQueue&lt;E&gt; queue;    // Instead of IMap&lt;K, V&gt; map   public SomeBean(IMap map) {     this.map = map;   }    ...    // Instead of IQueue&lt;E&gt; queue   public void setQueue(IQueue queue) {     this.queue = queue;   }   ... } ``` &lt;br&gt; &lt;/br&gt;  ***RELATED INFORMATION***  *For more information please see [Spring issue-3407](https://jira.springsource.org/browse/SPR-3407).*  "
});



documentTitles["storage.html#storage"] = "Storage";
index.add({
    url: "storage.html#storage",
    title: "Storage",
    body: "# Storage  "
});

documentTitles["storage.html#high-density-memory-store"] = "High-Density Memory Store";
index.add({
    url: "storage.html#high-density-memory-store",
    title: "High-Density Memory Store",
    body: "## High-Density Memory Store  ![](images/enterprise-onlycopy.jpg)  Hazelcast High-Density Memory Store, the successor to Hazelcast Elastic Memory, is Hazelcast's new enterprise grade backend storage solution. This solution is used with the Hazelcast JCache implementation.   By default, Hazelcast offers a production ready, low garbage collection (GC) pressure, storage backend. Serialized keys and values are still stored in the standard Java map, such as data structures on the heap. The data structures are stored in serialized form for the highest data compaction, and are still subject to Java Garbage Collection.  In Hazelcast Enterprise, the High-Density Memory Store is built around a pluggable memory manager which enables multiple memory stores. These memory stores are all accessible using a common access layer that scales up to Terabytes of main memory on a single JVM. At the same time, by further minimizing the GC pressure, High-Density Memory Store enables predictable application scaling and boosts performance and latency while minimizing pauses for Java Garbage Collection.  This foundation includes, but is not limited to, storing keys and values next to the heap in a native memory region.  &lt;br&gt;&lt;/br&gt; ***RELATED INFORMATION***  *Please refer to the [Hazelcast JCache chapter](#hazelcast-jcache) for the details of Hazelcast JCache implementation. As mentioned, High-Density Memory Store is used with Hazelcast JCache implementation.* &lt;br&gt;&lt;/br&gt;   "
});

documentTitles["storage.html#configuring-hi-density-memory-store"] = "Configuring Hi-Density Memory Store";
index.add({
    url: "storage.html#configuring-hi-density-memory-store",
    title: "Configuring Hi-Density Memory Store",
    body: "### Configuring Hi-Density Memory Store  To use the Hi-Density memory storage, the native memory usage must be enabled using the programmatic or declarative configuration. Also, you can configure its size, memory allocator type, minimum block size, page size and metadata space percentage.  - **size:** Size of the total native memory to allocate. Default value is **512 MB**. - **allocator type:** Type of the memory allocator. Available values are:   * STANDARD: allocate/free memory using default OS memory manager.   * POOLED: manage memory blocks in thread local pools.     Default value is **POOLED**. - **minimum block size:** Minimum size of the blocks in bytes to split and fragment a page block to assign to an allocation request. It is used only by the **POOLED** memory allocator. Default value is **16**. - **page size:** Size of the page in bytes to allocate memory as a block. It is used only by the **POOLED** memory allocator. Default value is `1 &lt;&lt; 22` = **4194304 Bytes**, about **4 MB**. - **metadata space percentage:** Defines the percentage of the allocated native memory that is used for the metadata such as indexes, offsets, etc. It is used only by the **POOLED** memory allocator. Default value is **12.5**.  The following is the programmatic configuration example.  ```java MemorySize memorySize = new MemorySize(512, MemoryUnit.MEGABYTES); NativeMemoryConfig nativeMemoryConfig =                 new NativeMemoryConfig()                         .setAllocatorType(NativeMemoryConfig.MemoryAllocatorType.POOLED)                         .setSize(memorySize)                         .setEnabled(true)                         .setMinBlockSize(16)                         .setPageSize(1 &lt;&lt; 20); ```  The following is the declarative configuration example.  ```xml &lt;native-memory enabled=\&quot;true\&quot; allocator-type=\&quot;POOLED\&quot;&gt;   &lt;size value=\&quot;512\&quot; unit=\&quot;MEGABYTES\&quot;/&gt; &lt;/native-memory&gt; ```      "
});



documentTitles["clients.html#clients"] = "Clients";
index.add({
    url: "clients.html#clients",
    title: "Clients",
    body: "# Clients  There are currently three ways to connect to a running Hazelcast cluster:  - Native Clients ([Java](#java-client), [C++](#c-+-+-client), [.NET](#net-client))  - [Memcache Clients](#memcache-client)  - [REST Client](#rest-client)    Native Clients enable you to perform almost all Hazelcast operations without being a member of the cluster. It connects to one of the cluster members and delegates all cluster wide operations to it (*dummy client*), or it connects to all of them and delegates operations smartly (*smart client*). When the relied cluster member dies, the client will transparently switch to another live member.  There can be hundreds, even thousands of clients connected to the cluster. By default, there are ***core count*** \* ***10*** threads on the server side that will handle all the requests (e.g. if the server has 4 cores, it will be 40).  Imagine a trading application where all the trading data are stored and managed in a Hazelcast cluster with tens of nodes. Swing/Web applications at the traders' desktops can use Native Clients to access and modify the data in the Hazelcast cluster.  Currently, Hazelcast has Native Java, C++ and .NET Clients available.  "
});



documentTitles["javaclient.html#java-client"] = "Java Client";
index.add({
    url: "javaclient.html#java-client",
    title: "Java Client",
    body: "## Java Client  The Java client is the most full featured client. It is offered both with Hazelcast and Hazelcast Enterprise.   "
});

documentTitles["javaclient.html#java-client-overview"] = "Java Client Overview";
index.add({
    url: "javaclient.html#java-client-overview",
    title: "Java Client Overview",
    body: "### Java Client Overview  The main idea behind the Java client is to provide the same Hazelcast functionality by proxying each operation through a Hazelcast node. It can access and change distributed data, and it can listen to distributed events of an already established Hazelcast cluster from another Java application.   "
});

documentTitles["javaclient.html#java-client-dependencies"] = "Java Client Dependencies";
index.add({
    url: "javaclient.html#java-client-dependencies",
    title: "Java Client Dependencies",
    body: "### Java Client Dependencies  You should include two dependencies in your classpath to start using the Hazelcast client: `hazelcast.jar` and `hazelcast-client.jar`.  After adding these dependencies, you can start using the Hazelcast client as if you are using the Hazelcast API. The differences are discussed in the below sections.  If you prefer to use maven, add the following lines to your `pom.xml`.  ```xml &lt;dependency&gt;     &lt;groupId&gt;com.hazelcast&lt;/groupId&gt;     &lt;artifactId&gt;hazelcast-client&lt;/artifactId&gt;     &lt;version&gt;$LATEST_VERSION$&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt;     &lt;groupId&gt;com.hazelcast&lt;/groupId&gt;     &lt;artifactId&gt;hazelcast&lt;/artifactId&gt;     &lt;version&gt;$LATEST_VERSION$&lt;/version&gt; &lt;/dependency&gt; ```  "
});

documentTitles["javaclient.html#getting-started-with-client-api"] = "Getting Started with Client API";
index.add({
    url: "javaclient.html#getting-started-with-client-api",
    title: "Getting Started with Client API",
    body: "### Getting Started with Client API  The first step is configuration. You can configure the Java client declaratively or programmatically. We will use the programmatic approach throughout this tutorial. Please refer to the [Java Client Declarative Configuration section](#java-client-declarative-configuration) for details.  ```java ClientConfig clientConfig = new ClientConfig(); clientConfig.getGroupConfig().setName(\&quot;dev\&quot;).setPassword(\&quot;dev-pass\&quot;); clientConfig.getNetworkConfig().addAddress(\&quot;10.90.0.1\&quot;, \&quot;10.90.0.2:5702\&quot;); ```  The second step is to initialize the HazelcastInstance to be connected to the cluster.  ```java HazelcastInstance client = HazelcastClient.newHazelcastClient(clientConfig); ```  *This client interface is your gateway to access all Hazelcast distributed objects.*  Let's create a map and populate it with some data.  ```java  IMap&lt;String, Customer&gt; mapCustomers = client.getMap(\&quot;customers\&quot;); //creates the map proxy  mapCustomers.put(\&quot;1\&quot;, new Customer(\&quot;Joe\&quot;, \&quot;Smith\&quot;)); mapCustomers.put(\&quot;2\&quot;, new Customer(\&quot;Ali\&quot;, \&quot;Selam\&quot;)); mapCustomers.put(\&quot;3\&quot;, new Customer(\&quot;Avi\&quot;, \&quot;Noyan\&quot;));  ```  As a final step, if you are done with your client, you can shut it down as shown below. This will release all the used resources and will close connections to the cluster.  ```java  client.shutdown();  ```  "
});

documentTitles["javaclient.html#java-client-operation-modes"] = "Java Client Operation modes";
index.add({
    url: "javaclient.html#java-client-operation-modes",
    title: "Java Client Operation modes",
    body: "### Java Client Operation modes  The client has two operation modes because of the distributed nature of the data and cluster.  "
});

documentTitles["javaclient.html#smart-client"] = "Smart Client";
index.add({
    url: "javaclient.html#smart-client",
    title: "Smart Client",
    body: "#### Smart Client  In smart mode, clients connect to each cluster node. Since each data partition uses the well known and consistent hashing algorithm, each client can send an operation to the relevant cluster node, which increases the overall throughput and efficiency. Smart mode is the default mode.   "
});

documentTitles["javaclient.html#dummy-client"] = "Dummy Client";
index.add({
    url: "javaclient.html#dummy-client",
    title: "Dummy Client",
    body: "#### Dummy Client  For some cases, the clients can be required to connect to a single node instead of to each node in the cluster. Firewalls, security, or some custom networking issues can be the reason for these cases.  In dummy client mode, the client will only connect to one of the configured addresses. This single node will behave as a gateway to the other nodes. For any operation requested from the client, it will redirect the request to the relevant node and return the response back to the client returned from this node.  "
});

documentTitles["javaclient.html#fail-case-handling"] = "Fail Case Handling";
index.add({
    url: "javaclient.html#fail-case-handling",
    title: "Fail Case Handling",
    body: "### Fail Case Handling  There are two main failure cases you should be aware of, and configurations you can perform to achieve proper behavior.  "
});

documentTitles["javaclient.html#client-connection-failure"] = "Client Connection Failure";
index.add({
    url: "javaclient.html#client-connection-failure",
    title: "Client Connection Failure",
    body: "#### Client Connection Failure   While the client is trying to connect initially to one of the members in the `ClientNetworkConfig.addressList`, all the members might be not available. Instead of giving up, throwing an exception and stopping the client, the client will retry as many as `connectionAttemptLimit` times. Please see the [Connection Attempt Limit section](#connection-attempt-limit).  The client executes each operation through the already established connection to the cluster. If this connection(s) disconnects or drops, the client will try to reconnect as configured.   "
});

documentTitles["javaclient.html#retry-able-operation-failure"] = "Retry-able Operation Failure";
index.add({
    url: "javaclient.html#retry-able-operation-failure",
    title: "Retry-able Operation Failure",
    body: "#### Retry-able Operation Failure  While sending the requests to related nodes, operation can fail due to various reasons. For any read-only operation, you can have your client retry sending the operation by enabling `redoOperation`. Please see the [Redo Operation section](#redo-operation).  The number of retries is given with the property `hazelcast.client.request.retry.count` in `ClientProperties`. The client will resend the request as many as RETRY-COUNT, then it will throw an exception. Please see the [Client Properties section](#client-properties).   "
});

documentTitles["javaclient.html#supported-distributed-data-structures"] = "Supported Distributed Data Structures";
index.add({
    url: "javaclient.html#supported-distributed-data-structures",
    title: "Supported Distributed Data Structures",
    body: "### Supported Distributed Data Structures  Most of the Distributed Data Structures are supported by the client. Please check for the exceptions for the clients in other languages.  As a general rule, you configure these data structures on the server side and access them through a proxy on the client side.  "
});

documentTitles["javaclient.html#map"] = "Map";
index.add({
    url: "javaclient.html#map",
    title: "Map",
    body: "#### Map  You can use any [Distributed Map](#map) object with the client, as shown below.  ```java Imap&lt;Integer, String&gt; map = client.getMap(“myMap”);  map.put(1, “Ali”); String value= map.get(1); map.remove(1); ```  Locality is ambiguous for the client, so `addEntryListener` and `localKeySet` are not supported. Please see the [Distributed Map section](#map) for more information.  "
});

documentTitles["javaclient.html#multimap"] = "MultiMap";
index.add({
    url: "javaclient.html#multimap",
    title: "MultiMap",
    body: "#### MultiMap  A MultiMap usage example is shown below.   ```java MultiMap&lt;Integer, String&gt; multiMap = client.getMultiMap(\&quot;myMultiMap\&quot;);  multiMap.put(1,”ali”); multiMap.put(1,”veli”);  Collection&lt;String&gt; values = multiMap.get(1); ```  `addEntryListener`, `localKeySet` and  `getLocalMultiMapStats` are not supported because locality is ambiguous for the client. Please see the [Distributed MultiMap section](#multimap) for more information.  "
});

documentTitles["javaclient.html#queue"] = "Queue";
index.add({
    url: "javaclient.html#queue",
    title: "Queue",
    body: "#### Queue  A sample usage is shown below.   ```java IQueue&lt;String&gt; myQueue = client.getQueue(“theQueue”); myQueue.offer(“ali”) ```  `getLocalQueueStats` is not supported because locality is ambiguous for the client. Please see the [Distributed Queue section](#queue) for more information.  "
});

documentTitles["javaclient.html#topic"] = "Topic";
index.add({
    url: "javaclient.html#topic",
    title: "Topic",
    body: "#### Topic  `getLocalTopicStats` is not supported because locality is ambiguous for the client.  "
});

documentTitles["javaclient.html#other-supported-distributed-structures"] = "Other Supported Distributed Structures";
index.add({
    url: "javaclient.html#other-supported-distributed-structures",
    title: "Other Supported Distributed Structures",
    body: "#### Other Supported Distributed Structures  The distributed data structures listed below are also supported by the client. Since their logic is the same in both the node side and client side, you can refer to their sections as listed below.  - [Replicated Map](#replicated-map-beta) - [MapReduce](#mapreduce) - [List](#list) - [Set](#set) - [IAtomicLong](#iatomiclong) - [IAtomicReference](#iatomicreference) - [ICountDownLatch](#icountdownlatch) - [ISemaphore](#isemaphore) - [IdGenerator](#idgenerator) - [Lock](#lock)    "
});

documentTitles["javaclient.html#client-services"] = "Client Services";
index.add({
    url: "javaclient.html#client-services",
    title: "Client Services",
    body: "### Client Services  Below services are provided for some common functionalities on the client side.  "
});

documentTitles["javaclient.html#distributed-executor-service"] = "Distributed Executor Service";
index.add({
    url: "javaclient.html#distributed-executor-service",
    title: "Distributed Executor Service",
    body: "#### Distributed Executor Service  The distributed executor service is for distributed computing. It can be used to execute tasks on the cluster on a designated partition or on all the partitions. It can also be used to process entries. Please see the [Distributed Executor Service section](#executor-service) for more information.  ```java IExecutorService executorService = client.getExecutorService(\&quot;default\&quot;); ```   After getting an instance of `IExecutorService`, you can use the instance as the interface with the one provided on the server side. Please see the [Distributed Computing chapter](#distributed-computing) chapter for detailed usage.  ![image](images/NoteSmall.jpg) ***NOTE:*** *This service is only supported by the Java client.*   "
});

documentTitles["javaclient.html#client-service"] = "Client Service";
index.add({
    url: "javaclient.html#client-service",
    title: "Client Service",
    body: "#### Client Service  If you need to track clients and you want to listen to their connection events, see the example code below.  ```java final ClientService clientService = client.getClientService(); final Collection&lt;Client&gt; connectedClients = clientService.getConnectedClients();  clientService.addClientListener(new ClientListener() {     @Override     public void clientConnected(Client client) { 	//Handle client connected event     }      @Override     public void clientDisconnected(Client client) {       //Handle client disconnected event     } }); ```  "
});

documentTitles["javaclient.html#partition-service"] = "Partition Service";
index.add({
    url: "javaclient.html#partition-service",
    title: "Partition Service",
    body: "#### Partition Service  You use partition service to find the partition of a key. It will return all partitions. See the example code below.  ```java PartitionService partitionService = client.getPartitionService();  //partition of a key Partition partition = partitionService.getPartition(key);  //all partitions Set&lt;Partition&gt; partitions = partitionService.getPartitions(); ```   "
});

documentTitles["javaclient.html#lifecycle-service"] = "Lifecycle Service";
index.add({
    url: "javaclient.html#lifecycle-service",
    title: "Lifecycle Service",
    body: "#### Lifecycle Service  Lifecycle handling performs the following:  - checks to see if the client is running, - shuts down the client gracefully, - terminates the client ungracefully (forced shutdown), and - adds/removes lifecycle listeners.   ```java LifecycleService lifecycleService = client.getLifecycleService();  if(lifecycleService.isRunning()){     //it is running }  //shutdown client gracefully lifecycleService.shutdown();  ```  "
});

documentTitles["javaclient.html#client-listeners"] = "Client Listeners";
index.add({
    url: "javaclient.html#client-listeners",
    title: "Client Listeners",
    body: "### Client Listeners  You can configure listeners to listen to various event types on the client side. You can configure global events not relating to any distributed object through [ListenerConfig](#listenerconfig). You should configure distributed object listeners like map entry listeners or list item listeners through their proxies. You can refer to the related sections under each distributed data structure in this reference manual.  "
});

documentTitles["javaclient.html#client-transactions"] = "Client Transactions";
index.add({
    url: "javaclient.html#client-transactions",
    title: "Client Transactions",
    body: "### Client Transactions  Transactional distributed objects are supported on the client side. Please see the [Transactions chapter](#transactions) on how to use them.   "
});

documentTitles["javaclient.html#network-configuration-options"] = "Network Configuration Options";
index.add({
    url: "javaclient.html#network-configuration-options",
    title: "Network Configuration Options",
    body: "### Network Configuration Options  ```java ClientConfig clientConfig = new ClientConfig(); ClientNetworkConfig networkConfig = clientConfig.getNetworkConfig(); ```  "
});

documentTitles["javaclient.html#address-list"] = "Address List";
index.add({
    url: "javaclient.html#address-list",
    title: "Address List",
    body: "#### Address List Address List is the initial list of cluster addresses to which the client will connect. The client uses this list to find an alive node. Although it may be enough to give only one address of a node in the cluster (since all nodes communicate with each other), it is recommended that you give all the nodes’ addresses.  If the port part is omitted, then 5701, 5702, and 5703 will be tried in random order.  ```java clientConfig.getNetworkConfig().addAddress(\&quot;10.1.1.21\&quot;, \&quot;10.1.1.22:5703\&quot;); ```  You can provide multiple addresses with ports provided or not as seen above. The provided list is shuffled and tried in random order.  Default value is *localhost*.  "
});

documentTitles["javaclient.html#smart-routing"] = "Smart Routing";
index.add({
    url: "javaclient.html#smart-routing",
    title: "Smart Routing",
    body: "#### Smart Routing  `setSmartRouting` defines whether the client mode is smart or dummy.  ```java //sets client to dummy client mode clientConfig.getNetworkConfig().setSmartRouting(false); ``` The default is *smart client* mode.  "
});

documentTitles["javaclient.html#redo-operation"] = "Redo Operation";
index.add({
    url: "javaclient.html#redo-operation",
    title: "Redo Operation",
    body: "#### Redo Operation  `setRedoOperation` enables/disables redo-able operations as described in [Retry-able Operation Failure](#retry-able-operation-failure).  ```java //enables redo clientConfig.getNetworkConfig().setRedoOperation(true); ``` Default is *disabled*.  "
});

documentTitles["javaclient.html#connection-timeout"] = "Connection Timeout";
index.add({
    url: "javaclient.html#connection-timeout",
    title: "Connection Timeout",
    body: "#### Connection Timeout  `setConnectionTimeout` is the timeout value in milliseconds for nodes to accept client connection requests.  ```java //enables redo clientConfig.getNetworkConfig().setConnectionTimeout(1000); ```  The default value is *5000* milliseconds.  "
});

documentTitles["javaclient.html#connection-attempt-limit"] = "Connection Attempt Limit";
index.add({
    url: "javaclient.html#connection-attempt-limit",
    title: "Connection Attempt Limit",
    body: "#### Connection Attempt Limit  While the client is trying to connect initially to one of the members in the `ClientNetworkConfig.addressList`, all members might be not available. Instead of giving up, throwing an exception and stopping the client, the client will retry as many as `ClientNetworkConfig.connectionAttemptLimit` times.  ```java //enables redo clientConfig.getNetworkConfig().setConnectionAttemptLimit(5); ```  Default value is *2*.  "
});

documentTitles["javaclient.html#connection-attempt-period"] = "Connection Attempt Period";
index.add({
    url: "javaclient.html#connection-attempt-period",
    title: "Connection Attempt Period",
    body: "#### Connection Attempt Period  `etConnectionAttemptPeriod` is the duration in milliseconds between the connection attempts defined by `ClientNetworkConfig.connectionAttemptLimit`.  ```java //enables redo clientConfig.getNetworkConfig().setConnectionAttemptPeriod(5000); ```  Default value is *3000*.  "
});

documentTitles["javaclient.html#client-socket-interceptor"] = "Client Socket Interceptor";
index.add({
    url: "javaclient.html#client-socket-interceptor",
    title: "Client Socket Interceptor",
    body: "#### Client Socket Interceptor  ![](images/enterprise-onlycopy.jpg)  Following is a client configuration to set a socket intercepter. Any class implementing `com.hazelcast.nio.SocketInterceptor` is a socket Interceptor.   ```java public interface SocketInterceptor {      void init(Properties properties);      void onConnect(Socket connectedSocket) throws IOException; } ```  `SocketInterceptor` has two steps. First, it will be initialized by the configured properties. Second, it will be informed just after the socket is connected using `onConnect`.   ```java SocketInterceptorConfig socketInterceptorConfig = clientConfig                .getNetworkConfig().getSocketInterceptorConfig();  MyClientSocketInterceptor myClientSocketInterceptor = new MyClientSocketInterceptor();  socketInterceptorConfig.setEnabled(true); socketInterceptorConfig.setImplementation(myClientSocketInterceptor); ```  If you want to configure the socket connector with a class name instead of an instance, see the example below.  ```java SocketInterceptorConfig socketInterceptorConfig = clientConfig             .getNetworkConfig().getSocketInterceptorConfig();  MyClientSocketInterceptor myClientSocketInterceptor = new MyClientSocketInterceptor();  socketInterceptorConfig.setEnabled(true);  //These properties are provided to interceptor during init socketInterceptorConfig.setProperty(\&quot;kerberos-host\&quot;,\&quot;kerb-host-name\&quot;); socketInterceptorConfig.setProperty(\&quot;kerberos-config-file\&quot;,\&quot;kerb.conf\&quot;);  socketInterceptorConfig.setClassName(myClientSocketInterceptor); ```  Please see the [Socket Interceptor section](#socket-interceptor) for more information.  "
});

documentTitles["javaclient.html#client-socket-options"] = "Client Socket Options";
index.add({
    url: "javaclient.html#client-socket-options",
    title: "Client Socket Options",
    body: "#### Client Socket Options  You can configure the network socket options using `SocketOptions`. It has the following methods.  - `socketOptions.setKeepAlive(x)`: Enables/disables the *SO_KEEPALIVE* socket option. The default value is `true`.  - `socketOptions.setTcpNoDelay(x)`: Enables/disables the *TCP_NODELAY* socket option. The default value is `true`.  - `socketOptions.setReuseAddress(x)`: Enables/disables the *SO_REUSEADDR* socket option. The default value is `true`.  - `socketOptions.setLingerSeconds(x)`: Enables/disables *SO_LINGER* with the specified linger time in seconds. The default value is `3`.  - `socketOptions.setBufferSize(x)`: Sets the *SO_SNDBUF* and *SO_RCVBUF* options to the specified value in KB for this Socket. The default value is `32`.   ```java SocketOptions socketOptions = clientConfig.getNetworkConfig().getSocketOptions(); socketOptions.setBufferSize(32); socketOptions.setKeepAlive(true); socketOptions.setTcpNoDelay(true); socketOptions.setReuseAddress(true); socketOptions.setLingerSeconds(3); ```  "
});

documentTitles["javaclient.html#client-ssl"] = "Client SSL";
index.add({
    url: "javaclient.html#client-ssl",
    title: "Client SSL",
    body: "#### Client SSL  ![](images/enterprise-onlycopy.jpg)   You can use SSL to secure the connection between the client and the nodes. Please see the [Client SSLConfig section](#client-sslconfig) on how to configure it.  "
});

documentTitles["javaclient.html#configuration-for-aws"] = "Configuration for AWS";
index.add({
    url: "javaclient.html#configuration-for-aws",
    title: "Configuration for AWS",
    body: "#### Configuration for AWS  The example declarative and programmatic configurations below show how to configure a Java client for connecting to a Hazelcast cluster in AWS.  Declarative Configuration:  ```xml &lt;aws enabled=\&quot;true\&quot;&gt;   &lt;!-- optional default value is false --&gt;   &lt;inside-aws&gt;false&lt;/inside-aws&gt;   &lt;access-key&gt;my-access-key&lt;/access-key&gt;   &lt;secret-key&gt;my-secret-key&lt;/secret-key&gt;   &lt;!-- optional, default is us-east-1 --&gt;   &lt;region&gt;us-west-1&lt;/region&gt;   &lt;!-- optional, default is ec2.amazonaws.com. If set, region shouldn't be set     as it will override this property   --&gt;   &lt;host-header&gt;ec2.amazonaws.com&lt;/host-header&gt;   &lt;!-- optional --&gt;   &lt;security-group-name&gt;hazelcast-sg&lt;/security-group-name&gt;   &lt;!-- optional --&gt;   &lt;tag-key&gt;type&lt;/tag-key&gt;   &lt;!-- optional --&gt;   &lt;tag-value&gt;hz-nodes&lt;/tag-value&gt; &lt;/aws&gt; ```  Programmatic Configuration:  ```java ClientConfig clientConfig = new ClientConfig(); ClientAwsConfig clientAwsConfig = new ClientAwsConfig(); clientAwsConfig.setInsideAws( false )                .setAccessKey( \&quot;my-access-key\&quot; )                .setSecretKey( \&quot;my-secret-key\&quot; )                .setRegion( \&quot;us-west-1\&quot; )                .setHostHeader( \&quot;ec2.amazonaws.com\&quot; )                .setSecurityGroupName( \&quot;&gt;hazelcast-sg\&quot; )                .setTagKey( \&quot;type\&quot; )                .setTagValue( \&quot;hz-nodes\&quot; ); clientConfig.getNetworkConfig().setAwsConfig( clientAwsConfig ); HazelcastInstance client = HazelcastClient.newHazelcastClient( clientConfig ); ```  ![image](images/NoteSmall.jpg) ***NOTE:*** *If the *`inside-aws`* parameter is not set, the private addresses of nodes will always be converted to public addresses. Also, the client will use public addresses to connect to the nodes. In order to use private addresses, set the *`inside-aws`* parameter to *`true`*. Also note that, when connecting outside from AWS, setting the *`inside-aws`* parameter to *`true`* will cause the client to not be able to reach the nodes.*  "
});

documentTitles["javaclient.html#load-balancer"] = "Load Balancer";
index.add({
    url: "javaclient.html#load-balancer",
    title: "Load Balancer",
    body: "#### Load Balancer  `LoadBalancer` allows you to send operations to one of a number of endpoints (Members). Its main purpose is to determine the next `Member` if queried.  It is up to your implementation to use different load balancing policies. You should implement the interface `com.hazelcast.client.LoadBalancer` for that purpose.  If the client is configured in smart mode, only the operations that are not key-based will be routed to the endpoint that is returned by the `LoadBalancer`. If the client is not a smart client, `LoadBalancer` will be ignored.  To configure client load balance, please see the [Load Balancer Config section](#loadbalancerconfig) and [Java Client Declarative Configuration section](#java-client-declarative-configuration).   "
});

documentTitles["javaclient.html#client-near-cache"] = "Client Near Cache";
index.add({
    url: "javaclient.html#client-near-cache",
    title: "Client Near Cache",
    body: "### Client Near Cache Hazelcast distributed map has a Near Cache feature to reduce network latencies. Since the client always requests data from the cluster nodes, it can be helpful for some of your use cases to configure a near cache on the client side. The client supports the same Near Cache that is used in Hazelcast distributed map.  "
});

documentTitles["javaclient.html#client-sslconfig"] = "Client SSLConfig";
index.add({
    url: "javaclient.html#client-sslconfig",
    title: "Client SSLConfig",
    body: "### Client SSLConfig  ![](images/enterprise-onlycopy.jpg)  If you want SSL enabled for the client-cluster connection, you should set `SSLConfig`. Once set, the connection (socket) is established out of an SSL factory defined either by a factory class name or factory implementation. Please see the `SSLConfig` class in the `com.hazelcast.config` package at the JavaDocs page of the [Hazelcast Documentation](http://www.hazelcast.org/documentation/) web page.   "
});

documentTitles["javaclient.html#java-client-configuration"] = "Java Client Configuration";
index.add({
    url: "javaclient.html#java-client-configuration",
    title: "Java Client Configuration",
    body: "### Java Client Configuration  You can declare the Hazelcast Java client declaratively or programmatically.  "
});

documentTitles["javaclient.html#java-client-declarative-configuration"] = "Java Client Declarative Configuration";
index.add({
    url: "javaclient.html#java-client-declarative-configuration",
    title: "Java Client Declarative Configuration",
    body: "#### Java Client Declarative Configuration  You can configure the Java client using an XML configuration file. Below is a generic template for a declarative configuration.  ```xml  &lt;hazelcast-client xsi:schemaLocation=     \&quot;http://www.hazelcast.com/schema/client-config hazelcast-client-config-3.3.xsd\&quot;                   xmlns=\&quot;http://www.hazelcast.com/schema/client-config\&quot;                   xmlns:xsi=\&quot;http://www.w3.org/2001/XMLSchema-instance\&quot;&gt;      &lt;!--Cluster name to connect--&gt;     &lt;group&gt;         &lt;name&gt;GROUP_NAME&lt;/name&gt;         &lt;password&gt;GROUP_PASS&lt;/password&gt;     &lt;/group&gt;      &lt;!--client properties--&gt;     &lt;properties&gt;         &lt;property name=\&quot;hazelcast.client.connection.timeout\&quot;&gt;10000&lt;/property&gt;         &lt;property name=\&quot;hazelcast.client.retry.count\&quot;&gt;6&lt;/property&gt;     &lt;/properties&gt;      &lt;!--Network configuration details--&gt;     &lt;network&gt;         &lt;cluster-members&gt;             &lt;!--initial cluster members to connect--&gt;             &lt;address&gt;127.0.0.1&lt;/address&gt;             &lt;address&gt;127.0.0.2&lt;/address&gt;         &lt;/cluster-members&gt;          &lt;smart-routing&gt;true&lt;/smart-routing&gt;         &lt;redo-operation&gt;true&lt;/redo-operation&gt;          &lt;socket-interceptor enabled=\&quot;true\&quot;&gt;             &lt;!--socket-interceptor configuration details--&gt;         &lt;/socket-interceptor&gt;          &lt;aws enabled=\&quot;true\&quot; connection-timeout-seconds=\&quot;11\&quot;&gt;             &lt;!--AWS configuration details--&gt;         &lt;/aws&gt;     &lt;/network&gt;      &lt;!--local executor pool size--&gt;     &lt;executor-pool-size&gt;40&lt;/executor-pool-size&gt;      &lt;!--security credentials configuration--&gt;     &lt;security&gt;         &lt;credentials&gt;com.hazelcast.security.UsernamePasswordCredentials&lt;/credentials&gt;     &lt;/security&gt;      &lt;listeners&gt;         &lt;!--listeners--&gt;     &lt;/listeners&gt;      &lt;serialization&gt;         &lt;!--serialization configuration details--&gt;     &lt;/serialization&gt;      &lt;proxy-factories&gt;         &lt;!--ProxyFactory configuration details--&gt;     &lt;/proxy-factories&gt;      &lt;!--load balancer configuration--&gt;     &lt;!-- type can be \&quot;round-robin\&quot; or \&quot;random\&quot; --&gt;     &lt;load-balancer type=\&quot;random\&quot;/&gt;      &lt;near-cache name=\&quot;mapName\&quot;&gt;         &lt;!--near cache configuration details of a map--&gt;     &lt;/near-cache&gt;  &lt;/hazelcast-client&gt; ```   "
});

documentTitles["javaclient.html#java-client-programmatic-configuration"] = "Java Client Programmatic Configuration";
index.add({
    url: "javaclient.html#java-client-programmatic-configuration",
    title: "Java Client Programmatic Configuration",
    body: "#### Java Client Programmatic Configuration  Using the configuration API, you can configure a `ClientConfig` as required. Please refer to the related sections and JavaDocs for more information.  "
});

documentTitles["javaclient.html#clientnetworkconfig"] = "ClientNetworkConfig";
index.add({
    url: "javaclient.html#clientnetworkconfig",
    title: "ClientNetworkConfig",
    body: "##### ClientNetworkConfig  `ClientNetworkConfig` includes the configuration options listed below, which are explained in the [Network Configuration Options section](#network-configuration-options).  * addressList * smartRouting * redoOperation * connectionTimeout * connectionAttemptLimit * connectionAttemptPeriod * SocketInterceptorConfig * SocketOptions * SSLConfig * ClientAwsConfig   "
});

documentTitles["javaclient.html#groupconfig"] = "GroupConfig";
index.add({
    url: "javaclient.html#groupconfig",
    title: "GroupConfig",
    body: "##### GroupConfig Clients should provide a group name and password in order to connect to the cluster. You can configure them using `GroupConfig`, as shown below.  ```java clientConfig.setGroupConfig(new GroupConfig(\&quot;dev\&quot;,\&quot;dev-pass\&quot;)); ```  "
});

documentTitles["javaclient.html#loadbalancerconfig"] = "LoadBalancerConfig";
index.add({
    url: "javaclient.html#loadbalancerconfig",
    title: "LoadBalancerConfig",
    body: "##### LoadBalancerConfig The following code example shows the programmatic configuration of your load balancer.  ```java clientConfig.setLoadBalancer(yourLoadBalancer); ```  "
});

documentTitles["javaclient.html#clientsecurityconfig"] = "ClientSecurityConfig";
index.add({
    url: "javaclient.html#clientsecurityconfig",
    title: "ClientSecurityConfig",
    body: "##### ClientSecurityConfig  In the cases where the security established with `GroupConfig` is not enough and you want your clients connecting securely to the cluster, you can use `ClientSecurityConfig`. This configuration has a `credentials` parameter to set the IP address and UID. Please see `ClientSecurityConfig.java` in our code.   "
});

documentTitles["javaclient.html#serializationconfig"] = "SerializationConfig";
index.add({
    url: "javaclient.html#serializationconfig",
    title: "SerializationConfig",
    body: "##### SerializationConfig  For the client side serialization, use Hazelcast configuration. Please refer to the [Serialization chapter](#serialization).   "
});

documentTitles["javaclient.html#listenerconfig"] = "ListenerConfig";
index.add({
    url: "javaclient.html#listenerconfig",
    title: "ListenerConfig",
    body: "##### ListenerConfig You can configure global event listeners using `ListenerConfig` as shown below.   ```java ClientConfig clientConfig = new ClientConfig(); ListenerConfig listenerConfig = new ListenerConfig(LifecycleListenerImpl); clientConfig.addListenerConfig(listenerConfig); ```  ```java ClientConfig clientConfig = new ClientConfig(); ListenerConfig listenerConfig = new ListenerConfig(\&quot;com.hazelcast.example.MembershipListenerImpl\&quot;); clientConfig.addListenerConfig(listenerConfig); ```  You can add three types of event listeners.  - LifecycleListener - MembershipListener - DistributedObjectListener   ***RELATED INFORMATION***  *Please refer to Hazelcast JavaDocs and see LifecycleListener, MembershipListener and DistributedObjectListener in `com.hazelcast.core` package.* &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["javaclient.html#nearcacheconfig"] = "NearCacheConfig";
index.add({
    url: "javaclient.html#nearcacheconfig",
    title: "NearCacheConfig",
    body: "##### NearCacheConfig You can configure a Near Cache on the client side by providing a configuration per map name, as shown below.  ```java ClientConfig clientConfig = new ClientConfig(); CacheConfig nearCacheConfig = new NearCacheConfig(); nearCacheConfig.setName(\&quot;mapName\&quot;); clientConfig.addNearCacheConfig(nearCacheConfig); ```  You can use wildcards can be used for the map name, as shown below.  ```java nearCacheConfig.setName(\&quot;map*\&quot;); nearCacheConfig.setName(\&quot;*map\&quot;); ```  "
});

documentTitles["javaclient.html#classloader"] = "ClassLoader";
index.add({
    url: "javaclient.html#classloader",
    title: "ClassLoader",
    body: "##### ClassLoader You can configure a custom `classLoader`. It will be used by the serialization service and to load any class configured in configuration, such as event listeners or ProxyFactories.  "
});

documentTitles["javaclient.html#executorpoolsize"] = "ExecutorPoolSize";
index.add({
    url: "javaclient.html#executorpoolsize",
    title: "ExecutorPoolSize",
    body: "##### ExecutorPoolSize Hazelcast has an internal executor service (different from the data structure *Executor Service*) that has threads and queues to perform internal operations such as handling responses. This parameter specifies the size of the pool of threads which perform these operations laying in the executor's queue. If not configured, this parameter has the value as **5 \* *core size of the client*** (i.e. it is 20 for a machine that has 4 cores).     "
});

documentTitles["javaclient.html#client-properties"] = "Client Properties";
index.add({
    url: "javaclient.html#client-properties",
    title: "Client Properties",
    body: "##### Client Properties  There are some advanced client configuration properties to tune some aspects of Hazelcast Client. You can set them as property name and value pairs through declarative configuration, programmatic configuration, or JVM system property. Please see the [Advanced Configuration Properties section](#advanced-configuration-properties) to learn how to set these properties.  The table below lists the client configuration properties with their descriptions.  Property Name | Default Value | Type | Description :--------------|:---------------|:------|:------------ `hazelcast.client.heartbeat.timeout`|300000|string|Timeout for the heartbeat messages sent by the client to members. If no messages pass between client and member within the given time via this property in milliseconds, the connection will be closed. `hazelcast.client.heartbeat.interval`|10000|string|The frequency of heartbeat messages sent by the clients to the members. `hazelcast.client.max.failed.heartbeat.count`|3|string|When the count of failed heartbeats sent to the members reaches this value, the cluster is deemed as dead by the client. `hazelcast.client.request.retry.count`|20|string|The retry count of the connection requests by the client to the members. `hazelcast.client.request.retry.wait.time`|250|string|The frequency of the connection retries. `hazelcast.client.event.thread.count`|5|string|The thread count for handling incoming event packets. `hazelcast.client.event.queue.capacity`|1000000|string|The default value of the capacity of executor that handles incoming event packets.   "
});

documentTitles["javaclient.html#sample-codes-for-client"] = "Sample Codes for Client";
index.add({
    url: "javaclient.html#sample-codes-for-client",
    title: "Sample Codes for Client",
    body: "### Sample Codes for Client  Please refer to [Client Code Samples](https://github.com/hazelcast/hazelcast-code-samples/tree/master/clients).   "
});



documentTitles["cplusclient.html#c-client"] = "C++ Client";
index.add({
    url: "cplusclient.html#c-client",
    title: "C++ Client",
    body: "## C++ Client  ![](images/enterprise-onlycopy.jpg)   You can use Native C++ Client to connect to Hazelcast nodes and perform almost all operations that a node can perform. Clients differ from nodes in that clients do not hold data. The C++ Client is by default a smart client, i.e. it knows where the data is and asks directly for the correct node. You can disable this feature (using the `ClientConfig::setSmart` method) if you do not want the clients to connect to every node.  The features of C++ Clients are:  - Access to distributed data structures (IMap, IQueue, MultiMap, ITopic, etc.). - Access to transactional distributed data structures (TransactionalMap, TransactionalQueue, etc.). - Ability to add cluster listeners to a cluster and entry/item listeners to distributed data structures. - Distributed synchronization mechanisms with ILock, ISemaphore and ICountDownLatch.   "
});

documentTitles["cplusclient.html#how-to-setup"] = "How to Setup";
index.add({
    url: "cplusclient.html#how-to-setup",
    title: "How to Setup",
    body: "### How to Setup  Hazelcast C++ Client is shipped with 32/64 bit, shared and static libraries. Compiled static libraries of dependencies are also available in the release. Dependencies are **zlib** and **shared_ptr** from the boost libraries.    The downloaded release folder consists of:  - Mac_64/ - Windows_32/ - Windows_64/ - Linux_32/ - Linux_64/ - docs/ *(HTML Doxygen documents are here)*   Each of the folders above contains the following:  - examples/ 	- testApp.exe =&gt; example command line client tool to connect hazelcast servers. 	- TestApp.cpp =&gt; code of the example command line tool.  - hazelcast/ 	- lib/ =&gt; Contains both shared and static library of hazelcast. 	- include/ =&gt; Contains headers of client.  -	external/ 	- lib/ =&gt; Contains compiled static libraries of zlib. 	- include/ =&gt; Contains headers of dependencies. (zlib and boost::shared_ptr)    "
});

documentTitles["cplusclient.html#platform-specific-installation-guides"] = "Platform Specific Installation Guides";
index.add({
    url: "cplusclient.html#platform-specific-installation-guides",
    title: "Platform Specific Installation Guides",
    body: "### Platform Specific Installation Guides The C++ Client is tested on Linux 32/64, Mac 64 and Windows 32/64 bit machines. For each of the headers above, it is assumed that you are in the correct folder for your platform. Folders are Mac_64, Windows_32, Windows_64, Linux_32 or Linux_64.  "
});

documentTitles["cplusclient.html#linux"] = "Linux";
index.add({
    url: "cplusclient.html#linux",
    title: "Linux",
    body: "#### Linux  For Linux, there are two distributions: 32 bit and 64 bit.  Here is an example script to build with static library:  `g++ main.cpp -pthread -I./external/include -I./hazelcast/include       ./hazelcast/lib/libHazelcastClientStatic_64.a       ./external/lib/libz.a`  Here is an example script to build with shared library:  `g++ main.cpp -lpthread -Wl,–no-as-needed -lrt -I./external/include -I./hazelcast/include -L./hazelcast/lib -lHazelcastClientShared_64 ./external/lib/libz.a`  "
});

documentTitles["cplusclient.html#mac"] = "Mac";
index.add({
    url: "cplusclient.html#mac",
    title: "Mac",
    body: "#### Mac For Mac, there is one distribution: 64 bit.  Here is an example script to build with static library:  `g++ main.cpp -I./external/include -I./hazelcast/include ./hazelcast/lib/libHazelcastClientStatic_64.a ./external/lib/darwin/libz.a`  Here is an example script to build with shared library:  `g++ main.cpp -I./external/include -I./hazelcast/include -L./hazelcast/lib -lHazelcastClientShared_64 ./external/lib/darwin/libz.a`  "
});

documentTitles["cplusclient.html#windows"] = "Windows";
index.add({
    url: "cplusclient.html#windows",
    title: "Windows",
    body: "#### Windows For Windows, there are two distributions; 32 bit and 64 bit. The current release has only Visual Studio 2010 compatible libraries. For others, please contact [support@hazelcast.com](support@hazelcast.com).  "
});

documentTitles["cplusclient.html#code-examples"] = "Code Examples";
index.add({
    url: "cplusclient.html#code-examples",
    title: "Code Examples",
    body: "### Code Examples A Hazelcast node should be running to make the example code below work.  "
});

documentTitles["cplusclient.html#map-example"] = "Map Example";
index.add({
    url: "cplusclient.html#map-example",
    title: "Map Example",
    body: "#### Map Example  ```cpp #include &lt;hazelcast/client/HazelcastAll.h&gt; #include &lt;iostream&gt;  using namespace hazelcast::client;  int main() {   ClientConfig clientConfig;   Address address( \&quot;localhost\&quot;, 5701 );   clientConfig.addAddress( address );    HazelcastClient hazelcastClient( clientConfig );    IMap&lt;int,int&gt; myMap = hazelcastClient.getMap&lt;int ,int&gt;( \&quot;myIntMap\&quot; );   myMap.put( 1,3 );   boost::shared_ptr&lt;int&gt; value = myMap.get( 1 );   if( value.get() != NULL ) {     //process the item   }    return 0; } ```  "
});

documentTitles["cplusclient.html#queue-example"] = "Queue Example";
index.add({
    url: "cplusclient.html#queue-example",
    title: "Queue Example",
    body: "#### Queue Example  ```cpp #include &lt;hazelcast/client/HazelcastAll.h&gt; #include &lt;iostream&gt; #include &lt;string&gt;  using namespace hazelcast::client;  int main() {   ClientConfig clientConfig;   Address address( \&quot;localhost\&quot;, 5701 );   clientConfig.addAddress( address );    HazelcastClient hazelcastClient( clientConfig );    IQueue&lt;std::string&gt; queue = hazelcastClient.getQueue&lt;std::string&gt;( \&quot;q\&quot; );   queue.offer( \&quot;sample\&quot; );   boost::shared_ptr&lt;std::string&gt; value = queue.poll();   if( value.get() != NULL ) {     //process the item   }   return 0; } ```  "
});

documentTitles["cplusclient.html#entry-listener-example"] = "Entry Listener Example";
index.add({
    url: "cplusclient.html#entry-listener-example",
    title: "Entry Listener Example",
    body: "#### Entry Listener Example  ```cpp #include \&quot;hazelcast/client/ClientConfig.h\&quot; #include \&quot;hazelcast/client/EntryEvent.h\&quot; #include \&quot;hazelcast/client/IMap.h\&quot; #include \&quot;hazelcast/client/Address.h\&quot; #include \&quot;hazelcast/client/HazelcastClient.h\&quot; #include &lt;iostream&gt; #include &lt;string&gt;  using namespace hazelcast::client;  class SampleEntryListener {   public:    void entryAdded( EntryEvent&lt;std::string, std::string&gt; &amp;event ) {     std::cout &lt;&lt; \&quot;entry added \&quot; &lt;&lt;  event.getKey() &lt;&lt; \&quot; \&quot;         &lt;&lt; event.getValue() &lt;&lt; std::endl;   };    void entryRemoved( EntryEvent&lt;std::string, std::string&gt; &amp;event ) {     std::cout &lt;&lt; \&quot;entry added \&quot; &lt;&lt;  event.getKey() &lt;&lt; \&quot; \&quot;          &lt;&lt; event.getValue() &lt;&lt; std::endl;   }    void entryUpdated( EntryEvent&lt;std::string, std::string&gt; &amp;event ) {     std::cout &lt;&lt; \&quot;entry added \&quot; &lt;&lt;  event.getKey() &lt;&lt; \&quot; \&quot;          &lt;&lt; event.getValue() &lt;&lt; std::endl;   }    void entryEvicted( EntryEvent&lt;std::string, std::string&gt; &amp;event ) {     std::cout &lt;&lt; \&quot;entry added \&quot; &lt;&lt;  event.getKey() &lt;&lt; \&quot; \&quot;          &lt;&lt; event.getValue() &lt;&lt; std::endl;   } };   int main( int argc, char **argv ) {   ClientConfig clientConfig;   Address address( \&quot;localhost\&quot;, 5701 );   clientConfig.addAddress( address );    HazelcastClient hazelcastClient( clientConfig );    IMap&lt;std::string,std::string&gt; myMap = hazelcastClient       .getMap&lt;std::string ,std::string&gt;( \&quot;myIntMap\&quot; );   SampleEntryListener *  listener = new SampleEntryListener();    std::string id = myMap.addEntryListener( *listener, true );   // Prints entryAdded   myMap.put( \&quot;key1\&quot;, \&quot;value1\&quot; );   // Prints updated   myMap.put( \&quot;key1\&quot;, \&quot;value2\&quot; );   // Prints entryRemoved   myMap.remove( \&quot;key1\&quot; );   // Prints entryEvicted after 1 second   myMap.put( \&quot;key2\&quot;, \&quot;value2\&quot;, 1000 );    // WARNING: deleting listener before removing it from hazelcast leads to crashes.   myMap.removeEntryListener( id );   // Delete listener after remove it from hazelcast.   delete listener;                  return 0; }; ```  "
});

documentTitles["cplusclient.html#serialization-example"] = "Serialization Example";
index.add({
    url: "cplusclient.html#serialization-example",
    title: "Serialization Example",
    body: "#### Serialization Example Assume that you have the following two classes in Java and you want to use them with a C++ client.   ```java class Foo implements Serializable {   private int age;   private String name; }  class Bar implements Serializable {   private float x;   private float y; }  ```  **First**, let them implement `Portable` or `IdentifiedDataSerializable` as shown below.  ```java class Foo implements Portable {   private int age;   private String name;    public int getFactoryId() {     // a positive id that you choose     return 123;   }    public int getClassId() {     // a positive id that you choose     return 2;        }    public void writePortable( PortableWriter writer ) throws IOException {     writer.writeUTF( \&quot;n\&quot;, name );     writer.writeInt( \&quot;a\&quot;, age );   }    public void readPortable( PortableReader reader ) throws IOException {     name = reader.readUTF( \&quot;n\&quot; );     age = reader.readInt( \&quot;a\&quot; );   } }  class Bar implements IdentifiedDataSerializable {   private float x;   private float y;    public int getFactoryId() {     // a positive id that you choose     return 4;        }    public int getId() {     // a positive id that you choose     return 5;       }    public void writeData( ObjectDataOutput out ) throws IOException {     out.writeFloat( x );     out.writeFloat( y );   }    public void readData( ObjectDataInput in ) throws IOException {     x = in.readFloat();     y = in.readFloat();   } } ```  **Then**, implement the corresponding classes in C++ with same factory and class ID as shown below.  ```cpp class Foo : public Portable {   public:   int getFactoryId() const {     return 123;   };    int getClassId() const {     return 2;   };    void writePortable( serialization::PortableWriter &amp;writer ) const {     writer.writeUTF( \&quot;n\&quot;, name );     writer.writeInt( \&quot;a\&quot;, age );   };    void readPortable( serialization::PortableReader &amp;reader ) {     name = reader.readUTF( \&quot;n\&quot; );     age = reader.readInt( \&quot;a\&quot; );   };    private:   int age;   std::string name; };  class Bar : public IdentifiedDataSerializable {   public:   int getFactoryId() const {     return 4;   };    int getClassId() const {     return 2;   };    void writeData( serialization::ObjectDataOutput&amp; out ) const {     out.writeFloat(x);     out.writeFloat(y);   };    void readData( serialization::ObjectDataInput&amp; in ) {     x = in.readFloat();     y = in.readFloat();   };      private:   float x;   float y; }; ```  Now, you can use the classes `Foo` and `Bar` in distributed structures. For example, use as Key or Value of `IMap` or as an Item in `IQueue`. 	  "
});



documentTitles["csharpclient.html#net-client"] = ".NET Client";
index.add({
    url: "csharpclient.html#net-client",
    title: ".NET Client",
    body: "## .NET Client  ![](images/enterprise-onlycopy.jpg)   You can use the native .NET client to connect to Hazelcast nodes. All you need is to add `HazelcastClient3x.dll` into your .NET project references. The API is very similar to the Java native client.   .NET Client has the following distributed objects.  * `IMap&lt;K,V&gt;` * `IMultiMap&lt;K,V&gt;` * `IQueue&lt;E&gt;` * `ITopic&lt;E&gt;` * `IHList&lt;E&gt;` * `IHSet&lt;E&gt;` * `IIdGenerator` * `ILock` * `ISemaphore` * `ICountDownLatch` * `IAtomicLong` * `ITransactionContext` 	 ITransactionContext can be used to obtain:  * `ITransactionalMap&lt;K,V&gt;`, * `ITransactionalMultiMap&lt;K,V&gt;`, * `ITransactionalList&lt;E&gt;`, and * `ITransactionalSet&lt;E&gt;`.     A code example is shown below.  ```csharp using Hazelcast.Config; using Hazelcast.Client; using Hazelcast.Core; using Hazelcast.IO.Serialization;  using System.Collections.Generic;  namespace Hazelcast.Client.Example {   public class SimpleExample   {      public static void Test()     {       var clientConfig = new ClientConfig();       clientConfig.GetNetworkConfig().AddAddress( \&quot;10.0.0.1\&quot; );       clientConfig.GetNetworkConfig().AddAddress( \&quot;10.0.0.2:5702\&quot; );        // Portable Serialization setup up for Customer Class       clientConfig.GetSerializationConfig()           .AddPortableFactory( MyPortableFactory.FactoryId, new MyPortableFactory() );        IHazelcastInstance client = HazelcastClient.NewHazelcastClient( clientConfig );       // All cluster operations that you can do with ordinary HazelcastInstance       IMap&lt;string, Customer&gt; mapCustomers = client.GetMap&lt;string, Customer&gt;( \&quot;customers\&quot; );       mapCustomers.Put( \&quot;1\&quot;, new Customer( \&quot;Joe\&quot;, \&quot;Smith\&quot; ) );       mapCustomers.Put( \&quot;2\&quot;, new Customer( \&quot;Ali\&quot;, \&quot;Selam\&quot; ) );       mapCustomers.Put( \&quot;3\&quot;, new Customer( \&quot;Avi\&quot;, \&quot;Noyan\&quot; ) );        ICollection&lt;Customer&gt; customers = mapCustomers.Values();       foreach (var customer in customers)       {         //process customer       }     }   }    public class MyPortableFactory : IPortableFactory   {     public const int FactoryId = 1;      public IPortable Create( int classId ) {       if ( Customer.Id == classId )         return new Customer();       else         return null;     }   }    public class Customer : IPortable   {     private string name;     private string surname;      public const int Id = 5;      public Customer( string name, string surname )     {       this.name = name;       this.surname = surname;     }      public Customer() {}      public int GetFactoryId()     {       return MyPortableFactory.FactoryId;     }      public int GetClassId()     {       return Id;     }      public void WritePortable( IPortableWriter writer )     {       writer.WriteUTF( \&quot;n\&quot;, name );       writer.WriteUTF( \&quot;s\&quot;, surname );     }      public void ReadPortable( IPortableReader reader )     {       name = reader.ReadUTF( \&quot;n\&quot; );       surname = reader.ReadUTF( \&quot;s\&quot; );     }   } } ```   "
});

documentTitles["csharpclient.html#client-configuration"] = "Client Configuration";
index.add({
    url: "csharpclient.html#client-configuration",
    title: "Client Configuration",
    body: "### Client Configuration You can configure the Hazelcast .NET client via API or XML. To start the client, you can pass a configuration or leave it empty to use default values.  ![image](images/NoteSmall.jpg) ***NOTE***: *.NET and Java clients are similar in terms of configuration. Therefore, you can refer to [Java Client](#java-client) section for configuration aspects. For information on .NET API documentation, please refer to the API document provided along with the Hazelcast Enterprise license*.   "
});

documentTitles["csharpclient.html#client-startup"] = "Client Startup";
index.add({
    url: "csharpclient.html#client-startup",
    title: "Client Startup",
    body: "### Client Startup After configuration, you can obtain a client using one of the static methods of Hazelcast, as shown below.   ```csharp IHazelcastInstance client = HazelcastClient.NewHazelcastClient(clientConfig);  ...   IHazelcastInstance defaultClient = HazelcastClient.NewHazelcastClient();  ...  IHazelcastInstance xmlConfClient = Hazelcast     .NewHazelcastClient(@\&quot;..\Hazelcast.Net\Resources\hazelcast-client.xml\&quot;); ```  The `IHazelcastInstance` interface is the starting point where all distributed objects can be obtained.  ```csharp var map = client.GetMap&lt;int,string&gt;(\&quot;mapName\&quot;);  ...  var lock= client.GetLock(\&quot;thelock\&quot;); ```    "
});



documentTitles["restclient.html#rest-client"] = "REST Client";
index.add({
    url: "restclient.html#rest-client",
    title: "REST Client",
    body: "## REST Client Hazelcast provides a REST interface, i.e. it provides an HTTP service in each node so that you can access your `map` and `queue` using HTTP protocol. Assuming `mapName` and `queueName` are already configured in your Hazelcast, its structure is shown below.  `http://node IP address:port/hazelcast/rest/maps/mapName/key`  `http://node IP address:port/hazelcast/rest/queues/queueName`  For the operations to be performed, standard REST conventions for HTTP calls are used.    Assume that your cluster members are as shown below.  ```plain Members [5] {   Member [10.20.17.1:5701]   Member [10.20.17.2:5701]   Member [10.20.17.4:5701]   Member [10.20.17.3:5701]   Member [10.20.17.5:5701] } ```  ---  ![image](images/NoteSmall.jpg) ***NOTE***: *All of the requests below can return one of the following responses in case of a failure*  - If the HTTP request syntax is not known, the following response will be returned.  ```plain HTTP/1.1 400 Bad Request Content-Length: 0 ```   - In case of an unexpected exception, the following response will be returned.  ```plain &lt; HTTP/1.1 500 Internal Server Error &lt; Content-Length: 0 ```  ---   **Creating/Updating Entries in a Map**  You can put a new `key1/value1` entry into a map by using POST call to  `http://10.20.17.1:5701/hazelcast/rest/maps/mapName/key1` URL. This call's content body should contain the value of the key. Also, if the call contains the MIME type, Hazelcast stores this information, too.   A sample POST call is shown below.  ```plain $ curl -v -X POST -H \&quot;Content-Type: text/plain\&quot; -d \&quot;bar\&quot;      http://10.20.17.1:5701/hazelcast/rest/maps/mapName/foo ```  It will return the following response if successful:  ```plain &lt; HTTP/1.1 200 OK &lt; Content-Type: text/plain &lt; Content-Length: 0 ```  **Retrieving Entries from a Map**  If you want to retrieve an entry, you can use a GET call to `http://10.20.17.1:5701/hazelcast/rest/maps/mapName/key1`. You can also retrieve this entry from another member of your cluster, such as  `http://10.20.17.3:5701/hazelcast/rest/maps/mapName/key1`.  An example of a GET call is shown below.  ```plain $ curl -X GET http://10.20.17.3:5701/hazelcast/rest/maps/mapName/foo ```  It will return the following response if there is a corresponding value:  ```plain &lt; HTTP/1.1 200 OK &lt; Content-Type: text/plain &lt; Content-Length: 3 bar ```  This GET call returned a value, its length, and also the MIME type (`text/plain`) since the POST call example shown above included the MIME type.  It will return the following if there is no mapping for the given key:  ```plain &lt; HTTP/1.1 204 No Content &lt; Content-Length: 0 ```   **Removing Entries from a Map**  You can use a DELETE call to remove an entry. A sample DELETE call is shown below with its response.  ```plain $ curl -v -X DELETE http://10.20.17.1:5701/hazelcast/rest/maps/mapName/foo ``` ``` &lt; HTTP/1.1 200 OK &lt; Content-Type: text/plain &lt; Content-Length: 0 ``` If you leave the key empty as follows, DELETE will delete all entries from the map.  ```plain $ curl -v -X DELETE http://10.20.17.1:5701/hazelcast/rest/maps/mapName ```  ```plain &lt; HTTP/1.1 200 OK &lt; Content-Type: text/plain &lt; Content-Length: 0 ```  **Offering Items on a Queue**  You can use a POST call to create an item on the queue. A sample is shown below.  ```plain $ curl -v -X POST -H \&quot;Content-Type: text/plain\&quot; -d \&quot;foo\&quot;      http://10.20.17.1:5701/hazelcast/rest/queues/myEvents ```  The above call is equivalent to `HazelcastInstance#getQueue(\&quot;myEvents\&quot;).offer(\&quot;foo\&quot;);`.  It will return the following if successful:  ```plain &lt; HTTP/1.1 200 OK &lt; Content-Type: text/plain &lt; Content-Length: 0 ```  It will return the following if the queue is full and the item is not able to be offered to the queue:  ```plain &lt; HTTP/1.1 503 Service Unavailable &lt; Content-Length: 0 ```  **Retrieving Items from a Queue**  You can use a DELETE call for retrieving items from a queue. Note that you should state the poll timeout while polling for queue events by an extra path parameter.   An example is shown below (**10** being the timeout value).  ```plain $ curl -v -X DELETE \http://10.20.17.1:5701/hazelcast/rest/queues/myEvents/10 ```  The above call is equivalent to `HazelcastInstance#getQueue(\&quot;myEvents\&quot;).poll(10, SECONDS);`. Below is the response.  ```plain &lt; HTTP/1.1 200 OK &lt; Content-Type: text/plain &lt; Content-Length: 3 foo ```  When the timeout is reached, the response will be `No Content` success, i.e. there is no item on the queue to be returned.   ```plain &lt; HTTP/1.1 204 No Content &lt; Content-Length: 0 ```   **Getting the size of the queue**  ```plain $ curl -v -X GET \http://10.20.17.1:5701/hazelcast/rest/queues/myEvents/size ```  The above call is equivalent to `HazelcastInstance#getQueue(\&quot;myEvents\&quot;).size();`. Below is a sample response.  ```plain &lt; HTTP/1.1 200 OK &lt; Content-Type: text/plain &lt; Content-Length: 1 5 ``` --- Besides the above operations, you can check the status of your cluster, a sample of which is shown below.  ```plain $ curl -v http://127.0.0.1:5701/hazelcast/rest/cluster ```  The return will be similar to the following:  ```plain &lt; HTTP/1.1 200 OK &lt; Content-Length: 119  Members [5] {   Member [10.20.17.1:5701] this   Member [10.20.17.2:5701]   Member [10.20.17.4:5701]   Member [10.20.17.3:5701]   Member [10.20.17.5:5701] }  ConnectionCount: 5 AllConnectionCount: 20 ```  ---  RESTful access is provided through any member of your cluster. You can even put an HTTP load-balancer in front of your cluster members for load balancing and fault tolerance.   ![image](images/NoteSmall.jpg) ***NOTE***: *You need to handle the failures on REST polls as there is no transactional guarantee.*   "
});



documentTitles["memcacheclient.html#memcache-client"] = "Memcache Client";
index.add({
    url: "memcacheclient.html#memcache-client",
    title: "Memcache Client",
    body: "## Memcache Client  ![image](images/NoteSmall.jpg) ***NOTE:*** *Hazelcast Memcache Client only supports ASCII protocol. Binary Protocol is not supported.*  A Memcache client written in any language can talk directly to a Hazelcast cluster. No additional configuration is required.  Assume that your cluster members are as shown below.  ```plain Members [5] {   Member [10.20.17.1:5701]   Member [10.20.17.2:5701]   Member [10.20.17.4:5701]   Member [10.20.17.3:5701]   Member [10.20.17.5:5701] } ``` Assume that you have a PHP application that uses PHP Memcache client to cache things in Hazelcast. All you need to do is have your PHP Memcache client connect to one of these members. It does not matter which member the client connects to because the Hazelcast cluster looks like one giant machine (Single System Image). Here is a PHP client code example.  ```php &lt;?php   $memcache = new Memcache;   $memcache-&gt;connect( '10.20.17.1', 5701 ) or die ( \&quot;Could not connect\&quot; );   $memcache-&gt;set( 'key1', 'value1', 0, 3600 );   $get_result = $memcache-&gt;get( 'key1' ); // retrieve your data   var_dump( $get_result ); // show it ?&gt; ```  Notice that Memcache client connects to `10.20.17.1` and uses port`5701`. Here is a Java client code example with SpyMemcached client:  ```java MemcachedClient client = new MemcachedClient(     AddrUtil.getAddresses( \&quot;10.20.17.1:5701 10.20.17.2:5701\&quot; ) ); client.set( \&quot;key1\&quot;, 3600, \&quot;value1\&quot; ); System.out.println( client.get( \&quot;key1\&quot; ) ); ```  If you want your data to be stored in different maps (e.g. to utilize per map configuration), you can do that with a map name prefix as in the following example code.   ```java MemcachedClient client = new MemcachedClient(     AddrUtil.getAddresses( \&quot;10.20.17.1:5701 10.20.17.2:5701\&quot; ) ); client.set( \&quot;map1:key1\&quot;, 3600, \&quot;value1\&quot; ); // store to *hz_memcache_map1 client.set( \&quot;map2:key1\&quot;, 3600, \&quot;value1\&quot; ); // store to hz_memcache_map2 System.out.println( client.get( \&quot;key1\&quot; ) ); // get from hz_memcache_map1 System.out.println( client.get( \&quot;key2\&quot; ) ); // get from hz_memcache_map2 ```  *hz\_memcache prefix\_* separates Memcache maps from Hazelcast maps. If no map name is given, it will be stored in a default map named *hz_memcache_default*.  An entry written with a Memcache client can be read by another Memcache client written in another language.  "
});

documentTitles["memcacheclient.html#unsupported-operations"] = "Unsupported Operations";
index.add({
    url: "memcacheclient.html#unsupported-operations",
    title: "Unsupported Operations",
    body: "### Unsupported Operations ###  - CAS operations are not supported. In operations that get CAS parameters, such as append, CAS values are ignored.  - Only a subset of statistics are supported. Below is the list of supported statistic values.      - cmd_set     -	cmd_get     -	incr_hits     -	incr_misses     -	decr_hits     -	decr_misses    &lt;br&gt; &lt;/br&gt;  "
});



documentTitles["serialization.html#serialization"] = "Serialization";
index.add({
    url: "serialization.html#serialization",
    title: "Serialization",
    body: "# Serialization  "
});

documentTitles["serialization.html#serialization-overview"] = "Serialization Overview";
index.add({
    url: "serialization.html#serialization-overview",
    title: "Serialization Overview",
    body: "## Serialization Overview  You need to serialize the Java objects that you put into Hazelcast because Hazelcast is a distributed system. The data and its replicas are stored in different partitions on multiple nodes. The data you need may not be present on the local machine, and in that case, Hazelcast retrieves that data from another machine. This requires serialization.  Hazelcast serializes all your objects into an instance of `com.hazelcast.nio.serialization.Data`. `Data` is the binary representation of an object.   Serialization is used when:  - key/value objects are added to a map, - items are put in a queue/set/list, - a runnable is sent using an executor service, - an entry processing is performed within a map, - an object is locked, and - a message is sent to a topic.   Hazelcast optimizes the serialization for the below types. You cannot override this behavior.  ![image](images/OptimizedTypes.jpg)   Hazelcast also optimizes the following types. However, you can override these types by creating a custom serializer and registering it. See [Custom Serialization](#custom-serialization) for more information.  ![image](images/OptimizedTypesII.jpg)   Hazelcast optimizes all of the above object types. You do not need to worry about their (de)serializations.  "
});



documentTitles["serializationinterfaces.html#serialization-interfaces"] = "Serialization Interfaces";
index.add({
    url: "serializationinterfaces.html#serialization-interfaces",
    title: "Serialization Interfaces",
    body: "## Serialization Interfaces   For complex objects, the following interfaces are used for serialization and deserialization.  - `java.io.Serializable`  - `java.io.Externalizable`  - `com.hazelcast.nio.serialization.DataSerializable`  - `com.hazelcast.nio.serialization.IdentifiedDataSerializable`  - `com.hazelcast.nio.serialization.Portable`, and - Custom Serialization (using `StreamSerializer`, `ByteArraySerializer`)   When Hazelcast serializes an object into `Data`:  **(1)** It first checks whether the object is an instance of `com.hazelcast.nio.serialization.DataSerializable`.  **(2)** If the above check fails, then Hazelcast checks if it is an instance of `com.hazelcast.nio.serialization.Portable`.  **(3)** If the above check fails, then Hazelcast checks whether the object is a well-known type like String, Long, or Integer, or if it is a user-specified type like `ByteArraySerializer` or `StreamSerializer`.  **(4)** If the above checks fail, Hazelcast will use Java serialization.  If all of the above checks do not work, then serialization will fail. When a class implements multiple interfaces, the above steps are important to determine the serialization mechanism that Hazelcast will use. When a class definition is required for any of these serializations, all the classes needed by the application should be on the classpath because Hazelcast does not download them automatically.  "
});



documentTitles["serializationcomparisontable.html#comparison-table"] = "Comparison Table";
index.add({
    url: "serializationcomparisontable.html#comparison-table",
    title: "Comparison Table",
    body: "## Comparison Table  Below table provides a comparison between the interfaces listed in the previous section to help you in deciding which interface to use in your applications.  *Serialization Interface*|*Advantages*|*Drawbacks* :-|:-|:- **Serializable**|- A standard and basic Java interface &lt;br&gt; - Requires no implementation |- More time and CPU usage &lt;br&gt; - More space occupancy **Externalizable**|- A standard Java interface &lt;br&gt; - More CPU and memory usage efficient than Serializable| - Serialization interface must be implemented **DataSerializable**| - More CPU and memory usage efficient than Serializable| - Specific to Hazelcast **IdentifiedDataSerializable**| - More CPU and memory usage efficient than Serializable &lt;br&gt; - Reflection is not used during deserialization| - Specific to Hazelcast &lt;br&gt; - Serialization interface must be implemented &lt;br&gt; - A Factory and configuration must be implemented **Portable**| - More CPU and memory usage efficient than Serializable &lt;br&gt; - Reflection is not used during deserialization &lt;br&gt; - Versioning is supported &lt;br&gt; Partial deserialization is supported during Queries| - Specific to Hazelcast &lt;br&gt; - Serialization interface must be implemented &lt;br&gt; - A Factory and configuration must be implemented &lt;br&gt; - Class definition is also sent with data but stored only once per class **Custom Serialization**| - Does not require class to implement an interface &lt;br&gt; - Convenient and flexible &lt;br&gt; - Can be based on StreamSerializer ByteArraySerializer|- Serialization interface must be implemented &lt;br&gt; - Plug in and configuration is required    Let's dig into the details of the above serialization mechanisms in the following sections.  "
});



documentTitles["serializable.html#serializable-externalizable"] = "Serializable &amp; Externalizable";
index.add({
    url: "serializable.html#serializable-externalizable",
    title: "Serializable &amp; Externalizable",
    body: "## Serializable &amp; Externalizable  A class often needs to implement the `java.io.Serializable` interface; native Java serialization is the easiest way to do serialization. Let's take a look at the example code below.  ```java public class Employee implements Serializable {    private static final long serialVersionUID = 1L;   private String surname;      public Employee( String surname ) {      this.surname = surname;   }  } ```  Here, the fields that are non-static and non-transient are automatically serialized. To eliminate class compatibility issues, it is recommended that you add a `serialVersionUID`, as shown above. Also, when you are using methods that perform byte-content comparisons (e.g. `IMap.replace()`) and if byte-content of equal objects is different, you may face unexpected behaviors. Therefore, if the class relies on, for example, a hash map, `replace` method may fail. The reason for this is the hash map is a serialized data structure with unreliable byte-content.  Hazelcast also supports `java.io.Externalizable`. This interface offers more control on the way fields are serialized or deserialized. Compared to native Java serialization, it also can have a positive effect on performance. With `java.io.Externalizable`, there is no need to add `serialVersionUID`.  Let's take a look at the example code below.  ```java public class Employee implements Externalizable {    private String surname;   public Employee(String surname) {          this.surname = surname;   }      @Override   public void readExternal( ObjectInput in )       throws IOException, ClassNotFoundException {     this.surname = in.readUTF();   }        @Override   public void writeExternal( ObjectOutput out )       throws IOException {     out.writeUTF(surname);    } } ```  Writing and reading of fields are performed explicitly. Note that reading should be performed in the same order as writing.  "
});



documentTitles["dataserialization.html#dataserializable"] = "DataSerializable";
index.add({
    url: "dataserialization.html#dataserializable",
    title: "DataSerializable",
    body: "## DataSerializable  As mentioned in the [Serializable &amp; Externalizable section](#serializable-externalizable), Java serialization is an easy mechanism. However, we do not have a control on how fields are serialized or deserialized. Moreover, this mechanism can lead to excessive CPU loads since it keeps track of objects to handle the cycles and streams class descriptors. These are performance decreasing factors; thus, serialized data may not have an optimal size.  The `DataSerializable` interface of Hazelcast overcomes these issues. Here is an example of a class implementing the `com.hazelcast.nio.serialization.DataSerializable` interface.  ```java public class Address implements DataSerializable {   private String street;   private int zipCode;   private String city;   private String state;    public Address() {}    //getters setters..    public void writeData( ObjectDataOutput out ) throws IOException {     out.writeUTF(street);     out.writeInt(zipCode);     out.writeUTF(city);     out.writeUTF(state);   }    public void readData( ObjectDataInput in ) throws IOException {     street = in.readUTF();     zipCode = in.readInt();     city = in.readUTF();     state = in.readUTF();   } } ```  Let's take a look at another example which encapsulates a `DataSerializable` field.   ```java public class Employee implements DataSerializable {   private String firstName;   private String lastName;   private int age;   private double salary;   private Address address; //address itself is DataSerializable    public Employee() {}    //getters setters..    public void writeData( ObjectDataOutput out ) throws IOException {     out.writeUTF(firstName);     out.writeUTF(lastName);     out.writeInt(age);     out.writeDouble (salary);     address.writeData (out);   }    public void readData( ObjectDataInput in ) throws IOException {     firstName = in.readUTF();     lastName = in.readUTF();     age = in.readInt();     salary = in.readDouble();     address = new Address();     // since Address is DataSerializable let it read its own internal state     address.readData(in);   } } ```  As you can see, since `address` field itself is `DataSerializable`, it is calling `address.writeData(out)` when writing and `address.readData(in)` when reading. Also note that, the order of writing and reading fields should be the same. While Hazelcast serializes a `DataSerializable`, it writes the `className` first. When Hazelcast de-serializes it, `className` is used to instantiate the object using reflection.  ![image](images/NoteSmall.jpg) ***NOTE:*** *Since Hazelcast needs to create an instance during deserialization,`DataSerializable` class has a no-arg constructor.*  ![image](images/NoteSmall.jpg) ***NOTE:*** *`DataSerializable` is a good option if serialization is only needed for in-cluster communication.*   "
});

documentTitles["dataserialization.html#identifieddataserializable"] = "IdentifiedDataSerializable";
index.add({
    url: "dataserialization.html#identifieddataserializable",
    title: "IdentifiedDataSerializable",
    body: "### IdentifiedDataSerializable  For a faster serialization of objects, avoiding reflection and long class names, Hazelcast recommends you implement `com.hazelcast.nio.serialization.IdentifiedDataSerializable` which is a slightly better version of `DataSerializable`.  `DataSerializable` uses reflection to create a class instance, as mentioned in the [DataSerializable section](#dataserializable). But, `IdentifiedDataSerializable` uses a factory for this purpose and it is faster during deserialization which requires new instance creations.  `IdentifiedDataSerializable` extends `DataSerializable` and introduces two new methods.  -   `int getId();` -   `int getFactoryId();`   `IdentifiedDataSerializable` uses `getId()` instead of class name, and it uses `getFactoryId()` to load the class when given the Id. To complete the implementation, `com.hazelcast.nio.serialization.DataSerializableFactory` should also be implemented and registered into `SerializationConfig` which can be accessed from `Config.getSerializationConfig()`. Factory's responsibility is to return an instance of the right `IdentifiedDataSerializable` object, given the Id. So far this is the most efficient way of Serialization that Hazelcast supports off the shelf.  Let's take a look at the example code below and configuration to see `IdentifiedDataSerializable` in action.  ```java public class Employee     implements IdentifiedDataSerializable {         private String surname;      public Employee() {}      public Employee( String surname ) {      this.surname = surname;   }      @Override   public void readData( ObjectDataInput in )        throws IOException {     this.surname = in.readUTF();   }      @Override   public void writeData( ObjectDataOutput out )       throws IOException {      out.writeUTF( surname );   }      @Override   public int getFactoryId() {      return EmployeeDataSerializableFactory.FACTORY_ID;   }      @Override   public int getId() {      return EmployeeDataSerializableFactory.EMPLOYEE_TYPE;   }       @Override   public String toString() {     return String.format( \&quot;Employee(surname=%s)\&quot;, surname );    } } ```   The methods `getId` and `getFactoryId` return a unique positive number within the `EmployeeDataSerializableFactory`. Now, let's create an instance of this `EmployeeDataSerializableFactory`.  ```java public class EmployeeDataSerializableFactory      implements DataSerializableFactory{       public static final int FACTORY_ID = 1;       public static final int EMPLOYEE_TYPE = 1;    @Override   public IdentifiedDataSerializable create(int typeId) {     if ( typeId == EMPLOYEE_TYPE ) {        return new Employee();     } else {       return null;      }   } } ```  The only method that should be implemented is `create`, as seen in the above example. It is recommended that you use a `switch`-``case` statement instead of multiple `if`-`else` blocks if you have a lot of subclasses. Hazelcast throws an exception if null is returned for `typeId`.  As the last step, you need to register `EmployeeDataSerializableFactory` declaratively (declare in the configuration file `hazelcast.xml`) as shown below. Note that `factory-id` has the same value of `FACTORY_ID` in the above code. This is crucial to enable Hazelcast to find the correct factory.  ```xml &lt;hazelcast&gt;    ...   &lt;serialization&gt;     &lt;data-serializable-factories&gt;       &lt;data-serializable-factory         factory-id=\&quot;1\&quot;&gt;EmployeeDataSerializableFactory       &lt;/data-serializable-factory&gt;     &lt;/data-serializable-factories&gt;   &lt;/serialization&gt;   ... &lt;/hazelcast&gt; ```   &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [Serialization Configuration section](#serialization-configuration) for a full description of Hazelcast Serialization configuration.*   "
});



documentTitles["portableserialization.html#portable"] = "Portable";
index.add({
    url: "portableserialization.html#portable",
    title: "Portable",
    body: "## Portable  As an alternative to the existing serialization methods, Hazelcast offers a language/platform independent Portable serialization that has the following advantages:  -   Supports multi-version of the same object type. -   Fetches individual fields without having to rely on reflection. -   Queries and indexing support without de-serialization and/or reflection.  In order to support these features, a serialized Portable object contains meta information like the version and the concrete location of the each field in the binary data. This way, Hazelcast navigates in the `byte[]` and de-serializes only the required field without actually de-serializing the whole object. This improves the Query performance.  With multi-version support, you can have two nodes where each of them have different versions of the same object. Hazelcast will store both meta information and use the correct one to serialize and de-serialize Portable objects depending on the node. This is very helpful when you are doing a rolling upgrade without shutting down the cluster.  Portable serialization is totally language independent and is used as the binary protocol between Hazelcast server and clients.  A sample Portable implementation of a Foo class would look like the following.  ```java public class Foo implements Portable{   final static int ID = 5;    private String foo;    public String getFoo() {     return foo;   }    public void setFoo( String foo ) {     this.foo = foo;   }    @Override   public int getFactoryId() {     return 1;   }    @Override   public int getClassId() {     return ID;   }    @Override   public void writePortable( PortableWriter writer ) throws IOException {     writer.writeUTF( \&quot;foo\&quot;, foo );   }    @Override   public void readPortable( PortableReader reader ) throws IOException {     foo = reader.readUTF( \&quot;foo\&quot; );   } }         ```  Similar to `IdentifiedDataSerializable`, a Portable Class must provide `classId` and`factoryId`. The Factory object will create the Portable object given the `classId`.  An example `Factory` could be implemented as following:  ```java public class MyPortableFactory implements PortableFactory {    @Override   public Portable create( int classId ) {     if ( Foo.ID == classId )       return new Foo();     else       return null;   } }             ```  The last step is to register the `Factory` to the `SerializationConfig`. Below are the programmatic and declarative configurations for this step.   ```java Config config = new Config(); config.getSerializationConfig().addPortableFactory( 1, new MyPortableFactory() ); ```   ```xml &lt;hazelcast&gt;   &lt;serialization&gt;     &lt;portable-version&gt;0&lt;/portable-version&gt;     &lt;portable-factories&gt;       &lt;portable-factory factory-id=\&quot;1\&quot;&gt;           com.hazelcast.nio.serialization.MyPortableFactory       &lt;/portable-factory&gt;     &lt;/portable-factories&gt;   &lt;/serialization&gt; &lt;/hazelcast&gt; ```   Note that the `id` that is passed to the `SerializationConfig` is the same as the `factoryId` that the `Foo` class returns.   "
});

documentTitles["portableserialization.html#versions"] = "Versions";
index.add({
    url: "portableserialization.html#versions",
    title: "Versions",
    body: "### Versions  More than one version of the same class may need to be serialized and deserialized.  For example, a client may have an older version of a class, and the node to which it is connected can have a newer version of the same class.   Portable serialization supports versioning. You can declare Version in the configuration file `hazelcast.xml` using the `portable-version` element, as shown below.  ```xml &lt;serialization&gt;   &lt;portable-version&gt;1&lt;/portable-version&gt;   &lt;portable-factories&gt;     &lt;portable-factory factory-id=\&quot;1\&quot;&gt;         PortableFactoryImpl     &lt;/portable-factory&gt;   &lt;/portable-factories&gt; &lt;/serialization&gt; ```  You should consider the following when you perform versioning.  - It is important to change the version whenever an update is performed in the serialized fields of a class (e.g. increment the version). - If a client performs a Portable deserialization on a field, and then that Portable is updated by removing that field on the cluster side, this may lead to a problem. - Portable serialization does not use reflection and hence, fields in the class and in the serialized content are not automatically mapped. Field renaming is a simpler process. Also, since the class ID is stored, renaming the Portable does not lead to problems. - Types of fields need to be updated carefully. Hazelcast performs basic type upgradings (e.g. `int` to `float`).  "
});

documentTitles["portableserialization.html#null-portable-serialization"] = "Null Portable Serialization";
index.add({
    url: "portableserialization.html#null-portable-serialization",
    title: "Null Portable Serialization",
    body: "### Null Portable Serialization  Be careful when serializing null portables. Hazelcast lazily creates a class definition of portable internally when the user first serializes. This class definition is stored and used later for deserializing that portable class. When the user tries to serialize a null portable when there is no class definition at the moment, Hazelcast throws an exception saying that `com.hazelcast.nio.serialization.HazelcastSerializationException: Cannot write null portable without explicitly registering class definition!`.   There are two solutions to get rid of this exception. Either put a non-null portable class of the same type before any other operation, or manually register a class definition in serialization configuration as shown below.  ```java Config config = new Config(); final ClassDefinition classDefinition = new ClassDefinitionBuilder(Foo.factoryId, Foo.getClassId)                        .addUTFField(\&quot;foo\&quot;).build(); config.getSerializationConfig().addClassDefinition(classDefinition); Hazelcast.newHazelcastInstance(config); ```   "
});

documentTitles["portableserialization.html#distributedobject-serialization"] = "DistributedObject Serialization";
index.add({
    url: "portableserialization.html#distributedobject-serialization",
    title: "DistributedObject Serialization",
    body: "### DistributedObject Serialization  Putting a DistributedObject (e.g. Hazelcast Semaphore, Queue, etc.) in a machine and getting it from another one is not a straightforward operation. Passing the ID and type of the DistributedObject can be a solution. For deserialization, you can get the object from HazelcastInstance. For instance, if your distributed object is an instance of `IQueue`, you can either use `HazelcastInstance.getQueue(id)` or `Hazelcast.getDistributedObject`.  You can use the `HazelcastInstanceAware` interface in the case of a deserialization of a Portable DistributedObject if it gets an ID to be looked up. HazelcastInstance is set after deserialization, so you first need to store the ID and then retrieve the DistributedObject using the `setHazelcastInstance` method.    &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [Serialization Configuration section](#serialization-configuration) for a full description of Hazelcast Serialization configuration.*      "
});



documentTitles["customserialization.html#custom-serialization"] = "Custom Serialization";
index.add({
    url: "customserialization.html#custom-serialization",
    title: "Custom Serialization",
    body: "## Custom Serialization  Hazelcast lets you plug a custom serializer for serializing objects. You can use `StreamSerializer` and [`ByteArraySerializer`](#bytearrayserializer) interfaces for this purpose.   "
});

documentTitles["customserialization.html#streamserializer"] = "StreamSerializer";
index.add({
    url: "customserialization.html#streamserializer",
    title: "StreamSerializer",
    body: "### StreamSerializer  You can use a stream to serialize and deserialize data by using `StreamSerializer`. This is a good option for your own implementations. It can also be adapted to external serialization libraries like Kryo, JSON, and protocol buffers.  "
});

documentTitles["customserialization.html#streamserializer-example-1"] = "StreamSerializer Example 1";
index.add({
    url: "customserialization.html#streamserializer-example-1",
    title: "StreamSerializer Example 1",
    body: "#### StreamSerializer Example 1  First, let's create a simple object.  ```java public class Employee {   private String surname;      public Employee( String surname ) {     this.surname = surname;   } } ```  Now, let's implement StreamSerializer for `Employee` class.  ```java public class EmployeeStreamSerializer     implements StreamSerializer&lt;Employee&gt; {    @Override   public int getTypeId () {     return 1;    }    @Override   public void write( ObjectDataOutput out, Employee employee )       throws IOException {      out.writeUTF(employee.getSurname());   }    @Override   public Employee read( ObjectDataInput in )        throws IOException {      String surname = in.readUTF();     return new Employee(surname);   }    @Override   public void destroy () {    } } ```  In practice, classes may have many fields. Just make sure the fields are read in the same order as they are written. The type ID must be unique and greater than or equal to **1**. Uniqueness of the type ID enables Hazelcast to determine which serializer will be used during deserialization.   As the last step, let's register the `EmployeeStreamSerializer` in the configuration file `hazelcast.xml`, as shown below.  ```xml &lt;serialization&gt;   &lt;serializers&gt;     &lt;serializer type-class=\&quot;Employee\&quot; class-name=\&quot;EmployeeStreamSerializer\&quot; /&gt;   &lt;/serializers&gt; &lt;/serialization&gt; ```   ![image](images/NoteSmall.jpg) ***NOTE:*** *`StreamSerializer` cannot be created for well-known types (e.g. Long, String) and primitive arrays. Hazelcast already registers these types.*   &lt;br&gt;&lt;/br&gt;  "
});

documentTitles["customserialization.html#streamserializer-example-2"] = "StreamSerializer Example 2";
index.add({
    url: "customserialization.html#streamserializer-example-2",
    title: "StreamSerializer Example 2",
    body: "#### StreamSerializer Example 2  Let's take a look at another example implementing `StreamSerializer`.  ```java public class Foo {   private String foo;      public String getFoo() {     return foo;   }      public void setFoo( String foo ) {     this.foo = foo;   } } ```  Assume that our custom serialization will serialize Foo into XML. First we need to implement a `com.hazelcast.nio.serialization.StreamSerializer`. A very simple one that uses XMLEncoder and XMLDecoder could look like the following:  ```java public static class FooXmlSerializer implements StreamSerializer&lt;Foo&gt; {    @Override   public int getTypeId() {     return 10;   }    @Override   public void write( ObjectDataOutput out, Foo object ) throws IOException {     ByteArrayOutputStream bos = new ByteArrayOutputStream();     XMLEncoder encoder = new XMLEncoder( bos );     encoder.writeObject( object );     encoder.close();     out.write( bos.toByteArray() );   }    @Override   public Foo read( ObjectDataInput in ) throws IOException {     InputStream inputStream = (InputStream) in;     XMLDecoder decoder = new XMLDecoder( inputStream );     return (Foo) decoder.readObject();   }    @Override   public void destroy() {   } } ```  Note that `typeId` must be unique because Hazelcast will use it to look up the `StreamSerializer` while it de-serializes the object. The last required step is to register the `StreamSerializer` to the Configuration. Below are the programmatic and declarative configurations for this step.  ```java SerializerConfig sc = new SerializerConfig()     .setImplementation(new FooXmlSerializer())     .setTypeClass(Foo.class); Config config = new Config(); config.getSerializationConfig().addSerializerConfig(sc); ```   ```xml &lt;hazelcast&gt;   &lt;serialization&gt;     &lt;serializers&gt;       &lt;serializer type-class=\&quot;com.www.Foo\&quot;&gt;com.www.FooXmlSerializer&lt;/serializer&gt;     &lt;/serializers&gt;   &lt;/serialization&gt; &lt;/hazelcast&gt; ```  From now on, Hazelcast will use `FooXmlSerializer` to serialize Foo objects. This way one can write an adapter (StreamSerializer) for any Serialization framework and plug it into Hazelcast.   &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [Serialization Configuration section](#serialization-configuration) for a full description of Hazelcast Serialization configuration.*    "
});



documentTitles["bytearrayserializer.html#bytearrayserializer"] = "ByteArraySerializer";
index.add({
    url: "bytearrayserializer.html#bytearrayserializer",
    title: "ByteArraySerializer",
    body: "### ByteArraySerializer  `ByteArraySerializer` exposes the raw ByteArray used internally by Hazelcast. It is a good option if the serialization library you are using deals with ByteArrays instead of streams.  Let's implement `ByteArraySerializer` for the `Employee` class mentioned in the [StreamSerializer section](#streamserializer).  ```java public class EmployeeByteArraySerializer     implements ByteArraySerializer&lt;Employee&gt; {    @Override   public void destroy () {    }    @Override   public int getTypeId () {     return 1;    }    @Override   public byte[] write( Employee object )       throws IOException {      return object.getName().getBytes();   }    @Override   public Employee read( byte[] buffer )        throws IOException {      String surname = new String( buffer );     return new Employee( surname );   } } ```  As usual, let's register the `EmployeeByteArraySerializer` in the configuration file `hazelcast.xml`, as shown below.  ```xml &lt;serialization&gt;   &lt;serializers&gt;     &lt;serializer type-class=\&quot;Employee\&quot;&gt;EmployeeByteArraySerializer&lt;/serializer&gt;   &lt;/serializers&gt; &lt;/serialization&gt; ```   &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [Serialization Configuration section](#serialization-configuration) for a full description of Hazelcast Serialization configuration.*   "
});



documentTitles["hazelcastinstanceaware.html#hazelcastinstanceaware-interface"] = "HazelcastInstanceAware Interface";
index.add({
    url: "hazelcastinstanceaware.html#hazelcastinstanceaware-interface",
    title: "HazelcastInstanceAware Interface",
    body: "## HazelcastInstanceAware Interface  You can implement the `HazelcastInstanceAware` interface to access distributed objects for cases where an object is deserialized and needs access to HazelcastInstance.  Let's implement it for the `Employee` class mentioned in the [Custom Serialization section](#custom-serialization).  ```java public class Employee     implements Serializable, HazelcastInstanceAware {        private static final long serialVersionUID = 1L;   private String surname;   private transient HazelcastInstance hazelcastInstance;    public Person( String surname ) {      this.surname = surname;   }    @Override   public void setHazelcastInstance( HazelcastInstance hazelcastInstance ) {     this.hazelcastInstance = hazelcastInstance;     System.out.println( \&quot;HazelcastInstance set\&quot; );    }    @Override   public String toString() {     return String.format( \&quot;Person(surname=%s)\&quot;, surname );    } } ```   After deserialization, the object is checked if it implements `HazelcastInstanceAware` and the method `setHazelcastInstance` is called. Notice the `hazelcastInstance` is `transient`. This is because this field should not be serialized.  It may be a good practice to inject a HazelcastInstance into a domain object (e.g. `Employee` in the above sample) when used together with `Runnable`/`Callable` implementations. These runnables/callables are executed by `IExecutorService` which sends them to another machine. And after a task is deserialized, run/call method implementations need to access HazelcastInstance.  We recommend you only to set the HazelcastInstance field while using `setHazelcastInstance` method and not to execute operations on the HazelcastInstance. Because, when HazelcastInstance is injected for a `HazelcastInstanceAware` implementation, it may not be up and running at the injection time.     &lt;br&gt;&lt;/br&gt;"
});



documentTitles["management.html#management"] = "Management";
index.add({
    url: "management.html#management",
    title: "Management",
    body: "# Management     "
});

documentTitles["management.html#statistics-api-per-node"] = "Statistics API per Node";
index.add({
    url: "management.html#statistics-api-per-node",
    title: "Statistics API per Node",
    body: "## Statistics API per Node  You can gather various statistics from your distributed data structures via Statistics API. Since the data structures are distributed in the cluster, the Statistics API provides statistics for the local portion (1/Number of Nodes) of data on each node.   "
});

documentTitles["management.html#map-statistics"] = "Map Statistics";
index.add({
    url: "management.html#map-statistics",
    title: "Map Statistics",
    body: "### Map Statistics The `IMap` interface has a `getLocalMapStats()` method which returns a `LocalMapStats` object that holds local map statistics.  ```java HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); IMap&lt;String, Customer&gt; customers = hazelcastInstance.getMap( \&quot;customers\&quot; ); LocalMapStats mapStatistics = customers.getLocalMapStats(); System.out.println( \&quot;number of entries owned on this node = \&quot;     + mapStatistics.getOwnedEntryCount() ); ```  Below is the list of metrics that you can access via the `LocalMapStats` object.  ```java /**  * Returns the number of entries owned by this member.  */ long getOwnedEntryCount();  /**  * Returns the number of backup entries hold by this member.  */ long getBackupEntryCount();  /**  * Returns the number of backups per entry.  */ int getBackupCount();  /**  * Returns memory cost (number of bytes) of owned entries in this member.  */ long getOwnedEntryMemoryCost();  /**  * Returns memory cost (number of bytes) of backup entries in this member.  */ long getBackupEntryMemoryCost();  /**  * Returns the creation time of this map on this member.  */ long getCreationTime();  /**  * Returns the last access (read) time of the locally owned entries.  */ long getLastAccessTime();  /**  * Returns the last update time of the locally owned entries.  */ long getLastUpdateTime();  /**  * Returns the number of hits (reads) of the locally owned entries.  */ long getHits();  /**  * Returns the number of currently locked locally owned keys.  */ long getLockedEntryCount();  /**  * Returns the number of entries that the member owns and are dirty (updated  * but not persisted yet).  * dirty entry count is meaningful when there is a persistence defined.  */ long getDirtyEntryCount();  /**  * Returns the number of put operations  */ long getPutOperationCount();  /**  * Returns the number of get operations  */ long getGetOperationCount();  /**  * Returns the number of Remove operations  */ long getRemoveOperationCount();  /**  * Returns the total latency of put operations. To get the average latency,  * divide by number of puts  */ long getTotalPutLatency();  /**  * Returns the total latency of get operations. To get the average latency,  * divide by number of gets  */ long getTotalGetLatency();  /**  * Returns the total latency of remove operations. To get the average latency,  * divide by number of gets  */ long getTotalRemoveLatency();  /**  * Returns the maximum latency of put operations. To get the average latency,  * divide by number of puts  */ long getMaxPutLatency();  /**  * Returns the maximum latency of get operations. To get the average latency,  * divide by number of gets  */ long getMaxGetLatency();  /**  * Returns the maximum latency of remove operations. To get the average latency,  * divide by number of gets  */ long getMaxRemoveLatency();  /**  * Returns the number of Events Received  */ long getEventOperationCount();  /**  * Returns the total number of Other Operations  */ long getOtherOperationCount();  /**  * Returns the total number of total operations  */ long total();  /**  * Cost of map &amp; near cache  &amp; backup in bytes  * todo in object mode object size is zero.  */ long getHeapCost();  /**  * Returns statistics related to the Near Cache.  */ NearCacheStats getNearCacheStats(); ```  "
});

documentTitles["management.html#near-cache-statistics"] = "Near Cache Statistics";
index.add({
    url: "management.html#near-cache-statistics",
    title: "Near Cache Statistics",
    body: "#### Near Cache Statistics You can access Near Cache statistics from the `LocalMapStats` object via the `getNearCacheStats()` method, which returns a `NearCacheStats` object.  ```java HazelcastInstance node = Hazelcast.newHazelcastInstance(); IMap&lt;String, Customer&gt; customers = node.getMap( \&quot;customers\&quot; ); LocalMapStats mapStatistics = customers.getLocalMapStats(); NearCacheStats nearCacheStatistics = mapStatistics.getNearCacheStats(); System.out.println( \&quot;near cache hit/miss ratio= \&quot;     + nearCacheStatistics.getRatio() ); ``` Below is the list of metrics that you can access via the `NearCacheStats` object. This behavior applies to both client and node near caches.  ```java /**  * Returns the creation time of this NearCache on this member  */ long getCreationTime();  /**  * Returns the number of entries owned by this member.  */ long getOwnedEntryCount();  /**  * Returns memory cost (number of bytes) of entries in this cache.  */ long getOwnedEntryMemoryCost();  /**  * Returns the number of hits (reads) of the locally owned entries.  */ long getHits();  /**  * Returns the number of misses  of the locally owned entries.  */ long getMisses();  /**  * Returns the hit/miss ratio  of the locally owned entries.  */ double getRatio(); ```  "
});

documentTitles["management.html#multimap-statistics"] = "Multimap Statistics";
index.add({
    url: "management.html#multimap-statistics",
    title: "Multimap Statistics",
    body: "### Multimap Statistics  The `MultiMap` interface has a `getLocalMultiMapStats()` method which returns a `LocalMultiMapStats` object that holds local MultiMap statistics. ```java HazelcastInstance node = Hazelcast.newHazelcastInstance(); MultiMap&lt;String, Customer&gt; customers = node.getMultiMap( \&quot;customers\&quot; ); LocalMultiMapStats multiMapStatistics = customers.getLocalMultiMapStats(); System.out.println( \&quot;last update time =  \&quot;     + multiMapStatistics.getLastUpdateTime() ); ``` Below is the list of metrics that you can access via the `LocalMultiMapStats` object.  ```java /**  * Returns the number of entries owned by this member.  */ long getOwnedEntryCount();  /**  * Returns the number of backup entries hold by this member.  */ long getBackupEntryCount();  /**  * Returns the number of backups per entry.  */ int getBackupCount();  /**  * Returns memory cost (number of bytes) of owned entries in this member.  */ long getOwnedEntryMemoryCost();  /**  * Returns memory cost (number of bytes) of backup entries in this member.  */ long getBackupEntryMemoryCost();  /**  * Returns the creation time of this map on this member.  */ long getCreationTime();  /**  * Returns the last access (read) time of the locally owned entries.  */ long getLastAccessTime();  /**  * Returns the last update time of the locally owned entries.  */ long getLastUpdateTime();  /**  * Returns the number of hits (reads) of the locally owned entries.  */ long getHits();  /**  * Returns the number of currently locked locally owned keys.  */ long getLockedEntryCount();  /**  * Returns the number of entries that the member owns and are dirty (updated  * but not persisted yet).  * dirty entry count is meaningful when a persistence is defined.  */ long getDirtyEntryCount();  /**  * Returns the number of put operations  */ long getPutOperationCount();  /**  * Returns the number of get operations  */ long getGetOperationCount();  /**  * Returns the number of Remove operations  */ long getRemoveOperationCount();  /**  * Returns the total latency of put operations. To get the average latency,  * divide by number of puts  */ long getTotalPutLatency();  /**  * Returns the total latency of get operations. To get the average latency,  * divide by number of gets  */ long getTotalGetLatency();  /**  * Returns the total latency of remove operations. To get the average latency,  * divide by number of gets  */ long getTotalRemoveLatency();  /**  * Returns the maximum latency of put operations. To get the average latency,  * divide by number of puts  */ long getMaxPutLatency();  /**  * Returns the maximum latency of get operations. To get the average latency,  * divide by number of gets  */ long getMaxGetLatency();  /**  * Returns the maximum latency of remove operations. To get the average latency,  * divide by number of gets  */ long getMaxRemoveLatency();  /**  * Returns the number of Events Received  */ long getEventOperationCount();  /**  * Returns the total number of Other Operations  */ long getOtherOperationCount();  /**  * Returns the total number of total operations  */ long total();  /**  * Cost of map &amp; near cache  &amp; backup in bytes  * todo in object mode object size is zero.  */ long getHeapCost(); ```  "
});

documentTitles["management.html#queue-statistics"] = "Queue Statistics";
index.add({
    url: "management.html#queue-statistics",
    title: "Queue Statistics",
    body: "### Queue Statistics  The `IQueue` interface has a `getLocalQueueStats()` method which returns a `LocalQueueStats` object that holds local queue statistics.  ```java HazelcastInstance node = Hazelcast.newHazelcastInstance(); IQueue&lt;Order&gt; orders = node.getQueue( \&quot;orders\&quot; ); LocalQueueStats queueStatistics = orders.getLocalQueueStats(); System.out.println( \&quot;average age of items = \&quot;      + queueStatistics.getAvgAge() ); ```  Below is the list of metrics that you can access via the `LocalQueueStats` object.  ```java /**  * Returns the number of owned items in this member.  */ long getOwnedItemCount();  /**  * Returns the number of backup items in this member.  */ long getBackupItemCount();  /**  * Returns the min age of the items in this member.  */ long getMinAge();  /**  * Returns the max age of the items in this member.  */ long getMaxAge();  /**  * Returns the average age of the items in this member.  */ long getAvgAge();  /**  * Returns the number of offer/put/add operations.  * Offers returning false will be included.  * #getRejectedOfferOperationCount can be used  * to get the rejected offers.  */ long getOfferOperationCount();  /**  * Returns the number of rejected offers. Offer  * can be rejected because of max-size limit  * on the queue.  */ long getRejectedOfferOperationCount();  /**  * Returns the number of poll/take/remove operations.  * Polls returning null (empty) will be included.  * #getEmptyPollOperationCount can be used to get the  * number of polls returned null.  */ long getPollOperationCount();  /**  * Returns number of null returning poll operations.  * Poll operation might return null, if the queue is empty.  */ long getEmptyPollOperationCount();  /**  * Returns number of other operations  */ long getOtherOperationsCount();  /**  * Returns number of event operations  */ long getEventOperationCount(); ```  "
});

documentTitles["management.html#topic-statistics"] = "Topic Statistics";
index.add({
    url: "management.html#topic-statistics",
    title: "Topic Statistics",
    body: "### Topic Statistics  The `ITopic` interface has a `getLocalTopicStats()` method which returns a `LocalTopicStats` object that holds local topic statistics.   ```java HazelcastInstance node = Hazelcast.newHazelcastInstance(); ITopic&lt;Object&gt; news = node.getTopic( \&quot;news\&quot; ); LocalTopicStats topicStatistics = news.getLocalTopicStats(); System.out.println( \&quot;number of publish operations = \&quot;      + topicStatistics.getPublishOperationCount() ); ```  Below is the list of metrics that you can access via the `LocalTopicStats` object.  ```java /**  * Returns the creation time of this topic on this member  */ long getCreationTime();  /**  * Returns the total number of published messages of this topic on this member  */ long getPublishOperationCount();  /**  * Returns the total number of received messages of this topic on this member  */ long getReceiveOperationCount(); ``` "
});

documentTitles["management.html#executor-statistics"] = "Executor Statistics";
index.add({
    url: "management.html#executor-statistics",
    title: "Executor Statistics",
    body: "### Executor Statistics  The `IExecutorService` interface has a `getLocalExecutorStats()` method which returns a `LocalExecutorStats` object that holds local executor statistics.  ```java HazelcastInstance node = Hazelcast.newHazelcastInstance(); IExecutorService orderProcessor = node.getExecutorService( \&quot;orderProcessor\&quot; ); LocalExecutorStats executorStatistics = orderProcessor.getLocalExecutorStats(); System.out.println( \&quot;completed task count = \&quot;      + executorStatistics.getCompletedTaskCount() ); ```  Below is the list of metrics that you can access via the `LocalExecutorStats` object.  ```java /**  * Returns the number of pending operations of the executor service  */ long getPendingTaskCount();  /**  * Returns the number of started operations of the executor service  */ long getStartedTaskCount();  /**  * Returns the number of completed operations of the executor service  */ long getCompletedTaskCount();  /**  * Returns the number of cancelled operations of the executor service  */ long getCancelledTaskCount();  /**  * Returns the total start latency of operations started  */ long getTotalStartLatency();  /**  * Returns the total execution time of operations finished  */ long getTotalExecutionLatency(); ``` "
});



documentTitles["jmxapipernode.html#jmx-api-per-node"] = "JMX API per Node";
index.add({
    url: "jmxapipernode.html#jmx-api-per-node",
    title: "JMX API per Node",
    body: "## JMX API per Node  Hazelcast members expose various management beans which include statistics about distributed data structures and the states of Hazelcast node internals.  The metrics are local to the nodes, i.e. they do not reflect cluster wide values.  You can find the JMX API definition below with descriptions and the API methods in parenthesis.  **Atomic Long (`IAtomicLong`)**  *  Name ( `name` ) *  Current Value ( `currentValue` ) *  Set Value ( `set(v)` ) *  Add value and Get ( `addAndGet(v)` ) *  Compare and Set ( `compareAndSet(e,v)` ) *  Decrement and Get ( `decrementAndGet()` ) *  Get and Add ( `getAndAdd(v)` ) *  Get and Increment ( `getAndIncrement()` ) *  Get and Set ( `getAndSet(v)` ) *  Increment and Get ( `incrementAndGet()` ) *  Partition key ( `partitionKey` )  **Atomic Reference ( `IAtomicReference` )**  *  Name ( `name` ) *  Partition key  ( `partitionKey`)  **Countdown Latch ( `ICountDownLatch` )**  *  Name ( `name` ) *  Current count ( `count`) *  Countdown ( `countDown()` ) *  Partition key  ( `partitionKey`)  **Executor Service ( `IExecutorService` )**  *  Local pending operation count ( `localPendingTaskCount` ) *  Local started operation count ( `localStartedTaskCount` ) *  Local completed operation count ( `localCompletedTaskCount` ) *  Local cancelled operation count ( `localCancelledTaskCount` ) *  Local total start latency ( `localTotalStartLatency` ) *  Local total execution latency ( `localTotalExecutionLatency` )  **List ( `IList` )**  *  Name ( `name` ) *  Clear list ( `clear` ) *  Total added item count ( `totalAddedItemCount` ) *  Total removed item count ( `totalRemovedItemCount` )  **Lock ( `ILock` )**  *  Name ( `name` ) *  Lock Object ( `lockObject` ) *  Partition key ( `partitionKey` )  **Map ( `IMap` )**  *  Name ( `name` ) *  Size ( `size` ) *  Config ( `config` ) *  Owned entry count ( `localOwnedEntryCount` ) *  Owned entry memory cost ( `localOwnedEntryMemoryCost` ) *  Backup entry count ( `localBackupEntryCount` ) *  Backup entry cost ( `localBackupEntryMemoryCost` ) *  Backup count ( `localBackupCount` ) *  Creation time ( `localCreationTime` ) *  Last access time ( `localLastAccessTime` ) *  Last update time ( `localLastUpdateTime` ) *  Hits ( `localHits` ) *  Locked entry count ( `localLockedEntryCount` ) *  Dirty entry count ( `localDirtyEntryCount` ) *  Put operation count ( `localPutOperationCount` ) *  Get operation count ( `localGetOperationCount` ) *  Remove operation count ( `localRemoveOperationCount` ) *  Total put latency ( `localTotalPutLatency` ) *  Total get latency ( `localTotalGetLatency` ) *  Total remove latency ( `localTotalRemoveLatency` ) *  Max put latency ( `localMaxPutLatency` ) *  Max get latency ( `localMaxGetLatency` ) *  Max remove latency ( `localMaxRemoveLatency` ) *  Event count ( `localEventOperationCount` ) *  Other (keySet,entrySet etc..) operation count ( `localOtherOperationCount` ) *  Total operation count ( `localTotal` ) *  Heap Cost ( `localHeapCost` ) *  Total added entry count ( `totalAddedEntryCount` ) *  Total removed entry count ( `totalRemovedEntryCount` ) *  Total updated entry count ( `totalUpdatedEntryCount` ) *  Total evicted entry count ( `totalEvictedEntryCount` ) *  Clear ( `clear()` ) *  Values ( `values(p)`) *  Entry Set ( `entrySet(p)` )  **MultiMap ( `MultiMap` )**  *  Name ( `name` ) *  Size ( `size` ) *  Owned entry count ( `localOwnedEntryCount` ) *  Owned entry memory cost ( `localOwnedEntryMemoryCost` ) *  Backup entry count ( `localBackupEntryCount` ) *  Backup entry cost ( `localBackupEntryMemoryCost` ) *  Backup count ( `localBackupCount` ) *  Creation time ( `localCreationTime` ) *  Last access time ( `localLastAccessTime` ) *  Last update time ( `localLastUpdateTime` ) *  Hits ( `localHits` ) *  Locked entry count ( `localLockedEntryCount` ) *  Put operation count ( `localPutOperationCount` ) *  Get operation count ( `localGetOperationCount` ) *  Remove operation count ( `localRemoveOperationCount` ) *  Total put latency ( `localTotalPutLatency` ) *  Total get latency ( `localTotalGetLatency` ) *  Total remove latency ( `localTotalRemoveLatency` ) *  Max put latency ( `localMaxPutLatency` ) *  Max get latency ( `localMaxGetLatency` ) *  Max remove latency ( `localMaxRemoveLatency` ) *  Event count ( `localEventOperationCount` ) *  Other (keySet,entrySet etc..) operation count ( `localOtherOperationCount` ) *  Total operation count ( `localTotal` ) *  Clear ( `clear()` )  **Replicated Map ( `ReplicatedMap` )**  *  Name ( `name` ) *  Size ( `size` ) *  Config ( `config` ) *  Owned entry count ( `localOwnedEntryCount` ) *  Creation time ( `localCreationTime` ) *  Last access time ( `localLastAccessTime` ) *  Last update time ( `localLastUpdateTime` ) *  Hits ( `localHits` ) *  Put operation count ( `localPutOperationCount` ) *  Get operation count ( `localGetOperationCount` ) *  Remove operation count ( `localRemoveOperationCount` ) *  Total put latency ( `localTotalPutLatency` ) *  Total get latency ( `localTotalGetLatency` ) *  Total remove latency ( `localTotalRemoveLatency` ) *  Max put latency ( `localMaxPutLatency` ) *  Max get latency ( `localMaxGetLatency` ) *  Max remove latency ( `localMaxRemoveLatency` ) *  Event count ( `localEventOperationCount` ) *  Replication event count ( `localReplicationEventCount` ) *  Other (keySet,entrySet etc..) operation count ( `localOtherOperationCount` ) *  Total operation count ( `localTotal` ) *  Total added entry count ( `totalAddedEntryCount` ) *  Total removed entry count ( `totalRemovedEntryCount` ) *  Total updated entry count ( `totalUpdatedEntryCount` ) *  Clear ( `clear()` ) *  Values ( `values()`) *  Entry Set ( `entrySet()` )  **Queue ( `IQueue` )**  *  Name ( `name` ) *  Config ( `QueueConfig` ) *  Partition key ( `partitionKey` ) *  Owned item count ( `localOwnedItemCount` ) *  Backup item count ( `localBackupItemCount` ) *  Minimum age ( `localMinAge` ) *  Maximum age ( `localMaxAge` ) *  Average age ( `localAveAge` ) *  Offer operation count ( `localOfferOperationCount` ) *  Rejected offer operation count ( `localRejectedOfferOperationCount` ) *  Poll operation count ( `localPollOperationCount` ) *  Empty poll operation count ( `localEmptyPollOperationCount` ) *  Other operation count ( `localOtherOperationsCount` ) *  Event operation count ( `localEventOperationCount` ) *  Total added item count ( `totalAddedItemCount` ) *  Total removed item count ( `totalRemovedItemCount` ) *  Clear ( `clear()` )  **Semaphore ( `ISemaphore` )**  *  Name ( `name` ) *  Available permits ( `available` ) *  Partition key ( `partitionKey` ) *  Drain ( `drain()`) *  Shrink available permits by given number ( `reduce(v)` ) *  Release given number of permits ( `release(v)` )  **Set ( `ISet` )**  *  Name ( `name` ) *  Partition key ( `partitionKey` ) *  Total added item count ( `totalAddedItemCount` ) *  Total removed item count ( `totalRemovedItemCount` ) *  Clear ( `clear()` )  **Topic ( `ITopic` )**  *  Name ( `name` ) *  Config ( `config` ) *  Creation time ( `localCreationTime` ) *  Publish operation count ( `localPublishOperationCount` ) *  Receive operation count ( `localReceiveOperationCount` ) *  Total message count ( `totalMessageCount` )  **Hazelcast Instance ( `HazelcastInstance` )**  *  Name ( `name` ) *  Version ( `version` ) *  Build ( `build` ) *  Configuration ( `config` ) *  Configuration source ( `configSource` ) *  Group name ( `groupName` ) *  Network Port ( `port` ) *  Cluster-wide Time ( `clusterTime` ) *  Size of the cluster ( `memberCount` ) *  List of members ( `Members` ) *  Running state ( `running` ) *  Shutdown the member ( `shutdown()` ) *  **Node ( `HazelcastInstance.Node` )**  *  Address ( `address` )  *  Master address ( `masterAddress` ) * **Event Service ( `HazelcastInstance.EventService` )**  *  Event thread count  ( `eventThreadCount` )  *  Event queue size ( `eventQueueSize` )  *  Event queue capacity ( `eventQueueCapacity` ) * **Operation Service ( `HazelcastInstance.OperationService` )**  *  Response queue size  ( `responseQueueSize` )  *  Operation executor queue size ( `operationExecutorQueueSize` )  *  Running operation count ( `runningOperationsCount` )  *  Remote operation count ( `remoteOperationCount` )  *  Executed operation count ( `executedOperationCount` )  *  Operation thread count ( `operationThreadCount` ) * **Proxy Service ( `HazelcastInstance.ProxyService` )**  *  Proxy count ( `proxyCount` ) * **Partition Service ( `HazelcastInstance.PartitionService` )**  *  Partition count ( `partitionCount` )  *  Active partition count ( `activePartitionCount` ) * **Connection Manager ( `HazelcastInstance.ConnectionManager` )**  *  Client connection count ( `clientConnectionCount` )  *  Active connection count ( `activeConnectionCount` )  *  Connection count ( `connectionCount` ) * **Client Engine ( `HazelcastInstance.ClientEngine` )**  *  Client endpoint count ( `clientEndpointCount` ) * **System Executor ( `HazelcastInstance.ManagedExecutorService` )**  *  Name ( `name` )  *  Work queue size ( `queueSize` )  *  Thread count of the pool ( `poolSize` )  *  Maximum thread count of the pool ( `maximumPoolSize` )  *  Remaining capacity of the work queue ( `remainingQueueCapacity` )  *  Is shutdown ( `isShutdown` )  *  Is terminated ( `isTerminated` )  *  Completed task count ( `completedTaskCount` ) * **Operation Executor ( `HazelcastInstance.ManagedExecutorService` )**  *  Name ( `name` )  *  Work queue size ( `queueSize` )  *  Thread count of the pool ( `poolSize` )  *  Maximum thread count of the pool ( `maximumPoolSize` )  *  Remaining capacity of the work queue ( `remainingQueueCapacity` )  *  Is shutdown ( `isShutdown` )  *  Is terminated ( `isTerminated` )  *  Completed task count ( `completedTaskCount` ) * **Async Executor (`HazelcastInstance.ManagedExecutorService`)**  *  Name ( `name` )  *  Work queue size ( `queueSize` )  *  Thread count of the pool ( `poolSize` )  *  Maximum thread count of the pool ( `maximumPoolSize` )  *  Remaining capacity of the work queue ( `remainingQueueCapacity` )  *  Is shutdown ( `isShutdown` )  *  Is terminated ( `isTerminated` )  *  Completed task count ( `completedTaskCount` ) * **Scheduled Executor ( `HazelcastInstance.ManagedExecutorService` )**  *  Name ( `name` )  *  Work queue size ( `queueSize` )  *  Thread count of the pool ( `poolSize` )  *  Maximum thread count of the pool ( `maximumPoolSize` )  *  Remaining capacity of the work queue ( `remainingQueueCapacity` )  *  Is shutdown ( `isShutdown` )  *  Is terminated ( `isTerminated` )  *  Completed task count ( `completedTaskCount` ) * **Client Executor ( `HazelcastInstance.ManagedExecutorService` )**  *  Name ( `name` )  *  Work queue size ( `queueSize` )  *  Thread count of the pool ( `poolSize` )  *  Maximum thread count of the pool ( `maximumPoolSize` )  *  Remaining capacity of the work queue ( `remainingQueueCapacity` )  *  Is shutdown ( `isShutdown` )  *  Is terminated ( `isTerminated` )  *  Completed task count ( `completedTaskCount` ) * **Query Executor ( `HazelcastInstance.ManagedExecutorService` )**  *  Name ( `name` )  *  Work queue size ( `queueSize` )  *  Thread count of the pool ( `poolSize` )  *  Maximum thread count of the pool ( `maximumPoolSize` )  *  Remaining capacity of the work queue ( `remainingQueueCapacity` )  *  Is shutdown ( `isShutdown` )  *  Is terminated ( `isTerminated` )  *  Completed task count ( `completedTaskCount` ) * **IO Executor ( `HazelcastInstance.ManagedExecutorService` )**  *  Name ( `name` )  *  Work queue size ( `queueSize` )  *  Thread count of the pool ( `poolSize` )  *  Maximum thread count of the pool ( `maximumPoolSize` )  *  Remaining capacity of the work queue ( `remainingQueueCapacity` )  *  Is shutdown ( `isShutdown` )  *  Is terminated ( `isTerminated` )  *  Completed task count ( `completedTaskCount` ) "
});



documentTitles["monitoringwithjmx.html#monitoring-with-jmx"] = "Monitoring with JMX";
index.add({
    url: "monitoringwithjmx.html#monitoring-with-jmx",
    title: "Monitoring with JMX",
    body: "## Monitoring with JMX  You can monitor your Hazelcast members via the JMX protocol.  - Add the following system properties to enable [JMX agent](http://download.oracle.com/javase/1.5.0/docs/guide/management/agent.html):     - `-Dcom.sun.management.jmxremote`    - `-Dcom.sun.management.jmxremote.port=\_portNo\_` (to specify JMX port) (*optional*)    - `-Dcom.sun.management.jmxremote.authenticate=false` (to disable JMX auth) (*optional*)   - Enable the Hazelcast property `hazelcast.jmx` (please refer to the [Advanced Configuration Properties section](#advanced-configuration-properties)):     - using Hazelcast configuration (API, XML, Spring).    - or by setting the system property `-Dhazelcast.jmx=true`  - Use jconsole, jvisualvm (with mbean plugin) or another JMX compliant monitoring tool. "
});



documentTitles["clusterutilities.html#cluster-utilities"] = "Cluster Utilities";
index.add({
    url: "clusterutilities.html#cluster-utilities",
    title: "Cluster Utilities",
    body: "## Cluster Utilities   "
});

documentTitles["clusterutilities.html#cluster-interface"] = "Cluster Interface";
index.add({
    url: "clusterutilities.html#cluster-interface",
    title: "Cluster Interface",
    body: "### Cluster Interface  Hazelcast allows you to register for membership events so you will be notified when members are added or removed. You can also get the set of cluster members.  ```java import com.hazelcast.core.*;  HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); Cluster cluster = hazelcastInstance.getCluster(); cluster.addMembershipListener( new MembershipListener() {   public void memberAdded( MembershipEvent membershipEvent ) {     System.out.println( \&quot;MemberAdded \&quot; + membershipEvent );   }    public void memberRemoved( MembershipEvent membershipEvent ) {     System.out.println( \&quot;MemberRemoved \&quot; + membershipEvent );   } } );  Member localMember  = cluster.getLocalMember(); System.out.println ( \&quot;my inetAddress= \&quot; + localMember.getInetAddress() );  Set setMembers  = cluster.getMembers(); for ( Member member : setMembers ) {   System.out.println( \&quot;isLocalMember \&quot; + member.localMember() );   System.out.println( \&quot;member.inetaddress \&quot; + member.getInetAddress() );   System.out.println( \&quot;member.port \&quot; + member.getPort() ); } ```  "
});



documentTitles["memberattributes.html#member-attributes"] = "Member Attributes";
index.add({
    url: "memberattributes.html#member-attributes",
    title: "Member Attributes",
    body: "### Member Attributes You can define various member attributes on your Hazelcast members. You can use these member attributes to tag your members as your business logic requirements.  In order to define member attribute on a member you can either:  - provide `MemberAttributeConfig` to your `Config` object,  - or provide member attributes at runtime via attribute setter methods on the `Member` interface.  For example, you can tag your members with their CPU characteristics and you can route CPU intensive tasks to those CPU-rich members.  ```java MemberAttributeConfig fourCore = new MemberAttributeConfig(); memberAttributeConfig.setIntAttribute( \&quot;CPU_CORE_COUNT\&quot;, 4 ); MemberAttributeConfig twelveCore = new MemberAttributeConfig(); memberAttributeConfig.setIntAttribute( \&quot;CPU_CORE_COUNT\&quot;, 12 ); MemberAttributeConfig twentyFourCore = new MemberAttributeConfig(); memberAttributeConfig.setIntAttribute( \&quot;CPU_CORE_COUNT\&quot;, 24 );  Config member1Config = new Config(); config.setMemberAttributeConfig( fourCore ); Config member2Config = new Config(); config.setMemberAttributeConfig( twelveCore ); Config member3Config = new Config(); config.setMemberAttributeConfig( twentyFourCore );  HazelcastInstance member1 = Hazelcast.newHazelcastInstance( member1Config ); HazelcastInstance member2 = Hazelcast.newHazelcastInstance( member2Config ); HazelcastInstance member3 = Hazelcast.newHazelcastInstance( member3Config );  IExecutorService executorService = member1.getExecutorService( \&quot;processor\&quot; );  executorService.execute( new CPUIntensiveTask(), new MemberSelector() {   @Override   public boolean select(Member member) {     int coreCount = (int) member.getIntAttribute( \&quot;CPU_CORE_COUNT\&quot; );     // Task will be executed at either member2 or member3     if ( coreCount &gt; 8 ) {        return true;     }     return false;   } } );  HazelcastInstance member4 = Hazelcast.newHazelcastInstance(); // We can also set member attributes at runtime. member4.setIntAttribute( \&quot;CPU_CORE_COUNT\&quot;, 2 ); ``` "
});



documentTitles["partitionservice.html#cluster-member-safety-check"] = "Cluster-Member Safety Check";
index.add({
    url: "partitionservice.html#cluster-member-safety-check",
    title: "Cluster-Member Safety Check",
    body: "### Cluster-Member Safety Check  To prevent data loss when shutting down a node, Hazelcast provides a graceful shutdown feature. You perform this by calling the method `HazelcastInstance.shutdown()`. Once this method is called, it checks the following conditions to ensure the node is safe to shutdown.  - There is no active migration. - At least one backup of partitions are synced with primary ones.  Even if the above conditions are not met, `HazelcastInstance.shutdown()` will force them to be completed. Eventually, when this method returns, it means the node has been brought to a safe state and it can be shut down without any data loss.   What if you want to be sure that your **cluster** is in a safe state? What does it mean that cluster is safe to shutdown without any data loss?   There may be some use cases like rolling upgrades, development/testing or any logic that require a cluster/member to be safe. To provide this, Hazelcast offers the `PartitionService` interface with the methods `isClusterSafe`, `isMemberSafe`, `isLocalMemberSafe` and `forceLocalMemberToBeSafe`. These methods can be deemed as decoupled pieces from the method `Hazelcast.shutdown`.    ```java public interface PartitionService {    ...    ...     boolean isClusterSafe();     boolean isMemberSafe(Member member);     boolean isLocalMemberSafe();     boolean forceLocalMemberToBeSafe(long timeout, TimeUnit unit); } ```  The method `isClusterSafe` checks whether the cluster is in a safe state. It returns `true` if there are no active partition migrations and there are sufficient backups for each partition. Once it returns `true`, the cluster is safe and a node can be shut down without data loss.  The method `isMemberSafe` checks whether a specific node is in a safe state. This check controls if the first backups of partitions of the given node are synced with the primary ones. Once it returns `true`, the given node is safe and it can be shut down without data loss. Similarly, the method `isLocalMemberSafe` does the same check for the local member. The method `forceLocalMemberToBeSafe` forces the owned and backup partitions to be synchronized, making the local member safe.  ![image](images/NoteSmall.jpg) ***NOTE:*** *These methods are available from Hazelcast 3.3.*   "
});

documentTitles["partitionservice.html#sample-codes"] = "Sample Codes";
index.add({
    url: "partitionservice.html#sample-codes",
    title: "Sample Codes",
    body: "#### Sample Codes   ```java PartitionService partitionService = hazelcastInstance.getPartitionService().isClusterSafe() if (partitionService().isClusterSafe()) {   hazelcastInstance.shutdown(); // or terminate } ```  OR   ```java PartitionService partitionService = hazelcastInstance.getPartitionService().isClusterSafe() if (partitionService().isLocalMemberSafe()) {   hazelcastInstance.shutdown(); // or terminate } ``` &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***  *For more code samples please refer to [PartitionService Code Samples](https://github.com/hazelcast/hazelcast-code-samples/tree/master/monitoring/cluster/src/main/java)*. "
});



documentTitles["managementcenter.html#management-center"] = "Management Center";
index.add({
    url: "managementcenter.html#management-center",
    title: "Management Center",
    body: "## Management Center   "
});

documentTitles["managementcenter.html#introduction"] = "Introduction";
index.add({
    url: "managementcenter.html#introduction",
    title: "Introduction",
    body: "### Introduction  Hazelcast Management Center enables you to monitor and manage your nodes running Hazelcast. In addition to monitoring overall state of your clusters, you can also analyze and browse your data structures in detail, update map configurations and take thread dump from nodes. With its scripting and console module, you can run scripts (JavaScript, Groovy, etc.) and commands on your nodes.  "
});

documentTitles["managementcenter.html#installation"] = "Installation";
index.add({
    url: "managementcenter.html#installation",
    title: "Installation",
    body: "#### Installation  You have two options for installing Hazelcast Management Center. You can either deploy the `mancenter`-*version*`.war` application into your Java application server/container or you can start Hazelcast Management Center from the command line and then have the Hazelcast nodes communicate with that web application. This means that your Hazelcast nodes should know the URL of the `mancenter` application before they start.  Here are the steps:  -   Download the latest Hazelcast ZIP from [hazelcast.org](http://www.hazelcast.org/download/). The ZIP contains the `mancenter`-*version*`.war` file.  -   You can directly start `mancenter`-*version*`.war` file from the command line. The following command will start Hazelcast Management Center on port 8080 with context root 'mancenter' (`http://localhost:8080/mancenter`).  ```java java -jar mancenter-*version*.war 8080 mancenter ```  - Or, you can deploy it to your web server (Tomcat, Jetty, etc.). Let us say it is running at `http://localhost:8080/mancenter`. - After you perform the above steps, make sure that `http://localhost:8080/mancenter` is up. - Configure your Hazelcast nodes by adding the URL of your web application to your `hazelcast.xml`. Hazelcast nodes will send their states to this URL.   ```xml &lt;management-center enabled=\&quot;true\&quot;&gt;http://localhost:8080/mancenter&lt;/management-center&gt; ```  -   Start your Hazelcast cluster.  -   Browse to `http://localhost:8080/mancenter` and login. **Initial login username/password is `admin/admin`**  The Management Center creates a folder with the name \&quot;mancenter\&quot; under your \&quot;user/home\&quot; folder to save data files. You can change the data folder by setting the `hazelcast.mancenter.home` system property.  &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [Management Center Configuration section](#management-center-configuration) for a full description of Hazelcast Management Center configuration.*    "
});

documentTitles["managementcenter.html#tool-overview"] = "Tool Overview";
index.add({
    url: "managementcenter.html#tool-overview",
    title: "Tool Overview",
    body: "### Tool Overview  Once the page is loaded after selecting a cluster, the tool's home page appears as shown below.  ![](images/NonHostedMCHomePage.jpg)  This page provides the fundamental properties of the selected cluster which are explained in the [Home Page](#homepage) section. The page has a toolbar on the top and a menu on the left.  "
});

documentTitles["managementcenter.html#toolbar"] = "Toolbar";
index.add({
    url: "managementcenter.html#toolbar",
    title: "Toolbar",
    body: "#### Toolbar The toolbar has the following buttons:  -	**Home**: Loads the home page shown above. Please see the [Home Page section](#homepage). -	**Scripting**: Loads the page used to write and execute user`s own scripts on the cluster. Please see the [Scripting section](#scripting). -	**Console**: Loads the page used to execute commands on the cluster. Please see the [Console section](#console). -	**Alerts**: Creates alerts by specifying filters. Please see the [Alerts section](#alerts). -	**Documentation**: Opens the Management Center documentation in a window inside the tool. Please see the [Documentation section](#documentation). -	**Administration**: Used by the admin users to manage users in the system. Please see the [Administration section](#administration). -	**Time Travel**: Sees the cluster's situation at a time in the past. Please see the [Time Travel section](#time-travel). -	**Cluster Selector**: Switches between clusters. When the mouse is moved onto this item, a drop down list of clusters appears.    ![](images/4ChangeCluster.jpg)    The user can select any cluster and once selected, the page immediately loads with the selected cluster's information. -	**Logout**: Closes the current user's session.   ![image](images/NoteSmall.jpg) ***NOTE:*** *Some of the above listed toolbar items are not visible to users who are not admin or who have **read-only** permission. Also, some of the operations explained in the later sections cannot be performed by users with read-only permission. Please see the [Administration section](#administration) for details.*   "
});

documentTitles["managementcenter.html#menu"] = "Menu";
index.add({
    url: "managementcenter.html#menu",
    title: "Menu",
    body: "#### Menu The Home page includes a menu on the left which lists the distributed data structures in the cluster and all the cluster members (nodes), as shown below.  ![](images/LeftMenu.jpg)  ![image](images/NoteSmall.jpg) ***NOTE:*** *Distributed data structures will be shown there when the proxies are created for them.*   You can expand and collapse menu items by clicking on them. Below is the list of menu items with links to their explanations.  - [Caches](#caches) - [Maps](#maps) -	[Queues](#queues) -	[Topics](#topics) -	[MultiMaps](#MultiMaps) -	[Executors](#executors) -	[Members](#members)  "
});

documentTitles["managementcenter.html#tabbed-view"] = "Tabbed View";
index.add({
    url: "managementcenter.html#tabbed-view",
    title: "Tabbed View",
    body: "#### Tabbed View Each time you select an item from the toolbar or menu, the item is added to the main view as a tab, as shown below.  ![](images/NonHMCTabbedView.jpg)  In the above example, *Home*, *Scripting*, *Console*, *queue1* and *map1* windows can be seen as tabs. Windows can be closed using the ![](images/CloseIcon.jpg) icon on each tab (except the Home Page; it cannot be closed).  ---   "
});

documentTitles["managementcenter.html#home-page"] = "Home Page";
index.add({
    url: "managementcenter.html#home-page",
    title: "Home Page",
    body: "### Home Page This is the first page appearing after logging in. It gives an overview of the connected cluster. The following subsections describe each portion of the page.   "
});

documentTitles["managementcenter.html#cpu-utilization"] = "CPU Utilization";
index.add({
    url: "managementcenter.html#cpu-utilization",
    title: "CPU Utilization",
    body: "#### CPU Utilization This part of the page provides load and utilization information for the CPUs for each node, as shown below.  ![](images/NonHMCCPUUtil.jpg)  The first column lists the nodes with their IPs and ports. The next columns list the loads on each CPU for the last 1, 5 and 15 minutes. The last column (**Chart**) graphically shows the utilization of CPUs. When you move the mouse cursor on a desired graph, you can see the CPU utilization at the time where the cursor is placed. Graphs under this column shows the CPU utilizations approximately for the last 2 minutes.   "
});

documentTitles["managementcenter.html#memory-utilization"] = "Memory Utilization";
index.add({
    url: "managementcenter.html#memory-utilization",
    title: "Memory Utilization",
    body: "#### Memory Utilization This part of the page provides information related to memory usages for each node, as shown below.  ![](images/NonHMCMemoryUtil.jpg)  The first column lists the nodes with their IPs and ports. The next columns show the used and free memories out of the total memory reserved for Hazelcast usage, in real-time. The **Max** column lists the maximum memory capacity of each node and the **Percent** column lists the percentage value of used memory out of the maximum memory. The last column (**Chart**) shows the memory usage of nodes graphically. When you move the mouse cursor on a desired graph, you can see the memory usage at the time where the cursor is placed. Graphs under this column shows the memory usages approximately for the last 2 minutes.  "
});

documentTitles["managementcenter.html#memory-distribution"] = "Memory Distribution";
index.add({
    url: "managementcenter.html#memory-distribution",
    title: "Memory Distribution",
    body: "#### Memory Distribution This part of the page graphically provides the cluster wise breakdown of memory, as shown below. The blue area is the memory used by maps, the dark yellow area is the memory used by non-Hazelcast entities, and the green area is the free memory out of the whole cluster`s memory capacity.  ![](images/Home-MemoryDistribution.jpg)  In the above example, you can see 0.32% of the total memory is used by Hazelcast maps (it can be seen by placing the mouse cursor on it), 58.75% is used by non-Hazelcast entities and 40.85% of the total memory is free.  "
});

documentTitles["managementcenter.html#map-memory-distribution"] = "Map Memory Distribution";
index.add({
    url: "managementcenter.html#map-memory-distribution",
    title: "Map Memory Distribution",
    body: "#### Map Memory Distribution This part is the breakdown of the blue area shown in the **Memory Distribution** graph explained above. It provides the percentage values of the memories used by each map, out of the total cluster memory reserved for all Hazelcast maps.  ![](images/Home-MapMemoryDistribution.jpg)  In the above example, you can see 49.55% of the total map memory is used by **map1** and 49.55% is used by **map2**.  "
});

documentTitles["managementcenter.html#partition-distribution"] = "Partition Distribution";
index.add({
    url: "managementcenter.html#partition-distribution",
    title: "Partition Distribution",
    body: "#### Partition Distribution This pie chart shows what percentage of partitions each node has, as shown below.  ![](images/Home-PartitionDistribution.jpg)  You can see each node's partition percentages by placing the mouse cursor on the chart. In the above example, you can see the node \&quot;127.0.0.1:5708\&quot; has 5.64% of the total partition count (which is 271 by default and configurable, please see the `hazelcast.partition.count` property explained in the [Advanced Configuration Properties section](#advanced-configuration-properties)).  --- "
});

documentTitles["managementcenter.html#caches"] = "Caches";
index.add({
    url: "managementcenter.html#caches",
    title: "Caches",
    body: "### Caches  You can monitor your caches' metrics by clicking the cache name listed on the left panel under **Caches** menu item. A new tab for monitoring that cache instance is opened on the right, as shown below.  ![](images/ManCenter-Caches.jpg)  On top of the page, four charts monitor the **Gets**, **Puts**, **Removals** and **Evictions** in real-time. The X-axis of all the charts show the current system time. To open a chart as a separate dialog, click on the ![](images/MaximizeChart.jpg) button placed at the top right of each chart.  Under these charts is the Cache Statistics Data Table. From left to right, this table lists the IP addresses and ports of each node, get, put, removal, eviction, hit and miss count per second in real-time.  You can navigate through the pages using the buttons at the bottom right of the table (**First, Previous, Next, Last**). You can ascend or descend the order of the listings in each column by clicking on column headings.  "
});

documentTitles["managementcenter.html#maps"] = "Maps";
index.add({
    url: "managementcenter.html#maps",
    title: "Maps",
    body: "### Maps  Map instances are listed under the **Maps** menu item on the left. When you click on a map, a new tab for monitoring that map instance opens on the right, as shown below. In this tab, you can monitor metrics and also re-configure the selected map.  ![](images/MapsHome.jpg)  The below subsections explain the portions of this window.  "
});

documentTitles["managementcenter.html#map-browser"] = "Map Browser";
index.add({
    url: "managementcenter.html#map-browser",
    title: "Map Browser",
    body: "#### Map Browser  Map Browser is a tool you can use to retrieve properties of the entries stored in the selected map. To open it, click on the **Map Browser** button, located at the top right of the window. Once opened, the tool appears as a dialog, as shown below.  ![](images/Map-MapBrowser.jpg)  Once the key and key's type is specified and the **Browse** button is clicked, the key's properties along with its value are listed.  "
});

documentTitles["managementcenter.html#map-config"] = "Map Config";
index.add({
    url: "managementcenter.html#map-config",
    title: "Map Config",
    body: "#### Map Config By using the Map Config tool, you can set selected map's attributes like the backup count, TTL, and eviction policy. To open it, click on the **Map Config** button, located at the top right of the window. Once opened, the tool appears as a dialog, as shown below.  ![](images/Map-MapConfig.jpg)  Change any attribute as required and click the **Update** button to save changes.   "
});

documentTitles["managementcenter.html#map-monitoring"] = "Map Monitoring";
index.add({
    url: "managementcenter.html#map-monitoring",
    title: "Map Monitoring",
    body: "#### Map Monitoring  Besides Map Browser and Map Config tools, this page has monitoring options explained below. All of these options perform real-time monitoring.  On top of the page, small charts monitor the size, throughput, memory usage, backup size, etc. of the selected map in real-time. The X-axis of all the charts show the current system time. You can select other small monitoring charts using the ![](images/ChangeWindowIcon.jpg) button at the top right of each chart. When you click the button, the monitoring options are listed, as shown below.  ![](images/SelectConfOpt.jpg)  When you click on a desired monitoring, the chart is loaded with the selected option. To open a chart as a separate dialog, click on the ![](images/MaximizeChart.jpg) button placed at the top right of each chart. The monitoring charts below are available:  -	**Size**: Monitors the size of the map. Y-axis is the entry count (should be multiplied by 1000). -	**Throughput**: Monitors get, put and remove operations performed on the map. Y-axis is the operation count. -	**Memory**: Monitors the memory usage on the map. Y-axis is the memory count. -	**Backups**: It is the chart loaded when \&quot;Backup Size\&quot; is selected. Monitors the size of the backups in the map. Y-axis is the backup entry count (should be multiplied by 1000). -	**Backup Memory**: It is the chart loaded when \&quot;Backup Mem.\&quot; is selected. Monitors the memory usage of the backups. Y-axis is the memory count. -	**Hits**: Monitors the hit count of the map. -	**Puts/s, Gets/s, Removes/s**: These three charts monitor the put, get and remove operations (per second) performed on the selected map.   Under these charts are **Map Memory** and **Map Throughput** data tables. The Map Memory data table provides memory metrics distributed over nodes, as shown below.  ![](images/Map-MemoryDataTable.jpg)  From left to right, this table lists the IP address and port, entry counts, memory used by entries, backup entry counts, memory used by backup entries, events, hits, locks and dirty entries (in the cases where *MapStore* is enabled, these are the entries that are put to/removed from the map but not written to/removed from a database yet) of each node in the map. You can navigate through the pages using the buttons at the bottom right of the table (**First, Previous, Next, Last**). You can ascend or descend the order of the listings by clicking on the column headings.  Map Throughput data table provides information about the operations (get, put, remove) performed on each node in the map, as shown below.  ![](images/Map-MapThroughputDataTable.jpg)  From left to right, this table lists the IP address and port of each node, the put, get and remove operations on each node, the average put, get, remove latencies, and the maximum put, get, remove latencies on each node.  You can select the period in the combo box placed at the top right corner of the window, for which the table data will be shown. Available values are **Since Beginning**, **Last Minute**, **Last 10 Minutes** and **Last 1 Hour**.  You can navigate through the pages using the buttons placed at the bottom right of the table (**First, Previous, Next, Last**). To ascend or descent the order of the listings, click on the column headings.  "
});

documentTitles["managementcenter.html#queues"] = "Queues";
index.add({
    url: "managementcenter.html#queues",
    title: "Queues",
    body: "### Queues  Using the menu item **Queues**, you can monitor your queues data structure. When you expand this menu item and click on a queue, a new tab for monitoring that queue instance is opened on the right, as shown below.  ![](images/Queues-Home.jpg)   On top of the page, small charts monitor the size, offers and polls of the selected queue in real-time. The X-axis of all the charts shows the current system time. To open a chart as a separate dialog, click on the ![](images/MaximizeChart.jpg) button placed at the top right of each chart. The monitoring charts below are available:  -	**Size**: Monitors the size of the queue. Y-axis is the entry count (should be multiplied by 1000). -	**Offers**: Monitors the offers sent to the selected queue. Y-axis is the offer count. -	**Polls**: Monitors the polls sent to the selected queue. Y-axis is the poll count.   Under these charts are **Queue Statistics** and **Queue Operation Statistics** tables. The Queue Statistics table provides item and backup item counts in the queue and age statistics of items and backup items at each node, as shown below.  ![](images/QueueStatistics.jpg)  From left to right, this table lists the IP address and port, items and backup items on the queue of each node, and maximum, minimum and average age of items in the queue. You can navigate through the pages using the buttons placed at the bottom right of the table (**First, Previous, Next, Last**). The order of the listings in each column can be ascended or descended by clicking on column headings.  Queue Operations Statistics table provides information about the operations (offers, polls, events) performed on the queues, as shown below.  ![](images/QueueOperationStatistics.jpg)  From left to right, this table lists the IP address and port of each node, and counts of offers, rejected offers, polls, poll misses and events.  You can select the period in the combo box placed at the top right corner of the window to show the table data. Available values are **Since Beginning**, **Last Minute**, **Last 10 Minutes** and **Last 1 Hour**.  You can navigate through the pages using the buttons placed at the bottom right of the table (**First, Previous, Next, Last**). Click on the column headings to ascend or descend the order of the listings.  "
});

documentTitles["managementcenter.html#topics"] = "Topics";
index.add({
    url: "managementcenter.html#topics",
    title: "Topics",
    body: "### Topics  To monitor your topics' metrics, click the topic name listed on the left panel under the **Topics** menu item. A new tab for monitoring that topic instance opens on the right, as shown below.  ![](images/ManCenter-Topics.jpg)  On top of the page, two charts monitor the **Publishes** and **Receives** in real-time. They show the published and received message counts of the cluster, nodes of which are subscribed to the selected topic. The X-axis of both charts show the current system time. To open a chart as a separate dialog, click on the ![](images/MaximizeChart.jpg) button placed at the top right of each chart.  Under these charts is the Topic Operation Statistics table. From left to right, this table lists the IP addresses and ports of each node, and counts of message published and receives per second in real-time. You can select the period in the combo box placed at top right corner of the table to show the table data. The available values are **Since Beginning**, **Last Minute**, **Last 10 Minutes** and **Last 1 Hour**.  You can navigate through the pages using the buttons placed at the bottom right of the table (**First, Previous, Next, Last**). Click on the column heading to ascend or descend the order of the listings.   "
});

documentTitles["managementcenter.html#multimaps"] = "MultiMaps";
index.add({
    url: "managementcenter.html#multimaps",
    title: "MultiMaps",
    body: "### MultiMaps MultiMap is a specialized map where you can associate a key with multiple values. This monitoring option is similar to the **Maps** option: the same monitoring charts and data tables monitor MultiMaps. The differences are that you cannot browse the MultiMaps and re-configure it. Please see the [Maps section](#maps).    "
});

documentTitles["managementcenter.html#executors"] = "Executors";
index.add({
    url: "managementcenter.html#executors",
    title: "Executors",
    body: "### Executors Executor instances are listed under the **Executors** menu item on the left. When you click on a executor, a new tab for monitoring that executor instance opens on the right, as shown below.  ![](images/ExecutorsHome.jpg)  On top of the page, small charts monitor the pending, started, completed, etc. executors in real-time. The X-axis of all the charts shows the current system time. You can select other small monitoring charts using the ![](images/ChangeWindowIcon.jpg) button placed at the top right of each chart. When it is clicked, the monitoring options are listed, as shown below.  ![](images/SelectExecMonOpt.jpg)  When you click on a desired monitoring, the chart loads with the selected option. To open a chart as a separate dialog, click on the ![](images/MaximizeChart.jpg) button placed at top right of each chart. The below monitoring charts are available:  -	**Pending**: Monitors the pending executors. Y-axis is the executor count. -	**Started**: Monitors the started executors. Y-axis is the executor count. -	**Start Lat. (msec)**: Shows the latency when executors are started. Y-axis is the duration in milliseconds. -	**Completed**: Monitors the completed executors. Y-axis is the executor count. -	**Comp. Time (msec)**: Shows the completion period of executors. Y-axis is the duration in milliseconds.  Under these charts is the **Executor Operation Statistics** table, as shown below.  ![](images/ExecutorOperationStats.jpg)  From left to right, this table lists the IP address and port of nodes, the counts of pending, started and completed executors per second, and the execution time and average start latency of executors on each node. You can navigate through the pages using the buttons placed at the bottom right of the table (**First, Previous, Next, Last**). Click on the column heading to ascend or descend the order of the listings.   "
});

documentTitles["managementcenter.html#members"] = "Members";
index.add({
    url: "managementcenter.html#members",
    title: "Members",
    body: "### Members  Use this menu item to monitor each cluster member (node) and perform operations like running garbage collection (GC) and taking a thread dump. Once you select a member from the menu, a new tab for monitoring that member opens on the right, as shown below.  ![](images/MembersHome.jpg)  The **CPU Utilization** chart shows the percentage of CPU usage on the selected member. The **Memory Utilization** chart shows the memory usage on the selected member with three different metrics (maximum, used and total memory). You can open both of these charts as separate windows using the ![](images/ChangeWindowIcon.jpg) button placed at top right of each chart; this gives you a clearer view of the chart.  The window titled **Partitions** shows which partitions are assigned to the selected member. **Runtime** is a dynamically updated window tab showing the processor number, the start and up times, and the maximum, total and free memory sizes of the selected member. Next to this, the **Properties** tab shows the system properties. The **Member Configuration** window shows the connected Hazelcast cluster's XML configuration.  Besides the aforementioned monitoring charts and windows, you can also perform operations on the selected member through this page. The operation buttons are located at the top right of the page, as explained below:  -	**Run GC**: When pressed, garbage collection is executed on the selected member. A notification stating that the GC execution was successful will be shown. -	**Thread Dump**: When pressed, thread dump of the selected member is taken and shown as a separate dialog to the user. -	**Shutdown Node**: It is used to shutdown the selected member.     "
});

documentTitles["managementcenter.html#scripting"] = "Scripting";
index.add({
    url: "managementcenter.html#scripting",
    title: "Scripting",
    body: "### Scripting   You can use the scripting feature of this tool to execute codes on the cluster. To open this feature as a tab, select **Scripting** located at the toolbar on top. Once selected, the scripting feature opens as shown below.  ![](images/scripting.jpg)  In this window, the **Scripting** part is the actual coding editor. You can select the members on which the code will execute from the **Members** list shown at the right side of the window. Below the members list, a combo box enables you to select a scripting language: currently, Javascript, Ruby, Groovy and Python languages are supported. After you write your script and press the **Execute** button, you can see the execution result in the **Result** part of the window.  There are **Save** and **Delete** buttons on the top right of the scripting editor. To save your scripts, press the **Save** button after you type a name for your script into the field next to this button. The scripts you saved are listed in the **Saved Scripts** part of the window, located at the bottom right of the page. Click on a saved script from this list to execute or edit it. If you want to remove a script that you wrote and saved before, select it from this list and press the **Delete** button.  In the scripting engine you have a `HazelcastInstance` bonded to a variable named `hazelcast`. You can invoke any method that `HazelcastInstance` has via the `hazelcast` variable. You can see example usage for JavaScript below.   ```javascript var name = hazelcast.getName(); var node = hazelcast.getCluster().getLocalMember(); var employees = hazelcast.getMap(\&quot;employees\&quot;); employees.put(\&quot;1\&quot;,\&quot;John Doe\&quot;); employees.get(\&quot;1\&quot;); // will return \&quot;John Doe\&quot; ```   "
});

documentTitles["managementcenter.html#console"] = "Console";
index.add({
    url: "managementcenter.html#console",
    title: "Console",
    body: "### Console  The Management Center has a console feature that enables you to execute commands on the cluster. For example, you can perform `put`s and `get`s on a map, after you set the namespace with the command `ns &lt;name of your map&gt;`. The same is valid for queues, topics, etc. To execute your command, type it into the field below the console and press **Enter**. Type `help` to see all the commands that you can use.  Open a console window by clicking on the **Console** button located on the toolbar. Below is a sample view with some executed commands.  ![](images/console.jpg)    "
});

documentTitles["managementcenter.html#alerts"] = "Alerts";
index.add({
    url: "managementcenter.html#alerts",
    title: "Alerts",
    body: "### Alerts  You can use the alerts feature of this tool to receive alerts by creating filters. In these filters, you can specify criteria for cluster, nodes or data structures. When the specified criteria are met for a filter, the related alert is shown as a pop-up message on the top right of the page.  Once you click the **Alerts** button located on the toolbar, the page shown below appears.  ![](images/Alerts-Home.jpg)  **Creating Filters for Cluster**  Select the **Cluster Alerts** check box to create a cluster wise filter. Once selected, the next screen asks for the items for which alerts will be created, as shown below.  ![](images/ClusterAlert1.jpg)  Select the desired items and click the **Next** button. On the next page (shown below), specify the frequency of checks in **hour** and **min** fields, give a name for the filter, select whether notification e-mails will be sent (to no one, only admin or to all users) and select whether the alert data will be written to the disk (if checked, you can see the alert log at the folder */users/&lt;your user&gt;/mancenter&lt;version&gt;*).  ![](images/ClusterAlert2.jpg)  Click on the **Save** button; your filter will be saved and put into the **Filters** part of the page, as shown below.  ![](images/ClusterAlert3.jpg)  To edit the filter, click on the ![](images/EditIcon.jpg) icon. To delete the filter, click on the ![](images/DeleteIcon.jpg) icon.  **Creating Filters for Cluster Members**  Select **Member Alerts** check box to create filters for some or all members in the cluster. Once selected, the next screen asks for which members the alert will be created. Select the desired members and click on the **Next** button. On the next page (shown below), specify the criteria.  ![](images/MemberAlert1.jpg)  Alerts can be created when:  -	free memory on the selected nodes is less than the specified number. -	used heap memory is larger than the specified number. -	the number of active threads are less than the specified count. -	the number of daemon threads are larger than the specified count.  When two or more criteria is specified they will be bound with the logical operator **AND**.  On the next page, give a name for the filter, select whether notification e-mails will be sent (to no one, only admin, or to all users) and select whether the alert data will be written to the disk (if checked, you can see the alert log at the folder */users/&lt;your user&gt;/mancenter&lt;version&gt;*).  Click on the **Save** button; your filter will be saved and put into the **Filters** part of the page. To edit the filter, click on the ![](images/EditIcon.jpg) icon. To delete it, click on the ![](images/DeleteIcon.jpg) icon.  **Creating Filters for Data Types**  Select the **Data Type Alerts** check box to create filters for data structures. The next screen asks for which data structure (maps, queues, multimaps, executors) the alert will be created. Once a structure is selected, the next screen immediately loads and you then select the data structure instances (i.e. if you selected *Maps*, it will list all the maps defined in the cluster, you can select one map or more). Select as desired, click on the **Next** button, and select the members on which the selected data structure instances will run.  The next screen, as shown below, is the one where you specify the criteria for the selected data structure.  ![](images/DataAlert1.jpg)  As the screen shown above shows, you will select an item from the left combo box, select the operator in the middle one, specify a value in the input field, and click on the **Add** button. You can create more than one criteria in this page; those will be bound by the logical operator **AND**.  After you specify the criteria and click the **Next** button, give a name for the filter, select whether notification e-mails will be sent (to no one, only admin or to all users) and select whether the alert data will be written to the disk (if checked, you can see the alert log at the folder */users/&lt;your user&gt;/mancenter&lt;version&gt;*).  Click on the **Save** button; your filter will be saved and put into the **Filters** part of the page. To edit the filter, click on the ![](images/EditIcon.jpg) icon. To delete it, click on the ![](images/DeleteIcon.jpg) icon.    "
});

documentTitles["managementcenter.html#administration"] = "Administration";
index.add({
    url: "managementcenter.html#administration",
    title: "Administration",
    body: "### Administration  ![image](images/NoteSmall.jpg) ***NOTE:*** *This toolbar item is available only to admin users, i.e. the users who initially have ***admin*** as their both usernames and passwords.*  The **Admin** user can add, edit, and remove users and specify the permissions for the users of Management Center. To perform these operations, click on the **Administration** button located on the toolbar. The page below appears.  ![](images/admin.jpg)  To add a user to the system, specify the username, e-mail and password in the **Add/Edit User** part of the page. If the user to be added will have administrator privileges, select **isAdmin** checkbox. **Permissions** checkboxes have two values:  -	**Read Only**: If this permission is given to the user, only *Home*, *Documentation* and *Time Travel* items will be visible at the toolbar at that user's session. Also, users with this permission cannot update a [map configuration](#map-config), run a garbage collection and take a thread dump on a node, or shutdown a node (please see the [Members section](#members)). -	**Read/Write**: If this permission is given to the user, *Home*, *Scripting*, *Console*, *Documentation* and *Time Travel* items will be visible. The users with this permission can update a map configuration and perform operations on the nodes.  After you enter/select all fields, click **Save** button to create the user. You will see the newly created user's username on the left side, in the **Users** part of the page.   To edit or delete a user, select a username listed in the **Users**. Selected user information appears on the right side of the page. To update the user information, change the fields as desired and click the **Save** button. To delete the user from the system, click the **Delete** button.    "
});

documentTitles["managementcenter.html#time-travel"] = "Time Travel";
index.add({
    url: "managementcenter.html#time-travel",
    title: "Time Travel",
    body: "### Time Travel  Time Travel is used to check the status of the cluster at a time in the past. When this item is selected on the toolbar, a small window appears on top of the page, as shown below.  ![](images/timetravel.jpg)  To see the cluster status in a past time, Time Travel should be enabled first. Click on the area where it says **OFF** (on the right of Time Travel window). It will turn to **ON** after it asks whether to enable the Time Travel with a dialog: click on **Enable** in the dialog to enable Time Travel.  Once it is **ON**, the status of your cluster will be stored on your disk as long as your web server is alive.  You can go back in time using the slider and/or calendar and check your cluster's situation at the selected time. All data structures and members can be monitored as if you are using the management center normally (charts and data tables for each data structure and members). Using the arrow buttons placed at both sides of the slider, you can go back or further with steps of 5 seconds. It will show status if Time Travel has been **ON** at the selected time in past; otherwise, all the charts and tables will be shown as empty.  The historical data collected with Time Travel feature are stored in a file database on the disk. These files can be found on the folder specified by `hazelcast.mancenter.home` (by default `mancenter3` folder in the user home folder).  "
});

documentTitles["managementcenter.html#documentation"] = "Documentation";
index.add({
    url: "managementcenter.html#documentation",
    title: "Documentation",
    body: "### Documentation  To see the documentation, click on the **Documentation** button located at the toolbar. Management Center manual will appear as a tab.  "
});

documentTitles["managementcenter.html#suggested-heap-size"] = "Suggested Heap Size";
index.add({
    url: "managementcenter.html#suggested-heap-size",
    title: "Suggested Heap Size",
    body: "### Suggested Heap Size  **For 2 Nodes**  | Mancenter Heap Size | # of Maps | # of Queues | # of Topics | | -------- | --------- | ---------- | ------------ | | 256m | 3k | 1k | 1k | | 1024m | 10k | 1k | 1k |  **For 10 Nodes**  | Mancenter Heap Size | # of Maps | # of Queues | # of Topics | | -------- | --------- | ---------- | ------------ | | 256m | 50 | 30 | 30 | | 1024m | 2k | 1k | 1k |   **For 20 Nodes**  | Mancenter Heap Size | # of Maps | # of Queues | # of Topics | | -------- | --------- | ---------- | ------------ | | 256m* | N/A | N/A | N/A | | 1024m | 1k | 1k | 1k |  \* With 256m heap, management center is unable to collect statistics.  &lt;br&gt; &lt;/br&gt; "
});



documentTitles["clusteredjmx.html#clustered-jmx"] = "Clustered JMX";
index.add({
    url: "clusteredjmx.html#clustered-jmx",
    title: "Clustered JMX",
    body: "## Clustered JMX  ![](images/enterprise-onlycopy.jpg)  Clustered JMX via Management Center allows you to monitor clustered statistics of distributed objects from a JMX interface.   "
});

documentTitles["clusteredjmx.html#clustered-jmx-configuration"] = "Clustered JMX Configuration";
index.add({
    url: "clusteredjmx.html#clustered-jmx-configuration",
    title: "Clustered JMX Configuration",
    body: "### Clustered JMX Configuration  In order to configure Clustered JMX, use two command line parameters for your Management Center deployment.  - `-Dhazelcast.mc.jmx.enabled=true` (default is false) - `-Dhazelcast.mc.jmx.port=9000` (optional, default is 9999)  With embedded Jetty, you do not need to deploy your Management Center application to any container or application server.  You can start Management Center application with Clustered JMX enabled as shown below.  ``` java -Dhazelcast.mc.jmx.enabled=true -Dhazelcast.mc.jmx.port=9999 -jar mancenter-3.3.jar ```  Once Management Center starts, you should see a log similar to below.  ``` INFO: Management Center 3.3 Jun 05, 2014 11:55:32 AM com.hazelcast.webmonitor.service.jmx.impl.JMXService INFO: Starting Management Center JMX Service on port :9999 ```  You should be able to connect to Clustered JMX interface from the address `localhost:9999`.  You can use `jconsole` or any other JMX client to monitor your Hazelcast Cluster. As a sample, below is the `jconsole` screenshot of the Clustered JMX hierarchy.  ![](images/ClusteredJMX.png)  "
});

documentTitles["clusteredjmx.html#api-documentation"] = "API Documentation";
index.add({
    url: "clusteredjmx.html#api-documentation",
    title: "API Documentation",
    body: "### API Documentation  The management beans are exposed with the following object name format.  `ManagementCenter[`*cluster name*`]:type=&lt;`*object type*`&gt;,name=&lt;`*object name*`&gt;,member=\&quot;&lt;`*cluster member IP address*`&gt;\&quot;`  Object name starts with `ManagementCenter` prefix. Then it has the cluster name in brackets followed by a colon. After that, `type`,`name` and `member` attributes follows, each separated with a comma.  -	`type` is the type of object. Values are `Clients`, `Executors`, `Maps`, `Members`, `MultiMaps`, `Queues`, `Services`, and `Topics`.  -	`name` is the name of object.  -	`member` is the node address of object (only required if the statistics are local to the node).   A sample bean is shown below.  ``` ManagementCenter[dev]:type=Services,name=OperationService,member=\&quot;192.168.2.79:5701\&quot; ```   Here is the list of attributes that are exposed from the Clustered JMX interface.  * **ManagementCenter[ClusterName]** * Clients  * Address  * ClientType  * Uuid *  Executors  * Cluster   * Name   * StartedTaskCount   * CompletedTaskCount   * CancelledTaskCount   * PendingTaskCount *  Maps   * Cluster   * Name   * BackupEntryCount   * BackupEntryMemoryCost   * CreationTime   * DirtyEntryCount   * Events   * GetOperationCount   * HeapCost   * Hits   * LastAccessTime   * LastUpdateTime   * LockedEntryCount   * MaxGetLatency   * MaxPutLatency   * MaxRemoveLatency   * OtherOperationCount   * OwnedEntryCount   * PutOperationCount   * RemoveOperationCount *  Members   * ConnectedClientCount   * HeapFreeMemory   * HeapMaxMemory   * HeapTotalMemory   * HeapUsedMemory   * IsMaster   * OwnedPartitionCount *  MultiMaps   * Cluster   * Name   * BackupEntryCount   * BackupEntryMemoryCost   * CreationTime   * DirtyEntryCount   * Events   * GetOperationCount   * HeapCost   * Hits   * LastAccessTime   * LastUpdateTime   * LockedEntryCount   * MaxGetLatency   * MaxPutLatency   * MaxRemoveLatency   * OtherOperationCount   * OwnedEntryCount   * PutOperationCount   * RemoveOperationCount *  Queues   * Cluster   * Name   * MinAge   * MaxAge   * AvgAge   * OwnedItemCount   * BackupItemCount   * OfferOperationCount   * OtherOperationsCount   * PollOperationCount   * RejectedOfferOperationCount   * EmptyPollOperationCount   * EventOperationCount   * CreationTime *  Services   * ConnectionManager     * ActiveConnectionCount     * ClientConnectionCount     * ConnectionCount   * EventService     * EventQueueCapacity     * EventQueueSize     * EventThreadCount   * OperationService     * ExecutedOperationCount     * OperationExecutorQueueSize     * OperationThreadCount     * RemoteOperationCount     * ResponseQueueSize     * RunningOperationsCount   * PartitionService     * ActivePartitionCount     * PartitionCount   * ProxyService     * ProxyCount   * ManagedExecutor[hz::async]     * Name     * CompletedTaskCount     * MaximumPoolSize     * PoolSize     * QueueSize     * RemainingQueueCapacity     * Terminated   * ManagedExecutor[hz::client]     * Name     * CompletedTaskCount     * MaximumPoolSize     * PoolSize     * QueueSize     * RemainingQueueCapacity     * Terminated   * ManagedExecutor[hz::global-operation]     * Name     * CompletedTaskCount     * MaximumPoolSize     * PoolSize     * QueueSize     * RemainingQueueCapacity     * Terminated   * ManagedExecutor[hz::io]     * Name     * CompletedTaskCount     * MaximumPoolSize     * PoolSize     * QueueSize     * RemainingQueueCapacity     * Terminated   * ManagedExecutor[hz::query]     * Name     * CompletedTaskCount     * MaximumPoolSize     * PoolSize     * QueueSize     * RemainingQueueCapacity     * Terminated   * ManagedExecutor[hz::scheduled]     * Name     * CompletedTaskCount     * MaximumPoolSize     * PoolSize     * QueueSize     * RemainingQueueCapacity     * Terminated   * ManagedExecutor[hz::system]     * Name     * CompletedTaskCount     * MaximumPoolSize     * PoolSize     * QueueSize     * RemainingQueueCapacity     * Terminated   *  Topics   * Cluster   * Name   * CreationTime   * PublishOperationCount   * ReceiveOperationCount   "
});

documentTitles["clusteredjmx.html#new-relic-integration"] = "New Relic Integration";
index.add({
    url: "clusteredjmx.html#new-relic-integration",
    title: "New Relic Integration",
    body: "### New Relic Integration  Use the Clustered JMX interface to integrate Hazelcast Management Center with *New Relic*. To perform this integration, attach New Relic Java agent and provide an extension file that describes which metrics will be sent to New Relic.  Please see [Custom JMX instrumentation by YAML](http://docs.newrelic.com/docs/java/custom-jmx-instrumentation-by-yml) on the New Relic webpage.  Below is an example Map monitoring `.yml` file for New Relic.  ```plain name: Clustered JMX version: 1.0 enabled: true  jmx:   - object_name: ManagementCenter[clustername]:type=Maps,name=mapname     metrics:       - attributes: PutOperationCount, GetOperationCount, RemoveOperationCount, Hits,\              BackupEntryCount, OwnedEntryCount, LastAccessTime, LastUpdateTime         type: simple   - object_name: ManagementCenter[clustername]:type=Members,name=\&quot;node address in\         double quotes\&quot;     metrics:       - attributes: OwnedPartitionCount         type: simple ```  Put the `.yml` file in the `extensions` folder in your New Relic installation. If an `extensions` folder does not exist there, create one.  After you set your extension, attach the New Relic Java agent and start Management Center as shown below.  ```plain java -javaagent:/path/to/newrelic.jar -Dhazelcast.mc.jmx.enabled=true\     -Dhazelcast.mc.jmx.port=9999 -jar mancenter-3.3.jar ```  If your logging level is set as FINER, you should see the log listing in the file `newrelic_agent.log`, which is located in the `logs` folder in your New Relic installation. Below is an example log listing.  ```plain Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINE:     JMX Service : querying MBeans (1) Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINER:     JMX Service : MBeans query ManagementCenter[dev]:type=Members,     name=\&quot;192.168.2.79:5701\&quot;, matches 1 Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINER:     Recording JMX metric OwnedPartitionCount : 68 Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINER:     JMX Service : MBeans query ManagementCenter[dev]:type=Maps,name=orders,      matches 1 Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINER:      Recording JMX metric Hits : 46,593 Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINER:      Recording JMX metric BackupEntryCount : 1,100 Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINER:      Recording JMX metric OwnedEntryCount : 1,100 Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINER:      Recording JMX metric RemoveOperationCount : 0 Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINER:      Recording JMX metric PutOperationCount : 118,962 Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINER:      Recording JMX metric GetOperationCount : 0 Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINER:      Recording JMX metric LastUpdateTime : 1,401,962,426,811 Jun 5, 2014 14:18:43 +0300 [72696 62] com.newrelic.agent.jmx.JmxService FINER:      Recording JMX metric LastAccessTime : 1,401,962,426,811 ```  Then you can navigate to your New Relic account and create Custom Dashboards. Please see [Creating custom dashboards](http://docs.newrelic.com/docs/dashboards-menu/creating-custom-dashboards).  While you are creating the dashboard, you should see the metrics that you are sending to New Relic from Management Center in the **Metrics** section under the JMX folder.  "
});

documentTitles["clusteredjmx.html#appdynamics-integration"] = "AppDynamics Integration";
index.add({
    url: "clusteredjmx.html#appdynamics-integration",
    title: "AppDynamics Integration",
    body: "### AppDynamics Integration  Use the Clustered JMX interface to integrate Hazelcast Management Center with *AppDynamics*. To perform this integration, attach AppDynamics Java agent to the Management Center.  For agent installation, refer to [Install the App Agent for Java](http://docs.appdynamics.com/display/PRO14S/Install+the+App+Agent+for+Java) page.  For monitoring on AppDynamics, refer to [Using AppDynamics for JMX Monitoring](http://docs.appdynamics.com/display/PRO14S/Monitor+JMX+MBeans#MonitorJMXMBeans-UsingAppDynamicsforJMXMonitoring) page.  After installing AppDynamics agent, you can start Management Center as shown below.  ```plain java -javaagent:/path/to/javaagent.jar -Dhazelcast.mc.jmx.enabled=true\     -Dhazelcast.mc.jmx.port=9999 -jar mancenter-3.3.jar ```  When Management Center starts, you should see the logs below.  ```plain Started AppDynamics Java Agent Successfully. Hazelcast Management Center starting on port 8080 at path : /mancenter ``` &lt;br&gt;&lt;/br&gt;"
});



documentTitles["clusteredrest.html#clustered-rest"] = "Clustered REST";
index.add({
    url: "clusteredrest.html#clustered-rest",
    title: "Clustered REST",
    body: "## Clustered REST  ![](images/enterprise-onlycopy.jpg)  The Clustered REST API is exposed from Management Center to allow you to monitor clustered statistics of distributed objects.  "
});

documentTitles["clusteredrest.html#enabling-clustered-rest"] = "Enabling Clustered REST";
index.add({
    url: "clusteredrest.html#enabling-clustered-rest",
    title: "Enabling Clustered REST",
    body: "### Enabling Clustered REST  To enable Clustered REST on your Management Center, pass the following system property at startup. This property is disabled by default.  ```plain -Dhazelcast.mc.rest.enabled=true ```  "
});

documentTitles["clusteredrest.html#clustered-rest-api-root"] = "Clustered REST API Root";
index.add({
    url: "clusteredrest.html#clustered-rest-api-root",
    title: "Clustered REST API Root",
    body: "### Clustered REST API Root   The entry point for Clustered REST API is `/rest/`.  This resource does not have any attributes.  "
});

documentTitles["clusteredrest.html#clusters-resource"] = "Clusters Resource";
index.add({
    url: "clusteredrest.html#clusters-resource",
    title: "Clusters Resource",
    body: "### Clusters Resource  This resource returns a list of clusters that are connected to the Management Center.  "
});

documentTitles["clusteredrest.html#retrieve-clusters"] = "Retrieve Clusters";
index.add({
    url: "clusteredrest.html#retrieve-clusters",
    title: "Retrieve Clusters",
    body: "##### Retrieve Clusters  + *Request Type:* GET + *URL:* `/rest/clusters` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	[\&quot;dev\&quot;,\&quot;qa\&quot;] 	``` 	  "
});

documentTitles["clusteredrest.html#cluster-resource"] = "Cluster Resource";
index.add({
    url: "clusteredrest.html#cluster-resource",
    title: "Cluster Resource",
    body: "### Cluster Resource  This resource returns information related to the provided cluster name.  "
});

documentTitles["clusteredrest.html#retrieve-cluster-information"] = "Retrieve Cluster Information";
index.add({
    url: "clusteredrest.html#retrieve-cluster-information",
    title: "Retrieve Cluster Information",
    body: "##### Retrieve Cluster Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/ 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{\&quot;masterAddress\&quot;:\&quot;192.168.2.78:5701\&quot;} 	```  "
});

documentTitles["clusteredrest.html#members-resource"] = "Members Resource";
index.add({
    url: "clusteredrest.html#members-resource",
    title: "Members Resource",
    body: "### Members Resource  This resource returns a list of members belonging to the provided clusters.  "
});

documentTitles["clusteredrest.html#retrieve-members-get-restclustersclusternamemembers"] = "Retrieve Members [GET] [/rest/clusters/{clustername}/members]";
index.add({
    url: "clusteredrest.html#retrieve-members-get-restclustersclusternamemembers",
    title: "Retrieve Members [GET] [/rest/clusters/{clustername}/members]",
    body: "##### Retrieve Members [GET] [/rest/clusters/{clustername}/members] + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/members` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/members 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	[\&quot;192.168.2.78:5701\&quot;,\&quot;192.168.2.78:5702\&quot;,\&quot;192.168.2.78:5703\&quot;,\&quot;192.168.2.78:5704\&quot;] 	```  "
});

documentTitles["clusteredrest.html#member-resource"] = "Member Resource";
index.add({
    url: "clusteredrest.html#member-resource",
    title: "Member Resource",
    body: "### Member Resource  This resource returns information related to the provided member.  "
});

documentTitles["clusteredrest.html#retrieve-member-information"] = "Retrieve Member Information";
index.add({
    url: "clusteredrest.html#retrieve-member-information",
    title: "Retrieve Member Information",
    body: "##### Retrieve Member Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/members/{member}` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/members/192.168.2.78:5701 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;cluster\&quot;:\&quot;dev\&quot;, 	  \&quot;name\&quot;:\&quot;192.168.2.78:5701\&quot;, 	  \&quot;maxMemory\&quot;:129957888, 	  \&quot;ownedPartitionCount\&quot;:68, 	  \&quot;usedMemory\&quot;:60688784, 	  \&quot;freeMemory\&quot;:24311408, 	  \&quot;totalMemory\&quot;:85000192, 	  \&quot;connectedClientCount\&quot;:1, 	  \&quot;master\&quot;:true 	} 	```  "
});

documentTitles["clusteredrest.html#retrieve-connection-manager-information"] = "Retrieve Connection Manager Information";
index.add({
    url: "clusteredrest.html#retrieve-connection-manager-information",
    title: "Retrieve Connection Manager Information",
    body: "##### Retrieve Connection Manager Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/members/{member}/connectionManager` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/members/192.168.2.78:5701/connectionManager 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;clientConnectionCount\&quot;:2, 	  \&quot;activeConnectionCount\&quot;:5, 	  \&quot;connectionCount\&quot;:5 	} 	```  "
});

documentTitles["clusteredrest.html#retrieve-operation-service-information"] = "Retrieve Operation Service Information";
index.add({
    url: "clusteredrest.html#retrieve-operation-service-information",
    title: "Retrieve Operation Service Information",
    body: "##### Retrieve Operation Service Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/members/{member}/operationService` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/members/192.168.2.78:5701/operationService 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;responseQueueSize\&quot;:0, 	  \&quot;operationExecutorQueueSize\&quot;:0, 	  \&quot;runningOperationsCount\&quot;:0, 	  \&quot;remoteOperationCount\&quot;:1, 	  \&quot;executedOperationCount\&quot;:461139, 	  \&quot;operationThreadCount\&quot;:8 	} 	```  "
});

documentTitles["clusteredrest.html#retrieve-event-service-information"] = "Retrieve Event Service Information";
index.add({
    url: "clusteredrest.html#retrieve-event-service-information",
    title: "Retrieve Event Service Information",
    body: "##### Retrieve Event Service Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/members/{member}/eventService` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/members/192.168.2.78:5701/eventService 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;eventThreadCount\&quot;:5, 	  \&quot;eventQueueCapacity\&quot;:1000000, 	  \&quot;eventQueueSize\&quot;:0 	} 	```  "
});

documentTitles["clusteredrest.html#retrieve-partition-service-information"] = "Retrieve Partition Service Information";
index.add({
    url: "clusteredrest.html#retrieve-partition-service-information",
    title: "Retrieve Partition Service Information",
    body: "##### Retrieve Partition Service Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/members/{member}/partitionService` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/members/192.168.2.78:5701/partitionService 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;partitionCount\&quot;:271, 	  \&quot;activePartitionCount\&quot;:68 	} 	```  "
});

documentTitles["clusteredrest.html#retrieve-proxy-service-information"] = "Retrieve Proxy Service Information";
index.add({
    url: "clusteredrest.html#retrieve-proxy-service-information",
    title: "Retrieve Proxy Service Information",
    body: "##### Retrieve Proxy Service Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/members/{member}/proxyService` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/members/192.168.2.78:5701/proxyService 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;proxyCount\&quot;:8 	} 	```  "
});

documentTitles["clusteredrest.html#retrieve-all-managed-executors"] = "Retrieve All Managed Executors";
index.add({
    url: "clusteredrest.html#retrieve-all-managed-executors",
    title: "Retrieve All Managed Executors",
    body: "##### Retrieve All Managed Executors + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/members/{member}/managedExecutors` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/members/192.168.2.78:5701/managedExecutors 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	[\&quot;hz:system\&quot;,\&quot;hz:scheduled\&quot;,\&quot;hz:client\&quot;,\&quot;hz:query\&quot;,\&quot;hz:io\&quot;,\&quot;hz:async\&quot;] 	```  "
});

documentTitles["clusteredrest.html#retrieve-a-managed-executor"] = "Retrieve a Managed Executor";
index.add({
    url: "clusteredrest.html#retrieve-a-managed-executor",
    title: "Retrieve a Managed Executor",
    body: "##### Retrieve a Managed Executor + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/members/{member}/managedExecutors/{managedExecutor}` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/members/192.168.2.78:5701 	  /managedExecutors/hz:system 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;name\&quot;:\&quot;hz:system\&quot;, 	  \&quot;queueSize\&quot;:0, 	  \&quot;poolSize\&quot;:0, 	  \&quot;remainingQueueCapacity\&quot;:2147483647, 	  \&quot;maximumPoolSize\&quot;:4, 	  \&quot;completedTaskCount\&quot;:12, 	  \&quot;terminated\&quot;:false 	} 	```  "
});

documentTitles["clusteredrest.html#clients-resource"] = "Clients Resource";
index.add({
    url: "clusteredrest.html#clients-resource",
    title: "Clients Resource",
    body: "### Clients Resource  This resource returns a list of clients belonging to the provided cluster.  "
});

documentTitles["clusteredrest.html#retrieve-list-of-clients"] = "Retrieve List of Clients";
index.add({
    url: "clusteredrest.html#retrieve-list-of-clients",
    title: "Retrieve List of Clients",
    body: "##### Retrieve List of Clients + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/clients` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/clients 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	[\&quot;192.168.2.78:61708\&quot;] 	```  "
});

documentTitles["clusteredrest.html#retrieve-client-information"] = "Retrieve Client Information";
index.add({
    url: "clusteredrest.html#retrieve-client-information",
    title: "Retrieve Client Information",
    body: "##### Retrieve Client Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/clients/{client}` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/clients/192.168.2.78:61708 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;uuid\&quot;:\&quot;6fae7af6-7a7c-4fa5-b165-cde24cf070f5\&quot;, 	  \&quot;address\&quot;:\&quot;192.168.2.78:61708\&quot;, 	  \&quot;clientType\&quot;:\&quot;JAVA\&quot; 	} 	```  "
});

documentTitles["clusteredrest.html#maps-resource"] = "Maps Resource";
index.add({
    url: "clusteredrest.html#maps-resource",
    title: "Maps Resource",
    body: "### Maps Resource  This resource returns a list of maps belonging to the provided cluster.   "
});

documentTitles["clusteredrest.html#retrieve-list-of-maps"] = "Retrieve List of Maps";
index.add({
    url: "clusteredrest.html#retrieve-list-of-maps",
    title: "Retrieve List of Maps",
    body: "##### Retrieve List of Maps + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/maps` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/maps 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	[\&quot;customers\&quot;,\&quot;orders\&quot;] 	```  "
});

documentTitles["clusteredrest.html#retrieve-map-information"] = "Retrieve Map Information";
index.add({
    url: "clusteredrest.html#retrieve-map-information",
    title: "Retrieve Map Information",
    body: "##### Retrieve Map Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/maps/{mapName}` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/maps/customers 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;cluster\&quot;:\&quot;dev\&quot;, 	  \&quot;name\&quot;:\&quot;customers\&quot;, 	  \&quot;ownedEntryCount\&quot;:1000, 	  \&quot;backupEntryCount\&quot;:1000, 	  \&quot;ownedEntryMemoryCost\&quot;:157890, 	  \&quot;backupEntryMemoryCost\&quot;:113683, 	  \&quot;heapCost\&quot;:297005, 	  \&quot;lockedEntryCount\&quot;:0, 	  \&quot;dirtyEntryCount\&quot;:0, 	  \&quot;hits\&quot;:3001, 	  \&quot;lastAccessTime\&quot;:1403608925777, 	  \&quot;lastUpdateTime\&quot;:1403608925777, 	  \&quot;creationTime\&quot;:1403602693388, 	  \&quot;putOperationCount\&quot;:110630, 	  \&quot;getOperationCount\&quot;:165945, 	  \&quot;removeOperationCount\&quot;:55315, 	  \&quot;otherOperationCount\&quot;:0, 	  \&quot;events\&quot;:0, 	  \&quot;maxPutLatency\&quot;:52, 	  \&quot;maxGetLatency\&quot;:30, 	  \&quot;maxRemoveLatency\&quot;:21 	} 	```    "
});

documentTitles["clusteredrest.html#multimaps-resource"] = "MultiMaps Resource";
index.add({
    url: "clusteredrest.html#multimaps-resource",
    title: "MultiMaps Resource",
    body: "### MultiMaps Resource  This resource returns a list of multimaps belonging to the provided cluster.   "
});

documentTitles["clusteredrest.html#retrieve-list-of-multimaps"] = "Retrieve List of MultiMaps";
index.add({
    url: "clusteredrest.html#retrieve-list-of-multimaps",
    title: "Retrieve List of MultiMaps",
    body: "##### Retrieve List of MultiMaps + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/multimaps` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/multimaps 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	[\&quot;customerAddresses\&quot;] 	```  "
});

documentTitles["clusteredrest.html#retrieve-multimap-information"] = "Retrieve MultiMap Information";
index.add({
    url: "clusteredrest.html#retrieve-multimap-information",
    title: "Retrieve MultiMap Information",
    body: "##### Retrieve MultiMap Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/multimaps/{multimapname}` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/multimaps/customerAddresses 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;cluster\&quot;:\&quot;dev\&quot;, 	  \&quot;name\&quot;:\&quot;customerAddresses\&quot;, 	  \&quot;ownedEntryCount\&quot;:996, 	  \&quot;backupEntryCount\&quot;:996, 	  \&quot;ownedEntryMemoryCost\&quot;:0, 	  \&quot;backupEntryMemoryCost\&quot;:0, 	  \&quot;heapCost\&quot;:0, 	  \&quot;lockedEntryCount\&quot;:0, 	  \&quot;dirtyEntryCount\&quot;:0, 	  \&quot;hits\&quot;:0, 	  \&quot;lastAccessTime\&quot;:1403603095521, 	  \&quot;lastUpdateTime\&quot;:1403603095521, 	  \&quot;creationTime\&quot;:1403602694158, 	  \&quot;putOperationCount\&quot;:166041, 	  \&quot;getOperationCount\&quot;:110694, 	  \&quot;removeOperationCount\&quot;:55347, 	  \&quot;otherOperationCount\&quot;:0, 	  \&quot;events\&quot;:0, 	  \&quot;maxPutLatency\&quot;:77, 	  \&quot;maxGetLatency\&quot;:69, 	  \&quot;maxRemoveLatency\&quot;:42 	} 	```   "
});

documentTitles["clusteredrest.html#queues-resource"] = "Queues Resource";
index.add({
    url: "clusteredrest.html#queues-resource",
    title: "Queues Resource",
    body: "### Queues Resource  This resource returns a list of queues belonging to the provided cluster.   "
});

documentTitles["clusteredrest.html#retrieve-list-of-queues"] = "Retrieve List of Queues";
index.add({
    url: "clusteredrest.html#retrieve-list-of-queues",
    title: "Retrieve List of Queues",
    body: "##### Retrieve List of Queues + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/queues` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/queues 	``` + *Response:* `200` (application/json) + *Body:*  	```json	 	[\&quot;messages\&quot;] 	```  "
});

documentTitles["clusteredrest.html#retrieve-queue-information"] = "Retrieve Queue Information";
index.add({
    url: "clusteredrest.html#retrieve-queue-information",
    title: "Retrieve Queue Information",
    body: "##### Retrieve Queue Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/queues/{queueName}` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/queues/messages 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;cluster\&quot;:\&quot;dev\&quot;, 	  \&quot;name\&quot;:\&quot;messages\&quot;, 	  \&quot;ownedItemCount\&quot;:55408, 	  \&quot;backupItemCount\&quot;:55408, 	  \&quot;minAge\&quot;:0, 	  \&quot;maxAge\&quot;:0, 	  \&quot;aveAge\&quot;:0, 	  \&quot;numberOfOffers\&quot;:55408, 	  \&quot;numberOfRejectedOffers\&quot;:0, 	  \&quot;numberOfPolls\&quot;:0, 	  \&quot;numberOfEmptyPolls\&quot;:0, 	  \&quot;numberOfOtherOperations\&quot;:0, 	  \&quot;numberOfEvents\&quot;:0, 	  \&quot;creationTime\&quot;:1403602694196 	} 	```   "
});

documentTitles["clusteredrest.html#topics-resource"] = "Topics Resource";
index.add({
    url: "clusteredrest.html#topics-resource",
    title: "Topics Resource",
    body: "### Topics Resource  This resource returns a list of topics belonging to the provided cluster.   "
});

documentTitles["clusteredrest.html#retrieve-list-of-topics"] = "Retrieve List of Topics";
index.add({
    url: "clusteredrest.html#retrieve-list-of-topics",
    title: "Retrieve List of Topics",
    body: "##### Retrieve List of Topics + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/topics` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/topics 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	[\&quot;news\&quot;] 	```  "
});

documentTitles["clusteredrest.html#retrieve-topic-information"] = "Retrieve Topic Information";
index.add({
    url: "clusteredrest.html#retrieve-topic-information",
    title: "Retrieve Topic Information",
    body: "##### Retrieve Topic Information + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/topics/{topicName}` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/topics/news 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;cluster\&quot;:\&quot;dev\&quot;, 	  \&quot;name\&quot;:\&quot;news\&quot;, 	  \&quot;numberOfPublishes\&quot;:56370, 	  \&quot;totalReceivedMessages\&quot;:56370, 	  \&quot;creationTime\&quot;:1403602693411 	} 	```   "
});

documentTitles["clusteredrest.html#executors-resource"] = "Executors Resource";
index.add({
    url: "clusteredrest.html#executors-resource",
    title: "Executors Resource",
    body: "### Executors Resource  This resource returns a list of executors belonging to the provided cluster.   "
});

documentTitles["clusteredrest.html#retrieve-list-of-executors"] = "Retrieve List of Executors";
index.add({
    url: "clusteredrest.html#retrieve-list-of-executors",
    title: "Retrieve List of Executors",
    body: "##### Retrieve List of Executors + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/executors` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/executors 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	[\&quot;order-executor\&quot;] 	```  "
});

documentTitles["clusteredrest.html#retrieve-executor-information-get-restclustersclusternameexecutorsexecutorname"] = "Retrieve Executor Information [GET] [/rest/clusters/{clustername}/executors/{executorName}]";
index.add({
    url: "clusteredrest.html#retrieve-executor-information-get-restclustersclusternameexecutorsexecutorname",
    title: "Retrieve Executor Information [GET] [/rest/clusters/{clustername}/executors/{executorName}]",
    body: "##### Retrieve Executor Information [GET] [/rest/clusters/{clustername}/executors/{executorName}] + *Request Type:* GET + *URL:* `/rest/clusters/{clustername}/executors/{executorName}` + *Request:*  	```plain 	curl http://localhost:8083/mancenter/rest/clusters/dev/executors/order-executor 	``` + *Response:* `200` (application/json) + *Body:*  	```json 	{ 	  \&quot;cluster\&quot;:\&quot;dev\&quot;, 	  \&quot;name\&quot;:\&quot;order-executor\&quot;, 	  \&quot;creationTime\&quot;:1403602694196, 	  \&quot;pendingTaskCount\&quot;:0, 	  \&quot;startedTaskCount\&quot;:1241, 	  \&quot;completedTaskCount\&quot;:1241, 	  \&quot;cancelledTaskCount\&quot;:0 	} 	``` "
});



documentTitles["security.html#security"] = "Security";
index.add({
    url: "security.html#security",
    title: "Security",
    body: "# Security   "
});

documentTitles["security.html#enabling-security-for-hazelcast-enterprise"] = "Enabling Security for Hazelcast Enterprise";
index.add({
    url: "security.html#enabling-security-for-hazelcast-enterprise",
    title: "Enabling Security for Hazelcast Enterprise",
    body: "## Enabling Security for Hazelcast Enterprise  ![](images/enterprise-onlycopy.jpg)    Hazelcast has an extensible, JAAS based security feature you can use to authenticate both cluster members and clients, and to perform access control checks on client operations. Access control can be done according to endpoint principal and/or endpoint address.   You can enable security declaratively or programmatically, as shown below.   ```xml &lt;hazelcast xsi:schemaLocation=\&quot;http://www.hazelcast.com/schema/config     http://www.hazelcast.com/schema/config/hazelcast-config-3.3.xsd\&quot;     xmlns=\&quot;http://www.hazelcast.com/schema/config\&quot;     xmlns:xsi=\&quot;http://www.w3.org/2001/XMLSchema-instance\&quot;&gt;        ...        &lt;security enabled=\&quot;true\&quot;&gt;     ...   &lt;/security&gt; &lt;/hazelcast&gt; ```    ```java Config cfg = new Config(); SecurityConfig securityCfg = cfg.getSecurityConfig(); securityCfg.setEnabled( true ); ```  Also, see [Setting License Key](#setting-the-license-key-for-hazelcast-enterprise).  "
});



documentTitles["socketinterceptor.html#socket-interceptor"] = "Socket Interceptor";
index.add({
    url: "socketinterceptor.html#socket-interceptor",
    title: "Socket Interceptor",
    body: "## Socket Interceptor  ![](images/enterprise-onlycopy.jpg)   Hazelcast allows you to intercept socket connections before a node joins to cluster or a client connects to a node. This provides the ability to add custom hooks to join and perform connection procedures (like identity checking using Kerberos, etc.). Implement `com.hazelcast.nio.MemberSocketInterceptor` for members and `com.hazelcast.nio.SocketInterceptor` for clients.  ```java public class MySocketInterceptor implements MemberSocketInterceptor {   public void init( SocketInterceptorConfig socketInterceptorConfig ) {     // initialize interceptor   }    void onConnect( Socket connectedSocket ) throws IOException {     // do something meaningful when connected   }    public void onAccept( Socket acceptedSocket ) throws IOException {     // do something meaningful when accepted a connection   } } ```  ```xml &lt;hazelcast&gt;   ...   &lt;network&gt;     ...     &lt;socket-interceptor enabled=\&quot;true\&quot;&gt;       &lt;class-name&gt;com.hazelcast.examples.MySocketInterceptor&lt;/class-name&gt;       &lt;properties&gt;         &lt;property name=\&quot;kerberos-host\&quot;&gt;kerb-host-name&lt;/property&gt;         &lt;property name=\&quot;kerberos-config-file\&quot;&gt;kerb.conf&lt;/property&gt;       &lt;/properties&gt;     &lt;/socket-interceptor&gt;   &lt;/network&gt;   ... &lt;/hazelcast&gt; ```  ```java public class MyClientSocketInterceptor implements SocketInterceptor {   void onConnect( Socket connectedSocket ) throws IOException {     // do something meaningful when connected   } }  ClientConfig clientConfig = new ClientConfig(); clientConfig.setGroupConfig( new GroupConfig( \&quot;dev\&quot;, \&quot;dev-pass\&quot; ) )     .addAddress( \&quot;10.10.3.4\&quot; );  MyClientSocketInterceptor clientSocketInterceptor = new MyClientSocketInterceptor(); clientConfig.setSocketInterceptor( clientSocketInterceptor ); HazelcastInstance client = HazelcastClient.newHazelcastClient( clientConfig ); ```   "
});



documentTitles["securityinterceptor.html#security-interceptor"] = "Security Interceptor";
index.add({
    url: "securityinterceptor.html#security-interceptor",
    title: "Security Interceptor",
    body: "## Security Interceptor  ![](images/enterprise-onlycopy.jpg)  Hazelcast allows you to intercept every remote operation executed by the client. This lets you add a very flexible custom security logic. To do this, implement `com.hazelcast.security.SecurityInterceptor`.  ```java public class MySecurityInterceptor implements SecurityInterceptor {    public void before( Credentials credentials, String serviceName,                       String methodName, Parameters parameters )       throws AccessControlException {     // credentials: client credentials      // serviceName: MapService.SERVICE_NAME, QueueService.SERVICE_NAME, ... etc     // methodName: put, get, offer, poll, ... etc     // parameters: holds parameters of the executed method, iterable.   }    public void after( Credentials credentials, String serviceName,                      String methodName, Parameters parameters ) {     // can be used for logging etc.   } } ```  The `before` method will be called before processing the request on the remote server. The `after` method will be called after the processing. Exceptions thrown while executing the `before` method will propagate to the client, but exceptions thrown while executing the `after` method will be suppressed.   "
});



documentTitles["encryption.html#encryption"] = "Encryption";
index.add({
    url: "encryption.html#encryption",
    title: "Encryption",
    body: "## Encryption  ![](images/enterprise-onlycopy.jpg)  Hazelcast allows you to encrypt the entire socket level communication among all Hazelcast members. Encryption is based on [Java Cryptography Architecture](http://java.sun.com/javase/6/docs/technotes/guides/security/crypto/CryptoSpec.html). In symmetric encryption, each node uses the same key, so the key is shared. Here is an example configuration for symmetric encryption.  ```xml &lt;hazelcast&gt;   ...   &lt;network&gt;     ...     &lt;!--       Make sure to set enabled=true       Make sure this configuration is exactly the same on       all members     --&gt;     &lt;symmetric-encryption enabled=\&quot;true\&quot;&gt;       &lt;!--         encryption algorithm such as         DES/ECB/PKCS5Padding,         PBEWithMD5AndDES,         Blowfish,         DESede       --&gt;       &lt;algorithm&gt;PBEWithMD5AndDES&lt;/algorithm&gt;        &lt;!-- salt value to use when generating the secret key --&gt;       &lt;salt&gt;thesalt&lt;/salt&gt;        &lt;!-- pass phrase to use when generating the secret key --&gt;       &lt;password&gt;thepass&lt;/password&gt;        &lt;!-- iteration count to use when generating the secret key --&gt;       &lt;iteration-count&gt;19&lt;/iteration-count&gt;     &lt;/symmetric-encryption&gt;   &lt;/network&gt;   ... &lt;/hazelcast&gt; ```  &lt;br&gt; &lt;/br&gt;   ***RELATED INFORMATION***  *Please see the [SSL section](#ssl).* "
});



documentTitles["ssl.html#ssl"] = "SSL";
index.add({
    url: "ssl.html#ssl",
    title: "SSL",
    body: "## SSL  ![](images/enterprise-onlycopy.jpg)  Hazelcast allows you to use SSL socket communication among all Hazelcast members. To use it, you need to implement `com.hazelcast.nio.ssl.SSLContextFactory` and configure the SSL section in network configuration.  ```java public class MySSLContextFactory implements SSLContextFactory {   public void init( Properties properties ) throws Exception {   }    public SSLContext getSSLContext() {     ...     SSLContext sslCtx = SSLContext.getInstance( protocol );     return sslCtx;   } } ```  ```xml &lt;hazelcast&gt;   ...   &lt;network&gt;     ...     &lt;ssl enabled=\&quot;true\&quot;&gt;       &lt;factory-class-name&gt;           com.hazelcast.examples.MySSLContextFactory       &lt;/factory-class-name&gt;       &lt;properties&gt;         &lt;property name=\&quot;foo\&quot;&gt;bar&lt;/property&gt;       &lt;/properties&gt;     &lt;/ssl&gt;   &lt;/network&gt;   ... &lt;/hazelcast&gt; ```  Hazelcast provides a default SSLContextFactory, `com.hazelcast.nio.ssl.BasicSSLContextFactory`, which uses configured keystore to initialize `SSLContext`. You define `keyStore` and `keyStorePassword`, and you can set `keyManagerAlgorithm` (default `SunX509`), `trustManagerAlgorithm` (default `SunX509`) and `protocol` (default `TLS`).  ```xml &lt;hazelcast&gt;   ...   &lt;network&gt;     ...     &lt;ssl enabled=\&quot;true\&quot;&gt;       &lt;factory-class-name&gt;           com.hazelcast.nio.ssl.BasicSSLContextFactory       &lt;/factory-class-name&gt;       &lt;properties&gt;         &lt;property name=\&quot;keyStore\&quot;&gt;keyStore&lt;/property&gt;         &lt;property name=\&quot;keyStorePassword\&quot;&gt;keyStorePassword&lt;/property&gt;         &lt;property name=\&quot;keyManagerAlgorithm\&quot;&gt;SunX509&lt;/property&gt;         &lt;property name=\&quot;trustManagerAlgorithm\&quot;&gt;SunX509&lt;/property&gt;         &lt;property name=\&quot;protocol\&quot;&gt;TLS&lt;/property&gt;       &lt;/properties&gt;     &lt;/ssl&gt;   &lt;/network&gt;   ... &lt;/hazelcast&gt; ```  Hazelcast client also has SSL support. You can configure Client SSL programmatically as shown below.  ```java Properties props = new Properties(); ... ClientConfig config = new ClientConfig(); config.getSocketOptions().setSocketFactory( new SSLSocketFactory( props ) ); ```  You can also set `keyStore` and `keyStorePassword` with the following system properties.   - `javax.net.ssl.keyStore`  - `javax.net.ssl.keyStorePassword`   ![image](images/NoteSmall.jpg) ***NOTE:*** *You cannot use SSL when [Hazelcast Encryption](#encryption) is enabled.* "
});



documentTitles["credentials.html#credentials"] = "Credentials";
index.add({
    url: "credentials.html#credentials",
    title: "Credentials",
    body: "## Credentials  ![](images/enterprise-onlycopy.jpg)   One of the key elements in Hazelcast security is the `Credentials` object, which is used to carry all credentials of an endpoint (member or client). Credentials is an interface which extends `Serializable` and has three methods to implement. You can either implement the `Credentials` interface or extend the `AbstractCredentials` class, which is an abstract implementation of `Credentials`.  ```java package com.hazelcast.security; public interface Credentials extends Serializable {   String getEndpoint();   void setEndpoint( String endpoint ) ;       String getPrincipal() ;     } ```  Hazelcast calls the `Credentials.setEndpoint()` method when an authentication request arrives at the node before authentication takes place.  ```java package com.hazelcast.security; ... public abstract class AbstractCredentials implements Credentials, DataSerializable {   private transient String endpoint;   private String principal;   ... } ```  `UsernamePasswordCredentials`, a custom implementation of Credentials, is in the Hazelcast `com.hazelcast.security` package. `UsernamePasswordCredentials` is used for default configuration during the authentication process of both members and clients.  ```java package com.hazelcast.security; ... public class UsernamePasswordCredentials extends Credentials {   private byte[] password;   ... } ``` "
});



documentTitles["clusterloginmodule.html#clusterloginmodule"] = "ClusterLoginModule";
index.add({
    url: "clusterloginmodule.html#clusterloginmodule",
    title: "ClusterLoginModule",
    body: "## ClusterLoginModule  ![](images/enterprise-onlycopy.jpg)   All security attributes are carried in the `Credentials` object. `Credentials` is used by [LoginModule](http://docs.oracle.com/javase/7/docs/api/javax/security/auth/spi/LoginModule.html)s during the authentication process. User supplied attributes from `LoginModule`s are accessed by [CallbackHandler](http://docs.oracle.com/javase/7/docs/api/javax/security/auth/callback/CallbackHandler.html)s. To access the `Credentials` object, Hazelcast uses its own specialized `CallbackHandler`. During initialization of `LoginModules`, Hazelcast passes this special `CallbackHandler` into the `LoginModule.initialize()` method.  `LoginModule` implementations should create an instance of `com.hazelcast.security.CredentialsCallback` and call the `handle(Callback[] callbacks)` method of `CallbackHandler` during the login process.   `CredentialsCallback.getCredentials()` returns the supplied `Credentials` object.  ```java public class CustomLoginModule implements LoginModule {   CallbackHandler callbackHandler;   Subject subject;        public void initialize( Subject subject, CallbackHandler callbackHandler,                           Map&lt;String, ?&gt; sharedState, Map&lt;String, ?&gt; options ) {     this.subject = subject;     this.callbackHandler = callbackHandler;   }    public final boolean login() throws LoginException {     CredentialsCallback callback = new CredentialsCallback();     try {       callbackHandler.handle( new Callback[] { callback } );       credentials = cb.getCredentials();     } catch ( Exception e ) {       throw new LoginException( e.getMessage() );     }     ...   }   ... } ```  To use the default Hazelcast permission policy, you must create an instance of `com.hazelcast.security.ClusterPrincipal` that holds the `Credentials` object, and you must add it to `Subject.principals onLoginModule.commit()` as shown below.  ```java public class MyCustomLoginModule implements LoginModule {   ...   public boolean commit() throws LoginException {     ...     Principal principal = new ClusterPrincipal( credentials );     subject.getPrincipals().add( principal );              return true;   }   ... } ```  Hazelcast has an abstract implementation of `LoginModule` that does callback and cleanup operations and holds the resulting `Credentials` instance. `LoginModule`s extending `ClusterLoginModule` can access `Credentials`, `Subject`, `LoginModule` instances and options, and `sharedState` maps. Extending the `ClusterLoginModule` is recommended instead of implementing all required stuff.  ```java package com.hazelcast.security; ... public abstract class ClusterLoginModule implements LoginModule {    protected abstract boolean onLogin() throws LoginException;   protected abstract boolean onCommit() throws LoginException;   protected abstract boolean onAbort() throws LoginException;   protected abstract boolean onLogout() throws LoginException; } ``` &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***  *Please refer to [JAAS Reference Guide](http://docs.oracle.com/javase/7/docs/technotes/guides/security/jaas/JAASRefGuide.html) for further information.*"
});



documentTitles["clustermembersecurity.html#cluster-member-security"] = "Cluster Member Security";
index.add({
    url: "clustermembersecurity.html#cluster-member-security",
    title: "Cluster Member Security",
    body: "## Cluster Member Security  ![](images/enterprise-onlycopy.jpg)   Hazelcast supports standard Java Security (JAAS) based authentication between cluster members. To implement it, you configure one or more LoginModules and an instance of `com.hazelcast.security.ICredentialsFactory`. Although Hazelcast has default implementations using cluster group and group-password and UsernamePasswordCredentials on authentication, it is recommended that you implement the LoginModules and an instance of `com.hazelcast.security.ICredentialsFactory` according to your specific needs and environment.  ```xml &lt;security enabled=\&quot;true\&quot;&gt;   &lt;member-credentials-factory        class-name=\&quot;com.hazelcast.examples.MyCredentialsFactory\&quot;&gt;     &lt;properties&gt;       &lt;property name=\&quot;property1\&quot;&gt;value1&lt;/property&gt;       &lt;property name=\&quot;property2\&quot;&gt;value2&lt;/property&gt;     &lt;/properties&gt;   &lt;/member-credentials-factory&gt;   &lt;member-login-modules&gt;     &lt;login-module usage=\&quot;required\&quot;         class-name=\&quot;com.hazelcast.examples.MyRequiredLoginModule\&quot;&gt;       &lt;properties&gt;         &lt;property name=\&quot;property3\&quot;&gt;value3&lt;/property&gt;       &lt;/properties&gt;     &lt;/login-module&gt;     &lt;login-module usage=\&quot;sufficient\&quot;         class-name=\&quot;com.hazelcast.examples.MySufficientLoginModule\&quot;&gt;       &lt;properties&gt;         &lt;property name=\&quot;property4\&quot;&gt;value4&lt;/property&gt;       &lt;/properties&gt;     &lt;/login-module&gt;     &lt;login-module usage=\&quot;optional\&quot;         class-name=\&quot;com.hazelcast.examples.MyOptionalLoginModule\&quot;&gt;       &lt;properties&gt;         &lt;property name=\&quot;property5\&quot;&gt;value5&lt;/property&gt;       &lt;/properties&gt;     &lt;/login-module&gt;   &lt;/member-login-modules&gt;   ... &lt;/security&gt; ```  You can define as many asLoginModules you wanted in configuration. They are executed in the given order. The `usage` attribute has 4 values: 'required', 'requisite', 'sufficient' and 'optional' as defined in `javax.security.auth.login.AppConfigurationEntry.LoginModuleControlFlag`.  ```java package com.hazelcast.security; /**  * ICredentialsFactory is used to create Credentials objects to be used  * during node authentication before connection accepted by master node.  */ public interface ICredentialsFactory {    void configure( GroupConfig groupConfig, Properties properties );    Credentials newCredentials();    void destroy(); } ```  Properties defined in configuration are passed to the `ICredentialsFactory.configure()` method as java.util.Properties and to the `LoginModule.initialize()` method as java.util.Map. "
});



documentTitles["nativeclientsecurity.html#native-client-security"] = "Native Client Security";
index.add({
    url: "nativeclientsecurity.html#native-client-security",
    title: "Native Client Security",
    body: "## Native Client Security  ![](images/enterprise-onlycopy.jpg)   Hazelcast's Client security includes both authentication and authorization.  "
});

documentTitles["nativeclientsecurity.html#authentication"] = "Authentication";
index.add({
    url: "nativeclientsecurity.html#authentication",
    title: "Authentication",
    body: "### Authentication  The authentication mechanism works the same as cluster member authentication. To implement client authentication, configure a Credential and one or more LoginModules. The client side does not have and does not need a factory object to create Credentials objects like `ICredentialsFactory`. Credentials must be created at the client side and sent to the connected node during the connection process.  ```xml &lt;security enabled=\&quot;true\&quot;&gt;   &lt;client-login-modules&gt;     &lt;login-module usage=\&quot;required\&quot;         class-name=\&quot;com.hazelcast.examples.MyRequiredClientLoginModule\&quot;&gt;       &lt;properties&gt;         &lt;property name=\&quot;property3\&quot;&gt;value3&lt;/property&gt;       &lt;/properties&gt;     &lt;/login-module&gt;     &lt;login-module usage=\&quot;sufficient\&quot;         class-name=\&quot;com.hazelcast.examples.MySufficientClientLoginModule\&quot;&gt;       &lt;properties&gt;         &lt;property name=\&quot;property4\&quot;&gt;value4&lt;/property&gt;       &lt;/properties&gt;     &lt;/login-module&gt;     &lt;login-module usage=\&quot;optional\&quot;         class-name=\&quot;com.hazelcast.examples.MyOptionalClientLoginModule\&quot;&gt;       &lt;properties&gt;         &lt;property name=\&quot;property5\&quot;&gt;value5&lt;/property&gt;       &lt;/properties&gt;     &lt;/login-module&gt;   &lt;/client-login-modules&gt;   ... &lt;/security&gt; ```  You can define as many as `LoginModules` as you want in configuration. Those are executed in the given order. The `usage` attribute has 4 values: 'required', 'requisite', 'sufficient' and 'optional' as defined in `javax.security.auth.login.AppConfigurationEntry.LoginModuleControlFlag`.  ```java ClientConfig clientConfig = new ClientConfig(); clientConfig.setCredentials( new UsernamePasswordCredentials( \&quot;dev\&quot;, \&quot;dev-pass\&quot; ) ); HazelcastInstance client = HazelcastClient.newHazelcastClient( clientConfig ); ```  "
});

documentTitles["nativeclientsecurity.html#authorization"] = "Authorization";
index.add({
    url: "nativeclientsecurity.html#authorization",
    title: "Authorization",
    body: "### Authorization  Hazelcast client authorization is configured by a client permission policy. Hazelcast has a default permission policy implementation that uses permission configurations defined in the Hazelcast security configuration. Default policy permission checks are done against instance types (map, queue, etc.), instance names (map, queue, name, etc.), instance actions (put, read, remove, add, etc.), client endpoint addresses, and client principal defined by the Credentials object. Instance and principal names and endpoint addresses can be defined as wildcards(*). Please see the [Network Configuration section](#network-configuration) and [Using Wildcard section](#using-wildcard).  ```xml &lt;security enabled=\&quot;true\&quot;&gt;   &lt;client-permissions&gt;     &lt;!-- Principal 'admin' from endpoint '127.0.0.1' has all permissions. --&gt;     &lt;all-permissions principal=\&quot;admin\&quot;&gt;       &lt;endpoints&gt;         &lt;endpoint&gt;127.0.0.1&lt;/endpoint&gt;       &lt;/endpoints&gt;     &lt;/all-permissions&gt;              &lt;!-- Principals named 'dev' from all endpoints have 'create', 'destroy',           'put', 'read' permissions for map named 'default'. --&gt;     &lt;map-permission name=\&quot;default\&quot; principal=\&quot;dev\&quot;&gt;       &lt;actions&gt;         &lt;action&gt;create&lt;/action&gt;         &lt;action&gt;destroy&lt;/action&gt;         &lt;action&gt;put&lt;/action&gt;         &lt;action&gt;read&lt;/action&gt;       &lt;/actions&gt;     &lt;/map-permission&gt;              &lt;!-- All principals from endpoints '127.0.0.1' or matching to '10.10.*.*'           have 'put', 'read', 'remove' permissions for map          whose name matches to 'com.foo.entity.*'. --&gt;     &lt;map-permission name=\&quot;com.foo.entity.*\&quot;&gt;       &lt;endpoints&gt;         &lt;endpoint&gt;10.10.*.*&lt;/endpoint&gt;         &lt;endpoint&gt;127.0.0.1&lt;/endpoint&gt;       &lt;/endpoints&gt;       &lt;actions&gt;         &lt;action&gt;put&lt;/action&gt;         &lt;action&gt;read&lt;/action&gt;         &lt;action&gt;remove&lt;/action&gt;       &lt;/actions&gt;     &lt;/map-permission&gt;              &lt;!-- Principals named 'dev' from endpoints matching to either           '192.168.1.1-100' or '192.168.2.*'           have 'create', 'add', 'remove' permissions for all queues. --&gt;     &lt;queue-permission name=\&quot;*\&quot; principal=\&quot;dev\&quot;&gt;       &lt;endpoints&gt;         &lt;endpoint&gt;192.168.1.1-100&lt;/endpoint&gt;         &lt;endpoint&gt;192.168.2.*&lt;/endpoint&gt;       &lt;/endpoints&gt;       &lt;actions&gt;         &lt;action&gt;create&lt;/action&gt;         &lt;action&gt;add&lt;/action&gt;         &lt;action&gt;remove&lt;/action&gt;       &lt;/actions&gt;     &lt;/queue-permission&gt;              &lt;!-- All principals from all endpoints have transaction permission.--&gt;     &lt;transaction-permission /&gt;   &lt;/client-permissions&gt; &lt;/security&gt; ```  Users can also define their own policy by implementing `com.hazelcast.security.IPermissionPolicy`.  ```java package com.hazelcast.security; /**  * IPermissionPolicy is used to determine any Subject's   * permissions to perform a security sensitive Hazelcast operation.  *  */ public interface IPermissionPolicy {   void configure( SecurityConfig securityConfig, Properties properties );        PermissionCollection getPermissions( Subject subject,                                        Class&lt;? extends Permission&gt; type );        void destroy(); } ```  Permission policy implementations can access client-permissions in configuration by using `SecurityConfig.getClientPermissionConfigs()` during `configure(SecurityConfig securityConfig, Properties properties)` method is called by Hazelcast.  The `IPermissionPolicy.getPermissions(Subject subject, Class&lt;? extends Permission&gt; type)` method is used to determine a client request that has been granted permission to perform a security-sensitive operation.   Permission policy should return a `PermissionCollection` containing permissions of the given type for the given `Subject`. The Hazelcast access controller will call `PermissionCollection.implies(Permission)` on returning `PermissionCollection` and will decide if the current `Subject` has permission to access the requested resources or not.  "
});

documentTitles["nativeclientsecurity.html#permissions"] = "Permissions";
index.add({
    url: "nativeclientsecurity.html#permissions",
    title: "Permissions",
    body: "### Permissions  - All Permission  ```xml &lt;all-permissions principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt; &lt;/all-permissions&gt; ```  - Map Permission  ```xml &lt;map-permission name=\&quot;name\&quot; principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt;   &lt;actions&gt;     ...   &lt;/actions&gt; &lt;/map-permission&gt; ``` 	Actions: all, create, destroy, put, read, remove, lock, intercept, index, listen  - Queue Permission  ```xml &lt;queue-permission name=\&quot;name\&quot; principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt;   &lt;actions&gt;     ...   &lt;/actions&gt; &lt;/queue-permission&gt; ```  	Actions: all, create, destroy, add, remove, read, listen  - Multimap Permission  ```xml &lt;multimap-permission name=\&quot;name\&quot; principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt;   &lt;actions&gt;     ...   &lt;/actions&gt; &lt;/multimap-permission&gt; ``` 	Actions: all, create, destroy, put, read, remove, listen, lock  - Topic Permission  ```xml &lt;topic-permission name=\&quot;name\&quot; principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt;   &lt;actions&gt;     ...   &lt;/actions&gt; &lt;/topic-permission&gt; ``` 	Actions: create, destroy, publish, listen  - List Permission  ```xml &lt;list-permission name=\&quot;name\&quot; principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt;   &lt;actions&gt;     ...   &lt;/actions&gt; &lt;/list-permission&gt; ``` 	Actions: all, create, destroy, add, read, remove, listen  - Set Permission  ```xml &lt;set-permission name=\&quot;name\&quot; principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt;   &lt;actions&gt;     ...   &lt;/actions&gt; &lt;/set-permission&gt; ``` 	Actions: all, create, destroy, add, read, remove, listen  - Lock Permission  ```xml &lt;lock-permission name=\&quot;name\&quot; principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt;   &lt;actions&gt;     ...   &lt;/actions&gt; &lt;/lock-permission&gt; ``` 	Actions: all, create, destroy, lock, read  - AtomicLong Permission  ```xml &lt;atomic-long-permission name=\&quot;name\&quot; principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;         ...   &lt;/endpoints&gt;   &lt;actions&gt;     ...   &lt;/actions&gt; &lt;/atomic-long-permission&gt; ``` 	Actions: all, create, destroy, read, modify  - CountDownLatch Permission  ```xml &lt;countdown-latch-permission name=\&quot;name\&quot; principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt;   &lt;actions&gt;     ...   &lt;/actions&gt; &lt;/countdown-latch-permission&gt; ``` 	Actions: all, create, destroy, modify, read  - Semaphore Permission  ```xml &lt;semaphore-permission name=\&quot;name\&quot; principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt;   &lt;actions&gt;     ...   &lt;/actions&gt; &lt;/semaphore-permission&gt; ``` 	Actions: all, create, destroy, acquire, release, read  - Executor Service Permission  ```xml &lt;executor-service-permission name=\&quot;name\&quot; principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt;   &lt;actions&gt;     ...   &lt;/actions&gt; &lt;/executor-service-permission&gt; ``` 	Actions: all, create, destroy  - Transaction Permission  ```xml &lt;transaction-permission principal=\&quot;principal\&quot;&gt;   &lt;endpoints&gt;     ...   &lt;/endpoints&gt; &lt;/transaction-permission&gt; ```  &lt;br&gt; &lt;/br&gt; "
});



documentTitles["performance.html#performance"] = "Performance";
index.add({
    url: "performance.html#performance",
    title: "Performance",
    body: "# Performance  "
});

documentTitles["performance.html#data-affinity"] = "Data Affinity";
index.add({
    url: "performance.html#data-affinity",
    title: "Data Affinity",
    body: "## Data Affinity  Data affinity ensures that related entries exist on the same node. If related data is on the same node, operations can be executed without the cost of extra network calls and extra wire data. This feature is provided by using the same partition keys for related data.  **Co-location of related data and computation**  Hazelcast has a standard way of finding out which member owns/manages each key object. The following operations will be routed to the same member, since all of them are operating based on the same key, \&quot;key1\&quot;.  ```java     HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); Map mapA = hazelcastInstance.getMap( \&quot;mapA\&quot; ); Map mapB = hazelcastInstance.getMap( \&quot;mapB\&quot; ); Map mapC = hazelcastInstance.getMap( \&quot;mapC\&quot; ); mapA.put( \&quot;key1\&quot;, value ); mapB.get( \&quot;key1\&quot; ); mapC.remove( \&quot;key1\&quot; ); // since map names are different, operation will be manipulating // different entries, but the operation will take place on the // same member since the keys (\&quot;key1\&quot;) are the same  hazelcastInstance.getLock( \&quot;key1\&quot; ).lock(); // lock operation will still execute on the same member of the cluster // since the key (\&quot;key1\&quot;) is same  hazelcastInstance.getExecutorService().executeOnKeyOwner( runnable, \&quot;key1\&quot; ); // distributed execution will execute the 'runnable' on the same member // since \&quot;key1\&quot; is passed as the key.    ```  When the keys are the same, entries are stored on the same node. But we sometimes want to have related entries stored on the same node, such as a customer and his/her order entries. We would have a customers map with customerId as the key and an orders map with orderId as the key. Since customerId and orderId are different keys, a customer and his/her orders may fall into different members/nodes in your cluster. So how can we have them stored on the same node? We create an affinity between customer and orders. If we make them part of the same partition then these entries will be co-located. We achieve this by making orderIds `PartitionAware`.  ```java public class OrderKey implements Serializable, PartitionAware {   private final long customerId;   private final long orderId;    public OrderKey( long orderId, long customerId ) {     this.customerId = customerId;     this.orderId = orderId;   }    public long getCustomerId() {     return customerId;   }    public long getOrderId() {     return orderId;   }    public Object getPartitionKey() {     return customerId;   }    @Override   public String toString() {     return \&quot;OrderKey{\&quot; +         \&quot;customerId=\&quot; + customerId +         \&quot;, orderId=\&quot; + orderId +       '}';     } } ```  Notice that OrderKey implements `PartitionAware` and that `getPartitionKey()` returns the `customerId`. This will make sure that the `Customer` entry and its `Order`s will be stored on the same node.  ```java HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance(); Map mapCustomers = hazelcastInstance.getMap( \&quot;customers\&quot; ) Map mapOrders = hazelcastInstance.getMap( \&quot;orders\&quot; ) // create the customer entry with customer id = 1 mapCustomers.put( 1, customer ); // now create the orders for this customer mapOrders.put( new OrderKey( 21, 1 ), order ); mapOrders.put( new OrderKey( 22, 1 ), order ); mapOrders.put( new OrderKey( 23, 1 ), order ); ```   Assume that you have a customers map where `customerId` is the key and the customer object is the value. You want to remove one of the customer orders and return the number of remaining orders. Here is how you would normally do it.  ```java public static int removeOrder( long customerId, long orderId ) throws Exception {   IMap&lt;Long, Customer&gt; mapCustomers = instance.getMap( \&quot;customers\&quot; );   IMap mapOrders = hazelcastInstance.getMap( \&quot;orders\&quot; )   mapCustomers.lock( customerId );   mapOrders.remove(orderId);   Set orders = orderMap.keySet(Predicates.equal(\&quot;customerId\&quot;, customerId));   mapCustomers.unlock( customerId );   return orders.size(); } ```  There are couple of things you should consider.  1.  There are four distributed operations there: lock, remove, keySet, unlock. Can you reduce  the number of distributed operations?  2.  The customer object may not be that big, but can you not have to pass that object through the  wire? Think about a scenario where you set order count to the customer object for fast access, so you  should do a get and a put, and as a result, the customer object is passed through the wire twice.  Instead, why not move the computation over to the member (JVM) where your customer data resides. Here is how you can do this with distributed executor service.  1.  Send a `PartitionAware` `Callable` task.  2.  `Callable` does the deletion of the order right there and returns with the remaining  order count.  3.  Upon completion of the `Callable` task, return the result (remaining order count). You  do not have to wait until the task is completed; since distributed executions are asynchronous, you can do other things in the meantime.  Here is some example code.  ```java HazelcastInstance hazelcastInstance = Hazelcast.newHazelcastInstance();  public int removeOrder(long customerId, long orderId) throws Exception {     IExecutorService es = hazelcastInstance         .getExecutorService( \&quot;ExecutorService\&quot; );     OrderDeletionTask task = new OrderDeletionTask( customerId, orderId );     Future&lt;Integer&gt; future = es.submit( task );     int remainingOrders = future.get();     return remainingOrders; }  public static class OrderDeletionTask     implements Callable&lt;Integer&gt;, PartitionAware, Serializable {      private long customerId;     private long orderId;      public OrderDeletionTask() {     }          public OrderDeletionTask(long customerId, long orderId) {         super();         this.customerId = customerId;         this.orderId = orderId;     }          public Integer call () {         Map&lt;Long, Customer&gt; customerMap = hazelcastInstance.getMap(\&quot;customers\&quot;);         IMap&lt;OrderKey, Order&gt; orderMap = hazelcastInstance.getMap(\&quot;orders\&quot;);         mapCustomers.lock( customerId );         Customer customer = mapCustomers.get( customerId );         final Predicate predicate = Predicates.equal(\&quot;customerId\&quot;, customerId);         final Set&lt;OrderKey&gt; orderKeys = orderMap.localKeySet(predicate);         int orderCount = orderKeys.size();         for (OrderKey key : orderKeys) {             if (key.orderId == orderId) {                 orderCount--;                 orderMap.delete(key);             }         }         mapCustomers.unlock( customerId );         return orderCount;     }      public Object getPartitionKey() {         return customerId;     } } ```  The benefits of doing the same operation with distributed `ExecutorService` based on the key are:  -   Only one distributed execution (`es.submit(task)`), instead of four.  -   Less data is sent over the wire.  -   Since lock/update/unlock cycle is done locally (local to the customer data), lock duration for the `Customer` entry is much less, thus enabling higher concurrency.   &lt;br&gt; &lt;/br&gt;  "
});



documentTitles["threadingmodel.html#threading-model"] = "Threading Model";
index.add({
    url: "threadingmodel.html#threading-model",
    title: "Threading Model",
    body: "## Threading Model  Your application server has its own threads. Hazelcast does not use these - it manages its own threads.  "
});

documentTitles["threadingmodel.html#io-threading"] = "I/O Threading";
index.add({
    url: "threadingmodel.html#io-threading",
    title: "I/O Threading",
    body: "### I/O Threading  Hazelcast uses a pool of threads for I/O. A single thread does not do all the IO: instead, multiple threads do the IO. On each cluster member, the IO-threading is split up in 3 types of IO-threads:  * IO-thread that takes care of accept requests, * IO-threads that take care of reading data from other members/clients, * IO-threads that take care of writing data to other members/clients.  You can configure the number of IO-threads using the `hazelcast.io.thread.count` system property. Its default value is 3 per member.  This means that if 3 is used, in total there are 7 IO-threads; 1 accept-IO-thread, 3 read-IO-threads, and 3 write-IO-threads. Each IO-thread has its own Selector instance and waits on `Selector.select` if there is nothing to do.  In case of the read-IO-thread, when sufficient bytes for a packet have been received, the Packet object is created. This Packet is  then sent to the System where it is de-multiplexed. If the Packet header signals that it is an operation/response, the Packet is handed  over to the operation service (please see the [Operation Threading section](#operation-threading)). If the Packet is an event, it is handed  over to the event service (please see the [Event Threading section](#event-threading)).   "
});



documentTitles["threadingevent.html#event-threading"] = "Event Threading";
index.add({
    url: "threadingevent.html#event-threading",
    title: "Event Threading",
    body: "### Event Threading  Hazelcast uses a shared event system to deal with components that rely on events, such as topic, collections, listeners, and Near Cache.   Each cluster member has an array of event threads and each thread has its own work queue. When an event is produced, either locally or remotely, an event thread is selected (depending on if there is a message ordering) and the event is placed in the work queue for that event thread.  The following properties can be set to alter the behavior of the system.  * `hazelcast.event.thread.count`: Number of event-threads in this array. Its default value is 5. * `hazelcast.event.queue.capacity`: Capacity of the work queue. Its default value is 1000000. * `hazelcast.event.queue.timeout.millis`: Timeout for placing an item on the work queue. Its default value is 250.  If you process a lot of events and have many cores, changing the value of `hazelcast.event.thread.count` property to a higher value is a good idea. This way, more events can be processed in parallel.  Multiple components share the same event queues. If there are 2 topics, say A and B, for certain messages they may share the same queue(s) and hence the same event thread. If there are a lot of pending messages produced by A, then B needs to wait. Also, when processing a message from A takes a lot of time and the event thread is used for that, B will suffer from this.  That is why it is better to offload processing to a dedicated thread (pool) so that systems are better isolated.  If events are produced at a higher rate than they are consumed, the queue will grow in size. To prevent overloading the system and running into an `OutOfMemoryException`, the queue is given a capacity of 1 million items. When the maximum capacity is reached, the items are dropped. This means that the event system is a 'best effort' system. There is no guarantee that you are going to get an event. Topic A might have a lot of pending messages, and therefore B cannot receive messages because the queue has no capacity and messages for B are dropped.  "
});



documentTitles["threadingexecutor.html#iexecutor-threading"] = "IExecutor Threading";
index.add({
    url: "threadingexecutor.html#iexecutor-threading",
    title: "IExecutor Threading",
    body: "### IExecutor Threading  Executor threading is straight forward. When a task is received to be executed on Executor E, then E will have its own `ThreadPoolExecutor` instance and the work is put on the work queue of this executor. Thus, Executors are fully isolated, but still share the same underlying hardware; most importantly the CPUs.   You can configure the IExecutor using the `ExecutorConfig` (programmatic configuration) or using `&lt;executor&gt;` (declarative configuration).  "
});



documentTitles["threadingoperation.html#operation-threading"] = "Operation Threading";
index.add({
    url: "threadingoperation.html#operation-threading",
    title: "Operation Threading",
    body: "### Operation Threading  There are 2 types of operations:  * Operations that are aware of a certain partition, e.g. `IMap.get(key)`. * Operations that are not partition aware, such as the `IExecutorService.executeOnMember(command,member)` operation.  Each of these operation types has a different threading model, explained below.  "
});

documentTitles["threadingoperation.html#partition-aware-operations"] = "Partition-aware Operations";
index.add({
    url: "threadingoperation.html#partition-aware-operations",
    title: "Partition-aware Operations",
    body: "#### Partition-aware Operations  To execute partition-aware operations, an array of operation threads is created. The size of this array has a default value of two times the number of cores and a minimum value of 2. This value can be changed using the `hazelcast.operation.thread.count` property.  Each operation-thread has its own work queue and it will consume messages from this work queue. If a partition-aware  operation needs to be scheduled, the right thread is found using the formula below.  `threadIndex = partitionId % partition-thread-count`  After the `threadIndex` is determined, the operation is put in the work queue of that operation-thread. This means that:   * a single operation thread executes operations for multiple partitions; if there are 271 partitions and  10 partition-threads, then roughly every operation-thread will execute operations for 27 partitions.    * each partition belongs to only 1 operation thread. All operations for a partition will always   be handled by exactly the same operation-thread.    * no concurrency control is needed to deal with partition-aware operations because once a partition-aware  operation is put on the work queue of a partition-aware operation thread, only   1 thread is able to touch that partition.  Because of this threading strategy, there are two forms of false sharing you need to be aware of:  * false sharing of the partition: two completely independent data structures share the same partitions; e.g. if there  is a map `employees` and a map `orders`, the method `employees.get(peter)` running on partition 25 may be blocked  by a `map.get` of `orders.get(1234)` also running on partition 25. If independent data structure share the same partition,  a slow operation on one data structure can slow down the other data structures.   * false sharing of the partition-aware operation-thread: each operation-thread is responsible for executing  operations of a number of partitions. For example, thread-1 could be responsible for partitions 0,10,20,... thread-2 for partitions  1,11,21,... etc. If an operation for partition 1 takes a lot of time, it will block the execution of an operation of partition  11 because both of them are mapped to exactly the same operation-thread.  You need to be careful with long running operations because you could starve operations of a thread.  As a general rule, the partition thread should be released as soon as possible because operations are not designed to execute long running operations. That is why, for example, it is very dangerous to execute a long running operation  using `AtomicReference.alter` or an `IMap.executeOnKey`, because these operations will block other operations to be executed.  Currently, there is no support for work stealing. Different partitions that map to the same thread may need to wait  till one of the partitions is finished, even though there are other free partition-operation threads available.  **Example:**  Take a 3 node cluster. Two members will have 90 primary partitions and one member will have 91 primary partitions. Let's say you have one CPU and 4 cores per CPU. By default, 8 operation threads will be allocated to serve 90 or 91 partitions.  "
});

documentTitles["threadingoperation.html#non-partition-aware-operations"] = "Non Partition-aware Operations";
index.add({
    url: "threadingoperation.html#non-partition-aware-operations",
    title: "Non Partition-aware Operations",
    body: "#### Non Partition-aware Operations  To execute non partition-aware operations, e.g. `IExecutorService.executeOnMember(command,member)`, generic operation  threads are used. When the Hazelcast instance is started, an array of operation threads is created. The size of this array  has a default value of the number of cores divided by two with a minimum value of 2. It can be changed using the  `hazelcast.operation.generic.thread.count` property. This means that:  * a non partition-aware operation-thread will never execute an operation for a specific partition. Only partition-aware   operation-threads execute partition-aware operations.   Unlike the partition-aware operation threads, all the generic operation threads share the same work queue: `genericWorkQueue`.  If a non partition-aware operation needs to be executed, it is placed in that work queue and any generic operation  thread can execute it. The big advantage is that you automatically have work balancing since any generic operation  thread is allowed to pick up work from this queue.  The disadvantage is that this shared queue can be a point of contention. We do not practically see this in  production because performance is dominated by I/O and the system is not executing very many non partition-aware operations.   "
});

documentTitles["threadingoperation.html#priority-operations"] = "Priority Operations";
index.add({
    url: "threadingoperation.html#priority-operations",
    title: "Priority Operations",
    body: "#### Priority Operations   In some cases, the system needs to execute operations with a higher priority, e.g. an important system operation. To support priority operations, we do the following:  * For partition-aware operations: each partition thread has its own work queue. But apart from that, it also has a priority   work queue. It will always check this priority queue before it processes work from its normal work queue.  * For non partition-aware operations: next to the `genericWorkQueue`, there also is a `genericPriorityWorkQueue`. So when a priority operation  needs to be executed, it is put in this `genericPriorityWorkQueue`. And just like the partition-aware operation threads, a generic  operation thread will first check the `genericPriorityWorkQueue` for work.    Because a worker thread will block on the normal work queue (either partition specific or generic), a priority operation may not be picked up because it will not be put on the queue where it is blocking. We always send a 'kick the worker' operation that does  nothing else than trigger the worker to wake up and check the priority queue.   "
});

documentTitles["threadingoperation.html#operation-response-and-invocation-future"] = "Operation-response and Invocation-future";
index.add({
    url: "threadingoperation.html#operation-response-and-invocation-future",
    title: "Operation-response and Invocation-future",
    body: "#### Operation-response and Invocation-future  When an Operation is invoked, a `Future` is returned. Let's take the example code below.   ```java GetOperation operation = new GetOperation( mapName, key ) Future future = operationService.invoke( operation ) future.get) ```  The calling side blocks for a reply. In this case, `GetOperation` is set in the work queue for the partition of `key`, where it eventually is executed. On execution, a response is returned and placed on the `genericWorkQueue` where it is executed by a  \&quot;generic operation thread\&quot;. This thread will signal the `future` and notifies the blocked thread that a response is available.  In the `future`, we will expose this Future to the outside world, and we will provide the ability to register a completion listener so you can do asynchronous calls.   "
});

documentTitles["threadingoperation.html#local-calls"] = "Local Calls";
index.add({
    url: "threadingoperation.html#local-calls",
    title: "Local Calls",
    body: "#### Local Calls  When a local partition-aware call is done, an operation is made and handed over to the work queue of the correct partition operation thread, and a future is returned. When the calling thread calls get on that future, it will acquire a lock and wait for the result  to become available. When a response is calculated, the future is looked up, and the waiting thread is notified.    In the future, this will be optimized to reduce the amount of expensive systems calls, such as `lock.acquire`/`notify` and the expensive interaction with the operation-queue. Probably, we will add support for a caller-runs mode, so that an operation is directly executed on the calling thread.  "
});



documentTitles["backpressure.html#back-pressure"] = "Back Pressure";
index.add({
    url: "backpressure.html#back-pressure",
    title: "Back Pressure",
    body: "## Back Pressure  Hazelcast 3.4 provides the back pressure feature for synchronous calls with asynchronous backups. Using this feature, you can prevent the overload caused by pending asynchronous backups.   An example scenario is a map, configured with a single asynchronous backup and where a put operation is executed. Without back pressure, the system may produce the new asynchronous backups faster than they are processed, i.e. producing asynchronous backups may happen at a higher rate than the consumption of the backups. This can lead to problems like out of memory exceptions. When you use the back pressure feature, you can prevent these problems from occurring.  Back pressure is disabled by default. You can enable it by setting the system property `hazelcast.backpressure.enabled` to `true`. There is no overhead for the calls without backups or the calls with synchronous backups. Therefore, back pressure does  not have an impact on the performance for these calls (the ones without backups or with synchronous backups).  Currently, back pressure is implemented by transforming an asynchronous backup operation to a synchronous one. This prevents the accumulation of the asynchronous backup operations since the caller needs to wait for the queue to drain.   By default, the value of the sync window is `100`. This means, one call out of 100 calls will be transformed to a synchronous call. You can configure the sync window using the system property `hazelcast.backpressure.syncwindow`. Each member tracks  each connection and each partition for their sync-delay and decrements this delay for every asynchronous backups. Once the sync-delay reaches null, the call is transformed into a synchronous call and a new sync-delay is calculated using the formula *0.75 * sync-window + random(0.5 \* sync-window)*. For a sync window with the value 100, the sync-delay will be between 75 and 125. This randomness is to prevent resonance.  "
});

documentTitles["backpressure.html#future-improvements"] = "Future improvements";
index.add({
    url: "backpressure.html#future-improvements",
    title: "Future improvements",
    body: "### Future improvements  In Hazelcast 3.4.1, the same technique is going to be applied for regular asynchronous calls.  In the future, a back pressure based on a TCP/IP based congestion control will be added. This requires changes since we need to use multiple channels. The TCP/IP buffer cannot be consumed because a single channel is used for regular operations, responses and system operations like heartbeats.    "
});



documentTitles["hazelcastperformanceonaws.html#hazelcast-performance-on-aws"] = "Hazelcast Performance on AWS";
index.add({
    url: "hazelcastperformanceonaws.html#hazelcast-performance-on-aws",
    title: "Hazelcast Performance on AWS",
    body: "## Hazelcast Performance on AWS  Amazon Web Services (AWS) platform is rather an unpredictable environment than the traditional in-house data centers since the machines, databases or CPUs are shared with other unknown  applications in the cloud causing fluctuations. So, when you gear up your Hazelcast application from a physical environment to Amazon EC2, it should be configured in a way so that any network outage or fluctuation is minimized and its performance is maximized. This section provides a couple of notes on improving the performance of Hazelcast on AWS.  "
});

documentTitles["hazelcastperformanceonaws.html#selecting-ec2-instance-type"] = "Selecting EC2 Instance Type";
index.add({
    url: "hazelcastperformanceonaws.html#selecting-ec2-instance-type",
    title: "Selecting EC2 Instance Type",
    body: "### Selecting EC2 Instance Type  Hazelcast is an in-memory data grid that distributes the data and computation to the nodes that are connected with a network, making it very sensitive to the network. Not all EC2 Instance types are the same in terms of the network performance. It is recommended to choose instances that have **10 Gigabit** or **High** network performance for Hazelcast deployments. Please see the below table for the recommended instances.  Instance Type|Network Performance -|- m3.2xlarge|High m1.xlarge|High c3.2xlarge|High c3.4xlarge|High c3.8xlarge|10 Gigabit c1.xlarge|High cc2.8xlarge|10 Gigabit m2.4xlarge|High cr1.8xlarge|10 Gigabit  "
});

documentTitles["hazelcastperformanceonaws.html#dealing-with-network-latency"] = "Dealing with Network Latency";
index.add({
    url: "hazelcastperformanceonaws.html#dealing-with-network-latency",
    title: "Dealing with Network Latency",
    body: "### Dealing with Network Latency  Since data is sent-received very frequently in Hazelcast applications, latency in the network becomes a crucial issue. In terms of the latency, AWS cloud performance is not the same for each region and there are vast differences in the speed and optimization from region to region.  When you do not pay attention to AWS regions, Hazelcast applications may run tens or hundreds times slower than necessary. The following notes may be the workarounds:  - Create a cluster only within a region. It is not recommended to deploy a single cluster that spans across multiple regions. - If a Hazelcast application is hosted on Amazon EC2 instances in multiple EC2 regions, the latency can be reduced by serving the end users` requests from the EC2 region which has the lowest network latency. Changes in network connectivity and routing result in changes in the latency between hosts on the Internet. Amazon has a web service (Route 53) that lets the cloud architects use DNS to route end-user requests to the EC2 region that gives the fastest response. This latency-based routing is based on latency measurements performed over a period of time. Please have a look at [Route53](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/HowDoesRoute53Work.html). - Move the deployment to another region. The [CloudPing](http://www.cloudping.info/) tool gives instant estimates on the latency from your location. By using it frequently, it can be helpful to determine the regions which have the lowest latency. - The [SpeedTest](http://cloudharmony.com/speedtest) tool allows you not only test the network latency but also the downloading/uploading speeds.  "
});

documentTitles["hazelcastperformanceonaws.html#selecting-virtualization"] = "Selecting Virtualization";
index.add({
    url: "hazelcastperformanceonaws.html#selecting-virtualization",
    title: "Selecting Virtualization",
    body: "### Selecting Virtualization  AWS uses two virtualization types to launch the EC2 instances: Para-Virtualization (PV) and Hardware-assisted Virtual Machine (HVM). According to the tests we performed, HVM provided up to three times higher throughput than PV. Therefore, we recommend you use HVM when you run Hazelcast on EC2.      "
});



documentTitles["simulatoroverview.html#hazelcast-simulator"] = "Hazelcast Simulator";
index.add({
    url: "simulatoroverview.html#hazelcast-simulator",
    title: "Hazelcast Simulator",
    body: "# Hazelcast Simulator  "
});

documentTitles["simulatoroverview.html#simulator-overview"] = "Simulator Overview";
index.add({
    url: "simulatoroverview.html#simulator-overview",
    title: "Simulator Overview",
    body: "## Simulator Overview  Hazelcast Simulator is a production simulator used to test Hazelcast and Hazelcast based applications in clustered environments. It also allows you to create your own tests and perform them on your Hazelcast clusters and applications deployed to the cloud computing environments. In your tests, you can provide any property that can be specified on these environments (e.g. Amazon EC2, Google Compute Engine(GCE)) like hardware specifications, operating system, Java version, etc.  Hazelcast Simulator allows you to add potential production problems like real-life failures, network problems, overloaded CPU and failing nodes to your tests. It also provides a benchmarking and performance testing platform by supporting performance tracking and various out of the box profilers.  Hazelcast Simulator makes use of Apache jclouds&amp;reg;, an open source multi-cloud toolkit, and is primarily designed for testing on the clouds like Amazon EC2 and GCE.  You can use Hazelcast Simulator for the following use cases:  - In pre-production phase to simulate the expected throughput/latency of Hazelcast with your specific requirements. - To test if Hazelcast behaves as expected when you implement a new functionality in your project. - As part of your test suite in your deployment process. - When upgrading your Hazelcast version.  Hazelcast Simulator is available as a downloadable package on the Hazelcast [web site](http://www.hazelcast.org/download). Please refer to the [Installing Simulator section](#installing-simulator) for more information.  "
});

documentTitles["simulatoroverview.html#key-concepts"] = "Key Concepts";
index.add({
    url: "simulatoroverview.html#key-concepts",
    title: "Key Concepts",
    body: "## Key Concepts  The following are the key concepts mentioned with Hazelcast Simulator.  - **Test** -  A test class for the functionality you want to test, e.g. a Hazelcast map. It may seem like a JUnit test, but it uses custom annotations to define methods for different test phases (e.g. setup, warmup, run, verify).  - **TestSuite** -  A property file that contains the name of the test class and the properties you want to set on that test class instance. In most cases, a `TestSuite` contains a single test class, but you can configure multiple tests within a single `TestSuite`.  - **Failure** -  An indication that something has gone wrong. Failures are picked up by the `Agent` and sent back to the `Coordinator`. Please see below for the descriptions of the `Agent` and `Coordinator`.  - **Worker** - A Java Virtual Machine (JVM) responsible for running a `TestSuite`. It can be configured to spawn a Hazelcast client or server instance.  - **Agent** - A JVM installed on a piece of hardware. Its main responsibility is spawning, monitoring and terminating `Workers`.  - **Coordinator** -  A JVM that can run anywhere, e.g. on your local machine. It is actually responsible for running the test using the `Agents`. You configure it with a list of `Agent` IP addresses and send a command like \&quot;run this testsuite with 10 worker JVMs for 2 hours\&quot;.  - **Provisioner** -  It is responsible for spawning and terminating cloud instances and installing `Agents` on the remote machines. It can be used in combination with EC2 (or any other cloud), but it can also be used in a static setup like a local machine or a cluster of machines in your data center.  - **Communicator** -  A JVM that enables the communication between the `Agents` and `Workers`.  - `simulator.properties` - The configuration file used to adapt the Hazelcast Simulator to your business needs (e.g. cloud selection and configuration). "
});



documentTitles["installingsimulator.html#installing-simulator"] = "Installing Simulator";
index.add({
    url: "installingsimulator.html#installing-simulator",
    title: "Installing Simulator",
    body: "## Installing Simulator  Hazelcast Simulator needs a Unix shell to run. So ensure your local and remote machines are running under Unix, Linux or Mac OS. It may work with Windows using a Unix-like environment such as Cygwin, but is not officially supported at the moment.  "
});

documentTitles["installingsimulator.html#firewall-settings"] = "Firewall settings";
index.add({
    url: "installingsimulator.html#firewall-settings",
    title: "Firewall settings",
    body: "### Firewall settings  Please ensure that all remote machines are reachable via TCP ports 22, 9000 and 5701 to 5751 on their external network interface (e.g. `eth0`). The first two ports are used by Hazelcast Simulator. The other ports are used by Hazelcast itself. Port 9001 is used on the loopback device on all remote machines for local communication.  ![](images/simulator/network.png)  "
});

documentTitles["installingsimulator.html#setup-of-local-machine-coordinator"] = "Setup of local machine (Coordinator)";
index.add({
    url: "installingsimulator.html#setup-of-local-machine-coordinator",
    title: "Setup of local machine (Coordinator)",
    body: "### Setup of local machine (Coordinator)  Hazelcast Simulator is provided as a separate downloadable package, in `zip` or `tar.gz` format. You can download the either one [here](http://www.hazelcast.org/download).  After the download is completed, follow the below steps.  - Unpack the `tar.gz` or `zip` file to a directory which you prefer to be the home directory of Hazelcast Simulator. It extracts with the name `hazelcast-simulator-&lt;`*version*`&gt;` into this directory. Do this also to update Hazelcast Simulator (skip the following steps if you are updating).  - Add the following lines to the file `~/.bashrc` (for Unix/Linux) or to the file `~/.profile` (for Mac OS).  ``` export SIMULATOR_HOME=&lt;extracted directory path&gt;/hazelcast-simulator-&lt;version&gt; PATH=$SIMULATOR_HOME/bin:$PATH ```  - Create a working directory for your Simulator `TestSuite` (`tests` is an example name in the following commands).  ``` mkdir ~/tests ```  - Copy the `simulator.properties` to your working directory.  ``` cp $SIMULATOR_HOME/conf/simulator.properties ~/tests ```  "
});

documentTitles["installingsimulator.html#setup-of-remote-machines-agents-workers"] = "Setup of remote machines (Agents, Workers)";
index.add({
    url: "installingsimulator.html#setup-of-remote-machines-agents-workers",
    title: "Setup of remote machines (Agents, Workers)",
    body: "### Setup of remote machines (Agents, Workers)  Having installed Hazelcast Simulator as described in the previous section, make sure you create a user on the remote machines you want to run `Agents` and `Workers` on. The default username used by Hazelcast Simulator is `simulator`. You can change this in the `simulator.properties` file in your working directory.  Please ensure that you can connect to the remote machines with the configured username and without password authentication (see the next section). The [Provisioner](#provisioner) terminates when it needs to access the remote machines and cannot connect automatically.  "
});

documentTitles["installingsimulator.html#setup-of-publicprivate-key-pair"] = "Setup of public/private key pair";
index.add({
    url: "installingsimulator.html#setup-of-publicprivate-key-pair",
    title: "Setup of public/private key pair",
    body: "### Setup of public/private key pair  The preferred way for password free authentication is the usage of an RSA (Rivest,Shamir and Adleman cryptosystem) public/private key pair. The usage of the RSA key should not require to enter the pass-phrase manually. A key with pass-phrase and ssh-agent-forwarding is strongly recommended, but a key without pass-phrase also works.  "
});

documentTitles["installingsimulator.html#local-machine-coordinator"] = "Local machine (Coordinator)";
index.add({
    url: "installingsimulator.html#local-machine-coordinator",
    title: "Local machine (Coordinator)",
    body: "#### Local machine (Coordinator)  Make sure you have the files `id_rsa.pub` and `id_rsa` in your local `~/.ssh` directory.  If you do not have the RSA keys, you can generate a public/private key pair using the following command.  ``` ssh-keygen -t rsa -C \&quot;your_email@example.com\&quot; ```  Press `[Enter]` for all questions. The value for the e-mail address is not relevant in this case. After you execute this command, you should have the files `id_rsa.pub` and `id_rsa` in your `~/.ssh` directory.  "
});

documentTitles["installingsimulator.html#remote-machines-agents-workers"] = "Remote machines (Agents, Workers)";
index.add({
    url: "installingsimulator.html#remote-machines-agents-workers",
    title: "Remote machines (Agents, Workers)",
    body: "#### Remote machines (Agents, Workers)  Please ensure you have appended the public key (`id_rsa.pub`) to the `~/.ssh/authorized_keys` file on all remote machines (`Agents` and `Workers`). You can  copy the public key to all your remote machines using the following command.  ``` ssh-copy-id -i ~/.ssh/id_rsa.pub simulator@remote-ip-address ```  "
});

documentTitles["installingsimulator.html#ssh-connection-test"] = "SSH connection test";
index.add({
    url: "installingsimulator.html#ssh-connection-test",
    title: "SSH connection test",
    body: "#### SSH connection test  You can check if the connection works as expected using the following command from the `Coordinator` machine (will print `ok` if everything is fine).  ``` ssh -o BatchMode=yes simulator@remote-ip-address \&quot;echo ok\&quot; 2&gt;&amp;1 ``` "
});



documentTitles["settingupforec2.html#setting-up-for-amazon-ec2"] = "Setting Up For Amazon EC2";
index.add({
    url: "settingupforec2.html#setting-up-for-amazon-ec2",
    title: "Setting Up For Amazon EC2",
    body: "## Setting Up For Amazon EC2  Having installed it, this section describes how to prepare the Simulator for testing a Hazelcast cluster deployed at Amazon EC2.   To do this, you need to copy the file `SIMULATOR_HOME/conf/simulator.properties` to your working directory and edit this file. You should set the values for the following parameters included in this file.  - CLOUD_PROVIDER: Maven artifact ID of the cloud provider. In this case it is `aws-ec2` for Amazon EC2. Please refer to the [Simulator.Properties File Description section](#simulator-properties-file-description) for a full list of cloud providers. - CLOUD_IDENTITY: The path to the file that contains your EC2 access key.  - CLOUD_CREDENTIAL: The path to the file that contains your EC2 secret key.  - MACHINE_SPEC: The parameter by which you can specify the EC2 instance type, operating system of the instance, EC2 region, etc.   The following is an example of a `simulator.properties` file with the parameters explained above.   ``` CLOUD_PROVIDER=aws-ec2 CLOUD_IDENTITY=~/ec2.identity CLOUD_CREDENTIAL=~/ec2.credential MACHINE_SPEC=hardwareId=c3.xlarge,imageId=us-east-1/ami-1b3b2472 ```  For the above example, you should have created the files `~/ec2.identity` and `~/ec2.credential` that contain your EC2 access key and secret key, respectively.   ![image](images/NoteSmall.jpg) ***NOTE***: *Creating these files instead of just setting the access and secret keys in the `simulator.properties` file is for security reasons. It is too easy to share your credentials with the outside world and now you can safely add the `simulator.properties` file in your source repository or share it with other people.*  ![image](images/NoteSmall.jpg) ***NOTE***: *For the full description of `simulator.properties` file, please refer to the [Simulator.Properties File Description section](#simulator-properties-file-description).*   "
});



documentTitles["settingupforgce.html#setting-up-for-google-compute-engine"] = "Setting Up For Google Compute Engine";
index.add({
    url: "settingupforgce.html#setting-up-for-google-compute-engine",
    title: "Setting Up For Google Compute Engine",
    body: "## Setting Up For Google Compute Engine  To prepare the Simulator for testing a Hazelcast cluster deployed at Google Compute Engine (GCE), first you need an e-mail address to be used as a GCE service account. You can obtain this e-mail address in the Admin GUI console of GCE. In this console, select **Credentials** in the menu **API &amp;  Auth**. Then, click the **Create New Client ID** button and select **Service Account**. Usually, this e-mail address is in this form: `&lt;your account ID&gt;@developer.gserviceaccount.com`.  Save the **p12** keystore file that you obtained while creating your Service Account. Run the `setupGce.sh` script that is in the `bin` folder of your Hazelcast Simulator package you downloaded. Of course, you need to edit the content of this script file and specify the following parameters:  - GCE_id: Your developer e-mail address you obtained in the Admin GUI console of GCE. - p12File: The path to your p12 file you saved while you were obtaining your developer e-mail address.   After you edit and run the `setupGce.sh` script, the `simulator.properties` file that is needed for a proper testing of your instances on GCE is created in the `conf` folder of Hazelcast Simulator. "
});



documentTitles["settingupmachinesmanually.html#setting-up-machines-manually"] = "Setting Up Machines Manually";
index.add({
    url: "settingupmachinesmanually.html#setting-up-machines-manually",
    title: "Setting Up Machines Manually",
    body: "## Setting Up Machines Manually  You may want to set up Hazelcast Simulator on the environments different than your clusters placed on a cloud such as your local machines, test laboratory, etc. In this case, perform the following steps.  1. Copy the `STABILIZER_HOME/conf/simulator.properties` to your working directory.  2. Edit the `USER` in the `simulator.properties` file if you want to use a different user name than `simulator`.  3. Create an RSA key pair or use an existing one. The usage of the key should not require to enter the pass-phrase manually. A key with pass-phrase and ssh-agent-forwarding is strongly recommended, but a key without a pass-phrase will also work.   You can check whether a key pair exists with this command:   ```  ls -al ~/.ssh  ```  If it does not exist, you can create a key pair on the client machine with this command:   ```  ssh-keygen -t rsa  ```    You will get a few more questions:   	* Enter file in which to save the key (/home/demo/.ssh/id_rsa):  	* Enter passphrase (empty for no passphrase): (It is optional)  4. Copy the public key into the `~/.ssh/authorized_keys` file on the remote machines with this command:   ```  ssh-copy-id user@123.45.56.78  ```  5. Create the `agents.txt` file and add the IP addresses of the machines. The content of the `agents.txt` file with the IP addresses added looks like the following:   ```  98.76.65.54  10.28.37.46  ```  6. Run the command `provisioner --restart` to verify.   ![image](images/NoteSmall.jpg) ***NOTE***: *For the full description of `simulator.properties` file, please refer to the [Simulator.Properties File Description section](#simulator-properties-file-description).*   "
});



documentTitles["executingasimulatortest.html#executing-a-simulator-test"] = "Executing a Simulator Test";
index.add({
    url: "executingasimulatortest.html#executing-a-simulator-test",
    title: "Executing a Simulator Test",
    body: "## Executing a Simulator Test  After you install and prepare the Hazelcast Simulator for your environment, it is time to perform a test.  The following steps wrap up the whole procedure for executing a Hazelcast Simulator test.  1. Install the Hazelcast Simulator. 2. Create a directory for your tests, let's call it as the working directory. 3. Copy the `simulator.properties` file from the `/conf` directory of Hazelcast Simulator to your working directory. 4. Edit the `simulator.properties` file according to your needs. 5. Copy the `test.properties` file from the `/simulator-tests` directory of Hazelcast Simulator to your working directory. 6. Edit the `test.properties` file according to your needs. 5. Execute the `run.sh` script while you are in your working directory to perform your Simulator test.  In the following sections, we provide an example test and its output along with the required file (`simulator.properties` and `test.properties`) edits.  "
});

documentTitles["executingasimulatortest.html#an-example-simulator-test"] = "An Example Simulator Test";
index.add({
    url: "executingasimulatortest.html#an-example-simulator-test",
    title: "An Example Simulator Test",
    body: "### An Example Simulator Test  The following example test performs `put` and `get` operations on a Hazelcast Map and verifies the key-value ownership, and also prints the size of the map.  ``` import com.hazelcast.core.HazelcastInstance; import com.hazelcast.core.IMap; import com.hazelcast.logging.ILogger; import com.hazelcast.logging.Logger; import com.hazelcast.simulator.test.TestContext; import com.hazelcast.simulator.test.TestRunner; import com.hazelcast.simulator.test.annotations.*; import com.hazelcast.simulator.worker.selector.OperationSelectorBuilder; import com.hazelcast.simulator.worker.tasks.AbstractWorker;  import static junit.framework.TestCase.assertEquals;  public class ExampleTest {      private enum Operation {         PUT,         GET     }      private static final ILogger log = Logger.getLogger(ExampleTest.class);      //properties     public double putProb = 0.5;     public int maxKeys = 1000;      private TestContext testContext;     private IMap map;      private OperationSelectorBuilder&lt;Operation&gt; operationSelectorBuilder = new OperationSelectorBuilder&lt;Operation&gt;();      @Setup     public void setup(TestContext testContext) throws Exception {         log.info(\&quot;======== SETUP =========\&quot;);         this.testContext = testContext;         HazelcastInstance targetInstance = testContext.getTargetInstance();         map = targetInstance.getMap(\&quot;exampleMap\&quot;);          log.info(\&quot;Map name is:\&quot; + map.getName());          operationSelectorBuilder.addOperation(Operation.PUT, putProb).addDefaultOperation(Operation.GET);     }      @Warmup     public void warmup() {         log.info(\&quot;======== WARMUP =========\&quot;);         log.info(\&quot;Map size is:\&quot; + map.size());     }      @Verify     public void verify() {         log.info(\&quot;======== VERIFYING =========\&quot;);         log.info(\&quot;Map size is:\&quot; + map.size());          for (int i = 0; i &lt; maxKeys; i++) {             assertEquals(map.get(i), \&quot;value\&quot; + i);         }     }      @Teardown     public void teardown() throws Exception {         log.info(\&quot;======== TEAR DOWN =========\&quot;);         map.destroy();         log.info(\&quot;======== THE END =========\&quot;);     }      @RunWithWorker     public AbstractWorker&lt;Operation&gt; createWorker() {         return new Worker();     }      private class Worker extends AbstractWorker&lt;Operation&gt; {          public Worker() {             super(operationSelectorBuilder);         }          @Override         protected void timeStep(Operation operation) {             int key = randomInt(maxKeys);             switch (operation) {                 case PUT:                     map.put(key, \&quot;value\&quot; + key);                     break;                 case GET:                     map.get(key);                     break;                 default:                     throw new UnsupportedOperationException(\&quot;Unknown operation\&quot; + operation);             }         }      }      public static void main(String[] args) throws Throwable {         ExampleTest test = new ExampleTest();         new TestRunner&lt;ExampleTest&gt;(test).run();     } } ```   "
});

documentTitles["executingasimulatortest.html#editing-simulatorproperties"] = "Editing `Simulator.Properties`";
index.add({
    url: "executingasimulatortest.html#editing-simulatorproperties",
    title: "Editing `Simulator.Properties`",
    body: "### Editing `Simulator.Properties`    In the case of Amazon EC2, you need to consider the following properties.  ``` CLOUD_IDENTITY=~/ec2.identity CLOUD_CREDENTIAL=~/ec2.credential ```  Create two text files in your home directory. The file `ec2.identity` should contain your access key and the file  `ec2.credential` should contain your secret key.   ***NOTE:*** *For a full description of the file `simulator.properties`, please see the [Simulator.Properties File Description section](#simulator-properties-file-description).*  "
});

documentTitles["executingasimulatortest.html#editing-testproperties"] = "Editing `test.properties`";
index.add({
    url: "executingasimulatortest.html#editing-testproperties",
    title: "Editing `test.properties`",
    body: "### Editing `test.properties`  You need to give the classpath of `Example` test in the file `test.properties` as shown below.   ``` class=yourgroupid.ExampleTest maxKeys=5000 putProb=0.4 ```  The property `class` defines the actual test case and the rest are the properties you want to bind in your test. If a property is not defined in this file, the default value of the property given in your test code is used. Please see the `properties` comment in the example code above.  You can also define multiple tests in the file `test.properties` as shown below.  ``` foo.class=yourgroupid.ExampleTest foo.maxKeys=5000  bar.class=yourgroupid.ExampleTest bar.maxKeys=5000  ```  This is useful if you want to run multiple tests sequentially, or tests in parallel using the `coordinator --parallel` option. Please see the [Coordinator section](#coordinator) for more information.  "
});

documentTitles["executingasimulatortest.html#running-the-test"] = "Running the Test";
index.add({
    url: "executingasimulatortest.html#running-the-test",
    title: "Running the Test",
    body: "### Running the Test  When you are in your working directory, execute the following command to start the test.   ``` ./run.sh ```  The script `run.sh` is for your convenience which gathers all commands used to perform a test in one script. The following is the content of this example `run.sh` script.  ``` #!/bin/bash  set -e  coordinator     --memberWorkerCount 2 \                 --workerVmOptions \&quot;-ea -server -Xms2G -Xmx2G -verbosegc -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -Xloggc:gc.log -XX:+HeapDumpOnOutOfMemoryError\&quot; \                 --hzFile            hazelcast.xml \                 --clientWorkerCount 2 \                 --clientWorkerVmOptions \&quot;-ea -server -Xms2G -Xmx2G -verbosegc -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -Xloggc:gc.log -XX:+HeapDumpOnOutOfMemoryError\&quot; \                 --clientHzFile      client-hazelcast.xml \                 --workerClassPath   '../target/*.jar' \                 --duration          5m \                 --monitorPerformance \                 test.properties  provisioner --download ```  This script performs the following.   * Start 4 EC2 instances, install Java and the agents.  * Upload your JARs, run the test using a 2 node test cluster and 2 client machines (the clients generate the load).     This test runs for 2 minutes. After it is completed, the artifacts (log files) are downloaded in the `workers` directory. Then, it terminates the 4 instances. If you do not want to start/terminate the instances for every run, just comment out the line `provisioner --terminate` in the script `run.sh`. This prevents the machines from being terminated. Please see the [Provisioner section](#provisioner) for more information.  &lt;br&gt;&lt;/br&gt; ***RELATED INFORMATION***  *Please see the [Provisioner section](#provisioner) and the [Coordinator section](#coordinator) for the `provisioner` and `coordinator` commands you see in the script `run.sh`.* &lt;br&gt;&lt;/br&gt;  The output of the test looks like the following.  ``` INFO  08:40:10 Hazelcast Simulator Provisioner INFO  08:40:10 Version: 0.3, Commit: 2af49f0, Build Time: 13.07.2014 @ 08:37:06 EEST INFO  08:40:10 SIMULATOR_HOME: /home/alarmnummer/hazelcast-simulator-0.3 INFO  08:40:10 Loading simulator.properties: /tmp/yourproject/workdir/simulator.properties INFO  08:40:10 ============================================================== INFO  08:40:10 Provisioning 4 aws-ec2 machines INFO  08:40:10 ============================================================== INFO  08:40:10 Current number of machines: 0 INFO  08:40:10 Desired number of machines: 4 INFO  08:40:10 GroupName: simulator-agent INFO  08:40:10 JDK spec: oracle 7 INFO  08:40:10 Hazelcast version-spec: outofthebox INFO  08:40:12 Created compute INFO  08:40:12 Machine spec: hardwareId=m3.medium,locationId=us-east-1,imageId=us-east-1/ami-fb8e9292 INFO  08:40:19 Security group: 'simulator' is found in region 'us-east-1' INFO  08:40:27 Created template INFO  08:40:27 Loginname to the remote machines: simulator INFO  08:40:27 Creating machines (can take a few minutes) INFO  08:42:10 	54.91.98.103 LAUNCHED INFO  08:42:10 	54.237.144.164 LAUNCHED INFO  08:42:10 	54.196.60.36 LAUNCHED INFO  08:42:10 	54.226.58.200 LAUNCHED INFO  08:42:24 	54.196.60.36 JAVA INSTALLED INFO  08:42:25 	54.237.144.164 JAVA INSTALLED INFO  08:42:27 	54.91.98.103 JAVA INSTALLED INFO  08:42:30 	54.226.58.200 JAVA INSTALLED INFO  08:42:57 	54.196.60.36 SIMULATOR AGENT INSTALLED INFO  08:42:59 	54.237.144.164 SIMULATOR AGENT INSTALLED INFO  08:43:01 	54.196.60.36 SIMULATOR AGENT STARTED INFO  08:43:02 	54.237.144.164 SIMULATOR AGENT STARTED INFO  08:43:06 	54.91.98.103 SIMULATOR AGENT INSTALLED INFO  08:43:09 	54.91.98.103 SIMULATOR AGENT STARTED INFO  08:43:21 	54.226.58.200 SIMULATOR AGENT INSTALLED INFO  08:43:25 	54.226.58.200 SIMULATOR AGENT STARTED INFO  08:43:25 Duration: 00d 00h 03m 15s INFO  08:43:25 ============================================================== INFO  08:43:25 Successfully provisioned 4 aws-ec2 machines INFO  08:43:25 ============================================================== INFO  08:43:25 Pausing for Machine Warm up... (10 sec) INFO  08:43:36 Hazelcast Simulator Coordinator INFO  08:43:36 Version: 0.3, Commit: 2af49f0, Build Time: 13.07.2014 @ 08:37:06 EEST INFO  08:43:36 SIMULATOR_HOME: /home/alarmnummer/hazelcast-simulator-0.3 INFO  08:43:36 Loading simulator.properties: /tmp/yourproject/workdir/simulator.properties INFO  08:43:36 Loading testsuite file: /tmp/yourproject/workdir/../conf/test.properties INFO  08:43:36 Loading Hazelcast configuration: /tmp/yourproject/workdir/../conf/hazelcast.xml INFO  08:43:36 Loading Hazelcast client configuration: /tmp/yourproject/workdir/../conf/client-hazelcast.xml INFO  08:43:36 Loading agents file: /tmp/yourproject/workdir/agents.txt INFO  08:43:36 -------------------------------------------------------------- INFO  08:43:36 Waiting for agents to start INFO  08:43:36 -------------------------------------------------------------- INFO  08:43:36 Connect to agent 54.91.98.103 OK INFO  08:43:37 Connect to agent 54.237.144.164 OK INFO  08:43:37 Connect to agent 54.196.60.36 OK INFO  08:43:37 Connect to agent 54.226.58.200 OK INFO  08:43:37 -------------------------------------------------------------- INFO  08:43:37 All agents are reachable! INFO  08:43:37 -------------------------------------------------------------- INFO  08:43:37 Performance monitor enabled: false INFO  08:43:37 Total number of agents: 4 INFO  08:43:37 Total number of Hazelcast member workers: 2 INFO  08:43:37 Total number of Hazelcast client workers: 2 INFO  08:43:37 Total number of Hazelcast mixed client &amp; member workers: 0 INFO  08:43:38 Copying workerClasspath '../target/*.jar' to agents INFO  08:43:49 Finished copying workerClasspath '../target/*.jar' to agents INFO  08:43:49 Starting workers INFO  08:44:03 Finished starting a grand total of 4 Workers JVM's after 14463 ms INFO  08:44:04 Starting testsuite: 1405230216265 INFO  08:44:04 Tests in testsuite: 1 INFO  08:44:05 Running time per test: 00d 00h 05m 00s  INFO  08:44:05 Expected total testsuite time: 00d 00h 05m 00s INFO  08:44:05 Running 1 tests sequentially INFO  08:44:05 -------------------------------------------------------------- Running Test :  TestCase{       id=     , class=yourgroupid.ExampleTest     , maxKeys=5000     , putProb=0.4 } -------------------------------------------------------------- INFO  08:44:06 Starting Test initialization INFO  08:44:07 Completed Test initialization INFO  08:44:08 Starting Test setup INFO  08:44:10 Completed Test setup INFO  08:44:11 Starting Test local warmup INFO  08:44:13 Completed Test local warmup INFO  08:44:14 Starting Test global warmup INFO  08:44:16 Completed Test global warmup INFO  08:44:16 Starting Test start INFO  08:44:18 Completed Test start INFO  08:44:18 Test will run for 00d 00h 05m 00s INFO  08:44:48 Running 00d 00h 00m 30s, 10.00 percent complete INFO  08:45:18 Running 00d 00h 01m 00s, 20.00 percent complete INFO  08:45:48 Running 00d 00h 01m 30s, 30.00 percent complete INFO  08:46:18 Running 00d 00h 02m 00s, 40.00 percent complete INFO  08:46:48 Running 00d 00h 02m 30s, 50.00 percent complete INFO  08:47:18 Running 00d 00h 03m 00s, 60.00 percent complete INFO  08:47:48 Running 00d 00h 03m 30s, 70.00 percent complete INFO  08:48:18 Running 00d 00h 04m 00s, 80.00 percent complete INFO  08:48:48 Running 00d 00h 04m 30s, 90.00 percent complete INFO  08:49:18 Running 00d 00h 05m 00s, 100.00 percent complete INFO  08:49:19 Test finished running INFO  08:49:19 Starting Test stop INFO  08:49:22 Completed Test stop INFO  08:49:22 Starting Test global verify INFO  08:49:25 Completed Test global verify INFO  08:49:25 Starting Test local verify INFO  08:49:28 Completed Test local verify INFO  08:49:28 Starting Test global tear down INFO  08:49:31 Finished Test global tear down INFO  08:49:31 Starting Test local tear down INFO  08:49:34 Completed Test local tear down INFO  08:49:34 Terminating workers INFO  08:49:35 All workers have been terminated INFO  08:49:35 Starting cool down (10 sec) INFO  08:49:45 Finished cool down INFO  08:49:45 Total running time: 340 seconds INFO  08:49:45 ----------------------------------------------------------------------------- INFO  08:49:45 No failures have been detected! INFO  08:49:45 ----------------------------------------------------------------------------- INFO  08:49:46 Hazelcast Simulator Provisioner INFO  08:49:46 Version: 0.3, Commit: 2af49f0, Build Time: 13.07.2014 @ 08:37:06 EEST INFO  08:49:46 SIMULATOR_HOME: /home/alarmnummer/hazelcast-simulator-0.3 INFO  08:49:46 Loading simulator.properties: /tmp/yourproject/workdir/simulator.properties INFO  08:49:46 ============================================================== INFO  08:49:46 Download artifacts of 4 machines INFO  08:49:46 ============================================================== INFO  08:49:46 Downloading from 54.91.98.103 INFO  08:49:49 Downloading from 54.237.144.164 INFO  08:49:51 Downloading from 54.196.60.36 INFO  08:49:53 Downloading from 54.226.58.200 INFO  08:49:56 ============================================================== INFO  08:49:56 Finished Downloading Artifacts of 4 machines INFO  08:49:56 ============================================================== INFO  08:49:56 Hazelcast Simulator Provisioner INFO  08:49:56 Version: 0.3, Commit: 2af49f0, Build Time: 13.07.2014 @ 08:37:06 EEST INFO  08:49:56 SIMULATOR_HOME: /home/alarmnummer/hazelcast-simulator-0.3 INFO  08:49:56 Loading simulator.properties: /tmp/yourproject/workdir/simulator.properties INFO  08:49:56 ============================================================== INFO  08:49:56 Terminating 4 aws-ec2 machines (can take some time) INFO  08:49:56 ============================================================== INFO  08:49:56 Current number of machines: 4 INFO  08:49:56 Desired number of machines: 0 INFO  08:50:29 	54.196.60.36 Terminating INFO  08:50:29 	54.237.144.164 Terminating INFO  08:50:29 	54.226.58.200 Terminating INFO  08:50:29 	54.91.98.103 Terminating INFO  08:51:16 Updating /tmp/yourproject/workdir/agents.txt INFO  08:51:16 Duration: 00d 00h 01m 20s INFO  08:51:16 ============================================================== INFO  08:51:16 Finished terminating 4 aws-ec2 machines, 0 machines remaining. INFO  08:51:16 ============================================================== ```  "
});

documentTitles["executingasimulatortest.html#using-maven-archetypes"] = "Using Maven Archetypes";
index.add({
    url: "executingasimulatortest.html#using-maven-archetypes",
    title: "Using Maven Archetypes",
    body: "### Using Maven Archetypes  Alternatively, you can execute tests using the Simulator archetype. Please see the following:  ``` mvn archetype:generate  \     -DarchetypeGroupId=com.hazelcast.simulator \     -DarchetypeArtifactId=archetype \     -DarchetypeVersion=0.3 \     -DgroupId=yourgroupid  \     -DartifactId=yourproject ```  This will create fully working Simulator project including the test having `yourgroupid`.   1. After this project is generated, go to the created directory and run the following command.     ``` mvn clean install    ```  2. Then, go to your working directory.      ``` cd &lt;working directory&gt;    ```   3. Edit the `simulator.properties` file as explained in the [Editing the Simulator.Properties File section](#editing-the-simulator-properties-file).   4. Run the test from your working directory using the following command.     ``` ./run.sh    ```  The output is the same as shown in the [Running the Test section](#running-the-test)."
});



documentTitles["provisioner.html#provisioner"] = "Provisioner";
index.add({
    url: "provisioner.html#provisioner",
    title: "Provisioner",
    body: "## Provisioner  The provisioner is responsible for provisioning (starting/stopping) instances in a cloud. It will start an Operating System instance, install Java, open firewall ports and install Simulator Agents.  The behavior of the cluster like cloud, operating system, hardware, JVM version, Hazelcast version or region can be configured through the file `simulator.properties`. Please see the [Simulator.Properties File Description section](#simulator-properties-file-description) for more information.   The following are the arguments you can use with the `provisioner`.  To start a cluster:  ``` provisioner --scale 1 ```  To scale to 2 member cluster:  ``` provisioner --scale 2 ```  To scale back to 1 member cluster:  ``` provisioner --scale 1 ```  To terminate all members in the cluster:  ``` provisioner --terminate ```  or  ``` provisioner --scale 0 ```  If you want to restart all agents and also upload the newest JARs to the machines:  ``` provisioner --restart ```  To download all the worker home directories (containing logs and whatever has been put inside):  ``` provisioner --download ``` This command is also useful if you added a profiling so that the profiling information is downloaded and when an out of memory exception is thrown so you can download the heap dump.   To remove all the worker home directories  ``` provisioner --clean ```  "
});

documentTitles["provisioner.html#accessing-the-provisioned-machine"] = "Accessing the Provisioned Machine";
index.add({
    url: "provisioner.html#accessing-the-provisioned-machine",
    title: "Accessing the Provisioned Machine",
    body: "### Accessing the Provisioned Machine  When a machine is provisioned, by default a user with the name `simulator` is created on the remote machine and added to the sudousers list. Also, the public key of your local user is copied to the remote machine and added to the file  `~/.ssh/authorized_keys`. You can login to that machine using the following command.  ``` ssh stabilizer@ip ```  You can change the name of the created user to something else by setting the `USER=&lt;somename&gt;` property in the file `simulator.properties`. Be careful not to pick a name that is used on the target image, e.g. if you use `ec2-user/ubuntu`, and the default user of that image is `ec2-user/ubuntu`, then you can run into authentication problems."
});



documentTitles["coordinator.html#coordinator"] = "Coordinator";
index.add({
    url: "coordinator.html#coordinator",
    title: "Coordinator",
    body: "## Coordinator  The Coordinator is responsible for actually running the test using the agents.  You can deploy your test on the workers using the following command.  ``` coordinator yourtest.properties. ```  This creates a single worker per agent and runs the test for 60 seconds. This is the default duration for a Hazelcast Simulator test.  If your test properties file is called `test.properties`, then the coordinator picks it up automatically, using just the command `coordinator`.   "
});

documentTitles["coordinator.html#controlling-hazelcast-declarative-configuration"] = "Controlling Hazelcast Declarative Configuration";
index.add({
    url: "coordinator.html#controlling-hazelcast-declarative-configuration",
    title: "Controlling Hazelcast Declarative Configuration",
    body: "### Controlling Hazelcast Declarative Configuration  By default, the coordinator makes use of the files `SIMULATOR_HOME/conf/hazelcast.xml` and `SIMULATOR_HOME/conf/client-hazelcast.xml` to generate the correct Hazelcast configuration. You can use your own configuration by overriding these files using the following arguments:  ``` coordinator --clientHzFile=your-client-hazelcast.xml --hzFile your-hazelcast.xml .... ```    "
});

documentTitles["coordinator.html#controlling-test-duration"] = "Controlling Test Duration";
index.add({
    url: "coordinator.html#controlling-test-duration",
    title: "Controlling Test Duration",
    body: "### Controlling Test Duration  The duration of a single test can be controlled using the `--duration` argument. The default duration is 60 seconds. However, you can specify your own durations using *m* for minutes, *d* for days or *s* for seconds with this argument.  You can see the usage of the `--duration` argument in the following example commands.  ``` coordinator --duration 90s  map.properties ```  ``` coordinator --duration 3m  map.properties ```  ``` coordinator --duration 12h  map.properties ```  ``` coordinator --duration 2d  map.properties ```  "
});

documentTitles["coordinator.html#controlling-client-and-workers"] = "Controlling Client And Workers";
index.add({
    url: "coordinator.html#controlling-client-and-workers",
    title: "Controlling Client And Workers",
    body: "### Controlling Client And Workers  By default, the provisioner starts the cluster members. You can also use `--memberWorkerCount` and `--clientWorkerCount` arguments to control how many members and clients you want to have. Please see the following example command.    ``` coordinator --memberWorkerCount 4 --clientWorkerCount 8 --duration 12h  map.properties ```  The above command creates a 4 node Hazelcast cluster and 8 clients, and all load will be generated through the clients. It also runs the `map.properties` test for a duration of 12 hours.   One of the suggestions is that currently the profiles are configured with X clients and Y servers.  If you want to have members and no clients:  ``` coordinator --memberWorkerCount 12  --duration 12h  map.properties ```  If you want to have a JVM with embedded client plus member and all communication goes through the client:  ``` coordinator --mixedWorkerCount 12  --duration 12h  map.properties ```  If you want to run 2 member JVMs per machine:  ``` coordinator --memberWorkerCount 24  --duration 12h  map.properties ```  As you notice, you can play with the actual deployment."
});



documentTitles["communicator.html#communicator"] = "Communicator";
index.add({
    url: "communicator.html#communicator",
    title: "Communicator",
    body: "## Communicator  Communicator enables message passing to Agents, Workers and Tests. You can use messages to simulate various conditions such as network partitioning, high CPU utilization and generally create a discomfort for Hazelcast.  "
});

documentTitles["communicator.html#example"] = "Example";
index.add({
    url: "communicator.html#example",
    title: "Example",
    body: "### Example  ``` $ communicator --message-address Agent=*,Worker=* spinCore ``` This will send a message `spinCore` to all Workers.   Each interaction with Communicator has to specify:  - Message Type - Message Address  "
});

documentTitles["communicator.html#message-types"] = "Message Types";
index.add({
    url: "communicator.html#message-types",
    title: "Message Types",
    body: "### Message Types  - `kill` - Kills a JVM running a message recipient. In practice, you probably want to send this message to Worker(s) only as you rarely want to kill an Agent and it does not make sense to send this to just a single test - it would kill other tests sharing the same JVM as well. - `blockHzTraffic` - Blocks the incoming traffic to TCP port range 5700:5800. - `newMember` - Starts a new member. You can send this message to Agents only. - `softKill` - Instructs a JVM running a message recipient to exit. - `spinCore` - Starts a new busy-spinning thread. You can use it to simulate increased CPU consumption. - `unblockTraffic` - Open ports blocked by the `blockHzTraffic` message. - `oom` - Forces a message recipient use all memory and cause OutOfMemoryError. - `terminateWorker` - Terminates a random Worker. This message type can be targeted to an Agent only.  "
});

documentTitles["communicator.html#message-addressing"] = "Message Addressing";
index.add({
    url: "communicator.html#message-addressing",
    title: "Message Addressing",
    body: "### Message Addressing  You can send a message to Agent, Worker or Test. These resources create a naturally hierarchy hence the messaging address is hierarchical as well.  Syntax: `Agent=&lt;mode&gt;[,Worker=&lt;mode&gt;[,Test=&lt;mode&gt;]]`.  Mode can be either '*' for broadcast or 'R' for a single random destination.  **Addressing Example 1:**  `Agent=*,Worker=R`: A message will be routed to all agents and then each agent will pass it to a single random worker for processing.  **Addressing Example 2:**  `Agent=*,Worker=R,Test=*`: A message will be routed to all agents, then each agent will pass the message to a single random worker and workers will pass the message to all tests for processing.  "
});

documentTitles["communicator.html#addressing-shortcuts"] = "Addressing shortcuts";
index.add({
    url: "communicator.html#addressing-shortcuts",
    title: "Addressing shortcuts",
    body: "#### Addressing shortcuts  Hierarchical addressing is powerful, but it can be quite verbose. Therefore, there are convenient shortcuts you can use as shown below.  - `--oldest-member`: Sends a message to a worker with the oldest cluster member. - `--random-agent`: Sends a message to a random agent. - `--random-worker`: Sends a message to a random worker.  **Example:** The following command starts a busy-spinning thread in a JVM running a random Worker.  ``` communicator --random-worker spinCore ```  "
});



documentTitles["performanceandbenchmarking.html#performance-and-benchmarking"] = "Performance and Benchmarking";
index.add({
    url: "performanceandbenchmarking.html#performance-and-benchmarking",
    title: "Performance and Benchmarking",
    body: "## Performance and Benchmarking   Hazelcast Simulator can record throughput and latency while running a test. It uses the concept of probes. A probe can be injected into a test and it is a responsibility of the test to notify the probe about start/end of each action.  There are two classes of probes:  - `SimpleProbe`: It can be used to count the number of events. It does not have a notion of start/end. - `IntervalProbe`: Differentiates between start/end of an action. It can be used to measure latency.  The usage of probes is explained below.  1. Define a probe as a test property. Hazelcast Simulator will inject the appropriate probe implementation.     ``` public class IntIntMapTest {     private static final ILogger log = Logger.getLogger(IntIntMapTest.class);     private enum Operation {         PUT,         GET     }     [...]     // Probes will be injected by Hazelcast Simulator     public IntervalProbe intervalProbe;     public IntervalProbe anotherIntervalProbe;     public SimpleProbe simpleProbe;    ```  2. Use the probe in your test code.     ```     getLatency.started();     map.get(key);     getLatency.done();    ```  3. Configure the probe in your `test.properties` file.     ``` probe-intervalProbe=throughput probe-simpleProbe=throughput    ```  The configuration format is specified as `probe-&lt;nameOfField&gt;=&lt;type&gt;`. Please bare in mind this format is likely to change in the future versions.  There are currently following implementations of `IntervalProbe`:  - `latency`: Measures the latency distribution. - `maxLatency`: Records the highest latency. Unlike the previous probe, it records only the single highest latency measured, not a full distribution. - `hdr`: Same as latency, but it uses HdrHistogram under the hood. This will replace the latency probe in future versions of Simulator. - `disabled`: Dummy probe. It does not record anything.  There are two implementations of SimpleProbe:  - `throughput`: Measures throughput. - `disabled`: Dummy probe. It does not record anything.   It is important to understand that a class of a probe does not mandate what the probe is actually measuring. Therefore, the tests just know a class of probe, but they do not know if the probe generates, for example, a full latency histogram or just a maximum recorded latency. This is an implementation detail from a point of view of a test."
});



documentTitles["simulatorproperties.html#simulatorproperties-file-description"] = "Simulator.Properties File Description";
index.add({
    url: "simulatorproperties.html#simulatorproperties-file-description",
    title: "Simulator.Properties File Description",
    body: "## Simulator.Properties File Description  The file `simulator.properties` is placed at the `conf` folder of your Hazelcast Simulator. This file is used to prepare the Simulator tests for their proper executions according to your business needs.  ![](images/NoteSmall.jpg)***NOTE:*** *Currently, the main focuses are on the Simulator tests of Hazelcast on Amazon EC2 and Google Compute Engine (GCE). For the preparation of `simulator.properties` for GCE, please refer to the [Setting Up For GCE section](#setting-up-for-google-compute-engine). The following `simulator.properties` file description is mainly for Amazon EC2.*  This file includes the following parameters.  - `CLOUD_PROVIDER`: The Maven artifact ID of your cloud provider. For example, it is `aws-ec2` if you are going to test the Hazelcast on Amazon EC2. For the full list of supported clouds, please refer to [http://jclouds.apache.org/reference/providers/](http://jclouds.apache.org/reference/providers/). - `CLOUD_IDENTITY`: The full path of the file containing your AWS access key. - `CLOUD_CREDENTIAL`: The full path of the file containing your AWS secret key.  - `CLOUD_POLL_INITIAL_PERIOD`: The time in milliseconds between the requests (polls) from jclouds&amp;reg; to your cloud. Its default value is `50`. - `CLOUD_POLL_MAX_PERIOD`: The maximum time in milliseconds between the polls to your cloud. Its default value is `1000`. - `CLOUD_BATCH_SIZE`: The number of machines to be started/terminated in one go. For Amazon EC2, its acceptable value is `20`. - `GROUP_NAME`: The prefix for the agent name. You may want to give different names for different test clusters. For GCE, you need to be very careful using multiple group-names, since for every port and every group name, a firewall rule is made and you can only have 100 firewall rules. If the name contains `${username}`, this section will be replaced by the actual user that runs the test. This makes it very easy to identify which user owns a certain machine. - `USER`: The name of the user on your local machine. jclouds&amp;reg; automatically creates a new user on the remote machine with this name as the login name. It also copies the public key of your system to the remote machine and add it to the file `~/.ssh/authorized_keys`. Therefore, once the instance is created, you can login with the command `ssh &lt;USER&gt;@&lt;IP address&gt;`. Its default value is `simulator`. - `SSH_OPTIONS`: The options added to SSH. You do not need to change these options. - `SECURITY_GROUP`: The name of the security group that includes the instances created for the Simulator test. For Amazon EC2, this group will be created automatically if it does not exist. If you do not specify a region for the parameter `MACHINE_SPEC` (using the `locationId` attribute), the region will be `us-east-1`. If there is an already existing security group, please make sure the ports 22, 9000, 9001 and the ports between 5701 and 5751 are open. For GCE, this parameter is not used. - `SUBNET_ID`: The VPC Subnet ID for Amazon EC2. If this value is different from `default`, then the instances will be created in EC2 VPC and the parameter `SECURITY_GROUP` will be ignored. For GCE, this parameter is not used. - `MACHINE_SPEC`: Specifications of the instance to be created. You can specify attributes such as the operating system, Amazon Machine Image (AMI), hardware properties, EC2 instance type and EC2 region. Please see the [Setting Up For EC2 section](#setting-up-for-ec2) for an example `MACHINE-SPEC` value and please refer to the `TemplateBuilderSpec` class of the `org.jclouds.compute.domain` package at jclouds&amp;reg; JavaDoc for a full list of machine specifications. - `HAZELCAST_VERSION_SPEC`: The workers can be configured to use a specific version of Hazelcast. By this way, you do not need to depend on the Hazelcast version provided by the simulator. You can configure the Hazelcast version in one of the following ways: 	- `outofthebox`: This is the default value provided by the Simulator itself. 	- `maven=&lt;version&gt;`: Used to give a specific version from the maven repository (for examples, `maven=3.2`, `maven=3.3-SNAPSHOT`). Local Hazelcast artifacts will be preferred, so you can checkout, for example, an experimental branch and build the artifacts locally. This will all be done on the local machine, not on the agent machine. 	- `bringmyown`: Used to specify your own dependencies. For more information on the values, please see the `--workerClassPath` setting of the Controller. 	- `git=&lt;version&gt;`: If you want the Simulator to use a specific version of Hazelcast from GIT, you can use this parameter (for example, `git=f0288f713` to build a specific revision, or `git=v3.2.3` to build a version from a GIT tag, or `git=&lt;your repository&gt;/&lt;your branch&gt;` to build a version from a branch in a specific repository). Use the parameter `GIT_CUSTOM_REPOSITORIES` to specify custom repositories, explained below. The main Hazelcast repository is always named  as `origin`. - `GIT_BUILD_DIR`: When you set the parameter `HAZELCAST_VERSION_SPEC` to `git=&lt;version&gt;`, the Hazelcast sources will be downloaded to this directory. Its default value is `$HOME/.hazelcast-build/` - `GIT_CUSTOM_REPOSITORIES`: Comma separated list of additional GIT repositories to be fetched. Use this parameter when you set the parameter `HAZELCAST_VERSION_SPEC` to `git=&lt;version&gt;` and specify additional repositories. Hazelcast Simulator will always fetch the repository at [https://github.com/hazelcast/hazelcast](https://github.com/hazelcast/hazelcast). This parameter specifies additional repositories. You can use both remote and local repositories. Remote repositories must be accessible for anonymous and local repositories must be accessible for the current user. Its default value is empty. Only the main Hazelcast repository is used by default. - `MVN_EXECUTABLE`: This parameter specifies the path to a local Maven installation when you set the parameter `HAZELCAST_VERSION_SPEC` to `git=&lt;version&gt;`. Its default value is `/usr/bin/mvn`. - `JDK_FLAVOR`: Available flavors are `oracle`, `openjdk`, `ibm` and `outofthebox`. The last one is the one provided by the image so no software is installed by the Simulator. If you select a flavor different that `outofthebox`, for now, only only 64 bit JVMs are going to be installed. Therefore, make sure that your operating system is a 64 bit one.  - `JDK_64_BITS`: Specifies whether a 64 bit JVM should be installed or not. For now, only `true` is allowed. - `JDK_VERSION`: The version of Java to be installed. Oracle and IBM support 6,7, and 8. OpenJDK support 6 and 7. - `PROFILER`: The worker can be configured with a profiler. Available options are `none`, `yourkit`, `hprof`, `perf`, `vtune` and `flightrecorder`. The `yourkit` profiles only works on  64 bit Linux for now (there is no support for Windows or Mac). - `FLIGHTRECORDER_SETTINGS`: Includes the settings for the `flightrecorder` profiler. For options, please refer to [http://docs.oracle.com/cd/E15289_01/doc.40/e15062/optionxx.htm#BABIECII](http://docs.oracle.com/cd/E15289_01/doc.40/e15062/optionxx.htm#BABIECII). - `YOURKIT_SETTINGS`: Includes the settings for the `yourkit` profiler. When `yourkit` is enabled, a snapshot is created and put in the worker home directory. Therefore, when the artifacts are downloaded, the snapshots are included and can be loaded with your Yourkit GUI. Make sure that the path matches the JVM 32/64 bits. The files `libypagent.so`, which are included in the Simulator, are for YourKit Java Profiler 2013. For more information on the Yourkit setting, please see [http://www.yourkit.com/docs/java/help/agent.jsp](http://www.yourkit.com/docs/java/help/agent.jsp) and  [http://www.yourkit.com/docs/java/help/startup_options.jsp](http://www.yourkit.com/docs/java/help/startup_options.jsp). - `HPROF_SETTINGS`: Includes the settings for the `hprof` profiler, which is a part of the JDK. By default, the file `java.hprof.txt` is created in the worker directory. This file can be downloaded using the command `provisioner --download` after a test has run. For configuration options, please see [http://docs.oracle.com/javase/7/docs/technotes/samples/hprof.html](http://docs.oracle.com/javase/7/docs/technotes/samples/hprof.html). - `PERF_SETTINGS`: Includes the settings for the `perf` profiler, available only for Linux. For more information, please see [https://perf.wiki.kernel.org/index.php/Tutorial#Sampling_with_perf_record](https://perf.wiki.kernel.org/index.php/Tutorial#Sampling_with_perf_record). - `VTUNE_SETTINGS`: Includes the settings for the `vtune` profiler. It requires Intel VTune to be installed on the system. For more information, please see [https://software.intel.com/sites/products/documentation/doclib/iss/2013/amplifier/lin/ug_docs/GUID-09766DB6-3FA8-445B-8E70-5BC9A1BE7C55.htm#GUID-09766DB6-3FA8-445B-8E70-5BC9A1BE7C55](https://software.intel.com/sites/products/documentation/doclib/iss/2013/amplifier/lin/ug_docs/GUID-09766DB6-3FA8-445B-8E70-5BC9A1BE7C55.htm#GUID-09766DB6-3FA8-445B-8E70-5BC9A1BE7C55).  "
});



documentTitles["wan.html#wan"] = "WAN";
index.add({
    url: "wan.html#wan",
    title: "WAN",
    body: "# WAN  ![](images/enterprise-onlycopy.jpg)  "
});

documentTitles["wan.html#wan-replication"] = "WAN Replication";
index.add({
    url: "wan.html#wan-replication",
    title: "WAN Replication",
    body: "## WAN Replication  There are cases where you need to synchronize multiple clusters to the same state. Synchronization of clusters, also known as WAN (Wide Area Network) Replication, is mainly used for replicating stats of different clusters over WAN environments like the Internet.   Imagine you have different data centers in New York, London and Tokyo each running an independent Hazelcast cluster. Every cluster would be operating at native speed in their own LAN (Local Area Network) settings but you also want some or all recordsets in these clusters to be replicated to each other: updates to Tokyo cluster also go to London and New York, in the meantime updates from New York cluster are synchronized to Tokyo and London.  "
});

documentTitles["wan.html#configuring-wan-replication"] = "Configuring WAN Replication";
index.add({
    url: "wan.html#configuring-wan-replication",
    title: "Configuring WAN Replication",
    body: "### Configuring WAN Replication  The current WAN Replication implementation supports two different operation modes.  - **Active-Passive:** This mode is mostly used for failover scenarios where you want to replicate only one active cluster to one   or more non-active ones for backup reasons.  - **Active-Active:** Every cluster is fully equal and all clusters replicate to all others. This is normally used to connect   different clients to different clusters for the sake of the shortest path between client and server.  Let's see how we can set up WAN Replication for London and Tokyo clusters:  ```xml &lt;hazelcast&gt;   &lt;wan-replication name=\&quot;my-wan-cluster\&quot;&gt;     &lt;target-cluster group-name=\&quot;tokyo\&quot; group-password=\&quot;tokyo-pass\&quot;&gt;       &lt;replication-impl&gt;com.hazelcast.wan.impl.WanNoDelayReplication&lt;/replication-impl&gt;       &lt;end-points&gt;         &lt;address&gt;10.2.1.1:5701&lt;/address&gt;         &lt;address&gt;10.2.1.2:5701&lt;/address&gt;       &lt;/end-points&gt;     &lt;/target-cluster&gt;     &lt;target-cluster group-name=\&quot;london\&quot; group-password=\&quot;london-pass\&quot;&gt;       &lt;replication-impl&gt;com.hazelcast.wan.impl.WanNoDelayReplication&lt;/replication-impl&gt;       &lt;end-points&gt;         &lt;address&gt;10.3.5.1:5701&lt;/address&gt;         &lt;address&gt;10.3.5.2:5701&lt;/address&gt;       &lt;/end-points&gt;     &lt;/target-cluster&gt;   &lt;/wan-replication&gt;   ... &lt;/hazelcast&gt; ```  Using this configuration, the cluster running in New York is replicating to Tokyo and London. The Tokyo and London clusters should have a similar configurations if you want to run in Active-Active mode.  If the New York and London cluster configurations contain the `wan-replication` element and the Tokyo cluster does not, it means New York and London are active endpoints and Tokyo is a passive endpoint.  By using an Active-Active Replication setup, you might end up in situations where multiple clusters simultaneously update the same entry in the same distributed data structure. Those situations will cause conflicts, which makes it sufficient for you to provide merge-policies to resolve those conflicts.   ```xml &lt;hazelcast&gt;   &lt;wan-replication name=\&quot;my-wan-cluster\&quot;&gt;     &lt;merge-policy&gt;com.hazelcast.map.merge.PassThroughMergePolicy&lt;/merge-policy&gt;     ...   &lt;/wan-replication&gt;   ... &lt;/hazelcast&gt; ```  As noted earlier, you can have Hazelcast replicating only some or all of the data in your cluster. Imagine you have 5 different distributed maps but you might want only one of these maps replicating across clusters. To achieve this, you mark the maps to be replicated by adding the `wan-replication-ref` element in the map configuration as shown below.  ```xml &lt;hazelcast&gt;   &lt;wan-replication name=\&quot;my-wan-cluster\&quot;&gt;     ...   &lt;/wan-replication&gt;   &lt;map name=\&quot;my-shared-map\&quot;&gt;     &lt;wan-replication-ref name=\&quot;my-wan-cluster\&quot;&gt;     &lt;merge-policy&gt;com.hazelcast.map.merge.PassThroughMergePolicy&lt;/merge-policy&gt;       ...     &lt;/wan-replication-ref&gt;   &lt;/map&gt;   ... &lt;/hazelcast&gt; ```  You see that we have `my-shared-map` configured to replicate itself to the cluster targets defined in the earlier `wan-replication` element.  You will also have to define a `merge policy` for merging replica entries and resolving conflicts during the merge as mentioned before.  "
});

documentTitles["wan.html#wan-replication-queue-size"] = "WAN Replication Queue Size";
index.add({
    url: "wan.html#wan-replication-queue-size",
    title: "WAN Replication Queue Size",
    body: "### WAN Replication Queue Size For huge clusters or high data mutation rates, you might need to increase the replication queue size. The default queue size for replication queues is `100000`. This means, if you have heavy put/update/remove rates, you might exceed the queue size so that the oldest, not yet replicated, updates might get lost.   To increase the replication queue size, a Hazelcast Enterprise user can use the `hazelcast.enterprise.wanrep.queuesize` configuration property.  You can do this by setting the property on the command line (where xxx is the queue size):  ```plain -Dhazelcast.enterprise.wanrep.queuesize=xxx ```  or by setting the properties inside the `hazelcast.xml` (where xxx is the requested queue size):  ```xml &lt;hazelcast&gt;   &lt;properties&gt;     &lt;property name=\&quot;hazelcast.enterprise.wanrep.queuesize\&quot;&gt;xxx&lt;/property&gt;   &lt;/properties&gt; &lt;/hazelcast&gt; ```  "
});

documentTitles["wan.html#wan-replication-additional-information"] = "WAN Replication Additional Information";
index.add({
    url: "wan.html#wan-replication-additional-information",
    title: "WAN Replication Additional Information",
    body: "### WAN Replication Additional Information  ***RELATED INFORMATION***  _You can download the white paper **Hazelcast on AWS: Best Practices for Deployment** from [Hazelcast.com](http://hazelcast.com/resources/hazelcast-on-aws-best-practices-for-deployment/)._  &lt;br&gt;&lt;/br&gt;  ***RELATED INFORMATION***   *Please refer to the [WAN Replication Configuration section](#wan-replication-configuration) for a full description of Hazelcast WAN Replication configuration.*  "
});



documentTitles["configurationoverview.html#hazelcast-configuration"] = "Hazelcast Configuration";
index.add({
    url: "configurationoverview.html#hazelcast-configuration",
    title: "Hazelcast Configuration",
    body: "# Hazelcast Configuration  "
});

documentTitles["configurationoverview.html#configuration-overview"] = "Configuration Overview";
index.add({
    url: "configurationoverview.html#configuration-overview",
    title: "Configuration Overview",
    body: "## Configuration Overview  Hazelcast can be configured declaratively (XML) or programmatically (API) or even by the mix of both.  **1- Declarative Configuration**  If you are creating new Hazelcast instance with passing `null` parameter to `Hazelcast.newHazelcastInstance(null)` or just using empty factory method (`Hazelcast.newHazelcastInstance()`), Hazelcast will look into two places for the configuration file:  -   **System property:** Hazelcast will first check if \&quot;`hazelcast.config`\&quot; system property is set to a file path. Example: `-Dhazelcast.config=C:/myhazelcast.xml`.  -   **Classpath:** If config file is not set as a system property, Hazelcast will check classpath for `hazelcast.xml` file.  If Hazelcast does not find any configuration file, it will happily start with default configuration (`hazelcast-default.xml`) located in `hazelcast.jar`. (Before configuring Hazelcast, please try to work with default configuration to see if it works for you. Default should be just fine for most of the users. If not, then consider custom configuration for your environment.)  If you want to specify your own configuration file to create `Config`, Hazelcast supports several ways including filesystem, classpath, InputStream, URL, etc.:  -   `Config cfg = new XmlConfigBuilder(xmlFileName).build();`  -   `Config cfg = new XmlConfigBuilder(inputStream).build();`  -   `Config cfg = new ClasspathXmlConfig(xmlFileName);`  -   `Config cfg = new FileSystemXmlConfig(configFilename);`  -   `Config cfg = new UrlXmlConfig(url);`  -   `Config cfg = new InMemoryXmlConfig(xml);`    **2- Programmatic Configuration**  To configure Hazelcast programmatically, just instantiate a `Config` object and set/change its properties/attributes due to your needs. Just to give an idea, below is a sample code in which some network, map, map store and near cache attributes are configured for a Hazelcast instance.  ```java Config config = new Config(); config.getNetworkConfig().setPort( 5900 ); config.getNetworkConfig().setPortAutoIncrement( false );          NetworkConfig network = config.getNetworkConfig(); JoinConfig join = network.getJoin(); join.getMulticastConfig().setEnabled( false ); join.getTcpIpConfig().addMember( \&quot;10.45.67.32\&quot; ).addMember( \&quot;10.45.67.100\&quot; )             .setRequiredMember( \&quot;192.168.10.100\&quot; ).setEnabled( true ); network.getInterfaces().setEnabled( true ).addInterface( \&quot;10.45.67.*\&quot; );          MapConfig mapConfig = new MapConfig(); mapConfig.setName( \&quot;testMap\&quot; ); mapConfig.setBackupCount( 2 ); mapConfig.getMaxSizeConfig().setSize( 10000 ); mapConfig.setTimeToLiveSeconds( 300 );          MapStoreConfig mapStoreConfig = new MapStoreConfig(); mapStoreConfig.setClassName( \&quot;com.hazelcast.examples.DummyStore\&quot; )     .setEnabled( true ); mapConfig.setMapStoreConfig( mapStoreConfig );  NearCacheConfig nearCacheConfig = new NearCacheConfig(); nearCacheConfig.setMaxSize( 1000 ).setMaxIdleSeconds( 120 )     .setTimeToLiveSeconds( 300 ); mapConfig.setNearCacheConfig( nearCacheConfig );  config.addMapConfig( mapConfig ); ```  After creating `Config` object, you can use it to create a new Hazelcast instance.  -   `HazelcastInstance hazelcast = Hazelcast.newHazelcastInstance( config );`  -   To create a named `HazelcastInstance` you should set `instanceName` of `Config` object.   ```java     Config config = new Config();     config.setInstanceName( \&quot;my-instance\&quot; );     Hazelcast.newHazelcastInstance( config );     ``` -   To retrieve an existing `HazelcastInstance` using its name, use;      `Hazelcast.getHazelcastInstanceByName( \&quot;my-instance\&quot; );`  -   To retrieve all existing `HazelcastInstance`s, use;      `Hazelcast.getAllHazelcastInstances();`   "
});

documentTitles["configurationoverview.html#using-wildcard"] = "Using Wildcard";
index.add({
    url: "configurationoverview.html#using-wildcard",
    title: "Using Wildcard",
    body: "## Using Wildcard  Hazelcast supports wildcard configuration for all distributed data structures that can be configured using `Config` (i.e. for all except `IAtomicLong`, `IAtomicReference`). Using an asterisk (\*) character in the name, different instances of maps, queues, topics, semaphores, etc. can be configured by a single configuration.  Note that with a limitation of a single usage, an asterisk (\*) can be placed anywhere inside the configuration name.  For instance, a map named '`com.hazelcast.test.mymap`' can be configured using one of these configurations:  ```xml &lt;map name=\&quot;com.hazelcast.test.*\&quot;&gt; ... &lt;/map&gt; ``` ```xml &lt;map name=\&quot;com.hazel*\&quot;&gt; ... &lt;/map&gt; ``` ```xml &lt;map name=\&quot;*.test.mymap\&quot;&gt; ... &lt;/map&gt; ``` ```xml &lt;map name=\&quot;com.*test.mymap\&quot;&gt; ... &lt;/map&gt; ``` Or a queue '`com.hazelcast.test.myqueue`':  ```xml &lt;queue name=\&quot;*hazelcast.test.myqueue\&quot;&gt; ... &lt;/queue&gt; ``` ```xml &lt;queue name=\&quot;com.hazelcast.*.myqueue\&quot;&gt; ... &lt;/queue&gt; ```  "
});

documentTitles["configurationoverview.html#composing-xml-configuration"] = "Composing XML Configuration";
index.add({
    url: "configurationoverview.html#composing-xml-configuration",
    title: "Composing XML Configuration",
    body: "## Composing XML Configuration  You can compose your Hazelcast XML Configuration file from multiple XML configuration snippets. In order to compose XML configuration, you can use the `&lt;import/&gt;` element to load different XML configuration files. Please see the following examples.     `hazelcast-config.xml`:  ```xml &lt;hazelcast&gt;   &lt;import resource=\&quot;development-group-config.xml\&quot;/&gt;   &lt;import resource=\&quot;development-network-config.xml\&quot;/&gt; &lt;/hazelcast&gt; ```  `development-group-config.xml`:  ```xml &lt;hazelcast&gt;   &lt;group&gt;       &lt;name&gt;dev&lt;/name&gt;       &lt;password&gt;dev-pass&lt;/password&gt;   &lt;/group&gt; &lt;/hazelcast&gt; ```  `development-network-config.xml`:  ```xml &lt;hazelcast&gt;   &lt;network&gt;     &lt;port auto-increment=\&quot;true\&quot; port-count=\&quot;100\&quot;&gt;5701&lt;/port&gt;     &lt;join&gt;         &lt;multicast enabled=\&quot;true\&quot;&gt;             &lt;multicast-group&gt;224.2.2.3&lt;/multicast-group&gt;             &lt;multicast-port&gt;54327&lt;/multicast-port&gt;         &lt;/multicast&gt;     &lt;/join&gt;   &lt;/network&gt; &lt;/hazelcast&gt; ``` &lt;br&gt;&lt;/br&gt; ![image](images/NoteSmall.jpg) ***NOTE:*** *You can only use `&lt;import/&gt;` element on top level of the XML hierarchy.* &lt;br&gt;&lt;/br&gt;  - XML resources can be loaded from classpath and filesystem. For example:  ```xml &lt;hazelcast&gt;   &lt;import resource=\&quot;file:///etc/hazelcast/development-group-config.xml\&quot;/&gt; &lt;!-- loaded from filesystem --&gt;   &lt;import resource=\&quot;classpath:development-network-config.xml\&quot;/&gt;  &lt;!-- loaded from classpath --&gt; &lt;/hazelcast&gt; ```  - You can use property placeholders in the `&lt;import/&gt;` elements. For example:  ```xml &lt;hazelcast&gt;   &lt;import resource=\&quot;${environment}-group-config.xml\&quot;/&gt;   &lt;import resource=\&quot;${environment}-network-config.xml\&quot;/&gt; &lt;/hazelcast&gt; ``` ___  Rest of the chapter first explains the configuration items listed below.  - Network  - Group - Map - MultiMap - Queue - Topic - List - Set - Semaphore - Executor Service - Serialization - Partition Group - MapReduce Jobtracker - Services - Management Center   Then, it talks about Listener and Logging configurations. And finally, the chapter ends with the advanced system property definitions.  ***ATTENTION:*** *Most of the sections below use the tags used in declarative configuration when explaining configuration items. We are assuming that the reader is familiar with their programmatic equivalents, since both approaches have the similar tag/method names (e.g. `port-count` tag in declarative configuration is equivalent to `setPortCount` in programmatic configuration).*  "
});



documentTitles["networkconfiguration.html#network-configuration"] = "Network Configuration";
index.add({
    url: "networkconfiguration.html#network-configuration",
    title: "Network Configuration",
    body: "## Network Configuration  All network related configuration is performed via `network` element in the Hazelcast XML configuration file or the class `NetworkConfig` when using programmatic configuration. Let's first give the examples for these two approaches. Then we will look at its sub-elements and attributes.  **Declarative:**   ```xml    &lt;network&gt;         &lt;public-address&gt;&lt;/public-address&gt;         &lt;port auto-increment=\&quot;true\&quot; port-count=\&quot;100\&quot;&gt;5701&lt;/port&gt;         &lt;outbound-ports&gt;             &lt;ports&gt;0&lt;/ports&gt;         &lt;/outbound-ports&gt;         &lt;reuse-address&gt;false&lt;/reuse-address&gt;         &lt;join&gt;             &lt;multicast enabled=\&quot;true\&quot;&gt;                 &lt;multicast-group&gt;224.2.2.3&lt;/multicast-group&gt;                 &lt;multicast-port&gt;54327&lt;/multicast-port&gt;             &lt;/multicast&gt;             &lt;tcp-ip enabled=\&quot;false\&quot;&gt;                 &lt;interface&gt;127.0.0.1&lt;/interface&gt;             &lt;/tcp-ip&gt;             &lt;aws enabled=\&quot;false\&quot;&gt;                 &lt;access-key&gt;my-access-key&lt;/access-key&gt;                 &lt;secret-key&gt;my-secret-key&lt;/secret-key&gt;                 &lt;region&gt;us-west-1&lt;/region&gt;                 &lt;host-header&gt;ec2.amazonaws.com&lt;/host-header&gt;                 &lt;security-group-name&gt;hazelcast-sg&lt;/security-group-name&gt;                 &lt;tag-key&gt;type&lt;/tag-key&gt;                 &lt;tag-value&gt;hz-nodes&lt;/tag-value&gt;             &lt;/aws&gt;         &lt;/join&gt;         &lt;interfaces enabled=\&quot;false\&quot;&gt;             &lt;interface&gt;10.10.1.*&lt;/interface&gt;         &lt;/interfaces&gt;         &lt;ssl enabled=\&quot;false\&quot; /&gt;         &lt;socket-interceptor enabled=\&quot;false\&quot; /&gt;         &lt;symmetric-encryption enabled=\&quot;false\&quot;&gt;             &lt;algorithm&gt;PBEWithMD5AndDES&lt;/algorithm&gt;             &lt;salt&gt;thesalt&lt;/salt&gt;             &lt;password&gt;thepass&lt;/password&gt;             &lt;iteration-count&gt;19&lt;/iteration-count&gt;         &lt;/symmetric-encryption&gt;     &lt;/network&gt;    ```  **Programmatic:**  ```java Network netConfig = new NetworkConfig(); netConfig.setReuseAddress( false );  AwsConfig awsConfig = new AwsConfig(); awsConfig.setTagKey( \&quot;5551234\&quot; ).setTagValue( \&quot;Node1234\&quot; ); ```  It has below sub-elements which are described in the following sections.  - public-address - port - outbound-ports - reuse-address - join - interfaces - ssl - socket-interceptor - symmetric-encryption  "
});

documentTitles["networkconfiguration.html#public-address"] = "Public Address";
index.add({
    url: "networkconfiguration.html#public-address",
    title: "Public Address",
    body: "### Public Address  It is used to override public address of a node. By default, a node selects its socket address as its public address. But behind a network address translation (NAT), two endpoints (nodes) may not be able to see/access each other. If both nodes set their public addresses to their defined addresses on NAT, then that way they can communicate with each other. In this case, their public addresses are not an address of a local network interface but a virtual address defined by NAT. It is optional to set and useful when you have a private cloud.  "
});

documentTitles["networkconfiguration.html#port"] = "Port";
index.add({
    url: "networkconfiguration.html#port",
    title: "Port",
    body: "### Port  You can specify the ports which Hazelcast will use to communicate between cluster members. Its default value is `5701`. The following are example configurations.  **Declarative:**  ```xml &lt;network&gt;   &lt;port port-count=\&quot;20\&quot; auto-increment=\&quot;false\&quot;&gt;5701&lt;/port&gt; &lt;/network&gt; ```  **Programmatic:**  ```java Config config = new Config(); config.getNetworkConfig().setPort( \&quot;5701\&quot; );               .setPortCount( \&quot;20\&quot; ).setPortAutoIncrement( false ); ```  It has below attributes.  - `port-count`: By default, Hazelcast will try 100 ports to bind. Meaning that, if you set the value of port as 5701, as members are joining to the cluster, Hazelcast tries to find ports between 5701 and 5801. You can choose to change the port count in the cases like having large instances on a single machine or willing to have only a few ports to be assigned. The parameter `port-count` is used for this purpose, whose default value is 100.    - `auto-increment`: According to the above example, Hazelcast will try to find free ports between 5781 and 5801. Normally, you will not need to change this value, but it will come very handy when needed. You may also want to choose to use only one port. In that case, you can disable the auto-increment feature of `port` by setting its value as `false`.   The parameter `port-count` is ignored when the above configuration is made.  "
});

documentTitles["networkconfiguration.html#outbound-ports"] = "Outbound Ports";
index.add({
    url: "networkconfiguration.html#outbound-ports",
    title: "Outbound Ports",
    body: "### Outbound Ports   By default, Hazelcast lets the system to pick up an ephemeral port during socket bind operation. But security policies/firewalls may require to restrict outbound ports to be used by Hazelcast enabled applications. To fulfill this requirement, you can configure Hazelcast to use only defined outbound ports. The following are example configurations.   **Declarative:**  ```xml   &lt;network&gt;     &lt;outbound-ports&gt;       &lt;!-- ports between 33000 and 35000 --&gt;       &lt;ports&gt;33000-35000&lt;/ports&gt;       &lt;!-- comma separated ports --&gt;       &lt;ports&gt;37000,37001,37002,37003&lt;/ports&gt;        &lt;ports&gt;38000,38500-38600&lt;/ports&gt;     &lt;/outbound-ports&gt;   &lt;/network&gt; ```  **Programmatic:**  ```java ... NetworkConfig networkConfig = config.getNetworkConfig(); // ports between 35000 and 35100 networkConfig.addOutboundPortDefinition(\&quot;35000-35100\&quot;); // comma separated ports networkConfig.addOutboundPortDefinition(\&quot;36001, 36002, 36003\&quot;); networkConfig.addOutboundPort(37000); networkConfig.addOutboundPort(37001); ... ```  ***Note:*** *You can use port ranges and/or comma separated ports.*  As you can see in the programmatic configuration, if you want to add only one port you use the method `addOutboundPort`. If a group of ports needs to be added, then the method `addOutboundPortDefinition` is used.   In the declarative one, the element `ports` can be used for both (for single and multiple port definitions).  "
});

documentTitles["networkconfiguration.html#reuse-address"] = "Reuse Address";
index.add({
    url: "networkconfiguration.html#reuse-address",
    title: "Reuse Address",
    body: "### Reuse Address  When you shutdown a cluster member, the server socket port will be in the `TIME_WAIT` state for the next couple of minutes. If you start the member right after shutting it down, you may not be able to bind it to the same port because it is in the `TIME_WAIT` state. If you set the `reuse-address` element to `true`, the `TIME_WAIT` state is ignored and you can bind the member to the same port again.  The following are example configurations.  **Declarative:**  ```xml   &lt;network&gt;     &lt;reuse-address&gt;true&lt;/reuse-address&gt;   &lt;/network&gt; ```  **Programmatic:**  ```java ... NetworkConfig networkConfig = config.getNetworkConfig();  networkConfig.setReuseAddress( true ); ... ```   "
});

documentTitles["networkconfiguration.html#join"] = "Join";
index.add({
    url: "networkconfiguration.html#join",
    title: "Join",
    body: "### Join  This configuration element is used to enable the Hazelcast instances to form a cluster, i.e. to join the members. Three ways can be used to join the members: discovery by TCP/IP and multicast, and discovery on AWS (EC2 auto-discovery). The following are example configurations.  **Declarative:**  ```xml    &lt;network&gt;         &lt;join&gt;             &lt;multicast enabled=\&quot;true\&quot;&gt;                 &lt;multicast-group&gt;224.2.2.3&lt;/multicast-group&gt;                 &lt;multicast-port&gt;54327&lt;/multicast-port&gt;                 &lt;multicast-time-to-live&gt;32&lt;/multicast-time-to-live&gt;                 &lt;multicast-timeout-seconds&gt;2&lt;/multicast-timeout-seconds&gt;                 &lt;trusted-interfaces&gt;                    &lt;interface&gt;192.168.1.102&lt;/interface&gt;                 &lt;/trusted-interfaces&gt;                &lt;/multicast&gt;             &lt;tcp-ip enabled=\&quot;false\&quot;&gt;                 &lt;required-member&gt;192.168.1.104&lt;/required-member&gt;                 &lt;member&gt;192.168.1.104&lt;/member&gt;                 &lt;members&gt;192.168.1.105,192.168.1.106&lt;/members&gt;             &lt;/tcp-ip&gt;             &lt;aws enabled=\&quot;false\&quot;&gt;                 &lt;access-key&gt;my-access-key&lt;/access-key&gt;                 &lt;secret-key&gt;my-secret-key&lt;/secret-key&gt;                 &lt;region&gt;us-west-1&lt;/region&gt;                 &lt;host-header&gt;ec2.amazonaws.com&lt;/host-header&gt;                 &lt;security-group-name&gt;hazelcast-sg&lt;/security-group-name&gt;                 &lt;tag-key&gt;type&lt;/tag-key&gt;                 &lt;tag-value&gt;hz-nodes&lt;/tag-value&gt;             &lt;/aws&gt;         &lt;/join&gt;    &lt;network&gt;      ```  **Programmatic:**  ```java Config config = new Config(); NetworkConfig network = config.getNetworkConfig(); JoinConfig join = network.getJoin(); join.getMulticastConfig().setEnabled( false )             .addTrustedInterface( \&quot;192.168.1.102\&quot; ); join.getTcpIpConfig().addMember( \&quot;10.45.67.32\&quot; ).addMember( \&quot;10.45.67.100\&quot; )             .setRequiredMember( \&quot;192.168.10.100\&quot; ).setEnabled( true ); ```  The `join` element has the following sub-elements and attributes.  "
});

documentTitles["networkconfiguration.html#multicast-element"] = "multicast element";
index.add({
    url: "networkconfiguration.html#multicast-element",
    title: "multicast element",
    body: "#### multicast element   It includes parameters to fine tune the multicast join mechanism.  - `enabled`: Specifies whether the multicast discovery is enabled or not. Values can be `true` or `false`. - `multicast-group`: The multicast group IP address. Specify it when you want to create clusters within the same network. Values can be between 224.0.0.0 and 239.255.255.255. Default value is 224.2.2.3 - `multicast-port`: The multicast socket port which Hazelcast member listens to and sends discovery messages through it. Default value is 54327. - `multicast-time-to-live`: Time-to-live value for multicast packets sent out to control the scope of multicasts. You can have more information [here](http://www.tldp.org/HOWTO/Multicast-HOWTO-2.html). - `multicast-timeout-seconds`: Only when the nodes are starting up, this timeout (in seconds) specifies the period during which a node waits for a multicast response from another node. For example, if you set it as 60 seconds, each node will wait for 60 seconds until a leader node is selected. Its default value is 2 seconds.  - `trusted-interfaces`: Includes IP addresses of trusted members. When a node wants to join to the cluster, its join request will be rejected if it is not a trusted member. You can give an IP addresses range using the wildcard (\*) on the last digit of IP address (e.g. 192.168.1.\* or 192.168.1.100-110). 	 "
});

documentTitles["networkconfiguration.html#tcp-ip-element"] = "tcp-ip element";
index.add({
    url: "networkconfiguration.html#tcp-ip-element",
    title: "tcp-ip element",
    body: "#### tcp-ip element   It includes parameters to fine tune the TCP/IP join mechanism.  - `enabled`: Specifies whether the TCP/IP discovery is enabled or not. Values can be `true` or `false`. - `required-member`: IP address of the required member. Cluster will only formed if the member with this IP address is found. - `member`: IP address(es) of one or more well known members. Once members are connected to these well known ones, all member addresses will be communicated with each other. You can also give comma separated IP addresses using the `members` element.  ![image](images/NoteSmall.jpg)***NOTE:*** *`tcp-ip` element also accepts the `interface` parameter. Please refer to the [Interfaces element description](#interfaces).*  - `connection-timeout-seconds`: Defines the connection timeout. This is the maximum amount of time Hazelcast is going to try to connect to a well known member before giving up. Setting it to a too low value could mean that a member is not able to connect to a cluster. Setting it to a too high value means that member startup could slow down because of longer timeouts (e.g. when a well known member is not up). Increasing this value is recommended if you have many IPs listed and the members cannot properly build up the cluster. Its default value is 5.  "
});

documentTitles["networkconfiguration.html#aws-element"] = "aws element";
index.add({
    url: "networkconfiguration.html#aws-element",
    title: "aws element",
    body: "#### aws element   It includes parameters to allow the nodes form a cluster on Amazon EC2 environment.  - `enabled`: Specifies whether the EC2 discovery is enabled or not. Values can be `true` or `false`. - `access-key`, `secret-key`: Access and secret keys of your account on EC2. - `region`: The region where your nodes are running. Default value is `us-east-1`. Needs to be specified if the region is other than the default one. - `host-header`: The URL that is the entry point for a web service. It is optional. - `security-group-name`: Name of the security group you specified at the EC2 management console. It is used to narrow the Hazelcast nodes to be within this group. It is optional. - `tag-key`, `tag-value`: To narrow the members in the cloud down to only Hazelcast nodes, you can set these parameters as the ones you specified in the EC2 console. They are optional. - `connection-timeout-seconds`: Defines the connection timeout. This is the maximum amount of time Hazelcast is going to try to connect to a well known member before giving up. Setting it to a too low value could mean that a member is not able to connect to a cluster. Setting it to a too high value means that member startup could slow down because of longer timeouts (e.g. when a well known member is not up). Increasing this value is recommended if you have many IPs listed and the members cannot properly build up the cluster. Its default value is 5.   ![image](images/NoteSmall.jpg) ***NOTE:*** *If you are using a cloud provider other than AWS, you can use the programmatic configuration to specify a TCP/IP cluster. The members will need to be retrieved from that provider (e.g. JClouds).*   "
});

documentTitles["networkconfiguration.html#awsclient-configuration"] = "AWSClient Configuration";
index.add({
    url: "networkconfiguration.html#awsclient-configuration",
    title: "AWSClient Configuration",
    body: "##### AWSClient Configuration  To make sure EC2 instances are found correctly, you can use the `AWSClient` class. It determines the private IP addresses of EC2 instances to be connected. Give the values of the parameters you specified in the `aws` element to this class, as shown below. You will see whether your EC2 instances are found.  ```java public static void main( String[] args )throws Exception{    AwsConfig config = new AwsConfig();    config.setSecretKey( ... ) ;   config.setSecretKey( ... );   config.setRegion( ... );   config.setSecurityGroupName( ... );   config.setTagKey( ... );   config.setTagValue( ... );   config.setEnabled( true );   AWSClient client = new AWSClient( config );   List&lt;String&gt; ipAddresses = client.getPrivateIpAddresses();   System.out.println( \&quot;addresses found:\&quot; + ipAddresses );    for ( String ip: ipAddresses ) {     System.out.println( ip );    } } ```   "
});

documentTitles["networkconfiguration.html#interfaces"] = "Interfaces";
index.add({
    url: "networkconfiguration.html#interfaces",
    title: "Interfaces",
    body: "### Interfaces  You can specify which network interfaces that Hazelcast should use. Servers mostly have more than one network interface so you may want to list the valid IPs. Range characters ('\*' and '-') can be used for simplicity. So 10.3.10.\*, for instance, refers to IPs between 10.3.10.0 and 10.3.10.255. Interface 10.3.10.4-18 refers to IPs between 10.3.10.4 and 10.3.10.18 (4 and 18 included). If network interface configuration is enabled (disabled by default) and if Hazelcast cannot find an matching interface, then it will print a message on console and will not start on that node.  The following are example configurations.  **Declarative:**  ```xml &lt;hazelcast&gt;   ...   &lt;network&gt;     ...     &lt;interfaces enabled=\&quot;true\&quot;&gt;       &lt;interface&gt;10.3.16.*&lt;/interface&gt;        &lt;interface&gt;10.3.10.4-18&lt;/interface&gt;        &lt;interface&gt;192.168.1.3&lt;/interface&gt;              &lt;/interfaces&gt;       &lt;/network&gt;   ... &lt;/hazelcast&gt;  ```  **Programmatic:**  ```java Config config = new Config(); NetworkConfig network = config.getNetworkConfig(); InterfacesConfig interface = network.getInterfaces(); interface.setEnabled( true )             .addInterface( \&quot;192.168.1.3\&quot; ); ```     "
});

documentTitles["networkconfiguration.html#ssl"] = "SSL";
index.add({
    url: "networkconfiguration.html#ssl",
    title: "SSL",
    body: "### SSL  This is a Hazelcast Enterprise feature, please see the [Security chapter](#security).  "
});

documentTitles["networkconfiguration.html#socket-interceptor"] = "Socket Interceptor";
index.add({
    url: "networkconfiguration.html#socket-interceptor",
    title: "Socket Interceptor",
    body: "### Socket Interceptor  This is a Hazelcast Enterprise feature, please see the [Security chapter](#security).  "
});

documentTitles["networkconfiguration.html#symmetric-encryption"] = "Symmetric Encryption";
index.add({
    url: "networkconfiguration.html#symmetric-encryption",
    title: "Symmetric Encryption",
    body: "### Symmetric Encryption  This is a Hazelcast Enterprise feature, please see the [Security chapter](#security).  "
});

documentTitles["networkconfiguration.html#ipv6-support"] = "IPv6 Support";
index.add({
    url: "networkconfiguration.html#ipv6-support",
    title: "IPv6 Support",
    body: "### IPv6 Support  Hazelcast supports IPv6 addresses seamlessly (This support is switched off by default, please see the note at the end of this section).  All you need is to define IPv6 addresses or interfaces in [network configuration](#network-configuration). Only limitation at the moment is that you cannot define wildcard IPv6 addresses in TCP/IP join configuration (`tcp-ip` element). [Interfaces](#interfaces) section does not have this limitation, you can configure wildcard IPv6 interfaces in the same way as IPv4 interfaces.  ```xml &lt;hazelcast&gt;   ...   &lt;network&gt;     &lt;port auto-increment=\&quot;true\&quot;&gt;5701&lt;/port&gt;     &lt;join&gt;       &lt;multicast enabled=\&quot;false\&quot;&gt;         &lt;multicast-group&gt;FF02:0:0:0:0:0:0:1&lt;/multicast-group&gt;         &lt;multicast-port&gt;54327&lt;/multicast-port&gt;       &lt;/multicast&gt;       &lt;tcp-ip enabled=\&quot;true\&quot;&gt;         &lt;member&gt;[fe80::223:6cff:fe93:7c7e]:5701&lt;/member&gt;         &lt;interface&gt;192.168.1.0-7&lt;/interface&gt;         &lt;interface&gt;192.168.1.*&lt;/interface&gt;         &lt;interface&gt;fe80:0:0:0:45c5:47ee:fe15:493a&lt;/interface&gt;       &lt;/tcp-ip&gt;     &lt;/join&gt;     &lt;interfaces enabled=\&quot;true\&quot;&gt;       &lt;interface&gt;10.3.16.*&lt;/interface&gt;       &lt;interface&gt;10.3.10.4-18&lt;/interface&gt;       &lt;interface&gt;fe80:0:0:0:45c5:47ee:fe15:*&lt;/interface&gt;       &lt;interface&gt;fe80::223:6cff:fe93:0-5555&lt;/interface&gt;     &lt;/interfaces&gt;     ...   &lt;/network&gt;   ... &lt;/hazelcast&gt; ```  JVM has two system properties for setting the preferred protocol stack (IPv4 or IPv6) as well as the preferred address family types (inet4 or inet6). On a dual stack machine, IPv6 stack is preferred by default, this can be changed through `java.net.preferIPv4Stack=&lt;true|false&gt;` system property. And when querying name services, JVM prefers IPv4 addressed over IPv6 addresses and will return an IPv4 address if possible. This can be changed through `java.net.preferIPv6Addresses=&lt;true|false&gt;` system property.  Also see additional [details on IPv6 support in Java](http://docs.oracle.com/javase/1.5.0/docs/guide/net/ipv6_guide/query.html#details).  ![image](images/NoteSmall.jpg) ***NOTE:*** *IPv6 support has been switched off by default, since some platforms have issues in use of IPv6 stack. Some other platforms such as Amazon AWS have no support at all. To enable IPv6 support, just set configuration property `hazelcast.prefer.ipv4.stack` to *false*. See [Advanced Configuration Properties](#advanced-configuration-properties).* &lt;br&gt;&lt;/br&gt; "
});



documentTitles["groupconfiguration.html#group-configuration"] = "Group Configuration";
index.add({
    url: "groupconfiguration.html#group-configuration",
    title: "Group Configuration",
    body: "## Group Configuration  This configuration is used to create multiple Hazelcast clusters. The cluster members (nodes) and clients having the same group configuration (i.e. same group name and password) forms a private cluster.   Each cluster will have its own group and it will not interfere with other clusters. The name of the element to configure cluster groups is `group`.  The following are example configurations.  **Declarative:**  ```xml &lt;group&gt; 	&lt;name&gt;testCluster&lt;/name&gt; 	&lt;password&gt;1q2w3e&lt;/password&gt; &lt;group&gt; ```  **Programmatic:**  ```java GroupConfig groupConfig = new GroupConfig(); groupConfig.setName( \&quot;testCluster\&quot; ).setPassword( \&quot;1q2w3e\&quot; ); ```     It has below elements.  - `name`: Name of the group to be created. - `password`: Password of the group to be created.   "
});



documentTitles["mapconfiguration.html#map-configuration"] = "Map Configuration";
index.add({
    url: "mapconfiguration.html#map-configuration",
    title: "Map Configuration",
    body: "## Map Configuration  The following are the example configurations.  **Declarative:**  ```xml &lt;hazelcast&gt;   &lt;map name=\&quot;default\&quot;&gt;     &lt;in-memory-format&gt;BINARY&lt;/in-memory-format&gt;     &lt;backup-count&gt;0&lt;/backup-count&gt;     &lt;async-backup-count&gt;1&lt;/async-backup-count&gt;     &lt;read-backup-data&gt;true&lt;/read-backup-data&gt;     &lt;time-to-live-seconds&gt;0&lt;/time-to-live-seconds&gt;     &lt;max-idle-seconds&gt;0&lt;/max-idle-seconds&gt;     &lt;eviction-policy&gt;LRU&lt;/eviction-policy&gt;     &lt;max-size policy=\&quot;PER_NODE\&quot;&gt;5000&lt;/max-size&gt;     &lt;eviction-percentage&gt;25&lt;/eviction-percentage&gt;     &lt;near-cache&gt;        &lt;invalidate-on-change&gt;true&lt;/invalidate-on-change&gt;        &lt;cache-local-entries&gt;false&lt;/cache-local-entries&gt;     &lt;near-cache&gt;     &lt;map-store enabled=\&quot;true\&quot;&gt;        &lt;write-delay-seconds&gt;60&lt;/write-delay-seconds&gt;        &lt;write-batch-size&gt;1000&lt;/write-batch-size&gt;     &lt;/map-store&gt;     &lt;indexes&gt;         &lt;index ordered=\&quot;true\&quot;&gt;id&lt;/index&gt;         &lt;index ordered=\&quot;false\&quot;&gt;name&lt;/index&gt;     &lt;/indexes&gt;     &lt;entry-listeners&gt;         &lt;entry-listener include-value=\&quot;true\&quot; local=\&quot;false\&quot;&gt;            com.hazelcast.examples.EntryListener         &lt;/entry-listener&gt;     &lt;/entry-listeners&gt;      &lt;/map&gt; &lt;/hazelcast&gt; ```  **Programmatic:**  ```java MapConfig mapConfig = new MapConfig(); mapConfig.setName( \&quot;default\&quot; ).setInMemoryFormat( \&quot;BINARY\&quot; );  mapConfig.setBackupCount( \&quot;0\&quot; ).setAsyncBackupCount( \&quot;1\&quot; )          .setReadBackupData( \&quot;true\&quot; );           MapStoreConfig mapStoreConfig = mapConfig.getMapStoreConfig(); mapStoreConfig.setWriteDelaySeconds( \&quot;60\&quot; )               .setWriteBatchSize( \&quot;1000\&quot; );                MapIndexConfig mapIndexConfig = mapConfig.getMapIndexConfig(); mapIndexConfig.setAttribute( \&quot;id\&quot; ).setOrdered( \&quot;true\&quot; ); mapIndexConfig.setAttribute( \&quot;name\&quot; ).setOrdered( \&quot;false\&quot; ); ```   It has below elements.  - `in-memory-format`: Determines how the data will be stored in memory. It has two values: BINARY and OBJECT. BINARY is the default option and enables to store the data in serialized binary format. If OBJECT is set as the value, data will be stored in deserialized form. - `backup-count`: Defines the count of synchronous backups. If it is set as 1, for example, backup of a partition will be placed on another node. If it is 2, it will be placed on 2 other nodes. - `async-backup-count`: Defines the count of synchronous backups. Count behavior is the same as that of `backup-count` element. - `read-backup-data`: This boolean element enables reading local backup entries when set as `true`. - `time-to-live-seconds`: Maximum time in seconds for each entry to stay in the map. - `max-idle-seconds`: Maximum time in seconds for each entry to stay idle in the map. - `eviction-policy`: Policy for evicting entries. It has three values: NONE, LRU (Least Recently Used) and LFU (Least Frequently Used). If set as NONE, no items will be evicted. - `max-size`: Maximum size of the map (i.e. maximum entry count of the map).  When maximum size is reached, map is evicted based on the eviction policy defined. It has four attributes: `PER_NODE` (Maximum number of map entries in each JVM), `PER_PARTITION` (Maximum number of map entries within each partition), `USED_HEAP_SIZE` (Maximum used heap size in megabytes for each JVM) and `USED_HEAP_PERCENTAGE` (Maximum used heap size percentage for each JVM).  - `eviction-percentage`: When `max-size` is reached, specified percentage of the map will be evicted. - `merge-policy`: Policy for merging maps after a split-brain syndrome was detected and the different network partitions need to be merged. Available merge policy classes are explained below: 	- `HigherHitsMapMergePolicy` causes the merging entry to be merged from source to destination map if source entry has more hits than the destination one. 	- `LatestUpdateMapMergePolicy` causes the merging entry to be merged from source to destination map if source entry has updated more recently than the destination entry. This policy can only be used of the clocks of the machines are in sync. 	- `PassThroughMergePolicy` causes the merging entry to be merged from source to destination map unless merging entry is null. PutIfAbsentMapMergePolicy causes the merging entry to be merged from source to destination map if it does not exist in the destination map. - `statistics-enabled`: You can retrieve statistics information like owned entry count, backup entry count, last update time, locked entry count by setting this element's value to `true`. The method for retrieving the statistics is `getLocalMapStats()`. - `wan-replication-ref`: Hazelcast can replicate some or all of the cluster data. For example, you can have 5 different maps but you want only one of these maps replicating across clusters. To achieve this you mark the maps to be replicated by adding this element in the map configuration. - `optimize-queries`: This element is used to increase the speed of query processes in the map. It only works when `in-memory-format` is set as `BINARY` and performs a pre-caching on the entries queried.  "
});

documentTitles["mapconfiguration.html#map-store"] = "Map Store";
index.add({
    url: "mapconfiguration.html#map-store",
    title: "Map Store",
    body: "### Map Store  - `class-name`: Name of the class implementing MapLoader and/or MapStore. - `write-delay-seconds`: Number of seconds to delay to call the MapStore.store(key, value). If the value is zero then it is write-through so MapStore.store(key, value) will be called as soon as the entry is updated. Otherwise it is write-behind so updates will be stored after write-delay-seconds value by calling Hazelcast.storeAll(map). Default value is 0. - `write-batch-size`: Used to create batch chunks when writing map store. In default mode all entries will be tried to persist in one go. To create batch chunks, minimum meaningful value for write-batch-size is 2. For values smaller than 2, it works as in default mode.  "
});

documentTitles["mapconfiguration.html#near-cache"] = "Near Cache";
index.add({
    url: "mapconfiguration.html#near-cache",
    title: "Near Cache",
    body: "### Near Cache  Most of map near cache properties have the same names and tasks explained in map properties above. Below are the ones specific to near cache.  - `invalidate-on-change`: Determines whether the cached entries get evicted if the entries are updated or removed). - `cache-local-entries`: If you want the local entries to be cached, set this element's value to `true`.  "
});

documentTitles["mapconfiguration.html#indexes"] = "Indexes";
index.add({
    url: "mapconfiguration.html#indexes",
    title: "Indexes",
    body: "### Indexes This configuration lets you index the attributes of an object in the map and also order these attributes. See the example declarative and programmatic configuration.  "
});

documentTitles["mapconfiguration.html#entry-listeners"] = "Entry Listeners";
index.add({
    url: "mapconfiguration.html#entry-listeners",
    title: "Entry Listeners",
    body: "### Entry Listeners This configuration lets you add listeners (listener classes) for the map entries. You can also set the attributes `include-value` to `true` if you want the entry event to contain the entry values and `local` to `true` if you want to listen to the entries on the local node.   "
});



documentTitles["multimapconfiguration.html#multimap-configuration"] = "Multimap Configuration";
index.add({
    url: "multimapconfiguration.html#multimap-configuration",
    title: "Multimap Configuration",
    body: "## Multimap Configuration  The following are the example configurations.  **Declarative:**  ```xml &lt;hazelcast&gt;   &lt;multimap name=\&quot;default\&quot;&gt;     &lt;backup-count&gt;0&lt;/backup-count&gt;     &lt;async-backup-count&gt;1&lt;/async-backup-count&gt;     &lt;value-collection-type&gt;SET&lt;/value-collection-type&gt;     &lt;entry-listeners&gt;         &lt;entry-listener include-value=\&quot;false\&quot; local=\&quot;false\&quot;&gt;            com.hazelcast.examples.EntryListener         &lt;/entry-listener&gt;     &lt;/entry-listeners&gt;      &lt;/map&gt; &lt;/hazelcast&gt; ```  **Programmatic:**  ```java MultiMapConfig mmConfig = new MultiMapConfig(); mmConfig.setName( \&quot;default\&quot; );  mmConfig.setBackupCount( \&quot;0\&quot; ).setAsyncBackupCount( \&quot;1\&quot; );           mmConfig.setValueCollectionType( \&quot;SET\&quot; ); ```   Most of MultiMap configuration elements and attributes  have the same names and functionalities explained in the [Map Configuration section](#map-configuration). Below are the ones specific to MultiMap.  - `statistics-enabled`: You can retrieve some statistics like owned entry count, backup entry count, last update time, locked entry count by setting this parameter's value as \&quot;true\&quot;. The method for retrieving the statistics is `getLocalMultiMapStats()`. - `value-collection-type`: Type of the value collection. It can be `Set` or `List`.   "
});



documentTitles["queueconfiguration.html#queue-configuration"] = "Queue Configuration";
index.add({
    url: "queueconfiguration.html#queue-configuration",
    title: "Queue Configuration",
    body: "## Queue Configuration   The following are example configurations.   **Declarative:**  ```xml &lt;queue name=\&quot;default\&quot;&gt;     &lt;max-size&gt;0&lt;/max-size&gt;     &lt;backup-count&gt;1&lt;/backup-count&gt;     &lt;async-backup-count&gt;0&lt;/async-backup-count&gt;     &lt;empty-queue-ttl&gt;-1&lt;/empty-queue-ttl&gt;     &lt;item-listeners&gt;        &lt;item-listener&gt;           com.hazelcast.examples.ItemListener        &lt;/item-listener&gt;     &lt;item-listeners&gt; &lt;/queue&gt; &lt;queue-store&gt;     &lt;class-name&gt;com.hazelcast.QueueStoreImpl&lt;/class-name&gt;     &lt;properties&gt;        &lt;property name=\&quot;binary\&quot;&gt;false&lt;/property&gt;        &lt;property name=\&quot;memory-limit\&quot;&gt;10000&lt;/property&gt;        &lt;property name=\&quot;bulk-load\&quot;&gt;500&lt;/property&gt;     &lt;/properties&gt; &lt;/queue-store&gt;    ```  **Programmatic:**  ```java Config config = new Config(); QueueConfig queueConfig = config.getQueueConfig(); queueConfig.setName( \&quot;MyQueue\&quot; ).setBackupCount( \&quot;1\&quot; )         .setMaxSize( \&quot;0\&quot; ).setStatisticsEnabled( \&quot;true\&quot; ); queueConfig.getQueueStoreConfig()         .setEnabled ( \&quot;true\&quot; )         .setClassName( \&quot;com.hazelcast.QueueStoreImpl\&quot; )         .setProperty( \&quot;binary\&quot;, \&quot;false\&quot; ); ```  It has below elements.  - `max-size`: Value of maximum size of items in the Queue. - `backup-count`: Count of synchronous backups. Remember that, Queue is a non-partitioned data structure, i.e. all entries of a Set resides in one partition. When this parameter is '1', it means there will be a backup of that Set in another node in the cluster. When it is '2', 2 nodes will have the backup. - `async-backup-count`: Count of asynchronous backups. - `empty-queue-ttl`: Used to purge unused or empty queues. If you define a value (time in seconds) for this element, then your queue will be destroyed if it stays empty or unused for the time you give. - `item-listeners`: This element lets you add listeners (listener classes) for the queue items. You can also set the attributes `include-value` to `true` if you want the item event to contain the item values and `local` to `true` if you want to listen the items on the local node. - `queue-store`: Includes the queue store factory class name and the properties  *binary*, *memory limit* and *bulk load*. Please refer to [Queue Persistence](#queue-persistence). - `statistics-enabled`: If set as `true`, you can retrieve statistics for this Queue using the method `getLocalQueueStats()`.  "
});



documentTitles["topicconfiguration.html#topic-configuration"] = "Topic Configuration";
index.add({
    url: "topicconfiguration.html#topic-configuration",
    title: "Topic Configuration",
    body: "## Topic Configuration   The following are the example configurations.  **Declarative Configuration:**  ```xml &lt;hazelcast&gt;   ...   &lt;topic name=\&quot;yourTopicName\&quot;&gt;     &lt;global-ordering-enabled&gt;true&lt;/global-ordering-enabled&gt;     &lt;statistics-enabled&gt;true&lt;/statistics-enabled&gt;     &lt;message-listeners&gt;       &lt;message-listener&gt;MessageListenerImpl&lt;/message-listener&gt;     &lt;/message-listeners&gt;   &lt;/topic&gt;   ... &lt;/hazelcast&gt; ```  **Programmatic Configuration:**  ```java TopicConfig topicConfig = new TopicConfig(); topicConfig.setGlobalOrderingEnabled( true ); topicConfig.setStatisticsEnabled( true ); topicConfig.setName( \&quot;yourTopicName\&quot; ); MessageListener&lt;String&gt; implementation = new MessageListener&lt;String&gt;() {   @Override   public void onMessage( Message&lt;String&gt; message ) {     // process the message   } }; topicConfig.addMessageListenerConfig( new ListenerConfig( implementation ) ); HazelcastInstance instance = Hazelcast.newHazelcastInstance() ```   It has below elements.  - `statistics-enabled`: By default, it is **true**, meaning statistics are calculated. - `global-ordering-enabled`: By default, it is **false**, meaning there is no global order guarantee. - `message-listeners`: This element lets you add listeners (listener classes) for the topic messages.    Topic related but not topic specific configuration parameters     - `hazelcast.event.queue.capacity`: default value is 1,000,000.    - `hazelcast.event.queue.timeout.millis`: default value is 250.    - `hazelcast.event.thread.count`: default value is 5.     &lt;br&gt;&lt;/br&gt; ***RELATED INFORMATION***   *For description of these parameters, please see [Global Event Configuration](#global-event-configuration).*      "
});



documentTitles["listconfiguration.html#list-configuration"] = "List Configuration";
index.add({
    url: "listconfiguration.html#list-configuration",
    title: "List Configuration",
    body: "## List Configuration  The following are the example configurations.  **Declarative:**  ```xml &lt;list name=\&quot;default\&quot;&gt;    &lt;backup-count&gt;1&lt;/backup-count&gt;    &lt;async-backup-count&gt;0&lt;/async-backup-count&gt;    &lt;max-size&gt;10&lt;/max-size&gt;    &lt;statistics-enabled&gt;true&lt;/statistics-enabled&gt;    &lt;item-listeners&gt;       &lt;item-listener&gt;           com.hazelcast.examples.ItemListener       &lt;/item-listener&gt;    &lt;/item-listeners&gt; &lt;/list&gt; ```  **Programmatic:**  ```java Config config = new Config(); CollectionConfig collectionList = config.getCollectionConfig(); collectionList.setName( \&quot;MyList\&quot; ).setBackupCount( \&quot;1\&quot; )         .setMaxSize( \&quot;10\&quot; ).setStatisticsEnabled( \&quot;true\&quot; ); ```      It has below elements.   - `backup-count`: Count of synchronous backups. Remember that, List is a non-partitioned data structure, i.e. all entries of a List resides in one partition. When this parameter is '1', it means there will be a backup of that List in another node in the cluster. When it is '2', 2 nodes will have the backup. - `async-backup-count`: Count of asynchronous backups. - `statistics-enabled`: If set as `true`, you can retrieve statistics for this List. - `max-size`: It is the maximum entry size for this List. - `item-listeners`: This element lets you add listeners (listener classes) for the list items. You can also set the attributes `include-value` to `true` if you want the item event to contain the item values and `local` to `true` if you want to listen the items on the local node.     "
});



documentTitles["setconfiguration.html#set-configuration"] = "Set Configuration";
index.add({
    url: "setconfiguration.html#set-configuration",
    title: "Set Configuration",
    body: "## Set Configuration  The following are the example configurations.   **Declarative:**  ```xml &lt;set name=\&quot;default\&quot;&gt;    &lt;backup-count&gt;1&lt;/backup-count&gt;    &lt;async-backup-count&gt;0&lt;/async-backup-count&gt;    &lt;max-size&gt;10&lt;/max-size&gt;    &lt;statistics-enabled&gt;true&lt;/statistics-enabled&gt;    &lt;item-listeners&gt;       &lt;item-listener&gt;           com.hazelcast.examples.ItemListener       &lt;/item-listener&gt;    &lt;item-listeners&gt; &lt;/set&gt; ```  **Programmatic:**  ```java Config config = new Config(); CollectionConfig collectionSet = config.getCollectionConfig(); collectionSet.setName( \&quot;MySet\&quot; ).setBackupCount( \&quot;1\&quot; )         .setMaxSize( \&quot;10\&quot; ).setStatisticsEnabled( \&quot;true\&quot; ); ```      It has below elements.   - `backup-count`: Count of synchronous backups. Remember that, Set is a non-partitioned data structure, i.e. all entries of a Set resides in one partition. When this parameter is '1', it means there will be a backup of that Set in another node in the cluster. When it is '2', 2 nodes will have the backup. - `async-backup-count`: Count of asynchronous backups. - `statistics-enabled`: If set as `true`, you can retrieve statistics for this Set. - `max-size`: It is the maximum entry size for this Set. - `item-listeners`: This element lets you add listeners (listener classes) for the list items. You can also set the attributes `include-value` to `true` if you want the item event to contain the item values and `local` to `true` if you want to listen the items on the local node.    "
});



documentTitles["semaphoreconfiguration.html#semaphore-configuration"] = "Semaphore Configuration";
index.add({
    url: "semaphoreconfiguration.html#semaphore-configuration",
    title: "Semaphore Configuration",
    body: "## Semaphore Configuration  The following are the example configurations.  **Declarative:**  ```xml &lt;semaphore name=\&quot;semaphore\&quot;&gt;    &lt;backup-count&gt;1&lt;/backup-count&gt;    &lt;async-backup-count&gt;0&lt;/async-backup-count&gt;    &lt;initial-permits&gt;3&lt;/initial-permits&gt; &lt;/semaphore&gt; ```  **Programmatic:**  ```java Config config = new Config(); SemaphoreConfig semaphoreConfig = config.getSemaphoreConfig(); semaphoreConfig.setName( \&quot;semaphore\&quot; ).setBackupCount( \&quot;1\&quot; )         .setInitialPermits( \&quot;3\&quot; ); ```  It has below elements.  - `initial-permits`: It is the thread count which the concurrent access is limited to. For example, if you set it to \&quot;3\&quot;, concurrent access to the object is limited to 3 threads. - `backup-count`: Defines the count of synchronous backups.  - `async-backup-count`: Defines the count of asynchronous backups.   "
});



documentTitles["execserviceconfiguration.html#executor-service-configuration"] = "Executor Service Configuration";
index.add({
    url: "execserviceconfiguration.html#executor-service-configuration",
    title: "Executor Service Configuration",
    body: "## Executor Service Configuration  The following are the example configurations.  **Declarative:**  ```xml &lt;executor-service name=\&quot;exec\&quot;&gt;    &lt;pool-size&gt;1&lt;/pool-size&gt;    &lt;queue-capacity&gt;10&lt;/queue-capacity&gt;    &lt;statistics-enabled&gt;true&lt;/statistics-enabled&gt; &lt;/executor-service&gt; ```  **Programmatic:**  ```java Config config = new Config(); ExecutorConfig executorConfig = config.getExecutorConfig(); executorConfig.setPoolSize( \&quot;1\&quot; ).setQueueCapacity( \&quot;10\&quot; )           .setStatisticsEnabled( true ); ```  It has below elements.  - `pool-size`: The number of executor threads per Member for the Executor. - `queue-capacity`: Executor's task queue capacity. - `statistics-enabled`: Some statistics like pending operations count, started operations count, completed operations count, cancelled operations count can be retrieved by setting this parameter's value as `true`. The method for retrieving the statistics is `getLocalExecutorStats()`.  "
});



documentTitles["serializationconfiguration.html#serialization-configuration"] = "Serialization Configuration";
index.add({
    url: "serializationconfiguration.html#serialization-configuration",
    title: "Serialization Configuration",
    body: "## Serialization Configuration  The following are the example configurations.  **Declarative:**  ```xml &lt;serialization&gt;    &lt;portable-version&gt;2&lt;/portable-version&gt;    &lt;use-native-byte-order&gt;true&lt;/use-native-byte-order&gt;    &lt;byte-order&gt;BIG_ENDIAN&lt;/byte-order&gt;    &lt;enable-compression&gt;true&lt;/enable-compression&gt;    &lt;enable-shared-object&gt;false&lt;/enable-shared-object&gt;    &lt;allow-unsafe&gt;true&lt;/allow-unsafe&gt;    &lt;data-serializable-factories&gt;       &lt;data-serializable-factory factory-id=\&quot;1001\&quot;&gt;           abc.xyz.Class       &lt;/data-serializable-factory&gt;    &lt;/data-serializable-factories&gt;    &lt;portable-factories&gt;       &lt;portable-factory factory-id=\&quot;9001\&quot;&gt;          xyz.abc.Class       &lt;/portable-factory&gt;    &lt;/portable-factories&gt;    &lt;serializers&gt;       &lt;global-serializer&gt;abc.Class&lt;/global-serializer&gt;       &lt;serializer type-class=\&quot;Employee\&quot; class-name=\&quot;com.EmployeeSerializer\&quot;&gt;       &lt;/serializer&gt;    &lt;/serializers&gt;    &lt;check-class-def-errors&gt;true&lt;/check-class-def-errors&gt; &lt;/serialization&gt; ```  **Programmatic:**  ```java Config config = new Config(); SerializationConfig srzConfig = config.getSerializationConfig(); srzConfig.setPortableVersion( \&quot;2\&quot; ).setUseNativeByteOrder( true ); srzConfig.setAllowUnsafe( true ).setEnableCompression( true ); srzConfig.setCheckClassDefErrors( true );  GlobalSerializerConfig globSrzConfig = srzConfig.getGlobalSerializerConfig(); globSrzConfig.setClassName( \&quot;abc.Class\&quot; );  SerializerConfig serializerConfig = srzConfig.getSerializerConfig(); serializerConfig.setTypeClass( \&quot;Employee\&quot; )                 .setClassName( \&quot;com.EmployeeSerializer\&quot; ); ```  It has below elements.  - `portable-version`: Defines the versioning of the portable serialization. Portable version will be used to differentiate two same classes that have changes on it like adding/removing field or changing a type of a field. - `use-native-byte-order`: Set to true to use native byte order of the underlying platform.  - `byte-order`: Defines the byte order that the serialization will use. Available values are `BIG_ENDIAN` and `LITTLE_ENDIAN`. The default value is `BIG_ENDIAN`. - `enable-compression`: Enables compression if default Java serialization is used.  - `enable-shared-object`: Enables shared object if default Java serialization is used.  - `allow-unsafe`: Set to `true` to allow the usage of `unsafe`.  - `data-serializable-factory`: DataSerializableFactory class to be registered. - `portable-factory`: PortableFactory class to be registered. - `global-serializer`: Global serializer class to be registered if no other serializer is applicable. - `serializer`: Defines the class name of the serializer implementation. - `check-class-def-errors`: When enabled, serialization system will check class definitions error at start and throw an Serialization Exception with error definition.    "
});



documentTitles["jobtrackerconfiguration.html#mapreduce-jobtracker-configuration"] = "MapReduce Jobtracker Configuration";
index.add({
    url: "jobtrackerconfiguration.html#mapreduce-jobtracker-configuration",
    title: "MapReduce Jobtracker Configuration",
    body: "## MapReduce Jobtracker Configuration  The MapReduce JobTracker configuration is used to setup behavior of the Hazelcast MapReduce framework. Every JobTracker is capable of running multiple MapReduce jobs at once. Therefore, one configuration is a shared resource for all jobs created by the same JobTracker. The configuration gives full control over the expected load behavior and thread counts to be used.   **Declarative:**  ```xml &lt;job-tracker name=\&quot;default\&quot;&gt;    &lt;max-thread-size&gt;0&lt;/max-thread-size&gt;    &lt;queue-size&gt;0&lt;/queue-size&gt;    &lt;retry-count&gt;0&lt;/retry-count&gt;    &lt;chunk-size&gt;1000&lt;/chunk-size&gt;    &lt;communicate-stats&gt;true&lt;/communicate-stats&gt;    &lt;topology-changed-strategy&gt;CANCEL_RUNNING_OPERATION&lt;/topology-changed-strategy&gt; &lt;/job-tracker&gt; ```  **Programmatic:**  ```java Config config = new Config(); JobTrackerConfig JTcfg = config.getJobTrackerConfig() JTcfg.setName( \&quot;default\&quot; ).setQueueSize( \&quot;0\&quot; )          .setChunkSize( \&quot;1000\&quot; ); ```      It has below elements.   - `max-thread-size`: Configures the maximum thread pool size of the JobTracker. - `queue-size`: Defines the maximum number of tasks that are able to wait to be processed. A value of 0 means unbounded queue. Very low numbers can prevent successful execution since job might not be correctly scheduled or intermediate chunks are lost. - `retry-count`: Currently not used but reserved for later use where the framework will automatically try to restart / retry operations from an available save point. - `chunk-size`: Defines the number of emitted values before a chunk is sent to the reducers. If your emitted values are big or you want to better balance your work, you might want to change this to a lower or higher value. A value of 0 means immediate transmission but remember that low values mean higher traffic costs. A very high value might cause an OutOfMemoryError to occur if emitted values not fit into heap memory before being sent to reducers. To prevent this, you might want to use a combiner to pre-reduce values on mapping nodes. - `communicate-stats`: Defines if statistics (for example about processed entries) are transmitted to the job emitter. This might be used to show any kind of progress to a user inside of an UI system but produces additional traffic. If not needed, you might want to deactivate this. - `topology-changed-strategy`: Defines how the MapReduce framework will react on topology changes while executing a job. Currently, only CANCEL_RUNNING_OPERATION is fully supported which throws an exception to the job emitter (will throw a `com.hazelcast.mapreduce.TopologyChangedException`).  "
});



documentTitles["servicesconfiguration.html#services-configuration"] = "Services Configuration";
index.add({
    url: "servicesconfiguration.html#services-configuration",
    title: "Services Configuration",
    body: "## Services Configuration  This configuration is used for Hazelcast Service Provider Interface (SPI). The following are the example configurations.   **Declarative:**  ```xml &lt;services enable-defaults=\&quot;true\&quot;&gt;    &lt;service enabled=\&quot;true\&quot;&gt;       &lt;name&gt;MyService&lt;/name&gt;       &lt;class-name&gt;MyServiceClass&lt;/class-name&gt;       &lt;properties&gt;          &lt;property&gt;             &lt;property name=\&quot;com.property.foo\&quot;&gt;value&lt;/property&gt;       &lt;/properties&gt;       &lt;configuration&gt;       abcConfig       &lt;/configuration&gt;    &lt;/service&gt; &lt;/services&gt; ```  **Programmatic:**  ```java Config config = new Config(); ServicesConfig servicesConfig = config.getServicesConfig();  servicesConfig.setEnableDefaults( true );  ServiceConfig svcConfig = servicesConfig.getServiceConfig(); svcConfig.setEnabled( true ).setName( \&quot;MyService\&quot; )          .setClassName( \&quot;MyServiceClass\&quot; );           svcConfig.setProperty( \&quot;com.property.foo\&quot;, \&quot;value\&quot; ); ```      It has below elements.  - `name`: Name of the service to be registered. - `class-name`: Name of the class that you develop for your service. - `properties`: This element includes the custom properties that you can add to your service. You enable/disable  these properties and set their values using this element. - `configuration`: You can include configuration items which you develop using the `Config` object in your code.    "
});



documentTitles["mgtcenterconfiguration.html#management-center-configuration"] = "Management Center Configuration";
index.add({
    url: "mgtcenterconfiguration.html#management-center-configuration",
    title: "Management Center Configuration",
    body: "## Management Center Configuration  This configuration is used to enable/disable Hazelcast Management Center and specify a time frequency for which the tool is updated with the cluster information.   The example configurations are shown below.  **Declarative:**  ```xml &lt;management-center enabled=\&quot;true\&quot; update-interval=\&quot;3\&quot;&gt;http://localhost:8080/mancenter&lt;/management-center&gt; ```  **Programmatic:**  ```java Config config = new Config(); config.getManagementCenterConfig().setEnabled( \&quot;true\&quot; )          .setUrl( \&quot;http://localhost:8080/mancenter\&quot; )             .setUpdateInterval( \&quot;3\&quot; ); ```      It has below attributes.   - `enabled`: This attribute should be set to `true` to be enable to run Management Center. - `url`: It is the URL where Management Center will work. - `updateInterval`: It specifies the time frequency (in seconds) for which Management Center will take information from Hazelcast cluster.   "
});



documentTitles["wanreplconfiguration.html#wan-replication-configuration"] = "WAN Replication Configuration";
index.add({
    url: "wanreplconfiguration.html#wan-replication-configuration",
    title: "WAN Replication Configuration",
    body: "## WAN Replication Configuration  The following are the example configurations.  **Declarative Configuration:**  ```xml &lt;wan-replication name=\&quot;my-wan-cluster\&quot;&gt;    &lt;target-cluster group-name=\&quot;tokyo\&quot; group-password=\&quot;tokyo-pass\&quot;&gt;       &lt;replication-impl&gt;com.hazelcast.wan.impl.WanNoDelayReplication&lt;/replication-impl&gt;       &lt;end-points&gt;          &lt;address&gt;10.2.1.1:5701&lt;/address&gt;          &lt;address&gt;10.2.1.2:5701&lt;/address&gt;       &lt;/end-points&gt;     &lt;/target-cluster&gt;    &lt;target-cluster group-name=\&quot;london\&quot; group-password=\&quot;london-pass\&quot;&gt;       &lt;replication-impl&gt;com.hazelcast.wan.impl.WanNoDelayReplication&lt;/replication-impl&gt;       &lt;end-points&gt;          &lt;address&gt;10.3.5.1:5701&lt;/address&gt;          &lt;address&gt;10.3.5.2:5701&lt;/address&gt;       &lt;/end-points&gt;    &lt;/target-cluster&gt; &lt;/wan-replication&gt; ```  **Programmatic Configuration:**  ```java Config config = new Config(); WanReplicationConfig wrConfig = config.getWanReplicationConfig(); WanTargetClusterConfig  wtcConfig = wrConfig.getWanTargetClusterConfig();  wrConfig.setName(\&quot;my-wan-cluster\&quot;); wtcConfig.setGroupName(\&quot;tokyo\&quot;).setGroupPassword(\&quot;tokyo-pass\&quot;); wtcConfig.setReplicationImplObject(\&quot;com.hazelcast.wan.impl.WanNoDelayReplication\&quot;); ```   It has below elements.  - name: Name for your WAN replication configuration. - target-cluster: Create a group and its password using this element. - replication-impl: Name of the class implementation for the WAN replication. - end-points: IP addresses of the cluster members for which the WAN replication is implemented.      "
});



documentTitles["partitiongroupconfig.html#partition-group-configuration"] = "Partition Group Configuration";
index.add({
    url: "partitiongroupconfig.html#partition-group-configuration",
    title: "Partition Group Configuration",
    body: "## Partition Group Configuration  Hazelcast distributes key objects into partitions using a consistent hashing algorithm. Those partitions are assigned to nodes. An entry is stored in the node that is owner of the partition to which the entry's key is assigned. The total partition count is 271 by default; you can change it with the configuration property `hazelcast.map.partition.count`. Please see the [Advanced Configuration Properties section](#advanced-configuration-properties).  Along with those partitions, there are also copies of the partitions as backups. Backup partitions can have multiple copies due to the backup count defined in configuration, such as first backup partition, second backup partition, etc. A node cannot hold more than one copy of a partition (ownership or backup). By default, Hazelcast distributes partitions and their backup copies randomly and equally among cluster nodes, assuming all nodes in the cluster are identical.  But what if some nodes share the same JVM or physical machine or chassis and you want backups of these nodes to be assigned to nodes in another machine or chassis? What if processing or memory capacities of some nodes are different and you do not want an equal number of partitions to be assigned to all nodes?  You can group nodes in the same JVM (or physical machine) or nodes located in the same chassis. Or you can group nodes to create identical capacity. We call these groups **partition groups**. Partitions are assigned to those partition groups instead of to single nodes. Backups of these partitions are located in another partition group.  When you enable partition grouping, Hazelcast presents three choices for you to configure partition groups.  -   You can group nodes automatically using the IP addresses of nodes, so nodes sharing the same network interface will be grouped together. All members on the same host (IP address or domain name) will be a single partition group. This helps to avoid data loss when a physical server crashes, because multiple replicas of the same partition are not stored on the same host. But if there are multiple network interfaces or domain names per physical machine, that will make this assumption invalid.  ```xml &lt;partition-group enabled=\&quot;true\&quot; group-type=\&quot;HOST_AWARE\&quot; /&gt; ```  ```java Config config = ...; PartitionGroupConfig partitionGroupConfig = config.getPartitionGroupConfig(); partitionGroupConfig.setEnabled( true )     .setGroupType( MemberGroupType.HOST_AWARE ); ```  -   You can do custom grouping using Hazelcast's interface matching configuration. This way, you can add different and multiple interfaces to a group. You can also use wildcards in the interface addresses. For example, the users can create rack aware or data warehouse partition groups using custom partition grouping.  ```xml &lt;partition-group enabled=\&quot;true\&quot; group-type=\&quot;CUSTOM\&quot;&gt; &lt;member-group&gt;   &lt;interface&gt;10.10.0.*&lt;/interface&gt;   &lt;interface&gt;10.10.3.*&lt;/interface&gt;   &lt;interface&gt;10.10.5.*&lt;/interface&gt; &lt;/member-group&gt; &lt;member-group&gt;   &lt;interface&gt;10.10.10.10-100&lt;/interface&gt;   &lt;interface&gt;10.10.1.*&lt;/interface&gt;   &lt;interface&gt;10.10.2.*&lt;/interface&gt; &lt;/member-group &lt;/partition-group&gt; ```  ```java Config config = ...; PartitionGroupConfig partitionGroupConfig = config.getPartitionGroupConfig(); partitionGroupConfig.setEnabled( true )     .setGroupType( MemberGroupType.CUSTOM );  MemberGroupConfig memberGroupConfig = new MemberGroupConfig(); memberGroupConfig.addInterface( \&quot;10.10.0.*\&quot; ) .addInterface( \&quot;10.10.3.*\&quot; ).addInterface(\&quot;10.10.5.*\&quot; );  MemberGroupConfig memberGroupConfig2 = new MemberGroupConfig(); memberGroupConfig2.addInterface( \&quot;10.10.10.10-100\&quot; ) .addInterface( \&quot;10.10.1.*\&quot;).addInterface( \&quot;10.10.2.*\&quot; );  partitionGroupConfig.addMemberGroupConfig( memberGroupConfig ); partitionGroupConfig.addMemberGroupConfig( memberGroupConfig2 ); ```  -   You can give every member its own group. Each member is a group of its own and primary and backup partitions are distributed randomly (not on the same physical member). This gives the least amount of protection and is the default configuration for a Hazelcast cluster.  ```xml &lt;partition-group enabled=\&quot;true\&quot; group-type=\&quot;PER_MEMBER\&quot; /&gt; ```  ```java Config config = ...; PartitionGroupConfig partitionGroupConfig = config.getPartitionGroupConfig(); partitionGroupConfig.setEnabled( true )     .setGroupType( MemberGroupType.PER_MEMBER ); ```  "
});



documentTitles["listenerconfig.html#listener-configurations"] = "Listener Configurations";
index.add({
    url: "listenerconfig.html#listener-configurations",
    title: "Listener Configurations",
    body: "## Listener Configurations  You can add or remove event listeners to/from the related object using the Hazelcast API.  The downside of attaching listeners using this API is the possibility of missing events between the creation of an object and registering the listener. To overcome this race condition, Hazelcast introduces registration of listeners in configuration. You can register listeners using declarative, programmatic, or Spring configuration.  "
});

documentTitles["listenerconfig.html#membershiplistener"] = "MembershipListener";
index.add({
    url: "listenerconfig.html#membershiplistener",
    title: "MembershipListener",
    body: "####  MembershipListener  - Declarative Configuration  		```xml 		&lt;listeners&gt;           &lt;listener&gt;com.hazelcast.examples.MembershipListener&lt;/listener&gt; 		&lt;/listeners&gt; ```  - Programmatic Configuration  		```java 		config.addListenerConfig( 		    new ListenerConfig( \&quot;com.hazelcast.examples.MembershipListener\&quot; ) ); ```  - Spring XML configuration  		```xml 		&lt;hz:listeners&gt; 		  &lt;hz:listener class-name=\&quot;com.hazelcast.spring.DummyMembershipListener\&quot;/&gt; 		  &lt;hz:listener implementation=\&quot;dummyMembershipListener\&quot;/&gt; 		&lt;/hz:listeners&gt; ```  "
});

documentTitles["listenerconfig.html#distributedobjectlistener"] = "DistributedObjectListener";
index.add({
    url: "listenerconfig.html#distributedobjectlistener",
    title: "DistributedObjectListener",
    body: "#### DistributedObjectListener  - Declarative Configuration  		```xml 		&lt;listeners&gt; 		  &lt;listener&gt;com.hazelcast.examples.DistributedObjectListener&lt;/listener&gt; 		&lt;/listeners&gt; ```  - Programmatic Configuration  		```java 		config.addListenerConfig( 		    new ListenerConfig( \&quot;com.hazelcast.examples.DistributedObjectListener\&quot; ) ); ```  - Spring XML configuration  		```xml 		&lt;hz:listeners&gt; 		  &lt;hz:listener class-name=\&quot;com.hazelcast.spring.DummyDistributedObjectListener\&quot;/&gt; 		  &lt;hz:listener implementation=\&quot;dummyDistributedObjectListener\&quot;/&gt; 		&lt;/hz:listeners&gt; ```  "
});

documentTitles["listenerconfig.html#migrationlistener"] = "MigrationListener";
index.add({
    url: "listenerconfig.html#migrationlistener",
    title: "MigrationListener",
    body: "#### MigrationListener  - Declarative Configuration  		```xml 		&lt;listeners&gt; 		  &lt;listener&gt;com.hazelcast.examples.MigrationListener&lt;/listener&gt; 		&lt;/listeners&gt; ```  - Programmatic Configuration  		```java 		config.addListenerConfig(  		    new ListenerConfig( \&quot;com.hazelcast.examples.MigrationListener\&quot; ) ); ```  - Spring XML configuration  		```xml 		&lt;hz:listeners&gt; 		  &lt;hz:listener class-name=\&quot;com.hazelcast.spring.DummyMigrationListener\&quot;/&gt; 		  &lt;hz:listener implementation=\&quot;dummyMigrationListener\&quot;/&gt; 		&lt;/hz:listeners&gt; ```  "
});

documentTitles["listenerconfig.html#lifecyclelistener"] = "LifecycleListener";
index.add({
    url: "listenerconfig.html#lifecyclelistener",
    title: "LifecycleListener",
    body: "#### LifecycleListener  - Declarative Configuration  		```xml 		&lt;listeners&gt; 		  &lt;listener&gt;com.hazelcast.examples.LifecycleListener&lt;/listener&gt; 		&lt;/listeners&gt; ```  - Programmatic Configuration  		```java 		config.addListenerConfig( 		    new ListenerConfig( \&quot;com.hazelcast.examples.LifecycleListener\&quot; ) ); ```  - Spring XML configuration  		```xml 		&lt;hz:listeners&gt; 		  &lt;hz:listener class-name=\&quot;com.hazelcast.spring.DummyLifecycleListener\&quot;/&gt; 		  &lt;hz:listener implementation=\&quot;dummyLifecycleListener\&quot;/&gt; 		&lt;/hz:listeners&gt; ```  "
});

documentTitles["listenerconfig.html#entrylistener-for-imap"] = "EntryListener for IMap";
index.add({
    url: "listenerconfig.html#entrylistener-for-imap",
    title: "EntryListener for IMap",
    body: "#### EntryListener for IMap  - Declarative Configuration  		```xml 		&lt;map name=\&quot;default\&quot;&gt; 		  ... 		  &lt;entry-listeners&gt; 		    &lt;entry-listener include-value=\&quot;true\&quot; local=\&quot;false\&quot;&gt; 		        com.hazelcast.examples.EntryListener 		    &lt;/entry-listener&gt; 		  &lt;/entry-listeners&gt; 		&lt;/map&gt; ```  - Programmatic Configuration  		```java 		mapConfig.addEntryListenerConfig( 		    new EntryListenerConfig( \&quot;com.hazelcast.examples.EntryListener\&quot;,  		                             false, false ) ); ```  - Spring XML configuration  		```xml 		&lt;hz:map name=\&quot;default\&quot;&gt; 		  &lt;hz:entry-listeners&gt; 		    &lt;hz:entry-listener include-value=\&quot;true\&quot; 		         class-name=\&quot;com.hazelcast.spring.DummyEntryListener\&quot;/&gt; 		    &lt;hz:entry-listener implementation=\&quot;dummyEntryListener\&quot; local=\&quot;true\&quot;/&gt; 		  &lt;/hz:entry-listeners&gt; 		&lt;/hz:map&gt; ```  "
});

documentTitles["listenerconfig.html#entrylistener-for-multimap"] = "EntryListener for MultiMap";
index.add({
    url: "listenerconfig.html#entrylistener-for-multimap",
    title: "EntryListener for MultiMap",
    body: "#### EntryListener for MultiMap  - Declarative Configuration  		```xml 		&lt;multimap name=\&quot;default\&quot;&gt; 		  &lt;value-collection-type&gt;SET&lt;/value-collection-type&gt;     	    &lt;entry-listeners&gt;               &lt;entry-listener include-value=\&quot;true\&quot; local=\&quot;false\&quot;&gt;                   com.hazelcast.examples.EntryListener               &lt;/entry-listener&gt; 		    &lt;/entry-listeners&gt; 		&lt;/multimap&gt; ``` - Programmatic Configuration  		```java 		multiMapConfig.addEntryListenerConfig( 		    new EntryListenerConfig( \&quot;com.hazelcast.examples.EntryListener\&quot;, 		                             false, false ) ); ```  - Spring XML configuration  		```xml 		&lt;hz:multimap name=\&quot;default\&quot; value-collection-type=\&quot;LIST\&quot;&gt; 		  &lt;hz:entry-listeners&gt; 		    &lt;hz:entry-listener include-value=\&quot;true\&quot; 		         class-name=\&quot;com.hazelcast.spring.DummyEntryListener\&quot;/&gt; 		    &lt;hz:entry-listener implementation=\&quot;dummyEntryListener\&quot; local=\&quot;true\&quot;/&gt; 		  &lt;/hz:entry-listeners&gt; 		&lt;/hz:multimap&gt; ```  "
});

documentTitles["listenerconfig.html#itemlistener-for-iqueue"] = "ItemListener for IQueue";
index.add({
    url: "listenerconfig.html#itemlistener-for-iqueue",
    title: "ItemListener for IQueue",
    body: "#### ItemListener for IQueue  - Declarative Configuration  		```xml 		&lt;queue name=\&quot;default\&quot;&gt; 		  ... 		  &lt;item-listeners&gt; 	        &lt;item-listener include-value=\&quot;true\&quot;&gt; 	            com.hazelcast.examples.ItemListener 	        &lt;/item-listener&gt; 		  &lt;/item-listeners&gt; 		&lt;/queue&gt; ```  - Programmatic Configuration  		```java 		queueConfig.addItemListenerConfig( 		    new ItemListenerConfig( \&quot;com.hazelcast.examples.ItemListener\&quot;, true ) ); ```  - Spring XML configuration  		```xml 		&lt;hz:queue name=\&quot;default\&quot; &gt; 		  &lt;hz:item-listeners&gt; 		    &lt;hz:item-listener include-value=\&quot;true\&quot; 		        class-name=\&quot;com.hazelcast.spring.DummyItemListener\&quot;/&gt; 		  &lt;/hz:item-listeners&gt; 		&lt;/hz:queue&gt; ```  "
});

documentTitles["listenerconfig.html#messagelistener-for-itopic"] = "MessageListener for ITopic";
index.add({
    url: "listenerconfig.html#messagelistener-for-itopic",
    title: "MessageListener for ITopic",
    body: "#### MessageListener for ITopic  - Declarative Configuration  		```xml 		&lt;topic name=\&quot;default\&quot;&gt; 		  &lt;message-listeners&gt; 		    &lt;message-listener&gt; 		        com.hazelcast.examples.MessageListener 		    &lt;/message-listener&gt; 		  &lt;/message-listeners&gt; 		&lt;/topic&gt; ```  - Programmatic Configuration  		```java 		topicConfig.addMessageListenerConfig( 		    new ListenerConfig( \&quot;com.hazelcast.examples.MessageListener\&quot; ) ); ```  - Spring XML configuration  		```xml 		&lt;hz:topic name=\&quot;default\&quot;&gt; 		  &lt;hz:message-listeners&gt; 		    &lt;hz:message-listener  		        class-name=\&quot;com.hazelcast.spring.DummyMessageListener\&quot;/&gt; 		  &lt;/hz:message-listeners&gt; 		&lt;/hz:topic&gt; ```  "
});

documentTitles["listenerconfig.html#clientlistener"] = "ClientListener";
index.add({
    url: "listenerconfig.html#clientlistener",
    title: "ClientListener",
    body: "#### ClientListener  - Declarative Configuration  		```xml 		&lt;listeners&gt; 		  &lt;listener&gt;com.hazelcast.examples.ClientListener&lt;/listener&gt; 		&lt;/listeners&gt; ```  - Programmatic Configuration  		```java 		topicConfig.addMessageListenerConfig( 		    new ListenerConfig( \&quot;com.hazelcast.examples.ClientListener\&quot; ) ); ```  - Spring XML configuration  		```xml 		&lt;hz:listeners&gt; 		  &lt;hz:listener class-name=\&quot;com.hazelcast.spring.DummyClientListener\&quot;/&gt; 		  &lt;hz:listener implementation=\&quot;dummyClientListener\&quot;/&gt; 		&lt;/hz:listeners&gt; ``` "
});



documentTitles["logging.html#logging-configuration"] = "Logging Configuration";
index.add({
    url: "logging.html#logging-configuration",
    title: "Logging Configuration",
    body: "## Logging Configuration  Hazelcast has a flexible logging configuration and does not depend on any logging framework except JDK logging. It has built-in adaptors for a number of logging frameworks and it also supports custom loggers by providing logging interfaces.  To use built-in adaptors, set the `hazelcast.logging.type` property to one of the predefined types below.  -   **jdk**: JDK logging (default)  -   **log4j**: Log4j  -   **slf4j**: Slf4j  -   **none**: disable logging  You can set `hazelcast.logging.type` through declarative configuration, programmatic configuration, or JVM system property.   ![image](images/NoteSmall.jpg) ***NOTE:*** *If you choose to use `log4j` or `slf4j`, you should include the proper dependencies in the classpath.* &lt;br&gt;&lt;/br&gt;  **Declarative Configuration**  ```xml &lt;hazelcast xsi:schemaLocation=\&quot;http://www.hazelcast.com/schema/config     http://www.hazelcast.com/schema/config/hazelcast-config-3.0.xsd\&quot;     xmlns=\&quot;http://www.hazelcast.com/schema/config\&quot;     xmlns:xsi=\&quot;http://www.w3.org/2001/XMLSchema-instance\&quot;&gt;    ....    &lt;properties&gt;     &lt;property name=\&quot;hazelcast.logging.type\&quot;&gt;jdk&lt;/property&gt;     ....   &lt;/properties&gt; &lt;/hazelcast&gt; ```  **Programmatic Configuration**  ```java Config config = new Config() ; config.setProperty( \&quot;hazelcast.logging.type\&quot;, \&quot;log4j\&quot; ); ```  **System Property**  	-	Using JVM parameter: `java -Dhazelcast.logging.type=slf4j` 	-	Using System class: `System.setProperty( \&quot;hazelcast.logging.type\&quot;, \&quot;none\&quot; );`   If the provided logging mechanisms are not satisfactory, you can implement your own using the custom logging feature. To use it, implement the `com.hazelcast.logging.LoggerFactory` and `com.hazelcast.logging.ILogger` interfaces and set the system property `hazelcast.logging.class` as your custom `LoggerFactory` class name.  ```plain -Dhazelcast.logging.class=foo.bar.MyLoggingFactory ```  You can also listen to logging events generated by Hazelcast runtime by registering `LogListener`s to `LoggingService`.  ```java LogListener listener = new LogListener() {   public void log( LogEvent logEvent ) {     // do something   } } HazelcastInstance instance = Hazelcast.newHazelcastInstance(); LoggingService loggingService = instance.getLoggingService(); loggingService.addLogListener( Level.INFO, listener ); ``` Through the `LoggingService`, you can get the currently used ILogger implementation and log your own messages too.  ![image](images/NoteSmall.jpg) ***NOTE:*** *If you are not using command line for configuring logging, you should be careful about Hazelcast classes. They may be defaulted to `jdk` logging before newly configured logging is read. When logging mechanism is selected, it will not change.*  &lt;br&gt;&lt;/br&gt; "
});



documentTitles["configurationproperties.html#advanced-configuration-properties"] = "Advanced Configuration Properties";
index.add({
    url: "configurationproperties.html#advanced-configuration-properties",
    title: "Advanced Configuration Properties",
    body: "## Advanced Configuration Properties  Hazelcast has advanced configuration properties. You can set them as property name and value pairs through declarative configuration, programmatic configuration, or JVM system property.  "
});

documentTitles["configurationproperties.html#declarative-configuration"] = "Declarative Configuration";
index.add({
    url: "configurationproperties.html#declarative-configuration",
    title: "Declarative Configuration",
    body: "### Declarative Configuration  ```xml &lt;hazelcast xsi:schemaLocation=\&quot;http://www.hazelcast.com/schema/config     http://www.hazelcast.com/schema/config/hazelcast-config-3.0.xsd\&quot;     xmlns=\&quot;http://www.hazelcast.com/schema/config\&quot;     xmlns:xsi=\&quot;http://www.w3.org/2001/XMLSchema-instance\&quot;&gt;    ....   &lt;properties&gt;     &lt;property name=\&quot;hazelcast.property.foo\&quot;&gt;value&lt;/property&gt;     ....   &lt;/properties&gt; &lt;/hazelcast&gt; ``` "
});

documentTitles["configurationproperties.html#programmatic-configuration"] = "Programmatic Configuration";
index.add({
    url: "configurationproperties.html#programmatic-configuration",
    title: "Programmatic Configuration",
    body: "### Programmatic Configuration  ```java Config config = new Config() ; config.setProperty( \&quot;hazelcast.property.foo\&quot;, \&quot;value\&quot; ); ```  "
});

documentTitles["configurationproperties.html#system-property"] = "System Property";
index.add({
    url: "configurationproperties.html#system-property",
    title: "System Property",
    body: "### System Property  1. Using JVM parameter: `java -Dhazelcast.property.foo=value`  2. Using System class: `System.setProperty( \&quot;hazelcast.property.foo\&quot;, \&quot;value\&quot; );`  The table below lists the advanced configuration properties with their descriptions.    Property Name | Default Value | Type | Description :--------------|:---------------|:------|:------------ `hazelcast.health.monitoring.level`|SILENT|string|Health monitoring log level. When *SILENT*, logs are printed only when values exceed some predefined threshold. When *NOISY*, logs are always printed periodically. Set to *OFF* to turn off completely. `hazelcast.health.monitoring.delay.seconds`|30|int|Health monitoring logging interval in seconds. `hazelcast.version.check.enabled` | true | bool  |   Enable Hazelcast new version check on startup. `hazelcast.prefer.ipv4.stack` | true | bool  |   Prefer Ipv4 network interface when picking a local address. `hazelcast.io.thread.count` | 3 | int | Number of input and output threads. `hazelcast.operation.thread.count` | -1 | int | Number of partition based operation handler threads. `-1` means CPU core count x 2. `hazelcast.operation.generic.thread.count` | -1 | int | Number of generic operation handler threads. `-1` means CPU core count x 2. `hazelcast.event.thread.count` | 5 | int | Number of event handler threads. `hazelcast.event.queue.capacity` | 1000000 | int | Capacity of the internal event queue. `hazelcast.event.queue.timeout.millis` | 250 | int | Timeout in milliseconds to enqueue events to the event queue. `hazelcast.connect.all.wait.seconds` | 120 | int | Timeout in seconds to connect all other cluster members when a member is joining a cluster. `hazelcast.memcache.enabled`| true | bool |   Enable [Memcache](#memcache-client) client request listener service. `hazelcast.rest.enabled` | true | bool |   Enable [REST](#rest-client) client request listener service. `hazelcast.map.load.chunk.size` | 1000 | int |   Chunk size for [MapLoader](#persistence) 's map initialization process (MapLoder.loadAllKeys()). `hazelcast.merge.first.run.delay.seconds` | 300 | int |   Initial run delay of [split brain/merge process](#network-partitioning-split-brain-syndrome) in seconds. `hazelcast.merge.next.run.delay.seconds` | 120 | int |   Run interval of [split brain/merge process](#network-partitioning-split-brain-syndrome) in seconds. `hazelcast.operation.call.timeout.millis`| 60000 | int | Timeout to wait for a response when a remote call is sent, in milliseconds. `hazelcast.socket.bind.any` | true | bool | Bind both server-socket and client-sockets to any local interface. `hazelcast.socket.server.bind.any` | true | bool | Bind server-socket to any local interface. If not set, `hazelcast.socket.bind.any` will be used as default. `hazelcast.socket.client.bind.any` | true | bool |   Bind client-sockets to any local interface. If not set, `hazelcast.socket.bind.any` will be used as default. `hazelcast.socket.client.bind`|true|bool|Bind the client socket to an interface when connecting to a remote server socket. When set to `false`, the client socket is not bound to any interface. `hazelcast.socket.receive.buffer.size` | 32 | int | Socket receive buffer (`SO_RCVBUF`) size in KB. `hazelcast.socket.send.buffer.size` | 32 | int  | Socket send buffer (`SO_SNDBUF`) size in KB. `hazelcast.socket.linger.seconds`|0|int|Set socket `SO_LINGER` option. `hazelcast.socket.keep.alive` | true | bool  | Socket set keep alive (`SO_KEEPALIVE`). `hazelcast.socket.no.delay` | true | bool  |   Socket set TCP no delay. `hazelcast.shutdownhook.enabled` | true | bool  | Enable the Hazelcast shutdownhook thread. `hazelcast.wait.seconds.before.join` | 5 | int  | Wait time in seconds before the join operation. `hazelcast.max.join.seconds`|300|int| Join timeout. The maximum time in seconds to try to join before giving up. `hazelcast.max.join.merge.target.seconds`|20|int|Split-brain merge timeout for a specific target. `hazelcast.max.wait.seconds.before.join` | 20 | int  |   Maximum wait time before the join operation. `hazelcast.heartbeat.interval.seconds` | 1 | int  |   Heartbeat send interval in seconds. `hazelcast.max.no.heartbeat.seconds` | 500 | int  |   Maximum timeout for heartbeat in seconds for a node to assume it is dead. `hazelcast.max.no.master.confirmation.seconds` | 450 | int  |   Maximum timeout of master confirmation from other nodes. `hazelcast.master.confirmation.interval.seconds` | 30 | int  |   Interval at which nodes send master confirmation. `hazelcast.member.list.publish.interval.seconds` | 600 | int  |   Interval at which master node publishes a member list. `hazelcast.icmp.enabled` | false | bool  |   Enable ICMP ping. `hazelcast.icmp.timeout` | 1000 | int |   ICMP timeout in milliseconds. `hazelcast.icmp.ttl` | 0 | int |   ICMP TTL (maximum numbers of hops to try). `hazelcast.initial.min.cluster.size` | 0 | int  |   Initial expected cluster size to wait before node to start completely. `hazelcast.initial.wait.seconds` | 0 | int  |   Initial time in seconds to wait before node to start completely. `hazelcast.map.replica.wait.seconds.for.scheduled.tasks`|10|int|Scheduler delay for the map tasks to be executed on backup members. `hazelcast.partition.count` | 271 | int  |   Total partition count. `hazelcast.logging.type` | jdk | enum |   Name of [logging](#logging-configuration) framework type to send logging events. `hazelcast.jmx` | false | bool  |   Enable [JMX](#monitoring-with-jmx) agent. `hazelcast.jmx.detailed` | false | bool  |   Enable detailed views on [JMX](#monitoring-with-jmx). `hazelcast.mc.max.visible.instance.count` | 100 | int  |   Management Center maximum visible instance count. `hazelcast.mc.url.change.enabled` | true | bool  |   Management Center changing server url is enabled. `hazelcast.connection.monitor.interval` | 100 | int  |   Minimum interval in milliseconds to consider a connection error as critical. `hazelcast.connection.monitor.max.faults` | 3 | int  |   Maximum IO error count before disconnecting from a node. `hazelcast.partition.migration.interval` | 0 | int |   Interval to run partition migration tasks in seconds. `hazelcast.partition.migration.timeout` | 300 | int  |   Timeout for partition migration tasks in seconds. `hazelcast.partition.migration.zip.enabled`|true|bool|Enable compression during partition migration. `hazelcast.partition.table.send.interval`|15|int|Interval for publishing the partition table periodically to all cluster members. `hazelcast.partition.backup.sync.interval`|30|int|Interval for syncing backup replicas. `hazelcast.partitioning.strategy.class`|null|string|Class name implementing `com.hazelcast.core.PartitioningStrategy`, which defines the key to partition mapping. `hazelcast.migration.min.delay.on.member.removed.seconds`|5|int|Minimum delay in seconds between the detection of a member that has left and the start of the rebalancing process. `hazelcast.graceful.shutdown.max.wait` | 600 | int  |   Maximum wait in seconds during a graceful shutdown. `hazelcast.system.log.enabled` | true | bool  |   Enable system logs. `hazelcast.enterprise.license.key` | null | string  |   [Hazelcast Enterprise](http://www.hazelcast.com/products.jsp) license key. `hazelcast.client.heartbeat.timeout`|300000|string|Timeout for the heartbeat messages sent by the client to members. If no messages pass between client and member within this time in milliseconds, the connection will be closed. `hazelcast.client.heartbeat.interval`|10000|string|The frequency of heartbeat messages sent by the clients to members. `hazelcast.client.max.failed.heartbeat.count`|3|string|When the count of failed heartbeats sent to members reaches this value, the cluster is deemed as dead by the client. `hazelcast.client.request.retry.count`|20|string|The retry count of the connection requests by the client to the members. `hazelcast.client.request.retry.wait.time`|250|string|The frequency of the connection retries. `hazelcast.client.event.thread.count`|5|string|Thread count for handling incoming event packets. `hazelcast.client.event.queue.capacity`|1000000|string|Default value of the capacity of the executor that handles incoming event packets.  "
});



documentTitles["networkpartitioning.html#network-partitioning-split-brain-syndrome"] = "Network Partitioning - Split Brain Syndrome";
index.add({
    url: "networkpartitioning.html#network-partitioning-split-brain-syndrome",
    title: "Network Partitioning - Split Brain Syndrome",
    body: "# Network Partitioning - Split Brain Syndrome  Imagine that you have 10-node cluster and that the network is divided into two in a way that 4 servers cannot see the other 6. As a result, you end up having two separate clusters: 4-node cluster and 6-node cluster. Members in each sub-cluster think that the other nodes are dead even though they are not. This situation is called Network Partitioning (a.k.a. *Split-Brain Syndrome*).  However, these two clusters have a combination of the 271 (using default) primary and backup partitions. It’s very likely that not all of the 271 partitions, including both primaries and backups, exist in both mini-clusters. Therefore, from each mini-cluster’s perspective, data has been lost as some partitions no longer exist (they exist on the other segment).  "
});

documentTitles["networkpartitioning.html#understanding-partition-recreation"] = "Understanding Partition Recreation";
index.add({
    url: "networkpartitioning.html#understanding-partition-recreation",
    title: "Understanding Partition Recreation",
    body: "## Understanding Partition Recreation  If a MapStore was in use, those lost partitions would be reloaded from some database, making each mini-cluster complete. Each mini-cluster will then recreate the missing primary partitions and continue to store data in them, including backups on the other nodes.  "
});

documentTitles["networkpartitioning.html#understanding-backup-partition-creation"] = "Understanding Backup Partition Creation";
index.add({
    url: "networkpartitioning.html#understanding-backup-partition-creation",
    title: "Understanding Backup Partition Creation",
    body: "## Understanding Backup Partition Creation  When primary partitions exist without a backup, a backup version problem will be detected and a backup partition will be created. When backups exist without a primary, the backups will be promoted to primary partitions and new backups will be created with proper versioning. At this time, both mini-clusters have repaired themselves with all 271 partitions with backups, and continue to handle traffic without any knowledge of each other. Given that they have enough remaining memory (assumption), they are just smaller and can handle less throughput.  "
});

documentTitles["networkpartitioning.html#understanding-the-update-overwrite-scenario"] = "Understanding The Update Overwrite Scenario";
index.add({
    url: "networkpartitioning.html#understanding-the-update-overwrite-scenario",
    title: "Understanding The Update Overwrite Scenario",
    body: "## Understanding The Update Overwrite Scenario  If a MapStore is in use and the network to the database is available, one or both of the mini-clusters will write updates to the same database. There is a potential for the mini-clusters to overwrite the same cache entry records if modified in both mini-clusters. This overwrite scenario represents a potential data loss, and thus the database design should consider an insert and aggregate on read or version strategy rather than update records in place.  If the network to the database is not available, then based on the configured or coded consistency level or transaction, entry updates are held in cache or updates are rejected (fully synchronous and consistent). When held in cache, the updates will be considered dirty and will be written to the database when it becomes available. You can view the dirty entry counts per cluster member in the Management Center web console (please see the [Map Monitoring section](#map-monitoring)).  "
});

documentTitles["networkpartitioning.html#what-happens-when-the-network-failure-is-fixed"] = "What Happens When The Network Failure Is Fixed";
index.add({
    url: "networkpartitioning.html#what-happens-when-the-network-failure-is-fixed",
    title: "What Happens When The Network Failure Is Fixed",
    body: "## What Happens When The Network Failure Is Fixed  Since it is a network failure, there is no way to programmatically avoid your application running as two separate independent clusters. But what will happen after the network failure is fixed and connectivity is restored between these two clusters? Will these two clusters merge into one again? If they do, how are the data conflicts resolved, because you might end up having two different values for the same key in the same map?  When the network is restored, all 271 partitions should exist in both mini-clusters and they should all undergo the merge. Once all primaries are merged, all backups are rewritten so their versions are correct. You may want to write a merge policy using the `MapMergePolicy` interface that rebuilds the entry from the database rather than from memory.  The only metadata available for merge decisions are from the `EntryView` interface that includes object size (cost), hits count, last updated/stored dates, and a version number that starts at zero and is incremented for each entry update. You could also create your own versioning scheme or capture a time series of deltas to reconstruct an entry.  "
});

documentTitles["networkpartitioning.html#how-hazelcast-split-brain-merge-happens"] = "How Hazelcast Split Brain Merge Happens";
index.add({
    url: "networkpartitioning.html#how-hazelcast-split-brain-merge-happens",
    title: "How Hazelcast Split Brain Merge Happens",
    body: "## How Hazelcast Split Brain Merge Happens  Here is, step by step, how Hazelcast split brain merge happens:  1.  The oldest member of the cluster checks if there is another cluster with the same *group-name* and *group-password* in the network.  2.  If the oldest member finds such a cluster, then it figures out which cluster should merge to the other.  3.  Each member of the merging cluster will do the following.  	-   Pause.  	-   Take locally owned map entries.  	-   Close all of its network connections (detach from its cluster).  	-   Join to the new cluster.  	-   Send merge request for each of its locally owned map entry.  	-   Resume.  Each member of the merging cluster rejoins the new cluster and sends a merge request for each of its locally owned map entries. Two important points:  -	The smaller cluster will merge into the bigger one. If they have equal number of members then a hashing algorithm determines the merging cluster. -	Each cluster may have different versions of the same key in the same map. The destination cluster will decide how to handle merging entry based on the `MergePolicy` set for that map. There are built-in merge policies such as `PassThroughMergePolicy`, `PutIfAbsentMapMergePolicy`, `HigherHitsMapMergePolicy` and `LatestUpdateMapMergePolicy`. You can develop your own merge policy by implementing `com.hazelcast.map.merge.MapMergePolicy`. You should set the full class name of your implementation to the `merge-policy` configuration.   ```java public interface MergePolicy {   /**   * Returns the value of the entry after the merge   * of entries with the same key. Returning value can be   * You should consider the case where existingEntry is null.   *   * @param mapName       name of the map   * @param mergingEntry  entry merging into the destination cluster   * @param existingEntry existing entry in the destination cluster   * @return final value of the entry. If returns null then entry will be removed.   */   Object merge( String mapName, EntryView mergingEntry, EntryView existingEntry ); } ```  "
});

documentTitles["networkpartitioning.html#specifying-merge-policies"] = "Specifying Merge Policies";
index.add({
    url: "networkpartitioning.html#specifying-merge-policies",
    title: "Specifying Merge Policies",
    body: "## Specifying Merge Policies  Here is how merge policies are specified per map:  ```xml &lt;hazelcast&gt;   ...   &lt;map name=\&quot;default\&quot;&gt;     &lt;backup-count&gt;1&lt;/backup-count&gt;     &lt;eviction-policy&gt;NONE&lt;/eviction-policy&gt;     &lt;max-size&gt;0&lt;/max-size&gt;     &lt;eviction-percentage&gt;25&lt;/eviction-percentage&gt;     &lt;!--       While recovering from split-brain (network partitioning),       map entries in the small cluster will merge into the bigger cluster       based on the policy set here. When an entry merge into the       cluster, there might an existing entry with the same key already.       Values of these entries might be different for that same key.       Which value should be set for the key? Conflict is resolved by       the policy set here. Default policy is hz.ADD_NEW_ENTRY        There are built-in merge policies such as       There are built-in merge policies such as       com.hazelcast.map.merge.PassThroughMergePolicy; entry will be added if           there is no existing entry for the key.       com.hazelcast.map.merge.PutIfAbsentMapMergePolicy ; entry will be           added if the merging entry doesn't exist in the cluster.       com.hazelcast.map.merge.HigherHitsMapMergePolicy ; entry with the           higher hits wins.       com.hazelcast.map.merge.LatestUpdateMapMergePolicy ; entry with the           latest update wins.     --&gt;     &lt;merge-policy&gt;MY_MERGE_POLICY_CLASS&lt;/merge-policy&gt;   &lt;/map&gt;    ... &lt;/hazelcast&gt; ```  ![image](images/NoteSmall.jpg) ***NOTE:*** *Map is the only Hazelcast distributed data structure that merges after a split brain syndrome. For the other data structures (e.g. Queue, Topic, IdGenerator, etc. ), one instance of that data structure is chosen after split brain syndrome. * "
});



documentTitles["licenses.html#license-questions"] = "License Questions";
index.add({
    url: "licenses.html#license-questions",
    title: "License Questions",
    body: "# License Questions  Hazelcast is distributed using the [Apache License 2](http://www.apache.org/licenses/LICENSE-2.0), therefore permissions are granted to use, reproduce and distribute it along with any kind of open source and closed source applications.  Hazelcast Enterprise is a commercial product of Hazelcast, Inc. and is distributed under a commercial license to be acquired before using it in any type of released software. Feel free to contact [Hazelcast sales department](http://hazelcast.com/contact/) for more information on commercial offers.  Depending on the used feature-set, Hazelcast has certain runtime dependencies which might have different licenses. Following is a list of dependencies and their respective licenses.  "
});

documentTitles["licenses.html#embedded-dependencies"] = "Embedded Dependencies";
index.add({
    url: "licenses.html#embedded-dependencies",
    title: "Embedded Dependencies",
    body: "## Embedded Dependencies  Embedded dependencies are merged (shaded) with the Hazelcast codebase at compile-time. These dependencies become an integral part of the Hazelcast distribution.  For license files of embedded dependencies please see the `license` directory of the Hazelcast distribution, available at our [download page](http://hazelcast.org/download/).  "
});

documentTitles["licenses.html#minimal-json"] = "minimal-json";
index.add({
    url: "licenses.html#minimal-json",
    title: "minimal-json",
    body: "##### minimal-json  minimal-json is a JSON parsing and generation library which is a part of the Hazelcast distribution. It is used for communication between the Hazelcast cluster and the Management Center.  minimal-json is distributed under the [MIT license](http://opensource.org/licenses/MIT) and offers the same rights to add, use, modify, distribute the source code as the Apache License 2.0 that Hazelcast uses. However, some other restrictions might apply.  "
});

documentTitles["licenses.html#runtime-dependencies"] = "Runtime Dependencies";
index.add({
    url: "licenses.html#runtime-dependencies",
    title: "Runtime Dependencies",
    body: "## Runtime Dependencies  Depending on the used features, additional dependencies might be added to the dependency set. Those runtime dependencies might have other licenses. See the following list of additional runtime dependencies.  "
});

documentTitles["licenses.html#spring-framework"] = "Spring Framework";
index.add({
    url: "licenses.html#spring-framework",
    title: "Spring Framework",
    body: "##### Spring Framework  Hazelcast offers a tight integration into the Spring Framework. Hazelcast can be configured and controlled using Spring.  The Spring Framework is distributed under the terms of the [Apache License 2](http://www.apache.org/licenses/LICENSE-2.0) and therefore fully compatible with Hazelcast.  "
});

documentTitles["licenses.html#hibernate"] = "Hibernate";
index.add({
    url: "licenses.html#hibernate",
    title: "Hibernate",
    body: "##### Hibernate  Hazelcast integrates itself into Hibernate as a second-level cache provider.  Hibernate is distributed under the terms of the [Lesser General Public License 2.1](https://www.gnu.org/licenses/lgpl-2.1.html),  also known as LGPL. Please read carefully the terms of the LGPL since restrictions might apply.  "
});

documentTitles["licenses.html#apache-tomcat"] = "Apache Tomcat";
index.add({
    url: "licenses.html#apache-tomcat",
    title: "Apache Tomcat",
    body: "##### Apache Tomcat  Hazelcast Enterprise offers native integration into Apache Tomcat for web session clustering.  Apache Tomcat is distributed under the terms of the [Apache License 2](http://www.apache.org/licenses/LICENSE-2.0) and therefore fully compatible with Hazelcast.  "
});

documentTitles["licenses.html#eclipse-jetty"] = "Eclipse Jetty";
index.add({
    url: "licenses.html#eclipse-jetty",
    title: "Eclipse Jetty",
    body: "##### Eclipse Jetty  Hazelcast Enterprise offers native integration into Jetty for web session clustering.  Jetty is distributed with a dual licensing strategy. It is licensed under the terms of the [Apache License 2](http://www.apache.org/licenses/LICENSE-2.0) and under the [Eclipse Public License v1.0](https://www.eclipse.org/legal/epl-v10.html), also known as EPL. Due to the Apache License, it is fully compatible with Hazelcast.  "
});

documentTitles["licenses.html#jcache-api-jsr-107"] = "JCache API (JSR 107)";
index.add({
    url: "licenses.html#jcache-api-jsr-107",
    title: "JCache API (JSR 107)",
    body: "##### JCache API (JSR 107)  Hazelcast offers a native implementation for JCache (JSR 107) which has a runtime dependency to the JCache API.  The JCache API is distributed under the terms of the so called [Specification License](https://jcp.org/aboutJava/communityprocess/licenses/jsr107/Spec-License-JSR-107-10_22_12.pdf). Please read carefully the terms of this license since restrictions might apply.  "
});

documentTitles["licenses.html#boost-c-libraries"] = "Boost C++ Libraries";
index.add({
    url: "licenses.html#boost-c-libraries",
    title: "Boost C++ Libraries",
    body: "##### Boost C++ Libraries  Hazelcast Enterprise offers a native C++ client which has a link-time dependency to the Boost C++ Libraries.  The Boost Libraries are distributed under the terms of the [Boost Software License](http://www.boost.org/LICENSE_1_0.txt) which is very similar to the MIT or BSD license. Please read carefully the terms of this license since restrictions might apply.  "
});



documentTitles["faq.html#frequently-asked-questions"] = "Frequently Asked Questions";
index.add({
    url: "faq.html#frequently-asked-questions",
    title: "Frequently Asked Questions",
    body: "# Frequently Asked Questions     "
});

documentTitles["faq.html#why-271-as-the-default-partition-count"] = "Why 271 as the default partition count";
index.add({
    url: "faq.html#why-271-as-the-default-partition-count",
    title: "Why 271 as the default partition count",
    body: "## Why 271 as the default partition count  The partition count of 271, being a prime number, is a good choice because it will be distributed to the nodes almost evenly. For a small to medium sized cluster, the count of 271 gives an almost even partition distribution and optimal-sized partitions.  As your cluster becomes bigger, you should make this count bigger to have evenly distributed partitions.  "
});

documentTitles["faq.html#is-hazelcast-thread-safe"] = "Is Hazelcast thread safe";
index.add({
    url: "faq.html#is-hazelcast-thread-safe",
    title: "Is Hazelcast thread safe",
    body: "## Is Hazelcast thread safe  Yes. All Hazelcast data structures are thread safe.  "
});

documentTitles["faq.html#how-do-nodes-discover-each-other"] = "How do nodes discover each other";
index.add({
    url: "faq.html#how-do-nodes-discover-each-other",
    title: "How do nodes discover each other",
    body: "## How do nodes discover each other   When a node is started in a cluster, it will dynamically and automatically be discovered. There are three types of discovery.  -	Multicast discovery: nodes in a cluster discover each other by multicast, by default.  -	Discovery by TCP/IP: the first node created in the cluster (leader) will form a list of IP addresses of other joining nodes and send this list to these nodes so the nodes will know each other. -	If your application is placed on Amazon EC2, Hazelcast has an automatic discovery mechanism. You will give your Amazon credentials and the joining node will be discovered automatically.  Once nodes are discovered, all the communication between them will be via TCP/IP.  "
});

documentTitles["faq.html#what-happens-when-a-node-goes-down"] = "What happens when a node goes down";
index.add({
    url: "faq.html#what-happens-when-a-node-goes-down",
    title: "What happens when a node goes down",
    body: "## What happens when a node goes down  Once a node is gone (e.g. crashes) and since data in each node has a backup in other nodes:  -	First, the backups in other nodes are restored. -	Then, data from these restored backups are recovered. -	And finally, backups for these recovered data are formed.  So eventually, no data is lost.  "
});

documentTitles["faq.html#how-do-i-test-the-connectivity"] = "How do I test the connectivity";
index.add({
    url: "faq.html#how-do-i-test-the-connectivity",
    title: "How do I test the connectivity",
    body: "## How do I test the connectivity  If you notice that there is a problem with a node joining to a cluster, you may want to perform a connectivity test between the node to be joined and a node from the cluster. You can use the `iperf` tool for this purpose. For example, you can execute the below command on one node (i.e. listening on port 5701).  `iperf -s -p 5701`  And you can execute the below command on the other node.  `iperf -c` *`&lt;IP address&gt;`* `-d -p 5701`  The output should include connection information such as the IP addresses, transfer speed, and bandwidth. Otherwise, if the output says `No route to host`, it means a network connection problem exists.   "
});

documentTitles["faq.html#how-do-i-choose-keys-properly"] = "How do I choose keys properly";
index.add({
    url: "faq.html#how-do-i-choose-keys-properly",
    title: "How do I choose keys properly",
    body: "## How do I choose keys properly  When you store a key &amp; value in a distributed Map, Hazelcast serializes the key and value, and stores the byte array version of them in local ConcurrentHashMaps. These ConcurrentHashMaps use `equals` and `hashCode` methods of byte array version of your key. It does not take into account the actual `equals` and `hashCode` implementations of your objects. So it is important that you choose your keys in a proper way.   Implementing `equals` and `hashCode` is not enough, it is also important that the object is always serialized into the same byte array. All primitive types like String, Long, Integer, etc. are good candidates for keys to be used in Hazelcast. An unsorted Set is an example of a very bad candidate because Java Serialization may serialize the same unsorted set in two different byte arrays.   "
});

documentTitles["faq.html#how-do-i-reflect-value-modifications"] = "How do I reflect value modifications";
index.add({
    url: "faq.html#how-do-i-reflect-value-modifications",
    title: "How do I reflect value modifications",
    body: "## How do I reflect value modifications  Hazelcast always return a clone copy of a value. Modifying the returned value does not change the actual value in the map (or multimap, list, set). You should put the modified value back to make changes visible to all nodes.  ```java V value = map.get( key ); value.updateSomeProperty(); map.put( key, value ); ```  Collections which return values of methods —such as `IMap.keySet`, `IMap.values`, `IMap.entrySet`, `MultiMap.get`, `MultiMap.remove`, `IMap.keySet`, `IMap.values`— contain cloned values. These collections are NOT backed up by related Hazelcast objects. Therefore, changes to them are **NOT** reflected in the originals, and vice-versa.  "
});

documentTitles["faq.html#how-do-i-test-my-hazelcast-cluster"] = "How do I test my Hazelcast cluster";
index.add({
    url: "faq.html#how-do-i-test-my-hazelcast-cluster",
    title: "How do I test my Hazelcast cluster",
    body: "## How do I test my Hazelcast cluster  Hazelcast allows you to create more than one instance on the same JVM. Each member is called `HazelcastInstance` and each will have its own configuration, socket and threads, i.e. you can treat them as totally separate instances.   This enables you to write and to run cluster unit tests on a single JVM. Because you can use this feature for creating separate members different applications running on the same JVM (imagine running multiple web applications on the same JVM), you can also use this feature for testing your Hazelcast cluster.  Let's say you want to test if two members have the same size of a map.  ```java @Test public void testTwoMemberMapSizes() {   // start the first member   HazelcastInstance h1 = Hazelcast.newHazelcastInstance();   // get the map and put 1000 entries   Map map1 = h1.getMap( \&quot;testmap\&quot; );   for ( int i = 0; i &lt; 1000; i++ ) {     map1.put( i, \&quot;value\&quot; + i );   }   // check the map size   assertEquals( 1000, map1.size() );   // start the second member   HazelcastInstance h2 = Hazelcast.newHazelcastInstance();   // get the same map from the second member   Map map2 = h2.getMap( \&quot;testmap\&quot; );   // check the size of map2   assertEquals( 1000, map2.size() );   // check the size of map1 again   assertEquals( 1000, map1.size() ); } ```  In the test above, everything happens in the same thread. When developing a multi-threaded test, you need to carefully handle coordination of the thread executions. it is highly recommended that you use `CountDownLatch` for thread coordination (you can certainly use other ways). Here is an example where we need to listen for messages and make sure that we got these messages.  ```java @Test public void testTopic() {   // start two member cluster   HazelcastInstance h1 = Hazelcast.newHazelcastInstance();   HazelcastInstance h2 = Hazelcast.newHazelcastInstance();   String topicName = \&quot;TestMessages\&quot;;   // get a topic from the first member and add a messageListener   ITopic&lt;String&gt; topic1 = h1.getTopic( topicName );   final CountDownLatch latch1 = new CountDownLatch( 1 );   topic1.addMessageListener( new MessageListener() {     public void onMessage( Object msg ) {       assertEquals( \&quot;Test1\&quot;, msg );       latch1.countDown();     }   });   // get a topic from the second member and add a messageListener   ITopic&lt;String&gt; topic2 = h2.getTopic(topicName);   final CountDownLatch latch2 = new CountDownLatch( 2 );   topic2.addMessageListener( new MessageListener() {     public void onMessage( Object msg ) {       assertEquals( \&quot;Test1\&quot;, msg );       latch2.countDown();     }   } );   // publish the first message, both should receive this   topic1.publish( \&quot;Test1\&quot; );   // shutdown the first member   h1.shutdown();   // publish the second message, second member's topic should receive this   topic2.publish( \&quot;Test1\&quot; );   try {     // assert that the first member's topic got the message     assertTrue( latch1.await( 5, TimeUnit.SECONDS ) );     // assert that the second members' topic got two messages     assertTrue( latch2.await( 5, TimeUnit.SECONDS ) );   } catch ( InterruptedException ignored ) {   } } ``` You can start Hazelcast members with different configurations. Remember to call `Hazelcast.shutdownAll()` after each test case to make sure that there is no other running member left from the previous tests.  ```java @After public void cleanup() throws Exception {   Hazelcast.shutdownAll(); } ```  For more information please [check our existing tests.](https://github.com/hazelcast/hazelcast/tree/master/hazelcast/src/test/java/com/hazelcast/cluster)  "
});

documentTitles["faq.html#how-do-i-create-separate-clusters"] = "How do I create separate clusters";
index.add({
    url: "faq.html#how-do-i-create-separate-clusters",
    title: "How do I create separate clusters",
    body: "## How do I create separate clusters  By specifying group name and group password, you can separate your clusters in a simple way. Groupings can be by *dev*, *production*, *test*, *app*, etc. Here is a declarative configuration.  ```xml &lt;hazelcast&gt;   &lt;group&gt;     &lt;name&gt;dev&lt;/name&gt;     &lt;password&gt;dev-pass&lt;/password&gt;   &lt;/group&gt;   ... &lt;/hazelcast&gt; ```  You can also set the `groupName` with programmatic configuration. JVM can host multiple Hazelcast instances. Each node can only participate in one group and it only joins to its own group, it does not mess with others. The following code example creates 3 separate Hazelcast nodes: `h1` belongs to the `app1` cluster, while `h2` and `h3` belong to the `app2` cluster.  ```java Config configApp1 = new Config(); configApp1.getGroupConfig().setName( \&quot;app1\&quot; );  Config configApp2 = new Config(); configApp2.getGroupConfig().setName( \&quot;app2\&quot; );  HazelcastInstance h1 = Hazelcast.newHazelcastInstance( configApp1 ); HazelcastInstance h2 = Hazelcast.newHazelcastInstance( configApp2 ); HazelcastInstance h3 = Hazelcast.newHazelcastInstance( configApp2 ); ```  "
});

documentTitles["faq.html#does-hazelcast-support-hundreds-of-nodes"] = "Does Hazelcast support hundreds of nodes";
index.add({
    url: "faq.html#does-hazelcast-support-hundreds-of-nodes",
    title: "Does Hazelcast support hundreds of nodes",
    body: "## Does Hazelcast support hundreds of nodes  Yes. Hazelcast performed a successful test on Amazon EC2 with 200 nodes.   "
});

documentTitles["faq.html#does-hazelcast-support-thousands-of-clients"] = "Does Hazelcast support thousands of clients";
index.add({
    url: "faq.html#does-hazelcast-support-thousands-of-clients",
    title: "Does Hazelcast support thousands of clients",
    body: "## Does Hazelcast support thousands of clients  Yes. However, there are some points you should consider. The environment should be LAN with a high stability and the network speed should be 10 Gbps or higher. If the number of nodes is high, the client type should be selected as Dummy, not Smart Client. In the case of Smart Clients, since each client will open a connection to the nodes, these nodes should be powerful enough (e.g. more cores) to handle hundreds or thousands of connections and client requests. Also, you should consider using near caches in clients to lower the network traffic. And you should use the Hazelcast releases with the NIO implementation (which starts with 3.2).  Also, you should configure the clients attentively. Please refer to the [Java Client section](#java-client) section for configuration notes.  "
});

documentTitles["faq.html#what-is-the-difference-between-old-litemember-and-new-smart-client"] = "What is the difference between old LiteMember and new Smart Client";
index.add({
    url: "faq.html#what-is-the-difference-between-old-litemember-and-new-smart-client",
    title: "What is the difference between old LiteMember and new Smart Client",
    body: "## What is the difference between old LiteMember and new Smart Client  LiteMember supports task execution (distributed executor service), smart client does not. Also LiteMember is highly coupled with cluster, smart client is not.  "
});

documentTitles["faq.html#how-do-you-give-support"] = "How do you give support";
index.add({
    url: "faq.html#how-do-you-give-support",
    title: "How do you give support",
    body: "## How do you give support  Support services are divided into two: community and commercial support. Community support is provided through our [Mail Group](https://groups.google.com/forum/#!forum/hazelcast) and StackOverflow web site. For information on support subscriptions, please see [Hazelcast.com](http://hazelcast.com/support/commercial/).  "
});

documentTitles["faq.html#does-hazelcast-persist"] = "Does Hazelcast persist";
index.add({
    url: "faq.html#does-hazelcast-persist",
    title: "Does Hazelcast persist",
    body: "## Does Hazelcast persist  No. However, Hazelcast provides `MapStore` and `MapLoader` interfaces. For example, when you implement the `MapStore` interface, Hazelcast calls your store and load methods whenever needed.  "
});

documentTitles["faq.html#can-i-use-hazelcast-in-a-single-server"] = "Can I use Hazelcast in a single server";
index.add({
    url: "faq.html#can-i-use-hazelcast-in-a-single-server",
    title: "Can I use Hazelcast in a single server",
    body: "## Can I use Hazelcast in a single server  Yes. But please note that Hazelcast's main design focus is multi-node clusters to be used as a distribution platform.   "
});

documentTitles["faq.html#how-can-i-monitor-hazelcast"] = "How can I monitor Hazelcast";
index.add({
    url: "faq.html#how-can-i-monitor-hazelcast",
    title: "How can I monitor Hazelcast",
    body: "## How can I monitor Hazelcast  [Hazelcast Management Center](#management-center) is what you use to monitor and manage the nodes running Hazelcast. In addition to monitoring the overall state of a cluster, you can analyze and browse data structures in detail, you can update map configurations, and you can take thread dumps from nodes.   Moreover, JMX monitoring is also provided. Please see the [Monitoring with JMX section](#monitoring-with-jmx) for details.  "
});

documentTitles["faq.html#how-can-i-see-debug-level-logs"] = "How can I see debug level logs";
index.add({
    url: "faq.html#how-can-i-see-debug-level-logs",
    title: "How can I see debug level logs",
    body: "## How can I see debug level logs  By changing the log level to \&quot;Debug\&quot;. Below sample lines are for **log4j** logging framework. Please see the [Logging Configuration section](#logging-configuration) to learn how to set logging types.  First, set the logging type as follows.  ```java String location = \&quot;log4j.configuration\&quot;; String logging = \&quot;hazelcast.logging.type\&quot;; System.setProperty( logging, \&quot;log4j\&quot; ); /**if you want to give a new location. **/ System.setProperty( location, \&quot;file:/path/mylog4j.properties\&quot; ); ```  Then set the log level to \&quot;Debug\&quot; in the properties file. Below is example content.   `# direct log messages to stdout #`  `log4j.appender.stdout=org.apache.log4j.ConsoleAppender`  `log4j.appender.stdout.Target=System.out`  `log4j.appender.stdout.layout=org.apache.log4j.PatternLayout`  `log4j.appender.stdout.layout.ConversionPattern=%d{ABSOLUTE} %5p [%c{1}] - %m%n`  &lt;br&gt; &lt;/br&gt;  `log4j.logger.com.hazelcast=debug`  `#log4j.logger.com.hazelcast.cluster=debug`  `#log4j.logger.com.hazelcast.partition=debug`  `#log4j.logger.com.hazelcast.partition.InternalPartitionService=debug`  `#log4j.logger.com.hazelcast.nio=debug`  `#log4j.logger.com.hazelcast.hibernate=debug`  The line `log4j.logger.com.hazelcast=debug` is used to see debug logs for all Hazelcast operations. Below this line, you can select to see specific logs (cluster, partition, hibernate, etc.).  "
});

documentTitles["faq.html#what-is-the-difference-between-client-server-and-embedded-topologies"] = "What is the difference between client-server and embedded topologies";
index.add({
    url: "faq.html#what-is-the-difference-between-client-server-and-embedded-topologies",
    title: "What is the difference between client-server and embedded topologies",
    body: "## What is the difference between client-server and embedded topologies  In the embedded topology, nodes include both the data and application. This type of topology is the most useful if your application focuses on high performance computing and many task executions. Since application is close to data, this topology supports data locality.   In the client-server topology, you create a cluster of nodes and scale the cluster independently. Your applications are hosted on the clients, and the clients communicate with the nodes in the cluster to reach data.   Client-server topology fits better if there are multiple applications sharing the same data or if application deployment is significantly greater than the cluster size (e.g. 500 application servers vs. 10 node cluster).  "
});

documentTitles["faq.html#how-do-i-know-it-is-safe-to-kill-the-second-node"] = "How do I know it is safe to kill the second node";
index.add({
    url: "faq.html#how-do-i-know-it-is-safe-to-kill-the-second-node",
    title: "How do I know it is safe to kill the second node",
    body: "## How do I know it is safe to kill the second node  Programmatically:  ```java PartitionService partitionService = hazelcastInstance.getPartitionService().isClusterSafe() if (partitionService().isClusterSafe()) {   hazelcastInstance.shutdown(); // or terminate } ```  OR   ```java PartitionService partitionService = hazelcastInstance.getPartitionService().isClusterSafe() if (partitionService().isLocalMemberSafe()) {   hazelcastInstance.shutdown(); // or terminate } ```   "
});

documentTitles["faq.html#when-do-i-need-native-memory-solutions"] = "When do I need Native Memory solutions";
index.add({
    url: "faq.html#when-do-i-need-native-memory-solutions",
    title: "When do I need Native Memory solutions",
    body: "## When do I need Native Memory solutions  Native Memory solutions can be preferred;  - When the amount of data per node is large enough to create significant garbage collection pauses, - When your application requires predictable latency.   "
});

documentTitles["faq.html#is-there-any-disadvantage-of-using-near-cache"] = "Is there any disadvantage of using near-cache";
index.add({
    url: "faq.html#is-there-any-disadvantage-of-using-near-cache",
    title: "Is there any disadvantage of using near-cache",
    body: "## Is there any disadvantage of using near-cache  The only disadvantage when using Near Cache is that it may cause stale reads.  "
});

documentTitles["faq.html#is-hazelcast-secure"] = "Is Hazelcast secure";
index.add({
    url: "faq.html#is-hazelcast-secure",
    title: "Is Hazelcast secure",
    body: "## Is Hazelcast secure  Hazelcast supports symmetric encryption, secure sockets layer (SSL) and Java Authentication and Authorization Service (JAAS). Please see the [Security chapter](#security) for more information.    "
});

documentTitles["faq.html#how-can-i-set-socket-options"] = "How can I set socket options";
index.add({
    url: "faq.html#how-can-i-set-socket-options",
    title: "How can I set socket options",
    body: "## How can I set socket options  Hazelcast allows you to set some socket options such as `SO_KEEPALIVE`, `SO_SNDBUF`, `SO_RCVBUF` using Hazelcast configuration properties. Please see `hazelcast.socket.*` properties explained at the [Advanced Configuration Properties section](#advanced-configuration-properties).  "
});

documentTitles["faq.html#i-periodically-see-client-disconnections-during-idle-time"] = "I periodically see client disconnections during idle time";
index.add({
    url: "faq.html#i-periodically-see-client-disconnections-during-idle-time",
    title: "I periodically see client disconnections during idle time",
    body: "## I periodically see client disconnections during idle time  In Hazelcast, socket connections are created with `SO_KEEPALIVE` option enabled by default. In most operating systems, default keep-alive time is 2 hours. If you have a firewall between clients and servers which is configured to reset idle connections/sessions, make sure that firewall's idle timeout is greater than TCP keep-alive defined in OS.  For additional information please see:   - [Using TCP keepalive under Linux](http://tldp.org/HOWTO/TCP-Keepalive-HOWTO/usingkeepalive.html)  - [Microsoft TechNet](http://technet.microsoft.com/en-us/library/cc957549.aspx)  "
});

documentTitles["faq.html#how-to-get-rid-of-javalangoutofmemoryerror-unable-to-create-new-native-thread"] = "How to get rid of \&quot;java.lang.OutOfMemoryError: unable to create new native thread\&quot;";
index.add({
    url: "faq.html#how-to-get-rid-of-javalangoutofmemoryerror-unable-to-create-new-native-thread",
    title: "How to get rid of \&quot;java.lang.OutOfMemoryError: unable to create new native thread\&quot;",
    body: "## How to get rid of \&quot;java.lang.OutOfMemoryError: unable to create new native thread\&quot;  If you encounter an error of `java.lang.OutOfMemoryError: unable to create new native thread`, it may be caused by exceeding the available file descriptors on your operating system, especially if it is Linux. This exception is usually thrown on a running node, after a period of time when the thread count exhausts the file descriptor availability.  The JVM on Linux consumes a file descriptor for each thread created.  The default number of file descriptors available in Linux is usually 1024. If you have many JVMs running on a single machine it is possible to exceed this default number.  You can view the limit using the following command  `# ulimit -a`  At the operating system level, Linux users can control the amount of resources (and in particular, file descriptors) used via one of the following options.  1 - Editing the `limits.conf` file:  `# vi /etc/security/limits.conf`   ``` testuser soft nofile 4096&lt;br&gt; testuser hard nofile 10240&lt;br&gt; ```  2 - Or using the `ulimit` command:  `# ulimit -Hn`  ``` 10240 ```  The default number of process per users is 1024. Adding the following to your `$HOME/.profile` could solve the issue:  `# ulimit -u 4096`  "
});

documentTitles["faq.html#does-repartitioning-wait-for-entry-processor"] = "Does repartitioning wait for Entry Processor?";
index.add({
    url: "faq.html#does-repartitioning-wait-for-entry-processor",
    title: "Does repartitioning wait for Entry Processor?",
    body: "## Does repartitioning wait for Entry Processor?  Repartitioning is the process of redistributing the partition ownerships. Hazelcast performs the repartitioning in the cases where a node leaves the cluster or joins to the cluster. If a repartitioning is to be happen while an entry processor is active in a node processing on an entry object, the repartitioning waits for the entry processor to complete its job.   "
});

documentTitles["faq.html#what-does-replica-1-has-no-owner-mean"] = "What Does \&quot;Replica: 1 has no owner\&quot; Mean?";
index.add({
    url: "faq.html#what-does-replica-1-has-no-owner-mean",
    title: "What Does \&quot;Replica: 1 has no owner\&quot; Mean?",
    body: "## What Does \&quot;Replica: 1 has no owner\&quot; Mean?  When you start more nodes after the first one is started, you will see `replica: 1 has no owner` entry in the newly started node's log. There is no need to worry about it since it refers to a transitory state. It only means the replica partition is not ready/assigned yet and eventually it will be.   "
});



documentTitles["glossary.html#glossary"] = "Glossary";
index.add({
    url: "glossary.html#glossary",
    title: "Glossary",
    body: "# Glossary  Term|Definition :-|:- **2-phase Commit**|2-phase commit protocol is an atomic commitment protocol for distributed systems. It consists of two phases: commit-request and commit. In commit-request phase, transaction manager coordinates all of the transaction resources to commit or abort. In commit-phase, transaction manager decides to finalize operation by committing or aborting according to the votes of the each transaction resource. **ACID**|A set of properties (Atomicity, Consistency, Isolation, Durability) guaranteeing that transactions are processed reliably. Atomicity requires that each transaction be all or nothing (i.e. if one part of the transaction fails, the entire transaction will fail). Consistency ensures that only valid data following all rules and constraints is written. Isolation ensures that transactions are securely and independently processed at the same time without interference (and without transaction ordering). Durability means that once a transaction has been committed, it will remain so, no matter if there is a power loss, crash, or error. **Cache**|A high-speed access area that can be either a reserved section of main memory or storage device.  **Garbage Collection**|Garbage collection is the recovery of storage that is being used by an application when that application no longer needs the storage. This frees the storage for use by other applications (or processes within an application). It also ensures that an application using increasing amounts of storage does not reach its quota. Programming languages that use garbage collection are often interpreted within virtual machines like the JVM. The environment that runs the code is also responsible for garbage collection. **Hazelcast Cluster**|It is a virtual environment formed by Hazelcast nodes communicating with each other. **Hazelcast Node**|A node in Hazelcast terms, is a Hazelcast instance. Depending on your Hazelcast usage, it can refer to a server or a Java virtual machine (JVM). For example, if there is only one Hazelcast instance in a JVM, that JVM can be called as a node. Nodes are also referred as `cluster members` that form a cluster.  **Hazelcast Partitions**|Memory segments containing the data. Hazelcast is built-on the partition concept, it uses partitions to store and process data. Each partition can have hundreds or thousands of data entries depending on your memory capacity. You can think of a partition as a block of data. In general and optimally, a partition should have a maximum size of 50-100 Megabytes. **IMDG**|An in-memory data grid (IMDG) is a data structure that resides entirely in memory, and is distributed among many nodes in a single location or across multiple locations. IMDGs can support thousands of in-memory data updates per second, and they can be clustered and scaled in ways that support large quantities of data. **Invalidation**|The process of marking an object as being invalid across the distributed cache. **Java heap**|Java heap is the space that Java can reserve and use in memory for dynamic memory allocation. All runtime objects created by a Java application are stored in heap. By default, the heap size is 128 MB, but this limit is reached easily for business applications. Once the heap is full, new objects cannot be created and the Java application shows errors. **LRU, LFU**|LRU and LFU are two of eviction algorithms. LRU is the abbreviation for Least Recently Used. It refers to entries eligible for eviction due to lack of interest by applications. LFU is the abbreviation for Least Frequently Used. It refers to the entries eligible for eviction due to having the lowest usage frequency. **Multicast**|It is a type of communication where data is addressed to a group of destination nodes simultaneously. **Near Cache**|It is a caching model. When it is enabled, an object retrieved from a remote node is put into the local cache and the future requests made to this object will be handled by this local node. For example, if you have a map with data that is mostly read, then using near cache is a good idea. **NoSQL**|\&quot;Not Only SQL\&quot;. It is a database model that provides a mechanism for storage and retrieval of data that is tailored in means other than the tabular relations used in relational databases. It is a type of database which does not adhering to the traditional relational database management system (RDMS) structure. It is not built on tables and does not employ SQL to manipulate data. It also may not provide full ACID guarantees, but still has a distributed and fault tolerant architecture. **Race Condition**|This condition occurs when two or more threads can access shared data and they try to change it at the same time. **Serialization**|Process of converting an object into a stream of bytes in order to store the object or transmit it to memory, a database, or a file. Its main purpose is to save the state of an object in order to be able to recreate it when needed. The reverse process is called deserialization. **Split Brain**|Split brain syndrome, in a clustering context, is a state in which a cluster of nodes gets divided (or partitioned) into smaller clusters of nodes, each of which believes it is the only active cluster. **Transaction**|Means a sequence of information exchange and related work (such as data store updating) that is treated as a unit for the purposes of satisfying a request and for ensuring data store integrity.     "
});


