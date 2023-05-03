const Meal = ({ meals, isSelect, setIsSelect, total, setTotal }) => {
  //   console.log("Titre :" + meals);

  const handleClick = () => {
    const newTab = [...isSelect];
    const existMeal = newTab.find((e) => e.id === meals.id);
    const numberPrice = Number(meals.price);
    if (existMeal) {
      existMeal.quantity++;
      setTotal(total + numberPrice);
    } else {
      newTab.push({
        id: meals.id,
        title: meals.title,
        price: meals.price,
        quantity: 1,
      });
      setTotal(total + numberPrice);
    }
    // console.log(total);
    setIsSelect(newTab);
    // console.log(isSelect);
  };

  return (
    <>
      <div
        className="meal"
        onClick={() => {
          handleClick();
        }}
      >
        <div className="meal-text-box">
          <h3>{meals.title}</h3>
          <p className="meal-descr">{meals.description}</p>
          <p className="meal-price">{meals.price} €</p>
        </div>
        {meals.picture ? (
          <img src={meals.picture} alt={"Photo de " + meals.title} />
        ) : null}
      </div>
    </>
  );
};

export default Meal;
