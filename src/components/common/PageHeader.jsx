export default function PageHeader({ text }) {
  const thisStyle = {
    width: "320px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    borderBottom: "0.1px solid black",
  };
  return (
    <div className="font-subtitle1" style={thisStyle}>
      <div>&ensp; {text}</div>
    </div>
  );
}
