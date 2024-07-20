import React from 'react'
import './Contact.css'

import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {

  const onSubmit = async (event) => {

    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "374e076d-a4b1-45e0-abd7-50ed1ce260b8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

 
  return (
    
    <div className="contact" id='contact'>

        <h1>Contact</h1>

        <hr />

        <p>I'm currently available to take on new projects, so feel free to contact me.</p>


        <form onSubmit={onSubmit} action="" className="contact-form">

            <div className="contact-form-item">

                <label htmlFor="">Name</label>
                <input name='name' type="text" placeholder='Enter Your Name' />

            </div>
            
            <div className="contact-form-item">
                <label htmlFor="">Email</label>
                <input name='email' type="email" placeholder='Enter Your Email' />
            </div>
            
            <div className="contact-form-item textarea">
                <label htmlFor="">Message</label>
                <textarea name="message" id="" placeholder='Enter Your Message'></textarea>
            </div>
            <button type="submit">Submit</button>

        </form>


        

       
    </div>
  )
}

export default Contact