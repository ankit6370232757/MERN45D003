import React from 'react';
import './Contact.css'
function Contact() {
  return (
    <div>
        
      <h1>Contact Us</h1>
       <form>
    
      <input type="text" placeholder='Name' />
      <input type="number" placeholder='Phone no' />
      <input type="email" placeholder='E-mail'/>
      <input type="text" placeholder='Any Message' /><br />
      <button type='btn'>Submit</button>
      
      </form>
    </div>
  );
}

export default Contact;
