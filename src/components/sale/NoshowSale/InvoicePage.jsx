import BigButton from "../../common/BigButton";
import TotalPrice from "../../common/TotalPrice";
export default function InvoicePage() {
  const invoiceStyle = {
    display: "grid",
    justifyContent: "center",
  };
  return (
    <div style={invoiceStyle} className="style-page">
      <ReservationInfo />
      <BigButton width={"297px"} text={"결제하기"} />
    </div>
  );
}

const ReservationInfo = () => {
  const infoSectionStyle = {
    width: "296px",
    height: "434px",
    margin: "27px 0 51px 0",
  };
  const titleStyle = {
    display: "flex",
    width: "296px",
    height: "28px",
    padding: "7px 0 7px 3px",
    alignItems: "center",
    borderTop: "0.1px solid black",
    borderBottom: "0.5px solid #C7C7C7",
  };
  return (
    <div style={infoSectionStyle}>
      <div className="font-body2" style={titleStyle}>
        예약확인
      </div>
      <InfoDetail />
      <div style={{ margin: "169px 0 0 0" }}>
        <TotalPrice label={"총 금액"} totalPrice={"15,000"} />
        <TotalPrice label={"예약금액"} totalPrice={"10,000"} />
      </div>
    </div>
  );
};

const InfoDetail = () => {
  const detailSectionStyle = {
    display: "grid",
    gap: "7px",
    margin: "9px 7px 0 7px",
  };
  return (
    <div style={detailSectionStyle}>
      {infoDetailLabel.map((label, index) => (
        <DetailBlock key={index} label={label} value={infoDetailValue[index]} />
      ))}
      <DetailBlock label={"메뉴"} value={null} />
      {menuInfo.map((info, index) => (
        <MenuInfoBlock
          key={index}
          menuName={info.name}
          quantity={info.quantity}
          amount={info.amount}
        />
      ))}
    </div>
  );
};

const DetailBlock = ({ label, value }) => {
  const blockStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "287px",
    height: "18px",
  };
  return (
    <div className="font-body2" style={blockStyle}>
      <div>{label}</div>
      <div style={{ color: "rgba(0, 0, 0, 0.30);" }}>{value}</div>
    </div>
  );
};

const MenuInfoBlock = ({ menuName, quantity, amount }) => {
  const blockStyle = {
    display: "flex",
    width: "259px",
    margin: "0 0 0 29px",
    justifyContent: "space-between",
  };
  return (
    <div style={blockStyle} className="font-caption">
      <div>
        &ensp; {menuName} &ensp; x {quantity}
      </div>
      <div>{amount} 원</div>
    </div>
  );
};

const infoDetailLabel = ["가게명", "예약일시", "이용시간", "예약인원"];
const infoDetailValue = ["가게이름", "2024. 10.08  10:00", "120분", "2명"];
const menuInfo = [
  { name: "메뉴1", quantity: 1, ammount: "10000" },
  { name: "메뉴1", quantity: 1, ammount: "10000" },
  { name: "메뉴1", quantity: 1, ammount: "10000" },
  { name: "메뉴1", quantity: 1, ammount: "10000" },
];
