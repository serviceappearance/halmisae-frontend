import { useState } from "react";
import { ReactComponent as ClockIcon } from "../../../assets/icons/clock-small.svg";
import { ReactComponent as MinusIcon } from "../../../assets/icons/amount-minus.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/amount-plus.svg";
import BigButton from "../../common/BigButton";
import TotalPrice from "../../common/TotalPrice";
export default function PaymentInfoModal({ isOpen, toggleModal, price }) {
  const [amount, setAmount] = useState(0);

  const minus = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const plus = () => {
    setAmount(amount + 1);
  };

  const totalPrice = amount * price;
  return (
    <>
      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={toggleModal}
      ></div>
      <div className={`style-modal ${isOpen ? "open slide-in" : ""}`}>
        <StoreToPay storeName={"가게명"} pickUpTime={"20:00 - 20:30"} />
        <AmountSet amount={amount} minus={minus} plus={plus} />
        <TotalPrice label={"주문금액"} totalPrice={totalPrice} />
        <div style={{ display: "grid", placeItems: "center" }}>
          <BigButton width={"297px"} text={"예약 결제"} />
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
    height: "142px",
    padding: "11px 0 11px 0",
    display: "grid",
    placeItems: "center",
    borderTop: "0.1px solid rgba(0, 0, 0, 0.22)",
    borderBottom: "0.1px solid rgba(0, 0, 0, 0.22)",
  };

  return (
    <div style={thisStyle}>
      <div className="font-alert-content">수량 설정</div>
      <AmountSetting amount={amount} minus={minus} plus={plus} />
      <div className="font-alert-detail">
        예약은 할미새의 약관에 동의하는 것으로 간주합니다
      </div>
      <div className="font-alert-detail">서비스 약관</div>
    </div>
  );
};

const AmountSetting = ({ amount, minus, plus }) => {
  const thisStyle = {
    display: "flex",
    width: "131px",
    height: "37px",
    gap: "17px",
    margin: "22px 0 22px 0",
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
