export default function TimeBlock({ time }) {
  const thisStyle = {
    display: "flex",
    width: "62px",
    height: "34px",
    justifyContent: "center",
    alignItems: "center",
    border: "0.1px solid black",
  };
  return (
    <div className="font-time" style={thisStyle}>
      {time}
    </div>
  );
}
