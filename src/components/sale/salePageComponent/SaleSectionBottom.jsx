import ButtonSection from "./ButtonSection";
export default function SaleSectionBottom({ rating }) {
  return (
    <div style={bottomSectionStyle}>
      <div style={customerRatingStyle}>
        <div
          className="font-customer-rating-label"
          style={{ marginBottom: "13px" }}
        >
          이용자 평가 점수
        </div>
        <div className="font-customer-rating">{rating} / 5.0</div>
      </div>
      <ButtonSection />
    </div>
  );
}

const bottomSectionStyle = {
  width: "320px",
  padding: "27px 0px 72px 0px",
};
const customerRatingStyle = {
  width: "320px",
  padding: "10px 0px",
  gap: "13px",
};
