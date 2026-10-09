// Microsoft SC-900 question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/microsoft-sc-900.json.
module.exports = {
  id: "microsoft-sc-900",
  vendor: "Microsoft",
  code: "SC-900",
  name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
  fullLength: 45,
  minutes: 45,
  passPercent: 70,
  readinessPercent: 80,
  sectioned: false,
  note: "Microsoft scores SC-900 on a 1–1000 scale with 700 to pass. This practice exam reports a straight percentage; treat 80% as your readiness bar. Questions follow the skills measured as of October 21, 2026, and Microsoft renames products often, so check current names on Microsoft Learn.",
  domains: [{"id":"CON","name":"Concepts of security, compliance, and identity","weight":"10–15%"},{"id":"ENT","name":"Capabilities of Microsoft Entra","weight":"25–30%"},{"id":"SEC","name":"Capabilities of Microsoft security solutions","weight":"35–40%"},{"id":"CMP","name":"Capabilities of Microsoft compliance solutions","weight":"20–25%"}],
  Q: [
{d:"CON",s:`Under the shared responsibility model, which responsibility always stays with the customer, regardless of whether they use SaaS, PaaS, IaaS, or on-premises?`,
o:[`Physical security of the datacenter`,`Patching the host operating system`,`Data, devices, and accounts and identities`,`Physical network controls`],
a:[2],
e:`Customers always own their data, the endpoints that access it, and their accounts and identities. Physical datacenter, network, and host responsibilities shift to the cloud provider as you move from IaaS to SaaS.`},

{d:"CON",s:`Which approach describes defense in depth?`,
o:[`Relying on one strong perimeter firewall to stop attacks at the edge`,`Layering protections so others still hold if one layer fails`,`Encrypting data at rest so that a breach of any other layer exposes nothing`,`Allowing all traffic by default and investigating anything suspicious afterward`],
a:[1],
e:`Defense in depth layers controls — physical, identity, perimeter, network, compute, application, data — so no single failure exposes everything.

A single perimeter is the opposite idea.`},

{d:"CON",s:`Which three principles define Zero Trust?`,
o:[`Trust the internal network, verify external users, and encrypt email`,`Verify explicitly, use least-privilege access, and assume breach`,`Block all cloud apps, use VPN, and require passwords`,`Audit annually, patch monthly, and back up weekly`],
a:[1],
e:`Zero Trust verifies every request using all available signals, grants just enough access for just enough time, and assumes breach, minimizing blast radius and segmenting access.

Trusting the internal network is exactly what Zero Trust rejects.`},

{d:"CON",s:`What distinguishes hashing from encryption?`,
o:[`Hashing can be reversed with the right key; encryption can never be reversed`,`Hashing is one-way and can't be reversed; encryption can be reversed with a key`,`Hashing is used only for network traffic; encryption is used only for stored data`,`They are the same process, but hashing uses a shorter key than encryption`],
a:[1],
e:`Hashing is one-way, which is why it's used to store passwords and verify integrity. Encryption is reversible by design, so data can be decrypted with the right key.`},

{d:"CON",s:`What is the difference between authentication and authorization?`,
o:[`Authentication proves who you are; authorization determines what you can access`,`Authentication determines what you can access; authorization proves who you are`,`They are the same process, performed once at sign-in by the identity provider`,`Authorization happens first, and authentication only runs for privileged access`],
a:[0],
e:`Authentication (AuthN) verifies identity. Authorization (AuthZ) grants permissions to an authenticated identity, so authentication comes first.`},

{d:"CON",s:`What does federation enable?`,
o:[`Trusting another identity provider's sign-ins so users keep existing credentials`,`Copying users' passwords to a partner organization so they can sign in to its apps`,`Encrypting data at rest across multiple cloud providers using a shared key`,`Blocking all guest users from accessing resources in the organization's tenant`],
a:[0],
e:`With federation, a service trusts tokens issued by another identity provider, so users can authenticate with their home credentials and access resources elsewhere without separate accounts.

No password copying is involved.`},

{d:"ENT",s:`What is Microsoft Entra ID?`,
o:[`An on-premises domain controller service for Windows Server`,`A cloud-based identity and access management service`,`A cloud firewall service for filtering network traffic`,`A data loss prevention tool for Microsoft 365 content`],
a:[1],
e:`Microsoft Entra ID (formerly Azure Active Directory) is Microsoft's cloud identity service for signing in users and controlling access to apps and resources.

It isn't an on-premises domain controller, firewall, or DLP tool.`},

{d:"ENT",s:`An application running on an Azure virtual machine needs to read secrets from Azure Key Vault without storing credentials in code. What should it use?`,
o:[`A shared administrator account`,`A managed identity`,`A guest account`,`A password stored in a configuration file`],
a:[1],
e:`Managed identities are workload identities managed by Azure, so the application gets tokens without anyone handling secrets.

Shared admin accounts and stored passwords are what managed identities are designed to replace.`},

{d:"ENT",s:`An organization synchronizes on-premises Active Directory to Microsoft Entra ID and wants users to keep signing in to cloud services even if on-premises infrastructure is unavailable. Which authentication method best meets this need?`,
o:[`Password hash synchronization`,`Pass-through authentication`,`Federation with AD FS`,`Local accounts only`],
a:[0],
e:`With password hash sync, Microsoft Entra ID can authenticate users itself, with no dependency on on-premises servers during sign-in.

Pass-through authentication and federation rely on on-premises components being reachable.`},

{d:"ENT",s:`A company wants to let partner employees access a shared app using their own organization's credentials. Which capability fits?`,
o:[`Microsoft Entra B2B collaboration (external identities)`,`Creating local accounts for each partner employee`,`Password hash synchronization`,`Azure Bastion`],
a:[0],
e:`B2B collaboration invites external users as guests who sign in with their own identities, while you control their access.

Creating local accounts duplicates identities. Hash sync and Bastion serve other purposes.`},

{d:"ENT",s:`Which is a passwordless authentication method supported by Microsoft Entra ID?`,
o:[`SMS one-time passcode used as the only factor`,`Windows Hello for Business`,`Security questions`,`Email one-time code with a password`],
a:[1],
e:`Windows Hello for Business, passkeys (FIDO2), and Microsoft Authenticator phone sign-in are passwordless methods.

Security questions and password-plus-code are not passwordless, and SMS is considered a weaker method.`},

{d:"ENT",s:`Multifactor authentication requires two or more of which categories?`,
o:[`Something you know, something you have, and something you are`,`Two different passwords entered one after the other at sign-in`,`A username and a verified email address for the same account`,`A registered device name and a trusted corporate IP address`],
a:[0],
e:`MFA combines factors from different categories, such as a password plus a phone or a fingerprint. Two passwords are the same factor twice.`},

{d:"ENT",s:`Users keep choosing passwords containing the company name, such as "Contoso2026!". What should an administrator configure?`,
o:[`A custom banned password list in Password Protection`,`Self-service password reset with security questions for all users`,`A network security group that blocks sign-ins from untrusted IPs`,`Azure DDoS Protection on the organization's sign-in endpoints`],
a:[0],
e:`Password Protection combines Microsoft's global banned list with a custom list of organization-specific terms, blocking weak variations like this.

SSPR helps users reset passwords but doesn't block weak ones. NSGs and DDoS Protection are network controls.`},

{d:"ENT",s:`An organization wants to require MFA only when users sign in from outside trusted locations. What should it use?`,
o:[`Conditional Access`,`Access reviews`,`Privileged Identity Management`,`Azure Firewall`],
a:[0],
e:`Conditional Access evaluates signals such as location, device, and risk, then applies decisions like requiring MFA.

Access reviews recertify access, PIM manages privileged role activation, and Azure Firewall filters network traffic.`},

{d:"ENT",s:`A support technician needs to reset passwords for non-administrator users and nothing more. Following least privilege, which built-in role is most appropriate?`,
o:[`Global Administrator`,`Password Administrator`,`Security Administrator`,`Helpdesk Administrator`],
a:[1],
e:`Password Administrator can reset passwords for non-administrators (and other Password Administrators) and nothing else. Helpdesk Administrator can also reset these passwords but has extra permissions, such as invalidating refresh tokens, so it's broader than needed.

Global Administrator is far too broad, and Security Administrator manages security settings rather than passwords.`},

{d:"ENT",s:`A manager must periodically confirm whether guest users still need access to a team's resources. Which capability supports this?`,
o:[`Access reviews in Microsoft Entra ID Governance`,`Secrets and certificates stored in Azure Key Vault`,`Analytics rules and workbooks in Microsoft Sentinel`,`Network security groups on the team's subnets`],
a:[0],
e:`Access reviews ask reviewers to recertify group membership and application access, removing access that's no longer needed.

The other services don't manage access recertification.`},

{d:"ENT",s:`An organization wants administrators to activate the Global Administrator role only when needed, for a limited time, with approval. Which capability provides this?`,
o:[`Privileged Identity Management`,`A Conditional Access policy requiring MFA`,`Password hash synchronization from AD`,`Microsoft Defender for Cloud Apps policies`],
a:[0],
e:`PIM provides just-in-time, time-bound role activation with approval, justification, and audit history.

Conditional Access controls sign-in conditions but doesn't manage role eligibility.`},

{d:"ENT",s:`Which capability detects risks such as leaked credentials and sign-ins from atypical locations, and can require remediation such as a password change?`,
o:[`Microsoft Entra ID Protection`,`Azure Bastion`,`Compliance Manager`,`Azure Web Application Firewall`],
a:[0],
e:`ID Protection calculates user risk and sign-in risk from detections and can enforce responses through risk-based Conditional Access policies.

The others aren't identity risk tools.`},

{d:"SEC",s:`Which Azure service helps protect public-facing resources from volumetric attacks that try to overwhelm them with traffic?`,
o:[`Azure DDoS Protection`,`Azure Key Vault`,`Microsoft Purview`,`Microsoft Entra ID Protection`],
a:[0],
e:`DDoS Protection mitigates distributed denial-of-service attacks against Azure resources. The other services address secrets, compliance, and identity risk.`},

{d:"SEC",s:`What do network security groups (NSGs) do?`,
o:[`Filter traffic to Azure resources in a virtual network using allow and deny rules`,`Encrypt data at rest on the virtual machine disks attached to a virtual network`,`Detect phishing emails and malicious attachments before they reach mailboxes`,`Manage user passwords and enforce password complexity for Azure resources`],
a:[0],
e:`NSGs apply rules based on source, destination, port, and protocol at the subnet or network interface level, which supports segmentation inside virtual networks.

Encryption, phishing protection, and passwords are handled elsewhere.`},

{d:"SEC",s:`What distinguishes Azure Firewall from network security groups?`,
o:[`Azure Firewall is a managed, stateful firewall with threat intelligence`,`Azure Firewall only filters email traffic, while NSGs filter all other network traffic`,`NSGs provide threat intelligence–based filtering, while Azure Firewall does not`,`There is no difference; Azure Firewall is the new name for network security groups`],
a:[0],
e:`Azure Firewall is a central, fully stateful firewall service with features like threat intelligence filtering, typically deployed in a hub network. NSGs are distributed allow and deny rules.

The two are often used together.`},

{d:"SEC",s:`Which service protects web applications from common exploits such as SQL injection and cross-site scripting?`,
o:[`Azure Web Application Firewall`,`Azure Bastion host connections`,`Network security group rules`,`Azure DDoS Protection plans`],
a:[0],
e:`WAF inspects HTTP traffic for application-layer attacks and is deployed with services such as Application Gateway and Front Door.

NSGs and DDoS Protection operate at the network layer. Bastion provides VM access.`},

{d:"SEC",s:`Administrators need RDP and SSH access to Azure virtual machines without exposing public IP addresses. What should they use?`,
o:[`Azure Bastion`,`Azure DDoS Protection`,`Microsoft Defender for Office 365`,`Compliance Manager`],
a:[0],
e:`Azure Bastion provides browser-based RDP and SSH over TLS from the Azure portal, so VMs don't need public IPs.

The other services don't provide VM connectivity.`},

{d:"SEC",s:`What does Azure Key Vault store and manage?`,
o:[`Secrets, keys, and certificates`,`Email messages and calendar items`,`User profile photos and contact details`,`Network traffic logs and flow records`],
a:[0],
e:`Key Vault centralizes secrets, keys, and certificates with access control and auditing, keeping them out of application code.`},

{d:"SEC",s:`Which two capabilities make up Microsoft Defender for Cloud?`,
o:[`Cloud security posture management and cloud workload protection`,`Email filtering and spam scoring for Exchange Online mailboxes`,`Self-service password reset and multifactor authentication`,`eDiscovery case management and audit log retention`],
a:[0],
e:`Defender for Cloud assesses and improves posture (CSPM) and protects workloads with threat detection (CWP) across Azure, other clouds, and on-premises.

The other pairs belong to email security, identity, and compliance tools.`},

{d:"SEC",s:`In Microsoft Defender for Cloud, what does secure score represent?`,
o:[`The posture level reached by implementing security recommendations`,`The number of security incidents resolved by the SOC in the past 30 days`,`The license tier that determines which Defender plans are available`,`The percentage of users in the tenant who have registered for MFA`],
a:[0],
e:`Secure score rises as you implement recommendations from security policies and standards, such as the Microsoft cloud security benchmark. It's a posture measure.

It isn't an incident count or license level.`},

{d:"SEC",s:`What do the enhanced security features of Defender for Cloud add beyond foundational CSPM?`,
o:[`Workload protection plans for servers, storage, SQL, and containers`,`Free email filtering for all mailboxes in the Microsoft 365 tenant`,`Password management and self-service reset for administrators`,`eDiscovery holds on data stored in Azure storage accounts`],
a:[0],
e:`Enabling Defender plans adds threat protection for specific workloads, such as vulnerability assessment, just-in-time VM access, and alerts for suspicious activity.

The other options belong to different products.`},

{d:"SEC",s:`What is the difference between SIEM and SOAR?`,
o:[`SIEM collects and correlates security data to find threats; SOAR automates response`,`SIEM protects email only, while SOAR protects endpoints and servers only`,`They are the same thing; SOAR is simply the newer name for SIEM tools`,`SOAR collects and stores logs, while SIEM runs automated response playbooks`],
a:[0],
e:`SIEM aggregates and analyzes events to find threats. SOAR automates responses through playbooks and orchestration. Microsoft Sentinel provides both.`},

{d:"SEC",s:`In Microsoft Sentinel, what automates response actions when an incident is created, such as disabling a compromised account?`,
o:[`Playbooks`,`Workbooks`,`Data connectors`,`Watchlists`],
a:[0],
e:`Playbooks, built on Azure Logic Apps, run automated response workflows. Workbooks visualize data, data connectors ingest it, and watchlists provide reference data.`},

{d:"SEC",s:`What does Microsoft Defender XDR provide?`,
o:[`A unified detection and response suite across endpoints, identities, email, and apps`,`A replacement for Microsoft Entra ID as the organization's identity directory`,`A compliance scoring tool that measures progress against regulations`,`A web application firewall that blocks SQL injection and cross-site scripting`],
a:[0],
e:`Defender XDR correlates signals from Defender for Endpoint, Office 365, Identity, Cloud Apps, and more into unified incidents, managed in the Microsoft Defender portal.

It isn't an identity directory, a compliance tool, or a WAF.`},

{d:"SEC",s:`Which Microsoft Defender XDR service protects against malicious links and attachments in email and collaboration tools?`,
o:[`Microsoft Defender for Office 365`,`Microsoft Defender for Identity`,`Microsoft Defender for Endpoint`,`Microsoft Defender for Cloud`],
a:[0],
e:`Defender for Office 365 provides Safe Links, Safe Attachments, and anti-phishing protection for email, Teams, SharePoint, and OneDrive.

The others protect identities, devices, and cloud workloads.`},

{d:"SEC",s:`Which service provides endpoint detection and response, attack surface reduction, and automated investigation for devices?`,
o:[`Microsoft Defender for Endpoint`,`Microsoft Defender for Cloud Apps`,`Azure Firewall`,`Microsoft Purview`],
a:[0],
e:`Defender for Endpoint protects devices with EDR, attack surface reduction rules, next-generation protection, and automated investigation and remediation.`},

{d:"SEC",s:`An organization wants to discover unsanctioned cloud apps employees are using and control access to them. Which service fits?`,
o:[`Microsoft Defender for Cloud Apps`,`Azure Bastion`,`Microsoft Defender for Identity`,`Azure Key Vault`],
a:[0],
e:`Defender for Cloud Apps is a cloud access security broker (CASB) that discovers shadow IT, assesses app risk, and controls sessions and data in cloud apps.`},

{d:"SEC",s:`Which service uses signals from on-premises Active Directory domain controllers to detect attacks such as pass-the-hash and reconnaissance?`,
o:[`Microsoft Defender for Identity`,`Microsoft Defender for Office 365`,`Azure DDoS Protection`,`Compliance Manager`],
a:[0],
e:`Defender for Identity uses sensors on domain controllers to detect identity-based attacks and lateral movement in on-premises AD.`},

{d:"SEC",s:`What does Microsoft Defender Vulnerability Management provide?`,
o:[`Risk-based discovery and remediation of device weaknesses`,`Encryption of email messages sent to recipients outside the organization`,`Periodic access reviews for guest users and their group memberships`,`Mitigation of distributed denial-of-service attacks on public endpoints`],
a:[0],
e:`Defender Vulnerability Management inventories software and configurations, prioritizes weaknesses by risk, and tracks remediation.

The other capabilities belong to different products.`},

{d:"CMP",s:`Where can an organization download Microsoft's independent audit reports, such as SOC and ISO certifications, for its cloud services?`,
o:[`Service Trust Portal`,`Microsoft Defender portal`,`Azure Bastion`,`Microsoft Entra admin center`],
a:[0],
e:`The Service Trust Portal publishes audit reports, compliance guides, and trust documents about how Microsoft cloud services meet standards.`},

{d:"CMP",s:`Which is one of Microsoft's privacy principles?`,
o:[`Control: customers control their data with clear choices and easy-to-use tools`,`Targeting: Microsoft uses customer content to target advertising more accurately`,`Disclosure: data is shared with any government agency that requests it`,`Opacity: customers are not told where their data is stored or processed`],
a:[0],
e:`Microsoft's privacy principles are control, transparency, security, strong legal protections, no content-based targeting, and benefits to you. The other statements contradict them.`},

{d:"CMP",s:`What does Microsoft Purview Compliance Manager help an organization do?`,
o:[`Assess compliance, track improvement actions, and measure a score`,`Block malicious email and attachments before they reach users' mailboxes`,`Manage RDP and SSH access to virtual machines without public IP addresses`,`Detect leaked credentials and risky sign-ins for users in the tenant`],
a:[0],
e:`Compliance Manager provides assessments based on regulation templates, improvement actions with implementation guidance, and a compliance score.`},

{d:"CMP",s:`How is the compliance score in Compliance Manager calculated?`,
o:[`From points earned by completing Microsoft- and customer-managed improvement actions`,`From the percentage of users in the tenant who have registered for MFA`,`From the number of incidents closed in Microsoft Defender XDR each month`,`From the secure score reported by Microsoft Defender for Cloud for each subscription`],
a:[0],
e:`Each improvement action carries points, and completing actions increases the score. Microsoft-managed actions count toward the score, and customers complete their own.

Compliance score is separate from secure score.`},

{d:"CMP",s:`Which Microsoft Purview capability identifies content such as credit card numbers using patterns, keywords, and checksums?`,
o:[`Sensitive information types`,`Retention label policies`,`Entra access reviews`,`Sentinel playbooks`],
a:[0],
e:`Sensitive information types detect data through patterns, keywords, and validation such as checksums. Trainable classifiers recognize content by example, such as contracts.

Retention labels, access reviews, and playbooks serve other purposes.`},

{d:"CMP",s:`What is the difference between Content explorer and Activity explorer?`,
o:[`Content explorer shows where sensitive data is; Activity explorer shows what's done with it`,`They are the same tool, presented under different names in different portals`,`Content explorer shows sign-in logs, while Activity explorer shows device health`,`Activity explorer stores Microsoft's audit reports, and Content explorer stores policies`],
a:[0],
e:`Content explorer answers "where is our sensitive data?" Activity explorer answers "what's happening to it?"`},

{d:"CMP",s:`Which statement about sensitivity labels is true?`,
o:[`They classify content and can apply protection that travels with it`,`They delete content automatically once a configured retention period has ended`,`They block all email sent outside the organization that contains attachments`,`They work only on files stored in SharePoint Online document libraries`],
a:[0],
e:`Sensitivity labels classify and protect data, and the protection travels with the file or email. Retention and deletion are handled by retention labels and policies.

Labels work across Microsoft 365 apps and services.`},

{d:"CMP",s:`What does data loss prevention (DLP) do?`,
o:[`Detects and prevents risky sharing of sensitive information`,`Recovers files that users deleted from OneDrive or SharePoint within 93 days`,`Encrypts virtual machine disks in Azure using keys that the customer manages`,`Resets user passwords automatically when credentials are found in a leak`],
a:[0],
e:`DLP policies identify sensitive information and enforce actions — warn, block, or audit — when it's shared or moved inappropriately.`},

{d:"CMP",s:`An organization must keep financial records for seven years and prevent them from being edited or deleted. Which capability fits best?`,
o:[`A retention label that declares the items as records`,`A sensitivity label that applies encryption to the items`,`A data loss prevention policy for the finance team`,`A Conditional Access policy for the finance site`],
a:[0],
e:`Records management uses retention labels to keep items for a set period and, when declared as records, restricts editing and deletion. Retention policies apply broadly to locations; labels apply to individual items.

Encryption and DLP don't enforce retention.`},

{d:"CMP",s:`What does Microsoft Purview Insider Risk Management help an organization do?`,
o:[`Identify and act on risky user activity, like data theft`,`Block distributed denial-of-service attacks against the organization's websites`,`Manage and patch Azure virtual machines used by internal employees`,`Provide independent audit reports about the security of Microsoft's datacenters`],
a:[0],
e:`Insider Risk Management correlates signals such as downloads, sharing, and HR events to surface potentially risky activity, with pseudonymization to protect privacy during investigation.`},

{d:"CMP",s:`Legal counsel needs to preserve, search, and export content relevant to a lawsuit. Which Microsoft Purview solution fits?`,
o:[`eDiscovery`,`Compliance score`,`Content explorer`,`Sensitivity labels`],
a:[0],
e:`eDiscovery provides cases, holds, searches, and export for legal matters. Audit records user and admin activity that can support investigations.

The other options don't preserve or export content for litigation.`},

{d:"CON",s:`Why is identity often described as the primary security perimeter?`,
o:[`Users reach resources from anywhere, so identity is the constant`,`Firewalls no longer exist in modern networks, so nothing else can be controlled`,`Identities can't be compromised, so they're safer than any network control`,`Regulations require identity to be the only security control in cloud services`],
a:[0],
e:`With cloud apps, mobile devices, and remote work, the network edge no longer contains everything. Every access request still involves an identity, which makes it the place to apply controls consistently.

Firewalls still exist, identities are frequently attacked, and no regulation makes identity the only control.`},

{d:"CON",s:`What does an identity provider do?`,
o:[`Authenticates users and issues tokens that apps trust`,`Encrypts data at rest in storage accounts and databases`,`Filters network traffic between virtual networks`,`Stores audit reports about cloud provider datacenters`],
a:[0],
e:`An identity provider such as Microsoft Entra ID verifies who users are and issues security tokens, so apps don't each manage their own credentials.

Encryption, traffic filtering, and audit reports belong to other services.`},

{d:"CON",s:`What is Active Directory Domain Services (AD DS)?`,
o:[`An on-premises directory for users, computers, and policies`,`A cloud-only identity service that replaces on-premises domain controllers`,`A Microsoft 365 tool for classifying and labeling sensitive documents`,`An Azure service that protects web apps from SQL injection attacks`],
a:[0],
e:`AD DS is the traditional on-premises directory, using domain controllers, organizational units, and Group Policy. Microsoft Entra ID is the cloud identity service and often syncs with it.

Labeling and web app protection are separate services.`},

{d:"CON",s:`What distinguishes asymmetric encryption from symmetric encryption?`,
o:[`Asymmetric uses a public and private key pair; symmetric uses one shared key`,`Asymmetric uses one shared key; symmetric uses a public and private key pair`,`Asymmetric encryption can't be decrypted by anyone, including the key holder`,`Symmetric encryption is used only for passwords and never for files`],
a:[0],
e:`Symmetric encryption uses the same key to encrypt and decrypt. Asymmetric encryption uses a key pair: data encrypted with the public key is decrypted with the private key.

Encrypted data can be decrypted with the right key, and symmetric encryption is widely used for bulk data.`},

{d:"CON",s:`An organization encrypts database files on disk and uses TLS for connections to the database. What do these protect?`,
o:[`Data at rest and data in transit`,`Data in use and data at rest`,`Data in transit and data in use`,`Only data at rest, in both cases`],
a:[0],
e:`Disk encryption protects stored data (at rest). TLS protects data moving across the network (in transit). Protecting data in use requires approaches such as confidential computing.`},

{d:"CON",s:`A regulation requires that certain customer data be stored in a specific country. Which concept does this describe?`,
o:[`Data residency`,`Data classification`,`Data loss prevention`,`Data hashing`],
a:[0],
e:`Data residency requirements govern where data is physically stored. Classification labels data by sensitivity, DLP prevents inappropriate sharing, and hashing produces one-way fingerprints.`},

{d:"CON",s:`An organization runs virtual machines in Azure (IaaS). Under the shared responsibility model, who patches the guest operating system?`,
o:[`The customer`,`Microsoft`,`The hardware vendor`,`The internet service provider`],
a:[0],
e:`In IaaS, Microsoft manages the physical infrastructure and hypervisor, while the customer manages the guest OS, applications, and data. Moving to PaaS or SaaS shifts more to Microsoft.`},

{d:"CON",s:`Which practice reflects the Zero Trust principle of "assume breach"?`,
o:[`Segmenting access and monitoring to limit how far an attacker can move`,`Trusting every device on the corporate network once it has signed in`,`Granting administrators permanent access so they can respond quickly`,`Allowing all internal traffic because the perimeter firewall is in place`],
a:[0],
e:`Assume breach means designing as if an attacker is already inside: segmenting networks and access, encrypting end to end, and using analytics to detect threats.

Trusting the internal network or granting standing admin access contradicts Zero Trust.`},

{d:"ENT",s:`What is a Microsoft Entra tenant?`,
o:[`An organization's dedicated instance of Microsoft Entra ID`,`A single virtual machine that runs the identity service for one user`,`A shared directory that every Microsoft customer signs in to together`,`A license that adds premium security features to one user account`],
a:[0],
e:`A tenant is an organization's dedicated, isolated instance of Microsoft Entra ID, holding its users, groups, and apps.

It isn't a VM, isn't shared across customers, and isn't a license.`},

{d:"ENT",s:`How does Microsoft Entra ID differ from on-premises Active Directory Domain Services?`,
o:[`Entra ID uses web protocols like OAuth and SAML, not Group Policy`,`Entra ID is installed on domain controllers in the customer's own datacenter`,`Entra ID uses Kerberos and Group Policy objects exactly like AD DS does`,`Entra ID can only be used for Microsoft 365 apps and not any other services`],
a:[0],
e:`Entra ID is a cloud service built around web authentication protocols such as OAuth 2.0, OpenID Connect, and SAML. It doesn't use organizational units or Group Policy the way AD DS does.

It isn't installed on domain controllers and supports thousands of non-Microsoft apps.`},

{d:"ENT",s:`Which Microsoft Entra ID edition includes Microsoft Entra ID Protection and Privileged Identity Management?`,
o:[`Microsoft Entra ID P2`,`Microsoft Entra ID Free`,`Microsoft Entra ID P1`,`Microsoft 365 Apps for business`],
a:[0],
e:`P2 adds ID Protection and PIM on top of P1 features such as Conditional Access. Free includes basic identity features, and Microsoft 365 Apps is a productivity license.

Licensing changes over time, so confirm current packaging on Microsoft Learn.`},

{d:"ENT",s:`What is the main difference between a system-assigned and a user-assigned managed identity?`,
o:[`System-assigned shares the resource's lifecycle; user-assigned is separate and reusable`,`System-assigned identities are for people; user-assigned identities are for apps`,`User-assigned identities require a password; system-assigned ones don't`,`There's no difference; the names refer to the same type of identity`],
a:[0],
e:`A system-assigned identity is created with a resource and deleted with it. A user-assigned identity is a standalone resource that can be attached to several resources.

Both are for workloads, and neither uses a password.`},

{d:"ENT",s:`Employees want to use personal phones to access company email. What device identity type fits?`,
o:[`Microsoft Entra registered`,`Microsoft Entra joined`,`Microsoft Entra hybrid joined`,`Domain joined only`],
a:[0],
e:`Registered devices suit personally owned (BYOD) devices. Joined devices are organization-owned and sign in with work accounts, and hybrid joined devices are joined to both on-premises AD and Entra ID.`},

{d:"ENT",s:`A team wants group membership to update automatically when users' department attribute changes. What should they use?`,
o:[`A group with dynamic membership rules`,`A group with assigned membership`,`A distribution list managed by email`,`A separate tenant for each department`],
a:[0],
e:`Dynamic groups evaluate rules against user attributes, adding and removing members automatically. Assigned groups need manual updates, distribution lists don't control access, and separate tenants are unnecessary.`},

{d:"ENT",s:`An organization wants to sync identities from several disconnected AD forests using a lightweight agent. Which tool fits?`,
o:[`Microsoft Entra Cloud Sync`,`Microsoft Entra Connect Sync`,`Azure Bastion`,`Microsoft Purview`],
a:[0],
e:`Cloud Sync uses lightweight agents managed from the cloud and handles disconnected forests well. Connect Sync is the traditional, server-installed tool with more advanced options.

Bastion and Purview aren't sync tools.`},

{d:"ENT",s:`An organization requires that passwords be validated against on-premises AD at sign-in, so on-premises account policies apply immediately. Which method meets this?`,
o:[`Pass-through authentication`,`Password hash synchronization`,`Cloud-only accounts`,`Guest accounts`],
a:[0],
e:`Pass-through authentication validates credentials directly against on-premises AD through an agent, so on-premises policies apply at sign-in. Hash sync validates in the cloud, and the other options don't use on-premises AD.`},

{d:"ENT",s:`A company is building a customer-facing app where customers sign up with email or social accounts. What should it use?`,
o:[`Microsoft Entra External ID for customer identity`,`Microsoft Entra Connect Sync with on-premises AD`,`Privileged Identity Management for each customer`,`Entra joined devices for every customer`],
a:[0],
v:true,
e:`External ID provides customer identity and access management, with self-service sign-up and social sign-in. Sync tools, PIM, and device join are for workforce scenarios.`},

{d:"ENT",s:`What does self-service password reset (SSPR) let users do?`,
o:[`Reset their own password after verifying their identity`,`Reset any user's password in the tenant without verification`,`Disable multifactor authentication for their own account`,`Remove themselves from Conditional Access policies`],
a:[0],
e:`SSPR lets users reset forgotten passwords by proving their identity with registered methods, which reduces helpdesk calls.

It doesn't grant rights over other users or weaken security policies.`},

{d:"ENT",s:`Why does Microsoft Authenticator use number matching for push notifications?`,
o:[`To stop MFA fatigue approvals of prompts users didn't start`,`To let users sign in without having any account in the tenant`,`To replace passwords entirely for every application in the tenant`,`To speed up sign-in by skipping the second factor on known devices`],
a:[0],
e:`With number matching, the user must enter the number shown on the sign-in screen, so blindly approving an attacker's prompt doesn't work.

It doesn't create accounts, replace passwords for every app, or skip MFA.`},

{d:"ENT",s:`Which authentication method is considered phishing-resistant?`,
o:[`Passkeys (FIDO2)`,`SMS codes`,`Voice calls`,`Security questions`],
a:[0],
e:`Passkeys use cryptographic keys bound to the legitimate site, so they can't be replayed on a phishing page. SMS, voice, and security questions can all be intercepted or socially engineered.`},

{d:"ENT",s:`Which is NOT a signal that Conditional Access evaluates?`,
o:[`The user's job satisfaction score`,`The user's location or IP address`,`The device's compliance state`,`The sign-in risk level`],
a:[0],
e:`Conditional Access uses signals such as user and group, location, device state, application, and risk. Job satisfaction isn't a signal.`},

{d:"ENT",s:`Legacy authentication protocols don't support MFA. What's the recommended approach?`,
o:[`Block it with Conditional Access`,`Allow legacy protocols only for administrators`,`Require longer passwords for legacy protocols`,`Move legacy apps to a separate tenant`],
a:[0],
e:`Because legacy protocols can't enforce MFA, they're a common attack path. Blocking them with Conditional Access closes it.

Allowing them for admins is the worst case, longer passwords don't add a factor, and a separate tenant doesn't solve the problem.`},

{d:"ENT",s:`What license is required to use Microsoft Entra Conditional Access?`,
o:[`Microsoft Entra ID P1 or higher`,`Microsoft Entra ID Free`,`No license; it's available to all`,`Only Microsoft Defender for Endpoint`],
a:[0],
v:true,
e:`Conditional Access is a premium feature included in P1 and above (including P2 and bundles that contain them). The Free edition offers security defaults instead.`},

{d:"ENT",s:`What is Microsoft's guidance on the number of Global Administrators?`,
o:[`Keep it small and use less privileged roles wherever they're enough`,`Make every IT staff member a Global Administrator for flexibility`,`Assign Global Administrator to all managers so they can approve access`,`Use a single shared Global Administrator account for the whole team`],
a:[0],
e:`Global Administrator has full control, so limiting it reduces risk. Least-privileged built-in roles cover most tasks. Shared accounts break accountability.`},

{d:"ENT",s:`A project team needs a bundle of groups, apps, and SharePoint sites that users can request, with approval and automatic expiration. What feature fits?`,
o:[`Entitlement management access packages`,`Dynamic security groups with no approvals`,`Azure Key Vault access policies`,`Microsoft Sentinel analytics rules`],
a:[0],
e:`Access packages in entitlement management bundle resources, with request, approval, and expiration policies. Dynamic groups assign by rule without requests, and the others aren't access governance tools.`},

{d:"ENT",s:`Which Microsoft Entra ID Governance feature automates tasks when employees join, move within, or leave the organization?`,
o:[`Lifecycle workflows`,`Password protection`,`Conditional Access`,`Identity Secure Score`],
a:[0],
e:`Lifecycle workflows automate joiner, mover, and leaver tasks, such as generating a temporary access pass for new hires or removing access when people leave.

The other features address passwords, sign-in conditions, and posture.`},

{d:"ENT",s:`In Privileged Identity Management, what is the difference between eligible and active role assignments?`,
o:[`Eligible users activate the role when needed; active users always have it`,`Eligible users have the role permanently; active users must request it each time`,`Eligible assignments are for guests; active assignments are for employees`,`There's no difference; PIM treats both assignment types the same way`],
a:[0],
e:`Eligible assignments enable just-in-time access: the user activates the role for a limited time, often with MFA, justification, or approval. Active assignments grant the role continuously.`},

{d:"ENT",s:`In Microsoft Entra ID Protection, what is the difference between user risk and sign-in risk?`,
o:[`User risk means the account may be compromised; sign-in risk means one sign-in may not be legitimate`,`User risk applies only to administrator accounts, while sign-in risk applies only to guest accounts`,`User risk is self-reported by each user, while sign-in risk is entered manually by the helpdesk team`,`They're the same score, shown in two different places in the Microsoft Entra admin center for convenience`],
a:[0],
e:`User risk reflects the likelihood an account is compromised (for example, leaked credentials). Sign-in risk reflects the likelihood a specific authentication attempt isn't from the owner (for example, an anonymous IP). Each can drive different policies.`},

{d:"SEC",s:`What DDoS protection do Azure resources have without enabling a paid DDoS Protection tier?`,
o:[`Default infrastructure-level protection for all customers`,`No protection at all until a paid tier is purchased for each resource`,`Full application-layer protection configured specifically for each app`,`Protection only for virtual machines that have a public IP address`],
a:[0],
v:true,
e:`Azure's platform includes default infrastructure DDoS protection. Paid tiers add tuning to your specific resources, telemetry, and support.

Application-layer protection comes from a WAF.`},

{d:"SEC",s:`Which capability does Azure Firewall Premium add for inspecting traffic?`,
o:[`TLS inspection and intrusion detection and prevention (IDPS)`,`Email attachment scanning for Exchange Online mailboxes`,`Password reset for users who are locked out of their accounts`,`Labeling of sensitive documents stored in SharePoint sites`],
a:[0],
v:true,
e:`Premium adds TLS inspection, signature-based IDPS, and URL filtering for more advanced threat protection.

Email scanning, password reset, and labeling are other products.`},

{d:"SEC",s:`A WAF is configured to log matched threats without blocking them. Which mode is this?`,
o:[`Detection mode`,`Prevention mode`,`Audit-only firewall mode`,`Bypass mode`],
a:[0],
e:`Detection mode logs matching requests without blocking, which is useful while tuning rules. Prevention mode blocks them.`},

{d:"SEC",s:`How are network security group rules evaluated?`,
o:[`By priority, lowest number first, until a rule matches`,`All rules are evaluated, and the most permissive one wins`,`In alphabetical order by rule name`,`At random, so rules need unique names`],
a:[0],
e:`NSG rules are processed in priority order, lowest number first, and processing stops at the first match. That's why rule priority matters.`},

{d:"SEC",s:`With only default NSG rules in place, what happens to inbound traffic from the internet?`,
o:[`It's denied, while traffic within the virtual network is allowed`,`It's allowed, while traffic within the virtual network is denied`,`It's allowed on all ports until a custom rule is added`,`It's sent to Azure Firewall for inspection automatically`],
a:[0],
e:`Default rules allow traffic within the virtual network and from the Azure load balancer, and deny other inbound traffic, including from the internet.

NSGs don't send traffic to Azure Firewall on their own.`},

{d:"SEC",s:`How do subnets in an Azure virtual network support security?`,
o:[`They segment workloads so traffic between them is controlled`,`They encrypt every file stored by the workloads they contain`,`They automatically block all traffic to and from the internet`,`They replace the need for identity and access management`],
a:[0],
e:`Placing workloads in separate subnets, with NSGs or firewalls between them, limits what can talk to what — a core defense-in-depth practice.

Subnets don't encrypt files, block the internet by themselves, or replace identity controls.`},

{d:"SEC",s:`Where is Azure Bastion deployed?`,
o:[`In a dedicated subnet of the virtual network`,`On each virtual machine, as an agent installed in the guest OS`,`On each administrator's laptop, as a desktop remote access app`,`In Microsoft 365, as a feature of Exchange Online and Teams`],
a:[0],
v:true,
e:`Bastion is deployed into a dedicated subnet (AzureBastionSubnet) in the virtual network, and admins connect through the Azure portal. No agent is installed on VMs.`},

{d:"SEC",s:`What is a benefit of storing application secrets in Azure Key Vault rather than in code?`,
o:[`Secrets can be access-controlled, audited, and rotated without code changes`,`Secrets become visible to every developer, so they're easier to troubleshoot`,`Secrets no longer need to exist, because Key Vault replaces authentication`,`Secrets are emailed to administrators each day for safekeeping`],
a:[0],
e:`Key Vault centralizes secrets with access control, logging, and rotation. Apps retrieve them at runtime, often using managed identities.

Exposing, eliminating, or emailing secrets isn't what Key Vault does.`},

{d:"SEC",s:`Can Microsoft Defender for Cloud assess resources outside Azure?`,
o:[`Yes, it can connect to AWS, Google Cloud, and on-premises servers`,`No, it only assesses resources that run in Azure subscriptions`,`Only for AWS, and only if no Azure resources are present`,`Only for on-premises servers joined to Active Directory`],
a:[0],
e:`Defender for Cloud is multicloud and hybrid: connectors bring AWS and Google Cloud into scope, and Azure Arc extends coverage to on-premises and other servers.`},

{d:"SEC",s:`Which security standard does Defender for Cloud apply by default to assess posture?`,
o:[`The Microsoft cloud security benchmark`,`PCI DSS for every subscription`,`ISO 27001 for every subscription`,`No standard until one is purchased`],
a:[0],
v:true,
e:`The Microsoft cloud security benchmark is the default standard behind recommendations and secure score. Other standards, such as PCI DSS and ISO 27001, can be added for regulatory compliance tracking.`},

{d:"SEC",s:`Where in Defender for Cloud can you see how your resources measure up against standards such as PCI DSS?`,
o:[`The regulatory compliance dashboard`,`The Azure Bastion connection list`,`The Key Vault access policy page`,`The Sentinel hunting page`],
a:[0],
e:`The regulatory compliance dashboard maps assessments to the controls of selected standards, showing which pass and fail.`},

{d:"SEC",s:`What does the Defender CSPM plan add beyond foundational CSPM?`,
o:[`Advanced capabilities such as attack path analysis and cloud security explorer`,`Basic secure score and security recommendations, which are otherwise unavailable`,`Email protection with Safe Links and Safe Attachments for Exchange`,`Privileged role activation with approvals for administrators`],
a:[0],
v:true,
e:`Foundational CSPM includes secure score and recommendations at no cost. The paid Defender CSPM plan adds attack path analysis, cloud security explorer, and other advanced posture features.

Email protection and PIM are separate products.`},

{d:"SEC",s:`What does just-in-time (JIT) VM access in Defender for Servers do?`,
o:[`Opens management ports only on request, for a limited time`,`Keeps RDP and SSH ports open permanently for approved administrators`,`Creates a new virtual machine for each administrator who signs in`,`Replaces multifactor authentication for virtual machine sign-ins`],
a:[0],
e:`JIT locks down management ports by default and opens them only for approved requests and a limited window, reducing exposure to attacks.

It doesn't keep ports open, create VMs, or replace MFA.`},

{d:"SEC",s:`How does Microsoft Sentinel collect data from sources such as Microsoft 365, firewalls, and other clouds?`,
o:[`Through data connectors`,`Through playbooks`,`Through workbooks`,`Through access reviews`],
a:[0],
e:`Data connectors ingest logs and events into Sentinel. Playbooks automate response, workbooks visualize data, and access reviews are an identity governance feature.`},

{d:"SEC",s:`In Microsoft Sentinel, what creates incidents from suspicious patterns in collected data?`,
o:[`Analytics rules`,`Data connectors`,`Workbooks`,`Watchlists`],
a:[0],
e:`Analytics rules query collected data and generate alerts and incidents when conditions match. Connectors ingest data, workbooks visualize it, and watchlists provide reference lists.`},

{d:"SEC",s:`A SOC manager wants interactive dashboards of Sentinel data. Which feature provides them?`,
o:[`Workbooks`,`Playbooks`,`Data connectors`,`Analytics rules`],
a:[0],
e:`Workbooks provide interactive visualizations and reports over Sentinel data. Playbooks automate response, connectors ingest data, and analytics rules detect threats.`},

{d:"SEC",s:`An analyst wants to proactively search Sentinel data for signs of threats that haven't triggered alerts. Which capability fits?`,
o:[`Hunting`,`Workbooks`,`Playbooks`,`Data connectors`],
a:[0],
e:`Hunting uses queries, written in KQL, to search proactively for threats. Workbooks visualize, playbooks automate, and connectors ingest.`},

{d:"SEC",s:`Microsoft Sentinel stores its data in which Azure service?`,
o:[`A Log Analytics workspace`,`An Azure Key Vault`,`An Azure Bastion host`,`A SharePoint document library`],
a:[0],
e:`Sentinel runs on top of a Log Analytics workspace, where ingested data is stored and queried. Costs are largely driven by how much data is ingested and retained.`},

{d:"SEC",s:`What does automated investigation and response (AIR) in Microsoft Defender XDR do?`,
o:[`Investigates alerts and takes remediation actions automatically or with approval`,`Writes new Conditional Access policies automatically whenever an alert fires`,`Deletes all email from the affected mailbox after any phishing alert is raised`,`Resets every user's password in the tenant after any malware detection`],
a:[0],
e:`AIR mimics an analyst: it examines alerts, collects evidence, and remediates threats, either automatically or after approval, reducing alert workload.

It doesn't create policies or take blanket destructive actions.`},

{d:"SEC",s:`Which Microsoft Defender for Office 365 Plan 2 capability lets security teams run realistic phishing simulations?`,
o:[`Attack simulation training`,`Safe Attachments scanning`,`Microsoft Secure Score`,`Conditional Access policies`],
a:[0],
v:true,
e:`Attack simulation training runs simulated phishing campaigns and assigns training. Safe Attachments scans files, secure score measures posture, and Conditional Access controls sign-in.`},

{d:"SEC",s:`A device is confirmed to be compromised. Which Defender for Endpoint response action limits the attacker while keeping the device connected to Defender?`,
o:[`Isolate the device`,`Delete the user account`,`Reset the tenant`,`Disable secure score`],
a:[0],
e:`Device isolation cuts the device off from the network while keeping its connection to Defender for Endpoint, so investigation and remediation can continue.

Deleting accounts, resetting tenants, or disabling secure score aren't response actions.`},

{d:"SEC",s:`How does Defender for Cloud Apps control what users can do inside a session, such as blocking downloads on unmanaged devices?`,
o:[`With Conditional Access app control`,`With network security group rules on each app`,`With Azure Firewall URL filtering only`,`With retention labels on downloaded files`],
a:[0],
e:`Conditional Access app control routes sessions through Defender for Cloud Apps, where session policies can block downloads or other actions in real time.

NSGs and firewall filtering don't see inside app sessions, and retention labels aren't access controls.`},

{d:"SEC",s:`What can Microsoft Defender for Identity reveal about sensitive accounts?`,
o:[`Lateral movement paths an attacker could use`,`Their email attachments and their calendar entries`,`Their mailbox retention policies and archive settings`,`Their Azure subscription billing details and invoices`],
a:[0],
e:`Defender for Identity maps lateral movement paths — chains of accounts and devices an attacker could use to reach sensitive accounts — so they can be closed.`},

{d:"SEC",s:`What does Microsoft Defender Threat Intelligence provide?`,
o:[`Context on threat actors, infrastructure, and indicators`,`Automatic patching for every vulnerable device in the tenant`,`A replacement for Microsoft Sentinel's data ingestion`,`Compliance scores for regulations such as GDPR`],
a:[0],
v:true,
e:`Defender Threat Intelligence gives analysts context on threat actors, tools, and infrastructure, plus indicators to investigate.

Patching, data ingestion, and compliance scoring belong to other products.`},

{d:"SEC",s:`Where do security operations teams manage Microsoft Defender XDR incidents across endpoints, email, identities, and apps?`,
o:[`The Microsoft Defender portal`,`The Microsoft Purview portal`,`The Microsoft Entra admin center`,`The Service Trust Portal`],
a:[0],
e:`The Microsoft Defender portal is the unified place for XDR incidents, hunting, and response, and it can include Microsoft Sentinel. Purview covers compliance, Entra covers identity, and the Service Trust Portal holds Microsoft's compliance documents.`},

{d:"SEC",s:`Which capability of Defender Vulnerability Management helps assess devices against configuration benchmarks such as CIS?`,
o:[`Security baselines assessment`,`Attack simulation training`,`Access reviews`,`eDiscovery holds`],
a:[0],
v:true,
e:`Security baselines assessment compares device configurations with benchmarks such as CIS and Microsoft's security baselines. The other options belong to email security, identity governance, and compliance.`},

{d:"CMP",s:`What is the Microsoft Purview portal?`,
o:[`A unified portal for data security, governance, and compliance`,`A portal where Microsoft publishes its datacenter audit reports for customers`,`A portal for managing virtual machines and networks in Azure subscriptions`,`A portal for investigating security incidents across endpoints and email`],
a:[0],
e:`The Microsoft Purview portal brings together solutions such as Compliance Manager, information protection, DLP, data lifecycle management, insider risk, eDiscovery, and audit.

Audit reports are on the Service Trust Portal, VMs in the Azure portal, and incidents in the Defender portal.`},

{d:"CMP",s:`In Compliance Manager, what are assessments based on?`,
o:[`Templates for regulations and standards, such as GDPR`,`The number of incidents raised in the Defender portal`,`Each user's personal sign-in history over the past year`,`Random samples of documents stored in SharePoint`],
a:[0],
e:`Assessments are created from templates for regulations and standards, which group the controls and improvement actions needed.

Incidents, sign-in history, and document samples aren't the basis for assessments.`},

{d:"CMP",s:`What does a Compliance Manager improvement action provide?`,
o:[`A set of implementation steps, an owner, and status and evidence tracking`,`An automatic fix that changes settings without anyone reviewing it`,`A list of users who failed phishing simulations last month`,`A firewall rule that blocks traffic from non-compliant countries`],
a:[0],
e:`Improvement actions explain what to do, can be assigned, and track implementation status and supporting evidence.

They aren't automatic fixes, phishing reports, or firewall rules.`},

{d:"CMP",s:`A new tenant's compliance score isn't zero before the customer has done anything. Why?`,
o:[`Microsoft-managed actions are already credited to the score`,`Microsoft adds random points to encourage customers`,`Every tenant starts with a perfect score that then decreases`,`Scores are copied from another customer in the same industry`],
a:[0],
e:`Compliance score includes points for controls Microsoft manages on its side, which count from the start. Customer-managed actions add the rest as they're implemented.`},

{d:"CMP",s:`An organization uses an internal employee ID format that built-in detection doesn't recognize. What can it create?`,
o:[`A custom sensitive information type`,`A custom Conditional Access policy`,`A new Azure subscription`,`A new retention label policy`],
a:[0],
e:`Custom sensitive information types define patterns, keywords, and validation for organization-specific data so classification and DLP can detect it.

Conditional Access, subscriptions, and retention policies don't detect data.`},

{d:"CMP",s:`What do trainable classifiers recognize?`,
o:[`Types of content, such as resumes, learned from examples`,`Exact numeric patterns, such as credit card numbers with checksums`,`The file extension of each document stored in SharePoint`,`The identity of the user who created each document`],
a:[0],
e:`Trainable classifiers use machine learning to recognize types of content by their characteristics, with built-in classifiers and custom ones trained on samples. Pattern-based detection is what sensitive information types do.`},

{d:"CMP",s:`An organization wants to detect its actual customer records — exact names and account numbers from its database — in documents and email. Which classification method fits?`,
o:[`Exact data match (EDM) classification`,`Trainable classifiers for resumes`,`Sensitivity label encryption`,`Activity explorer reports`],
a:[0],
e:`EDM classification matches against hashed values from your own sensitive data, which reduces false positives compared with generic patterns.

Resume classifiers, encryption, and Activity explorer serve other purposes.`},

{d:"CMP",s:`How are sensitivity labels made available to users?`,
o:[`Through label policies, which publish labels and can set defaults or require labeling`,`Through Conditional Access policies that assign labels to users when they sign in`,`Through retention policies that apply sensitivity labels as content approaches expiry`,`Automatically to every user in the tenant as soon as an admin creates the label`],
a:[0],
e:`Labels are published with label policies, which control who sees which labels and can set a default label or require users to label content.

Conditional Access and retention policies don't publish sensitivity labels, and creating a label doesn't publish it.`},

{d:"CMP",s:`An organization wants labels applied automatically to files in SharePoint and OneDrive that contain sensitive information, without users doing anything. What should it use?`,
o:[`Service-side auto-labeling policies`,`Manual labeling by each document owner`,`A DLP policy that only shows policy tips`,`An access review of SharePoint site owners`],
a:[0],
e:`Auto-labeling policies scan content at rest and in transit and apply labels automatically. Manual labeling depends on users, policy tips only inform, and access reviews recertify access.`},

{d:"CMP",s:`What do DLP policy tips do?`,
o:[`Warn users in apps when content may violate a policy`,`Encrypt every file a user saves to OneDrive or SharePoint`,`Reset the password of any user who shares sensitive data`,`Delete email messages that contain any type of attachment`],
a:[0],
e:`Policy tips educate users in context, letting them fix the issue or override with justification where allowed. They don't encrypt, reset passwords, or delete mail.`},

{d:"CMP",s:`Which capability can block users from copying sensitive files to USB drives?`,
o:[`Endpoint data loss prevention`,`Azure DDoS Protection`,`Sensitivity label policies alone`,`Microsoft Entra password protection`],
a:[0],
e:`Endpoint DLP monitors and controls actions on devices, such as copying to removable media, printing, or uploading to unapproved sites. The other options don't control device actions.`},

{d:"CMP",s:`An item is subject to two retention settings: one says delete after 3 years, and another says retain for 7 years. What happens?`,
o:[`It's kept for 7 years, because retention wins over deletion`,`It's deleted after 3 years, because the shorter period always wins`,`It's deleted immediately, because the settings conflict`,`Neither applies until an administrator chooses one manually`],
a:[0],
e:`Under Microsoft Purview's principles of retention, retention wins over deletion, and the longest retention period applies. Content isn't deleted while any setting requires keeping it.`},

{d:"CMP",s:`What is the difference between a retention policy and a retention label?`,
o:[`Policies apply broadly to locations; labels apply to individual items`,`Policies apply to individual items; labels apply to entire locations`,`Labels can only delete content; policies can only retain it`,`They're the same feature with different names in two portals`],
a:[0],
e:`Retention policies apply settings to locations such as mailboxes or sites. Retention labels apply to specific items and can mark them as records or trigger disposition review.`},

{d:"CMP",s:`What is special about content labeled as a regulatory record?`,
o:[`It's locked against edits and deletion, and its label can't be removed`,`It's encrypted so that only its original author can open it`,`It's shared automatically with the organization's external auditors`,`It's deleted as soon as the label is applied to the content`],
a:[0],
e:`Regulatory records are the strictest setting: content is locked, and even administrators can't remove the label. Standard records allow some flexibility, such as unlocking.

The other options don't describe records.`},

{d:"CMP",s:`What does Audit (Premium) add over Audit (Standard)?`,
o:[`Longer log retention and extra events for investigations`,`The ability to see audit logs at all, which Standard doesn't provide`,`Automatic deletion of audit records after one day`,`Phishing simulations and security awareness training`],
a:[0],
v:true,
e:`Audit (Premium) adds longer default retention, custom audit log retention policies, and intelligent insights — such as what users searched for in Exchange and SharePoint — which help forensic investigations. Standard already provides searchable audit logs, kept for 180 days.`},
  ],
};
