
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./generate-uniswap-init-code-hash.cjs.production.min.js')
} else {
  module.exports = require('./generate-uniswap-init-code-hash.cjs.development.js')
}
