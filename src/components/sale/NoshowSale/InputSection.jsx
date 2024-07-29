import CountPill from "./CountPill";
export default function InputSection({
  title,
  subtitle,
  point,
  onCountChange,
  value,
  secondSubTitle,
}) {
  const sectionStyle = {
    display: "grid",
    width: "287px",
    gridTemplateColumns: "1fr 1fr",
    placeItems: "center",
    margin: "0 16px",
  };

  const initialValue =
    title === "이용시간" ? value : title === "인원" ? value : 0;

  return (
    <div style={sectionStyle}>
      <LabelSection
        title={title}
        subtitle={subtitle}
        secondSubTitle={secondSubTitle}
      />
      <CountPillSection
        point={point}
        onCountChange={onCountChange}
        value={initialValue}
      />
    </div>
  );
}

const LabelSection = ({ title, subtitle, secondSubTitle }) => {
  const sectionStyle = {
    width: "57px",
    height: "23px",
  };
  return (
    <div style={sectionStyle}>
      <div className="font-count-label-title">{title}</div>
      <div className="font-count-label-sub">기본 {subtitle}</div>
      {secondSubTitle && (
        <div className="font-count-label-sub">
          {secondSubTitle.unitTime}분 당 {secondSubTitle.discount}원
        </div>
      )}
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
