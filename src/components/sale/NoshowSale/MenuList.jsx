import { useState } from "react";
import SumPrice from "../salePageComponent/SumPrice";
import MenuSection from "./MenuSection";
export default function MenuList({
  menuInfo = [],
  point,
  onCountChange,
  usageTime,
  useTime,
  unitTime,
  discount,
  preDiscount,
}) {
  return (
    <div className="style-menulist">
      {menuInfo.map((menu, index) => (
        <MenuSection
          key={index}
          menuName={menu.menuName}
          price={menu.price}
          point={point}
          imgSrc={
            "https://cdn.newspenguin.com/news/photo/202104/4475_14264_4458.jpg" // menu.imgSrc로 교체
          }
          onCountChange={(count) => onCountChange(index, count)}
        />
      ))}

      <div style={{ borderTop: "1px solid gray" }}>
        <SumPrice
          label={"총 금액"}
          menuInfo={menuInfo}
          usageTime={usageTime}
          useTime={useTime}
          unitTime={unitTime}
          discount={discount}
          preDiscount={preDiscount}
        />
      </div>
    </div>
  );
}
