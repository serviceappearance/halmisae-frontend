import { Link, useLocation } from "react-router-dom";
import { ReactComponent as CheckCircleIcon } from "../../../assets/icons/check-circle.svg";
import BigButton from "../../common/BigButton";
export default function ConfirmPage() {
  const location = useLocation();
  const infoDetailValue = location.state?.infoDetailValue || [];
  return (
    <div
      className="style-page font-body2"
      style={{ display: "grid", placeItems: "center" }}
    >
      <ContentSection infoDetailValue={infoDetailValue} />
      <div style={{ margin: "106px 0 4px 0" }}>
        <Link to="/reservation-number">
          <BigButton width={"297px"} text={"예약 확인하기"} />
        </Link>
      </div>
    </div>
  );
}

const ContentSection = ({ infoDetailValue }) => {
  const sectionStyle = {
    width: "183px",
    margin: "77px 0 0 0",
  };
  const messageStyle = {
    margin: "10px 0 25px 0",
    textAlign: "center",
  };
  return (
    <div style={sectionStyle}>
      <CheckCircleIcon />
      <div style={messageStyle}>예약이 완료되었습니다</div>
      <PaymentDetail infoDetailValue={infoDetailValue} />
    </div>
  );
};

const PaymentDetail = ({ infoDetailValue }) => {
  return (
    <div>
      {infoDetailValue.map((value, _) => (
        <div style={{ width: "183px", marginBottom: "7px" }}>{value}</div>
      ))}
    </div>
  );
};

// const infoDetailValue = ["가게명정보", "2024. 10.08  10:00", "120분", "2명"];
