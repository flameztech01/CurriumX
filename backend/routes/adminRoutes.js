import express from 'express';
import {
   getUserMessage, 
    getOneMessage, 
    markMessageAsRead, 
    deleteUserMessage, 
    authAdmin, 
    registerAdmin, 
    uploadProject,
    getProjects,
    editProject,
    deleteProject,
    logoutAdmin
} from '../controller/adminController.js';
import { protectAdmin } from '../middleware/adminAuthMiddleware.js';
import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

const router = express.Router();

//Cloudinary Configuration with lowercase unserscores
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Create Cloudinary storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "portfolio_projects",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({storage});

cloudinary.api.ping()
  .then(result => console.log('✅ Cloudinary connected successfully'))
  .catch(result => console.error('Cloudinary not fonneted', err.message));

router.get('/messages', protectAdmin, getUserMessage);
router.get('/messages/:id', protectAdmin, getOneMessage);
router.put('/messages/:id/read', protectAdmin, markMessageAsRead);
router.delete('/messages/:id', protectAdmin, deleteUserMessage);
router.post('/login', authAdmin);
router.post('/register', registerAdmin);
router.post('/upload', protectAdmin, upload.single('image'), uploadProject);
router.get('/project', getProjects)
router.put('/project/:id', protectAdmin, upload.single('image'), editProject)
router.delete('/project/:id', protectAdmin, deleteProject)
router.post('/logout', logoutAdmin);

export default router