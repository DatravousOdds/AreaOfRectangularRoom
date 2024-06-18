const ErrorMessage = ({ message, width, length, metric }) => {
  const validate = () => {
    console.log(width)
    consolel.log(length)
    console.log(metric)
    // let choice = prompt(
    //   "Please choose meters or feets? (m = meters, f = feet): ",
    // ).toLowerCase();
    // if (choice.length > 1) {
    //   alert("Please enter only one character");
    // } else if (!isNaN(choice)) {
    //   alert("Please only enter numerice values");
    // } else if (choice !== "m" || choice !== "f") {
    //   alert("Please m of f only!");
  }
  return (
    
    
    <>
      
      <div className="alert alert-warning">
        <h1>{message}</h1>
      </div>
    </>
  )
}

export default ErrorMessage;