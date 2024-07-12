export default function Comment({ title, content }) {
  const commentStyle = {
    position: "absolute",
    top: "8px",
    left: "8px",
  };
  return (
    <div style={commentStyle}>
      <div className="font-store-comment1">{title}</div>
      <div className="font-store-comment2">{content}</div>
    </div>
  );
}
