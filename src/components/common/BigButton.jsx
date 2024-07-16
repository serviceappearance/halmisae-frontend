export default function BigButton({ width, text }) {
  const bigButtonStyle = {
    display: "flex",
    width: width,
    height: "43px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    background: "#0A625C",
  };
  return (
    <div style={bigButtonStyle}>
      <div className="font-bigButton-text">{text}</div>
    </div>
  );
}
