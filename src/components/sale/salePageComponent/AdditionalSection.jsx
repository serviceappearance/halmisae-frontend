import { ReactComponent as RightArrowIcon } from "../../../assets/icons/right-arrow.svg";

export default function AdditionalSection({ icon, address }) {
  return (
    <div style={sectionStyle}>
      <div style={{ display: "flex", gap: "10px" }}>
        {icon}
        <div className="font-additional-section" style={addressStyle}>
          {address}
        </div>
      </div>
      <div style={{ position: "absolute", right: "10px" }}>
        <RightArrowIcon />
      </div>
    </div>
  );
}

const sectionStyle = {
  display: "flex",
  alignItems: "center",
  padding: "9px 13px 9px 9px",
  borderTop: "0.1px solid #EFEFEF",
  borderBottom: "0.1px solid #EFEFEF",
  opacity: "0.5",
  position: "relative",
};

const addressStyle = {
  width: "200px",
  height: "15px",
};
