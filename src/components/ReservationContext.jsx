import React, { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [menuInfo, setMenuInfo] = useState([]);
  const [usageTime, setUsageTime] = useState(0);
  const [usePeople, setUsePeople] = useState(1);

  return (
    <ReservationContext.Provider
      value={{
        menuInfo,
        setMenuInfo,
        usageTime,
        setUsageTime,
        usePeople,
        setUsePeople,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => useContext(ReservationContext);
