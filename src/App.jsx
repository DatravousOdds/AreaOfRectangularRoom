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
  const [error, setError] = useState("");
  const [sqFt, setSqFt] = useState("0");
  const [sqM, setSqM] = useState("0");

  const handleChangeLength = (e) => {
    let value = e.target.value;
    setLength(value);
    console.log("This is the length:", value);
  };

  const handleChangeWidth = (e) => {
    let value = e.target.value;
    setWidth(value);
    console.log("This is the width:", value);
  };

  const metricChangeHandler = (e) => {
    let value = e.target.value;
    setMetric(value);
    
  };

  const validateInput = (length, width) => {
    if (isNaN(length) || isNaN(width)) {
      setError("Please enter numeric values only!");
      console.log(error);
    } else if (parseFloat(length) < 0 || parseFloat(width) < 0) {
      setError("Please enter positive values only!");
      console.log(error);
    } else {
      setError("");
      calculateArea(length, width)
    }
  };

  const calculateArea = (length, width) => {
    
    if (!isNaN(length) && !isNaN(width)) {
      const sqFtArea = length * width;
      const sqMArea = sqFtArea * 0.09290304;
      setSqFt(sqFtArea.toFixed(2));
      setSqM(sqMArea.toFixed(2));
    }
  };

  useEffect(() => {
    validateInput(length, width);
  }, [length, width]);

  return (
    <main>
      <Header />
      <DropDownMenu metric={metric} metricChange={metricChangeHandler} />
      <Input
        metric={metric}
        handleLengthChange={handleChangeLength}
        handleWidthChange={handleChangeWidth}
      />
      <ErrorMessage error={error} />
      <Result
        sqFt={sqFt}
        sqM={sqM}
        metric={metric}
        length={length}
        width={width}
      />
    </main>
  );
}
