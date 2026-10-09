// CompTIA N10-009 question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/comptia-n10-009.json.
module.exports = {
  id: "comptia-n10-009",
  idPrefix: "n10009",
  vendor: "CompTIA",
  code: "N10-009",
  name: "CompTIA Network+ (V9)",
  fullLength: 90,
  minutes: 90,
  passPercent: 72,
  readinessPercent: 85,
  sectioned: false,
  note: "CompTIA scores Network+ on a 100–900 scale with 720 to pass. This practice exam reports a straight percentage; treat 85% as your readiness bar. The real exam also includes performance-based questions (PBQs), which this practice exam doesn't include, so practice hands-on configuration and troubleshooting separately. Questions follow the N10-009 exam objectives (version 4.0).",
  domains: [{"id":"NC","name":"Networking Concepts","weight":"23%"},{"id":"NI","name":"Network Implementation","weight":"20%"},{"id":"NO","name":"Network Operations","weight":"19%"},{"id":"NS","name":"Network Security","weight":"14%"},{"id":"NT","name":"Network Troubleshooting","weight":"24%"}],
  Q: [
{d:"NC",s:`At which OSI layer do switches forward frames using MAC addresses?`,
o:[`Layer 2 - Data link`,`Layer 1 - Physical`,`Layer 3 - Network`,`Layer 4 - Transport`],
a:[0],
e:`Switches operate at Layer 2, building MAC address tables and forwarding frames. Routers work at Layer 3 with IP addresses.`},

{d:"NC",s:`Which OSI layer is responsible for logical addressing and routing between networks?`,
o:[`Layer 3 - Network`,`Layer 2 - Data link`,`Layer 4 - Transport`,`Layer 5 - Session`],
a:[0],
e:`The network layer handles IP addressing and path selection. Routers make forwarding decisions here.`},

{d:"NC",s:`TCP and UDP operate at which OSI layer?`,
o:[`Layer 4 - Transport`,`Layer 3 - Network`,`Layer 5 - Session`,`Layer 7 - Application`],
a:[0],
e:`The transport layer provides end-to-end delivery. TCP is connection-oriented and reliable, while UDP is connectionless.`},

{d:"NC",s:`Encryption and data format translation, such as converting character encodings, are associated with which OSI layer?`,
o:[`Layer 6 - Presentation`,`Layer 5 - Session`,`Layer 7 - Application`,`Layer 4 - Transport`],
a:[0],
e:`The presentation layer formats, encodes, compresses, and encrypts data for the application layer.`},

{d:"NC",s:`An architecture separates the control plane into a central controller that programs forwarding behavior on switches through APIs. What is this?`,
o:[`Software-defined networking (SDN)`,`Network address translation (NAT)`,`A three-tier hierarchical design`,`Spanning Tree Protocol (STP)`],
a:[0],
e:`SDN centralizes control-plane decisions in a controller, which programs the data plane on devices. This enables central policy management and automation.`},

{d:"NC",s:`Which device distributes incoming web requests across several servers to improve availability?`,
o:[`A load balancer`,`A network-attached storage device`,`An access point`,`A wireless LAN controller`],
a:[0],
e:`Load balancers spread traffic across servers and remove unhealthy servers from rotation.`},

{d:"NC",s:`Users' web requests pass through a server that filters content and caches pages before reaching the internet. What is this server?`,
o:[`A proxy`,`A SAN`,`A router`,`An IDS`],
a:[0],
e:`Forward proxies act on behalf of clients, providing content filtering, caching, and logging.`},

{d:"NC",s:`What is the main difference between NAS and a SAN?`,
o:[`NAS provides file-level access; a SAN provides block-level access`,`NAS provides block-level access; a SAN provides file-level access`,`NAS works only over wireless; a SAN works only over copper`,`NAS needs Fibre Channel; a SAN uses only standard Ethernet`],
a:[0],
e:`NAS shares files over protocols such as SMB or NFS. A SAN presents block storage over a dedicated network, such as Fibre Channel or iSCSI.`},

{d:"NC",s:`A company manages 200 lightweight access points centrally, pushing configurations and handling roaming. Which device does this?`,
o:[`A wireless LAN controller`,`A load balancer`,`A forward proxy server`,`A network-attached storage device`],
a:[0],
e:`Wireless LAN controllers centrally manage lightweight APs, including configuration, channels, power, and roaming.`},

{d:"NC",s:`A streaming company stores copies of its videos on servers around the world so users download from a nearby location. What is this?`,
o:[`A content delivery network (CDN)`,`A storage area network (SAN)`,`A virtual private network (VPN)`,`A network address translation (NAT) pool`],
a:[0],
e:`CDNs cache content at edge locations close to users, reducing latency and load on origin servers.`},

{d:"NC",s:`Voice traffic is given priority over file downloads on a congested WAN link. Which function provides this?`,
o:[`Quality of service (QoS)`,`Time to live (TTL)`,`Network address translation`,`Port mirroring`],
a:[0],
e:`QoS classifies and prioritizes traffic so latency-sensitive applications, such as voice and video, perform well.`},

{d:"NC",s:`What does the time to live (TTL) field in an IP packet do?`,
o:[`Limits how many hops the packet can take`,`Sets how long a DHCP lease lasts`,`Defines the packet's QoS priority level`,`Specifies the packet's encryption method`],
a:[0],
e:`Each router decrements TTL by one and discards the packet at zero, preventing endless loops. DNS records also use a TTL for caching time.`},

{d:"NC",s:`A company creates a logically isolated network in a public cloud with its own subnets and route tables. What is this?`,
o:[`A virtual private cloud (VPC)`,`A content delivery network`,`A storage area network`,`A screened subnet appliance`],
a:[0],
e:`A VPC is a private, isolated virtual network within a public cloud provider's infrastructure.`},

{d:"NC",s:`Instances in a private cloud subnet need to download updates from the internet without being reachable from it. What should be used?`,
o:[`A NAT gateway`,`An internet gateway only`,`A Direct Connect link`,`A load balancer`],
a:[0],
e:`NAT gateways allow outbound internet access for private resources while blocking unsolicited inbound connections.`},

{d:"NC",s:`Which cloud construct acts as a stateful, virtual firewall controlling traffic to and from instances?`,
o:[`A network security group`,`An internet gateway`,`A NAT gateway for outbound access`,`A CDN edge caching node`],
a:[0],
e:`Security groups filter traffic at the instance or interface level with allow rules. Network security lists or ACLs often apply at the subnet level.`},

{d:"NC",s:`A company needs a private, dedicated, high-bandwidth link from its datacenter to its cloud provider that doesn't cross the public internet. Which option fits?`,
o:[`Direct Connect`,`A client-to-site VPN`,`A NAT gateway`,`A captive portal`],
a:[0],
e:`Dedicated connections, such as AWS Direct Connect or Azure ExpressRoute, offer private, consistent connectivity. Site-to-site VPNs run over the internet.`},

{d:"NC",s:`A company rents virtual machines and manages their operating systems, while the provider manages the hardware. Which service model is this?`,
o:[`IaaS`,`SaaS`,`PaaS`,`DaaS (desktops)`],
a:[0],
e:`Infrastructure as a service provides compute, storage, and networking. The customer manages the OS and everything above it.`},

{d:"NC",s:`Developers deploy code to a managed runtime without managing servers or operating systems. Which service model is this?`,
o:[`PaaS`,`IaaS`,`SaaS`,`On-premises`],
a:[0],
e:`Platform as a service provides a managed environment for building and running applications.`},

{d:"NC",s:`A web service automatically adds servers during a traffic spike and removes them when demand drops. Which cloud concept is this?`,
o:[`Elasticity`,`Multitenancy`,`Data locality`,`Hybrid deployment`],
a:[0],
e:`Elasticity is automatic scaling up and down with demand. Scalability is the ability to grow capacity.`},

{d:"NC",s:`A company runs firewalls and routers as software on standard servers instead of dedicated hardware. Which concept is this?`,
o:[`Network functions virtualization`,`Software as a service (SaaS)`,`Content delivery networking (CDN)`,`Storage area networking (SAN)`],
a:[0],
e:`NFV virtualizes network functions, such as firewalls and load balancers, so they run on commodity hardware.`},

{d:"NC",s:`Which port does SSH use by default?`,
o:[`22`,`23`,`21`,`2222`],
a:[0],
e:`SSH uses TCP 22, as does SFTP. Telnet uses 23 and FTP control uses 21. Port 2222 is sometimes configured as a nonstandard SSH port, but it isn't the default.`},

{d:"NC",s:`Which port does DNS use?`,
o:[`53`,`67`,`123`,`161`],
a:[0],
e:`DNS uses port 53 over UDP for most queries and TCP for zone transfers and large responses. DHCP uses 67/68, NTP 123, and SNMP 161.`},

{d:"NC",s:`Which protocol and port does Remote Desktop Protocol use?`,
o:[`TCP 3389`,`TCP 1433`,`TCP 445`,`UDP 5060`],
a:[0],
e:`Remote Desktop Protocol uses TCP 3389 (and UDP 3389 for better performance). SQL Server uses 1433, SMB uses 445, and SIP uses 5060/5061.`},

{d:"NC",s:`A firewall must allow secure LDAP queries to a directory server. Which port should be opened?`,
o:[`636`,`389`,`3268`,`587`],
a:[0],
e:`LDAPS uses 636. Plain LDAP uses 389, 3268 is the Active Directory Global Catalog, and SMTP submission with TLS uses 587.`},

{d:"NC",s:`Network devices send log messages to a central collector. Which default port does this use?`,
o:[`514`,`123`,`162`,`445`],
a:[0],
e:`Syslog typically uses UDP 514. NTP uses 123, SNMP traps use 162, and SMB uses 445.`},

{d:"NC",s:`Which protocol is connectionless and is used by ping to send echo requests?`,
o:[`ICMP`,`TCP`,`IPsec ESP`,`SNMP`],
a:[0],
e:`ICMP carries diagnostic and error messages, including echo request and echo reply used by ping.`},

{d:"NC",s:`Which IPsec protocol provides encryption of the packet payload?`,
o:[`Encapsulating Security Payload (ESP)`,`Authentication Header (AH)`,`Generic Routing Encapsulation`,`Internet Control Message Protocol`],
a:[0],
e:`ESP provides confidentiality, integrity, and authentication. AH provides integrity and authentication but no encryption. IKE negotiates the keys.`},

{d:"NC",s:`A video stream is sent once and delivered only to hosts that joined the group. Which traffic type is this?`,
o:[`Multicast`,`Broadcast`,`Unicast to each host`,`Anycast`],
a:[0],
e:`Multicast sends to a group of interested receivers. Broadcast goes to all hosts in a segment, and unicast goes to one host.`},

{d:"NC",s:`Several DNS servers around the world share one IP address, and users reach the nearest one. Which traffic type is this?`,
o:[`Anycast`,`Multicast`,`Broadcast`,`Unicast`],
a:[0],
e:`Anycast advertises the same address from multiple locations, and routing delivers traffic to the closest one.`},

{d:"NC",s:`A 10 km link between two buildings needs fiber. Which type supports this distance best?`,
o:[`Single-mode fiber`,`Multimode fiber`,`Cat 6a UTP copper`,`RG-6 coaxial cable`],
a:[0],
e:`Single-mode fiber uses a narrow core and laser light for long distances. Multimode suits shorter runs, typically within buildings.`},

{d:"NC",s:`A cable must run through an air-handling space above a drop ceiling. Which cable jacket is required?`,
o:[`Plenum-rated`,`Non-plenum PVC`,`Outdoor direct-burial`,`Riser-rated only`],
a:[0],
e:`Plenum-rated cable produces less toxic smoke when burning and is required by fire codes in air-handling spaces.`},

{d:"NC",s:`Two top-of-rack switches in the same rack need a short, inexpensive 25 Gbps connection. Which option fits best?`,
o:[`A direct attach copper (DAC) twinax cable`,`A single-mode fiber run with LC connectors`,`A Cat 5e patch cable`,`An RG-6 coaxial cable`],
a:[0],
e:`DAC twinax cables have fixed transceivers on each end and are cost-effective for short, high-speed links within or between adjacent racks.`},

{d:"NC",s:`Which transceiver form factor supports 40 Gbps or 100 Gbps links by using four lanes?`,
o:[`QSFP`,`SFP`,`RJ45`,`SFP+`],
a:[0],
e:`Quad small form-factor pluggable (QSFP) modules combine four lanes for higher speeds. SFP modules are single-lane.`},

{d:"NC",s:`Which fiber connector is small, has a push-pull latch, and is common on SFP transceivers?`,
o:[`LC`,`ST`,`BNC`,`F-type`],
a:[0],
e:`Local connectors (LC) are small form-factor fiber connectors. ST uses a bayonet twist lock, and BNC and F-type are coaxial connectors.`},

{d:"NC",s:`Which 802.11 standard, also called Wi-Fi 6E, adds operation in the 6 GHz band?`,
o:[`802.11ax`,`802.11ac`,`802.11n`,`802.11g`],
a:[0],
e:`802.11ax is Wi-Fi 6, and Wi-Fi 6E extends it into 6 GHz. 802.11ac is Wi-Fi 5 on 5 GHz.`},

{d:"NC",s:`In a datacenter, every access switch connects to every switch in a backbone layer, giving predictable latency for server-to-server traffic. Which architecture is this?`,
o:[`Spine and leaf`,`Three-tier hierarchical`,`Point to point`,`Collapsed core`],
a:[0],
e:`Spine-and-leaf designs provide equal-cost paths between any two leaves, which suits heavy east-west traffic.`},

{d:"NC",s:`Traffic between servers within the same datacenter is described as what?`,
o:[`East-west`,`North-south`,`Point to point`,`Hub and spoke`],
a:[0],
e:`East-west traffic flows within the datacenter. North-south traffic enters or leaves it.`},

{d:"NC",s:`In the three-tier hierarchical model, which layer connects end-user devices?`,
o:[`Access`,`Distribution`,`Core`,`Spine`],
a:[0],
e:`The access layer connects end devices. Distribution aggregates access switches and applies policy, and the core provides fast transport.`},

{d:"NC",s:`A Windows PC shows the address 169.254.32.10. What does this indicate?`,
o:[`It couldn't reach a DHCP server`,`It has a valid public IP address`,`It's using a loopback address`,`It's on a Class D multicast network`],
a:[0],
e:`169.254.0.0/16 is APIPA, which hosts assign themselves when DHCP fails. Communication is limited to the local segment.`},

{d:"NC",s:`Which address range is private under RFC 1918?`,
o:[`172.16.0.0/12`,`169.254.0.0/16`,`100.64.0.0/10`,`224.0.0.0/4`],
a:[0],
e:`RFC 1918 private ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. 169.254.0.0/16 is APIPA, and 224.0.0.0/4 is multicast.`},

{d:"NC",s:`How many usable host addresses are in a /26 IPv4 subnet?`,
o:[`62`,`64`,`30`,`126`],
a:[0],
e:`A /26 leaves 6 host bits: 2^6 = 64 addresses, minus the network and broadcast addresses, gives 62 usable hosts.`},

{d:"NC",s:`What is the broadcast address for 192.168.10.64/27?`,
o:[`192.168.10.95`,`192.168.10.127`,`192.168.10.63`,`192.168.10.96`],
a:[0],
e:`A /27 has 32 addresses per block, so 192.168.10.64/27 spans .64 to .95. The last address, .95, is the broadcast.`},

{d:"NC",s:`Which subnet mask matches a /20 prefix?`,
o:[`255.255.240.0`,`255.255.248.0`,`255.255.224.0`,`255.255.255.240`],
a:[0],
e:`A /20 has 20 network bits: 255.255.255.0 would be /24, and /20 leaves 4 more host bits in the third octet, giving 240.`},

{d:"NC",s:`A network engineer assigns a /30 to point-to-point links and a /24 to user subnets from the same address block. What technique is this?`,
o:[`Variable Length Subnet Masking (VLSM)`,`Automatic Private IP Addressing (APIPA)`,`Classful addressing with fixed masks`,`Port address translation (PAT)`],
a:[0],
e:`VLSM uses different mask lengths within one address space, sizing each subnet to its needs and reducing waste.`},

{d:"NC",s:`Which address does a host use to test its own TCP/IP stack?`,
o:[`127.0.0.1`,`169.254.0.1`,`192.168.0.1`,`224.0.0.1`],
a:[0],
e:`127.0.0.0/8 is the loopback range, and 127.0.0.1 (localhost) refers to the host itself.`},

{d:"NC",s:`Which IPv4 address class is reserved for multicast?`,
o:[`Class D`,`Class A`,`Class C`,`Class E (experimental)`],
a:[0],
e:`Class D (224.0.0.0–239.255.255.255) is for multicast. Class E is experimental, and Classes A–C are for unicast hosts.`},

{d:"NC",s:`An SD-WAN sends voice over the lowest-latency link and bulk backups over the cheapest one, based on the application. Which SD-WAN feature is this?`,
o:[`Application awareness`,`Zero-touch provisioning`,`Spanning tree`,`Link aggregation`],
a:[0],
e:`Application-aware routing steers traffic by application needs across available transports, such as MPLS, broadband, and LTE.`},

{d:"NC",s:`New branch routers are shipped to sites and configure themselves automatically when plugged in. Which feature is this?`,
o:[`Zero-touch provisioning`,`Port address translation`,`Jumbo frames`,`Band steering`],
a:[0],
e:`Zero-touch provisioning lets devices download their configuration from a central controller without on-site setup.`},

{d:"NC",s:`Which technology extends Layer 2 segments across a Layer 3 network by encapsulating Ethernet frames in UDP?`,
o:[`VXLAN`,`802.1Q`,`GRE`,`STP`],
a:[0],
e:`VXLAN encapsulates Layer 2 frames in UDP, supporting large-scale segmentation and datacenter interconnects.`},

{d:"NC",s:`An engineer stores device configurations as templates in Git, and automation tools apply them and flag any drift. Which practice is this?`,
o:[`Infrastructure as code`,`Out-of-band management`,`Manual change control`,`Static routing tables`],
a:[0],
e:`IaC defines infrastructure in version-controlled code, enabling repeatable deployments, review, and detection of configuration drift.`},

{d:"NC",s:`Why do organizations run IPv4 and IPv6 at the same time on the same devices during migration?`,
o:[`Dual stack keeps both protocols working`,`IPv6 requires IPv4 to route any packets`,`IPv4 can't run on modern network hardware`,`It doubles the bandwidth of each link`],
a:[0],
e:`Dual stack lets hosts use IPv6 where available and IPv4 where needed. Tunneling and NAT64 are other compatibility methods.`},

{d:"NC",s:`An IPv6-only client must reach an IPv4-only server. Which mechanism translates between them?`,
o:[`NAT64`,`APIPA (link-local)`,`VLSM`,`PAT overload`],
a:[0],
e:`NAT64, often paired with DNS64, translates between IPv6 and IPv4 addresses so IPv6-only clients can reach IPv4 services.`},

{d:"NI",s:`Which routing protocol exchanges routes between different autonomous systems on the internet?`,
o:[`BGP`,`OSPF`,`EIGRP`,`RIP`],
a:[0],
e:`Border Gateway Protocol is the exterior gateway protocol of the internet. OSPF and EIGRP are interior gateway protocols.`},

{d:"NI",s:`Which link-state routing protocol uses areas and calculates paths with Dijkstra's shortest path first algorithm?`,
o:[`OSPF`,`BGP`,`EIGRP`,`Static routing`],
a:[0],
e:`OSPF is an open-standard link-state protocol that builds a topology map and calculates shortest paths, using areas for scalability.`},

{d:"NI",s:`A router learns a route to the same network from OSPF and from a static route. Which value decides which source it trusts?`,
o:[`Administrative distance`,`Hop count to the network`,`The packet's time to live`,`Prefix length`],
a:[0],
e:`Administrative distance ranks route sources. Lower is preferred, so a static route (AD 1) beats OSPF (AD 110).`},

{d:"NI",s:`A routing table has routes to 10.0.0.0/8 and 10.1.1.0/24. Which route is used for a packet to 10.1.1.50?`,
o:[`10.1.1.0/24, the longer prefix`,`10.0.0.0/8, the shortest prefix`,`Whichever route was added first`,`The default route, always`],
a:[0],
e:`Routers use the longest prefix match, choosing the most specific route that matches the destination.`},

{d:"NI",s:`Within a single routing protocol, which value chooses between two paths to the same destination?`,
o:[`The metric`,`The administrative distance`,`The VLAN ID`,`The MAC address`],
a:[0],
e:`Metrics, such as OSPF cost or EIGRP's composite metric, compare paths within one protocol. Administrative distance compares different sources.`},

{d:"NI",s:`Hundreds of internal hosts share one public IP address, with each connection tracked by a unique source port. What is this?`,
o:[`Port address translation (PAT)`,`Static one-to-one NAT`,`Network address translation 64`,`Variable length subnet masking`],
a:[0],
e:`PAT, or NAT overload, maps many private addresses to one public address using different port numbers.`},

{d:"NI",s:`Two routers share a virtual gateway IP so hosts keep their default gateway if one router fails. What provides this?`,
o:[`A First Hop Redundancy Protocol`,`A link aggregation group`,`A spanning tree root bridge`,`An 802.1Q trunk port`],
a:[0],
e:`FHRPs, such as VRRP and HSRP, present a virtual IP and MAC as the default gateway and fail over between routers.`},

{d:"NI",s:`A router uses one physical interface with logical interfaces for VLANs 10, 20, and 30 to route between them. What are these logical interfaces?`,
o:[`Subinterfaces`,`Loopback interfaces`,`Tunnel interfaces`,`Management ports`],
a:[0],
e:`Subinterfaces, each tagged with a VLAN ID, enable "router on a stick" inter-VLAN routing over one trunk link.`},

{d:"NI",s:`A small branch has one path to headquarters, and the admin wants routes that never change on their own. What should be used?`,
o:[`Static routing`,`BGP peering`,`OSPF in area 0`,`EIGRP with stubs`],
a:[0],
e:`Static routes are manually configured and predictable, which suits simple topologies, but they don't adapt to failures.`},

{d:"NI",s:`Which routing protocol is an advanced distance-vector protocol that uses bandwidth and delay in its metric?`,
o:[`EIGRP`,`OSPF`,`iBGP`,`RIPv2`],
a:[0],
e:`EIGRP is an advanced distance-vector protocol with a composite metric, primarily based on bandwidth and delay.`},

{d:"NI",s:`Which standard adds a VLAN tag to Ethernet frames so multiple VLANs can share one trunk link?`,
o:[`802.1Q`,`802.1X`,`802.3af`,`802.11ac`],
a:[0],
e:`IEEE 802.1Q inserts a VLAN tag in frames on trunk links. 802.1X is port authentication, and 802.3af is PoE.`},

{d:"NI",s:`On an 802.1Q trunk, frames for which VLAN are sent untagged?`,
o:[`The native VLAN`,`The voice VLAN`,`The management VLAN`,`Every VLAN except VLAN 1`],
a:[0],
e:`The native VLAN carries untagged traffic on a trunk. Mismatched native VLANs cause problems and can enable VLAN hopping.`},

{d:"NI",s:`An IP phone and a PC share one switch port, and the phone's traffic should be placed in a separate VLAN for QoS. What should be configured?`,
o:[`A voice VLAN`,`A native VLAN`,`A private VLAN`,`Jumbo frames`],
a:[0],
e:`A voice VLAN tags phone traffic separately from the data VLAN on the same access port, supporting QoS and security.`},

{d:"NI",s:`A Layer 3 switch needs an IP address in VLAN 20 to route traffic for that VLAN. What should be created?`,
o:[`A switch virtual interface (SVI)`,`A routed subinterface on a router`,`A port channel interface`,`A native VLAN on a trunk`],
a:[0],
e:`An SVI is a virtual Layer 3 interface for a VLAN, used for inter-VLAN routing and management on multilayer switches.`},

{d:"NI",s:`Four 1 Gbps links between two switches are bundled into one logical interface for more bandwidth and redundancy. What is this?`,
o:[`Link aggregation`,`Port mirroring`,`Spanning tree`,`Band steering on APs`],
a:[0],
e:`Link aggregation (LACP, 802.3ad) bundles links into a single logical interface, increasing throughput and providing failover.`},

{d:"NI",s:`Which protocol prevents switching loops by blocking redundant paths?`,
o:[`Spanning Tree Protocol`,`Link Aggregation Control Protocol`,`Open Shortest Path First`,`Dynamic Host Configuration Protocol`],
a:[0],
e:`STP elects a root bridge and blocks redundant links to prevent broadcast storms, unblocking them if the active path fails.`},

{d:"NI",s:`A storage network uses frames larger than 1,500 bytes to improve throughput. What are these called?`,
o:[`Jumbo frames`,`Runts`,`Giants`,`Tagged frames`],
a:[0],
e:`Jumbo frames use an MTU up to about 9,000 bytes. All devices in the path must support the larger MTU.`},

{d:"NI",s:`A switch port and a server NIC are set to different duplex settings. What is the likely result?`,
o:[`Collisions, errors, and slow links`,`The link runs faster than normal`,`The port is assigned to the wrong VLAN`,`Jumbo frames are enabled on the link`],
a:[0],
e:`Duplex mismatches cause late collisions, CRC errors, and slow throughput. Both ends should match, usually through auto-negotiation.`},

{d:"NI",s:`Where are VLAN IDs and names stored on many switches?`,
o:[`In the VLAN database`,`In the ARP table`,`In the routing table`,`In the VLAN trunk allowed list`],
a:[0],
e:`Switches keep VLAN definitions in a VLAN database. Ports are then assigned to VLANs or configured as trunks.`},

{d:"NI",s:`Which 2.4 GHz channels don't overlap in North America?`,
o:[`1, 6, and 11`,`1, 5, and 9`,`2, 7, and 12`,`3, 8, and 13`],
a:[0],
e:`With 20 MHz channels, 1, 6, and 11 are the non-overlapping 2.4 GHz channels used in North America.`},

{d:"NI",s:`An AP encourages dual-band clients to connect on 5 GHz instead of the crowded 2.4 GHz band. What is this feature?`,
o:[`Band steering`,`Channel bonding`,`Beamforming`,`MAC filtering`],
a:[0],
e:`Band steering pushes capable clients to 5 GHz or 6 GHz, which usually has more channels and less interference.`},

{d:"NI",s:`What is the tradeoff of using 80 MHz channel width instead of 20 MHz on 5 GHz?`,
o:[`More throughput, but fewer non-overlapping channels`,`Longer range, but lower throughput per client`,`Better security, but no support for WPA3`,`Less interference, but only on 2.4 GHz`],
a:[0],
e:`Wider channels bond adjacent channels for higher throughput but reduce the number of available channels, raising interference risk in dense deployments.`},

{d:"NI",s:`Which 802.11 amendment adds dynamic frequency selection and transmit power control to meet 5 GHz regulatory requirements?`,
o:[`802.11h`,`802.11g`,`802.11e`,`802.11r`],
a:[0],
e:`802.11h introduced DFS and TPC so 5 GHz Wi-Fi avoids interfering with radar and satellite systems.`},

{d:"NI",s:`Several APs broadcast the same network name so users can roam across a building. What is that shared name?`,
o:[`The ESSID`,`The BSSID`,`The VLAN ID`,`The MAC OUI`],
a:[0],
e:`The extended service set identifier is the network name shared across APs. Each AP radio has its own BSSID, usually based on its MAC address.`},

{d:"NI",s:`Which wireless security protocol uses Simultaneous Authentication of Equals (SAE) instead of a PSK handshake?`,
o:[`WPA3`,`WPA2`,`WEP`,`WPA2-TKIP`],
a:[0],
e:`WPA3-Personal uses SAE, which resists offline dictionary attacks better than the WPA2 pre-shared key handshake.`},

{d:"NI",s:`A company wants each employee to authenticate to Wi-Fi with their own credentials through a RADIUS server. Which mode fits?`,
o:[`WPA3-Enterprise`,`WPA3-Personal`,`Open with a captive portal`,`WPA2 with a shared PSK`],
a:[0],
e:`Enterprise mode uses 802.1X with RADIUS for per-user authentication. Personal mode uses one shared passphrase.`},

{d:"NI",s:`A long, narrow warehouse needs Wi-Fi coverage focused down its length. Which antenna type fits best?`,
o:[`Directional`,`Omnidirectional`,`Isotropic`,`Dipole only`],
a:[0],
e:`Directional antennas, such as Yagi or patch antennas, focus signal in one direction. Omnidirectional antennas radiate in all directions.`},

{d:"NI",s:`Visitors on a guest Wi-Fi network must accept terms of use in a browser before getting internet access. What provides this?`,
o:[`A captive portal`,`A RADIUS server`,`MAC filtering on the AP`,`WPA3-Enterprise`],
a:[0],
e:`Captive portals redirect new guest users to a web page for terms acceptance or sign-in before granting access.`},

{d:"NI",s:`APs connect wirelessly to each other to extend coverage, with only some wired to the network. Which network type is this?`,
o:[`Mesh`,`Ad hoc`,`Infrastructure`,`Point to point`],
a:[0],
e:`Wireless mesh networks relay traffic between APs, extending coverage where cabling is hard to install.`},

{d:"NI",s:`What's the difference between autonomous and lightweight access points?`,
o:[`Autonomous APs work alone; lightweight APs rely on a controller`,`Autonomous APs need a controller; lightweight APs are configured individually`,`Autonomous APs support only 2.4 GHz; lightweight APs support only 5 GHz`,`Autonomous APs can't use WPA3; lightweight APs can't use WPA2`],
a:[0],
e:`Autonomous APs hold their own configuration. Lightweight APs are centrally managed by a wireless LAN controller.`},

{d:"NI",s:`Each floor of a building has a wiring closet that connects to the main equipment room. What are these floor closets called?`,
o:[`Intermediate distribution frames (IDFs)`,`Main distribution frames (MDFs)`,`Demarcation points (demarcs)`,`Network operations centers (NOCs)`],
a:[0],
e:`IDFs serve floors or areas and connect back to the MDF, where the main equipment and service provider connections usually are.`},

{d:"NI",s:`Which device provides multiple power outlets in a rack and can often monitor or switch each outlet remotely?`,
o:[`A power distribution unit (PDU)`,`An uninterruptible power supply only`,`A patch panel`,`A fiber distribution panel`],
a:[0],
e:`PDUs distribute power to rack equipment. Managed PDUs can measure load and power-cycle outlets remotely.`},

{d:"NI",s:`Switches installed in a hot-aisle/cold-aisle datacenter keep overheating. What should be checked?`,
o:[`That airflow matches the aisle layout`,`That the switches use plenum-rated cables`,`That the VLAN database is synchronized`,`That jumbo frames are enabled`],
a:[0],
e:`Port-side intake or exhaust must match the rack orientation so equipment pulls cool air and exhausts into the hot aisle.`},

{d:"NI",s:`Which fire suppression approach is preferred in server rooms to avoid water damage to equipment?`,
o:[`A clean-agent gas system`,`Standard wet-pipe sprinklers`,`Portable water extinguishers`,`An open window for ventilation`],
a:[0],
e:`Clean-agent systems, such as FM-200 or inert gases, suppress fires without damaging electronics. Pre-action sprinklers are another option.`},

{d:"NI",s:`Why should humidity in a datacenter be kept within a recommended range?`,
o:[`Too low causes static; too high causes condensation`,`Humidity has no effect on electronic equipment`,`High humidity always improves cooling efficiency`,`Low humidity prevents all hardware failures`],
a:[0],
e:`Low humidity increases electrostatic discharge risk, and high humidity can cause condensation and corrosion.`},

{d:"NI",s:`Where do horizontal cable runs from offices typically terminate in a wiring closet?`,
o:[`A patch panel`,`A PDU`,`A UPS`,`A demarc extension`],
a:[0],
e:`Patch panels terminate permanent cable runs, and short patch cables connect panel ports to switch ports.`},

{d:"NI",s:`Before adding a new switch to a rack, what should the technician confirm about power?`,
o:[`The circuit and UPS can carry the load`,`The switch supports jumbo frames`,`The rack has a fiber distribution panel`,`The switch uses the native VLAN`],
a:[0],
e:`Power load planning ensures circuits, PDUs, and UPS capacity aren't exceeded, avoiding outages and tripped breakers.`},

{d:"NO",s:`Which diagram shows how devices are connected by IP subnets and routing, rather than where they're physically located?`,
o:[`A logical (Layer 3) network diagram`,`A rack elevation diagram`,`A physical floor plan of the site`,`A cable map of each floor`],
a:[0],
e:`Logical diagrams show addressing, VLANs, and routing. Physical diagrams show device locations, racks, and cable paths.`},

{d:"NO",s:`Which document shows the position of each device in a rack, including its height in rack units?`,
o:[`A rack diagram`,`A logical diagram`,`A wireless heat map`,`A rack power budget`],
a:[0],
e:`Rack diagrams document equipment placement, which helps with installation, troubleshooting, and capacity planning.`},

{d:"NO",s:`Which tool tracks subnets, IP assignments, and DNS records across the organization?`,
o:[`IP address management (IPAM)`,`A wireless site survey`,`A protocol analyzer capture`,`A cable certifier and tester`],
a:[0],
e:`IPAM tools centralize IP planning and tracking, often integrating with DHCP and DNS to prevent conflicts.`},

{d:"NO",s:`A provider guarantees 99.95% uptime and a four-hour response time for outages. Which document defines this?`,
o:[`A service-level agreement (SLA)`,`A memorandum of understanding`,`An acceptable use policy`,`A rack elevation diagram`],
a:[0],
e:`SLAs define measurable service commitments, such as uptime and response times, and often include penalties.`},

{d:"NO",s:`A wireless engineer walks a building measuring signal strength to visualize coverage gaps. What does this produce?`,
o:[`A heat map`,`A rack diagram`,`A routing table`,`A baseline configuration`],
a:[0],
e:`Wireless surveys produce heat maps showing signal strength and coverage, which guide AP placement and channel planning.`},

{d:"NO",s:`A switch model has reached end-of-support (EOS). What does this mean for the organization?`,
o:[`It won't get security updates or support`,`It can no longer pass any network traffic at all`,`It is automatically replaced by the vendor`,`It must be moved to a different VLAN`],
a:[0],
e:`After end-of-support, vendors stop providing patches and technical support, increasing risk. End-of-life refers to the end of sales or production.`},

{d:"NO",s:`A team keeps an approved, known-good configuration for each switch model to compare against running devices. What is this?`,
o:[`A baseline (golden) configuration`,`A current production configuration`,`A backup of the device logs`,`A routing table snapshot`],
a:[0],
e:`Golden configurations define the approved standard, making it easy to detect drift and deploy consistent settings.`},

{d:"NO",s:`Why should a copy of each device's configuration be saved off the device?`,
o:[`To restore it after a failure or bad change`,`To make the device run its routing protocols faster`,`To prevent any users from logging in to the device`,`To reduce the device's power consumption`],
a:[0],
e:`Configuration backups allow fast recovery after hardware failures, mistakes, or corruption.`},

{d:"NO",s:`Before changing a core router's configuration, an engineer submits a request describing the planned update, its risk, and a rollback plan. Which process is this?`,
o:[`Change management`,`Asset decommissioning`,`Wireless site surveying`,`Packet capture analysis`],
a:[0],
e:`Change management reviews, approves, and tracks changes to reduce outages and ensure rollback plans exist.`},

{d:"NO",s:`A firewall is being retired. What should happen as part of decommissioning?`,
o:[`Wipe its config and update asset records`,`Leave it plugged in, unmonitored, in the rack`,`Sell it with its configuration intact`,`Keep its admin password the same for reuse`],
a:[0],
e:`Decommissioning includes sanitizing configuration and data, removing it from monitoring, and updating inventory and documentation.`},

{d:"NO",s:`A vendor releases an update that fixes a security flaw in the company's switches. Which life-cycle activity applies?`,
o:[`Software management, including firmware patching`,`Decommissioning the switches immediately`,`Creating a new wireless heat map`,`Changing the switches' rack positions`],
a:[0],
e:`Life-cycle management includes applying OS, firmware, and bug-fix updates, ideally tested and scheduled through change management.`},

{d:"NO",s:`A switch sends an unsolicited SNMP message to the monitoring server when an interface goes down. What is this message?`,
o:[`A trap`,`A get request`,`A MIB`,`A community string`],
a:[0],
e:`SNMP traps are event notifications sent by agents. Managers poll agents with get requests, and the MIB defines available objects.`},

{d:"NO",s:`Which SNMP version adds authentication and encryption?`,
o:[`SNMPv3`,`SNMPv2c`,`SNMPv1`,`SNMPv2 with community strings`],
a:[0],
e:`SNMPv3 supports user-based authentication and encryption. SNMPv1 and v2c rely on plaintext community strings.`},

{d:"NO",s:`What does an SNMP management information base (MIB) define?`,
o:[`The objects that can be monitored on a device`,`The VLANs configured on a switch`,`The routes a router has learned`,`The list of users allowed on the network`],
a:[0],
e:`A MIB is a structured database of object identifiers (OIDs) that describe what a device can report or have configured.`},

{d:"NO",s:`An engineer needs to know which hosts talk to each other and how much data they send, without capturing full packets. Which method fits?`,
o:[`Flow data, such as NetFlow`,`A full packet capture`,`A cable tester on each port`,`A Wi-Fi heat map of the site`],
a:[0],
e:`Flow data summarizes conversations by source, destination, ports, and volume. Packet captures record full contents.`},

{d:"NO",s:`A monitoring system learns normal bandwidth usage and alerts when traffic is far above that level. Which concept does this rely on?`,
o:[`Baselines with anomaly alerting`,`Static routing with default routes`,`Port security with MAC limits`,`DHCP reservations and exclusions`],
a:[0],
e:`Baselines define normal performance, so deviations can trigger alerts that point to problems or attacks.`},

{d:"NO",s:`Logs from routers, switches, and firewalls are sent to one server for storage and searching. Which component receives them?`,
o:[`A syslog collector`,`A DHCP relay agent`,`A TFTP configuration server`,`An NTP server`],
a:[0],
e:`Syslog collectors aggregate device logs centrally. A SIEM adds correlation and alerting on top of aggregated logs.`},

{d:"NO",s:`An IDS needs to see a copy of all traffic on several switch ports. What should be configured on the switch?`,
o:[`Port mirroring`,`Port security`,`Link aggregation`,`A voice VLAN`],
a:[0],
e:`Port mirroring (SPAN) copies traffic from source ports or VLANs to a monitoring port.`},

{d:"NO",s:`A monitoring platform pulls interface statistics from a cloud network controller through its REST interface. Which method is this?`,
o:[`API integration`,`Port mirroring`,`Console access`,`Syslog messages only`],
a:[0],
e:`APIs let monitoring and automation tools collect data from, and configure, modern platforms and controllers.`},

{d:"NO",s:`A tool sweeps every subnet nightly to find newly connected devices. Which monitoring solution is this?`,
o:[`Scheduled network discovery`,`Ad hoc packet capture`,`Wireless site surveying`,`Configuration rollback`],
a:[0],
e:`Network discovery identifies devices on the network. It can run on a schedule or ad hoc when needed.`},

{d:"NO",s:`A tool alerts when a router's running configuration no longer matches the approved version. Which monitoring type is this?`,
o:[`Configuration monitoring`,`Availability monitoring`,`Traffic analysis`,`Performance monitoring`],
a:[0],
e:`Configuration monitoring detects unauthorized or accidental changes by comparing against baselines.`},

{d:"NO",s:`A business can afford to lose no more than 15 minutes of data. Which metric is this?`,
o:[`Recovery point objective (RPO)`,`Recovery time objective (RTO)`,`Mean time to repair (MTTR)`,`Mean time between failures (MTBF)`],
a:[0],
e:`RPO is the maximum acceptable data loss, which drives backup and replication frequency. RTO is the maximum acceptable downtime.`},

{d:"NO",s:`A recovery site has power, cooling, and network connections but no current data or configured systems. Which type is it?`,
o:[`A cold site`,`A warm site`,`A hot site`,`A mirrored site`],
a:[0],
e:`Cold sites are cheapest but take the longest to bring online. Warm sites have some equipment ready, and hot sites can take over almost immediately.`},

{d:"NO",s:`Two datacenters both serve live traffic, and either can handle the full load if the other fails. Which approach is this?`,
o:[`Active-active`,`Active-passive`,`Cold standby`,`Tabletop testing`],
a:[0],
e:`Active-active uses all sites or nodes at once. Active-passive keeps a standby that takes over only on failure.`},

{d:"NO",s:`Which metric measures the average time it takes to fix a failed device?`,
o:[`Mean time to repair (MTTR)`,`Mean time between failures (MTBF)`,`Recovery point objective (RPO)`,`Service-level objective (SLO)`],
a:[0],
e:`MTTR is the average repair time. MTBF measures reliability as the average time between failures.`},

{d:"NO",s:`The DR team actually fails over a test application to the backup site to prove it works. Which DR activity is this?`,
o:[`A validation test`,`A tabletop exercise`,`A wireless survey`,`A paper review`],
a:[0],
e:`Validation tests exercise the real recovery process. Tabletop exercises are discussion-based walkthroughs.`},

{d:"NO",s:`A network printer must always receive the same IP address from DHCP. What should be configured?`,
o:[`A DHCP reservation`,`A DHCP exclusion`,`A shorter lease time`,`A larger scope`],
a:[0],
e:`Reservations bind an address to a client's MAC address. Exclusions keep addresses out of the pool for static assignment.`},

{d:"NO",s:`Clients on VLAN 30 can't get addresses because the DHCP server is on another subnet. What should be configured on the router?`,
o:[`A DHCP relay (IP helper)`,`A DHCP exclusion range`,`A DNS forwarder`,`A static ARP entry`],
a:[0],
e:`DHCP discovery uses broadcasts that routers don't forward. A relay agent forwards them as unicast to the DHCP server.`},

{d:"NO",s:`Which DHCP setting provides clients with information such as the default gateway and DNS servers?`,
o:[`DHCP options`,`DHCP exclusions`,`The lease time`,`The relay agent`],
a:[0],
e:`DHCP options deliver settings such as the router (option 3), DNS servers (option 6), and domain name.`},

{d:"NO",s:`IPv6 hosts generate their own addresses using the router's advertised prefix, without a DHCP server. What is this?`,
o:[`SLAAC`,`APIPA`,`DHCP relay`,`NAT64`],
a:[0],
e:`Stateless address autoconfiguration uses router advertisements to give hosts a prefix, from which they build their own addresses.`},

{d:"NO",s:`Which DNS record maps a hostname to an IPv6 address?`,
o:[`AAAA`,`A (address)`,`PTR`,`MX (mail)`],
a:[0],
e:`AAAA records map names to IPv6 addresses. A records map names to IPv4 addresses.`},

{d:"NO",s:`Which DNS record identifies the mail servers for a domain?`,
o:[`MX`,`CNAME`,`NS`,`PTR`],
a:[0],
e:`Mail exchange records list a domain's mail servers and their priorities. PTR records are for reverse lookups, and NS records identify name servers.`},

{d:"NO",s:`An admin wants www.example.com to be an alias for web01.example.com. Which record type is used?`,
o:[`CNAME`,`A (address)`,`TXT`,`NS (nameserver)`],
a:[0],
e:`Canonical name records create aliases that point to another hostname. A records map names directly to IPv4 addresses.`},

{d:"NO",s:`A security tool looks up 203.0.113.25 to find its hostname. Which record and zone type support this?`,
o:[`A PTR record in a reverse zone`,`An A record in a forward zone`,`An MX record in a forward zone`,`A CNAME record in a reverse zone`],
a:[0],
e:`Reverse lookups use PTR records in reverse zones, such as in-addr.arpa for IPv4.`},

{d:"NO",s:`Which DNS security extension adds digital signatures so resolvers can verify that responses haven't been forged?`,
o:[`DNSSEC`,`DNS over HTTPS`,`A TXT record`,`A recursive resolver`],
a:[0],
e:`DNSSEC validates the authenticity and integrity of DNS data. DoH and DoT encrypt queries for privacy but don't sign records.`},

{d:"NO",s:`Which protocol encrypts DNS queries so they blend in with ordinary web traffic on port 443?`,
o:[`DNS over HTTPS (DoH)`,`DNS over TLS (DoT)`,`DNSSEC`,`Dynamic DNS`],
a:[0],
e:`DoH sends DNS over HTTPS on 443, blending with web traffic. DoT uses a dedicated TLS port, 853. DNSSEC signs records but doesn't encrypt queries.`},

{d:"NO",s:`A DNS server answers from its cache rather than from its own zone data. What type of answer is this?`,
o:[`Non-authoritative`,`Authoritative`,`A primary zone answer`,`A secondary zone transfer`],
a:[0],
e:`Authoritative answers come from a server hosting the zone. Cached answers from other servers are non-authoritative.`},

{d:"NO",s:`Financial trading systems need sub-microsecond clock accuracy across servers. Which protocol fits?`,
o:[`Precision Time Protocol (PTP)`,`Network Time Protocol (NTP)`,`Simple Network Management Protocol`,`Dynamic Host Configuration Protocol`],
a:[0],
e:`PTP provides much higher precision than NTP, often using hardware timestamping. Network Time Security (NTS) adds authentication to NTP.`},

{d:"NO",s:`Remote users connect to the corporate network, but only traffic for corporate resources goes through the VPN. What is this setup?`,
o:[`Split tunnel`,`Full tunnel`,`Site-to-site VPN`,`Clientless VPN`],
a:[0],
e:`Split tunneling sends only corporate traffic through the VPN. Full tunneling sends all traffic, including internet, through it.`},

{d:"NO",s:`Users access internal web apps through a browser portal without installing VPN software. What type of VPN is this?`,
o:[`Clientless VPN`,`Site-to-site VPN`,`Full-tunnel client VPN`,`GRE tunnel`],
a:[0],
e:`Clientless VPNs use a web portal over TLS, which is convenient for browser-based applications.`},

{d:"NO",s:`Admins can manage routers through a separate network and console servers even when the production network is down. What is this?`,
o:[`Out-of-band management`,`In-band management`,`Split tunneling`,`Port mirroring to a monitor`],
a:[0],
e:`Out-of-band management uses a dedicated path, such as console servers or a management network, independent of production traffic.`},

{d:"NO",s:`Admins must first connect to a hardened, monitored server before reaching devices in the management network. What is that server?`,
o:[`A jump box`,`A proxy cache`,`A syslog collector`,`A DHCP relay`],
a:[0],
e:`Jump boxes (jump hosts) centralize and control administrative access, supporting logging and least privilege.`},

{d:"NO",s:`A brand-new switch has no IP address yet. How can an admin perform initial configuration?`,
o:[`Through the console port`,`Through SSH to its IP address`,`Through its web GUI over HTTPS`,`Through an API call over the network`],
a:[0],
e:`Console connections work without network configuration and are used for initial setup and recovery.`},

{d:"NS",s:`What is the difference between a vulnerability and a threat?`,
o:[`A vulnerability is a weakness; a threat exploits it`,`A threat is a weakness; a vulnerability could exploit it`,`They're two names for the same concept`,`A vulnerability is always caused by an insider`],
a:[0],
e:`A vulnerability is a weakness. A threat is something that could exploit it, an exploit is the method used, and risk combines likelihood and impact.`},

{d:"NS",s:`An attacker uses a specific piece of code to take advantage of a buffer overflow in a router's firmware. What is the code called?`,
o:[`An exploit`,`A threat`,`A risk rating`,`A security baseline`],
a:[0],
e:`An exploit is the tool or technique that takes advantage of a vulnerability. A threat is the potential danger, and risk weighs likelihood and impact.`},

{d:"NS",s:`Which protocol is commonly used for centralized authentication of network device administrators and separates authentication, authorization, and accounting?`,
o:[`TACACS+`,`RADIUS`,`LDAP binds`,`SAML`],
a:[0],
e:`TACACS+ separates AAA functions and encrypts the full payload, making it popular for device administration. RADIUS combines authentication and authorization.`},

{d:"NS",s:`Which protocol is commonly used to authenticate users for Wi-Fi and VPN access with 802.1X?`,
o:[`RADIUS`,`TACACS+`,`SNMP`,`SAML`],
a:[0],
e:`RADIUS is the standard for network access authentication, including 802.1X for wired and wireless networks and VPNs.`},

{d:"NS",s:`Users sign in once and gain access to multiple cloud applications without signing in again. What is this?`,
o:[`Single sign-on (SSO)`,`Multifactor authentication`,`Time-based authentication`,`Geofencing`],
a:[0],
e:`SSO lets one authentication grant access to many applications, often using SAML or OpenID Connect.`},

{d:"NS",s:`Contractors can sign in to the network only between 8 a.m. and 6 p.m. on weekdays. Which concept is this?`,
o:[`Time-based authentication`,`Role-based access control`,`Geofencing`,`Single sign-on`],
a:[0],
e:`Time-based restrictions limit when accounts can authenticate, reducing exposure outside working hours.`},

{d:"NS",s:`An internal web portal uses a certificate that the company created itself, not one issued by a CA. What will browsers do?`,
o:[`Warn users unless it's trusted`,`Load the site with no warning on any device`,`Block all traffic to the site permanently`,`Encrypt nothing on the connection at all`],
a:[0],
e:`Self-signed certificates aren't trusted by default. Organizations can deploy their own internal PKI or trust the certificate on managed devices.`},

{d:"NS",s:`A company places a decoy server that looks like a database to detect attackers probing the network. What is it?`,
o:[`A honeypot`,`A jump box`,`A forward proxy`,`A NAS share`],
a:[0],
e:`Honeypots are decoys with no legitimate use, so any interaction suggests malicious activity. A honeynet is a network of honeypots.`},

{d:"NS",s:`A retailer that stores credit card data must meet which industry standard?`,
o:[`PCI DSS`,`GDPR`,`HIPAA Security Rule`,`SOX (Sarbanes-Oxley)`],
a:[0],
e:`The Payment Card Industry Data Security Standard applies to organizations that store, process, or transmit cardholder data.`},

{d:"NS",s:`A European customer's data must be stored and processed only in the EU. Which concept applies?`,
o:[`Data locality`,`Load balancing`,`Port security`,`Multitenancy`],
a:[0],
e:`Data locality requirements, driven by laws such as GDPR, restrict where data may be stored or processed.`},

{d:"NS",s:`Smart thermostats and cameras should be placed on a separate network segment from corporate laptops. Why?`,
o:[`IoT devices are often less secure and should be isolated`,`IoT devices need more bandwidth than laptops`,`IoT devices can only use IPv6 addresses on any network`,`IoT devices can't connect to any switch port`],
a:[0],
e:`Segmenting IoT and IIoT devices limits the damage if a weakly secured device is compromised.`},

{d:"NS",s:`Why should industrial control systems (ICS) and SCADA networks be segmented from the corporate network?`,
o:[`To protect safety-critical systems from IT-borne threats`,`To give ICS systems faster internet browsing speeds`,`To let ICS devices receive automatic Windows updates`,`To allow employees to control machinery from home`],
a:[0],
e:`OT systems often run legacy software and control physical processes, so strict segmentation limits exposure and protects safety.`},

{d:"NS",s:`Employees' personal phones connect to a separate network with access only to email and the internet. Which segment is this?`,
o:[`A BYOD network`,`A management network`,`A screened subnet for servers`,`An OT network`],
a:[0],
e:`BYOD segments limit what unmanaged personal devices can reach, protecting internal resources.`},

{d:"NS",s:`An attacker sends frames with a double 802.1Q tag to reach a network segment they aren't assigned to. Which attack is this?`,
o:[`VLAN hopping`,`MAC flooding`,`ARP poisoning`,`DNS spoofing`],
a:[0],
e:`VLAN hopping uses double tagging or switch spoofing to access other VLANs. Changing the native VLAN and disabling auto-trunking help prevent it.`},

{d:"NS",s:`An attacker floods a switch with fake source MAC addresses until its table is full, making it forward frames out of every port. Which attack is this?`,
o:[`MAC flooding`,`VLAN hopping`,`DNS poisoning`,`An evil twin`],
a:[0],
e:`MAC flooding fills the CAM table so the switch behaves like a hub, letting the attacker sniff traffic. Port security mitigates it.`},

{d:"NS",s:`An attacker sends forged ARP replies so that traffic for the default gateway goes to the attacker's machine. Which attack is this?`,
o:[`ARP poisoning`,`MAC flooding`,`VLAN hopping`,`DNS spoofing of records`],
a:[0],
e:`ARP poisoning (spoofing) links the attacker's MAC to another host's IP, enabling on-path attacks. Dynamic ARP inspection helps prevent it.`},

{d:"NS",s:`An unauthorized device on the network hands out IP settings with the attacker's address as the default gateway. Which threat is this?`,
o:[`A rogue DHCP server`,`A rogue access point`,`An evil twin`,`A MAC flood`],
a:[0],
e:`Rogue DHCP servers can redirect traffic through an attacker. DHCP snooping blocks DHCP offers from untrusted ports.`},

{d:"NS",s:`An attacker sets up an access point with the same SSID as the company's Wi-Fi to trick users into connecting. Which attack is this?`,
o:[`An evil twin`,`A rogue DHCP server`,`VLAN hopping`,`MAC flooding`],
a:[0],
e:`Evil twins imitate legitimate networks to capture credentials and traffic. Wireless IDS and 802.1X with certificate validation help.`},

{d:"NS",s:`Someone follows an employee through a badge-controlled door without scanning their own badge. What is this?`,
o:[`Tailgating`,`Shoulder surfing`,`Dumpster diving`,`Phishing`],
a:[0],
e:`Tailgating bypasses physical access control by following authorized people. Access vestibules and awareness training help.`},

{d:"NS",s:`An attacker searches a company's discarded paper for network diagrams and passwords. What is this?`,
o:[`Dumpster diving`,`Shoulder surfing`,`Tailgating`,`Vishing`],
a:[0],
e:`Dumpster diving recovers information from trash. Shredding and secure disposal policies prevent it.`},

{d:"NS",s:`A botnet floods a company's web server with traffic from thousands of sources until it can't respond. Which attack is this?`,
o:[`DDoS`,`ARP poisoning`,`VLAN hopping`,`DNS spoofing`],
a:[0],
e:`Distributed denial-of-service attacks overwhelm resources from many sources. Upstream scrubbing and CDNs help absorb them.`},

{d:"NS",s:`Users are sent to a fake banking site because a DNS resolver's cache contains forged records. Which attack is this?`,
o:[`DNS poisoning`,`MAC flooding`,`VLAN hopping`,`Tailgating through doors`],
a:[0],
e:`DNS cache poisoning inserts false records so names resolve to attacker-controlled addresses. DNSSEC helps protect against it.`},

{d:"NS",s:`A switch port should allow only one specific laptop's MAC address and shut down if another device connects. Which feature fits?`,
o:[`Port security`,`Port mirroring`,`Link aggregation`,`Spanning tree`],
a:[0],
e:`Port security limits allowed MAC addresses on a port and can shut it down or restrict it on a violation.`},

{d:"NS",s:`Devices must authenticate through RADIUS before a switch port grants network access. Which standard provides this?`,
o:[`802.1X`,`802.1Q`,`802.3af`,`802.11h`],
a:[0],
e:`IEEE 802.1X provides port-based network access control using a supplicant, authenticator, and authentication server.`},

{d:"NS",s:`Which hardening step should be done on every new switch before deployment?`,
o:[`Change defaults and disable unused ports`,`Enable Telnet for convenient remote access`,`Place all ports in the native VLAN`,`Leave SNMP community strings as "public"`],
a:[0],
e:`Device hardening includes changing defaults, disabling unused ports and services, and using secure management protocols.`},

{d:"NS",s:`A router should block traffic from the guest subnet to the server subnet but allow it to reach the internet. What should be configured?`,
o:[`An access control list (ACL)`,`A DHCP reservation`,`A voice VLAN for phones`,`A CNAME record for the server`],
a:[0],
e:`ACLs permit or deny traffic based on criteria such as source, destination, protocol, and port.`},

{d:"NS",s:`A company blocks employees from visiting gambling and malware sites by category. Which control is this?`,
o:[`URL and content filtering`,`Port security on switches`,`MAC filtering`,`Spanning tree on the core`],
a:[0],
e:`URL and content filters allow or block web access by category, reputation, or content, often through a proxy or secure web gateway.`},

{d:"NS",s:`Public web servers are placed in a network segment between the internet and the internal network. What is this segment called?`,
o:[`A screened subnet`,`A trusted internal zone`,`A native VLAN`,`A management VLAN`],
a:[0],
e:`A screened subnet (DMZ) hosts internet-facing services, limiting exposure of internal networks if those servers are compromised.`},

{d:"NS",s:`A company stores and rotates the private keys for its VPN and web certificates in a hardware security module. Which security practice is this?`,
o:[`Key management`,`Port mirroring`,`Content filtering`,`Band steering`],
a:[0],
e:`Key management covers secure generation, storage, rotation, and revocation of cryptographic keys.`},

{d:"NS",s:`Why is MAC filtering alone considered weak protection for wireless networks?`,
o:[`MAC addresses can be easily spoofed`,`MAC addresses change every hour`,`MAC filtering blocks all wireless clients`,`MAC filtering requires a RADIUS server`],
a:[0],
e:`Attackers can observe allowed MAC addresses and spoof them, so MAC filtering should be combined with stronger authentication.`},

{d:"NS",s:`How should traffic between trusted and untrusted zones be handled?`,
o:[`Inspected and restricted by policy`,`Allowed freely to improve performance`,`Routed without any logging at all`,`Blocked entirely in both directions`],
a:[0],
e:`Zones group systems by trust level, and firewalls enforce rules on traffic crossing between them.`},

{d:"NI",s:`Compared with 2.4 GHz, how does 5 GHz Wi-Fi typically behave?`,
o:[`Higher throughput but shorter range`,`Longer range but lower throughput`,`Better wall penetration and fewer channels`,`It's limited to three channels in total`],
a:[0],
e:`5 GHz offers more channels and higher throughput but attenuates more through walls, so its range is shorter than 2.4 GHz.`},

{d:"NI",s:`An engineer is deploying Wi-Fi 6E in the 6 GHz band. Which security requirement applies?`,
o:[`WPA3, or OWE for open networks`,`WEP must be enabled for older clients`,`WPA2 with TKIP is the minimum`,`No encryption is permitted in 6 GHz`],
a:[0],
e:`The 6 GHz band requires WPA3 or Enhanced Open (OWE); legacy WPA2-only security isn't allowed.`},

{d:"NI",s:`Two buildings 300 meters apart need a wireless link between their networks. Which setup fits best?`,
o:[`A point-to-point bridge with directional antennas`,`An ad hoc network between two laptops`,`A single omnidirectional AP in one building`,`A Bluetooth connection between switches`],
a:[0],
e:`Point-to-point wireless links use directional antennas aimed at each other to bridge networks across distances.`},

{d:"NI",s:`Two laptops connect directly to each other over Wi-Fi with no access point. Which network type is this?`,
o:[`Ad hoc`,`Infrastructure`,`Mesh`,`Point to multipoint`],
a:[0],
e:`Ad hoc (IBSS) networks connect devices directly without an AP. Infrastructure mode uses APs.`},

{d:"NI",s:`A wireless analyzer shows the same SSID from three APs. What uniquely identifies each AP radio?`,
o:[`The BSSID`,`The ESSID`,`The channel width`,`The PSK`],
a:[0],
e:`Each AP radio has a unique BSSID, typically derived from its MAC address, while all share the ESSID (network name).`},

{d:"NI",s:`A wiring closet's switches must keep running through brief power outages and voltage sags. What should be installed?`,
o:[`An uninterruptible power supply (UPS)`,`A power distribution unit (PDU) only`,`A fiber distribution panel`,`A patch panel`],
a:[0],
e:`A UPS provides battery power and conditioning during short outages and sags, and it can bridge to a generator.`},

{d:"NI",s:`Where are incoming optical cable runs terminated and organized in a rack before patching to switches?`,
o:[`A fiber distribution panel`,`A power distribution unit`,`A 110 punch-down block`,`A demarcation point extension`],
a:[0],
e:`Fiber distribution panels terminate, protect, and organize fiber strands, with patch cords connecting them to equipment.`},

{d:"NI",s:`Network equipment must be installed in a shared space that other tenants can access. What should be used?`,
o:[`A lockable rack or cabinet`,`An open two-post rack`,`A wall shelf without doors`,`A desk in the shared area`],
a:[0],
e:`Lockable racks and cabinets protect equipment from tampering and unauthorized access in shared spaces.`},

{d:"NT",s:`According to the CompTIA troubleshooting methodology, what is the first step?`,
o:[`Identify the problem`,`Establish a theory of probable cause`,`Implement the solution`,`Document findings`],
a:[0],
e:`The steps are: identify the problem, establish a theory, test the theory, plan the fix, implement or escalate, verify functionality, and document.`},

{d:"NT",s:`While identifying a problem, a technician asks, "Did anything change on the network before this started?" Why is this useful?`,
o:[`Recent changes are a common cause of new problems`,`Changes never cause network problems at all`,`It replaces the need to gather any other information`,`It's required before any users can be questioned`],
a:[0],
e:`Determining whether anything changed often points directly to the cause, such as a new configuration or update.`},

{d:"NT",s:`A technician's theory of probable cause is tested and proven wrong. What should happen next?`,
o:[`Establish a new theory or escalate`,`Implement the original fix anyway`,`Document the issue as resolved`,`Close the ticket and notify users`],
a:[0],
e:`If a theory isn't confirmed, the technician forms a new theory or escalates to someone with more expertise.`},

{d:"NT",s:`After implementing a fix, what should the technician do before documenting the outcome?`,
o:[`Verify functionality and prevent recurrence`,`Close the ticket without testing anything`,`Start troubleshooting a different issue right away`,`Revert the fix to see if the problem returns`],
a:[0],
e:`Verifying full system functionality confirms the fix worked and didn't cause new issues. Preventive measures help stop recurrence.`},

{d:"NT",s:`A technician starts at the physical layer and checks cables and link lights before moving up through the OSI model. Which approach is this?`,
o:[`Bottom-to-top`,`Top-to-bottom`,`Divide and conquer`,`Question the obvious`],
a:[0],
e:`Bottom-to-top troubleshooting starts at Layer 1. Top-to-bottom starts at the application, and divide and conquer starts in the middle.`},

{d:"NT",s:`A technician first checks whether a host can ping its gateway, then decides whether to troubleshoot higher or lower layers. Which approach is this?`,
o:[`Divide and conquer`,`Bottom-to-top`,`Top-to-bottom OSI`,`Escalation to tier 2`],
a:[0],
e:`Divide and conquer starts at a middle layer, such as Layer 3, and moves up or down depending on the result.`},

{d:"NT",s:`Users report three unrelated issues at once: a printer error, slow Wi-Fi, and a locked account. How should the technician proceed?`,
o:[`Handle each problem individually`,`Assume they all share one cause`,`Fix only the easiest one`,`Reboot every network device`],
a:[0],
e:`The methodology says to approach multiple problems individually so each gets a proper diagnosis.`},

{d:"NT",s:`Why should a technician document findings, actions, and outcomes throughout troubleshooting?`,
o:[`So others can resolve similar issues faster`,`So the ticket can be closed before testing`,`So users don't need to be told about changes`,`So the change management process can be skipped`],
a:[0],
e:`Documentation builds a knowledge base, supports audits, and helps future troubleshooting.`},

{d:"NT",s:`A 10 Gbps link over a 90-meter cable keeps failing. The cable is labeled Cat 5e. What is the most likely problem?`,
o:[`Cat 5e isn't rated for 10 Gbps`,`The cable is too short for 10 Gbps`,`The switch needs jumbo frames enabled`,`The cable must be plenum-rated`],
a:[0],
e:`10GBASE-T needs Cat 6a (or better) for 100 meters. Cat 6 supports it only to about 55 meters, and Cat 5e isn't rated for it.`},

{d:"NT",s:`A fiber link between a multimode transceiver and a single-mode cable won't come up reliably. What's the issue?`,
o:[`A fiber type mismatch`,`A duplex mismatch`,`A native VLAN mismatch`,`An MTU mismatch on the link`],
a:[0],
e:`Single-mode and multimode fiber and optics must match. Mixing them causes high loss or no link.`},

{d:"NT",s:`Signals from one pair in a cable bleed into an adjacent pair, causing errors. What is this?`,
o:[`Crosstalk`,`Attenuation`,`Latency`,`Jitter`],
a:[0],
e:`Crosstalk is interference between wire pairs, often caused by poor termination or untwisting too much wire.`},

{d:"NT",s:`A cable run is 140 meters long, and the far-end device has an unstable connection. What is the most likely cause?`,
o:[`Attenuation past the length limit`,`Crosstalk from a wireless access point`,`A duplex mismatch between the devices`,`An incorrect DNS server setting`],
a:[0],
e:`Twisted-pair Ethernet is limited to 100 meters. Longer runs suffer attenuation, which is signal loss over distance.`},

{d:"NT",s:`Ethernet cables run alongside fluorescent lights and motors in a factory, and errors are high. Which cable type would help?`,
o:[`Shielded twisted pair (STP)`,`Unshielded twisted pair (UTP)`,`Plenum-rated UTP`,`Shorter UTP patch cords`],
a:[0],
e:`STP reduces electromagnetic interference in electrically noisy environments, provided it's properly grounded.`},

{d:"NT",s:`A newly made patch cable doesn't work, and a cable tester shows pairs in the wrong pin positions. What's the problem?`,
o:[`Improper termination`,`Attenuation`,`Signal interference`,`A transceiver mismatch`],
a:[0],
e:`Improper termination, such as miswired or split pairs, causes failures or errors. Re-terminating to T568A or T568B fixes it.`},

{d:"NT",s:`A new fiber link shows no light at either end, but both optics are good. What's a common cause?`,
o:[`TX and RX strands are transposed`,`The VLAN ID is incorrect`,`The DNS server is down`,`The DHCP scope is full of leases`],
a:[0],
e:`Fiber needs transmit connected to receive on each end. Swapped TX/RX strands prevent the link from coming up.`},

{d:"NT",s:`A switch interface shows a steadily increasing CRC error count. What does this usually indicate?`,
o:[`A physical layer problem, such as bad cabling`,`An incorrect default gateway on the hosts`,`A DNS server returning the wrong records`,`A DHCP scope that has run out of addresses`],
a:[0],
e:`CRC errors mean frames are corrupted in transit, usually from bad cables, interference, or a duplex mismatch.`},

{d:"NT",s:`An interface counter shows many frames smaller than 64 bytes. What are these called?`,
o:[`Runts`,`Giants`,`Jumbo frames`,`Drops`],
a:[0],
e:`Runts are undersized frames, often from collisions or duplex mismatches. Giants exceed the maximum frame size.`},

{d:"NT",s:`A switch port shows "err-disabled." What commonly causes this state?`,
o:[`A security violation, such as port security`,`An admin typing "shutdown" on the port`,`A VLAN with no assigned ports`,`A DNS lookup failure on a host`],
a:[0],
e:`Ports go error-disabled after violations, such as port security or BPDU guard. "Administratively down" means an admin shut the port.`},

{d:"NT",s:`A switch port shows "administratively down." What should the technician check?`,
o:[`Whether it was shut down in the config`,`Whether the cable has too much crosstalk`,`Whether the PoE budget is exceeded`,`Whether the DHCP server is reachable`],
a:[0],
e:`Administratively down means the port is disabled in configuration. Enabling it ("no shutdown") brings it back if that's intended.`},

{d:"NT",s:`New PoE cameras won't power on, though older ones on the same switch work. The switch is near its rated power. What's the likely cause?`,
o:[`The PoE power budget is exceeded`,`The cameras use the wrong VLAN`,`The cables are too short`,`The DNS server is unreachable`],
a:[0],
e:`Each PoE switch has a total power budget. When it's exceeded, new devices may not get power.`},

{d:"NT",s:`A PoE+ access point won't fully power on a switch that only supports 802.3af. What's the problem?`,
o:[`An incorrect PoE standard`,`A transceiver mismatch`,`A duplex mismatch`,`An incorrect subnet mask`],
a:[0],
e:`802.3af provides up to 15.4 W per port. Devices needing PoE+ (802.3at, 30 W) or PoE++ (802.3bt) may not run at full function on it.`},

{d:"NT",s:`A fiber link's optical power readings are far below the transceiver's receive sensitivity. What should be checked first?`,
o:[`Dirty connectors and cable damage`,`DHCP lease times on clients`,`VLAN trunk settings`,`DNS record types for the site`],
a:[0],
e:`Low signal strength often comes from dirty or damaged connectors, tight bends, or excessive splices. Cleaning and inspection come first.`},

{d:"NT",s:`After a new switch was added with redundant links, the network slows to a crawl and broadcast traffic spikes. What's the likely cause?`,
o:[`A switching loop from STP not working`,`An incorrect DNS server on the hosts`,`A full DHCP scope on the server`,`An expired TLS certificate`],
a:[0],
e:`Without working spanning tree, redundant links create loops and broadcast storms that overwhelm the network.`},

{d:"NT",s:`An old access-layer switch unexpectedly became the STP root bridge, causing poor traffic paths. How should this be fixed?`,
o:[`Lower the intended root's bridge priority`,`Raise the bridge priority on the core switch`,`Disable spanning tree on all switches`,`Enable jumbo frames on all ports`],
a:[0],
e:`The switch with the lowest bridge ID becomes root. Setting a lower priority on the intended root controls the election.`},

{d:"NT",s:`In STP, which port state doesn't forward frames but still listens for BPDUs to maintain the topology?`,
o:[`Blocking`,`Forwarding`,`Learning`,`Disabled`],
a:[0],
e:`Blocking ports prevent loops but stay ready to take over. Forwarding ports pass traffic, and learning ports build the MAC table first.`},

{d:"NT",s:`A user's PC gets an IP address in the wrong subnet and can't reach department servers. Other users on the same switch are fine. What should be checked?`,
o:[`The switch port's VLAN assignment`,`The DNS MX records for the domain`,`The PoE budget on the switch`,`The NTP server's time source`],
a:[0],
e:`An incorrect VLAN assignment places the host in the wrong broadcast domain and subnet.`},

{d:"NT",s:`After a firewall change, users can reach websites by IP address but not by name. What's the likely cause?`,
o:[`DNS traffic is being blocked`,`HTTPS traffic is being blocked`,`The default gateway is wrong`,`The cable is faulty`],
a:[0],
e:`Working IP access but failing name resolution points to DNS, such as an ACL now blocking port 53.`},

{d:"NT",s:`Hosts can reach local devices but nothing on other subnets. Their configured gateway is 192.168.1.254, but the router is 192.168.1.1. What's the issue?`,
o:[`An incorrect default gateway`,`An incorrect DNS server address`,`A duplicate MAC address`,`An exceeded PoE budget`],
a:[0],
e:`Without the correct default gateway, hosts can't send traffic off their local subnet.`},

{d:"NT",s:`New devices get APIPA addresses, but existing devices work fine. What's the most likely cause?`,
o:[`The DHCP address pool is exhausted`,`The DNS server is offline`,`The default route is missing`,`The switch has a spanning tree loop`],
a:[0],
e:`When the DHCP scope runs out, new clients can't get leases and fall back to APIPA. Expanding the scope or shortening leases helps.`},

{d:"NT",s:`Two hosts intermittently lose connectivity, and logs show an address conflict warning. What's the cause?`,
o:[`A duplicate IP address`,`An incorrect subnet mask`,`A missing default route`,`A rogue access point`],
a:[0],
e:`Duplicate IP addresses cause intermittent connectivity as ARP entries flip between hosts.`},

{d:"NT",s:`A host at 10.1.1.20 uses mask 255.255.0.0, but its network is 10.1.1.0/24. It can't reach servers on 10.1.2.0/24, though other hosts can. What's the likely cause?`,
o:[`An incorrect subnet mask`,`A duplicate MAC address`,`An incorrect DNS suffix`,`A full PoE budget`],
a:[0],
e:`With a /16 mask, the host treats 10.1.2.x as local and tries to ARP for it instead of sending traffic to the default gateway.`},

{d:"NT",s:`A router can reach its connected networks but drops all traffic to the internet. Its routing table has no 0.0.0.0/0 entry. What's missing?`,
o:[`A default route`,`A DHCP relay`,`A CNAME record`,`A voice VLAN for phones`],
a:[0],
e:`The default route sends traffic for unknown destinations, such as the internet, to the next hop.`},

{d:"NT",s:`After a new ACL was applied to a router interface, users can't reach the file server. What should the technician check?`,
o:[`Whether the ACL blocks the traffic`,`Whether the cable meets Cat 6a standards`,`Whether the AP is on channel 6`,`Whether the UPS battery needs replacing`],
a:[0],
e:`ACLs process rules in order and often end with an implicit deny, so a missing permit can block required traffic.`},

{d:"NT",s:`VoIP calls sound choppy, and monitoring shows packets arriving at uneven intervals. Which metric describes this?`,
o:[`Jitter`,`Throughput`,`Bandwidth`,`Attenuation`],
a:[0],
e:`Jitter is variation in packet delay, which disrupts real-time traffic. QoS and jitter buffers help.`},

{d:"NT",s:`A satellite link has a 600 ms round-trip delay, making interactive apps feel slow. Which metric is high?`,
o:[`Latency`,`Jitter`,`Packet loss`,`Bandwidth`],
a:[0],
e:`Latency is the time packets take to travel. Satellite links, especially geostationary ones, have high latency.`},

{d:"NT",s:`A 1 Gbps link consistently transfers only about 300 Mbps of actual data. Which measurement is 300 Mbps?`,
o:[`Throughput`,`Bandwidth`,`Latency`,`Jitter on the link`],
a:[0],
e:`Bandwidth is the link's theoretical capacity. Throughput is the actual data rate achieved.`},

{d:"NT",s:`Every user's traffic passes through one 100 Mbps uplink, while access ports are 1 Gbps. What problem does this create?`,
o:[`A bottleneck`,`A switching loop`,`A duplicate IP address`,`Crosstalk`],
a:[0],
e:`A bottleneck is a point of lower capacity that limits overall performance. Upgrading the uplink or aggregating links relieves it.`},

{d:"NT",s:`Ping shows 15% of packets to a remote server never return. Which issue is this?`,
o:[`Packet loss`,`Jitter`,`High bandwidth`,`Low latency`],
a:[0],
e:`Packet loss causes retransmissions and poor application performance. Common causes include congestion, errors, and faulty hardware.`},

{d:"NT",s:`Wi-Fi performance is poor, and an analyzer shows neighboring APs on overlapping channels 3, 4, and 6. What's the issue?`,
o:[`Channel overlap causing interference`,`An incorrect default gateway on clients`,`An exhausted DHCP pool`,`A switching loop on the LAN`],
a:[0],
e:`Overlapping 2.4 GHz channels interfere with each other. Using 1, 6, and 11 reduces overlap.`},

{d:"NT",s:`Users in a far corner of the office have weak Wi-Fi and frequent drops. A survey shows low signal there. What's the best fix?`,
o:[`Add or move an AP`,`Change the SSID to a shorter name`,`Disable WPA3 on every access point`,`Lower the DHCP lease time`],
a:[0],
e:`Insufficient coverage is fixed by adjusting AP placement, adding APs, or tuning power and antennas based on a survey.`},

{d:"NT",s:`Laptops drop their connection when users walk between floors, even though coverage is good everywhere. What's the likely cause?`,
o:[`A roaming misconfiguration between APs`,`An incorrect subnet mask on laptops`,`Crosstalk in the patch cables`,`A missing MX record in DNS`],
a:[0],
e:`Inconsistent SSID, security, or VLAN settings across APs, or missing fast roaming support, cause drops during roaming.`},

{d:"NT",s:`Many devices compete for a shared, busy link, and performance drops during peak hours. What is this?`,
o:[`Congestion/contention`,`Attenuation`,`Improper cable termination`,`Duplicate IP addressing`],
a:[0],
e:`Congestion occurs when demand exceeds capacity. QoS, more bandwidth, or traffic shaping can help.`},

{d:"NT",s:`Which command shows each router hop between a host and a destination?`,
o:[`traceroute/tracert`,`nslookup -type=any`,`netstat -an`,`arp -a`],
a:[0],
e:`traceroute (tracert on Windows) lists the hops along a path, helping find where delays or failures occur.`},

{d:"NT",s:`Which command shows active TCP connections and listening ports on a host?`,
o:[`netstat`,`dig`,`arp`,`traceroute`],
a:[0],
e:`netstat displays active connections, listening ports, and related statistics, which helps spot unexpected services or connections.`},

{d:"NT",s:`An admin needs to query a specific DNS server for a domain's MX records from a Linux host. Which command fits best?`,
o:[`dig`,`ping`,`arp`,`netstat`],
a:[0],
e:`dig queries DNS servers for specific record types and shows detailed responses. nslookup is a similar tool.`},

{d:"NT",s:`Which tool traces a copper cable through walls by putting a signal on it and detecting the signal at the other end?`,
o:[`A toner and probe`,`A visual fault locator`,`A Wi-Fi analyzer`,`A protocol analyzer`],
a:[0],
e:`Toner probes help find and identify cable runs. Visual fault locators use visible light to find fiber breaks.`},

{d:"NT",s:`A technician needs to find a break or tight bend in a short fiber patch cable by shining visible red light through it. Which tool fits?`,
o:[`A visual fault locator`,`A toner probe`,`A cable tester for copper`,`A loopback plug`],
a:[0],
e:`Visual fault locators inject visible laser light, which leaks out at breaks and sharp bends.`},

{d:"NT",s:`A switch command shows which MAC addresses were learned on each port. Which command is this?`,
o:[`show mac-address-table`,`show interfaces status`,`show power inline`,`show vlan`],
a:[0],
e:`show mac-address-table lists learned MAC addresses with their ports and VLANs, helping locate devices.`},

{d:"NT",s:`An engineer wants to see which neighboring Cisco and non-Cisco devices are connected to each switch port. Which protocols help?`,
o:[`LLDP/CDP`,`SNMP/syslog`,`DHCP/DNS`,`NTP/PTP`],
a:[0],
e:`LLDP (vendor-neutral) and CDP (Cisco) advertise device identity and port information to directly connected neighbors.`},

{d:"NT",s:`A technician needs to passively copy traffic from a link for analysis without relying on switch configuration. Which hardware fits?`,
o:[`A network tap`,`A toner probe`,`A loopback adapter`,`A crimper`],
a:[0],
e:`Taps physically copy traffic from a link to a monitoring device and don't depend on switch resources like port mirroring does.`},

{d:"NT",s:`A technician wants to find which hosts on a subnet are up and which TCP ports each one has open. Which tool fits?`,
o:[`Nmap`,`dig`,`arp -a`,`pathping`],
a:[0],
e:`Nmap discovers live hosts and scans ports and service versions. dig queries DNS, arp -a shows the local ARP cache, and pathping measures loss along a path.`},

{d:"NT",s:`A technician wants to see which channels nearby wireless networks use and how strong their signals are. Which tool fits?`,
o:[`A Wi-Fi analyzer`,`A toner and probe`,`A visual fault locator`,`A loopback plug`],
a:[0],
e:`Wi-Fi analyzers show SSIDs, channels, signal strength, and interference, helping with channel planning and troubleshooting.`},

{d:"NT",s:`An engineer needs to inspect the full contents and headers of packets to diagnose an application-layer error. Which tool fits?`,
o:[`A protocol analyzer, such as Wireshark`,`A cable tester for copper Ethernet runs`,`An internet speed test website`,`A toner and probe kit`],
a:[0],
e:`Protocol analyzers capture and decode packets layer by layer, showing exactly what was sent and received.`},

{d:"NT",s:`A Windows user can't connect. Which command shows the PC's IP address, subnet mask, default gateway, and DNS servers?`,
o:[`ipconfig /all`,`netstat -an`,`tracert`,`arp -a`],
a:[0],
e:`ipconfig /all shows full adapter configuration on Windows. Linux uses ip addr (or the older ifconfig).`},
  ],
};
