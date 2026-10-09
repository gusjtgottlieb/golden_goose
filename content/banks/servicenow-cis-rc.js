// ServiceNow CIS-RC question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/servicenow-cis-rc.json.
module.exports = {
  id: "servicenow-cis-rc",
  vendor: "ServiceNow",
  code: "CIS-RC",
  name: "Certified Implementation Specialist – Risk and Compliance",
  fullLength: 60,
  minutes: 90,
  passPercent: 70,
  readinessPercent: 85,
  sectioned: false,
  note: "ServiceNow does not publish a cut score for CIS-RC; community consensus puts it near 70%. Treat 85% here as your readiness bar. Items marked release-sensitive reference table names and labels that shift between releases; verify them against your own instance.",
  domains: [{"id":"OV","name":"GRC Overview","weight":"12%"},{"id":"IP","name":"Implementation Planning","weight":"5%"},{"id":"EF","name":"Entity Framework","weight":"20%"},{"id":"PC","name":"Policy and Compliance","weight":"25%"},{"id":"RK","name":"Risk and Advanced Risk","weight":"25%"},{"id":"CE","name":"Common Elements and Extended Capabilities","weight":"8%"},{"id":"AU","name":"Audit and Advanced Audit","weight":"5%"}],
  Q: [
{d:"OV",s:`What most distinguishes integrated risk management (IRM) from a traditional, siloed GRC program?`,
o:[`IRM replaces internal audit with automated control testing so assurance no longer depends on people`,`IRM ties risk, compliance, and audit to shared, live data for continuous monitoring`,`IRM concentrates on regulatory compliance and leaves enterprise risk decisions to each business unit`,`IRM gives each line of defense its own dedicated platform so their data never overlaps or conflicts`],
a:[1],
e:`The defining shift is integration: one data model, shared entities, and direct links to operational records such as CIs, changes, and incidents. That is what lets controls be monitored continuously instead of sampled once a year in spreadsheets.

IRM supports internal audit rather than replacing it. It covers enterprise risk as much as compliance. And the whole point is one platform across the lines of defense, not one per line.`},

{d:"OV",s:`A compliance team maps a single internal control objective to requirements in ISO 27001, NIST 800-53, and PCI DSS. What business benefit does this illustrate?`,
o:[`Each regulation gets its own independent control set so auditors can trace every requirement cleanly`,`Test once, comply many: one control is evaluated and the result counts toward each mapped regulation`,`Once a control exists, the mapped regulations no longer need to be monitored for future changes`,`Auditors can skip testing any control that maps to more than one regulation because it is pre-validated`],
a:[1],
e:`Mapping overlapping requirements to a common internal control means the organization tests and evidences that control once, and the result rolls up to every authority document it satisfies. That is the main cost driver IRM programs attack.

Separate control sets per regulation multiply testing effort. Regulations still change and must be tracked. Auditors still test mapped controls — the efficiency is in not testing the same thing three times.`},

{d:"OV",s:`Under the three lines model, which function is the third line?`,
o:[`Operational management that owns and manages risk day to day`,`The risk and compliance function that sets frameworks and oversees the first line`,`Internal audit, which provides independent assurance`,`External regulators`],
a:[2],
e:`The first line owns and manages risk in operations, the second line (risk management, compliance) sets frameworks and provides oversight, and the third line (internal audit) provides independent assurance to the board.

Regulators and external auditors sit outside the model. The exam uses this to test which ServiceNow persona maps to which line — audit managers are the third line.`},

{d:"OV",s:`In ServiceNow IRM terminology, what is the difference between a risk and an issue?`,
o:[`A risk is a potential event that could affect objectives; an issue is a known gap that needs remediation`,`A risk is raised by internal auditors during fieldwork; an issue is raised by second-line risk managers`,`They are the same underlying record, presented differently in the risk and compliance applications`,`An issue is simply a risk that has been formally accepted, approved, and closed by its risk owner`],
a:[0],
e:`Risk is forward-looking — something that might happen. An issue is a known gap now: a failed control, a non-compliant attestation, an audit finding. Issues carry owners and remediation plans.

Either can come from any function. They are distinct records. Accepting a risk is a risk response, not a conversion into an issue.`},

{d:"OV",s:`Why does running IRM on the same platform as ITSM, ITOM, and the CMDB matter to a compliance program?`,
o:[`It removes the need to license separate IRM applications because ITSM licensing already covers them`,`Controls and risks can reference the same CIs, changes, and incidents, so evidence comes from live data`,`It lets IT staff approve and publish policies directly, without needing involvement from compliance`,`It automatically marks every CI as compliant with ISO 27001 once the CMDB is populated and healthy`],
a:[1],
e:`When a control about unapproved changes can query the change table directly, or a risk is scoped to a business application CI, evidence is collected from the system of record rather than requested by email. That is the practical meaning of continuous monitoring.

IRM applications are still licensed. Governance roles do not collapse into IT. No data model makes anything compliant automatically.`},

{d:"OV",s:`Which set of applications is generally considered the core of ServiceNow Integrated Risk Management?`,
o:[`Policy and Compliance Management, Risk Management, and Audit Management`,`Incident Management, Problem Management, and Change Management`,`Vendor Risk Management, Security Incident Response, and HR Service Delivery`,`Performance Analytics, Reporting, and Dashboards`],
a:[0],
e:`Policy and Compliance, Risk, and Audit are the foundational IRM applications that CIS-RC centers on. Others — third-party risk, BCM, privacy, operational resilience — extend the same data model.

ITSM processes and reporting tools integrate with IRM but are not part of it. Vendor risk and security incident response are adjacent applications.`},

{d:"OV",s:`What is a control in ServiceNow Policy and Compliance?`,
o:[`A record that describes an external regulation, standard, or framework the organization must follow`,`A policy statement applied to one specific entity, which is then attested to, tested, and monitored`,`A permission that determines which users can read or edit risk and compliance records on the platform`,`A scheduled job that recalculates compliance scores for every policy and authority document nightly`],
a:[1],
e:`A policy statement defines the objective. A control is that objective applied to one entity, and it is the record that gets attested, tested, and monitored by indicators. Its status rolls up into compliance scores.

External regulations are authority documents. Access is governed by roles and ACLs. Score calculation is a platform mechanism, not a control.`},

{d:"IP",s:`A company wants to implement Policy and Compliance and Risk Management across 40 business units and 12 regulations. What is the recommended approach?`,
o:[`Load every regulation and business unit in the first release so the data model is complete from day one`,`Start with a focused, high-value use case and a limited set of entities, prove value, then expand in phases`,`Build custom tables for each business unit first, then migrate to the base data model in a later phase`,`Implement Audit Management before anything else because it has the fewest dependencies on other data`],
a:[1],
e:`Phased delivery starting from a narrow, meaningful scope is the consistent guidance: get the entity model, ownership, and attestation cycle working for one framework, then scale. Big-bang loads generate thousands of controls before owners are ready to act on them.

Customizing before adopting the base model creates technical debt. Audit is typically more valuable once controls exist to test.`},

{d:"IP",s:`Which persona is typically responsible for responding to control attestations?`,
o:[`The compliance manager in the second line`,`The control owner in the first line`,`The internal auditor in the third line`,`The GRC platform administrator`],
a:[1],
e:`Control owners — first-line business users — attest whether their control is designed and operating. Compliance managers define the program and review results; auditors test independently; administrators configure the platform.

Expect persona questions that test which line of defense performs which activity.`},

{d:"IP",s:`Before configuring entity types, what information is most important to gather during planning?`,
o:[`The full list of reports and dashboards that executives expect to see at the end of the first phase`,`Which tables hold in-scope business units and applications, and whether the data is accurate`,`The branding, color scheme, and layout preferences for the risk and compliance workspaces`,`The exact number of fulfiller and business-user licenses purchased for each IRM application`],
a:[1],
e:`Entity types are built on existing platform tables, so scoping depends on knowing where business units, applications, and other in-scope items live and whether the records are trustworthy. Poor source data produces entities with no owners and controls nobody can attest to.

Reporting needs matter later. Licensing and theming do not shape the entity model.`},

{d:"EF",s:`What is an entity in ServiceNow IRM?`,
o:[`Any record risk and compliance work can be scoped to, like a business unit or vendor`,`A user who holds a GRC role and is responsible for attesting to controls or assessing risks`,`A regulation or framework imported from a content provider and broken down into citations`,`A configuration item in the CMDB; other tables cannot represent things in scope for compliance`],
a:[0],
v:true,
e:`Entities are the things you manage risk and compliance for. They can come from any table — CMDB classes, departments, companies, locations — which is why the framework works across use cases. Older releases called them profiles.

Users hold roles, regulations are authority documents, and limiting entities to the CMDB is a common wrong assumption.`},

{d:"EF",s:`Every business application with a criticality of "1 - most critical" must automatically come into scope for risk and compliance. What should you configure?`,
o:[`A scheduled script that copies critical business applications into a dedicated GRC table each night`,`An entity type on the business application table with the condition criticality = 1 - most critical`,`An entity class named "Critical" that business application owners assign to their applications`,`A policy exception that excludes every business application not rated 1 - most critical from scope`],
a:[1],
e:`Entity types define a source table and a condition. Every record that matches becomes an entity, and new matches are picked up automatically, so scope tracks the source data without manual upkeep.

Copying records duplicates data. Entity classes group types rather than select records. Policy exceptions handle deviations from policy, not scoping.`},

{d:"EF",s:`What is the purpose of an entity class?`,
o:[`It defines which source table and filter condition the entities are generated from`,`It groups entity types into broader categories for reporting`,`It sets a default inherent risk score that applies to every entity in that class`,`It stores the attestation schedule and reminders used for controls on those entities`],
a:[1],
e:`Entity classes are a categorization layer above entity types — useful for reporting and for organizing a large entity model. The source table and condition live on the entity type.

Classes carry no scores or schedules.`},

{d:"EF",s:`A new business application is created that matches an existing entity type's condition. That entity type is in scope for two policy statements. What happens?`,
o:[`Nothing happens until an administrator manually runs an entity refresh for that entity type`,`An entity is created automatically, and controls are generated for it from both policy statements`,`An entity is created automatically, but its controls must be added by the compliance manager by hand`,`Both policy statements are duplicated so the new application has its own copies to attest against`],
a:[1],
e:`Entity generation and control generation are both condition-driven: matching records become entities, and policy statements associated with that entity type generate one control per entity. That automation is what keeps scope current.

Policy statements are shared across entities, not duplicated. Manual control creation defeats the purpose of the framework.`},

{d:"EF",s:`A business application is retired and no longer meets its entity type's condition. What is the expected behavior?`,
o:[`The entity and all of its controls and risks are permanently deleted to keep reporting accurate`,`The entity is deactivated and its controls and risks are retired, preserving their history`,`The entity stays active, with its controls still in force, until an auditor formally closes it`,`The application is added back to scope automatically because entities cannot leave once created`],
a:[1],
v:true,
e:`When a source record falls out of scope, the entity is made inactive and the records generated from it are retired rather than deleted, so the compliance and risk history stays available for audit.

Deleting evidence would break audit trails. Leaving it active would misstate current scope.`},

{d:"EF",s:`Leadership wants compliance and risk to roll up from applications to the business units that own them. What enables this?`,
o:[`Entity relationships that place each application below its owning business unit in a hierarchy`,`Adding the owning business unit's name into the description field of every generated control`,`Writing a separate policy for each business unit so its controls can be reported on separately`,`Making business units an entity class so the platform infers which applications belong to them`],
a:[0],
e:`Upstream and downstream entity relationships form the hierarchy that scores and reporting roll up through. Without them, every entity is an island.

Descriptions are not structured data. Separate policies fragment the program. A class label does not create parent-child relationships.`},

{d:"EF",s:`Why is it a poor idea to create an entity type that makes every CI in the CMDB an entity?`,
o:[`Entity types are not permitted to reference CMDB tables, so the configuration would fail to save`,`It creates huge numbers of unowned entities, controls, and risks, adding noise`,`Configuration items cannot be assigned owners, so no one could attest to the generated controls`,`Turning every CI into an entity disables the CMDB Health dashboard for the classes involved`],
a:[1],
e:`Scope should reflect what is material. Each entity multiplies controls and risks across every associated statement, so indiscriminate scoping creates unmanageable workloads and dilutes attention on what matters.

CMDB tables are valid sources, and CIs can have owners. The CMDB dashboard is unaffected.`},

{d:"EF",s:`How does an entity end up with controls?`,
o:[`A compliance manager adds each relevant control to the entity by hand from the control library`,`Its entity type is associated with policy statements, and one control is generated per statement`,`Controls are copied onto the entity directly from the authority documents that are in scope`,`The entity owner chooses which controls apply from a catalog during an annual scoping review`],
a:[1],
e:`Policy statements are scoped to entity types; the platform generates one control per entity per statement. That relationship is the core of the compliance data model.

Authority documents connect through citations to policy statements, not directly to entities. Owners attest to controls rather than choosing them.`},

{d:"EF",s:`Which tables can an entity type use as its source?`,
o:[`Only tables in the CMDB`,`Only tables inside the GRC scoped applications`,`Any table on the platform`,`Only the department and company tables`],
a:[2],
e:`Any table can back an entity type — CMDB classes, core tables such as department, location, and company, or custom tables. That flexibility is why the framework supports such different use cases.

Restricting sources to the CMDB or to GRC tables is a common distractor.`},

{d:"EF",s:`Where does an entity's owner usually come from?`,
o:[`It is always the compliance manager who created the entity type, regardless of the source data`,`From an owner field on the source record that the entity type maps, such as the application owner`,`From the owner listed on the authority document that the entity's controls are mapped to`,`It is assigned round-robin to members of the GRC group when the entity is first generated`],
a:[1],
v:true,
e:`Entity types can map an owner field from the source table, so ownership follows the source data. That owner often becomes the default owner for generated controls and risks, which is why accurate ownership data matters in planning.

Owners do not come from authority documents, and assigning everything to the compliance manager breaks first-line accountability.`},

{d:"EF",s:`An implementer needs to confirm the table that stores entities. Which table is it?`,
o:[`sn_grc_profile`,`sn_compliance_control`,`sn_risk_risk`,`cmdb_ci`],
a:[0],
v:true,
e:`Entities kept their original "profile" table names when the feature was renamed, so entities are stored in sn_grc_profile, entity types in sn_grc_profile_type, and entity classes in sn_grc_profile_class.

Controls and risks have their own tables. cmdb_ci is a possible source table, not where entities live.`},

{d:"EF",s:`Select two benefits of building scope from entity types rather than adding entities manually. (Choose two.)`,
o:[`Scope updates automatically as source records start or stop matching the condition`,`Ownership and attributes stay in sync with the system of record`,`Entity types remove the need for policy statements`,`Entity types prevent controls from failing`],
a:[0,1],
e:`Condition-driven entity types keep scope and ownership aligned with the source data without manual maintenance — new applications come into scope and retired ones fall out.

Policy statements are still what generate controls, and nothing about scoping prevents controls from failing.`},

{d:"PC",s:`A policy statement is associated with an entity type that has 25 entities. Three such statements apply. How many controls are generated?`,
o:[`3`,`25`,`28`,`75`],
a:[3],
e:`One control is generated per entity for each policy statement: 25 entities × 3 statements = 75 controls.

This arithmetic shows why scoping discipline matters — controls multiply quickly.`},

{d:"PC",s:`What is the relationship between an authority document and a citation?`,
o:[`A citation is an internal policy, and the authority document is the record of its approval`,`An authority document is an external regulation; citations are its requirements`,`They are two names for the same record, used differently by compliance and audit teams`,`Citations are attestation responses that control owners submit against an authority document`],
a:[1],
e:`Authority documents represent regulations and frameworks such as ISO 27001 or HIPAA. Citations break them into individual requirements, which are mapped to internal policy statements to show how the organization meets each one.

Internal policies are separate records. Attestations are responses on controls.`},

{d:"PC",s:`How does an authority document's compliance status reflect the organization's actual controls?`,
o:[`The compliance manager enters it manually each quarter after reviewing control owner feedback`,`Its citations map to policy statements, whose controls' statuses roll up into its compliance`,`It is downloaded periodically from the content provider that supplied the authority document`,`It is calculated from the number of issues closed against the authority document's citations`],
a:[1],
e:`The mapping chain is authority document → citations → policy statements → controls. Control results flow back up that chain, so compliance with a regulation reflects how the mapped controls are actually performing.

Manual entry and provider data would not reflect your environment. Closed issues are an input to remediation reporting, not the compliance calculation.`},

{d:"PC",s:`A control owner answers a control attestation indicating the control is not implemented. What is the expected outcome?`,
o:[`The attestation is rejected as invalid and automatically resent to the control owner`,`The control becomes non-compliant, and an issue can be created to track remediation`,`The underlying policy statement is retired because one of its controls has failed`,`The entity is removed from scope until the control owner reports it is implemented`],
a:[1],
e:`Attestation responses set control status. A negative response marks the control non-compliant and, as typically configured, raises an issue so remediation is tracked.

The response is valid evidence — rejecting it would hide the gap. The policy statement and entity scope are unaffected by a single control result.`},

{d:"PC",s:`Which indicator type checks a condition against a table on the platform without requiring a script?`,
o:[`Manual indicator`,`Basic indicator`,`Script indicator`,`Performance Analytics indicator`],
a:[1],
v:true,
e:`Basic indicators evaluate a condition on a table — for example, whether any changes were implemented without approval. Manual indicators require a person to enter results; script indicators run custom logic; PA indicators use Performance Analytics data.

Prefer basic indicators where a condition is enough — they are easier to maintain.`},

{d:"PC",s:`What is the key difference between a control attestation and a control test?`,
o:[`Attestations are performed by internal auditors, while control tests are performed by control owners`,`An attestation is the owner's self-assessment; a control test is an independent check of effectiveness`,`Attestations apply only to IT general controls, while control tests apply to business process controls`,`There is no meaningful difference; the platform uses the two terms interchangeably for the same record`],
a:[1],
e:`Attestation is first-line self-assessment. Control testing is performed by the second or third line to validate that the control is designed properly and operating as intended.

Saying auditors attest and owners test inverts the roles. Attestations apply to any kind of control.`},

{d:"PC",s:`A business unit cannot comply with a policy statement for six months while a system is replaced. What should it request?`,
o:[`Retirement of the policy statement until the replacement system is fully in place`,`A time-bound policy exception with justification and approval, covering the affected controls`,`Deletion of the affected controls so they no longer count against the business unit's compliance`,`A new entity type whose condition excludes the business unit until the system is replaced`],
a:[1],
e:`Policy exceptions formally record an approved, time-bound deviation for specific controls, often with compensating measures. The exception expires, so the gap cannot quietly become permanent.

Retiring the statement or deleting controls affects everyone and destroys history. Rewriting scope to dodge a requirement misrepresents compliance.`},

{d:"PC",s:`Policies need to be made available for employees to read and acknowledge. What capability supports this?`,
o:[`Publishing the policy to a knowledge base and running a policy acknowledgment campaign`,`Emailing PDF copies from the compliance manager's mailbox and tracking replies manually`,`Adding every employee as a control owner so they attest to having read the policy`,`Creating a citation for each employee and mapping it to the relevant policy statements`],
a:[0],
v:true,
e:`Published policies can be surfaced through the knowledge base, and acknowledgment campaigns ask users to confirm they have read them, producing evidence for auditors.

Email gives no tracked evidence. Making employees control owners or citations misuses those records.`},

{d:"PC",s:`Select two events that can make a control non-compliant. (Choose two.)`,
o:[`The control owner responds to an attestation that the control is not in place`,`An indicator associated with the control fails`,`The entity owner's manager changes`,`The policy statement's category is edited`],
a:[0,1],
e:`Attestation responses and indicator results both feed control status. Either can surface a gap.

Organizational changes to the owner's manager and edits to categorization are administrative and do not evaluate the control.`},

{d:"PC",s:`Which state must a policy reach before it is considered in force and available to the organization?`,
o:[`Draft`,`In review`,`Published`,`Retired`],
a:[2],
v:true,
e:`Policies move through a lifecycle from draft, through review and approval, to published. Publishing is the point where the policy is in force; retired policies are no longer in effect.

Draft and review are working states.`},

{d:"PC",s:`How should evidence that a control is operating be provided during an attestation?`,
o:[`Attached to the attestation response or control record, so it stays with the result`,`Emailed to the compliance manager, who files it in a shared mailbox for the auditors`,`Saved in a shared drive folder, with the folder path pasted into a comment on the control`,`Evidence is not needed, because attestations are self-assessments by the control owner`],
a:[0],
e:`Evidence belongs on the record it supports so reviewers and auditors can see it in context. Email and shared drives break the audit trail.

Self-assessments without evidence carry little assurance weight, which is why many programs require it.`},

{d:"PC",s:`An issue has been raised for a non-compliant control. Which outcomes can close it?`,
o:[`Only remediation; issues cannot be closed until the underlying gap has been fixed`,`Remediation, or a formal risk acceptance approved by the appropriate authority`,`Only deletion by the compliance manager once the business has reviewed the gap`,`Issues close automatically after 30 days if no further activity is recorded on them`],
a:[1],
e:`Issues are resolved either by remediating the gap or by formally accepting the risk with appropriate approval. Both leave a record of the decision.

Deletion removes evidence, and nothing should close on a timer.`},

{d:"PC",s:`A policy statement is retired. What happens to the controls generated from it?`,
o:[`They are deleted`,`They are retired, preserving their history`,`They remain active and must be retired individually`,`They are reassigned to another policy statement`],
a:[1],
v:true,
e:`Retirement cascades to generated controls so they stop being attested and monitored, while their history remains for audit.

Deleting them would destroy evidence. Leaving them active would generate work against a statement that no longer applies.`},

{d:"PC",s:`Which table stores controls in Policy and Compliance Management?`,
o:[`sn_compliance_policy`,`sn_compliance_policy_statement`,`sn_compliance_control`,`sn_grc_profile_type`],
a:[2],
v:true,
e:`Controls live in sn_compliance_control, policies in sn_compliance_policy, and policy statements in sn_compliance_policy_statement. Entity types are sn_grc_profile_type.

Know the core tables — they appear in configuration and reporting questions.`},

{d:"PC",s:`What does a policy statement represent?`,
o:[`A specific control as implemented on one entity, with its own owner and attestation history`,`A control objective that generates controls for in-scope entities`,`A single section or requirement of an external regulation, imported from a content provider`,`An employee's recorded acknowledgment that they have read and understood a published policy`],
a:[1],
e:`Policy statements are the requirements inside a policy. Applied to entity types, they generate controls. Mapping them to citations links internal requirements to external regulations.

Per-entity implementations are controls. Regulation sections are citations. Acknowledgments are campaign responses.`},

{d:"RK",s:`What is a risk statement?`,
o:[`A risk recorded against one specific entity, with its own owner and assessment history`,`A reusable risk definition in the library that generates risks for in-scope entities`,`An executive summary of the organization's risk posture, prepared for the board each quarter`,`A formal approval recording that a risk owner has accepted a risk above appetite`],
a:[1],
e:`Risk statements are library entries — "unauthorized access to sensitive data" — that, when associated with entity types, generate a risk record for each entity. This mirrors how policy statements generate controls.

The per-entity record is the risk itself.`},

{d:"RK",s:`Which pairing of definitions is correct?`,
o:[`Inherent risk is exposure after controls are considered; residual risk is exposure before controls`,`Inherent risk is exposure before controls; residual risk is what remains after them`,`Inherent and residual risk are always equal until a target risk assessment has been completed`,`Residual risk is the level the organization wants to reach once planned responses are in place`],
a:[1],
e:`Inherent risk ignores controls. Residual risk reflects the effect of existing controls. Target risk is the desired level after planned responses.

Swapping "before" and "after" controls inverts the definitions; target risk is a separate assessment.`},

{d:"RK",s:`In advanced risk assessment, what does a risk assessment methodology define?`,
o:[`Which users and groups can view, edit, and approve risk records within each entity`,`The assessment types, factors, and scoring used to assess risks consistently`,`The entity hierarchy that risks roll up through for business unit reporting`,`The authority documents and citations that each risk statement is mapped to`],
a:[1],
v:true,
e:`A methodology defines how risk is measured: which assessments are performed (such as inherent, control, residual, target), which factors are asked, and how answers become scores. Consistency across assessments depends on it.

Access, hierarchy, and regulatory mapping are configured elsewhere.`},

{d:"RK",s:`A risk team wants to estimate annual loss in currency using single loss expectancy and annual rate of occurrence. Which approach fits?`,
o:[`Qualitative factors that rate likelihood and impact on a high, medium, and low scale`,`Quantitative factors that calculate annualized loss expectancy as SLE × ARO`,`A policy exception that records the expected loss and its approved duration`,`An entity class that groups the affected entities by their potential financial loss`],
a:[1],
e:`Quantitative assessment produces monetary values; ALE = SLE × ARO is the classic formula. Qualitative factors are rating scales and do not produce currency estimates.

Exceptions and entity classes are unrelated to scoring.`},

{d:"RK",s:`An organization buys cyber insurance to cover the financial impact of a data breach. Which risk response is this?`,
o:[`Accept`,`Avoid`,`Mitigate`,`Transfer`],
a:[3],
e:`Insurance shifts financial consequences to a third party — risk transfer. Mitigation reduces likelihood or impact through controls, avoidance stops the activity, and acceptance takes the risk as is.`},

{d:"RK",s:`What should a well-run program require when a risk is accepted?`,
o:[`Nothing further; accepting a risk simply closes it and removes it from future assessments`,`Approval by an appropriate authority, a documented rationale, and an expiration date`,`Deletion of the related controls, since they no longer need to be attested to`,`Automatic transfer of the risk to internal audit for independent review and sign-off`],
a:[1],
e:`Acceptance is a decision someone must own. Approval, rationale, and an expiry ensure the decision is revisited as conditions change.

Accepting a risk does not close it permanently, remove controls, or hand it to audit.`},

{d:"RK",s:`What is the role of key risk indicators associated with a risk?`,
o:[`They replace periodic risk assessments once enough indicator history has been collected`,`They track signals tied to the risk and flag threshold breaches between assessments`,`They set the inherent risk score directly from the most recent indicator result`,`They store the approvals and rationale recorded when a risk owner accepts the risk`],
a:[1],
e:`KRIs provide continuous signal — for example, the count of critical vulnerabilities older than 30 days — and alert when thresholds are crossed. They complement periodic assessments.

They don't set scores or store approvals.`},

{d:"RK",s:`How is residual risk typically derived in an advanced risk assessment?`,
o:[`By averaging all of the risk's historical assessment scores over the past year`,`From inherent risk, adjusted by assessed control effectiveness`,`From the number of open issues currently linked to the risk and its entity`,`It is copied from the target risk assessment once remediation has been planned`],
a:[1],
v:true,
e:`Residual risk combines the inherent assessment with a control effectiveness assessment. Strong controls reduce residual exposure; weak ones leave it near inherent.

Issue counts and target values are inputs to other decisions, not the residual calculation.`},

{d:"RK",s:`What is the purpose of recording risk events?`,
o:[`To record approvals when a risk owner accepts a risk that exceeds appetite`,`To capture actual losses and near misses and link them to risks`,`To schedule audit engagements for entities that have experienced repeated losses`,`To create new entities automatically for business units affected by an incident`],
a:[1],
e:`Risk events document what actually happened — losses, near misses — and link back to related risks. That history improves estimates, especially in quantitative models.

Approvals, audit scheduling, and entity creation are unrelated.`},

{d:"RK",s:`What does a risk heat map typically plot?`,
o:[`Likelihood against impact`,`Number of controls against number of entities`,`Audit findings against issue age`,`Users against roles`],
a:[0],
e:`Heat maps place risks on a likelihood-versus-impact grid so the most significant risks stand out. The other pairings are not standard risk visualizations.`},

{d:"RK",s:`A risk manager wants to compare a risk's residual score against how much risk the organization is willing to take. What concept applies?`,
o:[`Risk appetite`,`Inherent risk`,`Entity class`,`Citation`],
a:[0],
e:`Risk appetite expresses the level of risk the organization is willing to accept. Residual risk above appetite should drive a response.

Inherent risk is pre-control exposure. Entity classes and citations are structural records.`},

{d:"RK",s:`Ten applications are entities of a type associated with one risk statement. How many risks are generated?`,
o:[`1`,`10`,`20`,`None until each is created manually`],
a:[1],
e:`One risk per entity per associated risk statement: 10 entities × 1 statement = 10 risks. Generation is automatic, just as with controls.`},

{d:"RK",s:`Select two sources that commonly inform risk identification. (Choose two.)`,
o:[`The risk statement library`,`Recorded risk events and incidents`,`The entity class label`,`Deleted CI records`],
a:[0,1],
e:`Library statements provide standard risk definitions, and actual events reveal risks the library may have missed or underweighted.

A class label provides no risk information, and deleted records are not a meaningful input.`},

{d:"RK",s:`Leadership wants a single view of risk for each business unit, including risks on applications the unit owns. What makes this possible?`,
o:[`Risk aggregation through the hierarchy`,`Exporting every risk to a spreadsheet`,`Making every application a business unit`,`A separate risk framework per business unit`],
a:[0],
e:`Because risks belong to entities and entities sit in a hierarchy, risk can roll up from applications to their business units. That is the payoff of modeling entity relationships.

Spreadsheets lose the live connection. Restructuring entities or frameworks to fake a roll-up creates more problems than it solves.`},

{d:"RK",s:`What does a target risk assessment represent?`,
o:[`The risk level the organization aims to reach after planned responses are in place`,`The level of risk exposure before any controls or responses are taken into account`,`The risk level reported by external auditors at the end of their annual engagement`,`The highest score the risk assessment methodology can produce for any single risk`],
a:[0],
e:`Target risk is the desired end state. The gap between residual and target justifies planned remediation work.

Pre-control risk is inherent. External audit opinions and maximum scores are different concepts.`},

{d:"CE",s:`A compliance team wants to load ISO, NIST, and other frameworks with their requirements already mapped to common controls. Which integration supports this?`,
o:[`UCF content import`,`IntegrationHub spoke for Slack`,`Discovery`,`Service Graph Connector for Microsoft SCCM`],
a:[0],
v:true,
e:`The UCF integration imports authority documents, citations, and common controls with their cross-mappings, which accelerates test-once-comply-many programs.

Slack, Discovery, and SCCM integrations serve different purposes.`},

{d:"CE",s:`What does regulatory change management add to a risk and compliance program?`,
o:[`It automatically deletes authority documents that a regulator has replaced or withdrawn`,`It tracks regulatory changes, assesses their impact, and drives updates`,`It replaces policy exceptions with regulator-approved waivers for affected business units`,`It schedules control attestations to coincide with the effective dates of new regulations`],
a:[1],
v:true,
e:`Regulatory change management takes in notices of new or changed regulations, assesses which parts of your program they affect, and drives tasks to update policies and controls.

It doesn't delete documents, replace exceptions, or schedule attestations.`},

{d:"CE",s:`Which is the best example of continuous monitoring using data from another ServiceNow application?`,
o:[`An annual attestation emailed to each control owner with a reminder before the due date`,`An indicator that queries change requests for changes implemented without approval`,`A quarterly spreadsheet review of change logs exported from the change management tool`,`An audit engagement scheduled every three years to test change management controls`],
a:[1],
e:`Continuous monitoring uses indicators against live platform data — here, change records — to detect control failures as they occur. Annual attestations and triennial audits are periodic.`},

{d:"CE",s:`Why do Policy and Compliance, Risk, and Audit share a common issue record?`,
o:[`So remediation is tracked consistently and findings from any source appear in one place`,`Because issues can only be created by auditors, who need to share them with other teams`,`To prevent issues from being assigned to owners outside the application that created them`,`They don't; each application keeps a separate issue table that must be reconciled manually`],
a:[0],
v:true,
e:`A shared issue model means a failed control, an assessed risk, or an audit observation all produce the same kind of remediation record with owners and due dates. Reporting on open findings spans the program.

Issues can come from any source and must be assigned to be worked.`},

{d:"CE",s:`Select two ways IRM extends its value through common platform capabilities. (Choose two.)`,
o:[`Using workflow and notifications to route attestations, approvals, and remediation`,`Using reporting and dashboards to show compliance and risk posture`,`Bypassing role-based access control for GRC data`,`Storing evidence outside the platform by default`],
a:[0,1],
e:`IRM uses standard platform workflow, notifications, reporting, and dashboards, so it behaves like the rest of the platform and is easy to extend.

Bypassing access control or moving evidence off-platform would weaken the program.`},

{d:"AU",s:`What is an audit engagement?`,
o:[`A planned audit, scoped to entities, with activities and testing`,`A single control attestation that an auditor sends to a control owner for completion`,`A formal risk acceptance reviewed and approved by the chief audit executive`,`A policy acknowledgment campaign that internal audit runs for employees each year`],
a:[0],
e:`Engagements are the container for an audit: scope (entities), plan, activities, control tests, and findings. They move through their own lifecycle.

Attestations, acceptances, and acknowledgments belong to other processes.`},

{d:"AU",s:`During fieldwork, an auditor notes a potential weakness. How does this typically progress?`,
o:[`It is recorded as an observation and, if confirmed, an issue is raised for remediation`,`It is recorded directly as a policy exception against the affected policy statement`,`It is added as a new citation on the authority document the weakness relates to`,`It is discussed verbally with management and not recorded until the final report`],
a:[0],
e:`Observations capture findings during the engagement. Confirmed findings become issues with owners and remediation plans, using the same issue model as the rest of IRM.

Exceptions and citations serve different purposes, and unrecorded findings provide no assurance.`},

{d:"AU",s:`What is a key benefit of running Audit Management on the same data as Policy and Compliance?`,
o:[`Auditors can test the controls the business already defined and attested`,`Auditors no longer need to remain independent, since they share data with the first line`,`Audit engagements replace control attestations, so control owners no longer need to respond`,`Controls that have been attested by their owners no longer need any independent testing`],
a:[0],
e:`Shared controls let the third line test what the first and second lines rely on, which reduces duplication and makes findings directly actionable.

Independence still matters, attestations still have a role, and controls still need testing.`},

{d:"OV",s:`Business units complain that risk, compliance, and audit teams each ask them for the same evidence. How does an integrated program address this?`,
o:[`Each team keeps its own evidence repository so requests can be tracked separately`,`Evidence and control results live on shared records that all three functions use`,`Business units stop providing evidence and teams rely on interviews instead`,`Audit takes over all evidence collection on behalf of risk and compliance`],
a:[1],
e:`"Audit fatigue" comes from disconnected programs asking the same questions. When controls, evidence, and results sit on shared records, each function reuses what already exists instead of re-requesting it.

Separate repositories are the cause, not the cure. Interviews alone provide weak assurance, and centralizing everything in audit compromises its independence.`},

{d:"OV",s:`Which executive most commonly sponsors an enterprise risk management program?`,
o:[`The chief risk officer`,`The chief marketing officer`,`The head of facilities`,`The service desk manager`],
a:[0],
e:`The CRO typically owns the enterprise risk framework and is the natural sponsor for risk management on the platform, alongside the chief compliance officer and chief audit executive for their areas.

The other roles are stakeholders at most.`},

{d:"OV",s:`In GRC, what does "governance" refer to?`,
o:[`The technical controls that block unauthorized access to networks and systems`,`How leadership sets direction, assigns accountability, and oversees the business`,`The process of testing controls to confirm they operate effectively over time`,`The regulatory filings and reports submitted to government agencies each year`],
a:[1],
e:`Governance is direction and oversight — strategy, policies, roles, and accountability set by leadership and the board. Risk management and compliance operate within it.

Technical controls, testing, and filings are activities inside the program, not governance itself.`},

{d:"OV",s:`What is the main difference between compliance management and risk management?`,
o:[`Compliance covers meeting obligations; risk covers uncertainty affecting objectives`,`Compliance is performed only by internal audit, and risk management only by IT`,`Compliance is optional for most companies, while risk management is legally required`,`They are identical disciplines that different industries simply name differently`],
a:[0],
e:`Compliance asks "are we meeting our obligations?" Risk asks "what could prevent us from achieving our objectives, and how much exposure do we accept?" They overlap — non-compliance is itself a risk — but they are distinct.

Neither belongs to a single team, and neither is universally optional.`},

{d:"OV",s:`What is a common controls framework?`,
o:[`One set of internal controls mapped to the overlapping requirements of many regulations`,`A separate list of controls kept for each regulation so their requirements never mix`,`A ServiceNow plugin that generates new controls automatically from resolved incidents`,`A framework of controls that applies only to financial reporting under SOX`],
a:[0],
e:`A common controls framework rationalizes overlapping requirements into one internal control set, mapped to each regulation. It's the structure behind test-once-comply-many.

Keeping separate control lists per regulation is the problem it solves.`},

{d:"OV",s:`What is the main advantage of continuous monitoring over periodic control assessments?`,
o:[`It removes the need for control owners because monitoring runs on its own`,`It shortens the time between a control failing and someone noticing`,`It guarantees that controls never fail between scheduled assessments`,`It removes the need to map controls to regulations and authority documents`],
a:[1],
e:`Periodic assessments can leave a failure undetected for months. Continuous monitoring evaluates data on a schedule and surfaces failures soon after they happen.

Owners still remediate, controls still fail, and regulatory mapping still matters.`},

{d:"OV",s:`What is a risk register?`,
o:[`A catalog of identified risks with owners and responses`,`A list of every user who holds the risk manager or risk admin role`,`A log of every configuration change made to the risk application`,`A register of external regulations and standards the company follows`],
a:[0],
e:`The risk register is the inventory of risks the organization is managing — who owns them, how they're rated, and what's being done. In ServiceNow, risk records against entities form it.

User lists, audit logs, and regulation lists are separate things.`},

{d:"OV",s:`Why do organizations use control self-assessment?`,
o:[`To replace independent internal audit entirely with first-line reviews`,`To have the people operating controls evaluate them and surface gaps early`,`To let control owners approve their own policy exceptions without review`,`To avoid the effort of documenting controls in a formal control library`],
a:[1],
e:`Self-assessment puts first-line owners in the habit of checking their own controls, which surfaces problems earlier and cheaper than waiting for audit.

It complements independent assurance rather than replacing it, and it doesn't extend to approving exceptions.`},

{d:"OV",s:`What is a key control?`,
o:[`A control whose failure would leave a significant risk unaddressed`,`Any control that relies on encryption keys or key management systems`,`A control owned by a member of the executive leadership team`,`The first control created when a new policy statement is published`],
a:[0],
e:`Key controls are the ones the organization relies on most to address significant risks or requirements. They typically receive more frequent testing and closer scrutiny.

The term has nothing to do with encryption, seniority of the owner, or creation order.`},

{d:"OV",s:`Why automate control evidence collection where possible?`,
o:[`It cuts manual effort and yields more consistent, timely evidence`,`Automatically collected evidence never needs to be reviewed by anyone`,`Regulators accept only automated evidence for technology controls`,`It removes the need for control owners once collection is automated`],
a:[0],
e:`Automated evidence — from indicators querying platform data — is consistent, timely, and cheap to collect repeatedly.

It still needs review, regulators accept many forms of evidence, and owners still own the control.`},

{d:"OV",s:`Which is a characteristic of a mature integrated risk management program?`,
o:[`Decisions draw on current, shared risk data from across the business`,`Each department assesses risk once a year in its own spreadsheet`,`Compliance and risk teams use separate tools that never share data`,`Issues are tracked in email threads until audit asks to see them`],
a:[0],
e:`Maturity means risk is part of decision-making and based on current, integrated data. The other options describe the siloed, periodic programs that IRM replaces.`},

{d:"IP",s:`During implementation, who is typically responsible for configuring entity types, policy settings, and assessment templates?`,
o:[`A GRC administrator or implementer with the right admin role`,`Each control owner, for the controls assigned to them`,`The external auditors who will review the program each year`,`Any user who has read access to risk and compliance records`],
a:[0],
v:true,
e:`Program configuration belongs to administrators with GRC admin roles, working with compliance and risk managers to reflect agreed design.

Control owners attest; auditors stay independent; read-only users can't configure anything.`},

{d:"IP",s:`What is the recommended approach when existing processes don't match the base application?`,
o:[`Customize the application heavily to mirror every existing process step`,`Document processes, adopt base functionality, and justify deviations`,`Delay the implementation until the base application matches current processes`,`Replace the base tables with custom ones built from scratch`],
a:[1],
e:`Adopting base functionality keeps upgrades simple and gets value sooner. Customize only where there's a clear, justified need.

Heavy customization creates technical debt, waiting gains nothing, and replacing base tables abandons the platform's capabilities.`},

{d:"IP",s:`Why should success measures be defined early in an IRM implementation?`,
o:[`They let the team show value, such as on-time attestations or fewer audit findings`,`They are a technical prerequisite that must be met before the plugins can be activated`,`They replace the need for a project plan, since they describe what will be delivered`,`They determine how many fulfiller and business-user licenses need to be purchased`],
a:[0],
e:`Defining measures up front — attestation completion rates, time to remediate issues, audit findings — gives the program a way to prove value and steer.

They aren't technical prerequisites, plans, or licensing inputs.`},

{d:"IP",s:`Why involve control owners and business users early in the implementation?`,
o:[`Their adoption decides whether attestations and remediation happen`,`They need to write the scripts and code that the application relies on`,`They must approve and sign the platform license agreement before go-live`,`They are responsible for configuring the entity types and policy settings`],
a:[0],
e:`IRM depends on first-line participation. Owners who understand why the program matters and how to use it respond to attestations and fix issues; owners who are surprised by it don't.

They don't code, sign licenses, or configure the platform.`},

{d:"EF",s:`An administrator narrows an entity type's condition so that fewer records match. What happens to entities whose records no longer match?`,
o:[`They remain active and keep their controls until someone removes them manually`,`They become inactive, and their generated controls and risks are retired`,`They move automatically to whichever other entity type their records still match`,`They are permanently deleted along with all of their compliance and risk history`],
a:[1],
v:true,
e:`Entity membership follows the condition. Records that no longer match fall out of scope, and the records generated from them are retired rather than deleted.

Entities don't move to other types on their own, and history is preserved.`},

{d:"EF",s:`Business units should be entities so policies can be assigned to them. Which table is a typical source?`,
o:[`The department or business unit table`,`The incident table, filtered by assignment group`,`The user preferences table for managers`,`The system log table for each department`],
a:[0],
e:`Organizational tables such as department (cmn_department) or business unit are the natural sources for organizational entities.

Incidents, preferences, and logs are transactional or system data, not things you scope compliance to.`},

{d:"EF",s:`A company wants every active vendor to be an entity so it can assess third-party risk. What is a typical entity type configuration?`,
o:[`The company table, with a condition such as vendor = true and status = active`,`The user table, filtered to users whose email address uses a vendor's domain`,`The incident table, filtered to incidents that were raised by vendor contacts`,`A manually maintained spreadsheet of vendors imported into a custom table`],
a:[0],
e:`Vendors are usually companies flagged as vendors, so the company table with a vendor condition generates vendor entities automatically.

Users and incidents don't represent vendors, and spreadsheets lose automation.`},

{d:"EF",s:`An application's owner changes in the CMDB. Why does it matter that the entity type maps its owner field from the source record?`,
o:[`The entity owner stays in sync with the system of record automatically`,`It prevents the application's owner from ever being changed in the CMDB`,`It deletes the previous owner's user record once the new owner is set`,`It forces a new risk assessment every time the application owner changes`],
a:[0],
v:true,
e:`Mapping ownership from the source keeps the entity's owner current as the source changes, so attestations and tasks route to the right person.

Mapping doesn't freeze ownership, delete users, or trigger assessments.`},

{d:"EF",s:`In an entity hierarchy, what does "upstream" mean?`,
o:[`The parent entity others roll up to, such as a business unit above its apps`,`The entity that was created most recently within the same entity type`,`An entity that is owned and managed by an external third party`,`An entity that currently has one or more failing or non-compliant controls`],
a:[0],
e:`Upstream entities sit above others in the hierarchy; downstream entities sit below and roll up into them.

The terms describe position in the hierarchy, not age, ownership, or status.`},

{d:"EF",s:`How can relationships between entities be created automatically from existing data?`,
o:[`With entity type relationships based on reference fields between source tables`,`By creating each relationship by hand on the entity form, one entity at a time`,`By importing the relationships from the authority document's citation hierarchy`,`They can't be automated; relationships must be maintained in a separate spreadsheet`],
a:[0],
v:true,
e:`Entity type relationships can use references between source records — such as an application's owning department — to build the entity hierarchy automatically.

Manual relationships don't scale, and authority documents contain no organizational structure.`},

{d:"EF",s:`Which statement about a single entity is true?`,
o:[`It can have controls, risks, and audit scope associated with it at once`,`It can be used only by Policy and Compliance, not by Risk or Audit`,`It must be duplicated so each IRM application has its own copy to use`,`It can have controls or risks associated with it, but never both together`],
a:[0],
e:`Entities are shared across IRM applications. The same application entity can have controls, risks, indicators, and be in audit scope — which is what makes integrated reporting possible.

Duplicating entities per application would recreate silos.`},

{d:"EF",s:`A policy statement should apply only to business applications that process payment data. Most business applications don't. What is a clean way to scope it?`,
o:[`Create a narrower entity type for payment-processing applications and use it`,`Associate it with all business applications and have owners ignore extra controls`,`Create the needed controls manually on each payment-processing application`,`Add the payment requirement to the description of every related policy statement`],
a:[0],
e:`A narrower entity type, using a condition such as "processes cardholder data = true", generates controls only where the requirement applies.

Over-scoping creates noise, manual controls lose automation, and descriptions aren't scoping.`},

{d:"EF",s:`A server is both a production asset and part of the PCI environment, and two entity types match it. What is the expected behavior?`,
o:[`A single entity is associated with both entity types`,`Two duplicate entities are created for the same server`,`The platform rejects the second entity type`,`The server is excluded from both entity types`],
a:[0],
v:true,
e:`One record yields one entity, which can belong to several entity types. Each type contributes its own policy statements and risk statements, so there's no duplication.

Duplicates would split history, and overlapping types are normal.`},

{d:"EF",s:`What is the difference between an entity owner and a control owner?`,
o:[`The entity owner is accountable for the entity; a control owner operates one control`,`They are always the same person, and the platform won't allow them to differ`,`The control owner approves entity types, while the entity owner writes the policies`,`Entity owners are always auditors, while control owners are always risk managers`],
a:[0],
e:`Ownership can be split: an application owner may own the entity while specific controls belong to the DBA team or security operations. Control owners often default from the entity owner, but they can be reassigned.

Neither role writes policies or audits.`},

{d:"EF",s:`How does the entity framework support audit planning?`,
o:[`Engagements can be scoped to entities, bringing in their controls, risks, and issues`,`Auditors must create their own separate copy of each entity before planning begins`,`Entities are hidden from audit users to preserve the independence of the third line`,`Audit planning uses only authority documents, so entities play no part in it`],
a:[0],
e:`Scoping engagements by entity brings the related controls, risks, and issues into the audit, so auditors work from the same picture as the first and second lines.

Copies would break the integrated model.`},

{d:"EF",s:`Should a company use business applications or individual application services as entities for application controls?`,
o:[`Whichever level matches where ownership sits and controls are operated`,`Always application services, because there are more of them to assess`,`Always business applications, because they're stored in the CMDB`,`Neither, because applications aren't allowed to be used as entities`],
a:[0],
e:`Choose the level where accountability and control operation sit. If controls differ between production and test, application services may be right. If one owner manages the whole application, the business application may be enough.

Counting records isn't a design principle, and both are valid sources.`},

{d:"EF",s:`Physical security controls must be attested for each office. What is a sensible entity source?`,
o:[`The location table, filtered to offices`,`The user table, filtered to facilities staff`,`The change request table`,`The knowledge base`],
a:[0],
e:`Locations represent offices, so a location-based entity type gives each office its own physical security controls.

Facilities staff are owners, not scope. Changes and articles aren't places.`},

{d:"EF",s:`Controls are being generated without owners. What is the most likely root cause?`,
o:[`The source records behind the entities have no value in the mapped owner field`,`The policy statements are still unpublished, so owners can't be assigned yet`,`The authority documents are missing citations, so ownership can't be derived`,`The risk heat map hasn't been configured, which blocks owner assignment`],
a:[0],
v:true,
e:`Owners flow from the source data through the entity. If the mapped owner field is empty on the source records, generated controls have no one to route to. Fix the source data or the mapping.

Policy state, citations, and heat maps don't affect ownership.`},

{d:"EF",s:`Where can a compliance manager see the controls, risks, issues, and indicators related to a single entity?`,
o:[`On the entity record and its related views`,`Only in a custom report built for each entity`,`Only by exporting each table to a spreadsheet`,`Nowhere; that information isn't connected`],
a:[0],
e:`The entity is the hub of the data model, so its record and related views bring together everything scoped to it.

Custom reports and exports are possible but unnecessary for this.`},

{d:"EF",s:`A source record behind an entity is deleted. What should happen?`,
o:[`The entity becomes inactive and its records are retired, keeping history`,`The entity is recreated automatically from the related authority document`,`Nothing happens; the entity stays active indefinitely without a source`,`All related issues are closed automatically and marked as remediated`],
a:[0],
v:true,
e:`Without a source record, the entity is no longer in scope. Retiring rather than deleting keeps the history auditors need.

Entities don't come from authority documents, staying active misstates scope, and closing issues as remediated would be false.`},

{d:"EF",s:`Only applications that are in production should be in scope for an application entity type. How should this be handled?`,
o:[`Include an operational status condition in the entity type`,`Create entities for all applications and retire non-production ones by hand each month`,`Ask application owners to decline attestations for non-production applications`,`Create a separate policy for non-production applications that has no statements`],
a:[0],
e:`Conditions on the entity type keep scope accurate automatically as application status changes.

Manual cleanup, declined attestations, and empty policies are workarounds for a missing condition.`},

{d:"EF",s:`A compliance team wants Linux servers and Oracle databases in scope for the same hardening policy. How many source tables can a single entity type use?`,
o:[`One, so use one entity type per table or a shared parent class`,`Any number of tables, listed together in the entity type's source table field`,`None, because entity types reference entity classes rather than tables directly`,`Two at most, one primary table and one secondary table for related records`],
a:[0],
v:true,
e:`An entity type points at one table. To cover servers and databases, create one entity type for each, or use a common parent class such as cmdb_ci with a condition that selects both. Either way, the policy statement can be associated with each type.

Entity types reference tables, not classes, and there's no multi-table field.`},

{d:"PC",s:`How do policies, standards, and procedures typically relate in a policy framework?`,
o:[`Policies state intent, standards set specific requirements, procedures give steps`,`Procedures are the highest level, and policies hold the most detailed instructions`,`Standards are optional guidance that teams can choose whether or not to follow`,`They are three names for the same document, used interchangeably by different teams`],
a:[0],
e:`Policies express what the organization commits to, standards make it specific and measurable, and procedures explain the steps. ServiceNow lets you model them so controls trace back to the right level.

Inverting the hierarchy or treating standards as optional misunderstands the framework.`},

{d:"PC",s:`Who is responsible for a policy's content and its periodic review?`,
o:[`The policy owner`,`Every control owner`,`The platform administrator`,`The external auditor`],
a:[0],
e:`Policy owners maintain the content and keep it current. Approvers sign off, control owners operate controls under it, and auditors evaluate it independently.`},

{d:"PC",s:`A policy should be reviewed every year to make sure it is still accurate. How is this best supported?`,
o:[`Set a review frequency or next review date on the policy to trigger a review`,`Ask the policy owner to remember to check the policy around the same time each year`,`Republish the policy automatically every year so it is always marked as current`,`Delete the policy and recreate it from scratch every year with updated content`],
a:[0],
v:true,
e:`Review dates and cadence fields make the review a tracked obligation instead of something people have to remember.

Automatic republishing skips the review, and recreating policies destroys history.`},

{d:"PC",s:`A published policy needs a substantive change. What is the appropriate way to handle it?`,
o:[`Revise it through the lifecycle so the change is reviewed and approved first`,`Edit the published text directly so the change takes effect immediately for everyone`,`Retire the policy and stop tracking it, since the content is now out of date`,`Email the change to employees and leave the published record as it is`],
a:[0],
v:true,
e:`Changes go back through review and approval so the published version always reflects something that was approved, and the history shows what changed.

Editing in place bypasses approval, retiring abandons the requirement, and email leaves the record wrong.`},

{d:"PC",s:`An authority document has sections, subsections, and individual requirements. How are these represented?`,
o:[`As a hierarchy of citations`,`As separate authority documents for each subsection`,`As policy statements under the authority document`,`As attachments on the authority document record`],
a:[0],
v:true,
e:`Citations can be organized hierarchically to mirror the document's structure, and individual requirement citations are what get mapped to policy statements.

Splitting into many authority documents fragments reporting; policy statements are internal; attachments aren't mappable.`},

{d:"PC",s:`Which statement about mapping citations to policy statements is true?`,
o:[`Many-to-many: statements and citations can each map to several of the other`,`Each citation must map to exactly one policy statement, so coverage stays easy to trace`,`Each policy statement can map to only one citation, from one authority document`,`Citations map to controls directly, so policy statements aren't involved in the mapping`],
a:[0],
e:`Regulations overlap and requirements can be broad, so mappings go both ways. That flexibility is what lets one internal requirement satisfy many regulations.

Citations connect to policy statements, which in turn generate controls.`},

{d:"PC",s:`A control requires a manager to approve user access requests before access is granted. What type of control is this?`,
o:[`Preventive`,`Detective`,`Corrective`,`Compensating`],
a:[0],
e:`Approval before access stops the problem from happening, which makes it preventive. Detective controls find issues after the fact, corrective controls fix them, and compensating controls stand in when a primary control can't be met.`},

{d:"PC",s:`A monthly review of firewall logs identifies unauthorized connection attempts. What type of control is this?`,
o:[`Detective`,`Preventive`,`Directive`,`Deterrent`],
a:[0],
e:`Reviewing logs to find events that already happened is detective. Preventive controls block events, directive controls instruct behavior (like policies), and deterrent controls discourage attempts.`},

{d:"PC",s:`Why are automated controls often preferred over manual ones where feasible?`,
o:[`They run consistently and can be monitored continuously with less effort`,`Automated controls never fail once they have been configured correctly`,`Auditors don't accept manual controls as evidence for any regulation`,`Automated controls don't need an owner because the system operates them`],
a:[0],
e:`Automated controls run the same way every time and lend themselves to indicator-based monitoring.

They can still fail or be misconfigured, manual controls are accepted, and automated controls still need owners.`},

{d:"PC",s:`How is the frequency of control attestations typically managed?`,
o:[`With an attestation schedule configured for the relevant controls`,`Control owners attest whenever they happen to have time available`,`Attestations run only when an auditor specifically requests them`,`Attestations are sent to every control owner every single day`],
a:[0],
v:true,
e:`Scheduled attestations ensure controls are assessed at a defined cadence, such as quarterly or annually, depending on the control.

Ad hoc timing gives inconsistent coverage, waiting for auditors defeats self-assessment, and daily attestations create fatigue.`},

{d:"PC",s:`What platform capability is used to design the questions in a control attestation?`,
o:[`The assessment designer`,`Flow Designer subflows built for each policy statement`,`The service catalog item designer and its variable editor`,`The knowledge article editor used for published policies`],
a:[0],
v:true,
e:`Attestations are assessments, so their questions are built with the assessment designer. Flows orchestrate processes, catalog items handle requests, and knowledge articles hold content.`},

{d:"PC",s:`Where are the outcomes of each indicator run recorded?`,
o:[`As indicator result records linked to the indicator and its control`,`In the system log only, where administrators can search for them`,`As attachments added to the related policy after each run completes`,`They aren't stored; only the latest pass or fail status is shown`],
a:[0],
v:true,
e:`Each run produces an indicator result, so you have a history of passes and failures over time — useful as evidence and for spotting trends.

Logs and attachments aren't the evidence model, and history is kept.`},

{d:"PC",s:`A team already tracks "percentage of servers patched within 30 days" as a Performance Analytics KPI. What is the simplest way to use it for a control?`,
o:[`A Performance Analytics indicator using the existing KPI with a threshold`,`A script indicator that recalculates the patching percentage from scratch`,`A manual indicator where someone types the KPI value in each month`,`An attestation asking the control owner to estimate the percentage`],
a:[0],
v:true,
e:`PA indicators reuse existing PA data and apply a threshold, so you don't rebuild the metric.

Rewriting the calculation duplicates work, and manual entry or estimates weaken evidence.`},

{d:"PC",s:`An indicator fails. What can a well-configured indicator do automatically?`,
o:[`Create an issue for the related control`,`Delete the related control from the entity`,`Retire the parent policy statement`,`Approve a policy exception for the owner`],
a:[0],
v:true,
e:`Indicators can be configured to raise issues on failure, turning a detected problem into tracked work.

Deleting controls, retiring statements, or approving exceptions are decisions for people, not automated outcomes of a failed check.`},

{d:"PC",s:`What is the difference between testing a control's design effectiveness and its operating effectiveness?`,
o:[`Design asks if the control would work as described; operating asks if it actually ran that way over time`,`Design effectiveness is tested by control owners, while operating effectiveness is tested by vendors`,`Operating effectiveness is tested only once, when the control is first created and approved`,`They are the same test performed twice, once by the first line and once by internal audit`],
a:[0],
e:`A well-designed control can still fail in practice, and a control that runs every day can still be poorly designed. Testing both gives full assurance.

Who tests and how often depends on the program, not on these definitions.`},

{d:"PC",s:`How does a policy statement's compliance status relate to its controls?`,
o:[`It reflects the status of its generated controls across in-scope entities`,`It is set manually by the policy owner at the end of each quarter`,`It is copied from the compliance status of the mapped authority document`,`It has no relationship to its controls and is reported separately`],
a:[0],
e:`Control results roll up to the policy statement, showing how well that requirement is met across the organization, and further up to policies and authority documents.

Manual entry and copying from authority documents wouldn't reflect reality.`},

{d:"PC",s:`A policy exception expires. What should happen to the affected controls?`,
o:[`They return to normal assessment, and any remaining gap shows as non-compliance`,`They remain exempt permanently, since the exception has already been approved once`,`They are deleted, because the exception means they no longer need to be tracked`,`The policy statement is retired automatically for every entity in scope`],
a:[0],
v:true,
e:`Exceptions are time-bound by design. When one expires, the controls are assessed normally again, so an unresolved gap becomes visible.

Permanent exemption or deletion would hide the gap, and the statement still applies to everyone else.`},

{d:"PC",s:`A system can't enforce multifactor authentication, so the team adds extra monitoring and quarterly access reviews instead. What are these additional measures called?`,
o:[`Compensating controls`,`Key risk indicators`,`Citations`,`Entity classes`],
a:[0],
e:`Compensating controls reduce risk when a required control can't be implemented. They're often documented as part of a policy exception.

KRIs measure risk, citations are regulatory requirements, and entity classes are scoping categories.`},

{d:"PC",s:`A new security policy should be acknowledged only by employees in the engineering department. How should the campaign be set up?`,
o:[`Target the campaign to users who meet the engineering department criteria`,`Send the campaign to all employees and ask everyone else to ignore it`,`Make each engineer a control owner for the policy so they attest to it`,`Create an entity for each engineer so the policy applies to them directly`],
a:[0],
v:true,
e:`Acknowledgment campaigns can target an audience by criteria, so only the right people receive them and completion rates mean something.

Over-sending creates noise, and controls or entities aren't the mechanism for acknowledgment.`},

{d:"PC",s:`A control owner leaves the company. What is the best way to keep the control assigned correctly?`,
o:[`Update ownership so attestations route to the new owner`,`Leave the control assigned to the former employee until an auditor notices`,`Delete the control now and recreate it once a replacement owner is hired`,`Mark the control compliant until a new owner has been found and assigned`],
a:[0],
e:`Reassigning ownership, ideally by correcting the source data that feeds entity ownership, keeps the control accountable without losing history.

Orphaned assignments, deleted controls, and false compliance all create audit findings.`},

{d:"PC",s:`A single citation requires both encryption at rest and encryption in transit, which are separate policy statements. How is this mapped?`,
o:[`Map the citation to both statements, so its compliance depends on both`,`Map only the more important statement, since one mapping is enough`,`Split the citation into two separate authority documents, one per statement`,`Create a new policy statement that copies the text of both existing ones`],
a:[0],
e:`A citation can map to several statements when meeting it takes more than one internal requirement. Its compliance then reflects all of them.

Mapping one would overstate compliance, splitting authority documents breaks fidelity to the source, and duplicating statements creates redundant controls.`},

{d:"PC",s:`A control doesn't apply to a particular entity — for example, a database control on an application with no database. What is the right handling?`,
o:[`Record it as not applicable with a justification`,`Mark it compliant so it doesn't lower the score`,`Leave the attestation unanswered indefinitely`,`Delete the entity so the control disappears`],
a:[0],
v:true,
e:`A documented not-applicable decision is honest and auditable, and it shouldn't distort compliance scores. If it happens a lot, the entity type scoping needs refining.

Marking it compliant is misleading, and the other options create noise or lose data.`},

{d:"PC",s:`The chief compliance officer wants to see how compliant the company is with each regulation. What is the most direct view?`,
o:[`Compliance by authority document`,`A list of all controls, sorted by their creation date`,`A count of the entity types configured on the instance`,`The number of users who hold compliance-related roles`],
a:[0],
e:`Authority document compliance shows each regulation's status, built from the mapping chain down to controls. That's what regulators and executives ask for.

The other views say nothing about regulatory compliance.`},

{d:"RK",s:`What is the purpose of a risk framework in Risk Management?`,
o:[`To organize risk statements into categories, such as operational risk`,`To store the approvals and rationale recorded for every accepted risk`,`To define which users are permitted to create and modify entities`,`To schedule audit engagements for the highest-rated risk categories`],
a:[0],
e:`Risk frameworks categorize the risk library, which makes reporting by category possible and keeps the library manageable.

Approvals, entity permissions, and audit scheduling are handled elsewhere.`},

{d:"RK",s:`What is a risk owner responsible for?`,
o:[`Managing the risk: keeping assessments current and driving the response`,`Approving every policy and standard published across the organization`,`Testing related controls independently on behalf of internal audit`,`Configuring the risk assessment methodologies and scoring formulas`],
a:[0],
e:`Risk owners are accountable for their risks — assessing them, deciding and driving responses, and escalating when exposure changes.

Policy approval, independent testing, and methodology configuration belong to other roles.`},

{d:"RK",s:`Besides a scheduled cycle, when should a risk be reassessed?`,
o:[`After a significant event, such as a major incident or a breached KRI`,`Only when an internal or external auditor specifically requests it`,`Never; risks should only be reassessed in the scheduled annual cycle`,`Every time any user opens and views the risk record on the platform`],
a:[0],
e:`Event-driven reassessment keeps risk ratings meaningful when circumstances change. Waiting for the next cycle leaves decisions based on stale data.

Audit requests and record views aren't meaningful triggers.`},

{d:"RK",s:`Why should likelihood and impact scales be defined with clear criteria?`,
o:[`So assessors rate similar risks consistently`,`So every risk receives the same score`,`So assessments can be skipped for low-impact risks`,`So the heat map shows only high risks`],
a:[0],
e:`Defined criteria — for example, "major impact means losses over $1M or regulatory sanction" — make ratings comparable across assessors and business units.

The goal is consistency, not identical scores or hidden risks.`},

{d:"RK",s:`In advanced risk assessment, who typically participates in an assessment?`,
o:[`An assessor and an approver who confirms the result`,`Only the platform administrator who configured the methodology`,`Only the external auditors who review the risk program each year`,`Every employee in the business unit that owns the related entity`],
a:[0],
v:true,
e:`Assessments generally have assessors who provide ratings and approvers who validate them before results are final. That separation adds quality control.

Administrators configure, auditors stay independent, and assessing with everyone is impractical.`},

{d:"RK",s:`In advanced risk assessment, what is the difference between manual and automated factors?`,
o:[`Manual factors are answered by assessors; automated factors pull values from data`,`Manual factors are used only for inherent risk, automated ones only for residual risk`,`Automated factors must be approved by external auditors before they can be used`,`There is no difference, since assessors answer both types of factor by hand`],
a:[0],
v:true,
e:`Manual factors capture judgment through questions. Automated factors pull values from data — for example, the number of open critical vulnerabilities — which reduces subjectivity.

Either type can be used in different assessment stages, and neither requires audit approval.`},

{d:"RK",s:`What does a group factor do in advanced risk assessment?`,
o:[`Combines several child factors into one calculated value`,`Assigns the risk assessment to a group of users at once`,`Groups risks by entity class so they can be reported together`,`Merges duplicate risks for the same entity into one record`],
a:[0],
v:true,
e:`Group factors aggregate child factors — for example, combining financial, reputational, and regulatory impact into one impact score — using a defined calculation.

Assignment, reporting, and merging are separate functions.`},

{d:"RK",s:`A risk response plan includes deploying data loss prevention to reduce the chance of data leaking. How is this tracked?`,
o:[`As response tasks linked to the risk, with owners and due dates`,`As a note added to the risk's description field for reference`,`As a new entity type created for the data loss prevention tool`,`As a citation added to the relevant privacy authority document`],
a:[0],
e:`Response tasks make the plan trackable and show progress toward target risk.

Descriptions can't be tracked, and entity types and citations serve other purposes.`},

{d:"RK",s:`A company decides to stop offering a product line in a high-risk market rather than manage the regulatory exposure. Which response is this?`,
o:[`Avoid`,`Accept`,`Transfer`,`Mitigate`],
a:[0],
e:`Ending the activity that creates the risk is avoidance. Acceptance would keep the risk, transfer would shift its consequences, and mitigation would reduce it with controls.`},

{d:"RK",s:`A risk acceptance reaches its expiration date. What should happen?`,
o:[`The risk is reviewed to renew the acceptance or choose another response`,`The risk is deleted, since the acceptance period has now ended`,`The acceptance renews automatically for another year without review`,`The risk is transferred to internal audit for ownership and follow-up`],
a:[0],
e:`Expiry exists to force a fresh decision when circumstances may have changed.

Deleting the risk or renewing automatically defeats the purpose, and audit doesn't take ownership of risks.`},

{d:"RK",s:`What is the difference between risk appetite and risk tolerance?`,
o:[`Appetite is the overall risk the organization will pursue; tolerance is acceptable variation`,`Appetite applies only to financial risks, while tolerance applies only to information technology risks`,`They mean exactly the same thing, and frameworks use the two terms interchangeably for the same limit`,`Tolerance is set by regulators for each industry, while appetite is set by the external auditors`],
a:[0],
e:`Appetite is the broad statement of how much risk the organization will take. Tolerance sets more specific acceptable ranges, which are useful as thresholds.

Neither is limited to one risk type, and both are set by the organization's leadership.`},

{d:"RK",s:`What is an emerging risk?`,
o:[`A new or developing risk that isn't yet well understood`,`A risk that has already been formally accepted and approved`,`The risk with the highest residual score in the register`,`A risk that was retired in the previous assessment cycle`],
a:[0],
e:`Emerging risks — new technologies, regulations, or threats — are tracked early even though they're hard to quantify, so the organization isn't caught unprepared.

Status and score don't make a risk emerging.`},

{d:"RK",s:`A key risk indicator crosses its threshold. What is a typical configured response?`,
o:[`Notify the risk owner and create an issue or trigger a reassessment`,`Delete the risk, since the indicator has already captured the problem`,`Lower the inherent risk score automatically to offset the breach`,`Close all of the related controls until the indicator recovers`],
a:[0],
v:true,
e:`A breached KRI means exposure may have changed. Notifying the owner and creating follow-up work turns the signal into action.

Deleting the risk or lowering scores would hide the signal.`},

{d:"RK",s:`A major security incident causes financial loss. How should it connect to Risk Management?`,
o:[`Record a risk event linked to the related risks and the incident`,`Close the related risks, since the event they described has occurred`,`Create a new policy for the incident and publish it to all employees`,`Ignore it, since incidents and risk management aren't related processes`],
a:[0],
v:true,
e:`Linking actual loss events to risks validates or challenges current ratings and builds loss history for future assessments.

Risks remain after an event, and creating a policy per incident isn't a risk process.`},

{d:"RK",s:`How can a risk manager assess all risks for one entity in a single exercise?`,
o:[`Use an assessment scope covering the entity's risks`,`Create a separate new entity for each of its risks`,`Assess each risk on a different day for accuracy`,`Export the risks and assess them in a spreadsheet`],
a:[0],
v:true,
e:`Advanced risk assessment supports scoping assessments to an entity and its risks, so related risks are assessed consistently in one effort.

Splitting entities or moving work off-platform loses consistency and traceability.`},

{d:"RK",s:`What distinguishes a top-down risk assessment from a bottom-up one?`,
o:[`Top-down starts from strategic objectives; bottom-up builds up from operational risks`,`Top-down assessments are done only by auditors, and bottom-up assessments only by IT`,`Top-down assessments don't use likelihood or impact ratings at any point`,`There is no practical difference between the two approaches in a risk program`],
a:[0],
e:`Top-down captures leadership's view of what threatens objectives, while bottom-up captures detailed operational risks. Mature programs use both and reconcile them.

The approaches aren't tied to particular teams, and both use likelihood and impact.`},

{d:"RK",s:`A database is worth $500,000, and a breach is expected to damage 40% of its value. What is the single loss expectancy?`,
o:[`$200,000`,`$500,000`,`$40,000`,`$1,250,000`],
a:[0],
e:`SLE = asset value × exposure factor = $500,000 × 0.40 = $200,000. Multiplying SLE by the annual rate of occurrence gives the annualized loss expectancy.`},

{d:"RK",s:`On a heat map, how should a risk with low likelihood but catastrophic impact generally be treated?`,
o:[`Evaluated against appetite, since its impact could be severe`,`Ignored, because its likelihood is low enough not to matter`,`Accepted automatically, because it is unlikely to happen`,`Treated the same as a low-likelihood, low-impact risk`],
a:[0],
e:`Low-likelihood, high-impact risks — such as a datacenter loss — can threaten the organization even though they're rare. They need deliberate treatment, often through resilience planning.

Ignoring or automatically accepting them is how surprises happen.`},

{d:"RK",s:`Why link controls to the risks they mitigate?`,
o:[`So control effectiveness informs residual risk and failures show their impact`,`So each control is reassigned to the risk owner automatically when linked`,`Because a risk can't be assessed until it has at least ten linked controls`,`So the risk is closed automatically as soon as the control is created`],
a:[0],
e:`The control-to-risk link connects compliance and risk: residual risk reflects how well mitigating controls work, and a control failure signals rising exposure.

The link doesn't reassign ownership, impose minimum counts, or close risks.`},

{d:"RK",s:`What is the difference between the risk library and the risk register?`,
o:[`The library holds reusable statements; the register holds risks identified for entities`,`The library holds risks that have been closed; the register holds risks still open`,`They are the same list, viewed by different roles in the risk application`,`The library is maintained for auditors, while the register is maintained for regulators`],
a:[0],
e:`Library statements are templates. When applied to entities, they generate the risks that make up the register.

Status and audience don't distinguish them.`},

{d:"RK",s:`After an assessor submits a risk assessment, what typically happens next?`,
o:[`It goes to an approver, often the risk manager, for review`,`It is published to the knowledge base for all employees`,`It is sent to the external auditor for a formal signature`,`It is closed automatically without any further review`],
a:[0],
v:true,
e:`Review and approval validate the assessor's ratings and add a quality check before scores affect reporting.

Knowledge publishing and external sign-off aren't part of the assessment workflow.`},

{d:"RK",s:`Why would a risk program use qualitative assessment rather than quantitative?`,
o:[`Reliable loss data is unavailable, and a consistent relative ranking is enough`,`Qualitative assessment is required by every regulation the company follows`,`Quantitative assessment can't be configured on the ServiceNow platform at all`,`Qualitative assessment produces the dollar values that executives ask for`],
a:[0],
e:`Qualitative scales are quicker and work without robust loss data, so they're common for broad risk coverage. Quantitative methods are better when monetary estimates are needed and data supports them.

Neither is universally mandated, both can be configured, and only quantitative produces currency values.`},

{d:"CE",s:`Vulnerability data from Security Operations shows critical findings on servers in scope for a hardening policy. How can IRM use it?`,
o:[`Use indicators that reference the vulnerability data`,`Copy the vulnerabilities into the authority document as new citations`,`Create a policy exception for every vulnerability that is discovered`,`Nothing, because IRM can't use data from Security Operations`],
a:[0],
e:`Because both run on the same platform, indicators and risk factors can reference security data directly, turning operational findings into control and risk signals.

Authority documents describe regulations, blanket exceptions hide problems, and the data is accessible.`},

{d:"CE",s:`What do Performance Analytics content packs add to risk and compliance?`,
o:[`Prebuilt indicators and dashboards for trends`,`New authority documents and citations for common regulations`,`Automatic approval of risk acceptances that fall within appetite`,`Additional entity types for common CMDB and organizational tables`],
a:[0],
v:true,
e:`Content packs provide ready-made PA indicators and dashboards, so you can show trends instead of point-in-time snapshots.

They don't supply regulatory content, approve anything, or create entity types.`},

{d:"CE",s:`Many control owners are missing their attestation due dates. Which platform capability helps most?`,
o:[`Notifications and reminders around due dates, with escalation to managers`,`Extending every due date by six months so owners have more time to respond`,`Marking overdue attestations compliant automatically after the due date`,`Removing due dates so control owners can respond whenever they're ready`],
a:[0],
e:`Reminders and escalation use standard platform notifications to drive completion without lowering standards.

Extending, auto-passing, or removing due dates hides the problem.`},

{d:"CE",s:`A regulatory alert arrives about a change to a privacy law. What is the first step in regulatory change management?`,
o:[`Assess its relevance and which policies and controls it affects`,`Delete the existing authority document so the new version can replace it`,`Publish a new privacy policy immediately so employees learn about the change`,`Forward the regulatory alert to all employees so they're aware of the change`],
a:[0],
v:true,
e:`Relevance and impact assessment come first, so the right owners update the right policies and controls.

Deleting, publishing, or broadcasting before understanding the impact causes confusion.`},

{d:"CE",s:`How do third-party risk processes connect to the IRM data model?`,
o:[`Vendors can be entities, so they use the same framework`,`Third-party risk can't share any data with IRM, so it runs as a separate program`,`Vendors must be modeled as policy statements under a third-party risk policy`,`Third parties are added as citations under a vendor management authority document`],
a:[0],
e:`Modeling vendors as entities brings third-party risk into the same reporting and issue management as the rest of the program.

Policy statements and citations describe requirements, not vendors.`},

{d:"CE",s:`How do business continuity and operational resilience applications build on the IRM foundation?`,
o:[`They reuse entities, risks, and issues, connecting resilience to the same data`,`They replace Policy and Compliance once resilience planning has been set up`,`They require a separate instance so resilience data stays isolated from IRM`,`They don't relate to IRM at all and use an entirely different data model`],
a:[0],
v:true,
e:`Resilience applications use the shared GRC data model, linking critical services and plans to the same entities and risks.

They extend rather than replace, run on the same instance, and are closely related.`},

{d:"CE",s:`An issue from a failed control requires a firewall change by the network team. How is the work best handled?`,
o:[`Create remediation tasks or a related change request from the issue`,`Email the network team about the change and close the issue right away`,`Mark the issue as accepted, since another team owns the firewall`,`Wait for the next attestation cycle to confirm the problem still exists`],
a:[0],
e:`Linking remediation to the teams and processes that do the work — including change management — keeps the fix traceable back to the finding.

Closing on an email or accepting the risk doesn't fix anything, and waiting delays remediation.`},

{d:"AU",s:`How should internal audit decide which engagements to include in its annual audit plan?`,
o:[`Prioritize by risk, using the risk and compliance data on the platform`,`Audit the same areas every year, working through them in alphabetical order`,`Let each business unit decide for itself whether it will be audited this year`,`Choose the areas with the fewest open issues so the audit finishes quickly`],
a:[0],
e:`Risk-based planning focuses limited audit resources where exposure is greatest, and shared IRM data makes that view available.

Fixed rotations, self-selection, and avoiding problem areas miss the point of audit.`},

{d:"AU",s:`In which phase of an audit engagement do auditors perform tests and gather evidence?`,
o:[`Fieldwork`,`Scoping`,`Follow-up`,`Closed`],
a:[0],
v:true,
e:`Fieldwork is where testing and evidence gathering happen. Scoping defines what's covered, follow-up tracks remediation of findings, and closed means the engagement is complete.`},

{d:"AU",s:`What is the purpose of a walkthrough during an audit?`,
o:[`To trace a process end to end and confirm how controls are performed`,`To review and approve the final audit report before it is distributed`,`To close all related issues once the auditors have seen the process`,`To create new entities for every system involved in the audited process`],
a:[0],
e:`Walkthroughs confirm the auditor's understanding of a process and its controls before detailed testing.

Report approval, issue closure, and entity creation are separate steps.`},

{d:"AU",s:`How are audit results typically communicated to management?`,
o:[`Through an audit report covering scope, observations, ratings, and actions`,`Through individual emails sent to management after each test is finished`,`By publishing the raw test data and workpapers to the knowledge base`,`They aren't communicated to management until the following audit year`],
a:[0],
e:`The audit report is the formal deliverable, summarizing what was examined, what was found, and what management has agreed to do.

Piecemeal emails and raw data aren't a formal communication.`},

{d:"AU",s:`Management says an audit issue has been remediated. What should happen before it is closed?`,
o:[`The remediation is validated, often by audit, to confirm it fixes the finding`,`The issue is closed immediately, based on management's confirmation alone`,`The issue is deleted so it no longer appears in open-issue reporting`,`The finding is reclassified as a risk acceptance so it can be closed faster`],
a:[0],
e:`Validation confirms the fix actually works. Closing on assertion alone undermines the audit's assurance.

Deleting or reclassifying the issue misrepresents what happened.`},
  ],
};
