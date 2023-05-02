import Category from "./Category.jsx";

const Main = ({ data, isSelect, setIsSelect }) => {
  //   console.log(data.categories);
  return (
    <>
      <main>
        <section className="container">
          <div className="left-box">
            {data.categories.map((categories, index) => {
              // console.log(data.categories[index]);
              return (
                <Category
                  categories={categories}
                  key={data.id}
                  setIsSelect={setIsSelect}
                  isSelect={isSelect}
                />
              );
            })}
          </div>
          <div className="right-box">Oui</div>
        </section>
      </main>
    </>
  );
};

export default Main;
