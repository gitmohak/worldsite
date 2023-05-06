import React from 'react'

function Footer() {
    return (
        <footer className='container d-flex justify-content-between align-items-center foot'>
            <div>© 2023 World Site, Inc. All rights reserved.</div>
            <img src="./images/logo.png" alt="beautiful website" />
            <div className='fs-3'>
                <a href="https://www.twitter.com/itsmohak/" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>

                <a href="https://www.linkedin.com/in/mohakarora/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin mx-4"></i></a>


                <a href="https://www.facebook.com/aroramohak28/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
            </div>
        </footer>
    )
}

export default Footer