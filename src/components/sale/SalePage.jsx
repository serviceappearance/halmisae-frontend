import "../common.css";
import { ReactComponent as MapPinIcon } from "../../assets/icons/map-pin.svg";
import AdditionalSection from "./salePageComponent/AdditionalSection";
import SaleInfoSection from "./salePageComponent/SaleInfoSection";
import SignBoard from "./salePageComponent/SignBoard";
import SaleSectionBottom from "./salePageComponent/SaleSectionBottom";
import AlertModal from "./BargainSale/AlertModal";

export default function SalePage() {
  return (
    <div className="style-page">
      <SignBoard />
      <SaleInfoSection />
      <AdditionalSection icon={<MapPinIcon />} address={"가게 주소"} />
      <AdditionalSection icon={null} address={"재료 및 알레르기 성분 정보"} />
      <SaleSectionBottom rating={"4.5"} />
      {/* <AlertModal /> */}
    </div>
  );
}
