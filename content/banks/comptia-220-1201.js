// CompTIA 220-1201 question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/comptia-220-1201.json.
module.exports = {
  id: "comptia-220-1201",
  idPrefix: "a1201",
  vendor: "CompTIA",
  code: "220-1201",
  name: "CompTIA A+ Core 1 (V15)",
  fullLength: 90,
  minutes: 90,
  passPercent: 68,
  readinessPercent: 80,
  sectioned: false,
  note: "CompTIA scores A+ Core 1 on a 100–900 scale with 675 to pass. This practice exam reports a straight percentage; treat 80% as your readiness bar. The real exam also includes performance-based questions (PBQs), which this practice exam doesn't include, so practice hands-on tasks separately. A+ certification requires passing both Core 1 (220-1201) and Core 2 (220-1202). Questions follow the 220-1201 exam objectives (version 3.0).",
  domains: [{"id":"MD","name":"Mobile Devices","weight":"13%"},{"id":"NET","name":"Networking","weight":"23%"},{"id":"HW","name":"Hardware","weight":"25%"},{"id":"VC","name":"Virtualization and Cloud Computing","weight":"11%"},{"id":"HNT","name":"Hardware and Network Troubleshooting","weight":"28%"}],
  Q: [
{d:"MD",s:`A laptop runs only 40 minutes on a full charge, and its battery health shows 55%. What should the technician do?`,
o:[`Replace the battery`,`Recalibrate the battery by draining it`,`Add more RAM`,`Lower the screen refresh rate`],
a:[0],
e:`Battery capacity degrades over charge cycles. Low health means the battery should be replaced with a compatible part.`},

{d:"MD",s:`A user wants a laptop to boot and load apps faster. Which upgrade usually gives the biggest improvement?`,
o:[`Replace the HDD with an SSD`,`Replace the webcam with a 4K model`,`Add a second keyboard`,`Replace the Wi-Fi antenna`],
a:[0],
e:`SSDs have much faster access times than spinning hard drives, which speeds up boot and application loading.`},

{d:"MD",s:`Which memory form factor do most laptops use?`,
o:[`SODIMM`,`DIMM`,`RIMM (Rambus)`,`SIMM (30-pin)`],
a:[0],
e:`Small outline DIMMs are compact modules for laptops and small form factor systems. Desktops typically use full-size DIMMs.`},

{d:"MD",s:`After a laptop's display was replaced, Wi-Fi signal is weak. What was likely disturbed during the repair?`,
o:[`The Wi-Fi antenna leads in the display lid`,`The battery's charge controller board`,`The keyboard ribbon cable and connector`,`The SSD's mounting screw`],
a:[0],
e:`Laptop Wi-Fi antennas usually run through the display lid. They can be pinched, disconnected, or misrouted during screen replacement.`},

{d:"MD",s:`A company wants laptops that unlock with the user's fingerprint. Which component provides this?`,
o:[`A biometric reader`,`An NFC antenna`,`A docking station`,`A port replicator`],
a:[0],
e:`Biometric readers, such as fingerprint sensors, provide physical security and convenient authentication.`},

{d:"MD",s:`Employees tap their badges on a laptop's palm rest to sign in. Which feature supports this?`,
o:[`A near-field scanner`,`A precision trackpad`,`An infrared webcam`,`An active stylus pen`],
a:[0],
e:`Near-field (NFC) scanners read badges or cards at close range for authentication.`},

{d:"MD",s:`A user's laptop microphone records no sound in video calls, but the headset mic works. What should be checked first?`,
o:[`The mic's privacy switch and settings`,`The Wi-Fi card's antenna placement`,`The battery's charge level and health`,`The SSD's firmware version and health`],
a:[0],
e:`Many laptops have hardware or software privacy controls for mics and cameras. Checking these and app permissions comes before hardware replacement.`},

{d:"MD",s:`A laptop's webcam shows a black image, and the camera light doesn't turn on. The laptop has a physical slider above the lens. What should be checked first?`,
o:[`Whether the privacy shutter is closed`,`Whether the battery needs replacing`,`Whether the RAM is seated correctly`,`Whether the Wi-Fi card is enabled`],
a:[0],
e:`Physical privacy shutters block the camera. Checking simple causes first saves time.`},

{d:"MD",s:`A laptop user wants to connect to an external monitor, keyboard, mouse, and wired network through one cable at their desk. Which accessory fits?`,
o:[`A docking station`,`A pressure-sensitive stylus`,`A Bluetooth headset`,`An external trackpad`],
a:[0],
e:`Docking stations, often over USB-C or Thunderbolt, provide display, peripheral, network, and power connections through one link.`},

{d:"MD",s:`A user's laptop has no internet, but their phone has 5G. How can the laptop get online through the phone?`,
o:[`Use the phone as a hotspot or tethered connection`,`Pair the phone as a Bluetooth keyboard`,`Connect the phone as an NFC reader for the laptop`,`Use the phone as a port replicator`],
a:[0],
e:`Tethering or a mobile hotspot shares the phone's cellular data connection over Wi-Fi, USB, or Bluetooth.`},

{d:"MD",s:`Which connector is reversible and used by most modern Android phones and laptops for charging and data?`,
o:[`USB-C`,`MicroUSB`,`MiniUSB`,`DB9`],
a:[0],
e:`USB-C is reversible and supports data, power delivery, and video. MicroUSB and MiniUSB are older, non-reversible connectors.`},

{d:"MD",s:`Which wireless technology lets a phone make contactless payments by holding it near a terminal?`,
o:[`NFC`,`Wi-Fi`,`Bluetooth`,`Infrared`],
a:[0],
e:`Near-field communication works at a few centimeters and is used for contactless payments and badge readers.`},

{d:"MD",s:`What's the difference between a port replicator and a docking station?`,
o:[`A replicator mainly extends ports; a dock adds more features`,`A port replicator charges devices; a dock can't provide power`,`A port replicator works only wirelessly; a dock needs cables`,`There's no difference at all; the two terms always mean the same thing`],
a:[0],
e:`Port replicators simply extend the laptop's ports. Docking stations often add extra capabilities, such as additional displays, drive bays, or charging.`},

{d:"MD",s:`A designer wants to draw directly on a tablet screen with pressure sensitivity. Which accessory fits?`,
o:[`An active stylus`,`A trackpoint`,`A port replicator`,`A Bluetooth speaker`],
a:[0],
e:`Active styluses support pressure sensitivity and precise input on compatible touch screens.`},

{d:"MD",s:`A user can't pair Bluetooth earbuds with a phone. What's a correct first step?`,
o:[`Enable Bluetooth and pairing mode`,`Disable Wi-Fi and restart the cellular modem`,`Reset all network settings on the phone`,`Remove the SIM card and reinsert it`],
a:[0],
e:`Bluetooth pairing steps are: enable Bluetooth, enable pairing mode, find the device, enter a PIN if needed, and test connectivity.`},

{d:"MD",s:`A traveler wants to add a second phone number for a foreign carrier without inserting a physical card. Which technology supports this?`,
o:[`eSIM`,`NFC pairing`,`MDM enrollment`,`GPS roaming`],
a:[0],
e:`An eSIM is an embedded SIM that can be provisioned digitally with a carrier profile.`},

{d:"MD",s:`A company wants to push Wi-Fi settings, require passcodes, and remotely wipe corporate data on employee phones. Which solution fits?`,
o:[`Mobile device management (MDM)`,`A port replicator`,`A Bluetooth hotspot`,`Cellular location services`],
a:[0],
e:`MDM enforces configurations and policies, deploys corporate apps, and can wipe devices or corporate data.`},

{d:"MD",s:`On a BYOD phone enrolled in MDM, what can the company typically wipe if the employee leaves?`,
o:[`Corporate apps and data only`,`All personal photos and contacts`,`The phone's carrier account`,`Nothing, under any policy`],
a:[0],
e:`BYOD management usually separates work and personal data, so only corporate data is removed with a selective wipe.`},

{d:"MD",s:`A user's phone shows the wrong location in maps, though GPS is enabled. Which other service helps determine location?`,
o:[`Cellular location services`,`NFC payment services`,`Bluetooth device pairing`,`USB port replication`],
a:[0],
e:`Location services combine GPS with cellular and Wi-Fi data to estimate position, especially indoors.`},

{d:"MD",s:`A user's phone stopped syncing large files to cloud storage partway through the month. What should be checked?`,
o:[`Whether the data cap was reached`,`Whether the stylus battery is low`,`Whether NFC is turned off`,`Whether the screen brightness is low`],
a:[0],
e:`Data caps can throttle or stop sync over cellular. Syncing over Wi-Fi or adjusting sync settings can help.`},

{d:"MD",s:`A new employee's phone isn't showing company calendar events. Which sync setting should be checked?`,
o:[`The mail account's calendar sync`,`The phone's NFC payment setting`,`The hotspot password`,`The screen timeout and lock`],
a:[0],
e:`Calendars, contacts, and mail sync through account settings, such as Exchange or Google accounts.`},

{d:"MD",s:`A phone needs to connect to a laptop over Bluetooth, and the laptop displays a six-digit code. What should the user do?`,
o:[`Confirm the matching code on the phone`,`Enter the code into the SIM settings`,`Ignore it and enable NFC`,`Type the code into the browser`],
a:[0],
e:`Pairing often requires confirming or entering a PIN on both devices to complete secure pairing.`},

{d:"MD",s:`A user disables cellular data while traveling abroad to avoid roaming charges but still needs email. What should they use?`,
o:[`Wi-Fi`,`NFC`,`GPS`,`An eSIM swap only`],
a:[0],
e:`With cellular data disabled, Wi-Fi provides data connectivity for email and apps.`},

{d:"MD",s:`A company issues corporate-owned phones that employees can't use for personal apps. Which MDM configuration is this?`,
o:[`Corporate-owned device configuration`,`Bring your own device configuration`,`Unmanaged personal configuration`,`Guest kiosk configuration`],
a:[0],
e:`Corporate configurations give the company full control. BYOD configurations protect corporate data while respecting personal use.`},

{d:"MD",s:`Which cellular generation offers the highest speeds and lowest latency?`,
o:[`5G`,`4G LTE`,`3G`,`2G`],
a:[0],
e:`5G provides higher throughput and lower latency than 4G LTE and older generations.`},

{d:"MD",s:`An employee's phone can't open a corporate app that MDM marks as required. What should the technician check?`,
o:[`Whether MDM deployed the app`,`Whether the phone's stylus is paired`,`Whether the screen protector is installed`,`Whether the phone uses a USB-C cable`],
a:[0],
e:`MDM distributes and manages corporate applications, so the device must be enrolled and assigned the app.`},

{d:"MD",s:`A laptop has a pointing stick in the middle of the keyboard. What is this called?`,
o:[`A track point`,`A digitizer`,`A drawing pad`,`A port replicator`],
a:[0],
e:`Track points (pointing sticks) are small joysticks between keys that control the cursor.`},

{d:"MD",s:`A user wants wireless audio while video conferencing on a laptop. Which accessory and connection fit best?`,
o:[`A Bluetooth headset`,`A wired stylus`,`An NFC tag`,`A port replicator`],
a:[0],
e:`Bluetooth headsets pair with the laptop to provide wireless audio and a microphone for calls. A stylus, NFC tag, or port replicator doesn't carry audio.`},

{d:"MD",s:`An older iPhone uses which proprietary connector for charging and data?`,
o:[`Lightning`,`USB-C`,`MicroUSB`,`MiniUSB (Mini-B)`],
a:[0],
e:`Older iPhones use Apple's Lightning connector. Newer iPhone models switched to USB-C.`},

{d:"NET",s:`Which port does an email client use to download mail with POP3?`,
o:[`110`,`143`,`25`,`443`],
a:[0],
e:`POP3 uses 110 to download mail, usually removing it from the server. IMAP uses 143, SMTP uses 25 to send mail, and HTTPS uses 443.`},

{d:"NET",s:`A user wants mail kept on the server and synced across a phone and laptop. Which protocol and port fit?`,
o:[`IMAP on 143`,`POP3 on 110`,`SMTP on 25`,`Telnet on 23`],
a:[0],
e:`IMAP keeps messages on the server and syncs folders across devices. POP3 typically downloads and removes mail from the server.`},

{d:"NET",s:`Which protocol sends outgoing email between mail servers?`,
o:[`SMTP`,`POP3`,`IMAP`,`LDAP`],
a:[0],
e:`SMTP (port 25) transfers mail between servers and from clients to servers. POP3 and IMAP retrieve mail.`},

{d:"NET",s:`A technician needs to remotely control a Windows desktop graphically. Which port must be open?`,
o:[`3389`,`22`,`23`,`3306`],
a:[0],
e:`Remote Desktop Protocol uses 3389. SSH uses 22, Telnet uses 23, and 3306 is the default port for MySQL databases.`},

{d:"NET",s:`Which protocol sends commands to a remote device in plaintext and should be replaced with SSH?`,
o:[`Telnet`,`HTTPS`,`SFTP`,`LDAPS`],
a:[0],
e:`Telnet (port 23) sends everything, including passwords, unencrypted. SSH (port 22) encrypts the session.`},

{d:"NET",s:`Which ports are used by NetBIOS over TCP/IP for legacy Windows name and session services?`,
o:[`137–139`,`20–21`,`67–68`,`161–162`],
a:[0],
e:`NetBIOS/NetBT uses 137–139. FTP uses 20–21, DHCP uses 67–68, and SNMP uses 161–162.`},

{d:"NET",s:`Windows file sharing uses which port for SMB/CIFS?`,
o:[`445`,`389`,`143`,`5353`],
a:[0],
e:`SMB/CIFS uses TCP 445 for file and printer sharing. LDAP uses 389, IMAP uses 143, and 5353 is multicast DNS (mDNS).`},

{d:"NET",s:`Which port does LDAP use to query a directory such as Active Directory?`,
o:[`389`,`443`,`110`,`3389`],
a:[0],
e:`LDAP uses 389 to query directories such as Active Directory. Secure LDAP (LDAPS) uses 636, HTTPS uses 443, and RDP uses 3389.`},

{d:"NET",s:`What's the main difference between TCP and UDP?`,
o:[`TCP is connection-oriented and reliable; UDP is connectionless`,`UDP is connection-oriented and reliable; TCP is connectionless`,`TCP is used only for email; UDP is used only for web traffic`,`TCP works only on wireless networks; UDP works only on wired`],
a:[0],
e:`TCP uses a handshake, acknowledgments, and retransmission. UDP is faster with less overhead, which suits streaming, DNS queries, and VoIP.`},

{d:"NET",s:`Which protocol and port transfer files with separate control and data channels and no encryption?`,
o:[`FTP on 20–21`,`SSH on 22 with keys`,`HTTPS on 443`,`SMB on 445`],
a:[0],
e:`FTP uses 21 for control and 20 for data in active mode, and sends credentials in plaintext.`},

{d:"NET",s:`Which Wi-Fi band offers the longest range and best wall penetration but the fewest channels?`,
o:[`2.4 GHz`,`5 GHz`,`6 GHz`,`60 GHz`],
a:[0],
e:`2.4 GHz travels farther and penetrates walls better, but it has only three non-overlapping channels and more interference.`},

{d:"NET",s:`A home user wants the fastest Wi-Fi on a new router and supported devices, using the 6 GHz band. Which standard is needed?`,
o:[`Wi-Fi 6E (802.11ax)`,`Wi-Fi 4 (802.11n)`,`Wi-Fi 5 (802.11ac)`,`802.11g`],
a:[0],
e:`Wi-Fi 6E extends 802.11ax into the 6 GHz band, and Wi-Fi 7 (802.11be) also supports it. Wi-Fi 5 (802.11ac) and Wi-Fi 4 (802.11n) don't use 6 GHz.`},

{d:"NET",s:`A warehouse tracks pallets with tags that are read by scanners from a few meters away, without line of sight. Which technology is this?`,
o:[`RFID`,`NFC`,`Bluetooth`,`Infrared`],
a:[0],
e:`RFID tags are read by radio from short to moderate distances, which suits inventory tracking. NFC works only within a few centimeters.`},

{d:"NET",s:`Why might a Wi-Fi router's available channels differ between countries?`,
o:[`Regulations limit allowed channels`,`Some countries don't allow encryption at all`,`Channels depend on the router's color`,`Wi-Fi uses only one channel worldwide`],
a:[0],
e:`Regulatory bodies set allowed channels and power levels, so available channels vary by region.`},

{d:"NET",s:`A user wants maximum throughput in an apartment with few nearby networks. Which channel width setting helps on 5 GHz?`,
o:[`A wider channel, like 80 MHz`,`A narrower 20 MHz channel only`,`Channel 1 on 2.4 GHz`,`Disabling all channel bonding`],
a:[0],
e:`Wider channels increase throughput when there's little interference. In crowded areas, narrower channels may perform better.`},

{d:"NET",s:`Which short-range wireless technology connects keyboards, mice, and headsets to a computer?`,
o:[`Bluetooth`,`RFID`,`Cellular`,`WISP fixed wireless`],
a:[0],
e:`Bluetooth creates personal area network connections for peripherals over short distances.`},

{d:"NET",s:`Which server automatically assigns IP addresses, subnet masks, and gateways to clients?`,
o:[`A DHCP server`,`A DNS server`,`A syslog server`,`An NTP server`],
a:[0],
e:`DHCP servers lease IP configuration to clients. DNS resolves names, syslog collects logs, and NTP synchronizes time.`},

{d:"NET",s:`Which server keeps clocks synchronized across computers so logs and authentication work correctly?`,
o:[`An NTP server`,`A print server`,`A mail server`,`A file server`],
a:[0],
e:`Network Time Protocol keeps clocks consistent. Time skew can break Kerberos authentication and confuse log timelines.`},

{d:"NET",s:`Which server role verifies users' identities and controls and records what they can access?`,
o:[`An AAA server`,`A web server`,`A database server`,`A proxy server`],
a:[0],
e:`AAA servers, such as RADIUS or TACACS+, handle authentication, authorization, and accounting.`},

{d:"NET",s:`Network devices send event messages to a central server for storage and review. What is this server?`,
o:[`A syslog server`,`A DHCP server`,`A file server`,`A web server running HTTPS`],
a:[0],
e:`Syslog servers collect logs from many devices for troubleshooting and security monitoring.`},

{d:"NET",s:`A small business wants one appliance that combines firewall, antivirus, content filtering, and IDS/IPS. What should they buy?`,
o:[`A unified threat management (UTM) device`,`A DOCSIS cable modem`,`An unmanaged eight-port switch`,`A PoE injector with surge protection`],
a:[0],
e:`UTM appliances bundle multiple security functions into one device, which suits small organizations.`},

{d:"NET",s:`An appliance filters incoming email to block junk and phishing messages before they reach users. What is it?`,
o:[`A spam gateway`,`A load balancer`,`A proxy server`,`A patch panel`],
a:[0],
e:`Spam gateways inspect inbound mail and block spam, phishing, and malware before messages reach users' mailboxes.`},

{d:"NET",s:`A factory's legacy system monitors and controls equipment across several remote sites. Which type of system is this?`,
o:[`SCADA`,`VDI desktops`,`SaaS email`,`UTM firewall`],
a:[0],
e:`Supervisory control and data acquisition systems manage industrial processes. They're often legacy or embedded and need careful isolation.`},

{d:"NET",s:`Smart thermostats, cameras, and voice assistants that connect to a home network are examples of what?`,
o:[`IoT devices`,`SCADA servers`,`Load balancers`,`Patch panels`],
a:[0],
e:`Internet of Things devices are network-connected embedded devices. They often need separate networks and firmware updates for security.`},

{d:"NET",s:`Which DNS record type holds SPF, DKIM, and DMARC policies for email authentication?`,
o:[`TXT`,`MX`,`CNAME`,`AAAA`],
a:[0],
e:`TXT records store text data, including SPF, DKIM, and DMARC entries that help receiving servers detect spoofed mail.`},

{d:"NET",s:`Which email authentication method lets a domain owner tell receiving servers whether to reject or quarantine messages that fail SPF or DKIM?`,
o:[`DMARC`,`SPF`,`DKIM`,`MX priority`],
a:[0],
e:`DMARC sets the policy for failed checks and requests reports. SPF lists allowed senders, and DKIM signs messages.`},

{d:"NET",s:`Which email authentication method adds a digital signature to outgoing messages so receivers can verify they weren't altered?`,
o:[`DKIM`,`SPF`,`DMARC`,`CNAME`],
a:[0],
e:`DomainKeys Identified Mail signs messages with a private key, and receivers check the signature using a public key in DNS.`},

{d:"NET",s:`A DNS record maps mail.example.com to 203.0.113.10. Which record type is this?`,
o:[`A`,`AAAA`,`MX`,`TXT`],
a:[0],
e:`A records map a hostname to an IPv4 address. AAAA records map to IPv6 addresses.`},

{d:"NET",s:`A DHCP server should never hand out 192.168.1.1–192.168.1.20 because those are used by servers. What should be configured?`,
o:[`An exclusion range`,`A reservation`,`A shorter lease`,`A new VLAN`],
a:[0],
e:`Exclusions remove addresses from the DHCP pool. Reservations assign a specific address to a specific device.`},

{d:"NET",s:`What does a DHCP scope define?`,
o:[`The address range and settings to hand out`,`The list of websites users are allowed to visit`,`The VLAN each switch port belongs to`,`The encryption method used for all Wi-Fi traffic`],
a:[0],
e:`A scope is the pool of addresses for a subnet, along with options such as the gateway and DNS servers.`},

{d:"NET",s:`A DHCP lease time is set to eight days on a busy guest network, and addresses run out. What would help?`,
o:[`Shorten the lease time`,`Lengthen the lease time`,`Remove the default gateway`,`Disable DNS on the scope`],
a:[0],
e:`Shorter leases return unused addresses to the pool faster, which suits networks with many transient devices.`},

{d:"NET",s:`A company separates its phones, guest devices, and staff PCs into different logical networks on the same switches. What is this?`,
o:[`VLANs`,`A VPN`,`A WISP`,`A PAN`],
a:[0],
e:`VLANs logically segment a switched network, improving security and reducing broadcast traffic.`},

{d:"NET",s:`A remote employee needs encrypted access to internal resources over the internet. What should they use?`,
o:[`A VPN`,`A VLAN`,`A PoE injector`,`A patch panel`],
a:[0],
e:`Virtual private networks create encrypted tunnels across untrusted networks such as the internet. VLANs segment local networks but don't encrypt remote traffic.`},

{d:"NET",s:`A small office needs a switch it can configure with VLANs and monitor remotely. Which type should they buy?`,
o:[`A managed switch`,`An unmanaged switch`,`A cable modem`,`A PoE injector`],
a:[0],
e:`Managed switches support configuration, such as VLANs, QoS, and monitoring. Unmanaged switches are plug-and-play with no settings.`},

{d:"NET",s:`An access point needs power, but the existing switch doesn't support PoE. What's the simplest fix?`,
o:[`Add a PoE injector`,`Replace the AP's antenna`,`Install a patch panel`,`Use a crossover cable`],
a:[0],
e:`A PoE injector adds power to an Ethernet cable between a non-PoE switch and the powered device.`},

{d:"NET",s:`A home receives internet service over fiber, and a box on the wall converts the incoming light signal to Ethernet. What is this device?`,
o:[`An optical network terminal (ONT)`,`A DSL modem with a splitter`,`A cable modem`,`A wireless access point with PoE`],
a:[0],
e:`The ONT terminates fiber service at the customer premises. Cable modems use coax, and DSL modems use telephone lines.`},

{d:"NET",s:`Which device forwards traffic between different networks, such as a home LAN and the internet?`,
o:[`A router`,`An unmanaged switch`,`A patch panel`,`A PoE injector`],
a:[0],
e:`Routers connect networks and forward traffic by IP address. Switches connect devices within a network.`},

{d:"NET",s:`What uniquely identifies a network interface card at Layer 2?`,
o:[`Its MAC address`,`Its IP address`,`Its hostname`,`Its default gateway`],
a:[0],
e:`MAC addresses are 48-bit hardware addresses assigned to NICs and used for local delivery on Ethernet.`},

{d:"NET",s:`Which device filters traffic based on rules to protect a network from unauthorized access?`,
o:[`A firewall`,`A cable modem`,`An unmanaged switch`,`A patch panel`],
a:[0],
e:`Firewalls allow or block traffic based on rules about addresses, ports, protocols, and applications.`},

{d:"NET",s:`An internet connection uses existing telephone lines. Which device does the customer need?`,
o:[`A DSL modem`,`A cable modem`,`An ONT`,`A PoE switch`],
a:[0],
e:`DSL delivers internet over telephone copper. Cable modems use coax, and ONTs terminate fiber.`},

{d:"NET",s:`A home router hands out addresses in 192.168.1.0/24. What type of addresses are these?`,
o:[`Private IPv4 addresses`,`Public IPv4 addresses`,`APIPA addresses`,`IPv6 link-local addresses`],
a:[0],
e:`192.168.0.0/16 is a private range. The router uses NAT to share one public address for internet access.`},

{d:"NET",s:`A printer must keep the same IP address so users can always reach it. What's a common SOHO approach?`,
o:[`Assign a static IP or DHCP reservation`,`Let it pick a new address each day`,`Give it an APIPA address`,`Remove its default gateway`],
a:[0],
e:`A static IP or a DHCP reservation keeps a printer's address consistent, so mapped printers and ports keep working.`},

{d:"NET",s:`A PC has the address 192.168.1.50 and mask 255.255.255.0. What is its gateway most likely to be?`,
o:[`192.168.1.1`,`10.0.0.1`,`255.255.255.0`,`169.254.1.1`],
a:[0],
e:`The default gateway must be on the same subnet. SOHO routers commonly use .1 or .254 on the local network.`},

{d:"NET",s:`Which addressing type uses 128-bit addresses written in hexadecimal?`,
o:[`IPv6`,`IPv4`,`APIPA`,`MAC`],
a:[0],
e:`IPv6 addresses are 128 bits, written as eight groups of hexadecimal digits. IPv4 uses 32-bit dotted-decimal addresses.`},

{d:"NET",s:`A rural home has no cable or fiber, and a provider beams internet from a nearby tower to an antenna on the roof. Which connection type is this?`,
o:[`A wireless ISP (WISP)`,`Low-earth orbit satellite internet`,`DSL over phone lines`,`A metropolitan area network`],
a:[0],
e:`WISPs deliver fixed wireless internet from towers to customer antennas, which is common in rural areas.`},

{d:"NET",s:`Which internet connection type usually has the highest latency because signals travel to orbit and back?`,
o:[`Satellite`,`Fiber`,`Cable`,`DSL over copper`],
a:[0],
e:`Satellite connections, especially geostationary ones, have high latency. Low-earth orbit services reduce it but still vary.`},

{d:"NET",s:`A city connects its government buildings across town with a high-speed network. Which network type is this?`,
o:[`A MAN`,`A PAN`,`A campus LAN`,`A SAN`],
a:[0],
e:`A metropolitan area network spans a city or campus area, larger than a LAN but smaller than a WAN.`},

{d:"NET",s:`A user's smartwatch, phone, and earbuds connect to each other over Bluetooth. Which network type is this?`,
o:[`A PAN`,`A MAN`,`A leased-line WAN`,`A SAN`],
a:[0],
e:`Personal area networks connect devices around one person over short distances, usually with Bluetooth. MANs and WANs span much larger areas.`},

{d:"NET",s:`Which network type provides high-speed, block-level storage access to servers?`,
o:[`A SAN`,`A PAN`,`A WLAN`,`A MAN`],
a:[0],
e:`Storage area networks connect servers to shared block storage, often over Fibre Channel or iSCSI.`},

{d:"NET",s:`A technician needs to attach an RJ45 connector to the end of a network cable. Which tool is used?`,
o:[`A crimper`,`A punchdown tool`,`A toner probe`,`A loopback plug`],
a:[0],
e:`Crimpers press RJ45 connectors onto cable ends. Punchdown tools seat wires into patch panels and keystone jacks.`},

{d:"NET",s:`A technician is terminating cable runs into a patch panel. Which tool seats the wires?`,
o:[`A punchdown tool`,`A crimper`,`A cable stripper`,`A Wi-Fi spectrum analyzer`],
a:[0],
e:`Punchdown tools push wires into IDC terminals on patch panels and keystone jacks and trim the excess.`},

{d:"NET",s:`A technician wants to test whether a NIC port can send and receive without connecting to another device. Which tool fits?`,
o:[`A loopback plug`,`A toner probe`,`A crimper`,`A punchdown tool`],
a:[0],
e:`Loopback plugs route a port's transmit pins back to its receive pins so diagnostics can test the port.`},

{d:"HW",s:`A graphic designer needs an LCD monitor with the most accurate colors and widest viewing angles. Which panel type fits best?`,
o:[`IPS`,`TN`,`VA`,`CRT (tube)`],
a:[0],
e:`In-plane switching panels offer the best color accuracy and viewing angles. TN panels are fast but have weaker color and angles, and VA sits in between with strong contrast.`},

{d:"HW",s:`A competitive gamer wants a cheap LCD with the fastest response time and doesn't care about color accuracy. Which panel type fits?`,
o:[`TN`,`IPS`,`OLED`,`Mini-LED`],
a:[0],
e:`Twisted nematic panels are inexpensive with very fast response times but have poorer color and viewing angles.`},

{d:"HW",s:`Which display technology produces light per pixel, giving true blacks without a backlight?`,
o:[`OLED`,`IPS LCD`,`TN LCD`,`VA LCD`],
a:[0],
e:`OLED pixels emit their own light and can turn off completely. LCDs need a backlight, such as LED or Mini-LED.`},

{d:"HW",s:`An older laptop's screen is very dim, but an image is faintly visible with a flashlight. Which component has likely failed?`,
o:[`The inverter or backlight`,`The digitizer`,`The GPU's driver`,`The display cable's audio wire`],
a:[0],
e:`CCFL-backlit displays use an inverter to power the backlight. A failed inverter or backlight leaves a faint image.`},

{d:"HW",s:`A tablet displays images correctly but doesn't respond to touch. Which component has likely failed?`,
o:[`The digitizer`,`The inverter`,`The backlight`,`The GPU and its driver`],
a:[0],
e:`The digitizer converts touch input into signals. It can fail while the display panel still shows images.`},

{d:"HW",s:`What does a monitor's refresh rate measure?`,
o:[`How often the image is redrawn per second`,`How many pixels fit in one inch of the screen`,`The range of colors the display can show`,`The maximum brightness of the backlight`],
a:[0],
e:`Refresh rate, in hertz, is how often the screen updates. Pixel density is pixels per inch, and color gamut is the range of colors.`},

{d:"HW",s:`A photo editor needs a monitor that can display a wide range of colors, such as most of DCI-P3. Which attribute matters most?`,
o:[`Color gamut`,`Refresh rate`,`Response time`,`Pixel pitch only`],
a:[0],
e:`Color gamut describes the range of colors a display can reproduce, often given as a percentage of sRGB or DCI-P3.`},

{d:"HW",s:`Which wiring standard is most commonly used for new Ethernet installations in the US?`,
o:[`T568B`,`T568A`,`RS-232`,`IEEE 1394`],
a:[0],
e:`T568A and T568B define pin assignments. T568B is common in US commercial installs, and using the same standard on both ends makes a straight-through cable.`},

{d:"HW",s:`A cable must be buried underground between two buildings without a conduit. Which cable type fits?`,
o:[`Direct-burial shielded twisted pair`,`Plenum-rated indoor UTP`,`Standard indoor Cat 6 patch cable`,`USB 3.0 active extension cable`],
a:[0],
e:`Direct-burial cable has a jacket rated for moisture and soil. Indoor cable isn't designed for underground use.`},

{d:"HW",s:`Which video connector carries both digital video and audio and is common on TVs and consoles?`,
o:[`HDMI`,`VGA`,`DVI-D`,`DB9`],
a:[0],
e:`HDMI carries digital audio and video. VGA is analog video only, and DVI carries video without audio in most implementations.`},

{d:"HW",s:`Which video interface is analog and uses a 15-pin connector?`,
o:[`VGA`,`HDMI`,`DisplayPort`,`USB-C`],
a:[0],
e:`VGA (DE-15) carries analog video only and is found on older monitors and projectors. HDMI, DisplayPort, and USB-C carry digital video.`},

{d:"HW",s:`A single port on a laptop supports 40 Gbps data, daisy-chained displays, and charging with a USB-C connector. Which technology is this?`,
o:[`Thunderbolt`,`eSATAp (powered)`,`USB 2.0 Hi-Speed`,`DVI-D dual link`],
a:[0],
e:`Thunderbolt 3 and later use the USB-C connector and support high-speed data, video, and power delivery.`},

{d:"HW",s:`An external hard drive enclosure connects with a dedicated external SATA port. Which connector is this?`,
o:[`eSATA`,`Molex`,`DB9 serial`,`RJ11 jack`],
a:[0],
e:`eSATA provides an external SATA connection. Molex is an older internal power connector, and DB9 is a serial connector.`},

{d:"HW",s:`An older lab instrument connects to a PC with a 9-pin serial cable. Which connector is this?`,
o:[`DB9`,`RJ45`,`HDMI`,`Lightning`],
a:[0],
e:`DB9 is commonly used for RS-232 serial connections, such as console cables and legacy equipment.`},

{d:"HW",s:`Which connector is used for analog telephone lines and DSL?`,
o:[`RJ11`,`RJ45`,`F-type`,`LC`],
a:[0],
e:`RJ11 is a smaller connector used for analog phone lines and DSL. RJ45 is the larger connector used for Ethernet.`},

{d:"HW",s:`Which connector supplies power to older IDE drives and some case fans from the power supply?`,
o:[`Molex`,`SATA data`,`eSATA`,`DB9`],
a:[0],
e:`4-pin Molex connectors provide 5 V and 12 V power to legacy drives and accessories.`},

{d:"HW",s:`What is the maximum data rate of USB 3.0 (USB 3.2 Gen 1)?`,
o:[`5 Gbps`,`480 Mbps`,`20 Gbps`,`40 Gbps`],
a:[0],
e:`USB 3.0 (USB 3.2 Gen 1) supports 5 Gbps. USB 2.0 supports 480 Mbps, and 20 and 40 Gbps belong to newer USB and Thunderbolt versions.`},

{d:"HW",s:`A user needs to connect a laptop with only HDMI output to a projector with only VGA input. What do they need?`,
o:[`An active HDMI-to-VGA adapter`,`A passive DVI-to-HDMI cable`,`A USB 2.0 extension cable`,`A DB9 null modem cable`],
a:[0],
e:`HDMI is digital and VGA is analog, so an active adapter is needed to convert the signal. A passive cable can't convert digital to analog.`},

{d:"HW",s:`A server must detect and correct single-bit memory errors automatically. Which RAM type is needed?`,
o:[`ECC RAM`,`Non-ECC RAM`,`SODIMM RAM`,`VRAM`],
a:[0],
e:`Error-correcting code memory detects and fixes single-bit errors. It needs motherboard and CPU support.`},

{d:"HW",s:`A user installed one 16 GB DIMM and wants better memory performance. What should they do?`,
o:[`Add a matching DIMM for dual-channel`,`Install the DIMM in a PCIe slot instead`,`Replace it with a SODIMM laptop module`,`Disable XMP memory profiles in the BIOS`],
a:[0],
e:`Matched modules in the proper slots enable dual-channel mode, increasing memory bandwidth.`},

{d:"HW",s:`Can a DDR4 module be installed in a DDR5 motherboard slot?`,
o:[`No, the notches and voltages differ`,`Yes, DDR versions are fully interchangeable`,`Yes, but only in laptops`,`Only if the BIOS is updated`],
a:[0],
e:`Each DDR generation has a different key notch and electrical requirements, so they aren't interchangeable.`},

{d:"HW",s:`Which SSD interface connects directly to PCIe lanes for the highest performance?`,
o:[`NVMe`,`SATA`,`IDE`,`eSATA`],
a:[0],
e:`NVMe is designed for flash storage over PCIe and is much faster than SATA-based SSDs.`},

{d:"HW",s:`A technician installs an M.2 drive, but the system only runs it at SATA speeds. What's the likely reason?`,
o:[`It's an M.2 SATA drive or slot`,`M.2 drives always run at SATA speeds`,`The drive needs a separate Molex power cable`,`The RAM isn't in dual-channel mode`],
a:[0],
e:`M.2 is a form factor that can carry SATA or PCIe/NVMe. The drive and slot must both support NVMe for full speed.`},

{d:"HW",s:`Which RAID level stripes data across disks with no redundancy?`,
o:[`RAID 0`,`RAID 1`,`RAID 5`,`RAID 10`],
a:[0],
e:`RAID 0 stripes data for performance but has no redundancy, so the whole array is lost if any one disk fails.`},

{d:"HW",s:`Which RAID level mirrors data across two disks?`,
o:[`RAID 1`,`RAID 0`,`RAID 5`,`RAID 6 (double parity)`],
a:[0],
e:`RAID 1 duplicates data on two drives, so either drive can fail without data loss.`},

{d:"HW",s:`Which RAID level uses striping with distributed parity and survives one disk failure with at least three disks?`,
o:[`RAID 5`,`RAID 1`,`RAID 0`,`RAID 10`],
a:[0],
e:`RAID 5 needs at least three disks and tolerates one failure. RAID 6 uses double parity and tolerates two.`},

{d:"HW",s:`An array must survive two simultaneous disk failures. Which RAID level fits?`,
o:[`RAID 6`,`RAID 5`,`RAID 1`,`RAID 0 (striping)`],
a:[0],
e:`RAID 6 uses two parity blocks, so it tolerates two disk failures and needs at least four disks.`},

{d:"HW",s:`Which RAID level combines mirroring and striping and needs at least four disks?`,
o:[`RAID 10`,`RAID 5`,`RAID 6`,`RAID 0 (striping)`],
a:[0],
e:`RAID 10 stripes across mirrored pairs, giving high performance and redundancy. It needs at least four disks and uses half the raw capacity.`},

{d:"HW",s:`Which drive interface is common in enterprise servers and supports dual-port connections for redundancy?`,
o:[`SAS`,`SATA`,`mSATA`,`USB`],
a:[0],
e:`Serial Attached SCSI is designed for enterprise reliability and performance, with features such as dual-porting.`},

{d:"HW",s:`A user wants the smallest motherboard form factor for a compact home theater PC. Which fits?`,
o:[`Mini-ITX`,`ATX`,`microATX`,`Extended ATX`],
a:[0],
e:`Mini-ITX boards are 170 × 170 mm, smaller than microATX and ATX, which suits small form factor builds.`},

{d:"HW",s:`Which firmware setting prevents unsigned bootloaders and boot-level malware from loading?`,
o:[`Secure Boot`,`Fan curve`,`Boot order`,`USB permissions`],
a:[0],
e:`Secure Boot, a UEFI feature, verifies that bootloaders are signed by trusted keys.`},

{d:"HW",s:`BitLocker needs a hardware chip that stores encryption keys and measures boot integrity. Which component is this?`,
o:[`TPM`,`HSM`,`NIC firmware`,`ECC memory`],
a:[0],
e:`The Trusted Platform Module stores keys and supports measured boot. HSMs are dedicated, often external, key management devices.`},

{d:"HW",s:`A bank needs a dedicated, tamper-resistant device to generate and protect large numbers of cryptographic keys for servers. What should it use?`,
o:[`A hardware security module (HSM)`,`A Trusted Platform Module in each PC`,`A BIOS password`,`A USB flash drive`],
a:[0],
e:`HSMs are specialized devices for secure key generation, storage, and cryptographic operations at scale.`},

{d:"HW",s:`A user can't run virtual machines in a hypervisor, and it reports that hardware virtualization is unavailable. What should be checked?`,
o:[`Whether virtualization is enabled in firmware`,`Whether Secure Boot is disabled`,`Whether the boot password is set`,`Whether the case fans are running at full speed`],
a:[0],
e:`Hardware virtualization, Intel VT-x or AMD-V, must be enabled in BIOS/UEFI for most hypervisors to run virtual machines.`},

{d:"HW",s:`A company wants to prevent users from booting computers from USB drives. Where should this be configured?`,
o:[`In BIOS/UEFI boot and USB settings`,`In the monitor's on-screen menu`,`In the printer's driver settings`,`In the router's DHCP scope options page`],
a:[0],
e:`Firmware settings control boot order and can disable USB booting. A BIOS password stops users from changing them.`},

{d:"HW",s:`Which processor architecture is common in smartphones and many power-efficient laptops?`,
o:[`ARM`,`x86`,`x64 only`,`Itanium`],
a:[0],
e:`ARM uses a reduced instruction set focused on power efficiency. x86/x64 dominates traditional desktops and servers.`},

{d:"HW",s:`When installing a CPU and cooler, what should be applied between the CPU and heat sink?`,
o:[`Thermal paste or a thermal pad`,`Electrical tape`,`Double-sided foam`,`Nothing, for best contact`],
a:[0],
e:`Thermal compound fills microscopic gaps so heat transfers efficiently from the CPU to the heat sink.`},

{d:"HW",s:`A streamer wants to record gameplay from a console on a PC. Which expansion card fits?`,
o:[`A capture card`,`A sound card`,`A NIC`,`A RAID controller`],
a:[0],
e:`Capture cards ingest video from external sources, such as consoles or cameras, for recording or streaming.`},

{d:"HW",s:`Which motherboard connector does a modern GPU typically use?`,
o:[`PCIe x16`,`Conventional PCI`,`SATA III`,`M.2 only`],
a:[0],
e:`Graphics cards use PCIe x16 slots for maximum bandwidth. PCI is an older, slower standard.`},

{d:"HW",s:`Front-panel USB ports and the power button connect to which part of the motherboard?`,
o:[`Headers`,`PCIe slots`,`SATA ports`,`DIMM slots`],
a:[0],
e:`Motherboard headers provide connections for front-panel controls, USB, audio, and fans.`},

{d:"HW",s:`A workstation board has two CPU sockets. What must be true of the processors installed?`,
o:[`They must be supported matching models`,`They can be any mix of AMD and Intel`,`Only one socket can ever be used`,`They must use different socket types`],
a:[0],
e:`Multisocket boards require compatible, usually identical, CPUs that match the socket and chipset.`},

{d:"HW",s:`A user is moving a PC to a country that uses 230 V power. What should be checked on the power supply?`,
o:[`Whether it supports 220–240 VAC input`,`Whether it supports 3.3 V output`,`Whether it has a modular cable`,`Whether it has an 80 Plus rating`],
a:[0],
e:`Power supplies must support the local input voltage, either auto-switching or through a selector switch.`},

{d:"HW",s:`Which power supply output voltage powers CPUs and GPUs?`,
o:[`12 V`,`3.3 V`,`5 V`,`-12 V`],
a:[0],
e:`The 12 V rail supplies high-power components such as CPUs, GPUs, and drive motors. 3.3 V and 5 V power logic circuits.`},

{d:"HW",s:`A builder wants to reduce cable clutter by attaching only the power cables a system needs. Which PSU type fits?`,
o:[`A modular power supply`,`A redundant power supply`,`A 20+4 pin power supply`,`A 110 V-only power supply`],
a:[0],
e:`Modular PSUs have detachable cables, so builders attach only what they need, improving airflow and cable management.`},

{d:"HW",s:`A critical server must keep running if one power supply fails. What should it have?`,
o:[`Redundant power supplies`,`A modular power supply`,`A higher wattage single PSU`,`A 20+4 pin connector`],
a:[0],
e:`Redundant, hot-swappable power supplies let a server keep running when one unit fails.`},

{d:"HW",s:`What does an 80 Plus Gold rating on a power supply indicate?`,
o:[`High energy efficiency at typical loads`,`A higher maximum wattage than other PSUs`,`Support for 220 V input only`,`A modular cable design`],
a:[0],
e:`80 Plus ratings measure power supply efficiency at set loads. Higher tiers, such as Gold or Platinum, waste less power as heat. They don't indicate wattage.`},

{d:"HW",s:`Which connector supplies main power to a modern ATX motherboard?`,
o:[`The 20+4 pin connector`,`A 4-pin Molex connector`,`A SATA power connector`,`A 6-pin PCIe connector`],
a:[0],
e:`ATX boards use a 24-pin main connector, often supplied as 20+4 pins for compatibility with older boards.`},

{d:"HW",s:`A Mac user needs a printer driver that handles complex graphics consistently across platforms. Which page description language fits best?`,
o:[`PostScript`,`PCL`,`Plain ASCII text`,`ESC/P only`],
a:[0],
e:`PostScript is device-independent and handles complex graphics well. PCL is common and efficient, especially on Windows.`},

{d:"HW",s:`Employees must tap their badges at a shared printer before their documents print. Which security feature is this?`,
o:[`Secured (badge release) printing`,`Duplex (two-sided) printing`,`Paper tray assignment`,`Draft quality mode`],
a:[0],
e:`Secured print holds jobs until the user authenticates at the device, preventing others from picking up sensitive pages.`},

{d:"HW",s:`A company wants a record of who printed and scanned what on its multifunction devices. Which feature provides this?`,
o:[`Audit logs`,`Duplex settings`,`Orientation settings`,`Toner density`],
a:[0],
e:`Audit logs record who printed, scanned, or copied what and when, supporting accountability and compliance.`},

{d:"HW",s:`Users want to scan documents directly to a shared network folder. Which scan service fits?`,
o:[`Scan to SMB`,`Scan to fax`,`Scan to Bluetooth`,`Scan to USB only`],
a:[0],
e:`Scan-to-SMB saves files to a network share. MFDs may also scan to email or cloud services.`},

{d:"HW",s:`A user needs to scan a 40-page stack of documents quickly. Which MFD feature helps?`,
o:[`The automatic document feeder (ADF)`,`The flatbed scanner glass`,`The duplex print setting in the driver`,`The secure print queue`],
a:[0],
e:`ADFs feed multiple pages automatically. Flatbeds suit single pages, books, and fragile items.`},

{d:"HW",s:`A laser printer has reached its page count for scheduled service. What should be installed?`,
o:[`A maintenance kit`,`A new ink cartridge`,`A new ribbon`,`Thermal paper`],
a:[0],
e:`Laser maintenance kits typically include a fuser, rollers, and pads, replaced at recommended page counts.`},

{d:"HW",s:`Thermal receipt printer output is faint and streaked. What maintenance should be done?`,
o:[`Clean the heating element and remove debris`,`Replace the toner cartridge and drum`,`Replace the ink ribbon`,`Calibrate and align the printhead nozzles`],
a:[0],
e:`Thermal printers need clean heating elements and the correct thermal paper. They don't use toner or ink.`},

{d:"HW",s:`An auto shop needs to print multipart carbon forms. Which printer type fits?`,
o:[`Impact (dot matrix)`,`Laser (toner)`,`Inkjet (piezoelectric)`,`Direct thermal`],
a:[0],
e:`Impact printers strike the paper through a ribbon, which transfers to multipart forms.`},

{d:"HW",s:`An inkjet printer's output has missing lines in some colors. What should be done first?`,
o:[`Run the printhead cleaning utility`,`Replace the fuser assembly`,`Install a laser maintenance kit`,`Replace the impact printer's ribbon`],
a:[0],
e:`Clogged nozzles cause missing lines. Cleaning printheads, then aligning or calibrating, usually fixes it.`},

{d:"VC",s:`A security team wants to open a suspicious file in an isolated environment that can be discarded afterward. What should they use?`,
o:[`A virtual machine as a sandbox`,`A docking station with USB-C`,`A port replicator`,`A mirrored RAID 1 array`],
a:[0],
e:`VMs used as sandboxes isolate untrusted code from the host, and they can be reverted or deleted afterward.`},

{d:"VC",s:`Which hypervisor type runs directly on the hardware with no host operating system?`,
o:[`Type 1`,`Type 2`,`Hosted`,`Container runtime`],
a:[0],
e:`Type 1 (bare-metal) hypervisors, such as ESXi or Hyper-V Server, run directly on hardware. Type 2 runs as an application on a host OS.`},

{d:"VC",s:`A developer runs VirtualBox on a Windows laptop to test Linux. Which hypervisor type is this?`,
o:[`Type 2`,`Type 1`,`Bare-metal`,`Embedded`],
a:[0],
e:`Type 2 hypervisors run on top of a host operating system, which suits desktops and testing.`},

{d:"VC",s:`How do containers differ from virtual machines?`,
o:[`Containers share the host kernel; VMs run full OSs`,`Containers each run a full OS; VMs share the host kernel`,`Containers need a Type 1 hypervisor to run at all`,`Containers can only run on physical servers`],
a:[0],
e:`Containers package apps with dependencies and share the host kernel, so they're lightweight. VMs virtualize hardware and run separate operating systems.`},

{d:"VC",s:`A company delivers full desktops to employees from central servers so users can work from any device. What is this?`,
o:[`Virtual Desktop Infrastructure (VDI)`,`Software as a service (SaaS) email`,`A Type 2 hypervisor`,`A shared RAID storage array`],
a:[0],
e:`VDI hosts desktop operating systems on servers and streams them to client devices.`},

{d:"VC",s:`A business still needs an application that only runs on Windows XP. How can it keep using it more safely?`,
o:[`Run it in an isolated virtual machine`,`Install Windows XP on every new PC`,`Connect XP directly to the internet`,`Run it as a cloud SaaS app`],
a:[0],
e:`Virtualization can run legacy software and operating systems in isolated VMs, limiting exposure.`},

{d:"VC",s:`A user wants to run a Linux-only application on a macOS laptop. Which approach fits?`,
o:[`Cross-platform virtualization`,`Hardware RAID`,`A Type 1 hypervisor on a phone`,`A port replicator`],
a:[0],
e:`Cross-platform virtualization runs software built for one OS on a different host OS.`},

{d:"VC",s:`Which resource requirement is most important when planning to run several VMs on one host?`,
o:[`Enough CPU, RAM, and storage`,`A monitor for each virtual machine`,`A separate keyboard for each guest`,`A dedicated printer for each virtual machine`],
a:[0],
e:`Each VM consumes host CPU, memory, storage, and network resources, so the host must be sized for the combined load.`},

{d:"VC",s:`Why should a VM's network settings be planned carefully?`,
o:[`Bridged, NAT, or isolated modes change exposure`,`VMs can't connect to any network at all`,`VMs always share the host's IP address`,`VM network settings can't be changed after creation`],
a:[0],
e:`Virtual network options determine whether a VM is reachable from the LAN, shares the host's address through NAT, or is isolated.`},

{d:"VC",s:`A VM running outdated software is compromised. Why is VM security still important?`,
o:[`VMs need patching like physical systems`,`VMs are automatically immune to malware`,`VMs can never reach the host network`,`VMs delete themselves automatically after an infection`],
a:[0],
e:`Guest OSs need updates, antivirus, and access controls. Hypervisors must also be patched to prevent VM escape attacks.`},

{d:"VC",s:`A developer needs a temporary environment to test a software update before deploying it to production. Which purpose of VMs is this?`,
o:[`Test development`,`Data sovereignty`,`Load balancing`,`USB port replication`],
a:[0],
e:`VMs make it easy to create, snapshot, and discard test environments without affecting production.`},

{d:"VC",s:`Which concept lets users run a single program in an isolated package without installing it locally?`,
o:[`Application virtualization`,`Hardware RAID mirroring`,`Bare-metal imaging`,`CPU thermal throttling`],
a:[0],
e:`Application virtualization delivers apps that run isolated from the local OS, which helps with compatibility and management.`},

{d:"VC",s:`A company uses a hosted email and office suite that the provider fully manages. Which cloud model is this?`,
o:[`SaaS`,`IaaS`,`PaaS`,`On-premises`],
a:[0],
e:`Software as a service delivers complete applications. The customer manages only users, data, and settings.`},

{d:"VC",s:`Several hospitals share cloud infrastructure built for their common regulatory needs. Which deployment model is this?`,
o:[`Community cloud`,`Public cloud`,`Private cloud`,`Hybrid multicloud`],
a:[0],
e:`Community clouds are shared by organizations with common requirements, such as compliance.`},

{d:"VC",s:`A company keeps sensitive systems in its own datacenter and bursts extra workloads to a public cloud. Which model is this?`,
o:[`Hybrid cloud`,`Private cloud`,`Public cloud`,`Community cloud`],
a:[0],
e:`Hybrid cloud combines private or on-premises infrastructure with public cloud services.`},

{d:"VC",s:`A company runs a cloud environment used only by itself, on dedicated infrastructure. Which deployment model is this?`,
o:[`Private cloud`,`Public cloud`,`Community cloud`,`Hybrid cloud`],
a:[0],
e:`Private clouds serve one organization, either on-premises or hosted by a provider on dedicated resources.`},

{d:"VC",s:`A cloud bill includes charges for data transferred out of the provider's network. What is this charge for?`,
o:[`Egress`,`Ingress`,`Elasticity`,`Multitenancy`],
a:[0],
e:`Metered utilization often charges for egress (data leaving the cloud). Ingress is data coming in and is often free.`},

{d:"VC",s:`Cloud resources are billed only for the compute hours and storage actually used. Which characteristic is this?`,
o:[`Metered utilization`,`Dedicated resources`,`File synchronization`,`High availability`],
a:[0],
e:`Metered (pay-as-you-go) billing charges based on actual consumption of compute, storage, and data transfer, such as egress.`},

{d:"VC",s:`An online store automatically adds servers for a holiday sale and removes them afterward. Which cloud characteristic is this?`,
o:[`Elasticity`,`Multitenancy`,`Egress`,`Data sovereignty`],
a:[0],
e:`Elasticity scales resources up and down automatically to match demand, so the store pays only for the extra capacity while it's needed.`},

{d:"VC",s:`A user saves a document on a laptop, and it appears on their phone a moment later through the cloud. Which feature is this?`,
o:[`File synchronization`,`Metered utilization`,`Egress data billing`,`Multitenancy`],
a:[0],
e:`Cloud file synchronization keeps copies of files consistent across a user's devices.`},

{d:"VC",s:`A provider runs many customers' virtual machines on the same physical hosts, with logical isolation between them. What is this?`,
o:[`Multitenancy`,`Dedicated hosting`,`File synchronization`,`A Type 2 hypervisor`],
a:[0],
e:`Multitenancy shares infrastructure among customers. Dedicated resources give one customer exclusive hardware.`},

{d:"VC",s:`A regulated company requires that its cloud VMs never share physical hardware with other customers. What should it choose?`,
o:[`Dedicated resources`,`Shared resources`,`Metered egress`,`File synchronization`],
a:[0],
e:`Dedicated hosts or instances provide physical isolation, usually at higher cost than shared resources.`},

{d:"VC",s:`A provider guarantees services stay reachable during a datacenter failure by running across multiple zones. Which characteristic is this?`,
o:[`High availability`,`Metered utilization`,`Egress control`,`File synchronization`],
a:[0],
e:`Availability is improved through redundancy across zones and regions, with failover.`},

{d:"VC",s:`A developer deploys a web app to a managed platform and doesn't manage the OS or runtime. Which model is this?`,
o:[`PaaS`,`SaaS`,`IaaS`,`On-premises`],
a:[0],
e:`Platform as a service provides managed runtimes and tools, so developers focus on code and data.`},

{d:"VC",s:`A company rents virtual servers and installs and patches the operating systems itself. Which model is this?`,
o:[`IaaS`,`PaaS`,`SaaS`,`DaaS (desktops)`],
a:[0],
e:`Infrastructure as a service provides virtual hardware. The customer manages the OS, middleware, and apps.`},

{d:"HNT",s:`A PC powers on but beeps in a repeating pattern and shows nothing on screen. What should the technician do?`,
o:[`Look up the POST beep code`,`Replace the monitor immediately`,`Reinstall the operating system`,`Reset the CMOS and reboot repeatedly`],
a:[0],
e:`POST beep codes identify hardware failures, such as RAM or video, before the display initializes. Codes vary by firmware vendor.`},

{d:"HNT",s:`A PC shows a blue stop error screen during heavy use and restarts. Which hardware should be tested first?`,
o:[`The RAM, with a memory diagnostic`,`The keyboard and mouse drivers`,`The monitor's video cable`,`The optical drive's firmware`],
a:[0],
e:`Faulty RAM commonly causes stop errors and crashes. Memory diagnostics can confirm it. Overheating and drivers are other common causes.`},

{d:"HNT",s:`A PC shuts down randomly during games, and the CPU fan is caked with dust. What's the most likely cause?`,
o:[`Overheating`,`A failing hard drive`,`A corrupt game install`,`A failing CMOS battery`],
a:[0],
e:`Dust buildup reduces cooling, so the CPU overheats and the system shuts down to protect itself.`},

{d:"HNT",s:`A technician notices bulging, leaking capacitors on a motherboard. What should be done?`,
o:[`Replace the motherboard`,`Update the BIOS`,`Reseat the RAM`,`Clean the capacitors with alcohol`],
a:[0],
e:`Swollen capacitors indicate failure and cause instability. The motherboard should be replaced.`},

{d:"HNT",s:`A PC's clock resets to a date years ago every time it's unplugged. What should be replaced?`,
o:[`The CMOS battery`,`The power supply`,`The RAM modules`,`The hard drive`],
a:[0],
e:`The CMOS battery keeps firmware settings and the real-time clock when the PC has no power.`},

{d:"HNT",s:`A user reports a burning smell from a desktop. What should the technician do first?`,
o:[`Power it off and unplug it`,`Run a disk check on the drive`,`Update the chipset drivers`,`Increase the fan speed`],
a:[0],
e:`A burning smell can indicate a failing power supply or component. Remove power immediately for safety, then inspect.`},

{d:"HNT",s:`A desktop is completely dead: no fans, no lights. The outlet works. What should be checked next?`,
o:[`The PSU's switch, cable, and output`,`The monitor's input source`,`The keyboard and mouse connections`,`The network adapter settings`],
a:[0],
e:`No power at all points to the power supply, its switch, or cabling. A PSU tester can confirm whether it outputs power.`},

{d:"HNT",s:`A PC is sluggish, and Task Manager shows the CPU at 100% with temperatures near its limit. What's a likely cause?`,
o:[`Thermal throttling from poor cooling`,`A failing CMOS battery on the board`,`Too little free space on the system drive`,`A failing Wi-Fi adapter driver`],
a:[0],
e:`CPUs slow themselves when hot. Cleaning, reapplying thermal paste, or improving airflow restores performance.`},

{d:"HNT",s:`A PC makes a loud grinding noise from inside the case near the CPU cooler. What's the likely cause?`,
o:[`A failing fan bearing`,`A failing RAM module`,`Coil whine from the GPU`,`A loose SATA data cable`],
a:[0],
e:`Unusual noise often comes from failing fan bearings. Replacing the fan prevents overheating.`},

{d:"HNT",s:`A Mac displays a proprietary crash screen asking the user to restart. Which component is a common hardware cause?`,
o:[`Faulty RAM`,`A dead CMOS battery`,`A failing case fan`,`A loose keyboard cable`],
a:[0],
e:`Proprietary crash screens, such as a macOS kernel panic, are often caused by faulty RAM, drivers, or other hardware.`},

{d:"HNT",s:`After a RAM upgrade, a PC powers on but shows a blank screen and no POST. What should be checked first?`,
o:[`Whether the RAM is compatible and seated`,`Whether the monitor needs a firmware update`,`Whether the OS needs reinstalling`,`Whether the keyboard layout is correct`],
a:[0],
e:`Incompatible or poorly seated memory often prevents POST. Reseating or testing modules one at a time isolates the problem.`},

{d:"HNT",s:`Several applications crash on a PC, and Event Viewer shows memory errors. What should the technician run?`,
o:[`A memory diagnostic`,`An increase to virtual memory`,`A disk cleanup of temp files`,`A defragmentation of the drive`],
a:[0],
e:`Repeated app crashes with memory errors suggest failing RAM. Windows Memory Diagnostic or MemTest86 can confirm it.`},

{d:"HNT",s:`A hard drive makes a repeated clicking sound and files are becoming corrupted. What should the technician do?`,
o:[`Back up the data and replace the drive`,`Defragment the drive to fix it`,`Increase the virtual memory page file size`,`Update the graphics driver`],
a:[0],
e:`Clicking often means mechanical failure. Back up what you can right away, then replace the drive.`},

{d:"HNT",s:`Monitoring software reports a S.M.A.R.T. failure warning on a drive. What does this mean?`,
o:[`The drive predicts it may fail soon`,`The drive is encrypted`,`The drive is nearly out of free space`,`The drive needs a driver update`],
a:[0],
e:`S.M.A.R.T. tracks drive health. Warnings indicate likely failure, so data should be backed up and the drive replaced.`},

{d:"HNT",s:`A PC shows "bootable device not found" after a power outage. What should be checked first?`,
o:[`The boot order and drive detection`,`The RAM's dual-channel configuration`,`The monitor's input source`,`The CPU fan's speed setting`],
a:[0],
e:`Confirm that firmware detects the drive and that boot order is correct before assuming the drive has failed.`},

{d:"HNT",s:`A RAID 5 array shows "degraded" after one disk failed. What should be done?`,
o:[`Replace the failed disk and rebuild the array`,`Delete the array and recreate it`,`Add the failed disk back without testing`,`Convert the array to RAID 0`],
a:[0],
e:`A degraded RAID 5 has lost redundancy. Replacing the failed disk and rebuilding restores protection, ideally after confirming backups.`},

{d:"HNT",s:`A server's RAID controller sounds an audible alarm and a drive's LED is amber. What does this indicate?`,
o:[`A drive or array problem needing attention`,`Normal activity during a backup`,`The server's fans are running at full speed`,`The network cable is disconnected`],
a:[0],
e:`Audible alarms and amber or red LED indicators usually signal a failed or failing drive in an array.`},

{d:"HNT",s:`A database server's disk response times are high, and monitoring shows low IOPS. What would most improve performance?`,
o:[`Moving to SSDs or a faster RAID level`,`Adding more CPU cores to the server`,`Upgrading the server's network card`,`Replacing the RAID controller's battery`],
a:[0],
e:`Low IOPS limits disk-heavy workloads. SSDs or RAID 10 typically increase performance.`},

{d:"HNT",s:`A newly installed second drive doesn't appear in File Explorer, but BIOS detects it. What should the technician do?`,
o:[`Initialize and format it in Disk Management`,`Replace the drive immediately under warranty`,`Change the SATA mode from AHCI to IDE`,`Update the motherboard's BIOS firmware`],
a:[0],
e:`New drives must be initialized, partitioned, and formatted in Disk Management before they appear as volumes in File Explorer.`},

{d:"HNT",s:`After a motherboard replacement, a RAID array is reported as missing. What's a likely cause?`,
o:[`The RAID settings aren't on the new board`,`The drives were wiped by the new board`,`The new board needs more RAM installed`,`The drives need new SATA power cables`],
a:[0],
e:`Arrays depend on controller settings. A new board or controller may need RAID mode enabled or the array imported.`},

{d:"HNT",s:`A drive takes much longer than usual to read and write files, and S.M.A.R.T. shows reallocated sectors increasing. What should be done?`,
o:[`Back up data and plan a replacement`,`Disable S.M.A.R.T. monitoring`,`Overclock the CPU to compensate`,`Reset the network adapter settings`],
a:[0],
e:`Extended read/write times and growing reallocated sectors suggest a failing drive.`},

{d:"HNT",s:`A monitor shows "No signal," but the PC is running. What should be checked first?`,
o:[`The monitor's input source and cable`,`The PC's RAM configuration`,`The GPU driver's version`,`The monitor's refresh rate setting`],
a:[0],
e:`An incorrect input source or loose cable is the most common cause of "No signal."`},

{d:"HNT",s:`A projector shuts off by itself after 20 minutes, and its vents are clogged with dust. What's the likely cause?`,
o:[`Overheating from blocked airflow`,`An incorrect input source`,`A dead pixel in the DLP chip`,`A wrong color profile in Windows`],
a:[0],
e:`Projectors shut down to protect themselves from heat. Cleaning filters and vents fixes intermittent shutdowns.`},

{d:"HNT",s:`A projector shows no image, its lamp indicator is lit, and it's past its rated lamp hours. What should be replaced?`,
o:[`The bulb`,`The HDMI cable`,`The remote control`,`The ceiling mount`],
a:[0],
e:`Projector lamps have limited lifespans. A burnt-out bulb causes no image or a very dim image.`},

{d:"HNT",s:`A static taskbar remains faintly visible on an OLED screen even when other content is shown. What is this?`,
o:[`Burn-in`,`Dead pixels`,`Incorrect input source`,`A fuzzy image`],
a:[0],
e:`Burn-in is permanent image retention from static content, especially on OLED displays.`},

{d:"HNT",s:`Text on an LCD monitor looks blurry, even though the cable is fine. What should be checked?`,
o:[`That it's set to the native resolution`,`That the refresh rate is set to the maximum`,`That the GPU driver supports HDR output`,`That the brightness is at 100 percent`],
a:[0],
e:`LCDs have a fixed native resolution. Running them at a lower resolution forces scaling, which makes text look fuzzy.`},

{d:"HNT",s:`A monitor shows one tiny spot that always stays black. What is this?`,
o:[`A dead pixel`,`Burn-in`,`A driver crash`,`An incorrect input`],
a:[0],
e:`Dead pixels stay dark, while stuck pixels stay one color. Both are panel defects, unlike burn-in, which is faint retained imagery.`},

{d:"HNT",s:`Colors on a monitor look tinted purple after a cable was replaced. What's a likely cause?`,
o:[`A damaged cable or loose pin`,`A failing monitor backlight`,`An outdated GPU driver`,`Burn-in on the panel`],
a:[0],
e:`Incorrect colors often come from loose or damaged video cables, especially analog VGA with bent pins.`},

{d:"HNT",s:`A user connects a laptop to a TV over HDMI, and video works but sound still comes from the laptop speakers. What should be changed?`,
o:[`The default audio output device`,`The screen resolution`,`The Wi-Fi channel and band`,`The Windows power plan`],
a:[0],
e:`HDMI carries audio, but the OS must use the HDMI or TV device as its default audio output in sound settings.`},

{d:"HNT",s:`A laptop screen flickers when the lid is moved. What's the likely cause?`,
o:[`A damaged display cable in the hinge`,`A failing laptop battery cell in the base`,`An outdated integrated graphics driver`,`A misconfigured display refresh rate`],
a:[0],
e:`Flicker that changes with lid movement points to the display cable running through the hinge.`},

{d:"HNT",s:`The desktop doesn't fit the screen, with edges cut off on a TV. Which setting should be adjusted?`,
o:[`Display scaling or overscan settings`,`The TV's refresh rate and motion setting`,`The HDMI cable's version and length`,`The GPU driver's color depth setting`],
a:[0],
e:`TVs often overscan, cutting off the edges. Adjusting display scaling, overscan, or resolution settings fixes the fit.`},

{d:"HNT",s:`A projected image is stretched into a trapezoid shape. What should be adjusted?`,
o:[`Keystone correction`,`Bulb wattage setting`,`Network settings`,`Audio output`],
a:[0],
e:`Keystone correction fixes distortion caused when the projector isn't perpendicular to the screen.`},

{d:"HNT",s:`A phone's case is bulging and the screen is lifting. What should the technician do?`,
o:[`Stop using it and replace the battery`,`Update the phone's operating system`,`Recalibrate the battery by fully draining it`,`Replace only the screen protector`],
a:[0],
e:`A swollen lithium-ion battery is a fire hazard. Power down, avoid puncturing it, and replace and recycle it properly.`},

{d:"HNT",s:`A phone charges only when the cable is held at an angle. What's the likely cause?`,
o:[`A damaged or dirty charging port`,`A failing battery`,`An outdated mobile OS version`,`A faulty wireless charging coil`],
a:[0],
e:`Physically damaged or lint-filled ports cause improper charging. Cleaning or replacing the port fixes it.`},

{d:"HNT",s:`A phone was dropped in water and now behaves erratically. What should be done first?`,
o:[`Power it off and don't charge it`,`Charge it immediately to test it`,`Use a hair dryer on high heat`,`Install a new app to check sensors`],
a:[0],
e:`Liquid damage can short circuits. Powering off and keeping it unplugged reduces damage before inspection or repair.`},

{d:"HNT",s:`A tablet's cursor moves on its own, and taps register in the wrong place. What should be checked?`,
o:[`Digitizer calibration or damage`,`A failing battery that's swelling`,`Outdated apps from the app store`,`A weak Wi-Fi signal in the room`],
a:[0],
e:`Cursor drift and misplaced touches indicate digitizer or calibration problems. Recalibrating may help, but a damaged digitizer needs replacing.`},

{d:"HNT",s:`A user can't install new apps on a phone, which shows a storage warning. What should be done?`,
o:[`Free up storage space`,`Replace the battery`,`Reset network settings`,`Enable airplane mode`],
a:[0],
e:`Insufficient storage prevents app installation. Removing unused apps and media or moving data to the cloud helps.`},

{d:"HNT",s:`A phone runs hot, its battery drains fast, and it shows pop-up ads, even on the home screen. What's a likely cause?`,
o:[`Malware`,`A failing battery`,`A cracked screen`,`An outdated OS`],
a:[0],
e:`Malware can cause overheating, battery drain, unexpected ads, and degraded performance. Removing suspicious apps and scanning help.`},

{d:"HNT",s:`A phone has no cellular signal in a location where other phones on the same carrier work. What should be checked first?`,
o:[`Airplane mode and the SIM/eSIM status`,`The phone's screen brightness and timeout`,`The phone's stylus pairing`,`The phone's camera settings`],
a:[0],
e:`Airplane mode, a disabled line, or a faulty SIM often cause no connectivity on one device.`},

{d:"HNT",s:`A tablet's stylus doesn't work, but finger touch does. What should be checked?`,
o:[`The stylus's charge and Bluetooth pairing`,`The tablet's Wi-Fi channel and band`,`The tablet's free storage space`,`The tablet's screen resolution`],
a:[0],
e:`Active styluses often need charging and pairing. Compatibility with the specific tablet also matters.`},

{d:"HNT",s:`A phone has become slow after years of use, and its battery health is poor. What may be happening?`,
o:[`The OS is throttling to protect the battery`,`The cellular carrier is limiting the CPU`,`The screen protector is slowing the touch input`,`The SIM card is overloaded with contacts`],
a:[0],
e:`Some phones reduce performance when battery health is poor to prevent unexpected shutdowns. Replacing the battery can restore speed.`},

{d:"HNT",s:`Users near a microwave lose Wi-Fi every time it runs. What's the likely cause?`,
o:[`External interference on 2.4 GHz`,`An incorrect subnet mask on laptops`,`A DHCP lease conflict on the router`,`A weak WPA2 passphrase on the AP`],
a:[0],
e:`Microwave ovens operate near 2.4 GHz and can interfere with Wi-Fi. Using 5 GHz or moving devices helps.`},

{d:"HNT",s:`A PC shows "No internet access" and has the address 169.254.10.5. What's the problem?`,
o:[`It couldn't get an address from DHCP`,`The DNS server is returning wrong records`,`The firewall is blocking HTTPS`,`The browser cache is full`],
a:[0],
e:`A 169.254.x.x APIPA address means the PC couldn't reach a DHCP server, so it can talk only to the local segment.`},

{d:"HNT",s:`VoIP calls are choppy and robotic during busy hours. Which issue is the most likely cause?`,
o:[`Jitter and latency from congestion`,`An incorrect DNS server on phones`,`An expired DHCP lease on the phones`,`A duplicate IP address on one phone`],
a:[0],
e:`Real-time voice is sensitive to jitter, latency, and packet loss. QoS and more bandwidth improve call quality.`},

{d:"HNT",s:`A switch log shows a port going up and down repeatedly. What is this called?`,
o:[`Port flapping`,`Port mirroring`,`Port forwarding`,`Port triggering`],
a:[0],
e:`Port flapping is a link repeatedly going up and down, often from a bad cable, faulty NIC, or duplex issues.`},

{d:"HNT",s:`Users can't join the corporate Wi-Fi after their passwords changed, but other users connect fine. What's the likely issue?`,
o:[`Outdated saved credentials`,`Channel overlap on the access points`,`A failed DHCP server for the whole site`,`A broken patch panel port in the closet`],
a:[0],
e:`Outdated saved credentials cause authentication failures. Forgetting the network and reconnecting usually fixes it.`},

{d:"HNT",s:`File transfers on the office network are much slower than usual. A technician finds a switch port negotiated 100 Mbps instead of 1 Gbps. What's a likely cause?`,
o:[`A damaged cable or wrong cable category`,`An incorrect DNS server setting on the PCs`,`A full DHCP scope on the office router`,`A misconfigured VLAN on the switch port`],
a:[0],
e:`Bad or low-category cabling can force lower link speeds, causing slow network performance.`},

{d:"HNT",s:`A user's internet works for a few minutes, drops, and returns throughout the day. The modem's lights flicker during drops. What should be checked?`,
o:[`The ISP line and modem signal`,`The PC's DNS server settings`,`The router's DHCP lease time`,`The PC's network driver version`],
a:[0],
e:`Intermittent internet often stems from ISP signal problems, modem issues, or line noise.`},

{d:"HNT",s:`Ping times to a cloud application are 400 ms over a fiber connection. What does this indicate?`,
o:[`High latency somewhere on the path`,`A DNS resolution failure`,`An APIPA address on the client`,`A duplex mismatch on the PC`],
a:[0],
e:`High latency slows interactive apps. traceroute can help find where delay is introduced.`},

{d:"HNT",s:`A laser printer prints a faint duplicate of the image lower on the page. What's the likely cause?`,
o:[`A worn drum or fuser causing ghosting`,`Low toner in the cartridge for the job`,`A worn pickup roller in the main tray`,`An incorrect print driver on the PC`],
a:[0],
e:`Double or echo images on laser prints usually point to the drum, cleaning blade, or fuser.`},

{d:"HNT",s:`Laser printouts smear when touched right after printing. Which component is the likely cause?`,
o:[`The fuser`,`The pickup roller`,`The transfer belt only`,`The network card`],
a:[0],
e:`The fuser uses heat and pressure to bond toner to paper. If it fails, toner isn't fused and smears when touched.`},

{d:"HNT",s:`A laser printer produces a vertical line down every page. What's a common cause?`,
o:[`A scratch or debris on the drum`,`An incorrect print driver`,`Low toner in the cartridge`,`A worn separation pad`],
a:[0],
e:`Lines down the page often come from a damaged drum, dirty corona wire, or debris in the paper path.`},

{d:"HNT",s:`A printer outputs pages of random symbols and characters. What's the most likely cause?`,
o:[`An incorrect or corrupted driver`,`A worn pickup roller in the tray`,`A failing fuser assembly heater`,`Low toner in the main cartridge`],
a:[0],
e:`Garbled print usually results from the wrong driver or a mismatched page description language.`},

{d:"HNT",s:`A printer feeds several sheets at once. Which component should be checked?`,
o:[`The separation pad and rollers`,`The fuser temperature setting`,`The toner density setting`,`The imaging drum`],
a:[0],
e:`Worn separation pads and rollers cause multipage misfeeds. Humid or stuck-together paper can also contribute.`},

{d:"HNT",s:`A printer doesn't pick up paper from the tray at all. What should be checked?`,
o:[`The pickup roller and the paper loading`,`The fuser assembly and its heater`,`The toner cartridge and imaging drum`,`The transfer roller and its alignment`],
a:[0],
e:`Paper not feeding is often caused by worn pickup rollers, incorrect paper loading, or tray settings.`},

{d:"HNT",s:`Print jobs pile up in the queue and nothing prints, even after restarting the printer. What should be done on the print server?`,
o:[`Restart the print spooler service`,`Reinstall the print driver on clients`,`Replace the toner cartridge`,`Change the default paper size`],
a:[0],
e:`A frozen queue is often fixed by clearing the queue and restarting the Print Spooler service.`},

{d:"HNT",s:`Laser prints are faded across the whole page. What should be checked first?`,
o:[`The toner level and density setting`,`The pickup roller in the main tray`,`The paper tray guides and size`,`The separation pad in the tray`],
a:[0],
e:`Faded prints usually mean low toner or a low density setting. Economy modes also reduce darkness.`},

{d:"HNT",s:`Pages print in portrait even though the user selected landscape in the app. What should be checked?`,
o:[`The orientation setting in the printer driver`,`The fuser temperature setting on the panel`,`The toner cartridge level`,`The pickup roller condition`],
a:[0],
e:`Incorrect page orientation is a software setting issue between the app and driver defaults.`},

{d:"HNT",s:`A multifunction printer reports "tray 2 not installed" though the tray is attached. What should be checked?`,
o:[`The driver's installed options`,`The tray's paper guides`,`The fuser assembly`,`The pickup roller in tray 1`],
a:[0],
e:`Drivers must have installable options configured so the system recognizes added trays and finishers.`},

{d:"HNT",s:`A printer finisher keeps jamming when stapling large jobs. What's the most likely fix?`,
o:[`Clear the staple jam and check capacity`,`Reinstall the operating system`,`Replace the network switch the printer uses`,`Change the screen resolution`],
a:[0],
e:`Finishing issues, such as staple jams or hole-punch problems, require clearing the mechanism and staying within capacity limits.`},

{d:"HNT",s:`Laser prints show small, random dark spots across pages. What's a likely cause?`,
o:[`Leaking toner or internal debris`,`A worn pickup roller in the tray`,`An incorrect print driver on the PC`,`A low fuser temperature setting`],
a:[0],
e:`Speckling often comes from loose toner, a leaking cartridge, or debris on internal components. Cleaning and replacing the cartridge help.`},

{d:"HNT",s:`Users can't print to a network printer, but it prints a test page locally. What should be checked?`,
o:[`Its network connection and IP address`,`The toner cartridge's remaining level`,`The fuser assembly and heater`,`The paper separation pad`],
a:[0],
e:`If local printing works, the problem is connectivity, such as a changed IP address, network cable, or port settings.`},

{d:"HNT",s:`A laser printer makes a grinding noise while feeding paper. What should be checked?`,
o:[`The gears and rollers in the paper path`,`The print driver's quality settings`,`The toner density setting on the panel`,`The printer's IP address and port`],
a:[0],
e:`Grinding noises usually indicate worn gears, damaged rollers, or obstructions in the paper path.`},
  ],
};
