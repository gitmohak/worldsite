import React from 'react'

function Footer() {
    return (
        <footer className='container d-flex justify-content-between align-items-center foot'>
            <div>© 2023 World Site, Inc. All rights reserved.</div>
            <img src="./images/logo.png" alt="" />
            <div className='fs-3'>
                <i class="bi bi-linkedin"></i>
                <i className="bi bi-twitter mx-4"></i>
                <i className="bi bi-facebook"></i>
            </div>
        </footer>
    )
}

export default Footer