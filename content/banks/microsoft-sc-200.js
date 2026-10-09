// Microsoft SC-200 question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/microsoft-sc-200.json.
module.exports = {
  id: "microsoft-sc-200",
  idPrefix: "sc200",
  vendor: "Microsoft",
  code: "SC-200",
  name: "Microsoft Certified: Security Operations Analyst Associate",
  fullLength: 50,
  minutes: 100,
  passPercent: 70,
  readinessPercent: 80,
  sectioned: false,
  note: "Microsoft scores SC-200 on a 1–1000 scale with 700 to pass. This practice exam reports a straight percentage; treat 80% as your readiness bar. Questions follow the skills measured as of October 21, 2026. The real exam can include case studies and labs, which this practice exam doesn't simulate.",
  domains: [{"id":"OPS","name":"Manage a security operations environment","weight":"40–45%"},{"id":"INC","name":"Respond to security incidents","weight":"35–40%"},{"id":"HNT","name":"Perform threat hunting","weight":"20–25%"}],
  Q: [
{d:"OPS",s:`The SOC lead wants an email whenever a new high-severity incident is created in Microsoft Defender XDR. Where should this be configured?`,
o:[`An email notification rule for incidents in Defender XDR`,`An Azure Monitor action group on the Log Analytics workspace`,`A mail flow rule in the Exchange admin center`,`A Microsoft Sentinel workbook with a scheduled export`],
a:[0],
e:`Defender XDR's email notification settings let you create rules that email recipients about new incidents, filtered by severity and device group, and also about response actions and threat analytics reports.`},

{d:"OPS",s:`A recurring Defender XDR alert is a known false positive caused by an approved admin tool. What should the analyst configure so it stops creating noise?`,
o:[`An alert tuning rule`,`A new device group`,`A custom detection rule`,`A live response session`],
a:[0],
e:`Alert tuning rules (formerly suppression rules) hide or automatically resolve alerts that match conditions you specify, such as a specific file or command line, reducing noise from known benign activity.`},

{d:"OPS",s:`Which Microsoft Defender for Endpoint advanced feature must be turned on before analysts can open remote shell sessions on devices?`,
o:[`Live response`,`Tamper protection`,`Web content filtering`,`Custom network indicators`],
a:[0],
e:`The Live response advanced feature enables remote shell connections to devices. Separate settings control live response for servers and running unsigned scripts.`},

{d:"OPS",s:`An organization wants to block a known malicious file hash on all Defender for Endpoint devices. What should it create?`,
o:[`A file indicator with a block action`,`An attack surface reduction rule`,`A device group with full automation`,`An alert tuning rule for the hash`],
a:[0],
e:`Indicators of compromise in Defender for Endpoint let you allow, warn, or block files by hash, as well as IP addresses, URLs, domains, and certificates. The Allow or block file advanced feature must be on to block files.`},

{d:"OPS",s:`Before enforcing attack surface reduction (ASR) rules, a team wants to see which apps would be affected without blocking anything. Which mode should it use?`,
o:[`Audit mode`,`Block mode`,`Warn mode`,`Disabled mode`],
a:[0],
e:`Audit mode logs what an ASR rule would have blocked, so you can review impact and add exclusions before switching to Block. Warn mode blocks but lets users override.`},

{d:"OPS",s:`Which ASR rule helps stop Office macros from launching other processes, a common malware technique?`,
o:[`Block Office apps from creating child processes`,`Block persistence through WMI event subscription`,`Use advanced protection against ransomware`,`Block untrusted and unsigned processes that run from USB`],
a:[0],
e:`The Office child-process rule prevents Word, Excel, and other Office apps from spawning processes such as PowerShell or cmd, which malicious macros often do.`},

{d:"OPS",s:`What does setting a Defender for Endpoint device group's automation level to "Full – remediate threats automatically" do?`,
o:[`Remediation actions run without waiting for approval`,`Every alert is escalated to a human analyst first`,`Devices are isolated whenever any alert is raised`,`Automated investigations are turned off for the group`],
a:[0],
e:`With full automation, automated investigation and response (AIR) applies remediation actions automatically. Semi-automated levels require approval for some or all actions, and "No automated response" turns AIR off for the group.`},

{d:"OPS",s:`Why create device groups in Defender for Endpoint?`,
o:[`To set automation levels and access per set of devices`,`To license Defender for Endpoint per department`,`To join devices to Microsoft Entra ID automatically`,`To store device logs in separate Sentinel workspaces`],
a:[0],
e:`Device groups let you assign different automation levels and, with role-based access control, limit which analysts can see and act on which devices — for example, keeping servers on semi-automation.`},

{d:"OPS",s:`Which Defender for Endpoint setting restricts a Tier 1 analyst to viewing and responding to alerts only for devices in the retail branch offices?`,
o:[`A custom role scoped to the retail device group`,`A global Security Reader role in Entra ID`,`An ASR rule exclusion for retail devices`,`A tamper protection exception for analysts`],
a:[0],
e:`Defender for Endpoint RBAC (or Defender XDR unified RBAC) assigns roles with specific permissions to user groups and scopes them to device groups, so analysts only access the devices they're responsible for.`},

{d:"OPS",s:`What does automated investigation and response (AIR) in Defender XDR do when an alert fires?`,
o:[`Investigates evidence and recommends or takes remediation actions`,`Creates a new Sentinel analytics rule for the same pattern`,`Sends the alert to Microsoft for manual analysis`,`Resets the passwords of all users in the organization`],
a:[0],
e:`AIR examines alerts and related entities, determines verdicts such as malicious or clean, and recommends or applies remediation actions, which appear in the Action center for review or approval.`},

{d:"OPS",s:`Where do analysts approve or reject pending remediation actions from automated investigations?`,
o:[`The Action center in the Defender portal`,`The Microsoft Entra admin center audit log`,`The Sentinel workbook gallery`,`The Azure Activity log`],
a:[0],
e:`The Action center lists pending and completed remediation actions across devices, email, and identities, where analysts can approve, reject, or undo them.`},

{d:"OPS",s:`What does automatic attack disruption in Defender XDR do?`,
o:[`Automatically contains compromised users and devices`,`Deletes all email that arrives from external domains`,`Shuts down every device in the tenant during an incident`,`Rolls back the Sentinel workspace to an earlier state`],
a:[0],
e:`Attack disruption correlates signals to identify high-confidence attacks such as ransomware or business email compromise and automatically takes containment actions, like disabling a user or containing a device, to limit damage while analysts investigate.`},

{d:"OPS",s:`Which configuration lets automatic attack disruption disable a compromised on-premises Active Directory user account?`,
o:[`Defender for Identity with an action account`,`An Entra Connect writeback rule for disabled users`,`A Sentinel playbook triggered by every alert`,`Tamper protection enabled on domain controllers`],
a:[0],
e:`Disabling on-premises AD accounts is done through Defender for Identity, which uses its action account (by default the sensor's LocalSystem identity) to perform the action in Active Directory.`},

{d:"OPS",s:`A critical service account must never be disabled automatically by attack disruption. What should you configure?`,
o:[`An exclusion for that account in attack disruption settings`,`Tamper protection on the account's sign-in device`,`A lower severity for all alerts involving the account`,`A separate device group with no automated response`],
a:[0],
e:`You can exclude specific user accounts (and devices) from automated containment actions, so attack disruption won't act on them while still raising incidents.`},

{d:"OPS",s:`What's the main difference between Microsoft Sentinel automation rules and playbooks?`,
o:[`Automation rules triage; playbooks run Logic Apps workflows`,`Automation rules run Python code; playbooks run KQL queries`,`Playbooks can only close incidents; automation rules call external APIs`,`They're the same feature with different names in different portals`],
a:[0],
e:`Automation rules handle common triage tasks — assigning owners, changing severity or status, adding tags — and can run playbooks. Playbooks are Azure Logic Apps workflows for more complex actions, such as calling external systems.`},

{d:"OPS",s:`Every new incident from a specific analytics rule should be assigned to the Tier 2 queue and tagged "phishing". What's the simplest approach?`,
o:[`An automation rule`,`A Logic Apps playbook`,`A scheduled KQL job`,`A summary rule`],
a:[0],
e:`Automation rules can assign incidents, change severity or status, and add tags without building a Logic Apps workflow. Playbooks are better for tasks that need external actions.`},

{d:"OPS",s:`A playbook must automatically disable a user in Microsoft Entra ID when an incident is created. Which trigger should the playbook use?`,
o:[`A Microsoft Sentinel incident trigger`,`A recurrence trigger every five minutes`,`An HTTP request from the analyst's browser`,`A SharePoint file creation trigger`],
a:[0],
e:`Playbooks for incident response use the Microsoft Sentinel incident trigger and are run from automation rules, giving the playbook the incident's entities to act on.`},

{d:"OPS",s:`Which permission does Microsoft Sentinel need before an automation rule can run a playbook in a given resource group?`,
o:[`Playbook permissions granted to Sentinel for that resource group`,`Global Administrator rights for the automation rule's creator`,`An Entra ID P2 license assigned to the playbook`,`Owner rights on every subscription in the tenant`],
a:[0],
e:`Sentinel uses a service account that needs the Microsoft Sentinel Automation Contributor role on the playbook's resource group, which you grant from Sentinel's settings, before automation rules can run playbooks there.`},

{d:"OPS",s:`An analyst must view incidents and data in Microsoft Sentinel and update incident status and assignment, but not create analytics rules. Which built-in role fits?`,
o:[`Microsoft Sentinel Responder`,`Microsoft Sentinel Contributor`,`Microsoft Sentinel Reader`,`Logic App Contributor`],
a:[0],
e:`Responder can view data and manage incidents (assign, change status, comment). Reader can only view, and Contributor can also create and edit analytics rules, workbooks, and other content.`},

{d:"OPS",s:`Which Microsoft Sentinel role lets a user run playbooks manually but not create or edit them?`,
o:[`Microsoft Sentinel Playbook Operator`,`Microsoft Sentinel Reader`,`Logic App Contributor`,`Microsoft Sentinel Automation Contributor`],
a:[0],
e:`Playbook Operator allows listing and running playbooks. Logic App Contributor is needed to create or edit them, and Automation Contributor is assigned to Sentinel itself so automation rules can run playbooks.`},

{d:"OPS",s:`In the Microsoft Sentinel platform, what's the purpose of the data lake tier?`,
o:[`Low-cost, long-term retention for analysis`,`Real-time detection rules that run every minute`,`Storing playbooks and automation rule definitions`,`Hosting workbooks for executive dashboards`],
a:[0],
e:`The data lake tier stores large volumes of security data cost-effectively for up to 12 years, for KQL exploration, jobs, and notebooks. The analytics tier supports real-time detections, alerting, and interactive hunting.`},

{d:"OPS",s:`High-volume firewall logs are rarely used for detections but must be kept for two years for investigations. Where should they be stored to reduce cost?`,
o:[`The data lake tier`,`The analytics tier`,`A Sentinel watchlist`,`An Advanced Hunting table`],
a:[0],
e:`Sending low-value, high-volume logs to the data lake tier keeps them queryable for investigations at a much lower cost than the analytics tier, which is meant for data used in real-time detection.`},

{d:"OPS",s:`How long does Defender XDR Advanced Hunting keep data in its own tables by default?`,
o:[`30 days`,`7 days`,`180 days`,`2 years`],
a:[0],
e:`Defender XDR Advanced Hunting tables keep 30 days of data. To keep it longer, stream or connect the data to Microsoft Sentinel and configure retention in the analytics and data lake tiers.`},

{d:"OPS",s:`What happens to data stored in the analytics tier when the Sentinel data lake is enabled?`,
o:[`It's mirrored to the lake tier`,`It's deleted after 24 hours to save cost`,`It's moved to a separate subscription`,`It's converted into watchlists`],
a:[0],
e:`Data in the analytics tier is mirrored to the lake tier, preserving a single copy that can be retained long term and analyzed with KQL jobs and notebooks.`},

{d:"OPS",s:`A SOC manager wants a dashboard of incident trends and data source health in Microsoft Sentinel. What should they create?`,
o:[`A workbook`,`A playbook`,`A watchlist`,`An automation rule`],
a:[0],
e:`Workbooks provide interactive visualizations of Sentinel data. Many are available from the Content hub and can be customized with KQL queries and parameters.`},

{d:"OPS",s:`What do SOC optimization recommendations in Microsoft Sentinel help with?`,
o:[`Reducing cost and closing coverage gaps`,`Writing incident reports for executives`,`Resetting analysts' passwords on a schedule`,`Assigning licenses to new SOC staff`],
a:[0],
e:`SOC optimization analyzes your data and detections to recommend changes, such as moving unused data to cheaper tiers or adding detections for threats relevant to your environment.`},

{d:"OPS",s:`Which connector should be used to collect Windows security events from Azure VMs into Microsoft Sentinel today?`,
o:[`Windows Security Events via AMA`,`Security Events via legacy agent`,`Syslog via AMA`,`Common Event Format via AMA`],
a:[0],
e:`Windows Security Events via AMA uses the Azure Monitor Agent with data collection rules (DCRs). The legacy Log Analytics agent is retired. Syslog and CEF connectors are for Linux and network devices.`},

{d:"OPS",s:`With the Azure Monitor Agent, what defines which Windows events are collected and where they're sent?`,
o:[`A data collection rule (DCR)`,`A Sentinel watchlist`,`A Group Policy logon script`,`A workbook parameter`],
a:[0],
e:`Data collection rules specify the data sources, such as event sets or XPath queries, the destination workspace, and optional transformations. DCRs are associated with the machines whose data they collect.`},

{d:"OPS",s:`To reduce cost, a team wants to collect only Windows event IDs 4624 and 4625 from servers. How should they configure the AMA connector?`,
o:[`Use an XPath query in the DCR`,`Select the "All Security Events" event set`,`Set the workspace retention to seven days`,`Add the event IDs to a Sentinel watchlist`],
a:[0],
e:`Data collection rules can use XPath queries to collect specific event IDs. The predefined event sets — All, Common, and Minimal — are an alternative when you don't need that precision.`},

{d:"OPS",s:`Hundreds of on-premises workstations can't run agents. How can their Windows security events reach Microsoft Sentinel?`,
o:[`Forward them with WEF to an AMA collector`,`Install Sentinel directly on each workstation`,`Export them weekly to a CSV in SharePoint`,`Configure Syslog on each Windows workstation`],
a:[0],
e:`Windows Event Forwarding sends events from many devices to a collector server. With AMA installed on the collector (Azure Arc–enabled if on-premises), a DCR collects the ForwardedEvents channel into Sentinel.`},

{d:"OPS",s:`A firewall can send logs only in Common Event Format (CEF) over Syslog. What's needed to ingest them with CEF via AMA?`,
o:[`A Linux log forwarder running AMA and a Syslog daemon`,`A Windows collector configured with WEF subscriptions`,`A Logic Apps playbook polling the firewall API`,`A direct connection from the firewall to the workspace`],
a:[0],
e:`CEF via AMA uses a Linux machine with rsyslog or syslog-ng and the Azure Monitor Agent to receive the firewall's Syslog messages and forward them, parsed into the CommonSecurityLog table.`},

{d:"OPS",s:`Which table stores events ingested through the CEF via AMA connector?`,
o:[`CommonSecurityLog`,`SecurityEvent`,`Syslog`,`ThreatIntelIndicators`],
a:[0],
e:`CEF events are parsed into CommonSecurityLog. Plain Syslog lands in Syslog, Windows security events in SecurityEvent, and threat indicators in ThreatIntelIndicators.`},

{d:"OPS",s:`How should an organization make sure Azure activity logs from all its subscriptions reach Microsoft Sentinel, including new subscriptions?`,
o:[`Assign an Azure Policy that configures diagnostic settings`,`Enable the activity log manually in each portal session`,`Install the Azure Monitor Agent on every virtual machine`,`Create a watchlist of subscription IDs to collect from`],
a:[0],
e:`The Azure Activity connector uses Azure Policy to create diagnostic settings that stream activity logs to the workspace, and a policy assignment at a management group also covers new subscriptions.`},

{d:"OPS",s:`How can threat indicators from a partner's STIX/TAXII feed be ingested into Microsoft Sentinel?`,
o:[`With the TAXII threat intelligence connector`,`By uploading them to a Sentinel workbook`,`By adding them to an ASR rule exclusion list`,`With the Windows Security Events via AMA connector`],
a:[0],
e:`The TAXII connector pulls STIX indicators from TAXII 2.x servers. Indicators can also be uploaded through the threat intelligence upload API or imported from files, and they're used by threat intelligence analytics rules.`},

{d:"OPS",s:`A custom application sends JSON logs that don't match any built-in table. How should they be stored in Sentinel?`,
o:[`In a custom _CL table, via a DCR`,`In the SecurityEvent table, renamed for the app`,`In a watchlist that's refreshed every hour`,`In the AzureActivity table under a new category`],
a:[0],
e:`Custom tables, whose names end in _CL, can be created in the workspace and fed through a data collection rule and the Logs Ingestion API, optionally transforming the data on the way in.`},

{d:"OPS",s:`Which connector type should you choose for Microsoft 365 Defender, Entra ID, and other Microsoft sources that have built-in integrations?`,
o:[`Service-to-service connectors`,`CEF via AMA through a Linux forwarder`,`A custom table populated by a playbook`,`Windows Event Forwarding to a collector`],
a:[0],
e:`Microsoft sources usually have service-to-service connectors, installed as solutions from the Content hub, that need only permissions and a few clicks — no agents or forwarders.`},

{d:"OPS",s:`In Defender XDR, how do you turn an Advanced Hunting query into a detection that creates alerts?`,
o:[`Save it as a custom detection`,`Pin it to a Sentinel workbook`,`Add it to a device group`,`Export it to a CSV file`],
a:[0],
e:`From Advanced Hunting, you can create a custom detection rule from a query, set its frequency, alert details, impacted entities, and automated actions on matching devices, users, or files.`},

{d:"OPS",s:`Which columns must a Defender XDR custom detection query typically return so alerts can be created and linked to entities?`,
o:[`Timestamp and an entity or event identifier`,`Only the alert title and severity text`,`A playbook name and a workspace ID`,`The analyst's user principal name`],
a:[0],
e:`Custom detection queries need to return a Timestamp and identifying columns, such as DeviceId and ReportId, so the service can build alerts and map affected entities.`},

{d:"OPS",s:`A Defender XDR custom detection rule must catch ransomware behavior as quickly as possible. Which frequency setting fits?`,
o:[`Continuous (NRT)`,`Every 24 hours`,`Every 12 hours`,`Every 3 hours`],
a:[0],
e:`Custom detections can run continuously (NRT) for supported queries, or on schedules such as every 1, 3, 12, or 24 hours. Continuous rules raise alerts as matching events arrive.`},

{d:"OPS",s:`Which Microsoft Sentinel analytics rule type runs about every minute for fast detection of critical events?`,
o:[`Near-real-time (NRT)`,`Scheduled`,`Machine learning behavior analytics`,`Threat intelligence`],
a:[0],
e:`NRT rules run every minute over recently ingested data with a short lookback, for rapid detection. Scheduled rules run on a configurable interval, such as every 5 minutes to every 14 days.`},

{d:"OPS",s:`A scheduled analytics rule runs every hour and looks back over the past hour. What setting groups multiple matching results into one incident?`,
o:[`Alert grouping settings`,`The rule's query frequency setting`,`A watchlist of related entities`,`The workspace data retention setting`],
a:[0],
e:`Incident settings let you group alerts into a single incident, for example when entities match, within a time window, reducing duplicate incidents.`},

{d:"OPS",s:`Which analytics rule type matches your ingested logs against threat indicators automatically, without writing a query?`,
o:[`Threat intelligence`,`Near-real-time (NRT)`,`Fusion multistage detection`,`Scheduled query`],
a:[0],
e:`The Microsoft Defender Threat Intelligence analytics rule matches Microsoft-generated indicators against your logs. Indicator-matching rules from Content hub templates match your own imported indicators.`},

{d:"OPS",s:`What does entity mapping in a Sentinel analytics rule do?`,
o:[`Identifies accounts, hosts, and IPs in results`,`Maps each rule to the analyst who created it`,`Links each alert to a specific Logic Apps playbook`,`Assigns a MITRE technique to the workspace`],
a:[0],
e:`Entity mapping tells Sentinel which query columns represent entities such as accounts, hosts, IP addresses, and files, enabling the investigation graph, entity pages, and correlation across alerts.`},

{d:"OPS",s:`How can a SOC see which attacker techniques its active detections cover and where gaps exist?`,
o:[`The MITRE ATT&CK view in Microsoft Sentinel`,`The Defender for Endpoint device inventory`,`The Azure subscription cost analysis view`,`The Entra ID sign-in logs workbook`],
a:[0],
e:`Sentinel's MITRE ATT&CK page maps active and available analytics rules and hunting queries to tactics and techniques, highlighting coverage gaps.`},

{d:"OPS",s:`Where in an analytics rule can you record which MITRE ATT&CK tactics and techniques it detects?`,
o:[`In its tactics and techniques settings`,`In the workspace's diagnostic settings`,`In the rule's playbook connection`,`In the data connector's configuration`],
a:[0],
e:`Each analytics rule can be tagged with ATT&CK tactics and techniques, which feed the coverage view and appear on resulting alerts and incidents.`},

{d:"OPS",s:`What are anomalies in Microsoft Sentinel?`,
o:[`ML-based detections that flag unusual behavior`,`Analytics rules written entirely by analysts`,`Incidents closed as false positives`,`Watchlists of known malicious IP addresses`],
a:[0],
e:`Anomaly rules use built-in machine learning to identify unusual activity, such as atypical sign-ins or data volumes. They write to the Anomalies table and can be tuned or run in flighting mode before production.`},

{d:"OPS",s:`What can you adjust in a built-in Sentinel anomaly rule to reduce noise without disabling it?`,
o:[`Its threshold parameters, by duplicating the rule`,`Its source code, by editing the ML model`,`Its MITRE mapping, by deleting tactics`,`Its connector, by switching to a watchlist`],
a:[0],
e:`You can duplicate an anomaly rule, adjust its parameters such as thresholds, and run the copy in flighting mode alongside the production rule to compare results before switching.`},

{d:"OPS",s:`Which analytics rule type in Sentinel correlates low-fidelity alerts from multiple products to detect multistage attacks?`,
o:[`Fusion multistage attack detection`,`Microsoft security incident creation`,`Near-real-time scheduled queries`,`Threat intelligence indicator matching`],
a:[0],
e:`Fusion uses machine learning to correlate anomalous behaviors and suspicious activities across products into high-fidelity incidents representing multistage attacks.`},

{d:"OPS",s:`Your Sentinel workspace is connected to the Defender portal. What's true about Defender XDR incidents?`,
o:[`They're synchronized and managed in the unified Defender portal`,`They must be recreated manually as Sentinel incidents`,`They're deleted from Defender when Sentinel ingests them`,`They can be viewed only in the Azure portal afterward`],
a:[0],
e:`With Sentinel in the Defender portal, incidents from Sentinel and Defender XDR are correlated and managed in a single queue, and their status stays synchronized.`},

{d:"OPS",s:`What's the purpose of summary rules in Microsoft Sentinel?`,
o:[`To aggregate data into a smaller table on a schedule`,`To summarize each incident in plain language for executives`,`To merge two workspaces into a single workspace`,`To compress playbook run history into one log entry`],
a:[0],
e:`Summary rules run scheduled KQL aggregations over detailed or verbose data, including data in low-cost tiers, and write the results to a custom table in the analytics tier for faster, cheaper queries and detections.`},

{d:"OPS",s:`What's a watchlist in Microsoft Sentinel used for?`,
o:[`A set of reference data, like VIP users`,`A list of analysts assigned to on-call shifts`,`A schedule for running analytics rules`,`A dashboard of open incidents by severity`],
a:[0],
e:`Watchlists hold reference data imported from files — such as VIP accounts, terminated employees, or high-value assets — that queries and rules can join with using the _GetWatchlist function.`},

{d:"INC",s:`An analyst needs to find every mailbox that received a phishing email from a specific sender in the last week and remove it. Which tool fits best?`,
o:[`Threat Explorer in Defender for Office 365`,`Content explorer in Microsoft Purview`,`The Exchange message trace in Outlook`,`The Defender for Endpoint device timeline`],
a:[0],
e:`Threat Explorer (Explorer) lets analysts search delivered email by sender, subject, or URL across mailboxes and take actions such as soft delete or move to junk on the results.`},

{d:"INC",s:`A message is found to be malicious hours after it was delivered. Which Defender for Office 365 feature can remove it from mailboxes automatically?`,
o:[`Zero-hour auto purge (ZAP)`,`Safe Links time-of-click checks`,`Attack simulation training`,`Mail flow rule journaling`],
a:[0],
e:`ZAP retroactively moves or removes delivered messages that are later identified as spam, phishing, or malware, based on updated verdicts.`},

{d:"INC",s:`A user clicked a link in a phishing email. Which Advanced Hunting table shows Safe Links click events?`,
o:[`UrlClickEvents`,`EmailEvents`,`DeviceFileEvents`,`IdentityLogonEvents`],
a:[0],
e:`UrlClickEvents records Safe Links clicks from email, Teams, and Office apps, including whether the click was allowed or blocked. EmailEvents records message delivery.`},

{d:"INC",s:`What can automatic attack disruption do during a business email compromise attack?`,
o:[`Disable the compromised user account automatically`,`Delete the organization's entire mail database`,`Block all outbound email from the tenant`,`Reset the domain's MX records to Microsoft`],
a:[0],
e:`For BEC and adversary-in-the-middle phishing, attack disruption can automatically disable or contain the compromised user so the attacker can't keep using the session, while the incident is investigated.`},

{d:"INC",s:`A Microsoft Purview DLP alert appears in a Defender XDR incident alongside a suspicious sign-in. Why is it useful there?`,
o:[`It's correlated with other signals for one investigation`,`DLP alerts can only be closed from the Defender portal`,`Defender XDR automatically deletes the shared file`,`It changes the DLP policy to block mode automatically`],
a:[0],
e:`Purview DLP and Insider Risk Management alerts flow into Defender XDR, where they're correlated with identity, device, and email signals into incidents so analysts see the full story in one place.`},

{d:"INC",s:`An Insider Risk Management alert in the Defender portal shows a user's name as a pseudonym. Why?`,
o:[`IRM pseudonymization protects user privacy during triage`,`The user's account was deleted from Entra ID`,`The alert came from a guest account in another tenant`,`Defender XDR always hides names for every alert type`],
a:[0],
e:`Insider Risk Management can show pseudonymized user names to protect privacy, and only users with the right IRM permissions can see the real identities.`},

{d:"INC",s:`Microsoft Defender for Cloud raises an alert that a storage account was accessed from a Tor exit node. Where can the analyst investigate it alongside other alerts?`,
o:[`In the Defender portal's incident queue`,`Only in the storage account's access keys page`,`In the Entra ID sign-in logs only`,`In the Purview compliance score view`],
a:[0],
e:`Defender for Cloud workload protection alerts are integrated into Defender XDR, so they appear in correlated incidents in the Defender portal along with alerts from other workloads.`},

{d:"INC",s:`Defender for Servers flags suspicious PowerShell on an Azure VM. Which is a reasonable first response action?`,
o:[`Investigate it and isolate the VM with Defender for Endpoint`,`Delete the VM's resource group to stop the attack quickly`,`Disable Defender for Cloud on the subscription to reduce noise`,`Change the VM size so the process restarts`],
a:[0],
e:`Defender for Servers includes Defender for Endpoint, so analysts can investigate the process tree and isolate the machine while they investigate. Deleting resources destroys evidence.`},

{d:"INC",s:`Defender for Cloud Apps detects a third-party OAuth app with broad mail permissions that many users granted. What should the analyst do if it's malicious?`,
o:[`Ban it and revoke its permissions`,`Increase the app's session timeout`,`Add the app to a device group`,`Mark the app as a sanctioned app`],
a:[0],
e:`Defender for Cloud Apps app governance and OAuth app management let you ban an app and revoke its granted permissions, cutting off its access to user data.`},

{d:"INC",s:`Defender for Cloud Apps raises an "impossible travel" alert. What does it indicate?`,
o:[`A user active in two distant places too quickly`,`A device that left the corporate network for travel`,`A user who booked travel through an unsanctioned app`,`An app that was installed on many devices at once`],
a:[0],
e:`Impossible travel flags activity from the same user in geographically distant locations within a time shorter than travel between them would take, suggesting credential compromise.`},

{d:"INC",s:`Microsoft Entra ID Protection flags a user as high risk because of leaked credentials. After confirming compromise, what should the analyst do?`,
o:[`Confirm compromise and require a password reset`,`Dismiss the user risk so the alert closes faster`,`Delete the user's mailbox and OneDrive immediately`,`Add the user to the Global Administrators group`],
a:[0],
e:`Marking the user as confirmed compromised sets risk to high and feeds the detection models. Remediating with a secure password reset, revoking sessions, and reviewing activity follows. Dismissing risk is for false positives.`},

{d:"INC",s:`An analyst determines that a risky sign-in was actually the user traveling. What should they do in Entra ID Protection?`,
o:[`Confirm the sign-in safe`,`Confirm the user compromised`,`Block the user permanently`,`Reset the user's MFA methods`],
a:[0],
e:`Confirming a sign-in safe tells ID Protection the detection was a false positive, lowering risk and helping improve future detections.`},

{d:"INC",s:`Which immediate action invalidates a compromised user's existing sessions and refresh tokens in Microsoft Entra ID?`,
o:[`Revoke the user's sessions`,`Change the user's display name`,`Remove the user's license`,`Disable self-service password reset`],
a:[0],
e:`Revoking sessions invalidates refresh tokens so the attacker must sign in again, which, combined with a password reset and disabling the account if needed, cuts off access.`},

{d:"INC",s:`Defender for Identity raises an alert for "Suspected DCSync attack (replication of directory services)". What does it indicate?`,
o:[`A non-DC requested replication of password hashes`,`A domain controller lost network connectivity briefly`,`A user changed their password more than once a day`,`An admin promoted a new domain controller normally`],
a:[0],
e:`DCSync abuses replication permissions so a non-domain-controller requests directory data, including password hashes. Defender for Identity detects replication requests from machines that aren't DCs.`},

{d:"INC",s:`What are honeytoken accounts in Defender for Identity?`,
o:[`Decoy accounts that alert when used`,`Accounts that store backup encryption keys`,`Service accounts exempt from all detections`,`Accounts that own every device group`],
a:[0],
e:`Honeytokens are dormant decoy accounts that no legitimate process should use, so any authentication attempt with them raises an alert that likely signals an attacker.`},

{d:"INC",s:`Which Defender for Identity feature shows how an attacker could chain accounts and devices to reach a domain admin?`,
o:[`Lateral movement paths`,`Device timelines`,`Threat analytics reports`,`Attack simulation training`],
a:[0],
e:`Lateral movement paths show how sensitive accounts could be compromised through exposed credentials on intermediate devices, so they can be closed.`},

{d:"INC",s:`An alert raised by a Microsoft Sentinel analytics rule should be investigated in the Defender portal. What does the analyst use to explore related entities and alerts visually?`,
o:[`The incident's attack story graph`,`The workspace's usage and cost report`,`The data connector's health page`,`The analytics rule's query editor`],
a:[0],
e:`Incidents show an attack story with a graph of alerts, entities, and their relationships, which helps analysts understand scope and pivot to related activity.`},

{d:"INC",s:`An analyst closes a Sentinel incident that turned out to be an approved penetration test. Which classification fits?`,
o:[`Benign positive`,`True positive`,`False positive`,`Undetermined`],
a:[0],
e:`Benign positive means the detection was accurate — the suspicious activity happened — but it was expected or not malicious, such as an authorized test. False positive means the detection logic was wrong.`},

{d:"INC",s:`What's a good way to add context from an external ticketing system to every new Sentinel incident?`,
o:[`A playbook run by an automation rule`,`A watchlist refreshed by hand weekly`,`A workbook pinned to the incident queue`,`An NRT rule that queries the ticket system`],
a:[0],
e:`Playbooks can call external APIs, such as a ticketing or enrichment service, and write results back to the incident as comments or tasks when an automation rule triggers them.`},

{d:"INC",s:`How can embedded Microsoft Security Copilot help an analyst investigating an incident in the Defender portal?`,
o:[`By summarizing it and suggesting guided response steps`,`By closing every incident older than seven days`,`By disabling detection rules that create noise`,`By replacing the need for analyst review entirely`],
a:[0],
e:`Embedded Security Copilot can summarize incidents, recommend guided responses, analyze scripts and files, and help write KQL, while the analyst stays responsible for decisions.`},

{d:"INC",s:`An analyst finds an obfuscated PowerShell command in an alert. Which Security Copilot capability helps most?`,
o:[`Script analysis explaining the command`,`Automatic deletion of the device from Entra ID`,`A new ASR rule created without review`,`An executive summary sent to the CISO`],
a:[0],
e:`Security Copilot's script analysis explains what a script or command line does, including decoding obfuscation, so analysts can quickly judge whether it's malicious.`},

{d:"INC",s:`Which pattern best indicates lateral movement in an incident?`,
o:[`An account signing in to many devices in turn`,`A single failed sign-in from a user's laptop`,`A user opening a file stored in their own OneDrive`,`A device installing a monthly Windows update`],
a:[0],
e:`Lateral movement shows up as credentials being used to move between systems — for example, the same account logging on remotely to several devices in a short time, often with remote execution tools.`},

{d:"INC",s:`A multistage incident includes a phishing email, a malicious sign-in, and ransomware on two devices. What should the analyst do first?`,
o:[`Contain affected users and devices`,`Close the email alert as resolved`,`Wait for all alerts to finish updating`,`Lower the incident's severity`],
a:[0],
e:`With active ransomware, containment comes first — isolating devices and disabling or containing compromised accounts — to stop spread, followed by investigation, eradication, and recovery.`},

{d:"INC",s:`What does case management in the Defender portal let a SOC do?`,
o:[`Group related incidents and track the work`,`Assign Microsoft 365 licenses to SOC members`,`Schedule ASR rules to turn on and off`,`Export workbooks to PowerPoint decks`],
a:[0],
e:`Cases let analysts link related incidents, assign owners, track tasks and status, and keep notes and evidence together for longer or complex investigations.`},

{d:"INC",s:`An analyst needs to see the sequence of processes, network connections, and file changes on a device around an alert. Where should they look?`,
o:[`The device timeline`,`The Action center history`,`The Secure Score page`,`The device group settings`],
a:[0],
e:`The device timeline shows events on a device in chronological order — processes, files, network, registry, and logons — so analysts can reconstruct what happened before and after an alert.`},

{d:"INC",s:`A device is confirmed compromised, but analysts still need to investigate it remotely. Which action should they take?`,
o:[`Isolate the device`,`Offboard the device`,`Restart the device`,`Delete the device record`],
a:[0],
e:`Isolation disconnects the device from the network while keeping its connection to Defender for Endpoint, so investigation and live response can continue.`},

{d:"INC",s:`What's an investigation package in Defender for Endpoint?`,
o:[`A collection of forensic data gathered from a device`,`A playbook template for Sentinel automation`,`A license bundle for Defender for Endpoint P2`,`An exported list of device group members`],
a:[0],
e:`Collecting an investigation package gathers forensic artifacts such as autoruns, installed programs, network connections, processes, scheduled tasks, and event logs into a downloadable ZIP.`},

{d:"INC",s:`In a live response session, which command retrieves a suspicious file from the device for analysis?`,
o:[`getfile`,`isolate`,`offboard`,`connect`],
a:[0],
e:`getfile downloads a file from the device to the analyst. Other commands include run (for uploaded scripts), processes, and remediate.`},

{d:"INC",s:`An analyst wants to stop a running malicious process and quarantine its file across all devices where it appears. Which file action fits?`,
o:[`Stop and quarantine file`,`Collect investigation package`,`Run antivirus scan only`,`Add a file indicator to allow`],
a:[0],
e:`Stop and quarantine file kills the process and quarantines the file on affected devices. Adding a block indicator prevents it from running again.`},

{d:"INC",s:`Which device action prevents applications that aren't signed by Microsoft from running, while the device stays online?`,
o:[`Restrict app execution`,`Isolate device`,`Run antivirus scan`,`Collect investigation package`],
a:[0],
e:`Restrict app execution uses an application control policy that allows only Microsoft-signed files, limiting attacker tools while the device remains connected.`},

{d:"INC",s:`From a file's entity page in Defender for Endpoint, what can an analyst see?`,
o:[`The devices it's on and its prevalence`,`The user's Entra ID password history`,`The device's licensing and billing details`,`The analytics rules in Sentinel that use it`],
a:[0],
e:`File pages show prevalence in the organization and globally, devices where the file was observed, related alerts, and verdicts, and they offer actions such as stop and quarantine or submit for deep analysis.`},

{d:"INC",s:`A device was contained by automatic attack disruption. Where does the analyst release the containment after remediation?`,
o:[`From the device page or the Action center`,`From the Entra ID user's license page`,`From the Sentinel data connector page`,`From the Azure subscription settings`],
a:[0],
e:`Containment actions taken by attack disruption appear in the Action center and on the device page, where analysts can undo them — for example, releasing a contained device — once it's safe.`},

{d:"INC",s:`Which evidence verdict in an automated investigation means the entity needs analyst review?`,
o:[`Suspicious`,`Clean`,`No threats found`,`Remediated`],
a:[0],
e:`AIR assigns verdicts to evidence: malicious items are remediated (automatically or with approval), suspicious items need analyst review, and clean items need no action.`},

{d:"INC",s:`Why should an analyst run a deep analysis submission on an unknown executable?`,
o:[`To detonate it in a sandbox`,`To permanently allow it on all devices`,`To reset the device that downloaded it`,`To upload it to the device's OneDrive`],
a:[0],
e:`Deep analysis runs the file in a secure cloud sandbox and reports behaviors such as network connections, file changes, and registry modifications, helping determine whether it's malicious.`},

{d:"INC",s:`An analyst needs to see who accessed a sensitive SharePoint file over the past month. Which tool fits?`,
o:[`Microsoft Purview Audit`,`Defender for Endpoint timeline`,`Content explorer`,`Threat analytics`],
a:[0],
e:`Purview Audit records user and admin activities across Microsoft 365, including SharePoint file access events such as FileAccessed, searchable by user, activity, and date.`},

{d:"INC",s:`Which PowerShell cmdlet searches the unified audit log?`,
o:[`Search-UnifiedAuditLog`,`Get-MessageTrace`,`New-ComplianceSearch`,`Get-MgAuditLogSignIn`],
a:[0],
e:`Search-UnifiedAuditLog, run in Exchange Online PowerShell, queries the unified audit log. New-ComplianceSearch creates eDiscovery content searches, and Get-MessageTrace traces mail flow.`},

{d:"INC",s:`During an investigation, an analyst must find every mailbox containing an email with a specific malicious attachment name and preserve copies. Which tool fits?`,
o:[`eDiscovery content search`,`Microsoft Purview Audit search`,`Defender for Endpoint live response`,`Entra ID sign-in logs`],
a:[0],
e:`eDiscovery content search finds items across mailboxes, sites, and Teams by keywords and conditions, and its results can be exported or preserved with holds. Audit shows activities, not message content.`},

{d:"INC",s:`Which data source shows the Microsoft Graph API requests an app or user made, such as reading many mailboxes?`,
o:[`Microsoft Graph activity logs`,`Entra ID sign-in logs`,`Azure activity logs`,`Defender for Endpoint timelines`],
a:[0],
e:`Graph activity logs record HTTP requests made to Microsoft Graph, including the app, user, request URI, and response, which helps investigate data access by compromised apps or tokens. They're sent to a workspace through Entra diagnostic settings.`},

{d:"INC",s:`How do you make Microsoft Graph activity logs available for querying in Microsoft Sentinel?`,
o:[`Send them to the workspace with Entra ID diagnostic settings`,`Install the Azure Monitor Agent on every Graph client`,`Export them from Purview Audit to a watchlist`,`Enable them in Defender for Endpoint advanced features`],
a:[0],
e:`Graph activity logs are configured as a log category in Microsoft Entra diagnostic settings and stream into the MicrosoftGraphActivityLogs table in a Log Analytics workspace.`},

{d:"INC",s:`An attacker created an inbox rule forwarding a CFO's mail externally. How can an analyst find when the rule was created?`,
o:[`Search the audit log for New-InboxRule activity`,`Check the device timeline of the CFO's laptop`,`Review the Sentinel workspace usage report`,`Look in the Defender for Identity health page`],
a:[0],
e:`Inbox rule creation is audited as New-InboxRule (or Set-InboxRule) in Exchange, so a Purview Audit or Search-UnifiedAuditLog search shows who created it, when, and from which IP.`},

{d:"INC",s:`Which audit activity indicates that someone accessed mailbox items, which helps scope a business email compromise?`,
o:[`MailItemsAccessed`,`FileAccessed`,`UserLoggedIn`,`SearchQueryInitiated`],
a:[0],
e:`MailItemsAccessed records when mail data is accessed by mail protocols and clients, helping determine which messages an attacker could have read.`},

{d:"INC",s:`An analyst needs to find which mailboxes a compromised account sent emails to. Which Advanced Hunting table helps?`,
o:[`EmailEvents`,`DeviceProcessEvents`,`IdentityDirectoryEvents`,`DeviceRegistryEvents`],
a:[0],
e:`EmailEvents contains delivery and send events for email, including sender, recipients, subject, and delivery action, which helps scope phishing or BEC activity.`},

{d:"INC",s:`What's the advantage of investigating a threat in the Defender portal with unified Sentinel and Defender XDR data?`,
o:[`One place to correlate SIEM and XDR data`,`Lower licensing cost for every Microsoft product`,`No need to configure any data connectors`,`Automatic closure of every low-severity incident`],
a:[0],
e:`The unified security operations platform brings Sentinel SIEM data and Defender XDR data together, so analysts investigate incidents and run Advanced Hunting across both in one experience.`},

{d:"INC",s:`A Purview Audit search returns no results for activity from 200 days ago in an E3 tenant. Why?`,
o:[`Audit (Standard) keeps records for 180 days`,`Audit logging is off by default in E3`,`Purview Audit only covers Exchange events`,`Search-UnifiedAuditLog only returns one day`],
a:[0],
e:`Audit (Standard) retains records for 180 days. Longer retention needs Audit (Premium) or exporting records to a SIEM such as Microsoft Sentinel.`},

{d:"INC",s:`Which response is most appropriate after confirming a malicious inbox forwarding rule?`,
o:[`Remove it, reset the password, revoke sessions`,`Leave the rule in place to monitor the attacker`,`Delete the user's account and all their data`,`Disable auditing to stop new alerts`],
a:[0],
e:`Removing the rule stops exfiltration, and resetting the password and revoking sessions removes the attacker's access. Reviewing what was forwarded and sign-in activity helps scope the impact.`},

{d:"HNT",s:`Which Advanced Hunting table should you query to find processes created by powershell.exe on devices?`,
o:[`DeviceProcessEvents`,`DeviceNetworkEvents`,`IdentityLogonEvents`,`EmailAttachmentInfo`],
a:[0],
e:`DeviceProcessEvents records process creation, including command lines and parent processes. DeviceNetworkEvents records connections, IdentityLogonEvents records authentication, and EmailAttachmentInfo describes email attachments.`},

{d:"HNT",s:`Which table shows outbound connections from devices to a suspicious IP address?`,
o:[`DeviceNetworkEvents`,`DeviceFileEvents`,`DeviceRegistryEvents`,`CloudAppEvents`],
a:[0],
e:`DeviceNetworkEvents contains network connections and related events from devices, including remote IPs, ports, and the initiating process.`},

{d:"HNT",s:`Which table records file creation and modification on devices, such as a ransomware note being written?`,
o:[`DeviceFileEvents`,`DeviceRegistryEvents`,`DeviceLogonEvents`,`AlertInfo`],
a:[0],
e:`DeviceFileEvents records file creation, modification, renaming, and deletion on devices, along with the process responsible.`},

{d:"HNT",s:`Which table holds activities in cloud apps such as SharePoint, Exchange, and connected third-party apps?`,
o:[`CloudAppEvents`,`DeviceEvents`,`IdentityQueryEvents`,`DeviceImageLoadEvents`],
a:[0],
e:`CloudAppEvents contains activities from Microsoft 365 and other apps connected through Defender for Cloud Apps, such as file sharing and admin operations.`},

{d:"HNT",s:`Which KQL operator filters rows to those matching a condition?`,
o:[`where`,`project`,`summarize`,`extend`],
a:[0],
e:`where filters rows. project selects columns, summarize aggregates, and extend adds calculated columns.`},

{d:"HNT",s:`Which query counts failed sign-ins per account?`,
o:[`... | summarize count() by AccountName`,`... | project count() by AccountName`,`... | extend count() by AccountName`,`... | take count() by AccountName`],
a:[0],
e:`summarize aggregates rows into groups, so summarize count() by AccountName returns one row per account with its count. The other operators don't group rows.`},

{d:"HNT",s:`Which KQL expression limits results to the last seven days?`,
o:[`where Timestamp > ago(7d)`,`where Timestamp < now(7d)`,`where Timestamp == today(-7)`,`where Timestamp in last(7d)`],
a:[0],
e:`ago(7d) returns the time seven days before now, so filtering Timestamp greater than it keeps the last week of data.`},

{d:"HNT",s:`Why is the has operator often preferred over contains in KQL hunting queries?`,
o:[`has matches indexed whole terms, so it's faster`,`has is case sensitive, so it finds more matches`,`contains only works on numeric columns`,`has searches every table in the workspace at once`],
a:[0],
e:`has looks for whole terms and uses the term index, making it much faster on large tables. contains matches any substring, which is slower but catches partial words.`},

{d:"HNT",s:`A hunter wants to combine process events with network events for the same device and process. Which operator fits?`,
o:[`join`,`union`,`render`,`top`],
a:[0],
e:`join combines rows from two tables that share key values, such as DeviceId and process ID. union appends tables, render draws charts, and top returns the first rows by a column.`},

{d:"HNT",s:`What does threat analytics in Defender XDR provide?`,
o:[`Reports on active threats and your exposure`,`A list of every alert closed by analysts last month`,`Benchmarks comparing your SOC staffing to peers`,`A calendar of planned Windows updates`],
a:[0],
e:`Threat analytics reports describe current threats and actor campaigns, show related alerts and impacted assets in your environment, and list recommended mitigations and their status.`},

{d:"HNT",s:`A new threat analytics report covers a vulnerability being exploited in the wild. What should the analyst check first?`,
o:[`Whether any assets are exposed or affected`,`Whether the report's author is a Microsoft employee`,`How many other customers read the report`,`Whether the report includes a video walkthrough`],
a:[0],
e:`Threat analytics shows your organization's exposure — impacted assets, related alerts, and mitigation status — so analysts can prioritize patching and hunting.`},

{d:"HNT",s:`What does a hunting graph with blast radius analysis help an analyst understand?`,
o:[`What a compromised entity can reach`,`How much a Sentinel workspace costs`,`Which analysts closed the most incidents`,`When devices last installed updates`],
a:[0],
e:`Graph-based hunting maps relationships between users, devices, and resources, and blast radius analysis shows which critical assets an attacker could reach from a compromised entity.`},

{d:"HNT",s:`What does the Microsoft Sentinel graph help analysts explore?`,
o:[`How entities relate across your data`,`Billing trends across Sentinel workspaces`,`The order in which playbooks were created`,`Version history of analytics rules`],
a:[0],
e:`Sentinel graph models relationships among entities — identities, devices, resources, and activities — so analysts can explore connections and paths that are hard to see in tables.`},

{d:"HNT",s:`What are hunting queries in Microsoft Sentinel?`,
o:[`Saved queries for proactive threat searches`,`Analytics rules that create incidents every minute`,`Playbooks that block IP addresses automatically`,`Workbooks that display cost by data source`],
a:[0],
e:`Hunting queries are saved KQL queries, often mapped to MITRE ATT&CK, that analysts run to search for threats that haven't triggered alerts. Many are available from Content hub solutions.`},

{d:"HNT",s:`During a hunt, an analyst finds a suspicious result worth keeping for later investigation. What should they create?`,
o:[`A bookmark`,`A summary rule`,`A data connector`,`A device group`],
a:[0],
e:`Bookmarks save query results with notes and entity mappings so they can be revisited, added to incidents, or used to create new incidents.`},

{d:"HNT",s:`How can a hunter be alerted when a hunting query starts returning results?`,
o:[`Turn it into an analytics rule`,`Pin the query to a Sentinel workbook`,`Add the query to a watchlist`,`Export the query to a notebook`],
a:[0],
e:`If a hunting query proves useful, turning it into an analytics rule runs it on a schedule and creates alerts and incidents when it matches.`},

{d:"HNT",s:`What do KQL jobs in the Sentinel data lake do?`,
o:[`Promote lake query results to the analytics tier`,`Run playbooks automatically whenever an incident is created`,`Export analytics rules to another workspace`,`Delete expired data from the analytics tier`],
a:[0],
e:`KQL jobs run one-time or scheduled queries over data lake data and promote the results to a table in the analytics tier, where they can be used for detections and fast hunting.`},

{d:"HNT",s:`A hunter needs to search two years of DNS logs stored only in the data lake tier for a domain from a new threat report. What should they use?`,
o:[`A KQL query or job on the lake`,`A near-real-time analytics rule`,`A Defender for Endpoint indicator`,`A live response session on a DNS server`],
a:[0],
e:`Data lake exploration lets you run KQL directly over long-term lake data, and jobs can promote matching results to the analytics tier for further investigation.`},

{d:"HNT",s:`Why query a summary rule's output table instead of the raw verbose logs?`,
o:[`It's smaller, so it's faster and cheaper`,`It contains data the raw logs never included`,`It's the only table playbooks can read`,`It keeps data longer than any other table`],
a:[0],
e:`Summary rules pre-aggregate detailed data on a schedule into a compact table in the analytics tier, so repeated hunting queries and detections run faster and cost less.`},

{d:"HNT",s:`When would a hunter use a Jupyter notebook with the Sentinel data lake instead of KQL alone?`,
o:[`For Python analysis, such as ML models`,`For creating incidents from alerts every minute`,`For assigning owners to new incidents`,`For deploying data connectors to many workspaces`],
a:[0],
e:`Notebooks let hunters use Python libraries for advanced analytics, machine learning, and visualization over large data sets in the lake, and they can be scheduled.`},

{d:"HNT",s:`What does connecting to the Sentinel MCP server enable for hunting?`,
o:[`AI agents querying Sentinel data via a standard protocol`,`Faster ingestion of Syslog data from Linux servers`,`Automatic creation of device groups in Defender for Endpoint`,`Backup and restore of the Sentinel workspace configuration`],
a:[0],
e:`The Sentinel MCP (Model Context Protocol) server exposes Sentinel data and tools to MCP-compatible clients, such as AI agents and notebook environments, so they can explore security data in natural language or code.`},

{d:"HNT",s:`Which Advanced Hunting query finds devices where a specific file hash was seen?`,
o:[`DeviceFileEvents | where SHA256 == "<hash>"`,`EmailEvents | where SHA256 == "<hash>"`,`IdentityLogonEvents | where SHA256 == "<hash>"`,`DeviceNetworkEvents | where SHA256 == "<hash>"`],
a:[0],
e:`DeviceFileEvents includes file hashes (SHA1 and SHA256) for file activity on devices. Email attachments' hashes are in EmailAttachmentInfo, and logon and network tables don't record file hashes.`},

{d:"HNT",s:`Which KQL operator returns only selected columns, such as DeviceName and ProcessCommandLine?`,
o:[`project`,`where`,`summarize`,`join`],
a:[0],
e:`project chooses which columns to output (and can rename them). where filters rows, summarize aggregates, and join combines tables.`},

{d:"HNT",s:`A hunting query must find sign-ins from IP addresses on a watchlist named "BadIPs". Which approach works?`,
o:[`Join the sign-in table with _GetWatchlist("BadIPs")`,`Add the watchlist to the device group settings`,`Reference the watchlist in the data connector`,`Copy the IPs into the rule's MITRE mapping`],
a:[0],
e:`_GetWatchlist returns the watchlist as a table, which can be joined or used with in() against sign-in data in hunting queries and analytics rules.`},

{d:"HNT",s:`Which Advanced Hunting table records authentication activity captured by Defender for Identity from on-premises Active Directory?`,
o:[`IdentityLogonEvents`,`DeviceProcessEvents`,`EmailUrlInfo`,`CloudAppEvents`],
a:[0],
e:`IdentityLogonEvents records authentication activity captured by Defender for Identity (on-premises AD) and Defender for Cloud Apps (online services). IdentityDirectoryEvents records directory changes.`},

{d:"OPS",s:`What does custom data collection in Microsoft Defender for Endpoint let a SOC do?`,
o:[`Collect extra endpoint events using its own rules`,`Replace Defender for Endpoint with a third-party agent`,`Send all device data to a personal OneDrive account`,`Disable telemetry for devices in a chosen device group`],
a:[0],
e:`Custom data collection rules let you collect additional endpoint telemetry beyond the default sensor data — for example, specific events needed for your detections — and send it to Advanced Hunting and Sentinel.`},

{d:"OPS",s:`Which Defender for Endpoint setting prevents malware or users from turning off Microsoft Defender Antivirus real-time protection?`,
o:[`Tamper protection`,`Live response`,`Web content filtering`,`Automated investigation`],
a:[0],
e:`Tamper protection locks Defender Antivirus security settings, such as real-time and cloud-delivered protection, so they can't be disabled through the registry, PowerShell, or Group Policy.`},

{d:"INC",s:`Defender for Cloud Apps detects a risky session downloading many files from SharePoint on an unmanaged device. Which control can block downloads in real time?`,
o:[`A Conditional Access app control session policy`,`An activity policy that emails the user weekly`,`A file policy that runs once a day on stored files`,`A Sentinel workbook showing download volumes`],
a:[0],
e:`Session policies, applied through Conditional Access app control, monitor and control activity within sessions as it happens, such as blocking downloads on unmanaged devices. Activity and file policies alert after the fact.`},

{d:"INC",s:`What are tasks in a Microsoft Sentinel incident used for?`,
o:[`Tracking the investigation steps analysts must complete`,`Scheduling analytics rules to run at specific times`,`Assigning Microsoft 365 licenses to analysts`,`Defining which data connectors feed the workspace`],
a:[0],
e:`Incident tasks are checklists of investigation and response steps, added manually or by automation rules and playbooks, so analysts follow consistent procedures.`},
  ],
};
