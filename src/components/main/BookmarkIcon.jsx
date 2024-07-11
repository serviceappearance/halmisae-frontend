export default function BookmarkIcon() {
  const thisStyle = {
    display: "flex",
    width: "21px",
    height: "21px",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: "0",
  };

  return (
    <div className={thisStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
        <circle cx="10.5" cy="10.5" r="10.5" fill="black" fill-opacity="0.4" />
      </svg>
    </div>
  );
}
