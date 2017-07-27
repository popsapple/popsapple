module.exports.association_con = function(app){
  app.post('/admin_association', function(req, res, next) {
    let is_association = false;
    let data = {};
    console.log("process.env.POPSADMINID :: "+process.env.POPSADMINID);
    console.log("req.body.id :: "+req.body.id);
    if(req.body.id == process.env.POPSADMINID && req.body.pw == process.env.POPSADMINPW){
      data.message = "로그인에 성공했습니다.";
      data.association = true;
      data.url = "/#/admin/portfolio_list";
      req.session.admin_id = req.body.pw;
    }else{
      req.session.destroy();
      data.message = "로그인에 실패했습니다.";
      data.association = false;
      data.url = "/#/admin";
    }
    res.send(data);
  });
  app.post('/check_association', function(req, res, next) {
    let data = {};
    if(req.session.admin_id == undefined){
      data.association = false;
      data.url = "/#/admin";
    }
    res.send(data);
  });
  app.post('/logout', function(req, res, next) {
    let data = {};
    data.url = "/#";
    req.session.destroy();
    res.send(data);
  });
}
