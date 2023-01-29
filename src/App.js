import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import StartPage from "./pages/StartPage";
import ResultPage from "./pages/ResultPage";
import TestPage from "./pages/TestPage";

function App() {
  const navigate = useNavigate();

  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [fail, setFail] = useState(false);

  const ReqeustNlp = () => {
    fetch("http://127.0.0.1:5000/api/nlp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "/",
      },
      body: JSON.stringify({
        contents: ["문장1", "문장1", "문장1", "문장1"],
        extraInfo: {
          monthly: true,
          lumpSumMoney: 0,
          commission: 300000,
          deposit: 300,
          monthlyMoney: 0,
          pet: true,
          loan: true,
          substitute: true,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("분석 결과", data);
      })
      .catch((err) => {
        console.log(err);
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
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}

export default App;
