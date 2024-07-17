import { ReactComponent as BagIcon } from "../../../assets/icons/shopping-bag-big.svg";
export default function SaleConfirmPage() {
  return (
    <div className="style-page">
      <div style={iconStyle}>
        <BagIcon />
      </div>
      <div style={titleStyle} className="font-sale-confirm-title">
        감사합니다!
      </div>
      <div className="font-sale-confirm-content">
        방금 여러분은
        <br />
        식사의 낭비를 줄였습니다
      </div>
    </div>
  );
}

const iconStyle = {
  display: "grid",
  placeItems: "center",
  margin: "102px 53px 38px 53px",
};

const titleStyle = {
  margin: "0 0 14px 0",
};
