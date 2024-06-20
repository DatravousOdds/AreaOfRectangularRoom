import "./App.css";
import DropDownMenu from "./Components/DropDownMenu";
import Result from "./Components/Result";
import Header from "./Components/Header";
import Input from "./Components/Input";
import ErrorMessage from "./Components/ErrorMessage";
import { useState, useEffect } from "react";

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
    validateInput(metric)
    
  };

  const validateInput = (length, width) => {
    if(isNaN(length) || isNaN(width)) {
      setError("Please enter numeric values only!")
      console.log(error);
    } else if (length <= 0 || width <= 0) {
      setError("Please enter positive values only!")
      console.log(error);
    } else {
      setError("")
      console.log(error);
    }
  }

  useEffect(() => {
    validateInput(length, width);
  }, [length, width])

  return (
    <main>
      <Header />
      <DropDownMenu metric={metric} metricChange={metricChangeHandler} />
      <Input metric={metric} handleLengthChange={handleChangeLength} handleWidthChange={handleChangeWidth} />
      <ErrorMessage  error={error}/>
      <Result length={length} width={width} />
    </main>
  );
}
