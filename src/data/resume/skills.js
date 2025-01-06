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
    category: ['Infastructure', 'Tools'],
  },
  {
    title: 'Linux/Unix',
    competency: 5,
    category: ['Infastructure', 'Operating System'],
  },
  {
    title: 'Git/GitLab/GitHub',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Prometheus',
    competency: 5,
    category: ['Infastructure', 'Tools', 'Observability'],
  },
  {
    title: 'Datadog',
    competency: 5,
    category: ['Infastructure', 'Tools', 'Observability'],
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
    category: ['Infastructure', 'Tool'],
  },
  {
    title: 'VMware',
    competency: 4,
    category: ['Infastructure', 'Tool'],
  },
  {
    title: 'Windows',
    competency: 5,
    category: ['Infastructure', 'Operating System'],
  },
  {
    title: 'Grafana',
    competency: 5,
    category: ['Tools', 'Observability'],
  },
  {
    title: 'Netbox',
    competency: 5,
    category: ['Infastructure', 'Tools'],
  },
  {
    title: 'Hashicorp Vault',
    competency: 2,
    category: ['Infastructure', 'Tools'],
  },
  {
    title: 'SAML/LDAP',
    competency: 3,
    category: ['Infastructure'],
  },
  {
    title: 'CI/CD',
    competency: 3,
    category: ['Infastructure', 'Tools'],
  },
  {
    title: 'Test Automation',
    competency: 4,
    category: ['Infastructure'],
  },
  {
    title: 'Technical Documentation',
    competency: 5,
    category: ['Infastructure', 'Tools'],
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
    category: ['Languages', 'Tool', 'Web Development'],
  },
  {
    title: 'SaaS',
    competency: 5,
    category: ['Infastructure', 'Tools'],
  },
  {
    title: 'Ansible',
    competency: 3,
    category: ['Infastructure', 'Tools'],
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
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
