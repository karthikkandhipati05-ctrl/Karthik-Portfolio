export interface CaseStudy {
  businessContext: string;
  problem: string;
  hypothesis?: string;
  approach: string;
  tools: string[];
  metrics: string[];
  impact: string;
  tradeoffs?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    phone: string;
    location: string;
  };
  skills: {
    languages: string[];
    analytics: string[];
    tools: string[];
    cloud: string[];
  };
  experience: {
    company: string;
    role: string;
    duration: string;
    location: string;
    stakeholders: string[];
    caseStudy: CaseStudy;
  }[];
  projects: {
    name: string;
    caseStudy: CaseStudy;
  }[];
  education: { institution: string; degree: string; details: string }[];
  certifications: string[];
  quantifiedMetrics: string[];
}

export const resumeData: ResumeData = {
  name: 'Karthik Kandhipati',
  title: 'Data Scientist & Product Analytics Professional',
  summary:
    'Data Analyst with 6+ years of experience transforming regulated enterprise data in healthcare and financial services into executive-ready decisions. Combines SQL, Python, experimentation, BI, and cloud data engineering to improve growth, risk outcomes, and operational performance across cross-functional teams.',
  contact: {
    email: 'karthikkandhipati05@gmail.com',
    linkedin: '',
    github: '',
    phone: '682-360-5220',
    location: 'Arlington, Texas, USA'
  },
  skills: {
    languages: ['Python', 'SQL', 'SAS', 'Bash', 'Linux'],
    analytics: [
      'A/B Testing',
      'Hypothesis Testing',
      'Time Series Forecasting',
      'Anomaly Detection',
      'Feature Engineering',
      'Scikit-learn',
      'TensorFlow',
      'statsmodels',
      'NLP & Text Analytics'
    ],
    tools: [
      'Tableau',
      'Power BI',
      'Excel (Power Query, PivotTables, VBA)',
      'dbt',
      'Airflow',
      'GitHub Actions',
      'Jenkins',
      'Azure DevOps',
      'Jira',
      'Confluence'
    ],
    cloud: ['AWS (S3, Glue, Athena, Lambda, Redshift)', 'Azure (ADF, Databricks, Synapse, ADLS)', 'Snowflake', 'PostgreSQL', 'Oracle', 'SQL Server', 'MySQL', 'Teradata', 'Spark', 'Delta Lake', 'Kafka', 'Google Cloud Storage']
  },
  experience: [
    {
      company: 'Cleveland Clinic',
      role: 'Data Analyst',
      duration: 'September 2023 – Present',
      location: 'Texas, USA',
      stakeholders: ['Physicians', 'Nursing leaders', 'Revenue cycle', 'Operations managers', 'IT'],
      caseStudy: {
        businessContext:
          'Enterprise healthcare operations required unified visibility into access, throughput, and quality performance across inpatient, ambulatory, and call-center workflows.',
        problem:
          'Fragmented source systems and inconsistent KPI definitions slowed leadership decisions, caused reconciliation effort, and created disputes around operational metrics.',
        hypothesis:
          'If clinical, operational, and financial measures are standardized into governed marts and scorecards, leaders can decide faster and improve frontline throughput.',
        approach:
          'Built SQL marts from EHR, scheduling, and claims data with CTEs/window functions; automated Python extracts for daily trackers; designed Tableau and Power BI executive dashboards; ran A/B tests for digital check-in journeys; used NLP to classify patient feedback themes; and implemented secure sharing controls with data catalog tagging and masking rules.',
        tools: ['SQL', 'Python (pandas, NumPy)', 'Power BI', 'Tableau', 'Azure Databricks', 'ADLS', 'Azure Data Factory', 'NLP'],
        metrics: [
          'Improved leadership decision speed by 27%',
          'Reduced reconciliation time and improved reporting consistency by 25%',
          'Saved 11 hours per week and improved tracker accuracy by 19%',
          'Reduced metric disputes by 33%',
          'Increased provider template efficiency by 9%',
          'Increased root-cause discovery speed by 42%',
          'Lowered complaint drivers by 10%',
          'Increased digital check-in completion by 8%',
          'Reduced desk rework by 6%',
          'Reduced PHI exposure risk by 38%',
          'Improved manager readiness by 30%',
          'Reduced missed follow-ups by 16%',
          'Accelerated delivery cycles by 21%',
          'Increased dashboard adoption by 29%',
          'Improved refresh reliability and reduced break-fix work by 24%'
        ],
        impact:
          'Delivered a governed analytics operating layer that connected patient access, quality, and revenue-adjacent decisions, enabling faster monthly and weekly leadership actions without compromising privacy requirements.',
        tradeoffs:
          'Balanced metric standardization with department-specific definitions while maintaining privacy controls and operational SLA commitments.'
      }
    },
    {
      company: 'JPMorgan Chase',
      role: 'Data Analyst',
      duration: 'February 2020 – May 2023',
      location: 'Remote, USA',
      stakeholders: ['Risk teams', 'Product teams', 'Data engineering', 'Operations leadership', 'Compliance/audit partners'],
      caseStudy: {
        businessContext:
          'Enterprise banking portfolios needed integrated visibility across card, deposit, lending, and servicing performance in a regulated environment.',
        problem:
          'Distributed data pipelines and uneven quality checks reduced report trust, delayed intervention on risk signals, and increased production incidents.',
        hypothesis:
          'Centralizing governed portfolio metrics, quality controls, and risk analytics would improve reliability and speed for strategic and regulatory decisions.',
        approach:
          'Consolidated portfolio KPI dashboards in Power BI; strengthened Excel management scorecards; automated Python risk indicator workflows; built SQL controls for duplicates/orphans/late-arriving data; orchestrated AWS pipeline refreshes; applied clustering and anomaly detection; and embedded SOX/CCAR/model-governance controls with audit evidence.',
        tools: ['Power BI', 'Excel', 'Python (pandas, NumPy)', 'SQL', 'AWS S3', 'AWS Glue', 'AWS EMR', 'Machine Learning'],
        metrics: [
          'Improved decision speed by 27%',
          'Reduced follow-ups by 16%',
          'Cut analysis turnaround by 30%',
          'Improved analysis accuracy by 18%',
          'Reduced data quality defects by 27%',
          'Improved report stability by 18%',
          'Improved data availability to 99%',
          'Reduced processing latency by 35%',
          'Improved targeting precision by 18%',
          'Increased proactive actions by 12%',
          'Reduced manual surveillance effort by 24%',
          'Increased detection accuracy by 17%',
          'Accelerated delivery by 23%',
          'Increased dashboard adoption by 29%',
          'Reduced reporting incidents by 29%',
          'Passed internal audit with zero findings'
        ],
        impact:
          'Enabled risk and product leadership to act on more reliable portfolio signals while satisfying strict compliance controls and reducing operational reporting friction.',
        tradeoffs:
          'Had to optimize for both analytical speed and audit-grade governance, requiring tight coordination with engineering during schema and release changes.'
      }
    }
  ],
  projects: [
    {
      name: 'Patient Access Forecasting & Capacity Optimization',
      caseStudy: {
        businessContext:
          'Clinic operations needed better demand planning to reduce appointment waste and improve provider utilization.',
        problem:
          'No-show volatility and overbooking risk created unused slots and throughput inefficiency.',
        hypothesis: 'A predictive model on historical scheduling behavior can identify no-show/overbook risk early enough to improve template decisions.',
        approach:
          'Trained a time-series forecasting workflow on appointment history and operational signals, then embedded outputs into access planning dashboards for operational reviews.',
        tools: ['Python', 'Machine Learning', 'Time Series Forecasting', 'Power BI'],
        metrics: ['Reduced unused appointment slots', 'Increased provider template efficiency by 9%'],
        impact: 'Improved capacity planning quality and reduced avoidable access leakage during routine scheduling cycles.'
      }
    },
    {
      name: 'Digital Check-In Reminder Experimentation',
      caseStudy: {
        businessContext: 'Digital front-door workflows required validation before broad rollout in clinical operations.',
        problem: 'Uncertain effect of reminder design on completion rates and front-desk rework.',
        hypothesis: 'Optimized reminder and check-in flow variants can increase completion without harming downstream operations.',
        approach:
          'Designed A/B test cohorts and guardrail KPIs, monitored conversion and process metrics, and socialized results with operations and clinical stakeholders.',
        tools: ['A/B Testing', 'SQL', 'Python', 'Tableau'],
        metrics: ['Increased check-in completion by 8%', 'Reduced desk rework by 6%'],
        impact: 'Provided causal evidence for workflow decisions and improved patient-facing process efficiency.'
      }
    },
    {
      name: 'Portfolio Risk Signal Automation',
      caseStudy: {
        businessContext: 'Banking risk operations required early warning indicators from high-volume payment and utilization feeds.',
        problem: 'Manual analysis was too slow to support timely interventions on deteriorating account behavior.',
        approach:
          'Built automated Python and SQL workflows to derive early-risk indicators, anomaly flags, and segmentation outputs for leadership and operations review.',
        tools: ['Python', 'SQL', 'AWS', 'Machine Learning'],
        metrics: ['Cut analysis turnaround by 30%', 'Improved detection accuracy by 17%', 'Reduced surveillance effort by 24%'],
        impact: 'Improved speed-to-insight and actionability for portfolio monitoring and proactive risk treatment.'
      }
    }
  ],
  education: [
    {
      institution: 'University of Texas at Arlington',
      degree: 'Master of Science, Computer Science',
      details: 'GPA: 3.9'
    }
  ],
  certifications: [],
  quantifiedMetrics: [
    '6+ years of analytics experience',
    '30% fewer pipeline failures',
    '8–12% conversion and engagement gains from experimentation',
    '10–18% KPI improvement across portfolio and service outcomes',
    '$2M+ potential losses prevented via predictive analytics',
    '99% data availability for cloud analytics pipelines'
  ]
};
