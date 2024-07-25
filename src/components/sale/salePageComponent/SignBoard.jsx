import MoveToBackButton from "../../common/MoveToBackButton";
import TitleBoard from "../../common/TitleBoard";
import BookmarkIcon from "../../main/BookmarkIcon";

export default function SignBoard({ storeName, imgUrl }) {
  const signBoardStyle = {
    display: "flex",
    width: "320px",
    height: "105px",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${imgUrl})`,
    position: "relative",
  };
  return (
    <div style={signBoardStyle}>
      <MoveToBackButton />
      {/* <BookmarkIcon /> */}
      <TitleBoard
        text={storeName}
        imgUrl={
          "https://cdn.pixabay.com/photo/2018/05/25/18/04/nature-3429700_1280.jpg"
        }
      />
    </div>
  );
}
