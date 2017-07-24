module.exports = {
  GET_DB_SIGMA: function(app,mongoose){
    var Schema = mongoose.Schema;
    var portfolio_sigma = new Schema({
      url: String,
      thumnail: String,
      title: String,
      date: String,
      des_percent: Number,
      publ_percent: Number,
      dev_percent: Number,
      desc: String,
      post_index: Number
    }, { collection: 'Portfolio' });

    mongoose.models = {};
    mongoose.modelSchemas = {};
    global.PORTFOLIO_LIST_DB.DB_SIGMA = mongoose.model('portfolio',portfolio_sigma);
  },
  GET_LIST_INFO: function(app,mongoose,request,response){
    global.PORTFOLIO_LIST_DB.DB_SIGMA.find({},function(err,data){
      if(err){
        console.log("PORTFOLIO_LIST_DB GET ERR :: "+err);
        response.send({message:"데이터 전송 오류입니다."});
        return false;
      }
      response.send(data);
    });
  },
  GET_POST_INFO: function(app,mongoose,request,response){
    let post__index = request.query.post_index;
    let query = {'post_index': post__index};
    global.PORTFOLIO_LIST_DB.DB_SIGMA.find(query,function(err,data){
      if(err){
        console.log("PORTFOLIO_LIST_DB GET ERR :: "+err);
        response.send({message:"데이터 전송 오류입니다."});
        return false;
      }
      request.session.post_index = data[0].post_index;
      response.send(data);
    });
  },
  PUT_INFO: function(app,mongoose,request,response,dateFormat){
    global.PORTFOLIO_LIST_DB.DB_SIGMA.count({},function(err,count){
      let now = new Date();
      let now_date = dateFormat(now, "yyyy")+dateFormat(now, "mm")+dateFormat(now, "dd");
      let save_data = {
        url: request.body.url,
        thumnail: request.body.thumnail,
        title: request.body.title,
        date: now_date,
        des_percent: request.body.des_percent,
        publ_percent: request.body.publ_percent,
        dev_percent: request.body.dev_percent,
        desc: request.body.desc ? request.body.desc : '',
        post_index: count
      };

      let save_post_index = count;
      global.PORTFOLIO_LIST_DB.DB_SIGMA.update({'post_index': save_post_index},save_data,{upsert: true}, function(err,data){
        if(err){
          console.log("PORTFOLIO_LIST_DB PUT ERR :: "+err);
          response.send({message: "데이터 전송 오류입니다"});
          return false;
        }
        response.send({message: "전송 완료되었습니다 :)"});
      });
    });
  },
  DELETE_INFO: function(app,mongoose,request,response){
    let post__index = request.session.post_index;
    let query = {'post_index': post__index};
    global.PORTFOLIO_LIST_DB.DB_SIGMA.remove(query, function(err,data){
      if(err){
        console.log("PORTFOLIO_LIST_DB DELETE ERR :: "+err);
        response.send({message:"데이터 전송 오류입니다."});
        return false;
      }
      global.PORTFOLIO_LIST_DB.DB_SIGMA.find({post_index: { $gte: post__index}},function(err,data){
        data.forEach(function(arr,index){
          if(arr.post_index > post__index){
            arr.post_index -= 1;
          }
        });
      });
      response.redirect("/admin/portfolio_list");
    });
  },
  MODIFY_INFO: function(app,mongoose,request,response){
    let post__index = request.session.post_index;
    let query = {'post_index': post__index};
    let save_data = {
      url: request.body.url,
      thumnail: request.body.thumnail,
      title: request.body.title,
      des_percent: request.body.des_percent,
      publ_percent: request.body.publ_percent,
      dev_percent: request.body.dev_percent,
      desc: request.body.desc ? request.body.desc : ''
    };

    global.PORTFOLIO_LIST_DB.DB_SIGMA.update(query,save_data,{upsert: true}, function(err,data){
      if(err){
        console.log("PORTFOLIO_LIST_DB PUT ERR :: "+err);
        response.send({message:"데이터 전송 오류입니다."});
        return false;
      }
      request.session.post_index = undefined;
      data.message = "데이터 수정 완료 했습니다 :)";
      response.send(data);
    });
  }
}
