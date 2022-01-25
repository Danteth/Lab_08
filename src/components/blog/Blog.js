import React from "react";
import ReactPlayer from "react-player";

function Blog() {
  return (
    <div className="home">
      <div class="container">
        <ReactPlayer url={"youtube.com/watch?v=s4gBChg6AII"} controls/>
      </div>
    </div>
  );
}

export default Blog;