import { useState } from "react";
import TimeBlock from "./TimeBlock";
import Calender from "react-calendar";
import "../../Calendar.css";

export default function DateTimeInput() {
  const [value, onChange] = useState(new Date());
  const clickedYear = value.getFullYear();
  const clickedMonth = value.getMonth() + 1;
  const clickedDate = value.getDate();
  const clickedDay = value.getDay();
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const dateInfo = `${clickedYear}년 ${clickedMonth}월 ${clickedDate}일 (${weekDays[clickedDay]})`;
  const disableSpecificDates = ({ date, view }) => {
    // view가 month인 경우에만 날짜를 비활성화
    if (view === "month") {
      const disabledDates = [
        new Date(2024, 6, 24), // 2024년 7월 24일
      ];
      return disabledDates.some(
        (disabledDate) =>
          date.getFullYear() === disabledDate.getFullYear() &&
          date.getMonth() === disabledDate.getMonth() &&
          date.getDate() === disabledDate.getDate()
      );
    }
    return false;
  };
  return (
    <div className="style-page">
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
