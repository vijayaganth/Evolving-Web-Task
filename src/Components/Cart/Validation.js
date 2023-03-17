import * as Yup from "yup";

const orderValidation = Yup.object({
  name: Yup.string().required("Name is required").nullable(),
  street: Yup.string().required("Street is required").nullable(),
  postalCode: Yup.string()
    .max(5, "Postal code must be upto 5 characters")
    .required("Postal code is required"),
  city: Yup.string().required("City is required").nullable(),
});

export { orderValidation };
