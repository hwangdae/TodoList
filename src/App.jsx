import React from "react";
import "./reset.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Working from "./components/working";
import Done from "./components/done";

function App() {
  const [works, setWorks] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      info: "useState에 대해 알아보기",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");

  const titleChangeHandler = function (event) {
    setTitle(event.target.value);
  };
  const infoChangeHandler = function (event) {
    setInfo(event.target.value);
  };

  const clickAddButtonHandler = () => {
    if (title.length === 0) {
      alert("제목을 입력해주세요.");
    } else if (info.length === 0) {
      alert("내용을 입력해주세요.");
    } else {
      const newWork = {
        id: works.length + 1,
        title: title,
        info: info,
        isDone: false,
      };
      setWorks([...works, newWork]);

      //추가하기 버튼 클릭시 내용 입력하는 곳을 빈값으로 만들기
      setTitle("");
      setInfo("");
    }
  };

  //완료 버튼 클릭시 클릭한 아이디 값과 같은 것의 isDOne을 true로 바꿔줌
const completeButtonHandler = (item) => {
  const isDoneTrue = works.map((work) =>
    work.id === item ? { ...work, isDone: true } : work
  );
  setWorks(isDoneTrue);
};

  //취소 버튼 클릭시 클릭한 아이디 값과 같은 것의 isDone을 false로 바꿔줌
  const cancelButtonHandler = (item) => {
    const isDoneFalse = works.map((work) =>
      work.id === item ? { ...work, isDone: false } : work
    );
    setWorks(isDoneFalse);
  };

//삭제 버튼 클릭시 클릭한 아이디 값과 같지 않은 것만 보여줌
const clickDeleteHandler = (id) => {
  const newWorks = works.filter((works) => works.id !== id);
  setWorks(newWorks);
};
  return (
    <>
      <Header
        title={title}
        info={info}
        titleChangeHandler={titleChangeHandler}
        infoChangeHandler={infoChangeHandler}
        clickAddButtonHandler={clickAddButtonHandler}
      />
      <main>
        <section>
          <div className="section-inner">
            <h1>Working</h1>
            {works.map(function (item) {
              if (item.isDone === false) {
                return (
                  <Working
                    key={item.id}
                    item={item}
                    clickDeleteHandler={clickDeleteHandler}
                    completeButtonHandler={completeButtonHandler}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </section>
        <section>
          <div className="section-inner">
            <h1>Done</h1>
            {works.map(function (item) {
              if (item.isDone === true) {
                return (
                  <Done
                    key={item.id}
                    item={item}
                    clickDeleteHandler={clickDeleteHandler}
                    cancelButtonHandler={cancelButtonHandler}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
