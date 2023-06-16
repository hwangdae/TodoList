const Header = ({
    title,
    info,
    titleChangeHandler,
    infoChangeHandler,
    clickAddButtonHandler,
  }) => {
    return (
      <header>
        <div className="header-inner">
          <form>
            <div className="input-wrap">
              <label>제목</label>
              <input
                type="text"
                value={title}
                onChange={titleChangeHandler}
              ></input>
              <label>내용</label>
              <input
                type="text"
                value={info}
                onChange={infoChangeHandler}
              ></input>
            </div>
            <button
              type="button"
              className="addButton"
              onClick={clickAddButtonHandler}
            >
              추가하기
            </button>
          </form>
        </div>
      </header>
    );
  };

  export default Header;