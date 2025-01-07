import React from 'react';
import Profile from '../components/profile.png';

const Home = () => {
  return (
    <div className='bg-black text-white text-center py-16 pb-6;' id="home">
      <img src={Profile} alt="Profile" 
      className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover-scale-105'/>
      <h1 className='text-4xl font-bold'>I'm {""}
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Muhammad Umair Arshad</span>
      ,Frontend Developer
      </h1>
     <p className='mt-4 text-lg textgray-300'>I specialize in building modern and responsive web applications.</p>
<div className='mt-8 space-x-4'>
<a href="https://wa.me/+92 3347775040" className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact With Me</a>
<a href="https://docs.google.com/document/d/1S-bttBU-gqDGMCBsii5yen0q0Yz4IsNNMXuLlcWzJ30/edit?tab=t.0" className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-500 hover:scale-105 px-4 py-2 rounded-full">View Resume</a>

    
</div>
    </div>
  );
};

export default Home;
