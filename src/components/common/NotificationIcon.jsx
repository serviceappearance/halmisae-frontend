export default function NotificationIcon({ text }) {
  const thisStyle = {
    width: "53px",
    height: "16px",
    borderRadius: "12px",
    backgroundColor: "#F3F5F4",
    position: "absolute",
    top: "7px",
    left: "7px",
  };

  const thisTextStyle = {
    color: "#6c7474",
    textAlign: "center",
    fontSize: "10px",
    fontWeight: "600",
  };
  return (
    <div style={thisStyle}>
      <div style={thisTextStyle}>{text}</div>
    </div>
  );
}
