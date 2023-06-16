const Done = ({ item, clickDeleteHandler, cancelButtonHandler }) => {
    return (
      <div key={item.id} className="work-box">
        <div className="title-wrap">
          <h1>{item.title}</h1>
          <h2>{item.info}</h2>
        </div>
        <div className="button-wrap">
          <button
            className="delButton"
            onClick={() => clickDeleteHandler(item.id)}
          >
            삭제하기
          </button>
          <button
            className="calcelButton"
            onClick={() => cancelButtonHandler(item.id)}
          >
            취소
          </button>
        </div>
      </div>
    );
  };

  export default Done