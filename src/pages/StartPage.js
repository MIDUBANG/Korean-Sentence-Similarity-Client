import React, { useState, useRef } from "react";
import { TiDeleteOutline, TiArrowForwardOutline } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styled from "styled-components";

import { Oval } from "react-loader-spinner";

const StartPage = ({ setRequest, ReqeustNlp, request }) => {
  const [contents, setContents] = useState([
    {
      id: 1,
      text: "2회 월세 연체 시 임대인은 임대차 계약을 해지할 수 있다.",
    },
    {
      id: 2,
      text: "계약금은 계약과 동시에 임대인 통장으로 입금하고, 월세도 본 통장으로 매월 입금한다.",
    },
    {
      id: 3,
      text: "월세는 매월 1일에 입금하고, 첫 달은 잔금일로부터 1일까지 계산해서 입금하기로 한다.",
    },
    { id: 4, text: "월세 외 부가가치세는 별도로 한다." },
  ]);

  const [target, setTarget] = useState("비교할 대상 문장");
  const [newContent, setNewContent] = useState("");
  const nextId = useRef(4);

  const [isLoading, setIsLoading] = useState(false);

  const AddContent = () => {
    if (newContent !== "") {
      const text = {
        id: nextId.current,
        text: newContent,
      };

      setContents([...contents, text]);

      setNewContent("");
      nextId.current++;
    }
  };

  const Delete = (id) => {
    console.log("지우려는 id", id);
    setContents(contents.filter((con) => con.id !== id));
  };

  // 요청
  const Request = () => {
    setIsLoading(true);

    console.log("요청");

    const data = {
      contents: contents.map((c) => {
        return c.text;
      }),
      text: target,
    };

    window.localStorage.setItem("data", JSON.stringify(data));

    ReqeustNlp();
  };

  SwiperCore.use([Navigation, Pagination]);

  return (
    <Wrapper>
      <Swiper slidesPerView={1} scrollbar={{ draggable: true }} navigation>
        <SwiperSlide>
          <main>
            <h1>TF-IDF</h1>
            <h2>후보 문장 등록</h2>
            <h1 className="discription">비교할 후보 문장들을 넣어주세요</h1>
            <div className="list">
              {contents.map((con, index) => {
                return (
                  <div
                    key={con.id}
                    onClick={() => Delete(con.id)}
                    className="list__item"
                  >
                    <p className="num">{index + 1}. </p>
                    <p className="content">{con.text}</p>
                    <TiDeleteOutline id="delete" />
                  </div>
                );
              })}
            </div>

            <input
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />

            <div className="add" onClick={AddContent}>
              <div className="add__item">+</div>
            </div>
          </main>
        </SwiperSlide>
        <SwiperSlide>
          <main>
            <h1>TF-IDF</h1>
            <h2>타겟 문장 등록</h2>
            <h1 className="discription">타겟 문장을 넣어주세요</h1>
            <ul className="list">
              <li className="list__item">{target}</li>
            </ul>
            {isLoading ? (
              <div className="loading-box">
                <Oval
                  className="loading"
                  height={80}
                  width={80}
                  color="#4E75FF"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#7AD3FF"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
                <h1>분석 중...</h1>
              </div>
            ) : (
              <></>
            )}

            <input value={target} onChange={(e) => setTarget(e.target.value)} />

            <div className="add" onClick={() => Request()}>
              <div className="add__item go">
                <TiArrowForwardOutline id="go" />
              </div>
            </div>
          </main>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default StartPage;

const Wrapper = styled.div`
  .loading-box {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .swiper {
    margin-top: 40px;
    height: 600px;
    width: 350px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev {
    transform: translate(-10px, 0px);
  }

  .swiper-button-next {
    transform: translate(10px, 0px);
  }

  .flex-right,
  .add {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  main {
    margin-left: 35px;
    margin-top: 10px;

    background: #07070e;
    background: linear-gradient(180deg, #b06ab3 20%, #4568dc);
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

  input {
    background-color: transparent;
    border: none;
    color: #d5d5db;

    border-bottom: 1px solid #d5d5db;

    position: absolute;
    left: 24px;
    bottom: 35px;

    width: 60%;
  }

  input::placeholder {
    color: #d5d5db;
    font-style: italic;
  }

  input:focus {
    outline: none;
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

  /*LIST*/
  .list {
    margin: 0;
    padding: 0;
  }

  .content {
    width: 160px;
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

    display: flex;

    align-items: center;
  }

  .num {
    margin-right: 4px;
  }
  #delete {
    height: 20px;
    width: 20px;

    margin-left: auto;
  }

  /*ADD*/
  .add {
    position: absolute;
    right: 24px;
    bottom: 23px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: #fa6ab3;
    height: 40px;
    width: 40px;
    cursor: pointer;
    transition: height 0.3s ease, width 0.3s ease;
  }

  .add__item {
    color: #ffffff;
    height: 16px;
    width: 16px;

    text-align: center;
    margin-bottom: 3px;
  }

  @media screen and (max-width: 695px) {
    body {
      height: 104vh;
    }
  }
`;
