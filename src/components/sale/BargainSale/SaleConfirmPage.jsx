import { ReactComponent as BagIcon } from "../../../assets/icons/shopping-bag-big.svg";
import { Link } from "react-router-dom";
import BigButton from "../../common/BigButton";
export default function SaleConfirmPage() {
  return (
    <div
      className="style-page"
      style={{ display: "grid", gridTemplateRows: "461px 107px" }}
    >
      <div>
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

      <Link
        to="/"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BigButton width={"297px"} text={"메인페이지로"} />
      </Link>
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
