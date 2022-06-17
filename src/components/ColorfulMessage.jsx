import React from "react";

const ColorfulMessage = (props) => {
  //分割代入
  const { color, children } = props;
  const contentStyle = {
    //　分割代入を使ったのでpropsを省略できる
    // color: props.color,
    // javascriptのお作法でオブジェクトのプロパティと当てはめる値が同じときは省略できる
    //color: color,
    color,
    fontSize: "18px"
  };

  // return <p style={contentStyle}> {props.message} </p>;
  // 引数として呼び出し元で渡した引数のほか、タグの中身もchildrenとして受け取ることができる
  // return <p style={contentStyle}> {props.children} </p>;
  //さらに分割代入を使ったのでpropsを省略できる
  return <p style={contentStyle}> {children} </p>;
};

export default ColorfulMessage;
