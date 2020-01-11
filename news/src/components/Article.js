import React from "react";

const Article = props => {
  return (
    <div className="container">
      <h3>{props.title}</h3>
      <img src={props.img} alt={"Headline Image"} />
      <p>{props.author}</p>
    </div>
  );
};

export default Article;
