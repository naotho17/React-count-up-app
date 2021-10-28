import { useState } from "react";
import "./styles.css";

export const App = () => {
  //State
  const [count, setcount] = useState(0);

  const upButton = () => {
    //countをアップする処理
    setcount(count + 1);
  };
  const downButton = () => {
    if (count > 0) {
      //countをダウンする処理
      setcount(count - 1);
    }
  };

  return (
    <>
      <h1>これはカウントアップアプリです。</h1>
      <p>現在のカウントは{count}回です。</p>
      <div className="button_wrapper">
        <button onClick={upButton}>UP</button>
        <button onClick={downButton}>DOWN</button>
      </div>
    </>
  );
};
