import MenuBar from "../common/MenuBar";
import StoreInfoCard from "./StoreInfoCard";
export default function MainPage() {
  const storeInfo = {
    topPartValue: {
      storeName: "가게이름",
      Notification: "재고없음",
    },
    bottomPartValue: {
      title: "사장님 말씀",
      content: "내용",
      price: "10,000",
      discounted: "5,000",
      rating: "4.5",
      distance: "2km",
    },
  };

  return (
    <div>
      <StoreInfoCard
        topPartValue={storeInfo.topPartValue}
        bottomPartValue={storeInfo.bottomPartValue}
      />
      <MenuBar />
    </div>
  );
}
