import ReservationCard from "./ReservationCard";
import PageHeader from "../common/PageHeader";
import MenuBar from "../common/MenuBar";
export default function ReservationCheckPage() {
  return (
    <div className="style-page">
      <PageHeader text={"나의 예약"} />
      <ReservationCard />
      <MenuBar />
    </div>
  );
}
