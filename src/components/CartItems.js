import React, { useContext } from 'react';
import { Item, Header, Button, Icon, Input } from 'semantic-ui-react';

const CartItems = (props) => {

    // console.log(props, 'props from line_items')

    

    return (
        <>
            <Item.Image size='tiny' src={"/images/"+ props.item.imageId+".jpg"} />
            <Item.Content verticalAlign='middle'>
                <Item.Header>{props.item.name}</Item.Header>
                <Item.Meta>
                    <span>check in future</span>
                </Item.Meta>
                
                <Item.Extra className='item-total'>
                    <Header floated='right'>${props.item.price}</Header>
                </Item.Extra>
            </Item.Content>
        </>
    );
};

export default CartItems;