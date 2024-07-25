import React from "react";
// import ReactDOM from "react-dom/client";
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
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const App = () => {
  const location = useLocation();

  return (
    <div className="style-page">
      <TransitionGroup>
        <CSSTransition key={location.pathname} timeout={300} classNames="slide">
          <div className="page">
            <Routes location={location}>
              <Route path="/" element={<MainPage />} />
              <Route path="/reservation" element={<ReservationCheckPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/store/:storeId" element={<SalePage />} />
              <Route path="/reserve" element={<ReservationInputPage />} />
              <Route path="/reserve/show" element={<InvoicePage />} />
              <Route
                path="/bargain-sale/complete"
                element={<SaleConfirmPage />}
              />
              <Route path="/noshow-sale/complete" element={<ConfirmPage />} />
              <Route path="/bookmarks" element={<BookmarkListPage />} />
              <Route path="/history" element={<UserHistoryPage />} />
              <Route path="/rating" element={<RatingPage />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
