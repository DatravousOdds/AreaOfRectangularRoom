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
    let value = e.target.value;
    setLength(value);
    console.log("This is the length:", value);
  };

  const handleChangeWidth = (e) => {
    let value = e.target.value
    setWidth(value);
    console.log("This is the width:", value);
    
  };

  const metricChangeHandler = (e) => {
    let value = e.target.value;
    setMetric(value);
    // console.log(value);
    
  };

  const validateInput = () => {
    if(metric == "meter")
      console.log("m")
  }

  return (
    <main>
      <Header />
      <DropDownMenu metric={metric} metricChange={metricChangeHandler} />
      <Input handleLengthChange={handleChangeLength} handleWidthChange={handleChangeWidth} />
      <ErrorMessage length={length} width={width} mertic={metric} error={error}/>
      <Result length={length} width={width} />
    </main>
  );
}
