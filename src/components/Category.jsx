import Meal from "./Meal.jsx";

const Category = ({ categories, isSelect, setIsSelect, total, setTotal }) => {
  //   console.log("Categories: " + categories);
  //   console.log(categories.name);
  return (
    <>
      <div className="categories">
        <h2>{categories.name}</h2>
        <div className="meals">
          {categories.meals.map((meals, index) => {
            // console.log(categories.name);
            return (
              <Meal
                meals={meals}
                key={categories.id}
                setIsSelect={setIsSelect}
                isSelect={isSelect}
                total={total}
                setTotal={setTotal}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
