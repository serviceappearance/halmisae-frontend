export default function SumPrice({
  label,
  menuInfo,
  usageTime,
  useTime,
  unitTime,
  discount,
  preDiscount,
}) {
  const totalMenuPrice = menuInfo.reduce((sum, menu) => {
    return sum + menu.price * (menu.count || 0);
  }, 0);

  const discountAmount = ((usageTime - useTime) / unitTime) * discount;

  const discountAmountIsNan = isNaN(discountAmount) ? 0 : discountAmount;
  const preDiscountIsNan = isNaN(preDiscount) ? 0 : preDiscount;

  const finalPrice = totalMenuPrice - discountAmountIsNan - preDiscountIsNan;

  const displayPrice = isNaN(finalPrice) ? 0 : finalPrice;
  return (
    <div className="font-payment" style={sumPriceStyle}>
      <div>{label}</div>
      <div>{displayPrice}</div>
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
