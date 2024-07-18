import { ReactComponent as CheckCircleIcon } from "../../../assets/icons/check-circle.svg";
import BigButton from "../../common/BigButton";
export default function ConfirmPage() {
  return (
    <div
      className="style-page font-body2"
      style={{ display: "grid", placeItems: "center" }}
    >
      <ContentSection />
      <div style={{ margin: "106px 0 4px 0" }}>
        <BigButton width={"297px"} text={"메인페이지로"} />
      </div>
    </div>
  );
}

const ContentSection = () => {
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
      <PaymentDetail />
    </div>
  );
};

const PaymentDetail = () => {
  return (
    <div>
      {infoDetailValue.map((value, _) => (
        <div style={{ width: "183px", marginBottom: "7px" }}>{value}</div>
      ))}
    </div>
  );
};

const infoDetailValue = ["가게명정보", "2024. 10.08  10:00", "120분", "2명"];
