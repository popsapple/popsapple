module.exports.upload_con = function(app,aws,multer,multerS3,fs){
  global.UPLOAD_FUNCTION = require('./upload_db.js');

  var obj = this;
  aws.config.update({
      secretAccessKey: process.env.POPSAWSKEY,
      accessKeyId: process.env.POPSAWSID,
      region: 'ap-northeast-2',
      endpoint: 's3.ap-northeast-2.amazonaws.com',
      signatureVersion: 'v4'
  });

  var s3 = new aws.S3();
  var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'popsapple'
    }),
    onFileUploadStart: function (file) {
      if (file.extension == 'exe' || file.extension == 'html' || file.extension == 'htm' || file.extension == 'php' || file.extension == 'php3' || file.extension == 'php4' || file.extension == 'phtml' || file.extension == 'phps' || file.extension == 'in' || file.extension == 'cgi' || file.extension == 'pi' || file.extension == 'shtml' || file.extension == 'jsp' || file.extension == 'asp' || file.extension == 'js') {
        response.send({message:'해당 확장자의 파일은 업로드하실 수 없습니다.'});
        return false;
      };
    }
  });

  var thumnail_upload_callback = upload.single('thumnail'); // 실제 input에 있는 name이랑 이름이 같아야 함
  app.put('/upload_thumnail', function(req, res, next) {
    var remove_thumnail = req.body.thumnail ? req.body.thumnail : '';
    var UploadThumnailFile = new global.UPLOAD_FUNCTION.UploadThumnailFile(thumnail_upload_callback,s3,req,res,obj,remove_thumnail);
  });

  app.delete('/upload_file_delete', function(req, res, next) {
    var FileDelete = new global.UPLOAD_FUNCTION.FileDelete(s3,req,res,obj);
  });
}
