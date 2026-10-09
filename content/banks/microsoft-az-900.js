// Microsoft AZ-900 question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/microsoft-az-900.json.
module.exports = {
  id: "microsoft-az-900",
  idPrefix: "az900",
  vendor: "Microsoft",
  code: "AZ-900",
  name: "Microsoft Certified: Azure Fundamentals",
  fullLength: 50,
  minutes: 45,
  passPercent: 70,
  readinessPercent: 80,
  sectioned: false,
  note: "Microsoft scores AZ-900 on a 1–1000 scale with 700 to pass. This practice exam reports a straight percentage; treat 80% as your readiness bar. Questions follow the skills measured as of July 20, 2026, and Microsoft renames products often, so check current names on Microsoft Learn.",
  domains: [{"id":"CLD","name":"Describe cloud concepts","weight":"25–30%"},{"id":"ARC","name":"Describe Azure architecture and services","weight":"35–40%"},{"id":"MGT","name":"Describe Azure management and governance","weight":"30–35%"}],
  Q: [
{d:"CLD",s:`Which statement best describes cloud computing?`,
o:[`Delivering IT services over the internet on demand`,`Running every workload on servers the organization buys and houses itself`,`Leasing physical servers on multi-year contracts with fixed monthly fees`,`Installing desktop software from a vendor's website onto each PC`],
a:[0],
e:`Cloud computing is the on-demand delivery of computing services — servers, storage, databases, networking, software — over the internet, typically paid for as you use them. Buying and housing your own servers is the traditional on-premises model.`},

{d:"CLD",s:`Under the shared responsibility model, in which service type does the customer keep the most responsibility?`,
o:[`Infrastructure as a service (IaaS)`,`Platform as a service (PaaS)`,`Software as a service (SaaS)`,`Every service type shares responsibility equally`],
a:[0],
e:`With IaaS, the provider manages the physical hardware, network, and datacenter, but the customer manages the operating system, middleware, applications, and data. PaaS and SaaS shift progressively more of that to the provider.`},

{d:"CLD",s:`Which responsibility always belongs to the cloud provider, whatever the service type?`,
o:[`The physical security of the datacenter`,`The accounts and identities that sign in`,`The information and data that's stored`,`The devices that access the service`],
a:[0],
e:`The provider is always responsible for physical datacenters, physical networks, and physical hosts. Customers always remain responsible for their information and data, the devices that connect, and their accounts and identities.`},

{d:"CLD",s:`An organization uses a SaaS email service. Which item is still the organization's responsibility?`,
o:[`Managing the accounts and data in its mailboxes`,`Patching the mail servers' operating systems`,`Maintaining the physical servers that host mail`,`Upgrading the email application to new versions`],
a:[0],
e:`Even with SaaS, the customer owns its data and is responsible for the accounts that access it. The provider handles the servers, operating systems, and application updates.`},

{d:"CLD",s:`Which statement describes a public cloud?`,
o:[`A provider runs shared infrastructure that any customer can use`,`One organization uses infrastructure that's dedicated to it alone`,`On-premises and provider-hosted resources work together as one`,`Free computing resources that anyone on the internet can access`],
a:[0],
e:`In a public cloud, a provider such as Microsoft owns and runs the infrastructure and makes services available to many customers. Dedicated infrastructure is a private cloud, and a combination is a hybrid cloud. Public cloud isn't free; you pay for what you use.`},

{d:"CLD",s:`An organization must run all workloads on hardware it owns and controls, but it wants self-service provisioning for its teams. Which cloud model fits?`,
o:[`Private cloud`,`Public cloud`,`Hybrid cloud`,`Multicloud`],
a:[0],
e:`A private cloud is used by a single organization, often in its own datacenter, giving full control of the hardware while still offering cloud-style self-service. Public, hybrid, and multicloud models all place at least some workloads on a provider's hardware.`},

{d:"CLD",s:`A company wants to keep a sensitive database on-premises while hosting its web front end in Azure. Which cloud model is this?`,
o:[`Hybrid cloud`,`Private cloud`,`Public cloud`,`Software as a service`],
a:[0],
e:`A hybrid cloud combines on-premises (or private cloud) resources with public cloud resources, letting each workload run where it fits best.`},

{d:"CLD",s:`An organization runs some workloads in Azure and others with a second public cloud provider. Which term describes this?`,
o:[`Multicloud`,`Private cloud`,`Hybrid on-premises`,`Single-tenant cloud`],
a:[0],
e:`Multicloud means using more than one public cloud provider, for example to use specific features or to avoid depending on one provider. Tools such as Azure Arc can help manage resources across these environments.`},

{d:"CLD",s:`What is a key characteristic of the consumption-based model?`,
o:[`You pay only for what you use, with no upfront cost`,`You pay a fixed fee regardless of how much you use each month`,`You buy hardware upfront and depreciate it over several years`,`You pay for peak capacity even when demand is low`],
a:[0],
e:`In the consumption-based model, you pay for the resources you actually use, with no upfront infrastructure costs, and you can stop paying when you stop using them.`},

{d:"CLD",s:`Moving workloads from an on-premises datacenter to the cloud typically shifts IT spending from:`,
o:[`Capital expenditure to operational expenditure`,`Operational expenditure to capital expenditure`,`Variable monthly costs to fixed upfront costs`,`Shared infrastructure costs to dedicated hardware costs`],
a:[0],
e:`On-premises infrastructure is a capital expenditure (CapEx): you buy servers upfront. Cloud services are an operational expenditure (OpEx): you pay for them as you use them.`},

{d:"CLD",s:`A VM workload must run continuously, without interruption, for the next three years. Which pricing option typically gives the largest discount?`,
o:[`A three-year reservation`,`Pay-as-you-go pricing`,`Spot pricing with eviction`,`A one-year reservation`],
a:[0],
e:`Reservations give a significant discount in exchange for a one- or three-year commitment, and longer terms save more. Spot pricing is cheap but can evict the VM at any time, so it doesn't suit uninterrupted workloads.`},

{d:"CLD",s:`A batch job can be stopped and restarted at any point, and the goal is the lowest possible compute cost. Which option fits best?`,
o:[`Azure Spot Virtual Machines`,`A three-year reserved instance`,`Dedicated hosts with pay-as-you-go`,`The largest available VM size`],
a:[0],
e:`Spot VMs use unused Azure capacity at a deep discount, but Azure can evict them when it needs the capacity back. That's fine for interruptible work such as batch processing.`},

{d:"CLD",s:`A team is testing a new app for a few weeks and doesn't know how much capacity it'll need. Which pricing model fits best?`,
o:[`A pay-as-you-go plan`,`A three-year reservation`,`An upfront hardware purchase`,`A fixed-capacity contract`],
a:[0],
e:`Pay-as-you-go charges only for what you use, with no long-term commitment, which suits short-term or unpredictable workloads. Reservations and hardware purchases make sense for steady, long-lived workloads.`},

{d:"CLD",s:`What best describes serverless computing?`,
o:[`The provider manages servers, and you pay when code runs`,`Applications run without any servers anywhere in the system`,`You manage the operating system, while the provider manages the hardware`,`You reserve dedicated servers that sit idle until they're called`],
a:[0],
e:`Serverless doesn't mean there are no servers. The provider manages the infrastructure, scaling it automatically, and you're billed for execution rather than idle capacity. Managing the OS yourself is IaaS.`},

{d:"CLD",s:`Which Azure service is an example of serverless compute that runs code in response to events?`,
o:[`Azure Functions`,`Azure Virtual Machines`,`Azure Virtual Desktop`,`Azure ExpressRoute`],
a:[0],
e:`Azure Functions runs small pieces of code in response to triggers such as HTTP requests, timers, or queue messages, scaling automatically. VMs require you to manage the OS, Virtual Desktop delivers desktops, and ExpressRoute is a network connection.`},

{d:"CLD",s:`What does high availability mean for a cloud service?`,
o:[`It stays accessible with minimal downtime`,`It scales up automatically when demand increases`,`It runs only in the region closest to its users`,`It can be deployed by anyone in the organization`],
a:[0],
e:`High availability means keeping a service available with as little downtime as possible, typically backed by a service-level agreement (SLA) such as 99.9% or 99.99% uptime. Scaling with demand is scalability, a related but different benefit.`},

{d:"CLD",s:`A service has a 99.9% monthly uptime SLA. Roughly how much downtime does that allow each month?`,
o:[`About 43 minutes`,`About 4 minutes`,`About 7 hours`,`No downtime at all`],
a:[0],
e:`0.1% of a 30-day month (43,200 minutes) is about 43 minutes. A 99.99% SLA allows about 4 minutes, and each extra nine cuts allowed downtime by a factor of ten.`},

{d:"CLD",s:`Adding more virtual machines to share an increased load is an example of what?`,
o:[`Scaling out (horizontal scaling)`,`Scaling up (vertical scaling)`,`Scaling down (vertical scaling)`,`Scaling in (horizontal scaling)`],
a:[0],
e:`Scaling out adds more instances, and scaling in removes them. Scaling up and down change the size of an existing instance, such as its CPU or memory.`},

{d:"CLD",s:`An administrator increases a VM's CPU and memory to handle heavier work. What is this called?`,
o:[`Scaling up`,`Scaling out`,`Load balancing`,`Geo-replication`],
a:[0],
e:`Scaling up (vertical scaling) adds capacity to an existing resource. Scaling out adds more resources, load balancing distributes traffic among them, and geo-replication copies data to other regions.`},

{d:"CLD",s:`An online store's traffic spikes during holidays, and it wants resources to grow and shrink automatically with demand. Which cloud benefit describes this?`,
o:[`Elasticity`,`Governance`,`Predictability`,`Manageability`],
a:[0],
e:`Elasticity is the ability to add and remove resources automatically as demand changes, so you pay for extra capacity only when you need it.`},

{d:"CLD",s:`What does reliability mean in the cloud?`,
o:[`The ability to recover from failures and keep working`,`The ability to forecast monthly spending accurately`,`The ability to manage resources through templates`,`The ability to meet standards that regulators set`],
a:[0],
e:`Reliability is a system's ability to recover from failures and continue to function. The cloud's decentralized design, with regions and availability zones, makes resilient designs easier to build.`},

{d:"CLD",s:`Which two kinds of predictability does the cloud help with?`,
o:[`Performance and cost`,`Security and identity`,`Location and latency`,`Licensing and support`],
a:[0],
e:`Performance predictability comes from capabilities such as autoscaling and load balancing. Cost predictability comes from tools that track usage, forecast spending, and estimate costs before deploying.`},

{d:"CLD",s:`How does the cloud help with governance?`,
o:[`Templates and policies keep deployments within standards`,`The provider takes full responsibility for customer data`,`Customers no longer need any security controls of their own`,`Governance requirements don't apply to cloud resources at all`],
a:[0],
e:`Set templates help ensure resources meet corporate standards and regulatory requirements, and policies can audit for and flag noncompliance. Customers still own their data and still need their own controls.`},

{d:"CLD",s:`Which is an example of management IN the cloud, rather than management OF the cloud?`,
o:[`Using the portal or CLI to manage resources`,`Automatically scaling resources to meet demand`,`Replacing failing resources based on health data`,`Deploying resources from preconfigured templates`],
a:[0],
e:`Management in the cloud is how you manage the environment: through the web portal, a command-line interface, APIs, or PowerShell. Management of the cloud is managing the resources themselves, such as autoscaling, template deployments, health-based replacement, and alerts.`},

{d:"CLD",s:`Which statement describes IaaS?`,
o:[`The provider supplies hardware and networking; you manage the OS and apps`,`The provider manages everything, and you use the finished software`,`The provider runs the platform; you deploy just your code and data`,`You manage everything yourself, including the physical datacenter`],
a:[0],
e:`IaaS gives you the most control of the cloud service types: the provider maintains the hardware, network connectivity, and physical security, and you handle everything from the operating system up.`},

{d:"CLD",s:`A development team wants to deploy a web app without managing operating systems or patching. Which service type fits?`,
o:[`Platform as a service (PaaS)`,`Infrastructure as a service (IaaS)`,`On-premises virtualization`,`A private cloud datacenter`],
a:[0],
e:`With PaaS, the provider manages the infrastructure, operating system, and runtime, so the team focuses on its code and data. IaaS and on-premises options leave OS management to the customer.`},

{d:"CLD",s:`Which is an example of software as a service (SaaS)?`,
o:[`Microsoft 365`,`Azure Virtual Machines`,`Azure App Service`,`Azure Virtual Network`],
a:[0],
e:`SaaS delivers complete applications, such as email, productivity, or CRM software, that users simply sign in to. Virtual Machines and Virtual Network are IaaS, and App Service is PaaS.`},

{d:"CLD",s:`An organization wants to migrate on-premises servers to Azure quickly, with as few changes as possible. Which service type fits best?`,
o:[`Infrastructure as a service (IaaS)`,`Platform as a service (PaaS)`,`Software as a service (SaaS)`,`Containers as a service (CaaS)`],
a:[0],
e:`IaaS suits lift-and-shift migration: servers move to cloud VMs largely as they are. PaaS, SaaS, and container platforms require re-architecting, repackaging, or replacing the application.`},

{d:"CLD",s:`What's a trade-off of SaaS compared with IaaS?`,
o:[`Less flexibility to customize the software`,`More hardware to buy and maintain yourself`,`More operating system patching to perform`,`A longer wait before you can use the app`],
a:[0],
e:`SaaS is quick to adopt and needs the least management, but you can customize the software only as far as the provider allows. IaaS offers the most flexibility but the most responsibility.`},

{d:"CLD",s:`Which Azure service is an example of platform as a service (PaaS)?`,
o:[`Azure App Service`,`Azure Virtual Machines`,`Microsoft 365`,`Azure Virtual Network`],
a:[0],
e:`App Service hosts web apps and APIs without you managing the underlying servers or OS, which makes it PaaS. Virtual Machines and Virtual Network are IaaS, and Microsoft 365 is SaaS.`},

{d:"CLD",s:`Which cloud characteristic lets teams deploy resources in minutes rather than waiting weeks for hardware?`,
o:[`On-demand self-service`,`Capital expenditure`,`Fixed capacity planning`,`Long-term hardware leases`],
a:[0],
e:`Cloud resources are provisioned on demand through self-service tools, so there's no wait for procurement, shipping, and installation of physical hardware.`},

{d:"CLD",s:`In PaaS, who is responsible for maintaining the operating system?`,
o:[`The cloud provider`,`The customer`,`Both, equally, by contract`,`Whoever deploys the app`],
a:[0],
e:`In PaaS, the provider manages the OS, runtime, and infrastructure. The customer remains responsible for its applications, data, accounts, and access.`},

{d:"CLD",s:`As you move from IaaS to PaaS to SaaS, how does responsibility change?`,
o:[`The provider takes on more of it`,`The customer takes on more, and the provider less`,`Ownership of customer data moves to the provider`,`Responsibility stays the same in every model`],
a:[0],
e:`Each step hands more of the stack to the provider. Data, devices, and accounts and identities stay with the customer in every model.`},

{d:"CLD",s:`What's a drawback of a private cloud compared with a public cloud?`,
o:[`It requires the organization to buy and maintain hardware`,`It gives the organization less control over security`,`It can't be used to meet regulatory requirements`,`It requires internet access for every connection`],
a:[0],
e:`Private clouds give the most control but require upfront capital expenditure and ongoing maintenance of the hardware. Control and compliance are typically reasons to choose them, not drawbacks.`},

{d:"CLD",s:`How are Azure Functions billed on the Consumption plan?`,
o:[`A charge per execution and the resources used`,`A fixed monthly fee for each function you create`,`An upfront commitment for one or three years`,`An hourly charge for servers kept running idle`],
a:[0],
e:`On the Consumption plan, you pay for the number of executions and the resources used while code runs, and idle time costs nothing — a defining trait of serverless.`},

{d:"CLD",s:`Why does the cloud reduce the need to buy capacity for peak demand in advance?`,
o:[`Resources can be added when needed and removed after`,`Cloud workloads never experience peaks in demand`,`The provider guarantees unlimited free capacity`,`All workloads run on the largest VM size by default`],
a:[0],
e:`With on-premises hardware, you must buy enough for peak load, and much of it sits idle. In the cloud, you scale to meet demand and pay only for what you use.`},

{d:"ARC",s:`What is an Azure region?`,
o:[`A geographic area containing one or more datacenters`,`A single datacenter building located in a specific city`,`A logical container for resources that share a lifecycle`,`A billing boundary that holds a set of Azure resources`],
a:[0],
e:`A region is a geographic area containing at least one, and often several, datacenters that are close together and networked with low latency. A container for resources is a resource group, and a billing boundary is a subscription.`},

{d:"ARC",s:`What is a benefit of Azure region pairs?`,
o:[`Planned updates roll out to one region of a pair at a time`,`Resources are copied automatically to every region in the world`,`Both regions in a pair share the same physical datacenter`,`Data never leaves the primary region under any circumstances`],
a:[0],
e:`Paired regions, typically at least 300 miles apart where possible, receive planned platform updates one at a time, and one region of each pair is prioritized for recovery in a broad outage. Services like geo-redundant storage replicate to the paired region.`},

{d:"ARC",s:`Which is an example of an Azure sovereign region?`,
o:[`Azure Government`,`Azure Virtual Desktop`,`Azure Arc`,`Azure DevTest Labs`],
a:[0],
e:`Sovereign regions, such as Azure Government for US government agencies and Azure operated by 21Vianet in China, are instances of Azure isolated from the main public cloud for compliance or legal reasons.`},

{d:"ARC",s:`Why do sovereign regions exist?`,
o:[`To meet legal and compliance needs, isolated from public Azure`,`To offer lower prices than the other Azure regions`,`To provide extra capacity during periods of peak demand`,`To host preview features before general availability`],
a:[0],
e:`Sovereign regions serve customers with specific legal, regulatory, or data-handling requirements, such as government agencies, and are physically and logically isolated from the global Azure cloud.`},

{d:"ARC",s:`What is an availability zone?`,
o:[`A physically separate group of datacenters in a region`,`A group of regions in one country used together for disaster recovery`,`A logical grouping of VMs that sit in a single server rack`,`A sovereign region reserved for use by government agencies`],
a:[0],
e:`Availability zones are physically separate locations within a region, each made up of one or more datacenters with independent power, cooling, and networking. If one zone goes down, the others keep running.`},

{d:"ARC",s:`At minimum, how many availability zones does an availability zone–enabled region have?`,
o:[`Three`,`Two`,`Four`,`Eight`],
a:[0],
e:`Every availability zone–enabled region has at least three zones, so zone-redundant services can survive the loss of one zone.`},

{d:"ARC",s:`Which statement about resource groups is true?`,
o:[`Each resource belongs to exactly one resource group`,`Resource groups can be nested inside each other`,`A resource can belong to several resource groups`,`A resource group holds resources from one region only`],
a:[0],
e:`Every resource must be in exactly one resource group, and resource groups can't be nested. A group can hold resources from different regions, and resources can be moved between groups.`},

{d:"ARC",s:`What happens when you delete a resource group?`,
o:[`All the resources in it are deleted too`,`Its resources move to a default resource group`,`Only empty resource groups can be deleted`,`Its resources keep running but lose their tags`],
a:[0],
e:`Deleting a resource group deletes every resource in it, which is useful for cleaning up a temporary environment and a reason to group resources by shared lifecycle. Resource locks can prevent accidental deletion.`},

{d:"ARC",s:`What does an Azure subscription provide?`,
o:[`A billing and access boundary for resources`,`A physical datacenter dedicated to one customer`,`A set of policies applied to every tenant`,`A license to use the Microsoft 365 apps`],
a:[0],
e:`A subscription is a unit of management, billing, and scale. Costs are billed per subscription, and access policies can be applied at the subscription level.`},

{d:"ARC",s:`What's the purpose of management groups?`,
o:[`To govern many subscriptions together`,`To group VMs for load balancing inside a single region`,`To store backups of each resource group's templates`,`To bill several tenants together on a single invoice`],
a:[0],
e:`Management groups organize subscriptions into a hierarchy, and governance conditions such as Azure Policy and role assignments applied to a management group are inherited by every subscription beneath it.`},

{d:"ARC",s:`An Azure Policy is assigned to a management group. Which resources does it apply to?`,
o:[`Resources in every subscription beneath that management group`,`Only resources in the root management group's own subscription`,`Only the management group itself, and none of its children`,`Resources in other management groups that share its name`],
a:[0],
e:`Assignments at a management group are inherited by all child management groups, subscriptions, resource groups, and resources within it. That's what makes management groups useful for organization-wide governance.`},

{d:"ARC",s:`What's a key difference between containers and virtual machines?`,
o:[`Containers share the host OS kernel; VMs each run a full OS`,`Containers include a full guest OS; VMs share the host kernel`,`Containers can run only on-premises, never in Azure`,`VMs start faster than containers because they're smaller`],
a:[0],
e:`A VM virtualizes hardware and runs its own complete operating system. Containers virtualize the operating system, sharing the host's kernel, so they're lighter and start faster.`},

{d:"ARC",s:`Which Azure service orchestrates and manages large numbers of containers?`,
o:[`Azure Kubernetes Service (AKS)`,`Azure Container Instances`,`Azure Functions`,`Azure Virtual Desktop`],
a:[0],
e:`AKS is a managed Kubernetes service for deploying, scaling, and managing containerized apps across a cluster. Container Instances run individual containers without orchestration.`},

{d:"ARC",s:`What's the simplest way to run a single container in Azure, without managing VMs or an orchestrator?`,
o:[`Azure Container Instances`,`Azure Kubernetes Service`,`Virtual Machine Scale Sets`,`Azure Virtual Desktop`],
a:[0],
e:`Azure Container Instances is a PaaS offering that runs a container on demand with no VMs or cluster to manage. AKS adds orchestration for larger deployments.`},

{d:"ARC",s:`What do Virtual Machine Scale Sets provide?`,
o:[`A group of identical, load-balanced VMs that scale automatically`,`Physical isolation of VMs in a rack dedicated to one customer`,`Remote desktops that users can open from any device`,`Fault and update domains for a fixed set of VMs`],
a:[0],
e:`Scale Sets create and manage a group of identical VMs, adding or removing instances automatically based on demand or a schedule, with load balancing. Fault and update domains for a fixed set of VMs describe availability sets.`},

{d:"ARC",s:`What do availability sets do?`,
o:[`Spread VMs across fault and update domains`,`Scale VMs automatically based on CPU load`,`Replicate VMs to a paired region for recovery`,`Deliver virtual desktops to remote workers`],
a:[0],
e:`Availability sets stagger VMs across update domains, so they aren't all rebooted for maintenance at once, and fault domains, so they don't share a single power source or network switch.`},

{d:"ARC",s:`What is Azure Virtual Desktop?`,
o:[`A desktop and app virtualization service that runs in Azure`,`A tool for creating desktop shortcuts to the Azure portal`,`A rental service for physical PCs supplied by Microsoft`,`A gateway for SSH connections to Linux virtual machines`],
a:[0],
e:`Azure Virtual Desktop delivers Windows desktops and apps from Azure to users on almost any device, with centralized security and management and support for Windows multi-session.`},

{d:"ARC",s:`Besides its size, which resources does a typical Azure VM need?`,
o:[`A disk, a network interface, and a virtual network`,`A storage queue, a DNS zone, and a VPN gateway`,`An App Service plan, a function app, and a key vault`,`An ExpressRoute circuit, a firewall, and a load balancer`],
a:[0],
e:`A VM needs managed disks for its OS (and optionally data), a network interface, and a virtual network (with a subnet) to connect to. A public IP address and network security group are common but optional.`},

{d:"ARC",s:`A team wants to host a web app and API with built-in autoscaling and deployment slots, without managing VMs. Which service fits?`,
o:[`Azure App Service`,`Azure Virtual Machines`,`Azure Virtual Desktop`,`Azure Data Box`],
a:[0],
e:`App Service is a fully managed PaaS for web apps, APIs, and mobile back ends, with features such as autoscaling, deployment slots, and continuous deployment.`},

{d:"ARC",s:`What's the purpose of an Azure virtual network?`,
o:[`To let resources talk to each other, the internet, and on-premises`,`To store files that VMs share with each other over SMB`,`To assign roles to users for the resources they manage`,`To speed up the delivery of web content around the world`],
a:[0],
e:`Virtual networks provide isolation, segmentation, and communication: Azure resources such as VMs communicate with each other, the internet, and on-premises networks through them.`},

{d:"ARC",s:`Why divide a virtual network into subnets?`,
o:[`To segment resources and apply different security rules`,`To increase the total bandwidth of the virtual network`,`To connect the virtual network to another Azure region`,`To give each VM in the network its own public IP address`],
a:[0],
e:`Subnets split a virtual network's address space so resources can be grouped and secured separately, for example with different network security groups for web and database tiers.`},

{d:"ARC",s:`Two virtual networks need to communicate privately over the Microsoft backbone network. What should you use?`,
o:[`Virtual network peering`,`Azure DNS private resolver`,`A public IP on each VM`,`Azure Data Box Gateway`],
a:[0],
e:`Peering connects virtual networks, in the same or different regions, so traffic flows privately over Microsoft's backbone without going through the public internet.`},

{d:"ARC",s:`What does Azure DNS do?`,
o:[`Hosts DNS zones on Azure infrastructure`,`Sells new domain names for organizations to purchase`,`Encrypts the traffic flowing between virtual networks`,`Filters outbound web traffic by URL category`],
a:[0],
e:`Azure DNS hosts your DNS zones on Azure's global network, so you manage records with the same tools and billing as other Azure services. It doesn't sell domain names; you buy those from a registrar.`},

{d:"ARC",s:`An organization wants an encrypted connection between its on-premises network and Azure over the public internet. What should it use?`,
o:[`Azure VPN Gateway`,`Azure ExpressRoute`,`Virtual network peering`,`Azure DNS`],
a:[0],
e:`VPN Gateway sends encrypted traffic between an Azure virtual network and on-premises locations over the public internet. ExpressRoute is a private connection that doesn't use the public internet.`},

{d:"ARC",s:`Which statement describes ExpressRoute?`,
o:[`A private connection to Microsoft that avoids the public internet`,`An encrypted VPN tunnel that runs over the public internet`,`A content delivery network for static web files`,`A service for shipping data to Azure on physical disks`],
a:[0],
e:`ExpressRoute extends on-premises networks into the Microsoft cloud over a private connection through a connectivity provider, offering more reliability, speed, and consistent latency than internet-based connections.`},

{d:"ARC",s:`What is a private endpoint?`,
o:[`A network interface with a private IP that connects to a service`,`A public IP address that's hidden from search engines`,`A firewall rule that blocks all inbound internet traffic`,`A DNS record that points to an on-premises server`],
a:[0],
e:`A private endpoint uses Azure Private Link to give a service, such as a storage account, a private IP address in your virtual network, so traffic doesn't travel over the public internet. A public endpoint is reachable at a public address.`},

{d:"ARC",s:`Which Azure Storage service is designed for large amounts of unstructured data, such as images and videos?`,
o:[`Azure Blob Storage`,`Azure Queue Storage`,`Azure Table Storage`,`Azure Disk Storage`],
a:[0],
e:`Blob Storage is object storage for unstructured data such as images, video, backups, and logs, accessible over HTTP or HTTPS. Queues hold messages, Table Storage holds structured NoSQL data, and disks attach to VMs.`},

{d:"ARC",s:`Which service provides fully managed file shares that can be mounted over SMB or NFS?`,
o:[`Azure Files`,`Azure Blob Storage`,`Azure Queue Storage`,`Azure Disk Storage`],
a:[0],
e:`Azure Files offers managed file shares that cloud or on-premises machines can mount concurrently using SMB or NFS, just like a traditional file server.`},

{d:"ARC",s:`Data is rarely accessed, must be kept for years, and can wait hours to be retrieved. Which access tier is cheapest to store it in?`,
o:[`Archive`,`Hot`,`Cool`,`Premium`],
a:[0],
e:`The archive tier has the lowest storage cost but the highest retrieval cost, and data must be rehydrated to an online tier, which can take hours, before it can be read. Hot and cool are online tiers with higher storage costs, and Premium is a performance option for low-latency workloads, not a cheaper tier.`},

{d:"ARC",s:`Data is accessed infrequently but must be available immediately when needed, and it'll be kept for at least 30 days. Which tier fits best?`,
o:[`Cool`,`Hot`,`Archive`,`Cold`],
a:[0],
e:`The cool tier suits infrequently accessed data stored for at least 30 days, with lower storage costs than hot and immediate access, unlike archive. The cold tier is cheaper still for storage but is meant for data kept at least 90 days, with higher access costs.`},

{d:"ARC",s:`Which redundancy option keeps three copies of data within a single datacenter in the primary region?`,
o:[`Locally redundant storage (LRS)`,`Zone-redundant storage (ZRS)`,`Geo-redundant storage (GRS)`,`Geo-zone-redundant storage (GZRS)`],
a:[0],
e:`LRS is the lowest-cost option, replicating data three times within one datacenter. It protects against drive and server failures but not a datacenter-wide disaster.`},

{d:"ARC",s:`Which redundancy option copies data across three availability zones in the primary region?`,
o:[`Zone-redundant storage (ZRS)`,`Locally redundant storage (LRS)`,`Geo-redundant storage (GRS)`,`Read-access geo-redundant storage`],
a:[0],
e:`ZRS replicates data synchronously across three availability zones, so data stays available if one zone fails. It doesn't protect against a regional outage.`},

{d:"ARC",s:`Which redundancy option protects against a regional outage by replicating LRS data to a secondary region?`,
o:[`Geo-redundant storage (GRS)`,`Zone-redundant storage (ZRS)`,`Locally redundant storage (LRS)`,`Premium SSD managed disks`],
a:[0],
e:`GRS copies data three times in the primary region with LRS, then asynchronously to a secondary region, where it's also kept as three copies. GZRS uses ZRS in the primary region instead.`},

{d:"ARC",s:`Which storage account type is recommended for most scenarios and supports blobs, files, queues, and tables?`,
o:[`Standard general-purpose v2`,`Premium block blobs`,`Premium file shares`,`Legacy Blob Storage account`],
a:[0],
e:`Standard general-purpose v2 accounts support all the core storage services and redundancy options. Premium account types target specific high-performance scenarios.`},

{d:"ARC",s:`Which command-line utility copies blobs and files to or from a storage account?`,
o:[`AzCopy`,`Azure File Sync`,`Azure Migrate`,`Azure Data Box`],
a:[0],
e:`AzCopy is a command-line tool for copying data to, from, and between storage accounts. File Sync keeps Windows file servers in sync with Azure Files, Migrate moves servers, and Data Box ships data offline.`},

{d:"ARC",s:`An organization wants to keep its Windows file servers while centralizing its shares in Azure Files, caching frequently used files locally. Which tool fits?`,
o:[`Azure File Sync`,`Azure Storage Explorer`,`AzCopy`,`Azure Data Box`],
a:[0],
e:`Azure File Sync turns Windows Server into a cache of an Azure file share, with cloud tiering that keeps frequently accessed files local. Storage Explorer is a graphical management tool, and AzCopy copies data on demand.`},

{d:"ARC",s:`Which service provides a central hub to discover, assess, and migrate on-premises servers to Azure?`,
o:[`Azure Migrate`,`Azure Arc`,`Azure Advisor`,`Azure Data Box`],
a:[0],
e:`Azure Migrate brings together tools for discovery, assessment, and migration of servers, databases, web apps, and virtual desktops. Data Box physically ships data, Advisor recommends optimizations, and Arc manages resources outside Azure.`},

{d:"ARC",s:`An organization needs to move 60 TB of data to Azure, but its network bandwidth is limited. Which option fits best?`,
o:[`Azure Data Box`,`AzCopy over the internet`,`Azure Storage Explorer`,`Virtual network peering`],
a:[0],
e:`Data Box is a physical device Microsoft ships to you: you copy data onto it and send it back to be uploaded, avoiding slow or expensive network transfers of large data sets.`},

{d:"ARC",s:`What is Microsoft Entra ID?`,
o:[`A cloud-based identity and access management service`,`An on-premises domain controller role for Windows Server`,`A storage service for user profile photos and files`,`A network firewall that filters traffic by identity`],
a:[0],
e:`Microsoft Entra ID (formerly Azure Active Directory) is a cloud identity service for authenticating users and controlling access to apps and resources, in Azure, Microsoft 365, and thousands of other applications.`},

{d:"ARC",s:`Employees of a partner company need to access one of your apps using their own organization's credentials. Which capability fits?`,
o:[`Microsoft Entra External ID B2B collaboration`,`Creating a new local account for each partner user`,`Sharing one administrator account with the partner`,`Azure role-based access control at management group scope`],
a:[0],
e:`External identities let people outside your organization sign in with their own identities. B2B collaboration invites them as guests, and you control what they can access. Local or shared accounts add risk and management overhead.`},

{d:"ARC",s:`Which is one of the guiding principles of Zero Trust?`,
o:[`Assume breach`,`Trust the internal network`,`Verify users once a year`,`Grant broad standing access`],
a:[0],
e:`Zero Trust rests on three principles: verify explicitly, use least-privilege access, and assume breach. It rejects the idea that anything inside the network perimeter is automatically trusted.`},

{d:"ARC",s:`What's the purpose of the defense-in-depth model?`,
o:[`To layer protections so one failure doesn't expose everything`,`To rely on a single, strong firewall at the network edge`,`To move all security responsibility to the cloud provider`,`To encrypt data so that no other controls are needed`],
a:[0],
e:`Defense in depth uses layers — physical security, identity and access, perimeter, network, compute, application, and data — so an attacker who gets past one layer still faces the next.`},

{d:"ARC",s:`An organization wants to lift-and-shift legacy apps that need domain join and Kerberos, without deploying domain controllers in Azure. What should it use?`,
o:[`Microsoft Entra Domain Services`,`Microsoft Entra B2B collaboration`,`Azure role-based access control`,`Microsoft Entra Conditional Access`],
a:[0],
e:`Entra Domain Services provides managed domain services — domain join, Group Policy, LDAP, and Kerberos or NTLM authentication — without you deploying or patching domain controllers.`},

{d:"ARC",s:`What does single sign-on (SSO) let users do?`,
o:[`Use one set of credentials for many applications`,`Sign in once a year instead of every day`,`Sign in without any credentials at all`,`Share a single account across a whole team`],
a:[0],
e:`SSO lets a user sign in once with one identity and access many applications, which improves the user experience and means fewer credentials to manage and protect.`},

{d:"ARC",s:`Which is an example of a passwordless authentication method?`,
o:[`A FIDO2 security key`,`A password plus an SMS code`,`A long, complex passphrase`,`A set of security questions`],
a:[0],
e:`Passwordless methods, such as FIDO2 security keys, Windows Hello for Business, and Microsoft Authenticator, replace the password with something you have plus a biometric or PIN.`},

{d:"ARC",s:`What does Microsoft Entra Conditional Access do?`,
o:[`Uses signals like location to allow, block, or require MFA`,`Grants permanent administrator rights to selected users`,`Replicates user accounts to on-premises domain controllers`,`Encrypts data stored in Azure storage accounts`],
a:[0],
e:`Conditional Access evaluates signals such as user, location, device, and application to decide whether to allow access, require more verification such as MFA, or block access.`},

{d:"ARC",s:`An auditor needs to view Azure resources but must not change anything. Following least privilege, which built-in role should they get?`,
o:[`Reader`,`Owner`,`Contributor`,`User Access Administrator`],
a:[0],
e:`Reader can view resources but not change them. Contributor can manage resources but not grant access, Owner can do both, and User Access Administrator manages access.`},

{d:"ARC",s:`A role is assigned to a user at subscription scope. What does the assignment cover?`,
o:[`Everything in the subscription`,`Only resource groups created after the role was assigned`,`Only the subscription's billing data, not its resources`,`All subscriptions that belong to the same organization`],
a:[0],
e:`Azure RBAC assignments are inherited by child scopes: a role at subscription scope applies to all resource groups and resources in that subscription.`},

{d:"ARC",s:`What's the purpose of Microsoft Defender for Cloud?`,
o:[`To protect workloads and improve security posture`,`To provide a private connection from on-premises to Azure`,`To store and manage the secrets, keys, and certificates for apps`,`To assign roles that control what users can do with resources`],
a:[0],
e:`Defender for Cloud assesses security posture with recommendations and a secure score, and protects workloads with threat detection, across Azure, on-premises, and other clouds.`},

{d:"MGT",s:`Which set of factors affects the cost of Azure resources?`,
o:[`Resource type, usage, and region`,`Resource names and the tag values chosen`,`The portal theme and dashboard layout`,`The number of resource groups in use`],
a:[0],
e:`Costs depend on the resource type and its settings, how much you consume, where it's deployed (prices vary by region), network traffic, and your subscription and purchase options. Names, tags, and resource group counts don't change prices.`},

{d:"MGT",s:`Which network traffic is typically billed in Azure?`,
o:[`Outbound data leaving Azure datacenters`,`Inbound data uploaded into Azure datacenters`,`Requests made through the Azure portal`,`Calls to the Azure Resource Manager API`],
a:[0],
e:`Bandwidth charges usually apply to data going out of Azure datacenters (egress) and between regions. Most inbound data transfer (ingress) is free.`},

{d:"MGT",s:`An organization has Windows Server licenses with active Software Assurance. How can it reduce the cost of running Windows VMs in Azure?`,
o:[`Use Azure Hybrid Benefit`,`Move the VMs to a sovereign region`,`Add cost-center tags to each VM`,`Switch the VMs to locally redundant disks`],
a:[0],
e:`Azure Hybrid Benefit lets you apply existing on-premises Windows Server and SQL Server licenses with Software Assurance to Azure, so you don't pay again for the license portion of the VM.`},

{d:"MGT",s:`How can you stop paying for a VM's compute while keeping its disks and configuration?`,
o:[`Stop and deallocate it`,`Shut it down from inside the OS`,`Remove all the tags from it`,`Move it to a new resource group`],
a:[0],
e:`Stopping and deallocating a VM releases its compute resources, so compute charges stop, though storage for its disks is still billed. Shutting down from inside the guest OS leaves the VM allocated and still billed.`},

{d:"MGT",s:`What does the Azure pricing calculator do?`,
o:[`Estimates the cost of Azure services you plan to use`,`Shows the actual charges on last month's Azure invoice`,`Sets spending limits that stop resources automatically`,`Recommends cheaper VM sizes based on current usage`],
a:[0],
e:`The pricing calculator lets you configure services, regions, tiers, and purchase options to estimate costs before you deploy anything. Actual charges are in Cost Management, and usage-based recommendations come from Azure Advisor.`},

{d:"MGT",s:`Which statement about pricing calculator estimates is true?`,
o:[`They're estimates and don't create or bill resources`,`They lock in the quoted prices for three years`,`They deploy the configured resources for a test run`,`They're available only to Enterprise Agreement customers`],
a:[0],
e:`The pricing calculator is purely for estimates: nothing is provisioned, and actual costs depend on real usage. Anyone can use it.`},

{d:"MGT",s:`A finance team wants to analyze Azure spending and set a monthly budget with alerts. Which tool should it use?`,
o:[`Microsoft Cost Management`,`Azure Service Health`,`Azure Resource Manager`,`Microsoft Purview`],
a:[0],
e:`Cost Management provides cost analysis, budgets, alerts, and recommendations for Azure spending. Service Health reports platform issues, Resource Manager deploys resources, and Purview governs data.`},

{d:"MGT",s:`What happens by default when spending reaches a Cost Management budget threshold?`,
o:[`An alert is sent to the configured recipients`,`All resources in the scope are deleted automatically`,`The subscription is moved to a cheaper pricing tier`,`Resources are migrated to a lower-cost region`],
a:[0],
e:`Budgets raise alerts when actual or forecasted spending crosses a threshold. They don't stop or delete resources on their own, though an action group can trigger automation if you configure one.`},

{d:"MGT",s:`A finance team wants to see spending broken down by service and resource group over time. Which feature fits?`,
o:[`Cost analysis`,`Azure Advisor score`,`Resource Health`,`Activity log alerts`],
a:[0],
e:`Cost analysis in Cost Management explores and visualizes costs, grouped and filtered by dimensions such as service, resource group, location, or tag.`},

{d:"MGT",s:`What are tags in Azure?`,
o:[`Name-value pairs that add metadata to resources`,`Labels that set the region a resource is deployed to`,`Locks that stop resources from being deleted`,`Roles that grant users access to resources`],
a:[0],
e:`Tags are name-value pairs, such as CostCenter: Finance, applied to resources, resource groups, and subscriptions to organize them for management, cost reporting, and automation.`},

{d:"MGT",s:`How do tags help with cost management?`,
o:[`They group costs by department or project`,`They lower the hourly price of each resource`,`They stop resources when a budget runs out`,`They move resources to cheaper regions`],
a:[0],
e:`Tagging resources with values like department, project, or environment lets you filter and group costs in Cost Management to see and charge back spending.`},

{d:"MGT",s:`Do resources inherit tags from their resource group by default?`,
o:[`No, but Azure Policy can apply or inherit them`,`Yes, every tag is copied to each resource`,`Yes, but only for resources created afterward`,`No, and resource groups can't be tagged at all`],
a:[0],
e:`Tags aren't inherited by default. Azure Policy can add a missing tag or copy one from the resource group, which is a common way to keep tagging consistent.`},

{d:"MGT",s:`How can you require that every new resource has a CostCenter tag?`,
o:[`Assign an Azure Policy that requires the tag`,`Place a ReadOnly lock on each resource group`,`Give every user the Reader role at subscription scope`,`Add the tag to the subscription so it's inherited`],
a:[0],
e:`An Azure Policy with a deny effect can block creation of resources that lack a required tag, or a modify effect can add it. Locks and roles don't check resource properties, and tags aren't inherited by default.`},

{d:"MGT",s:`What is the purpose of Microsoft Purview in Azure?`,
o:[`Governing data by discovering, classifying, and mapping it`,`Running containers without managing the underlying VMs`,`Providing private network connections to Microsoft`,`Hosting DNS zones on Azure's global infrastructure`],
a:[0],
e:`Microsoft Purview is a family of data governance, risk, and compliance solutions. It helps you discover, classify, and map data across on-premises, multicloud, and SaaS sources, and understand its lineage.`},

{d:"MGT",s:`Data analysts can't find trustworthy data sets spread across on-premises, multicloud, and SaaS sources. Which service helps?`,
o:[`Microsoft Purview`,`Azure Advisor`,`Azure Arc`,`Azure Monitor Log Analytics`],
a:[0],
e:`Purview maps data across sources into a catalog that users can search, with classification and lineage, so analysts can find and trust data. Advisor gives recommendations, Arc manages non-Azure resources, and Log Analytics queries monitoring logs.`},

{d:"MGT",s:`What does Azure Policy do?`,
o:[`Evaluates resources against rules and enforces or audits compliance`,`Assigns roles that control what each user can do with resources`,`Estimates the monthly cost of resources before they're deployed`,`Collects performance metrics and logs from running resources`],
a:[0],
e:`Azure Policy evaluates resources against policy definitions and can deny noncompliant deployments, audit them, or modify them. Who can act on resources is controlled by RBAC instead.`},

{d:"MGT",s:`An organization must allow resources to be deployed only in two specific regions. What should it use?`,
o:[`Azure Policy`,`Azure RBAC`,`Resource locks`,`Resource tags`],
a:[0],
e:`A built-in policy such as Allowed locations denies deployments to other regions. RBAC controls who can deploy, not where; locks prevent changes; and tags only label resources.`},

{d:"MGT",s:`What is an Azure Policy initiative?`,
o:[`A group of related policy definitions managed together`,`A single rule that applies to one resource at a time`,`A role assignment granting access to policy settings`,`A report of the costs caused by noncompliant resources`],
a:[0],
e:`An initiative groups policy definitions toward a larger goal, such as meeting a regulatory standard, so they can be assigned and tracked as one unit.`},

{d:"MGT",s:`What's the difference between Azure Policy and Azure RBAC?`,
o:[`Policy governs resource properties; RBAC governs user actions`,`Policy governs user actions; RBAC governs resource properties`,`They're the same feature, shown under two different names`,`Policy applies to subscriptions, and RBAC applies only to tenants`],
a:[0],
e:`Azure Policy controls what resources look like — their locations, SKUs, or tags — whoever deploys them. RBAC controls which actions a user can perform at a given scope. They're often used together.`},

{d:"MGT",s:`What do resource locks prevent?`,
o:[`Accidental deletion or changes to resources`,`Users signing in from untrusted locations`,`Deployments to regions that aren't allowed`,`Spending beyond a monthly budget amount`],
a:[0],
e:`Locks protect important resources from being deleted or modified by mistake. Sign-in conditions are Conditional Access, region restrictions are Azure Policy, and budgets are Cost Management.`},

{d:"MGT",s:`Which two levels of resource lock are available?`,
o:[`Delete and ReadOnly`,`Allow and Deny`,`Audit and Enforce`,`Owner and Reader`],
a:[0],
e:`A Delete lock (CanNotDelete) lets authorized users read and modify a resource but not delete it. A ReadOnly lock lets them read it but not change or delete it.`},

{d:"MGT",s:`A user with the Owner role tries to delete a resource that has a Delete lock. What happens?`,
o:[`The deletion fails until the lock is removed`,`The deletion succeeds because Owners bypass locks`,`The resource is moved to a recycle bin for 30 days`,`The lock is removed automatically and the delete runs`],
a:[0],
e:`Locks apply to everyone, regardless of role. To delete the resource, someone with permission must first remove the lock, which adds a deliberate extra step.`},

{d:"MGT",s:`A Delete lock is applied to a resource group. Which resources does it protect?`,
o:[`Every resource in the group, including new ones`,`The resource group itself, but not its resources`,`Resources that existed before the lock was set`,`Resources that share a tag with the lock`],
a:[0],
e:`Locks are inherited: a lock on a resource group applies to every resource in it, including resources added later.`},

{d:"MGT",s:`What is the Azure portal?`,
o:[`A web-based console for building, managing, and monitoring resources`,`A command-line tool installed on each administrator's computer`,`A template format for deploying resources in a repeatable way`,`A physical location where customers can visit Azure hardware`],
a:[0],
e:`The Azure portal is a web console for creating, managing, and monitoring everything from simple web apps to complex deployments, with customizable dashboards.`},

{d:"MGT",s:`What is Azure Cloud Shell?`,
o:[`A browser-based shell with Bash or PowerShell, already signed in`,`A desktop app for browsing the contents of storage accounts`,`A service for running containers without managing any VMs`,`A security feature that isolates VMs from the internet`],
a:[0],
e:`Cloud Shell runs in the browser and is authenticated with your Azure credentials, with the Azure CLI and Azure PowerShell already installed, so there's nothing to set up locally.`},

{d:"MGT",s:`Which statement about Azure CLI and Azure PowerShell is true?`,
o:[`Both run on Windows, macOS, and Linux`,`Azure CLI runs only on Linux, and PowerShell runs only on Windows`,`Neither one can be used to automate tasks with scripts`,`They manage different resources, so most teams need both`],
a:[0],
e:`Both tools can do almost anything the portal can, run on all major operating systems, and support scripting. The choice is mostly preference: Azure CLI uses Bash-style commands, and Azure PowerShell uses cmdlets.`},

{d:"MGT",s:`What does Azure Arc do?`,
o:[`Extends Azure management to resources outside Azure`,`Migrates on-premises servers into Azure permanently`,`Connects virtual networks across different regions`,`Ships large amounts of data to Azure on devices`],
a:[0],
e:`Azure Arc projects non-Azure resources — servers, Kubernetes clusters, and databases on-premises or in other clouds — into Azure Resource Manager so you can manage and govern them with Azure tools.`},

{d:"MGT",s:`An organization wants to apply Azure Policy and RBAC to servers running in AWS and in its own datacenter. What enables this?`,
o:[`Azure Arc`,`Azure Migrate`,`Azure ExpressRoute`,`Azure Data Box`],
a:[0],
e:`Arc-enabled servers appear as Azure resources, so Azure Policy, RBAC, tags, and monitoring apply to them as they do to Azure VMs. Migrate moves servers into Azure instead.`},

{d:"MGT",s:`What is infrastructure as code (IaC)?`,
o:[`Defining infrastructure in files that can be versioned and redeployed`,`Writing application code that runs on Azure virtual machines`,`Manually configuring each resource through the Azure portal`,`Storing source code in an Azure storage account for backup`],
a:[0],
e:`With IaC, you describe infrastructure in code, such as Bicep files or ARM templates, so deployments are repeatable, consistent, and can be kept in source control.`},

{d:"MGT",s:`Which language did Microsoft create for declaratively deploying Azure resources, as a simpler alternative to JSON ARM templates?`,
o:[`Bicep`,`Kusto`,`YAML`,`Python`],
a:[0],
e:`Bicep is a domain-specific language for Azure deployments with cleaner syntax than JSON. Bicep files are converted to ARM templates and deployed through Azure Resource Manager. Kusto (KQL) is a query language.`},

{d:"MGT",s:`What is Azure Resource Manager (ARM)?`,
o:[`A deployment and management service for Azure`,`A graphical tool for browsing storage account data`,`A service that recommends ways to lower costs`,`A monitoring dashboard for platform outages`],
a:[0],
e:`Every request to create, update, or delete resources — from the portal, CLI, PowerShell, or APIs — goes through Resource Manager, which authenticates and authorizes it and applies features like RBAC, locks, and tags consistently.`},

{d:"MGT",s:`What format are ARM templates written in?`,
o:[`JSON`,`XML`,`CSV`,`HTML`],
a:[0],
e:`ARM templates are JSON files that declaratively define the resources to deploy. Deploying the same template again produces the same result.`},

{d:"MGT",s:`What does Azure Advisor provide?`,
o:[`A set of recommendations to improve reliability, security, and cost`,`A view of platform outages and maintenance that affect your services`,`A query tool for searching log data collected from resources`,`A private connection from on-premises networks to Azure`],
a:[0],
e:`Advisor analyzes your configuration and usage and gives personalized recommendations in categories including reliability, security, performance, operational excellence, and cost.`},

{d:"MGT",s:`An administrator wants recommendations to cut spending on underused VMs. Which tool provides them?`,
o:[`Azure Advisor`,`Azure Service Health`,`Azure Policy`,`Azure Arc`],
a:[0],
e:`Advisor's cost recommendations flag underused resources, such as VMs that can be resized or shut down, and suggest reservations.`},

{d:"MGT",s:`What does Azure Service Health provide?`,
o:[`Information on Azure service issues and maintenance that affect you`,`Recommendations to resize VMs and reduce monthly spending`,`Alerts when a user signs in from an unusual location`,`Measurements of each application's response times`],
a:[0],
e:`Service Health combines Azure status (the global view), Service Health (issues and planned maintenance for the services and regions you use), and Resource Health (individual resources).`},

{d:"MGT",s:`Which part of Azure Service Health reports on the health of an individual resource, such as one VM?`,
o:[`Resource Health`,`Azure status`,`Cost analysis`,`Azure Advisor`],
a:[0],
e:`Resource Health shows whether a specific resource is available and helps diagnose platform problems affecting it. Azure status is the global view of all services in all regions.`},

{d:"MGT",s:`What does Azure Monitor do?`,
o:[`Collects and analyzes metrics and logs from resources`,`Estimates the cost of resources before deployment`,`Enforces rules about which regions resources use`,`Copies data from on-premises file servers to Azure`],
a:[0],
e:`Azure Monitor collects, analyzes, and acts on telemetry from Azure, on-premises, and other cloud environments, including metrics, logs, and application data.`},

{d:"MGT",s:`Which Azure Monitor tool lets you write and run queries against collected log data?`,
o:[`Log Analytics`,`Azure Advisor`,`Resource Health`,`Pricing calculator`],
a:[0],
e:`Log Analytics is where you write Kusto Query Language (KQL) queries against log data in Azure Monitor, to troubleshoot or analyze trends.`},

{d:"MGT",s:`What do Azure Monitor alerts do?`,
o:[`Notify you or take action when monitoring data meets a condition`,`Stop resources from being deleted or changed by mistake`,`Give recommendations to improve resource security and cost`,`Show the global status of every Azure service in every region`],
a:[0],
e:`Alerts watch metrics, logs, and activity log events, and when conditions are met they notify people or trigger actions through action groups, such as running automation.`},

{d:"MGT",s:`A team wants to monitor its web app's performance, availability, and usage, including failed requests and response times. Which feature fits?`,
o:[`Application Insights`,`Azure Advisor`,`Azure Service Health`,`Microsoft Purview`],
a:[0],
e:`Application Insights, part of Azure Monitor, is an application performance monitoring tool that tracks requests, failures, response times, dependencies, and usage for web apps.`},
  ],
};
