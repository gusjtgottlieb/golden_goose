// CompTIA 220-1202 question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/comptia-220-1202.json.
module.exports = {
  id: "comptia-220-1202",
  idPrefix: "a1202",
  vendor: "CompTIA",
  code: "220-1202",
  name: "CompTIA A+ Core 2 (V15)",
  fullLength: 90,
  minutes: 90,
  passPercent: 70,
  readinessPercent: 80,
  sectioned: false,
  note: "CompTIA scores A+ Core 2 on a 100–900 scale with 700 to pass. This practice exam reports a straight percentage; treat 80% as your readiness bar. The real exam also includes performance-based questions (PBQs), which this practice exam doesn't include, so practice hands-on tasks separately. A+ certification requires passing both Core 1 (220-1201) and Core 2 (220-1202). Questions follow the 220-1202 exam objectives (version 3.0).",
  domains: [{"id":"OS","name":"Operating Systems","weight":"28%"},{"id":"SEC","name":"Security","weight":"28%"},{"id":"ST","name":"Software Troubleshooting","weight":"23%"},{"id":"OP","name":"Operational Procedures","weight":"21%"}],
  Q: [
{d:"OS",s:`Which filesystem should be used for a Windows 11 system drive?`,
o:[`NTFS`,`FAT32`,`exFAT`,`ext4`],
a:[0],
e:`NTFS supports permissions, encryption, large files, and journaling, and it's required for the Windows system volume.`},

{d:"OS",s:`A user needs a USB drive that works on both Windows and macOS and can store files larger than 4 GB. Which filesystem fits best?`,
o:[`exFAT`,`FAT32`,`NTFS`,`APFS (Mac only)`],
a:[0],
e:`exFAT is supported read/write by both Windows and macOS and has no 4 GB file size limit, unlike FAT32.`},

{d:"OS",s:`What is the main limitation of FAT32?`,
o:[`Individual files can't exceed 4 GB`,`It can't be read by macOS at all`,`It supports only optical media`,`It requires a Linux kernel to mount`],
a:[0],
e:`FAT32 is widely compatible but limits file size to 4 GB and lacks permissions and journaling.`},

{d:"OS",s:`Which filesystem is the default for modern Mac computers?`,
o:[`APFS`,`ext4`,`ReFS (Resilient)`,`NTFS`],
a:[0],
e:`The Apple File System is optimized for SSDs and supports snapshots and strong encryption.`},

{d:"OS",s:`Which filesystem is a common default for many Linux distributions?`,
o:[`ext4`,`APFS`,`ReFS`,`FAT32`],
a:[0],
e:`ext4 is a journaling filesystem widely used on Linux. XFS is another common choice, especially for large volumes.`},

{d:"OS",s:`Which Microsoft filesystem is designed for resilience and large-scale data on servers, such as Storage Spaces volumes?`,
o:[`ReFS`,`FAT32`,`exFAT`,`APFS`],
a:[0],
e:`The Resilient File System focuses on data integrity and scalability, mainly on Windows Server and storage pools.`},

{d:"OS",s:`A company still runs an OS version that the vendor no longer patches. What's the main risk?`,
o:[`New vulnerabilities won't be fixed`,`The OS will stop booting at once`,`Files will be deleted automatically`,`Users can no longer sign in`],
a:[0],
e:`End-of-life systems don't get security updates, so newly found vulnerabilities remain open.`},

{d:"OS",s:`Which operating system is designed mainly around web apps and is common on low-cost laptops in schools?`,
o:[`ChromeOS`,`iPadOS`,`macOS`,`Windows Server`],
a:[0],
e:`ChromeOS is a lightweight, browser-centric OS managed largely through Google accounts and cloud services.`},

{d:"OS",s:`An app runs on iOS but the company also needs it on employees' Android phones. What compatibility concern applies?`,
o:[`Apps must be built or available for each mobile OS`,`iOS apps run unchanged on Android devices`,`Android can install iOS apps from the Play Store`,`Mobile apps work on any OS once signed`],
a:[0],
e:`Mobile apps are OS-specific. Organizations must confirm an Android version exists or use cross-platform or web-based apps.`},

{d:"OS",s:`A technician wants to wipe a drive and install Windows fresh, without keeping any old settings or apps. What type of installation is this?`,
o:[`A clean install`,`An in-place upgrade`,`A repair installation`,`A recovery partition restore`],
a:[0],
e:`A clean install formats the target and installs a fresh OS. An in-place upgrade keeps files, settings, and apps.`},

{d:"OS",s:`A company wants to deploy the same configured Windows build to 200 identical PCs quickly. Which method fits?`,
o:[`Image deployment`,`Clean install from DVD on each PC`,`Repair installation on each PC`,`A manual upgrade from Windows 10`],
a:[0],
e:`Imaging captures a reference build and deploys it to many machines, saving time and ensuring consistency.`},

{d:"OS",s:`New laptops are shipped directly to remote employees and configure themselves with company settings when they sign in. Which method is this?`,
o:[`Zero-touch deployment`,`A clean install from USB`,`A repair installation`,`A multiboot setup`],
a:[0],
e:`Zero-touch deployment, such as Windows Autopilot, provisions devices from the cloud without IT handling them.`},

{d:"OS",s:`Which partition style supports drives larger than 2 TB and is required for UEFI boot on Windows 11?`,
o:[`GPT`,`MBR`,`FAT32`,`Extended partition`],
a:[0],
e:`GUID Partition Table supports very large disks and many partitions. MBR is limited to 2 TB and four primary partitions.`},

{d:"OS",s:`Windows Setup doesn't see the drive on a new server with a RAID controller. What should the technician do?`,
o:[`Load the RAID controller's storage driver`,`Convert the target drive to MBR first`,`Switch the firmware to legacy BIOS mode`,`Run diskpart and clean the disk first`],
a:[0],
e:`Some storage controllers need third-party drivers during setup before Windows can see the drives.`},

{d:"OS",s:`Before upgrading a user's PC to a new OS version, what should be done first?`,
o:[`Back up data and check compatibility`,`Delete the user's profile to free space`,`Format the drive to remove old drivers`,`Disable the antivirus permanently first`],
a:[0],
e:`Upgrade planning includes backups and confirming that applications, drivers, and hardware are supported.`},

{d:"OS",s:`Windows won't start correctly, and the technician wants to reinstall system files while keeping apps and data. What should be used?`,
o:[`A repair installation`,`A clean install`,`A new disk partition`,`A multiboot installation`],
a:[0],
e:`A repair install (in-place reinstall) replaces system files while preserving user data and applications.`},

{d:"OS",s:`A lab needs PCs that can start either Windows or Linux at boot time. What setup is this?`,
o:[`Multiboot`,`Zero-touch deployment`,`Image deployment`,`A recovery partition`],
a:[0],
e:`Multiboot installs multiple OSs on separate partitions and lets the user choose at startup.`},

{d:"OS",s:`A PC has no optical drive, and the technician needs to install Windows from a downloaded ISO. What's the most common boot method?`,
o:[`A bootable USB flash drive`,`A floppy disk image`,`A printer share`,`A Bluetooth file transfer link`],
a:[0],
e:`Bootable USB drives are the most common installation media. Network (PXE) boot is common in enterprises.`},

{d:"OS",s:`A laptop vendor includes a hidden partition that can restore the PC to factory settings. What is it called?`,
o:[`A recovery partition`,`A swap partition`,`An EFI system partition`,`A page file volume`],
a:[0],
e:`Recovery partitions hold the factory image so users can restore the original OS state.`},

{d:"OS",s:`A small business needs its Windows PCs to join an Active Directory domain. Which edition is the minimum?`,
o:[`Windows 11 Pro`,`Windows 11 Home`,`Windows 11 Home N`,`Windows 11 in S mode Home`],
a:[0],
e:`Home editions can't join an Active Directory domain. Pro, Enterprise, and Education editions can, so Pro is the minimum.`},

{d:"OS",s:`Which Windows 11 feature is available in Pro but not in Home?`,
o:[`BitLocker drive encryption`,`Windows Hello sign-in`,`Microsoft Defender Antivirus`,`The Windows Store`],
a:[0],
e:`Pro adds BitLocker, Group Policy Editor (gpedit.msc), domain join, and the ability to host Remote Desktop sessions.`},

{d:"OS",s:`A user on Windows 11 Home wants others to connect to their PC with Remote Desktop. What's required?`,
o:[`Upgrade to Pro or higher`,`Install a newer graphics driver`,`Enable BitLocker on the drive`,`Create a second user account`],
a:[0],
e:`Home can make outgoing RDP connections but can't host incoming RDP sessions. Pro and above can.`},

{d:"OS",s:`What are "N" editions of Windows?`,
o:[`Editions without certain media apps`,`Editions that can't join a domain`,`Editions limited to 4 GB of RAM`,`Editions built for kiosk devices only`],
a:[0],
e:`N editions omit some media features, such as certain media players, to meet European regulatory requirements.`},

{d:"OS",s:`Which hardware requirements must be met to install Windows 11?`,
o:[`TPM 2.0 and Secure Boot-capable UEFI`,`BIOS legacy mode and a 32-bit CPU`,`At least 32 GB of RAM and an NVMe drive`,`A dedicated graphics card and optical drive`],
a:[0],
e:`Windows 11 requires TPM 2.0, UEFI with Secure Boot support, a supported 64-bit CPU, 4 GB RAM, and 64 GB storage.`},

{d:"OS",s:`What's the difference between a domain and a workgroup?`,
o:[`A domain centralizes accounts; a workgroup manages each PC separately`,`A workgroup centralizes accounts; a domain manages each PC separately`,`A domain is only for home networks; a workgroup is only for servers`,`There's no difference; both need a domain controller`],
a:[0],
e:`Domains use centralized authentication and policy, such as Active Directory. Workgroups are peer-to-peer with local accounts.`},

{d:"OS",s:`A user wants to move from Windows 10 Pro to Windows 11 Pro while keeping files and apps. Which approach fits?`,
o:[`An in-place upgrade`,`A clean install`,`An image deployment`,`A recovery partition restore`],
a:[0],
e:`In-place upgrades keep data, settings, and applications when the hardware supports the new version.`},

{d:"OS",s:`A PC takes a long time to boot. Which Task Manager tab helps disable unnecessary programs that start at sign-in?`,
o:[`Startup`,`Performance`,`Users`,`Details`],
a:[0],
e:`The Startup tab shows startup apps and their impact, so you can disable unneeded ones.`},

{d:"OS",s:`Which tool shows detailed logs of system, security, and application events to help diagnose errors?`,
o:[`Event Viewer (eventvwr.msc)`,`Disk Management (diskmgmt.msc)`,`Task Scheduler (taskschd.msc)`,`Device Manager (devmgmt.msc)`],
a:[0],
e:`Event Viewer records errors, warnings, and audits in logs such as System, Application, and Security.`},

{d:"OS",s:`A technician needs to roll back a recently updated network adapter driver. Which tool should be used?`,
o:[`Device Manager`,`Event Viewer`,`Disk Cleanup`,`Task Scheduler library`],
a:[0],
e:`Device Manager lets you update, roll back, disable, or uninstall device drivers.`},

{d:"OS",s:`A script must run every night at 2 a.m. on a Windows PC. Which tool should be used?`,
o:[`Task Scheduler`,`Performance Monitor`,`Resource Monitor`,`System Configuration`],
a:[0],
e:`Task Scheduler runs programs or scripts on a schedule, at sign-in, or in response to events, without anyone needing to start them.`},

{d:"OS",s:`Which tool manages local user accounts and groups on Windows Pro?`,
o:[`lusrmgr.msc`,`certmgr.msc`,`devmgmt.msc`,`diskmgmt.msc`],
a:[0],
e:`Local Users and Groups (lusrmgr.msc) manages local accounts and group membership. It isn't available in Home editions.`},

{d:"OS",s:`A technician wants to log CPU, memory, and disk counters over several days to find a usage pattern. Which tool fits?`,
o:[`Performance Monitor`,`Task Manager's Users tab`,`System Information`,`Registry Editor`],
a:[0],
e:`Performance Monitor (perfmon.msc) records counters over time with data collector sets for analysis.`},

{d:"OS",s:`A technician needs to quickly view hardware and software details, such as BIOS version and installed RAM. Which tool fits?`,
o:[`System Information (msinfo32)`,`Disk Defragment (dfrgui)`,`Disk Cleanup (cleanmgr)`,`Certificate Manager (certmgr.msc)`],
a:[0],
e:`msinfo32 shows a detailed summary of hardware resources, components, and software environment.`},

{d:"OS",s:`A technician wants to perform a diagnostic boot that loads only essential services. Which tool can configure this?`,
o:[`System Configuration (msconfig)`,`Resource Monitor (resmon)`,`Disk Management (diskmgmt)`,`Local Users and Groups (lusrmgr.msc)`],
a:[0],
e:`msconfig can set diagnostic or selective startup and boot options, helping isolate problem services.`},

{d:"OS",s:`Which tool should be used, with caution, to change low-level Windows configuration settings stored in hives?`,
o:[`Registry Editor (regedit)`,`Disk Cleanup (cleanmgr.exe)`,`Event Viewer (eventvwr)`,`Device Manager (devmgmt)`],
a:[0],
e:`regedit edits the registry directly. Back up keys first, since mistakes can make Windows unstable.`},

{d:"OS",s:`Which tool shows which processes are using specific files, network connections, and disk I/O in real time?`,
o:[`Resource Monitor (resmon)`,`System Information (msinfo32)`,`Task Scheduler (taskschd)`,`Certificate Manager (certmgr)`],
a:[0],
e:`Resource Monitor gives detailed, real-time views of CPU, memory, disk, and network usage by process.`},

{d:"OS",s:`A user's PC is low on disk space, filled with temporary files and old update files. Which built-in tool helps?`,
o:[`Disk Cleanup`,`Disk Defragment`,`Device Manager`,`Group Policy Editor`],
a:[0],
e:`Disk Cleanup (cleanmgr) removes temp files, old update files, and other unnecessary data.`},

{d:"OS",s:`A new hire can sign in to Microsoft 365 but can't open the desktop Office apps or email. What's the most likely missing step?`,
o:[`Assigning a license to the account`,`Joining the laptop to a workgroup`,`Enabling BitLocker on the laptop`,`Mapping a drive to the file server`],
a:[0],
e:`Cloud productivity suites need a license assigned to each user account to enable apps such as email, Office, and cloud storage.`},

{d:"OS",s:`Which command scans and repairs corrupted protected Windows system files?`,
o:[`sfc /scannow`,`chkdsk /f`,`gpupdate /force`,`diskpart`],
a:[0],
e:`System File Checker restores corrupted system files. chkdsk checks the filesystem and disk for errors.`},

{d:"OS",s:`A technician changed a Group Policy setting and wants it applied to a PC immediately. Which command fits?`,
o:[`gpupdate /force`,`gpresult /r`,`sfc /scannow`,`net use /persistent`],
a:[0],
e:`gpupdate /force reapplies all policies right away. gpresult shows which policies were applied.`},

{d:"OS",s:`Which command shows the Group Policy settings applied to a user and computer?`,
o:[`gpresult /r`,`gpupdate /force`,`winver`,`hostname`],
a:[0],
e:`gpresult displays the Resultant Set of Policy, helping troubleshoot which GPOs apply.`},

{d:"OS",s:`A user needs drive letter S: mapped to the sales share on a file server from the command line. Which command fits?`,
o:[`net use S: \\\\fileserver\\sales`,`net user S: \\\\fileserver\\sales`,`robocopy S: \\\\fileserver\\sales`,`diskpart S: \\\\fileserver\\sales`],
a:[0],
e:`net use maps a drive letter to a network share. net user manages user accounts, and robocopy and diskpart don't map drives.`},

{d:"OS",s:`A technician needs to copy a large folder tree to a server, resuming after network interruptions and preserving attributes. Which command fits best?`,
o:[`robocopy`,`xcopy /e`,`copy`,`move`],
a:[0],
e:`Robust File Copy supports retries, mirroring, logging, and attribute preservation for large copies.`},

{d:"OS",s:`Which command checks a disk for filesystem errors and bad sectors?`,
o:[`chkdsk`,`sfc`,`gpresult`,`pathping`],
a:[0],
e:`chkdsk /f fixes filesystem errors, and /r also locates bad sectors and recovers readable data.`},

{d:"OS",s:`Which command combines traceroute and ping to show packet loss at each hop over time?`,
o:[`pathping`,`tracert`,`nslookup -debug`,`netstat`],
a:[0],
e:`pathping traces the route like tracert, then sends packets to each hop over time to measure latency and packet loss.`},

{d:"OS",s:`A company wants employees to sign in to Microsoft 365 with the same username and password as their on-premises Active Directory accounts. What should be configured?`,
o:[`Identity synchronization`,`Mapped network drives`,`Folder redirection`,`A metered connection`],
a:[0],
e:`Identity synchronization, such as Microsoft Entra Connect, syncs on-premises accounts to the cloud directory so users have one identity for cloud productivity tools.`},

{d:"OS",s:`Which command shows the user account and groups for the current session?`,
o:[`whoami /groups`,`net user /domain`,`hostname`,`gpresult /r`],
a:[0],
e:`whoami shows the signed-in identity, and /groups lists group memberships, which helps troubleshoot permissions.`},

{d:"OS",s:`Which command-line tool creates, deletes, and manages disk partitions and volumes?`,
o:[`diskpart`,`chkdsk`,`robocopy`,`sfc /scannow`],
a:[0],
e:`diskpart manages disks, partitions, and volumes from the command line. chkdsk checks filesystems, and sfc repairs system files.`},

{d:"OS",s:`A Linux user needs to install a package, which requires root privileges, without signing in as root. Which command prefix should they use?`,
o:[`sudo`,`chmod`,`ps`,`man`],
a:[0],
e:`sudo runs a single command with elevated privileges and logs it. su switches to another account entirely, chmod changes permissions, and man shows manual pages.`},

{d:"OS",s:`A user can't see a configuration file that starts with a period in a folder. Which setting should be changed?`,
o:[`File Explorer Options: show hidden files`,`Power Options: turn on fast startup`,`Indexing Options: rebuild the index`,`Ease of Access: enable high contrast`],
a:[0],
e:`File Explorer Options control viewing hidden and system files and whether file extensions are shown.`},

{d:"OS",s:`A laptop should keep running when its lid is closed while docked to an external monitor. Where is this set?`,
o:[`Power Options: lid close action`,`Display settings: multiple displays`,`Sound settings: playback device`,`Power Options: fast startup`],
a:[0],
e:`Power Options let you set what closing the lid and pressing the power button do, plus sleep and hibernate behavior.`},

{d:"OS",s:`A USB device keeps disconnecting on a laptop running on battery. Which power setting might cause this?`,
o:[`USB selective suspend`,`Fast startup`,`Hibernate after two hours`,`Standby display timeout`],
a:[0],
e:`USB selective suspend powers down idle USB ports to save energy, which can disrupt some devices.`},

{d:"OS",s:`A laptop on a hotel Wi-Fi network should block file and printer sharing discovery. Which network profile should be used?`,
o:[`Public network`,`Private network`,`Domain network`,`Metered network`],
a:[0],
e:`The Public profile hides the device and limits sharing. Private is for trusted home or office networks.`},

{d:"OS",s:`A user on a limited cellular data plan wants Windows to reduce background downloads. Which setting helps?`,
o:[`Set the connection as metered`,`Switch the network profile to Private`,`Enable network discovery`,`Configure a static IP address`],
a:[0],
e:`Marking a connection as metered tells Windows to limit automatic updates and some background data usage.`},

{d:"OS",s:`A company's PCs must send web traffic through a filtering server at 10.0.0.5:8080. What should be configured?`,
o:[`Proxy settings`,`DNS suffix settings`,`A static default gateway`,`A mapped network drive`],
a:[0],
e:`Proxy settings direct browser and app traffic through a proxy server for filtering and logging.`},

{d:"OS",s:`A Mac user downloads an app as a disk image file. Which file extension does this have?`,
o:[`.dmg`,`.msi`,`.exe`,`.deb package`],
a:[0],
e:`.dmg files are mountable disk images used to distribute macOS apps. .pkg files are installer packages.`},

{d:"OS",s:`Which macOS feature provides automatic, incremental backups to an external drive?`,
o:[`Time Machine`,`Spotlight`,`Keychain`,`Mission Control`],
a:[0],
e:`Time Machine backs up files hourly to an external or network drive and lets users restore earlier versions.`},

{d:"OS",s:`Which macOS feature provides full-disk encryption?`,
o:[`FileVault`,`Gatekeeper only`,`Spotlight`,`Continuity`],
a:[0],
e:`FileVault encrypts the startup disk, protecting data if the Mac is lost or stolen.`},

{d:"OS",s:`A Mac app is frozen and won't respond. How can the user close it?`,
o:[`Use Force Quit (Command+Option+Esc)`,`Open Disk Utility and repair the disk`,`Turn on FileVault encryption`,`Open Keychain Access and reset it`],
a:[0],
e:`Force Quit (Command+Option+Esc) closes unresponsive apps. Disk Utility manages and repairs disks, and Keychain stores passwords.`},

{d:"OS",s:`On Linux, which command changes a file's permissions so its owner can execute it?`,
o:[`chmod`,`chown`,`grep`,`pwd -P`],
a:[0],
e:`chmod changes permission bits, such as chmod u+x script.sh. chown changes the file's owner.`},

{d:"OS",s:`On a Debian or Ubuntu system, which command installs software packages from repositories?`,
o:[`apt`,`dnf`,`brew`,`msiexec`],
a:[0],
e:`apt manages packages on Debian-based distributions. dnf is used on Fedora and Red Hat–based systems.`},

{d:"OS",s:`Which Linux file defines which filesystems are mounted at boot?`,
o:[`/etc/fstab`,`/etc/hosts`,`/etc/passwd`,`/etc/resolv.conf`],
a:[0],
e:`/etc/fstab lists filesystems and mount options. /etc/resolv.conf lists DNS servers, and /etc/hosts maps names to IPs locally.`},

{d:"OS",s:`A 64-bit design application won't install on a user's PC. What should be checked first?`,
o:[`Whether the OS and CPU are 64-bit`,`Whether the monitor supports HDR`,`Whether the printer driver is current`,`Whether the keyboard is wireless`],
a:[0],
e:`64-bit applications need a 64-bit OS and CPU. Also check RAM, VRAM, storage, and OS version requirements.`},

{d:"SEC",s:`A building entrance has two doors, and the second won't open until the first closes, preventing tailgating. What is this?`,
o:[`An access control vestibule`,`A badge reader at one door`,`A motion-sensing door alarm`,`A turnstile with a camera`],
a:[0],
e:`Access control vestibules (mantraps) let one person through at a time and help stop tailgating.`},

{d:"SEC",s:`Short concrete posts are installed in front of a datacenter entrance to stop vehicles. What are they?`,
o:[`Bollards`,`Fences`,`Badge readers`,`Equipment locks`],
a:[0],
e:`Bollards are short, sturdy posts that block vehicles from ramming entrances while letting pedestrians through.`},

{d:"SEC",s:`Employees use a credit-card-sized badge with an embedded chip to unlock doors and sign in to PCs. What is this?`,
o:[`A smart card`,`A key fob`,`A magnetometer`,`A mobile digital key`],
a:[0],
e:`Smart cards hold certificates or credentials on a chip and support physical and logical access.`},

{d:"SEC",s:`A user signs in with a password and a six-digit code from an app that changes every 30 seconds. What provides the code?`,
o:[`A TOTP authenticator app`,`An SMS one-time password`,`A hardware smart card`,`A security question and answer`],
a:[0],
e:`Time-based one-time passwords are generated by an authenticator app from a shared secret and the current time.`},

{d:"SEC",s:`Why is SMS considered a weaker MFA method than an authenticator app or hardware token?`,
o:[`Codes can be intercepted or SIM-swapped`,`SMS codes never expire at all`,`SMS can't be sent internationally`,`SMS requires a smart card reader`],
a:[0],
e:`SMS can be intercepted or redirected through SIM swapping. Authenticator apps and hardware tokens are stronger.`},

{d:"SEC",s:`Employees sign in once and access multiple cloud apps without signing in again. What enables this?`,
o:[`Single sign-on (SSO)`,`Data loss prevention`,`Just-in-time access`,`Mobile device management`],
a:[0],
e:`SSO uses one authentication, often through SAML, to grant access to many services.`},

{d:"SEC",s:`Admins receive elevated rights only for a limited time when a task is approved. Which concept is this?`,
o:[`Just-in-time access`,`Single sign-on`,`Data loss prevention`,`Directory services`],
a:[0],
e:`Just-in-time access, often through PAM tools, removes standing admin rights and reduces risk.`},

{d:"SEC",s:`A tool blocks employees from emailing files that contain credit card numbers outside the company. What is it?`,
o:[`Data loss prevention (DLP)`,`Mobile device management (MDM)`,`Single sign-on (SSO)`,`An access control vestibule`],
a:[0],
e:`DLP inspects content and blocks or warns on sensitive data leaving through email, uploads, or devices.`},

{d:"SEC",s:`Which security model assumes no user or device is trusted by default, even inside the network?`,
o:[`Zero Trust`,`Defense by obscurity`,`Implicit trust`,`Perimeter-only security`],
a:[0],
e:`Zero Trust verifies every request based on identity, device health, and context, with least privilege.`},

{d:"SEC",s:`A user wants to install software but receives a prompt asking for administrator credentials. Which feature is this?`,
o:[`User Account Control (UAC)`,`BitLocker To Go`,`Encrypting File System prompts`,`Windows Defender Firewall`],
a:[0],
e:`UAC prompts for consent or admin credentials before changes that need elevated rights.`},

{d:"SEC",s:`A technician wants to encrypt a USB flash drive with a password using a built-in Windows feature. What should be used?`,
o:[`BitLocker To Go`,`Encrypting File System`,`User Account Control`,`Windows Hello`],
a:[0],
e:`BitLocker To Go encrypts removable drives, such as USB flash drives, with a password. BitLocker encrypts fixed drives.`},

{d:"SEC",s:`A user wants to encrypt just a few sensitive files on an NTFS volume so only their account can read them. Which feature fits?`,
o:[`Encrypting File System (EFS)`,`BitLocker To Go`,`User Account Control prompts`,`Windows Defender Firewall`],
a:[0],
e:`EFS encrypts individual files and folders tied to a user's certificate on NTFS volumes, available in Pro and above.`},

{d:"SEC",s:`A folder shared over the network has share permission "Read" and NTFS permission "Full Control" for a user. What access does the user have over the network?`,
o:[`Read`,`Full Control`,`Modify`,`No access`],
a:[0],
e:`When accessing over the network, the most restrictive of share and NTFS permissions applies. Locally, only NTFS applies.`},

{d:"SEC",s:`A file is copied to a different folder on the same NTFS volume. Which permissions does it typically get?`,
o:[`It inherits the destination's permissions`,`It keeps its original permissions always`,`It loses all permissions entirely`,`It gets Full Control for everyone`],
a:[0],
e:`Copied files inherit permissions from the destination. Files moved within the same volume keep their original permissions.`},

{d:"SEC",s:`A user signs in to Windows with a face scan instead of a password. Which feature is this?`,
o:[`Windows Hello`,`User Account Control`,`BitLocker`,`EFS`],
a:[0],
e:`Windows Hello supports face, fingerprint, and PIN sign-in, enabling passwordless authentication.`},

{d:"SEC",s:`Why is a Windows Hello PIN considered more secure than a password of the same length?`,
o:[`It's tied to the device's TPM`,`It's sent to Microsoft for verification`,`It never needs to be changed`,`It works on every computer the user owns`],
a:[0],
e:`A Hello PIN unlocks credentials stored on that device's TPM. A stolen PIN is useless without the device.`},

{d:"SEC",s:`A technician wants all users' Documents folders stored on a file server so they're backed up centrally. Which Active Directory feature fits?`,
o:[`Folder redirection`,`Login script deletion`,`A guest account`,`BitLocker To Go`],
a:[0],
e:`Folder redirection, configured through Group Policy, stores user folders on network shares.`},

{d:"SEC",s:`A new employee's account must get the correct file share access in Active Directory. What's the best approach?`,
o:[`Add the account to the right security groups`,`Grant the account Domain Admin rights temporarily`,`Give the account Full Control on each share`,`Create a local account on each file server`],
a:[0],
e:`Assigning permissions to security groups and adding users to them simplifies management and supports least privilege.`},

{d:"SEC",s:`A user's computer object is in the wrong OU, so it isn't receiving the right Group Policy. What should be done?`,
o:[`Move the computer to the correct OU`,`Reinstall Windows on the computer`,`Disable Group Policy on the computer`,`Rename the computer's local admin account`],
a:[0],
e:`GPOs link to OUs, so moving objects to the correct OU applies the intended policies.`},

{d:"SEC",s:`Which Windows account type should be disabled because it allows sign-in without a password?`,
o:[`Guest`,`Standard`,`Administrator`,`Microsoft account`],
a:[0],
e:`The Guest account is a security risk and is disabled by default. It should stay disabled.`},

{d:"SEC",s:`A user needs to run one program with administrator rights without signing in as an administrator. What should they do?`,
o:[`Use "Run as administrator" when needed`,`Disable User Account Control permanently`,`Add their account to the Administrators group`,`Sign in with the built-in Administrator account`],
a:[0],
e:`Run as administrator elevates a single program after UAC approval, while the user stays a standard user otherwise.`},

{d:"SEC",s:`Microsoft Defender Antivirus didn't detect a new threat. What should be checked?`,
o:[`That virus definitions are up to date`,`That BitLocker is turned off on the drive`,`That UAC is set to never notify`,`That the guest account is enabled`],
a:[0],
e:`Antivirus relies on current definitions and engine updates to detect new threats.`},

{d:"SEC",s:`An app needs to accept incoming connections on a Windows PC. What's the most secure firewall approach?`,
o:[`Create an allow rule for that app only`,`Turn off Windows Defender Firewall`,`Allow all inbound ports for convenience`,`Disable antivirus to reduce conflicts`],
a:[0],
e:`Application-specific rules allow only what's needed while the firewall stays active.`},

{d:"SEC",s:`Which wireless security protocol is the most secure option for a new SOHO network?`,
o:[`WPA3`,`WPA2 with TKIP`,`WEP`,`Open with MAC filtering`],
a:[0],
e:`WPA3 uses SAE and stronger protections. TKIP and WEP are deprecated and insecure.`},

{d:"SEC",s:`Which encryption cipher should be used with WPA2?`,
o:[`AES`,`TKIP`,`RC4`,`DES`],
a:[0],
e:`WPA2 should use AES (CCMP). TKIP and RC4 are legacy and vulnerable, and DES is an obsolete block cipher.`},

{d:"SEC",s:`Which authentication protocol uses tickets issued by a key distribution center and is used in Active Directory domains?`,
o:[`Kerberos`,`RADIUS`,`TACACS+`,`WPA3-Enterprise`],
a:[0],
e:`Kerberos issues time-limited tickets for authentication. It relies on synchronized clocks.`},

{d:"SEC",s:`A company wants employees to authenticate to Wi-Fi individually through a central server. Which protocol should the APs use?`,
o:[`RADIUS`,`Kerberos only`,`TKIP`,`SMTP`],
a:[0],
e:`RADIUS provides centralized authentication for wireless (WPA2/WPA3-Enterprise), VPN, and switch access.`},

{d:"SEC",s:`Files on a user's PC are encrypted, and a message demands cryptocurrency for the key. What type of malware is this?`,
o:[`Ransomware`,`Spyware`,`Adware pop-ups`,`A rootkit`],
a:[0],
e:`Ransomware encrypts data and demands payment. Isolate the system and restore from clean backups.`},

{d:"SEC",s:`Malware disguised as a free game installs a backdoor. What type of malware is this?`,
o:[`A Trojan`,`A worm`,`A keylogger`,`A boot sector virus`],
a:[0],
e:`Trojans appear legitimate, such as a free game, but carry hidden malicious functions, such as a backdoor. Worms spread on their own.`},

{d:"SEC",s:`A PC's fans run constantly and CPU usage stays near 100%, with an unknown process using all resources. What's the likely malware?`,
o:[`A cryptominer`,`A keylogger`,`Adware`,`A boot sector virus`],
a:[0],
e:`Cryptominers use system resources to mine cryptocurrency, causing high CPU use and heat.`},

{d:"SEC",s:`An app secretly tracks a person's location and messages and sends them to someone else. What is this?`,
o:[`Stalkerware`,`Ransomware`,`A boot sector virus`,`A potentially unwanted program`],
a:[0],
e:`Stalkerware monitors a person covertly, often installed by someone with physical access to the device.`},

{d:"SEC",s:`Malware hides deep in the OS, conceals its processes from antivirus, and survives normal removal. What type is it?`,
o:[`A rootkit`,`A network worm`,`A Trojan`,`Spyware`],
a:[0],
e:`Rootkits hide at the kernel or boot level. Removal may require offline scanning or reinstalling the OS.`},

{d:"SEC",s:`A free utility installed a browser toolbar and changed the home page, though it isn't clearly malicious. What is it?`,
o:[`A potentially unwanted program (PUP)`,`A rootkit that hides in the kernel`,`A boot sector virus in the MBR`,`A worm spreading across the network`],
a:[0],
e:`PUPs are bundled or unwanted software, such as toolbars and adware, that may affect privacy or performance.`},

{d:"SEC",s:`Malware runs only in memory through PowerShell and leaves nothing on disk. What type is it?`,
o:[`Fileless malware`,`A boot sector virus`,`A macro virus on disk`,`Polymorphic malware`],
a:[0],
e:`Fileless malware abuses legitimate tools in memory, which makes behavior-based detection, such as EDR, important.`},

{d:"SEC",s:`A company wants a third-party team to monitor its endpoints around the clock and respond to threats. Which service fits?`,
o:[`Managed detection and response (MDR)`,`Endpoint detection and response (EDR) only`,`An email security gateway service`,`A host-based software firewall`],
a:[0],
e:`MDR providers run detection and response for customers. EDR is the endpoint tool, and XDR correlates more data sources.`},

{d:"SEC",s:`A caller pretending to be from IT asks a user for their password to "fix" their account. What attack is this?`,
o:[`Vishing`,`Smishing`,`Whaling`,`Tailgating`],
a:[0],
e:`Vishing is voice phishing over phone calls. Smishing uses SMS, whaling targets executives, and tailgating is physical.`},

{d:"SEC",s:`A parking-lot sign asks drivers to scan a code with their phone camera, which opens a fake payment page. What is this attack?`,
o:[`QR code phishing`,`Shoulder surfing`,`Dumpster diving`,`An evil twin access point`],
a:[0],
e:`QR code phishing (quishing) hides malicious URLs in QR codes that users scan with their phones.`},

{d:"SEC",s:`Someone watches a user type their PIN at a kiosk. What is this?`,
o:[`Shoulder surfing`,`Tailgating`,`Impersonation of IT staff`,`Pretexting by phone`],
a:[0],
e:`Shoulder surfing is observing someone's screen or keypad. Privacy screens and awareness help prevent it.`},

{d:"SEC",s:`An attacker tries every word in a list of common passwords against an account. What attack is this?`,
o:[`A dictionary attack`,`A zero-day attack`,`An on-path attack`,`An SQL injection attempt`],
a:[0],
e:`Dictionary attacks use wordlists. Brute-force attacks try all possible combinations. Lockouts and MFA help.`},

{d:"SEC",s:`An attacker enters ' OR 1=1 -- into a website's login form to bypass authentication. What attack is this?`,
o:[`SQL injection`,`Cross-site scripting`,`A dictionary attack`,`An evil twin`],
a:[0],
e:`SQL injection manipulates database queries through unsanitized input. Parameterized queries prevent it.`},

{d:"SEC",s:`A website comment field lets attackers insert scripts that run in other visitors' browsers. What vulnerability is this?`,
o:[`Cross-site scripting (XSS)`,`SQL injection`,`Cross-site request forgery`,`Directory traversal attacks`],
a:[0],
e:`XSS injects scripts into web pages viewed by others. Output encoding and input validation prevent it.`},

{d:"SEC",s:`An attacker exploits a software flaw that the vendor hasn't discovered or patched yet. What is this?`,
o:[`A zero-day attack`,`A dictionary attack`,`An insider threat`,`Dumpster diving`],
a:[0],
e:`Zero-day attacks target unknown or unpatched vulnerabilities, so defense in depth and behavior monitoring help.`},

{d:"SEC",s:`An attacker intercepts and alters traffic between a user and a website on public Wi-Fi. What attack is this?`,
o:[`An on-path attack`,`A DDoS attack`,`Dumpster diving`,`A dictionary attack`],
a:[0],
e:`On-path (man-in-the-middle) attacks intercept communications. TLS and VPNs help protect traffic.`},

{d:"SEC",s:`An accountant receives an email that appears to come from the CEO, asking for an urgent wire transfer. What is this?`,
o:[`Business email compromise (BEC)`,`A whaling attack on the CEO`,`A spam email campaign`,`A vishing call from a fake bank`],
a:[0],
e:`BEC uses spoofed or compromised executive or vendor accounts to trick staff into sending money or data.`},

{d:"SEC",s:`Attackers compromise a software vendor's update server so customers install malicious updates. What attack is this?`,
o:[`A supply chain attack`,`Shoulder surfing`,`A dictionary attack`,`Tailgating into the datacenter`],
a:[0],
e:`Supply chain (pipeline) attacks compromise a trusted third party to reach its customers.`},

{d:"SEC",s:`A laptop is missing security patches and has no antivirus installed, violating company policy. Which vulnerabilities does this represent?`,
o:[`Unpatched, unprotected, non-compliant systems`,`An end-of-life OS that can't be upgraded`,`A BYOD device with no MDM enrollment`,`A zero-day vulnerability in the OS`],
a:[0],
e:`Missing patches and protections, and failing to meet policy, are common vulnerabilities that attackers exploit.`},

{d:"SEC",s:`A user's PC shows signs of malware. According to CompTIA's malware removal steps, what should the technician do first?`,
o:[`Investigate and verify the malware symptoms`,`Reimage the PC from a recovery partition`,`Educate the user about safe browsing`,`Schedule scans and run updates`],
a:[0],
e:`The steps start with investigating and verifying symptoms, then quarantining the system, disabling System Restore on Windows Home, remediating, and so on.`},

{d:"SEC",s:`A technician has confirmed malware on a Windows Home PC. After quarantining it, what should be done before remediation?`,
o:[`Disable System Restore`,`Enable System Restore`,`Educate the end user`,`Create a new restore point`],
a:[0],
e:`Disabling System Restore prevents infected restore points from reintroducing malware. It's re-enabled with a fresh restore point after cleanup.`},

{d:"SEC",s:`What is the final step of CompTIA's malware removal procedure?`,
o:[`Educate the end user`,`Quarantine the infected system`,`Update anti-malware software`,`Disable System Restore`],
a:[0],
e:`After cleaning, scheduling scans, and creating a new restore point, the technician educates the user to prevent reinfection.`},

{d:"SEC",s:`Malware keeps restarting and blocks removal in normal mode. What scanning approach should be tried?`,
o:[`Scan in Safe Mode or a preinstallation environment`,`Scan only after reconnecting to the network`,`Disable antivirus and reboot repeatedly`,`Delete the user profile and sign in again`],
a:[0],
e:`Safe Mode or a preinstallation environment loads fewer components, so malware is less able to interfere with removal.`},

{d:"SEC",s:`Which account policy reduces brute-force password guessing on workstations?`,
o:[`Lockout after a number of failed attempts`,`Enabling the guest account for visitors`,`Allowing unlimited sign-in attempts`,`Disabling the screen saver lock`],
a:[0],
e:`Account lockout thresholds stop repeated guessing. Combining them with strong passwords and MFA increases protection.`},

{d:"SEC",s:`Why should AutoRun be disabled on workstations?`,
o:[`It can launch malware from removable media`,`It slows down every network connection`,`It prevents users from opening documents`,`It disables BitLocker on fixed drives`],
a:[0],
e:`AutoRun can automatically execute code from USB drives or discs, which malware can abuse.`},

{d:"SEC",s:`Which password practice best improves security?`,
o:[`Use long, unique passwords stored in a password manager`,`Reuse one strong password across all accounts`,`Write passwords on a note under the keyboard`,`Use only short passwords that are easy to remember`],
a:[0],
e:`Length and uniqueness matter most. Password managers make it practical to use unique passwords everywhere.`},

{d:"SEC",s:`A contractor's account should stop working automatically when the contract ends. What should be configured?`,
o:[`An account expiration date`,`A longer password history`,`A shorter screen lock timeout`,`A guest account for the contractor`],
a:[0],
e:`Account expiration dates disable temporary accounts automatically, reducing forgotten active accounts.`},

{d:"SEC",s:`A company phone is lost and may contain sensitive data. What should be done remotely?`,
o:[`Wipe the device through MDM`,`Disable the phone's Wi-Fi radio`,`Change the device's wallpaper`,`Increase its screen brightness`],
a:[0],
e:`Remote wipe, usually through MDM, removes data from lost or stolen devices. Locator apps can help find them first.`},

{d:"SEC",s:`Which mobile screen lock method offers the weakest security?`,
o:[`Swipe`,`Fingerprint`,`PIN code`,`Facial recognition`],
a:[0],
e:`Swipe locks provide no authentication. PINs, patterns, and biometrics require the user to prove identity.`},

{d:"SEC",s:`Old magnetic hard drives must be made completely unreadable using a strong magnetic field. Which method is this?`,
o:[`Degaussing`,`Standard formatting`,`Low-level formatting`,`Quick erase`],
a:[0],
e:`Degaussing destroys data on magnetic media. It doesn't work on SSDs, which need other methods, such as shredding.`},

{d:"SEC",s:`A company wants to donate old PCs but ensure no data can be recovered. Which method fits best?`,
o:[`Securely wipe the drives`,`Run a standard quick format`,`Delete all the user profiles`,`Reinstall Windows over the old copy`],
a:[0],
e:`Secure erasing or overwriting allows reuse while preventing recovery. Standard formatting leaves data recoverable.`},

{d:"SEC",s:`A company uses a vendor to destroy drives. What should it receive as proof?`,
o:[`A certificate of destruction`,`An end-user license agreement`,`A service-level agreement`,`A warranty registration`],
a:[0],
e:`Certificates of destruction document that media was destroyed, supporting compliance and audits.`},

{d:"SEC",s:`What should be done first when installing a new SOHO router?`,
o:[`Change the default admin password`,`Enable UPnP for all devices`,`Disable all encryption for speed`,`Open every port for gaming`],
a:[0],
e:`Default credentials are publicly known. Changing them and updating firmware are basic first steps.`},

{d:"SEC",s:`Why should Universal Plug and Play (UPnP) usually be disabled on a SOHO router?`,
o:[`It lets devices open ports on their own`,`It prevents Wi-Fi from using WPA3 encryption`,`It disables the router's DHCP server`,`It blocks all outbound internet traffic`],
a:[0],
e:`UPnP lets devices create port forwards automatically, which malware can abuse to expose systems.`},

{d:"SEC",s:`A browser shows a certificate warning when a user visits their bank's website. What should the user do?`,
o:[`Stop and verify the site rather than proceed`,`Click through the warning to continue`,`Disable certificate checks in settings`,`Clear the cache and ignore the warning`],
a:[0],
e:`Certificate warnings can indicate spoofed sites or on-path attacks. Users shouldn't bypass them on sensitive sites.`},

{d:"SEC",s:`A user downloads a browser installer and wants to confirm the file wasn't altered. What should they compare?`,
o:[`The file's hash with the vendor's published hash`,`The file's name with the vendor's website`,`The file's size with a friend's download`,`The download time with the vendor's estimate`],
a:[0],
e:`Matching the file's hash with the one the vendor publishes confirms the download wasn't altered. File names and sizes can be faked.`},

{d:"ST",s:`A Windows PC shows a blue screen with a stop code after a new driver was installed. What should the technician try first?`,
o:[`Roll back the driver in Safe Mode`,`Replace the motherboard immediately`,`Reinstall all user applications`,`Disable Windows Update permanently`],
a:[0],
e:`New drivers commonly cause BSODs. Safe Mode loads minimal drivers so the problem driver can be rolled back or removed.`},

{d:"ST",s:`A PC reports "No OS found" after a second drive was added. What's a likely cause?`,
o:[`The boot order points to the wrong drive`,`The new drive's partition style is MBR`,`The SATA mode changed from AHCI to RAID`,`The Windows boot files were deleted`],
a:[0],
e:`Adding a drive can change boot order. Setting the correct boot device in firmware usually fixes it.`},

{d:"ST",s:`A Windows service required by an application fails to start. Where should the technician look for the reason?`,
o:[`Event Viewer and the Services console`,`Disk Defragmenter and Disk Cleanup`,`The Sound control panel`,`The Personalization settings`],
a:[0],
e:`Event Viewer logs service errors, and the Services console shows startup type, dependencies, and the account used.`},

{d:"ST",s:`A user's profile takes several minutes to load at sign-in on a domain PC. What's a common cause?`,
o:[`A large roaming profile or slow link`,`A corrupted local Windows font cache`,`Too many desktop shortcuts on the screen`,`An outdated graphics driver on the PC`],
a:[0],
e:`Slow profile loads often come from large roaming profiles, slow links to domain controllers, or many startup scripts.`},

{d:"ST",s:`A PC's clock keeps drifting several minutes, causing domain sign-in problems. What should be checked?`,
o:[`Time sync with an NTP source`,`The monitor's refresh rate`,`The BIOS boot order setting`,`The time zone's daylight setting`],
a:[0],
e:`Kerberos authentication needs clocks within a few minutes. Domain PCs should sync time with the domain hierarchy or NTP.`},

{d:"ST",s:`A user gets frequent "low memory" warnings while running several large applications. What's the best fix?`,
o:[`Add RAM or close unneeded programs`,`Defragment the system hard drive`,`Disable the Windows page file`,`Run Disk Cleanup on the system drive`],
a:[0],
e:`Low memory warnings mean RAM and the page file are exhausted. Adding RAM or reducing workload fixes it.`},

{d:"ST",s:`Windows warns that a USB controller doesn't have enough resources after a user connects several devices through a hub. What should be done?`,
o:[`Move devices to another USB controller`,`Update the USB device drivers`,`Replace the USB hub with a faster one`,`Disable USB selective suspend`],
a:[0],
e:`USB controllers have limited endpoints and bandwidth. Spreading devices across controllers or ports resolves resource warnings.`},

{d:"ST",s:`An application crashes every time it opens a certain feature, while other apps work. What should be tried first?`,
o:[`Update or repair the application`,`Replace the computer's power supply`,`Reformat the system drive`,`Change the network profile to Public`],
a:[0],
e:`App-specific crashes are often fixed by updating, repairing, or reinstalling the application and checking its logs.`},

{d:"ST",s:`A PC has become slow over months, with many startup programs and little free disk space. What should the technician do?`,
o:[`Remove startup items and free disk space`,`Replace the CPU with a faster model`,`Reinstall the network driver`,`Enable the guest account`],
a:[0],
e:`Degraded performance often comes from startup bloat, low disk space, or malware. Cleanup and scans come before hardware changes.`},

{d:"ST",s:`A Windows PC restarts frequently without warning. Which setting helps the technician see the error?`,
o:[`Disable automatic restart on failure`,`Enable fast startup in Power Options`,`Turn off USB selective suspend`,`Increase the page file size on the drive`],
a:[0],
e:`Disabling automatic restart keeps the stop error on screen so its code can be recorded and investigated.`},

{d:"ST",s:`Windows won't boot after an update. Which recovery option can undo the change while keeping user files?`,
o:[`Uninstall the latest update`,`Reset this PC and remove everything`,`Run a clean install from USB`,`Restore the BIOS to default settings`],
a:[0],
e:`Windows Recovery Environment can uninstall the latest quality or feature update, use System Restore, or run Startup Repair.`},

{d:"ST",s:`A PC is unstable, with random freezes and errors in many apps. System files may be corrupted. Which command helps?`,
o:[`sfc /scannow`,`ipconfig /release`,`gpupdate /force`,`net use`],
a:[0],
e:`System File Checker repairs corrupted system files that can cause instability. DISM can repair the component store if needed.`},

{d:"ST",s:`A laptop shuts down frequently during heavy use, and the vents are hot. What should be checked?`,
o:[`Cooling, dust, and fan operation`,`The power plan's sleep settings`,`The battery's charge threshold`,`The GPU driver's version and settings`],
a:[0],
e:`Frequent shutdowns under load often mean overheating protection is kicking in. Cleaning dust and checking fans usually fixes it.`},

{d:"ST",s:`After a failed update, Windows shows "boot configuration data is missing." What can fix this?`,
o:[`Startup Repair or rebuilding the BCD`,`Running chkdsk on the data drive`,`Rolling back the graphics driver`,`Resetting the BIOS administrator password`],
a:[0],
e:`Boot issues with BCD errors can be fixed with Startup Repair or bootrec commands in the recovery environment.`},

{d:"ST",s:`A mobile app won't launch after an OS update. What should be tried first?`,
o:[`Update the app or clear its cache`,`Factory reset the phone right away`,`Replace the phone's battery`,`Disable the cellular radio`],
a:[0],
e:`Apps may need updates for OS compatibility. Clearing cache or reinstalling also helps.`},

{d:"ST",s:`A phone app freezes and won't close. What's the best next step?`,
o:[`Force stop the app`,`Remove the SIM card`,`Replace the screen`,`Turn on developer mode`],
a:[0],
e:`Force stopping ends the app's processes. If problems continue, clear its cache or reinstall it.`},

{d:"ST",s:`A phone fails to install an OS update. What should be checked first?`,
o:[`Free storage and battery charge`,`The installed apps' versions`,`The phone's region settings`,`The screen lock method in use`],
a:[0],
e:`Updates need enough free storage, sufficient battery or a charger, and a stable connection.`},

{d:"ST",s:`A phone's battery drains much faster after a new app was installed. What should the technician check?`,
o:[`Battery usage by app`,`The phone's screen lock type`,`The Wi-Fi calling setting`,`The phone's ringtone volume`],
a:[0],
e:`Battery usage settings show which apps consume power, often from background activity or location use.`},

{d:"ST",s:`A phone randomly reboots several times a day. What could cause this?`,
o:[`A faulty app, OS bug, or bad battery`,`A full photo library in cloud storage`,`A weak Wi-Fi signal in the building`,`An expired SIM card PIN code`],
a:[0],
e:`Random reboots can come from problematic apps, OS issues, overheating, or a degraded battery. Safe mode can help isolate apps.`},

{d:"ST",s:`A phone connects to Bluetooth headphones but audio keeps cutting out. What should be tried first?`,
o:[`Unpair and re-pair the device`,`Factory reset the phone`,`Reset network settings`,`Update the phone's carrier settings`],
a:[0],
e:`Re-pairing often fixes Bluetooth issues. Interference and distance can also cause dropouts.`},

{d:"ST",s:`A tablet's screen doesn't rotate when it's turned sideways. What should be checked first?`,
o:[`Whether rotation lock is enabled`,`Whether NFC is turned on in settings`,`Whether the SIM is inserted`,`Whether Bluetooth is paired`],
a:[0],
e:`Rotation lock prevents auto-rotate. Some apps also don't support landscape orientation.`},

{d:"ST",s:`A phone can't use contactless payments at a store terminal. What should be checked?`,
o:[`That NFC and the wallet are set up`,`That Bluetooth is paired with the terminal`,`That Wi-Fi calling is turned on`,`That screen rotation is unlocked`],
a:[0],
e:`Contactless payments need NFC turned on and a payment wallet set up with a card. Bluetooth and Wi-Fi aren't used.`},

{d:"ST",s:`A phone app is slow to respond and the device feels sluggish overall. What should be tried first?`,
o:[`Close background apps and restart`,`Reset all settings on the phone`,`Replace the phone's battery`,`Turn off location services permanently`],
a:[0],
e:`Restarting clears memory and stuck processes. Checking storage and updates comes next.`},

{d:"ST",s:`A company app fails to update on several managed phones. What should the technician check?`,
o:[`Storage, network, and MDM app policies`,`The phones' screen lock settings`,`The phones' Bluetooth pairings`,`The phones' carrier and SIM type`],
a:[0],
e:`App update failures can result from low storage, poor connectivity, or MDM restrictions.`},

{d:"ST",s:`A phone can't connect to Wi-Fi after the router's password was changed. What should the user do?`,
o:[`Forget the network and rejoin`,`Reset all network settings`,`Restart the router and the phone`,`Update the phone's OS`],
a:[0],
e:`Saved credentials become invalid after a password change. Forgetting and rejoining the network fixes it.`},

{d:"ST",s:`An employee installed an app from an unofficial app store, and the phone now shows many ads and fake security warnings. What's the likely cause?`,
o:[`A malicious app from an untrusted store`,`A failing battery causing glitches`,`An outdated phone OS version`,`A weak cellular signal`],
a:[0],
e:`Unofficial app sources often host malicious or spoofed apps that cause ads, fake alerts, and data theft.`},

{d:"ST",s:`Why is jailbreaking or rooting a phone a security concern?`,
o:[`It bypasses OS security controls`,`It permanently disables the camera`,`It removes the phone's cellular service`,`It deletes all installed apps`],
a:[0],
e:`Root access removes sandboxing and other protections, letting malicious apps gain deep control.`},

{d:"ST",s:`A phone suddenly uses far more data than usual and shows high network traffic in the background. What should be suspected?`,
o:[`Malware or an unauthorized app`,`A failing battery in the phone`,`A misconfigured Wi-Fi setting`,`An outdated carrier profile`],
a:[0],
e:`Unexpected data use can indicate malware exfiltrating data or communicating with attackers.`},

{d:"ST",s:`A user downloads a banking app that looks real but steals credentials. What is this?`,
o:[`Application spoofing`,`Developer mode`,`Screen rotation lock`,`A data-usage notification`],
a:[0],
e:`Spoofed apps imitate legitimate ones. Installing only from official stores and verifying developers reduces risk.`},

{d:"ST",s:`Why should developer mode be disabled on company phones unless needed?`,
o:[`It exposes settings that weaken security`,`It reduces the phone's screen resolution`,`It blocks all app updates permanently`,`It disables the phone's camera`],
a:[0],
e:`Developer options allow USB debugging and other settings that attackers could abuse.`},

{d:"ST",s:`A user's private photos appear online, and the phone has an unknown app with broad permissions. What happened?`,
o:[`Data leaked by a malicious app`,`A failed OS update on the phone`,`A cloud sync conflict`,`A stolen SIM card from the phone`],
a:[0],
e:`Leaked personal files are a symptom of malicious apps or compromised accounts. Remove the app and secure accounts.`},

{d:"ST",s:`A browser keeps redirecting searches to an unfamiliar search engine. What's the likely cause?`,
o:[`A browser hijacker or malicious extension`,`A corrupted browser cache`,`An outdated network adapter driver`,`A misconfigured proxy on the router`],
a:[0],
e:`Redirection usually comes from malicious extensions, PUPs, or changed settings. Remove them and reset browser settings.`},

{d:"ST",s:`A pop-up claims the PC is infected and tells the user to call a phone number for support. What is this?`,
o:[`A fake security alert, a common scam`,`A genuine Windows Defender alert`,`A required BIOS update`,`A normal browser feature`],
a:[0],
e:`Fake antivirus alerts try to scare users into calling scammers or installing malware. Users should close the page and report it.`},

{d:"ST",s:`A user finds files renamed with a strange extension and can't open them. What does this suggest?`,
o:[`A ransomware infection`,`A full Recycle Bin`,`A failing monitor`,`A disabled firewall exception`],
a:[0],
e:`Renamed, inaccessible files are a ransomware symptom. Isolate the PC immediately.`},

{d:"ST",s:`Windows Update repeatedly fails on a PC, and antivirus is disabled without the user's knowledge. What should the technician suspect?`,
o:[`Malware interfering with security tools`,`A full disk preventing updates`,`A corrupted Windows Update cache`,`An incorrect system time and time zone`],
a:[0],
e:`Malware often disables antivirus and blocks updates. Scanning offline or in Safe Mode helps.`},

{d:"ST",s:`A PC suddenly can't access the network, and a technician finds the proxy settings changed to an unknown server. What's likely?`,
o:[`Malware altered the network settings`,`A DHCP server pushed new settings`,`The ISP changed its proxy server`,`A Windows update reset the settings`],
a:[0],
e:`Malware may change proxy or DNS settings to intercept traffic or block access to security sites.`},

{d:"ST",s:`Browser performance has degraded badly, with many unknown toolbars and extensions. What should be done?`,
o:[`Remove unknown extensions and reset it`,`Clear the browser cache only`,`Reinstall the network adapter driver`,`Increase the browser's memory limit`],
a:[0],
e:`Unwanted extensions slow browsers and may be malicious. Removing them and resetting settings restores performance.`},

{d:"ST",s:`Users see constant unwanted notifications from a website in the Windows notification area. What should be done?`,
o:[`Revoke the site's notification permission`,`Turn on Focus Assist permanently`,`Disable Windows notifications entirely`,`Clear the browser's cookies and cache`],
a:[0],
e:`Sites can trick users into allowing notifications. Removing the permission in browser settings stops them.`},

{d:"ST",s:`A phone shows a notification that it's close to its monthly data-usage limit, though the user rarely streams. What should be checked?`,
o:[`Which apps are using data in the background`,`Whether the screen rotation lock is on`,`Whether the ringtone volume is muted`,`Whether the wallpaper is animated`],
a:[0],
e:`Unexpected data use can come from background sync, misbehaving apps, or malware. Data usage settings show the culprits.`},

{d:"ST",s:`A phone shows "connected, no internet" on a known-good Wi-Fi network, while other devices work. What should be tried first?`,
o:[`Forget and rejoin, then restart`,`Reset the phone to factory settings`,`Enable developer mode`,`Replace the phone's SIM card`],
a:[0],
e:`Limited connectivity on one device is often fixed by rejoining the network or restarting to renew its IP settings.`},

{d:"ST",s:`A phone's apps take several seconds to respond, and it's running a much older OS version. What should be done?`,
o:[`Install pending OS and app updates`,`Replace the SIM card`,`Turn off Bluetooth permanently`,`Lower the ringtone and media volume`],
a:[0],
e:`Updates often fix performance bugs. Low storage and too many background apps are other common causes.`},

{d:"ST",s:`A newly downloaded app fails to install on a managed company phone, while other apps install fine. What's a likely cause?`,
o:[`An MDM policy blocks that app`,`The phone's screen is cracked`,`The rotation lock is enabled`,`The battery is fully charged and hot`],
a:[0],
e:`MDM can restrict which apps users may install. Compatibility and storage are other possible causes.`},

{d:"ST",s:`A PC shows a desktop alert claiming the antivirus subscription expired, from a product the company doesn't use. What is it?`,
o:[`A fake antivirus alert from a PUP`,`A real Windows Defender warning`,`A Windows Update notification`,`A notice from the company's MDM`],
a:[0],
e:`Fake antivirus alerts try to scare users into paying or installing malware. Scan with the approved tool and remove the PUP.`},

{d:"ST",s:`A browser shows certificate warnings on many well-known HTTPS sites, but other PCs are fine. What should be checked first?`,
o:[`The PC's date and time`,`The browser's cache size`,`The DNS server's address`,`The browser's zoom level`],
a:[0],
e:`An incorrect system clock makes valid certificates appear expired or not yet valid. Malware or a rogue proxy can also cause warnings.`},

{d:"ST",s:`A browser opens random pop-ups even when no sites are open. What should the technician do?`,
o:[`Scan for malware and remove extensions`,`Clear the cookies and browsing history`,`Reinstall the browser with defaults`,`Turn on the browser's pop-up blocker`],
a:[0],
e:`Frequent pop-ups often come from adware or malicious extensions. Scanning and cleaning the browser fixes them.`},

{d:"ST",s:`Several system files and a user's documents were changed or renamed overnight without anyone touching the PC. What should be suspected?`,
o:[`Malware altered system and personal files`,`A scheduled disk defragmentation ran`,`OneDrive sync conflicts renamed them`,`A Windows feature update moved them`],
a:[0],
e:`Altered, missing, or renamed files are signs of malware, such as ransomware, and the system should be isolated and investigated.`},

{d:"ST",s:`A PC is unstable after a recent hardware driver installation, and System Restore points exist. What's a reasonable step?`,
o:[`Use a restore point from before the driver`,`Reformat the drive and reinstall immediately`,`Replace the motherboard`,`Disable all security software`],
a:[0],
e:`System Restore reverts system files, drivers, and settings to an earlier point without affecting personal files.`},

{d:"ST",s:`A user can't open a specific app, and Event Viewer shows a missing .dll file error. What should be tried?`,
o:[`Repair or reinstall the application`,`Run Disk Cleanup on the system drive`,`Update the graphics card driver`,`Reset the user's Windows profile`],
a:[0],
e:`Missing or corrupted DLLs are usually fixed by repairing or reinstalling the app or its runtime components.`},

{d:"ST",s:`A phone app crashes right after opening, and the issue started after the app's latest update. What should the user do?`,
o:[`Clear its cache or reinstall it`,`Factory reset the phone`,`Reset the network settings on the phone`,`Restart in safe mode only`],
a:[0],
e:`Corrupted cache or a bad install often causes crashes. Reinstalling or waiting for a fixed update helps.`},

{d:"ST",s:`A Windows service starts but stops immediately, and its log shows "logon failure." What's a likely cause?`,
o:[`Its account's password changed`,`Its dependency service is disabled`,`Its executable file is missing`,`Its startup type is set to Manual`],
a:[0],
e:`Services that run under user accounts fail when the password changes. Updating the service's credentials fixes it.`},

{d:"ST",s:`A phone won't pair with a car's Bluetooth, though it pairs with headphones. What should be tried?`,
o:[`Remove old pairings and pair again`,`Reset the phone's network settings`,`Update the car's navigation maps`,`Turn off Wi-Fi on the phone`],
a:[0],
e:`Old or conflicting pairings and pairing limits on the car can block new connections. Clearing them often fixes it.`},

{d:"ST",s:`A laptop on battery has much shorter runtime than normal, and Task Manager shows an app using high CPU constantly. What should be done?`,
o:[`Stop or update the runaway app`,`Replace the laptop battery`,`Lower the screen brightness`,`Change the power plan to High performance`],
a:[0],
e:`Runaway processes drain batteries and degrade performance. Updating, reconfiguring, or removing the app resolves it.`},

{d:"OP",s:`When a technician closes a ticket, what should the resolution notes include?`,
o:[`The cause and the fix, clearly stated`,`Only the word "fixed" to save time`,`The user's password for future logins`,`A complaint about the user's behavior`],
a:[0],
e:`Clear, concise notes on the issue, progress, and resolution help others and build a knowledge base.`},

{d:"OP",s:`A ticket affects the whole sales team's ability to take orders. How should it be prioritized?`,
o:[`High severity, given the business impact`,`Low severity, because it's one department`,`In order received, regardless of impact`,`Closed until the user submits another ticket`],
a:[0],
e:`Severity reflects impact and urgency. Issues affecting many users or revenue get higher priority.`},

{d:"OP",s:`A level 1 technician can't fix a server issue that needs administrator expertise. What should they do?`,
o:[`Escalate to the next support level`,`Close the ticket and tell the user to wait`,`Try random fixes on the server`,`Reassign the ticket back to the user`],
a:[0],
e:`Escalation levels route issues to staff with the right skills or authority, such as tier 2 or system administrators.`},

{d:"OP",s:`Which system tracks configuration items, such as servers and applications, and the relationships between them?`,
o:[`A configuration management database`,`A knowledge base article library`,`An IT asset inventory spreadsheet`,`A ticketing system's queue`],
a:[0],
e:`A CMDB tracks configuration items and their relationships, supporting change, incident, and asset management.`},

{d:"OP",s:`Each laptop has a barcode label linked to its record in the inventory system. What is this label?`,
o:[`An asset tag`,`A license key`,`A warranty card`,`A knowledge article`],
a:[0],
e:`Asset tags and IDs link physical devices to records for tracking, assignment, and audits.`},

{d:"OP",s:`HR notifies IT that an employee is leaving Friday. Which document guides removing their access and collecting equipment?`,
o:[`A user off-boarding checklist`,`A new user onboarding checklist`,`An incident report`,`A service-level agreement`],
a:[0],
e:`Off-boarding checklists ensure accounts are disabled, data is preserved, and devices are returned.`},

{d:"OP",s:`A help desk must respond to critical tickets within one hour, as agreed with the business. Which document defines this?`,
o:[`An internal service-level agreement`,`An external vendor service agreement`,`A memorandum of understanding`,`An acceptable use policy`],
a:[0],
e:`SLAs define response and resolution targets. Internal SLAs are between IT and the business, and external ones are with vendors.`},

{d:"OP",s:`Technicians write up a common fix so users and other staff can solve the issue themselves. What is this?`,
o:[`A knowledge base article`,`An incident report`,`A change request`,`A standard operating procedure`],
a:[0],
e:`Knowledge base articles document solutions so users and staff can fix common issues themselves, reducing repeat tickets.`},

{d:"OP",s:`A server patch fails during a maintenance window. What part of the change plan should be followed?`,
o:[`The rollback plan`,`The onboarding checklist`,`The acceptable use policy`,`The asset inventory`],
a:[0],
e:`Rollback plans describe how to return to the previous working state if a change fails during implementation.`},

{d:"OP",s:`A critical security vulnerability is being actively exploited, and a fix must be applied tonight. Which change type fits?`,
o:[`An emergency change`,`A standard change`,`A normal change`,`A change freeze exception`],
a:[0],
e:`Emergency changes follow an expedited approval process for urgent issues, such as actively exploited vulnerabilities.`},

{d:"OP",s:`Replacing a user's mouse is a low-risk, preapproved, routine task. Which change type is this?`,
o:[`A standard change`,`An emergency change`,`A normal change`,`A major change`],
a:[0],
e:`Standard changes are preapproved, low-risk, and repeatable, so they don't need board review each time.`},

{d:"OP",s:`During the holiday sales season, no changes are allowed to production systems except emergencies. What is this?`,
o:[`A change freeze`,`A maintenance window`,`A sandbox test`,`A peer review`],
a:[0],
e:`Change freezes block nonessential changes during critical business periods, such as peak sales seasons.`},

{d:"OP",s:`Before deploying a new software version to production, the team tests it in an isolated environment. What is this?`,
o:[`Sandbox testing`,`End-user acceptance`,`A rollback plan`,`A change freeze`],
a:[0],
e:`Sandbox testing runs changes in an isolated environment to find problems without affecting production systems.`},

{d:"OP",s:`After a change is implemented, users confirm the new system meets their needs. Which step is this?`,
o:[`End-user acceptance`,`Risk analysis`,`Change board approval`,`Sandbox testing`],
a:[0],
e:`End-user acceptance confirms the change works as intended for the people who use it.`},

{d:"OP",s:`A change request must describe which systems will be affected and how. Which element is this?`,
o:[`Affected systems and impact`,`Purpose of the change`,`Date and time of the change`,`Responsible staff members for the change`],
a:[0],
e:`Impact analysis identifies affected systems and users so risks can be planned for.`},

{d:"OP",s:`Which backup type copies only files changed since the last backup of any type, giving the fastest backups but slower restores?`,
o:[`Incremental`,`Differential`,`Full`,`Synthetic full`],
a:[0],
e:`Incremental backups are fast and small, but restores need the last full plus every incremental.`},

{d:"OP",s:`Which backup type copies all files changed since the last full backup?`,
o:[`Differential`,`Incremental`,`Synthetic full`,`Mirror only`],
a:[0],
e:`Differential backups grow until the next full backup, but restores need only the full plus the latest differential.`},

{d:"OP",s:`A backup system builds a new full backup by combining the previous full backup with later incrementals, without reading the source again. What is this?`,
o:[`A synthetic full backup`,`A differential backup`,`An incremental backup`,`A copy-only volume snapshot`],
a:[0],
e:`Synthetic fulls reduce load on production systems while still providing a current full backup.`},

{d:"OP",s:`Which backup rule recommends three copies of data on two different media, with one copy offsite?`,
o:[`The 3-2-1 rule`,`Grandfather-father-son`,`The order of volatility`,`The principle of least privilege`],
a:[0],
e:`The 3-2-1 rule (three copies, two media, one offsite) protects against device failure, site disasters, and ransomware.`},

{d:"OP",s:`A backup scheme keeps daily, weekly, and monthly backups in rotation. What is this scheme called?`,
o:[`Grandfather-father-son (GFS)`,`The 3-2-1 backup rule`,`Synthetic full rotation`,`Differential rotation by day`],
a:[0],
e:`GFS rotation keeps daily (son), weekly (father), and monthly (grandfather) backups for flexible recovery points.`},

{d:"OP",s:`Why should backups be tested regularly?`,
o:[`To confirm data can actually be restored`,`To make backup jobs run faster`,`To reduce the backup storage license cost`,`To remove the need for offsite copies`],
a:[0],
e:`Restore testing proves backups are complete and usable before a real emergency, instead of discovering problems during one.`},

{d:"OP",s:`A user wants a restored file saved to a new folder without overwriting the current version. Which recovery option fits?`,
o:[`Restore to an alternative location`,`Restore in place and overwrite it`,`Restore from a synthetic full backup`,`Restore the full system image`],
a:[0],
e:`Restoring to an alternative location preserves the current file so both versions can be compared.`},

{d:"OP",s:`Before replacing a RAM module, what should a technician wear to prevent static damage?`,
o:[`An ESD wrist strap`,`Safety goggles only`,`An air filter mask`,`Rubber gloves only`],
a:[0],
e:`ESD straps ground the technician to equalize static charge. ESD mats and antistatic bags also protect components.`},

{d:"OP",s:`How should a technician lift a heavy UPS from the floor?`,
o:[`Lift with the legs, back straight`,`Bend at the waist and lift quickly`,`Twist while lifting to save time`,`Lift it overhead in one motion`],
a:[0],
e:`Proper lifting uses the legs, keeps loads close, and avoids twisting. Get help for heavy items.`},

{d:"OP",s:`What should be done before opening a desktop PC to replace a component?`,
o:[`Disconnect power and ground yourself`,`Leave it plugged in to keep it grounded`,`Spray it with water to reduce static`,`Remove the CMOS battery first`],
a:[0],
e:`Disconnecting power prevents shock and component damage. ESD precautions protect parts.`},

{d:"OP",s:`A technician is cleaning a dusty server with compressed air. What protective equipment should they wear?`,
o:[`Safety goggles and an air filter mask`,`An ESD wrist strap and antistatic mat`,`Hearing protection and work gloves`,`An apron and closed-toe shoes`],
a:[0],
e:`Safety goggles protect eyes from blown debris, and an air filter mask prevents inhaling dust while using compressed air.`},

{d:"OP",s:`Where can a technician find handling and disposal instructions for a toner cartridge?`,
o:[`The safety data sheet (MSDS)`,`The printer's user manual`,`The vendor's warranty terms`,`The company's acceptable use policy`],
a:[0],
e:`Safety data sheets describe hazards, handling, first aid, and disposal for materials such as toner and batteries.`},

{d:"OP",s:`How should old lithium-ion laptop batteries be disposed of?`,
o:[`Through a battery recycling program`,`In the regular office trash bins`,`Mixed with toner cartridge recycling`,`By storing them in a desk drawer`],
a:[0],
e:`Batteries contain hazardous materials and must be recycled according to local regulations.`},

{d:"OP",s:`An office experiences frequent brief voltage drops that cause PCs to reboot. Which device helps most?`,
o:[`An uninterruptible power supply (UPS)`,`A surge suppressor only`,`A power strip without protection`,`An ESD mat under the PCs`],
a:[0],
e:`A UPS supplies power during brownouts and blackouts. Surge suppressors only protect against spikes.`},

{d:"OP",s:`A technician finds illegal content on a user's PC during a repair. What should they do first?`,
o:[`Preserve evidence and report it`,`Delete the content to protect the company`,`Copy the files to a USB drive to share`,`Ignore it and finish the repair`],
a:[0],
e:`Incident response for prohibited content includes preserving evidence, documenting, maintaining chain of custody, and informing management.`},

{d:"OP",s:`Which software license lets anyone view, modify, and redistribute the source code under certain conditions?`,
o:[`An open-source license`,`A perpetual corporate license`,`A personal-use license`,`A subscription license`],
a:[0],
e:`Open-source licenses grant access to source code with terms such as attribution or share-alike.`},

{d:"OP",s:`A company must protect patients' medical records. Which type of regulated data is this?`,
o:[`Healthcare data`,`Credit card data`,`Public marketing data`,`Open-source code`],
a:[0],
e:`Healthcare data, such as protected health information, is regulated by laws such as HIPAA in the US.`},

{d:"OP",s:`A login splash screen states that the system is for authorized use only and activity is monitored. Why is this used?`,
o:[`To support compliance and enforcement`,`To speed up the sign-in process`,`To show the company's IT contact info`,`To replace the need for passwords`],
a:[0],
e:`Splash screens and banners notify users of acceptable use and monitoring, supporting legal and compliance requirements.`},

{d:"OP",s:`A frustrated user is complaining loudly about a repeated issue. What should the technician do?`,
o:[`Listen, stay calm, and restate the issue`,`Explain that the user caused the problem`,`Promise a fix by end of day to calm them`,`Escalate immediately to their manager`],
a:[0],
e:`Active listening, avoiding arguments, and clarifying the issue help resolve difficult situations professionally.`},

{d:"OP",s:`A technician will be 20 minutes late to an on-site appointment. What should they do?`,
o:[`Call the customer with a new arrival time`,`Arrive late and explain on arrival`,`Reschedule by email for another day`,`Send a coworker who's closer by`],
a:[0],
e:`Being on time, or communicating promptly when late, sets expectations and shows respect.`},

{d:"OP",s:`While fixing a user's PC, the technician sees confidential documents on the desk. What should they do?`,
o:[`Respect their privacy; don't read them`,`Move them aside to make workspace`,`Note them in the ticket for security`,`Ask the user to explain them`],
a:[0],
e:`Technicians must handle customers' confidential and private materials with discretion.`},

{d:"OP",s:`What's a good way to narrow the scope of a vague problem report from a user?`,
o:[`Ask open-ended questions and restate`,`Use technical terms to sound credible`,`Suggest the most likely fix right away`,`Assume it matches the last ticket`],
a:[0],
e:`Open-ended questions and restating the issue clarify the problem and confirm understanding.`},

{d:"OP",s:`Which file extension is used for a Windows PowerShell script?`,
o:[`.ps1`,`.bat`,`.sh`,`.vbs (VBScript)`],
a:[0],
e:`.ps1 is PowerShell. .bat is a batch file, .sh is a shell script for Linux/macOS, and .vbs is VBScript.`},

{d:"OP",s:`A student submits an essay generated entirely by an AI tool as their own original work. Which AI policy concern does this raise?`,
o:[`Plagiarism`,`Hallucination`,`Model bias`,`Data sovereignty`],
a:[0],
e:`Presenting AI-generated work as your own can violate plagiarism and appropriate-use policies. Organizations define when and how AI output may be used and disclosed.`},

{d:"OP",s:`Which task is a good use case for a simple script?`,
o:[`Remapping network drives at sign-in`,`Approving a change board request`,`Interviewing a frustrated user`,`Signing a non-disclosure agreement`],
a:[0],
e:`Scripts automate repetitive tasks, such as mapping drives, installing apps, gathering data, and running backups.`},

{d:"OP",s:`What's a risk of running a script downloaded from an online forum without reviewing it?`,
o:[`It could introduce malware or change system settings`,`It will always run slower than a compiled program`,`It can't run on any modern operating system`,`It permanently disables the command line`],
a:[0],
e:`Untrusted scripts can contain malicious code or unintentionally alter settings. Review and test scripts before running them.`},

{d:"OP",s:`An MSP needs a platform to monitor, patch, and remotely support hundreds of client endpoints. Which tool type fits?`,
o:[`Remote monitoring and management (RMM)`,`Remote Desktop Protocol (RDP) per user`,`A clientless VPN portal for technicians`,`A screen-sharing videoconference app`],
a:[0],
e:`RMM platforms provide monitoring, patching, scripting, and remote access at scale. They need strong access controls because they're high-value targets.`},

{d:"OP",s:`An administrator needs to run PowerShell commands on remote Windows servers over the network. Which protocol fits?`,
o:[`Windows Remote Management (WinRM)`,`Virtual Network Computing (VNC)`,`Simple Protocol for Independent Computing Environments`,`Remote Desktop Protocol only`],
a:[0],
e:`WinRM enables remote command execution and PowerShell remoting on Windows. VNC and RDP provide graphical remote desktops instead.`},

{d:"OP",s:`Which remote access method provides encrypted command-line access to Linux servers?`,
o:[`SSH`,`VNC`,`Telnet`,`RDP`],
a:[0],
e:`SSH encrypts remote shell sessions. Telnet is unencrypted, and VNC and RDP are graphical.`},

{d:"OP",s:`What's a key security practice for any remote access tool?`,
o:[`Require MFA and limit who can connect`,`Expose it directly to the internet with no restrictions`,`Share one admin password across the team`,`Disable logging to improve performance`],
a:[0],
e:`Remote access should use strong authentication, least privilege, network restrictions such as a VPN, and logging.`},

{d:"OP",s:`An AI assistant gives a confident answer that cites a Windows command that doesn't exist. What is this limitation called?`,
o:[`Hallucination`,`Training bias`,`Plagiarism`,`Overfitting`],
a:[0],
e:`Hallucinations are plausible but false outputs. Technicians should verify AI suggestions before using them.`},

{d:"OP",s:`A technician wants to paste a customer's error logs, including names and account numbers, into an AI tool. What should they consider first?`,
o:[`Whether the tool is approved for that data`,`Whether the AI tool supports log files`,`Whether the logs are under the size limit`,`Whether the AI can read Windows events`],
a:[0],
e:`Public AI tools may store or use submitted data. Company policy and private, approved AI tools protect sensitive information.`},
  ],
};
