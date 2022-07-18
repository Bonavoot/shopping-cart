import { Link } from "react-router-dom";
import homeBKG from "../images/home-bkg.jpg";
import cartLogo from "../images/cart.png";
import logo from "../images/full-logo.png";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

const Home = () => {
  return (
    <>
      <div className="shop">
        <header>
          <img src={logo} alt="logo" />
          <nav>
            <a href="/shop">SHOP</a>
            <a href="/aboutus">ABOUT US</a>
            <a href="/contact">CONTACT</a>
            <img src={cartLogo} alt="cart" />
          </nav>
        </header>
        <img src={homeBKG} alt="kitchen" />
        <div className="welcome">
          <p>
            IN BUSINESS FOR OVER <span>30 YEARS</span> THE NUNZIO & SONS FAMILY
            WELCOMES ALL NEW AND FAMILIAR FACES TO VIEW OUR IMPRESSIVE VARIETY
            OF GRANITE AND MARBLE TO MAKE YOUR HOME SPECTACULAR{" "}
          </p>
          <button className="shop-btn">
            <Link to="/shop" style={linkStyle}>
              ENTER SHOP
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
