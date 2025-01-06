/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Engineering Technology Services at Colorado State University',
    position: 'Lab Supervisor',
    url: 'https://www.engr.colostate.edu/ets/',
    startDate: '2023-08',
    summary: 'As Lab Supervisor, I lead a diverse team of Lab Technicians and Lab Assistants, focusing on infastructure maintenance, mentorship, and delivering significant value to customers. My career is marked by achievements such as:',
    highlights: [
      'Designed and deployed a Prometheus and Grafana observability system to monitor 240 machines allowing the systems operations team to transition to proactively managed system infrastructure.',
      'Led a team of 6 to build a ticket alerting system reducing first contact time by 5 minutes and gaining management support for dedicated alert displays.',
      'Supervised a team of 15, advising the top 5 performing individuals in training enhancing the skills of the others ensuring an efficient workflow, a culture of collaboration and high-quality project delivery.',
    ],
  },
  {
    name: 'Dish Network',
    position: 'Platform Engineer I',
    url: 'https://dish.com/',
    startDate: '2022-06',
    endDate: '2023-07',
    highlights: [
      'Developed and deployed a Golang application to correlate VMs from VMware with physical hardware in Netbox, taking physical to virtual correlation from 0% to 100% coverage within 3 months.',
      'Automated the migration of mission-critical VMs across datastores and vCenters using Powershell to shrink the hardware migration time period to 1 month leading to an efficiency increase of 50%.',
      'Over a 3-month period, developed and deployed a custom Helm Chart to implement Kubernetes monitoring, introducing comprehensive observability with Datadog and Prometheus/Grafana where none previously existed.',
      'Utilizing PowerShell developed a backup strategy providing 100% coverage across all VMs with corrupt or no backups in Cohesity, removing 15% of the systems from being unrecoverable.',
      'Led a Hashicorp Vault Proof of Concept implementation for dynamic and static secret management leading to the secret management centralization across the department.',
    ],
  },
  {
    name: 'Engineering Technology Services at Colorado State University',
    position: 'Lab Technician',
    url: 'https://www.engr.colostate.edu/ets/',
    startDate: '2021-05',
    endDate: '2022-06',
    highlights: [
      'Managed $300,000 in lab equipment across a network of 240 workstations, achieving a 98% customer satisfaction rating for support and operational quality.',
      'Led the implementation of Windows Server 2016, 2019 & 2022 images, deployed workstations, and developed remote scripts, reducing processing time by 10 minutes per task.',
      'Directed a workshop remodel, cutting hardware and tool retrieval time by 50%, and maintained updated Wiki resources for troubleshooting and project management.',
    ],
  },
  {
    name: 'Best Buy',
    position: 'Computer Sales & Customer Specialist',
    url: 'https://www.bestbuy.com/',
    startDate: '2017-11',
    endDate: '2019-11',
    highlights: [
      'Continuously expanded technical knowledge to provide informed product recommendations, ensuring customers received the best solutions for their needs and enhancing overall service quality.',
      'Cultivated strong relationships with customers and associates to efficiently manage returns, address inquiries, and streamline the checkout process, consistently exceeding client expectations and contributing to enhanced store performance.',
    ],
  },
];

export default work;
