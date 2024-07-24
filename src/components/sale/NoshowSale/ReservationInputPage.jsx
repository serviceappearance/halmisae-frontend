import { useLocation } from "react-router-dom";
import MoveToBackButton from "../../common/MoveToBackButton";
import DateTimeInput from "./DateTimeInput";
import ReservationInfoInput from "./ReservationInfoInput";

export default function ReservationInputPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeId = searchParams.get("storeId");
  return (
    <div>
      <div style={{ position: "relative", zIndex: "10" }}>
        <MoveToBackButton />
      </div>
      <DateTimeInput storeId={storeId} />
      <ReservationInfoInput storeId={storeId} />
    </div>
  );
}
