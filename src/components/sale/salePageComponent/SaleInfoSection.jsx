// import { ReactComponent as StarIcon } from "../../../assets/icons/star.svg";
import PriceDisplay from "../../common/PriceDisplay";
import { ReactComponent as MapPinIcon } from "../../../assets/icons/map-pin.svg";
import { ReactComponent as ClockIcon } from "../../../assets/icons/clock-small.svg";
import SaleSubArea from "./SaleSubArea";
export default function SaleInfoSection({
  storeName,
  opening,
  breaking,
  picking,
  price,
}) {
  return (
    <div style={thisStyle} className="font-sale-info">
      <div>
        {/* <SaleSubArea icon={<StarIcon />} text={"4.5"} alert={null} /> */}
        <SaleSubArea icon={<MapPinIcon />} text={storeName} alert={null} />
        <SaleSubArea icon={<ClockIcon />} text={`영업시간: ${opening}`} />
        <SaleSubArea icon={<ClockIcon />} text={`휴게시간: ${breaking}`} />
        <SaleSubArea icon={<ClockIcon />} text={`픽업가능시간: ${picking}`} />
      </div>
      <div
        style={{
          height: "42px",
          position: "relative",
        }}
      >
        <PriceDisplay price={"10,000"} discounted={`${price}원`} />
      </div>
    </div>
  );
}

const thisStyle = {
  display: "grid",
  gridTemplateColumns: "2fr 2fr",
  padding: "9px 13px 4px 9px",
  gap: "12px",
};
