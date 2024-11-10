import React from 'react'
import Navbar from './Navbar';


const Hero = () => {
  return (
    
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/my_image.png.png)]  bg-cover'
    style={{backgroundSize: "20%", backgroundPosition: "left 100px top 100px "}}
 >
    <Navbar />
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[55px] sm:text-[80px] font-bold leading-tight flex justify-between items-center'>
        <div>
          <p  data-aos="fade-down-right">I'm</p>
          <p data-aos="fade-down-left" >Mehar</p>
          <p data-aos="fade-down-left">Ali</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero
