import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import StartPage from "./pages/StartPage";
import ResultPage from "./pages/ResultPage";

function App() {
  const navigate = useNavigate();

  const [result, setResult] = useState({});

  const ReqeustNlp = () => {
    const data = JSON.parse(window.localStorage.getItem("data"));

    fetch("http://107.21.71.115:5000/api/nlp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("분석 결과", data);
        setResult(data);
        navigate("/result");
      });
  };

  return (
    <Routes>
      <Route path="/" element={<StartPage ReqeustNlp={ReqeustNlp} />} />
      <Route path="/result" element={<ResultPage result={result} />} />
    </Routes>
  );
}

export default App;
