import React from 'react';

import Aux from "../../../hoc/Auxiliaty"

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
            <p>Continue the checkout</p>
        </Aux>
    )
}

export default orderSumamry;