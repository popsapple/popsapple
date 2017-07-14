module.exports.SendEmailFun = function (app,request,nodemailer) {
  var mail_api = request;
  app.post('/send_email',function(request,response,next){
    var client_response = response;
    var client_request = request;
    mail_api('https://mailtrap.io/api/v1/inboxes.json?api_token=bd64614fa968ee64101b8066744a4c90', function (error, response, credentials) {
      if (!error && response.statusCode == 200) {
        var credentials_ = JSON.parse(credentials);
        for (var key in client_request.body){
          console.log("AAAA :: "+key+" :: "+client_request.body[key]);
        }
        console.log("BBBB :: "+client_request.body.message);
        var smtpTransport = nodemailer.createTransport({
          host: "smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: credentials_[0].username,  // "4e6c3d2bdb3126",
            pass: credentials_[0].password, //"5cef1b52bfc28b"
          }
        });
        var mailOptions = {
            from: client_request.body.fromname+' <'+client_request.body.email+'>',
            to: 'app72007481@heroku.com',
            subject: client_request.body.subject, //'Nodemailer 테스트',
            text: client_request.body.message
        };
        smtpTransport.sendMail(mailOptions, function(error, response){
            console.log("메일 가는 중");
            if (error){
                console.log(error);
            } else {
                client_response.send({message: "메일 전송에 성공하였습니다 :)"});//console.log("Message sent : " + response.message);
            }
            smtpTransport.close();
        });
      }
    })

    /*
     EMAIL_HOST = credentials['domain']
 EMAIL_HOST_USER = credentials['username']
 EMAIL_HOST_PASSWORD = credentials['password']
 EMAIL_PORT = credentials['smtp_ports'][0]
 EMAIL_USE_TLS = True*/
  });
};
