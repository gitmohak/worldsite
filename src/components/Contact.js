import React from 'react'

function Contact() {
    return (
        <section id="myContact" className='contact container d-flex flex-wrap justify-content-between align-items-center'>
            <h1 className='w-100 mt-5 mb-4'>Contact us</h1>
            <img src="./images/contact.jpg" alt="" />
            <form>
                <div className="mb-3">
                    <label htmlFor="senderName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="senderName" aria-describedby="nameHelp" required minLength={5}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="senderEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="senderEmail" aria-describedby="emailHelp" required minLength={5}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" aria-describedby="subjectHelp" required minLength={5}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="sender-msg" className="form-label">Message</label>
                    <textarea className="form-control" id="sender-msg" aria-describedby="messageHelp" required minLength={10} rows={6}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    )
}

export default Contact