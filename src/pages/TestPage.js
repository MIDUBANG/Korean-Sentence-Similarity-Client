import React from "react";

const TestPage = () => {
  const Test = () => {
    const data = {
      contents: ["문장1", "문장1", "문장1", "문장1"],
      extraInfo: {
        monthly: true,
        lumpSumMoney: 0,
        commission: 30,
        deposit: 5000000, //보증금 5백
        monthlyMoney: 600000, // 월세 60
        pet: true,
        loan: true,
        substitute: true,
      },
    };

    fetch("http://127.0.0.1:5000/api/nlp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application / json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.table("분석 결과", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <button onClick={Test}>버튼</button>;
};

export default TestPage;
