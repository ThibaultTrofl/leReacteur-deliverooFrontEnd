import logoText from "../assets/logo-teal.svg";
import Restaurant from "./Restaurant.jsx";

const Header = ({ data }) => {
  // console.log(data.restaurant);
  return (
    <header>
      <section className="container">
        <div className="header-box">
          <img src={logoText} alt='Logo avec insciption "Deliveroo"' />
        </div>
        <Restaurant data={data.restaurant} />
      </section>
    </header>
  );
};
export default Header;
