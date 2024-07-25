import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/icons/move-to-back.svg";
import { useState } from "react";

export default function MoveToBackButton() {
  const [animationType, setAnimationType] = useState("slide");
  const navigate = useNavigate();

  const handleBack = () => {
    setAnimationType("slide-right");
    navigate(-1);
  };
  return (
    <div style={thisStyle} onClick={handleBack}>
      <BackIcon />
    </div>
  );
}

const thisStyle = {
  position: "absolute",
  top: "7px",
  left: "7px",
};
