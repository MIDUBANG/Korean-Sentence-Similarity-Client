import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

function App() {
  const [contents, setContents] = useState([]);
  const [new_, setNew] = useState([]);

  const PostNlp = (contents, new_) => {
    const data = {
      contents: contents,
      text: new_,
    };

    fetch("http://127.0.0.1:5000/api/nlp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <main>
        <h1>TF-IDF</h1>
        <h2>문장 유사도 구하기</h2>
        <h1>비교할 후보 문장들을 넣어주세요</h1>
        <ul class="list">
          <li class="list__item">Follow CodeDesignerWorld</li>
          <li class="list__item">Visit www.rareprogrammer.com</li>
          <li class="list__item">Like, Comment & share Post</li>
          <li class="list__item">Visit Again</li>
        </ul>

        <div class="add">
          <div class="add__item">+</div>
        </div>
      </main>

      <main></main>
    </div>
  );
}

export default App;

const BackGround = styled.div`
  background-color: gray;
`;
