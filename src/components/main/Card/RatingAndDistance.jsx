export default function RatingAndDistance({ rating, distance, address }) {
  const thisStyle = {
    display: "flex",
    alignItems: "center",
    gap: "3px",
    position: "absolute",
    left: "8px",
    bottom: "7px",
  };
  return (
    <div className="font-Rating" style={thisStyle}>
      {/* <div>star</div>
      <div>{rating}</div>
      <div>{distance}</div> */}
      <div className="font-body2">{address}</div>
    </div>
  );
}
