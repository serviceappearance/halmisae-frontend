import MoveToBackButton from "../../common/MoveToBackButton";
import TitleBoard from "../../common/TitleBoard";
import BookmarkIcon from "../../main/BookmarkIcon";

export default function SignBoard({ storeName }) {
  return (
    <div style={signBoardStyle}>
      <MoveToBackButton />
      {/* <BookmarkIcon /> */}
      <TitleBoard text={storeName} />
    </div>
  );
}

const signBoardStyle = {
  display: "flex",
  width: "320px",
  height: "105px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#D4D4D4",
  position: "relative",
};
