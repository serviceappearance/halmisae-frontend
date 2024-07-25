import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <div style={menuStyle}>
      {icons.map((icon, index) => (
        <Link key={index} to={routes[index]}>
          <div key={index} style={barStyle}>
            {icon}
          </div>
        </Link>
      ))}
    </div>
  );
}

const icons = [<HomeIcon />];
const routes = ["/", "/reservation", "/mypage"];

const menuStyle = {
  display: "grid",
  width: "320px",
  height: "44px",
  gridTemplateColumns: "auto",
  backgroundColor: "#FFFDFD",
  position: "absolute",
  bottom: "0",
  borderTop: "1px solid black",
};

const barStyle = {
  display: "flex",
  height: "44px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
};
