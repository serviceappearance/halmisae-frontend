export default function BigButton({ width, text, onClick }) {
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
    <div style={bigButtonStyle} onClick={onClick}>
      <div className="font-bigButton-text">{text}</div>
    </div>
  );
}
