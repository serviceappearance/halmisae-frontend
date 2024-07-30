import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/icons/move-to-back.svg";

export default function MoveToBackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
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
