import "./App.css";
import DropDownMenu from "./Components/DropDownMenu";
import Result from "./Components/Result";
import Header from "./Components/Header";
import Input from "./Components/Input";
import { useState } from "react";

export default function App() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [metric, setMetric] = useState("");

  const handleChangeLength = (e) => {
    setLength(e.target.value);
    console.log("This is the length:", length);
  };

  const handleChangeWidth = (e) => {
    setWidth(e.target.value);
    console.log("This is the width:", width);
  };

  const merticChangeHandler = (e) => {
    setMetric(e.target.value);
    console.log("This is the mertric:", metric);
  };

  return (
    <main>
      <Header />
      <DropDownMenu mertricChangeHandler={merticChangeHandler} />
      <Input length={handleChangeLength} width={handleChangeWidth} />
      <Result length={length} width={width} />
    </main>
  );
}
