import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // setNumは左で定義したステートを更新する関数
  // useState()内の0は引数ではなく、初期値
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}> こんにちは！ </h1>
      {/* <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です" /> */}
      <ColorfulMessage color="blue"> お元気ですか？ </ColorfulMessage>
      <ColorfulMessage color="pink"> 元気です </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      {/* ↓関数を定義しないで書くこともできる */}
      {/* <button onClick={() => setNum(num + 1)}>カウントアップ</button> */}
      <p> {num} </p>
    </>
  );
};

export default App;
