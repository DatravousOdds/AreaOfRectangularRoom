const Input = ({ length, width }) => {
  return (
    <>
      <div className="input" id="inputContainer">
        <div>
          <p>What is the length of the room in feet?</p>
          <input
            type="text"
            id="input"
            onChange={length}
            placehlder="Enter your text here..."
          />
        </div>

        <div>
          <p>What is the width of the room in feet?</p>
          <input
            type="text"
            id="input"
            onChange={width}
            placeholder="Enter your text here..."
          />
        </div>
      </div>
    </>
  );
};

export default Input;
