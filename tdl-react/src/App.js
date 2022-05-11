import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [inputText, setInputText] = useState("");
  const onChange = (e) => setInputText(e.target.value);

  return (
    <div className="App-div">
      <h1 className="App-title">React Test</h1>
      <input
        placeholder="일정을 입력하세요"
        type="text"
        value={inputText}
        onChange={onChange}
        className="App-input"
      />
      <button type="button" className="App-button">추가</button>
      <List listValue={inputText} />
    </div>
  );
}

export default App;
