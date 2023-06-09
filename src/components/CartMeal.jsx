const CartMeal = ({
  title,
  quantity,
  price,
  id,
  isSelect,
  setIsSelect,
  total,
  setTotal,
  index,
}) => {
  const handleClickMinus = () => {
    const newTab = [...isSelect];
    const existMeal = newTab.find((e) => e.id === id);
    existMeal.quantity--;
    const convNumber = Number(price);
    if (existMeal.quantity < 1) {
      const numFixed = convNumber.toFixed(2);

      setTotal(total - Number(numFixed));
      newTab.splice(index, 1);
      console.log("O quantity");
      setIsSelect(newTab);
    } else {
      const numFixed = convNumber.toFixed(2);
      console.log(Number(numFixed));
      setTotal(total - Number(numFixed));
      setIsSelect(newTab);
    }
  };

  const handleClickPlus = () => {
    const newTab = [...isSelect];
    const existMeal = newTab.find((e) => e.id === id);
    existMeal.quantity++;
    const convNumber = Number(price);
    const numFixed = convNumber.toFixed(2);

    setTotal(total + Number(numFixed));

    setIsSelect(newTab);
  };

  return (
    <div className="cart-meal">
      {isSelect ? (
        <div className="cart-meal-select">
          <div className="quantity-modif">
            <button
              onClick={() => {
                handleClickMinus();
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                handleClickPlus();
              }}
            >
              +
            </button>
          </div>
          <span className="desc-meal">{title}</span>
          <span>{price}</span>
        </div>
      ) : null}
    </div>
  );
};

export default CartMeal;
