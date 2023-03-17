import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cartItems.scss";
import { incrementItem, decrementItem } from "./../../Reducers/cartDataReducer";
import { useCommonContext } from "../../CustomHooks/CommonProvider";

function CartItems() {
  const { value, total } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const { setCartModal, makeOrder, setMakeOrder } = useCommonContext();

  const handleAdd = (item) => dispatch(incrementItem(item, value));
  const handleMinus = (item) => dispatch(decrementItem(item, value));

  const handleOrder = () => setMakeOrder(true);
  const handleCancel = () => setCartModal(false);

  return (
    <div className="mealList cart-items">
      <ul>
        {value.map((item, index) => (
          <li key={index}>
            <div>
              <h4>{item.name}</h4>
              <div className="cart-items-amount">
                <div className="meal-amount">${item.price}</div>
                <div className="item-count">X {item.count || 0}</div>
              </div>
            </div>
            <div className="cart-items-buttons">
              <button
                onClick={() => handleMinus(item)}
                disabled={item?.count === 0}
              >
                -
              </button>
              <button
                onClick={() => handleAdd(item)}
                disabled={item?.count === 5}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h2>
        <span>Total Amount</span>
        <span>${total || 0}</span>
      </h2>
      {!makeOrder && (
        <div className="cart-items-order">
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleOrder}>Order</button>
        </div>
      )}
    </div>
  );
}

export default CartItems;
