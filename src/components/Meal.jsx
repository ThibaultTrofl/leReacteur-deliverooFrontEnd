const Meal = ({ meals, isSelect, setIsSelect }) => {
  //   console.log("Titre :" + meals);

  const handleClick = () => {
    const newTab = [...isSelect];
    newTab.push(meals.id);
    setIsSelect(newTab);
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
