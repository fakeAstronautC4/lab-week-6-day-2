const express = require('express')
const path = require('path')


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8e36529e843d4cca94ab9c93f7e7b284',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
rollbar.critical('Critical err exxe!!')
rollbar.warning('Careful!!!')
rollbar.info('doing great!')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = process.env.PORT || 4000
// This will get the PORT variable from Heroku. However, if one isn't assigned (ex. when we are testing locally) it will use port 4005.

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})