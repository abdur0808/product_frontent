import React, { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";
import { Card, Image, Button, Icon, Modal } from "semantic-ui-react";

const ProductCard = (props) => {
  const [addToCartButton, setAddToCartButton] = useState(true);
  const selectedProduct = [];
  const handelAddToCart = () => {
    selectedProduct.push(props.product);
    props.onAddToCart(props.product);
    setAddToCartButton(!addToCartButton);
    console.log("click");
  };
  const handelRemoveToCart = () => {
    //setSelectedProduct()
    props.onRemoveToCart(props.product);
    setAddToCartButton(!addToCartButton);
  };
  const productDetail = () => {
    return <Button content="View Product" primary />;
  };
  return (

    <Card>
      <Image src={"/images/" + props.product.imageId + ".jpg"} />
      <Card.Content>
        <Card.Header>{props.product.name}</Card.Header>
        <Card.Meta>{props.product.price}</Card.Meta>
        <Card.Description>{props.product.description}</Card.Description>
      </Card.Content>
      <Modal
        trigger={productDetail()}
        className="cart-model product--detail-modal"
        size="fullscreen"
        closeIcon
      >
        <ProductDetailModal
          onAddToCart={handelAddToCart}
          onRemoveToCart={handelRemoveToCart}
          addToCartButton={addToCartButton}
          product={props.product}
        />
      </Modal>

      <Button
        fluid
        className="add-button"
        onClick={addToCartButton ? handelAddToCart : handelRemoveToCart}
      >
        {addToCartButton ? "Add to Cart" : "Remove to Cart"}
        <Icon name="arrow right" />
      </Button>
    </Card>
  );
};

export default ProductCard;
