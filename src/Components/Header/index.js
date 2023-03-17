import React from "react";
import { useSelector } from "react-redux";
import { useCommonContext } from "../../CustomHooks/CommonProvider";

import "./header.scss";

function Header() {
  const { count } = useSelector((state) => state.cart);
  const { setCartModal } = useCommonContext();

  return (
    <header>
      <h1>React Meals</h1>
      <div
        className="cart"
        onClick={() =>
          !!count ? setCartModal(true) : alert("Your cart is empty")
        }
      >
        <img src="./images/cart-icon.png" alt="cart" className="cart-icon" />
        <div className="cart-text">Your cart</div>
        <div className="cart-count">{count || 0}</div>
      </div>
    </header>
  );
}

export default Header;
