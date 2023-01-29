# :whale: Konlpy와 TF-IDF를 이용한 한국어 문장 유사도 계산 API (React)
Konlpy와 TF-IDF를 이용해 한국어 문장 사이의 유사도를 계산해주는 사이트 

### Demo
![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/81161750/206638245-99286499-0ffb-4a9d-9085-96cf23ed0e07.gif)


### URL 
https://midubangtfidf.netlify.app/
(aws 과금 문제로 12/12 이후부터 서버 사용 불가능합니다.)

<br>

## :whale: Run Project

### Run Server
```
git clone  ~
npm install 
npm start
```

## :whale: Stacks
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"
><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">  
<br>

### :whale: How to Use

```
fetch("https://midubang.com/api/nlp", {
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
```

