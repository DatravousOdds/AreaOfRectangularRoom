const Result = ({length, width}) => {
  return (
  <>
    <div className="result" id="resultContainer">
      <p>You entered dimensions of {length} feet by {width} feet.</p>
      <p>The area is {length && width ? length * width : "0"} square feet</p>
      <p></p>
      
    </div>
  </>
    
  )
}

export default Result;