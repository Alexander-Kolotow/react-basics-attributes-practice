import React from "react";
import "./styles.css";

function Article () {
  return (
    <article className="article">
    <h2 className="article__title">Climate change</h2>
    <label htmlFor="content">
      <input id="content" type="button" />
      <a className="article__link" href="https://en.wikipedia.org/wiki/Climate_change">
        learn more here...
      </a>
    </label>
  </article>
);
}

export default function App() {
  return < Article /> ;
}
