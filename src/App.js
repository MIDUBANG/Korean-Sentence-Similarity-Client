import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import StartPage from "./pages/StartPage";
import ResultPage from "./pages/ResultPage";

function App() {
  const navigate = useNavigate();

  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [fail, setFail] = useState(false);

  const ReqeustNlp = () => {
    const data = JSON.parse(window.localStorage.getItem("data"));

    setFail(false);

    fetch("http://127.0.0.1:5000/api/nlp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "/",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("분석 결과", data);
        setResult(data);
        navigate("/result");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setFail(true);
      });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <StartPage
            ReqeustNlp={ReqeustNlp}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            fail={fail}
          />
        }
      />
      <Route path="/result" element={<ResultPage result={result} />} />
    </Routes>
  );
}

export default App;
