const Result = ({ length, width, metric, sqFt, sqM}) => {
  console.log("current l:",length);
  console.log("current w:", width);
  return (
  <>
    <div className="result" id="resultContainer">
      <p>You entered dimensions of {length} feet by {width} feet.</p>
      <p>{metric == "feet" ? "The area is " + sqFt + " square feet." : "The area is " + sqM + " square meters."}</p>
      <p></p>
      
    </div>
  </>
    
  )
}

export default Result;