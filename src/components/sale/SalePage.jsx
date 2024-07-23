import "../common.css";
import { ReactComponent as MapPinIcon } from "../../assets/icons/map-pin.svg";
import AdditionalSection from "./salePageComponent/AdditionalSection";
import SaleInfoSection from "./salePageComponent/SaleInfoSection";
import SignBoard from "./salePageComponent/SignBoard";
import SaleSectionBottom from "./salePageComponent/SaleSectionBottom";
import AlertModal from "./BargainSale/AlertModal";
import PaymentInfoModal from "./BargainSale/PaymentInfoModal";
import { useState } from "react";

export default function SalePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("alert");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentModal("alert");
  };

  const handleConfirm = () => {
    setCurrentModal("payment");
  };

  return (
    <div
      className="style-page"
      style={{
        display: "grid",
        gridTemplateRows: "105px 124px 40px 40px ",
      }}
    >
      <SignBoard />
      <SaleInfoSection />
      <AdditionalSection icon={<MapPinIcon />} address={"가게 주소"} />
      <AdditionalSection icon={null} address={"재료 및 알레르기 성분 정보"} />
      <SaleSectionBottom rating={"4.5"} toggleModal={toggleModal} />
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
          price={saleInfo.price}
        />
      )}
    </div>
  );
}

const saleInfo = [{ fullName: "", price: "5000" }];
