import React from "react";
import { TiDeleteOutline, TiArrowForwardOutline } from "react-icons/ti";

import styled from "styled-components";

const ResultPage = ({ result }) => {
  const bestData = result[result.length - 1];

  return (
    <Wrapper>
      <main className="ResultPage">
        <h1>TF-IDF</h1>

        <h2>가장 비슷한 문장은</h2>
        <h2 id="sentence">✨{bestData.content}</h2>
        <h1 className="discription">분석 결과</h1>
        <ul className="list">
          {result.map((con, index) => {
            if (index !== result.length - 1) {
              return (
                <li className="list__item">
                  <div style={{ display: "flex" }}>
                    <p className="num">{index + 1}. </p>
                    <p>{con.content}</p>
                  </div>

                  <p className="distance">
                    {" "}
                    ( 거리 : {con.distance.toString().substr(0, 5)} )
                  </p>
                </li>
              );
            }
          })}
        </ul>
      </main>
    </Wrapper>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  #sentence {
    font-size: 14px;
    font-weight: 900;

    line-height: 150%;
  }

  main {
    margin-left: 35px;
    margin-top: 10px;

    background: #07070e;
    background: linear-gradient(180deg, #b06ab3, 20%, #4568dc);
    border-radius: 24px;
    height: 480px;
    width: 232px;
    padding: 16px 24px 32px;
    position: relative;
    z-index: 1;
    transition-duration: 0.5s;

    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
    transition-duration: 0.5s;
    transform: translateY(-5px);
  }

  .ResultPage {
    margin-left: 0;
  }

  /*TEXT*/
  h1,
  h2,
  ul,
  li {
    color: #d5d5db;
    font-family: "Open Sans", sans-serif;
  }

  h1 {
    font-size: 12px;
    font-weight: 100;
    text-align: center;
    margin: 16px 0 10px;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin: 4px 0 24px;
  }

  .discription {
    margin-bottom: 10px;
  }

  .distance {
    margin-left: 5px;
  }
  /*LIST*/
  .list {
    height: 355px;

    margin: 0;
    padding: 0;

    overflow: auto;
  }

  .list__item {
    line-height: 150%;

    background: rgba(213, 213, 219, 0.1);
    border-radius: 8px;
    font-size: 12px;
    list-style: none;
    margin: 0 0 16px;
    padding: 16px 16px 16px 16px;
    position: relative;
    cursor: pointer;

    color: #d5d5db;

    align-items: center;
  }

  .num {
    margin-right: 4px;
  }

  @media screen and (max-width: 695px) {
    body {
      height: 104vh;
    }
  }
`;
