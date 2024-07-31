// import FilterCategoryIcon from "../common/FilterCategoryIcon";
// import CategoryBar from "./CategoryBar";
import { Link } from "react-router-dom";
import "../common.css";
import MenuBar from "../common/MenuBar";
import SearchBar from "../common/SearchBar";
import StoreInfoCard from "./StoreInfoCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [storeInfo, setStoreInfo] = useState([]);

  useEffect(() => {
    async function fetchStoreInfo() {
      try {
        const response = await axios.get(
          "http://localhost:8080/v1/api/user/main"
        );
        const transformedData = response.data.map((item) => ({
          storeId: item.storeNumber,
          topPartValue: {
            Notification: item.closingFoodCount,
            imgSrc: item.image,
          },
          bottomPartValue: {
            title: item.storeName,
            discounted: item.closingPrice,
            rating: null,
            distance: null,
          },
        }));
        setStoreInfo(transformedData);
      } catch (error) {
        console.error("스토어 정보를 가져오는 중 오류가 발생했습니다:", error);
      }
    }

    fetchStoreInfo();
  }, []);

  const filteredStoreInfo = storeInfo.filter((info) =>
    info.bottomPartValue.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="style-page">
      <SearchBar onSearch={setSearchQuery} />
      {/* <CategoryBar category={category} /> */}
      <div className="style-card-list">
        {filteredStoreInfo.map((info) => (
          <Link key={info.storeId} to={`/store/${info.storeId}`}>
            <StoreInfoCard
              id={info.storeId}
              topPartValue={info.topPartValue}
              bottomPartValue={info.bottomPartValue}
              imgUrl={
                info.imgSrc
                // "https://cdn.pixabay.com/photo/2017/10/18/16/23/bread-2864665_1280.jpg" // info.imgUrl로 교체
              }
            />
          </Link>
        ))}
      </div>
      <MenuBar />
    </div>
  );
}

// const storeInfo = [
//   {
//     storeId: storeNumber,
//     topPartValue: {
//       Notification: closingFoodCount,
//     },
//     bottomPartValue: {
//       title: storeName,
//       discounted: closingPrice,
//       rating: null,
//       distance: null,
//     },
//   },
// ];

// const storeInfo = [
// {
//   storeId: 1,
//   topPartValue: {
//     Notification: "재고없음",
//   },
//   bottomPartValue: {
//     title: "가게명",
//     discounted: "5,000",
//     rating: "4.5",
//     distance: "2km",
//   },
// },
//   {
//     storeId: 2,
//     topPartValue: {
//       Notification: "재고없음",
//     },
//     bottomPartValue: {
//       title: "가게명1",
//       discounted: "5,000",
//       rating: "4.5",
//       distance: "2km",
//     },
//   },
//   {
//     storeId: 3,
//     topPartValue: {
//       Notification: "재고없음",
//     },
//     bottomPartValue: {
//       title: "가게명",
//       discounted: "5,000",
//       rating: "4.5",
//       distance: "2km",
//     },
//   },
//   {
//     storeId: 4,
//     topPartValue: {
//       Notification: "재고없음",
//     },
//     bottomPartValue: {
//       title: "가게명",
//       discounted: "5,000",
//       rating: "4.5",
//       distance: "2km",
//     },
//   },
// ];

// const category = ["전체", "noShow", "마감할인", "찜"];
