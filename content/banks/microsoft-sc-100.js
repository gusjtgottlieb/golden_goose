// Microsoft SC-100 question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/microsoft-sc-100.json.
module.exports = {
  id: "microsoft-sc-100",
  idPrefix: "sc100",
  vendor: "Microsoft",
  code: "SC-100",
  name: "Microsoft Certified: Cybersecurity Architect Expert",
  fullLength: 50,
  minutes: 120,
  passPercent: 70,
  readinessPercent: 80,
  sectioned: false,
  note: "Microsoft scores SC-100 on a 1–1000 scale with 700 to pass. This practice exam reports a straight percentage; treat 80% as your readiness bar. Questions follow the skills measured as of October 21, 2026. The real exam includes case studies, which this practice exam doesn't simulate.",
  domains: [{"id":"BPR","name":"Design solutions that align with security best practices and priorities","weight":"20–25%"},{"id":"SOI","name":"Design security operations, identity, and compliance capabilities","weight":"25–30%"},{"id":"INF","name":"Design security solutions for infrastructure","weight":"25–30%"},{"id":"APD","name":"Design security solutions for applications and data","weight":"20–25%"}],
  Q: [
{d:"BPR",s:`According to Microsoft's ransomware guidance, what should be the first priority when designing protection?`,
o:[`Prepare a recovery plan with protected backups`,`Buy cyber insurance before any other control`,`Block all email attachments organization-wide`,`Move every workload to a single cloud region`],
a:[0],
e:`Microsoft's ransomware guidance prioritizes, in order: prepare a recovery plan so you can recover without paying, limit the scope of damage by protecting privileged roles, and make it harder for attackers to get in.`},

{d:"BPR",s:`Attackers commonly try to destroy backups before encrypting data. Which backup design best counters this?`,
o:[`Immutable, isolated backups with MUA`,`Backups stored on the same file server as the data`,`Backups that any domain admin can delete instantly`,`A single backup copy kept for seven days`],
a:[0],
e:`Protect backups with immutability, soft delete, separate credentials or tenants, and multi-user authorization (MUA) so a compromised admin can't delete them. Test restores regularly.`},

{d:"BPR",s:`After a recovery plan, what does Microsoft's ransomware guidance prioritize next to limit the scope of damage?`,
o:[`Protecting privileged access`,`Encrypting all email messages`,`Upgrading all network switches`,`Training users on password length`],
a:[0],
e:`Ransomware operators rely on privileged accounts to spread and disable defenses, so securing privileged access — with the enterprise access model, PIM, and privileged access workstations — limits the blast radius.`},

{d:"BPR",s:`How should a security architect prioritize threats when designing a business resiliency strategy?`,
o:[`By impact on business-critical assets and processes`,`By the number of alerts each threat generated last year`,`By how recently each threat appeared in the news`,`By the cost of the cheapest available control`],
a:[0],
e:`Resiliency planning starts with identifying business-critical assets and processes and the threats most likely to disrupt them, so investment goes where impact is highest.`},

{d:"BPR",s:`A hybrid and multicloud estate needs consistent backup protection. What should the design include?`,
o:[`Central backup policies with tested restores`,`Separate unmanaged backup scripts for each server`,`Backups only for Azure workloads, not other clouds`,`Snapshots that share credentials with production`],
a:[0],
e:`A BCDR design should centrally govern backups across environments (for example, with Azure Backup, Backup center, and Azure Business Continuity Center), protect them from tampering, and routinely test restoration against recovery objectives.`},

{d:"BPR",s:`Servers across Azure, on-premises, and other clouds must be patched consistently. Which solution fits?`,
o:[`Azure Update Manager with Azure Arc`,`Manual patching by each server owner`,`Azure Backup instant restore`,`Defender for Storage scans`],
a:[0],
e:`Azure Update Manager assesses and deploys updates for Azure VMs and Arc-enabled servers across environments, with schedules and compliance reporting. Defender Vulnerability Management helps prioritize what to fix.`},

{d:"BPR",s:`Which metric best shows whether an organization can survive a ransomware attack without paying?`,
o:[`Tested recovery time for critical systems`,`Number of firewall rules configured`,`Percentage of users with long passwords`,`Count of security tools purchased`],
a:[0],
e:`If critical systems can be restored from protected backups within acceptable recovery time and point objectives, the organization doesn't depend on paying the ransom.`},

{d:"BPR",s:`Which Microsoft resource provides diagrams of Microsoft security capabilities and how they integrate with each other and third-party tools?`,
o:[`The Cybersecurity Reference Architectures (MCRA)`,`The Azure pricing calculator and TCO tools`,`The Microsoft 365 public roadmap site`,`The Azure status page`],
a:[0],
e:`MCRA describes Microsoft's cybersecurity capabilities, how they map to Zero Trust and common architectures, and how they integrate with multicloud and third-party technologies.`},

{d:"BPR",s:`Which framework provides prescriptive, cloud-agnostic security controls that Defender for Cloud uses by default?`,
o:[`The Microsoft cloud security benchmark`,`The Azure Well-Architected cost pillar`,`The MITRE ATT&CK for ICS matrix of techniques`,`The Microsoft 365 adoption guide`],
a:[0],
e:`MCSB provides security controls and guidance across domains such as network, identity, data, and DevOps, with mappings to standards like CIS and NIST. It's Defender for Cloud's default standard.`},

{d:"BPR",s:`Which practice best protects against software supply chain attacks?`,
o:[`Verify dependencies; sign and scan artifacts`,`Download libraries from any public mirror available`,`Give build agents Owner rights on production`,`Skip code review for trusted vendors`],
a:[0],
e:`Supply chain controls include dependency scanning, approved package sources, signed artifacts, least-privilege build pipelines, and reviewing third-party access.`},

{d:"BPR",s:`Which control best reduces insider risk for highly privileged administrators?`,
o:[`Just-in-time access with monitoring and approval`,`Permanent Global Administrator rights for all admins`,`A shared admin account for the whole IT team`,`Disabling audit logs to protect admin privacy`],
a:[0],
e:`Just-in-time, approved, and monitored privileged access limits what any insider can do and creates accountability. Insider Risk Management adds behavior-based detection.`},

{d:"BPR",s:`An organization is designing AI workloads. Which source should guide the security controls for them in Azure?`,
o:[`The MCSB guidance for AI workloads`,`The Azure pricing calculator for AI services`,`The MITRE ATT&CK Mobile matrix`,`The Microsoft 365 licensing guide`],
a:[0],
e:`The Microsoft cloud security benchmark includes AI security guidance — such as protecting models, data, and AI endpoints — that Defender for Cloud can assess.`},

{d:"BPR",s:`What does the Zero Trust adoption framework help an organization do?`,
o:[`Plan Zero Trust by business scenario, in phases`,`Replace every firewall with a single cloud product`,`Certify the organization as Zero Trust compliant`,`Remove the need for identity verification`],
a:[0],
e:`The Zero Trust adoption framework organizes adoption into business scenarios — such as rapidly modernizing security posture, securing remote work, and preventing business damage from a breach — with phased, measurable steps.`},

{d:"BPR",s:`Which is one of the three Zero Trust principles?`,
o:[`Use least-privilege access`,`Trust the corporate network`,`Verify users once a year`,`Allow all internal traffic`],
a:[0],
e:`Zero Trust rests on verify explicitly, use least-privilege access, and assume breach.`},

{d:"BPR",s:`Which part of the Cloud Adoption Framework provides guidance for security throughout the cloud adoption journey?`,
o:[`The Secure methodology`,`The Migrate methodology`,`The Plan methodology`,`The Innovate methodology`],
a:[0],
e:`The CAF Secure methodology describes how to improve security over the adoption journey, covering risk insights, security integration, and resilience, alongside the Govern and Manage methodologies.`},

{d:"BPR",s:`An organization wants a repeatable, policy-governed foundation for new Azure subscriptions. What should the architect recommend?`,
o:[`Azure landing zones with a management group hierarchy`,`One subscription shared by every application team`,`Manually configured subscriptions per request`,`A separate Microsoft Entra tenant per workload`],
a:[0],
e:`Azure landing zones provide a scalable architecture with management groups, policy-driven governance, identity, networking, and management baselines, so new subscriptions inherit security controls.`},

{d:"BPR",s:`In an Azure landing zone design, where should security policies be assigned so they apply to all application subscriptions?`,
o:[`At a management group above the subscriptions`,`On each individual resource after deployment`,`In each application's source code repository`,`At the tenant's company branding settings`],
a:[0],
e:`Assigning Azure Policy and RBAC at management groups lets governance inherit down to every subscription in the hierarchy, including new ones.`},

{d:"BPR",s:`Which Azure Well-Architected Framework pillar covers protecting workloads against threats?`,
o:[`Security`,`Cost Optimization`,`Performance Efficiency`,`Operational Excellence`],
a:[0],
e:`The Security pillar provides design principles and recommendations for confidentiality, integrity, and availability of workloads. The other pillars are Reliability, Cost Optimization, Operational Excellence, and Performance Efficiency.`},

{d:"BPR",s:`What's the core idea of a DevSecOps process?`,
o:[`Build security checks into every stage`,`Add a security review only after production release`,`Let the security team write all application code`,`Remove automated testing to speed up delivery`],
a:[0],
e:`DevSecOps "shifts left," building security into planning, coding, building, and deployment — with threat modeling, code and secret scanning, dependency checks, and IaC scanning in pipelines.`},

{d:"BPR",s:`Which tool set helps find exposed secrets, vulnerable dependencies, and code flaws in GitHub repositories?`,
o:[`GitHub Advanced Security`,`Azure Update Manager`,`Microsoft Purview eDiscovery`,`Azure Bastion`],
a:[0],
e:`GitHub Advanced Security provides secret scanning, code scanning, and dependency review. Defender for Cloud DevOps security can bring these findings into posture management.`},

{d:"BPR",s:`An organization wants employees to use generative AI safely. What should the AI adoption strategy include first?`,
o:[`Governance, approved tools, and data controls`,`A ban on every AI tool with no alternatives`,`Unrestricted use of any public AI service`,`AI use only by the security team`],
a:[0],
e:`A secure AI adoption strategy defines governance and acceptable use, provides approved AI tools, protects sensitive data with labels and DLP, and monitors AI use, rather than banning AI or allowing everything.`},

{d:"BPR",s:`Which CAF governance practice helps keep security standards enforced automatically as teams deploy resources?`,
o:[`Policy as code with Azure Policy`,`Monthly spreadsheets of resources`,`Manual approvals for every deployment`,`Separate tenants for each developer`],
a:[0],
e:`Defining governance as code with Azure Policy initiatives, assigned at management groups and versioned in source control, enforces standards consistently and at scale.`},

{d:"SOI",s:`An organization wants detection and response across endpoints, identities, email, and cloud apps, plus third-party logs. What should the architect recommend?`,
o:[`Defender XDR with Microsoft Sentinel`,`Defender for Endpoint alone`,`Azure Monitor metrics and alerts alone`,`A separate SIEM for each security product`],
a:[0],
e:`Defender XDR correlates Microsoft workload signals, and Sentinel adds SIEM for third-party and custom data, with both managed together in the Defender portal.`},

{d:"SOI",s:`Microsoft 365 activity must be retained and searchable for forensic investigations for a year. Which solution fits?`,
o:[`Microsoft Purview Audit (Premium)`,`Defender for Endpoint timeline`,`Microsoft Secure Score history reports`,`Azure Advisor security recommendations`],
a:[0],
e:`Audit (Premium) retains key workload audit records for a year by default (longer with add-ons or custom policies) and adds intelligent insights for investigations.`},

{d:"SOI",s:`An organization has workloads in AWS and GCP. How should it centralize their security logs?`,
o:[`Ingest them into Sentinel with connectors`,`Leave each cloud's logs only in that cloud`,`Email daily log exports to the SOC`,`Store them in a shared Excel workbook`],
a:[0],
e:`Sentinel has connectors for AWS (such as CloudTrail via S3) and GCP, so the SOC can correlate multicloud activity in one place. Defender for Cloud connectors cover posture.`},

{d:"SOI",s:`Common response steps, like isolating devices and disabling users, should run consistently and fast. What should the design include?`,
o:[`SOAR with playbooks and XDR automation`,`Manual steps documented in a wiki only`,`A rule that closes all low-severity incidents`,`Separate tools with no integration`],
a:[0],
e:`Automation rules and playbooks in Sentinel, plus automated investigation and response and attack disruption in Defender XDR, provide SOAR capabilities that standardize and accelerate response.`},

{d:"SOI",s:`How should an architect evaluate whether detections cover an organization's most likely threats?`,
o:[`Map detections to MITRE ATT&CK techniques`,`Count the number of analytics rules enabled`,`Compare the SOC headcount to peers`,`Check how many alerts were closed`],
a:[0],
e:`Mapping detections to ATT&CK techniques — Enterprise, Mobile, or ICS as relevant — shows coverage gaps against techniques used by threat actors that target the organization.`},

{d:"SOI",s:`A manufacturer runs industrial control systems. Which MITRE ATT&CK matrix should guide its OT detection coverage?`,
o:[`ATT&CK for ICS`,`ATT&CK for Mobile`,`ATT&CK for Enterprise only`,`ATT&CK for Containers only`],
a:[0],
e:`ATT&CK for ICS describes adversary behavior against industrial control systems, which differs from IT-focused enterprise techniques.`},

{d:"SOI",s:`Which practice should a SOC workflow design include to find threats that evade existing detections?`,
o:[`Running hypothesis-driven hunts`,`Closing incidents after 24 hours`,`Disabling noisy data sources`,`Reviewing alerts once a month`],
a:[0],
e:`Proactive hunting with hypotheses based on threat intelligence uncovers activity that rules miss, and successful hunts become new detections.`},

{d:"SOI",s:`AI agents across the organization need governed identities and access policies like other identities. What should the architect recommend?`,
o:[`Entra Agent ID with Conditional Access`,`Shared user accounts for all agents`,`API keys embedded in each agent`,`One Global Administrator account per agent`],
a:[0],
e:`Microsoft Entra Agent ID gives agents their own identities, created from blueprints, so Conditional Access, ID Protection, governance, and logging apply to them.`},

{d:"SOI",s:`Partners should prove facts, such as current employment, with credentials they control, without the organization federating with each partner. Which technology fits?`,
o:[`Microsoft Entra Verified ID`,`Password hash synchronization`,`Cross-tenant synchronization`,`Seamless single sign-on`],
a:[0],
e:`Verified ID implements decentralized identity with verifiable credentials that holders store and present, and verifiers can check them without direct integration with the issuer.`},

{d:"SOI",s:`Which design best supports modern authentication and authorization for a Zero Trust strategy?`,
o:[`Conditional Access with risk and CAE`,`Network location as the only access control`,`Passwords that never expire and no MFA`,`One policy that allows every sign-in`],
a:[0],
e:`Conditional Access evaluates identity, device, location, and risk signals, and continuous access evaluation revokes access quickly when conditions change — central to verifying explicitly.`},

{d:"SOI",s:`How should an architect validate that Conditional Access policies align with Zero Trust?`,
o:[`Check coverage of users, apps, and risks`,`Count the total number of policies created`,`Confirm that every policy is in report-only mode`,`Verify that admins are excluded from all policies`],
a:[0],
e:`Validate that policies cover all users and apps (with minimal, monitored exclusions), require strong authentication, use device and risk signals, and block legacy authentication. Gaps, not policy count, matter.`},

{d:"SOI",s:`Changes to Conditional Access policies themselves should require phishing-resistant MFA. What should the design use?`,
o:[`Protected actions`,`Named locations for admins`,`Terms of use`,`Report-only mode for policies`],
a:[0],
e:`Protected actions tie sensitive operations, such as modifying Conditional Access policies, to an authentication context that Conditional Access can require stronger authentication for.`},

{d:"SOI",s:`Which requirement best hardens on-premises Active Directory Domain Services?`,
o:[`Admin tiering plus Windows LAPS`,`Domain Admin rights for all helpdesk staff`,`The same local admin password on every server`,`NTLMv1 enabled for legacy compatibility`],
a:[0],
e:`AD hardening includes separating privileged accounts, using LAPS for unique local admin passwords, disabling legacy protocols, using the Protected Users group, and monitoring with Defender for Identity.`},

{d:"SOI",s:`An organization needs centralized management of secrets, keys, and certificates for apps, with HSM-backed keys for sensitive workloads. What should the architect recommend?`,
o:[`Key Vault, plus Managed HSM where needed`,`Secrets stored in each app's config file`,`Certificates emailed to developers`,`A shared spreadsheet of keys`],
a:[0],
e:`Key Vault centralizes secrets, keys, and certificates with RBAC, logging, and rotation. Managed HSM offers single-tenant, FIPS 140-3 Level 3 validated HSMs for the most sensitive keys.`},

{d:"SOI",s:`Users need secure access to SaaS apps, on-premises web apps, and private resources. Which combination fits a Zero Trust design?`,
o:[`Entra SSO, Conditional Access, Private Access`,`A single VPN that allows full network access`,`Separate passwords for each application`,`Public exposure of all internal apps`],
a:[0],
e:`Centralizing app access on Entra ID with SSO and Conditional Access, and using Private Access for private apps, applies identity-based, per-app controls instead of broad network trust.`},

{d:"SOI",s:`An organization uses AWS and GCP alongside Azure. How should identities be designed?`,
o:[`Federate everything with Entra ID`,`Create separate local accounts in each cloud`,`Share one root account across clouds`,`Use static access keys for all admins`],
a:[0],
e:`Federating other clouds' consoles and workloads with Microsoft Entra ID centralizes authentication, MFA, Conditional Access, and lifecycle management, and avoids standing local credentials.`},

{d:"SOI",s:`In Microsoft's enterprise access model, which plane includes identity systems and other assets that control the whole environment?`,
o:[`The control plane`,`The data and workload plane`,`The user access plane`,`The app access plane`],
a:[0],
e:`The enterprise access model separates the control plane (identity and other systems with broad control), management plane, data/workload plane, and user and app access paths, replacing the older tiering model.`},

{d:"SOI",s:`Admins who manage the control plane should use which kind of device?`,
o:[`A privileged access workstation`,`Any personal laptop with antivirus`,`A shared kiosk in the office`,`Their regular email device`],
a:[0],
e:`Privileged access workstations are hardened, dedicated devices for sensitive administration, reducing the risk that phishing or malware on productivity devices leads to privileged compromise.`},

{d:"SOI",s:`How should an architect evaluate the governance of privileged Microsoft Entra roles?`,
o:[`Check PIM, approvals, and access reviews`,`Count how many Global Administrators exist only`,`Verify that admins never use MFA`,`Confirm that all roles are permanently active`],
a:[0],
e:`Strong governance uses PIM for just-in-time roles, approvals for the most privileged roles, entitlement management for access requests, and access reviews to remove unneeded access.`},

{d:"SOI",s:`Which design best protects AD DS against common attacks like credential theft and lateral movement?`,
o:[`Tiered admin logons plus Defender for Identity`,`Let domain admins sign in to every workstation`,`Disable all auditing on domain controllers`,`Use the krbtgt password indefinitely`],
a:[0],
e:`Prevent privileged credentials from being exposed on lower-trust systems, rotate the krbtgt account periodically, and monitor DCs with Defender for Identity for attacks like DCSync and pass-the-ticket.`},

{d:"SOI",s:`Administration of SaaS apps and multicloud consoles should be secured. What should the design require?`,
o:[`Phishing-resistant MFA and JIT admin roles`,`Shared admin accounts for each SaaS app`,`Long-lived access keys for console sign-in`,`Admin access from any device without checks`],
a:[0],
e:`Use separate admin identities, phishing-resistant authentication, just-in-time elevation, and compliant privileged devices for tenant and cloud console administration.`},

{d:"SOI",s:`An organization needs to discover and right-size excessive permissions across Azure, AWS, and GCP. Which capability fits?`,
o:[`Cloud infrastructure entitlement management (CIEM)`,`Self-service password reset for admins`,`Microsoft Purview eDiscovery (Premium) cases`,`Azure Update Manager`],
a:[0],
e:`CIEM analyzes identities' granted versus used permissions across clouds and recommends removing excessive access. Defender for Cloud provides CIEM capabilities as part of Defender CSPM.`},

{d:"SOI",s:`Admins need remote access to privileged systems from home. Which design is most secure?`,
o:[`PAWs plus Bastion or Private Access`,`Direct RDP over the internet to each server`,`A shared VPN account for all admins`,`Remote desktop tools installed on servers by users`],
a:[0],
e:`Combine privileged access workstations, strong Conditional Access, and brokered, identity-aware access such as Azure Bastion or Private Access, avoiding exposed management ports.`},

{d:"SOI",s:`How should access reviews be evaluated as part of privileged access governance?`,
o:[`Whether they run regularly and remove access automatically`,`Whether reviewers can approve everyone without reading`,`Whether they run once when the tenant is created`,`Whether they exclude all privileged roles`],
a:[0],
e:`Effective reviews recur, use appropriate reviewers, cover privileged roles and guests, and apply results automatically so unneeded access is actually removed.`},

{d:"SOI",s:`A regulation requires that personal data be encrypted and access to it logged. What should the architect do first?`,
o:[`Map requirements to specific controls`,`Buy every available compliance add-on`,`Ask each team to interpret it on their own`,`Wait for an audit to find the gaps`],
a:[0],
e:`Architects map regulatory requirements to concrete controls — such as encryption with managed keys, access control, and audit logging — and then to technologies and policies that implement them.`},

{d:"SOI",s:`Which Microsoft Purview solution helps track compliance against regulations with assessments and improvement actions?`,
o:[`Compliance Manager`,`eDiscovery (Premium)`,`Insider Risk Management`,`Communication Compliance`],
a:[0],
e:`Compliance Manager provides regulation templates, improvement actions, and a compliance score to track progress. Other Purview solutions implement specific controls.`},

{d:"SOI",s:`Azure resources must comply with a data residency requirement that allows only two EU regions. Which control enforces it?`,
o:[`An Azure Policy for allowed locations`,`A Defender for Cloud alert rule`,`A Purview sensitivity label`,`An Entra ID access review`],
a:[0],
e:`The Allowed locations built-in policy denies deployments to other regions. Assigned at a management group, it applies to all subscriptions beneath it.`},

{d:"SOI",s:`How can an architect validate that Azure workloads align with PCI DSS?`,
o:[`Add PCI DSS to Defender for Cloud`,`Check Microsoft Secure Score for Microsoft 365`,`Review the Entra ID sign-in logs`,`Count the number of firewalls deployed`],
a:[0],
e:`Defender for Cloud's regulatory compliance dashboard assesses resources against standards such as PCI DSS, showing passing and failing controls.`},

{d:"SOI",s:`Which design best enforces a compliance control that all storage accounts use customer-managed keys?`,
o:[`An Azure Policy in deny or audit mode`,`A wiki page describing the rule`,`A quarterly email reminder to owners`,`A Sentinel workbook of storage accounts`],
a:[0],
e:`Azure Policy can audit or deny resources that don't meet requirements, such as storage accounts without customer-managed keys, providing continuous enforcement and evidence.`},

{d:"SOI",s:`A requirement says "retain financial records for seven years and prevent deletion." Which Purview capability implements it?`,
o:[`Retention labels that declare records`,`Sensitivity labels with encryption`,`Communication Compliance policies`,`Information Barriers between departments`],
a:[0],
e:`Records management uses retention labels that keep content for a set period and, when declared as records, restrict editing and deletion.`},

{d:"SOI",s:`What's a sound approach when Microsoft-managed controls are part of a compliance assessment?`,
o:[`Use Microsoft's audit reports for those controls`,`Ignore them because they can't be verified`,`Duplicate them with customer controls anyway`,`Remove those workloads from the assessment`],
a:[0],
e:`Under shared responsibility, Microsoft documents its controls in audit reports on the Service Trust Portal, and Compliance Manager credits Microsoft-managed actions. Customers focus on their own controls.`},

{d:"SOI",s:`An organization must detect and respond to sign-in risk across its workforce. Which component belongs in the identity design?`,
o:[`ID Protection with risk-based policies`,`A static list of trusted IPs only`,`Disabled MFA for frequent travelers`,`A weekly manual review of all sign-ins`],
a:[0],
e:`ID Protection scores user and sign-in risk using Microsoft's signals, and risk-based Conditional Access requires MFA or password changes automatically.`},

{d:"SOI",s:`Which logging design best supports investigations across Microsoft 365, Azure, and on-premises systems?`,
o:[`Central collection in Sentinel with defined retention`,`Each system keeps its own logs for seven days`,`Logs collected only after an incident occurs`,`Screenshots of consoles saved by analysts`],
a:[0],
e:`Centralizing security-relevant logs in Sentinel (with analytics and data lake tiers for retention) and Purview Audit for Microsoft 365 enables correlation and long-term investigation.`},

{d:"SOI",s:`What should a SOC's incident management design include so lessons improve defenses?`,
o:[`Holding reviews that update detections`,`Deleting incident records after closure`,`Blaming individual analysts for misses`,`Ignoring false positives entirely`],
a:[0],
e:`Post-incident reviews identify gaps in prevention, detection, and response, and feed improvements into analytics rules, playbooks, and controls.`},

{d:"SOI",s:`How should an organization manage certificates for hundreds of web apps to avoid outages from expired certificates?`,
o:[`Automate renewal through Key Vault`,`Track expiry dates in a spreadsheet`,`Issue certificates that never expire`,`Let each team buy certificates manually`],
a:[0],
e:`Key Vault can issue and auto-renew certificates through integrated certificate authorities, and services such as App Service can use the renewed certificates automatically.`},

{d:"INF",s:`Which tool gives a single posture view across Azure, AWS, GCP, and on-premises servers?`,
o:[`Microsoft Defender for Cloud`,`Azure Advisor recommendations`,`Microsoft Purview Audit`,`Azure Bastion session logs`],
a:[0],
e:`Defender for Cloud assesses posture across Azure, AWS, GCP, and Arc-enabled servers against MCSB and other standards, with recommendations and secure score.`},

{d:"INF",s:`Which score measures security posture across Microsoft 365, identity, and devices?`,
o:[`Microsoft Secure Score`,`Compliance score`,`Azure Advisor reliability score`,`Microsoft Adoption Score`],
a:[0],
e:`Microsoft Secure Score in the Defender portal measures posture for identities, devices, apps, and data across Microsoft 365 workloads, with improvement actions.`},

{d:"INF",s:`Which Defender for Cloud plans should be selected to protect VMs, SQL databases, and Kubernetes clusters?`,
o:[`Defender for Servers, Databases, Containers`,`Defender for DNS, Key Vault, and Storage`,`Foundational CSPM only, with no workload plans`,`Defender for App Service for all workloads`],
a:[0],
e:`Workload protection plans match workload types: Defender for Servers for VMs, Defender for Databases for SQL and other databases, and Defender for Containers for Kubernetes and registries.`},

{d:"INF",s:`On-premises servers need Azure Policy, Defender for Servers, and Update Manager. What should the design use?`,
o:[`Azure Arc-enabled servers`,`Azure Migrate only`,`Azure Bastion hosts in each site`,`A site-to-site VPN connection only`],
a:[0],
e:`Azure Arc projects on-premises and other cloud servers into Azure, so Azure management and security services apply to them without migration.`},

{d:"INF",s:`An organization wants to discover internet-facing assets it doesn't know about, such as forgotten subdomains. What should the architect recommend?`,
o:[`Defender External Attack Surface Management`,`Defender for Storage malware scanning`,`Azure Policy allowed locations`,`Microsoft Purview Data Map`],
a:[0],
e:`Defender EASM continuously discovers and inventories externally exposed assets from known seeds and flags vulnerabilities and risky configurations.`},

{d:"INF",s:`Which Microsoft solution prioritizes posture issues by showing attack paths to critical assets across domains, such as identity, endpoints, and cloud?`,
o:[`Microsoft Security Exposure Management`,`Microsoft Purview Compliance Manager`,`Azure Monitor workbooks and alerts`,`Microsoft Intune device compliance reports`],
a:[0],
e:`Security Exposure Management unifies exposure data across products, defines critical assets, shows attack paths and choke points, and tracks initiatives and metrics.`},

{d:"INF",s:`In Security Exposure Management, what helps focus remediation on a business goal, such as ransomware resilience?`,
o:[`Security initiatives with metrics`,`A single global secure score only`,`Daily email digests of alerts`,`Separate tenants per goal`],
a:[0],
e:`Initiatives group related recommendations and metrics around goals like ransomware protection or cloud security, so teams can track progress over time.`},

{d:"INF",s:`What should a posture management process prioritize first?`,
o:[`Exposures on attack paths to critical assets`,`Low-severity findings on test systems`,`The oldest recommendations regardless of risk`,`Findings that are easiest to dismiss`],
a:[0],
e:`Prioritize issues that attackers can actually exploit to reach critical assets — attack path choke points — rather than treating every finding equally.`},

{d:"INF",s:`Which requirement best secures Windows and Linux servers across environments?`,
o:[`EDR, baselines, patching, and least privilege`,`Antivirus signatures updated once a year`,`The same local admin password on every server`,`Open management ports for easier support`],
a:[0],
e:`Server security requirements include EDR (such as Defender for Endpoint), security baselines, timely patching, vulnerability management, and restricted administrative access.`},

{d:"INF",s:`Company and personal mobile devices access corporate email. Which design protects data on personal devices without full device management?`,
o:[`Intune app protection policies`,`Full device wipe on enrollment`,`Blocking all personal devices`,`A shared mailbox password for all devices`],
a:[0],
e:`App protection policies (MAM) protect corporate data inside managed apps — preventing copy-paste or saving to personal locations — without enrolling personal devices.`},

{d:"INF",s:`A factory network has PLCs and HMIs that can't run agents. How can it monitor them for threats?`,
o:[`Defender for IoT network sensors`,`Defender for Endpoint on each PLC`,`Intune compliance policies`,`Azure Bastion sessions`],
a:[0],
e:`Defender for IoT uses agentless network sensors connected to SPAN ports to discover OT/ICS assets, identify vulnerabilities, and detect threats without affecting operations.`},

{d:"INF",s:`Which is a key security requirement for IoT devices?`,
o:[`Unique identities and signed updates`,`A shared default password for all devices`,`Open inbound ports for remote support`,`No monitoring, to save bandwidth`],
a:[0],
e:`IoT security requirements include unique device identities and credentials, secure boot and signed firmware updates, network segmentation, and monitoring.`},

{d:"INF",s:`Which source should define security baselines for Windows clients and servers?`,
o:[`Microsoft baselines and CIS benchmarks`,`Each user's personal preferences`,`Default settings with no changes`,`The device vendor's marketing guide`],
a:[0],
e:`Microsoft security baselines (deployable with Intune or Group Policy) and CIS benchmarks provide tested configuration standards, which Defender Vulnerability Management can assess.`},

{d:"INF",s:`Every server shares the same local administrator password, enabling lateral movement. What should the architect recommend?`,
o:[`Windows LAPS`,`Seamless SSO`,`Azure Bastion`,`Group-based licensing`],
a:[0],
e:`Windows LAPS gives each device a unique, rotated local admin password stored in Microsoft Entra ID or AD, so one compromised password doesn't unlock every machine.`},

{d:"INF",s:`Where can Windows LAPS back up local administrator passwords for cloud-joined devices?`,
o:[`Microsoft Entra ID`,`Azure Key Vault`,`A SharePoint list`,`The device's registry`],
a:[0],
e:`Windows LAPS can back up passwords to Microsoft Entra ID (for Entra-joined and hybrid devices) or to on-premises AD, with access controlled by roles.`},

{d:"INF",s:`Which source should define security baselines for Azure PaaS services such as App Service and Azure SQL?`,
o:[`The MCSB service baselines`,`The Azure pricing pages`,`Each developer's preferences`,`The Azure status page`],
a:[0],
e:`Microsoft publishes security baselines for Azure services based on the Microsoft cloud security benchmark, describing the controls each service supports.`},

{d:"INF",s:`Which requirement best secures public web workloads?`,
o:[`WAF, TLS, and managed identities`,`Unencrypted HTTP for faster responses`,`Database connection strings in client code`,`Admin pages exposed to the internet`],
a:[0],
e:`Web workload requirements include WAF protection, HTTPS with modern TLS, secure authentication, managed identities for back-end access, and secrets in Key Vault.`},

{d:"INF",s:`Which is a key security requirement for containers?`,
o:[`Using scanned, signed, trusted images`,`Running every container as root`,`Pulling images from any public source`,`Storing secrets in image layers`],
a:[0],
e:`Container requirements include minimal base images, vulnerability scanning, image signing, trusted private registries, non-root execution, and secrets from a vault.`},

{d:"INF",s:`Which requirement best secures a Kubernetes cluster?`,
o:[`Entra auth, network policies, admission control`,`A public API server with static tokens`,`Cluster-admin rights for every developer`,`No limits on what images can run`],
a:[0],
e:`Orchestration requirements include identity-based access with RBAC, private or restricted API servers, network policies, policy-based admission control, and runtime threat detection with Defender for Containers.`},

{d:"INF",s:`IoT workloads in Azure send telemetry to cloud services. Which requirement should the design include?`,
o:[`Per-device X.509 or TPM authentication`,`Shared access keys reused by all devices`,`Unauthenticated telemetry endpoints`,`Devices with permanent admin rights in Azure`],
a:[0],
e:`Each device should authenticate individually (for example, with X.509 certificates through IoT Hub or Device Provisioning Service), with least-privilege access and the ability to revoke a single device.`},

{d:"INF",s:`Which control is most important when evaluating Azure AI services security?`,
o:[`Managed identities, private access, content safety`,`Public endpoints with shared API keys`,`Training data stored without access controls`,`Disabled logging to protect user privacy`],
a:[0],
e:`Secure AI services with Microsoft Entra authentication or managed identities instead of keys, private endpoints, guardrails and content safety, and monitoring with Defender for AI Services.`},

{d:"INF",s:`What's the right baseline approach for SaaS apps the organization uses?`,
o:[`SSO, Conditional Access, app governance`,`Unique passwords stored by each user`,`No visibility into which SaaS apps exist`,`Admin accounts shared across vendors`],
a:[0],
e:`SaaS baselines include integrating apps with Entra ID for SSO and Conditional Access, discovering shadow IT with Defender for Cloud Apps, and governing app permissions and configurations.`},

{d:"INF",s:`Which network design principle aligns with Zero Trust?`,
o:[`Segment and inspect between segments`,`Trust everything inside the corporate network`,`Use one flat network for all workloads`,`Allow all outbound traffic without inspection`],
a:[0],
e:`Zero Trust networking assumes breach: segment workloads, filter and inspect east-west and north-south traffic, use private connectivity, and avoid implicit trust based on location.`},

{d:"INF",s:`Remote users' internet traffic must be filtered and inspected without backhauling it through the datacenter. What should the architect evaluate?`,
o:[`Microsoft Entra Internet Access`,`A larger datacenter firewall`,`A site-to-site VPN for each user`,`Azure ExpressRoute`],
a:[0],
e:`Internet Access is a cloud-delivered secure web gateway, part of Microsoft's Security Service Edge, that applies web filtering and Conditional Access-aware policies wherever users are.`},

{d:"INF",s:`Users must be prevented from signing in to other organizations' Microsoft 365 tenants from corporate devices, to reduce data exfiltration. What fits?`,
o:[`Universal tenant restrictions`,`A Conditional Access policy for each app`,`An NSG blocking Microsoft 365 IPs`,`Disabling guest access in your tenant`],
a:[0],
e:`Tenant restrictions v2, enforced through the Global Secure Access Microsoft traffic profile, blocks access to unauthorized external tenants' Microsoft services from managed devices and networks.`},

{d:"INF",s:`An organization wants to replace its legacy VPN for private apps with per-app, identity-based access. What should be evaluated?`,
o:[`Microsoft Entra Private Access`,`Azure DDoS Protection`,`Azure Front Door with WAF policies`,`Microsoft Purview DLP for endpoints`],
a:[0],
e:`Private Access provides Zero Trust network access to private apps with per-app segmentation and Conditional Access, reducing the broad network exposure of VPNs.`},

{d:"INF",s:`What does Security Service Edge (SSE) typically combine?`,
o:[`Secure web gateway, ZTNA, and cloud app security`,`Backup, restore, and disaster recovery`,`Patching, imaging, and device enrollment`,`Billing, licensing, and cost management`],
a:[0],
e:`SSE converges secure web gateway, Zero Trust network access, and CASB capabilities into a cloud service. Microsoft's SSE includes Entra Internet Access, Private Access, and Defender for Cloud Apps.`},

{d:"INF",s:`Which Azure network design best protects PaaS data services from internet exposure?`,
o:[`Private endpoints with public access disabled`,`Public endpoints with IP allow lists for everyone`,`Shared access keys distributed to all apps`,`Service tags allowing the entire internet`],
a:[0],
e:`Private endpoints place PaaS services on private IPs in your network, and disabling public network access removes the internet attack surface.`},

{d:"INF",s:`A hub-and-spoke Azure network needs centralized traffic inspection. Which component belongs in the hub?`,
o:[`Azure Firewall`,`Azure Bastion only`,`A storage account`,`A Key Vault`],
a:[0],
e:`A central Azure Firewall (or NVA) in the hub inspects traffic between spokes, to on-premises, and to the internet, with user-defined routes or Virtual WAN routing intent.`},

{d:"INF",s:`Which component protects public Azure endpoints from volumetric attacks?`,
o:[`Azure DDoS Protection`,`Azure Key Vault with purge protection`,`Microsoft Purview`,`Azure Policy allowed locations`],
a:[0],
e:`Azure DDoS Protection (Network or IP Protection) adds adaptive tuning, telemetry, and rapid response for public IPs, beyond Azure's default infrastructure protection.`},

{d:"INF",s:`Which control reduces risk when admins must reach VMs in Azure?`,
o:[`Bastion or just-in-time access`,`Public IPs with RDP open to all`,`Shared local admin accounts`,`Disabling NSGs on VM subnets`],
a:[0],
e:`Bastion provides brokered RDP/SSH without public IPs, and JIT access opens management ports only when needed, from approved sources.`},

{d:"INF",s:`Which evaluation criterion matters most for network designs supporting AI workloads?`,
o:[`Private model and data access with egress control`,`Public endpoints for faster experimentation`,`Unrestricted outbound internet access`,`Shared keys for every client app`],
a:[0],
e:`AI workloads should reach models, data, and tools through private networking, with controlled egress and gateways (such as API Management) to enforce authentication and policies.`},

{d:"INF",s:`What should a design for container orchestration include to limit pod-to-pod traffic?`,
o:[`Kubernetes network policies`,`A larger node pool`,`Public load balancers for every service`,`A single namespace for all apps`],
a:[0],
e:`Network policies restrict which pods and namespaces can communicate, enforcing segmentation inside the cluster.`},

{d:"APD",s:`How should an architect measure and track Microsoft 365 security posture improvements?`,
o:[`The Microsoft Secure Score`,`The number of Teams channels created`,`The volume of email sent per day`,`The count of SharePoint sites`],
a:[0],
e:`Secure Score quantifies posture across Microsoft 365 workloads, tracks history, and recommends improvement actions, which helps measure progress.`},

{d:"APD",s:`Phishing with malicious links and attachments is the top threat. Which solution should the design include?`,
o:[`Defender for Office 365`,`Defender for Storage malware scanning`,`Azure Firewall application rules`,`Intune device compliance policies`],
a:[0],
e:`Defender for Office 365 provides Safe Links, Safe Attachments, anti-phishing, and automated investigation for email and collaboration tools.`},

{d:"APD",s:`An organization needs visibility into and control over unsanctioned SaaS apps. Which solution fits?`,
o:[`Microsoft Defender for Cloud Apps`,`Microsoft Defender for Identity`,`Azure Update Manager with Arc`,`Microsoft Purview Audit`],
a:[0],
e:`Defender for Cloud Apps discovers shadow IT, assesses app risk, governs OAuth apps, and applies session controls through Conditional Access app control.`},

{d:"APD",s:`Corporate and personal devices need configuration, compliance checks, and app protection. Which solution fits?`,
o:[`Microsoft Intune`,`Azure Arc`,`Microsoft Sentinel`,`Azure Bastion`],
a:[0],
e:`Intune manages devices and apps, enforces compliance that Conditional Access uses, and applies app protection policies for personal devices.`},

{d:"APD",s:`Sensitive documents in Microsoft 365 must be classified, protected, and kept from leaving the organization. Which solutions fit?`,
o:[`Sensitivity labels and DLP`,`Azure Firewall and NSGs`,`Defender for Servers and JIT`,`Azure Policy and resource locks`],
a:[0],
e:`Sensitivity labels classify and protect content with encryption and markings, and DLP policies prevent risky sharing across Microsoft 365 and endpoints.`},

{d:"APD",s:`Before deploying Microsoft 365 Copilot, what's the most important data security step?`,
o:[`Fix oversharing and label content`,`Turn off all audit logging`,`Give Copilot global admin rights`,`Disable sensitivity labels`],
a:[0],
e:`Copilot respects existing permissions, so oversharing becomes discoverable. Fix overshared sites, apply sensitivity labels, and use DSPM for AI and DLP for Copilot to protect sensitive data.`},

{d:"APD",s:`Copilot must not use files labeled Highly Confidential in its responses. Which control fits?`,
o:[`A DLP policy for the Copilot location`,`A retention label set to delete after a year`,`An NSG on the SharePoint subnet`,`A Conditional Access policy for guests`],
a:[0],
e:`Purview DLP can target the Microsoft 365 Copilot location and exclude content with specific sensitivity labels from Copilot processing.`},

{d:"APD",s:`An architect must identify threats to a new business-critical app before it's built. What should the team do?`,
o:[`Threat modeling, such as with STRIDE`,`Penetration testing after release only`,`A cost analysis of the hosting plan`,`A review of user interface colors`],
a:[0],
e:`Threat modeling (for example, STRIDE with the Microsoft Threat Modeling Tool) identifies threats to the design early, when mitigations are cheapest.`},

{d:"APD",s:`Which approach best describes a full lifecycle application security strategy?`,
o:[`Security in every lifecycle phase`,`A single security test right before launch`,`Security reviews only after an incident`,`Leaving security to the hosting provider`],
a:[0],
e:`Following a secure development lifecycle (such as Microsoft SDL) builds security into requirements, design, implementation, verification, release, and response.`},

{d:"APD",s:`Which practice should be standard for securing the development process?`,
o:[`Code review plus automated scanning`,`Developers committing directly to production`,`Sharing service credentials in team chats`,`Disabling branch protection for speed`],
a:[0],
e:`Standards include protected branches, peer review, automated SAST, dependency, and secret scanning, and least-privilege pipelines.`},

{d:"APD",s:`An app in Azure must access Azure SQL and Storage without secrets. Which workload identity design fits?`,
o:[`Managed identities with RBAC`,`A shared user account with MFA disabled`,`Connection strings stored in code`,`Storage account keys in app settings`],
a:[0],
e:`Managed identities authenticate the app to Microsoft Entra ID automatically, and RBAC roles (or Entra database users) grant only the access it needs.`},

{d:"APD",s:`A CI/CD pipeline in GitHub must deploy to Azure without stored secrets. Which design fits?`,
o:[`A federated workload identity credential`,`A long-lived client secret`,`A personal access token in the repo`,`An administrator's own password`],
a:[0],
e:`Workload identity federation lets the pipeline exchange its GitHub-issued token for a Microsoft Entra token, with no secret to steal or rotate.`},

{d:"APD",s:`Many internal and partner APIs need consistent authentication, throttling, and monitoring. What should the design include?`,
o:[`Azure API Management with security policies`,`Each API implementing its own auth separately`,`Public APIs with no authentication`,`APIs exposed directly from databases`],
a:[0],
e:`API Management centralizes authentication (such as validate-jwt), rate limiting, IP filtering, and logging, and can protect back ends with private networking.`},

{d:"APD",s:`A web app needs protection against OWASP Top 10 attacks at the edge. What should the design include?`,
o:[`Azure Web Application Firewall`,`Azure DDoS Protection alone`,`Network security groups alone`,`Azure Key Vault certificates`],
a:[0],
e:`Azure WAF, on Front Door or Application Gateway, uses managed rule sets to block common web attacks such as SQL injection and cross-site scripting, plus custom rules and bot protection.`},

{d:"APD",s:`How should an architect evaluate the security posture of an existing portfolio of applications?`,
o:[`Inventory apps; assess by risk`,`Review only the newest application`,`Rely on each team's self-assessment alone`,`Check which apps have the most users only`],
a:[0],
e:`Inventory applications, classify them by business criticality and data sensitivity, assess them against a security baseline, and prioritize remediation by risk.`},

{d:"APD",s:`An organization needs to discover and classify sensitive data across Azure, multicloud, and on-premises sources. What should the architect evaluate?`,
o:[`Purview Data Map classification`,`Azure Advisor recommendations`,`Azure Bastion session recordings and logs`,`Microsoft Secure Score history`],
a:[0],
e:`Purview scans data sources to map and classify data, giving visibility into where sensitive data lives so protection can be prioritized.`},

{d:"APD",s:`Which approach best prioritizes mitigating threats to data?`,
o:[`Strongest controls on the most sensitive data`,`Encrypt only test data before production data`,`Treat all data identically, regardless of sensitivity`,`Delay protection until all data is classified`],
a:[0],
e:`Classify data by sensitivity and business impact, then apply the strongest controls — encryption, access restrictions, DLP, and monitoring — to the most sensitive data first.`},

{d:"APD",s:`Regulations require that the organization control and be able to revoke the keys that encrypt its Azure data at rest. What should the design use?`,
o:[`Customer-managed keys`,`Microsoft-managed keys only`,`Keys stored in application code`,`TLS encryption in transit only`],
a:[0],
e:`Customer-managed keys let the organization control key lifecycle and revoke access. Many services support them, and infrastructure encryption adds a second layer.`},

{d:"APD",s:`Which design best protects data used to ground and train AI models?`,
o:[`Classify, restrict, and monitor it`,`Copy all data into one open storage account`,`Disable logging for AI services`,`Allow any app to read the training data`],
a:[0],
e:`Protect AI data with classification and labels, least-privilege access, private networking, and monitoring through DSPM for AI and Defender for AI Services, so models don't expose sensitive data.`},

{d:"APD",s:`Which design best secures Azure SQL databases holding sensitive data?`,
o:[`Entra-only auth, private access, Defender`,`SQL authentication with shared logins`,`Public endpoint with Allow Azure services`,`Auditing disabled to improve performance`],
a:[0],
e:`Use Microsoft Entra authentication, private connectivity, TDE (with customer-managed keys if required), Always Encrypted for highly sensitive columns, auditing, and Defender for SQL.`},

{d:"APD",s:`Which design best secures Azure Cosmos DB access for applications?`,
o:[`Entra RBAC with keys disabled`,`Primary keys shared with every app`,`Public network access from anywhere`,`Read-write keys embedded in mobile apps`],
a:[0],
e:`Cosmos DB supports Microsoft Entra data-plane RBAC, and disabling key-based authentication forces apps to use identities. Private endpoints limit network exposure.`},

{d:"APD",s:`Which design best secures data in Azure Storage?`,
o:[`Entra auth, private endpoints, Defender`,`Account keys shared across teams`,`Anonymous blob access for convenience`,`SAS tokens with no expiry`],
a:[0],
e:`Use Microsoft Entra authorization with shared keys disabled, private endpoints, encryption with managed keys if required, immutability where needed, and Defender for Storage for threat detection.`},

{d:"APD",s:`Which Defender for Cloud plans should be included to detect threats to data stores?`,
o:[`Defender for Storage and Databases`,`Defender for DNS and Defender for App Service`,`Foundational CSPM recommendations only`,`Defender for Resource Manager only`],
a:[0],
e:`Defender for Storage detects malware and suspicious access to storage, and Defender for Databases detects attacks such as SQL injection and anomalous access across database services.`},

{d:"APD",s:`Data in transit between services must be protected. What should the design require?`,
o:[`TLS 1.2 or later everywhere`,`HTTP for internal traffic only`,`TLS 1.0 for legacy compatibility`,`Encryption only for data at rest`],
a:[0],
e:`Require modern TLS (1.2 or later) for all connections, including internal ones, and enforce it with service settings and Azure Policy.`},

{d:"BPR",s:`Endpoint security updates keep slipping. Which service automates Windows and Microsoft 365 Apps updates for managed devices in deployment rings?`,
o:[`Windows Autopatch`,`Azure Bastion`,`Microsoft Purview Audit`,`Defender for Storage`],
a:[0],
e:`Windows Autopatch automates updates for Windows, Microsoft 365 Apps, Edge, and Teams on Intune-managed devices, rolling them out in rings to reduce risk and patch delays.`},

{d:"BPR",s:`In Microsoft's Zero Trust guidance, what is the Rapid Modernization Plan (RaMP)?`,
o:[`A set of prioritized initiatives for fast progress`,`A plan to migrate all servers to Azure in one month`,`A licensing program for Microsoft security products`,`A checklist for decommissioning firewalls`],
a:[0],
e:`RaMP gives prioritized, practical initiatives — such as user access and productivity, data protection, and modern security operations — to make fast, measurable progress toward Zero Trust.`},

{d:"BPR",s:`An architect wants to understand which threat actors and techniques target the organization's industry. Which source fits?`,
o:[`Microsoft Defender Threat Intelligence`,`Azure Advisor security recommendations`,`Microsoft Purview Data Map`,`Azure Update Manager`],
a:[0],
e:`Defender Threat Intelligence and threat analytics reports describe actors, campaigns, and techniques, helping prioritize defenses against the threats most relevant to the organization.`},

{d:"BPR",s:`What's the difference between platform and application landing zones?`,
o:[`Platform: shared services; application: workloads`,`Platform zones host workloads; application zones host shared services`,`Platform zones are on-premises; application zones are in Azure`,`They're the same, named differently by each team`],
a:[0],
e:`Platform landing zones provide shared services such as identity, connectivity, and management, while application landing zones host workloads and inherit governance from the management group hierarchy.`},

{d:"BPR",s:`A vendor needs administrative access to one Azure subscription for a project. Which design best limits supply chain risk?`,
o:[`B2B access with JIT roles, scoping, and reviews`,`A shared admin account created for the vendor`,`Owner rights on the whole tenant indefinitely`,`The vendor's own credentials stored in a vault`],
a:[0],
e:`Give vendors their own B2B identities with just-in-time, narrowly scoped roles, strong authentication, monitoring, and access reviews, so access is attributable and removed when no longer needed.`},

{d:"BPR",s:`A workload review finds that the web, app, and data tiers can all reach each other freely. Which Well-Architected security principle applies?`,
o:[`Segment components to contain a breach`,`Optimize cost by merging all tiers`,`Scale out the data tier horizontally`,`Increase logging verbosity for all tiers`],
a:[0],
e:`The Well-Architected security pillar recommends segmentation and least privilege so a compromise of one component doesn't give attackers access to everything — an assume-breach design.`},

{d:"INF",s:`How should Google Cloud projects be brought into Defender for Cloud posture management?`,
o:[`Create a GCP connector and run its setup script`,`Install Azure Bastion in each GCP project`,`Copy GCP logs into Microsoft Purview`,`Create an Azure landing zone in GCP`],
a:[0],
e:`The GCP connector, set up with a script or Terraform in Google Cloud, lets Defender for Cloud assess GCP resources and enable workload protections such as Defender for Servers and Containers.`},

{d:"APD",s:`An application security requirement says "no secrets in code or configuration files." Which technologies meet it in Azure?`,
o:[`Managed identities and Key Vault references`,`Encrypted ZIP files of connection strings`,`Environment variables committed to Git`,`Base64-encoded keys in app settings`],
a:[0],
e:`Managed identities remove the need for credentials to Azure services, and Key Vault references let app settings pull any remaining secrets from Key Vault at runtime.`},

{d:"APD",s:`Before enabling Copilot, the organization needs to find SharePoint sites that are overshared. Which capability fits?`,
o:[`SharePoint data access governance reports`,`Defender for Storage malware scanning`,`Azure Network Watcher topology`,`Microsoft Entra Connect Health`],
a:[0],
e:`Data access governance reports identify oversharing, such as sites shared with everyone, and SharePoint Advanced Management can restrict access or content discovery while owners fix permissions.`},

{d:"APD",s:`What does infrastructure encryption add for Azure Storage data at rest?`,
o:[`A second layer of encryption at the infrastructure level`,`Encryption of data while it's being processed in memory`,`Encryption of data in transit between regions only`,`Encryption that only the storage account owner can see`],
a:[0],
e:`Infrastructure encryption encrypts data a second time at the infrastructure layer with a different key and algorithm, in addition to service-level encryption, for double encryption at rest.`},

{d:"APD",s:`Which design best protects data in Azure Synapse Analytics from exfiltration?`,
o:[`A managed VNet with exfiltration protection`,`Public endpoints with SQL authentication`,`Shared storage account keys for all users`,`Disabled auditing to reduce noise`],
a:[0],
e:`Synapse managed virtual networks with data exfiltration protection limit outbound connections to approved tenants through managed private endpoints, combined with Entra authentication and auditing.`},
  ],
};
