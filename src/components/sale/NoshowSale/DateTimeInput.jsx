import { useState, useEffect } from "react";
import TimeBlock from "./TimeBlock";
import Calender from "react-calendar";
import "../../Calendar.css";
import axios from "axios";

export default function DateTimeInput({ storeId, onDateChange }) {
  const [value, onChange] = useState(new Date());
  const [storeHolidays, setStoreHolidays] = useState([]);

  const clickedYear = value.getFullYear();
  const clickedMonth = value.getMonth() + 1;
  const clickedDate = value.getDate();
  const clickedDay = value.getDay();
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const dateInfo = `${clickedYear}년 ${clickedMonth}월 ${clickedDate}일 (${weekDays[clickedDay]})`;

  useEffect(() => {
    onDateChange(value); // 날짜 변경 시 부모 컴포넌트로 변경 사항 전달
  }, [value, onDateChange]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/v1/api/user/main/detail/reservation?storeNumber=${storeId}`
      )
      .then((response) => {
        setStoreHolidays(response.data.storeHoliday);
      })
      .catch((error) => {
        console.error("Error fetching store holidays:", error);
      });
  }, []);

  const disableSpecificDates = ({ date, view }) => {
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

      return storeHolidays.includes(
        Object.keys(dayMap).find((key) => dayMap[key] === date.getDay())
      );
    }
    return false;
  };

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
    </div>
  );
}

const TimeBlockSection = () => {
  return (
    <div style={timeBlockSectionStyle}>
      {timeList.map((time, index) => (
        <TimeBlock key={index} time={time} />
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
  margin: "25px 15px",
};

const timeList = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];
