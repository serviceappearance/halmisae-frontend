export default function PriceDisplay({ price, discounted }) {
  const thisStyle = {
    width: "59px",
    height: "33px",
    position: "absolute",
    right: "7px",
    bottom: "7px",
  };
  return (
    <div style={thisStyle}>
      <div className="font-price">가격</div>
      <div className="font-price-discounted">{discounted}</div>
    </div>
  );
}
