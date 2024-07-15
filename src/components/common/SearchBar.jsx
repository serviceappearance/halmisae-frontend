import { ReactComponent as SearchIcon } from "../../assets/icons/search-small.svg";
export default function SearchBar() {
  const searchBarStyle = {
    display: "flex",
    width: "299px",
    height: "22px",
    alignItems: "center",
    gap: "10px",
    border: "0.5px solid black",
    borderRadius: "5px",
    padding: "4px 0px 4px 8px",
    margin: "5px 0 5px 0",
  };
  const inputStyle = {
    width: "250px",
    height: "20px",
    border: "none",
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={searchBarStyle}>
        <SearchIcon />
        <input
          type="text"
          style={inputStyle}
          className="font-search-input"
          placeholder="가게이름 검색"
        />
      </div>
    </div>
  );
}
