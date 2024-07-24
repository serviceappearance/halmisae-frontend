import CountPill from "./CountPill";
export default function InputSection({
  title,
  subtitle,
  point,
  onCountChange,
  value,
}) {
  const sectionStyle = {
    display: "grid",
    width: "287px",
    gridTemplateColumns: "1fr 1fr",
    placeItems: "center",
    margin: "0 16px",
  };
  return (
    <div style={sectionStyle}>
      <LabelSection title={title} subtitle={subtitle} />
      <CountPillSection
        point={point}
        onCountChange={onCountChange}
        value={value}
      />
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

function CountPillSection({ point, onCountChange, value }) {
  const sectionStyle = {
    display: "flex",
    width: "143px",
    height: "59px",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={sectionStyle}>
      <CountPill point={point} onCountChange={onCountChange} value={value} />
    </div>
  );
}
