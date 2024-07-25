export default function SumPrice({ label, menuInfo }) {
  const sumPrice = menuInfo.reduce((sum, menu) => {
    return sum + menu.price * (menu.count || 0);
  }, 0);
  return (
    <div className="font-payment" style={sumPriceStyle}>
      <div>{label}</div>
      <div>{sumPrice}</div>
    </div>
  );
}

const sumPriceStyle = {
  display: "flex",
  width: "285px",
  height: "38px",
  margin: "0 0 6px 0",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "0.5px solid #C7C7C7",
};
