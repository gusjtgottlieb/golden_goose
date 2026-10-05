# Golden Goose Practice Tests

Free, full-length practice exams for IT certifications, deployed to GitHub Pages at
https://gusjtgottlieb.github.io/golden_goose/.

Current exams:

| Vendor | Exam | Practice exams | Questions each |
|--------|------|----------------|----------------|
| ServiceNow | CIS-TPRM (Third-party Risk Management) | 1 | 60 |
| Microsoft | SC-401 (Information Security Administrator) | 3 | 50 |

Each exam runs in **exam mode** (timed, scored at the end) or **study mode** (untimed, explanation
after each answer), with flag-for-review, a question palette, a per-section score breakdown, and a
filterable answer review. Keyboard: `A`–`D` pick an option, `←`/`→` move between questions.

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

## Adding an exam

1. Add a JSON file to `src/data/exams/` in this shape:

   ```json
   {
     "id": "vendor-code-n",
     "vendor": "Microsoft",
     "code": "AZ-900",
     "name": "Full certification name",
     "title": "Practice Exam 1",
     "minutes": 60,
     "passPercent": 70,
     "readinessPercent": 80,
     "note": "Scoring caveats shown on the start screen.",
     "domains": [{ "id": "D1", "name": "Cloud concepts", "weight": "25–30%" }],
     "groups": { "cs": { "title": "Case Study — Contoso", "body": "Shared scenario text" } },
     "questions": [
       {
         "id": 1,
         "domain": "D1",
         "group": "cs",
         "stem": "Question text",
         "options": ["First", "Second", "Third", "Fourth"],
         "answer": [1],
         "explanation": "Paragraphs separated by a blank line.",
         "verify": true
       }
     ]
   }
   ```

   `answer` is a list of 0-based option indexes; more than one makes it a "choose N" question.
   `group` (shared case-study or yes/no context) and `verify` (release-sensitive note) are optional.

2. Add a matching entry to `EXAMS` in `src/data/catalog.js`. If it's a new vendor, add it to
   `VENDORS` too. `npm test` checks that every catalog entry matches its JSON file.
