import Category from "./Category.jsx";
import Cart from "./Cart.jsx";

const Main = ({ data, isSelect, setIsSelect, total, setTotal }) => {
  //   console.log(data.categories);
  return (
    <>
      <main>
        <section className="container">
          <div className="left-box">
            {data.categories.map((categories, index) => {
              // console.log(data.categories[index]);
              console.log(categories);
              return (
                <>
                  {categories.meals.length > 0 ? (
                    <Category
                      categories={categories}
                      key={data.id}
                      setIsSelect={setIsSelect}
                      isSelect={isSelect}
                      total={total}
                      setTotal={setTotal}
                    />
                  ) : null}
                </>
              );
            })}
          </div>
          <div className="right-box">
            <Cart
              isSelect={isSelect}
              setIsSelect={setIsSelect}
              total={total}
              setTotal={setTotal}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
