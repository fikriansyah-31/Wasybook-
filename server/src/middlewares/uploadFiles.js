// import package here
const multer = require("multer")

exports.uploadFiles = (bookImg, bookPdf) => {
  // Destinasi dan Rename File 
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        if (file.fieldname === bookPdf) {
            cb(null, "upload/pdf")
        }else{
            cb(null, "upload/image")
        }
    //   cb(null, "uploads/profile")
    },
    filename: function(req, file, cb){
      cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""))
    }
  })

  // Filter File Extention
  const fileFilter = function (req, file, cb) {
    if (file.fieldname === imageFile) {
      if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|webp|WEBP|jfif)$/)){
        req.fileValidationError = {
          message: "Only image files are allowed" 
        }
        return cb(new Error("Only image files are allowed"), false)
      }
    }

    //Untuk Bagian PDF 
    if (file.fieldname === bookPdf) {
        if (!file.originalname.match(/\.(pdf|PDF)$/)) {
            req.fileValidationError = {
                message : "Only Pdf files are allowed"
            }
            return cb(new Error("Only pdf files are allowes"), false)
        }
    }
    cb(null, true)
  }

  //Maximum file size // MB => KB => BYTE 
  const sizeInMB = 10
  const maxSize = sizeInMB * 1024 * 1000

  const upload = multer({
    storage,
    fileFilter,
    limits: {
      fileSize: maxSize
    },
  }).fields([
    { name: bookImg, maxCount: 1},
    { name: bookPdf, maxCount: 1,},
  ])

  // Handler Filter, doesn't file, Limit Size 

  return ( req, res, next ) => {
    upload(req, res, function(err) {
      if (req.fileValidationError)
        return res.status(400).send(req.fileValidationError)

      if (!req.file && !err)
      //Jika Tidak Ada File Akan Menampilkan Respon Seperti Di Bawah
        return res.status(400).send({
          message: "Please select files to upload"
        })

      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
        //Jika Ukuran File Melebihi Max Dari Ukuran file yang di tentukan akan menampilkan respon seperti dibawah
          return res.status(400).send({
            message: "Max file size 10MB"
          })
        }
        return res.status(400).send(err)
      }
      //Selanjutnya
      return next()
    })
  }
};