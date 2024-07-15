import "../common.css";
import ButtonSection from "./ButtonSection";
import SaleInfoSection from "./SaleInfoSection";
import SignBoard from "./SignBoard";

export default function SalePage({ buttonProps01 }) {
  return (
    <div className="style-page">
      <SignBoard />
      <SaleInfoSection />
      <ButtonSection />
    </div>
  );
}
