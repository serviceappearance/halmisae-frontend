import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./components/main/MainPage";
import MyPage from "./components/mypage/Mypage";
import ReservationCheckPage from "./components/reservationCheck/ReservationCheckPage";
import ConfirmPage from "./components/sale/NoshowSale/ConfirmPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MainPage /> */}
    <ReservationCheckPage />
    {/* <MyPage /> */}
  </React.StrictMode>
);
