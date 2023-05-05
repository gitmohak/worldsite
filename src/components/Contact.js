import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

function Contact() {
    const contactForm = useRef();
    const [resultText, setresultText] = useState({
        title: "Please Wait",
        description: "Your message is being delivered."
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setresultText({
            title: "Please Wait",
            description: "Your message is being delivered."
        });
        console.log("I am called")

        // emailjs.sendForm('service_0wcmgnv', 'template_ulzc5a7', contactForm.current, 'O0wEfR0CHzgJz00pr')
        //     .then(() => {
        //         setresultText({
        //             title: "SUCCESS",
        //             description: "Your message has been delivered. We will respond back shortly."
        //         });

        //     }, (error) => {
        //         setresultText({
        //             title: "ERROR",
        //             description: `A problem has occurred while sending your message - ${error.text}`
        //         });
        //     });

        setTimeout(() => {
            document.getElementById("senderName").value = "";
            document.getElementById("senderEmail").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("sender-msg").value = "";
        }, 0)
    }

    return (
        <section id="myContact" className='contact container d-flex flex-wrap justify-content-between align-items-center'>
            <h1 className='w-100 mt-5 mb-4'>Contact us</h1>
            <img src="./images/contact.jpg" alt="" />
            <form ref={contactForm} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="senderName" className="form-label">Name</label>
                    <input type="text" name="sender_name" className="form-control" id="senderName" aria-describedby="nameHelp" required minLength={5} />
                </div>

                <div className="mb-3">
                    <label htmlFor="senderEmail" className="form-label">Email address</label>
                    <input type="email" name="sender_email" className="form-control" id="senderEmail" aria-describedby="emailHelp" required minLength={5} />
                </div>

                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" name="subject" className="form-control" id="subject" aria-describedby="subjectHelp" required minLength={5} />
                </div>

                <div className="mb-3">
                    <label htmlFor="sender-msg" className="form-label">Message</label>
                    <textarea className="form-control" name="message" id="sender-msg" aria-describedby="messageHelp" required minLength={10} rows={6} />
                </div>

                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#formModal" type="submit">
                    Submit
                </button>
            </form>

            <div className="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="formModalLabel">{resultText.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            {resultText.description}
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