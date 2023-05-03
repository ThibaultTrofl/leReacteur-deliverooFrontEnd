import CartMeal from "./CartMeal.jsx";

const Cart = ({ isSelect, setIsSelect, total, setTotal }) => {
  //   console.log(isSelect.length);
  return (
    <section className="cart">
      <div>
        {isSelect.length > 0 ? (
          <p className="cart-text">Valider mon panier</p>
        ) : null}
        {isSelect.map((data, index) => {
          //   console.log("titre : " + data.title);
          return (
            <CartMeal
              title={data.title}
              quantity={data.quantity}
              price={data.price}
              key={data.id}
              id={data.id}
              isSelect={isSelect}
              setIsSelect={setIsSelect}
              total={total}
              setTotal={setTotal}
              index={index}
            />
          );
        })}
        {isSelect.length > 0 ? (
          <p className="cart-text">
            Sous-total <span>{total} €</span>
          </p>
        ) : null}
        {isSelect.length > 0 ? (
          <p className="cart-text">Frais de livraison</p>
        ) : null}
      </div>
    </section>
  );
};

export default Cart;
