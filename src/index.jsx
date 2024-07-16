import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./components/main/MainPage";
import MyPage from "./components/mypage/Mypage";
import ReservationCheckPage from "./components/reservationCheck/ReservationCheckPage";
import PaymentInfoModal from "./components/sale/BargainSale/PaymentInfoModal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MainPage />
    <ReservationCheckPage />
    <MyPage /> */}
    <PaymentInfoModal />
  </React.StrictMode>
);
