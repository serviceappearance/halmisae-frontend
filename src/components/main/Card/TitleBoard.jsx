export default function TitleBoard({ text }) {
  const titleBoardStyle = {
    display: "flex",
    width: "287px",
    height: "51px",
    alignItems: "center",
    gap: "11px",
    position: "absolute",
    left: "7px",
    bottom: "3px",
  };
  return (
    <div style={titleBoardStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
        <circle cx="22.5" cy="22.5" r="22.5" fill="white" />
      </svg>
      <div className="font-store-title">{text}</div>
    </div>
  );
}
