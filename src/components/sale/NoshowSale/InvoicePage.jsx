import { useLocation, useNavigate } from "react-router-dom";
import BigButton from "../../common/BigButton";
import MoveToBackButton from "../../common/MoveToBackButton";
import SumPrice from "../salePageComponent/SumPrice";
import queryString from "query-string";
import axios from "axios";

export default function InvoicePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { storeId } = queryString.parse(location.search);
  const { menuInfo, usageTime, usePeople, storeName, selectedDate } =
    location.state || {
      menuInfo: [],
      usageTime: 0,
      usePeople: 1,
      storeName: "",
      selectedDate: new Date(),
    };

  const invoiceStyle = {
    display: "grid",
    justifyContent: "center",
  };

  const convertToISOString = (date) => {
    const timezoneOffset = date.getTimezoneOffset() * 60000;
    const localISOTime = new Date(date - timezoneOffset)
      .toISOString()
      .slice(0, -1);
    return localISOTime + "Z";
  };

  const handlePayment = () => {
    const requestData = {
      email: "user1@naver.com",
      storeNumber: storeId,
      visitTime: convertToISOString(selectedDate),
      useTime: usageTime,
      people: usePeople,
      totalPrice: menuInfo.reduce(
        (total, menu) => total + menu.price * menu.count,
        0
      ),
      orderType: "RESERVATION",
      reserveMenu: menuInfo.map((menu) => ({
        menuNumber: menu.menuNumber,
        quantity: menu.count,
      })),
    };

    axios
      .post(
        "http://localhost:8080/v1/api/user/main/detail/reservation",
        requestData
      )
      .then((response) => {
        console.log(response.data);
        console.log("예약 성공");

        const infoDetailValue = [
          storeName,
          selectedDate.toLocaleDateString(),
          `${usageTime}분`,
          `${usePeople}명`,
        ];

        navigate("/noshow-sale/complete", {
          state: {
            infoDetailValue: infoDetailValue,
          },
        });
      })
      .catch((error) => {
        console.error(error);
        console.log("예약");
      });
  };

  return (
    <div style={invoiceStyle} className="style-page">
      <div>
        <MoveToBackButton />
      </div>
      <ReservationInfo
        menuInfo={menuInfo}
        usageTime={usageTime}
        usePeople={usePeople}
        storeName={storeName}
        selectedDate={selectedDate}
      />
      <BigButton width={"297px"} text={"결제하기"} onClick={handlePayment} />
    </div>
  );
}

const ReservationInfo = ({
  menuInfo,
  usageTime,
  usePeople,
  storeName,
  selectedDate,
}) => {
  const infoSectionStyle = {
    width: "296px",
    height: "434px",
    margin: "27px 0 51px 0",
  };
  const titleStyle = {
    display: "flex",
    width: "296px",
    height: "28px",
    padding: "7px 0 7px 3px",
    alignItems: "center",
    borderTop: "0.1px solid black",
    borderBottom: "0.5px solid #C7C7C7",
  };
  return (
    <div style={infoSectionStyle}>
      <div className="font-body2" style={titleStyle}>
        예약확인
      </div>
      <InfoDetail
        menuInfo={menuInfo}
        usageTime={usageTime}
        usePeople={usePeople}
        storeName={storeName}
        selectedDate={selectedDate}
      />
      <div style={{ margin: "169px 0 0 0" }}>
        <SumPrice label={"총 금액"} menuInfo={menuInfo} />
        <SumPrice label={"예약금액"} menuInfo={menuInfo} />
      </div>
    </div>
  );
};

const InfoDetail = ({
  menuInfo,
  usageTime,
  usePeople,
  storeName,
  selectedDate,
}) => {
  const detailSectionStyle = {
    display: "grid",
    gap: "7px",
    margin: "9px 7px 0 7px",
  };

  const infoDetailValue = [
    `${storeName}`,
    `${selectedDate.toLocaleDateString()}`,
    `${usageTime}분`,
    `${usePeople}명`,
  ];
  return (
    <div style={detailSectionStyle}>
      {infoDetailLabel.map((label, index) => (
        <DetailBlock key={index} label={label} value={infoDetailValue[index]} />
      ))}
      <DetailBlock label={"메뉴"} value={null} />
      {menuInfo.map((info, index) => (
        <MenuInfoBlock
          key={index}
          menuName={info.menuName}
          quantity={info.count}
          amount={info.price * info.count}
        />
      ))}
    </div>
  );
};

const DetailBlock = ({ label, value }) => {
  const blockStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "287px",
    height: "18px",
  };
  return (
    <div className="font-body2" style={blockStyle}>
      <div>{label}</div>
      <div style={{ color: "rgba(0, 0, 0, 0.30);" }}>{value}</div>
    </div>
  );
};

const MenuInfoBlock = ({ menuName, quantity, amount }) => {
  const blockStyle = {
    display: "flex",
    width: "259px",
    margin: "0 0 0 29px",
    justifyContent: "space-between",
  };
  return (
    <div style={blockStyle} className="font-caption">
      <div>
        &ensp; {menuName} &ensp; x {quantity}
      </div>
      <div>{amount} 원</div>
    </div>
  );
};

const infoDetailLabel = ["가게명", "예약날짜", "이용시간", "예약인원"];

// const menuInfo = [
//   { name: "메뉴1", quantity: 1, amount: "10000" },
//   { name: "메뉴1", quantity: 1, amount: "10000" },
//   { name: "메뉴1", quantity: 1, amount: "10000" },
//   { name: "메뉴1", quantity: 1, amount: "10000" },
// ];
