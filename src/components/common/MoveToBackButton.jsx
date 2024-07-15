export default function MoveToBackButton() {
  const thisStyle = {
    position: "absolute",
    top: "7px",
    left: "7px",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      style={thisStyle}
    >
      <circle cx="10.5" cy="10.5" r="10.5" fill="black" fill-opacity="0.4" />
    </svg>
  );
}
