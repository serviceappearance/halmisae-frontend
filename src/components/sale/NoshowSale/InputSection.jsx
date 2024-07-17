import CountPill from "./CountPill";
export default function InputSection({ title, subtitle }) {
  const sectionStyle = {
    display: "grid",
    width: "287px",
    gridTemplateColumns: "1fr 1fr",
    placeItems: "center",
  };
  return (
    <div style={sectionStyle}>
      <LabelSection title={title} subtitle={subtitle} />
      <CountPillSection />
    </div>
  );
}

const LabelSection = ({ title, subtitle }) => {
  const sectionStyle = {
    width: "57px",
    height: "23px",
  };
  return (
    <div style={sectionStyle}>
      <div className="font-count-label-title">{title}</div>
      <div className="font-count-label-sub">기본 {subtitle}</div>
    </div>
  );
};

function CountPillSection() {
  const sectionStyle = {
    display: "flex",
    width: "143px",
    height: "59px",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={sectionStyle}>
      <CountPill />
    </div>
  );
}
