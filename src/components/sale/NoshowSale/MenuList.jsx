import { useState } from "react";
import SumPrice from "../salePageComponent/SumPrice";
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
      <SumPrice label={"총 금액"} menuInfo={menuInfo} />
    </div>
  );
}
