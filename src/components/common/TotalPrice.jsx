export default function TotalPrice({ label, totalPrice }) {
  return (
    <div className="font-payment" style={totalPriceStyle}>
      <div>{label}</div>
      <div>{totalPrice}</div>
    </div>
  );
}

const totalPriceStyle = {
  display: "flex",
  width: "291px",
  height: "38px",
  margin: "0 0 6px 0",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "0.5px solid #C7C7C7",
};
