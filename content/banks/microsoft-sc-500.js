// Microsoft SC-500 question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/microsoft-sc-500.json.
module.exports = {
  id: "microsoft-sc-500",
  idPrefix: "sc500",
  vendor: "Microsoft",
  code: "SC-500",
  name: "Microsoft Certified: Cloud and AI Security Engineer Associate",
  fullLength: 50,
  minutes: 100,
  passPercent: 70,
  readinessPercent: 80,
  sectioned: false,
  note: "Microsoft scores SC-500 on a 1–1000 scale with 700 to pass. This practice exam reports a straight percentage; treat 80% as your readiness bar. SC-500 is a new exam and its AI security features are evolving quickly, so check current details on Microsoft Learn.",
  domains: [{"id":"IAG","name":"Manage identity, access, and governance","weight":"20–25%"},{"id":"NET","name":"Secure storage, databases, and networking","weight":"25–30%"},{"id":"CMP","name":"Secure compute","weight":"20–25%"},{"id":"POS","name":"Manage and monitor security posture","weight":"20–25%"}],
  Q: [
{d:"IAG",s:`Administrators should hold the Owner role on a production subscription only while performing approved changes. What should you configure?`,
o:[`A PIM eligible role assignment`,`A permanent Owner assignment with MFA`,`A resource lock on the subscription`,`A custom role with no actions`],
a:[0],
e:`Privileged Identity Management for Azure resources makes users eligible for roles they activate just in time, with time limits, MFA, justification, and approval.`},

{d:"IAG",s:`Access to the Azure management portal and APIs must require phishing-resistant MFA for all admins. What should you configure?`,
o:[`A Conditional Access authentication strength`,`A CanNotDelete resource lock on each management group`,`An Azure Policy that denies sign-ins`,`Key Vault access policies for admins`],
a:[0],
e:`Conditional Access can target the Windows Azure Service Management API (Azure management) and require an authentication strength such as phishing-resistant MFA.`},

{d:"IAG",s:`Which authentication method should cloud admins use to meet a phishing-resistant requirement?`,
o:[`Passkeys (FIDO2)`,`SMS codes`,`Voice calls`,`Security questions`],
a:[0],
e:`Passkeys, Windows Hello for Business, and certificate-based authentication are phishing-resistant because they're bound to the legitimate site. SMS and voice can be intercepted.`},

{d:"IAG",s:`A third-party app requests the Mail.ReadWrite application permission. Who can grant it?`,
o:[`An admin, through admin consent`,`Any user, through user consent`,`The app's publisher, automatically`,`No one; it can't be granted`],
a:[0],
e:`Application permissions always require admin consent because the app acts without a signed-in user and can access data across the organization.`},

{d:"IAG",s:`How can you stop users from granting risky apps access to their mailbox data?`,
o:[`Restrict user consent settings`,`Enable resource locks on Exchange Online`,`Assign users the Reader role in Azure`,`Disable MFA for all users`],
a:[0],
e:`User consent settings can block user consent or allow it only for verified publishers and low-impact permissions, with the admin consent workflow for everything else.`},

{d:"IAG",s:`An Azure VM needs to read a secret from Key Vault without stored credentials. What should you configure?`,
o:[`A managed identity with a Key Vault role`,`A client secret saved in the VM's registry`,`A user account with a non-expiring password`,`A storage account key shared with the VM`],
a:[0],
e:`Enable a managed identity on the VM and grant it a role such as Key Vault Secrets User. The VM gets tokens from Azure without any stored credential.`},

{d:"IAG",s:`Several apps registered in Microsoft Entra ID still use client secrets. What's the most secure alternative for apps running in Azure?`,
o:[`Managed identities`,`Longer client secrets`,`Shared admin accounts`,`Password vault exports`],
a:[0],
e:`Managed identities remove credentials entirely for Azure-hosted workloads. For workloads outside Azure, certificates or federated identity credentials are better than secrets.`},

{d:"IAG",s:`Which Key Vault permission model does Microsoft recommend for controlling data-plane access?`,
o:[`Azure role-based access control`,`Vault access policies`,`Shared access signatures per secret`,`Storage account keys in the vault`],
a:[0],
e:`Azure RBAC is the recommended permission model for Key Vault. It supports fine-grained built-in roles, PIM, and consistent management across Azure. Access policies are the legacy model.`},

{d:"IAG",s:`An app only needs to read secret values from Key Vault. Which built-in role follows least privilege?`,
o:[`Key Vault Secrets User`,`Key Vault Administrator`,`Key Vault Secrets Officer`,`Key Vault Contributor`],
a:[0],
e:`Key Vault Secrets User can read secret contents. Secrets Officer can manage secrets, Administrator can manage everything in the vault's data plane, and Contributor manages the vault resource but not data.`},

{d:"IAG",s:`A deleted secret must be recoverable, and nobody should be able to permanently purge it during the retention period. What should be enabled?`,
o:[`Purge protection`,`Secret expiration`,`Public network access`,`Access policies`],
a:[0],
e:`Soft delete keeps deleted objects for a retention period (7–90 days), and purge protection prevents anyone from permanently deleting them until that period ends. Purge protection can't be turned off once enabled.`},

{d:"IAG",s:`Key Vault should accept traffic only from one virtual network and from trusted Azure services like Azure Backup. How should you configure its firewall?`,
o:[`Allow selected networks plus trusted services`,`Allow all networks and require MFA for every request`,`Disable the firewall and add a resource lock`,`Allow public access and rotate keys daily`],
a:[0],
e:`Key Vault's firewall can restrict access to selected virtual networks and IP ranges, with an exception that lets trusted Microsoft services bypass it. Private endpoints remove public exposure entirely.`},

{d:"IAG",s:`Encryption keys must be rotated automatically every 90 days. What should you configure in Key Vault?`,
o:[`A key rotation policy`,`A purge protection setting`,`A secret expiration date`,`A certificate issuer`],
a:[0],
e:`Key rotation policies automatically create new key versions on a schedule and can notify before expiry. Services that reference the versionless key ID pick up the new version.`},

{d:"IAG",s:`What does Microsoft Defender for Key Vault detect?`,
o:[`Unusual access, like from suspicious IPs`,`Weak passwords used by Microsoft Entra users`,`Malware inside files stored in blob containers`,`Misconfigured network security group rules`],
a:[0],
e:`Defender for Key Vault alerts on anomalous and potentially harmful access, such as access from a Tor exit node, unusual users or apps, or abnormal volumes of operations.`},

{d:"IAG",s:`Developers sometimes leave secrets in VM disks and code repositories. Which capability can find them without installing agents?`,
o:[`Defender CSPM secrets scanning`,`Azure Policy deny effects`,`Key Vault soft delete and purge`,`Network Watcher virtual network flow logs`],
a:[0],
e:`Defender CSPM's agentless secrets scanning finds plaintext secrets on VMs, in DevOps code repositories, and in cloud deployments, and attack path analysis shows which secrets expose critical resources.`},

{d:"IAG",s:`Storage accounts must never be created with public network access enabled. Which Azure Policy effect blocks noncompliant deployments?`,
o:[`Deny`,`Audit`,`Disabled`,`Append`],
a:[0],
e:`The Deny effect blocks create or update requests that don't comply. Audit only reports noncompliance, and Append adds fields to requests.`},

{d:"IAG",s:`An Azure Policy should automatically deploy diagnostic settings to existing resources that lack them. What does the assignment need?`,
o:[`A managed identity and a remediation task`,`A resource lock on the resource group`,`An exemption for every existing resource`,`A Deny effect instead of DeployIfNotExists`],
a:[0],
e:`DeployIfNotExists and Modify policies need a managed identity with permission to make changes. New resources are handled automatically, and existing ones are fixed with a remediation task.`},

{d:"IAG",s:`A sandbox resource group should be excluded from a policy initiative for six months. What should you create?`,
o:[`A policy exemption with an expiration date`,`A new initiative without that policy`,`A resource lock on the sandbox`,`A custom RBAC role for the sandbox`],
a:[0],
e:`Exemptions exclude a scope from a policy or initiative assignment, with a category (waiver or mitigated) and an optional expiration, without changing the assignment itself.`},

{d:"IAG",s:`Where can you see how Azure resources measure up against standards such as PCI DSS and the Microsoft cloud security benchmark?`,
o:[`The Defender for Cloud compliance dashboard`,`The Azure Advisor cost recommendations page`,`The Key Vault access policies page`,`The Network Watcher topology view`],
a:[0],
e:`Defender for Cloud's regulatory compliance dashboard maps assessments to each standard's controls. The Microsoft cloud security benchmark is assigned by default, and other standards can be added.`},

{d:"IAG",s:`A critical production database must not be deleted accidentally, even by Owners. What should you apply?`,
o:[`A CanNotDelete resource lock`,`A ReadOnly policy exemption`,`An Audit policy assignment`,`A Reader role assignment`],
a:[0],
e:`A CanNotDelete (Delete) lock prevents deletion while allowing changes. Locks apply to everyone, including Owners, until removed.`},

{d:"IAG",s:`A team lead should be able to assign Azure roles to others, but only the Reader and Contributor roles, and nothing else. What should you use?`,
o:[`RBAC Administrator with conditions`,`User Access Administrator with no conditions`,`Owner at the subscription scope`,`Global Administrator in Microsoft Entra ID`],
a:[0],
e:`Role Based Access Control Administrator can manage role assignments, and conditions can limit which roles and principals it can assign — far narrower than User Access Administrator or Owner.`},

{d:"IAG",s:`A custom Azure role should allow restarting VMs but not deleting them. Which property lists the allowed operations?`,
o:[`Actions`,`NotDataActions`,`AssignableScopes`,`Description`],
a:[0],
e:`Actions lists permitted control-plane operations, such as Microsoft.Compute/virtualMachines/restart/action. NotActions subtracts from them, DataActions covers data-plane operations, and AssignableScopes sets where the role can be assigned.`},

{d:"IAG",s:`An audit finds many users with Owner on subscriptions though they only deploy resources. What's the right remediation?`,
o:[`Assign only the roles they need`,`Add a second Owner so changes need two people`,`Lock the subscriptions as ReadOnly permanently`,`Convert the users to guest accounts`],
a:[0],
e:`Remove standing overprivileged assignments, assign roles such as Contributor or a specific role at the narrowest scope, and use PIM for any remaining privileged access.`},

{d:"IAG",s:`Ransomware operators might try to delete backups. Which Azure Backup feature requires approval from a separate team before critical operations, like disabling soft delete?`,
o:[`Multi-user authorization with Resource Guard`,`Cross-region restore to the paired region`,`Backup reports in Azure Monitor`,`Instant restore snapshots`],
a:[0],
e:`Multi-user authorization uses a Resource Guard, typically owned by a different team or tenant, so protected operations on a vault need that team's permission.`},

{d:"IAG",s:`Backup data must not be deleted or changed before it expires, even by vault admins. What should you enable on the Recovery Services vault?`,
o:[`Immutability, locked`,`Geo-redundant storage`,`Backup alerts by email`,`Cross-subscription restore`],
a:[0],
e:`An immutable vault prevents operations that could delete or shorten the retention of recovery points. Once locked, immutability can't be disabled. Soft delete adds a further recovery window.`},

{d:"IAG",s:`Security controls should be applied consistently when infrastructure is deployed from templates. What's a good practice?`,
o:[`Scan IaC templates in pipelines and assign policies as code`,`Deploy everything manually in the portal and review it later`,`Grant developers Owner so they can fix issues quickly`,`Disable Azure Policy during deployments to save time`],
a:[0],
e:`Scanning Bicep, ARM, and Terraform templates in CI/CD (for example, with Defender for Cloud DevOps security) catches misconfigurations early, and managing policy assignments as code keeps guardrails consistent.`},

{d:"IAG",s:`Which Azure Policy effect only reports resources that don't comply, without changing or blocking them?`,
o:[`Audit`,`Deny`,`Modify`,`DeployIfNotExists`],
a:[0],
e:`Audit records noncompliance in compliance results. It's often used before switching to Deny, to understand impact.`},

{d:"IAG",s:`What's an Azure Policy initiative?`,
o:[`A group of policy definitions assigned as one unit`,`A single rule that applies only to virtual machines`,`A Defender for Cloud plan for one workload type`,`A role assignment for policy administrators`],
a:[0],
e:`Initiatives (policy set definitions) group related policies toward a goal, such as a regulatory standard, so they can be assigned and tracked together.`},

{d:"IAG",s:`How can you add a regulatory standard, such as ISO 27001, to Defender for Cloud's compliance tracking?`,
o:[`Add it in Defender for Cloud security policies`,`Purchase a separate ISO license in the Azure portal`,`Create a resource lock named after the standard`,`Enable the standard in Key Vault settings`],
a:[0],
e:`In Environment settings, under security policies, you can add built-in regulatory standards (and custom ones) to subscriptions, which then appear in the regulatory compliance dashboard.`},

{d:"IAG",s:`Which Microsoft Entra custom role scope lets a role apply only to one specific app registration?`,
o:[`The individual application scope`,`The root management group scope`,`The subscription scope`,`The resource group scope`],
a:[0],
e:`Microsoft Entra custom roles can be assigned at tenant, administrative unit, or individual app scope. Management groups, subscriptions, and resource groups are Azure RBAC scopes.`},

{d:"NET",s:`Which storage account setting forces clients to use Microsoft Entra ID instead of account keys?`,
o:[`Disallow shared key authorization`,`Enable hierarchical namespace`,`Allow blob public access`,`Enable large file shares`],
a:[0],
e:`Disabling shared key authorization blocks requests signed with account keys (and SAS tokens signed with them), so clients must use Microsoft Entra ID, which supports RBAC and auditing.`},

{d:"NET",s:`A partner needs temporary read access to one blob container. Which SAS type does Microsoft recommend?`,
o:[`A user delegation SAS`,`An account SAS`,`A service SAS signed by a key`,`A SAS with no expiry`],
a:[0],
e:`A user delegation SAS is secured with Microsoft Entra credentials rather than the account key, so it's easier to audit and revoke. Keep expiry times short.`},

{d:"NET",s:`How can you revoke several service SAS tokens for a container at once without rotating the account key?`,
o:[`Change or delete its stored access policy`,`Delete the storage account and recreate it`,`Disable soft delete on the container`,`Move the container to another region`],
a:[0],
e:`Service SAS tokens tied to a stored access policy can be revoked by changing the policy's expiry or deleting it.`},

{d:"NET",s:`A storage account should accept requests only from one virtual network and the company's public IP range. What should you configure?`,
o:[`Storage firewall network rules`,`Blob versioning rules`,`Lifecycle management rules`,`Object replication rules`],
a:[0],
e:`Storage firewall rules restrict access to selected virtual networks and IP ranges, with exceptions for trusted services and resource instance rules for specific Azure resources.`},

{d:"NET",s:`Which Defender for Storage feature scans newly uploaded blobs for malware?`,
o:[`On-upload malware scanning`,`Sensitive data threat detection`,`Activity monitoring`,`Blob inventory reports`],
a:[0],
e:`Malware scanning checks blobs as they're uploaded and can tag or trigger automation for infected files. Activity monitoring detects suspicious access, and sensitive data threat detection prioritizes alerts on sensitive data.`},

{d:"NET",s:`Which storage setting ensures data can only be sent over HTTPS?`,
o:[`Secure transfer required`,`Hierarchical namespace`,`Default access tier`,`Blob versioning for all containers`],
a:[0],
e:`Secure transfer required rejects HTTP requests and unencrypted SMB connections. Set a minimum TLS version as well.`},

{d:"NET",s:`Anonymous users must never read blobs in any container of a storage account. What should you set?`,
o:[`Anonymous blob access disabled`,`Default access tier = Cool`,`Soft delete for blobs = Enabled`,`Change feed = Enabled`],
a:[0],
e:`Disabling anonymous blob access at the account level overrides container-level public access settings, preventing anonymous reads.`},

{d:"NET",s:`Azure SQL Database must reject SQL logins and accept only Microsoft Entra identities. What should you enable?`,
o:[`Microsoft Entra-only authentication`,`Transparent data encryption`,`Dynamic data masking for all users`,`Ledger tables with digest storage`],
a:[0],
e:`Microsoft Entra-only authentication disables SQL authentication on the server, so only Entra identities, with MFA and Conditional Access, can connect.`},

{d:"NET",s:`Credit card numbers must stay encrypted even from database administrators, with keys held only by the client app. Which feature fits?`,
o:[`Always Encrypted`,`Transparent data encryption`,`Dynamic data masking`,`Row-level security`],
a:[0],
e:`Always Encrypted encrypts column data on the client, so the database engine and its admins never see plaintext. TDE encrypts data at rest but decrypts it for queries.`},

{d:"NET",s:`Support staff should see only the last four digits of customers' phone numbers in query results. Which feature fits?`,
o:[`Dynamic data masking`,`Always Encrypted`,`Transparent data encryption`,`Auditing to Log Analytics`],
a:[0],
e:`Dynamic data masking hides sensitive values in query results for nonprivileged users without changing the stored data. It isn't a substitute for encryption or access control.`},

{d:"NET",s:`Auditing must cover every database on an Azure SQL logical server, including databases created later. Where should you enable it?`,
o:[`At the server level`,`On each database individually`,`In the client connection string`,`In the elastic pool settings`],
a:[0],
e:`Server-level auditing applies to all existing and new databases on the server. Audit logs can go to a storage account, Log Analytics workspace, or event hub.`},

{d:"NET",s:`Which Defender for Cloud plan covers Azure SQL, SQL Server on machines, open-source relational databases, and Cosmos DB?`,
o:[`Defender for Databases`,`Defender for Storage`,`Defender for Servers`,`Defender CSPM (posture only)`],
a:[0],
e:`Defender for Databases includes protections for Azure SQL, SQL servers on machines, open-source relational databases (PostgreSQL and MySQL), and Azure Cosmos DB, such as alerts for SQL injection and anomalous access.`},

{d:"NET",s:`Which Defender for SQL capability identifies database misconfigurations such as excessive permissions?`,
o:[`Vulnerability assessment`,`Dynamic data masking`,`Always Encrypted`,`Active geo-replication`],
a:[0],
e:`SQL vulnerability assessment scans database configuration against best practices and lets you set a baseline. Advanced threat protection alerts on attacks such as SQL injection.`},

{d:"NET",s:`Which Azure SQL setting should be turned off to stop any Azure service, including other customers' resources, from reaching the server through its firewall?`,
o:[`Allow Azure services to access server`,`Transparent data encryption`,`Microsoft Entra-only authentication`,`Automatic tuning`],
a:[0],
e:`That setting adds a rule allowing connections from any Azure IP, including other tenants. Turn it off and use private endpoints or specific virtual network rules instead.`},

{d:"NET",s:`Web servers and database servers are in the same subnet. How can NSG rules allow web-to-database traffic without managing IP addresses?`,
o:[`Use application security groups`,`Use service tags for the web servers`,`Use a route table with a next hop`,`Use a private DNS zone for each server`],
a:[0],
e:`Application security groups group VM network interfaces by role, so rules can reference "WebServers" and "DbServers" instead of IP addresses.`},

{d:"NET",s:`How are NSG rules processed?`,
o:[`By priority, lowest number first, until one matches`,`All rules run, and the most permissive one wins`,`Alphabetically by rule name, then by port`,`Randomly, so every rule needs a unique name`],
a:[0],
e:`NSG rules are evaluated in priority order, from the lowest number, and processing stops at the first match.`},

{d:"NET",s:`Security must block high-risk ports across hundreds of virtual networks, and teams can't override it with their own NSGs. What should you use?`,
o:[`A Virtual Network Manager admin rule`,`A route table attached to every subnet`,`An application security group per team`,`A private endpoint for each virtual network`],
a:[0],
e:`Virtual Network Manager security admin rules are evaluated before NSG rules, so a Deny can't be overridden by teams' NSGs, and they can be applied to many virtual networks at once.`},

{d:"NET",s:`A Virtual WAN hub must inspect and filter traffic between spokes and to the internet. What should you deploy?`,
o:[`A secured virtual hub with Azure Firewall`,`An NSG on the hub's gateway subnet`,`A Private Link service in each spoke`,`A Bastion host in the hub`],
a:[0],
e:`A secured virtual hub has Azure Firewall (or a supported third-party solution) managed through Firewall Manager, and routing intent sends private and internet traffic through it.`},

{d:"NET",s:`Remote users connect with point-to-site VPN. How can they authenticate with Microsoft Entra ID and Conditional Access?`,
o:[`Use Entra ID authentication`,`Use pre-shared keys on each laptop`,`Use RADIUS with local accounts only`,`Use certificate authentication with no expiry`],
a:[0],
e:`Point-to-site VPN Gateway supports Microsoft Entra ID authentication over the OpenVPN protocol, enabling MFA and Conditional Access for VPN users.`},

{d:"NET",s:`A site-to-site VPN must use specific encryption and integrity algorithms required by policy. What should you configure?`,
o:[`A custom IPsec/IKE policy`,`A higher VPN Gateway SKU only`,`An NSG on the GatewaySubnet`,`A user-defined route to the gateway`],
a:[0],
e:`Custom IPsec/IKE policies set the encryption, integrity, DH group, and PFS settings for a connection, instead of using the default proposals.`},

{d:"NET",s:`Users need access to on-premises apps through identity-aware access instead of a full network VPN. Which service fits?`,
o:[`Microsoft Entra Private Access`,`Azure VPN Gateway point-to-site`,`Azure ExpressRoute`,`Azure Virtual WAN`],
a:[0],
e:`Private Access provides Zero Trust network access to private apps per application, with Conditional Access, through the Global Secure Access client and on-premises connectors.`},

{d:"NET",s:`An app must reach a storage account over a private IP address in its virtual network, with public access disabled. What should you create?`,
o:[`A private endpoint and private DNS`,`A service endpoint on the subnet`,`A public IP prefix for the app`,`A NAT gateway for the subnet`],
a:[0],
e:`A private endpoint gives the storage account a private IP in your virtual network, and a private DNS zone such as privatelink.blob.core.windows.net resolves its name to that IP.`},

{d:"NET",s:`What's the difference between a service endpoint and a private endpoint?`,
o:[`A private endpoint puts the service in your VNet`,`A service endpoint gives the service a private IP in your VNet`,`Service endpoints work across tenants; private endpoints don't`,`They're the same feature in different portals`],
a:[0],
e:`Private endpoints bring the service into your virtual network with a private IP. Service endpoints keep the service's public endpoint but route subnet traffic over the Azure backbone and let the service restrict access to that subnet.`},

{d:"NET",s:`Your company hosts a service behind a Standard Load Balancer and wants customers to reach it privately from their own virtual networks. What should you create?`,
o:[`A Private Link service`,`A private DNS zone`,`A VNet peering to each customer`,`A Bastion host`],
a:[0],
e:`A Private Link service exposes your service behind a Standard Load Balancer so consumers can connect through private endpoints in their own networks, without peering or public exposure.`},

{d:"NET",s:`Outbound traffic must be filtered by URL categories and inspected with TLS decryption and IDPS. Which Azure Firewall SKU is needed?`,
o:[`Premium`,`Standard`,`Basic`,`Developer`],
a:[0],
e:`Azure Firewall Premium adds TLS inspection, signature-based IDPS, URL filtering, and web categories on top of Standard features.`},

{d:"NET",s:`In an Azure Firewall policy, in what order are rule collection types processed?`,
o:[`DNAT, network, then application`,`Application, then network, then DNAT`,`Network, then DNAT, then application`,`All types in parallel, deny first`],
a:[0],
e:`DNAT rules are processed first, then network rules, then application rules, each by priority. If a network rule matches, application rules aren't evaluated for that traffic.`},

{d:"NET",s:`Which Azure Firewall rule type allows outbound HTTPS to *.contoso.com by FQDN?`,
o:[`An application rule`,`A DNAT rule`,`A network rule by port`,`A NAT gateway rule`],
a:[0],
e:`Application rules filter HTTP/S and SQL traffic by FQDN, including wildcards and FQDN tags. Network rules filter by IP, port, and protocol, and DNAT rules translate inbound traffic.`},

{d:"NET",s:`A VM can't reach a database, and you suspect an NSG. Which Network Watcher tool shows whether a specific packet would be allowed or denied, and by which rule?`,
o:[`IP flow verify`,`Packet capture`,`Topology`,`Traffic analytics`],
a:[0],
e:`IP flow verify tests a 5-tuple against the NSGs applied to a VM's NIC and returns the result and the rule responsible. Effective security rules shows all rules in effect.`},

{d:"NET",s:`Where can you see the combined NSG rules that actually apply to a VM's network interface, from both subnet and NIC NSGs?`,
o:[`Effective security rules`,`Connection monitor`,`Next hop analysis`,`VPN gateway troubleshoot`],
a:[0],
e:`Effective security rules shows the aggregated rules from NSGs on the NIC and subnet (and Virtual Network Manager security admin rules), which helps troubleshoot unexpected blocks.`},

{d:"NET",s:`Which logs should be used to record IP traffic flowing through a virtual network for security analysis going forward?`,
o:[`Virtual network flow logs`,`NSG diagnostic settings only`,`Azure Activity logs`,`Key Vault audit logs`],
a:[0],
e:`Virtual network flow logs record IP traffic at the VNet level and are replacing NSG flow logs, whose new creation has been retired. Traffic analytics can analyze them.`},

{d:"NET",s:`Which tag can an NSG rule use to allow traffic from Azure Load Balancer health probes without listing IPs?`,
o:[`The AzureLoadBalancer service tag`,`An application security group named LB`,`A custom IP prefix for probes`,`The Internet service tag`],
a:[0],
e:`Service tags represent groups of Microsoft IP ranges, such as AzureLoadBalancer, Storage, or AzureCloud, and are updated automatically.`},

{d:"NET",s:`A storage account's firewall blocks access, but a specific Azure Synapse workspace in the same tenant must still reach it. What's the most targeted option?`,
o:[`A resource instance rule`,`Allow access from all networks`,`Allow all trusted Microsoft services`,`A public IP rule for the region`],
a:[0],
e:`Resource instance rules allow specific resource instances, by resource ID, to access the storage account through the firewall, which is narrower than the trusted services exception.`},

{d:"NET",s:`How do you make sure clients resolve a storage account's name to its private endpoint IP?`,
o:[`Link a privatelink private DNS zone to the VNet`,`Add the storage account to an application security group`,`Enable the storage firewall's trusted services exception`,`Create a public DNS A record for the IP`],
a:[0],
e:`Private DNS zones such as privatelink.blob.core.windows.net, linked to the virtual network (or forwarded from on-premises DNS), resolve the service's name to the private endpoint IP.`},

{d:"NET",s:`Which Azure Firewall feature uses Microsoft's threat intelligence to alert on or deny traffic to known malicious IPs and domains?`,
o:[`Threat intelligence-based filtering`,`Forced tunneling to on-premises`,`DNS proxy with custom servers`,`SNAT private ranges`],
a:[0],
e:`Threat intelligence-based filtering can alert or alert and deny traffic to and from known malicious IP addresses and FQDNs from the Microsoft Threat Intelligence feed.`},

{d:"NET",s:`A storage account holds legal records that must not be modified or deleted for seven years. What should you configure?`,
o:[`A time-based immutability policy`,`A lifecycle management rule`,`A shared access signature`,`A cool access tier`],
a:[0],
e:`Immutable storage with a time-based retention policy keeps blobs in a write once, read many (WORM) state for the retention period. Locked policies can't be shortened.`},

{d:"CMP",s:`Before rolling out Microsoft 365 Copilot, an organization wants to find SharePoint sites where sensitive content is shared too broadly. What should it use?`,
o:[`SharePoint access governance reports`,`Azure Network Watcher topology`,`Defender for Storage malware scanning`,`Key Vault access policies`],
a:[0],
e:`SharePoint Advanced Management data access governance reports identify sites with oversharing, such as content shared with "Everyone except external users", so owners can fix permissions before Copilot surfaces that content.`},

{d:"CMP",s:`Which Microsoft Purview capability helps identify risky use of Copilot and other AI apps, such as sensitive data in prompts?`,
o:[`DSPM for AI`,`Compliance Manager assessments`,`eDiscovery (Premium) holds`,`Records management file plans`],
a:[0],
e:`Purview DSPM for AI shows AI interactions, sensitive data in prompts and responses, and oversharing risks, and recommends policies to reduce them.`},

{d:"CMP",s:`A Copilot Studio agent could be tricked by a prompt injection into running a tool that leaks data. What can block unsafe tool invocations at runtime?`,
o:[`A Defender real-time protection rule`,`An Azure Policy deny assignment`,`A Key Vault rotation policy`,`An NSG on the agent's subnet`],
a:[0],
e:`Defender's real-time protection evaluates agent activity, including Copilot Studio tool invocations once Copilot Studio is connected. A default rule audits, and custom rules can block risky actions before they run.`},

{d:"CMP",s:`What is Microsoft Entra Agent ID?`,
o:[`An identity framework for authenticating and governing AI agents`,`A license that lets agents use Microsoft 365 apps for free`,`A database of every prompt users send to Copilot`,`A network firewall for traffic from AI models`],
a:[0],
e:`Microsoft Entra Agent ID provides agent identities and agent identity blueprints so organizations can authenticate, authorize, govern, and protect AI agents like other identities.`},

{d:"CMP",s:`What's an agent identity blueprint in Microsoft Entra Agent ID?`,
o:[`A template for agent identities`,`A diagram of the agent's network connections`,`A backup copy of an agent's conversation history`,`A Conditional Access policy for human users`],
a:[0],
e:`Blueprints act as templates for creating individual agent identities in a parent-child relationship, so consistent security policies can apply across many agents.`},

{d:"CMP",s:`Agents should be blocked from accessing resources when their risk is high. What should you configure?`,
o:[`A Conditional Access policy for agents`,`A resource lock on each agent's resource group`,`An Azure Firewall rule for each agent's IP`,`A user consent setting for every agent`],
a:[0],
e:`Conditional Access for agents applies policies to agent identities, including risk-based conditions from ID Protection for agents, much as it does for users and workloads.`},

{d:"CMP",s:`An agent identity was compromised. How can you understand what it could reach?`,
o:[`Analyze its blast radius`,`Check its Azure Advisor score`,`Review its storage account keys`,`Run a Network Watcher packet capture`],
a:[0],
e:`Defender XDR's graph-based analysis shows the resources, data, and permissions reachable from a compromised agent identity, helping prioritize containment.`},

{d:"CMP",s:`Who should be assigned to keep an agent identity accountable, review its access, and act when it's no longer needed?`,
o:[`A sponsor or owner for the agent`,`Every Global Administrator`,`The agent's own service principal`,`The Microsoft support team`],
a:[0],
e:`Identity governance for agents assigns human sponsors or owners who are accountable for the agent, with lifecycle and access reviews to remove access that's no longer needed.`},

{d:"CMP",s:`Many apps call Foundry model deployments. How can you cap each app's tokens per minute and screen prompts for harmful content centrally?`,
o:[`Use an API Management AI gateway`,`Give each app its own subscription`,`Use a larger model for every app`,`Add an NSG to the Foundry resource`],
a:[0],
e:`API Management's AI gateway applies policies such as llm-token-limit per consumer, content safety checks, managed identity authentication to Foundry, load balancing, and token metrics.`},

{d:"CMP",s:`Which API Management policy enforces a tokens-per-minute limit per API consumer for LLM APIs?`,
o:[`llm-token-limit`,`rate-limit-by-key`,`validate-jwt`,`ip-filter`],
a:[0],
e:`llm-token-limit counts AI tokens and enforces TPM limits or quotas per counter key, such as a subscription ID. rate-limit-by-key limits calls, not tokens.`},

{d:"CMP",s:`How should API Management authenticate to Foundry model deployments without API keys?`,
o:[`With a managed identity`,`With a key stored in the policy XML`,`With each user's personal password`,`With an anonymous endpoint`],
a:[0],
e:`The AI gateway can authenticate to Azure AI services with API Management's managed identity, which needs an appropriate role on the Foundry resource.`},

{d:"CMP",s:`Which Defender for Cloud plan detects threats such as jailbreak attempts and sensitive data leakage in Azure AI applications?`,
o:[`Defender for AI Services`,`Defender for Storage`,`Defender for DNS queries`,`Defender for Key Vault`],
a:[0],
e:`Defender for AI Services provides threat protection for AI workloads, alerting on prompt injection and jailbreak attempts, data leakage, and suspicious access, and can include prompt evidence in alerts.`},

{d:"CMP",s:`A Foundry agent reads emails that might contain hidden instructions. What should be enabled to detect indirect prompt injection?`,
o:[`Guardrails with prompt shields`,`A higher temperature for the model`,`A larger context window for the agent`,`Purge protection on the Foundry resource`],
a:[0],
e:`Foundry guardrails include prompt shields, which detect jailbreak attempts in user prompts and indirect prompt injection in documents and tool outputs, plus content filters for harmful categories.`},

{d:"CMP",s:`Where in Defender for Cloud can security teams see AI workloads, their risks, and sensitive data exposure in one view?`,
o:[`The Data and AI security dashboard`,`The Azure Advisor cost dashboard`,`The Key Vault overview page`,`The Network Watcher topology`],
a:[0],
e:`The Data and AI security dashboard summarizes data stores and AI resources, sensitive data, attack paths, and alerts to help prioritize risks across data and AI workloads.`},

{d:"CMP",s:`Where can Microsoft 365 admins see which agents are available to users and block an agent organization-wide?`,
o:[`The Microsoft 365 admin center agent pages`,`The Azure Firewall policy page`,`The Defender for Storage settings`,`The Entra Connect configuration wizard`],
a:[0],
e:`The Microsoft 365 admin center lets admins inventory agents, control who can use them, and block or remove agents across the organization.`},

{d:"CMP",s:`Microsoft recommends which option for encrypting VM disks end to end, including temp disks and caches, without using in-guest BitLocker?`,
o:[`Encryption at host`,`Azure Disk Encryption`,`Dynamic data masking`,`Always Encrypted`],
a:[0],
e:`Encryption at host encrypts temp disks and caches on the VM host, with platform- or customer-managed keys. Microsoft recommends it over Azure Disk Encryption, which is scheduled for retirement.`},

{d:"CMP",s:`Admins need RDP to VMs that have no public IPs, and RDP sessions must be recorded. Which Azure Bastion SKU fits?`,
o:[`Premium`,`Developer`,`Basic`,`Standard`],
a:[0],
e:`Bastion Premium adds session recording and private-only deployment on top of Standard features. Developer and Basic SKUs have fewer features.`},

{d:"CMP",s:`Management ports on VMs should stay closed until an admin requests access for a limited time. What should you enable?`,
o:[`Just-in-time VM access`,`Adaptive application controls`,`Azure DDoS Protection`,`Encryption at host`],
a:[0],
e:`JIT VM access, part of Defender for Servers Plan 2, keeps ports like RDP and SSH closed with NSG or Azure Firewall rules and opens them only for approved requests from specific IPs for a set time.`},

{d:"CMP",s:`On-premises and AWS servers should be managed with Azure Policy and protected by Defender for Servers. What enables this?`,
o:[`Azure Arc`,`Azure Bastion`,`Azure Migrate`,`Azure Backup`],
a:[0],
e:`Azure Arc projects non-Azure servers into Azure Resource Manager, so Azure Policy, machine configuration, and Defender for Servers apply to them. AWS and GCP connectors can automate Arc onboarding.`},

{d:"CMP",s:`Which Defender for Servers plan includes just-in-time VM access, agentless scanning, and file integrity monitoring?`,
o:[`Plan 2`,`Plan 1`,`Foundational CSPM`,`Defender for Storage`],
a:[0],
e:`Plan 1 includes Defender for Endpoint integration and core vulnerability management. Plan 2 adds JIT, agentless scanning, file integrity monitoring, and more.`},

{d:"CMP",s:`How does agentless scanning in Defender for Servers assess VMs?`,
o:[`By analyzing snapshots of the VMs' disks`,`By installing a scanner agent on every VM`,`By logging in with each VM's admin password`,`By capturing all network traffic to the VMs`],
a:[0],
e:`Agentless scanning takes disk snapshots and analyzes them out of band for vulnerabilities, software inventory, secrets, and malware, with no performance impact on the VM.`},

{d:"CMP",s:`A VM must boot only signed, trusted components and have a virtual TPM. Which security type should you choose?`,
o:[`Trusted launch`,`Standard`,`Spot priority`,`Burstable B-series`],
a:[0],
e:`Trusted launch enables secure boot, vTPM, and boot integrity monitoring. Confidential VMs go further with hardware-based memory encryption.`},

{d:"CMP",s:`Linux servers in Azure and Arc must have SSH password authentication disabled, checked and corrected automatically. What should you use?`,
o:[`A machine configuration policy`,`A resource lock on each server`,`A Defender for Storage scan`,`A Key Vault rotation policy`],
a:[0],
e:`Machine configuration (formerly guest configuration) audits and can apply OS settings inside machines through Azure Policy assignments, using an extension and a managed identity.`},

{d:"CMP",s:`Which Defender for Containers capability finds vulnerabilities in images stored in Azure Container Registry?`,
o:[`Agentless registry image scanning`,`Just-in-time access to container nodes`,`Encryption at host for container disks`,`Dynamic data masking for container logs`],
a:[0],
e:`Defender for Containers scans images in ACR and running images for vulnerabilities, and its sensor detects runtime threats in Kubernetes clusters.`},

{d:"CMP",s:`An AKS cluster should use Microsoft Entra ID for user authentication and disallow static local admin credentials. What should you configure?`,
o:[`Entra ID integration, no local accounts`,`A public API server with no restrictions`,`A single shared kubeconfig for all admins`,`Basic authentication on the API server`],
a:[0],
e:`AKS-managed Entra integration with local accounts disabled forces all access through Entra identities, which supports Conditional Access and auditing, with Kubernetes RBAC or Azure RBAC for authorization.`},

{d:"CMP",s:`Which practice secures an Azure Container Registry?`,
o:[`Disable the admin user; use AcrPull roles`,`Enable the admin user and share its password`,`Allow anonymous pull for all repositories`,`Grant Owner to every build pipeline`],
a:[0],
e:`The admin user is a shared account. Use Microsoft Entra identities with roles like AcrPull and AcrPush, managed identities for pipelines, and private endpoints where possible.`},

{d:"CMP",s:`An Azure Functions app should only be callable by users signed in with Microsoft Entra ID, without writing auth code. What should you enable?`,
o:[`Built-in App Service authentication`,`Function-level access keys only`,`Anonymous HTTP triggers`,`A public IP restriction allow-all rule`],
a:[0],
e:`Built-in authentication (Easy Auth) handles sign-in with Microsoft Entra ID before requests reach the code. Function keys are shared secrets and aren't user authentication.`},

{d:"CMP",s:`An App Service web app must be reachable only from a company front end, not from the internet. What can enforce this?`,
o:[`Access restrictions or private endpoints`,`A larger App Service plan tier`,`A custom domain with a certificate`,`Deployment slots for staging`],
a:[0],
e:`Access restrictions allow traffic only from specified IPs, service tags, or virtual network subnets, and private endpoints remove public exposure entirely.`},

{d:"CMP",s:`Which Logic Apps setting hides sensitive values, such as passwords, from run history?`,
o:[`Secure inputs and outputs`,`Concurrency control`,`Retry policy with backoff`,`Split on array items`],
a:[0],
e:`Securing inputs and outputs on an action or trigger hides their data in run history, so secrets don't appear to anyone viewing runs.`},

{d:"CMP",s:`A public web app needs protection from SQL injection and cross-site scripting at the edge, globally. What should you use?`,
o:[`WAF on Azure Front Door`,`An NSG on the app's subnet`,`Azure DDoS IP Protection only`,`A private DNS zone for the app`],
a:[0],
e:`WAF on Front Door (or Application Gateway for regional apps) uses managed rule sets to block common web attacks, plus custom rules such as rate limiting and geo-filtering.`},

{d:"CMP",s:`Which API Management policy validates that callers present a valid Microsoft Entra access token?`,
o:[`validate-jwt`,`llm-token-limit`,`set-backend-service`,`cache-lookup`],
a:[0],
e:`validate-jwt (or validate-azure-ad-token) checks a JWT's signature, issuer, audience, and claims before the request reaches the back-end API.`},

{d:"POS",s:`Which Defender CSPM feature shows how an attacker could chain misconfigurations and vulnerabilities to reach a critical resource?`,
o:[`Attack path analysis`,`Secure score`,`Regulatory compliance`,`Workflow automation`],
a:[0],
e:`Attack path analysis uses the cloud security graph to find exploitable paths from exposed entry points to sensitive assets, so you can fix the most impactful issues first.`},

{d:"POS",s:`A security engineer wants to query for internet-exposed VMs with high-severity vulnerabilities that have access to a key vault. Which tool fits?`,
o:[`Cloud security explorer`,`Azure Advisor recommendations`,`Network Watcher connection monitor`,`Cost analysis`],
a:[0],
e:`Cloud security explorer runs graph-based queries across resources, exposure, vulnerabilities, identities, and data, available with Defender CSPM.`},

{d:"POS",s:`Which Defender for Cloud capability is free and includes secure score and basic recommendations?`,
o:[`Foundational CSPM`,`Defender CSPM`,`Defender for Servers Plan 2`,`Defender for AI Services`],
a:[0],
e:`Foundational CSPM is included at no cost, with secure score, recommendations, and the Microsoft cloud security benchmark. Defender CSPM adds attack paths, security explorer, and agentless scanning.`},

{d:"POS",s:`What determines a subscription's secure score in Defender for Cloud?`,
o:[`How many recommendations are fixed`,`How many alerts were closed this month`,`How much the subscription spends`,`How many users have the Owner role`],
a:[0],
e:`Secure score reflects the share of recommendations, grouped into security controls, that have been remediated. Fixing every recommendation in a control earns its points.`},

{d:"POS",s:`Which workload protection plan should be enabled to get threat alerts for Azure App Service apps?`,
o:[`Defender for App Service`,`Defender for Storage`,`Defender for DNS queries`,`Defender for Key Vault`],
a:[0],
e:`Defender for App Service detects attacks against apps running on App Service, such as suspicious requests and dangling DNS. Each workload type has its own plan.`},

{d:"POS",s:`How do you bring AWS accounts into Defender for Cloud?`,
o:[`Create an AWS connector`,`Install Azure Bastion in the AWS account`,`Copy AWS logs into a Key Vault`,`Add AWS to a resource lock`],
a:[0],
e:`The AWS connector uses a CloudFormation template to create the required roles. Google Cloud is connected similarly with a GCP connector.`},

{d:"POS",s:`Which vulnerability assessment solution is integrated into Defender for Servers for Azure VMs by default?`,
o:[`Defender Vulnerability Management`,`Azure Network Watcher`,`Azure Policy guest configuration`,`Microsoft Purview Data Map`],
a:[0],
e:`Defender Vulnerability Management provides software inventory, vulnerability findings, and risk-based prioritization for servers, with agent-based and agentless options.`},

{d:"POS",s:`An organization wants to find forgotten internet-facing assets, such as old domains and exposed web apps, that it doesn't know it owns. What should it use?`,
o:[`Defender External Attack Surface Management`,`Defender for Storage malware scanning`,`Azure Bastion session recording`,`Key Vault purge protection`],
a:[0],
e:`Defender EASM discovers internet-exposed assets related to your organization from seeds such as domains and IP blocks, and highlights vulnerabilities and risks.`},

{d:"POS",s:`Recommendations should automatically be assigned to resource owners with due dates. What should you configure in Defender for Cloud?`,
o:[`Governance rules`,`Alert suppression rules`,`Secure score exemptions`,`Data connectors`],
a:[0],
e:`Governance rules assign owners and remediation timeframes to recommendations, and send reminders, to drive accountability.`},

{d:"POS",s:`A recommendation doesn't apply to a resource because a compensating control is in place. How should you handle it?`,
o:[`Create an exemption with the mitigated category`,`Disable Defender for Cloud on the subscription`,`Delete the resource and recreate it`,`Change the recommendation's severity`],
a:[0],
e:`Exemptions remove a resource from a recommendation with a category — mitigated or risk accepted — and an optional expiry, keeping secure score accurate.`},

{d:"POS",s:`Defender for Cloud alerts should automatically open tickets in an ITSM system. What should you configure?`,
o:[`A workflow automation Logic App`,`An Azure Policy with the Deny effect`,`A CanNotDelete lock on the alerts`,`A network rule in Azure Firewall`],
a:[0],
e:`Workflow automation triggers Logic Apps on alerts, recommendations, or compliance changes, which can create tickets, send messages, or start remediation.`},

{d:"POS",s:`How do you enable Microsoft Sentinel?`,
o:[`Enable it on a Log Analytics workspace`,`Install it on a domain controller`,`Create it in Key Vault`,`Deploy it to an AKS cluster`],
a:[0],
e:`Microsoft Sentinel is enabled on a Log Analytics workspace, which stores the data. It can then be onboarded to the Defender portal for unified operations.`},

{d:"POS",s:`An analyst needs to manage incidents in Sentinel but not change analytics rules. Which role fits?`,
o:[`Microsoft Sentinel Responder`,`Microsoft Sentinel Contributor`,`Microsoft Sentinel Reader`,`Log Analytics Contributor`],
a:[0],
e:`Responder can view data and manage incidents. Contributor can also create and edit content such as analytics rules, and Reader can only view.`},

{d:"POS",s:`Where do you install packaged connectors, analytics rules, workbooks, and playbooks for a product in Microsoft Sentinel?`,
o:[`The Content hub`,`The Azure Marketplace only`,`The Key Vault overview`,`The Defender CSPM settings`],
a:[0],
e:`The Content hub offers solutions — bundles of data connectors, analytics rules, hunting queries, workbooks, and playbooks — for Microsoft and third-party products.`},

{d:"POS",s:`Which connector collects Azure control-plane operations, such as who deleted a resource group?`,
o:[`Azure Activity`,`Syslog via AMA`,`Common Event Format via AMA`,`Windows Security Events via AMA`],
a:[0],
e:`The Azure Activity connector streams subscription activity logs to the workspace, typically through Azure Policy–created diagnostic settings.`},

{d:"POS",s:`A Linux appliance sends CEF over Syslog. What do you need to ingest it into Sentinel?`,
o:[`A Linux AMA forwarder with Syslog`,`A Windows server with WEF subscriptions`,`A Logic App polling the appliance`,`An Azure Bastion host`],
a:[0],
e:`CEF via AMA uses a Linux log forwarder running rsyslog or syslog-ng with the Azure Monitor Agent and a data collection rule. Events land in CommonSecurityLog.`},

{d:"POS",s:`Which defines the Windows event IDs that the Azure Monitor Agent sends to Sentinel?`,
o:[`A data collection rule`,`A Sentinel watchlist`,`A Key Vault policy`,`A virtual network flow log`],
a:[0],
e:`Data collection rules specify event sets or XPath queries, destinations, and transformations. Windows Event Forwarding can centralize events on a collector that AMA then sends.`},

{d:"POS",s:`An app's custom JSON logs need their own table in the workspace. What should you create?`,
o:[`A custom table ending in _CL`,`A new Sentinel workspace per app`,`A watchlist with the JSON content`,`A row in the SecurityEvent table`],
a:[0],
e:`Custom tables (named with the _CL suffix) receive data through the Logs Ingestion API and a data collection rule, which can also transform the data.`},

{d:"POS",s:`Incidents from a specific analytics rule should be assigned to a team and tagged automatically. What's the simplest approach?`,
o:[`An automation rule`,`A new workbook`,`A summary rule`,`A Content hub solution`],
a:[0],
e:`Automation rules can assign owners, change status or severity, add tags, and run playbooks when incidents are created or updated.`},

{d:"POS",s:`Low-value, high-volume logs must be kept for two years at minimal cost while remaining queryable. Where should they go?`,
o:[`The Sentinel data lake tier`,`The analytics tier only`,`A Sentinel watchlist`,`An Azure Key Vault`],
a:[0],
e:`The data lake tier stores data cost-effectively for long periods and remains queryable with KQL and jobs. The analytics tier suits data used for real-time detections.`},

{d:"POS",s:`What determines how much Microsoft Security Copilot work an organization can run?`,
o:[`The provisioned Security Compute Units`,`The number of Sentinel workspaces`,`The size of its Key Vault`,`The number of NSGs in Azure`],
a:[0],
e:`Security Copilot capacity is provisioned in Security Compute Units (SCUs), with optional overage, which determine how much processing prompts and agents can use.`},

{d:"POS",s:`Which role lets a user manage Security Copilot settings such as plugins and data sharing?`,
o:[`Security Copilot owner`,`Security Copilot contributor`,`Microsoft Sentinel Reader`,`Key Vault Reader`],
a:[0],
e:`Security Copilot owners manage settings, plugins, and access. Contributors can use Security Copilot but not change platform settings. Users also need permissions in the underlying products to see their data.`},

{d:"POS",s:`Security Copilot should be able to answer questions using data from a third-party threat intelligence service. What should you enable?`,
o:[`A plugin for that service`,`A resource lock for that service`,`A new SCU per question`,`A Key Vault for each answer`],
a:[0],
e:`Plugins connect Security Copilot to Microsoft and non-Microsoft services, and custom plugins can call your own APIs or KQL queries.`},

{d:"POS",s:`The SOC wants an AI agent that triages user-reported phishing automatically. What should it enable in Security Copilot?`,
o:[`A phishing triage agent`,`A Conditional Access policy for the mailbox`,`A Bastion host for the email server`,`A storage immutability policy`],
a:[0],
e:`Security Copilot agents, from Microsoft or partners through the Security Store, automate tasks such as phishing triage, and they run with the identity and permissions you configure.`},

{d:"POS",s:`How long does Microsoft Sentinel keep data in the analytics tier at no extra retention cost by default?`,
o:[`90 days`,`7 days`,`30 days`,`2 years (730 days)`],
a:[0],
e:`Sentinel-enabled workspaces include 90 days of analytics-tier retention at no extra retention charge. Longer retention can be configured per table or by using the data lake tier.`},

{d:"POS",s:`Why does Microsoft generally recommend as few Sentinel workspaces as possible?`,
o:[`Correlation and management are simpler with less data split`,`Each workspace can hold only one data connector`,`Additional workspaces can't use analytics rules`,`Multiple workspaces always double the licensing cost`],
a:[0],
e:`Fewer workspaces make cross-source correlation, rule management, and investigation simpler. Separate workspaces are justified by needs such as data residency, sovereignty, or strict ownership boundaries.`},

{d:"POS",s:`What are workspaces in Microsoft Security Copilot used for?`,
o:[`Separating capacity and access by team`,`Storing Sentinel log data for long-term retention`,`Hosting Logic Apps that run playbooks`,`Grouping Azure VMs for JIT access`],
a:[0],
e:`Security Copilot workspaces let organizations separate capacity (SCUs), data and plugin settings, and user access — for example, per business unit or geography.`},

{d:"POS",s:`Which Defender for Cloud plan alerts on suspicious management operations, such as mass resource deletion through Azure Resource Manager?`,
o:[`Defender for Resource Manager`,`Defender for Storage accounts`,`Defender for App Service`,`Defender for Key Vault`],
a:[0],
e:`Defender for Resource Manager monitors control-plane operations from the portal, CLI, PowerShell, and APIs, alerting on suspicious activity such as unusual permission changes or mass deletions.`},

{d:"POS",s:`A SOC engineer needs to create and edit Sentinel playbooks. Which role, on the playbooks' resource group, is required?`,
o:[`Logic App Contributor`,`Microsoft Sentinel Reader`,`Microsoft Sentinel Playbook Operator`,`Key Vault Secrets User`],
a:[0],
e:`Playbooks are Logic Apps, so creating and editing them requires Logic App Contributor. Playbook Operator can only run them.`},

{d:"POS",s:`After enabling Defender for Containers, how are the required components, such as the Defender sensor, deployed to clusters?`,
o:[`Through plan auto-provisioning`,`By manually installing them on every pod`,`By creating a Key Vault for each cluster`,`Through an NSG rule on the node subnet`],
a:[0],
e:`Each Defender plan's settings and monitoring options can automatically deploy required components — for containers, the Defender sensor and Azure Policy for Kubernetes — usually through Azure Policy.`},
  ],
};
