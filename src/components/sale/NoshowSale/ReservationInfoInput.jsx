import InputSection from "./InputSection";
import BigButton from "../../common/BigButton";
import MenuList from "./MenuList";
import TotalPrice from "../../common/TotalPrice";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../common/PageHeader";

export default function ReservationInfoInput({
  storeId,
  storeName,
  selectedDate,
}) {
  const [menuInfo, setMenuInfo] = useState([]);
  const [usageTime, setUsageTime] = useState(0);
  const [usePeople, setUsePeople] = useState(1);
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
            menuNumber: item.menuNumber,
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

  const handleUsageTimeChange = (time) => {
    setUsageTime(time);
  };

  const handlePeopleChange = (people) => {
    setUsePeople(people);
  };

  const handleReservation = () => {
    const reservationData = {
      menuInfo,
      usageTime,
      usePeople,
      storeName,
      selectedDate,
    };
    navigate(`/reserve/show?storeId=${storeId}`, { state: reservationData });
  };

  return (
    <div className="style-page-scrolled">
      <MenuTitleSection />
      <InputSection
        title={"이용시간"}
        subtitle={subtitles.useTime}
        point={10}
        onCountChange={handleUsageTimeChange}
        value={usageTime}
      />
      <InputSection
        title={"인원"}
        subtitle={subtitles.usePeople}
        point={1}
        onCountChange={handlePeopleChange}
      />
      <MenuList
        menuInfo={menuInfo}
        point={1}
        onCountChange={handleCountChange}
      />
      <div style={{ margin: "0 16px", position: "absolute", bottom: "20px" }}>
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
    <div style={{ borderTop: "1px solid black" }}>
      <PageHeader text={"이용정보 입력"} />
    </div>
    // <div style={titleSectionStyle}>
    //   <div className="font-menu-list-title" style={menuTitleStyle}>
    //     메뉴
    //   </div>
    // </div>
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
