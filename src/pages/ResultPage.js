import React from "react";
import { TiDeleteOutline, TiArrowForwardOutline } from "react-icons/ti";
import "../style/result.css";

const ResultPage = ({ result }) => {
  const bestData = result[result.length - 1];

  return (
    <main>
      <h1>TF-IDF</h1>

      <h2>가장 비슷한 문장은</h2>
      <h2 id="sentence">{bestData.content}</h2>
      <h1 className="discription">분석 결과</h1>
      <ul className="list">
        {result.map((con, index) => {
          if (index !== result.length - 1) {
            return (
              <li className="list__item">
                <p className="num">{index + 1}. </p>
                <p>{con.content}</p>
                <p>=={con.distance}</p>
              </li>
            );
          }
        })}
      </ul>
      <div className="add">
        <div className="add__item go">
          <TiArrowForwardOutline id="go" />
        </div>
      </div>
    </main>
  );
};

export default ResultPage;
