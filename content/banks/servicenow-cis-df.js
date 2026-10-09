// ServiceNow CIS-DF question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/servicenow-cis-df.json.
module.exports = {
  id: "servicenow-cis-df",
  vendor: "ServiceNow",
  code: "CIS-DF",
  name: "Certified Implementation Specialist – Data Foundations (CMDB and CSDM)",
  fullLength: 75,
  minutes: 90,
  passPercent: 70,
  readinessPercent: 85,
  sectioned: false,
  note: "ServiceNow does not publish a cut score for CIS-DF; community consensus puts it near 70%. Treat 85% here as your readiness bar. Items marked release-sensitive reference features, defaults, and CSDM terms that shift between releases; verify them against your own instance.",
  domains: [{"id":"CF","name":"Configuration","weight":"15%"},{"id":"IN","name":"Ingest","weight":"19%"},{"id":"GV","name":"Govern","weight":"35%"},{"id":"IS","name":"Insight","weight":"20%"},{"id":"CS","name":"CSDM Fundamentals","weight":"11%"}],
  Q: [
{d:"CF",s:`Where should an implementer define the identification rule, attributes, and health inclusion rules for a CI class?`,
o:[`In CI Class Manager`,`In a business rule on the class table`,`In the System Dictionary only`,`In the Discovery schedule`],
a:[0],
e:`CI Class Manager is the central place to manage a class: hierarchy, attributes, identification and reconciliation rules, dependent relationships, and health settings. Using it keeps class configuration consistent and visible.

Business rules and direct dictionary edits bypass that structure. Discovery schedules control when discovery runs, not how classes are defined.`},

{d:"CF",s:`An organization needs to track a new type of infrastructure device with a few unique attributes. What is the recommended approach?`,
o:[`Create a standalone custom table for the devices that does not extend cmdb_ci`,`Extend the closest existing CI class so it inherits attributes, identification, and rules`,`Track the devices in a spreadsheet attached to a parent CI and update it each quarter`,`Add the new attributes directly to the cmdb_ci base table so every class can use them`],
a:[1],
e:`Extending the closest existing class keeps the new type inside the CMDB hierarchy, so it inherits identification, health, and relationship behavior and works with features that expect CMDB classes.

Standalone tables lose all CMDB capability. Adding fields to the base cmdb_ci table pollutes every class.`},

{d:"CF",s:`What is the main purpose of the Identification and Reconciliation Engine (IRE)?`,
o:[`To schedule Discovery runs and decide which MID Server executes each probe`,`To match incoming data to existing CIs and decide which source may update each attribute`,`To calculate the completeness, compliance, and correctness scores for each CI class`,`To build and refresh application service maps from traffic-based discovery data`],
a:[1],
e:`IRE applies identification rules to find existing CIs before inserting new ones, and reconciliation rules to decide which data source is authoritative for which attributes. Its job is CMDB integrity.

Scheduling, scoring, and mapping are handled by other components.`},

{d:"CF",s:`A hardware class identification rule has two identifier entries: serial number (priority 100) and name (priority 200). An incoming payload has a name but no serial number. What happens?`,
o:[`The payload is rejected because the highest-priority identifier entry cannot be evaluated`,`IRE skips the serial number entry because its attributes are empty and tries the name entry`,`IRE always inserts a new CI whenever the highest-priority identifier attributes are missing`,`IRE evaluates the serial number entry with a null value, which matches every CI in the class`],
a:[1],
v:true,
e:`Identifier entries are evaluated in priority order (lower number first). When the payload lacks values for an entry's criterion attributes, that entry is skipped and the next one is tried.

Rejecting or blindly inserting would defeat identification, and null values are not matched.`},

{d:"CF",s:`Why must a dependent CI, such as an application server instance, be sent to IRE with its relationship to a host?`,
o:[`Dependent CIs are identified in the context of the CI they depend on`,`Relationships are only needed so the dependent CI appears correctly in reports and dashboards`,`IRE ignores relationships entirely, so they can be added later with a separate import job`,`Dependent CIs cannot be stored in the CMDB unless their host CI was created manually first`],
a:[0],
e:`A Tomcat instance named "default" could exist on hundreds of servers. Dependent CIs are identified within the scope of the CI they depend on, so without the relationship the payload can't be identified correctly.

Relationships are core to identification here, not just reporting.`},

{d:"CF",s:`Discovery and an SCCM integration both update a server's RAM. Discovery should win. What should you configure?`,
o:[`An identification rule that matches the server on serial number before name`,`A reconciliation rule that gives Discovery priority for that attribute on the class`,`A health inclusion rule that excludes SCCM-reported servers from correctness checks`,`A Data Manager policy that retires any server whose RAM value is changed by SCCM`],
a:[1],
e:`Reconciliation rules define which discovery source is authoritative for which attributes, so a lower-priority source cannot overwrite data from a higher-priority one.

Identification decides which CI a payload matches. Health inclusion and Data Manager govern scoring and lifecycle.`},

{d:"CF",s:`What is the purpose of dynamic reconciliation rules?`,
o:[`To delete any CI whose attribute values two or more sources disagree about`,`To resolve conflicting values, such as by last reported`,`To merge duplicate CIs automatically when two sources report the same device`,`To schedule CMDB Health jobs after each integration finishes loading its data`],
a:[1],
v:true,
e:`Dynamic reconciliation resolves conflicting values among sources by strategy — last reported, most reported, largest, smallest — when static priority rules don't apply.

Deletion and merging are remediation actions; scheduling is unrelated.`},

{d:"CF",s:`What does Multisource CMDB provide?`,
o:[`A replicated copy of the CMDB kept in a second instance for disaster recovery`,`The values each source reported for a CI, so conflicts can be seen and values recomputed`,`Automatic deletion of CIs that only one data source has ever reported`,`A supported way for trusted integrations to write to the CMDB without going through IRE`],
a:[1],
v:true,
e:`Multisource CMDB keeps per-source reported values, letting you see what each source said about a CI, investigate conflicts, and recompute values from the stored source data. It works with IRE.

It is not replication, doesn't delete single-source CIs, and doesn't bypass IRE.`},

{d:"CF",s:`When are lookup rules used in identification?`,
o:[`When identifying values live on a related table`,`When building reports that join CI attributes from several related lookup tables`,`When choosing which MID Server should run discovery for a particular IP range`,`When calculating whether a CI has gone stale based on related records' update times`],
a:[0],
v:true,
e:`Lookup rules let IRE identify a CI using values stored in related lookup tables — for example, the serial number table or network adapters — which helps when a device has several identifiers.

They have no role in reporting, scheduling, or staleness.`},

{d:"IN",s:`Which component executes horizontal discovery probes and patterns inside the customer network?`,
o:[`The MID Server`,`The instance's scheduled job processor`,`The user's browser`,`The CMDB Health dashboard`],
a:[0],
e:`The MID Server runs inside the network, executes probes and patterns against targets, and returns results to the instance. Discovery depends on it to reach on-premises infrastructure.

The instance orchestrates but cannot reach private networks directly.`},

{d:"IN",s:`What is the correct order of the horizontal discovery phases?`,
o:[`Classification, scanning, exploration, identification`,`Scanning, classification, identification, exploration`,`Identification, scanning, classification, exploration`,`Exploration, identification, classification, scanning`],
a:[1],
e:`Discovery scans for open ports, classifies the device type, identifies whether it already exists in the CMDB, then explores it for detailed attributes and relationships.

Identification must follow classification because rules are class-specific.`},

{d:"IN",s:`What is a primary advantage of a Service Graph Connector over a custom import?`,
o:[`It writes directly to CMDB tables, which avoids the overhead of identification`,`It's a certified integration that loads mapped data through IRE`,`It only works with data produced by ServiceNow Discovery and its MID Servers`,`It removes the need for reconciliation rules because its data is always authoritative`],
a:[1],
e:`Service Graph Connectors are certified integrations for sources such as Microsoft SCCM, Intune, and cloud providers. They use standard mappings and IRE, which gives you consistent, deduplicated data with far less effort than building your own import.

Reconciliation rules still determine which source wins.`},

{d:"IN",s:`An integrator wants a guided way to map a new third-party source to CMDB classes and load it through IRE without writing transform scripts. Which tool fits?`,
o:[`IntegrationHub ETL`,`A legacy transform map that writes directly to cmdb_ci_server`,`Flow Designer approval actions`,`CMDB Query Builder`],
a:[0],
v:true,
e:`IntegrationHub ETL provides a guided UI to map source data to CMDB classes and relationships and sends it through IRE, which is also how Service Graph Connectors are built.

Direct transform maps bypass IRE. Approvals and Query Builder are unrelated.`},

{d:"IN",s:`A team imports servers with a transform map that writes directly to cmdb_ci_server. Duplicates keep appearing. What is the root cause?`,
o:[`The import bypasses IRE, so identification rules are never applied to the data`,`The MID Server used by the import is down, so records are inserted twice`,`CMDB Health jobs are disabled, so duplicate detection never runs for the class`,`The servers are stale, and stale CIs are recreated each time they are imported`],
a:[0],
e:`Writing directly to CMDB tables skips identification, so existing CIs aren't matched and duplicates are inserted. Route imports through IRE — with IntegrationHub ETL or IRE-aware transform logic — instead.

MID Server status, health jobs, and staleness don't create duplicates.`},

{d:"IN",s:`A custom scripted integration must create and update CIs correctly. How should it write to the CMDB?`,
o:[`Through the IRE API, so payloads are identified`,`With GlideRecord inserts directly on each CMDB class table`,`By opening and editing each CI through the standard form UI`,`By importing a CSV file directly into the cmdb_ci base table`],
a:[0],
v:true,
e:`Calling the IRE API (for example, the identification engine's create-or-update method) applies identification and reconciliation. Direct GlideRecord inserts and CSV loads bypass both.

Manual UI edits don't scale for an integration.`},

{d:"IN",s:`A new integration needs its own precedence in reconciliation rules. What must it have?`,
o:[`Its own discovery source value, so IRE can tell its data apart from other sources`,`Admin access to every CMDB table so it can overwrite values from other sources`,`Its own CI class, so its data never conflicts with what other sources report`,`A Data Manager policy that retires CIs the integration hasn't updated recently`],
a:[0],
v:true,
e:`Reconciliation rules are defined per discovery source. A new integration should register its own discovery source value so its data can be prioritized appropriately.

Broad admin access, new classes, and lifecycle policies don't establish precedence.`},

{d:"IN",s:`Why is manual CI creation discouraged for classes that have automated sources?`,
o:[`Manual data isn't refreshed, can conflict with automated data, and tends to go stale`,`The platform blocks manual CI creation for any class that has a discovery pattern`,`Manually created CIs cannot have relationships to discovered CIs in the CMDB`,`Manually created CIs are excluded from all reports, dashboards, and health scores`],
a:[0],
e:`Manual records lack an automated source to keep them current and can collide with discovered data. Manual entry is appropriate for things no tool can discover, such as some logical CIs, with clear ownership.

Manual creation is possible, and manual CIs can have relationships and appear in reports.`},

{d:"IN",s:`What is the difference between horizontal discovery and top-down discovery?`,
o:[`Horizontal inventories infrastructure; top-down maps one application service`,`They are identical processes that use different names in different releases of the platform`,`Horizontal discovery only finds cloud resources, while top-down discovery finds on-premises servers`,`Top-down discovery doesn't use MID Servers, while horizontal discovery always requires one`],
a:[0],
e:`Horizontal discovery builds broad infrastructure inventory. Top-down discovery follows the traffic from an entry point, such as a URL, to map the components of a specific application service.

Both use MID Servers, and horizontal discovery covers more than cloud.`},

{d:"IN",s:`Which table tracks which source reported a CI along with that source's native key?`,
o:[`sys_object_source`,`cmdb_rel_ci`,`cmdb_health_result`,`sys_user`],
a:[0],
v:true,
e:`sys_object_source records the source name, the native identifier from that source, and when it last reported, linking source data to the CI. It's useful for troubleshooting integrations.

cmdb_rel_ci holds relationships; the others are unrelated.`},

{d:"IN",s:`Select two benefits of routing every CI-writing integration through IRE. (Choose two.)`,
o:[`Duplicates are prevented by applying identification rules`,`Reconciliation rules prevent lower-priority sources from overwriting authoritative data`,`Integrations run without any access control`,`Health scores no longer need to be calculated`],
a:[0,1],
e:`IRE delivers both identification and reconciliation. Access control and health scoring are unaffected.`},

{d:"GV",s:`What are the three KPIs of CMDB Health?`,
o:[`Completeness, compliance, and correctness`,`Availability, performance, and capacity`,`Accuracy, timeliness, and cost`,`Discovery, identification, and reconciliation`],
a:[0],
e:`CMDB Health scores completeness (required and recommended fields), compliance (against audits and desired state), and correctness (duplicates, orphans, and staleness).

The other sets describe operations metrics or ingestion steps.`},

{d:"GV",s:`Which metrics make up the completeness KPI?`,
o:[`Required and recommended fields`,`Duplicates and orphans`,`Audit results`,`Discovery schedule success`],
a:[0],
e:`Completeness measures whether required and recommended attributes are populated. Duplicates and orphans fall under correctness, and audits under compliance.`},

{d:"GV",s:`Select two metrics that count toward the correctness KPI. (Choose two.)`,
o:[`Duplicate CIs`,`Orphan CIs`,`Missing required fields`,`Failed audits`],
a:[0,1],
e:`Correctness covers duplicates, orphans, and stale CIs. Missing fields affect completeness, and failed audits affect compliance.`},

{d:"GV",s:`How is the compliance KPI measured?`,
o:[`By comparing CIs against audits that define desired attribute values or states`,`By counting the duplicate and orphan CIs found in each class during health jobs`,`By counting how many users with the itil role have viewed each CI recently`,`By measuring how long each Discovery schedule takes to finish its scans`],
a:[0],
e:`Compliance audits check CIs against defined expectations — for example, that every production server has a managed-by group or specific configuration values. Failing CIs reduce the score.

Duplicates belong to correctness.`},

{d:"GV",s:`What makes a CI stale?`,
o:[`No source has updated it within its class's staleness period`,`It has no owner or managed-by group populated on its CI record`,`It has more relationships than the orphan rules for its class allow`,`It was created manually instead of by Discovery or an integration`],
a:[0],
v:true,
e:`Staleness measures how recently a CI was updated. If no source updates it within the configured period (60 days by default), it's flagged as stale, which suggests it may no longer exist.

Ownership, relationships, and creation method are measured differently.`},

{d:"GV",s:`What is an orphan CI?`,
o:[`A CI missing a relationship its orphan rule requires`,`A CI that has no owner, managed-by group, or support group populated on its record`,`A CI that two different sources update, with neither designated as authoritative`,`A CI that has been retired but still has open incidents or changes referencing it`],
a:[0],
e:`Orphan rules define relationships a class should have. CIs without them are orphans — often a sign of incomplete discovery or leftover records.

Missing owners and multiple sources are separate concerns. Retired CIs are a lifecycle state.`},

{d:"GV",s:`A CMDB manager wants health scores to include only operational CIs and exclude retired ones. What should be configured?`,
o:[`Health inclusion rules for the classes`,`Reconciliation rules for the classes`,`Identification rules for the classes`,`Principal class settings for the classes`],
a:[0],
e:`Health inclusion rules limit which CIs are evaluated, so retired or out-of-scope records don't distort scores.

Reconciliation and identification are IRE settings. Principal classes affect CI selection in forms.`},

{d:"GV",s:`IRE finds multiple existing CIs that match an incoming payload. What does it do?`,
o:[`It creates a de-duplication task so the duplicates can be reviewed and remediated`,`It silently deletes all but the most recently updated CI before applying the payload`,`It discards the payload permanently and blocks the source from sending that CI again`,`It merges the matching CIs automatically into one record without any review`],
a:[0],
v:true,
e:`When identification finds duplicates, IRE flags them and creates de-duplication tasks so someone can choose the main CI and remediate safely.

Silent deletion or automatic merging could lose data.`},

{d:"GV",s:`What happens when a duplicate is remediated with the duplicate CI remediation process?`,
o:[`A main CI is chosen and attributes, relationships, and related records move to it first`,`Both the main CI and its duplicates are deleted, and Discovery recreates the device later`,`The newest CI is always kept, and older duplicates are deleted without any review`,`Only the CI names are merged; relationships and related records stay on the duplicates`],
a:[0],
v:true,
e:`Remediation lets you pick the surviving CI and decide what to carry over — attributes, relationships, and related records such as incidents — before handling the duplicates.

Deleting both or keeping one blindly loses information.`},

{d:"GV",s:`Duplicates reappear every week after being remediated. What should you investigate first?`,
o:[`The identification rules, and whether the integration uses IRE`,`The theme and color settings of the CMDB Health dashboard used to report duplicates`,`The number of CMDB groups defined for the class and whether any of them overlap`,`The principal class list and whether the duplicated class is included in it`],
a:[0],
e:`Recurring duplicates point to a root cause upstream: weak identification rules, payloads missing identifying attributes, or an integration bypassing IRE. Remediation alone treats the symptom.

The other items don't cause duplicates.`},

{d:"GV",s:`What is CMDB Data Manager used for?`,
o:[`Defining policies that retire, archive, and delete CIs, with tasks and approvals`,`Building and maintaining application service maps from discovered relationships`,`Running and scheduling horizontal Discovery against the organization's IP ranges`,`Writing the identification rules IRE uses to match incoming payloads to CIs`],
a:[0],
v:true,
e:`Data Manager provides governed lifecycle policies so CIs are retired, archived, and eventually deleted consistently, with tasks and approvals where needed.

Service maps, Discovery, and identification are elsewhere.`},

{d:"GV",s:`In what order should Data Manager lifecycle policies typically act on an outdated CI?`,
o:[`Delete, archive, retire`,`Retire, archive, delete`,`Archive, delete, retire`,`Delete only`],
a:[1],
v:true,
e:`A CI is first retired (taken out of service), then archived (moved out of active tables while preserved), and finally deleted when retention allows. That sequence preserves history.

Deleting first destroys records that may still be referenced.`},

{d:"GV",s:`What are principal classes used for?`,
o:[`Filtering CI reference fields on task forms to the classes users most need`,`Deciding which data source is authoritative for each attribute on a class`,`Calculating how many days a CI can go without updates before it is stale`,`Storing CIs that have been retired so they no longer appear in active lists`],
a:[0],
e:`Principal classes are the classes users typically need to select — business applications, servers, services — and filtering by them keeps CI pickers on incident and change forms usable.

They don't affect reconciliation, staleness, or retirement.`},

{d:"GV",s:`Which experience gives CMDB managers a central place for health, search, and governance tasks?`,
o:[`CMDB Workspace`,`Service Portal`,`Employee Center`,`Discovery Admin console only`],
a:[0],
v:true,
e:`CMDB Workspace brings CMDB search, health, governance tasks, and insights together for CMDB managers and data stewards.

The portals target end users, and the Discovery console covers ingestion only.`},

{d:"GV",s:`A team needs to certify a specific set of CIs owned by one department. What helps define that set?`,
o:[`A CMDB group defined by a query or a manual list of CIs`,`A new CI class created just for that department's CIs`,`A reconciliation rule scoped to the department's sources`,`A Discovery schedule limited to the department's subnets`],
a:[0],
e:`CMDB groups define sets of CIs for health, certification, and reporting — either by query or by listing them manually.

Creating classes for scoping, or using IRE and Discovery settings, would be misuse.`},

{d:"GV",s:`What is the purpose of data certification in CMDB governance?`,
o:[`Having owners periodically verify that CI attribute values are accurate`,`Certifying the CMDB itself against ISO 27001 for external auditors`,`Approving Discovery schedules before they run against production networks`,`Encrypting sensitive CI attributes so only certified users can read them`],
a:[0],
e:`Certification policies send tasks to CI owners to confirm or correct attribute values, which is valuable for data no tool can discover.

It isn't an ISO certification, scheduling, or encryption feature.`},

{d:"GV",s:`Which CI attribute assignment best supports operational accountability for data quality?`,
o:[`A managed-by group populated on every in-scope CI`,`The user recorded in the CI's created-by field`,`The CI's sys_id, used as its permanent key`,`The discovery source field, showing its origin`],
a:[0],
v:true,
e:`The managed-by group (with owned-by and supported-by under CSDM) identifies who is responsible for the CI, which is what governance tasks and remediation need.

Created-by and sys_id don't express responsibility. Discovery source indicates origin, not ownership.`},

{d:"GV",s:`Under current CSDM guidance, which fields should be used to represent where a CI is in its lifecycle?`,
o:[`Life Cycle Stage and Life Cycle Stage Status`,`Only the legacy Install Status field value`,`The CI's short description field`,`The updated-on timestamp of the CI`],
a:[0],
v:true,
e:`CSDM standardizes lifecycle on Life Cycle Stage and Life Cycle Stage Status, which replace inconsistent use of install and operational status across classes.

Descriptions and timestamps aren't lifecycle fields.`},

{d:"GV",s:`A large number of servers are flagged as stale. What is the recommended handling?`,
o:[`Find out why sources stopped reporting, then retire confirmed decommissioned CIs via policy`,`Delete every stale CI immediately so the correctness score recovers before the next review`,`Turn off the staleness metric for the server class until the integrations are repaired`,`Run a script that updates each stale CI's timestamp so it no longer counts as stale`],
a:[0],
e:`Staleness can mean decommissioned assets or a broken integration. Investigate first, then use governed lifecycle policies to retire confirmed decommissioned CIs.

Immediate deletion, disabling the metric, or faking updates all hide the real problem.`},

{d:"GV",s:`A class's health score suddenly drops after a new integration starts sending data. What is the most likely explanation?`,
o:[`The integration is creating CIs without required fields or creating duplicates`,`The health dashboard's theme was changed, which resets the class's scoring weights`,`More users have logged in to the CMDB Workspace since the integration went live`,`The principal class list was updated, which changes how health scores are weighted`],
a:[0],
e:`New sources commonly introduce incomplete records or duplicates, which lower completeness and correctness. Check the integration's mappings and identification.

The other changes don't affect scores.`},

{d:"GV",s:`Why should health scores be tracked over time rather than checked once?`,
o:[`Trends show whether data quality is improving and expose regressions after changes`,`Scores never change after the first calculation, so one check is only a formality`,`Tracking scores over time is a prerequisite for Discovery schedules to run`,`The platform doesn't support viewing a single score without historical data`],
a:[0],
e:`Trending shows the effect of remediation and catches regressions early. A single snapshot can't show whether the program is working.

Scores change continuously, and trending isn't a Discovery dependency.`},

{d:"IS",s:`What does CMDB Query Builder let you do that a standard list view cannot?`,
o:[`Query across CI classes and related tables by following their relationships`,`Edit attribute values on many CIs at once from a single list of results`,`Start a Discovery run against the CIs that match a saved list filter`,`Create or modify the identification rules used by IRE for a class`],
a:[0],
e:`Query Builder queries across classes and relationships — for example, all databases supporting a business application through several hops. List views filter one table.

Bulk editing, Discovery, and identification are elsewhere.`},

{d:"IS",s:`A change manager needs every Linux server supporting a particular business application, including those connected through intermediate CIs. Which tool fits best?`,
o:[`CMDB Query Builder`,`The server list view filtered by name`,`A Data Manager policy`,`An identification rule`],
a:[0],
e:`Relationship-based queries across classes are Query Builder's purpose. A server list can't follow relationships to the application.

Data Manager and identification rules aren't query tools.`},

{d:"IS",s:`What is Unified Map used for?`,
o:[`Visualizing CIs, their relationships, and service maps in one interactive map`,`Scheduling Discovery runs and assigning MID Servers to each IP range`,`Calculating completeness, compliance, and correctness scores for each class`,`Merging duplicate CIs after a de-duplication task has been approved`],
a:[0],
v:true,
e:`Unified Map provides one interactive visualization of CI relationships and service maps, with filtering and drill-down for impact analysis and troubleshooting.

It doesn't schedule, score, or remediate.`},

{d:"IS",s:`What is the purpose of the CMDB and CSDM foundation dashboards?`,
o:[`To show whether foundational data is in place and where gaps are`,`To start Discovery runs and monitor their progress across MID Servers`,`To route normal and emergency changes to the right approvers`,`To store attachments and evidence for CMDB certification tasks`],
a:[0],
v:true,
e:`Foundation dashboards show the readiness of CMDB and CSDM data — whether foundation records, business applications, services, and their relationships exist and are populated — so teams can prioritize.

They aren't operational tools.`},

{d:"IS",s:`How does an accurate CMDB reduce mean time to resolve incidents?`,
o:[`Responders see affected CIs, dependencies, and recent changes, speeding diagnosis and routing`,`Incidents linked to healthy CIs are closed automatically once monitoring clears the alert`,`Support groups are no longer needed because the CMDB assigns incidents to individuals`,`Alerts are suppressed for CIs with high health scores, which reduces incident volume`],
a:[0],
e:`Knowing what a CI supports, what it depends on, and what recently changed is how CMDB data shortens triage. Accurate support groups also improve routing.

The CMDB doesn't close incidents or remove the need for support teams.`},

{d:"IS",s:`How does CMDB data improve change management?`,
o:[`It supports impact analysis by identifying affected services and dependent CIs`,`It approves standard and normal changes automatically when the CI is healthy`,`It prevents any change from being scheduled against servers in production`,`It replaces the change advisory board for changes to discovered CIs`],
a:[0],
e:`Change impact relies on relationships: which services and CIs a change touches. Better data means better risk assessment and fewer surprise outages.

Automated approvals and CAB replacement aren't CMDB functions.`},

{d:"IS",s:`Select two business outcomes most directly enabled by a trusted CMDB. (Choose two.)`,
o:[`Faster incident triage through dependency context`,`More accurate change impact assessment`,`Elimination of all outages`,`Removal of the need for asset management`],
a:[0,1],
e:`Dependency context and impact analysis are direct outcomes of reliable data. No CMDB eliminates outages, and asset management remains a separate discipline.`},

{d:"IS",s:`An executive asks whether CMDB governance investment is paying off. What evidence is most persuasive?`,
o:[`Health score trends shown alongside metrics such as change success rate and resolution time`,`The total number of CI classes created or extended since the governance program started`,`The number of users who have been granted access to the CMDB Workspace this year`,`The overall size of the CMDB database in gigabytes compared with the previous year`],
a:[0],
e:`Improving data quality tied to better operational outcomes demonstrates value. Class counts, user counts, and data volume say nothing about quality or impact.`},

{d:"IS",s:`How can CMDB Query Builder results be reused beyond the builder itself?`,
o:[`Saved queries can be used as a source for reports and scheduled exports`,`Results can only be viewed once and must be rebuilt for every new session`,`Saved queries are deleted automatically after each run to protect performance`,`Each query requires a fresh Discovery run before its results can be reused`],
a:[0],
v:true,
e:`Saving queries lets you reuse them in reporting and schedule them, so complex relationship queries become ongoing insight rather than one-off searches.`},

{d:"IS",s:`A health dashboard shows low completeness for the server class. What is the most useful next step?`,
o:[`Drill into failing CIs and missing fields to find patterns`,`Disable completeness scoring for the server class until the integrations are reviewed`,`Delete the server class and recreate it so the scores reset with a clean baseline`,`Export the dashboard to PDF, attach it to a task, and close the task as reviewed`],
a:[0],
e:`Drill-down shows which attributes and sources cause the gap, so fixes can target the root cause, often an integration mapping.

Disabling or deleting hides the problem.`},

{d:"IS",s:`Why use a relationship-aware view rather than a flat list when assessing what an outage on a database server affects?`,
o:[`Impact depends on what relies on the server, which relationships show`,`Flat lists take much longer to load than relationship views when CMDB classes are large`,`Relationship views can display more attribute columns than a standard flat list`,`Flat lists cannot be filtered by environment, location, or support group`],
a:[0],
e:`What an outage affects is defined by dependencies. A list of servers can't show which applications and services sit on top of them.`},

{d:"IS",s:`Which statement about CMDB insight tools is true?`,
o:[`Their value depends on the quality of the underlying CMDB data`,`They correct bad data automatically whenever a user views an inaccurate CI`,`They only work with data that came from ServiceNow Discovery, not integrations`,`They replace the need for CSDM because they infer service models from CI data`],
a:[0],
e:`Maps, queries, and dashboards are only as accurate as the CMDB. Governance makes insight trustworthy.

Insight tools don't fix data, work with any well-identified source, and don't replace a data model.`},

{d:"CS",s:`What is the Common Service Data Model (CSDM)?`,
o:[`A prescriptive framework for modeling services and applications in the CMDB`,`A library of Discovery patterns for identifying common applications and infrastructure`,`A licensing model that determines which CMDB classes an organization can use`,`A reporting plugin that adds service dashboards to the CMDB Workspace`],
a:[0],
e:`CSDM standardizes where and how to model business and technical services, applications, and their relationships, so products across the platform share consistent data.

It isn't a discovery tool, license, or plugin.`},

{d:"CS",s:`What is the difference between a business application and an application service in CSDM?`,
o:[`A business application is the software; an application service is a deployed instance`,`They are the same record, labeled differently depending on which team is viewing it`,`An application service is a desktop application; a business application is a web application`,`Business applications only exist in the asset table and cannot be related to CIs`],
a:[0],
e:`A business application ("Payroll") is a logical portfolio record. Application services ("Payroll – Production") are deployed instances that relate to the infrastructure CIs delivering them.

Confusing the two is the most common CSDM modeling error.`},

{d:"CS",s:`What distinguishes a business service from a technical service?`,
o:[`Business services serve business users; technical services support IT`,`Business services are always offered to external customers; technical services are internal`,`Technical services cannot have service offerings, while business services always do`,`There is no difference; the terms describe the same record type in different releases`],
a:[0],
e:`Business services are what the business consumes, such as email or HR self-service. Technical services, such as database hosting, are IT capabilities that support them.

Both can have offerings.`},

{d:"CS",s:`Why does CSDM recommend service offerings?`,
o:[`They define a service's specific commitments, such as SLAs, support groups, and availability`,`They replace business applications as the portfolio record for each piece of software`,`They store the hardware and software attributes of the CIs that deliver the service`,`They are used only for chargeback, to bill business units for the services they consume`],
a:[0],
e:`Offerings carry the commitments: SLAs, support and approval groups, and availability. They're what tasks and requests reference.

They complement rather than replace other records.`},

{d:"CS",s:`What is the recommended starting point when adopting CSDM?`,
o:[`Establish foundation data, then applications and services, in stages`,`Model every service offering in detail before loading any foundation data`,`Customize all CSDM tables to match the current org chart before loading data`,`Skip foundation data and begin with technical services, which have no dependencies`],
a:[0],
e:`CSDM adoption is staged (crawl, walk, run, fly), starting with foundation data such as companies, locations, and groups, then business applications and application services.

Starting at the end or customizing first leads to rework.`},

{d:"CS",s:`In CSDM, which domain does the business application record belong to?`,
o:[`Design and planning`,`Service consumption`,`Foundation`,`Build and integration`],
a:[0],
v:true,
e:`Business applications are portfolio records in the design and planning domain (called the "Design" domain in earlier CSDM versions). Consumption covers business services and offerings; foundation covers reference data such as companies and locations.

Domain names changed between CSDM versions, so confirm against the version your instance follows.`},

{d:"CS",s:`How should a business service offering connect to the infrastructure that delivers it under CSDM?`,
o:[`Through the application service that delivers it, which relates to the infrastructure CIs`,`Directly to every server involved, bypassing application services and offerings entirely`,`Through a text field on the offering that lists the names of the servers`,`It should not be connected, since offerings describe commitments, not infrastructure`],
a:[0],
v:true,
e:`The service-to-infrastructure path runs through application services, which hold the dependency on infrastructure. That path is what makes impact analysis work.

Direct links to servers bypass the model, and text fields aren't relationships.`},

{d:"CF",s:`A new class extends cmdb_ci_server. What does it get from its parent?`,
o:[`The parent's attributes and, unless overridden, its identification rules`,`Only the parent's name; every attribute has to be recreated on the new class`,`Nothing until an administrator copies the parent's dictionary entries by hand`,`The parent's CI records, which are copied into the new class automatically`],
a:[0],
e:`Class extension is inheritance: child classes get the parent's attributes and, unless they define their own, its identification and reconciliation rules.

No attributes need recreating, and existing records stay in their own class.`},

{d:"CF",s:`Why is "name" alone usually a weak identifier for hardware CIs?`,
o:[`Names aren't guaranteed unique and change often`,`Name fields can't be used in identification rules at all`,`Names are encrypted, so IRE can't compare them`,`Names only exist on CIs that were created manually`],
a:[0],
e:`Hostnames are reused, renamed, and duplicated across environments. Strong identifiers such as serial numbers are stable and unique, so name is usually a lower-priority fallback.

Name can be used in rules, isn't encrypted, and exists on discovered CIs too.`},

{d:"CF",s:`A child class has no identification rule of its own. How does IRE identify its CIs?`,
o:[`It uses the nearest parent class's identification rule`,`It inserts a new CI every time because there's no rule`,`It rejects every payload for that class with an error`,`It uses the rule of whichever class was created most recently`],
a:[0],
e:`Identification rules are inherited. Without its own rule, a class uses its nearest ancestor's rule, which is why most hardware classes share the hardware rule.

IRE doesn't blindly insert, reject everything, or pick an unrelated rule.`},

{d:"CF",s:`An integration updates the same CIs every five minutes, overwriting values that another source updates daily. Which reconciliation feature limits how often a source may update a CI?`,
o:[`Data refresh rules`,`Health inclusion rules`,`Orphan rules`,`Principal class settings`],
a:[0],
v:true,
e:`Data refresh rules set how much time must pass before a source is allowed to update a CI again, which reduces churn from noisy sources.

Inclusion, orphan, and principal class settings govern health scoring and form filtering.`},

{d:"CF",s:`At what level are reconciliation rules defined?`,
o:[`Per class and attribute, inherited by child classes unless overridden`,`Once for the entire CMDB, applying to every class in the same way`,`Per CI record, set individually by each CI's owner`,`Per user, based on the roles of the user running the import`],
a:[0],
e:`Reconciliation rules name a class, the attributes they govern, and the source priority, and child classes inherit them. That granularity lets Discovery own technical attributes while an asset tool owns financial ones.

A single global rule is too coarse, and per-record or per-user rules would be unmanageable.`},

{d:"CF",s:`Which relationship type best describes an application that runs on a server?`,
o:[`Runs on::Runs`,`Contains::Contained by`,`Members::Member of`,`Sends data to::Receives data from`],
a:[0],
v:true,
e:`"Runs on::Runs" is the standard type for software running on a host. Contains is for containment, Members for clusters and groups, and Sends data to for data flows.

Using consistent relationship types keeps maps and impact analysis accurate.`},

{d:"CF",s:`What is the purpose of suggested relationships in CI Class Manager?`,
o:[`To guide which relationship types are expected between classes`,`To create relationships automatically for every CI in the class`,`To delete relationships that don't match the class definition`,`To replace identification rules for dependent CIs`],
a:[0],
v:true,
e:`Suggested relationships define the relationships that make sense for a class, guiding users and integrations toward consistent modeling.

They don't create or delete relationships on their own, and they don't replace identification.`},

{d:"CF",s:`How do containment and hosting rules support identification?`,
o:[`They define valid paths for dependent CIs, like a VM hosted on a hypervisor`,`They define which MID Server hosts each Discovery schedule in the network`,`They define which users are allowed to contain and host new CI classes`,`They define how long retired CIs are contained in archive tables`],
a:[0],
v:true,
e:`Containment and hosting rules describe how dependent CIs relate to the CIs they live in or on, which IRE uses when identifying them in context.

MID Server assignment, user permissions, and archiving are unrelated.`},

{d:"CF",s:`Where are a class's recommended fields defined, which feed the completeness KPI?`,
o:[`In CI Class Manager`,`In each user's personal list layout for the class`,`In the Discovery schedule that populates the class`,`In the CMDB Health dashboard's color settings`],
a:[0],
v:true,
e:`Class Manager lets you mark attributes as recommended, and completeness scoring checks whether CIs populate them.

List layouts, Discovery schedules, and dashboard colors don't define data expectations.`},

{d:"CF",s:`What does an IRE payload contain?`,
o:[`CI items with class and attributes, plus relationships`,`Only the sys_id of each CI to update, with no attributes included`,`A list of users who should own each CI after it is created`,`A SQL statement that IRE runs against the CMDB tables directly`],
a:[0],
v:true,
e:`IRE takes structured items (class name and values) and relations, then identifies, reconciles, and writes them. Sending relationships lets dependent CIs be identified.

Sending only sys_ids skips identification, and IRE never runs raw SQL.`},

{d:"CF",s:`In a reconciliation rule, how is source precedence expressed?`,
o:[`By a priority number, where a lower number means higher priority`,`By the order sources were installed, where the oldest always wins`,`By the alphabetical order of the source names`,`By whichever source has sent the most records`],
a:[0],
v:true,
e:`Each source gets a priority, and lower numbers win for the attributes the rule covers. That makes precedence explicit and adjustable.

Installation order, names, and volume don't determine precedence.`},

{d:"CF",s:`A server's RAM value keeps changing, and nobody knows which source is changing it. Where should you look?`,
o:[`The multisource view (CMDB 360) for that CI`,`The CI's short description history`,`The CMDB Health dashboard's overall score`,`The list of principal classes`],
a:[0],
v:true,
e:`The multisource view shows the value each source reported and when, which identifies the conflicting source quickly.

Descriptions, overall scores, and principal classes don't show per-source values.`},

{d:"CF",s:`A payload lacks values for every identifier entry in its class's identification rule. What happens?`,
o:[`IRE returns an error instead of risking a duplicate`,`IRE inserts a new CI anyway, using the name as a temporary identifier`,`IRE updates the most recently created CI in the class with the payload`,`IRE stores the payload and retries identification every hour indefinitely`],
a:[0],
v:true,
e:`Without identifying values, IRE can't safely decide whether the CI exists, so it reports an error rather than guessing. Fixing the source payload is the remedy.

Guessing would create duplicates or corrupt unrelated CIs.`},

{d:"CF",s:`Which attribute is typically the strongest identifier for physical hardware?`,
o:[`Serial number`,`Hostname`,`IP address`,`Assigned user`],
a:[0],
e:`Serial numbers are assigned by the manufacturer and rarely change, so they're the preferred hardware identifier. Hostnames get renamed, IPs get reassigned, and assigned users change all the time.`},

{d:"IN",s:`A company has several segmented networks that can't reach each other. How should MID Servers be deployed for Discovery?`,
o:[`Place MID Servers where they can reach the targets in each segment`,`Use one MID Server in the DMZ to reach every network over the internet`,`Install a MID Server on each laptop that should be discovered`,`Skip MID Servers and let the instance connect to targets directly`],
a:[0],
e:`MID Servers need network access to the devices they discover, so segmented networks typically need MID Servers in or near each segment.

Routing all discovery through one DMZ host or the internet is unsafe, laptops aren't MID hosts, and the instance can't reach private networks directly.`},

{d:"IN",s:`Where does Discovery get the credentials it uses to log in to targets?`,
o:[`From credentials stored on the instance, used by the MID Server`,`From each target device, which sends its password to the instance on request`,`From the discovery admin's personal account, used for every probe`,`Discovery doesn't need credentials for any kind of exploration`],
a:[0],
e:`Credentials are stored securely on the instance and used by MID Servers to authenticate. Credential affinity remembers which credential worked for which target.

Devices don't volunteer passwords, personal accounts are a security risk, and deep exploration needs credentials.`},

{d:"IN",s:`A team wants to find out which devices are alive on a range without exploring them in detail. What should they run?`,
o:[`An IP-scan-only discovery schedule`,`A full configuration item discovery`,`A Service Mapping top-down discovery`,`A CMDB Health correctness job`],
a:[0],
v:true,
e:`IP scan schedules find responsive devices and open ports without classifying or exploring them — useful for coverage checks.

Full discovery goes much deeper, Service Mapping starts from an application, and health jobs don't scan networks.`},

{d:"IN",s:`What do Discovery patterns do?`,
o:[`They define how to identify and explore a type of CI`,`They define the visual layout of the Unified Map for each class`,`They define which users can run Discovery schedules on the instance`,`They define the health scoring weights used for each class`],
a:[0],
e:`Patterns are the instructions Discovery follows to collect attributes and relationships for a type of CI, and they can be extended with the pattern designer.

Map layout, permissions, and health weights are configured elsewhere.`},

{d:"IN",s:`A Discovery schedule should skip a range of sensitive industrial devices. What should be configured?`,
o:[`An exclusion for that range in the schedule's IP configuration`,`A health inclusion rule that ignores the devices' CIs`,`A reconciliation rule that gives the devices lowest priority`,`A Data Manager policy that retires the devices after discovery`],
a:[0],
v:true,
e:`Excluding addresses from the schedule keeps Discovery from probing them at all.

Health inclusion, reconciliation, and Data Manager act after data exists — they don't stop probes.`},

{d:"IN",s:`How does ServiceNow discover resources in public clouds such as AWS and Azure?`,
o:[`Through cloud discovery with a provider service account`,`By installing a MID Server inside every virtual machine in the cloud`,`By asking each cloud account owner to enter resources manually`,`Public cloud resources can't be discovered`],
a:[0],
v:true,
e:`Cloud discovery queries the provider's APIs with a configured service account, collecting resources such as VMs, databases, and networks. Service Graph Connectors are another option for some providers.

MIDs aren't installed in every VM, and manual entry doesn't scale.`},

{d:"IN",s:`Devices that are often off the corporate network, such as remote laptops, need regular inventory updates. What helps?`,
o:[`Agent-based collection, such as Agent Client Collector`,`More frequent agentless IP scans of the corporate ranges`,`Asking users to update their laptop records each month`,`Excluding remote laptops from the CMDB entirely`],
a:[0],
v:true,
e:`Agents report from the device wherever it is, which suits endpoints that agentless discovery can't reach reliably.

Scanning corporate ranges misses off-network devices, and manual updates or exclusion leave gaps.`},

{d:"IN",s:`How is a Service Graph Connector typically added to an instance?`,
o:[`Installed from the ServiceNow Store, then configured with its guided setup`,`Written from scratch by the customer as a scripted REST API`,`Enabled by default on every instance with no configuration`,`Purchased from the third-party vendor and installed on the MID Server`],
a:[0],
v:true,
e:`Connectors are Store applications with guided setup for credentials, scheduling, and options, which keeps deployment consistent.

They aren't custom-built, enabled by default, or installed on MID Servers as vendor software.`},

{d:"IN",s:`What data does a Service Graph Connector for an endpoint management tool such as Microsoft SCCM or Intune typically bring into the CMDB?`,
o:[`Computers, hardware details, and installed software`,`Business applications and their portfolio owners`,`Business service offerings and their SLAs`,`Users' email messages and calendar entries`],
a:[0],
e:`Endpoint tools know about devices, hardware, and installed software, which is what their connectors load.

Portfolio data, service offerings, and email aren't endpoint management data.`},

{d:"IN",s:`Before running a new IntegrationHub ETL transform against production data, how can an implementer check what IRE will do?`,
o:[`Use the ETL test run to preview and roll back`,`Run it in production and fix any duplicates afterward`,`Ask IRE to email a summary of the changes it would make`,`ETL transforms can't be tested before they run`],
a:[0],
v:true,
e:`IntegrationHub ETL lets you test with sample data, review what IRE would insert or update, and roll back test results, which catches mapping mistakes early.

Testing in production is risky, and IRE doesn't email previews.`},

{d:"IN",s:`Which engine processes IntegrationHub ETL transformations before sending data to IRE?`,
o:[`The Robust Transform Engine`,`The Performance Analytics engine`,`The Flow Designer approval engine`,`The Service Portal widget engine`],
a:[0],
v:true,
e:`IntegrationHub ETL is built on the Robust Transform Engine (RTE), which transforms source data into the payloads IRE processes.

The other engines handle analytics, approvals, and portal rendering.`},

{d:"IN",s:`A legacy transform map must keep running, but it should go through IRE. What can be used in the transform script?`,
o:[`CMDBTransformUtil, to pass each row through IRE`,`A GlideRecord insert on cmdb_ci, to bypass the transform map entirely`,`A business rule that deletes duplicates after each import completes`,`A client script that blocks duplicate entries on the import form`],
a:[0],
v:true,
e:`CMDBTransformUtil lets a transform map hand records to IRE, so identification and reconciliation apply even for older imports.

Direct inserts bypass IRE, cleaning up afterward treats symptoms, and client scripts don't run during imports.`},

{d:"IN",s:`What is the role of the staging table in an import set?`,
o:[`It holds raw imported data before it's transformed`,`It permanently stores the final CI records that users work with`,`It holds the list of users allowed to run the import`,`It stores the health scores calculated for imported CIs`],
a:[0],
e:`Import sets load raw data into a staging table, and transforms then map it to targets — ideally through IRE for CMDB data. Keeping raw data separate makes troubleshooting easier.

The final CIs live in CMDB tables, and staging tables don't store permissions or scores.`},

{d:"IN",s:`Two sources report the same manufacturer as "Hewlett Packard Enterprise" and "HPE". Why normalize these values during ingestion?`,
o:[`Consistent values make reporting and matching reliable`,`Normalization encrypts manufacturer data so only admins can read it`,`Normalized values are required before the MID Server can start`,`Normalization deletes CIs from manufacturers that aren't recognized`],
a:[0],
e:`Normalizing manufacturer and model data, often through product models, makes counts, lifecycle reporting, and matching reliable.

It isn't encryption, a MID Server prerequisite, or a deletion mechanism.`},

{d:"IN",s:`What is the main benefit of delta imports over full imports for a large integration?`,
o:[`Only changed records are processed, cutting load time and processing`,`Delta imports skip IRE entirely, so they can never create duplicates`,`Delta imports delete every CI that wasn't included in the latest file`,`Delta imports don't need a schedule and run whenever data changes`],
a:[0],
e:`Processing only what changed reduces load on the source and the instance and shortens run times. Periodic full loads can still catch drift.

Delta imports still go through IRE, don't delete unrelated CIs, and still run on schedules.`},

{d:"IN",s:`A Discovery run fails for a group of servers. Where should an administrator start troubleshooting?`,
o:[`The discovery status, logs, and ECC queue for those devices`,`The CMDB Health dashboard's completeness score for the server class`,`The principal class list, to confirm servers are included`,`The CSDM foundation dashboard for missing business applications`],
a:[0],
e:`Discovery status, logs, and the ECC queue show what the MID Server tried and what came back — credential failures, unreachable ports, and pattern errors.

Health scores, principal classes, and CSDM dashboards don't show discovery errors.`},

{d:"IN",s:`When is manual creation the expected way to populate CMDB records?`,
o:[`For logical records no tool can discover, such as business applications`,`For every server, because discovered server data is usually out of date`,`For network devices, because Discovery can't classify switches or routers`,`Never; every CMDB record must be created by an integration or Discovery`],
a:[0],
e:`Logical records such as business applications are defined by people. Even then, they need owners and governance to stay accurate.

Servers and network devices are discoverable, and some records can't come from tools at all.`},

{d:"GV",s:`How is a class's overall CMDB Health score derived?`,
o:[`From its three KPIs, combined by weight`,`From the number of users who opened CIs of the class during the week`,`From the age of the oldest CI in the class compared with the newest`,`From the number of Discovery schedules that target the class`],
a:[0],
v:true,
e:`The overall score combines the three KPIs using configurable weights, so organizations can emphasize what matters most to them.

Usage, CI age, and schedule counts aren't part of the health model.`},

{d:"GV",s:`What is the difference between required and recommended fields for completeness?`,
o:[`Required fields must be populated; recommended fields should be, and both count`,`Required fields are set by users; recommended fields are set by Discovery only`,`Recommended fields are mandatory on the form; required fields are optional`,`They're the same, and the platform uses the terms interchangeably`],
a:[0],
e:`Required fields are must-haves, and recommended fields are expected for useful data. Completeness measures both, so gaps in either lower the score.

Who populates them doesn't define them, and the terms aren't interchangeable.`},

{d:"GV",s:`How does the duplicates metric identify duplicate CIs?`,
o:[`It counts CIs that IRE or remediation processes have flagged as duplicates`,`It compares every CI's short description with every other CI in the class`,`It counts CIs that share the same assigned-to user or support group`,`It counts CIs that were created on the same day by the same source`],
a:[0],
v:true,
e:`Duplicate detection comes from identification — IRE flags CIs that match the same identifiers — and the metric reports those flagged CIs.

Descriptions, assignments, and creation dates don't indicate duplication.`},

{d:"GV",s:`Network devices are discovered weekly, but some manually maintained classes are updated only twice a year. How should staleness be handled?`,
o:[`Set staleness rules per class to fit how each class is actually maintained`,`Use the same short staleness period for every class to keep things simple`,`Turn off staleness for every class, since some classes are manual`,`Delete manually maintained classes so they don't affect the score`],
a:[0],
v:true,
e:`Staleness periods are configurable per class. A period that fits discovered devices would wrongly flag manual classes, which are better covered by certification.

One-size-fits-all settings, disabling staleness, or deleting classes all hide real problems.`},

{d:"GV",s:`Where are orphan rules for a class typically configured?`,
o:[`In CI Class Manager's health settings`,`In the Discovery schedule that populates the class`,`In each CI's form layout, using a UI policy`,`In the user's personal notification preferences`],
a:[0],
v:true,
e:`Orphan rules live with the class's health configuration, defining which relationships a CI of that class should have.

Discovery schedules, UI policies, and notification preferences don't define data rules.`},

{d:"GV",s:`A compliance audit finds production servers without a managed-by group. What can the audit be configured to do?`,
o:[`Create remediation tasks for the failing CIs so owners can fix them`,`Delete the failing CIs so they no longer lower the compliance score`,`Assign the CIs to the CMDB administrator's group automatically`,`Lower the KPI's weight so the failure doesn't affect the overall score`],
a:[0],
v:true,
e:`Audits can generate remediation tasks for failures, turning a score into actionable work.

Deleting CIs, dumping them on admins, or reweighting the KPI all avoid fixing the data.`},

{d:"GV",s:`Remediation tasks for data quality issues need to reach the people who can fix them. What CI attribute is typically used to route them?`,
o:[`The managed-by group`,`The created-by user`,`The discovery source`,`The CI's sys_class_name`],
a:[0],
v:true,
e:`The managed-by group is accountable for maintaining the CI, so it's the natural routing target for data quality tasks.

Creators, sources, and class names don't identify responsibility.`},

{d:"GV",s:`Which CMDB Data Manager policy type asks owners to confirm that CIs still exist and are accurate?`,
o:[`Attestation`,`Archive`,`Deletion`,`Retirement`],
a:[0],
v:true,
e:`Attestation policies send tasks to owners to confirm or update CIs. Retire, archive, and delete policies act on the CIs' lifecycle instead.`},

{d:"GV",s:`How do CMDB Data Manager policies determine which CIs they act on?`,
o:[`With filters or CMDB groups that select the target CIs`,`By acting on every CI in the CMDB at once each time it runs`,`By picking a random sample of CIs each time the policy runs`,`By acting only on CIs whose class is listed as a principal class`],
a:[0],
v:true,
e:`Policies scope their targets with conditions or CMDB groups — for example, "servers not discovered in 90 days".

Acting on everything or at random would be dangerous, and principal classes are about form filtering.`},

{d:"GV",s:`Why should a policy require approval before CIs are deleted?`,
o:[`To confirm CIs aren't still needed before removal`,`Because the platform can't delete CIs without a manager's password`,`To slow the policy down so it doesn't use too much processing`,`Because deleted CIs must be emailed to the auditors first`],
a:[0],
e:`Approval gives owners a chance to catch mistakes — a CI may still be in use or referenced by open tasks — before data is lost.

Passwords, performance throttling, and emailing auditors aren't the reason.`},

{d:"GV",s:`An organization moving to CSDM lifecycle fields has CIs with legacy install status values. What should be done?`,
o:[`Map the legacy values to Life Cycle Stage and Life Cycle Stage Status`,`Delete every CI that uses legacy status values and rediscover them`,`Keep using install status and ignore the CSDM lifecycle fields`,`Copy install status into the CI's description field for reference`],
a:[0],
v:true,
e:`Mapping legacy statuses to the CSDM fields preserves meaning while standardizing on the new model.

Deleting CIs loses history, ignoring CSDM fragments the model, and descriptions aren't structured data.`},

{d:"GV",s:`Who is typically responsible for the definition and data quality of a specific CI class?`,
o:[`The class owner`,`Every user with the itil role`,`The external auditor`,`The MID Server service account`],
a:[0],
e:`Class owners are accountable for how a class is defined and how good its data is, working with the CMDB manager and data stewards.

Broad user groups, auditors, and service accounts don't own data quality.`},

{d:"GV",s:`What is the benefit of documenting a RACI for each important CI class?`,
o:[`Everyone knows who maintains, approves, and uses the class's data`,`It replaces the need for identification rules on those classes`,`It lets the platform skip health calculations for the class`,`It removes the need for Discovery on documented classes`],
a:[0],
e:`Clear roles — who's responsible, accountable, consulted, and informed — prevent data quality gaps from falling between teams.

Documentation doesn't replace identification, health calculations, or Discovery.`},

{d:"GV",s:`The same kind of duplicate keeps appearing — for example, VMs reported by two tools with different name formats. What helps remediate these at scale?`,
o:[`De-duplication templates that define how to resolve that pattern consistently`,`Remediating each duplicate by hand, with each person using their own approach`,`Turning off identification for virtual machine classes until the tools agree`,`Increasing the staleness period for VMs so the duplicates age out of reports`],
a:[0],
v:true,
e:`Templates capture how to resolve a recurring duplicate pattern — which CI to keep and what to merge — so remediation is consistent and faster. Fixing the identification root cause still matters.

Ad hoc fixes are slow, disabling identification causes more duplicates, and staleness doesn't affect duplication.`},

{d:"GV",s:`Besides keeping CI pickers usable, why do principal classes matter for data governance?`,
o:[`They focus governance effort on the classes users actually work with`,`They are the only classes that can have health scores calculated`,`They are the only classes that IRE will identify and reconcile`,`They prevent non-principal classes from being discovered at all`],
a:[0],
e:`Principal classes are the ones most visible to users on tasks, so they're a sensible priority for governance.

Other classes still get health scores, identification, and discovery.`},

{d:"GV",s:`A class that's maintained manually shows many stale CIs, even though the data is accurate. What is a better way to keep that class trustworthy?`,
o:[`Use periodic certification by owners instead of relying on discovery updates`,`Write a script that updates every CI's timestamp each night so none look stale`,`Delete the class's stale CIs and recreate them from a spreadsheet every month`,`Exclude the class from every CMDB report and dashboard so it isn't counted`],
a:[0],
e:`Certification asks owners to confirm data that no tool updates, which is the right control for manual classes. Staleness settings can be adjusted to match.

Faking updates, recreating CIs, or hiding the class all undermine trust.`},

{d:"GV",s:`Why should custom relationship types be avoided where a standard type fits?`,
o:[`Standard types keep maps and impact analysis consistent`,`Custom relationship types are blocked by the platform`,`Standard relationship types are the only ones IRE can store`,`Custom types are automatically deleted at each upgrade`],
a:[0],
e:`Features and reports expect standard relationship types. Custom ones fragment the model and can break impact analysis.

Custom types are allowed and stored, and upgrades don't delete them — they're just harder to govern.`},

{d:"GV",s:`How are CMDB Health scorecard results usually presented to show where action is needed?`,
o:[`With thresholds that color scores by status, such as red, yellow, and green`,`As a single number for the whole company, with no class or KPI breakdown`,`As raw lists of every CI in each class, with no scoring or thresholds applied`,`Only in a spreadsheet export that is sent to CMDB managers once a year`],
a:[0],
e:`Thresholds and color coding make it easy to see which classes and KPIs need attention, with drill-down to details.

A single number hides detail, raw lists lack context, and annual exports are too slow.`},

{d:"GV",s:`A decommissioned server still has old incidents and changes that reference it. What should happen to its CI?`,
o:[`Retire it so its history stays intact`,`Delete it at once so it no longer appears in any CI picker`,`Leave it operational so the old records stay valid`,`Rename it so nobody can find it in searches`],
a:[0],
e:`Retiring keeps the CI and its history for reporting and audit while making clear it's no longer in service. Later archiving and deletion can follow policy.

Deleting breaks references, leaving it operational is inaccurate, and renaming obscures data.`},

{d:"GV",s:`Retired CIs accumulate for years and slow down queries. What does an archive policy do?`,
o:[`Moves retired CIs out of active tables, preserving them`,`Deletes every retired CI immediately with no way to recover it`,`Marks retired CIs operational again so they're used in reports`,`Copies retired CIs into the knowledge base as articles`],
a:[0],
v:true,
e:`Archiving removes old CIs from active tables, improving performance, while keeping them available for history and compliance. Deletion, if needed, comes later.

Immediate deletion loses data, reactivating is wrong, and knowledge articles aren't archives.`},

{d:"GV",s:`How is a certification policy typically set up?`,
o:[`With a CI filter, attributes to certify, and a schedule`,`With a Discovery pattern that certifies attributes during each scan`,`With a reconciliation rule that marks the owner's source as certified`,`With a principal class flag that certifies all CIs in the class`],
a:[0],
v:true,
e:`Certification policies define which CIs, which attributes, and how often owners must confirm them.

Patterns, reconciliation rules, and principal class flags don't certify data.`},

{d:"GV",s:`What is the difference between a compliance audit and a certification?`,
o:[`An audit checks CIs automatically; certification asks people`,`An audit is done only by external auditors; certification is done by Discovery`,`An audit deletes failing CIs; certification archives them`,`There's no difference; the platform uses both names for one feature`],
a:[0],
e:`Audits are automated checks against defined expectations. Certification relies on owners verifying values that rules can't check.

Neither is reserved for external auditors, and neither deletes or archives CIs.`},

{d:"GV",s:`A team wants to add a new custom CI class. What should happen first?`,
o:[`A governance review of whether an existing class fits`,`Create the class directly in production and announce it`,`Add a new table without extending cmdb_ci for flexibility`,`Copy an existing class and rename all of its fields`],
a:[0],
e:`Governance review prevents class sprawl. Often an existing class — or a CSDM-aligned one — already fits.

Creating classes ad hoc, outside the hierarchy, or by copying leads to inconsistent data.`},

{d:"GV",s:`Health inclusion rules already exclude retired servers. How do CMDB groups differ from them?`,
o:[`CMDB groups define named sets of CIs for governance`,`CMDB groups are the only way to exclude CIs from health scores`,`CMDB groups replace identification rules for the CIs they contain`,`CMDB groups decide which data source wins for each attribute`],
a:[0],
e:`Inclusion rules decide what counts in health scoring. CMDB groups define reusable sets of CIs — for certification, Data Manager policies, reporting, and health views.

They don't replace identification or reconciliation.`},

{d:"GV",s:`Two discovery tools report the same servers with different serial number formats, creating duplicates. What is the best fix?`,
o:[`Normalize serial numbers or use lookup rules`,`Turn off one of the tools permanently, even if it has unique data`,`Delete duplicates by hand each week as they reappear`,`Exclude servers from the CMDB Health correctness KPI`],
a:[0],
e:`Making identifying data consistent — by normalizing values or using lookup rules — lets IRE recognize the same server from both sources.

Turning off a source loses data, manual cleanup treats symptoms, and hiding the KPI hides the problem.`},

{d:"GV",s:`An application CI is flagged as an orphan because it has no host relationship. What are the reasonable remediations?`,
o:[`Add the missing relationship if the application is live, or retire it if not`,`Delete the orphan rule so the application and others like it stop being flagged`,`Mark the application's class as a principal class so its orphans aren't checked`,`Change the application's class to a class that doesn't have any orphan rule`],
a:[0],
e:`An orphan either has a missing relationship that should be added or is no longer real and should be retired.

Removing the rule, abusing principal classes, or reclassifying the CI hides the problem.`},

{d:"GV",s:`Where should a CMDB team focus first when starting a health improvement program?`,
o:[`High-value classes used in key processes, like servers and business apps`,`Every class in the CMDB at once, giving each class exactly the same priority`,`The classes with the fewest CIs, because they're the quickest ones to fix`,`Classes that no process uses, since changes there carry no operational risk`],
a:[0],
e:`Starting where data drives incident, change, and other key processes delivers visible value quickly.

Trying to fix everything at once stalls progress, and small or unused classes deliver little value.`},

{d:"GV",s:`Why use CMDB Data Manager policies instead of scheduled scripts to remove old CIs?`,
o:[`Policies give consistent, auditable lifecycle actions with approvals and tasks`,`Scheduled scripts can't run against CMDB tables, so they can't remove any CIs`,`Policies run faster than scripts because they bypass access controls entirely`,`Policies delete CIs immediately, without the delays of any review or approval`],
a:[0],
v:true,
e:`Policies make lifecycle actions governed: defined criteria, approvals, tasks, and a record of what happened. Scripts are easy to get wrong and hard to audit.

Scripts can run, policies respect access controls, and policies include review steps.`},

{d:"GV",s:`A class has completeness at 100%. Does that mean its data is accurate?`,
o:[`Not necessarily — fields can be populated with wrong or outdated values`,`Yes, because complete data is by definition also accurate and up to date`,`Yes, because the platform validates the truth of every value before saving`,`No, because completeness scores are always calculated lower than accuracy`],
a:[0],
e:`Completeness checks that fields are filled, not that values are right. Correctness, audits, and certification address accuracy.

Populated doesn't mean correct, and the platform doesn't validate the truth of every value.`},

{d:"GV",s:`What can be done from the health dashboard when it shows failing CIs?`,
o:[`Drill into them and create remediation tasks`,`Nothing; the dashboard is display-only and can't lead to action`,`Delete all failing CIs in one step from the dashboard`,`Change failing scores to passing directly on the dashboard`],
a:[0],
v:true,
e:`The dashboard is a starting point for remediation, with drill-down and task creation that routes fixes to the right teams.

Mass deletion or overriding scores would undermine the program.`},

{d:"GV",s:`Which statement best describes the goal of CMDB governance?`,
o:[`Keep CMDB data trustworthy enough for the processes that depend on it`,`Load as many CIs into the CMDB as possible, whatever their quality`,`Ensure every CI is discovered by at least three different tools`,`Lock down the CMDB so that only administrators can view it`],
a:[0],
e:`Governance exists so incident, change, security, and other processes can rely on CMDB data. Quality and fitness for purpose matter more than volume.

Multiple sources and restricted visibility don't define the goal.`},

{d:"IS",s:`An analyst wants servers that have had more than five incidents this quarter. Can CMDB Query Builder help?`,
o:[`Yes, queries can include tables such as incidents`,`No, Query Builder can only query CI attributes on a single class`,`No, incidents must be exported and joined in a spreadsheet`,`Yes, but only if each incident is converted into a CI first`],
a:[0],
v:true,
e:`Query Builder can combine CMDB classes with related non-CMDB tables, such as tasks referencing CIs, which makes operational questions like this answerable.

It isn't limited to a single class, and no exports or conversions are needed.`},

{d:"IS",s:`In CMDB Query Builder, how do you find databases two relationship hops away from a business application?`,
o:[`Add the intermediate classes to the query and connect them with relationships`,`Filter the database list by the business application's name in a text field`,`Ask the database owners to list which applications they support`,`Run a Discovery schedule scoped to the business application`],
a:[0],
e:`Query Builder models the path: application → application service or server → database, connected by relationships. That's what lets it traverse hops.

Text filters, surveys, and Discovery don't traverse relationships.`},

{d:"IS",s:`From a CI's record, a responder opens Unified Map. What can they do there?`,
o:[`Expand relationships outward from the CI and see connected CIs`,`Edit the identification rule that applies to the CI's class`,`Run CMDB Health jobs for every CI on the map at once`,`Approve changes for every CI shown on the map`],
a:[0],
v:true,
e:`Unified Map starts from a CI and expands its relationships, so responders can see what it depends on and what depends on it.

Identification rules, health jobs, and change approvals are handled elsewhere.`},

{d:"IS",s:`What is an application service map?`,
o:[`A view of the CIs delivering one application service`,`A list of every application installed on a single laptop`,`A geographic map showing where each datacenter is located`,`A chart of how many incidents each application had last year`],
a:[0],
e:`Service maps show the components behind an application service — load balancers, web servers, databases — and how they connect. They're built by Service Mapping or other population methods.

Installed software lists, datacenter locations, and incident charts are different views.`},

{d:"IS",s:`A database server goes down. How does the CMDB help identify which business services are affected?`,
o:[`Relationships from the server up to services show impact`,`The server's description field lists every service it supports`,`Each service owner is emailed to ask whether they're affected`,`The CMDB Health score shows which services are affected`],
a:[0],
e:`Impact flows through relationships from infrastructure up to application and business services, which is what impacted-service calculations use.

Descriptions aren't structured, emailing owners is slow, and health scores measure data quality.`},

{d:"IS",s:`How can the CMDB help change management detect conflicts?`,
o:[`By flagging other changes or blackout windows on the same or related CIs`,`By approving every change that touches a CI with a high health score`,`By blocking any change submitted outside business hours`,`By assigning every change to the CI's created-by user`],
a:[0],
e:`Conflict detection checks the CIs on a change against other scheduled changes and maintenance or blackout schedules, which depends on accurate CI data.

Health scores don't approve changes, and timing and assignment rules are separate.`},

{d:"IS",s:`How do event management and AIOps use the CMDB?`,
o:[`Alerts are bound to CIs, so service impact can be calculated`,`They replace the CMDB with their own separate inventory`,`They use the CMDB only to send users notifications`,`They don't use CMDB data at all`],
a:[0],
e:`Binding alerts to CIs lets event management group alerts and determine which services are affected.

Event management relies on the CMDB rather than replacing or ignoring it.`},

{d:"IS",s:`How does Vulnerability Response depend on the CMDB?`,
o:[`Vulnerabilities are matched to CIs with owners`,`It stores vulnerabilities as CI classes in the CMDB hierarchy`,`It only uses the CMDB to check user permissions`,`It doesn't use the CMDB; it relies on scanner data alone`],
a:[0],
e:`Matching scanner findings to CIs tells security teams who owns the affected system and what it supports, which drives prioritization and routing.

Vulnerabilities aren't CI classes, and scanner data alone lacks ownership and business context.`},

{d:"IS",s:`What CMDB data does Software Asset Management rely on?`,
o:[`Discovered software installations on devices`,`Business service offerings and their SLAs`,`The CMDB Health correctness score`,`CSDM technical service owners only`],
a:[0],
e:`SAM reconciles discovered software installations against entitlements, so accurate device and software data is essential.

Offerings, health scores, and service owners aren't SAM inputs.`},

{d:"IS",s:`Which report helps assess discovery coverage?`,
o:[`CI counts by class and discovery source over time`,`The number of users with the CMDB admin role`,`A list of open change requests by approver`,`The number of knowledge articles about the CMDB`],
a:[0],
e:`Breaking down CIs by class and source shows what each tool contributes and reveals drops that suggest a broken integration.

Admin counts, change lists, and knowledge counts don't measure coverage.`},

{d:"IS",s:`How can a team find networks that Discovery isn't covering?`,
o:[`Compare known network ranges with the ranges in Discovery schedules`,`Count how many servers each support group owns and compare the totals`,`Check how many incidents mention the word "network" in their descriptions`,`Look for the CIs that have the most relationships to other CIs`],
a:[0],
e:`Comparing known IP ranges with what's scheduled exposes networks that are never scanned.

Ownership counts, incident text, and relationship counts don't reveal coverage gaps.`},

{d:"IS",s:`Which metric best shows the CMDB's value to incident management?`,
o:[`The percentage of incidents with the right CI`,`The total number of CIs in the CMDB at the end of each month`,`The number of CI classes the CMDB team has created this year`,`The number of times users opened the CMDB Workspace each week`],
a:[0],
e:`If incidents reference the right CIs, the CMDB is being used to route, diagnose, and analyze. That's a usage-and-value measure.

CI counts, class counts, and page views don't show value.`},

{d:"IS",s:`An infrastructure team plans maintenance on a storage array. How can they see what will be affected?`,
o:[`Open it in Unified Map and follow relationships up`,`Search the knowledge base for articles that mention the array`,`Check the array's CMDB Health score before scheduling`,`Ask the service desk which users have reported storage issues`],
a:[0],
e:`Following relationships from the array upward shows the servers, applications, and services that depend on it.

Knowledge articles, health scores, and past reports don't show dependencies.`},

{d:"IS",s:`An organization needs to find application services running on operating systems that are past end of support. What's the best approach?`,
o:[`Query application services and their servers' OS versions in Query Builder`,`Ask each application owner to report their operating system by email`,`Filter the business application list by the word "Windows" in its name`,`Run Discovery again and read every server record one by one`],
a:[0],
e:`A relationship query from application services to servers and their OS versions answers this directly and can be saved and reused.

Email surveys are slow, name filters are unreliable, and reading records one by one doesn't scale.`},

{d:"IS",s:`Why is lifecycle reporting on hardware and software models valuable?`,
o:[`It shows which assets are nearing end of life so upgrades can be planned`,`It shows which CIs were created manually instead of being discovered`,`It shows which users opened CIs most frequently last month`,`It shows which Discovery patterns ran the longest last week`],
a:[0],
e:`Lifecycle data on models — end of sale, end of support — turns the CMDB into a planning tool for upgrades and risk reduction.

Creation method, user activity, and pattern runtime are different questions.`},

{d:"IS",s:`During a major incident, how do impacted services help communication?`,
o:[`They identify which business services and users to notify`,`They close the incident once the affected services are listed`,`They replace the need for a major incident manager`,`They let the service desk skip recording affected CIs`],
a:[0],
e:`Knowing which services are affected tells you which stakeholders to update and how widely the outage reaches.

They don't close incidents, replace roles, or remove the need to record CIs.`},

{d:"IS",s:`Stale CIs suddenly spike for one discovery source. What does this most likely indicate?`,
o:[`That source has stopped updating its CIs`,`The CIs have all been certified by their owners recently`,`More users have started using the CMDB Workspace`,`The principal class list was recently expanded`],
a:[0],
e:`A spike concentrated on one source usually means that source broke — expired credentials, a failed schedule, or an API change.

Certification, usage, and principal classes don't cause staleness spikes.`},

{d:"IS",s:`Who benefits most from CMDB Query Builder's visual, no-code approach?`,
o:[`Analysts who need queries without scripts`,`MID Servers that need instructions for running probes`,`External auditors who need direct database access`,`End users who submit requests through the portal`],
a:[0],
e:`Query Builder lets analysts and CMDB managers answer relationship questions without scripting.

MID Servers, auditors needing raw database access, and portal users aren't its audience.`},

{d:"CS",s:`Which records belong to the CSDM foundation domain?`,
o:[`Reference data like companies, locations, and groups`,`Business service offerings and their service level commitments`,`Application services and the infrastructure CIs that support them`,`Business applications and their portfolio lifecycle information`],
a:[0],
v:true,
e:`Foundation data is the shared reference data everything else depends on. Offerings, application services, and business applications belong to other domains.

Getting foundation data right comes first in CSDM adoption.`},

{d:"CS",s:`What is a technical service offering used for?`,
o:[`Defining a specific IT capability with its own support and commitments`,`Listing the software that a business user is allowed to request from the catalog`,`Recording the cost center that pays for each business application`,`Defining which MID Server discovers the CIs behind a technical service`],
a:[0],
e:`Technical service offerings break a technical service into supportable units — for example, "Database hosting – Oracle – Production" — each with support groups and commitments.

Request lists, cost centers, and MID Server assignment are unrelated.`},

{d:"CS",s:`How does the request catalog relate to CSDM service offerings?`,
o:[`Catalog items can be linked to service offerings to show what they fulfill`,`Catalog items replace service offerings entirely once CSDM has been adopted`,`Service offerings can only be requested by administrators, not end users`,`The request catalog has no relationship to services anywhere in CSDM`],
a:[0],
v:true,
e:`Linking catalog items to offerings connects what users request with the services and commitments that fulfill them.

Catalog items don't replace offerings, and offerings aren't admin-only.`},

{d:"CS",s:`What is a dynamic CI group commonly used for in CSDM?`,
o:[`Grouping CIs by query for a technical service offering`,`Deleting CIs automatically when they stop matching the group's query`,`Assigning random CIs to support groups so workloads stay balanced`,`Replacing the identification rules for the CIs that are in the group`],
a:[0],
v:true,
e:`Dynamic CI groups collect CIs by query — such as all production Oracle databases — and relate them to technical service offerings, keeping support and impact accurate as CIs change.

They don't delete CIs, assign at random, or replace identification.`},

{d:"CS",s:`In CSDM, what does an SDLC component represent?`,
o:[`A unit of software built by a development team`,`A deployed production server that hosts the finished software`,`A business service that end users consume through the portal`,`A contract with a software vendor for licenses and support`],
a:[0],
v:true,
e:`SDLC components represent what development teams build and maintain, linking development work to the applications they deliver.

Servers, business services, and contracts are modeled elsewhere.`},

{d:"CS",s:`In the staged CSDM adoption approach, which stage typically adds technical services and technical service offerings?`,
o:[`Walk`,`Crawl`,`Run`,`Fly`],
a:[0],
v:true,
e:`Crawl establishes foundation data, business applications, and application services. Walk adds technical services and offerings. Run adds business services and offerings, and Fly extends further.

Stage contents vary slightly between CSDM versions, so confirm against your version.`},

{d:"CS",s:`Which method can populate an application service with its CIs?`,
o:[`Service Mapping, tags, or a dynamic or manual definition`,`Only by typing CI names into the service's description field`,`Only by importing a spreadsheet each quarter`,`Application services can't contain CIs`],
a:[0],
v:true,
e:`Application services can be populated by Service Mapping, by tags, by dynamic queries, or manually, depending on what's available.

Descriptions and periodic spreadsheets aren't population methods, and services must contain CIs to be useful.`},

{d:"CS",s:`Which relationship connects a business application to an application service in CSDM?`,
o:[`Consumes::Consumed by`,`Runs on::Runs`,`Contains::Contained by`,`Members::Member of`],
a:[0],
v:true,
e:`CSDM relates business applications to the application services that deliver them with "Consumes::Consumed by". Runs on, Contains, and Members describe infrastructure relationships.`},

{d:"CS",s:`Why does CSDM separate business services from application services instead of using one generic service class?`,
o:[`They serve different purposes and audiences, so modeling them separately supports both`,`The platform can only store a limited number of records in one service class`,`Business services are always external, while application services are always internal`,`Separating them is optional and has no effect on any platform features`],
a:[0],
e:`Business services describe what users consume. Application services describe deployed technology. Keeping them separate lets each support its own processes — service portfolio management on one side, operations on the other.

Storage limits aren't the reason, and features depend on the distinction.`},

{d:"CS",s:`What is the difference between a service owner and a business application owner?`,
o:[`A service owner is accountable for a service; an app owner for an application`,`A service owner always manages servers; an app owner always manages users`,`A service owner approves every change; an app owner approves every incident`,`There's no difference; CSDM uses the two titles interchangeably`],
a:[0],
e:`Ownership follows the record: service owners are accountable for services and their offerings, while business application owners are accountable for the application in the portfolio.

Neither role is defined by managing servers or users, or by approving every task.`},

{d:"CF",s:`An identifier entry lists two criterion attributes: serial number and serial number type. How does IRE use them?`,
o:[`Both values must match for the entry to identify a CI`,`Either value matching on its own is enough to identify the CI`,`IRE uses whichever of the two attributes was updated more recently`,`IRE ignores the second attribute unless the first one is empty`],
a:[0],
v:true,
e:`Attributes within one identifier entry are combined: all must match. Alternatives belong in separate entries with their own priorities.

Treating them as "either" would cause false matches.`},

{d:"CF",s:`A higher-priority source has never reported a CI's warranty date, but a lower-priority source does. What generally happens?`,
o:[`The lower-priority source can populate the empty value`,`The value stays empty until the higher-priority source reports it`,`IRE rejects the whole payload from the lower-priority source`,`IRE creates a duplicate CI so each source has its own copy`],
a:[0],
v:true,
e:`Reconciliation protects values an authoritative source has set. Where it has never supplied a value, a lower-priority source can usually fill the gap, so CIs aren't left incomplete.

Rejecting payloads or creating duplicates would defeat IRE's purpose.`},

{d:"CF",s:`How can IRE identify a CI using the key a source system assigns to it, such as a cloud resource ID?`,
o:[`By the source name and source native key stored for that CI`,`By the CI's sys_id, which the source must look up first`,`By matching the CI's description text against the payload`,`It can't; identification only uses class identifier entries`],
a:[0],
v:true,
e:`IRE can match on the combination of source and its native key recorded for a CI, which is useful when sources have stable internal IDs.

Sources don't know the instance's sys_ids, and descriptions aren't identifiers.`},

{d:"CF",s:`What is the difference between a required attribute and an identifying attribute?`,
o:[`Required must be filled in; identifying is used to match existing CIs`,`Required attributes are used for matching; identifying ones are optional`,`Identifying attributes are set by users; required ones are set by Discovery`,`There's no difference; both terms describe the same kind of attribute`],
a:[0],
e:`Required attributes drive completeness and form validation. Identifying attributes are the ones identification rules use to recognize a CI. An attribute can be one, both, or neither.

Who sets them doesn't define them.`},

{d:"CF",s:`In a "Depends on::Used by" relationship from an application to a database, which CI is the parent?`,
o:[`The application, which depends on the database`,`The database, because it stores the data`,`Neither, because relationships have no direction`,`Whichever CI was created first in the CMDB`],
a:[0],
e:`Relationships have direction: the parent is the CI on the "Depends on" side, and the child is "Used by". Direction is what lets impact flow correctly from infrastructure up to services.

Creation order and data storage don't set direction.`},

{d:"IN",s:`Discovery scans are slowing production systems during business hours. What should be adjusted?`,
o:[`The schedule's run time window, so scans run off-hours`,`The CMDB Health weights for the affected classes`,`The principal class list for production servers`,`The identification rules for the scanned classes`],
a:[0],
e:`Schedules control when and how long discovery runs, so moving scans to off-hours and setting a maximum run time reduces load.

Health weights, principal classes, and identification rules don't control scan timing.`},

{d:"IN",s:`Why configure MID Servers in a cluster?`,
o:[`For load balancing and failover, so discovery continues if one fails`,`So each MID Server can discover a different instance of ServiceNow`,`So MID Servers can approve changes on discovered servers`,`So MID Servers can calculate CMDB Health scores locally`],
a:[0],
v:true,
e:`Clusters spread the workload and provide redundancy for discovery and integrations.

MID Servers don't serve multiple instances this way, approve changes, or calculate health.`},

{d:"IN",s:`Which credential type does Discovery typically use for network switches and routers?`,
o:[`SNMP credentials`,`Windows domain credentials`,`Database login credentials`,`Cloud service account keys`],
a:[0],
e:`Network devices are usually discovered over SNMP. Windows credentials are for Windows hosts, database credentials for database exploration, and cloud keys for cloud APIs.`},

{d:"IN",s:`A source system stops reporting a device that was decommissioned. How should the integration handle records missing from the source?`,
o:[`Flag or retire them through governed lifecycle steps`,`Delete the CIs immediately whenever they're absent from one import`,`Ignore missing records, since the CMDB should never change`,`Recreate the CIs from the previous import file each time`],
a:[0],
e:`A missing record may mean decommissioning or a temporary source problem. Marking or retiring through policy preserves history and avoids mass deletion after a bad import.

Instant deletion is risky, and ignoring or recreating records keeps stale data.`},

{d:"IN",s:`During discovery, what does the classification phase determine?`,
o:[`What kind of device it is, which sets its CI class`,`Who owns the device and which group should support it`,`Which business services rely on the device`,`Whether the device's data is complete enough to score well`],
a:[0],
e:`Classification works out the device type — Windows server, Linux server, switch — from probe responses, which determines the class and which patterns run next.

Ownership, service impact, and health scoring come later or from other sources.`},

{d:"IN",s:`A large integration import slows the instance for users during the day. What's the recommended approach?`,
o:[`Schedule large loads off-peak and process changes in deltas`,`Run all imports every hour so that each one is smaller`,`Turn off IRE for the import so that it runs much faster`,`Ask users to log off the instance while the import runs`],
a:[0],
e:`Off-peak scheduling and delta loads reduce load when users need the instance. Disabling IRE trades speed for duplicates, and asking users to log off isn't practical.`},

{d:"IN",s:`Why should every CMDB integration have a named owner?`,
o:[`Someone must notice and fix failures before data goes stale`,`Integrations can't run unless a user is logged in as the owner`,`The owner approves every CI the integration creates`,`The owner becomes the owner of every CI the integration loads`],
a:[0],
e:`Integrations break: credentials expire, APIs change. A named owner who watches run results keeps data flowing.

Integrations run unattended, don't need per-CI approval, and don't set CI ownership.`},

{d:"IN",s:`Agentless discovery fails against servers in a new network segment. What should be checked first?`,
o:[`Whether firewalls allow the needed ports from the MID`,`Whether the servers' business application owners are set`,`Whether the class is listed as a principal class`,`Whether CMDB Health jobs ran the previous night`],
a:[0],
e:`Agentless discovery needs network access — ports such as SSH, WMI/WinRM, and SNMP — from the MID Server to targets. Blocked ports are a common cause of failure.

Ownership, principal classes, and health jobs don't affect connectivity.`},

{d:"GV",s:`Why set target health scores and remediation timeframes for key classes?`,
o:[`They define what "good enough" means and make progress measurable`,`The platform blocks health scoring until targets are configured`,`Targets lower the number of CIs that need to be scored`,`Targets let failing CIs be marked as passing automatically`],
a:[0],
e:`Targets turn health scores into goals teams can be held to, with clear expectations for fixing failures.

Scoring works without targets, and targets don't reduce scope or override results.`},

{d:"GV",s:`What is the difference between a CMDB manager and a data steward?`,
o:[`The manager owns the CMDB program; stewards keep specific data accurate`,`The manager edits every CI personally; stewards only read reports`,`Stewards configure Discovery; managers configure identification rules`,`There's no difference; the titles are interchangeable`],
a:[0],
e:`CMDB managers own strategy, standards, and governance. Data stewards — often within the teams that use the data — maintain quality for their classes or CIs.

Managers don't edit every CI, and the roles aren't defined by tool configuration.`},

{d:"GV",s:`How can the CMDB help detect unauthorized changes to servers?`,
o:[`Compare discovered changes with approved changes`,`Delete any CI whose attributes change between two discovery runs`,`Block Discovery from updating CIs that have open incidents`,`Lower the health score of any CI that has a change request`],
a:[0],
v:true,
e:`When discovered configuration changes don't match an approved change, that's a signal of unauthorized change worth investigating.

Deleting CIs, blocking updates, or penalizing approved changes don't detect anything.`},

{d:"GV",s:`When should a compliance audit use a script instead of a simple filter?`,
o:[`When the check is too complex to express with conditions alone`,`Always, because scripted audits run faster than filter audits`,`Never, because audits can only use filter conditions`,`Only when the audit needs to delete failing CIs`],
a:[0],
v:true,
e:`Filters cover most checks. Scripts handle logic conditions can't express, such as comparing related records. Prefer filters where possible because they're easier to maintain.

Audits shouldn't delete CIs.`},

{d:"GV",s:`Data quality problems are scattered across many classes. What helps find the root causes?`,
o:[`Group failures by data source and class to spot the pattern`,`Fix each failing CI one at a time as it's reported`,`Disable health scoring until every class has been reviewed`,`Ask each support group to fix whatever it notices`],
a:[0],
e:`Grouping by source and class often shows that one integration or mapping causes most failures, so one fix resolves many CIs.

CI-by-CI fixes treat symptoms, and disabling scoring hides the problem.`},

{d:"GV",s:`Relationships between CIs that no longer exist still appear on maps. What should handle these?`,
o:[`Relationship staleness and cleanup rules, alongside CI lifecycle`,`Manual deletion of every relationship each time someone notices`,`A new CI class to store the outdated relationships separately`,`Nothing; stale relationships don't affect maps or impact analysis`],
a:[0],
v:true,
e:`Relationships go stale like CIs do. Governed cleanup keeps maps and impact analysis accurate.

Manual cleanup doesn't scale, new classes don't fix it, and stale relationships do distort impact.`},

{d:"GV",s:`Users keep manually overwriting attributes that Discovery maintains. What helps?`,
o:[`Reconciliation rules and access controls`,`Removing Discovery so manual values are never overwritten again`,`Asking users to note their changes in the CI's description field`,`Raising the staleness period so manual edits last longer`],
a:[0],
v:true,
e:`Reconciliation rules make the authoritative source win, and access controls limit who can edit protected fields.

Removing Discovery loses automation, descriptions don't prevent overwrites, and staleness doesn't control edits.`},

{d:"GV",s:`Why publish CMDB standards, such as class definitions and required attributes?`,
o:[`So everyone populating or using the CMDB follows the same rules`,`So the standards can replace identification and reconciliation rules`,`Because published standards make the CMDB Health score rise automatically`,`Because standards are needed before Discovery can be scheduled`],
a:[0],
e:`Shared standards keep teams and integrations consistent. They complement platform configuration rather than replacing it, and they don't change scores or Discovery on their own.`},

{d:"GV",s:`A new data source is being added to the CMDB. Which governance steps should happen first?`,
o:[`Define its classes, identification, reconciliation priority, and an owner`,`Load all of its data into production first and clean up duplicates later`,`Give it administrator access so it can update any CMDB table`,`Assign it the highest priority for every attribute on every class`],
a:[0],
e:`Planning class mappings, identification, reconciliation precedence, and ownership before loading prevents duplicates and overwrites.

Loading first, broad admin access, or blanket top priority all create data problems.`},

{d:"GV",s:`A CI was archived by policy, but an audit now needs it. What's generally possible?`,
o:[`Archived CIs can be restored, since archiving preserves them`,`Nothing; archived CIs are permanently deleted from the instance`,`The CI must be rediscovered from scratch by a new Discovery run`,`Auditors must read the instance's database backups to find it`],
a:[0],
v:true,
e:`Archiving moves records out of active tables while keeping them, so they can be retrieved when needed. That's why archiving comes before deletion.

Rediscovery or backups aren't needed for archived data.`},

{d:"GV",s:`Many CIs list owners who have left the company. Why is this a governance problem?`,
o:[`Tasks and certifications route to people who can't act on them`,`Former employees can still sign in and edit those CIs`,`The platform deletes CIs whose owners have been deactivated`,`It changes the CI's class to a retired class automatically`],
a:[0],
e:`Stale ownership breaks accountability: remediation tasks, certifications, and approvals go nowhere. Regular ownership checks fix it.

Deactivated users can't sign in, and CIs aren't deleted or reclassified automatically.`},

{d:"GV",s:`Before running a new Data Manager retire policy across thousands of servers, what's a sensible step?`,
o:[`Preview which CIs it will affect and confirm the scope`,`Run it immediately and restore anything removed by mistake`,`Run it only on weekends, with no review of the scope`,`Disable approvals so the policy finishes faster`],
a:[0],
v:true,
e:`Previewing the affected CIs catches a bad filter before it retires the wrong servers.

Running blind, skipping review, or removing approvals invites mistakes.`},

{d:"GV",s:`What role does a CMDB governance board typically play?`,
o:[`Reviews health, sets priorities, and approves model changes`,`Edits CI attributes directly whenever anyone reports a data error`,`Runs Discovery schedules and fixes MID Server credential failures`,`Approves every incident that references a CI before it's assigned`],
a:[0],
e:`A governance board oversees direction: health and priorities, standards, and schema changes such as new classes.

Hands-on data edits, Discovery operations, and incident approval belong to other roles.`},

{d:"GV",s:`Test and development servers make production health scores look worse. What's a reasonable approach?`,
o:[`Score environments separately using inclusion rules or CMDB groups`,`Delete all test and development servers from the CMDB entirely`,`Copy production attribute values onto the test servers' records`,`Turn off health scoring for the entire server class until fixed`],
a:[0],
e:`Separating environments lets each be held to appropriate standards without hiding problems.

Deleting non-production CIs loses useful data, copying values falsifies it, and disabling scoring hides everything.`},

{d:"IS",s:`Which servers aren't related to any application service? How can Query Builder answer this?`,
o:[`Use a "not related" condition to application services`,`Filter the server list by the word "application" in its name`,`Ask each server owner which applications run on their servers`,`Count relationships manually on each server's form`],
a:[0],
v:true,
e:`Query Builder can find CIs that lack a relationship, which is useful for orphan analysis and service mapping coverage.

Name filters, surveys, and manual counts are unreliable or slow.`},

{d:"IS",s:`A Unified Map is too cluttered to read. What helps?`,
o:[`Filter by relationship type, class, or depth to focus the view`,`Delete the relationships that make the map look busy and cluttered`,`Export the map as an image and crop it to the area of interest`,`Rename the CIs on the map so they have shorter display names`],
a:[0],
v:true,
e:`Filters and depth controls narrow the map to what matters for the task.

Deleting relationships destroys data, and cropping images or renaming CIs doesn't help analysis.`},

{d:"IS",s:`During an incident, what extra context can Unified Map show beyond relationships?`,
o:[`Related operational records, such as open incidents, changes, and alerts`,`The personal contact details and home addresses of every user of each CI`,`The full source code of the applications that run on each CI`,`The purchase invoices and payment history for the hardware on the map`],
a:[0],
v:true,
e:`Overlaying active incidents, recent changes, and alerts on the map helps responders spot likely causes.

Personal details, source code, and invoices aren't map overlays.`},

{d:"IS",s:`An analyst needs to find a specific CI quickly. Where should they start?`,
o:[`CMDB search in the CMDB Workspace`,`The Discovery schedule list`,`The identification rule list`,`The system log`],
a:[0],
v:true,
e:`CMDB search is built for finding CIs across classes. Schedules, rules, and logs aren't CI search tools.`},

{d:"IS",s:`Which report most directly supports governance of business applications?`,
o:[`Business apps with no owner or lifecycle status`,`Business applications sorted alphabetically by name`,`Business applications created on a Monday`,`Business applications with the longest descriptions`],
a:[0],
e:`Gaps in ownership and lifecycle data show where portfolio governance is weak. Sorting, creation day, and description length don't.`},

{d:"IS",s:`How can CMDB data help control cloud costs?`,
o:[`By showing cloud resources by owner, revealing unused ones`,`By lowering the price the cloud provider charges per resource`,`By deleting cloud resources whenever their owner is unknown`,`By converting cloud resources into on-premises servers`],
a:[0],
e:`Discovered cloud resources with owners and relationships expose idle or orphaned resources that can be cleaned up.

The CMDB doesn't set prices, and deleting or converting resources isn't its job.`},

{d:"IS",s:`An auditor needs the list of servers in scope for PCI DSS. How can the CMDB help?`,
o:[`Query servers related to the application services that handle card data`,`Ask the security team to keep a separate spreadsheet of PCI servers`,`List every server in the CMDB and mark them all as in scope`,`Look at the CMDB Health score of the server class`],
a:[0],
e:`Relationships from payment application services to their infrastructure define the in-scope set and keep it current.

Spreadsheets drift, marking everything in scope inflates audit cost, and health scores don't define scope.`},

{d:"IS",s:`Which metric best shows that change management is using the CMDB?`,
o:[`The percentage of changes with affected CIs populated`,`The total number of changes raised each month`,`The number of change approvers in the organization`,`The average length of change descriptions`],
a:[0],
e:`If changes reference the CIs they affect, impact analysis and conflict detection can work. The other measures don't show CMDB use.`},

{d:"CS",s:`In CSDM, what does an information object represent?`,
o:[`A type of data an application handles, used to describe its sensitivity`,`A single file stored on a file server and recorded as its own CI`,`A knowledge article that describes how to use a business application`,`A saved report built from CMDB Query Builder results for an application`],
a:[0],
v:true,
e:`Information objects describe the kinds of data a business application handles — such as customer payment data — which helps assess data sensitivity and risk.

They aren't individual files, articles, or reports.`},

{d:"CS",s:`Why should application services carry an environment value, such as production or test?`,
o:[`So impact, support, and reporting can treat environments differently`,`So test environments are deleted automatically each month`,`Because environment determines which MID Server discovers the service`,`Because only production services can be related to business applications`],
a:[0],
e:`Environment lets teams prioritize production incidents, apply different change controls, and report accurately.

It doesn't trigger deletion or MID Server selection, and non-production services can relate to business applications too.`},

{d:"CS",s:`What is a key benefit of adopting CSDM across ServiceNow products?`,
o:[`Products like ITSM, ITOM, and SPM share consistent service data`,`It removes the need for Discovery and service mapping entirely`,`It lets each team define services however it prefers`,`It's required before any CI can be created in the CMDB`],
a:[0],
e:`A common model means service and application data means the same thing everywhere, so reporting and automation work across products.

It doesn't replace discovery, it standardizes rather than fragments, and it isn't a prerequisite for creating CIs.`},
  ],
};
