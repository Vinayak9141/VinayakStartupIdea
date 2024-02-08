import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline"></p>
      <ul>
        <li>
          <Link to="/ecommercehomepage">ECommerceHomePage</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <Link to="/accountdropdownwithaccount">
            AccountDropdownWithaccount
          </Link>
        </li>
        <li>
          <Link to="/categorydropdown">CategoryDropdown</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">CheckOut</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/error">Error</Link>
        </li>
        <li>
          <Link to="/productdetailspage">ProductDetailspage</Link>
        </li>
        <li>
          <Link to="/servicethree">SERVICEThree</Link>
        </li>
        <li>
          <Link to="/serviceone">SERVICEOne</Link>
        </li>
        <li>
          <Link to="/servicetwo">SERVICETwo</Link>
        </li>
        <li>
          <Link to="/servicefour">SERVICEFour</Link>
        </li>
        <li>
          <Link to="/service">SERVICE</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
