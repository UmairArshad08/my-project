import React from 'react';
import { motion } from 'framer-motion';
import Urbanloop from '../components/urbanloop.png'; 
import Comerzio from '../components/comerzio.png'; 
import ExpressLab from '../components/expresslab.png'; 

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Urbanloop Tech",
      description: "An innovative tech platform.",
      image: Urbanloop,
      link: "https://urbanloop.tech/",
    },
    {
      id: 2,
      name: "Comerzio",
      description: "A modern e-commerce platform.",
      image: Comerzio,
      link: "https://comerzio.fly.dev/",
    },
    {
      id: 3,
      name: "Express Wellness Lab",
      description: "A healthcare and lab service platform.",
      image: ExpressLab,
      link: "https://expresswellnesslab.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-black px-8 py-16 text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 bg-black pb-2 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="p-6 bg-gray-800 rounded-lg hover:scale-105 transform transition"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to to-blue-400">{project.name}</h3>
            <p className="text-white mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              View Details
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
