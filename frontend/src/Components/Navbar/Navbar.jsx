import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { far, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, far, faHeart, faCartShopping);

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  return (
    <nav className={sticky ? "blacknav" : ""}>
      <h1>Artificial Elegance Flowers</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          {localStorage.getItem("auth-token") ? (
            <button
              className="auth-btn"
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          ) : (
            <Link className="auth-btn" to="/login">
              Login
            </Link>
          )}
        </li>
        <li style={{ color: "#b41f77" }}>|</li>
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
