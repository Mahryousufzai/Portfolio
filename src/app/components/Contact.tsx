import React from 'react'
import  { IoMdMail } from "react-icons/io";
import { BsFillTelephoneInboundFill}  from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container overflow-hidden sm:px-0 px-10'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' >Get In Touch</h2>
            <p className='text-gray-400 text-[18px] pt-2'  >
                If you have any questions or would like to collaborate, please don&rsquo;t hesitate to reach out.
            </p>
            <div className='flex gap-3 items-center' >
              <IoMdMail  size={30}/>Mahrali@gmail.com
            </div>
            <div className='flex gap-4 items-center' >
              <BsFillTelephoneInboundFill  size={30}/>03194756822
            </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'  >
            <label htmlFor="name">Name</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-blue-500' 
            id='name'/>
          </div>
          <div className='flex flex-col gap-1' >
            <label htmlFor="email">Email</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-blue-500' 
            id='email'/>
          </div>
          <div className='flex flex-col gap-1' >
            <label htmlFor="msg">Message</label>
            <textarea
            className='bg-transparent border border-blue-500' 
            id='msg' rows={7}>
            </textarea>
          </div>
          <button className='bg-blue-900 p-2 px-6'  >Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
