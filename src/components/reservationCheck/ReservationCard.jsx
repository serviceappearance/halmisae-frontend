import NotificationIcon from "../common/NotificationIcon";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock-small.svg";

export default function ReservationCard() {
  const cardStyle = {
    width: "320px",
    height: "78px",
    borderBottom: "0.1px solid black",
    display: "grid",
    gridTemplateColumns: "67px 253px",
  };
  return (
    <div style={cardStyle}>
      <ImageSection />
      <InfoSection />
    </div>
  );
}

const ImageSection = () => {
  return (
    <div style={{ padding: "8px 13px 29px 13px" }}>
      <div
        style={{ width: "41px", height: "41px", border: "1px solid black" }}
      ></div>
    </div>
  );
};

const InfoSection = () => {
  const sectionStyle = {
    display: "grid",
    gridTemplateRows: "53px 25px",
  };
  return (
    <div style={sectionStyle}>
      <StoreInfoSection />
      <SimpleInfoSection />
    </div>
  );
};

const StoreInfoSection = ({ category, storeName, dateOrTime }) => {
  return (
    <div>
      <NotificationIcon text={category} />
      <div>{storeName}</div>
      <div>{dateOrTime}</div>
    </div>
  );
};

const SimpleInfoSection = () => {
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const SimpleInfoBlock = ({ icon, value }) => {
  return (
    <div>
      <div>{icon}</div>
      <div>{value}</div>
    </div>
  );
};

const simpleInfoIcons = [];
const simpleInfo = [];
