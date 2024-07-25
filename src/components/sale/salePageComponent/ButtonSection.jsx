import { Link, useNavigate } from "react-router-dom";
import BigButton from "../../common/BigButton";

export default function ButtonSection({ toggleModal, storeId, storeName }) {
  const navigate = useNavigate();
  const handleReservationClick = () => {
    navigate(`/reserve`, { state: { storeId, storeName } });
  };

  return (
    <div style={buttonSectionStyle}>
      <BigButton
        width={bargainSaleButtonProps.width}
        text={bargainSaleButtonProps.text}
        onClick={toggleModal}
      />
      <BigButton
        width={reservationButtonProps.width}
        text={reservationButtonProps.text}
        onClick={handleReservationClick}
      />
    </div>
  );
}

const bargainSaleButtonProps = {
  width: "140px",
  text: "마감할인 구매",
};

const reservationButtonProps = {
  width: "140px",
  text: "가게예약",
};

const buttonSectionStyle = {
  display: "flex",
  width: "320px",
  height: "88px",
  justifyContent: "center",
  alignItems: "center",
  gap: "9px",
};
