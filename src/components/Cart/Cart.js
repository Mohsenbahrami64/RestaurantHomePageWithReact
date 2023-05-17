import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import caless from "./Cart.module.css";
import { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={caless["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  console.log("This is the total amount in the ", cartItems);
  const cartTotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  return (
    <Modal onClose={props.onClose}>
      <ul>{cartItems}</ul>
      <div className={caless.total}>
        <span>Total Amount</span>
        <span>{cartTotalAmount}</span>
      </div>
      <div className={caless.actions}>
        <button className={caless["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={caless.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
