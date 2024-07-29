export default function TimeBlock({ time, isSelected, isDisabled, onClick }) {
  const thisStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: isDisabled ? "#d3d3d3" : isSelected ? "#4caf50" : "#fff",
    color: isDisabled ? "#a9a9a9" : "#000",
    textAlign: "center",
  };
  return (
    <div className="font-time" style={thisStyle} onClick={onClick}>
      {time}
    </div>
  );
}
