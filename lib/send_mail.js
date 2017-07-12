module.exports.SendEmailFun = function (app) {
  console.log("SendEmailFun");
  app.post('/send_email',function(request,response){
    try{
      console.log("성공 :: "+request.body.fromname);
      response.send({'message':'전송에 성공했습니다.'});
    }catch(err){
      console.log("실패했습니다 :: "+err);
      response.send({'message':'다시 전송해주세요.'});
    }
  });
};
