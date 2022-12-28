const Nav_filter = () => {
  const optionsName = [
    "All Jackets",
    "2016",
    "Jackets",
    "Jackets",
    "Layers",
    "Obermeyer",
    "Roxy",
    "Womens",
  ];
  const options = optionsName.map((option) => (
    <option value="/">{option}</option>
  ));
  return (
    <div className="collection-sort">
      <label>Filter by:</label>
      <select>{options}</select>
    </div>
  );
};
export default Nav_filter;
