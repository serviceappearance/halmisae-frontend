import InputSection from "./InputSection";
import BigButton from "../../common/BigButton";
import MenuList from "./MenuList";
import TotalPrice from "../../common/TotalPrice";

export default function ReservationInfoInput() {
  return (
    <div className="style-page">
      <div className="font-menu-list-title" style={menulistTitleStyle}>
        메뉴
        <NoShowFoodToggle toggleEvent={null} />
      </div>
      <InputSection title={"이용시간"} subtitle={subtitles.useTime} />
      <InputSection title={"인원"} subtitle={subtitles.usePeople} />
      <MenuList menuInfo={menuInfo} />
      <TotalPrice totalPrice={"15,000원"} />
      <BigButton width={"287px"} text={"예약하기"} />
    </div>
  );
}

const toggleEvnetFunction = () => {};

const subtitles = {
  useTime: "120분",
  usePeople: "1명",
};

const menuInfo = [
  {
    menuName: "메뉴01",
    price: "10,000원",
  },
  {
    menuName: "메뉴02",
    price: "10,000원",
  },
  {
    menuName: "메뉴03",
    price: "10,000원",
  },
  {
    menuName: "메뉴04",
    price: "10,000원",
  },
];

const NoShowFoodToggle = ({ toggleEvent }) => {
  const toggleStyle = {
    display: "flex",
    width: "51px",
    height: "14px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    background: "#0A625C",
  };
  return <div onClick={toggleEvent}>noShow 상품 보기</div>;
};

const menulistTitleStyle = {
  width: "77px",
  height: "16px",
  padding: "11px 0 11px 4px",
  alignItems: "center",
};
