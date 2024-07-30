import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { Link, useLocation } from "react-router-dom";

export default function MenuBar() {
  const location = useLocation();

  const getBarStyle = (path) => ({
    display: "flex",
    height: "44px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: location.pathname === path ? "#f0f0f0" : "white",
  });

  return (
    <div style={menuStyle}>
      {icons.map((icon, index) => (
        <Link key={index} to={routes[index]}>
          <div key={index} style={getBarStyle(routes[index])}>
            {icon}
          </div>
        </Link>
      ))}
    </div>
  );
}

const icons = [<HomeIcon />, <UserIcon />];
const routes = ["/", "/reservation-number"];

const menuStyle = {
  display: "grid",
  width: "320px",
  height: "44px",
  gridTemplateColumns: "1fr 1fr",
  backgroundColor: "#FFFDFD",
  position: "absolute",
  bottom: "0",
  borderTop: "1px solid black",
};
