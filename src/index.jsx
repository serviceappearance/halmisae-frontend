import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./components/main/MainPage";
import MyPage from "./components/mypage/Mypage";
import ReservationCheckPage from "./components/reservationCheck/ReservationCheckPage";
import SalePage from "./components/sale/SalePage";
import ReservationInputPage from "./components/sale/NoshowSale/ReservationInputPage";
import InvoicePage from "./components/sale/NoshowSale/InvoicePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/reservation" element={<ReservationCheckPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/store" element={<SalePage />}></Route>
        <Route path="/reserve" element={<ReservationInputPage />}></Route>
        <Route path="/reserve/show" element={<InvoicePage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
