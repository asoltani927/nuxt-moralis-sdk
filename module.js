// module.js
const { resolve, join } = require('path')
export default function(moduleOptions) {
  // get all options for the module
  const options = {
    ...moduleOptions,
    ...this.options.customCounter
  }
  
  // expose the namespace / set a default
  if (!options.namespace) options.namespace = 'customCounter'
  const { namespace } = options
  
  // add the debug plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugins/moralis.js'),
    // ** NOTE: we now use namespace here: **
    fileName: join(namespace, 'plugins/moralis.js'),
    options // just pass through the options object
  })
}
module.exports.meta = require('./package.json')