// ServiceNow CIS-TPRM question bank source. Correct answers are listed in "a" (indexes into "o");
// tools/build-banks.js shuffles options deterministically and writes src/data/banks/servicenow-cis-tprm.json.
module.exports = {
  id: "servicenow-cis-tprm",
  vendor: "ServiceNow",
  code: "CIS-TPRM",
  name: "Certified Implementation Specialist – Third-party Risk Management",
  fullLength: 60,
  minutes: 90,
  passPercent: 70,
  readinessPercent: 85,
  note: "ServiceNow does not publish a cut score for CIS-TPRM; community consensus puts it near 70%. Treat 85% here as your readiness bar. Items marked release-sensitive reference table names and labels that shift between releases.",
  sectioned: false,
  domains: [{"id":"F","name":"Fundamentals & Process Review","weight":"23%"},{"id":"C","name":"Core Configuration","weight":"14%"},{"id":"A","name":"Assessment Configuration","weight":"33%"},{"id":"P","name":"Third-party Portal","weight":"12%"},{"id":"S","name":"Supporting Processes","weight":"12%"},{"id":"O","name":"Other Application Relationships","weight":"6%"}],
  groups: {},
  idPrefix: "tprm",
  Q: [
{d:"F",s:`A bank uses the same cloud provider for two things: hosting a marketing microsite, and processing customer payment data. Risk leadership wants the payment relationship assessed far more rigorously than the microsite, but wants one consolidated view of the provider. What should the implementation use?`,
o:[`Two separate third-party company records, one per service`,`One third-party record with two engagements`,`One third-party record with two IRQ responses attached directly to the company`,`One third-party record flagged as high criticality, with a single deep assessment covering both services`],
a:[1],
e:`The engagement is the unit of service-level risk. It lets the same third party carry different inherent risk, different tiers, and different due-diligence scope per relationship while rolling up to one portfolio record.

Two company records fragment monitoring, contacts, and reporting — the exact problem engagements were introduced to solve. Attaching two IRQ responses to the company with no engagement gives you no object to scope the assessments to. Assessing both services at the payment tier wastes assessor capacity and inflates the provider's apparent risk.`},

{d:"F",s:`Who is the intended respondent for a third-party Inherent Risk Questionnaire (IRQ)?`,
o:[`The third party's primary contact, responding through the portal`,`The internal business owner sponsoring the relationship`,`The assigned third-party risk assessor, during review`,`The third party's designated information security officer`],
a:[1],
e:`The IRQ is internal. It asks what the business intends to do with this third party — what data they touch, whether they connect to the network, whether the service is business-critical — and the business owner is the only person who knows. The third party is not asked to rate its own inherent risk.

This is one of the most reliably tested distinctions on the exam: IRQ/tiering is internal, risk assessments go outward to the third party.`},

{d:"F",s:`What does the tiering process determine?`,
o:[`Residual risk remaining after the third party's controls are verified`,`Inherent risk, which sets the depth and scope of due diligence`,`The third party's contractual service level`,`The external security rating pulled from a risk intelligence provider`],
a:[1],
e:`Tiering measures inherent risk — the risk the relationship carries before any control is considered — and that tier drives how much due diligence is warranted.

Residual risk is only knowable after assessment responses and control evidence are reviewed, so it cannot be an input to scoping. Contractual service levels and external ratings are separate signals; neither defines the tier.`},

{d:"F",s:`Put the core TPRM lifecycle in the order the application supports it.`,
o:[`Due diligence assessment → intake → tiering → contracting → monitoring → offboarding`,`Intake → tiering → due diligence assessment → contracting → ongoing monitoring → offboarding`,`Intake → due diligence assessment → tiering → monitoring → contracting → offboarding`,`Tiering → intake → contracting → due diligence assessment → monitoring → offboarding`],
a:[1],
e:`Intake captures the request and the third party, tiering establishes inherent risk, due diligence tests controls proportionate to that tier, contracting locks in obligations informed by findings, monitoring watches for change, and offboarding closes the relationship out.

The sequencing trap is putting assessment before tiering. If you assess first you have no basis for deciding how deep to assess.`},

{d:"F",s:`Select two outcomes that follow directly from completing and approving tiering. (Choose two.)`,
o:[`An inherent risk tier is assigned to the third party or engagement`,`Applicable due-diligence assessments are triggered based on the responses`,`A residual risk score is calculated for the engagement`,`The third party's contract is generated and routed for signature`],
a:[0,1],
e:`Tiering produces the tier, and the tier plus specific IRQ answers drive which assessments get generated — a data-privacy answer pulls in a privacy questionnaire, a network-connectivity answer pulls in a security questionnaire.

Residual risk requires completed assessments. Contract generation is downstream and is not an automatic product of tiering.`},

{d:"F",s:`A user needs to review submitted third-party responses, score them, and raise issues — but must not be able to configure questionnaires or change program settings. Which role fits?`,
o:[`Third-party risk manager`,`Third-party risk assessor`,`Third-party risk reader`,`Third-party user (portal)`],
a:[1],
e:`The assessor works the assessment queue: reviews responses, evaluates evidence, scores, and raises issues. The manager owns program configuration and oversight, which is more than this user needs. The reader is view-only and cannot score. The third-party user is the external respondent and has no internal visibility at all.

Least privilege is the reasoning pattern the exam rewards here — pick the narrowest role that still does the job.`},

{d:"F",s:`Why does the program run continuous or external monitoring alongside periodic reassessment?`,
o:[`It replaces questionnaire-based assessment entirely for lower-tier third parties`,`It surfaces changes in a third party's posture between scheduled reassessments`,`It calculates each engagement's inherent risk tier automatically from ratings`,`It satisfies the contract's right-to-audit clause without any further review`],
a:[1],
e:`A point-in-time questionnaire goes stale the moment it is submitted. Monitoring — breach news, external security ratings, financial and sanctions signals — is what tells you something changed in month four of a twelve-month cycle.

It supplements rather than replaces assessments, because outside-in signal says nothing about internal control design. It does not set the tier, and it is not a substitute for exercising an audit right.`},

{d:"F",s:`What changed conceptually when Vendor Risk Management became Third-party Risk Management?`,
o:[`Assessments moved from the Assessment framework into Flow Designer subflows`,`Scope widened beyond purchased goods to any external party creating exposure`,`Tiering became an optional step that programs could skip for most vendors`,`Third parties stopped being represented as company records on the platform`],
a:[1],
e:`"Vendor" implies a purchasing relationship. "Third party" covers resellers, agents, brokers, joint-venture partners, contract researchers, and other parties who create exposure without ever sending an invoice — which is how regulators frame the obligation.

The underlying assessment framework, the company-record foundation, and the centrality of tiering all carried forward unchanged.`},

{d:"F",s:`Risk leadership wants to see where its active third parties and engagements are physically located, to spot geographic concentration. Which capability addresses this?`,
o:[`The risk concentration map`,`The engagement Gantt view`,`The CMDB dependency map`,`The assessment heat grid`],
a:[0],
e:`Concentration risk — too many critical engagements in one country, one region, or one provider — is a board-level TPRM question, and the concentration map plots active third parties and engagements geographically to expose it.

Gantt views belong to project management, dependency maps to the CMDB, and assessment scoring grids show risk level rather than location.`},

{d:"F",s:`An executive asks for a third party's overall risk position across all of its engagements. Where does that come from?`,
o:[`The most recent single assessment score from any one of its engagements`,`A roll-up on the third-party record of engagement results and monitoring`,`The IRQ response for whichever engagement has the largest contract value`,`The average tier across all of the contacts registered for the third party`],
a:[1],
e:`Engagement-level results roll up to the third-party record, which is what gives you an entity view across every service that party provides, plus external monitoring.

A single assessment is one service at one point in time. One engagement's IRQ ignores the rest of the portfolio. Contacts carry no tier at all.`},

{d:"F",s:`Which statement best describes the relationship between inherent and residual risk in a TPRM assessment cycle?`,
o:[`Inherent risk is calculated from assessment responses; residual risk comes from the IRQ`,`Inherent risk is exposure before controls; residual is what remains after`,`Residual risk is always lower than inherent risk once any assessment has been closed`,`They are the same measure, captured at two different points in the assessment cycle`],
a:[1],
e:`Inherent comes from the IRQ and describes what the relationship exposes you to. Residual is derived from the assessed control environment.

Deriving inherent risk from assessment responses and residual risk from the IRQ inverts the sources. Residual is not guaranteed to land lower — a third party with weak controls can end up at or above its inherent position, and that is precisely the finding the process exists to surface.`},

{d:"F",s:`Select two reasons to assess at the engagement level rather than only at the third-party level. (Choose two.)`,
o:[`Different services from the same provider carry different data sensitivity`,`Engagements allow separate reassessment cadence per service`,`Engagements are required before a company record can be created`,`Only engagements can hold third-party contacts`],
a:[0,1],
e:`Data sensitivity and criticality vary by service, and each engagement can therefore carry its own tier, scope, and reassessment schedule.

The third-party record exists independently — you create the party, then the engagements under it. Contacts belong to the third party, not to the engagement.`},

{d:"F",s:`A relationship is being terminated. Which action belongs in offboarding?`,
o:[`Generate a fresh full-scope risk assessment to document the vendor's final state`,`Close or cancel open assessments and issues, and revoke portal access`,`Delete the third-party company record along with its assessment history`,`Move the third party to the lowest tier and leave its record active indefinitely`],
a:[1],
e:`Offboarding is about closing out work in flight and cutting access. Portal access left live after termination is a standing audit finding.

Deleting the record destroys the evidence trail you are required to retain. Demoting the tier while leaving it active misrepresents the portfolio. A new full assessment at exit is wasted effort — the point is exit, not evaluation.`},

{d:"F",s:`What is the practical function of third-party criticality within the program?`,
o:[`It determines which portal theme the third party sees`,`It helps drive prioritization and assessment depth`,`It is calculated automatically from the number of engagements`,`It replaces the inherent risk tier for regulated third parties`],
a:[1],
e:`Criticality — how badly the business is hurt if this party fails — works alongside inherent risk to decide who gets attention first and how much of it.

It is a business judgment, not a count of engagements, and it complements rather than replaces the tier. Portal theming is unrelated.`},

{d:"C",s:`A global third party operates through several regional subsidiaries, each contracted separately. Reporting must show both the subsidiaries and consolidated parent exposure. How should the portfolio be configured?`,
o:[`One flat company record with the subsidiaries listed in a description field`,`Parent and child company records related through the company hierarchy`,`One company record per subsidiary with no relationship between them`,`Separate engagements standing in for each subsidiary`],
a:[1],
e:`The company hierarchy is what produces consolidated parent exposure while keeping each contracting entity assessable on its own.

Flat records and unrelated records both lose the roll-up. Engagements describe services, not legal entities — using them for corporate structure breaks down the moment a subsidiary provides more than one service.`},

{d:"C",s:`Select two conditions that must be true for a third-party contact to receive and respond to an assessment. (Choose two.)`,
o:[`The contact has an active user record associated with the third-party company`,`The contact has been granted the third-party portal role`,`The contact is designated as the primary contact`,`The contact has been added to the internal assessor group`],
a:[0,1],
e:`Respondents need an identity the platform recognizes and the portal entitlement that lets them in. That is the whole requirement.

Primary contact is a designation for default routing and correspondence, not a precondition for responding — any entitled contact can be a respondent. Adding an external party to an internal assessor group would give them visibility into other third parties' data.`},

{d:"C",s:`What does third-party risk intelligence scoring contribute that questionnaires do not?`,
o:[`Verified evidence of how the third party's internal controls are designed`,`Continuously refreshed outside-in signal about the third party's posture`,`A legally binding attestation from the third party about its security controls`,`The engagement's inherent risk tier, calculated directly from the rating`],
a:[1],
e:`Risk intelligence providers observe a third party from the outside — exposed infrastructure, breach disclosures, financial and sanctions signals — and refresh continuously. That is change detection between cycles.

It cannot see inside a control environment, carries no attestation weight, and does not set the tier. Questionnaires and intelligence answer different questions; the exam tests that you know which is which.`},

{d:"C",s:`A third party's external security rating drops below the configured threshold. What is the appropriate configured response?`,
o:[`Automatically terminate the engagement as soon as the rating falls below the threshold`,`Trigger a defined action, such as raising an issue or starting a reassessment`,`Recalculate the engagement's inherent risk tier directly from the new external score`,`Suspend the third party's portal access until an assessor has reviewed the drop`],
a:[1],
e:`Thresholds exist to convert a signal into work. The configured response is an issue for investigation or an out-of-cycle assessment, with a human deciding what the drop actually means.

Automatic termination on a third-party rating is not a defensible control. External scores do not overwrite inherent risk, which is a function of what you use the party for. Cutting portal access removes the channel you need to ask them about it.`},

{d:"C",s:`What is the primary contact designation used for?`,
o:[`It gives that contact admin rights over the company's contacts`,`It marks the contact as the third party's legal signatory for all contracts`,`It restricts assessment responses so that only that person can answer them`,`It determines the third party's inherent risk tier for every engagement`],
a:[0],
e:`The primary contact is the default counterparty: correspondence routes there, and that contact typically manages the third party's other users on the portal.

It carries no legal signatory meaning, does not lock out other respondents, and has nothing to do with tiering.`},

{d:"C",s:`Two teams have independently created records for the same supplier under slightly different names. What is the correct remediation?`,
o:[`Leave both records in place and filter reports so they use only the newer one`,`Consolidate onto one record using a unique identifier, and retire the duplicate`,`Convert one of the records into an engagement underneath the other record`,`Delete both records and recreate a single new record for the supplier from scratch`],
a:[1],
e:`Duplicates split assessment history, monitoring, and contacts, so consolidation onto one authoritative record keyed to a unique identifier such as a D-U-N-S number is the fix.

Filtering hides the problem. Converting a company to an engagement destroys its own engagement structure. Deleting both throws away the history you need to keep.`},

{d:"C",s:`During intake, where does the information that drives assessment scope originate?`,
o:[`The third party's own profile information, as entered through the portal`,`The internal requester's answers about data, access, and criticality`,`The procurement purchase order raised for the third party's services`,`The external risk intelligence feed that rates the third party's posture`],
a:[1],
e:`Scope is set by what the business intends to do with the third party, captured from the internal requester at intake and formalized through tiering.

A portal profile is self-reported by the third party. A purchase order describes commercials. The intelligence feed arrives later and reflects posture, not intended use.`},

{d:"C",s:`Third-party types are being configured for the portfolio. What is the design goal?`,
o:[`To give each type its own distinct portal login URL for the third parties in it`,`To classify parties so templates, workflows, and reporting apply by category`,`To set the maximum number of contacts each third party is allowed to register`,`To determine which currency is used on contracts with each type of third party`],
a:[1],
e:`Typing is a routing and reporting construct: a staffing agency, a cloud processor, and a contract manufacturer warrant different questionnaires and different reporting cuts.

Portal URL, contact limits, and currency are unrelated to type classification.`},

{d:"A",s:`TPRM questionnaires are built on which platform capability?`,
o:[`The Survey and Assessment framework`,`Flow Designer subflows and actions`,`Service Catalog record producers`,`Knowledge Management article templates`],
a:[0],
v:true,
e:`Questionnaires are assessment metrics organized into categories under a metric type, with templates assembling them. Understanding that lineage is what lets you troubleshoot scoring and question ordering.

Flow Designer orchestrates the process around assessments. Record producers create intake requests. Knowledge articles carry guidance, not scored questions.`},

{d:"A",s:`Which table drives sending a specific risk assessment based on how a question on the IRQ was answered?`,
o:[`The question-to-assessment mapping table`,`The assessment instance table for issued assessments`,`The metric category table for grouped questions`,`The third-party engagement table for relationships`],
a:[0],
v:true,
e:`A many-to-many mapping between IRQ questions and assessments is what makes tiering adaptive: answer yes to "will they process personal data" and the privacy questionnaire is added to the due-diligence set.

Instance tables hold issued assessments. Metric categories group questions. The engagement table holds the relationship. None of them carry the trigger logic.`},

{d:"A",s:`Select two valid ways a third-party risk assessment can be generated. (Choose two.)`,
o:[`Automatically, from responses on a completed tiering questionnaire`,`Manually, by a third-party risk manager or assessor`,`By the third party, from the portal, whenever they choose`,`By the CMDB discovery schedule`],
a:[0,1],
e:`Assessments originate internally — automatically from tiering logic and scheduled reassessment, or manually when someone decides an out-of-cycle review is warranted.

A third party cannot commission its own assessment; that would let the assessed party control scope. Discovery has no role in TPRM assessment generation.`},

{d:"A",s:`A third party submits its questionnaire. What state does the assessment move into next?`,
o:[`Closed complete, with the score calculated`,`Under review by the assigned assessor`,`Draft, so the third party can keep editing`,`Awaiting response from the third party`],
a:[1],
e:`Submission ends the respondent's turn and starts the internal one. The assessor reviews answers and evidence, scores, and raises issues before anything closes.

Closing on submission would skip review entirely. Draft and awaiting-response are both upstream states.`},

{d:"A",s:`A submitted assessment is missing the evidence attachments several answers depend on. What is the correct handling?`,
o:[`Close it incomplete and schedule an out-of-cycle reassessment`,`Return it to the third party for the missing evidence`,`Score the affected questions as failures and close it complete`,`Raise an issue and accept the responses as submitted`],
a:[1],
e:`Missing evidence is a gap in the response, not a finding about the control. Sending it back keeps the assessment record whole and puts the burden where it belongs.

Closing incomplete discards work already done. Scoring unverified answers as outright failures manufactures findings. Accepting unevidenced responses defeats the purpose of asking.`},

{d:"A",s:`What distinguishes closed complete from closed incomplete?`,
o:[`Complete means the third party passed; incomplete means the third party failed`,`Complete means it reached a scored result; incomplete means it ended without one`,`Complete means all issues are remediated; incomplete means some issues remain open`,`Complete applies only to tiering; incomplete applies only to risk assessments`],
a:[1],
e:`The distinction is about process completion, not outcome. A low-scoring assessment that was fully worked is closed complete. One abandoned because the engagement was cancelled or the third party never responded is closed incomplete.

Outstanding issues have their own lifecycle and do not hold the assessment open.`},

{d:"A",s:`How do question weights affect a risk assessment result?`,
o:[`They set the order in which questions appear to the respondent`,`They set each response's proportional contribution to the score`,`They control which questions are visible to the third party`,`They define the due date for each response in the questionnaire`],
a:[1],
e:`Weighting is how you make an encryption-at-rest answer count more than an office-hours answer. The score is the weighted aggregate of responses.

Order, visibility, and due dates are all configured elsewhere.`},

{d:"A",s:`Several questions on a questionnaire gather context that should not move the score. How do you configure them?`,
o:[`Remove them from the template and collect them by email`,`Configure them so they carry no scoring contribution`,`Mark them optional`,`Place them in a separate category at the end`],
a:[1],
e:`Set the contribution to zero and the question is asked, answered, and stored without distorting the result.

Email collection loses the audit trail. Optional controls whether an answer is required, not whether it scores. Category placement changes grouping only.`},

{d:"A",s:`To what type of assessment record does a third-party contact respond?`,
o:[`The tiering questionnaire for the engagement`,`The risk assessment issued to the third party`,`The internal control attestation for the engagement`,`The external monitoring assessment from a ratings provider`],
a:[1],
e:`Only the outward-facing risk assessment goes to the third party's contacts. Tiering is internal, attestations are answered by internal control owners, and external monitoring is machine-generated from provider data with no respondent at all.

This item is the same trap as the IRQ question, approached from the other side.`},

{d:"A",s:`Select two factors typically considered in third-party risk assessment calculations. (Choose two.)`,
o:[`The third party's adherence to relevant industry standards and frameworks`,`The third party's financial stability`,`The number of contacts registered on the portal`,`The length of the third party's company name`],
a:[0,1],
e:`Control maturity against recognized frameworks and financial viability are both standard inputs — a financially failing provider is an availability risk regardless of how good its security is.

Contact count and name length are noise. Distractor sets on this exam sometimes include one obviously absurd option; take the free elimination and focus on separating the two plausible remainders.`},

{d:"A",s:`Reassessment cadence should vary by tier: tier 1 annually, tier 3 every three years. Where does this belong?`,
o:[`Hard-coded into each questionnaire template as a fixed frequency`,`Configured as tier-driven reassessment scheduling in program setup`,`Tracked manually by assessors on a shared team calendar each year`,`Set individually on each third-party contact record by the assessor`],
a:[1],
e:`Cadence is program configuration keyed to tier, so it applies consistently and survives staff turnover.

Templates define content, not schedule. Manual calendars fail audit the first time someone leaves. Contacts are people, not schedules.`},

{d:"A",s:`A questionnaire template is revised while forty assessments using it are still awaiting responses. What happens to those in-flight assessments?`,
o:[`They immediately adopt the revised questions`,`They continue against the version they were issued under`,`They are cancelled and reissued automatically`,`They are held until an administrator republishes them`],
a:[1],
v:true,
e:`Issued instances keep the content they were issued with. Changing questions mid-response would invalidate answers already given and break comparability with the responses being scored beside them.

If you need the new content in flight, you reissue deliberately — nothing cancels or republishes on its own.`},

{d:"A",s:`A third-party respondent cannot answer the security questions and needs a colleague to handle that section. What does the application support?`,
o:[`The respondent shares their login credentials with the colleague`,`The respondent delegates the assessment, or sections, to another registered contact`,`The internal assessor answers those questions on the third party's behalf`,`The assessment is cancelled and reissued to the colleague from scratch`],
a:[1],
e:`Delegation to another registered contact of the same third party is designed in, because real questionnaires span security, legal, finance, and operations.

Credential sharing destroys attribution. Assessors answering on the respondent's behalf destroys independence. Cancel-and-reissue loses everything already answered.`},

{d:"A",s:`A respondent completes half a long questionnaire and closes the browser. What should happen?`,
o:[`Responses are discarded and the questionnaire restarts`,`Progress is saved, and they resume where they stopped`,`The assessment locks and requires assessor intervention`,`The assessment auto-submits with the answers given so far`],
a:[1],
e:`Partial progress persists. Long questionnaires are answered across multiple sittings by multiple people, and any other behavior would make the portal unusable.

Auto-submitting partial work would push an incomplete response into review and corrupt the score.`},

{d:"A",s:`An assessor disagrees with the score a third party's response produced and believes the control is weaker than claimed. What is the correct action?`,
o:[`Edit the third party's submitted answer so it reflects what's really in place`,`Record the assessor's evaluation and rationale, leaving the response intact`,`Close the assessment incomplete and reissue it to the third party`,`Lower the third party's inherent risk tier to reflect the weaker control`],
a:[1],
e:`The respondent's answer is evidence of what they asserted and must stay as submitted. The assessor's judgment is recorded alongside it with rationale, which is what an auditor will want to see.

Editing submitted answers destroys the record. Reissuing punishes the third party for the assessor's disagreement. Tier reflects inherent risk and is not an assessment outcome.`},

{d:"A",s:`A response indicates a control the organization requires is absent. What should the configuration produce?`,
o:[`Automatic closure of the whole assessment as failed, with no further review`,`An issue raised against the third party or engagement to track remediation`,`A notification sent to the procurement team only, with no other follow-up`,`An immediate drop in the third party's external security rating from the provider`],
a:[1],
e:`Findings become issues, and issues carry owners, remediation plans, and due dates. That is the mechanism that converts assessment output into work.

Assessments do not fail closed on a single gap. Notification alone tracks nothing. External ratings come from providers and are not written by your instance.`},

{d:"A",s:`Select two legitimate ways to reduce assessment burden on both sides. (Choose two.)`,
o:[`Scope questionnaire depth to the assessed tier`,`Reuse a still-current assessment result across engagements of comparable risk with the same party`,`Send every third party the full questionnaire and ignore low-tier responses`,`Let third parties choose which questions they answer`],
a:[0,1],
e:`Tier-based scoping and controlled reuse of recent, comparable results are the two supported levers. Both preserve rigor where risk warrants it.

Sending everything and ignoring most of it wastes the third party's time and yours. Letting respondents self-select questions hands scope control to the assessed party.`},

{d:"A",s:`Where does a third party attach supporting evidence such as a SOC 2 report?`,
o:[`By emailing it directly to the assigned assessor for safekeeping`,`As an attachment on the assessment or response, through the portal`,`By uploading it to the organization's internal document repository`,`Evidence isn't collected in TPRM; assessors take answers at face value`],
a:[1],
e:`Evidence lands on the record it supports, through the portal, so it stays joined to the response an assessor is scoring.

Email breaks the audit trail and hides evidence in a mailbox. External parties have no access to internal repositories.`},

{d:"A",s:`A regulator-driven change means a new question must be asked of all tier 1 third parties on their next cycle. What is the correct approach?`,
o:[`Add it to the template for future assessments, and reissue only where it's needed sooner`,`Edit every in-flight assessment to insert the new question into what's already been sent`,`Create a parallel questionnaire with the new question and email it to vendors separately`,`Wait for the next platform upgrade, which will add the regulator's question automatically`],
a:[0],
e:`Template forward, targeted reissue where urgency demands it. In-flight edits invalidate responses already in progress, and a parallel emailed questionnaire lives outside scoring, reporting, and the evidence trail.

Nothing about this depends on an upgrade.`},

{d:"A",s:`An assessment issued for an engagement should reflect that engagement only, not every service the third party provides. What ensures this?`,
o:[`The assessment is generated in the context of the engagement and scoped to it`,`The assessor manually deletes irrelevant questions after issuing`,`The third party is instructed in the covering email to answer for one service only`,`A separate third-party record is created per service`],
a:[0],
e:`Scope comes from context at generation. The engagement it was raised against is what the assessment is about, and that context carries through to scoring and reporting.

Post-issue question deletion breaks comparability. An instruction in an email is not a control. Duplicate company records reintroduce the fragmentation engagements exist to prevent.`},

{d:"P",s:`Which set of activities is a third-party contact able to perform on the portal?`,
o:[`Respond to assessments, manage their company's contacts, and view their issues`,`Respond to assessments, view project Gantt charts, and submit incidents for IT`,`View other third parties' benchmark scores and respond to their own assessments`,`Approve their own remediation work and close their own issues when they're done`],
a:[0],
e:`The portal gives the third party exactly what it needs to participate: answer, upload, manage its own people, and see its own findings.

Gantt charts and incident submission belong to other applications. Cross-party visibility would be a data breach. Self-approval of remediation removes the entire point of the control.`},

{d:"P",s:`A third-party contact logs into the portal successfully but sees no assessments. What is the most likely cause?`,
o:[`The portal theme hasn't been published, so assessments are hidden from view`,`Nothing is assigned to the contact, or it's linked to the wrong company record`,`The contact's browser isn't supported, so the assessment list doesn't render`,`The assessment is still within its due date window, so it isn't shown yet`],
a:[1],
e:`Successful login means authentication and the portal role are fine, so the problem is assignment or association — nothing is routed to them, or they are attached to a different company record than the one the assessment was issued against. Duplicate company records are a common root cause.

Theming would not block record visibility, and an open due date is exactly when the assessment should appear.`},

{d:"P",s:`What prevents a third-party user from seeing another third party's data on the portal?`,
o:[`The portal only displays records created in the last 90 days`,`Access controls scoped to the user's company`,`Each third party gets its own instance`,`Assessments are delivered as read-only PDFs`],
a:[1],
e:`Company-scoped access control is the enforcement mechanism, evaluated per record.

Separate instances per third party would be unmanageable at any real portfolio size. Date filtering and PDF delivery are not access controls, and testing this isolation is a standard part of a TPRM go-live.`},

{d:"P",s:`The organization wants the portal to carry its own branding rather than platform defaults. What is involved?`,
o:[`Rewriting the portal widgets in a custom scoped application`,`Configuring the portal's theme, logo, and styling`,`Purchasing a separate portal license per third party`,`Branding is fixed and cannot be changed`],
a:[1],
e:`Theming is configuration — logo, colors, styling on the delivered portal.

Rewriting widgets is unnecessary custom work for a supported setting, per-party licensing is not how the portal works, and branding is certainly changeable.`},

{d:"P",s:`Select two capabilities typically reserved for a third party's primary or administrative contact rather than every registered contact. (Choose two.)`,
o:[`Adding and deactivating their company's other portal contacts`,`Receiving default correspondence and assessment notifications for the company`,`Answering questions on an assigned assessment`,`Uploading evidence to a response`],
a:[0,1],
e:`Managing the company's user roster and acting as the default correspondence point are administrative functions.

Answering and uploading are what every entitled respondent does — restricting them to one person would make multi-domain questionnaires impossible to complete.`},

{d:"P",s:`Why does a third-party contact need an identity in the platform rather than an anonymous response link?`,
o:[`Anonymous links are technically unsupported by the assessment engine itself`,`Attribution, delegation, access control, and an auditable record of answers`,`So the contact counts toward the organization's licensed user total`,`So the contact can view the internal risk register for their own company`],
a:[1],
e:`Every answer needs a name attached to it. An identity is also what makes delegation, partial save, and company-scoped access control work at all.

Third-party users never see the internal risk register, and licensing is not the design rationale.`},

{d:"P",s:`A third party asks to see the score its assessment produced. What is the appropriate configuration decision?`,
o:[`Always expose the full internal scoring model and every assessor note to the vendor`,`Decide deliberately what to expose: findings usually, internal scoring usually not`,`Never share anything with the vendor, including the issues raised against it`,`Let each assessor decide case by case what to share with each third party`],
a:[1],
e:`This is a policy decision made once and configured consistently. Third parties generally need to see what they must fix; they generally do not need the internal scoring model or assessor deliberations, which are often comparative across your portfolio.

Withholding issues makes remediation impossible. Per-assessor discretion produces inconsistent treatment that third parties will notice and challenge.`},

{d:"S",s:`What is the purpose of an approval step after the IRQ is completed?`,
o:[`To let the third party review and confirm the tier it has been assigned`,`To have risk management validate the tier and scope before due diligence`,`To release the contract for signature once the tier has been calculated`,`To publish the questionnaire template that the third party will receive`],
a:[1],
e:`The IRQ is answered by a business owner with an interest in moving fast. The approval is the check that the resulting tier and due-diligence scope are defensible before assessments go out the door.

The third party has no say in its own tier. Contracting and template publishing are separate processes.`},

{d:"S",s:`An IRQ approval is rejected. What should happen?`,
o:[`It returns to the requester for correction and resubmission`,`It is forwarded to the third party for comment`,`The due-diligence assessments are issued anyway with a warning flag`,`The third-party record is deactivated`],
a:[0],
e:`Rejection sends it back to the person who answered it. The reviewer has judged the intake information wrong or incomplete, and the requester is the one who can fix it.

The third party is not part of the internal tiering loop. Proceeding anyway defeats the control, and deactivating the party over a questionnaire correction is wildly disproportionate.`},

{d:"S",s:`Who should own remediation of an issue arising from a third party's missing control?`,
o:[`Always the internal risk assessor who identified the missing control`,`The third party, with an internal owner tracking and accepting the fix`,`Always the procurement team, since they manage the vendor contract`,`The platform administrator, who configured the assessment that found it`],
a:[1],
e:`The third party has to fix its own control. Someone internal still owns chasing it, evaluating what comes back, and accepting or escalating — because the risk sits with your organization regardless of who performs the work.

Assessors evaluate rather than remediate on a third party's behalf, and administrators own the platform, not the finding.`},

{d:"S",s:`Where is the orchestration behind onboarding, approvals, and assessment progression configured?`,
o:[`In a script include attached to each questionnaire template`,`In Flow Designer flows and process configuration`,`In the assessment metric definitions for each questionnaire`,`In the portal theme and its widget configuration settings`],
a:[1],
e:`Process orchestration lives in flows and process configuration, which is what makes it visible and maintainable by implementers rather than buried in script.

Metric definitions define questions. Themes control appearance. Scripting questionnaire-level orchestration is the anti-pattern this question is testing.`},

{d:"S",s:`An assessment has passed its due date with no response. What should a well-configured program do?`,
o:[`Close the assessment incomplete as soon as the due date passes`,`Escalate through reminders and notify the internal relationship owner`,`Automatically score every missing response as a failure and close it`,`Suspend the engagement until the third party submits its response`],
a:[1],
e:`Non-response is usually a contact problem — wrong person, someone who left, mail filtered. Escalation through reminders and the internal owner, who has the commercial relationship, resolves most of it.

Immediate closure, punitive scoring, and engagement suspension are all available as later escalation steps, not as the first automated move.`},

{d:"S",s:`Select two conditions that should be satisfied before a third-party risk issue is closed. (Choose two.)`,
o:[`Remediation evidence has been provided and evaluated`,`A closure decision is recorded, whether remediated or formally accepted`,`The third party's external rating has improved`,`The next reassessment has been completed`],
a:[0,1],
e:`Evidence evaluated and a recorded decision — remediated or risk accepted through the proper channel — are what closure requires.

External ratings move for reasons unrelated to your specific finding. Waiting for the next full reassessment would leave issues open for months or years.`},

{d:"S",s:`Why route risk acceptance for an unremediated third-party finding through a formal approval?`,
o:[`It is required before the third party can access the portal again`,`It records who accepted the residual exposure and on what basis`,`It recalculates the third party's inherent risk tier automatically`,`It closes all of the third party's other open issues at the same time`],
a:[1],
e:`Accepted risk is still risk. The approval names the accountable party and the rationale, which is exactly what an auditor or regulator asks for when the accepted risk later materializes.

Acceptance does not touch portal access, tiering, or other issues.`},

{d:"O",s:`How do third parties connect to the wider GRC data model so their controls can be monitored alongside internal ones?`,
o:[`They are represented as configuration items in the CMDB`,`They are represented as entities in the GRC entity and profile framework`,`They exist only within the TPRM scoped application with no GRC linkage`,`They are stored as knowledge articles`],
a:[1],
v:true,
e:`Representing third parties as entities is what lets controls, risks, and policies attach to them, so third-party control performance appears in the same monitoring and reporting as everything else.

CIs describe technology assets. Keeping TPRM data isolated would defeat the point of running it on a GRC platform.`},

{d:"O",s:`A third-party assessment surfaces a concentration exposure the enterprise risk team needs to own. What is the correct handling?`,
o:[`Leave it in TPRM — third-party risk is tracked separately from enterprise risk`,`Reflect it in the risk register so it is governed alongside other enterprise risks`,`Convert the assessment into an audit engagement`,`Log it as a security incident`],
a:[1],
e:`Third-party risk is a category of enterprise risk, not a parallel universe. Material exposures belong in the register where they get owners, appetite comparison, and executive visibility.

Audit engagements and security incidents are different response paths for different triggers.`},

{d:"O",s:`What does integration with contract management add to the TPRM process?`,
o:[`It replaces the need for due-diligence assessments on contracted vendors`,`It ties obligations, renewals, and audit rights to the relationship assessed`,`It generates the inherent risk tier directly from the contract's total value`,`It assigns portal roles to third-party contacts named in the contract`],
a:[1],
e:`Assessment findings shape what goes into a contract, and contract terms — audit rights, notification obligations, renewal timing — shape what you can require later. Renewal is also a natural reassessment trigger.

Contracts do not substitute for assessment, contract value alone does not set inherent risk, and portal roles are managed in TPRM.`},

{d:"O",s:`How does continuous control monitoring through indicators relate to third-party assessment?`,
o:[`Indicators replace questionnaires for every tier once they're configured`,`Indicators give ongoing automated signal between point-in-time assessments`,`Indicators are only for internal controls and can't reference third parties`,`Indicators calculate the assessment score from the third party's responses`],
a:[1],
e:`Indicators test conditions on a schedule and surface drift without waiting for the next questionnaire. Point-in-time and continuous evidence answer different questions and are designed to run together.

They neither replace assessments nor compute their scores, and they can absolutely be pointed at third-party entities.`},

{d:"F",s:`A cloud provider you use relies on a separate company to run its datacenters. What is that company to you?`,
o:[`A fourth party`,`A direct third party that you must contract with yourself`,`An internal business unit covered by your own policies`,`Out of scope, because you have no contract with them`],
a:[0],
e:`Fourth (or nth) parties are your third parties' own suppliers. You don't contract with them, but their failures can still disrupt you, so mature programs ask third parties about their critical subcontractors.

Treating them as out of scope ignores a real source of risk.`},

{d:"F",s:`Why do regulators expect organizations to manage third-party risk?`,
o:[`Outsourcing a service doesn't transfer accountability for the risks that come with it`,`Third parties are legally required to manage all of the risk on the customer's behalf`,`Regulators want organizations to stop using third parties for any critical services`,`Third-party risk only matters if the vendor is based in a different country`],
a:[0],
e:`You can outsource the work but not the accountability. If a provider mishandles data or fails, regulators hold the organization responsible.

Third parties don't absorb your obligations, regulators don't ban outsourcing, and domestic vendors carry risk too.`},

{d:"F",s:`Which set lists common due-diligence domains in a third-party risk program?`,
o:[`Information security, privacy, financial health, compliance, and resilience`,`Office décor, parking availability, and cafeteria quality at the vendor site`,`Only the vendor's price compared with competitors in the same market`,`Only the vendor's marketing materials and customer testimonials`],
a:[0],
e:`Due diligence covers the ways a third party can hurt you: security breaches, privacy violations, financial failure, regulatory problems, and service disruption.

Price comparisons and marketing are procurement concerns, not risk due diligence.`},

{d:"F",s:`Which contract clauses most directly support ongoing third-party risk management?`,
o:[`Right to audit and breach notification`,`Logo usage and marketing approval rights`,`Office hours and holiday schedule terms`,`Invoice formatting and payment address details`],
a:[0],
e:`Audit rights let you verify controls after signing, and breach notification ensures you learn about incidents quickly. Both give the risk program something to enforce.

Branding, schedules, and invoicing are commercial details.`},

{d:"F",s:`For a critical third party, why should an exit strategy be planned in advance?`,
o:[`So services can move to another provider or in-house without serious disruption`,`So the relationship can be ended quickly whenever an assessment finds an issue`,`Because exit plans replace the need for due diligence before onboarding`,`Because regulators require every vendor contract to end after one year`],
a:[0],
e:`If a critical provider fails or must be replaced, a tested exit plan keeps the business running. Regulations such as DORA make this explicit for critical ICT providers.

Exit plans aren't a response to every finding, don't replace due diligence, and don't impose fixed contract terms.`},

{d:"F",s:`Who typically submits the request to bring a new third party into the program?`,
o:[`The internal business owner or requester who needs the service`,`The third party's sales representative, through the portal`,`The external auditor who reviews the vendor program each year`,`The platform administrator, on behalf of every department`],
a:[0],
e:`Intake starts with the internal person who wants the service, because they know what it's for and what data it will touch.

Third parties don't initiate their own onboarding, and auditors and admins aren't requesters.`},

{d:"F",s:`What is the role of the relationship owner (engagement owner) for a third party?`,
o:[`They're accountable for the relationship and its risk in the business`,`They answer the third party's questionnaires on the vendor's behalf`,`They configure the questionnaire templates for the whole program`,`They approve their own engagements without any risk review`],
a:[0],
e:`The relationship owner — first line — owns the business relationship, the decision to use the third party, and follow-up on its risks.

Answering for the vendor would destroy independence, and configuration and self-approval belong elsewhere.`},

{d:"F",s:`An engagement's scope changes: a vendor that only handled marketing now also processes customer payment data. What should happen?`,
o:[`Re-tier the engagement, since its inherent risk has changed`,`Keep the original tier until the next scheduled reassessment`,`Lower the tier, because the vendor has more experience now`,`Close the engagement and open a new third-party record`],
a:[0],
e:`Inherent risk follows what the relationship involves. New data types and access mean the tier — and the due diligence it drives — need updating now.

Waiting, lowering the tier, or creating duplicate records all misrepresent the risk.`},

{d:"F",s:`How should due diligence differ between a tier 1 and a tier 3 engagement?`,
o:[`Tier 1 gets deeper review and more evidence; tier 3 lighter`,`Both get the same full questionnaire, so results are always comparable`,`Tier 3 gets more scrutiny, because low-risk vendors are less mature`,`Tier 1 skips due diligence, because critical vendors are pre-approved`],
a:[0],
e:`A risk-based program scales effort to risk: critical engagements get comprehensive review and evidence, low-risk ones a light touch.

Uniform review wastes effort, and inverting or skipping scrutiny for critical vendors is backwards.`},

{d:"F",s:`When are onsite assessments most appropriate?`,
o:[`For the most critical third parties, where remote evidence isn't enough`,`For every vendor, regardless of its tier or the service it provides`,`Only for vendors that refuse to answer any questionnaire you send them`,`Only after a relationship has been offboarded, to confirm the data is gone`],
a:[0],
e:`Onsite visits are expensive, so they're reserved for the highest-risk relationships where direct observation adds real assurance.

Visiting everyone doesn't scale, refusal is a separate escalation issue, and visiting after offboarding is pointless.`},

{d:"F",s:`Why do many programs accept standardized questionnaires such as the SIG or CAIQ?`,
o:[`Vendors can reuse one standard response, which saves both sides effort`,`Standard questionnaires remove the need to review any vendor answers`,`Regulators accept only standardized questionnaires as evidence`,`Standard questionnaires automatically assign the vendor's tier`],
a:[0],
e:`Industry-standard questionnaires let third parties answer once for many customers, and give you a familiar structure to review.

Answers still need review, regulators accept other evidence, and tiering still comes from your own IRQ.`},

{d:"F",s:`Which signals are commonly used in continuous monitoring of third parties?`,
o:[`Security ratings, financial health, adverse media, and sanctions lists`,`The vendor's social media follower counts and website visitor numbers`,`The number of emails the vendor sends to your staff each month`,`Only the vendor's answers from its original onboarding questionnaire`],
a:[0],
e:`Outside-in signals — security ratings, financial distress, negative news, sanctions — reveal change between assessments.

Popularity and email volume say nothing about risk, and onboarding answers go stale.`},

{d:"F",s:`What is concentration risk in a third-party program?`,
o:[`Too much reliance on one provider, region, or service for critical operations`,`A vendor that concentrates its marketing on one industry or customer segment`,`A questionnaire that concentrates too many questions in one section`,`An assessor who has too many assessments assigned to them at once`],
a:[0],
e:`If many critical services depend on one provider or location, a single failure has outsized impact. Spotting that concentration is a board-level concern.

Marketing focus, questionnaire layout, and workload are unrelated.`},

{d:"F",s:`An engagement's residual risk is above appetite, but the business wants to proceed. What is appropriate?`,
o:[`A formal, approved risk acceptance with an expiry`,`Proceed quietly and lower the residual rating so it's within appetite`,`Let the third party sign off on accepting the risk for you`,`Delete the assessment so the residual risk no longer appears`],
a:[0],
e:`Proceeding above appetite is a business decision that must be owned, documented, and revisited.

Altering ratings, letting the vendor accept your risk, or deleting evidence all undermine the program.`},

{d:"F",s:`During offboarding of a vendor that held customer data, what should you obtain?`,
o:[`Confirmation that the data was returned or securely destroyed`,`A new full risk assessment of the vendor's current controls`,`An invitation for the vendor to join the program again next year`,`A copy of the vendor's latest marketing brochure`],
a:[0],
e:`Offboarding must close out data risk: data returned or destroyed, ideally with a certificate, alongside access revocation.

A fresh assessment is unnecessary at exit, and invitations or brochures add nothing.`},

{d:"F",s:`Why is a single, complete third-party inventory important?`,
o:[`You can't manage risk from third parties you don't know you have`,`It lets each department keep its own separate vendor list`,`It replaces the need for any due diligence on the vendors listed`,`It's only needed for vendors with contracts above $1 million`],
a:[0],
e:`Unknown vendors — shadow procurement, credit card purchases — can't be tiered or assessed. A complete inventory is the starting point.

Separate departmental lists cause gaps, the inventory doesn't replace due diligence, and small contracts can still carry high risk.`},

{d:"F",s:`Which metric best shows whether the third-party program is keeping up with risk?`,
o:[`The percentage of critical third parties assessed on schedule`,`The total number of third parties currently in the inventory`,`The number of questionnaire templates that exist in the program`,`The number of times third-party contacts log in to the portal`],
a:[0],
e:`On-time coverage of critical relationships shows whether the program is doing what matters. Inventory size, template counts, and logins are activity measures, not outcomes.`},

{d:"F",s:`For a critical provider, why assess its business continuity and disaster recovery?`,
o:[`Its outage would disrupt your services, so its recovery capability matters`,`Continuity plans are only relevant for vendors that don't store any data`,`Assessing continuity replaces the need to assess information security`,`Continuity is the vendor's concern alone and doesn't affect your risk`],
a:[0],
e:`If you depend on a provider to deliver critical services, its ability to recover is part of your resilience.

Continuity matters regardless of data, doesn't replace security review, and directly affects you.`},

{d:"F",s:`A vendor will process personal data on your behalf. What agreement is typically required?`,
o:[`A data processing agreement that sets out obligations for that data`,`A marketing agreement that covers how the vendor promotes you`,`A non-compete agreement that stops the vendor working with rivals`,`No agreement, since the main contract covers personal data automatically`],
a:[0],
e:`Privacy laws such as GDPR require a data processing agreement defining what the processor may do with personal data, security obligations, and breach notification.

The other agreements don't address personal data, and it isn't covered automatically.`},

{d:"F",s:`Under the three lines model, who is accountable day to day for the risk in a specific third-party relationship?`,
o:[`The business owner of the relationship (first line)`,`The third-party risk management team (second line)`,`Internal audit (third line)`,`The third party's own compliance officer`],
a:[0],
e:`The business that uses the third party owns the risk. The TPRM function sets the framework and oversees, and internal audit provides independent assurance.

The vendor's compliance officer is accountable for their organization, not yours.`},

{d:"F",s:`What does a "risk-based approach" mean in third-party risk management?`,
o:[`Effort and scrutiny are scaled to the risk each relationship presents`,`Every third party receives exactly the same level of review each year`,`Only the largest vendors by spend are reviewed at all`,`Risk is assessed only after a third party has caused an incident`],
a:[0],
e:`Risk-based means proportionate: more attention where exposure is greater, less where it's low.

Uniform review wastes effort, spend isn't a proxy for risk, and reacting only after incidents isn't management.`},

{d:"C",s:`Why is a third party's country of operation useful to capture on its record?`,
o:[`It supports sanctions screening, data transfer rules, and concentration views`,`It determines which portal theme and colors the third party sees when logging in`,`It sets the third party's inherent risk tier on its own, without an IRQ`,`It's only used to format the third party's mailing address on letters`],
a:[0],
e:`Location drives sanctions checks, cross-border data transfer obligations, and geographic concentration analysis.

It doesn't set portal themes or, by itself, the tier.`},

{d:"C",s:`Which information belongs on the engagement rather than on the third-party company record?`,
o:[`The service, its owner, data involved, and dates`,`The third party's legal name and its government tax identifier`,`The third party's headquarters address and main phone number`,`The third party's parent company and its corporate ownership`],
a:[0],
e:`Engagements describe one relationship: what service, who owns it, what data is involved, and when it runs. Legal identity, address, and corporate structure belong on the company record.`},

{d:"C",s:`Why link engagements to their contracts?`,
o:[`So contract terms and renewals connect to the risk`,`So the contract can be signed automatically when the assessment closes`,`So the third party can edit contract terms through the portal`,`So contracts replace the need for engagement records`],
a:[0],
v:true,
e:`Linking contracts lets risk teams see audit rights, notification obligations, and renewal dates, and use renewals as reassessment triggers.

It doesn't automate signatures, let vendors edit terms, or replace engagements.`},

{d:"C",s:`Why relate an engagement to the business applications or services it supports?`,
o:[`It shows which services suffer if the vendor fails`,`It lets the third party edit those applications' CMDB records`,`It removes the need for an inherent risk questionnaire`,`It automatically closes incidents on those applications`],
a:[0],
e:`Linking engagements to applications and services connects third-party risk to business impact and operational resilience.

It doesn't grant vendors CMDB access, replace tiering, or close incidents.`},

{d:"C",s:`An organization has 3,000 vendors in its ERP system. How should they be brought into TPRM?`,
o:[`Import them through an integration or import set`,`Have assessors type each vendor in by hand from printed reports`,`Ask each vendor to register itself on the portal from scratch`,`Leave them out until each vendor causes an incident`],
a:[0],
e:`Importing from the system of record — with deduplication on a unique identifier — builds the inventory quickly and keeps it aligned.

Manual entry is slow and error-prone, self-registration hands control to vendors, and waiting for incidents defeats the purpose.`},

{d:"C",s:`How are external security ratings from providers such as BitSight or SecurityScorecard typically brought into TPRM?`,
o:[`Through Store integrations that update third-party records`,`By asking each third party to type its own rating into the portal each month`,`By assessors copying ratings into the assessment comments by hand`,`They can't be brought in; assessors must look them up separately`],
a:[0],
v:true,
e:`Risk intelligence integrations pull ratings automatically, so monitoring stays current without manual work.

Self-reported or hand-copied ratings defeat the purpose of independent, continuous signals.`},

{d:"C",s:`How is a risk intelligence rating usually matched to the right third party?`,
o:[`By identifiers such as the third party's domain`,`By the name of the internal business owner on the engagement`,`By the date the third party was first added to the program`,`By the number of engagements the third party currently has`],
a:[0],
v:true,
e:`Ratings providers track companies by domains and company identifiers, so accurate identifiers on the record are what make matching reliable.

Owner names, dates, and engagement counts don't identify the company.`},

{d:"C",s:`How does the IRQ determine an engagement's tier?`,
o:[`Answers carry scores mapped to tier thresholds`,`The requester picks whichever tier they prefer`,`The third party chooses its own tier in the portal`,`Every engagement starts at tier 1 and moves down yearly`],
a:[0],
v:true,
e:`IRQ questions are scored, and the resulting score falls into configured tier ranges, so tiering is consistent and explainable.

Letting requesters or vendors choose defeats the control, and fixed starting tiers ignore actual risk.`},

{d:"C",s:`Risk leadership decides that more engagements should land in tier 1. What should be adjusted?`,
o:[`The tier thresholds or question scoring in the tiering configuration`,`Each engagement's tier, edited one by one after tiering completes`,`The portal theme, so tier 1 engagements stand out visually`,`The third parties' security ratings, so more of them look risky`],
a:[0],
v:true,
e:`Changing thresholds or scoring adjusts how all future tiering works, consistently. Hand-editing tiers bypasses the method.

Themes don't affect tiers, and you can't change external ratings.`},

{d:"C",s:`Security and privacy questionnaires need different expert reviewers. How should assessments be routed?`,
o:[`Assign assessor groups by questionnaire type`,`Send every assessment to one general mailbox for anyone to pick up`,`Let each third party choose which assessor reviews its responses`,`Route all assessments to the platform administrator to triage`],
a:[0],
e:`Routing by type to specialist groups gets responses reviewed by people who understand them.

A shared mailbox loses accountability, vendors shouldn't pick reviewers, and administrators aren't assessors.`},

{d:"C",s:`What is the benefit of configuring the email notifications sent to third parties?`,
o:[`It sends clear, branded messages with task links, improving responses`,`It lets the third party turn off every reminder they receive from you`,`It replaces the portal, so vendors answer by replying to email`,`It sends third parties a copy of their internal risk score`],
a:[0],
e:`Professional, clear notifications with direct links get faster responses and fewer "is this phishing?" questions.

They don't hand control of reminders to vendors, replace the portal, or expose internal scoring.`},

{d:"C",s:`An internal user adds a new contact for a third party. What generally needs to happen for that contact to use the portal?`,
o:[`An account is created or invited and given the third-party portal role`,`The contact must be added to an internal IT support group for access`,`The contact must first be made the primary contact for the company`,`Nothing is needed; any email address can sign in to the portal directly`],
a:[0],
v:true,
e:`Portal access requires a recognized identity associated with the third party and the portal role.

Internal groups would grant inappropriate access, primary status isn't required, and open access would be insecure.`},

{d:"C",s:`Why capture the types of data an engagement involves, such as personal or payment data?`,
o:[`They drive tiering and which assessments are triggered`,`They decide which portal language the third party will use`,`They set the third party's contract payment terms`,`They're only stored for reference and affect nothing`],
a:[0],
e:`Data types are central to inherent risk and determine whether privacy, payment, or other specialized assessments apply.

Language and payment terms are unrelated.`},

{d:"A",s:`A program needs separate questionnaires for information security, privacy, and business continuity. How should they be set up?`,
o:[`As separate templates, issued based on tiering`,`As one enormous template that every third party completes in full`,`As free-text emails that assessors write for each third party`,`As a single yes/no question asking whether the vendor is secure`],
a:[0],
e:`Domain-specific templates let the program issue only what applies, keep content maintainable, and route each to the right reviewers.

One giant template wastes effort, emails lose structure, and a single question gives no assurance.`},

{d:"A",s:`Which question type should collect a third party's SOC 2 report?`,
o:[`An attachment question`,`A yes/no question`,`A numeric question`,`A single-line text question`],
a:[0],
e:`Attachment questions capture documents directly on the response, keeping evidence with the answer it supports. The other types can't hold a file.`},

{d:"A",s:`A follow-up question should appear only if the third party says it uses subcontractors. What feature supports this?`,
o:[`Conditional questions that depend on an earlier answer`,`A separate questionnaire sent to every third party`,`A note asking vendors to skip the question if needed`,`An assessor manually deleting the question afterward`],
a:[0],
e:`Conditional (dependent) questions show follow-ups only when relevant, keeping questionnaires short and focused.

Separate questionnaires, notes, and manual deletion are clumsy workarounds.`},

{d:"A",s:`How are a respondent's answers turned into a score?`,
o:[`Each answer option maps to a score value, weighted and combined`,`The assessor guesses a score after reading the whole response`,`The third party enters its own score at the end of the form`,`Scores are based on how quickly the questionnaire was completed`],
a:[0],
e:`Configured scores for each answer, combined with weights, produce consistent, explainable results.

Guessing, self-scoring, and speed aren't valid scoring methods.`},

{d:"A",s:`Some questions must always be answered before a questionnaire can be submitted. How is this enforced?`,
o:[`By marking those questions as mandatory`,`By giving those questions a higher weight`,`By placing those questions first on the form`,`By making those questions conditional`],
a:[0],
e:`Mandatory questions block submission until answered. Weight affects scoring, order affects layout, and conditional logic affects visibility.`},

{d:"A",s:`Third parties often miss assessment deadlines. What configuration helps most?`,
o:[`Due dates with automated reminders before and after the deadline`,`Removing due dates entirely so third parties never feel rushed`,`Closing each assessment the moment its due date has passed`,`Letting each third party choose its own due date for responses`],
a:[0],
e:`Clear deadlines plus reminders keep assessments moving without punishing vendors for small delays.

Removing or vendor-controlled deadlines lose control, and instant closure wastes work.`},

{d:"A",s:`An assessor goes on leave with several assessments under review. What should happen?`,
o:[`Reassign the assessments to another assessor so reviews continue`,`Leave them assigned to the absent assessor until they come back`,`Cancel them all and reissue them to the third parties from scratch`,`Close them as complete using the answers that were already submitted`],
a:[0],
e:`Reassignment keeps work moving without disturbing the third party or losing review progress.

Waiting delays risk decisions, cancelling wastes the vendor's effort, and closing without review skips the control.`},

{d:"A",s:`While reviewing, an assessor finds one answer unclear. What's the best action?`,
o:[`Request more information from the third party`,`Score the question as a failure without asking`,`Change the third party's answer to what seems likely`,`Ignore the question and score the rest`],
a:[0],
e:`Asking for clarification on the specific question keeps the record accurate and fair.

Failing it unasked, editing the vendor's answer, or ignoring it all compromise the assessment.`},

{d:"A",s:`A program wants an issue raised automatically whenever a vendor says it doesn't encrypt data at rest. How is this done?`,
o:[`Configure an issue rule on that question and answer combination`,`Ask assessors to remember to raise one each time they see it`,`Add a note to the question telling vendors to raise their own issue`,`Lower the question's weight so the answer doesn't affect the score`],
a:[0],
v:true,
e:`Rules tied to specific responses make issue creation consistent. Relying on memory or vendors misses findings, and lowering weight hides them.`},

{d:"A",s:`What does a completed due-diligence assessment typically contribute to an engagement?`,
o:[`A residual risk rating based on the assessed controls`,`A new inherent risk tier that replaces the IRQ result`,`A signed contract between the parties`,`A new third-party company record`],
a:[0],
e:`Assessment results reflect the control environment and feed residual risk. Inherent risk comes from tiering, contracts are separate, and the company record already exists.`},

{d:"A",s:`Which events should trigger an out-of-cycle reassessment?`,
o:[`A contract renewal, a vendor breach, a scope change, or a ratings drop`,`The third party changing its logo or redesigning its public website`,`The assessor's own annual performance review being completed`,`A new employee joining the internal business owner's team`],
a:[0],
e:`Reassessment triggers are events that change the risk picture. Branding changes and internal staffing changes don't.`},

{d:"A",s:`A program wants to use the industry-standard SIG questionnaire. What's the advantage?`,
o:[`Vendors may already have answers, and the content is widely understood`,`SIG answers never need to be reviewed by an assessor once they're submitted`,`Using the SIG removes the need for tiering, since it covers every vendor`,`SIG questionnaires don't need to be scored, because they're industry standard`],
a:[0],
v:true,
e:`Standard content speeds responses and gives assessors a familiar structure. Responses still need review and scoring, and tiering still determines scope.`},

{d:"A",s:`A third party uploads a SOC 2 report covering last calendar year. Why track the report's coverage period?`,
o:[`Evidence ages, so you know when to request a new report`,`Reports older than a week can't be read by assessors`,`The coverage period determines the vendor's tier`,`The platform deletes reports when they're a year old`],
a:[0],
e:`Assurance reports cover a specific period. Tracking it shows when evidence is stale and a new report — or a bridge letter — is needed.

It doesn't affect readability or tiering, and reports aren't deleted automatically.`},

{d:"A",s:`A vendor's SOC 2 report ended in June, and the next one won't be ready until March. What can the vendor provide to cover the gap?`,
o:[`A bridge letter covering the gap`,`A copy of its marketing brochure describing its security features`,`An email from its sales team saying everything is fine`,`Nothing; gaps between reports can't be covered`],
a:[0],
e:`Bridge (gap) letters are management assertions covering the period between the report's end and the present. They're weaker than an audited report but standard practice.

Marketing material and sales emails aren't assurance.`},

{d:"A",s:`How can an assessment address fourth-party risk?`,
o:[`Include questions about the vendor's critical subcontractors and how it oversees them`,`Send your questionnaire directly to every subcontractor without the vendor knowing`,`Assume subcontractors are covered by the vendor's own insurance policy`,`Ignore subcontractors, since you have no contract with them`],
a:[0],
e:`Asking your third party who its critical subcontractors are and how it manages them gives visibility without contracting with them directly.

Bypassing the vendor, relying on insurance, or ignoring subcontractors leaves gaps.`},

{d:"A",s:`Why keep previous assessments rather than overwriting them?`,
o:[`To compare results over time and show whether a vendor is improving`,`Because the platform can't create a new assessment otherwise`,`So the third party can reuse old answers without reviewing them`,`Because old assessments set the tier for the next year`],
a:[0],
e:`History shows trends, supports audits, and helps assessors focus on what changed.

New assessments don't depend on old ones, answers should be reviewed, and tiering comes from the IRQ.`},

{d:"A",s:`A question doesn't apply to a particular third party. How should the vendor respond?`,
o:[`Mark it not applicable, with a short justification for the assessor`,`Leave it blank and hope the assessor doesn't notice it was skipped`,`Answer "yes" so that the overall score isn't affected by the question`,`Delete the question from the questionnaire before submitting the response`],
a:[0],
v:true,
e:`A justified not-applicable answer is honest and reviewable, and scoring can exclude it.

Blank or false answers undermine the assessment, and respondents can't edit the template.`},

{d:"A",s:`An engagement is cancelled before its assessment is finished. What should happen to the assessment?`,
o:[`Close it incomplete so it stops but its record is kept`,`Leave it open in case the engagement starts again`,`Delete it so it doesn't appear in any reports`,`Close it complete with the answers submitted so far`],
a:[0],
e:`Closing incomplete records why the work stopped without implying a finished result.

Leaving it open creates noise, deleting loses the record, and closing complete misrepresents it.`},

{d:"A",s:`How are assessment scores typically translated into ratings such as low, medium, and high?`,
o:[`Score ranges are mapped to ratings in the configuration`,`Assessors pick a rating based on their impression`,`Third parties choose the rating that fits their score`,`Ratings are assigned in rotation across vendors`],
a:[0],
e:`Configured score ranges make ratings consistent and explainable across all assessments.

Impressions, self-selection, and rotation aren't valid methods.`},

{d:"A",s:`An engagement has security, privacy, and continuity assessments. How do they relate to its overall result?`,
o:[`Together they inform the engagement's residual risk`,`Only the first assessment completed counts toward the result`,`The assessment with the lowest score is ignored as an outlier`,`They must be merged into a single questionnaire after submission`],
a:[0],
e:`Each domain contributes to the overall picture of the relationship. Ignoring any of them would hide risk.

Order of completion doesn't matter, outliers aren't discarded, and merging isn't needed.`},

{d:"A",s:`Several people at a third party contribute to one questionnaire. How can they coordinate before submitting?`,
o:[`Collaborate on the saved draft before submitting`,`Each person submits their own copy, and the assessor merges them`,`They email answers to the assessor, who enters them on their behalf`,`Only one person can ever see the questionnaire at a time`],
a:[0],
e:`Saved drafts and delegation let several contacts contribute, and one submission keeps the response coherent.

Multiple submissions or assessor data entry create confusion and break attribution.`},

{d:"A",s:`How can an assessor ask a third party a question about a specific response?`,
o:[`Use comments on the response so the conversation stays on the record`,`Call the vendor on the phone and keep no record of what was discussed`,`Send a text message to the vendor contact's personal mobile phone`,`Edit the question text itself so that it includes the follow-up question`],
a:[0],
v:true,
e:`Comments on the response keep the exchange attached to the evidence, visible to both sides, and auditable.

Unrecorded calls, personal texts, and edited questions lose the trail.`},

{d:"A",s:`An internal team performs an onsite visit to a critical vendor. How should the results be recorded?`,
o:[`As an assessment completed by the internal team and linked to the engagement`,`In a private notebook that the visiting assessor keeps for their own reference`,`As a free-text comment added to the third party's company record afterward`,`They don't need to be recorded, as long as the visit found nothing of concern`],
a:[0],
e:`Recording the visit as an assessment keeps results structured, scored, and linked to the engagement and its risk.

Private notes and comments aren't structured evidence, and clean results still need recording.`},

{d:"A",s:`What typically triggers a privacy assessment for an engagement?`,
o:[`IRQ answers showing personal data processing`,`The third party having a website privacy policy`,`The engagement's contract value exceeding a threshold`,`The third party's headquarters being in the same country`],
a:[0],
e:`Processing personal data is what creates privacy risk, so IRQ answers about it trigger the privacy assessment.

Having a privacy policy, spend, or location alone don't determine whether privacy review applies.`},

{d:"A",s:`Why use the same questionnaire template across similar third parties?`,
o:[`Results are comparable across vendors`,`It lets every third party skip questions that don't suit them`,`It means assessors no longer need to review the answers`,`It's required before a third party can log in to the portal`],
a:[0],
e:`Consistent templates produce comparable scores and findings across vendors.

Templates don't let vendors skip questions, remove review, or affect portal access.`},

{d:"A",s:`Some sections of a questionnaire matter more than others. How can scoring reflect this?`,
o:[`Weight the important categories more`,`Put the important sections at the end of the form`,`Make the important sections optional to answer`,`Score only the important sections and ignore the rest`],
a:[0],
e:`Category weights let critical areas, such as access control, drive the overall score more than minor ones.

Position, optionality, and ignoring sections don't reflect importance properly.`},

{d:"A",s:`A numeric question asks for the percentage of systems patched within 30 days. How can bad input be prevented?`,
o:[`Validate the answer to a range from 0 to 100`,`Let the vendor enter any text they like`,`Ask the vendor to round to the nearest thousand`,`Convert the question into an attachment question`],
a:[0],
e:`Range validation catches impossible values at entry. Free text, odd rounding, or attachments make the answer harder to use.`},

{d:"A",s:`Which metric helps identify bottlenecks in the assessment process?`,
o:[`Average time from issuing an assessment to closing it, by stage`,`The number of questions in the program's longest questionnaire`,`The number of colors used in the third-party portal's theme`,`The number of third parties that have a public company website`],
a:[0],
e:`Cycle time by stage — awaiting response, under review — shows where assessments get stuck and where to add capacity or reminders.

Question counts, colors, and websites don't reveal process bottlenecks.`},

{d:"A",s:`A vendor says it has no incident response plan, but scores well elsewhere. How can a program make sure this isn't hidden by the average?`,
o:[`Mark it critical, so a failing answer flags the result regardless of the total`,`Give the question a very low weight so it barely affects the overall score`,`Remove the question from future questionnaires so it stops skewing results`,`Let the assessor decide whether to mention the gap in the final summary`],
a:[0],
v:true,
e:`Critical (knockout) questions ensure severe gaps surface even when other answers are strong, typically with an issue raised.

Lowering weight or removing the question hides the gap, and discretion makes treatment inconsistent.`},

{d:"P",s:`A third-party contact forgets their portal password. What is the best experience?`,
o:[`Self-service password reset or SSO`,`Emailing their password to the internal assessor in plain text`,`Creating a brand-new account and deactivating the old one`,`Asking the third party to stop using the portal`],
a:[0],
e:`Self-service reset or single sign-on keeps vendors moving without support tickets.

Plain-text passwords are insecure, new accounts break history, and abandoning the portal defeats the process.`},

{d:"P",s:`When a third-party contact logs in to the portal, what should they see first?`,
o:[`Their open assessments and issues`,`Every other third party's assessment results for comparison`,`The internal risk register for the whole organization`,`The platform's system administration settings`],
a:[0],
e:`A clear view of their own open work helps vendors respond quickly.

Other vendors' data, internal risk data, and admin settings must never be visible.`},

{d:"P",s:`A primary contact wants a colleague to help with assessments. How can they do this?`,
o:[`Add the colleague as a contact through the portal, subject to configuration`,`Share their own portal login and password with the colleague directly`,`Email the questionnaire to the colleague so they can fill it in offline`,`Ask the colleague to register a separate company record for themselves`],
a:[0],
v:true,
e:`Primary contacts can typically manage their company's contacts, giving the colleague their own identity and access.

Shared logins break attribution, email bypasses the platform, and separate company records create duplicates.`},

{d:"P",s:`A third party has been assigned remediation work for an issue. Where should they provide updates and evidence?`,
o:[`On the issue or remediation task in the portal`,`In an email to the internal relationship owner`,`On a public file-sharing site`,`In the next annual assessment`],
a:[0],
e:`Updating the issue in the portal keeps evidence with the finding and visible to the people tracking it.

Email and file-sharing sites break the trail, and waiting for the next assessment delays remediation.`},

{d:"P",s:`How can a third-party contact ask the assessor a question about a requirement?`,
o:[`Through comments or messages on the assessment in the portal`,`By calling the assessor directly on their personal mobile phone`,`By posting the question publicly on the assessor's social media`,`They can't, so third parties must guess what each question means`],
a:[0],
v:true,
e:`In-portal communication keeps clarifications on the record and visible to both sides.

Personal phones and social media are inappropriate, and guessing leads to poor answers.`},

{d:"P",s:`A global program works with vendors in many countries. How can the portal support them?`,
o:[`Offer translated portal content and questionnaires where needed`,`Require every vendor to answer in one language, whatever their location`,`Give vendors who don't speak English read-only access to the portal`,`Exclude vendors located outside the home country from the program`],
a:[0],
e:`Localization improves response quality and speed for international vendors.

Forcing one language reduces accuracy, and restricting or excluding vendors creates gaps.`},

{d:"P",s:`Why apply strong authentication, such as MFA, to third-party portal accounts?`,
o:[`Vendor accounts can reach sensitive assessment data and must be protected`,`It's only needed for internal users and never for any external portal users`,`It lets third parties skip answering the questions that are marked mandatory`,`It makes the portal load faster for third-party users in other countries`],
a:[0],
e:`Assessment data — security weaknesses, evidence — is sensitive, and vendor accounts are a target.

External accounts need protection too, and MFA doesn't affect questions or speed.`},

{d:"P",s:`A third-party contact leaves their company. What should happen to their portal account?`,
o:[`Deactivate it and reassign open work`,`Leave it active in case they return to the company`,`Transfer it to the internal assessor's name`,`Delete the company record along with it`],
a:[0],
e:`Deactivating removes access promptly, and reassigning keeps work moving.

Leaving accounts active is a standing risk, and transferring or deleting records loses history.`},

{d:"P",s:`A third party updates its headquarters address and certifications in the portal. What's a sensible control?`,
o:[`Have changes reviewed internally before they update the official record`,`Accept every change instantly, with no review by anyone at your company`,`Block third parties from ever changing any information on their record`,`Ask the third party to mail in paper forms for every change instead`],
a:[0],
v:true,
e:`Letting vendors propose updates saves effort, and internal review protects data quality.

No review risks bad data, blocking changes leaves records stale, and paper forms are slow.`},

{d:"P",s:`What should notifications sent to third parties include?`,
o:[`A direct link to the task in the portal`,`The full text of every question in the assessment`,`The vendor's internal risk score and rating`,`Other vendors' names and contact details`],
a:[0],
e:`A direct link takes vendors straight to their work. Full questionnaires in email, internal scores, and other vendors' details don't belong in notifications.`},

{d:"P",s:`Before go-live, how can the team confirm third parties see only their own data?`,
o:[`Test as sample third-party users from different companies`,`Assume the default settings are correct without testing`,`Test only as an administrator, who can see everything`,`Ask third parties to report anything unexpected after go-live`],
a:[0],
e:`Testing as real vendor users, across different companies, proves isolation works before anyone external sees the portal.

Assumptions, admin testing, and waiting for reports risk a data exposure.`},

{d:"S",s:`How do business users usually start a new third-party request?`,
o:[`Through a catalog item or intake form that captures the key details`,`By emailing the risk team a free-text description of the new vendor`,`By asking the third party to submit its own onboarding request`,`By creating the company record directly in the table without a form`],
a:[0],
e:`A structured intake form captures what's needed for tiering and routes the request into the workflow.

Email loses structure, vendors don't initiate their own onboarding, and direct table edits bypass the process.`},

{d:"S",s:`How can procurement and TPRM work together when a new vendor is requested?`,
o:[`A procurement request triggers TPRM intake first`,`Procurement signs the contract first, and TPRM reviews it next year`,`TPRM only reviews vendors after the first invoice is paid`,`They work separately and share nothing`],
a:[0],
e:`Connecting procurement to TPRM ensures due diligence happens before commitment, when you have leverage.

Reviewing after signing or payment means issues can't shape the contract.`},

{d:"S",s:`Due diligence for a new critical vendor is complete. What should happen before the contract is signed?`,
o:[`An onboarding approval confirms the residual risk is acceptable`,`The assessment is deleted so the vendor's record looks clean`,`The vendor is automatically reset to tier 3 for its first year`,`The contract is signed automatically as soon as the assessment closes`],
a:[0],
e:`Approval ensures someone accountable reviews the results and accepts the risk before the business commits.

Deleting evidence, resetting tiers, or auto-signing skip that decision.`},

{d:"S",s:`How can a program track whether assessments are reviewed within its target timeframe?`,
o:[`Use SLA timers on assessment stages`,`Ask assessors to estimate how long reviews usually take`,`Measure only how long third parties take to respond`,`Track nothing, since timing doesn't affect risk`],
a:[0],
v:true,
e:`SLAs on stages make internal performance visible, alongside vendor response times.

Estimates are unreliable, vendor time is only half the picture, and delays do leave risk unaddressed.`},

{d:"S",s:`A third party agrees to fix a finding. What should the remediation record include?`,
o:[`A plan with actions, owners, and dates`,`Only a note saying "will fix" with no dates`,`A promise to address it in next year's assessment`,`Nothing, since the vendor has agreed to fix it`],
a:[0],
e:`Plans with owners and dates make progress trackable and late remediation visible.

Vague notes and deferred promises can't be tracked.`},

{d:"S",s:`A vendor's remediation is 60 days overdue. Who should the escalation reach?`,
o:[`The internal relationship owner, who has leverage with the vendor`,`The vendor's marketing department, which manages the vendor's brand`,`Every employee in the organization, through a company-wide email`,`No one, because overdue remediation items close automatically`],
a:[0],
e:`The relationship owner holds the commercial relationship and can push the vendor or decide on next steps with risk management.

Marketing teams and company-wide emails aren't appropriate, and automatic closure hides the gap.`},

{d:"S",s:`Who should be notified when an engagement's tier is assigned?`,
o:[`The requester and relationship owner, so they know what due diligence follows`,`The third party, so it can dispute the assigned tier through the portal at once`,`All employees, so everyone in the company knows each vendor's tier`,`No one, because tiers are only used for reporting to the board each year`],
a:[0],
v:true,
e:`Internal stakeholders need to know what's coming and how long it may take.

Vendors don't set their own tier, broad broadcasts add noise, and tiers drive work rather than just reports.`},

{d:"S",s:`What do program dashboards help third-party risk managers do?`,
o:[`See status, overdue work, risk distribution, and trends across the portfolio`,`Edit every third party's submitted answers directly from the dashboard view`,`Approve every pending engagement automatically when the dashboard loads`,`Replace the need for assessments and tiering once enough data is collected`],
a:[0],
e:`Dashboards give managers a portfolio view for prioritizing and reporting.

They don't edit responses, approve automatically, or replace the process.`},

{d:"S",s:`A business owner says an existing vendor will now access the production network. What process should run?`,
o:[`A re-tiering workflow to update inherent risk and trigger any new assessments`,`Nothing until the vendor's contract comes up for renewal in a future year`,`An immediate offboarding of the vendor, since its scope has changed`,`A request for the vendor to lower its own tier through the portal`],
a:[0],
e:`A material scope change means a new IRQ or re-tiering, which drives the right additional due diligence.

Waiting leaves risk unassessed, offboarding is extreme, and vendors don't set tiers.`},

{d:"S",s:`Which tasks belong in a third-party offboarding workflow?`,
o:[`Revoke access, retrieve or destroy data, and close open work`,`Send a satisfaction survey and ask the vendor for a final discount`,`Raise the vendor's tier to 1 for the last month of the relationship`,`Start a full due-diligence assessment of the vendor's current controls`],
a:[0],
e:`Offboarding closes the risk: access removed, data handled, assessments and issues closed or cancelled.

Surveys, tier changes, and new assessments aren't offboarding controls.`},

{d:"S",s:`Why keep a record of every approval and decision in the TPRM workflow?`,
o:[`Auditors expect to see who decided what, and why`,`The records are needed only if the vendor asks for them`,`It lets decisions be changed later without anyone knowing`,`It's only required for vendors in tier 3`],
a:[0],
e:`An audit trail of approvals, acceptances, and exceptions shows the program is operating as designed.

It isn't for vendors, mustn't allow silent changes, and matters most for critical relationships.`},

{d:"O",s:`How can the CMDB support third-party risk management?`,
o:[`By linking third parties to the services they support`,`By storing each third party's questionnaire answers as CI attributes`,`By replacing third-party company records with CIs`,`It can't; the CMDB and TPRM don't share data`],
a:[0],
e:`Links between vendors and the applications or services they support show business impact and help prioritize.

Questionnaire answers belong on assessments, and company records aren't replaced by CIs.`},

{d:"O",s:`A vendor reports a breach affecting your data. How can Security Incident Response connect to TPRM?`,
o:[`A security incident is created and linked to the third party and engagement`,`The vendor's tier is lowered as a reward for reporting the breach promptly`,`The breach is recorded only in an email thread between the two companies`,`TPRM closes all of the vendor's open assessments until the breach is resolved`],
a:[0],
e:`Linking the incident to the third party connects the response with the vendor's risk record and can trigger reassessment.

Lowering the tier, using email only, or closing assessments would lose important context.`},

{d:"O",s:`How does business continuity planning use third-party data?`,
o:[`Business impact analyses identify vendor dependencies`,`Continuity plans replace due-diligence assessments of vendors`,`Third parties write the organization's continuity plans`,`Third-party data isn't used in continuity planning`],
a:[0],
e:`BIAs reveal which critical processes depend on which vendors, which informs both continuity planning and TPRM criticality.

Continuity plans don't replace due diligence, and vendors don't write your plans.`},

{d:"O",s:`How can Policy and Compliance be applied to third parties?`,
o:[`Model third parties as entities so controls and attestations apply to them`,`Copy each third-party record into the policy table as a separate policy`,`Ask third parties to publish your internal policies on their own websites`,`Policy and Compliance can't be used with third parties in any way`],
a:[0],
e:`Treating third parties as GRC entities lets policy statements generate controls for them, tracked with the rest of the compliance program.

Copying records, delegating policies, or excluding vendors isn't how it works.`},

{d:"O",s:`Where in a source-to-pay process should a TPRM check happen?`,
o:[`Before the purchase order, so risk is reviewed first`,`After the first invoice is paid, once the relationship is established`,`Only at contract renewal, several years later`,`Never; procurement and TPRM are separate`],
a:[0],
e:`A gate before commitment ensures risk is understood while terms can still be negotiated.

Checking after payment or only at renewal leaves the organization exposed in the meantime.`},
  ],
};
