import CartMeal from "./CartMeal.jsx";

const Cart = ({ isSelect, setIsSelect, total, setTotal }) => {
  //   console.log(isSelect.length);
  return (
    <section className="cart">
      <div>
        {isSelect.length > 0 ? (
          <p className="cart-text">Valider mon panier</p>
        ) : (
          <div className="cart-empty">
            <p className="cart-text-empty">Panier vide</p>
            <p className="cart-meal-not-select"> Votre panier est vide</p>{" "}
          </div>
        )}
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
          <>
            <div className="cart-detail">
              <p className="cart-detail-text">
                Sous-total <span>{total.toFixed(2)} €</span>
              </p>

              <p className="cart-detail-text">
                Frais de livraison<span>5,60 €</span>
              </p>
            </div>{" "}
            <div className="total-select">
              <p className="cart-detail-text">
                Total<span>{(Number(total) + 5.6).toFixed(2)} €</span>
              </p>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Cart;
