import CountPill from "./CountPill";

export default function MenuSection({ imgSrc, menuName, price }) {
  const sectionStyle = {
    width: "287px",
    height: "67px",
    display: "grid",
    gridTemplateColumns: "67px 135px 86px",
    alignItems: "center",
  };
  return (
    <div style={sectionStyle}>
      <div style={{ width: "67px", height: "67px", border: "1px solid black" }}>
        {imgSrc}
      </div>
      <MenuInfo menuName={menuName} price={price} />
      <CountPill />
    </div>
  );
}

const MenuInfo = ({ menuName, price }) => {
  const menuInfoStyle = {
    padding: "0 10px",
    gap: "6px",
  };
  return (
    <div style={menuInfoStyle}>
      <div className="font-count-label-title">{menuName}</div>
      <div className="font-count-label-sub">{price}원</div>
    </div>
  );
};
