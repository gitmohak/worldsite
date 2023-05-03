import React from 'react';
import parse from 'html-react-parser';
import data from "../postsData.json";

function SinglePost() {
  let articleNum = 10;
  const date = new Date(data[articleNum].datePublished).toUTCString().slice(0, 16);

  return (
    <article className='postContainer'>
      <h1>{data[articleNum].title}</h1>
      <p className='my-4 fs-5 fw-bold'>By {data[articleNum].author} on {date}</p>

      <p className='mb-4'>{parse(data[articleNum].description)}</p>

      <div className='text-center'>
        <img src={data[articleNum].image1} alt="Wonderful Article" />
        <img className='mt-5 mb-4' src={data[articleNum].image2} alt="Superb Article" />
      </div>
      <p>
        {parse(data[articleNum].text)}
      </p>
    </article>
  )
}

export default SinglePost