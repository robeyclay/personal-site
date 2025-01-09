const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'HTML/CSS',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Powershell',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'Linux/Unix',
    competency: 5,
    category: ['Infrastructure', 'Operating System'],
  },
  {
    title: 'Git/GitLab/GitHub',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Prometheus',
    competency: 5,
    category: ['Tools', 'Observability'],
  },
  {
    title: 'Datadog',
    competency: 5,
    category: ['Tools', 'Observability'],
  },
  {
    title: 'JIRA',
    competency: 4,
    category: ['Tools', 'Ticketing'],
  },
  {
    title: 'Agile',
    competency: 5,
    category: ['Metholodogy'],
  },
  {
    title: 'Go',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Helm',
    competency: 3,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'VMware',
    competency: 4,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'Windows',
    competency: 5,
    category: ['Infrastructure', 'Operating System'],
  },
  {
    title: 'Grafana',
    competency: 5,
    category: ['Tools', 'Observability'],
  },
  {
    title: 'Netbox',
    competency: 5,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'Hashicorp Vault',
    competency: 2,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'SAML/LDAP',
    competency: 3,
    category: ['Infrastructure'],
  },
  {
    title: 'CI/CD',
    competency: 3,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'Test Automation',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Technical Documentation',
    competency: 5,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'Cross-Functional Collaboration',
    competency: 5,
    category: ['Teamwork'],
  },
  {
    title: 'Leadership',
    competency: 5,
    category: ['Teamwork'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Languages', 'Tools', 'Web Development'],
  },
  {
    title: 'SaaS',
    competency: 5,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'Ansible',
    competency: 3,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'FreshService',
    competency: 5,
    category: ['Tools', 'Ticketing'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#205566', // dark teal
  '#F16A6F', // coral
  '#D8A7B1', // dusty rose
  '#4B5320', // olive green
  '#6A5ACD', // slate blue
  '#6A0572', // violet
  '#B0E0E6', // powder blue
  '#DC143C', // crimson
  '#E6E6FA', // lavender
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
