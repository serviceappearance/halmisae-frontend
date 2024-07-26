import { useState } from "react";
import { ReactComponent as ClockIcon } from "../../../assets/icons/clock-small.svg";
import { ReactComponent as MinusIcon } from "../../../assets/icons/amount-minus.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/amount-plus.svg";
import BigButton from "../../common/BigButton";
import TotalPrice from "../../common/TotalPrice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PaymentInfoModal({
  isOpen,
  toggleModal,
  price,
  storeName,
  picking,
  storeNumber,
  foodLimit,
}) {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const minus = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const plus = () => {
    if (amount < foodLimit) {
      setAmount(amount + 1);
    }
  };

  const totalPrice = amount * price;
  const email = "email";
  const handleReservation = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/v1/api/user/main/detail/closingOrder",
        {
          quantity: amount,
          totalPrice: totalPrice,
          email: email,
          storeNumber: storeNumber,
        }
      );
      console.log("예약 결제가 성공적으로 완료되었습니다:", response.data);
      navigate("/bargain-sale/complete");
      const reservationTime = new Date().toISOString();
      const reservationKey = `reservation_${storeName}_${reservationTime}`;
      const reservationData = {
        storeName: storeName,
        orderNumber: response.data.orderNumber,
        reservationNumber: 0,
        reservationTime: reservationTime,
      };
      sessionStorage.setItem(reservationKey, JSON.stringify(reservationData));
    } catch (error) {
      console.error("예약 결제 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <>
      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={toggleModal}
      ></div>
      <div className={`style-modal ${isOpen ? "open slide-in" : ""}`}>
        <StoreToPay storeName={storeName} pickUpTime={picking} />
        <AmountSet amount={amount} minus={minus} plus={plus} />
        <TotalPrice label={"주문금액"} totalPrice={totalPrice} />
        <div style={{ display: "grid", placeItems: "center" }}>
          <BigButton
            width={"297px"}
            text={"예약 결제"}
            onClick={handleReservation}
            // onClick={amount > 0 ? handleReservation : null}
            // disabled={amount === 0}
          />
        </div>
      </div>
    </>
  );
}

const StoreToPay = ({ storeName, pickUpTime }) => {
  const thisStyle = {
    width: "320px",
    padding: "10px 0 6px 0",
    gap: "5px",
    display: "grid",
    placeItems: "center",
  };
  return (
    <div style={thisStyle}>
      <div className="font-alert-content">{storeName}</div>
      <div className="font-alert-detail">
        <ClockIcon />
        &ensp; 픽업 가능 {pickUpTime}
      </div>
    </div>
  );
};

const AmountSet = ({ amount, minus, plus }) => {
  const thisStyle = {
    width: "275px",
    height: "120px",
    padding: "5px 0",
    display: "grid",
    placeItems: "center",
    borderTop: "0.1px solid rgba(0, 0, 0, 0.22)",
    borderBottom: "0.1px solid rgba(0, 0, 0, 0.22)",
  };

  return (
    <div style={thisStyle}>
      <div className="font-alert-content">수량 설정</div>
      <AmountSetting amount={amount} minus={minus} plus={plus} />
      <div className="font-alert-detail">예약 감사합니다.</div>
      {/* <div className="font-alert-detail">
        예약은 할미새의 약관에 동의하는 것으로 간주합니다
      </div> */}
      {/* <div className="font-alert-detail">서비스 약관</div> */}
    </div>
  );
};

const AmountSetting = ({ amount, minus, plus }) => {
  const thisStyle = {
    display: "flex",
    width: "131px",
    height: "37px",
    gap: "17px",
    margin: "5px  0",
    alignItems: "center",
  };

  return (
    <div style={thisStyle}>
      <div onClick={minus}>
        <MinusIcon />
      </div>
      <div className="font-amount">{amount}</div>
      <div onClick={plus}>
        <PlusIcon />
      </div>
    </div>
  );
};
