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
</main>;
