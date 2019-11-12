const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/adelinetush/poc-terasology.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)