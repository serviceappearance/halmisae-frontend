import MenuBar from "../common/MenuBar";
import PageHeader from "../common/PageHeader";
import { ReactComponent as BookmarkIcon } from "../../assets/icons/bookmark.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/star-mypage.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user-mypage.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";

export default function MyPage() {
  return (
    <div className="style-page">
      <PageHeader text={"마이페이지"} />
      {sectionValue.map((value, index) => (
        <PageSection key={index} icon={value.icon} text={value.text} />
      ))}
      <PageSection />
      <MenuBar />
    </div>
  );
}

const PageSection = ({ icon, text }) => {
  const sectionStyle = {
    display: "grid",
    width: "320px",
    height: "60px",
    gridTemplateColumns: "61px 259px",
    borderBottom: "0.1px solid black",
  };
  const iconBlockStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const textBlockStyle = {
    display: "flex",
    padding: "0 0 0 15px",
    alignItems: "center",
  };
  return (
    <div style={sectionStyle}>
      <div style={iconBlockStyle}>{icon}</div>
      <div className="font-body1" style={textBlockStyle}>
        {text}
      </div>
    </div>
  );
};

const sectionValue = [
  {
    icon: <BookmarkIcon />,
    text: "찜 목록",
  },
  {
    icon: <StarIcon />,
    text: "사용내역 및 별점",
  },
  {
    icon: <UserIcon />,
    text: "회원정보 수정",
  },
  {
    icon: <LogoutIcon />,
    text: "로그아웃",
  },
];
