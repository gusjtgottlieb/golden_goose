// CompTIA CS0-004 question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/comptia-cs0-004.json.
module.exports = {
  id: "comptia-cs0-004",
  idPrefix: "cs0004",
  vendor: "CompTIA",
  code: "CS0-004",
  name: "CompTIA CySA+ (V4)",
  fullLength: 85,
  minutes: 165,
  passPercent: 75,
  readinessPercent: 85,
  sectioned: false,
  note: "CompTIA scores CySA+ on a 100–900 scale with 750 to pass. This practice exam reports a straight percentage; treat 85% as your readiness bar. The real exam also includes performance-based questions (PBQs), which this practice exam doesn't include, so practice hands-on analysis separately. Questions follow the CS0-004 exam objectives (version 2.0).",
  domains: [{"id":"SO","name":"Security Operations","weight":"34%"},{"id":"VM","name":"Vulnerability Management","weight":"26%"},{"id":"IR","name":"Incident Response and Management","weight":"24%"},{"id":"RC","name":"Reporting and Communication","weight":"16%"}],
  Q: [
{d:"SO",s:`Logs from several servers show events in the wrong order, making it hard to build an incident timeline. What should be fixed first?`,
o:[`Time synchronization`,`Log retention periods`,`SIEM dashboard layout`,`Disk space on each server`],
a:[0],
e:`Without consistent time synchronization, such as NTP, timestamps from different sources can't be correlated reliably. Retention and dashboards don't fix ordering problems.`},

{d:"SO",s:`An attacker who gains admin rights on a log server could delete evidence. Which logging practice best addresses this?`,
o:[`Forward logs to a protected central store`,`Increase the logging verbosity on that server`,`Store logs only on the local server's disk`,`Rotate the log files more frequently`],
a:[0],
e:`Protecting log integrity means sending logs off the host to a central, access-controlled, ideally immutable store so a compromised system can't erase them.`},

{d:"SO",s:`A company must keep firewall logs for one year to meet a regulation. Which logging concept does this describe?`,
o:[`Retention`,`Ingestion`,`Normalization`,`Verbosity`],
a:[0],
e:`Retention defines how long logs are kept, often driven by legal, regulatory, or investigative needs. Ingestion is how logs are collected into a platform.`},

{d:"SO",s:`A SIEM isn't receiving events from newly deployed web servers. Which logging concept most likely needs attention?`,
o:[`Ingestion configuration`,`Log retention policy`,`Time zone display settings`,`Dashboard sharing permissions`],
a:[0],
e:`Ingestion covers how sources send logs to the SIEM, such as agents, forwarders, or syslog targets. New sources must be configured before events arrive.`},

{d:"SO",s:`Which Linux file would an analyst review to look for unauthorized accounts?`,
o:[`/etc/passwd`,`/etc/hosts`,`/var/log/wtmp only`,`/boot/grub/grub.cfg`],
a:[0],
e:`/etc/passwd lists local user accounts, and /etc/shadow holds their password hashes. New or unexpected entries can indicate persistence.`},

{d:"SO",s:`An analyst sees a process named svch0st.exe running from a user's temp folder. Why is this suspicious?`,
o:[`It mimics a system process from an odd path`,`Windows never runs processes from any folder`,`Executables can't run from temporary folders`,`Legitimate services always have long names`],
a:[0],
e:`Malware often mimics system process names, such as svchost.exe, with small spelling changes and runs from unexpected locations. Legitimate svchost.exe runs from System32.`},

{d:"SO",s:`What is a key security concern with containers compared with virtual machines?`,
o:[`Containers share the host kernel`,`Containers can't be scanned for flaws`,`Containers always run as separate hardware`,`Containers can't use network controls`],
a:[0],
e:`Containers share the host operating system kernel, so a kernel exploit or container escape can affect the host and other containers. VMs are isolated by a hypervisor.`},

{d:"SO",s:`Which architecture lets remote users reach specific applications only after verifying identity and device posture for each request?`,
o:[`Zero Trust Network Access (ZTNA)`,`A remote access VPN (full tunnel)`,`A flat network behind NAT and a firewall`,`A screened subnet for servers`],
a:[0],
e:`ZTNA brokers access to individual applications based on identity, device, and context, rather than placing users on the whole network as a traditional VPN does.`},

{d:"SO",s:`An organization wants to combine networking and security services, such as SWG, CASB, and ZTNA, in a cloud-delivered model. What is this called?`,
o:[`Secure access service edge (SASE)`,`Software-defined storage (SDS)`,`Network address translation`,`A demilitarized zone (DMZ) with a proxy`],
a:[0],
e:`SASE converges WAN networking with cloud-delivered security services so users get consistent protection wherever they connect.`},

{d:"SO",s:`Administrators must check out credentials for a short time, with sessions recorded, before managing critical servers. Which solution provides this?`,
o:[`Privileged access management (PAM)`,`A shared admin password list`,`Single sign-on (SSO) for all user accounts`,`A separate guest network for administrators`],
a:[0],
e:`PAM tools vault privileged credentials, grant time-limited access, and record sessions, reducing standing privilege and improving accountability.`},

{d:"SO",s:`A developer stores database passwords in environment files committed to a repository. What should replace this practice?`,
o:[`A secrets management vault`,`Base64-encoding the passwords`,`A longer password in the file`,`A private Git branch for the file`],
a:[0],
e:`Secrets managers store, rotate, and audit access to credentials, and applications retrieve them at runtime. Encoding isn't encryption, and private branches still expose secrets.`},

{d:"SO",s:`Which industrial system collects data from remote sites, such as pipelines, and lets operators control equipment centrally?`,
o:[`SCADA`,`An ERP system`,`A CASB`,`A SOAR platform`],
a:[0],
e:`Supervisory control and data acquisition (SCADA) systems monitor and control geographically distributed industrial processes, such as utilities and pipelines.`},

{d:"SO",s:`Why are many operational technology (OT) systems difficult to monitor with standard endpoint agents?`,
o:[`They run legacy software that can't support them`,`They don't produce any network traffic at all`,`They are always located in the public cloud`,`They use only encrypted wireless connections`],
a:[0],
e:`OT devices often run legacy or vendor-specific systems where agents aren't supported or could affect safety. Passive network monitoring is commonly used instead.`},

{d:"SO",s:`Which data protection concept ensures that sensitive data is unreadable if a laptop is stolen?`,
o:[`Encryption at rest`,`Encryption in transit`,`Data masking in reports`,`Tokenization of logs`],
a:[0],
e:`Encryption at rest, such as full-disk encryption, protects stored data on lost or stolen devices. Encryption in transit protects data moving across networks.`},

{d:"SO",s:`A company enrolls corporate phones so it can enforce passcodes and remotely wipe lost devices. Which concept is this?`,
o:[`Mobile device management`,`Network address translation`,`Static application testing`,`Software composition analysis`],
a:[0],
e:`MDM enforces policies, such as encryption, passcodes, and app controls, and supports remote lock and wipe for mobile devices.`},

{d:"SO",s:`Which practice reduces a server's attack surface before it goes into production?`,
o:[`Hardening it against a baseline`,`Enabling all optional services`,`Granting users local admin rights`,`Disabling host-based logging`],
a:[0],
e:`System hardening removes unnecessary services and accounts, applies secure settings, and follows benchmarks such as CIS, reducing exploitable weaknesses.`},

{d:"SO",s:`A workstation is sending large volumes of outbound traffic to an unfamiliar IP address at 3 a.m. What does this most likely indicate?`,
o:[`Data exfiltration`,`A failed software update`,`Normal backup activity`,`DNS cache poisoning`],
a:[0],
e:`Unusual outbound transfers to unknown destinations, especially off-hours, are a classic exfiltration indicator. Analysts should verify against known backup or sync jobs.`},

{d:"SO",s:`Firewall logs show one internal host connecting to ports 1–1024 on every address in a subnet. What activity is this?`,
o:[`Network enumeration`,`Beaconing to a C2 server`,`A DNS zone transfer`,`Normal web browsing`],
a:[0],
e:`Sequential connections to many ports and hosts indicate scanning and enumeration, often an attacker mapping the network after initial access.`},

{d:"SO",s:`A host makes small HTTPS requests to the same external domain every 60 seconds, around the clock. What does this pattern suggest?`,
o:[`Command-and-control beaconing`,`A user streaming a long training video`,`A scheduled antivirus scan`,`A DHCP lease renewal`],
a:[0],
e:`Regular, periodic connections with consistent sizes are typical of malware beaconing to a C2 server. Jitter may be added, but the regularity often remains visible.`},

{d:"SO",s:`An analyst finds a web server listening on TCP 4444, which isn't part of its approved configuration. Which indicator is this?`,
o:[`Activity on an unexpected port`,`Normal ephemeral port use`,`A standard HTTPS listener`,`A routine time synchronization service`],
a:[0],
e:`Services on unexpected ports, such as 4444, which is commonly used by Metasploit listeners, can indicate backdoors or reverse shells.`},

{d:"SO",s:`An attacker uses certutil.exe to download a payload from the internet. Which type of indicator does this represent?`,
o:[`Living-off-the-land binary abuse`,`Rogue device on the wired network`,`Typosquatting of a domain`,`Impossible travel between sign-ins`],
a:[0],
e:`LOLBins are legitimate, signed system tools, such as certutil, mshta, or rundll32, that attackers abuse to download or run code while blending in.`},

{d:"SO",s:`A server's CPU usage is at 100% for days, and an unfamiliar process is connecting to a mining pool. What is the likely cause?`,
o:[`Cryptojacking malware`,`A failing hard drive`,`A memory leak in the OS`,`A misconfigured DNS server`],
a:[0],
e:`Unexplained high resource consumption with connections to mining pools indicates cryptojacking, where attackers use compromised resources to mine cryptocurrency.`},

{d:"SO",s:`File integrity monitoring alerts that system binaries in the Windows System32 folder changed outside a patch window. What does this suggest?`,
o:[`Possible tampering by malware`,`A normal user profile update`,`Expected browser cache and cookie activity`,`A routine DNS cache refresh`],
a:[0],
e:`Unexpected changes to critical system files can indicate malware, rootkits, or tampering. Analysts should compare hashes against known-good versions.`},

{d:"SO",s:`A sign-in from London is followed 15 minutes later by one from Sydney for the same account. Which indicator is this?`,
o:[`Impossible travel`,`Password spraying`,`Rogue access point`,`Service disruption`],
a:[0],
e:`Impossible travel flags sign-ins from locations too far apart to be reached in the time between them, suggesting credential compromise. VPNs can cause false positives.`},

{d:"SO",s:`Users receive links to paypa1-secure.com. Which social engineering technique is being used?`,
o:[`Typosquatting`,`A watering hole`,`Pretexting by phone`,`Tailgating`],
a:[0],
e:`Typosquatting registers look-alike domains with small misspellings, such as replacing "l" with "1", to trick users into visiting malicious sites.`},

{d:"SO",s:`Why are URL shorteners a concern in phishing investigations?`,
o:[`They hide the real destination of a link`,`They always contain malware themselves`,`They block email filtering tools completely`,`They can only be opened on mobile devices`],
a:[0],
e:`Shortened URLs obscure the final destination, so users and some filters can't see that a link leads to a malicious site. Analysts expand them safely before visiting.`},

{d:"SO",s:`A finance employee receives an email from what appears to be the CEO's account, requesting an urgent wire transfer to a new vendor. What attack is most likely?`,
o:[`Business email compromise`,`A distributed denial of service`,`A SQL injection attack`,`An ARP spoofing attack`],
a:[0],
e:`BEC uses compromised or spoofed executive or vendor accounts to trick employees into sending money or data. Out-of-band verification of payment changes is a key control.`},

{d:"SO",s:`A cloud account suddenly launches dozens of GPU instances in an unused region. Which indicator is this?`,
o:[`Cloud resource compromise`,`Normal cloud auto-scaling`,`A failed backup job`,`An expired TLS certificate`],
a:[0],
e:`Unexpected resource creation, especially in unused regions, often means stolen cloud credentials used for cryptomining or other abuse.`},

{d:"SO",s:`A service account that normally reads one database begins querying every table and exporting results. What should the analyst suspect?`,
o:[`IAM account compromise`,`Expected service account behavior`,`Normal reporting activity`,`Expected index maintenance`],
a:[0],
e:`Behavior outside an account's normal pattern, such as broad queries and exports, suggests the account's credentials are being misused.`},

{d:"SO",s:`A web application becomes unavailable, and logs show thousands of requests per second from many IP addresses. Which indicator is this?`,
o:[`A DDoS attack disrupting the service`,`A successful SQL injection attack`,`Normal search engine crawling`,`An expired SSL certificate`],
a:[0],
e:`A flood of requests from many sources causing unavailability is consistent with a distributed denial-of-service attack.`},

{d:"SO",s:`An unknown device with a MAC address from a consumer router vendor appears on a switch port in the server room. What is this?`,
o:[`A rogue device`,`A honeypot`,`A jump server`,`A load balancer`],
a:[0],
e:`Rogue devices are unauthorized hardware connected to the network. They can bypass controls or provide attacker access and should be located and removed.`},

{d:"SO",s:`An analyst needs to decode a Base64-encoded, gzip-compressed PowerShell payload. Which tool is designed for this?`,
o:[`CyberChef`,`Nmap`,`Nessus Essentials`,`Snort IDS`],
a:[0],
e:`CyberChef chains operations, such as Base64 decoding, decompression, and XOR, to decode and analyze data quickly.`},

{d:"SO",s:`An analyst needs to capture packets on a headless Linux server from the command line. Which tool fits?`,
o:[`tcpdump`,`Wireshark GUI`,`Burp Suite`,`Maltego`],
a:[0],
e:`tcpdump captures and filters packets from the command line and can write pcap files for later analysis in Wireshark.`},

{d:"SO",s:`Which tool produces rich, structured logs of network activity, such as connections, DNS queries, and HTTP requests, rather than signature alerts?`,
o:[`Zeek`,`Snort`,`OpenVAS`,`Metasploit`],
a:[0],
e:`Zeek (formerly Bro) is a network security monitor that generates detailed protocol logs for analysis. Snort and Suricata focus on signature-based detection.`},

{d:"SO",s:`A team wants a signature-based network IDS/IPS that supports multithreading and inspects traffic at high speed. Which tool fits best?`,
o:[`Suricata`,`Nikto`,`Recon-ng`,`ScoutSuite`],
a:[0],
e:`Suricata is a multithreaded IDS/IPS engine that uses signature rules, many of which are compatible with Snort, and can also log protocol metadata.`},

{d:"SO",s:`An analyst wants to check whether an IP address has been reported for malicious activity by other organizations. Which tool helps most?`,
o:[`AbuseIPDB`,`YARA`,`Trivy scanner`,`tcpdump capture`],
a:[0],
e:`AbuseIPDB collects community reports of abusive IP addresses, giving reputation context during investigations.`},

{d:"SO",s:`An analyst needs to find who registered a suspicious domain and when. Which tool provides this?`,
o:[`WHOIS`,`Strings`,`Nuclei`,`Caldera`],
a:[0],
e:`WHOIS lookups show domain registration details, such as registrar and creation date. Recently registered domains are often suspicious.`},

{d:"SO",s:`An analyst wants to see readable text, such as URLs and IP addresses, embedded in a suspicious binary without running it. Which tool fits?`,
o:[`Strings`,`Joe Sandbox`,`Masscan`,`Prowler`],
a:[0],
e:`The strings utility extracts printable character sequences from files, often revealing URLs, commands, or messages without executing the sample.`},

{d:"SO",s:`A team wants to write rules that match malware families based on byte patterns and strings in files. Which tool is used?`,
o:[`YARA`,`WHOIS`,`Nikto`,`Checkov`],
a:[0],
e:`YARA rules describe patterns, such as strings and byte sequences with conditions, to identify and classify malware across files and memory.`},

{d:"SO",s:`An analyst submits a file hash to see whether dozens of antivirus engines detect it. Which service is this?`,
o:[`VirusTotal`,`AbuseIPDB`,`MXToolbox lookup`,`OpenCTI`],
a:[0],
e:`VirusTotal checks files, hashes, URLs, and domains against many antivirus engines and reputation sources. Uploading files can expose sensitive data, so hashes are often checked first.`},

{d:"SO",s:`An analyst wants to run a suspicious attachment and observe its behavior, such as file changes and network calls, in isolation. Which tool fits?`,
o:[`Cuckoo Sandbox`,`Angry IP Scanner`,`Recon-ng`,`MXToolbox`],
a:[0],
e:`Sandboxes such as Cuckoo or Joe Sandbox execute samples in isolated environments and report their behavior.`},

{d:"SO",s:`An analyst needs to check a domain's SPF, DKIM, and DMARC records and see whether its mail server is on blocklists. Which tool fits?`,
o:[`MXToolbox`,`Wireshark`,`Metasploit`,`Atomic Red Team`],
a:[0],
e:`MXToolbox performs DNS and email diagnostics, including SPF, DKIM, and DMARC lookups and blocklist checks.`},

{d:"SO",s:`Which capability baselines normal activity for users and devices and alerts on deviations, such as unusual sign-in times?`,
o:[`User and entity behavior analytics`,`Static application security testing`,`Software composition analysis`,`Network address translation`],
a:[0],
e:`UEBA builds behavioral baselines and flags anomalies that may indicate compromised accounts or insider threats.`},

{d:"SO",s:`Which platform lets organizations share threat indicators and events in a structured way with trusted communities?`,
o:[`MISP`,`Nessus`,`Burp Suite`,`Masscan`],
a:[0],
e:`The Malware Information Sharing Platform (MISP) stores and shares indicators and events, supporting collaborative threat intelligence.`},

{d:"SO",s:`An analyst needs to find every log line containing an IPv4 address. What should they use?`,
o:[`A regular expression`,`A YAML configuration template`,`A WHOIS lookup`,`A switch port mirror`],
a:[0],
e:`Regular expressions match text patterns, such as IP addresses, emails, or hashes, across logs and data.`},

{d:"SO",s:`A command line shows: powershell -nop -w hidden -enc JABjAGwA... What should the analyst conclude?`,
o:[`It runs a hidden, encoded command, which is suspicious`,`It's a standard Windows update command`,`It only lists files in the current folder`,`It's a harmless network connectivity diagnostic`],
a:[0],
e:`-nop skips the profile, -w hidden hides the window, and -enc runs a Base64-encoded command, all common in malicious PowerShell. Decoding the payload reveals intent.`},

{d:"SO",s:`Windows event logs exported for analysis use which native file format?`,
o:[`EVTX`,`YAML`,`PCAPNG`,`JSON`],
a:[0],
e:`Windows stores event logs in the binary EVTX format, viewable in Event Viewer or parsed by tools and SIEMs.`},

{d:"SO",s:`A cloud provider's audit logs are structured as nested key-value pairs in braces and brackets. Which format is this?`,
o:[`JSON`,`EVTX`,`Plain CSV`,`PCAP`],
a:[0],
e:`JSON uses objects in braces and arrays in brackets, and it's common for cloud and API logs. Analysts often parse it with tools such as jq or Python.`},

{d:"SO",s:`Which tool family monitors endpoints, records process and file activity, and can isolate a compromised host?`,
o:[`EDR`,`WHOIS`,`Masscan`,`SAST`],
a:[0],
e:`Endpoint detection and response (EDR) tools collect endpoint telemetry, detect threats, and support actions such as host isolation. XDR extends this across more sources.`},

{d:"SO",s:`An analyst writes a script to pull IoCs from an API and compare them with local logs on Windows servers. Which language is native to Windows administration?`,
o:[`PowerShell`,`YAML`,`XML`,`Bash scripts only`],
a:[0],
e:`PowerShell is Windows' native scripting language for administration and automation. Python and shell scripts are also common for security tasks.`},

{d:"SO",s:`A well-funded group maintains long-term, stealthy access to a target's network to steal intellectual property. Which threat actor is this?`,
o:[`An advanced persistent threat`,`An opportunistic script kiddie`,`A hacktivist defacing websites`,`An insider threat`],
a:[0],
e:`APTs are sophisticated, often state-linked actors that pursue long-term, targeted campaigns and work to remain undetected.`},

{d:"SO",s:`According to the Pyramid of Pain, which indicator is hardest for an attacker to change once defenders detect it?`,
o:[`Tactics, techniques, and procedures`,`File hashes of their malware samples`,`IP addresses they connect from`,`Domain names they register`],
a:[0],
e:`TTPs sit at the top of the Pyramid of Pain because changing behavior is costly. Hashes and IPs are at the bottom because they're trivial to change.`},

{d:"SO",s:`A team colors MITRE ATT&CK techniques by how often they appear in recent incidents. What is this visualization called?`,
o:[`A heat map`,`A kill chain`,`A risk register`,`A network diagram`],
a:[0],
e:`Heat maps over ATT&CK show technique frequency or coverage, helping teams prioritize detections and hunts.`},

{d:"SO",s:`Which factor reduces confidence in a threat intelligence report about an indicator?`,
o:[`The indicator is several years old`,`It came from a trusted partner`,`It matches activity in your logs`,`It is specific to your industry`],
a:[0],
e:`Timeliness, relevance, and accuracy drive confidence. Old indicators, such as IPs, may have changed owners and are less likely to be useful.`},

{d:"SO",s:`Which source is an example of closed-source threat intelligence?`,
o:[`A paid vendor feed`,`A public security blog`,`Public news articles`,`A public paste site`],
a:[0],
e:`Closed-source intelligence comes from proprietary or restricted sources, such as paid feeds or private sharing groups. OSINT is publicly available.`},

{d:"SO",s:`What is the difference between atomic and behavioral indicators of compromise?`,
o:[`Atomic are single values; behavioral describe activity patterns`,`Atomic describe patterns; behavioral are single values`,`Atomic come only from network logs; behavioral from endpoints`,`There is no difference; the terms are interchangeable`],
a:[0],
e:`Atomic IoCs, such as an IP, hash, or domain, can't be broken down further. Behavioral IoCs describe patterns, such as a process spawning a shell and then connecting outbound.`},

{d:"SO",s:`Using STRIDE, an attacker changes the amount field in a transaction request. Which threat category is this?`,
o:[`Tampering`,`Spoofing`,`Repudiation`,`Elevation of privilege`],
a:[0],
e:`Tampering is unauthorized modification of data. Spoofing is impersonation, repudiation is denying an action, and elevation of privilege is gaining higher access.`},

{d:"SO",s:`In STRIDE, an attacker uses another user's session token to act as that user. Which category is this?`,
o:[`Spoofing`,`Tampering`,`Information disclosure`,`Denial of service`],
a:[0],
e:`Spoofing involves pretending to be another user or system. Strong authentication and session protection mitigate it.`},

{d:"SO",s:`A team proactively searches for signs of an attacker's technique that existing alerts wouldn't catch. What is this activity?`,
o:[`Threat hunting`,`Vulnerability scanning`,`Change management`,`Patch deployment`],
a:[0],
e:`Threat hunting is hypothesis-driven searching for threats that evade automated detection, often guided by threat intelligence and ATT&CK techniques.`},

{d:"SO",s:`A company deploys fake file shares and decoy credentials that alert when touched. Which concept is this?`,
o:[`Cyber deception`,`Data masking`,`Load balancing across servers`,`Port security`],
a:[0],
e:`Cyber deception uses decoys, such as honeypots, honeytokens, and fake shares, to detect attackers, since legitimate users have no reason to access them.`},

{d:"SO",s:`Analysts conclude that an attack was carried out by a specific group based on its tools, infrastructure, and techniques. What is this process called?`,
o:[`Attribution`,`Remediation`,`Containment of systems`,`Eradication`],
a:[0],
e:`Attribution links activity to a threat actor using TTPs, infrastructure, and other evidence. It's often uncertain and should be expressed with confidence levels.`},

{d:"SO",s:`A SOC wants to automatically enrich phishing alerts, block malicious senders, and open tickets without analyst clicks. Which platform fits?`,
o:[`SOAR`,`SAST`,`UEBA analytics`,`MDM`],
a:[0],
e:`Security orchestration, automation, and response (SOAR) platforms run playbooks that integrate tools and automate repetitive response steps.`},

{d:"SO",s:`A SIEM rule generates hundreds of false positives daily from a vulnerability scanner. What should the team do?`,
o:[`Tune the rule to exclude the scanner`,`Disable the SIEM's correlation engine`,`Delete the scanner's historical logs`,`Escalate every alert to management`],
a:[0],
e:`Rule tuning reduces noise by adding exclusions or thresholds for known benign activity, so analysts can focus on real threats.`},

{d:"SO",s:`Adding geolocation and reputation data to IP addresses in alerts is an example of what?`,
o:[`Data enrichment`,`Data minimization`,`Log rotation`,`Data masking`],
a:[0],
e:`Enrichment adds context, such as threat intel, asset owner, or GeoIP, to alerts, speeding triage and improving decisions.`},

{d:"SO",s:`A ticketing system needs to notify a SOAR platform immediately when a new incident is created. Which integration method fits?`,
o:[`A webhook`,`A manual email export`,`A weekly CSV upload`,`A printed report`],
a:[0],
e:`Webhooks send HTTP callbacks when events occur, enabling near-real-time integration between tools. APIs and plug-ins are other integration methods.`},

{d:"SO",s:`Why should a SOC create documented playbooks for common incident types?`,
o:[`They make responses consistent and repeatable`,`They eliminate the need for any training`,`They prevent all incidents from occurring`,`They replace the incident response plan`],
a:[0],
e:`Playbooks and runbooks standardize steps, reduce errors, help coordination across shifts, and form the basis for automation.`},

{d:"SO",s:`A SOC manager wants leadership to see alert volume, open incidents, and response times at a glance. What should be built?`,
o:[`A dashboard`,`A YARA rule`,`A low-interaction honeypot`,`A sandbox`],
a:[0],
e:`Dashboards visualize key operational metrics for different audiences, supporting oversight and decision-making.`},

{d:"SO",s:`An analyst uses an AI assistant to summarize an incident, but it cites a log entry that doesn't exist. Which AI risk is this?`,
o:[`Hallucination`,`Model poisoning`,`Data exposure`,`Prompt injection`],
a:[0],
e:`Hallucinations are confident but false outputs. Analysts must verify AI-generated findings against the source data.`},

{d:"SO",s:`Analysts paste customer PII and internal logs into a public AI chatbot. Which risk does this create?`,
o:[`Data exposure`,`Hallucination`,`Model drift`,`Analyst alert fatigue`],
a:[0],
e:`Sensitive data shared with external AI services may be stored or used outside the organization's control. Approved tools and AI usage policies reduce this risk.`},

{d:"SO",s:`A log file being summarized by an AI tool contains text instructing the AI to ignore suspicious entries. Which risk is this?`,
o:[`A malicious prompt`,`Model hallucination`,`Time synchronization drift`,`False negative tuning`],
a:[0],
e:`Malicious prompts, including indirect prompt injection hidden in analyzed data, can manipulate AI output. AI-assisted analysis must be validated.`},

{d:"SO",s:`What should an organization establish before allowing analysts to use generative AI tools?`,
o:[`An AI usage policy`,`A new firewall vendor`,`A password expiration rule`,`A larger SIEM license`],
a:[0],
e:`AI usage policies define approved tools, allowed data, review requirements, and compliance obligations, supporting governance of AI in the SOC.`},

{d:"SO",s:`Which task is a strong use case for AI in security operations?`,
o:[`Correlating events across large log sets`,`Making final legal disclosure decisions`,`Replacing all human incident review`,`Approving firewall changes without review`],
a:[0],
e:`AI can help correlate events, summarize logs, compare artifacts, and draft documents, but humans should validate outputs and make high-impact decisions.`},

{d:"VM",s:`Before starting a vulnerability management program, what must an organization have so it knows what to scan?`,
o:[`An accurate asset inventory`,`A signed penetration test contract`,`A complete set of SIEM dashboards`,`A list of approved AI tools`],
a:[0],
e:`You can't assess what you don't know about. An asset inventory defines scan scope, ownership, and criticality.`},

{d:"VM",s:`Scans of production database servers have caused slowdowns during business hours. Which planning consideration should change?`,
o:[`Scheduling`,`Segmentation`,`Sensitivity levels`,`Regulatory requirements`],
a:[0],
e:`Scheduling scans outside peak hours, or throttling them, reduces performance impact on operations.`},

{d:"VM",s:`A scanner on the internet is used to see what an attacker outside the network could find. What type of scan is this?`,
o:[`External`,`Internal`,`Credentialed`,`Agent-based`],
a:[0],
e:`External scans assess internet-facing exposure from an outsider's view. Internal scans assess systems from inside the network.`},

{d:"VM",s:`Laptops are often off the corporate network, so scheduled network scans miss them. Which approach helps most?`,
o:[`Agent-based scanning`,`External-only scanning`,`Passive DNS monitoring`,`Weekly ping sweeps`],
a:[0],
e:`Agents installed on endpoints assess them locally and report results whenever they connect, covering remote and intermittently connected devices.`},

{d:"VM",s:`Why does a credentialed scan usually produce fewer false positives than a non-credentialed scan?`,
o:[`It can inspect installed software and patch levels directly`,`It uses only external DNS records to identify systems`,`It skips any host that requires authentication`,`It reports only the vulnerabilities rated critical`],
a:[0],
e:`Credentialed scans log in and read actual versions and configurations instead of inferring them from banners, improving accuracy.`},

{d:"VM",s:`An ICS network can't tolerate active probing. Which scanning approach is safest?`,
o:[`Passive scanning of network traffic`,`Aggressive credentialed scanning`,`Full port scans during peak production`,`Exploit-based validation scans`],
a:[0],
e:`Passive scanning observes traffic to identify devices and vulnerabilities without sending probes that could disrupt fragile OT systems.`},

{d:"VM",s:`A team wants to identify which hosts are live and what operating systems they run before detailed scanning. Which scan type is this?`,
o:[`Discovery scanning with fingerprinting`,`Web application scanning`,`Static code analysis of the apps`,`Compliance baseline scanning (CIS)`],
a:[0],
e:`Discovery scans map live hosts and use device fingerprinting to identify operating systems and services, informing later vulnerability scans.`},

{d:"VM",s:`A retailer must regularly scan systems that store cardholder data and have external scans done by an approved vendor. Which standard requires this?`,
o:[`PCI DSS`,`ISO 27001`,`CIS Benchmarks`,`SAMM`],
a:[0],
e:`PCI DSS requires internal and external vulnerability scans, with external scans performed by an Approved Scanning Vendor (ASV).`},

{d:"VM",s:`A team scans servers against prescriptive, consensus-based hardening settings, such as password policy and disabled services. What are these baselines?`,
o:[`CIS Benchmarks`,`CVSS metrics`,`EPSS scores`,`STRIDE categories`],
a:[0],
e:`CIS Benchmarks provide secure configuration baselines for operating systems, applications, and cloud services that scanners can check against.`},

{d:"VM",s:`A scanner on the user network can't reach servers in a restricted VLAN. Which planning consideration explains this?`,
o:[`Segmentation`,`Scheduling`,`Asset value`,`Patch availability`],
a:[0],
e:`Network segmentation and firewall rules can block scanners, so scanners may need placement in each segment or firewall exceptions.`},

{d:"VM",s:`Which scan type sends probes to hosts and services and may affect system performance?`,
o:[`Active scanning`,`Passive scanning`,`Log review`,`Threat modeling`],
a:[0],
e:`Active scans interact with targets directly, giving detailed results but adding load. Passive scans only observe existing traffic.`},

{d:"VM",s:`Nmap output shows: 22/tcp open ssh OpenSSH 7.2p2. What can the analyst conclude?`,
o:[`SSH is open, and that old version may be vulnerable`,`SSH is blocked by a firewall on the host`,`The host is running an HTTP web server on port 22`,`The scan confirms that SSH has been exploited`],
a:[0],
e:`An open port with a version banner shows the service is reachable. Old versions, such as OpenSSH 7.2, should be checked against known vulnerabilities.`},

{d:"VM",s:`Which Nmap option performs service version detection?`,
o:[`-sV`,`-sn`,`-Pn`,`-oX file`],
a:[0],
e:`-sV probes open ports to identify service versions. -sn is a ping sweep without port scanning, -Pn skips host discovery, and -oX writes XML output.`},

{d:"VM",s:`Nmap reports a port as "filtered." What does this mean?`,
o:[`A firewall or filter is blocking the probes`,`The service is open and accepting connections`,`The port is closed and responding with resets`,`The host is definitely offline`],
a:[0],
e:`Filtered means Nmap can't tell whether the port is open because packets are being dropped or blocked, usually by a firewall.`},

{d:"VM",s:`A team needs to scan the entire IPv4 internet range for one open port as fast as possible. Which tool is built for this?`,
o:[`Masscan`,`Nikto`,`Maltego graphs`,`Checkov`],
a:[0],
e:`Masscan is an extremely fast asynchronous port scanner designed for large address ranges.`},

{d:"VM",s:`A penetration tester wants to confirm that a vulnerability is exploitable by running a known exploit module. Which tool fits?`,
o:[`Metasploit Framework`,`AbuseIPDB reputation lookup`,`Trivy`,`ScoutSuite cloud audit`],
a:[0],
e:`Metasploit provides exploit modules, payloads, and post-exploitation tools to validate vulnerabilities in authorized testing.`},

{d:"VM",s:`An analyst wants to visualize relationships between a company's domains, email addresses, and employees from public sources. Which tool fits?`,
o:[`Maltego`,`Nessus`,`tcpdump capture`,`Caldera`],
a:[0],
e:`Maltego performs OSINT link analysis and graphs relationships among entities, such as people, domains, and infrastructure.`},

{d:"VM",s:`Which tool is a modular, command-line framework for web-based reconnaissance, similar in style to Metasploit?`,
o:[`Recon-ng`,`Burp Suite`,`OpenVAS`,`Prowler`],
a:[0],
e:`Recon-ng uses modules to gather OSINT, such as hosts and contacts, through a Metasploit-like console.`},

{d:"VM",s:`A tester needs to intercept and modify HTTP requests between a browser and a web application. Which tool fits?`,
o:[`Burp Suite`,`Masscan port scanner`,`Nessus`,`Zeek network monitor`],
a:[0],
e:`Burp Suite works as an intercepting proxy for manual web testing and includes a scanner. OWASP ZAP is a free alternative.`},

{d:"VM",s:`Which tool quickly scans web servers for dangerous files, outdated server software, and misconfigurations?`,
o:[`Nikto`,`Maltego`,`Recon-ng`,`YARA`],
a:[0],
e:`Nikto is a web server scanner that checks for known dangerous files, outdated versions, and server configuration issues.`},

{d:"VM",s:`A team wants a fast scanner driven by community YAML templates to check for specific CVEs across many hosts. Which tool fits?`,
o:[`Nuclei`,`Wireshark`,`MISP`,`Joe Sandbox`],
a:[0],
e:`Nuclei runs template-based checks, written in YAML, for vulnerabilities and misconfigurations at scale.`},

{d:"VM",s:`Which open-source tool is a full-featured network vulnerability scanner often used as an alternative to Nessus?`,
o:[`OpenVAS`,`Nikto`,`Masscan`,`Strings utility`],
a:[0],
e:`OpenVAS (part of Greenbone) is an open-source vulnerability scanner with a large feed of network vulnerability tests.`},

{d:"VM",s:`A team wants to audit an AWS account against CIS benchmarks for misconfigurations, such as public S3 buckets. Which tool fits?`,
o:[`Prowler`,`Burp Suite`,`Maltego`,`tcpdump`],
a:[0],
e:`Prowler assesses AWS (and other cloud) environments against security best practices and compliance frameworks. ScoutSuite is a multi-cloud alternative.`},

{d:"VM",s:`Developers want to scan container images for vulnerable packages before deployment. Which tool fits?`,
o:[`Trivy`,`Maltego`,`Recon-ng`,`Wireshark`],
a:[0],
e:`Trivy scans container images, file systems, and IaC for known vulnerabilities and misconfigurations.`},

{d:"VM",s:`A team wants to catch insecure settings in Terraform templates before infrastructure is deployed. Which tool fits?`,
o:[`Checkov`,`Nikto`,`AbuseIPDB`,`OpenVAS`],
a:[0],
e:`Checkov performs static analysis of infrastructure as code, such as Terraform and Kubernetes manifests, to find misconfigurations.`},

{d:"VM",s:`A SOC wants to safely emulate specific ATT&CK techniques to test whether its detections fire. Which tool fits?`,
o:[`Atomic Red Team`,`Nessus`,`Masscan port scanner`,`MXToolbox diagnostics`],
a:[0],
e:`Atomic Red Team provides small, technique-mapped tests that validate detections. Breach and attack simulation tools such as Caldera automate adversary emulation.`},

{d:"VM",s:`Which tool is an automated adversary emulation platform from MITRE?`,
o:[`Caldera`,`Prowler cloud audit`,`Nikto`,`Strings`],
a:[0],
e:`MITRE Caldera automates adversary emulation using ATT&CK techniques, supporting breach and attack simulation and purple teaming.`},

{d:"VM",s:`A web scanner reports a possible SQL injection, but manual testing shows the input is safely parameterized. How should this finding be classified?`,
o:[`A false positive`,`A true positive`,`A false negative`,`A true negative result`],
a:[0],
e:`A false positive is a reported issue that doesn't actually exist. Validating findings prevents wasted remediation effort.`},

{d:"VM",s:`A CVSS 9.8 vulnerability is on an isolated lab server, and a CVSS 7.5 vulnerability is being actively exploited on an internet-facing server. Which should be fixed first?`,
o:[`The 7.5, despite its lower score`,`The 9.8 because its base score is higher`,`Both at the next quarterly patch window`,`Neither until a full audit is complete`],
a:[0],
e:`Prioritization should weigh active exploitation, exposure, and asset value, not only CVSS base score. An exploited, exposed system carries more real risk.`},

{d:"VM",s:`What does the Exploit Prediction Scoring System (EPSS) estimate?`,
o:[`The probability a vulnerability will be exploited soon`,`The severity of a vulnerability's technical impact`,`The cost to remediate a vulnerability`,`The number of assets affected by it`],
a:[0],
e:`EPSS estimates the likelihood that a vulnerability will be exploited in the next 30 days, complementing CVSS severity in prioritization.`},

{d:"VM",s:`In a CVSS vector, AV:N means what?`,
o:[`The attack vector is network`,`The attack needs no privileges`,`Availability impact is none`,`The attack is not complex`],
a:[0],
e:`AV is attack vector, and N is network, meaning it's remotely exploitable. PR is privileges required, AC is attack complexity, and A is availability impact.`},

{d:"VM",s:`Which CVSS base metric describes whether exploitation requires a victim to act, such as clicking a link?`,
o:[`User interaction`,`Attack vector`,`Scope`,`Privileges required`],
a:[0],
e:`User interaction (UI) indicates whether exploitation requires a victim's participation. Requiring interaction lowers the score.`},

{d:"VM",s:`A vulnerability exists on a server that can only be reached from a segmented, isolated network. How does this context affect prioritization?`,
o:[`It may lower priority because exposure is limited`,`It raises priority above all internet-facing systems`,`It means the vulnerability can be ignored permanently`,`It has no effect on how the finding is prioritized`],
a:[0],
e:`Context awareness considers whether a system is internal, external, or isolated. Limited reachability reduces likelihood, though the finding still needs tracking.`},

{d:"VM",s:`A scanner missed a vulnerability that later turned out to exist on a server. What is this called?`,
o:[`A false negative`,`A false positive`,`A true positive`,`A true negative result`],
a:[0],
e:`False negatives are real issues the tool didn't detect. They are dangerous because they create a false sense of security.`},

{d:"VM",s:`A critical vulnerability has no patch yet. The team adds a WAF rule and restricts access to the system. What is this?`,
o:[`Applying compensating controls`,`Accepting the risk without action`,`Transferring the risk to insurers`,`Validating the remediation`],
a:[0],
e:`Compensating controls reduce risk when the primary fix isn't available, until a patch can be applied.`},

{d:"VM",s:`A business owner can't patch a legacy app until next year. The risk is documented, approved by management, and set for review. What is this?`,
o:[`A formal exception`,`A false positive`,`A risk transfer`,`A remediation validation`],
a:[0],
e:`Exceptions document why a vulnerability won't be fixed on schedule, who approved it, compensating controls, and when it will be reviewed.`},

{d:"VM",s:`After a patch is deployed, what should the team do before closing the vulnerability ticket?`,
o:[`Rescan to validate the fix`,`Lower the CVSS score manually`,`Delete the original scan report`,`Disable the scanner's checks`],
a:[0],
e:`Validation of remediation, usually by rescanning or testing, confirms that the vulnerability is actually resolved.`},

{d:"VM",s:`An organization continuously discovers and monitors its internet-facing assets, including forgotten subdomains. Which mitigation strategy is this?`,
o:[`Attack surface management`,`Secure coding training`,`Data loss prevention`,`Tabletop exercising of plans`],
a:[0],
e:`Attack surface management identifies and reduces exposed assets, such as unknown hosts, shadow IT, and stale DNS records, that attackers could target.`},

{d:"VM",s:`Which secure coding practice prevents SQL injection?`,
o:[`Parameterized queries`,`Client-side validation only`,`Longer database passwords`,`Hiding error pages`],
a:[0],
e:`Parameterized queries separate code from data so input can't change query structure. Client-side validation alone is easily bypassed.`},

{d:"VM",s:`A code scan flags a file inclusion flaw where user input sets a path to a file already on the server. What is this vulnerability called?`,
o:[`Local file inclusion (LFI)`,`Remote file inclusion (RFI)`,`Cross-site request forgery`,`A race condition`],
a:[0],
e:`LFI lets attackers include local files, such as configuration or log files, through unsanitized input. RFI includes files from a remote URL.`},

{d:"VM",s:`Which scenario describes the impact criterion in vulnerability prioritization?`,
o:[`How much harm exploitation would cause the business`,`How easy it is to write exploit code for the flaw`,`How long the vendor took to release a patch`,`How many scanners detected the vulnerability`],
a:[0],
e:`Impact measures the consequences to confidentiality, integrity, availability, and the business if the vulnerability is exploited.`},

{d:"VM",s:`A security awareness policy that requires annual training is which control type?`,
o:[`Administrative`,`Technical`,`Physical`,`Compensating (alternative)`],
a:[0],
e:`Administrative (managerial) controls are policies, procedures, and training. Technical controls are implemented in systems, and physical controls protect facilities.`},

{d:"VM",s:`Which control function does an EDR's automatic isolation of an infected host perform?`,
o:[`Responsive`,`Preventative`,`Deterrent`,`Directive`],
a:[0],
e:`Responsive controls act when an incident is detected to limit its impact. Preventative controls stop incidents before they happen.`},

{d:"VM",s:`After compensating controls are applied, some risk from a vulnerability remains. What is it called?`,
o:[`Residual risk`,`Inherent risk`,`Risk appetite`,`Risk tolerance`],
a:[0],
e:`Residual risk is what remains after controls. Inherent risk is the level before any controls are applied.`},

{d:"VM",s:`Leadership states that it will accept only low risks for customer-facing systems. What does this statement define?`,
o:[`Risk appetite`,`Residual risk`,`Inherent risk`,`Risk transfer to an insurer`],
a:[0],
e:`Risk appetite is the amount and type of risk an organization is willing to pursue or retain to meet its objectives.`},

{d:"VM",s:`A company buys cyber insurance to cover the costs of a breach. Which risk management strategy is this?`,
o:[`Transfer`,`Accept`,`Avoid`,`Mitigate with controls`],
a:[0],
e:`Transferring shifts financial impact to a third party. The organization still owns the risk and must manage it.`},

{d:"VM",s:`A company decommissions a vulnerable legacy FTP service rather than securing it. Which strategy is this?`,
o:[`Avoid`,`Accept`,`Transfer`,`Mitigate`],
a:[0],
e:`Avoidance removes the risk by eliminating the activity or system that creates it.`},

{d:"VM",s:`A policy states that critical vulnerabilities must be remediated within 15 days. What does this target define?`,
o:[`A service-level objective`,`A risk register entry`,`A CVSS environmental score`,`A rule of engagement`],
a:[0],
e:`Remediation timelines are service-level objectives (SLOs) set by policy and governance, often tracked as KPIs and SLAs.`},

{d:"VM",s:`Which testing method analyzes source code for vulnerabilities without running the application?`,
o:[`SAST`,`DAST`,`Fuzzing`,`Penetration testing`],
a:[0],
e:`Static application security testing examines source or compiled code early in development. DAST tests the running application from the outside.`},

{d:"VM",s:`A scanner sends crafted requests to a running web application in staging to find vulnerabilities. Which method is this?`,
o:[`DAST`,`SAST`,`SCA`,`SBOM review`],
a:[0],
e:`Dynamic application security testing interacts with the running application, finding issues such as injection and misconfigurations at runtime.`},

{d:"VM",s:`An organization wants a framework to assess and improve its software security practices across the development life cycle. Which model fits?`,
o:[`OWASP SAMM`,`MITRE ATT&CK`,`The Diamond Model`,`STRIDE`],
a:[0],
e:`The Software Assurance Maturity Model (SAMM) helps organizations measure and improve secure software practices across governance, design, implementation, verification, and operations.`},

{d:"VM",s:`A newly disclosed flaw affects a popular open-source logging library. Which tool helps find every application that uses it?`,
o:[`Software composition analysis`,`Dynamic application testing`,`Network port scanning`,`User behavior analytics`],
a:[0],
e:`SCA tools inventory third-party and open-source components and their versions, flagging known vulnerable dependencies.`},

{d:"VM",s:`What does a software bill of materials (SBOM) provide?`,
o:[`A list of components and versions in software`,`A record of all licenses the company has bought`,`A schedule of planned software releases`,`A list of employees who wrote the code`],
a:[0],
e:`An SBOM inventories software components and dependencies, helping organizations quickly assess exposure to newly disclosed vulnerabilities.`},

{d:"VM",s:`A vendor's software update was compromised and pushed malware to customers. Which risk category does this represent?`,
o:[`Supply chain risk`,`Insider threat risk`,`Physical security risk`,`Shadow IT risk`],
a:[0],
e:`Supply chain risk arises from third-party vendors, software, and services. SBOMs, vendor assessments, and code signing checks help manage it.`},

{d:"VM",s:`A vulnerability on a public web server has a CVSS of 8.1 and no known exploit, and the vendor hasn't released a fix. Which criterion most limits the remediation options?`,
o:[`Patch availability`,`Asset value`,`True positive status`,`Exploitability`],
a:[0],
e:`When no patch exists, teams must rely on mitigations, such as compensating controls, until the vendor releases a fix.`},

{d:"IR",s:`In the Cyber Kill Chain, an attacker sends a phishing email with a malicious attachment. Which phase is this?`,
o:[`Delivery`,`Reconnaissance`,`Weaponization`,`Actions on objectives`],
a:[0],
e:`Delivery is when the weapon reaches the target, such as by email, web, or USB. Weaponization is building the payload, and reconnaissance is gathering information.`},

{d:"IR",s:`In the Cyber Kill Chain, malware establishes a channel to an attacker-controlled server for remote instructions. Which phase is this?`,
o:[`Command and control`,`Exploitation of the flaw`,`Installation of persistence`,`Delivery`],
a:[0],
e:`Command and control (C2) gives the attacker remote control of the compromised system. It follows installation and precedes actions on objectives.`},

{d:"IR",s:`An attacker pairs an exploit with a backdoor to create a deliverable payload before sending it. Which Kill Chain phase is this?`,
o:[`Weaponization`,`Delivery`,`Installation`,`Reconnaissance`],
a:[0],
e:`Weaponization combines an exploit with a payload, such as a malicious document. It happens on the attacker's side before delivery.`},

{d:"IR",s:`What are the four core features of the Diamond Model of Intrusion Analysis?`,
o:[`Adversary, capability, infrastructure, and victim`,`Identify, protect, detect, and respond`,`Spoofing, tampering, repudiation, and disclosure`,`Delivery, exploitation, installation, and C2`],
a:[0],
e:`The Diamond Model links adversary, capability, infrastructure, and victim for each event, helping analysts pivot between related activity.`},

{d:"IR",s:`An analyst finds a C2 domain and searches for other victims communicating with the same infrastructure. Which model describes this pivoting?`,
o:[`The Diamond Model`,`The Pyramid of Pain`,`The CIA triad`,`The OSI model`],
a:[0],
e:`The Diamond Model encourages pivoting between features, such as from infrastructure to other victims or capabilities, to expand an investigation.`},

{d:"IR",s:`How does MITRE ATT&CK differ from the Cyber Kill Chain?`,
o:[`ATT&CK details specific techniques per tactic`,`ATT&CK covers only the reconnaissance and delivery phases`,`ATT&CK is a vulnerability scoring system for patches`,`ATT&CK applies only to cloud environments`],
a:[0],
e:`The Kill Chain is a high-level, linear model. ATT&CK is a detailed knowledge base of real-world tactics and techniques, useful for detection mapping and hunting.`},

{d:"IR",s:`In MITRE ATT&CK, what does a "tactic" represent?`,
o:[`The adversary's goal, such as persistence`,`A specific tool, such as Mimikatz or PsExec`,`A single indicator, such as a file hash`,`A vulnerability score for an exploit`],
a:[0],
e:`Tactics are the "why," such as initial access or lateral movement. Techniques are the "how," the specific methods used to achieve each tactic.`},

{d:"IR",s:`An attacker uses stolen credentials and RDP to move from a workstation to a file server. Which ATT&CK tactic is this?`,
o:[`Lateral movement`,`Initial access via phishing`,`Exfiltration`,`Reconnaissance`],
a:[0],
e:`Lateral movement covers techniques for moving through the environment after initial compromise, such as remote services with valid accounts.`},

{d:"IR",s:`Building the IR team, buying forensic tools, and writing playbooks happen in which incident response phase?`,
o:[`Preparation`,`Detection`,`Containment`,`Post-incident`],
a:[0],
e:`Preparation establishes the plans, people, tools, and training needed to respond before an incident occurs.`},

{d:"IR",s:`A SIEM alert is reviewed and confirmed as a real intrusion. Which phase does this belong to?`,
o:[`Detection`,`Recovery`,`Eradication`,`Preparation`],
a:[0],
e:`Detection identifies potential incidents from alerts, reports, and monitoring. Analysis then determines scope, severity, and impact.`},

{d:"IR",s:`An analyst determines which systems are affected, how the attacker got in, and what data was accessed. Which phase is this?`,
o:[`Analysis`,`Preparation`,`Recovery`,`Post-incident`],
a:[0],
e:`Analysis investigates the scope, cause, and impact of an incident to guide containment and eradication decisions.`},

{d:"IR",s:`Malware is removed and compromised accounts are reset after systems are isolated. Which phase is this?`,
o:[`Eradication`,`Containment`,`Detection`,`Preparation and planning`],
a:[0],
e:`Eradication removes the threat, such as malware, persistence, and attacker accounts, and fixes the root cause.`},

{d:"IR",s:`Cleaned systems are restored from backups, monitored closely, and returned to production. Which phase is this?`,
o:[`Recovery`,`Eradication`,`Analysis`,`Detection`],
a:[0],
e:`Recovery restores normal operations, validates systems, and monitors for signs of reinfection.`},

{d:"IR",s:`Why is containment usually performed before eradication?`,
o:[`To stop the incident from spreading while it's removed`,`To delete evidence before the investigation starts`,`To notify customers before scoping the incident`,`To restore every system from backup immediately`],
a:[0],
e:`Containment limits damage and spread, buying time to investigate and plan eradication without the attacker expanding access.`},

{d:"IR",s:`Which phase includes reviewing what happened, documenting lessons learned, and updating plans?`,
o:[`Post-incident`,`Containment`,`Detection`,`Recovery and restoration`],
a:[0],
e:`Post-incident activities capture lessons learned, root causes, and improvements to controls, playbooks, and training.`},

{d:"IR",s:`Which document defines who's on the IR team, their authority, and how incidents are handled across the organization?`,
o:[`An incident response plan`,`A software bill of materials`,`A vulnerability scan report`,`An acceptable use policy`],
a:[0],
e:`The IR plan defines scope, roles, responsibilities, severity levels, and procedures, and is supported by playbooks for specific incident types.`},

{d:"IR",s:`Which document specifies how and when the IR team informs executives, legal, PR, and external parties during an incident?`,
o:[`A communication plan`,`A risk register`,`A network diagram`,`A change request for the CAB`],
a:[0],
e:`Communication plans define stakeholders, channels, approval, and timing for internal and external communication, including out-of-band methods.`},

{d:"IR",s:`The IR team walks through a simulated ransomware scenario in a meeting without touching systems. What is this?`,
o:[`A tabletop exercise`,`A full-scale simulation`,`A penetration test`,`A failover test`],
a:[0],
e:`Tabletop exercises are discussion-based walkthroughs that test plans, roles, and decisions. Simulations involve more realistic, hands-on activity.`},

{d:"IR",s:`Why should incident roles, such as incident commander and communications lead, be defined in advance?`,
o:[`So responsibilities are clear under pressure`,`So no one needs any training afterward`,`So legal never needs to be involved`,`So incidents can't be escalated later`],
a:[0],
e:`Predefined roles avoid confusion, duplicated effort, and gaps in decision-making during an incident.`},

{d:"IR",s:`An analyst receives 40 alerts at once and must decide which to investigate first. What is this process called?`,
o:[`Triage`,`Eradication`,`Attribution`,`Hardening`],
a:[0],
e:`Triage assesses alerts for validity, severity, and urgency so the most critical issues are handled first.`},

{d:"IR",s:`An analyst links a firewall log, a proxy entry, and an EDR alert that all share the same host and time window. What is this?`,
o:[`Log correlation`,`Log rotation`,`Log retention`,`Log truncation and compression`],
a:[0],
e:`Correlation connects related events across sources to reveal the full picture of an attack. SIEMs automate much of this.`},

{d:"IR",s:`Analysts add asset owner, criticality, and threat intel reputation to raw logs during an investigation. What is this?`,
o:[`Log augmentation and enrichment`,`Log collection and archiving`,`Log retention and disposal`,`Log rotation and compression on each host`],
a:[0],
e:`Enrichment adds context to log data, making it faster to judge severity and decide next steps.`},

{d:"IR",s:`Why is building a timeline important during an investigation?`,
o:[`It shows the sequence of attacker actions`,`It replaces the need to collect evidence`,`It determines the attacker's legal identity`,`It automatically contains the incident`],
a:[0],
e:`Timelines order events from multiple sources, revealing initial access, dwell time, lateral movement, and the scope of compromise.`},

{d:"IR",s:`A compromised server holds regulated customer data and supports a revenue-critical service. What should this most directly influence?`,
o:[`The incident's severity and priority`,`The SIEM's log retention period`,`The vulnerability scan schedule`,`The choice of hashing algorithm`],
a:[0],
e:`Determining severity and impact considers data sensitivity, business criticality, and scope, which drive prioritization and escalation.`},

{d:"IR",s:`Why do investigators hash a disk image immediately after acquiring it?`,
o:[`To prove later that the image hasn't changed`,`To encrypt the image for secure storage`,`To compress the image to save space`,`To remove deleted files from the image`],
a:[0],
e:`Data integrity validation compares hashes over time to show evidence wasn't altered, supporting its admissibility.`},

{d:"IR",s:`What does a chain of custody document?`,
o:[`Who handled evidence, when, and why`,`The attacker's movement through the network`,`The order of systems restored after an incident`,`The list of vulnerabilities found in a scan`],
a:[0],
e:`Chain of custody records every transfer and access to evidence, which is essential for its integrity and legal use.`},

{d:"IR",s:`Counsel instructs IT to suspend automatic deletion of emails related to an incident because litigation is likely. What is this?`,
o:[`A legal hold`,`A data retention schedule`,`An acceptable use policy`,`A service-level agreement`],
a:[0],
e:`A legal hold preserves relevant data that would otherwise be deleted, ensuring it's available for legal proceedings.`},

{d:"IR",s:`An infected workstation should be investigated, but the attacker must not reach other systems. What should be done first?`,
o:[`Isolate it from the network`,`Wipe and reimage it at once`,`Power it off immediately at the switch`,`Let the user keep working`],
a:[0],
e:`Network isolation, for example through EDR, stops spread while preserving volatile memory and evidence for analysis. Powering off loses RAM contents.`},

{d:"IR",s:`Why might an analyst capture memory before shutting down a compromised host?`,
o:[`Memory holds volatile evidence lost at shutdown`,`Memory is the only place that logs are stored`,`Shutting down automatically deletes the disk`,`Memory capture removes malware from the host`],
a:[0],
e:`RAM can contain running processes, network connections, encryption keys, and fileless malware that disappear when the system powers off.`},

{d:"IR",s:`An L1 analyst confirms an intrusion on a domain controller beyond their authority to handle. What should they do?`,
o:[`Escalate per the incident response plan`,`Close the ticket as a false positive`,`Reboot the domain controller`,`Wait for the next shift to review it`],
a:[0],
e:`Escalation moves incidents to higher tiers or leadership based on severity and defined criteria, ensuring the right expertise and authority are involved.`},

{d:"IR",s:`After eradication, how should the team confirm a host is clean before releasing it from isolation?`,
o:[`Verify remediation with scans and monitoring`,`Ask the user if the computer seems faster`,`Check that the host still powers on`,`Assume it's clean after a single reboot`],
a:[0],
e:`Remediation and verification confirm malware and persistence are gone and vulnerabilities are fixed before reconnecting the host.`},

{d:"IR",s:`What should happen before a remediated server is reconnected to the production network?`,
o:[`Verify it's clean, then release it with monitoring`,`Reconnect it immediately to minimize downtime`,`Delete all logs from the isolation period`,`Disable monitoring on it to reduce alert noise`],
a:[0],
e:`Release from isolation should follow validation and include heightened monitoring to detect any reinfection.`},

{d:"IR",s:`A team restores a database from the last backup taken before the compromise. Which activity is this?`,
o:[`Performing restoration`,`Determining severity`,`Developing a playbook`,`Establishing a timeline`],
a:[0],
e:`Restoration returns systems and data to a known-good state, using clean backups or rebuilt images, before resuming operations.`},

{d:"IR",s:`An investigation finds that an unpatched VPN appliance allowed initial access. What has the team identified?`,
o:[`The root cause`,`The legal hold`,`The risk appetite`,`The escalation path`],
a:[0],
e:`Root cause analysis finds the underlying reason an incident happened so corrective actions prevent recurrence.`},

{d:"IR",s:`After the RCA, the team creates a plan to patch all VPN appliances within 48 hours of future advisories. What is this?`,
o:[`Corrective action development`,`Evidence preservation`,`Log augmentation and enrichment`,`Threat attribution to a group`],
a:[0],
e:`Corrective actions address root causes and gaps found during the incident, with owners and deadlines to prevent repeat incidents.`},

{d:"IR",s:`Which type of evidence should generally be collected first, according to the order of volatility?`,
o:[`CPU registers and cache`,`Archived backup media`,`Hard disk contents`,`Remote syslog and log servers`],
a:[0],
e:`Collect the most volatile data first: registers and cache, then memory and network state, then disk, and finally remote and archival data.`},

{d:"IR",s:`Why should investigators work on a forensic copy rather than the original drive?`,
o:[`To avoid altering the original evidence`,`Because copies are always faster to read`,`Because originals can't be hashed`,`To skip the chain of custody process`],
a:[0],
e:`Analyzing a verified copy preserves the original's integrity. Write blockers prevent changes during acquisition.`},

{d:"IR",s:`An alert from the EDR tool should automatically page the on-call analyst for critical severities. Which IR technique does this support?`,
o:[`Alerts and notifications`,`Root cause analysis`,`Corrective action development`,`Evidence preservation`],
a:[0],
e:`Alerting and notification rules make sure the right people are informed quickly based on severity, enabling timely response.`},

{d:"IR",s:`Several incidents are active at once with limited staff. What should determine which is handled first?`,
o:[`Business impact and severity`,`The order in which the alerts arrived`,`Which is easiest to close`,`The analyst's preference`],
a:[0],
e:`Prioritization focuses limited resources on incidents with the greatest potential impact on critical assets, data, and operations.`},

{d:"IR",s:`Which training method most realistically tests a team's technical response by injecting real-looking attack activity into a test environment?`,
o:[`A simulation`,`A tabletop exercise`,`A policy review`,`A lunch-and-learn`],
a:[0],
e:`Simulations exercise tools and procedures hands-on. Tabletops are discussion-based and test decisions and coordination.`},

{d:"IR",s:`Why should playbooks be created for common incident types, such as phishing and ransomware?`,
o:[`They give responders tested, step-by-step actions`,`They remove the need for incident escalation`,`They guarantee every incident is prevented`,`They replace the overall incident response plan`],
a:[0],
e:`Playbooks provide consistent, repeatable steps for specific scenarios and can be automated in SOAR.`},

{d:"IR",s:`An investigator needs to gather endpoint logs, firewall logs, and cloud audit logs into one place for the investigation. What is this activity?`,
o:[`Log collection`,`Log truncation`,`Log deletion`,`Log encryption at rest`],
a:[0],
e:`Log collection centralizes relevant data so it can be correlated and analyzed, ideally before retention limits remove it.`},

{d:"IR",s:`During an investigation, the team suspects an insider. Who should usually be involved before interviewing the employee?`,
o:[`HR and legal`,`The employee's peers`,`External media`,`All customers`],
a:[0],
e:`Insider cases have employment and legal implications, so HR and legal guide interviews, evidence handling, and actions.`},

{d:"IR",s:`Ransomware has encrypted file servers. Which containment step is most appropriate first?`,
o:[`Isolate affected systems and block spread`,`Pay the ransom to get the decryption key`,`Delete all backups to prevent reinfection`,`Restore every server before investigating`],
a:[0],
e:`Isolating infected systems and blocking lateral movement paths, such as SMB, limits spread. Backups must be protected, not deleted.`},

{d:"IR",s:`A phishing email reached 300 users. What's an efficient containment step?`,
o:[`Purge the message and block the sender`,`Ask each user to forward the message to IT`,`Disable email for the entire company for a week`,`Reset every user's password in the company`],
a:[0],
e:`Purging the message, blocking the sender and URLs, and checking who clicked limits further exposure without disrupting the business.`},

{d:"IR",s:`Which artifact helps show when a program was executed on a Windows system?`,
o:[`Prefetch files`,`The hosts file`,`The recycle bin icon`,`Desktop wallpaper`],
a:[0],
e:`Windows Prefetch records program execution, including run counts and timestamps, which helps build timelines.`},

{d:"IR",s:`Which data integrity validation method should be used for evidence?`,
o:[`Comparing SHA-256 hashes`,`Comparing file names`,`Checking file sizes only`,`Opening files to view them`],
a:[0],
e:`Cryptographic hashes such as SHA-256 detect any change to evidence. File names and sizes can stay the same after tampering.`},

{d:"IR",s:`An organization wants analysts to preserve evidence in a way that keeps it usable in court. Which practice is most important?`,
o:[`Documented, verified evidence handling`,`Fast deletion of irrelevant data`,`Analyzing evidence on the original drive`,`Sharing evidence on public file shares`],
a:[0],
e:`Preservation requires proper acquisition, hashing, secure storage, and chain of custody so evidence remains admissible.`},

{d:"IR",s:`An attacker scrapes a company's job postings and LinkedIn profiles to learn its technologies and staff names. Which Kill Chain phase is this?`,
o:[`Reconnaissance`,`Weaponization`,`Exploitation`,`Installation of a backdoor`],
a:[0],
e:`Reconnaissance gathers information about the target before an attack. Defenders have limited visibility here, but OSINT reviews can reduce what's exposed.`},

{d:"IR",s:`A user opens a malicious document, and a flaw in the word processor runs the attacker's code. Which Kill Chain phase is this?`,
o:[`Exploitation`,`Delivery`,`Command and control`,`Actions on objectives`],
a:[0],
e:`Exploitation is when the vulnerability is triggered to run attacker code. Installation then establishes persistence on the system.`},

{d:"IR",s:`Engineers map their SIEM rules to ATT&CK techniques and find that no rules cover credential dumping. What has this exercise revealed?`,
o:[`A detection coverage gap`,`A false-positive problem`,`A chain of custody break`,`A new legal hold requirement`],
a:[0],
e:`Mapping detections to ATT&CK shows which techniques are covered and which aren't, guiding new detection development and hunts.`},

{d:"RC",s:`Which report lists each discovered vulnerability with its affected hosts, severity, and remediation guidance?`,
o:[`A vulnerability scan report`,`An executive summary`,`An after action report`,`A shift handover note for the SOC`],
a:[0],
e:`Scan reports detail findings for technical teams, including affected assets, severity, evidence, and recommended fixes.`},

{d:"RC",s:`An auditor finds that the company didn't remediate critical vulnerabilities within the timeframe required by PCI DSS. What is this?`,
o:[`A compliance finding`,`A false positive`,`A formal risk acceptance`,`A true negative`],
a:[0],
e:`Compliance findings document gaps against regulatory or contractual requirements and usually require corrective action plans.`},

{d:"RC",s:`Leadership wants a simple view that grades each business unit's vulnerability exposure as red, amber, or green. What should the team provide?`,
o:[`A risk scorecard`,`A raw scanner export`,`A packet capture`,`A YARA rule set`],
a:[0],
e:`Risk scorecards summarize risk in an easy-to-compare format for non-technical audiences and help drive accountability.`},

{d:"RC",s:`A vulnerability can't be fixed until a vendor updates a dependent component. Where should this be captured?`,
o:[`In the action plan's dependencies`,`In the incident timeline`,`In the acceptable use policy`,`In the chain of custody form`],
a:[0],
e:`Action plans list remediation steps, owners, deadlines, dependencies, and escalation paths so blocked items are visible and managed.`},

{d:"RC",s:`A contract with a hosting provider prohibits the customer from patching the provider-managed OS. Which inhibitor to remediation is this?`,
o:[`Contractual agreements`,`Patch availability`,`Degrading functionality`,`Legacy systems`],
a:[0],
e:`Contracts and SLAs can limit who may change systems and when. Remediation must be coordinated with the responsible party.`},

{d:"RC",s:`Patching a manufacturing control system would require stopping the production line for two days. Which inhibitor is this?`,
o:[`Business process interruption`,`Organizational governance`,`Contractual agreements`,`Proprietary vendor systems`],
a:[0],
e:`When remediation would interrupt critical business processes, it may be delayed to planned downtime, with compensating controls in place meanwhile.`},

{d:"RC",s:`Testing shows that a security patch breaks a key feature of a line-of-business application. Which inhibitor is this?`,
o:[`Degrading functionality`,`Patch availability`,`Legacy systems`,`Organizational governance`],
a:[0],
e:`Patches that degrade or break functionality may be postponed while vendors fix the issue, with risk documented and mitigated.`},

{d:"RC",s:`A critical system runs software whose vendor went out of business, so no patches will ever be released. Which inhibitors apply?`,
o:[`Legacy and proprietary systems`,`Contractual agreements only`,`Business process interruption`,`True and false negatives`],
a:[0],
e:`Legacy or proprietary systems often lack patches or vendor support. Isolation, compensating controls, and replacement planning are needed.`},

{d:"RC",s:`Every change to production must be approved by a change board that meets monthly, delaying urgent patches. Which inhibitor is this?`,
o:[`Organizational governance`,`Patch availability`,`Degrading functionality`,`Proprietary vendor systems`],
a:[0],
e:`Governance processes, such as change approvals, can slow remediation. Emergency change procedures help with critical vulnerabilities.`},

{d:"RC",s:`Why should the vulnerability management team identify stakeholders for each system?`,
o:[`So the right owners receive findings and act on them`,`So scans can skip systems with no named owner`,`So results can be shared publicly on the website`,`So the scanner's license costs are reduced`],
a:[0],
e:`Stakeholder identification ensures system owners, IT teams, and leadership get relevant information and are accountable for remediation.`},

{d:"RC",s:`A CISO wants to know whether the number of open critical vulnerabilities is rising or falling each quarter. Which metric fits?`,
o:[`Trends over time`,`A single scan count`,`The alert volume`,`A packet capture`],
a:[0],
e:`Trend metrics show progress and emerging problems over time, which is more meaningful to leadership than a single snapshot.`},

{d:"RC",s:`Which vulnerability metric shows whether teams fix issues within the agreed remediation timeframes?`,
o:[`SLA compliance rate`,`Total scanner runtime`,`Number of scan engines`,`Average CVSS of all CVEs`],
a:[0],
e:`SLA compliance measures the percentage of vulnerabilities remediated within the defined window for their severity.`},

{d:"RC",s:`A report for executives highlights the ten vulnerabilities posing the greatest business risk. Which KPI concept is this?`,
o:[`Top risks`,`Alert volume`,`Mean time to detect`,`False-positive rate`],
a:[0],
e:`Top-risk reporting focuses leadership attention on the most significant exposures and the decisions or resources they need.`},

{d:"RC",s:`A critical vulnerability has missed its remediation deadline twice, and the system owner isn't responding. What should the team do?`,
o:[`Escalate per the action plan`,`Close the finding as resolved`,`Lower its severity to medium`,`Remove it from future scans`],
a:[0],
e:`Escalation paths in action plans move overdue critical items to management so they get attention and resources.`},

{d:"RC",s:`How should vulnerability findings be presented to a non-technical board?`,
o:[`In terms of business risk and trends`,`As a full raw scanner export`,`As a list of every CVE identifier`,`As command-line tool output`],
a:[0],
e:`Executives need concise information about business risk, trends, and required decisions, not technical detail.`},

{d:"RC",s:`Which of these is an inhibitor to remediation rather than a remediation step?`,
o:[`Lacking an available patch`,`Rescanning after patching`,`Applying a vendor update`,`Updating an insecure configuration`],
a:[0],
e:`Patch availability is an inhibitor. When no fix exists, teams rely on compensating controls until one is released.`},

{d:"RC",s:`Who should formally declare that an event has become an incident?`,
o:[`The person or role authorized in the IR plan`,`Any employee who reads about the event`,`The attacker, by sending a ransom note`,`The external auditor at the next audit`],
a:[0],
e:`IR plans define who can declare incidents and set severity, which triggers escalation, communications, and resources.`},

{d:"RC",s:`What should an incident executive summary focus on?`,
o:[`Impact, status, and needed decisions`,`Every command run by the analysts`,`Full packet captures from the network`,`The source code of the malware sample`],
a:[0],
e:`Executive summaries give leadership a concise view of impact, risk, actions taken, and decisions or resources required.`},

{d:"RC",s:`During a breach investigation, which team should review public statements before they're released?`,
o:[`Legal and public relations`,`The IT help desk team`,`Facilities management`,`The vendor's sales team`],
a:[0],
e:`Legal ensures statements meet obligations and don't create liability, and PR manages messaging and reputation.`},

{d:"RC",s:`A breach exposed residents' personal data, and state law requires notice within a set timeframe. Who must the company notify besides customers?`,
o:[`The relevant regulatory agency`,`Its social media followers`,`Its main competitors`,`Its software vendors`],
a:[0],
e:`Many laws require notifying regulators, such as state attorneys general or data protection authorities, within specific deadlines.`},

{d:"RC",s:`When should law enforcement be involved in an incident?`,
o:[`As the plan defines, guided by legal`,`Never, because it always slows recovery`,`Only after all evidence is deleted`,`Before any internal investigation starts`],
a:[0],
e:`The communication plan, with legal counsel, defines when to engage law enforcement, such as for extortion, fraud, or criminal intrusions.`},

{d:"RC",s:`The attacker may be monitoring corporate email. How should the IR team communicate?`,
o:[`Over a pre-arranged out-of-band channel`,`Through the compromised email system`,`Through a public social media group`,`By posting updates on the intranet`],
a:[0],
e:`Operational security requires secure, out-of-band communication channels so attackers can't see response activity.`},

{d:"RC",s:`Which document describes what happened during an incident, what went well, and what should improve?`,
o:[`An after action report`,`A vulnerability scan report`,`A software bill of materials`,`A risk appetite statement`],
a:[0],
e:`After action reports document the incident, timeline, response effectiveness, root cause, and lessons learned.`},

{d:"RC",s:`An analyst's shift ends during an active incident. What should they do?`,
o:[`Hand over status, findings, and open tasks`,`Close the incident to keep metrics clean`,`Leave without notes; logs show everything`,`Escalate everything to the CISO to reset`],
a:[0],
e:`Shift handovers transfer context, actions taken, pending tasks, and evidence locations so the response continues smoothly.`},

{d:"RC",s:`A threat intelligence team writes a report explaining how a new ransomware campaign could affect the company's specific systems. What makes this an internal threat intelligence report?`,
o:[`It's tailored to the company's environment`,`It's copied from a public news article`,`It lists every global CVE released this year`,`It's written only for external customers`],
a:[0],
e:`Internal threat intelligence reports translate external threats into specific relevance, risk, and recommended actions for the organization.`},

{d:"RC",s:`Which metric measures the average time between when an intrusion begins and when the SOC identifies it?`,
o:[`Mean time to detect`,`Mean time to respond`,`Mean time to remediate`,`Mean time to close`],
a:[0],
e:`MTTD measures how long threats go unnoticed. Lower MTTD limits attacker dwell time.`},

{d:"RC",s:`Which metric measures how quickly the SOC begins acting on incidents after they're detected?`,
o:[`Mean time to respond`,`Mean time to detect`,`Total alert volume`,`True-positive rate`],
a:[0],
e:`Mean time to respond tracks the time from detection to containment or response actions.`},

{d:"RC",s:`A SOC's alerts are 90% false positives, and analysts are overwhelmed. Which metric highlights this problem?`,
o:[`False-positive rate`,`Mean time to remediate`,`Phishing click rate`,`Patch compliance`],
a:[0],
e:`A high false-positive rate signals the need for rule tuning and better detection logic to reduce alert fatigue.`},

{d:"RC",s:`Which metric reflects how many alerts turn out to be genuine malicious activity?`,
o:[`True-positive rate`,`Alert volume`,`Mean time to close`,`Average patch latency`],
a:[0],
e:`The true-positive rate shows detection quality. Rising rates indicate rules are well tuned to real threats.`},

{d:"RC",s:`Which metric measures the share of employees who clicked links in simulated phishing emails?`,
o:[`Phishing campaign click rate`,`False-negative detection rate`,`Phishing report rate`,`Total daily alert volume`],
a:[0],
e:`Phishing click rates show awareness program effectiveness and help target training.`},

{d:"RC",s:`A SOC manager tracks the total number of alerts generated per day to plan staffing. Which metric is this?`,
o:[`Alert volume`,`True-positive rate`,`Mean time to close`,`Mean time to detect`],
a:[0],
e:`Alert volume helps with capacity planning and can reveal noisy detections or changes in threat activity.`},

{d:"RC",s:`Which metric measures the average time from opening an incident ticket until it's fully resolved and closed?`,
o:[`Mean time to close`,`Mean time to detect`,`False-positive rate`,`Alert volume`],
a:[0],
e:`Mean time to close covers the full incident life cycle through documentation and closure.`},

{d:"RC",s:`During an incident, which stakeholder needs to be told when services will be restored, without technical details?`,
o:[`Customers`,`Forensic analysts`,`Threat hunters`,`SIEM engineers`],
a:[0],
e:`Customer communication focuses on impact, timelines, and actions they should take, coordinated with legal and PR.`},

{d:"RC",s:`Why should root cause analysis be included in post-incident reporting?`,
o:[`So corrective actions fix the underlying problem`,`So the attacker can be identified by name`,`So the incident can be closed faster`,`So legal holds can be lifted earlier`],
a:[0],
e:`Including the root cause ensures improvements target underlying weaknesses, preventing similar incidents.`},
  ],
};
