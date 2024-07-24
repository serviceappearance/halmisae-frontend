import PriceDisplay from "../../common/PriceDisplay";
import { ReactComponent as MapPinIcon } from "../../../assets/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "../../../assets/icons/star.svg";
import { ReactComponent as ClockIcon } from "../../../assets/icons/clock-small.svg";
import SaleSubArea from "./SaleSubArea";
export default function SaleInfoSection() {
  return (
    <div style={thisStyle} className="font-sale-info">
      <div>
        <SaleSubArea
          icon={<MapPinIcon />}
          text={"가게 풀 네임 두 줄까지 입력 가능"}
          alert={null}
        />
        {/* <SaleSubArea icon={<StarIcon />} text={"4.5"} alert={null} /> */}
        <SaleSubArea icon={<ClockIcon />} text={"영업시간: 20:00 - 20:30"} />
        <SaleSubArea icon={<ClockIcon />} text={"휴게시간: 20:00 - 20:30"} />
        <SaleSubArea
          icon={<ClockIcon />}
          text={"픽업가능시간: 20:00 - 20:30"}
        />
      </div>
      <div
        style={{
          height: "42px",
          position: "relative",
        }}
      >
        <PriceDisplay price={"10,000"} discounted={"5,000"} />
      </div>
    </div>
  );
}

const thisStyle = {
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
  padding: "9px 13px 4px 9px",
  gap: "12px",
};
