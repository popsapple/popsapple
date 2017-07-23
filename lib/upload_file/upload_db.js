exports = module.exports = { UploadThumnailFile : function (thumnail_upload_callback,s3,req,res,obj,remove_thumnail) {
      thumnail_upload_callback(req, res, function (err) {
        if (err) {
          console.log("업로드 에러 :: "+err);
          return;
        }
        if(remove_thumnail != undefined){
          var FileDelete = new global.UPLOAD_FUNCTION.FileDelete(s3,req,res,obj,'thumnail',remove_thumnail);
        }
        var tmp_path = req.file.path;
        console.log("파일전송여부 확인 :: "+tmp_path);
        res.send({message:'업로드에 성공하였습니다'});
      });
    }, FileDelete : function (s3,req,res,obj,type,remove_thumnail) {
      var remove_item;
      var post_idx;
      var count = 0;
      var RemovingFile = function() {
        for(var key in remove_item){
        (function(){
          var pattern = /(\/(\w+))/g;
          var remove_item_key = remove_item[key].match(pattern);
          if(!remove_item_key){
            return;
          }
          remove_item_key = remove_item_key[1];

          remove_item_key = remove_item_key.substring(1,remove_item_key.length);

          var params = {
            Bucket: 'popsapple',
            Key: remove_item_key
          };
          s3.deleteObject(params, function(err, data) {
            if (err) {
              console.log("삭제가 안 되었음"+err+" :: "+err.stack); // 에러시 표시
              return false;
            }
            else {

            }
          });
          count++;
        })();
      }
    };

    post_idx = req.body.post_index;

    global.PORTFOLIO_LIST_DB.DB_SIGMA.findOne({post_index: post_idx}, function(err,board){
      if(board){
        remove_item = board.thumnail;
        if(remove_item.length > 0){
          RemovingFile();
        }
      }
    });
  }
}
