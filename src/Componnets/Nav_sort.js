const Nav_sort = () => {
  const sortNames = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, new to old",
    "Date, old to new",
  ];
  const sorts = sortNames.map((sort) => <option value="/">{sort}</option>);

  return (
    <div className="collection-sort">
      <label>sort by:</label>
      <select>{sorts}</select>
    </div>
  );
};
export default Nav_sort;
