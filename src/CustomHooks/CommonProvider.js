import React, { useState, createContext, useContext, useMemo } from "react";

export const CommonContext = createContext();

export default function CommonProvider({ children }) {
  const [cartModal, setCartModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [makeOrder, setMakeOrder] = useState(false);

  const value = useMemo(() => {
    return {
      cartModal,
      setCartModal,
      makeOrder,
      setMakeOrder,
      successModal,
      setSuccessModal,
    };
  }, [
    cartModal,
    setCartModal,
    makeOrder,
    setMakeOrder,
    successModal,
    setSuccessModal,
  ]);

  return (
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
  );
}

export function useCommonContext() {
  const context = useContext(CommonContext);
  if (context === undefined) {
    throw new Error("useCommonContext must be used within a CommonProvider");
  }
  return context;
}
