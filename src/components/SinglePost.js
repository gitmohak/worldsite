import React from 'react';
import allPosts from "../posts/all-posts.json"
import delhi from "../posts/india/delhi.json"
import parse from 'html-react-parser';

function SinglePost() {
    console.log(allPosts)
    console.log(delhi)
  return (
    <div>
        <p>{allPosts[0].title}</p>
        <p>{parse(allPosts[0].description)}</p>
        <p>{allPosts[0].image2}</p>
        <p>{parse(delhi.fullText)}</p>
    </div>
  )
}

export default SinglePost