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

  <input value={newContent} onChange={(e) => setNewContent(e.target.value)} />

  <div className="add">
    <div className="add__item" onClick={AddContent}>
      +
    </div>
  </div>
</main>;
