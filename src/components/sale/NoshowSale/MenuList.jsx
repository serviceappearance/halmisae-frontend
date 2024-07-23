import { useState } from "react";
import TotalPrice from "../../common/TotalPrice";
import MenuSection from "./MenuSection";
export default function MenuList({ menuInfo, point, onCountChange }) {
  return (
    <div className="style-menulist">
      <div>
        {menuInfo.map((menu, index) => (
          <MenuSection
            key={index}
            menuName={menu.menuName}
            price={menu.price}
            point={point}
            onCountChange={(count) => onCountChange(index, count)}
          />
        ))}
      </div>
      <TotalPrice label={"총 금액"} menuInfo={menuInfo} />
    </div>
  );
}
