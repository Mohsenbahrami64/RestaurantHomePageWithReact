import Modal from "../UI/Modal";
import caless from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: "2", price: "12" }].map(
    (item) => {
      <li> {item.name}</li>;
    }
  );
  return (
    <Modal onClose={props.onClose}>
      <ul>{cartItems}</ul>
      <div className={caless.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={caless.actions}>
        <button className={caless["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={caless.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
