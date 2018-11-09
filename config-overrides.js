const { compose } = require('react-app-rewired')
const rewireEslint = require('./rewires/eslint')
const rewireResolve = require('./rewires/resolve')
const rewireStyled = require('./rewires/styledComponents')

module.exports = compose(
  rewireEslint,
  rewireResolve,
  rewireStyled
)
