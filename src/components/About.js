import React from 'react'

function About() {
    return (
        <section className='container d-flex flex-wrap justify-content-between about'>
            <h1 className='w-100'>About us</h1>
            <div className="card">
            <a href='/'>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title fs-3">World Site is Incredible</h5>
                        <p className="card-text">You will find incredible content about the world here. These places will blow your mind with awesomeness.</p>
                        <button className='btn btn-primary'>Go Somewhere</button>
                    </div>
            </a>
            </div>

            <div className="card">
                <a href='/'>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title fs-3">World Site is Incredible</h5>
                        <p className="card-text">You will find incredible content about the world here. These places will blow your mind with awesomeness.</p>
                        <button className='btn btn-primary'>Go Somewhere</button>
                    </div>
                    </a>
            </div>

            <div className="card">
                <a href='/'>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title fs-3">World Site is Incredible</h5>
                        <p className="card-text">You will find incredible content about the world here. These places will blow your mind with awesomeness.</p>
                        <button className='btn btn-primary'>Go Somewhere</button>
                    </div>
                    </a>
            </div>
        </section>
    )
}

export default About