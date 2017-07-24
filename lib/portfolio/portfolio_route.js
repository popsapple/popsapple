module.exports.PortfolioList = function(app,mongoose){
  let dateFormat = require('dateformat');
  global.PORTFOLIO_LIST_DB = require('./portfolio_db.js');
  global.PORTFOLIO_LIST_DB.GET_DB_SIGMA(app,mongoose);
  app.get('/portfolio_list',function(request,response){
    if(request.query.id){

    }else{
      global.PORTFOLIO_LIST_DB.GET_LIST_INFO(app,mongoose,request,response);
    }
  });
  app.get('/portfolio_post',function(request,response){
    global.PORTFOLIO_LIST_DB.GET_POST_INFO(app,mongoose,request,response);
  });
  app.delete('/portfolio_post',function(request,response){
    global.PORTFOLIO_LIST_DB.DELETE_INFO(app,mongoose,request,response);
  });
  app.put('/portfolio_post',function(request,response){
    if(request.session.post_index == undefined){
      global.PORTFOLIO_LIST_DB.PUT_INFO(app,mongoose,request,response,dateFormat);
    }else{
      global.PORTFOLIO_LIST_DB.MODIFY_INFO(app,mongoose,request,response,dateFormat);
    }
  });
}
