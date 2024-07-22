import ReservationCard from "./ReservationCard";
import PageHeader from "../common/PageHeader";
import MenuBar from "../common/MenuBar";
export default function ReservationCheckPage() {
  return (
    <div className="style-page">
      <PageHeader text={"나의 예약"} />
      {reservationInfo.map((r, index) => (
        <ReservationCard
          key={index}
          imgSrc={r.imgSrc}
          info={r.info}
          miniButtonHandler={onClickHandler}
        />
      ))}
      <MenuBar />
    </div>
  );
}

const reservationInfo = [
  {
    imgSrc: "",
    info: {
      category: "예약",
      storeName: "가게명",
      dateOrTime: "예약시간",
      buttonText: "취소",
      simpleInfo: ["120", "2", "10,000"],
    },
  },
  {
    imgSrc: "",
    info: {
      category: "예약",
      storeName: "가게명",
      dateOrTime: "예약시간",
      buttonText: "취소",
      simpleInfo: ["120", "2", "10,000"],
    },
  },
  {
    imgSrc: "",
    info: {
      category: "예약",
      storeName: "가게명",
      dateOrTime: "예약시간",
      buttonText: "취소",
      simpleInfo: ["120", "2", "10,000"],
    },
  },
  {
    imgSrc: "",
    info: {
      category: "예약",
      storeName: "가게명",
      dateOrTime: "예약시간",
      buttonText: "취소",
      simpleInfo: ["120", "2", "10,000"],
    },
  },
];

/* eslint-disable no-restricted-globals */
const onClickHandler = () => {
  var result = confirm("예약을 취소 하시겠습니까?");
  if (result) {
    alert("예약을 취소했습니다");
    // 예약 카드 삭제
  }
};
/* eslint-disable no-restricted-globals */
