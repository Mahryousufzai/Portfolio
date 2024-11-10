import React from 'react'
import  { IoMdMail } from "react-icons/io";
import { BsFillTelephoneInboundFill}  from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl'  data-aos="fade-down-left">Get In Touch</h2>
            <p className='text-gray-400 text-[18px] pt-2'  data-aos="fade-down-left">
                If you have any questions or would like to collaborate, please don't hesitate to reach out.
            </p>
            <div className='flex gap-3 items-center'  data-aos="fade-down-left">
              <IoMdMail  size={30}/>Mahrali@gmail.com
            </div>
            <div className='flex gap-4 items-center'  data-aos="fade-down-left">
              <BsFillTelephoneInboundFill  size={30}/>03194756822
            </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'  data-aos="fade-down-left">
            <label htmlFor="name">Name</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-red-100' 
            id='name'/>
          </div>
          <div className='flex flex-col gap-1'  data-aos="fade-down-left">
            <label htmlFor="email">Email</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-acc' 
            id='email'/>
          </div>
          <div className='flex flex-col gap-1'  data-aos="fade-down-left">
            <label htmlFor="msg">Message</label>
            <textarea
            className='bg-transparent border border-red-100' 
            id='msg' rows={7}>
            </textarea>
          </div>
          <button className='bg-red-900 p-2 px-6'  data-aos="fade-down-left">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
