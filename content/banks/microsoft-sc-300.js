// Microsoft SC-300 question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/microsoft-sc-300.json.
module.exports = {
  id: "microsoft-sc-300",
  idPrefix: "sc300",
  vendor: "Microsoft",
  code: "SC-300",
  name: "Microsoft Certified: Identity and Access Administrator Associate",
  fullLength: 50,
  minutes: 100,
  passPercent: 70,
  readinessPercent: 80,
  sectioned: false,
  note: "Microsoft scores SC-300 on a 1–1000 scale with 700 to pass. This practice exam reports a straight percentage; treat 80% as your readiness bar. Questions follow the skills measured as of October 28, 2026. The real exam can include case studies and labs, which this practice exam doesn't simulate.",
  domains: [{"id":"USR","name":"Implement and manage user identities","weight":"20–25%"},{"id":"AUT","name":"Implement authentication and access management","weight":"25–30%"},{"id":"WKL","name":"Plan and implement workload identities","weight":"20–25%"},{"id":"GOV","name":"Plan and automate identity governance","weight":"20–25%"}],
  Q: [
{d:"USR",s:`The Paris office's helpdesk must reset passwords only for Paris users. What should you configure?`,
o:[`An administrative unit with a scoped role`,`A dynamic group of Paris users with an owner`,`A separate Microsoft Entra tenant for Paris`,`A Conditional Access policy for Paris sign-ins`],
a:[0],
e:`Administrative units contain a subset of users, groups, or devices, and role assignments scoped to an administrative unit apply only to its members — so Paris helpdesk staff can manage only Paris users.`},

{d:"USR",s:`Which kind of administrative unit prevents even tenant-wide administrators from modifying its members unless they're assigned at the unit's scope?`,
o:[`A restricted management administrative unit`,`A dynamic membership administrative unit`,`A hidden membership administrative unit`,`A cross-tenant administrative unit`],
a:[0],
e:`Restricted management administrative units protect sensitive objects, such as executive accounts, so only administrators assigned at that unit's scope can modify them. Tenant-level admins, including Global Administrators, can't change those objects unless they hold a role assigned at the unit's scope.`},

{d:"USR",s:`No built-in role grants exactly the permissions a team needs to manage app registrations' credentials. What should you create?`,
o:[`A custom Microsoft Entra role`,`A new Microsoft 365 group`,`An access package`,`A new administrative unit`],
a:[0],
e:`Custom roles let you combine specific permissions, such as updating application credentials, and assign them at tenant, administrative unit, or individual app scope. They require Entra ID P1 or P2.`},

{d:"USR",s:`A user has the User Administrator role assigned at an administrative unit's scope and the Helpdesk Administrator role tenant-wide. How do you determine what they can do?`,
o:[`Combine the permissions of each assignment within its scope`,`Only the most recently assigned role applies`,`The more restrictive role overrides the other one`,`Tenant-wide roles are ignored if any scoped role exists`],
a:[0],
e:`Effective permissions are the union of all role assignments, each limited to its own scope. Reviewing the user's role assignments in the admin center shows each role and its scope.`},

{d:"USR",s:`An organization adds contoso.com as a custom domain in Microsoft Entra ID. What must it do before users can use the domain?`,
o:[`Add a TXT or MX record at the DNS registrar to verify it`,`Purchase the domain again through the Azure portal`,`Create an administrative unit named after the domain`,`Run Microsoft Entra Connect in staging mode`],
a:[0],
e:`Microsoft Entra ID verifies domain ownership through a DNS record — usually TXT, or MX — that you add at your DNS host. After verification, you can assign the domain to users' sign-in names.`},

{d:"USR",s:`Users should see the company logo and a custom message on the Microsoft sign-in page. What should you configure?`,
o:[`Company branding`,`Terms of use`,`Authentication context`,`Application collections`],
a:[0],
e:`Company branding customizes the sign-in experience with logos, background images, colors, and sign-in page text.`},

{d:"USR",s:`New hires should be added to the Sales group automatically when their Department attribute is Sales. What should you create?`,
o:[`A group with a dynamic membership rule`,`A group with assigned membership`,`An administrative unit for Sales`,`A distribution list owned by HR`],
a:[0],
e:`Dynamic membership rules evaluate user attributes, such as (user.department -eq "Sales"), and add or remove members automatically. They require Entra ID P1.`},

{d:"USR",s:`What's the main difference between a security group and a Microsoft 365 group?`,
o:[`Microsoft 365 groups include shared collaboration resources`,`Security groups can contain only devices, not users`,`Microsoft 365 groups can't be used to assign licenses`,`Security groups always require dynamic membership`],
a:[0],
e:`Microsoft 365 groups come with a shared mailbox, calendar, SharePoint site, and more for collaboration. Security groups control access to resources and are used for licensing and policy assignment.`},

{d:"USR",s:`The organization wants to tag users with a sensitive "Project" attribute that only specific admins can read or assign. What should it use?`,
o:[`Custom security attributes`,`Directory extension attributes`,`Dynamic group rules`,`Administrative units`],
a:[0],
e:`Custom security attributes are business-specific key-value attributes with their own access control: only users with Attribute Assignment or Attribute Definition roles can read or set them — not even Global Administrators by default.`},

{d:"USR",s:`Which tool should you use to create hundreds of users from a script today?`,
o:[`The Microsoft Graph PowerShell SDK`,`The MSOnline PowerShell module`,`The AzureAD PowerShell module`,`The Exchange Management Shell`],
a:[0],
e:`Microsoft Graph PowerShell (for example, New-MgUser) is the supported module. MSOnline and AzureAD PowerShell are retired. The admin center's bulk create with a CSV template is another option.`},

{d:"USR",s:`Personal phones need access to company email, and the organization doesn't own the devices. Which device identity fits?`,
o:[`Microsoft Entra registered`,`Microsoft Entra joined`,`Microsoft Entra hybrid joined`,`Domain joined only`],
a:[0],
e:`Registered devices suit bring-your-own-device scenarios: users sign in with a personal account on the device and add a work account. Joined and hybrid joined devices are organization-owned.`},

{d:"USR",s:`Users should have to complete MFA before joining a device to Microsoft Entra ID. What's the recommended way to enforce this?`,
o:[`A Conditional Access user action policy`,`The device setting that limits devices per user`,`A dynamic device group with an MFA rule`,`A custom role for device join`],
a:[0],
e:`Conditional Access can target the "Register or join devices" user action to require MFA. Microsoft recommends this over the older device setting, which must be turned off when using the Conditional Access approach.`},

{d:"USR",s:`Group-based licensing fails for a new user with the error that usage location isn't set. What's the fix?`,
o:[`Set the user's usage location`,`Add the user to a second group`,`Assign the license directly instead`,`Enable self-service password reset`],
a:[0],
e:`Licenses can't be assigned without a usage location, because service availability varies by country. Set the user's usage location (or a tenant default), and the group license will apply.`},

{d:"USR",s:`Only members of the "Guest Inviters" role and admins should be able to invite external users. Where do you configure this?`,
o:[`Guest invite settings`,`Cross-tenant access settings for the partner`,`The external identity provider configuration`,`The enterprise application user settings`],
a:[0],
e:`External collaboration settings control who can invite guests (from anyone to only admins and the Guest Inviter role), what guests can see, and which domains collaboration is allowed or blocked with.`},

{d:"USR",s:`B2B invitations to a competitor's domain must be blocked. What should you configure?`,
o:[`A deny list in collaboration restrictions`,`A Conditional Access policy for the domain`,`A restricted administrative unit`,`A custom banned password list`],
a:[0],
e:`Collaboration restrictions in External collaboration settings let you allow invitations only to specified domains or deny invitations to specified domains.`},

{d:"USR",s:`An admin needs to invite 300 partner users as guests at once. What's the simplest approach in the admin center?`,
o:[`Bulk invite with a CSV file`,`Create each guest with New-MgUser`,`Set up cross-tenant synchronization`,`Add them to a dynamic group`],
a:[0],
e:`The admin center's bulk invite feature uploads a CSV of email addresses and redirect URLs and sends invitations. PowerShell with New-MgInvitation is another option.`},

{d:"USR",s:`A partner tenant enforces MFA. You want your Conditional Access policies to accept their MFA claims so guests aren't prompted twice. What should you configure?`,
o:[`Inbound trust settings in cross-tenant access`,`Outbound access settings for your users`,`Guest invite settings for the partner`,`A terms of use policy for the guests`],
a:[0],
e:`Inbound trust settings in cross-tenant access settings let you trust MFA, compliant device, and hybrid joined device claims from specific external Microsoft Entra organizations.`},

{d:"USR",s:`Users in your tenant must be blocked from accessing a specific external organization's apps as guests. Which setting controls this?`,
o:[`Outbound access settings for that organization`,`Inbound access settings for that organization`,`The guest user access restrictions setting`,`The tenant's company branding settings`],
a:[0],
e:`Outbound access settings control whether your users can access other organizations' resources through B2B collaboration or B2B direct connect. Inbound settings control external users accessing your resources.`},

{d:"USR",s:`A company with two Microsoft Entra tenants wants users from tenant A to appear automatically as B2B users in tenant B. What should it configure?`,
o:[`Cross-tenant synchronization`,`Microsoft Entra Connect Sync`,`An access review of guests`,`A SAML identity provider`],
a:[0],
e:`Cross-tenant synchronization provisions, updates, and deprovisions users from a source tenant into a target tenant as B2B users, for multitenant organizations. Connect Sync is for on-premises AD.`},

{d:"USR",s:`For cross-tenant synchronization, what must the target tenant allow in its cross-tenant access settings?`,
o:[`User sync and automatic redemption`,`Outbound B2B direct connect for every user`,`Self-service sign-up for external users`,`Guest access equal to member access`],
a:[0],
e:`The target tenant must allow users to be synchronized into it and enable automatic invitation redemption, so synced users don't have to accept consent prompts. The configuration itself runs in the source tenant.`},

{d:"USR",s:`A partner uses a third-party SAML 2.0 identity provider, not Microsoft Entra ID. How can their users sign in to your apps as guests with their own credentials?`,
o:[`Set up SAML/WS-Fed IdP federation`,`Create local accounts for each partner user`,`Enable password hash sync for the partner`,`Set up cross-tenant synchronization`],
a:[0],
e:`SAML/WS-Fed identity provider federation lets guests from a partner domain authenticate with the partner's IdP. Cross-tenant sync needs both organizations to use Microsoft Entra ID.`},

{d:"USR",s:`An organization needs to sync users from several disconnected AD forests with minimal on-premises infrastructure. Which tool fits?`,
o:[`Microsoft Entra Cloud Sync`,`Microsoft Entra Connect Sync`,`Microsoft Entra Connect Health`,`Cross-tenant synchronization`],
a:[0],
e:`Cloud Sync uses lightweight provisioning agents managed from the cloud and supports disconnected forests. Connect Sync installs a full sync server, which suits more complex scenarios.`},

{d:"USR",s:`What's the purpose of a Microsoft Entra Connect Sync server in staging mode?`,
o:[`A standby server ready to take over`,`A server that syncs only staged password changes`,`A test tenant used before syncing production`,`A server that syncs devices but not users`],
a:[0],
e:`A staging-mode server receives and processes changes but doesn't export them, so it can be switched to active quickly for high availability or used to validate configuration changes.`},

{d:"USR",s:`Which hybrid authentication method lets users keep signing in to cloud apps even if on-premises domain controllers are unavailable?`,
o:[`Password hash synchronization`,`Pass-through authentication`,`Federation with AD FS`,`Seamless SSO alone`],
a:[0],
e:`With password hash sync, Microsoft Entra ID validates passwords in the cloud. Pass-through authentication and AD FS depend on on-premises components at sign-in.`},

{d:"USR",s:`How should pass-through authentication be deployed for high availability?`,
o:[`Install several agents on separate servers`,`Install one agent on every user's workstation`,`Configure the agent on a single domain controller`,`Pair it with a staging-mode Connect server`],
a:[0],
e:`Each PTA agent can validate sign-ins, and Microsoft recommends at least three agents on separate servers so sign-ins continue if one fails.`},

{d:"USR",s:`Seamless single sign-on uses which object in on-premises AD?`,
o:[`The AZUREADSSOACC computer account`,`The krbtgt account of each domain`,`A gMSA named for Entra Connect`,`A user account in Domain Admins`],
a:[0],
e:`Seamless SSO creates the AZUREADSSOACC computer account, whose Kerberos decryption key is shared with Microsoft Entra ID. Microsoft recommends rolling over that key regularly.`},

{d:"USR",s:`An organization is moving from AD FS to cloud authentication and wants to test PHS with a pilot group first. What should it use?`,
o:[`Staged rollout`,`Staging mode`,`Cloud Sync`,`Connect Health`],
a:[0],
e:`Staged rollout lets selected groups use password hash sync or pass-through authentication while the domain stays federated, so you can test before converting the domain to managed authentication.`},

{d:"USR",s:`What does Microsoft Entra Connect Health provide?`,
o:[`Monitoring and alerts for sync, AD FS, and AD DS`,`Automatic upgrades of every domain controller`,`A replacement for Connect Sync servers`,`Password writeback for cloud-only users`],
a:[0],
e:`Connect Health uses agents to monitor Connect Sync, AD FS, and AD DS, showing alerts, performance, and usage analytics in the admin center. It requires Entra ID P1.`},

{d:"AUT",s:`New employees need to set up passwordless sign-in on their first day without ever having a password. What should IT issue?`,
o:[`A Temporary Access Pass`,`A one-time SMS code`,`A security question set`,`A shared admin password`],
a:[0],
e:`A Temporary Access Pass is a time-limited passcode that meets strong authentication requirements, so new users can sign in and register passwordless methods such as passkeys or Windows Hello.`},

{d:"AUT",s:`Which authentication method lets users sign in with an X.509 certificate from their smart card, without federation?`,
o:[`Certificate-based authentication`,`Temporary Access Pass`,`Voice call verification`,`SMS-based passwordless sign-in`],
a:[0],
e:`Microsoft Entra certificate-based authentication validates user certificates directly against your configured certificate authorities, with no AD FS needed. It can satisfy phishing-resistant MFA.`},

{d:"AUT",s:`Where should admins enable and target methods such as passkeys, Authenticator, and TAP?`,
o:[`The Authentication methods policy`,`The legacy per-user MFA page`,`The company branding settings`,`The enterprise app settings`],
a:[0],
e:`The Authentication methods policy is where methods are enabled and scoped to users and groups. The legacy MFA and SSPR method settings were migrated to it.`},

{d:"AUT",s:`Which method is phishing-resistant?`,
o:[`Passkeys (FIDO2)`,`SMS one-time codes`,`Voice call verification`,`Email one-time passcodes`],
a:[0],
e:`Passkeys use public-key cryptography bound to the site's origin, so credentials can't be replayed on a phishing site. Windows Hello for Business and certificate-based authentication are also phishing-resistant.`},

{d:"AUT",s:`Which Conditional Access grant control requires a specific combination of methods, such as phishing-resistant MFA?`,
o:[`Require authentication strength`,`Require multifactor authentication`,`Require password change`,`Require terms of use`],
a:[0],
e:`Authentication strengths define which methods satisfy a policy — built-in options include MFA, passwordless MFA, and phishing-resistant MFA — and can be required in Conditional Access.`},

{d:"AUT",s:`Users should be able to report MFA prompts they didn't initiate, automatically raising their user risk. Which setting enables this?`,
o:[`Report suspicious activity`,`Account lockout threshold`,`Remember MFA on trusted devices`,`Number of methods required to reset`],
a:[0],
e:`Report suspicious activity lets users flag unexpected MFA prompts. Reported users get high user risk, which risk-based Conditional Access policies can act on.`},

{d:"AUT",s:`How many authentication methods are always required for administrators to reset their own passwords with SSPR?`,
o:[`Two methods`,`One method`,`Three methods`,`None, admins can't use SSPR`],
a:[0],
e:`Administrators always use a stronger two-method policy for SSPR, regardless of the policy configured for regular users.`},

{d:"AUT",s:`Users who reset passwords with SSPR need the new password to work on-premises too. What must be enabled?`,
o:[`Password writeback`,`Seamless SSO`,`Staged rollout`,`Device writeback`],
a:[0],
e:`Password writeback, configured through Connect Sync or Cloud Sync, writes cloud password changes and resets back to on-premises AD.`},

{d:"AUT",s:`Which Windows Hello for Business deployment model is recommended for hybrid environments because it doesn't need a PKI?`,
o:[`Cloud Kerberos trust`,`Certificate trust`,`Key trust`,`Federated trust`],
a:[0],
e:`Cloud Kerberos trust uses Microsoft Entra Kerberos to issue partial TGTs for on-premises resources, so you don't need to deploy certificates or wait for key sync. It's the recommended hybrid model.`},

{d:"AUT",s:`A user's laptop was stolen. Besides disabling the account, how do you immediately invalidate their refresh tokens?`,
o:[`Revoke the user's sessions`,`Change the user's license`,`Remove the user's manager`,`Delete the user's photo`],
a:[0],
e:`Revoking sessions invalidates refresh tokens and session cookies, so the user — or a thief — must reauthenticate. With continuous access evaluation, supported apps react almost immediately.`},

{d:"AUT",s:`Users keep creating passwords like "Contoso2026!". What should you configure?`,
o:[`A custom banned password list`,`A longer smart lockout period`,`Self-service password reset`,`A password expiration policy`],
a:[0],
e:`Microsoft Entra Password Protection blocks weak passwords using Microsoft's global list plus your custom banned terms, including variations with common substitutions.`},

{d:"AUT",s:`What's needed to enforce Microsoft Entra Password Protection for on-premises AD password changes?`,
o:[`The DC agent and proxy services on-premises`,`Pass-through authentication agents`,`A Connect Sync server in staging mode`,`Seamless SSO on every domain controller`],
a:[0],
e:`Password Protection for AD DS uses a proxy service to download policies from Microsoft Entra ID and a DC agent on domain controllers to check password changes against them.`},

{d:"AUT",s:`Hybrid users need to access Azure Files shares with their Microsoft Entra identities from Entra-joined devices. What should be enabled?`,
o:[`Microsoft Entra Kerberos`,`Seamless single sign-on`,`SAML-based single sign-on`,`Pass-through authentication`],
a:[0],
e:`Microsoft Entra Kerberos lets Entra ID issue Kerberos tickets for resources such as Azure Files, so hybrid identities can access SMB shares from cloud-joined devices without line of sight to DCs.`},

{d:"AUT",s:`Before enforcing a new Conditional Access policy, an admin wants to see its impact without blocking anyone. What should they do?`,
o:[`Turn it on in report-only mode`,`Exclude all users from it`,`Enable it for Global Administrators first`,`Create it in a test tenant only`],
a:[0],
e:`Report-only mode evaluates the policy at sign-in and records the result in sign-in logs without enforcing it, so you can assess impact with the Conditional Access insights workbook.`},

{d:"AUT",s:`A user says they were blocked at sign-in. How can an admin see which Conditional Access policies applied?`,
o:[`Check the sign-in log's Conditional Access tab`,`Check the user's license assignment history`,`Check the tenant's company branding page`,`Check the audit log for role assignments`],
a:[0],
e:`Each sign-in log entry shows which Conditional Access policies applied, whether they succeeded or failed, and why. The What If tool can also simulate a sign-in.`},

{d:"AUT",s:`Which tool lets an admin simulate how Conditional Access would treat a sign-in by a given user, app, and location?`,
o:[`The What If tool`,`The access review wizard`,`Connect Health`,`The bulk operations page`],
a:[0],
e:`The What If tool evaluates which policies would apply to a hypothetical sign-in with the conditions you specify, helping troubleshoot without the user signing in.`},

{d:"AUT",s:`Users on shared kiosk browsers should have to sign in again every hour. Which Conditional Access control fits?`,
o:[`Sign-in frequency`,`Require compliant device`,`Persistent browser session`,`Authentication context`],
a:[0],
e:`The sign-in frequency session control sets how often users must reauthenticate. Persistent browser session controls whether sessions survive closing the browser.`},

{d:"AUT",s:`Access to an admin portal should be allowed only from Intune-compliant devices. Which grant control should the policy use?`,
o:[`Require device to be marked as compliant`,`Require approved client app`,`Require terms of use`,`Require Microsoft Entra hybrid joined device`],
a:[0],
e:`Requiring a compliant device uses Intune compliance status reported to Microsoft Entra ID. Hybrid joined devices can be required with a separate grant control.`},

{d:"AUT",s:`A policy must apply only to devices with a specific extension attribute, such as "Kiosk". Which condition should you use?`,
o:[`A filter for devices`,`A named location`,`A user risk level`,`A client app type`],
a:[0],
e:`Filter for devices targets or excludes devices by properties such as extensionAttribute values, model, or trust type, enabling device-specific policies.`},

{d:"AUT",s:`What does continuous access evaluation (CAE) do?`,
o:[`Reacts quickly to critical events`,`Requires MFA at every single request`,`Blocks all sign-ins from new devices`,`Evaluates policies only once a day`],
a:[0],
e:`CAE lets supporting services, such as Exchange and SharePoint, react to critical events — account disabled, password changed, user risk raised, or network location changes — in near real time instead of waiting for tokens to expire.`},

{d:"AUT",s:`Users should need phishing-resistant MFA only when opening SharePoint sites labeled "Highly Confidential". What should you configure?`,
o:[`Authentication context`,`Sign-in frequency`,`Persistent browser session`,`Terms of use`],
a:[0],
e:`Authentication context lets apps request extra conditions for sensitive actions or content. A sensitivity label can apply an authentication context to a site, and a Conditional Access policy targets that context.`},

{d:"AUT",s:`Admins must use phishing-resistant MFA before they can delete Conditional Access policies. Which feature fits?`,
o:[`Protected actions`,`Restricted management units`,`Staged rollout`,`Report-only mode`],
a:[0],
e:`Protected actions associate sensitive operations, such as changing Conditional Access policies or cross-tenant settings, with an authentication context, so a Conditional Access policy can demand stronger authentication first.`},

{d:"AUT",s:`What's the quickest way to create a Conditional Access policy that follows Microsoft's recommended baseline, such as requiring MFA for admins?`,
o:[`Create a policy from a template`,`Clone a policy from another tenant`,`Enable security defaults per user`,`Use the What If tool to generate it`],
a:[0],
e:`Conditional Access templates provide preconfigured policies aligned with Microsoft recommendations, which you can review and deploy, often first in report-only mode.`},

{d:"AUT",s:`Users should be able to view but not download SharePoint files from unmanaged devices. Which session control is simplest?`,
o:[`Use app enforced restrictions`,`Require a compliant device for all access`,`Set sign-in frequency to one hour`,`Block all sign-ins from new browsers`],
a:[0],
e:`Use app enforced restrictions passes device information to SharePoint and Exchange Online, which then provide limited, web-only access on unmanaged devices.`},

{d:"AUT",s:`An organization has Microsoft Entra ID Free licenses only. How can it enforce MFA for all users?`,
o:[`Enable security defaults`,`Create Conditional Access policies`,`Configure ID Protection policies`,`Use authentication context`],
a:[0],
e:`Security defaults provide baseline protections, including requiring MFA registration and MFA for admins and risky activities, at no extra cost. Conditional Access requires Entra ID P1.`},

{d:"AUT",s:`High-risk users should be required to change their password securely. Where does Microsoft recommend configuring this?`,
o:[`The Conditional Access risk policies`,`The legacy per-user MFA settings`,`The SSPR registration settings`,`The custom banned password list`],
a:[0],
e:`Microsoft recommends configuring user risk and sign-in risk responses as Conditional Access policies, which offer more flexibility than the legacy ID Protection risk policies.`},

{d:"AUT",s:`Which control is typically required for a medium or high sign-in risk?`,
o:[`Multifactor authentication`,`A secure password change`,`Terms of use acceptance`,`An approved client app`],
a:[0],
e:`Sign-in risk suggests that a specific sign-in may not be from the account owner, so requiring MFA proves identity. User risk, which suggests the account itself is compromised, is typically remediated with a secure password change.`},

{d:"AUT",s:`How can admins encourage users who rely on SMS to register Microsoft Authenticator?`,
o:[`A registration campaign`,`A sign-in risk policy`,`A custom security attribute`,`An access review`],
a:[0],
e:`Registration campaigns nudge users to set up Microsoft Authenticator (or passkeys) during sign-in, with a configurable number of snoozes.`},

{d:"AUT",s:`Which license is needed to see full risk detections and use risk-based Conditional Access?`,
o:[`Microsoft Entra ID P2`,`Microsoft Entra ID P1`,`Microsoft Entra ID Free`,`Microsoft 365 Business Basic`],
a:[0],
e:`ID Protection's full capabilities, including risky user and sign-in reports with details and risk-based Conditional Access, require Entra ID P2 (included in Microsoft 365 E5).`},

{d:"AUT",s:`A service principal shows leaked credentials in ID Protection. Where do admins investigate it?`,
o:[`The Risky workload identities report`,`The Risky users report in ID Protection`,`The provisioning logs`,`The Secure Score page`],
a:[0],
e:`ID Protection detects risks for service principals, such as leaked credentials or suspicious sign-ins, in the Risky workload identities report. Responding includes rotating credentials and reviewing the app's activity.`},

{d:"AUT",s:`Remote users need access to on-premises file servers and internal apps without a traditional VPN. Which service fits?`,
o:[`Microsoft Entra Private Access`,`Microsoft Entra Internet Access`,`Microsoft Entra Connect Health`,`Microsoft Entra Cloud Sync`],
a:[0],
e:`Private Access, part of Global Secure Access, provides Zero Trust network access to private apps through connectors, applying Conditional Access per app rather than giving broad network access like a VPN.`},

{d:"AUT",s:`What must be deployed on users' devices to route traffic through Global Secure Access?`,
o:[`The Global Secure Access client`,`The Microsoft Entra Connect agent`,`The Defender for Identity sensor`,`A pass-through authentication agent`],
a:[0],
e:`The Global Secure Access client, available for Windows, macOS, iOS, and Android, acquires traffic from the device and routes it according to the enabled traffic forwarding profiles.`},

{d:"AUT",s:`An organization wants to filter users' web traffic by category, such as blocking gambling sites. Which service fits?`,
o:[`Microsoft Entra Internet Access`,`Microsoft Entra Private Access`,`Microsoft Entra Application Proxy`,`Microsoft Entra Connect Sync`],
a:[0],
e:`Internet Access provides a secure web gateway with web content filtering policies for internet and SaaS traffic.`},

{d:"AUT",s:`Which Global Secure Access traffic profile enables tenant restrictions and source IP restoration for Exchange Online and SharePoint?`,
o:[`The Microsoft traffic profile`,`The private access profile`,`The internet access profile`,`The VPN fallback profile`],
a:[0],
e:`The Microsoft traffic profile handles Microsoft 365 traffic, enabling features such as universal tenant restrictions and restoring the original source IP for Conditional Access and logs.`},

{d:"AUT",s:`What does Private Access use on-premises to reach internal resources?`,
o:[`Private network connectors`,`Pass-through authentication agents`,`Connect Health agents`,`Cloud Sync provisioning agents`],
a:[0],
e:`Private network connectors (shared with Application Proxy) are installed on-premises and make outbound connections to the service, so no inbound firewall ports need to be opened.`},

{d:"WKL",s:`An Azure function needs to read secrets from Key Vault without any credentials stored in code or configuration. Which identity should it use?`,
o:[`A managed identity`,`A shared user account`,`A client secret in app settings`,`A guest account`],
a:[0],
e:`Managed identities are created and rotated by Azure, so the function gets tokens for Key Vault without anyone managing secrets.`},

{d:"WKL",s:`Ten web apps need the same identity and permissions, and the identity must outlive any single app. Which option fits?`,
o:[`A user-assigned managed identity`,`A system-assigned managed identity`,`A separate guest account per app`,`A Global Administrator account`],
a:[0],
e:`A user-assigned managed identity is a standalone Azure resource that can be attached to many resources and isn't deleted with any of them. System-assigned identities are tied to one resource's lifecycle.`},

{d:"WKL",s:`An application runs on servers outside Azure and needs to call Microsoft Graph as itself. Which identity fits?`,
o:[`A service principal`,`A system-assigned managed identity`,`A personal user account with MFA`,`A group-managed service account`],
a:[0],
e:`Managed identities only work for supported Azure resources (or Arc-enabled servers). An app registration's service principal, ideally with a certificate or federated credential, suits apps running elsewhere.`},

{d:"WKL",s:`An on-premises Windows service needs a domain identity whose password is rotated automatically by AD. Which option fits?`,
o:[`A group managed service account`,`A Microsoft Entra managed identity`,`A cloud-only user account`,`A B2B guest account`],
a:[0],
e:`Group managed service accounts are AD accounts whose passwords AD manages and rotates automatically, which suits on-premises services. Managed identities are for Azure resources.`},

{d:"WKL",s:`After enabling a system-assigned managed identity on a VM, what's needed for it to read blobs in a storage account?`,
o:[`An Azure RBAC role on the storage account`,`A client secret added to the VM's configuration`,`A Microsoft Entra ID P2 license for the VM`,`A Conditional Access policy for the VM`],
a:[0],
e:`The managed identity authenticates automatically, but it needs authorization: assign it a role such as Storage Blob Data Reader on the storage account or container.`},

{d:"WKL",s:`How does code running on an Azure VM get a token for its managed identity?`,
o:[`By calling the local IMDS endpoint`,`By reading a password from a text file`,`By signing in with the VM admin account`,`By asking the user for MFA`],
a:[0],
e:`Code requests tokens from the Azure Instance Metadata Service (IMDS) endpoint on the VM. Azure SDKs, such as DefaultAzureCredential, do this automatically.`},

{d:"WKL",s:`Only users assigned to an enterprise app should be able to sign in to it. Which app property should you set?`,
o:[`Assignment required = Yes`,`Visible to users = No`,`Enabled for sign-in = No`,`Owners = Helpdesk team`],
a:[0],
e:`With assignment required, users and groups must be assigned to the app to get a token. Visible to users only controls whether it appears in My Apps.`},

{d:"WKL",s:`Which role can manage enterprise apps and app registrations but not Application Proxy settings?`,
o:[`Cloud Application Administrator`,`Application Administrator`,`Privileged Role Administrator`,`Helpdesk Administrator`],
a:[0],
e:`Cloud Application Administrator has the same app permissions as Application Administrator except for managing Application Proxy, so it's the least-privileged choice when Application Proxy isn't needed.`},

{d:"WKL",s:`An on-premises web app must be published to remote users with Microsoft Entra pre-authentication, without opening inbound firewall ports. What should you use?`,
o:[`Microsoft Entra Application Proxy`,`Azure Application Gateway with WAF`,`A site-to-site VPN`,`Azure Front Door only`],
a:[0],
e:`Application Proxy publishes on-premises web apps through connectors that make outbound connections, with Microsoft Entra ID handling pre-authentication and Conditional Access.`},

{d:"WKL",s:`An Application Proxy app uses Integrated Windows Authentication on-premises. What lets users get SSO to it?`,
o:[`Kerberos constrained delegation`,`Password hash synchronization`,`A SAML token signing certificate`,`A Temporary Access Pass`],
a:[0],
e:`For IWA apps, the connector uses Kerberos constrained delegation to obtain Kerberos tickets on the user's behalf, providing single sign-on after Microsoft Entra pre-authentication.`},

{d:"WKL",s:`A SaaS app from the gallery supports SAML. What must you exchange between Microsoft Entra ID and the app to set up SSO?`,
o:[`Identifiers, reply URLs, and a certificate`,`The app's database connection string`,`Each user's password for the app`,`The tenant's Global Administrator credentials`],
a:[0],
e:`SAML SSO needs the app's identifier (entity ID) and reply URL configured in Microsoft Entra ID, and the app configured with Microsoft Entra ID's sign-in URL and token signing certificate (or federation metadata).`},

{d:"WKL",s:`Users should be created and removed in a SaaS app automatically based on group assignment. What should you configure?`,
o:[`SCIM-based provisioning`,`A dynamic administrative unit`,`Cross-tenant synchronization`,`Password writeback`],
a:[0],
e:`Automatic provisioning uses the SCIM protocol (or app-specific connectors) to create, update, and deprovision accounts in the app for assigned users, with results in the provisioning logs.`},

{d:"WKL",s:`Users should be able to consent only to apps from verified publishers that request low-risk permissions. What should you configure?`,
o:[`User consent settings`,`Admin consent for each app`,`App roles in the manifest`,`The app's redirect URIs`],
a:[0],
e:`User consent settings can allow consent for apps from verified publishers for selected low-impact permissions, block user consent entirely, or allow it for all apps.`},

{d:"WKL",s:`Users who are blocked from consenting should be able to ask an admin to approve an app. What should you enable?`,
o:[`The admin consent workflow`,`Self-service password reset`,`Self-service group management`,`A registration campaign`],
a:[0],
e:`The admin consent workflow lets users request access to apps that need admin consent. Designated reviewers get the request and can approve or deny it.`},

{d:"WKL",s:`What's the difference between granting admin consent and user consent for an app's permissions?`,
o:[`Admin consent grants permissions for all users`,`User consent grants permissions for the whole tenant`,`Admin consent works only for application permissions`,`User consent can grant any application permission`],
a:[0],
e:`An admin can consent on behalf of all users in the organization, which is required for application permissions and high-privilege delegated permissions. User consent only covers that user's delegated access.`},

{d:"WKL",s:`How can admins group related apps, such as all HR tools, into a section of the My Apps portal?`,
o:[`Create an app collection`,`Create an administrative unit`,`Create a dynamic group`,`Create a catalog`],
a:[0],
e:`Collections group apps into tabs in My Apps, making them easier for users to find.`},

{d:"WKL",s:`An app must allow sign-in from users in any Microsoft Entra organization. What account type should the registration support?`,
o:[`Multitenant (any organizational directory)`,`Accounts in this organizational directory only`,`Personal Microsoft accounts only`,`Guest accounts in this directory only`],
a:[0],
e:`Multitenant registrations accept users from any Microsoft Entra tenant, and a service principal is created in each tenant that uses the app. Single-tenant apps accept only your organization's users.`},

{d:"WKL",s:`Which credential type is preferred over client secrets for an app registration that authenticates as itself?`,
o:[`A certificate or federated credential`,`A client secret with a longer expiry`,`A user's password stored in config`,`A Temporary Access Pass`],
a:[0],
e:`Certificates are more secure than secrets, and federated identity credentials (workload identity federation) let external workloads like GitHub Actions authenticate with no secret at all.`},

{d:"WKL",s:`A GitHub Actions workflow needs to deploy to Azure without storing any secret in GitHub. What should you configure on the app registration?`,
o:[`A federated identity credential`,`A client secret with a long expiry`,`An app role for GitHub`,`A redirect URI for GitHub`],
a:[0],
e:`Workload identity federation trusts tokens issued by GitHub for a specific repository and branch, exchanging them for Microsoft Entra access tokens without secrets.`},

{d:"WKL",s:`A web app that signs users in returns an error that the reply URL doesn't match. What should you fix?`,
o:[`The app's redirect URI`,`The app's API permissions list`,`The app's token signing certificate`,`The user's assignment to the app`],
a:[0],
e:`Redirect URIs, configured per platform under Authentication, must exactly match the URL the app sends in the sign-in request.`},

{d:"WKL",s:`A background service reads all users' calendars with no user signed in. Which permission type does it need?`,
o:[`Application permissions with admin consent`,`Delegated permissions with user consent`,`An app role assigned to a user`,`A directory role for each user`],
a:[0],
e:`Application permissions let an app act as itself without a signed-in user, and they always require admin consent. Delegated permissions act on behalf of a signed-in user.`},

{d:"WKL",s:`An app needs "Approver" and "Viewer" roles that admins assign to users and groups and that appear in tokens. What should you create?`,
o:[`App roles in the app registration`,`Custom Microsoft Entra roles`,`Administrative units per role`,`Dynamic groups per role`],
a:[0],
e:`App roles are defined in the app registration, assigned to users, groups, or apps in the enterprise app, and emitted in the roles claim so the app can authorize users.`},

{d:"WKL",s:`What's the relationship between an app registration and an enterprise application?`,
o:[`The enterprise app is the registration's per-tenant service principal`,`They're two names for the same object in different portals`,`The enterprise app defines permissions; the registration assigns users`,`The registration exists only for gallery apps`],
a:[0],
e:`An app registration creates the application object (the global definition). Each tenant using the app gets a service principal — the enterprise application — where users are assigned and policies applied.`},

{d:"WKL",s:`How can an organization find out which unsanctioned cloud apps employees are using?`,
o:[`Cloud discovery in Defender for Cloud Apps`,`The provisioning logs in Microsoft Entra ID`,`An access review of all enterprise apps`,`The Identity Secure Score page`],
a:[0],
e:`Cloud discovery analyzes traffic logs — uploaded from firewalls or proxies, or collected through Defender for Endpoint integration — to identify cloud apps in use and their risk.`},

{d:"WKL",s:`After discovering a risky file-sharing app, how do you mark it so Defender for Endpoint blocks it on devices?`,
o:[`Mark it as unsanctioned`,`Mark it as monitored`,`Add it to a collection`,`Create an app role`],
a:[0],
e:`Unsanctioning an app in the Cloud app catalog, with Defender for Endpoint integration enabled, can block access to it on onboarded devices.`},

{d:"WKL",s:`What does connecting an app, such as Box or Salesforce, through an API connector in Defender for Cloud Apps provide?`,
o:[`Activity and file visibility and governance`,`Single sign-on for the app's users through SAML`,`Automatic licensing of the app for all users`,`A VPN tunnel to the app's datacenter`],
a:[0],
e:`App connectors use the app's APIs to give Defender for Cloud Apps visibility into activities, files, and accounts, and to take governance actions such as quarantining files.`},

{d:"WKL",s:`Downloads of sensitive files from a SaaS app must be blocked on unmanaged devices in real time. What should you configure?`,
o:[`An app control session policy`,`An activity policy with daily email alerts`,`A file policy scanning stored files nightly`,`A cloud discovery report for the app`],
a:[0],
e:`Conditional Access app control routes sessions through Defender for Cloud Apps, where session policies can block downloads, apply labels, or monitor activity as it happens.`},

{d:"WKL",s:`What must be configured in Microsoft Entra ID for Defender for Cloud Apps session policies to take effect?`,
o:[`A Conditional Access policy using app control`,`A registration campaign for Authenticator`,`An access review for the app's users`,`Cross-tenant access settings`],
a:[0],
e:`A Conditional Access policy with the "Use Conditional Access App Control" session control routes the app's sessions to Defender for Cloud Apps so its access and session policies can apply.`},

{d:"WKL",s:`How can you be alerted when an OAuth app with high permissions and few users suddenly appears in the tenant?`,
o:[`An OAuth app policy`,`A user consent setting in Entra ID`,`An application collection in My Apps`,`A dynamic group of app owners`],
a:[0],
e:`OAuth app policies alert on, or automatically revoke, apps based on permission level, community use, and authorization patterns. App governance adds deeper monitoring of app behavior.`},

{d:"WKL",s:`What does the Cloud app catalog provide for each app?`,
o:[`A risk score for each app`,`The app's source code for security review`,`A list of users' passwords for that app`,`A license key for unlimited use of the app`],
a:[0],
e:`The Cloud app catalog rates many cloud apps with a risk score based on general, security, compliance, and legal factors, which you can customize to your priorities.`},

{d:"WKL",s:`Which Defender for Cloud Apps policy type blocks access to an app from unmanaged devices at sign-in?`,
o:[`An access policy`,`A file policy`,`An anomaly policy`,`A discovery policy`],
a:[0],
e:`Access policies, enforced through Conditional Access app control, allow or block access at sign-in based on conditions such as device state or location. Session policies control activity within the session.`},

{d:"GOV",s:`A project team needs a bundle of groups, apps, and SharePoint sites that users request with approval and that expires after 90 days. What should you create?`,
o:[`An access package`,`A dynamic group`,`An administrative unit`,`A custom role`],
a:[0],
e:`Access packages bundle resources with policies that define who can request access, approvals, and expiration. They're part of entitlement management in Microsoft Entra ID Governance.`},

{d:"GOV",s:`In entitlement management, what's a catalog?`,
o:[`A container for resources and packages`,`A list of all users with expired licenses`,`A report of access review decisions`,`A collection of Conditional Access policies`],
a:[0],
e:`Catalogs hold the resources and access packages that can be built from them, and they can have their own owners so business teams manage their own access.`},

{d:"GOV",s:`Users at a partner company should be able to request an access package even though they aren't in your directory yet. What should you configure?`,
o:[`A connected organization`,`A cross-tenant synchronization configuration`,`A dynamic group for the partner's domain`,`An administrative unit for partner users`],
a:[0],
e:`Connected organizations represent external partners. An access package policy that allows users from connected organizations to request access creates them as guests when approved.`},

{d:"GOV",s:`External users who lose their last access package assignment should be blocked and later removed automatically. Where is this configured?`,
o:[`External user lifecycle settings`,`External collaboration guest invite settings`,`Cross-tenant access inbound settings`,`The guest user access restrictions setting`],
a:[0],
e:`Entitlement management settings can block sign-in for external users when their last assignment expires and remove them after a set number of days.`},

{d:"GOV",s:`Guests must accept the company's acceptable use policy before accessing apps. What should you configure?`,
o:[`A terms of use policy in Conditional Access`,`A custom banned password list for guests`,`A registration campaign for guests`,`An app role for guests`],
a:[0],
e:`Terms of use policies present a document users must accept. A Conditional Access policy with the terms of use grant control enforces acceptance before access.`},

{d:"GOV",s:`An access package request is waiting for approval. Who approves it?`,
o:[`The approvers set in the package's policy`,`Any Global Administrator automatically`,`The requester's manager in every case`,`The owner of the Microsoft Entra tenant`],
a:[0],
e:`Each access package policy defines approval stages and approvers — such as specific users, the requester's manager, or a sponsor — and an alternate approver if needed.`},

{d:"GOV",s:`Group owners should confirm every quarter whether each guest member still needs access. What should you configure?`,
o:[`A recurring access review`,`A dynamic membership rule`,`A Conditional Access policy`,`A PIM eligible assignment`],
a:[0],
e:`Access reviews can recur on a schedule, with reviewers such as group owners, managers, or the users themselves, and can remove access automatically based on decisions.`},

{d:"GOV",s:`Reviewers often don't respond. What setting removes access for users who weren't reviewed?`,
o:[`Non-response set to remove access`,`Reminders disabled for all reviewers`,`Self-review enabled for every user`,`Auto-apply results disabled`],
a:[0],
e:`The "If reviewers don't respond" setting can remove access, approve access, make no change, or take recommendations. With auto-apply results enabled, decisions are applied when the review ends.`},

{d:"GOV",s:`What recommendations do access reviews show reviewers to help their decisions?`,
o:[`Suggestions based on users' recent sign-in activity`,`Suggestions based on users' job satisfaction surveys`,`Suggestions copied from the previous year's review`,`Suggestions generated from users' email content`],
a:[0],
e:`Reviewer recommendations are based on factors such as whether the user signed in during the last 30 days and, in some cases, peer access, highlighting accounts that likely no longer need access.`},

{d:"GOV",s:`Which access review option asks users' managers to review first and then resource owners?`,
o:[`A multi-stage access review`,`A self-review access review`,`A recurring single-stage review`,`An access review of PIM roles only`],
a:[0],
e:`Multi-stage reviews chain reviewers in sequence, such as managers then resource owners, and can pass only some decisions to later stages.`},

{d:"GOV",s:`Where can an admin see the progress of an ongoing access review and which reviewers haven't responded?`,
o:[`The review's results and reviewer progress pages`,`The provisioning logs for each user`,`The Identity Secure Score recommendations`,`The tenant's company branding page`],
a:[0],
e:`Each access review instance shows its status, decisions so far, and reviewers, and admins can send reminders, stop the review, or apply results manually.`},

{d:"GOV",s:`An access review ended, but auto-apply was off. What must the admin do so denied users lose access?`,
o:[`Apply the review results manually`,`Restart the review from the beginning`,`Delete the reviewed group`,`Assign the users to a new review`],
a:[0],
e:`If auto-apply is off, decisions take effect only when an admin applies them from the completed review.`},

{d:"GOV",s:`Admins should have the Exchange Administrator role only when they activate it, for up to four hours, with justification. What should you use?`,
o:[`PIM eligible role assignments`,`Permanent active role assignments`,`A custom role with a time limit`,`An administrative unit with expiry`],
a:[0],
e:`Privileged Identity Management makes users eligible for roles that they activate just in time, with settings such as maximum duration, MFA or authentication context, justification, ticket information, and approval.`},

{d:"GOV",s:`Activation of the Global Administrator role in PIM must be approved by the security team. Where do you configure this?`,
o:[`The role's settings in PIM`,`The role's Conditional Access policy`,`The Global Administrator's user profile`,`The tenant's External collaboration settings`],
a:[0],
e:`Each role's PIM settings define activation requirements, including requiring approval and choosing approvers.`},

{d:"GOV",s:`Developers need the Contributor role on a production subscription only when deploying fixes. What should you configure?`,
o:[`PIM for Azure resources`,`PIM for Microsoft Entra roles`,`A custom Microsoft Entra role`,`An access package with no expiry`],
a:[0],
e:`PIM for Azure resources manages just-in-time access to Azure RBAC roles at management group, subscription, resource group, or resource scope.`},

{d:"GOV",s:`A group grants access to several sensitive apps. Admins want members to activate group membership just in time. What should you use?`,
o:[`PIM for Groups`,`Dynamic group membership`,`Group-based licensing`,`An access review of the group`],
a:[0],
e:`PIM for Groups provides eligible, time-bound membership or ownership of security and Microsoft 365 groups, with activation requirements like other PIM roles.`},

{d:"GOV",s:`Where can auditors see who activated privileged roles and when?`,
o:[`The PIM audit history and reports`,`The Cloud app catalog`,`The provisioning logs`,`The custom security attributes page`],
a:[0],
e:`PIM keeps resource and my audit history of assignments and activations, including justification and approvers, and it can be exported or sent to Log Analytics through audit logs.`},

{d:"GOV",s:`Which practice does Microsoft recommend for emergency access (break-glass) accounts?`,
o:[`Two cloud-only accounts with strong MFA`,`One shared synced account with a simple password`,`An account that's excluded from all monitoring`,`A personal Microsoft account owned by the CIO`],
a:[0],
e:`Keep at least two cloud-only emergency accounts with phishing-resistant authentication such as FIDO2, exclude them carefully from policies that could lock everyone out, and alert on every sign-in.`},

{d:"GOV",s:`How should an organization know if an emergency access account is used?`,
o:[`Alert on its sign-ins`,`Check its last sign-in once a year`,`Disable logging for the account`,`Rely on users to report its use`],
a:[0],
e:`Send sign-in logs to Log Analytics and create alert rules that fire whenever an emergency access account signs in, since these accounts should almost never be used.`},

{d:"GOV",s:`Sign-in logs must be kept for two years for investigations. What should you configure?`,
o:[`A diagnostic settings export`,`A longer password expiration policy`,`An access review of all users' sign-ins`,`A Conditional Access policy for logging`],
a:[0],
e:`Microsoft Entra keeps sign-in logs for 30 days with P1/P2 licenses. Diagnostic settings stream them to a Log Analytics workspace, storage account, or event hub for longer retention or SIEM integration.`},

{d:"GOV",s:`Logs must be streamed to a third-party SIEM in near real time. Which diagnostic settings destination fits?`,
o:[`An Azure event hub`,`An Azure storage account`,`A Microsoft 365 group`,`An application collection`],
a:[0],
e:`Event Hubs is the streaming destination for third-party SIEMs. Storage accounts are for archiving, and Log Analytics is for querying and Azure Monitor alerts.`},

{d:"GOV",s:`Which Log Analytics table holds interactive user sign-ins from Microsoft Entra ID?`,
o:[`SigninLogs`,`AuditLogs`,`AzureActivity`,`SecurityEvent`],
a:[0],
e:`SigninLogs holds interactive user sign-ins. Non-interactive, service principal, and managed identity sign-ins have their own tables, and AuditLogs records directory changes.`},

{d:"GOV",s:`Where do you check why a user wasn't created in a SaaS app by automatic provisioning?`,
o:[`The provisioning logs`,`The sign-in logs`,`The audit logs of the app`,`The Secure Score page`],
a:[0],
e:`Provisioning logs record each create, update, and delete attempt for provisioned apps, with status and error details.`},

{d:"GOV",s:`Which KQL query finds failed sign-ins in the last day?`,
o:[`SigninLogs | where TimeGenerated > ago(1d) and ResultType != "0"`,`AuditLogs | where TimeGenerated > ago(1d) and Result == "Allow"`,`SigninLogs | where TimeGenerated < ago(1d) and ResultType == "0"`,`AzureActivity | where Caller == "failed" | take 1`],
a:[0],
e:`In SigninLogs, ResultType "0" means success, so filtering for other values over the last day returns failures. AuditLogs records directory changes, not sign-ins.`},

{d:"GOV",s:`Which feature gives a prioritized list of identity security improvements, such as enabling MFA for admins?`,
o:[`Identity Secure Score`,`Connect Health`,`The Cloud app catalog`,`Company branding`],
a:[0],
e:`Identity Secure Score measures your identity security posture against Microsoft recommendations and lists improvement actions with their score impact.`},

{d:"GOV",s:`Which tool provides prebuilt visual reports, such as Conditional Access insights and sign-in analysis, over Entra logs in Log Analytics?`,
o:[`Microsoft Entra workbooks`,`Defender for Cloud Apps catalog`,`The PIM activation page`,`The bulk operations page`],
a:[0],
e:`Microsoft Entra workbooks visualize sign-in, audit, and Conditional Access data stored in Log Analytics, such as the Conditional Access insights and reporting workbook.`},

{d:"GOV",s:`Which log shows that an admin added a user to a privileged group yesterday?`,
o:[`The audit logs`,`The sign-in logs`,`The provisioning logs`,`The usage and insights report`],
a:[0],
e:`Audit logs record directory changes such as user, group, role, and app modifications, including who made them and when.`},

{d:"GOV",s:`Which PIM feature warns admins when privileged roles are assigned outside PIM or aren't being used?`,
o:[`PIM alerts`,`Access package policies`,`Registration campaigns`,`Company branding`],
a:[0],
e:`PIM alerts flag risky configurations such as roles assigned outside PIM, too many Global Administrators, or eligible admins who never activate their roles, with remediation steps.`},

{d:"GOV",s:`The security team wants Global Administrators to justify every quarter why they still need the role. What should it configure?`,
o:[`An access review of the role in PIM`,`A dynamic group of administrators`,`A Conditional Access sign-in frequency`,`An administrative unit for admins`],
a:[0],
e:`Access reviews can target Microsoft Entra roles and Azure resource roles through PIM, asking members to self-review or reviewers to confirm whether privileged assignments are still needed.`},

{d:"GOV",s:`The HR team should manage access packages for HR resources without being Identity Governance Administrators. What should you do?`,
o:[`Make them owners of an HR catalog`,`Assign them the Global Reader role`,`Add them to a restricted administrative unit`,`Make them owners of every HR app registration`],
a:[0],
e:`Catalog owners can add resources they own and create and manage access packages in their catalog, delegating access management to the business without tenant-wide admin roles.`},

{d:"GOV",s:`Which Log Analytics table holds non-interactive sign-ins, such as token refreshes made by apps on a user's behalf?`,
o:[`AADNonInteractiveUserSignInLogs`,`SigninLogs`,`AADServicePrincipalSignInLogs`,`AADManagedIdentitySignInLogs`],
a:[0],
e:`Non-interactive user sign-ins, which happen without user input, are in AADNonInteractiveUserSignInLogs. Interactive sign-ins are in SigninLogs, and service principal and managed identity sign-ins have their own tables.`},
  ],
};
