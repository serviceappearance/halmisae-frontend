import ReservationCard from "./ReservationCard";
import PageHeader from "../common/PageHeader";
import MenuBar from "../common/MenuBar";
import { useState } from "react";
import axios from "axios";

export default function ReservationCheckPage() {
  const [reservations, setReservations] = useState(reservationInfo);
  // const [error, setError] = useState(null);

  const handleCancel = async (index) => {
    const reservationToCancel = reservations[index];

    try {
      await axios.post(`서버주소/${reservationToCancel.id}`);

      setReservations((prevReservations) =>
        prevReservations.filter((_, i) => i !== index)
      );
    } catch (error) {
      console.error("Failed to cancel reservation:", error);
      alert("예약 취소에 실패했습니다. 다시 시도해 주세요.");
    }
  };
  return (
    <div className="style-page">
      <PageHeader text={"나의 예약"} />
      {reservations.map((r, index) => (
        <ReservationCard
          key={index}
          imgSrc={r.imgSrc}
          info={r.info}
          onCancel={() => handleCancel(index)}
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
