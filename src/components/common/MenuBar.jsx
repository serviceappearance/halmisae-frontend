import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { Link } from "react-router-dom";

const MenuStyle = {
  display: "grid",
  width: "320px",
  height: "44px",
  gridTemplateColumns: "1fr 1fr 1fr",
  backgroundColor: "#FFFDFD",
  position: "absolute",
  bottom: "0",
};

const barStyle = {
  display: "flex",
  height: "44px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
};

const icons = [<HomeIcon />, <CheckIcon />, <UserIcon />];
const routes = ["/", "/reservation", "/mypage"];

export default function MenuBar() {
  return (
    <div style={MenuStyle}>
      {icons.map((icon, index) => (
        <Link to={routes[index]}>
          <div key={index} style={barStyle}>
            {icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
