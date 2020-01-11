import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Article from "./components/Article";

function App() {
  const APIKEY = "07c5684c52fc49f1a4ef945d31b68dc2";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`)
      .then(res => {
        const data = res.data.articles;
        console.log(data);
        setArticles(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Top New Stories</h1>
      <div>
        {articles.map((article, index) => {
          return (
            <Article
              author={article.author}
              index={index}
              title={article.title}
              content={article.content}
              description={article.description}
              img={article.urlToImage}
              link={article.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
