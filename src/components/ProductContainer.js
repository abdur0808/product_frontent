import * as utility from "../configuration";

import {
  fetchPostCodeAction,
  fetchPostCodeListAction,
} from "../redux/slices/postCodeSlices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductCard from './ProductRow';
import CartModal from './CartModal'

import { Image, Grid, Divider } from 'semantic-ui-react';
import { Menu, Icon, Segment, Input, Modal, Label } from 'semantic-ui-react'

import { Button } from 'semantic-ui-react'

import styled from "styled-components";

function ProductContainer(props) {
  //select state from store
  const state = useSelector((state) => state);

  //set initial state
  const { postCodeDetails, loading, error } = state;
  const [productDetails, setProductDetails] = useState([]);
  const [addToCart, setAddToCart] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);
  

  //Dispatch action
  const dispatch = useDispatch();

  //Fetch postcode details and set location area
  useEffect(() => {
    dispatch(fetchPostCodeAction());
  }, [dispatch, fetchPostCodeAction]);

  useEffect(() => {
    setProductDetails(postCodeDetails);
  }, [postCodeDetails]);

  //Get the result from the api and set the result in the callback function
  // const callbackFunction = (data) => {
  //   const postCodeData = data?.payload.result;
  //   let postCodeList = postCodeData?.map((key) => ({
  //     label: key,
  //     value: key,
  //   }));
  //   setListOfCity(postCodeList);
  // };

  //Handel postcode value from searchbar and Fetch result from PostcodeList API
  const handleInputChange = (newValue) => {

  };

  const AddToCart = (id) => {
    setAddToCart( addToCart+ 1);
    setSelectedProduct([...selectedProduct, id]);

    console.log('selectedProduct-- ', selectedProduct);
}
const RemoveToCart = (id) => {
  setAddToCart(addToCart - 1)

  setSelectedProduct(current =>
    current.filter(productitem => {
      // 👇️ remove object that has id equal to 2
      return productitem.id !== id.id;
    }),
  );
  console.log('selectedProduct 5 ', selectedProduct);

}



const iconDisplay = () => {
  return (
          <Label color='green' >
                    <Icon name='shopping cart' size='big'/>
                    {addToCart}
                </Label>
  )
}

const productDetail = () => {
    return (
      <Button content='View Product' primary />
    )
}
  

  return (
    <div>
              

                <Modal trigger={iconDisplay()} className='cart-model' closeIcon>
                        <CartModal cart={selectedProduct} emptyCart={props.emptyCart}/>
                </Modal>

                <select class="ui dropdown">
  <option value="">Gender</option>
  <option value="1">Male</option>
  <option value="0">Female</option>
</select>

      <Divider horizontal>Shop All Proudcts</Divider>
            <Grid stackable columns='equal' centered>
                { postCodeDetails !== undefined &&
                  postCodeDetails.map(product => <Grid.Column width={4} key={product.id}>
                    <ProductCard 
                      product={product}
                      onAddToCart={AddToCart}
                      onRemoveToCart={RemoveToCart}
                     />
                  </Grid.Column>)
                  }
                
            </Grid>

            
    
    </div>
  );
}

export default ProductContainer;