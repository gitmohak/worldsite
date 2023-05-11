import React, { useContext } from 'react';
import parse from 'html-react-parser';
import articleData from "../data/postsData.json";
import aboutData from "../data/aboutData.json";
import stopScrollContext from '../contexts/stopScrollContext';

function SinglePost(props) {
  const { stopScroll } = useContext(stopScrollContext);
  let postNum, date, data;

  if (props.articleNum) {
    data = articleData;
    postNum = props.articleNum;
    date = new Date(data[postNum].datePublished).toUTCString().slice(0, 16);
  }

  else if (props.aboutNum) {
    data = aboutData;
    postNum = props.aboutNum;
  }

  setTimeout(() => {
    if (stopScroll === false) {
        window.scrollTo(0, 0);
    }
}, 0);

  return (
    <article className={`postContainer mt-5 ${props.mode === "dark" ? "text-light" : ""}`}>
      <h1>{data[postNum].title}</h1>
      {props.articleNum && <p className='my-4 fs-5 fw-bold'>By {data[postNum].author} on {date}</p>}

      <span className='mb-4'>{parse(data[postNum].description)}</span>

      <div className='text-center'>
        <img src={data[postNum].image1} alt="Wonderful Article" />
        <img className='mt-5 mb-4' src={data[postNum].image2} alt="Superb Article" />
      </div>
      <p>
        {parse(data[postNum].text)}
      </p>
    </article>
  )
}

export default SinglePost