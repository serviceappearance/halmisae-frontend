// import TotalPrice from "../../common/TotalPrice";
import InputSection from "./InputSection";
import BigButton from "../../common/BigButton";
import MenuList from "./MenuList";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../common/PageHeader";

export default function ReservationInfoInput({
  storeId,
  storeName,
  selectedDate,
  selectedTime,
}) {
  const [menuInfo, setMenuInfo] = useState([]);
  const [usePeople, setUsePeople] = useState(1);
  const [useTime, setUseTime] = useState(0);
  const [usageTime, setUsageTime] = useState(0);
  const [unitTime, setUnitTime] = useState(0);
  const [preDiscount, setPreDiscount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [subtitles, setSubtitles] = useState({
    usageTime: "0분",
    usePeople: "1명",
  });
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
            imgSrc: item.image,
            count: 0,
          }))
        );
        setUseTime(data.usageTime);
        setUsageTime(data.usageTime);
        setUnitTime(data.unitTime);
        setPreDiscount(data.preorderDiscount);
        setDiscount(data.discount);
        setSubtitles((prev) => ({
          ...prev,
          usageTime: `${data.usageTime}분`,
        }));
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

  const handleUseTimeChange = (time) => {
    setUseTime(time);
  };

  const handlePeopleChange = (people) => {
    setUsePeople(people);
  };
  const handleReservation = () => {
    const filteredMenuInfo = menuInfo.filter((menu) => menu.count > 0);

    if (filteredMenuInfo.length === 0) {
      alert("메뉴 수량이 0인 메뉴가 있습니다. 수량을 설정해 주세요.");
      return;
    }
    if (usePeople <= 0) {
      alert("이용시간과 인원은 0보다 커야 합니다.");
      return;
    }

    const reservationData = {
      menuInfo: filteredMenuInfo,
      useTime,
      usePeople,
      storeName,
      selectedDate,
      selectedTime,
      unitTime,
      discount,
      preDiscount,
      usageTime,
    };
    navigate(`/reserve/show?storeId=${storeId}`, { state: reservationData });
  };

  const isButtonDisabled =
    menuInfo.every((menu) => menu.count === 0) ||
    !selectedTime ||
    usePeople <= 0;

  const secondSubTitleValue = { unitTime, discount };

  return (
    <div className="style-page-scrolled">
      <MenuTitleSection />
      <InputSection
        title={"이용시간"}
        subtitle={subtitles.usageTime}
        secondSubTitle={secondSubTitleValue}
        point={unitTime}
        onCountChange={handleUseTimeChange}
        value={usageTime}
      />
      <InputSection
        title={"인원"}
        subtitle={subtitles.usePeople}
        point={1}
        value={usePeople}
        onCountChange={handlePeopleChange}
      />
      <MenuList
        menuInfo={menuInfo}
        point={1}
        onCountChange={handleCountChange}
        usageTime={usageTime}
        useTime={useTime}
        unitTime={unitTime}
        discount={discount}
        preDiscount={preDiscount}
      />
      <div style={{ margin: "0 16px", position: "absolute", bottom: "20px" }}>
        <BigButton
          width={"287px"}
          text={"예약하기"}
          onClick={handleReservation}
          disabled={isButtonDisabled}
        />
      </div>
    </div>
  );
}

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

// const NoShowFoodToggle = ({ toggleHandler }) => {
//   const toggleStyle = {
//     display: "flex",
//     width: "51px",
//     height: "14px",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: "10px",
//     background: "#0A625C",
//   };
//   return (
//     <div className="font-toggle" style={toggleStyle} onClick={toggleHandler}>
//       noShow 상품 보기
//     </div>
//   );
// };

// const titleSectionStyle = {
//   display: "flex",
//   width: "287px",
//   height: "38px",
//   padding: "0 0 0 4px",
//   margin: "0 16px",
//   alignItems: "center",
//   gap: "5px",
// };

// const menuTitleStyle = {
//   width: "25px",
//   height: "16px",
// };
