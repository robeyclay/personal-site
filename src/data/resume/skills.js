const skills = [
  {
    title: 'Terraform',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Ansible',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Puppet',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Infrastructure', 'Tools'],
  },
  {
    title: 'Oracle',
    competency: 3,
    category: ['App Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'AWS Lambda',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Tools', 'Infrastructure'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Ruby',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Ruby on Rails',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C/C++',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Grafana',
    competency: 3,
    category: ['Observability', 'Tools'],
  },
  {
    title: 'Netdata',
    competency: 3,
    category: ['Observability', 'Tools'],
  },
  {
    title: 'InfluxDB/Prometheus',
    competency: 3,
    category: ['Observability', 'Tools'],
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
