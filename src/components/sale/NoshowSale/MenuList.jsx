import MenuSection from "./MenuSection";
export default function MenuList({ menuInfo }) {
  return (
    <div style={{ display: "grid", gap: "10px" }}>
      {menuInfo.map((menu, index) => (
        <MenuSection key={index} menuName={menu.menuName} price={menu.price} />
      ))}
    </div>
  );
}
