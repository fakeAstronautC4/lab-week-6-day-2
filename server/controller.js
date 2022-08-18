var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '767194a84a3344ad8ee870bebb34ef15',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')