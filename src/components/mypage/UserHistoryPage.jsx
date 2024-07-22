import MenuBar from "../common/MenuBar";
import PageHeader from "../common/PageHeader";
import ReservationCard from "../reservationCheck/ReservationCard";

export default function UserHistoryPage() {
  return (
    <div className="style-page">
      <PageHeader text={"사용내역 및 별점"} />
      {reservationInfo.map((r, index) => (
        <ReservationCard key={index} imgSrc={r.imgSrc} info={r.info} />
      ))}
      <MenuBar />
    </div>
  );
}

const reservationInfo = [
  {
    imgSrc: "",
    info: {
      category: "방문",
      storeName: "가게명",
      dateOrTime: "예약시간",
      buttonText: "별점주기",
      simpleInfo: ["120", "2", "10,000"],
    },
  },
  {
    imgSrc: "",
    info: {
      category: "방문",
      storeName: "가게명",
      dateOrTime: "예약시간",
      buttonText: "별점주기",
      simpleInfo: ["120", "2", "10,000"],
    },
  },
  {
    imgSrc: "",
    info: {
      category: "방문",
      storeName: "가게명",
      dateOrTime: "예약시간",
      buttonText: "별점주기",
      simpleInfo: ["120", "2", "10,000"],
    },
  },
  {
    imgSrc: "",
    info: {
      category: "방문",
      storeName: "가게명",
      dateOrTime: "예약시간",
      buttonText: "별점주기",
      simpleInfo: ["120", "2", "10,000"],
    },
  },
];
