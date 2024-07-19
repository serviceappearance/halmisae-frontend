import MenuSection from "./MenuSection";
export default function MenuList({ menuInfo }) {
  return (
    <div style={thisStyle}>
      {menuInfo.map((menu, index) => (
        <MenuSection key={index} menuName={menu.menuName} price={menu.price} />
      ))}
    </div>
  );
}

const thisStyle = {
  display: "grid",
  gap: "10px",
  margin: "0 16px 6px 16px",
};
