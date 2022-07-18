import { Link } from "react-router-dom";
import homeBKG from "../images/home-bkg.jpg";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

const Home = () => {
  return (
    <>
      <div className="shop">
        <img src={homeBKG} alt="kitchen" />
        <div className="welcome">
          <p>
            IN BUSINESS FOR OVER <em>30 YEARS</em> THE NUNZIO & SONS FAMILY
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
