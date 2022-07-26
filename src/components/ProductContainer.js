import * as utility from "../configuration";

import {
  fetchProductAction,
  sortProductAction,
  searchProductAction,
} from "../redux/slices/productSlices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductCard from "./ProductRow";
import CartModal from "./CartModal";

import {
  Grid,
  Divider,
  Icon,
  Modal,
  Label,
  Dropdown,
  Button,
  GridRow,
} from "semantic-ui-react";

function ProductContainer(props) {
  //select state from store
  const state = useSelector((state) => state);

  //set initial state
  const { productCollections, loading, error } = state;
  const [productDetails, setProductDetails] = useState([]);
  const [addToCart, setAddToCart] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const dropDownValues = [
    { value: "1", text: "Product (A to Z)" },
    { value: "2", text: "Product (Z to A)" },
    { value: "3", text: "Price (low to high)" },
    { value: "4", text: "Price (high to low)" },
  ];
  const [selectddValues, setSelectddValues] = useState("1");

  //Dispatch action
  const dispatch = useDispatch();

  //Fetch product details
  useEffect(() => {
    dispatch(fetchProductAction());
  }, [dispatch, fetchProductAction]);

  useEffect(() => {
    setProductDetails(productCollections);
  }, [productCollections]);

  const AddToCart = (id) => {
    setAddToCart(addToCart + 1);
    setSelectedProduct([...selectedProduct, id]);
  };
  const RemoveToCart = (id) => {
    setAddToCart(addToCart - 1);

    setSelectedProduct((current) =>
      current.filter((productitem) => {
        // 👇️ remove object that has id equal to 2
        return productitem.id !== id.id;
      })
    );
  };

  const iconDisplay = () => {
    return (
      <Label color="green">
        <Icon name="shopping cart" size="big" />
        {addToCart}
      </Label>
    );
  };

  const productDetail = () => {
    return <Button content="View Product" primary />;
  };

  const handleDropDownSelect = (event, data) => {
    setSelectddValues(data.value);
    dispatch(sortProductAction(selectddValues));
  };

  const handleSearchChange = (event, data) => {
    dispatch(searchProductAction(event));
  };

  return (
    <div>
      <div className="header--wrapar">
        <div className="product--search">
          <input
            width="100%"
            type="search"
            placeholder="Search product by name , size  and  color..."
            onChange={(e) => {
              handleSearchChange(e.target.value);
            }}
          />
        </div>
        <div className="product--filter">
          <label>filter</label>
          <Dropdown
            className="ui primary"
            onChange={handleDropDownSelect}
            options={dropDownValues}
            value={selectddValues}
          />
        </div>
        <div className="product--cart">
          <Modal trigger={iconDisplay()} className="cart-model" closeIcon>
            <CartModal cart={selectedProduct} emptyCart={props.emptyCart} />
          </Modal>
        </div>
      </div>

      <Divider horizontal>Shop All Proudcts</Divider>
      <Grid stackable columns="equal" centered>
        {productCollections !== undefined &&
          productCollections.map((product) => (
            <Grid.Column width={4} key={product.id}>
              <ProductCard
                product={product}
                onAddToCart={AddToCart}
                onRemoveToCart={RemoveToCart}
              />
            </Grid.Column>
          ))}
      </Grid>
    </div>
  );
}

export default ProductContainer;
