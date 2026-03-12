import express from 'express';
import { postMessage, getProjects } from "../controller/messageController.js";

const router = express.Router();

router.post('/message', postMessage);

router.get('/projects', getProjects);

export default router;