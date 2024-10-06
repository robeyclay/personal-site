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
    name: 'HashiCorp',
    position: 'Sr. Director, Americas Solution Engineering',
    url: 'https://www.hashicorp.com',
    startDate: '2022-11-01',
    summary: 'As Sr. Director of Americas Solution Engineering at HashiCorp, I lead a diverse team of Solution Engineers, focusing on scalable operations, mentorship, and delivering significant value to customers and stakeholders. My career is marked by achievements such as:',
    highlights: [
      'Spearheaded the expansion of the Americas Solution Engineering team, scaling operations to support regional growth and resulting in a 20% increase in technical win rates',
      'Developed and implemented a consistent and transparent performance evaluation system for Solution Engineers, leading to improved team motivation and a 25% reduction in turnover',
      'Established the "Staff SE Community" to engage top performers, which increased retention of senior SEs by 15% and fostered a culture of collaboration and knowledge sharing',
      'Defined and executed Objectives and Key Results (OKRs) for Q2 and Q3, achieving 80% of key performance metrics aligning team goals with broader company initiatives',
      'Mentored and developed team members through targeted coaching and growth initiatives, driving a 20% boost in team productivity and technical win rates',
    ],
  },
  {
    name: 'Puppet',
    position: 'Sr. Director, Product Management',
    url: 'https://www.puppet.com',
    startDate: '2021-03-01',
    endDate: '2022-05-01',
    highlights: [
      'Led the Infrastructure Automation Product Line, overseeing 10 product managers and setting strategic product direction.',
      'Transitioned on-premise offerings to a Cloud Native SaaS application, reducing time-to-value to 30 days and achieving broad customer adoption in under four months.',
      'Prioritized high-value features for Puppet Enterprise, migrating 40% of the R&D team to the SaaS platform while reducing customer churn to 8% during FY23',
    ],
  },
  {
    name: 'Puppet',
    position: 'Sr. Director, Presales Engineering',
    url: 'https://www.puppet.com',
    startDate: '2019-09-01',
    endDate: '2021-03-01',
    highlights: [
      'caled the SE team from 18 to 35 Engineers and Managers, supporting the adoption of the LAER methodology and enhancing technical capabilities across the Americas.',
      'Redesigned governance to improve DE&I opportunities within Presales, resulting in a 20% increase in diverse representation.',
      'Implemented Vivun Hero across the SE organization, optimizing product gap tracking and increasing customer face time.',
      'Managed vital strategic accounts, including UWM, JPMC, and Kaiser, leading to 125% YoY growth in those accounts.',
    ],
  },
];

export default work;
