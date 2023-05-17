import caless from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: "2", price: "12" }].map(
    (item) => {
      <li> {item.name}</li>;
    }
  );
  return (
    <div>
      <ul>{cartItems}</ul>
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={caless.action}>
        <button className={caless["button--alt"]}>Close</button>
        <button className={caless.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
