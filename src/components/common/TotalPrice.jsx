export default function TotalPrice({ totalPrice }) {
  return (
    <div className="font-payment" style={totalPriceStyle}>
      <div>결제금액</div>
      <div>{totalPrice}</div>
    </div>
  );
}

const totalPriceStyle = {
  display: "flex",
  width: "291px",
  height: "38px",
  padding: "0 8px",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: "0.5px solid #C7C7C7",
  borderBottom: "0.5px solid #C7C7C7",
};
