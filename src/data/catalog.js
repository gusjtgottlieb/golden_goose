// Listing metadata for the home page. Question banks live in ./banks/*.json and
// are loaded on demand so the home page doesn't download every bank.
export const VENDORS = [
  {
    name: "ServiceNow",
    blurb: "Implementation specialist exams for the Now Platform's risk, compliance, and CMDB applications.",
  },
  {
    name: "Microsoft",
    blurb: "Role-based Microsoft 365 and Azure certifications, built to the published skills outline.",
  },
];

export const CERTS = [
  {
    id: "servicenow-cis-df",
    vendor: "ServiceNow",
    code: "CIS-DF",
    name: "Data Foundations (CMDB and CSDM)",
    bankSize: 188,
    fullLength: 75,
    minutes: 90,
    load: () => import("./banks/servicenow-cis-df.json"),
  },
  {
    id: "servicenow-cis-rc",
    vendor: "ServiceNow",
    code: "CIS-RC",
    name: "Risk and Compliance",
    bankSize: 150,
    fullLength: 60,
    minutes: 90,
    load: () => import("./banks/servicenow-cis-rc.json"),
  },
  {
    id: "servicenow-cis-tprm",
    vendor: "ServiceNow",
    code: "CIS-TPRM",
    name: "Third-party Risk Management",
    bankSize: 150,
    fullLength: 60,
    minutes: 90,
    load: () => import("./banks/servicenow-cis-tprm.json"),
  },
  {
    id: "microsoft-sc-900",
    vendor: "Microsoft",
    code: "SC-900",
    name: "Security, Compliance, and Identity Fundamentals",
    bankSize: 115,
    fullLength: 45,
    minutes: 45,
    load: () => import("./banks/microsoft-sc-900.json"),
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
