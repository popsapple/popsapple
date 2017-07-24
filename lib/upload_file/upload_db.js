exports = module.exports = { UploadThumnailFile : function (thumnail_upload_callback,s3,req,res,obj,remove_thumnail) {
      thumnail_upload_callback(req, res, function (err) {
        if (err) {
          console.log("업로드 에러 :: "+err);
          return;
        }
        if(remove_thumnail != undefined){
          var FileDelete = new global.UPLOAD_FUNCTION.FileDelete(s3,req,res,obj,'thumnail',remove_thumnail);
        }
        res.send({message:'업로드에 성공하였습니다 :)',filepath:req.file.location});
      });
    }, FileDelete : function (s3,req,res,obj,type,remove_item) {
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

          console.log("파일삭제 키 확인 :: "+remove_item_key);

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
              console.log("삭제완료");
            }
          });
          count++;
        })();
      }
    };
    RemovingFile();
  }
}
