import BigButton from "../common/BigButton";

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

export default function ButtonSection() {
  return (
    <div style={buttonSectionStyle}>
      <BigButton widthText={bargainSaleButtonProps} />
      <BigButton widthText={reservationButtonProps} />
    </div>
  );
}
