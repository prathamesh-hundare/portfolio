import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l4mb64a",
        "template_ekwpxie",
        formRef.current,
        "user_73zn0lMogKeRMKnetRohq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me :</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 7798016080
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              portfolioreact0009@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Chaitrangan Society, Near lake Town, Bibwewadi, Pune-411046
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's on your mind?</b> I will respond to serious and creative
            projects. Always available. Get in touch -
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank You..!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
