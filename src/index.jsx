import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./components/main/MainPage";
import MyPage from "./components/mypage/Mypage";
import ReservationCheckPage from "./components/reservationCheck/ReservationCheckPage";
import SalePage from "./components/sale/SalePage";
import ReservationInputPage from "./components/sale/NoshowSale/ReservationInputPage";
import InvoicePage from "./components/sale/NoshowSale/InvoicePage";
import SaleConfirmPage from "./components/sale/BargainSale/SaleConfirmPage";
import ConfirmPage from "./components/sale/NoshowSale/ConfirmPage";
import BookmarkListPage from "./components/mypage/BookmarkListPage";
import UserHistoryPage from "./components/mypage/UserHistoryPage";
import RatingPage from "./components/mypage/RatingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/reservation" element={<ReservationCheckPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/store/:storeId" element={<SalePage />}></Route>
        <Route path="/reserve" element={<ReservationInputPage />}></Route>
        <Route path="/reserve/show" element={<InvoicePage />}></Route>
        <Route
          path="/bargain-sale/complete"
          element={<SaleConfirmPage />}
        ></Route>
        <Route path="/noshow-sale/complete" element={<ConfirmPage />}></Route>
        <Route path="/bookmarks" element={<BookmarkListPage />}></Route>
        <Route path="/history" element={<UserHistoryPage />}></Route>
        <Route path="/rating" element={<RatingPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
