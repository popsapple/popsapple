// server.js
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const nodemailer = require('nodemailer');
const bodyParserJsonError = require('express-body-parser-json-error');
const multer = require('multer');
const multerS3 = require('multer-s3');
const fs = require('file-system');
const aws = require('aws-sdk');
const app = express();
global.crypto = require('crypto');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(process.env.PORT || 4200);
app.get('/',function(request,response){
  response.type('text/html');
  response.send('/index.html');
});

const usingSession = session({
  key: process.env.SESSIONKEY, // 세션키
  secret: process.env.SECRETKEY, // 비밀키
  cookie: {
    maxAge: 1000 * 60 * 180 // 3시간
  }
});
app.use(usingSession);

// DB 연결
const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log("몽고디비에 연결되었습니다.");
});
mongoose.connect("mongodb://heroku_70467gbs:ggvtdslkhd8dj1n1livvuemb09@ds153392.mlab.com:53392/heroku_70467gbs");
// heroku config:get MONGODB_URI
// 메일 보내기
const send_mail = require('./lib/send_mail.js').SendEmailFun(app,request,nodemailer);

// 포트폴리오
const portfolio = require('./lib/portfolio/portfolio_route.js').PortfolioList(aws,app,mongoose);

// 파일업로드
const fileupload = require('./lib/upload_file/upload.js').upload_con(app,aws,multer,multerS3,fs);

// 관리자로그인
const association = require('./lib/login/association.js').association_con(app);
