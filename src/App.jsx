import "./App.css";
import DropDownMenu from "./Components/DropDownMenu";
import Result from "./Components/Result";
import Header from "./Components/Header";
import Input from "./Components/Input";
import ErrorMessage from "./Components/ErrorMessage";
import { useState } from "react";

export default function App() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [metric, setMetric] = useState("");
  const [error, setError] = useState("")

  const handleChangeLength = (e) => {
    setLength(e.target.value);
    console.log("This is the length:", length);
  };

  const handleChangeWidth = (e) => {
    setWidth(e.target.value);
    console.log("This is the width:", width);
    console.log("Length of width:", width.length)
  };

  const merticChangeHandler = (e) => {
    setMetric(e.target.value);
    if(e.target.value == "feet"){
      console.log(e.target.value)
    } else if (e.target.value == "meter") {
      console.log(e.target.value)
    }
  };

  

  return (
    <main>
      <Header />
      <DropDownMenu metric={merticChangeHandler} />
      <Input length={handleChangeLength} width={handleChangeWidth} />
      <ErrorMessage length={length} width={width} mertic={metric} error={error}/>
      <Result length={length} width={width} />
    </main>
  );
}
