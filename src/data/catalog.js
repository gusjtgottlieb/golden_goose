// Listing metadata for the home page. Exam content lives in ./exams/*.json and is
// loaded on demand so the home page doesn't download every question bank.
export const VENDORS = [
  {
    name: "ServiceNow",
    blurb: "Implementation specialist exams for the Now Platform's GRC and risk applications.",
  },
  {
    name: "Microsoft",
    blurb: "Role-based Microsoft 365 and Azure certifications, built to the published skills outline.",
  },
];

export const EXAMS = [
  {
    id: "servicenow-cis-tprm-1",
    vendor: "ServiceNow",
    code: "CIS-TPRM",
    name: "Third-party Risk Management",
    title: "Practice Exam 1",
    questions: 60,
    minutes: 90,
    load: () => import("./exams/servicenow-cis-tprm-1.json"),
  },
  {
    id: "microsoft-sc-401-1",
    vendor: "Microsoft",
    code: "SC-401",
    name: "Information Security Administrator",
    title: "Practice Exam 1",
    questions: 50,
    minutes: 100,
    load: () => import("./exams/microsoft-sc-401-1.json"),
  },
  {
    id: "microsoft-sc-401-2",
    vendor: "Microsoft",
    code: "SC-401",
    name: "Information Security Administrator",
    title: "Practice Exam 2",
    questions: 50,
    minutes: 100,
    load: () => import("./exams/microsoft-sc-401-2.json"),
  },
  {
    id: "microsoft-sc-401-3",
    vendor: "Microsoft",
    code: "SC-401",
    name: "Information Security Administrator",
    title: "Practice Exam 3",
    questions: 50,
    minutes: 100,
    load: () => import("./exams/microsoft-sc-401-3.json"),
  },
];

export const findExam = (id) => EXAMS.find((e) => e.id === id);
