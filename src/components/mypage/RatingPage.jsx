import BigButton from "../common/BigButton";
import PageHeader from "../common/PageHeader";
import { ReactComponent as StarIcon } from "../../assets/icons/star-rating.svg";
import { useState } from "react";

export default function RatingPage() {
  const ratingSectionStyle = {
    display: "flex",
    height: "527px",
    justifyContent: "center",
  };
  const buttonSectionStyle = {
    display: "flex",
    width: "320px",
    justifyContent: "center",
    position: "absolute",
    bottom: "12px",
  };
  return (
    <div className="style-page">
      <PageHeader text={"storeName"} />
      <div style={ratingSectionStyle}>
        <RatingStarSection />
        <div style={buttonSectionStyle}>
          <BigButton width={"297px"} text={"별점 주기"} />
        </div>
      </div>
    </div>
  );
}

const RatingStarSection = () => {
  const sectionStyle = {
    display: "flex",
    height: "48px",
    gap: "11px",
    margin: "217px 0 0 0",
  };
  return (
    <div style={sectionStyle}>
      {Array.from({ length: 5 }).map((_, index) => (
        <RatingStar key={index} isFilled={null} />
      ))}
    </div>
  );
};

const RatingStar = ({ isFilled }) => {
  const [bgColor, setBgcolor] = useState("white");
  const handleMouseOver = () => {
    setBgcolor("black");
  };
  const handleMouseLeave = () => {
    setBgcolor("white");
  };
  return (
    <div
      style={{ backgroundColor: bgColor }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <StarIcon />
    </div>
  );
};
