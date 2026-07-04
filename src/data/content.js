export const profile = {
  name: "Koteesh Vijayasekar Thugundram",
  shortName: "Koteesh Vijayasekar",
  initials: "KV",
  title: "BI Developer",
  tagline: "Power BI · Microsoft Fabric · Data Analytics",
  location: "Dublin, Ireland",
  workAuth: "Irish Stamp 1G — No Sponsorship Required (for Ireland)",
  email: "koteesh85@gmail.com",
  linkedin: "https://www.linkedin.com/in/koteesh",
  github: "https://github.com/koteeshv08",
  resumeUrl: "/Koteesh_Vijayasekar_Resume.pdf",
  openTo: "Open to Dublin, Cork, Galway, continental Europe, and remote-first roles",
  summary:
    "Results-driven BI Developer with 2.5+ years of enterprise experience designing and delivering end-to-end Power BI solutions at scale. Proven track record serving 10,000+ global users at Software AG, reducing manual reporting effort by ~75% and cutting dashboard outages by ~40%. Hands-on expertise across Microsoft Fabric (Lakehouse, OneLake, Spark Notebooks, Direct Lake, Deployment Pipelines), advanced DAX, Row-Level Security, and Azure Data Factory. MSc research produced a novel Causal-QMIX framework applying causal inference (CATE) to multi-agent reinforcement learning, demonstrating depth in Python, PyTorch, and statistical modelling beyond typical BI profiles. Holds PL-300 (Power BI Data Analyst Associate) certification.",
};

export const stats = [
  { value: "2.5+", label: "Years of BI experience" },
  { value: "10,000+", label: "Users served across 70+ countries" },
  { value: "20+", label: "Enterprise Power BI dashboards shipped" },
  { value: "~75%", label: "Manual reporting effort eliminated" },
];

export const achievements = [
  "Designed and maintained Power BI dashboards consumed by 10,000+ users across global teams at Software AG.",
  "Reduced manual reporting effort by ~75% through automated pipelines via Azure Data Factory and Power Automate.",
  "Cut dashboard outage rate by ~40% by implementing robust data validation layers and alerting workflows.",
  "Received a SPOT Award at Software AG for exceptional performance in data engineering and BI delivery.",
  "Built Medallion Architecture solutions on Microsoft Fabric (Bronze/Silver/Gold Lakehouse) accelerating data availability.",
];

export const experience = [
  {
    role: "BI Engineer / Power BI Developer",
    company: "Software AG",
    period: "Aug 2022 – Aug 2024",
    location: "Remote / India",
    note: "Started as Intern (Aug 2022) → promoted to Assistant Consultant",
    bullets: [
      "Architected and deployed 20+ enterprise Power BI dashboards supporting global finance, operations, and HR functions for 10,000+ users across 70+ countries.",
      "Engineered advanced DAX measures, calculated tables, and time-intelligence formulas to deliver self-service analytics with Row-Level Security (RLS) for role-based data access control.",
      "Built and maintained ADF pipelines ingesting data from SQL Server, SharePoint, and REST APIs into Azure Data Lake Gen2, significantly reducing ETL processing time.",
      "Migrated legacy reports to Microsoft Fabric: implemented Lakehouse (OneLake), Spark Notebooks (PySpark), Dataflows Gen2, and Direct Lake mode to reduce dataset refresh latency.",
      "Developed Power BI Embedded solutions integrated into internal portals, enabling non-technical stakeholders to access governed analytics without a Power BI licence.",
      "Deployed deployment pipelines (Dev → Test → Prod) and semantic models for CI/CD governance across the BI estate.",
      "Automated repetitive operational tasks using Power Automate and built Canvas Apps in Power Apps, eliminating ~75% of manual reporting effort across three departments.",
      "Collaborated with business analysts, data owners, and IT to translate complex requirements into scalable BI solutions; presented findings directly to senior leadership.",
    ],
  },
];

