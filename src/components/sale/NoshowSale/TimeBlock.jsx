export default function TimeBlock({ time, isSelected, onClick }) {
  const thisStyle = {
    display: "flex",
    width: "62px",
    height: "34px",
    justifyContent: "center",
    alignItems: "center",
    border: "0.1px solid black",
    backgroundColor: isSelected ? "lightblue" : "white",
  };
  return (
    <div className="font-time" style={thisStyle} onClick={onClick}>
      {time}
    </div>
  );
}
