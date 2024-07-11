export default function StoreInfoCard({ storeName }) {
  const cardStyle = {
    width: "287px",
    height: "162px",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.20)",
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
  };
  const simplePartStyle = {
    width: "289px",
    height: "79px",
    borderRadius: "10px 10px 0px 0px",
  };
  const summaryPartStyle = {
    width: "287px",
    height: "82px",
    borderRadius: "0px 0px 10px 10px",
    backgroundColor: "#FFF",
  };
  const titleBoardStyle = {
    display: "flex",
    width: "287px",
    height: "51px",
    padding: "3px 0px 3px 7px",
    alignItems: "center",
    gap: "11px",
    flexShrink: "0",
  };
  const titleStyle = {
    color: "#FFF8EC",
    fontFamily: "Inter",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };
  return (
    <div style={cardStyle}>
      <div style={simplePartStyle}>
        <div style={titleBoardStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
            <circle cx="22.5" cy="22.5" r="22.5" fill="white" />
          </svg>
          <div style={titleStyle}>{storeName}</div>
        </div>
      </div>
      <div style={summaryPartStyle}></div>
    </div>
  );
}
