
import React, { useState } from 'react';
import { Card, Image, Button, Icon, Dropdown } from 'semantic-ui-react';


const ProductCard = (props) => {
    const [addToCartButton, setAddToCartButton] = useState(true);
    //const [selectedProduct, setSelectedProduct] = useState([])

    const selectedProduct = [];
    const handelAddToCart = ()=> {
        
        selectedProduct.push(props.product)
        props.onAddToCart(props.product);
        setAddToCartButton(!addToCartButton);
        
    }
    const handelRemoveToCart = ()=> {
        //setSelectedProduct()
        props.onRemoveToCart(props.product);
        setAddToCartButton(!addToCartButton);
    }
    
    return (
        // <Grid.Column width={5}>
            <Card >
                <Image src={"/images/"+ props.product.imageId+".jpg"} />
                <Card.Content>
                <Card.Header>{props.product.name}</Card.Header>
                <Card.Meta>{props.product.price}</Card.Meta>
                <Card.Description>{props.product.description}</Card.Description>
                </Card.Content>


                <Button fluid className='add-button' onClick={addToCartButton ? handelAddToCart : handelRemoveToCart}>
                    {addToCartButton ? 'Add to Cart' : 'Remove to Cart' }
                    <Icon name='arrow right' />
                </Button>
            </Card>

            
        // </Grid.Column>
    );
};

export default ProductCard;