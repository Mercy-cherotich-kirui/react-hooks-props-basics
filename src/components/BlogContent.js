import React from "react";

//child component
function BlogContent(props) {
  return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;
