import React, { useState } from 'react'

function Contact() {
  const [name, setName] =useState('');
  const [email , setEmail] =useState('');
  const [message , setMessage] =useState('');

  return (
    <>
   
    <div className="container-fluid mt-5">
      <h1 className='text-center'> Contact Us</h1>
      </div>
      <div className='container-fluid mx-6 justify-content-center align-items-center'>
      <form className='container py-5  '>
        <label htmlFor="name" className='mx-4'>Name:
          <input type="text" id="name" value="name" />
        </label>
        
        <label htmlFor="email" className='mb-4'>Email:
          <input type="email" id="email" value="email"/>
        </label>
        <br />
        <input
							type="text" className='mb-4'
							
							id="subject"
							value="Subject"
						/>
            <br />
        <label htmlFor="message">Message: 
          <textarea name="message" id="message" value="create message here..." cols="30" rows="10"></textarea>
          </label>
          <br />
          <button className='btn btn-outline-dark'>Submit</button>
       
      </form>
      </div>

      </> 
       
  
 

  
  )
}

export default Contact
