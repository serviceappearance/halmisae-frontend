import { useEffect, useState } from "react";
import PageHeader from "../common/PageHeader";
import MenuBar from "../common/MenuBar";

export default function ReservationNumberCheck() {
  const [reservationNumbers, setReservationNumbers] = useState([]);

  useEffect(() => {
    const reservations = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && key.startsWith("reservation_")) {
        const data = sessionStorage.getItem(key);
        if (data) {
          const parsedData = JSON.parse(data);
          reservations.push({
            storeName: parsedData.storeName,
            orderNumber: parsedData.orderNumber,
            reservationNumber: parsedData.reservationNumber,
          });
        }
      }
    }
    setReservationNumbers(reservations);
  }, []);
  const boardStyle = {
    display: "flex",
    alignItems: "center",
    height: "40px",
    borderBottom: "1px solid black",
    padding: "0 0 0 10px",
  };
  return (
    <div className="style-page-scroll">
      <PageHeader text={"예약번호 확인"} />
      {reservationNumbers.map((num, index) => (
        <div className="font-body1" style={boardStyle} key={index}>
          {num.storeName} | 예약번호: {num.reservationNumber} | 주문번호:{" "}
          {num.orderNumber}
        </div>
      ))}
      <div style={{ position: "sticky", bottom: 0 }}>
        <MenuBar />
      </div>
    </div>
  );
}

const reservationNumbers = [
  { storeName: "asdfadsf", number: "asdfasdf" },
  { storeName: "asdfadsf", number: "asdfasdf" },
  { storeName: "asdfadsf", number: "asdfasdf" },
];
