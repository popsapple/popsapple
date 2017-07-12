// server.js
const express = require('express');
const bodyParser = require('body-parser');
const bodyParserJsonError = require('express-body-parser-json-error');
const app = express();

// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Start the app by listening on the default
// Heroku port

app.listen(process.env.PORT || 4200);
console.log("확인?????용");
app.get('/',function(request,response){
  console.log("확인용");
  response.type('text/html');
  response.send('/index.html');
});
// 메일 보내기
const send_mail = require('./lib/send_mail.js').SendEmailFun(app);
