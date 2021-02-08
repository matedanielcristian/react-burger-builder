import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliaty';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
 

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0,
        },
        totalPrice: 4 
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        var updatedCount = oldCount + 1;
        var updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        var newPrice = oldPrice + priceAddition;
        console.log("updatedIngredients" , updatedIngredients);
        this.setState({ totalPrice : newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHanler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        var updatedCount = oldCount - 1;
        var updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        var newPrice = oldPrice - priceAddition;
        console.log("updatedIngredients" , updatedIngredients);
        this.setState({ totalPrice : newPrice, ingredients: updatedIngredients});
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                disabled={disabledInfo}
                ingredientAdded={this.addIngredientHandler}
                ingredeintRemoved={this.removeIngredientHanler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;