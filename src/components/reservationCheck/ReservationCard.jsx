import MiniNotificationIcon from "../common/MiniNotificationIcon";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock-mini.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user-mini.svg";
import { ReactComponent as DollarIcon } from "../../assets/icons/dollar.svg";
import MiniButton from "../common/MiniButton";
import { Link } from "react-router-dom";
import { createContext, useContext } from "react";

export default function ReservationCard({ imgSrc, info, onCancel }) {
  const cardStyle = {
    width: "320px",
    height: "78px",
    borderBottom: "0.1px solid black",
    display: "grid",
    gridTemplateColumns: "67px 253px",
    position: "relative",
  };
  return (
    <div style={cardStyle}>
      <ImageSection imgSrc={null} />
      <InfoSection info={info} onCancel={onCancel} />
    </div>
  );
}

const ImageSection = ({ imgSrc }) => {
  return (
    <div style={{ padding: "8px 13px 29px 13px" }}>
      <div
        style={{ width: "41px", height: "41px", border: "1px solid black" }}
      ></div>
    </div>
  );
};

const InfoSection = ({ info, onCancel }) => {
  const sectionStyle = {
    display: "grid",
    gridTemplateRows: "53px 25px",
  };
  return (
    <div style={sectionStyle}>
      <StoreInfoSection
        category={info.category}
        storeName={info.storeName}
        dateOrTime={info.dateOrTime}
        buttonText={info.buttonText}
        onCancel={onCancel}
      />
      <SimpleInfoSection simpleInfo={info.simpleInfo} />
    </div>
  );
};

const StoreInfoSection = ({
  category,
  storeName,
  dateOrTime,
  buttonText,
  onCancel,
}) => {
  return (
    <div style={{ position: "relative" }}>
      <MiniButton text={buttonText} onCancel={onCancel} />
      <MiniNotificationIcon text={category} />
      <div
        className="font-body2"
        style={{
          margin: "24px 0 0 5px",
        }}
      >
        {storeName}
      </div>
      <div className="font-caption" style={{ margin: "3px 0 0 5px" }}>
        {dateOrTime}
      </div>
    </div>
  );
};

const SimpleInfoSection = ({ simpleInfo }) => {
  const sectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  };
  return (
    <div style={sectionStyle}>
      {simpleInfoIcons.map((icon, index) => (
        <SimpleInfoBlock
          key={index}
          icon={icon}
          value={simpleInfo[index]}
          suffix={simpleInfoSuffix[index]}
        />
      ))}
    </div>
  );
};

const SimpleInfoBlock = ({ icon, value, suffix }) => {
  const blockStyle = {
    display: "flex",
    width: "55px",
    height: "10px",
    alignItems: "center",
    gap: "6px",
  };
  return (
    <div style={blockStyle} className="font-caption">
      <div>{icon}</div>
      <div>
        {value} {suffix}
      </div>
    </div>
  );
};

const simpleInfoIcons = [<ClockIcon />, <UserIcon />, <DollarIcon />];
const simpleInfoSuffix = ["분", "명", "원"];
