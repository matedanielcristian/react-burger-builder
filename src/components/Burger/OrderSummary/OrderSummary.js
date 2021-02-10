import React from 'react';

import Aux from "../../../hoc/Auxiliaty"
import Button from "../../UI/Button/Button"


const orderSumamry = (props) =>  {
    let ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    })



    return (
        <Aux>
            <h3>
                Your order
            </h3>
            <p>A delicious buger with the followng ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue the checkout</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button  btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSumamry;