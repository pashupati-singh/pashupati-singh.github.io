import React from 'react';
import "../Styles/contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import {HiMail} from "react-icons/hi";
import {MdLocationOn} from "react-icons/md";


const Contactme = () => {

    const handleButtonClick = () => {
        const phoneNumber = '8874750565'; // Replace with the desired phone number
        window.location.href = `tel:${phoneNumber}`;
      };
      const emaillink = ()=>{
        window.location.href = 'mailto:pashupatinathsingh@gmail.com';
      }

    return (
        <section className='Contact-maindiv' id='contact'>
            <div className='heading-div'>
                <button className='heading-textbtn'>
                    <h1 className='mainheading' >Contact <span style={{ color: "#B5D9EB" }}>Me</span></h1>
                </button>
            </div>

            <div className='contact'>

                {/* contact details */}
                <div className='contact-details'>
                    <div className="details-cards">
                        <div className="details-card red" onClick={handleButtonClick}>
                            <div>
                                <div >
                                <BsFillTelephoneFill className='contact-icon'/>
                                </div>
                                <p id="contact-phone" style={{ color: "#B5D9EB" }}>+91 8874750565</p>
                            </div>
                        </div>
                        <div className="details-card blue">
                            <div>
                                <div>

                                <MdLocationOn className='contact-icon'/>
                                </div>
                                <p style={{ color: "#B5D9EB" }}>Ballia , U.P.</p>
                            </div>
                        </div>
                        <div className="details-card green" onClick={emaillink} id="contact-email">
                            <div>
                                <div >

                                <HiMail className='contact-icon' />
                                </div>
                                <p style={{ color: "#B5D9EB" }}>pashupatinathsingh6@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact form */}

                <div className='contact-form-div'>

                    <div className="contact-card" style={{backgroundColor : "#254E58"}}>

                        <span className="contact-title" style={{backgroundColor : "#254E58" , color: "#B5D9EB"}}>Feel Free To Contact</span>
                        <form className="contact-form" style={{backgroundColor : "#254E58"}} action="https://formsubmit.co/pashupatinathsingh6@gmail.com" method="POST">
                            <div className="contact-group" >
    <input placeholder="‎" type="text" required="" style={{backgroundColor : "#88BDBC"}}/>
                                <label htmlFor="name" style={{backgroundColor : "#88BDBC"}}>Name</label>
                            </div>
                <div className="contact-group"style={{backgroundColor : "#254E58"}}>
    <input placeholder="‎" type="email" id="email" name="email"style={{backgroundColor : "#88BDBC"}} required="" />
    <label htmlFor="email"style={{backgroundColor : "#88BDBC"}}>Email</label>
                            </div>
                            <div className="contact-group" style={{backgroundColor : "#254E58"}}>
                                <input placeholder="‎"style={{backgroundColor : "#88BDBC"}} type="text" id="subject" name="_subject" required="" />
                                <label htmlFor="subject"style={{backgroundColor : "#88BDBC"}}>Subject</label>
                            </div>
                            <div className="contact-group" style={{backgroundColor : "#88BDBC"}}>
                                <textarea  placeholder="‎" id="comment" name="message" rows="5" required=""></textarea>
                                <label htmlFor="comment" style={{backgroundColor : "#88BDBC"}}>Message</label>
                                {/* <input type="hidden" name="_template" value="box"></input> */}
                            </div>
                            <button style={{backgroundColor : "#254E58" , border : "1px solid black" , marginTop : "5px", color: "#B5D9EB"}} type="submit">Send Message</button>
                        </form>
                    </div>

                </div>



            </div>





        </section>
    )
}

export default Contactme