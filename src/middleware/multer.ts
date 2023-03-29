import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const partFilename = file.originalname.split('.');
      const ext = partFilename[partFilename.length - 1];
      cb(null, `${file.fieldname}-${uniqueSuffix}.${ext}`)
    }
})

const uploadMiddleware = multer({ storage });
export const uploadSingle = uploadMiddleware.single('file');