// import FilterCategoryIcon from "../common/FilterCategoryIcon";
// import CategoryBar from "./CategoryBar";
import { Link } from "react-router-dom";
import "../common.css";
import MenuBar from "../common/MenuBar";
import SearchBar from "../common/SearchBar";
import StoreInfoCard from "./StoreInfoCard";
import { useEffect, useState } from "react";
import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";


export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [storeInfo, setStoreInfo] = useState([]);

  useEffect(() => {
    async function fetchStoreInfo() {
      try {
        const querySnapshot = await getDocs(collection(db, "stores"));
        const transformedData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            storeId: doc.id,
            topPartValue: {
              Notification: data.closingFoodCount,
              imgSrc: data.image,
            },
            bottomPartValue: {
              title: data.storeName,
              discounted: data.closingPrice,
              rating: null,
              distance: null,
            },
          };
        });
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
