import { useLocation } from "react-router-dom";
import MoveToBackButton from "../../common/MoveToBackButton";
import DateTimeInput from "./DateTimeInput";
import ReservationInfoInput from "./ReservationInfoInput";
import { useState } from "react";

export default function ReservationInputPage() {
  const location = useLocation();
  const { storeId, storeName } = location.state || {};
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  return (
    <div className="style-page-scroll">
      <div style={{ position: "relative", zIndex: "10" }}>
        <MoveToBackButton />
      </div>
      <DateTimeInput
        storeId={storeId}
        onDateChange={setSelectedDate}
        onTimeChange={setSelectedTime}
      />
      <ReservationInfoInput
        storeId={storeId}
        storeName={storeName}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
    </div>
  );
}
