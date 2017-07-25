module.exports.association_con = function(app){
  app.post('/admin_association', function(req, res, next) {
    let is_association = false;
    let data = {};
    if(req.id == process.env.POPSADMINID && req.pw == process.env.POPSADMINPW){
      data.message = "로그인에 성공했습니다.";
      data.association = true;
    }else{
      data.message = "로그인에 실패했습니다.";
      data.association = false;
    }
    response.send(data);
  });
}
