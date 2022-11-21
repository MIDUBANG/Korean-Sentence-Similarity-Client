import React from "react";

const ResultPage = ({ result }) => {
  console.log("결과임!", result);
  return <div>{result[1000].content}</div>;
};

export default ResultPage;
