import { useState, useEffect } from "react";
import TimeBlock from "./TimeBlock";
import Calender from "react-calendar";
import "../../Calendar.css";
import axios from "axios";

export default function DateTimeInput({ storeId, onDateChange, onTimeChange }) {
  const [value, onChange] = useState(new Date());
  const [storeHolidays, setStoreHolidays] = useState([]);
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [breakStart, setBreakStart] = useState("");
  const [breakEnd, setBreakEnd] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const clickedYear = value.getFullYear();
  const clickedMonth = value.getMonth() + 1;
  const clickedDate = value.getDate();
  const clickedDay = value.getDay();
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const dateInfo = `${clickedYear}년 ${clickedMonth}월 ${clickedDate}일 (${weekDays[clickedDay]})`;

  useEffect(() => {
    onDateChange(value);
  }, [value, selectedTime, onDateChange]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/v1/api/user/main/detail/reservation?storeNumber=${storeId}`
      )
      .then((response) => {
        setStoreHolidays(response.data.storeHoliday);
        setOpenTime(response.data.openTime);
        setCloseTime(response.data.closeTime);
        setBreakStart(response.data.breakStart);
        setBreakEnd(response.data.breakEnd);
      })
      .catch((error) => {
        console.error("Error fetching store holidays:", error);
      });
  }, []);
  const disableSpecificDates = ({ date, view }) => {
    const today = new Date();

    const isBeforeToday = date < today;
    if (view === "month") {
      const dayMap = {
        SUN: 0,
        MON: 1,
        TUE: 2,
        WED: 3,
        THU: 4,
        FRI: 5,
        SAT: 6,
      };

      if (isBeforeToday) return true;
      return storeHolidays.includes(
        Object.keys(dayMap).find((key) => dayMap[key] === date.getDay())
      );
    }
    return false;
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    onTimeChange(time);
  };

  const generateTimeSlots = (openTime, closeTime, step) => {
    let slots = [];
    let startHour = parseInt(openTime.slice(0, 2));
    let startMinute = parseInt(openTime.slice(2));
    let endHour = parseInt(closeTime.slice(0, 2));
    let endMinute = parseInt(closeTime.slice(2));

    while (
      startHour < endHour ||
      (startHour === endHour && startMinute < endMinute)
    ) {
      let hour = startHour.toString().padStart(2, "0");
      let minute = startMinute.toString().padStart(2, "0");
      slots.push(`${hour}:${minute}`);

      startMinute += step;
      if (startMinute >= 60) {
        startMinute -= 60;
        startHour += 1;
      }
    }

    return slots;
  };

  const timeList = generateTimeSlots(openTime, closeTime, 30);

  return (
    <div className="style-page-calendar">
      <div className="font-reserved-date" style={reservedDateStyle}>
        {dateInfo}
      </div>

      <Calender
        onChange={onChange}
        value={value}
        tileDisabled={disableSpecificDates}
        calendarType="gregory"
      />

      <TimeBlockSection
        selectedTime={selectedTime}
        setSelectedTime={handleTimeChange}
        timeList={timeList}
        breakStart={breakStart}
        breakEnd={breakEnd}
      />
    </div>
  );
}

const TimeBlockSection = ({
  selectedTime,
  setSelectedTime,
  timeList,
  breakStart,
  breakEnd,
}) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const isDisabled = (time) => {
    const [hour, minute] = time.split(":").map(Number);

    if (
      hour < currentHour ||
      (hour === currentHour && minute <= currentMinute)
    ) {
      return true;
    }

    const breakStartHour = Math.floor(breakStart / 100);
    const breakStartMinute = breakStart % 100;
    const breakEndHour = Math.floor(breakEnd / 100);
    const breakEndMinute = breakEnd % 100;

    const isAfterBreakStart =
      hour > breakStartHour ||
      (hour === breakStartHour && minute >= breakStartMinute);
    const isBeforeBreakEnd =
      hour < breakEndHour || (hour === breakEndHour && minute < breakEndMinute);

    if (isAfterBreakStart && isBeforeBreakEnd) {
      return true;
    }
    return false;
  };

  return (
    <div style={timeBlockSectionStyle}>
      {timeList.map((time, index) => (
        <TimeBlock
          key={index}
          time={time}
          isSelected={selectedTime === time}
          isDisabled={isDisabled(time)}
          onClick={() => !isDisabled(time) && setSelectedTime(time)}
        />
      ))}
    </div>
  );
};

const reservedDateStyle = {
  margin: "15px 0 15px 0 ",
};

const timeBlockSectionStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "11px",
  margin: "15px 15px",
};
