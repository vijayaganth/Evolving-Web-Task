import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";

import { orderValidation } from "./Validation";
import { useCommonContext } from "../../CustomHooks/CommonProvider";
import { resetCart } from "../../Reducers/cartDataReducer";

function OrderForm() {
  const { setCartModal, setMakeOrder, setSuccessModal } = useCommonContext();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    street: "",
    postalCode: "",
    city: "",
  };
  const handleSubmit = (formValue) => {
    console.log(formValue);
    // trigger POST API with AXIOS config
    setCartModal(false);
    setMakeOrder(false);
    setSuccessModal(true);
    dispatch(resetCart())
  };
  const handleCancel = () => {
    setCartModal(false);
    setMakeOrder(false);
  };
  return (
    <div className="orderForm">
      <Formik
        initialValues={initialValues}
        validationSchema={orderValidation}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-control">
              <label>Name</label>
              <Field type="text" name="name" className="form-control-text" />
              <p className="form-control-error">
                {errors.name && touched.name && errors.name}
              </p>
            </div>
            <div className="form-control">
              <label>Street</label>
              <Field type="text" name="street" className="form-control-text" />
              <p className="form-control-error">
                {errors.street && touched.street && errors.street}
              </p>
            </div>
            <div className="form-control">
              <label>Postal code</label>
              <Field
                type="text"
                name="postalCode"
                className="form-control-text"
              />
              <p className="form-control-error">
                {errors.postalCode && touched.postalCode && errors.postalCode}
              </p>
            </div>
            <div className="form-control">
              <label>City</label>
              <Field type="text" name="city" className="form-control-text" />
              <p className="form-control-error">
                {errors.city && touched.city && errors.city}
              </p>
            </div>
            <div className="form-control-buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default OrderForm;
