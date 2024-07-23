import InputSection from "./InputSection";
import BigButton from "../../common/BigButton";
import MenuList from "./MenuList";
import TotalPrice from "../../common/TotalPrice";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ReservationInfoInput() {
  const [menuInfo, setMenuInfo] = useState([
    { menuName: "메뉴01", price: 10000, count: 0 },
    { menuName: "메뉴02", price: 10000, count: 0 },
    { menuName: "메뉴03", price: 10000, count: 0 },
    { menuName: "메뉴04", price: 10000, count: 0 },
  ]);
  const handleCountChange = (index, count) => {
    setMenuInfo((prevMenuInfo) =>
      prevMenuInfo.map((menu, i) => (i === index ? { ...menu, count } : menu))
    );
  };
  return (
    <div className="style-page">
      <MenuTitleSection />
      <InputSection
        title={"이용시간"}
        subtitle={subtitles.useTime}
        point={10}
      />
      <InputSection title={"인원"} subtitle={subtitles.usePeople} point={1} />
      <MenuList
        menuInfo={menuInfo}
        point={1}
        onCountChange={handleCountChange}
      />
      <div style={{ margin: "0 16px" }}>
        <Link to="/reserve/show">
          <BigButton width={"287px"} text={"예약하기"} onClick={null} />
        </Link>
      </div>
    </div>
  );
}

const toggleEvnet = () => {
  console.log("show no show menu");
};

const subtitles = {
  useTime: "120분",
  usePeople: "1명",
};

const MenuTitleSection = () => {
  return (
    <div style={titleSectionStyle}>
      <div className="font-menu-list-title" style={menuTitleStyle}>
        메뉴
      </div>
    </div>
  );
};

const NoShowFoodToggle = ({ toggleHandler }) => {
  const toggleStyle = {
    display: "flex",
    width: "51px",
    height: "14px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    background: "#0A625C",
  };
  return (
    <div className="font-toggle" style={toggleStyle} onClick={toggleHandler}>
      noShow 상품 보기
    </div>
  );
};

const titleSectionStyle = {
  display: "flex",
  width: "287px",
  height: "38px",
  padding: "0 0 0 4px",
  margin: "0 16px",
  alignItems: "center",
  gap: "5px",
};

const menuTitleStyle = {
  width: "25px",
  height: "16px",
};
