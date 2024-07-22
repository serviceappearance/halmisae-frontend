import FilterCategoryIcon from "../common/FilterCategoryIcon";
export default function CategoryBar({ category }) {
  return (
    <div style={categoryBarStyle}>
      <div style={categoryListStyle}>
        {category.map((item, index) => (
          <FilterCategoryIcon key={index} text={item} />
        ))}
      </div>
    </div>
  );
}

const categoryBarStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "0 0 5px 0",
};

const categoryListStyle = {
  display: "flex",
  gap: "17px",
};
