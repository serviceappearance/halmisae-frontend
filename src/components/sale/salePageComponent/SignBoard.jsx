// import BookmarkIcon from "../../main/BookmarkIcon";
import MoveToBackButton from "../../common/MoveToBackButton";
import TitleBoard from "../../common/TitleBoard";

export default function SignBoard({ storeName, imgUrl }) {
  const signBoardStyle = {
    display: "flex",
    width: "320px",
    height: "105px",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    position: "relative",
  };
  return (
    <div style={signBoardStyle}>
      <MoveToBackButton />
      {/* <BookmarkIcon /> */}
      <TitleBoard
        text={storeName}
        // imgUrl={
        //   "https://cdn.pixabay.com/photo/2023/12/13/17/54/bun-8447394_1280.jpg" // imgUrl로 교체
        // }
      />
    </div>
  );
}
