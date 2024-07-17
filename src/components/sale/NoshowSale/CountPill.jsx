import { useState } from "react";
import { ReactComponent as MinusIcon } from "../../../assets/icons/amount-minus-small.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/amount-plus-small.svg";

export default function CountPill() {
  const [count, setCount] = useState(0);

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const plus = () => {
    setCount(count + 1);
  };

  const countPillStyle = {
    display: "flex",
    width: "72px",
    height: "19px",
    padding: "3px 5px 2px 5px",
    justifyContent: "center",
    gap: "1px",
    borderRadius: "10px",
    border: "0.1px solid #000",
  };

  const countPillTextStyle = {
    width: "31px",
    height: "12px",
  };

  return (
    <div style={countPillStyle}>
      <MinusIcon onClick={minus} />
      <div className="font-count-pill" style={countPillTextStyle}>
        {count}
      </div>
      <PlusIcon onClick={plus} />
    </div>
  );
}
