import MoveToBackButton from "../../common/MoveToBackButton";
import DateTimeInput from "./DateTimeInput";
import ReservationInfoInput from "./ReservationInfoInput";

export default function ReservationInputPage() {
  return (
    <div>
      <div style={{ position: "relative", zIndex: "10" }}>
        <MoveToBackButton />
      </div>
      <DateTimeInput />
      <ReservationInfoInput />
    </div>
  );
}
