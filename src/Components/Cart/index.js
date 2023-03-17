import React from "react";
import { useCommonContext } from "../../CustomHooks/CommonProvider";
import ModalCustom from "../Common/Modal";
import CartItems from "./CartItems";
import OrderForm from "./OrderForm";

function Cart() {
  const {
    cartModal,
    setCartModal,
    makeOrder,
    successModal,
    setSuccessModal,
  } = useCommonContext();

  const handleClose = () => {
    setCartModal(false);
    setSuccessModal(false);
  };

  return (
    <>
      {!!cartModal && (
        <ModalCustom modalStatus={cartModal} onCloseModal={handleClose}>
          <CartItems />
          {!!makeOrder && <OrderForm />}
        </ModalCustom>
      )}
      {!!successModal && (
        <ModalCustom modalStatus={successModal} onCloseModal={handleClose}>
          <div className="cart-items modal-success">
            <p>Successfully sent the order!</p>
            <div className="modal-success-button">
              <button onClick={handleClose}>Okay</button>
            </div>
          </div>
        </ModalCustom>
      )}
    </>
  );
}

export default Cart;
