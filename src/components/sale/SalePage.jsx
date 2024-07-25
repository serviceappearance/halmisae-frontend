import "../common.css";
import { ReactComponent as MapPinIcon } from "../../assets/icons/map-pin.svg";
import AdditionalSection from "./salePageComponent/AdditionalSection";
import SaleInfoSection from "./salePageComponent/SaleInfoSection";
import SignBoard from "./salePageComponent/SignBoard";
import SaleSectionBottom from "./salePageComponent/SaleSectionBottom";
import AlertModal from "./BargainSale/AlertModal";
import PaymentInfoModal from "./BargainSale/PaymentInfoModal";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SalePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("alert");
  const [saleInfo, setSaleInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { storeId } = useParams();

  useEffect(() => {
    const fetchSaleInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/v1/api/user/main/detail?storeNumber=${storeId}`
        );
        setSaleInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch sale info:", error);
        setLoading(false);
      }
    };
    fetchSaleInfo();
  }, [storeId]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentModal("alert");
  };

  const handleConfirm = () => {
    setCurrentModal("payment");
  };

  const formatTimeFromArray = (timeArray) => {
    if (!timeArray || timeArray.length < 5) return "";

    const [year, month, day, hour, minute] = timeArray;

    const formattedHours = String(hour).padStart(2, "0");
    const formattedMinutes = String(minute).padStart(2, "0");

    return `${formattedHours}${formattedMinutes}`;
  };

  const pickingTimeFormatted = saleInfo
    ? `${formatTimeFromArray(saleInfo.pickupTime)} - ${saleInfo.closeTime}`
    : "";

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!saleInfo) {
    return <div>Error loading sale info.</div>;
  }

  return (
    <div
      className="style-page"
      style={{
        display: "grid",
        gridTemplateRows: "105px 124px 40px 40px ",
        position: "relative",
      }}
    >
      <SignBoard
        storeName={saleInfo.storeName}
        imgUrl={
          "https://cdn.pixabay.com/photo/2018/05/25/18/04/nature-3429700_1280.jpg"
        } // info.imgUrl로 교체
      />
      <SaleInfoSection
        storeName={saleInfo.storeName}
        opening={`${saleInfo.openTime} - ${saleInfo.closeTime}`}
        breaking={`${saleInfo.breakStart} - ${saleInfo.breakEnd}`}
        picking={pickingTimeFormatted}
        price={saleInfo.closingPrice}
      />
      {/* <AdditionalSection icon={<MapPinIcon />} address={saleInfo.address} />
      <AdditionalSection icon={null} address={"재료 및 알레르기 성분 정보"} /> */}
      <SaleSectionBottom
        rating={"4.5"}
        toggleModal={toggleModal}
        storeId={storeId}
        storeName={saleInfo.storeName}
      />
      <div
        className={`overlay ${isModalOpen ? "open" : ""}`}
        onClick={toggleModal}
      ></div>
      {currentModal === "alert" && (
        <AlertModal
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          toggleModal={toggleModal}
        />
      )}
      {currentModal === "payment" && (
        <PaymentInfoModal
          isOpen={isModalOpen}
          toggleModal={toggleModal}
          price={saleInfo.closingPrice}
          storeName={saleInfo.storeName}
          picking={pickingTimeFormatted}
          storeNumber={saleInfo.storeNumber}
          foodLimit={saleInfo.closingFoodCount}
        />
      )}
    </div>
  );
}
