import React from "react";
import image from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />

        <button>Cart </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="The main meadls pic" />
      </div>
    </React.Fragment>
  );
};

export default Header;
