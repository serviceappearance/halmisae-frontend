export default function SaleSubArea({ icon, text }) {
  return (
    <div style={AreaStyle}>
      <IconArea icon={icon} />
      <div style={textAreaStyle}>{text}</div>
    </div>
  );
}

const IconArea = ({ icon }) => {
  return <div style={iconAreaStyle}>{icon}</div>;
};

const AreaStyle = {
  display: "flex",
  alignItems: "center",
  margin: "0 0 9px 0",
};

const iconAreaStyle = {
  width: "21px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const textAreaStyle = {
  width: "125px",
};
