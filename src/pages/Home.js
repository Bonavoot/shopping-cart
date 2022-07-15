import logo from "../images/NunzioLogo.jpg";
import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

const Home = () => {
  return (
    <>
      <div className="shop">
        <img src={logo} alt="logo" />
        <button className="shop-btn">
          <Link to="/shop" style={linkStyle}>
            ENTER SHOP
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
