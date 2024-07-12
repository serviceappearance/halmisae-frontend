import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";

export default function MenuBar() {
  const thisStyle = {
    display: "flex",
    width: "320px",
    height: "44px",
    alignItems: "center",
    backgroundColor: "blue",
    // backgroundColor: "#FFFDFD",
  };

  return (
    <div style={thisStyle}>
      <div
        style={{
          display: "flex",
          width: "64px",
          height: "44px",
          paddingX: "15px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <HomeIcon />
      </div>
      <SearchIcon />
      <ClockIcon />
      <CheckIcon />
      <UserIcon />
    </div>
  );
}
