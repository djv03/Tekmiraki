import React from 'react'
import './contact.css'
function Contact() {
  const handleClick=()=>{
    let inputVal = document.getElementById("input");
    if(inputVal && inputVal.value){
      document.getElementById("sucess").innerHTML='We have got your email!!! ';
      document.getElementById("error").innerHTML='';
    }else{
      document.getElementById("error").innerHTML='Please enter your email!';
      document.getElementById("sucess").innerHTML='';
    }
    console.log('cliked')
  }
  return (
    <div className='contact-section' id='contact'>
      <div className="contact-container">
      <h1>Stay In Touch</h1>
      <p>Enter your email address to register to our newsletter subscription!</p>
      <input type="text" id='input' placeholder='Enter your email adress' />
      <button onClick={handleClick} >Subscribe</button>
      <span id='sucess'></span>
      <span id='error'></span>
      </div>
    </div>
  )
}
export default Contact
