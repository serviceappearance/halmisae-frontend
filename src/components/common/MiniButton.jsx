export default function MiniButton({ text }) {
  const buttonStyle = {
    display: "flex",
    width: "15px",
    height: "7px",
    padding: "0.5px 1.5px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "2px",
    border: "0.1px solid black",
    position: "absolute",
    right: "15.5px",
    top: "9.5px",
  };
  return (
    <div className="font-pill" style={buttonStyle} onClick={onClickHandler}>
      {text}
    </div>
  );
}

/* eslint-disable no-restricted-globals */
const onClickHandler = () => {
  var result = confirm("예약을 취소 하시겠습니까?");
  if (result) {
    alert("예약을 취소했습니다");
    // 예약 카드 삭제
  }
};
/* eslint-disable no-restricted-globals */
