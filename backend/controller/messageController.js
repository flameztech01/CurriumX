import express from 'express';
import mongoose from 'mongoose';
import Message from '../models/messageModel.js';
import asyncHandler from 'express-async-handler';
import Project from '../models/projectModel.js';

const postMessage = asyncHandler (async (req, res, next) => {
    const {firstName, lastName, email, subject, message} = req.body;

      if(!firstName || !lastName || !email || !subject || !message) {
        res.status(400);
        throw new Error('Input all fields')
    }

    const newMessage = await Message.create({
        firstName,
        lastName,
        email,
        subject,
        message
    });

    res.status(200).json(newMessage);
});

const getProjects = asyncHandler (async (req, res, next) => {
    const projects = await Project.find({});
    res.status(200).json(projects);
})

export {postMessage, getProjects};