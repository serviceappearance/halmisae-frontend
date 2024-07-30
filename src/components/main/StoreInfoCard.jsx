import "../font.css";
import BookmarkIcon from "./BookmarkIcon";
import NotificationIcon from "../common/NotificationIcon";
import Comment from "./Card/Comment";
import RatingAndDistance from "./Card/RatingAndDistance";
import PriceDisplay from "../common/PriceDisplay";
import { createContext, useContext } from "react";

const StoreInfoTopContext = createContext({});
const StoreInfoBottomContext = createContext({});

export default function StoreInfoCard({
  id,
  topPartValue,
  bottomPartValue,
  imgUrl,
}) {
  const cardStyle = {
    width: "287px",
    height: "162px",
    borderRadius: "10px",
    backgroundImage: `url(${imgUrl})`,
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
  };
  return (
    <div style={cardStyle}>
      <StoreInfoTopContext.Provider value={topPartValue}>
        <CardTopPart />
      </StoreInfoTopContext.Provider>
      <StoreInfoBottomContext.Provider value={bottomPartValue}>
        <CardBottomPart />
      </StoreInfoBottomContext.Provider>
    </div>
  );
}

const CardTopPart = () => {
  const { Notification } = useContext(StoreInfoTopContext);

  return (
    <div style={topPartStyle}>
      <NotificationIcon text={`잔여 ${Notification}`} />
      {/* <BookmarkIcon /> */}
    </div>
  );
};

const CardBottomPart = () => {
  const { title, content, price, discounted, address } = useContext(
    StoreInfoBottomContext
  );
  return (
    <div style={bottomPartStyle}>
      <Comment title={title} content={content} />
      <PriceDisplay
        price={price}
        discounted={discounted}
        position={"relative"}
      />
      {/* <RatingAndDistance rating={rating} distance={distance} /> */}
      <RatingAndDistance address={address} />
    </div>
  );
};

const topPartStyle = {
  width: "289px",
  height: "79px",
  borderRadius: "10px 10px 0px 0px",
  position: "relative",
};
const bottomPartStyle = {
  width: "287px",
  height: "85px",
  borderRadius: "0px 0px 10px 10px",
  backgroundColor: "#FFF",
  position: "relative",
};
