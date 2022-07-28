import { Link } from "react-router-dom";
import homeBKG from "../images/home-bkg.jpg";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
  fontWeight: 900,
};

const Home = () => {
  return (
    <>
      <div className="shop">
        <img src={homeBKG} alt="kitchen" />
        <div className="welcome">
          <p>
            <em>
              "Business has been thriving since the 80's, but the greatest
              success started with family" - Nunzio
            </em>
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
