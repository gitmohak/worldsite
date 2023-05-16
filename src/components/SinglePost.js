// This component represents the article displayed when the user wants to see a full article or "About me" information

/* HTML parser library - to interpret HTML string input.
useSinglePost - custom React Hook Function to do useful settings for this component */
import React from 'react';
import parse from 'html-react-parser';
import useSinglePost from '../methods/useSinglePost';

function SinglePost(props) {
  const { postNum, date, data } = useSinglePost(props.articleNum, props.aboutNum);

  return (
    // JSX for showing Post Items like title, date, description, images, full text, etc.
    <article className={`postContainer mt-5 ${props.mode === "dark" ? "text-light" : ""}`}>
      <h1>{data[postNum].title}</h1>
      {props.articleNum && <p className='my-4 fs-5 fw-bold'>From {data[postNum].source}. Updated on {date}</p>}

      <span className='mb-4'>{parse(data[postNum].description)}</span>

      <div className='text-center'>
        <img src={data[postNum].image1} alt="Wonderful Article" />
        <img className='mt-5 mb-4' src={data[postNum].image2} alt="Superb Article" />
      </div>

      {parse(data[postNum].text)}
    </article>
  )
}

export default SinglePost