export default function PriceDisplay({ price, discounted, position }) {
  const thisStyle = {
    width: "59px",
    height: "33px",
    position: { position },
    right: "7px",
    bottom: "7px",
  };
  return (
    <div style={thisStyle}>
      <div className="font-price">{price}</div>
      <div className="font-price-discounted">{discounted}</div>
    </div>
  );
}
