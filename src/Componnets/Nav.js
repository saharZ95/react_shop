import "./Nav.css";
import Nav_sort from "./Nav_sort";
import Nav_filter from "./Nav_filter";
const Nav = () => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort"></div>
      <Nav_filter />
      <Nav_sort />
    </nav>
  );
};
export default Nav;
