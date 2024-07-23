export default function TotalPrice({ label, totalPrice, menuInfo }) {
  const totalPrice01 = menuInfo.reduce((sum, menu) => {
    return sum + menu.price * (menu.count || 0);
  }, 0);
  return (
    <div className="font-payment" style={totalPriceStyle}>
      <div>{label}</div>
      <div>{totalPrice01}</div>
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
