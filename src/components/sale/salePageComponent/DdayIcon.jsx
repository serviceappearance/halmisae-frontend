export default function DdayIcon({ text }) {
  const thisStyle = {
    display: "flex",
    width: "34px",
    height: "16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "12px",
    backgroundColor: "#0A625C",
  };

  return (
    <div style={thisStyle}>
      <div className="font-d-day-icon">{text}</div>
    </div>
  );
}
