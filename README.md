# Golden Goose Practice Tests

Free, full-length practice exams for IT certifications, deployed to GitHub Pages at
https://gusjtgottlieb.github.io/golden_goose/.

Current question banks:

| Vendor | Certification | Bank size | Full-length exam |
|--------|---------------|-----------|------------------|
| ServiceNow | CSA (Certified System Administrator) | 150 | 60 questions / 90 min |
| ServiceNow | CIS-DF (Data Foundations: CMDB and CSDM) | 188 | 75 questions / 90 min |
| ServiceNow | CIS-ITSM (IT Service Management) | 150 | 60 questions / 90 min |
| ServiceNow | CIS-RC (Risk and Compliance) | 150 | 60 questions / 90 min |
| ServiceNow | CIS-SIR (Security Incident Response) | 150 | 60 questions / 90 min |
| ServiceNow | CIS-TPRM (Third-party Risk Management) | 150 | 60 questions / 90 min |
| ServiceNow | CIS-VR (Vulnerability Response) | 150 | 60 questions / 90 min |
| Microsoft | AZ-900 (Azure Fundamentals) | 125 | 50 questions / 45 min |
| Microsoft | AI-901 (Azure AI Fundamentals) | 125 | 50 questions / 45 min |
| Microsoft | SC-900 (Security, Compliance, and Identity Fundamentals) | 115 | 45 questions / 45 min |
| Microsoft | SC-100 (Cybersecurity Architect) | 125 | 50 questions / 120 min |
| Microsoft | SC-200 (Security Operations Analyst) | 125 | 50 questions / 100 min |
| Microsoft | SC-300 (Identity and Access Administrator) | 125 | 50 questions / 100 min |
| Microsoft | SC-401 (Information Security Administrator) | 150 | 50 questions / 100 min |
| Microsoft | SC-500 (Cloud and AI Security Engineer) | 125 | 50 questions / 100 min |
| CompTIA | SY0-801 (Security+) | 225 | 90 questions / 90 min |
| CompTIA | CS0-004 (CySA+) | 212 | 85 questions / 165 min |
| CompTIA | CY0-001 (SecAI+) | 150 | 60 questions / 60 min |
| CompTIA | N10-009 (Network+) | 225 | 90 questions / 90 min |
| CompTIA | 220-1201 (A+ Core 1) | 225 | 90 questions / 90 min |
| CompTIA | 220-1202 (A+ Core 2) | 225 | 90 questions / 90 min |

Banks hold about 2.5× a full-length exam, split across domains by blueprint weight, so repeat
attempts draw fresh questions.

Users pick a certification, then build an exam: **exam mode** (timed, scored at the end) or
**study mode** (untimed, explanation after each answer), a length (10, 25, full length, or custom),
and focus areas. `src/lib/buildExam.js` then draws questions from the bank:

- the count is split across the chosen domains in proportion to each domain's share of the bank;
- questions sharing a scenario (case study, yes/no) are drawn together and stay consecutive;
- questions this browser hasn't seen yet come first (tracked in `localStorage`);
- sectioned banks such as SC-401 keep the real exam's section order; others are shuffled.

The exam-mode clock scales from the full-length time limit. Exams also support flag-for-review,
a question palette, a per-section score breakdown, and a filterable answer review. Keyboard:
`A`–`D` pick an option, `←`/`→` move between questions.

## Development

```bash
npm ci
npm start      # http://localhost:3000/golden_goose
npm test
npm run build
npm run banks:build   # rebuild src/data/banks/*.json from content/banks/*.js
npm run banks:check   # content standards; CI runs this on every push and pull request
```

Pushing to `main` runs `.github/workflows/build-and-deploy.yml`, which builds, tests, and publishes
`build/` to the `gh-pages` branch. The `homepage` field in `package.json` must stay set to the Pages
URL or the deployed page loads blank.

## Editing questions

Question banks are written in `content/banks/<bankId>.js` and built into `src/data/banks/<bankId>.json`,
which is what the site loads. Edit the source, never the JSON, then run `npm run banks:build` and commit
both. CI fails if a JSON file doesn't match its source. The exception is SC-401, which has no source
file and is edited directly in its JSON (its ids and case-study groups predate the source format).

In a source file, each question looks like this, with the correct answer listed first by convention:

```js
{d:"D1",s:`Question text?`,
o:[`Correct answer`,`Distractor`,`Distractor`,`Distractor`],
a:[0],
e:`Why the answer is right and why the main distractors aren't.`},
```

The build shuffles options with a seed taken from the question's id, so answer positions are balanced
but stable across builds. Ids come from a question's position (`sy0801-12` is the 12th question), so
add new questions at the end of a bank and replace questions in place rather than deleting them.

`npm run banks:check` enforces the content standards:

- every catalog entry and README row matches its bank;
- each question has four distinct options (or Yes/No), a valid answer, and an explanation of at
  least 60 characters, with no "all/none of the above";
- domain shares match the blueprint weights;
- answer positions are spread across A–D, and the correct answer is the longest option, or the
  shortest, at most 37% of the time, and never more than 20% longer than every distractor.

Authoring helpers in `tools/`:

| Command | Purpose |
|---|---|
| `node tools/review-bank.js sheet <bankId>` | Print every question with its answer and explanation for review |
| `node tools/review-bank.js scan [bankId ...]` | Flag stem echoes, short explanations, option letters, and near-duplicate stems |
| `node tools/balance-bank.js <bankId> [candidates.js]` | List answers that are the longest option, or apply length-balancing candidates |
| `node tools/edit-bank.js <bankId> <edits.js>` | Apply scripted text replacements, option rewrites, and question swaps |
| `node tools/coverage-bank.js <objectives.txt> <bankId>` | List exam-objective bullets the bank doesn't mention yet |

Vendor objectives text for `coverage-bank.js` goes in `content/objectives/`, which is gitignored
because vendors don't allow redistributing it.

## Adding a certification

Each certification is one question bank. The built JSON in `src/data/banks/` looks like this:

```json
{
  "id": "microsoft-az-900",
  "vendor": "Microsoft",
  "code": "AZ-900",
  "name": "Full certification name",
  "fullLength": 40,
  "minutes": 45,
  "passPercent": 70,
  "readinessPercent": 80,
  "sectioned": false,
  "note": "Scoring caveats shown on the setup screen.",
  "domains": [{ "id": "D1", "name": "Cloud concepts", "weight": "25–30%" }],
  "groups": { "cs1": { "title": "Case Study — Contoso", "body": "Shared scenario text" } },
  "questions": [
    {
      "id": "az900-1",
      "domain": "D1",
      "group": "cs1",
      "stem": "Question text",
      "options": ["First", "Second", "Third", "Fourth"],
      "answer": [1],
      "explanation": "Paragraphs separated by a blank line.",
      "verify": true
    }
  ]
}
```

- `id` must be unique within the bank; it's how "already seen" is tracked, so don't renumber
  existing questions.
- `answer` is a list of 0-based option indexes; more than one makes it a "choose N" question.
- `group` (shared scenario) and `verify` (release-sensitive note) are optional.
- `sectioned: true` keeps domains in `domains` order, like SC-401's case study → multiple
  choice → yes/no layout.

To add a new certification, write `content/banks/<bankId>.js` (the bank fields above, plus `idPrefix`
and a `Q` array of questions), run `npm run banks:build`, add an entry in `CERTS` in
`src/data/catalog.js` (and the vendor to `VENDORS` if it's new), and add a README row.
`npm test` and `npm run banks:check` both check that the catalog matches each bank.
