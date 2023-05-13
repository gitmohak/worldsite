// This component represents the "Contact Us" section.

// EmailJS library (to send message to the administrator when the form is submitted), useRef (to create required references to modal and form), useState (to create result of the form), handleSubmit (custom function )
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import handleSubmit from '../methods/handleSubmit';
import parse from 'html-react-parser';

function Contact(props) {
    const contactForm = useRef();
    const modalRef = useRef(null);

    const [resultText, setresultText] = useState({
        title: "Please Wait",
        description: "Your message is being delivered."
    });
    return (
        <section id="myContact" className='contact container d-flex flex-wrap justify-content-around'>
            <h1 className={`w-100 mb-4 ${props.mode === "dark" ? "text-light" : ""}`}>Contact us</h1>
            <img src="/images/contactTall.png" alt="Contact Us with message" />
            
            <form className={`${props.mode === "dark" ? "text-light" : ""}`} ref={contactForm}
            
            onSubmit={(event) =>{
                handleSubmit(event, modalRef, setresultText, emailjs, contactForm);
            }} method='post'>

                <div className="mb-3">
                    <label htmlFor="senderName" className="form-label">Name</label>

                    <input type="text" name="sender_name" className={`form-control ${props.mode === "dark" ? "bg-black border-white text-light" : ""}`} id="senderName" aria-describedby="nameHelp" required minLength={5} maxLength={70} pattern='[a-zA-Z\s]+' title="Only Alphabets and Spaces" />
                </div>

                <div className="mb-3">
                    <label htmlFor="senderEmail" className="form-label">Email address</label>
                    <input type="email" name="sender_email" className={`form-control ${props.mode === "dark" ? "bg-black border-white text-light" : ""}`} id="senderEmail" aria-describedby="emailHelp" required minLength={5} maxLength={100} />
                </div>

                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" name="subject" className={`form-control ${props.mode === "dark" ? "bg-black border-white text-light" : ""}`} id="subject" aria-describedby="subjectHelp" required minLength={5} maxLength={150} />
                </div>

                <div className="mb-3">
                    <label htmlFor="sender-msg" className="form-label">Message</label>
                    <textarea className={`form-control ${props.mode === "dark" ? "bg-black border-white text-light" : ""}`} name="message" id="sender-msg" aria-describedby="messageHelp" required minLength={10} rows={6} maxLength={5000} />
                </div>

                <button className="btn btn-lg btn-primary" type="submit">
                    Submit
                </button>
                <button hidden ref={modalRef} data-bs-toggle="modal" data-bs-target="#formModal"></button>
            </form>

            <div className="modal fade" data-bs-backdrop="static" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className={`modal-content ${props.mode === "dark" ? "text-light dark-modal-bg" : ""}`}>

                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="formModalLabel">{parse(resultText.title)}</h1>
                            <button type="button" className={`btn-close ${props.mode === "dark" ? "btn-close-white" : ""}`} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            {parse(resultText.description)}
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact