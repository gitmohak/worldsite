import React from 'react'

function Footer(props) {
    return (
        <footer className='container d-flex justify-content-between align-items-center foot'>
            <p className={`${props.mode === "dark" ? "text-light" : ""}`}>© 2023 World Site, Inc. All rights reserved.</p>
            <img src="/images/logo.png" alt="beautiful website" />
            <div className='fs-3'>
                <a href="https://www.twitter.com/itsmohak/" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>

                <a href="https://www.linkedin.com/in/mohakarora/" target="_blank" rel="noreferrer"><img className='social-icons mx-4' src="/images/icons/linkedin.png" alt="Linked In" /></a>

                <a href="https://www.facebook.com/aroramohak28/" target="_blank" rel="noreferrer"><img className='social-icons' src="/images/icons/facebook.png" alt="Facebook" /></a>
            </div>
        </footer>
    )
}

export default Footer