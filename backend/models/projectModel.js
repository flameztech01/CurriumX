import express from 'express';
import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    link: { type: String, required: true },
    githubLink: { type: String, required: false },
    category: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: String, required: true },
    image: { type: String, required: true },
    status: { type: String, required: true },

    rolesAndContributions: {
      type: [String],
      required: false,
      default: [],
    },

    coreFeatures: {
      type: [String],
      required: false,
      default: [],
    },

    challengesAndSolutions: {
      type: [String],
      required: false,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;