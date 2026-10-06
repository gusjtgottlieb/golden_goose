# Golden Goose Practice Tests

Free, full-length practice exams for IT certifications, deployed to GitHub Pages at
https://gusjtgottlieb.github.io/golden_goose/.

Current question banks:

| Vendor | Certification | Bank size | Full-length exam |
|--------|---------------|-----------|------------------|
| ServiceNow | CSA (Certified System Administrator) | 150 | 60 questions / 90 min |
| ServiceNow | CIS-DF (Data Foundations: CMDB and CSDM) | 188 | 75 questions / 90 min |
| ServiceNow | CIS-RC (Risk and Compliance) | 150 | 60 questions / 90 min |
| ServiceNow | CIS-SIR (Security Incident Response) | 150 | 60 questions / 90 min |
| ServiceNow | CIS-TPRM (Third-party Risk Management) | 150 | 60 questions / 90 min |
| ServiceNow | CIS-VR (Vulnerability Response) | 150 | 60 questions / 90 min |
| Microsoft | SC-900 (Security, Compliance, and Identity Fundamentals) | 115 | 45 questions / 45 min |
| Microsoft | SC-401 (Information Security Administrator) | 150 | 50 questions / 100 min |

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
```

Pushing to `main` runs `.github/workflows/build-and-deploy.yml`, which builds, tests, and publishes
`build/` to the `gh-pages` branch. The `homepage` field in `package.json` must stay set to the Pages
URL or the deployed page loads blank.

## Adding questions or a certification

Each certification is one question bank in `src/data/banks/`:

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

To add a new certification, add its bank and an entry in `CERTS` in `src/data/catalog.js` (and the
vendor to `VENDORS` if it's new). `npm test` checks that every catalog entry matches its bank.
