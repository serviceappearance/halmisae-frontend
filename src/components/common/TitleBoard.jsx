export default function TitleBoard({ text, imgUrl }) {
  const titleBoardStyle = {
    display: "flex",
    width: "287px",
    height: "51px",
    alignItems: "center",
    padding: "0 0 0 13px",
    gap: "11px",
    position: "absolute",
    left: "7px",
    bottom: "3px",
  };
  return (
    <div style={titleBoardStyle}>
      {/* <img
        src={imgUrl}
        alt="원형 가게 이미지"
        style={{ width: "45px", height: "45px", borderRadius: "30px" }}
      /> */}
      <div className="font-store-title">{text}</div>
    </div>
  );
}
