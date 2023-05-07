import React from 'react'

function NoPage() {
  return (
    <div className='container d-flex flex-column flex-wrap justify-content-center align-items-center notFound vh-100'>
        <h1>404 - Error</h1>
        <h4>The requested URL was not found on this server.</h4>
        <img src="/images/not-found.png" alt="404 Not Found" />
    </div>
  )
}

export default NoPage