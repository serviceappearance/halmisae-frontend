import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";

const MenuStyle = {
  display: "flex",
  width: "320px",
  height: "44px",
  alignItems: "center",
  backgroundColor: "#FFFDFD",
  position: "absolute",
  bottom: "0",
};

const barStyle = {
  display: "flex",
  width: "64px",
  height: "44px",
  paddingX: "15px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
};

const icons = [
  <HomeIcon />,
  <SearchIcon />,
  <ClockIcon />,
  <CheckIcon />,
  <UserIcon />,
];

export default function MenuBar() {
  return (
    <div style={MenuStyle}>
      {icons.map((icon, index) => (
        <div
          key={index}
          style={barStyle}
          onClick={() => {
            console.log(`${index} clicked`);
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}
