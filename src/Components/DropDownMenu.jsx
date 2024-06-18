const DropDownMenu = ({ metric }) => {
  return (
    <>
      <div className="dd-container">
        <select
          onChange={metric}
          className="custom-select"
          name="metric-selection"
          id="metric-selection"
        >
          <option value="select">-- Select Mertic Measurement --</option>
          <option value="feet">Feet</option>
          <option value="meter">Meter</option>
        </select>
      </div>
    </>
  );
};

export default DropDownMenu;
