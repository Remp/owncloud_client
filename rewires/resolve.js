const path = require('path')

const root = path.join(process.cwd(), 'src')

module.exports = config => {
  config.resolve.modules.push(root)

  return config
}
