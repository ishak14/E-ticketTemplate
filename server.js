const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(cors());

var config = {
  headers: {
    'Accept':'application/json',
    'Ocp-Apim-Subscription-Key':'db1281e5a3c744588d24b32202d6ba11',
    'Access-Control-Allow-Origin': '*',
  }
};
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});


app.get('/swedavia', function (req, res, next) {
  axios.get("https://api.swedavia.se/flightinfo/v2/ARN/departures/2018-04-04",config)
  .then(function (res) {
  })
  .catch(function (error) {
  console.log(error);
  });
  res.json(res.data);
})




app.options('/', cors())
app.delete('/', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
})
