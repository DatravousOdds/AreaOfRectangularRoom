const Input = ({ handleWidthChange, handleLengthChange, metric }) => {
  return (
    <>
      <div className="input" id="inputContainer">
        <div className="">
          <p>
            {metric == "meter"
              ? "What is the length of the room in meters?"
              : "What is the length of the room in feet?"}
          </p>
          <input
            type="text"
            id="input"
            onChange={handleLengthChange}
            placeholder="Enter your text here..."
          />
        </div>

        <div>
          <p>
            {metric == "meter"
              ? "What is the width of the room in meters?"
              : "What is the width of the room in feet?"}
          </p>
          <input
            type="text"
            id="input"
            onChange={handleWidthChange}
            placeholder="Enter your text here..."
          />
        </div>
      </div>
    </>
  );

  // PropTypes for Input component
  Input.propType = {
    handleChangeLength: PropTypes.func.isRequired,
    handleChangeWidth: PropTypes.func.isRequired,
  };
};

export default Input;
