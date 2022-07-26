import React from "react";
import { Modal, Header, Item } from "semantic-ui-react";

import CartItems from "./CartItems";

const CartModal = (props) => {
  console.log(props.cart, "cart info inside CartModal!!");

  return (
    <>
      {props.cart && props.cart.length > 0 ? (
        <>
          <Item.Group divided>
            {props.cart.map((item) => (
              <Item key={item.id}>
                <CartItems item={item} />
              </Item>
            ))}
          </Item.Group>
        </>
      ) : (
        <>
          <Modal.Header>Product Cart</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Your Cart is currently Empty</Header>
              <p>
                It would make you very happy if you added an item to the cart
              </p>
            </Modal.Description>
          </Modal.Content>
        </>
      )}
    </>
  );
};

export default CartModal;
