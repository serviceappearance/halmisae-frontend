import InputSection from "./InputSection";
import BigButton from "../../common/BigButton";
import MenuList from "./MenuList";
import TotalPrice from "../../common/TotalPrice";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ReservationInfoInput({ storeId }) {
  const [menuInfo, setMenuInfo] = useState([]);
  const [usageTime, setUsageTime] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/v1/api/user/main/detail/reservation?storeNumber=${storeId}`
      )
      .then((response) => {
        const data = response.data;
        setMenuInfo(
          data.menu.map((item) => ({
            menuName: item.menuName,
            price: item.price,
            count: 0,
          }))
        );
        setUsageTime(data.usageTime);
      })
      .catch((error) => {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      });
  }, []);

  const handleCountChange = (index, count) => {
    setMenuInfo((prevMenuInfo) =>
      prevMenuInfo.map((menu, i) => (i === index ? { ...menu, count } : menu))
    );
  };
  const CountChangeNull = () => {
    console.log("no count change");
  };

  const handleReservation = () => {
    const reservationData = {
      menuInfo,
      usageTime,
    };
    navigate(`/reserve/show?storeId=${storeId}`, { state: reservationData });
  };

  return (
    <div className="style-page">
      <MenuTitleSection />
      <InputSection
        title={"이용시간"}
        subtitle={subtitles.useTime}
        point={10}
        onCountChange={CountChangeNull}
        value={usageTime}
      />
      <InputSection
        title={"인원"}
        subtitle={subtitles.usePeople}
        point={1}
        onCountChange={CountChangeNull}
      />
      <MenuList
        menuInfo={menuInfo}
        point={1}
        onCountChange={handleCountChange}
      />
      <div style={{ margin: "0 16px" }}>
        <div onClick={handleReservation}>
          <BigButton width={"287px"} text={"예약하기"} onClick={null} />
        </div>
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