export const projects = [
  {
    name: "Causal-QMIX: Multi-Agent RL in StarCraft II",
    subtitle: "MSc Research · University of Galway",
    period: "Aug 2025",
    description:
      "Designed and integrated a Conditional Average Treatment Effect (CATE) module into the QMIX multi-agent reinforcement learning framework to estimate the causal influence of individual agent actions on team outcomes — demonstrating depth in statistical modelling and ML pipeline engineering beyond typical BI work.",
    bullets: [
      "Achieved +8.5% win-rate improvement and ~14% faster episode resolution vs. baseline QMIX on symmetric StarCraft II scenarios.",
      "Benchmarked across 5 SMAC maps: 3m, 2s3z, 5m_vs_6m, MMM2, and Corridor.",
      "Built in PyTorch 1.13 with a custom neural network architecture (89→64→32→1), a causal-aware prioritised replay buffer, and a fully reproducible codebase.",
    ],
    stack: ["Python", "PyTorch", "PyMARL", "SMAC / StarCraft II", "Causal Inference"],
    repo: "https://github.com/koteeshv08/CT5108-Causal-HAMRL",
    meta: "Supervisor: Dr. Frank Glavin",
  },
  {
    name: "Microsoft Fabric Retail Analytics Pipeline",
    subtitle: "End-to-end Data Engineering",
    period: "DP-700 certification prep",
    description:
      "An end-to-end data engineering solution implementing the Medallion Architecture (Bronze → Silver → Gold) for retail analytics on Microsoft Fabric, from raw ingestion to Direct Lake reporting.",
    bullets: [
      "Delta format across all layers for ACID transactions and temporal data access.",
      "Star schema design — one fact table (fact_sales) joined to dim_customer, dim_product, and dim_date.",
      "Silver layer partitioned by Country for optimized query pruning; daily orchestration via Fabric triggers.",
      "Direct Lake mode Power BI dashboards for near real-time reporting.",
    ],
    stack: ["Microsoft Fabric", "OneLake", "PySpark", "SQL Analytics Endpoint", "Power BI", "Delta Lake"],
    repo: "https://github.com/koteeshv08/fabric-retail-pipeline",
    meta: "Built for Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
  },
];

export const skills = [
  {
    category: "BI & Visualisation",
    items: [
      "Power BI Desktop & Service (Advanced DAX)",
      "Row-Level Security (RLS) & Object-Level Security",
      "Power BI Embedded",
      "Semantic Models / Tabular (XMLA Endpoint)",
      "Deployment Pipelines (Dev/Test/Prod CI/CD)",
      "Dataflows Gen2 & Power Query (M)",
      "Power Automate & Power Apps (Canvas)",
    ],
  },
  {
    category: "Microsoft Fabric & Cloud",
    items: [
      "Microsoft Fabric: Lakehouse, OneLake, Direct Lake",
      "Fabric Spark Notebooks (PySpark)",
      "Azure Data Factory (ADF) — Pipelines & Triggers",
      "Azure Data Lake Gen2 (ADLS Gen2)",
      "Medallion Architecture (Bronze/Silver/Gold)",
    ],
  },
  {
    category: "Data Engineering & Languages",
    items: [
      "SQL / T-SQL (advanced queries, stored procedures)",
      "Python: pandas, PySpark, numpy, PyTorch",
      "PostgreSQL",
      "VBA (Excel Automation)",
      "Git / GitHub (version control & reproducible research)",
    ],
  },
  {
    category: "Soft Skills & Domain",
    items: [
      "Stakeholder Management & Requirements Gathering",
      "Agile / Scrum delivery",
      "Cross-functional collaboration (Finance, HR, Ops)",
      "Data Storytelling & Executive Reporting",
      "Self-Service Analytics Enablement",
    ],
  },
];

export const education = [
  {
    degree: "MSc in Computer Science (Data Analytics)",
    institution: "University of Galway, Ireland",
    period: "2024 – 2025",
    grade: "Grade: 2.1 (Upper Second Class Honours)",
    detail:
      "Key modules: Machine Learning, Big Data Analytics, Statistical Inference, Data Visualisation, Cloud Computing. Dissertation: Causal Influence–Guided Multi-Agent RL in StarCraft II — CATE-based prioritised replay integrated into QMIX framework (PyTorch).",
  },
  {
    degree: "B.E. in Computer Science",
    institution: "MS Ramaiah Institute of Technology, India",
    period: "2018 – 2022",
    grade: "Grade: First Class",
  },
];

export const certifications = [
  {
    name: "Microsoft PL-300: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    status: "Active",
  },
  {
    name: "Microsoft DP-600: Fabric Analytics Engineer Associate",
    issuer: "Microsoft",
    status: "In preparation",
  },
  {
    name: "Microsoft DP-700: Fabric Data Engineer Associate",
    issuer: "Microsoft",
    status: "In preparation",
  },
];

export const languages = [
  { name: "English", level: "Professional proficiency" },
  { name: "Telugu", level: "Native" },
  { name: "Kannada", level: "Professional proficiency" },
  { name: "Tamil", level: "Professional proficiency" },
  { name: "Hindi", level: "Professional proficiency" },
];
