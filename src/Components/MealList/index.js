import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./mealList.scss";
import useFetch from "../../CustomHooks/useFetch";
import { addCart } from "./../../Reducers/cartDataReducer";

function MealList() {
  const url =
  `/services/mealsAPI.json`;
  const [data] = useFetch(url);

  const dispatch = useDispatch();
  const { value, count } = useSelector((state) => state.cart);

  const handleSubmit = (e, item, id) => {
    e.preventDefault();

    if (!!e.target.elements.count.value) {
      const countValue = Number(e.target.elements.count.value);
      const copyCartArray = [...value];

      if (count + countValue <= 50) {
        if (copyCartArray.some((el) => el.id === id)) {
          const currentItem = copyCartArray.find((item) => item.id === id);

          if (currentItem.count + countValue <= 5) {
            let mapCartArray = copyCartArray.map((el) =>
              el.id === id ? { ...el, count: el.count + countValue } : el
            );
            dispatch(addCart(mapCartArray));
          } else {
            alert("Needs to add below or equal 5");
          }
        } else {
          const mergeCartArray = [
            ...copyCartArray,
            { ...item, id, count: countValue },
          ];
          dispatch(addCart(mergeCartArray));
        }
      } else {
        alert("Sorry! Upto 50 only you add to cart");
      }
    }
  };
  
  return (
    <div className="mealList">
      <ul>
        {!!data ? (
          data.map((item, index) => (
              <li key={index}>
                <div>
                  <h4>
                    {item.name}
                    <small>{item.description}</small>
                  </h4>
                  <div className="meal-amount">${item.price}</div>
                </div>
                <div>
                  <form onSubmit={(e) => handleSubmit(e, item, index)}>
                    <div className="meal-count">
                      <h4>Amount</h4>
                      <input type="number" name="count" max="5" min="1" />
                    </div>
                    <button type="submit">+ Add</button>
                  </form>
                </div>
              </li>
            ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
}

export default MealList;
