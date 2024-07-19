import { Link } from "react-router-dom";
import "../common.css";
import FilterCategoryIcon from "../common/FilterCategoryIcon";
import MenuBar from "../common/MenuBar";
import SearchBar from "../common/SearchBar";
import CategoryBar from "./CategoryBar";
import StoreInfoCard from "./StoreInfoCard";

const storeInfo = [
  {
    storeId: 1,
    topPartValue: {
      Notification: "재고없음",
    },
    bottomPartValue: {
      title: "가게명",
      discounted: "5,000",
      rating: "4.5",
      distance: "2km",
    },
  },
  {
    storeId: 2,
    topPartValue: {
      Notification: "재고없음",
    },
    bottomPartValue: {
      title: "가게명",
      discounted: "5,000",
      rating: "4.5",
      distance: "2km",
    },
  },
  {
    storeId: 3,
    topPartValue: {
      Notification: "재고없음",
    },
    bottomPartValue: {
      title: "가게명",
      discounted: "5,000",
      rating: "4.5",
      distance: "2km",
    },
  },
  {
    storeId: 4,
    topPartValue: {
      Notification: "재고없음",
    },
    bottomPartValue: {
      title: "가게명",
      discounted: "5,000",
      rating: "4.5",
      distance: "2km",
    },
  },
];

const category = ["전체", "noShow", "마감할인", "찜"];

export default function MainPage() {
  return (
    <div className="style-page">
      <SearchBar />
      <CategoryBar category={category} />
      <div className="style-card-list">
        {storeInfo.map((info, index) => (
          <Link to="/store">
            <StoreInfoCard
              key={index}
              id={info.storeId}
              topPartValue={info.topPartValue}
              bottomPartValue={info.bottomPartValue}
            />
          </Link>
        ))}
      </div>
      <MenuBar />
    </div>
  );
}
