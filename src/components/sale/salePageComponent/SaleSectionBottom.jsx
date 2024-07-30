import ButtonSection from "./ButtonSection";
export default function SaleSectionBottom({
  rating,
  toggleModal,
  storeId,
  storeName,
  isBeforeOpening,
}) {
  return (
    <div style={bottomSectionStyle}>
      {/* <div style={customerRatingStyle}>
        <div
          className="font-customer-rating-label"
          style={{ marginBottom: "13px" }}
        >
          이용자 평가 점수
        </div>
        <div className="font-customer-rating">{rating} / 5.0</div>
      </div> */}
      <ButtonSection
        toggleModal={toggleModal}
        storeId={storeId}
        storeName={storeName}
        isBeforeOpening={isBeforeOpening}
      />
    </div>
  );
}

const bottomSectionStyle = {
  width: "320px",
  position: "absolute",
  bottom: 0,
  // margin: "70px 0 0 0",
};

// const customerRatingStyle = {
//   width: "320px",
//   padding: "10px 0px",
//   gap: "13px",
// };
