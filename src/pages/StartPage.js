import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { TiDeleteOutline, TiArrowForwardOutline } from "react-icons/ti";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

const StartPage = ({ setRequest, ReqeustNlp, request }) => {
  const [contents, setContents] = useState([
    { id: 1, text: "asdfasdf" },
    { id: 2, text: "asdfasdf" },
    { id: 3, text: "asdfasdf" },
  ]);
  const [newContent, setNewContent] = useState("");

  const nextId = useRef(4);

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

  const [target, setTarget] = useState("비교할 대상 문장");

  // 요청
  const Request = () => {
    const data = {
      contents: contents.map((c) => {
        return c.text;
      }),
      text: target,
    };

    window.localStorage.setItem("data", JSON.stringify(data));

    // setRequest(() => ({
    //   ...request,
    //   contents: contents.map((c) => {
    //     return c.text;
    //   }),
    //   text: target,
    // }));

    ReqeustNlp();
  };

  SwiperCore.use([Navigation, Pagination]);

  return (
    <Swiper slidesPerView={1} scrollbar={{ draggable: true }} navigation>
      <SwiperSlide>
        <main>
          <h1>TF-IDF</h1>
          <h2>문장 유사도 구하기</h2>
          <h1 className="discription">비교할 후보 문장들을 넣어주세요</h1>
          <div className="list">
            {contents.map((con, index) => {
              return (
                <div onClick={() => Delete(con.id)} className="list__item">
                  <p className="num">{index + 1}. </p>
                  <p>{con.text}</p>
                  <TiDeleteOutline id="delete" />
                </div>
              );
            })}
          </div>

          <input
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />

          <div className="add">
            <div className="add__item" onClick={AddContent}>
              +
            </div>
          </div>
        </main>
      </SwiperSlide>
      <SwiperSlide>
        <main>
          <h1>TF-IDF</h1>
          <h2>문장 유사도 구하기</h2>
          <h1 className="discription">타겟 문장을 넣어주세요</h1>
          <ul className="list">
            <li className="list__item">{target}</li>
          </ul>

          <input value={target} onChange={(e) => setTarget(e.target.value)} />

          <div className="add">
            <div className="add__item go" onClick={() => Request()}>
              <TiArrowForwardOutline id="go" />
            </div>
          </div>
        </main>
      </SwiperSlide>
    </Swiper>
  );
};

export default StartPage;
