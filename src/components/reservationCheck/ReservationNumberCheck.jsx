import PageHeader from "../common/PageHeader";

export default function ReservationNumberCheck() {
  const boardStyle = {
    display: "flex",
    alignItems: "center",
    height: "40px",
    borderBottom: "1px solid black",
    padding: "0 0 0 10px",
  };
  return (
    <div>
      <PageHeader text={"예약번호 확인"} />
      {reservationNumbers.map((num, index) => (
        <div className="font-body1" style={boardStyle} key={index}>
          {num.storeName} | {num.number}
        </div>
      ))}
    </div>
  );
}

const reservationNumbers = [
  { storeName: "asdfadsf", number: "asdfasdf" },
  { storeName: "asdfadsf", number: "asdfasdf" },
  { storeName: "asdfadsf", number: "asdfasdf" },
];
