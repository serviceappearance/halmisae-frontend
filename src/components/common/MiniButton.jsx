export default function MiniButton({ text, onCancel }) {
  const buttonStyle = {
    display: "flex",
    width: "fit-content",
    height: "fit-content",
    padding: "1px 1.5px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "2px",
    border: "0.1px solid black",
    position: "absolute",
    right: "15.5px",
    top: "9.5px",
    cursor: "pointer",
  };
  return (
    <div className="font-caption" style={buttonStyle} onClick={onCancel}>
      {text}
    </div>
  );
}
