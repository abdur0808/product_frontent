import React, { useEffect } from "react";
import { Button, Modal, Item, Icon, Dropdown } from "semantic-ui-react";

const sizes = [
  { key: 1, text: "large", value: "large" },
  { key: 2, text: "medium", value: "medium" },
  { key: 3, text: "small", value: "small" },
];
const colors = [
  { key: 1, text: "white", value: "white" },
  { key: 2, text: "red", value: "red" },
  { key: 2, text: "blue", value: "blue" },
  { key: 3, text: "green", value: "green" },
  { key: 1, text: "black", value: "black" },
  { key: 2, text: "gray", value: "gray" },
  { key: 3, text: "green", value: "green" },
];

const CartModal = (props) => {
  console.log(props.product, "product!");
  useEffect(() => {
    console.log("1 ", props.addToCartButton);
  });
  const handelAddToCart = () => {
    props.onAddToCart();
  };
  const handelRemoveToCart = () => {
    props.onRemoveToCart();
  };

  return (
    <>
      <Modal.Header>{props.product.name}</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <div className="product--detail-wrapper">
            <div className="product--image">
              <Item.Image
                size="big"
                src={"/images/" + props.product.imageId + ".jpg"}
              />
            </div>
            <div className="product--description">
              <div className="description">
                {/* <p>{props.product.description}</p> */}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap i
                </p>
              </div>
              <div className="product-price">
                <h1 floated="right">${props.product.price}</h1>
              </div>
              <div className="product-variant">
                <Dropdown
                  placeholder="Select size"
                  defaultValue={props.product.size}
                  options={sizes}
                  selection
                />
              </div>
              <div className="product-variant">
                <Dropdown
                  placeholder="Select Color"
                  defaultValue={props.product.color}
                  options={colors}
                  selection
                />
              </div>
              <div className="product--addTo-cart">
                <Button
                  fluid
                  className="add-button"
                  onClick={
                    props.addToCartButton ? handelAddToCart : handelRemoveToCart
                  }
                >
                  {props.addToCartButton ? "Add to Cart" : "Remove to Cart"}
                  <Icon name="arrow right" />
                </Button>
              </div>
            </div>
          </div>

          <Item.Content verticalAlign="middle">
            <Item.Extra className="item-total"></Item.Extra>
          </Item.Content>
        </Modal.Description>
      </Modal.Content>
    </>
  );
};

export default CartModal;
