// /* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
// ↓こっちのやり方ならばimportの名称を自分で勝手に変えて使うことができてしまう
//import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  //useEffectを使わないとon/offボタン押下時に表示が切り替わらない
  //第二引数に空の配列を定義すると
  //最初にレンダリングするときだけ実行される
  //関心の分離
  //第二引数にnumを指定すると、numが変化するときだけ
  //実行するようになる
  //第二引数にすべてのstateを定義しないとeslintがエラーを出すので
  //１行目にそのチェックを無効にするコメントを入れている
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        //    初期値ゼロでレンダリングされたときも
        //    ここでStateが変更されるので、再レンダリングされてしまう
        //    faceShowFldがfalseの場合のみリセットするようにする
        //    setFaceShowFlg(true);
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
    //次の行のeslintのチェックを無効にする
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  // setNumは左で定義したステートを更新する関数
  // useState()内の0は引数ではなく、初期値
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
      <button onClick={onClickSwitchShowFlg}>on/off</button>
      {faceShowFlg && <p> ('ω')</p>}
    </>
  );
};

export default App;
