import express from 'express';
import Admin from '../models/adminModel.js';
import Message from '../models/messageModel.js';
import asyncHandler from 'express-async-handler';
import Project from '../models/projectModel.js'
import generateToken from '../utils/generateToken.js'

//Get all users messages
const getUserMessage = asyncHandler(async (req, res) => {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    res.json(messages);
});

//Get Single Message
const getOneMessage = async (req, res, next) => {
    const id = req.params.id;
    const Omessage = await Message.findById(id);

    if(!Omessage) {
        res.status(404);
        throw new Error('Blog not found');
    }

    res.status(200).json(Omessage);
}

// Mark a message as read
const markMessageAsRead = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const message = await Message.findById(id);
  if (!message) {
    res.status(404);
    throw new Error('Message not found');
  }

  message.read = true;
  await message.save();

  res.status(200).json({ message: 'Message marked as read', updatedMessage: message });
});


//Delete user message
const deleteUserMessage = asyncHandler(async (req, res) => {
    const message = await Message.findById(req.params.id);
    if (message) {
        await message.deleteOne();
        res.json({ message: 'Message removed' });
    } else {
        res.status(404);
        throw new Error('Message not found');
    }
});

//Login admin/set token
const authAdmin  = asyncHandler (async (req, res, next) => {
    const {email, password} =  req.body;
    const admin = await Admin.findOne({email});

    if(admin && (await admin .matchPassword(password))) {
        const token = generateToken (res, admin._id);
        res.status(200).json({
            id: admin._id,
            username: admin.username,
            email: admin.email,
            token,
        })
    } else{
        res.status(400)
        throw new Error('Invalid Email or password')
    }
});

//Signup new admin
const registerAdmin = asyncHandler (async (req, res, next) => {
    const {username, email, password} =  req.body;
    const adminExists = await Admin.findOne({email});

    if(adminExists) {
        res.status(400)
        throw new Error('Admin already exists')
    }

    const admin = await Admin.create({
        username,
        email,
        password
    });
   if (admin) {
       generateToken(res, admin._id);
       res.status(201).json({
           id: admin._id,
           username: admin.username,
           email: admin.email
       });
   } else {
    res.status(400);
    throw new Error('Invalid admin data');
   }
});

//Upload Project
const uploadProject = asyncHandler(async (req, res, next) => {
    const {name, link, category, description, technologies, image, status} = req.body;

    // Validate required fields
    if (!name || !link || !category || !description || !technologies || !req.file || !status) {
        res.status(400);
        throw new Error('Please fill all fields');
    }

    const newProject = await Project.create({
        name,
        link,
        category,
        description,
        technologies,
        image: req.file.path,
        status
    });

    res.status(201).json({
        success: true,
        message: 'Project uploaded successfully',
        project: newProject
    });
});

//Get all Projects
const getProjects = asyncHandler(async (req, res, next) => {
    const limit = req.query.limit;
    let query = Project.find().sort({ createdAt: -1 });
    
    if (limit) {
        query = query.limit(parseInt(limit));
    }
    
    const projects = await query;
    res.status(200).json(projects);
});

// Edit Project
// Edit Project
const editProject = asyncHandler(async (req, res, next) => {
    console.log('=== EDIT PROJECT REQUEST ===');
    console.log('ID:', req.params.id);
    console.log('Body:', req.body);
    console.log('File:', req.file);
    console.log('Body keys:', Object.keys(req.body));
    
    const id = req.params.id;
    
    const project = await Project.findById(id);
    console.log('Found project:', project);

    if(!project) {
        res.status(404)
        throw new Error('Project not found')
    }

    // Extract data from form-data
    const { name, description, link, category, technologies, status } = req.body;
    
    console.log('Extracted values:', { name, description, link, category, technologies, status });
    
    // Create update object
    const updateData = {
        name,
        description,
        link,
        category,
        technologies,
        status
    };

    console.log('Update data:', updateData);

    // Handle image upload if file exists
    if (req.file) {
        console.log('File uploaded:', req.file);
        // Cloudinary upload for new image
        try {
            // If using CloudinaryStorage, file should already be uploaded
            // Just get the URL from req.file
            updateData.imageUrl = req.file.path; // Cloudinary returns path as secure_url
            console.log('New image URL:', updateData.imageUrl);
            
        } catch (error) {
            console.error('Image upload error:', error);
            res.status(500);
            throw new Error('Image upload failed');
        }
    }

    const updatedProject = await Project.findByIdAndUpdate(
        id,
        updateData,
        {
            new: true,
            runValidators: true
        }
    );

    console.log('Updated project:', updatedProject);

    res.status(200).json(updatedProject);
});

// Delete Project
const deleteProject = asyncHandler(async (req, res, next) => {
    const project = await Project.findById(req.params.id);

    if (project) {
        await project.deleteOne(); // Changed from remove() to deleteOne()
        res.json({ message: 'Project removed' });
    } else {
        res.status(404);
        throw new Error('Project not found');
    }
});



// Logout admin
const logoutAdmin = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
     httpOnly: true,
     expires: new Date(0),
    });
    res.status(200).json({ message: 'Admin logged out' });
});

export { getUserMessage, 
    getOneMessage, 
    markMessageAsRead, 
    deleteUserMessage, 
    authAdmin, 
    registerAdmin, 
    uploadProject,
    getProjects,
    editProject,
    deleteProject,
    logoutAdmin };