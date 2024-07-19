export default function NotificationIcon({ text }) {
  const thisStyle = {
    display: "flex",
    width: "19px",
    height: "9px",
    borderRadius: "12px",
    backgroundColor: "#F3F5F4",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "8px",
    left: "5px",
  };

  return (
    <div style={thisStyle}>
      <div
        className="font-pill"
        style={{ width: "fit-content", height: "fit-content" }}
      >
        {text}
      </div>
    </div>
  );
}
