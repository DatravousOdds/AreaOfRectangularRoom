const Input = ({ handleChangeWidth, handleLengthChange }) => {
  return (
    <>
      <div className="input" id="inputContainer">
        <div className="">
          <p>What is the length of the room in feet?</p>
          <input
            type="text"
            id="input"
            onChange={handleLengthChange}
            placeholder="Enter your text here..."
          />
        </div>

        <div>
          <p>What is the width of the room in feet?</p>
          <input
            type="text"
            id="input"
            onChange={handleChangeWidth}
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
  }
};

export default Input;
