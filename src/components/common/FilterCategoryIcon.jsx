export default function FilterCategoryIcon({ text }) {
  const thisStyle = {
    width: "53px",
    height: "23px",
    borderRadius: "12px",
    border: "0.1px solid grey",
    display: "grid",
    alignItems: "center",
  };

  const thisTextStyle = {
    height: "fit-content",
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
