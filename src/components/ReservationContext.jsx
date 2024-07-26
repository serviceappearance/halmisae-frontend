// ReservationContext.js
import React, { createContext, useState, useContext } from "react";

const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [reservationData, setReservationData] = useState({
    orderNumber: null,
    reservationNumber: null,
  });

  const updateReservationData = (data) => {
    setReservationData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <ReservationContext.Provider
      value={{ reservationData, updateReservationData }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  return useContext(ReservationContext);
}
