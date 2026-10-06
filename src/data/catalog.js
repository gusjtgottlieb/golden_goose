// Listing metadata for the home page. Question banks live in ./banks/*.json and
// are loaded on demand so the home page doesn't download every bank.
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

export const CERTS = [
  {
    id: "servicenow-cis-tprm",
    vendor: "ServiceNow",
    code: "CIS-TPRM",
    name: "Third-party Risk Management",
    bankSize: 60,
    fullLength: 60,
    minutes: 90,
    load: () => import("./banks/servicenow-cis-tprm.json"),
  },
  {
    id: "microsoft-sc-401",
    vendor: "Microsoft",
    code: "SC-401",
    name: "Information Security Administrator",
    bankSize: 150,
    fullLength: 50,
    minutes: 100,
    load: () => import("./banks/microsoft-sc-401.json"),
  },
];

export const findCert = (id) => CERTS.find((c) => c.id === id);
