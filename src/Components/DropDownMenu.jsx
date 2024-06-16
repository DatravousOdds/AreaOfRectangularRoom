const DropDownMenu = () => {
  return (
    <>
      <div className="">
        <select name="metric-selection" id="metric-selection">
          <option value="feet">Feet</option>
          <option value="meter">Meter</option>
        </select>
      </div>
    </>
  );
};


export default DropDownMenu;