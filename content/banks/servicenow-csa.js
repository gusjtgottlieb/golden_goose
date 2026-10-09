// ServiceNow CSA question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/servicenow-csa.json.
module.exports = {
  id: "servicenow-csa",
  vendor: "ServiceNow",
  code: "CSA",
  name: "Certified System Administrator",
  fullLength: 60,
  minutes: 90,
  passPercent: 70,
  readinessPercent: 85,
  sectioned: false,
  note: "ServiceNow uses a calculated cut score for CSA and doesn't publish it; community consensus puts it near 70%. Treat 85% here as your readiness bar. Domain weights follow the January 2026 blueprint. Items marked release-sensitive reference UI names and behaviors that shift between releases; verify them against your own instance.",
  domains: [{"id":"NV","name":"Platform Overview and Navigation","weight":"7%"},{"id":"IC","name":"Instance Configuration","weight":"11%"},{"id":"CO","name":"Configuring Applications for Collaboration","weight":"20%"},{"id":"SA","name":"Self-Service and Automation","weight":"20%"},{"id":"DB","name":"Database Management","weight":"27%"},{"id":"DM","name":"Data Migration and Integration","weight":"15%"}],
  Q: [
{d:"NV",s:`What does it mean that ServiceNow applications share a single data model?`,
o:[`Applications store data in one platform database, so records can relate across them`,`Each application runs on its own separate database that syncs with the others nightly`,`Only ITSM applications can share data, while all other products are kept isolated`,`Applications exchange data through email, because they can't reference each other`],
a:[0],
e:`Applications are built on one platform and one database, so an incident can reference a CI, a user, and a change without integrations between products.

Separate databases, ITSM-only sharing, and email exchange describe fragmented tool stacks, not the platform.`},

{d:"NV",s:`In the Next Experience unified navigation, which menus appear in the header?`,
o:[`All, Favorites, History, and Workspaces`,`File, Edit, View, and Help`,`Home, Reports, Admin, and Logout`,`Incidents, Changes, and Problems only`],
a:[0],
v:true,
e:`Unified navigation provides All (the application navigator), Favorites, History, and Workspaces menus.

The other sets describe desktop menus or a fixed list of processes.`},

{d:"NV",s:`An administrator types "incident.list" in the navigation filter and presses Enter. What happens?`,
o:[`The incident table opens as a list`,`A new incident form opens for editing`,`The incident table's dictionary opens`,`A report of incidents is generated`],
a:[0],
e:`Typing a table name followed by .list opens that table's list. ".form" opens a new record form, and uppercase ".LIST" or ".FORM" opens it in a new tab.

Dictionary entries and reports are opened elsewhere.`},

{d:"NV",s:`What does adding a module or record to Favorites do?`,
o:[`It gives the user quick access to it from the Favorites menu`,`It makes the record visible to every user in the instance`,`It locks the record so that no one else is able to edit it`,`It copies the record into the user's personal update set`],
a:[0],
e:`Favorites are personal shortcuts to modules, lists, records, or filtered lists.

They don't change visibility, lock records, or affect update sets.`},

{d:"NV",s:`An administrator needs to see exactly what a specific user sees, to troubleshoot an access problem. What should they do?`,
o:[`Impersonate the user`,`Reset the user's password and sign in as them`,`Ask the user to share their screen password`,`Grant the user the admin role temporarily`],
a:[0],
e:`Impersonation lets an admin (or a user with the impersonator role) see the instance as another user without knowing their password, and actions are recorded as impersonated.

Resetting or sharing passwords is a security violation, and granting admin changes what the user sees.`},

{d:"NV",s:`How does the History menu help users?`,
o:[`It lists recently viewed records so users can return`,`It shows every change ever made to every record on the instance`,`It lets users undo the last change they made to any record`,`It shows the ServiceNow release history for the instance`],
a:[0],
v:true,
e:`History tracks what the user recently visited. Field change history for a record is in the record's audit history, not this menu.

It doesn't undo changes or show release notes.`},

{d:"NV",s:`What is a workspace in ServiceNow?`,
o:[`A role-focused interface that brings the records and tools for a job into one place`,`A personal database table that each user creates to store their own records`,`A separate instance used only for testing changes before they reach production`,`A folder on the server where attachments for each department are stored`],
a:[0],
e:`Workspaces, such as Service Operations Workspace, give agents a purpose-built experience with lists, records, and contextual tools for their role.

They aren't tables, instances, or storage folders.`},

{d:"NV",s:`Why do most organizations have separate development, test, and production instances?`,
o:[`So changes are built and tested before they reach users`,`Because each instance can hold only one application`,`Because production instances can't store any custom data`,`So each department gets its own separate instance`],
a:[0],
e:`Building in development and testing in a test instance protects production from untested changes. Update sets or source control move changes between them.

Instances aren't limited to one application, and they aren't split by department.`},

{d:"NV",s:`Where does a user change personal settings such as their time zone and date format?`,
o:[`In their user preferences, from the user menu`,`In the system properties table for the instance`,`In each record's dictionary entry for date fields`,`In the instance's update set list for their account`],
a:[0],
v:true,
e:`Personal settings are in the user menu's preferences. System properties change behavior for everyone, and dictionary entries and update sets are admin tools.`},

{d:"NV",s:`What does Now Assist bring to the platform?`,
o:[`Generative AI capabilities, like summarizing records`,`A second database that stores AI-generated copies of every record`,`Automatic approval of every change request that's submitted`,`A replacement for access controls based on user behavior`],
a:[0],
v:true,
e:`Now Assist adds generative AI skills — summarization, content generation, search answers — inside workflows. Availability depends on licensing and configuration.

It doesn't duplicate data, approve changes, or replace security.`},

{d:"IC",s:`An administrator needs a capability that comes in a plugin not yet active on the instance. What's the usual approach?`,
o:[`Activate it from Application Manager, or request it if required`,`Write custom tables and scripts to rebuild the plugin's functionality from scratch`,`Copy the plugin's files from another customer's instance using an update set`,`Upgrade the instance to the next family release, which activates every plugin`],
a:[0],
v:true,
e:`Many plugins can be activated by an administrator; some must be requested from ServiceNow. Rebuilding functionality creates technical debt, other customers' instances aren't a source, and upgrades don't activate everything.`},

{d:"IC",s:`What should an administrator know before activating a plugin in production?`,
o:[`Most plugins can't be deactivated, so test first`,`Plugins activate only for the admin who turned them on`,`Plugins are removed automatically after 30 days`,`Plugins have no effect until the next upgrade`],
a:[0],
v:true,
e:`Plugin activation generally can't be reversed and may add tables, data, and configuration, so try it in a sub-production instance first.

Plugins apply instance-wide, persist, and take effect immediately.`},

{d:"IC",s:`Where are applications from the ServiceNow Store installed and managed?`,
o:[`In Application Manager`,`In each user's personal preferences`,`In the system log of the instance`,`In the instance's email properties`],
a:[0],
v:true,
e:`Application Manager lists available and installed applications, including Store apps, and handles installation and updates.

Preferences, logs, and email properties aren't application management tools.`},

{d:"IC",s:`An administrator wants to change instance-wide behavior that's exposed as a setting, such as the session timeout. Where should they look first?`,
o:[`System properties`,`A client script`,`A user's preferences`,`A business rule`],
a:[0],
e:`System properties (sys_properties) hold configurable settings. Scripts would be unnecessary customization, and user preferences affect only one user.`},

{d:"IC",s:`How can an administrator find a specific system property quickly?`,
o:[`Open sys_properties.list and filter by name`,`Search the incident table for the property`,`Open each module until the property appears`,`Ask ServiceNow support to read it out`],
a:[0],
e:`The sys_properties table lists every property, and filtering by name finds it fast. Many properties also appear on configuration pages.

Searching incidents, browsing modules, or calling support are slow and unnecessary.`},

{d:"IC",s:`A company wants its logo and brand colors in the Next Experience interface. What should the administrator use?`,
o:[`Theme and branding configuration, such as Theme Builder`,`A business rule that changes colors on each form load`,`A client script added to every table in the instance`,`An update set retrieved from the ServiceNow Store`],
a:[0],
v:true,
e:`Branding is configuration: themes, logos, and colors applied centrally. Scripts on forms or tables are the wrong tool, and Store update sets don't brand your instance.`},

{d:"IC",s:`What is the difference between personalizing a list and configuring a list layout?`,
o:[`Personalizing changes columns for one user; configuring changes the default for everyone`,`Personalizing changes the default for everyone; configuring changes it for one user`,`Personalizing requires the admin role; configuring is available to every user`,`There's no difference; both change the list for every user on the instance`],
a:[0],
e:`Users personalize lists for themselves with the list gear icon. Administrators configure the list layout, which sets the default columns for everyone.

The difference matters when someone asks why "their" change didn't affect others.`},

{d:"IC",s:`A user personalized a list and now can't find a column the rest of the team sees. What's the quickest fix?`,
o:[`Reset the list personalization to the default columns`,`Delete the missing column from the table's dictionary`,`Create a new list layout that applies to that user only`,`Clone the production instance over the test instance`],
a:[0],
v:true,
e:`Resetting personalization restores the configured default layout for that user.

Deleting fields destroys data, per-user layouts aren't needed, and cloning is unrelated.`},

{d:"IC",s:`What happens to the target instance when production is cloned over it?`,
o:[`Its data and configuration are replaced by production's, except preserved data`,`Its data is merged with production's, keeping every record from both instances`,`Only new records from production are added; existing records stay unchanged`,`Nothing changes until an administrator commits the clone as an update set`],
a:[0],
v:true,
e:`Cloning overwrites the target with a copy of the source. Exclusions and data preservers keep specific tables or records, such as integration credentials.

It isn't a merge, an incremental copy, or an update set.`},

{d:"IC",s:`Before cloning production over a test instance, what should an administrator check?`,
o:[`Exclusions and data preservers, so test-only settings and credentials survive`,`That every user has logged out of production for at least one full day`,`That all incidents in production have been closed and archived`,`That the test instance has been upgraded to a newer release than production`],
a:[0],
v:true,
e:`Without preservers, test integrations, credentials, and email settings could be replaced by production values, causing test emails to reach real users or integrations to call production systems.

Logouts, closed incidents, and newer releases aren't prerequisites.`},

{d:"IC",s:`What do Instance Scan (HealthScan) checks help administrators find?`,
o:[`Configurations that don't follow best practices, such as risky scripts`,`Users who haven't logged in to the instance during the past year`,`Hardware problems in the datacenters that host ServiceNow instances`,`Missing licenses for applications installed from the ServiceNow Store`],
a:[0],
v:true,
e:`Instance Scan runs checks for performance, security, upgradability, and manageability issues in configuration and code.

Inactive users, datacenter hardware, and licensing are tracked differently.`},

{d:"IC",s:`Users in Japan need the interface in Japanese. What's required?`,
o:[`Activating the Japanese language plugin`,`Creating a separate instance for Japan`,`Rewriting every form label by hand`,`Changing the instance's time zone`],
a:[0],
v:true,
e:`Language plugins provide translated interface text, and users choose their language in preferences.

Separate instances and manual relabeling aren't needed, and time zones don't change language.`},

{d:"IC",s:`Which statement about system properties is true?`,
o:[`Changing one affects behavior for all users on the instance`,`Each user has an independent copy of every system property`,`System properties can only be changed by ServiceNow staff`,`System properties reset to defaults every time you log out`],
a:[0],
e:`System properties are instance-wide. Test changes before applying them in production, because everyone is affected immediately.

User preferences are per-user, and properties persist.`},

{d:"IC",s:`Where can an administrator configure email notifications to stop sending during testing on a sub-production instance?`,
o:[`In the email properties, by turning off outbound email`,`In each notification, by deleting the recipient fields`,`In each user's record, by removing email addresses`,`In the incident table, by disabling the work notes field`],
a:[0],
v:true,
e:`Email properties control whether the instance sends outbound email at all, which prevents test notifications from reaching real users.

Editing every notification or user record is error-prone, and work notes are unrelated.`},

{d:"IC",s:`An administrator needs to temporarily see an application module that's hidden from the navigator. How are modules shown or hidden?`,
o:[`By module and menu roles and active flags`,`By the user's time zone and date format preferences`,`By the number of records in the module's table`,`By the order users first visited each module`],
a:[0],
e:`Applications and modules have roles and active flags that control who sees them in the navigator.

Preferences, record counts, and visit order don't control visibility.`},

{d:"IC",s:`How should the instance's default date format be changed for everyone?`,
o:[`With the relevant system property or locale setting`,`By editing each date field's value in every record`,`By asking each user to retype dates in the new format`,`By creating a new date field on every table`],
a:[0],
v:true,
e:`Defaults are configured centrally. Users can still override them in their own preferences.

Editing records or creating fields would be wrong and destructive.`},

{d:"IC",s:`What's the difference between the admin role and the security_admin role?`,
o:[`security_admin is an elevated role needed for sensitive tasks such as editing ACLs`,`admin is required to edit ACLs, and security_admin can only read reports`,`security_admin lets a user log in without a password or multifactor authentication`,`There's no difference; the two roles grant exactly the same permissions`],
a:[0],
v:true,
e:`Admins must elevate to security_admin for high-security actions like modifying access control rules. That elevation adds a deliberate step and is logged.

It doesn't bypass authentication.`},

{d:"CO",s:`A filter's breadcrumbs read "All > Active = true > Priority = 1 > Category = Network". What happens when the user clicks "Priority = 1"?`,
o:[`Conditions to the right of it are removed, keeping Active and Priority`,`Only the Priority condition is removed, keeping Active and Category`,`All conditions are removed and the full list is shown again`,`The Priority condition is changed to Priority = 2 automatically`],
a:[0],
e:`Clicking a breadcrumb keeps that condition and everything to its left and removes everything after it. Clicking "All" removes all conditions.

Breadcrumbs don't remove a single middle condition or change values.`},

{d:"CO",s:`In a list, a user right-clicks a cell showing "Network" in the Category column and chooses "Show Matching". What happens?`,
o:[`The list is filtered to records where Category is Network`,`The list is filtered to records where Category isn't Network`,`The list is sorted by Category in ascending order`,`The Category column is hidden from the list`],
a:[0],
e:`Show Matching adds a condition equal to that value. Filter Out adds a "not equal" condition. Sorting and hiding columns are separate actions.`},

{d:"CO",s:`Which condition builder logic returns incidents that are priority 1 or priority 2, and also active?`,
o:[`Active = true AND (Priority = 1 OR Priority = 2)`,`Active = true OR Priority = 1 OR Priority = 2`,`Active = false AND Priority = 1 AND Priority = 2`,`Priority = 1 AND Priority = 2 AND Active = true`],
a:[0],
e:`Use AND for the requirement that applies to all results, and OR between the alternatives. A single record can't be both priority 1 and priority 2, and making everything OR would include inactive records.`},

{d:"CO",s:`What is the purpose of the list editor (editing a cell directly in a list)?`,
o:[`To update field values on several records without opening each form`,`To change the column layout of the list for every user on the instance`,`To create new tables directly from the list of existing records`,`To export the list to a spreadsheet for offline changes`],
a:[0],
v:true,
e:`List editing lets users with write access change values in place, which is quick for bulk updates. Layout, table creation, and export are other features.`},

{d:"CO",s:`An administrator wants to add a new section and rearrange fields on the incident form for everyone. Which tools can they use?`,
o:[`Form Layout or Form Builder (Form Designer)`,`Personalize List from the list gear icon`,`The system properties table`,`An import set and transform map`],
a:[0],
v:true,
e:`Form Layout and Form Builder change form structure for everyone (for a given view). List personalization, properties, and imports don't edit forms.`},

{d:"CO",s:`Service desk agents and self-service users should see different fields on the same incident form. What should be used?`,
o:[`Form views, with view rules`,`Two separate incident tables`,`A new instance for self-service users`,`Different update sets for each group`],
a:[0],
e:`Form views present different layouts of the same table, and view rules can choose a view automatically. Separate tables or instances duplicate data, and update sets move configuration.`},

{d:"CO",s:`What is the difference between a related list and an embedded list on a form?`,
o:[`Related lists appear below the form; embedded lists sit inside it and can be edited there`,`Related lists can be edited inline; embedded lists can only be viewed and never edited`,`Embedded lists show data from other instances; related lists show local data only`,`There's no difference; the two names describe the same element in different releases`],
a:[0],
e:`Related lists show records connected to the current record at the bottom of the form. Embedded lists are placed in a form section and allow inline editing of related records.

Both show data from the same instance.`},

{d:"CO",s:`A user clicks "Save" on a form. What happens?`,
o:[`The record is saved and the user stays on the form`,`The record is saved and the user returns to the list`,`A copy of the record is created, leaving the original`,`The record is saved only to the user's draft folder`],
a:[0],
v:true,
e:`Save keeps you on the form. Update saves and returns to the previous page, and Insert (or Insert and Stay) creates a new record from the form's values.`},

{d:"CO",s:`Agents keep entering the same values for a common request type. What helps them fill in the form faster?`,
o:[`A form template that pre-fills the common field values`,`A business rule that overwrites the fields on every save`,`A new table containing only those common values`,`An ACL that hides the fields agents don't need`],
a:[0],
e:`Templates let users apply saved values to a form in one step. A business rule would override every record, a new table duplicates data, and ACLs control access, not defaults.`},

{d:"CO",s:`Which statement about the task table is true?`,
o:[`Incident, problem, and change extend it and inherit its fields`,`It's a stand-alone table that only stores to-do items created by individual users`,`It extends the incident table, which is the base table for all processes`,`It's used only by HR applications to track onboarding work for new hires`],
a:[0],
e:`Task is a base table. Incident, problem, change, catalog tasks, and many others extend it, inheriting common fields and behavior such as assignment, state, and approvals.

It isn't a personal to-do list, doesn't extend incident, and isn't HR-specific.`},

{d:"CO",s:`What is the difference between work notes and additional comments on a task?`,
o:[`Work notes are internal; additional comments are visible to the requester`,`Work notes are emailed to the caller; comments are only seen by agents`,`Work notes can be edited later; additional comments can't be edited`,`There's no difference; both fields save to the same journal entry`],
a:[0],
e:`Work notes are for the fulfillment team. Additional comments are customer-visible and typically trigger notifications to the caller.

Mixing them up is a common way to leak internal notes to users.`},

{d:"CO",s:`On a Visual Task Board, which board type updates a record's field when a card moves between lanes?`,
o:[`Guided board`,`Freeform board`,`Flexible board`,`Personal board`],
a:[0],
v:true,
e:`Guided boards have lanes based on a field, such as state, so moving a card updates that field. Freeform boards hold personal cards, and flexible boards use lanes that don't change record data.`},

{d:"CO",s:`A team lead wants a personal board for to-do cards that aren't tied to any table. Which Visual Task Board type fits?`,
o:[`Freeform board`,`Guided board`,`Flexible board`,`Data-driven board`],
a:[0],
v:true,
e:`Freeform boards hold cards that aren't records on a table — useful for personal or ad hoc tracking. Guided and flexible boards are built from a list of records.`},

{d:"CO",s:`What does an assignment rule do?`,
o:[`Automatically sets the assignment when conditions match`,`Prevents any user from changing the assignment group on a record`,`Assigns roles to new users based on their department`,`Sends an email to the assigned group whenever a record closes`],
a:[0],
e:`Assignment rules route work automatically — for example, network category incidents to the Network group. Role assignment and notifications are separate.`},

{d:"CO",s:`Which report type is best for showing how incident volume changes over the past 12 months?`,
o:[`Trend chart`,`Pie chart`,`Single score`,`List report`],
a:[0],
e:`Trend charts show values over time. Pie charts show proportions, single scores show one number, and lists show records.`},

{d:"CO",s:`A manager wants a report emailed to them every Monday morning. What should be set up?`,
o:[`A scheduled report`,`A business rule on the report table`,`A new dashboard with no widgets`,`An inbound email action`],
a:[0],
e:`Scheduled reports run and email results on a schedule. Business rules, empty dashboards, and inbound actions don't schedule report delivery.`},

{d:"CO",s:`A user created a report and wants their team to see it. What should they do?`,
o:[`Share it with the team's group or specific users`,`Copy it into a new update set and commit it`,`Ask an admin to add it to the system properties`,`Print it and post it on the team noticeboard`],
a:[0],
e:`Reports can be shared with users, groups, roles, or everyone, depending on permissions. Update sets and properties aren't for sharing reports.`},

{d:"CO",s:`What is a dashboard?`,
o:[`A page combining reports and widgets, often with tabs, for a role or team`,`A single report that can only show one chart and nothing else`,`A table that stores the raw data used by every report on the instance`,`A list of the instance's system properties grouped by application`],
a:[0],
e:`Dashboards bring together multiple reports and widgets — including Performance Analytics — so users can monitor what matters to them.`},

{d:"CO",s:`How does Performance Analytics differ from standard reporting?`,
o:[`It collects scores over time for trend comparison`,`It only reports on data from the incident table and nothing else`,`It replaces the need for any dashboards on the instance`,`It shows the current state only, with no history kept`],
a:[0],
e:`Performance Analytics collects indicator scores on a schedule and stores them, enabling trend analysis, targets, and breakdowns. Standard reports query current data.`},

{d:"CO",s:`In Performance Analytics, what does a breakdown do?`,
o:[`Splits an indicator by a dimension, such as by assignment group`,`Deletes old scores to keep the data collection job fast`,`Assigns the indicator to a user responsible for improving it`,`Converts a report into a single score widget on a dashboard`],
a:[0],
e:`Breakdowns segment indicator scores — for example, open incidents by priority or group. They don't delete data, assign owners, or convert reports.`},

{d:"CO",s:`Which three parts define an email notification?`,
o:[`When to send, who will receive, and what it will contain`,`Which server, which port, and which protocol to use`,`Which table, which ACL, and which update set apply`,`Which report, which dashboard, and which widget to use`],
a:[0],
e:`Notifications are configured by trigger (record change or event), recipients, and content. Mail server settings are configured separately.`},

{d:"CO",s:`A notification should go to whoever is in the "Assigned to" field. How is that recipient set?`,
o:[`Select the Assigned to field under users/groups in fields`,`Type the name of every agent into the recipients list`,`Create a separate notification for each agent`,`Send it to all users and let them filter it out`],
a:[0],
e:`Notifications can send to users or groups referenced in fields on the record, so recipients follow the data automatically.

Hard-coding names or creating one notification per agent doesn't scale.`},

{d:"CO",s:`Several notifications share the same header, footer, and styling. What helps keep them consistent?`,
o:[`Email layouts or templates reused across notifications`,`A separate mail server for each group of notifications`,`A client script on the notification form`,`An ACL on the email table`],
a:[0],
e:`Layouts and templates provide shared structure and content, so each notification only defines what's unique.

Mail servers, client scripts, and ACLs don't format email.`},

{d:"CO",s:`A user no longer wants a particular notification. When can they turn it off themselves?`,
o:[`When it isn't mandatory, using their preferences`,`Never; users can't change any notification settings for themselves`,`Always, even when the notification has been marked mandatory`,`Only by asking an admin to delete their email address`],
a:[0],
v:true,
e:`Users can unsubscribe from notifications in their preferences unless the notification is mandatory.

Deleting email addresses would break all communication.`},

{d:"CO",s:`What is the role of an event in triggering notifications?`,
o:[`A script queues an event, and notifications set to fire on it are sent`,`Events are calendar entries that remind users about their open tasks`,`Events are reports that summarize how many emails were sent each day`,`Events replace the need for any recipients on a notification`],
a:[0],
e:`Events let scripts signal that something happened. Notifications configured on that event send when it's processed, which is useful when conditions are too complex for field changes alone.`},

{d:"CO",s:`How can users quickly mention a colleague in a work note to get their attention?`,
o:[`Type @ followed by the colleague's name`,`Add the colleague as a watcher in an ACL`,`Change the record's assignment group`,`Create a new notification for that user`],
a:[0],
v:true,
e:`@mentions notify the person and link them to the record. ACLs, reassignment, and new notifications are heavier, unrelated steps.`},

{d:"CO",s:`What is the watch list on a task used for?`,
o:[`Users who get updates without being assigned`,`Users who are blocked from viewing the record for security reasons`,`Users who must approve the record before it can be closed`,`Users whose time zones should be used for the record's dates`],
a:[0],
e:`Watch list members receive notifications about the record. Access restrictions, approvals, and time zones are handled separately.`},

{d:"CO",s:`What is the purpose of the activity stream on a form?`,
o:[`To show the record's history of comments, work notes, and field changes`,`To list all the reports that reference the record's table on the instance`,`To show which users are viewing the same record at the moment`,`To display system log entries for the whole instance in one place`],
a:[0],
v:true,
e:`The activity stream (activity formatter) shows journal entries and tracked field changes in one timeline. Reports, presence, and system logs are elsewhere.`},

{d:"CO",s:`What is the main benefit of tagging records?`,
o:[`Users can label and quickly find related records across tables`,`Tags enforce access controls on the records they're applied to`,`Tags automatically assign records to the right group`,`Tags translate the record into the user's language`],
a:[0],
v:true,
e:`Tags are lightweight labels for organizing and finding records. They don't control access, route work, or translate content.`},

{d:"CO",s:`A report should be visible only to the service desk group. What controls this?`,
o:[`The report's sharing settings`,`The incident table's ACLs only`,`The report's chart type`,`The report's color palette`],
a:[0],
e:`Sharing settings determine who can see a report. ACLs still govern the data each viewer can see inside it, but sharing determines report visibility. Chart type and colors don't affect access.`},

{d:"SA",s:`What is the typical lifecycle of a knowledge article?`,
o:[`Draft, review, published, then retired`,`Published, draft, retired, then review`,`Retired, published, review, then draft`,`Review, retired, draft, then published`],
a:[0],
v:true,
e:`Articles are drafted, reviewed (if the knowledge base uses an approval workflow), published for readers, and retired when no longer relevant.`},

{d:"SA",s:`Only HR employees should be able to read articles in the HR knowledge base. What controls this?`,
o:[`User criteria for "Can read"`,`A system property naming the HR department`,`The article's short description field`,`The color of the knowledge base icon`],
a:[0],
v:true,
e:`User criteria define who can read and who can contribute to a knowledge base or article. Properties, descriptions, and icons don't control access.`},

{d:"SA",s:`A knowledge base needs articles reviewed before they're published. What should be configured?`,
o:[`An approval publishing workflow`,`A business rule that deletes unapproved articles`,`A separate instance for draft articles`,`A notification to every user for each draft`],
a:[0],
v:true,
e:`Knowledge bases can use instant publishing or approval-based workflows. Deleting drafts, separate instances, or mass notifications aren't review processes.`},

{d:"SA",s:`Readers report that an article is out of date. What feature lets them tell the authors?`,
o:[`Article feedback, ratings, and flagging`,`Changing the article's state to retired`,`Editing the article directly as readers`,`Opening a change request for the article`],
a:[0],
e:`Feedback, ratings, and flags let readers signal problems, and knowledge managers can review them. Readers generally can't retire or edit articles, and change requests are for other purposes.`},

{d:"SA",s:`What is the relationship between a request (REQ), a requested item (RITM), and a catalog task (SCTASK)?`,
o:[`A request holds items, and each item has tasks to fulfill it`,`A catalog task holds requests, and each request holds a single requested item`,`They're three names for the same record at different stages of its life`,`A requested item holds requests, and catalog tasks approve each request`],
a:[0],
e:`One order (REQ) can contain several items (RITMs), each fulfilled through one or more tasks (SCTASKs) assigned to fulfillment groups.`},

{d:"SA",s:`An employee should be able to report an IT issue from the service catalog and have it create an incident. What should be built?`,
o:[`A record producer that creates an incident`,`A catalog item that creates a requested item`,`An order guide containing incident items`,`A variable set added to the incident table`],
a:[0],
e:`Record producers present a catalog-style form and create a record on a target table, such as incident. Catalog items create requested items, and order guides bundle items.`},

{d:"SA",s:`New hires need a laptop, phone, and building badge requested together. What catalog feature fits?`,
o:[`An order guide`,`A single variable`,`A record producer`,`A knowledge article`],
a:[0],
e:`Order guides gather information once and order several related catalog items together. Variables are individual questions, record producers create one record, and articles are content.`},

{d:"SA",s:`Several catalog items ask the same five questions about the requester's location. How can the questions be reused?`,
o:[`Put them in a variable set and add it to each item`,`Copy the questions onto each catalog item by hand`,`Create a new custom table to hold the shared questions`,`Put the questions in a knowledge article linked to each item`],
a:[0],
e:`Variable sets group reusable variables so changes are made once. Copying by hand creates drift, and tables or articles don't add questions to items.`},

{d:"SA",s:`On a catalog item, a "Reason" field should become mandatory only when the user selects "Other". What's the simplest approach?`,
o:[`A catalog UI policy`,`A business rule on sc_req_item`,`An ACL on the variable`,`A scheduled job`],
a:[0],
e:`Catalog UI policies change variable behavior — mandatory, visible, read-only — based on conditions, without scripting. Business rules run on the server after submission, ACLs control access, and scheduled jobs run on timers.`},

{d:"SA",s:`Where is the fulfillment process for a catalog item usually defined in current releases?`,
o:[`In a flow built with Flow Designer`,`In the catalog item's short description`,`In a system property for each item`,`In the user's notification preferences`],
a:[0],
v:true,
e:`Flows (or legacy workflows) handle approvals, task creation, and automation for catalog items. Descriptions, properties, and preferences don't define fulfillment.`},

{d:"SA",s:`Which is a valid Flow Designer trigger?`,
o:[`A record is created or updated on a table`,`A user changes the photo on their profile`,`A report is printed to paper from a browser`,`An admin opens the system log to read entries`],
a:[0],
e:`Flows start from triggers such as record created or updated, a schedule, or application triggers like a catalog item being requested. Profile photos, printing, and log views aren't triggers.`},

{d:"SA",s:`Several flows need the same steps to look up a manager and request approval. How should this be built?`,
o:[`As a subflow that each flow calls`,`By copying the steps into each flow`,`As a business rule on every table`,`As a client script on the form`],
a:[0],
e:`Subflows package reusable logic, so it's maintained in one place. Copying creates drift, and business rules or client scripts aren't flow building blocks.`},

{d:"SA",s:`A flow needs to create a user in Microsoft Entra ID. What provides that ready-made action?`,
o:[`An IntegrationHub spoke`,`A UI policy on the user form`,`A knowledge base article template`,`A new list layout for sys_user`],
a:[0],
v:true,
e:`Spokes provide prebuilt actions for third-party systems, which flows can use without custom integration code. UI policies, articles, and list layouts don't call external systems.`},

{d:"SA",s:`In Flow Designer, what are data pills?`,
o:[`Values from earlier steps used in later steps`,`Small reports that summarize how often the flow has run`,`Medication records stored by HR applications`,`Error messages shown when a flow fails`],
a:[0],
e:`Data pills represent outputs, such as the triggering record's fields or an action's results, and pass them into later steps.`},

{d:"SA",s:`A flow isn't behaving as expected. Where can the administrator see what each step did?`,
o:[`The flow execution details`,`The user's notification preferences`,`The knowledge base feedback list`,`The instance's theme settings`],
a:[0],
e:`Execution details show each step's inputs, outputs, timing, and errors, and flows can be tested from the designer. The other options don't show flow runs.`},

{d:"SA",s:`Where are approval records stored, regardless of which process requested them?`,
o:[`In the approvals table (sysapproval_approver)`,`In each requester's own user preferences record`,`In the system properties table for the instance`,`In the knowledge base that belongs to the process`],
a:[0],
v:true,
e:`Approvals from changes, catalog requests, and other processes are stored as approval records, which approvers act on from their approvals list or the portal.`},

{d:"SA",s:`What does a service level agreement (SLA) definition on the platform track?`,
o:[`Time against a target, with start, pause, and stop conditions`,`The cost of each service delivered to a business unit`,`The number of users who have read a knowledge article`,`The licenses consumed by each application on the instance`],
a:[0],
e:`SLA definitions measure elapsed time against targets for task records, pausing and stopping based on conditions, and can trigger actions at percentages of the target.`},

{d:"SA",s:`An incident is waiting on the caller for information. How can the SLA avoid counting that time?`,
o:[`Add a pause condition for the "awaiting caller" state`,`Delete the SLA and recreate it when the caller replies`,`Change the incident's priority until the caller replies`,`Close the incident and open a new one later`],
a:[0],
e:`Pause conditions stop the clock while conditions hold. Deleting SLAs, changing priority, or closing and reopening incidents distorts records and reporting.`},

{d:"SA",s:`What is Virtual Agent used for?`,
o:[`Conversational self-service in a chat`,`Running scheduled imports from external systems overnight for the CMDB`,`Encrypting fields that contain sensitive personal data in the database`,`Calculating SLA timers for task records based on their schedules`],
a:[0],
e:`Virtual Agent provides chatbot conversations built from topics, letting users get answers or complete requests without an agent. Imports, encryption, and SLAs are separate.`},

{d:"SA",s:`In Virtual Agent, what defines a conversation flow for a specific need, such as resetting a password?`,
o:[`A topic`,`An ACL`,`A dictionary entry`,`An update set`],
a:[0],
e:`Topics define how Virtual Agent handles a specific request. ACLs, dictionary entries, and update sets aren't conversation designs.`},

{d:"SA",s:`What is the main purpose of a self-service portal such as Service Portal or Employee Center?`,
o:[`Giving users a simple place to find answers and request help`,`Letting admins edit the database schema directly from a browser`,`Hosting the instance's system logs for troubleshooting`,`Storing backups of the instance's configuration`],
a:[0],
e:`Portals provide end users with knowledge, catalog, and request status in a consumer-friendly experience. Schema editing, logs, and backups are admin functions.`},

{d:"SA",s:`Service Portal pages are built from reusable components. What are they called?`,
o:[`Widgets`,`Modules`,`Plugins`,`Properties`],
a:[0],
e:`Widgets are the building blocks placed on portal pages. Modules appear in the application navigator, plugins add features, and properties are settings.`},

{d:"SA",s:`Catalog items should only be visible to employees in a certain country. How is this controlled?`,
o:[`With user criteria on the catalog item ("Available for")`,`By renaming the catalog item separately for each country`,`By creating a separate catalog for every user who orders`,`By adding a variable that asks the user for their country`],
a:[0],
v:true,
e:`User criteria control who can see and order an item. Renaming items, per-user catalogs, or asking the user doesn't restrict visibility.`},

{d:"SA",s:`What is a catalog client script used for?`,
o:[`Adding browser-side behavior to catalog forms, such as reacting to variable changes`,`Running server-side code whenever a requested item record is updated in the database`,`Scheduling the delivery of hardware that has been ordered through the catalog`,`Defining the user criteria that control who can see each catalog item`],
a:[0],
e:`Catalog client scripts run in the browser on catalog forms (onLoad, onChange, onSubmit). Server-side behavior uses business rules or flows, and visibility uses user criteria.`},

{d:"SA",s:`A manager approves a requested item. What usually happens next in a typical fulfillment flow?`,
o:[`Catalog tasks are created for fulfillment`,`The request is closed without any further work`,`The requester's password is reset automatically`,`A new knowledge article is published`],
a:[0],
e:`After approval, the flow creates tasks for fulfillment teams and progresses the item as they complete their work.`},

{d:"SA",s:`What are knowledge base categories used for?`,
o:[`Organizing articles for browsing`,`Controlling which users can read each article`,`Defining the approval workflow for publishing`,`Setting how long articles stay published`],
a:[0],
e:`Categories structure the knowledge base for browsing. Access uses user criteria, and approval and retirement use workflows and dates.`},

{d:"SA",s:`An agent resolves an incident with a fix that others could use. How can the fix become a knowledge article?`,
o:[`Create a knowledge article from the incident`,`Copy the incident into a new update set and commit it`,`Change the incident's table from incident to knowledge`,`Email the fix to every agent on the team as an attachment`],
a:[0],
v:true,
e:`Creating articles from incidents captures solutions while they're fresh and links them back to the source. Update sets, table changes, and email don't create knowledge.`},

{d:"SA",s:`Which is a good use of a scheduled flow?`,
o:[`Sending a weekly reminder about overdue tasks`,`Making a field mandatory when a form loads`,`Hiding a field from users without a role`,`Translating a form into another language`],
a:[0],
e:`Scheduled triggers run flows at set times. Form behavior uses UI policies or client scripts, field security uses ACLs, and translation uses language plugins.`},

{d:"SA",s:`What does Workflow Studio provide in recent releases?`,
o:[`A central place to build flows, subflows, and playbooks`,`A replacement for the knowledge base that stores workflow articles`,`A tool for designing database tables and their relationships`,`A way to schedule reports and email them to managers`],
a:[0],
v:true,
e:`Workflow Studio is the Next Experience home for automation design, bringing flows, subflows, actions, and playbooks together. Knowledge, schema design, and report scheduling are separate.`},

{d:"SA",s:`A catalog item is ordered often, but fulfillment never starts. What should an admin check first?`,
o:[`Whether a flow or workflow is attached and active for the item`,`Whether the item's picture is the right size for the portal`,`Whether the item's description is long enough for users`,`Whether the requester has turned on their notifications`],
a:[0],
e:`Without an active fulfillment process, requested items sit idle. Pictures, descriptions, and notification preferences don't start fulfillment.`},

{d:"DB",s:`What is a sys_id?`,
o:[`A unique 32-character identifier for every record`,`The display number shown on task records, like INC0010001`,`The name of the user who created a record`,`The version number of the instance's release`],
a:[0],
e:`Every record has a globally unique sys_id. Task numbers such as INC0010001 are human-readable and different from the sys_id.`},

{d:"DB",s:`What happens when a new table extends the task table?`,
o:[`It inherits task's fields and behavior, such as number, state, and assignment`,`It copies every existing task record into the new table at the time it is created`,`It becomes the parent of task, and task inherits all of the new table's fields`,`Nothing is inherited; extending a table only affects its position in the menu`],
a:[0],
e:`Child tables inherit fields and much of the behavior of their parent. Records aren't copied, and inheritance runs from parent to child.`},

{d:"DB",s:`What is a base table?`,
o:[`A table that others extend but that extends none, like task`,`Any table that has fewer than ten fields defined in the dictionary`,`A table that stores only system logs and can't be extended`,`A table created by a user in their personal workspace`],
a:[0],
e:`Base tables, such as task and cmdb, sit at the top of a hierarchy that other tables extend. Field count, logs, and personal workspaces don't define them.`},

{d:"DB",s:`An administrator creates a custom table in the global scope. What prefix does its name get?`,
o:[`u_`,`x_`,`sys_`,`cmdb_`],
a:[0],
v:true,
e:`Custom global tables start with u_. Scoped application tables start with x_ followed by the scope's vendor and app prefix. sys_ and cmdb_ are reserved for platform tables.`},

{d:"DB",s:`Where are a table's fields and their attributes defined?`,
o:[`In the data dictionary`,`In the system log (syslog)`,`In the user preferences table`,`In each report that uses the table`],
a:[0],
e:`The dictionary defines each field's type, length, default, and attributes. Logs, preferences, and reports don't define schema.`},

{d:"DB",s:`Which field type stores a link to a single record in another table?`,
o:[`Reference`,`Choice list`,`String`,`Journal`],
a:[0],
e:`Reference fields point to one record in another table, like caller_id pointing to a user. Choice fields hold values from a list, strings hold text, and journal fields hold work notes and comments.`},

{d:"DB",s:`Which field type holds a list of references to multiple records, such as a watch list?`,
o:[`List (glide_list)`,`Reference (single)`,`Choice (dropdown)`,`Integer (number)`],
a:[0],
e:`List fields hold several references in one field. A reference holds one, a choice holds a value, and an integer holds a number.`},

{d:"DB",s:`A report needs the email address of the caller's manager on an incident. How can it get there without a script?`,
o:[`Dot-walk from caller to manager to email`,`Copy the email into a new incident field`,`Export both tables and join them in Excel`,`Ask each caller for their manager's email`],
a:[0],
e:`Dot-walking follows reference fields (caller_id.manager.email) to reach related data. Copying data duplicates it, and exports or asking users are unnecessary.`},

{d:"DB",s:`The incident table needs a different default value for a field it inherits from task, without changing task. What should be used?`,
o:[`A dictionary override on the incident table`,`A change to the field on the task table`,`A new field on incident with the same name`,`A business rule on the task table`],
a:[0],
e:`Dictionary overrides change attributes such as default value or mandatory for a child table without affecting the parent. Changing task affects every child, and duplicate fields cause confusion.`},

{d:"DB",s:`Where can an administrator see a visual picture of how a table relates to other tables?`,
o:[`The schema map`,`The system log`,`The update set list`,`The notification list`],
a:[0],
e:`The schema map shows a table's parent, children, and reference relationships. Logs, update sets, and notifications don't show schema.`},

{d:"DB",s:`How is a many-to-many relationship between two tables typically stored?`,
o:[`In a separate m2m table that holds pairs of references`,`In a single reference field on one of the tables`,`In a choice field listing the other table's records`,`In the description field of both tables' records`],
a:[0],
e:`Many-to-many relationships use a junction (m2m) table with references to both sides. A single reference supports only one-to-many.`},

{d:"DB",s:`What are the three conditions in an ACL that must all evaluate to true to grant access?`,
o:[`Roles, condition, and script`,`Table name, field name, and sys_id`,`Read, write, and delete operations`,`User, group, and department`],
a:[0],
e:`An ACL grants access when the user has a required role (if any), the condition is met (if set), and the script returns true (if present).`},

{d:"DB",s:`A user needs to read the short description on an incident. Which ACLs must they pass?`,
o:[`Both the table-level and field-level read ACLs`,`Only the field-level read ACL for short description`,`Only the table-level read ACL for incident`,`Neither, because read access is never restricted`],
a:[0],
e:`Access to a field requires passing the table rule and then the field rule. Failing either denies access.`},

{d:"DB",s:`Several ACLs could apply to incident.short_description. Which is evaluated first?`,
o:[`The most specific one, incident.short_description`,`The most general one, which is *.* for every table`,`The one that was created most recently by an admin`,`The one with the longest script in its script field`],
a:[0],
e:`ACLs are matched from most specific to most general: table.field, then parent table.field, then *.field. Creation date and script length don't affect order.`},

{d:"DB",s:`What does an ACL with the table name incident and field name * apply to?`,
o:[`All fields on the incident table that don't have a more specific rule`,`Only the incident table's number field, which is the display field`,`Every table on the instance, including task and all of its children`,`No fields at all, because wildcards aren't allowed in field names`],
a:[0],
e:`The * wildcard for field name applies to every field on that table unless a more specific field ACL exists. *.* is the instance-wide default.`},

{d:"DB",s:`Which ACL operation controls whether a user can see a record at all?`,
o:[`read`,`write`,`create`,`execute`],
a:[0],
e:`read controls viewing, write controls editing, create controls inserting, and execute applies to things like processors and scripts.`},

{d:"DB",s:`What is the best practice for giving users roles?`,
o:[`Assign roles to groups, and add users to the groups`,`Assign every role directly to each individual user`,`Give every user the admin role to avoid access issues`,`Store roles in each user's notification preferences`],
a:[0],
e:`Group-based roles make access consistent and easier to maintain — users inherit roles from group membership. Direct assignment is hard to manage, and admin for everyone is a security failure.`},

{d:"DB",s:`What happens when a role contains another role?`,
o:[`Parent-role users also get the contained role`,`Users must request each contained role separately`,`The contained role is removed from all other users`,`Nothing; roles can't contain other roles`],
a:[0],
e:`Roles can include other roles, so granting the parent grants all contained roles. That's how admin includes many other roles.`},

{d:"DB",s:`In which tables are users, groups, and group memberships stored?`,
o:[`sys_user, sys_user_group, and sys_user_grmember`,`sys_user, sys_user_role, and sys_properties`,`incident, task, and sys_dictionary tables`,`cmdb_ci, cmdb_rel_ci, and sys_user tables`],
a:[0],
e:`Users are in sys_user, groups in sys_user_group, and memberships in sys_user_grmember. Roles are in sys_user_role and their assignments in sys_user_has_role.`},

{d:"DB",s:`A new employee needs the same access as the rest of the service desk. What's the most efficient approach?`,
o:[`Add them to the service desk group`,`Copy each role to them one at a time`,`Clone the instance with their account`,`Share another agent's login with them`],
a:[0],
e:`Group membership grants the group's roles instantly and keeps access aligned. Copying roles is error-prone, cloning is unrelated, and shared logins break accountability.`},

{d:"DB",s:`What is the purpose of an import set's staging table?`,
o:[`To hold imported data before it's transformed`,`To store the final records that users work with every day`,`To keep a backup of the instance's configuration`,`To record which users have viewed each record`],
a:[0],
e:`Imported data lands in a staging (import set) table first, so it can be reviewed and transformed. The target table holds the final records.`},

{d:"DB",s:`What does a transform map do?`,
o:[`Maps staging table fields to target table fields`,`Converts a report into a dashboard widget`,`Changes the instance's language and time zone`,`Moves update sets between instances`],
a:[0],
e:`Transform maps define which source fields go to which target fields, plus optional scripts. Reports, localization, and update sets are separate.`},

{d:"DB",s:`An import should update existing users instead of creating duplicates. What should be set on the transform map?`,
o:[`A coalesce field, such as email`,`A higher priority for the transform map`,`A business rule that deletes duplicates later`,`A new staging table for each import`],
a:[0],
e:`Coalesce fields tell the transform to update the matching record when a value already exists and insert otherwise. Without coalesce, every row is inserted.`},

{d:"DB",s:`An import needs to fix the format of phone numbers before they're saved. Where can this logic go?`,
o:[`A transform or field map script`,`A client script on the user form that runs on load`,`A UI policy on the import set table for the field`,`The notification settings for the import's data source`],
a:[0],
e:`Transform and field scripts manipulate data during the transform. Client scripts and UI policies run in the browser, and notifications don't change data.`},

{d:"DB",s:`What's the usual first step to bring data from a spreadsheet into ServiceNow?`,
o:[`Create a data source and load the file into an import set`,`Paste the rows into the system log and process them`,`Attach the file to a knowledge article for the admin`,`Email the spreadsheet to the instance's administrator`],
a:[0],
e:`Data sources define where data comes from; loading creates staging rows that transform maps then process. The other options don't import data.`},

{d:"DB",s:`Which table is the base class for configuration items in the CMDB?`,
o:[`cmdb_ci`,`cmdb_rel_ci`,`sys_user`,`task`],
a:[0],
e:`cmdb_ci is the base CI table that classes such as servers and applications extend. cmdb_rel_ci stores relationships between CIs.`},

{d:"DB",s:`Where are relationships between configuration items stored?`,
o:[`cmdb_rel_ci`,`cmdb_ci`,`sys_dictionary`,`sys_user_grmember`],
a:[0],
e:`cmdb_rel_ci holds relationships such as "Runs on" between CIs. cmdb_ci holds the CIs themselves.`},

{d:"DB",s:`Where should an administrator manage CI classes, their attributes, and identification rules?`,
o:[`CI Class Manager`,`The Service Portal designer`,`The notification list`,`The theme builder`],
a:[0],
v:true,
e:`CI Class Manager is the central tool for class hierarchy, attributes, identification, and health settings. The others are unrelated.`},

{d:"DB",s:`What does the Common Service Data Model (CSDM) provide?`,
o:[`Standard guidance for modeling services and applications`,`A list of every system property and the default value for each`,`A data model that's used only for HR case management processes`,`A tool for importing spreadsheets of CIs directly into the CMDB`],
a:[0],
e:`CSDM defines how to represent business applications, services, and offerings consistently, so products across the platform use the same structure.`},

{d:"DB",s:`Who can create or modify access control rules?`,
o:[`Users with the security_admin role, after elevating`,`Any user who has been given the itil role`,`Every user, for the records that they created`,`Only users who belong to the IT department group`],
a:[0],
v:true,
e:`ACL changes require the elevated security_admin role, which administrators activate deliberately. itil users, record creators, and department groups can't edit ACLs.`},

{d:"DB",s:`An administrator wants to see who changed an incident's priority last week. Where should they look?`,
o:[`The record's audit history`,`The system properties table`,`The schema map for incident`,`The incident's form layout`],
a:[0],
e:`Audited tables record field changes, which appear in the record's history and activity stream. Properties, schema maps, and layouts don't show changes.`},

{d:"DB",s:`A batch of records was deleted by mistake. What platform feature can help recover them?`,
o:[`Delete recovery (Rollback and Delete Recovery)`,`Personalizing the list to show deleted rows`,`Creating a new update set`,`Changing the table's label`],
a:[0],
v:true,
e:`Deleted records can be restored from delete recovery, within limits. Lists don't show deleted rows, and update sets and labels can't restore data.`},

{d:"DB",s:`Which statement about extended tables and records is true?`,
o:[`An incident record is also a task record and appears in task lists`,`Incident records are stored twice: once in incident and once in task`,`Task lists can never show records from tables that extend task`,`An incident can be converted into a change by renaming its table`],
a:[0],
e:`Records in a child table are also records of the parent, so a task list can show incidents, problems, and changes together. They aren't stored twice, and you can't convert by renaming.`},

{d:"DB",s:`Which table stores the platform's choice list values?`,
o:[`sys_choice`,`sys_user`,`cmdb_ci`,`sys_audit`],
a:[0],
e:`Choice values for choice fields are stored in sys_choice. sys_user holds users, cmdb_ci holds CIs, and sys_audit holds audit history.`},

{d:"DB",s:`What does making a field mandatory in the dictionary do?`,
o:[`Requires the field on forms that use the table`,`Hides the field from users without the admin role`,`Encrypts the field's value in the database`,`Prevents the field from appearing in reports`],
a:[0],
v:true,
e:`A dictionary-level mandatory attribute makes the field required on forms. Hiding uses ACLs or UI policies, and encryption and reporting are separate.`},

{d:"DB",s:`What is the difference between a field's label and its column name?`,
o:[`The label is what users see; the column name is the field's database name`,`The column name is what users see; the label is the database name`,`Labels can only contain numbers; column names can only contain letters`,`There's no difference; the two always have identical values`],
a:[0],
e:`Labels are display text and can be translated or changed. Column names, such as short_description, are used in scripts, URLs, and filters.`},

{d:"DB",s:`What does the "Display" attribute on a field do?`,
o:[`Makes that field's value represent the record in reference fields`,`Shows the field on every form for every table in the instance`,`Makes the field visible only to users with the admin role`,`Displays the field in a different color on lists and forms`],
a:[0],
e:`The display value is what appears when another record references this one — for example, a user's name rather than their sys_id.`},

{d:"DB",s:`Why should an administrator be careful about creating many custom tables?`,
o:[`Custom tables can affect licensing and add maintenance work`,`Custom tables are deleted automatically at each upgrade`,`Custom tables can't hold more than one hundred records`,`Custom tables can't be referenced by any other table`],
a:[0],
v:true,
e:`Subscriptions may limit custom tables, and each table adds design and upkeep. Extending existing tables is often better. Custom tables survive upgrades, aren't record-limited, and can be referenced.`},

{d:"DB",s:`An administrator wants a field visible to everyone but editable only by managers. What's the right tool?`,
o:[`A field-level write ACL requiring a manager role`,`A UI policy that hides the field from everyone`,`A client script that clears the field on load`,`A report filtered to show only managers`],
a:[0],
e:`Write ACLs enforce who can edit, on the server, for every interface. UI policies and client scripts are client-side and easier to bypass, and reports don't control editing.`},

{d:"DB",s:`What is the effect of the high-security settings that deny access when no ACL matches?`,
o:[`Access is denied by default unless a rule explicitly grants it`,`Every user gets full access unless a rule explicitly denies it`,`ACLs are ignored and roles alone determine access`,`Only administrators can sign in to the instance`],
a:[0],
v:true,
e:`With default-deny behavior, anything not explicitly allowed is blocked, which is safer. Granting by default or ignoring ACLs would expose data.`},

{d:"DM",s:`What does an update set capture?`,
o:[`Configuration changes, such as forms, fields, and scripts`,`Every data record created on the instance, like incidents`,`Users' personal preferences and saved list filters`,`Attachments uploaded to records by end users`],
a:[0],
e:`Update sets record customization changes so they can move between instances. Transactional data, such as incidents and users, isn't captured.`},

{d:"DM",s:`An administrator needs to move a set of groups and users from development to test. Will an update set capture them?`,
o:[`No; they're data, so export and import them as XML or use another method`,`Yes; update sets capture every record created while the set is current`,`Yes, but only if the users were created by an administrator account`,`No; users and groups can never be moved between instances in any way`],
a:[0],
v:true,
e:`Data records aren't captured by update sets. Exporting and importing XML, or importing with transform maps, moves data.`},

{d:"DM",s:`What is the correct order for moving an update set to a target instance?`,
o:[`Retrieve, preview, then commit`,`Commit, preview, then retrieve`,`Preview, commit, then retrieve`,`Retrieve, commit, then preview`],
a:[0],
e:`On the target, retrieve the completed set from the source, preview it to detect problems, resolve any, then commit.`},

{d:"DM",s:`Why should an update set be marked Complete before it's moved?`,
o:[`So no further changes are captured and the target can retrieve it`,`Because completion deletes all changes that weren't tested`,`Because completion activates the changes in production immediately`,`So the update set is converted into a scoped application`],
a:[0],
e:`Completing a set closes it to new changes and makes it available to retrieve. It doesn't delete changes, apply them anywhere, or convert them.`},

{d:"DM",s:`Previewing a retrieved update set shows errors and warnings. What do they indicate?`,
o:[`Potential conflicts to resolve, such as newer local versions`,`That the update set has already been committed successfully in the target`,`That the update set will be deleted automatically if it isn't committed`,`That every user on the target instance must log out before committing`],
a:[0],
e:`Preview compares the incoming changes with the target and flags issues — for example, a newer local version of the same record or a reference to something that doesn't exist.`},

{d:"DM",s:`An administrator forgot to select a custom update set and made changes. Where were they captured?`,
o:[`In the Default update set`,`Nowhere; the changes were lost`,`In the user's notification preferences`,`In the system log only`],
a:[0],
v:true,
e:`Changes are captured in the current update set, which is Default if none was chosen. They can be moved to the right set, but forgetting is a common mistake.`},

{d:"DM",s:`Several related update sets must be moved together in the right order. What helps?`,
o:[`Update set batching under a parent set`,`Merging them into one large set without previewing`,`Committing them in alphabetical order by name`,`Moving them by exporting each to a spreadsheet`],
a:[0],
v:true,
e:`Batching groups related sets under a parent so they're previewed and committed together. Unpreviewed merges and alphabetical commits risk conflicts.`},

{d:"DM",s:`What does application scope provide?`,
o:[`Separation that protects an app from other apps' changes`,`A faster database connection for applications in the global scope`,`A way to share every table with every application automatically`,`A license that allows the app to be sold in the ServiceNow Store`],
a:[0],
e:`Scoped apps have a namespace and runtime protections, so other apps can't change their configuration or data unless allowed. Store listing is a separate process.`},

{d:"DM",s:`Which runs on the client and can make a field mandatory without any scripting?`,
o:[`A UI policy`,`A business rule`,`A script include`,`A scheduled job`],
a:[0],
e:`UI policies change field behavior on forms — mandatory, visible, read-only — without code. Business rules and script includes run on the server, and scheduled jobs run on timers.`},

{d:"DM",s:`A field must be mandatory even when records are created by imports and web services, not just forms. What should be used?`,
o:[`A data policy`,`A UI policy`,`A client script`,`A form template`],
a:[0],
e:`Data policies enforce mandatory and read-only on the server for all data sources. UI policies and client scripts only affect forms, and templates prefill values.`},

{d:"DM",s:`Which client script type runs when a specific field's value changes on a form?`,
o:[`onChange`,`onLoad`,`onSubmit`,`onCellEdit`],
a:[0],
e:`onChange runs when a field changes, onLoad when the form opens, onSubmit when it's saved, and onCellEdit when a list cell is edited.`},

{d:"DM",s:`Which business rule timing runs before a record is saved to the database, so it can change field values without another update?`,
o:[`before`,`after`,`async`,`display`],
a:[0],
e:`Before rules run prior to the database write, ideal for setting values on the current record. After rules run once it's saved, async runs later in the background, and display runs when the form loads.`},

{d:"DM",s:`A business rule needs to update related records and doesn't need to finish before the user sees the form again. Which timing is best?`,
o:[`async`,`before`,`display`,`onLoad`],
a:[0],
e:`Async rules run in the background after the save, keeping the user's experience fast. onLoad is a client script type, not a business rule timing.`},

{d:"DM",s:`What is a UI action?`,
o:[`A button, link, or context menu item that runs logic when clicked`,`A rule that grants access to tables based on the user's roles`,`A theme setting that changes the colors used in the interface`,`A report that tracks how users interact with forms and lists`],
a:[0],
e:`UI actions add buttons, links, and menu items to forms and lists, running client or server script. ACLs, themes, and reports are different.`},

{d:"DM",s:`Which API is used in server-side scripts to query and update records?`,
o:[`GlideRecord`,`g_form API`,`g_user API`,`GlideForm`],
a:[0],
e:`GlideRecord is the server-side API for database operations. g_form (GlideForm) and g_user are client-side APIs for forms and the current user.`},

{d:"DM",s:`Where can an administrator explore and test the instance's REST APIs?`,
o:[`The REST API Explorer`,`The schema map viewer`,`Form Builder (Designer)`,`The Theme Builder tool`],
a:[0],
e:`The REST API Explorer lets you build and test calls to APIs such as the Table API. The others don't test integrations.`},

{d:"DM",s:`An external system needs to create incidents in ServiceNow. Which out-of-box option fits?`,
o:[`The Table API over REST`,`A UI policy on incident`,`An email layout`,`A Visual Task Board`],
a:[0],
e:`The Table API lets authorized systems create, read, update, and delete records over REST. UI policies, layouts, and boards don't accept external calls.`},

{d:"DM",s:`An integration needs to reach a system inside the company's private network. What does ServiceNow commonly use?`,
o:[`A MID Server inside the network`,`A public file-sharing link`,`A user's laptop VPN session`,`An email to the system's owner`],
a:[0],
e:`MID Servers run inside the network and communicate outbound with the instance, enabling integrations and discovery without exposing internal systems.`},

{d:"DM",s:`What's the main advantage of using an IntegrationHub spoke over writing a custom REST integration?`,
o:[`Prebuilt, supported actions that reduce custom code`,`Spokes don't need any credentials to connect`,`Spokes bypass access controls for faster results`,`Spokes work only with other ServiceNow instances`],
a:[0],
e:`Spokes package common operations for third-party services, which are easier to build with and maintain. They still need credentials and respect security, and they connect to many external systems.`},

{d:"DM",s:`A small set of configuration records — such as a few email templates — needs to move between instances outside an update set. What's a common method?`,
o:[`Export the records as XML and import them on the target`,`Recreate them by hand on the target, character by character`,`Clone the source instance over the target instance`,`Email the records' sys_ids to the target's administrator`],
a:[0],
v:true,
e:`XML export and import moves specific records quickly. Retyping is error-prone, cloning replaces the whole instance, and sys_ids alone carry no content.`},

{d:"DM",s:`On a form, which runs first: client scripts or UI policies?`,
o:[`Client scripts run first, then UI policies`,`UI policies run first, then client scripts`,`They always run at exactly the same time`,`Neither runs until the form is submitted`],
a:[0],
v:true,
e:`On load, client scripts run before UI policies, so a UI policy can override a client script's field behavior. Knowing the order helps troubleshoot conflicts.`},

{d:"DM",s:`Why prefer UI policies over client scripts where they can do the job?`,
o:[`They're configuration rather than code, so they're easier to maintain`,`They run on the server, so users can't bypass them in the browser`,`They work for imports and web services as well as forms`,`They're required before any client script can run on a form`],
a:[0],
e:`UI policies handle common field behavior without scripting. They still run in the browser — server-side enforcement needs data policies or ACLs — and they're not prerequisites for client scripts.`},

{d:"DM",s:`An integration should push data into ServiceNow through a staging table so it can be transformed and validated. What can it call?`,
o:[`The Import Set API`,`The Theme API`,`A UI policy`,`A form template`],
a:[0],
v:true,
e:`The Import Set API inserts rows into a staging table, and transform maps process them into target tables, applying coalescing and scripts. Themes, UI policies, and templates aren't integration endpoints.`},
  ],
};
