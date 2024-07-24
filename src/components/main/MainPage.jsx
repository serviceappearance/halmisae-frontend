import { Link } from "react-router-dom";
import "../common.css";
import FilterCategoryIcon from "../common/FilterCategoryIcon";
import MenuBar from "../common/MenuBar";
import SearchBar from "../common/SearchBar";
import CategoryBar from "./CategoryBar";
import StoreInfoCard from "./StoreInfoCard";
import { useState } from "react";

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStoreInfo = storeInfo.filter((info) =>
    info.bottomPartValue.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="style-page">
      <SearchBar onSearch={setSearchQuery} />
      {/* <CategoryBar category={category} /> */}
      <div className="style-card-list">
        {filteredStoreInfo.map((info) => (
          <Link key={info.storeId} to="/store">
            <StoreInfoCard
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
      title: "가게명1",
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
