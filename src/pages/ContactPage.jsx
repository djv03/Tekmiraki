import {MdOutlinePhoneIphone, MdEmail} from "react-icons/md";
import {SlLocationPin} from 'react-icons/sl'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {BiSolidPhoneCall} from 'react-icons/bi'
import "./contactpage.css"
import Contact from "../Components/Contact";

function ContactPage(){
  return (
    <div className="contact-page-container">
      <h1>Contact</h1>

      <div className="contact-card-container">
        <section>
          <MdOutlinePhoneIphone style={{fontSize: "2.75rem", color: "blue"}}/>
          <p>+919408203532</p>
        </section>
        <section>
          <SlLocationPin style={{fontSize: "2.75rem", color: "blue"}}/>
          <p>Office No. 246, 2nd Floor, Vihav Trade Center, Near Waves Club, Opp. Essar Petrol Pump, Bhayli, Vadodara - 391410</p>
        </section>
        <section>
          <MdEmail style={{fontSize: "2.75rem", color: "blue"}}/>
          <p>chaitanya.patel@tecmeraki.co.in</p>
        </section>
      </div>

      <div className="contact-form-container">
        <section className="contact-form">
          <h1 className="contact-form-header">Get In Touch</h1>
          <form>
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter email address" />
            <textarea rows="5" placeholder="Enter your message"></textarea>
            <button type="submit">Send message</button>
          </form>
        </section>
        <section className="message-me">
          <h1>Message Me</h1>
          <p>Please feel free to call or email us, or use our contact form to get in touch with us.</p>
          <p>We look forward to hearing from you!</p>
          <div className="socials">
                    <a href="/"><BsLinkedin style={{fontSize: "1.75rem"}}/></a>
                    <a href="/"><BsInstagram style={{fontSize: "1.75rem"}}/></a>
                    <a href="/"><BiSolidPhoneCall style={{fontSize: "1.75rem"}}/></a>
                </div>
        </section>

      </div>
        <Contact />
    </div>
  )
}

export default ContactPage;