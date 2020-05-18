import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";


// validation schema
const formSchema = yup.object().shape({
    name: yup.string().required(),
    size: yup.string(),
    toppings: yup.boolean()
})


export default function Form() {

    //  to reuse
    const initialState = {
        name: "",
        size: "",
        sauce: "",
        toppings: "",
        instructions: ""
    };

    const [formState, setFormState] = useState(initialState);
    const [errorState, setErrorState] = useState(initialState);


    const changeHandler = e => {
        e.persist();
        // add validation
    }

    return (
        <form>
            <h1>Build Your Own Pizza</h1>
                <label htmlFor="name">
                    Name:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={changeHandler}
                        />
                </label>
                <div className="size">
                 <h3>Choose Your Size</h3>
                <label htmlFor="size">
                    <select
                        name="size"
                        id="size"
                        value={formState.size}
                        onChange={changeHandler}
                    >
                        <option value="">Select pizza size...</option>
                        <option value="small">Small...10 inch</option>
                        <option value="medium">Medium...14 inch</option>
                        <option value="large">Large...16 inch</option>
                    </select>
                </label>
                </div>
            <div className="sauce"> 
                <h3>Choose Your Sauce:</h3>
                <label htmlFor="sauce">
                    <input 
                        type="radio"
                        name="sauce"
                        id="sauce"
                        checked={formState.sauce}
                        onChange={changeHandler}
                        value="original"
                    />
                        Original Red
                </label>
                <label htmlFor="sauce">
                    <input 
                        type="radio"
                        name="sauce"
                        id="sauce"
                        checked={formState.sauce}
                        onChange={changeHandler}
                        value="garlic"
                    />
                        Garlic Ranch
                </label>
                <label htmlFor="sauce">
                    <input 
                        type="radio"
                        name="sauce"
                        id="sauce"
                        checked={formState.sauce}
                        onChange={changeHandler}
                        value="bbq"
                    />
                        BBQ Sauce
                </label>
                <label htmlFor="sauce">
                    <input 
                        type="radio"
                        name="sauce"
                        id="sauce"
                        checked={formState.sauce}
                        onChange={changeHandler}
                        value="spinach"
                    />
                        Spinach Alfredo
                </label>
                </div>
                <div className="toppings">
                <h3>Add Toppings</h3>
                <label htmlFor="toppings">
                    <input 
                        type="checkbox"
                        id="pepperoni"
                        name="pepperoni"
                        checked={formState.toppings}
                        onChange={changeHandler}
                    />
                    Pepperoni
                </label>
                <label htmlFor="toppings">
                    <input 
                        type="checkbox"
                        id="sausage"
                        name="sausage"
                        checked={formState.toppings}
                        onChange={changeHandler}
                    />
                    Sausage
                </label>
                <label htmlFor="toppings">
                    <input 
                        type="checkbox"
                        id="jalapeno"
                        name="jalapeno"
                        checked={formState.toppings}
                        onChange={changeHandler}
                    />
                    Jalapeños
                </label>
                <label htmlFor="toppings">
                    <input 
                        type="checkbox"
                        id="onion"
                        name="onion"
                        checked={formState.toppings}
                        onChange={changeHandler}
                    />
                    Onions
                </label>
                <label htmlFor="toppings">
                    <input 
                        type="checkbox"
                        id="bellpeppers"
                        name="bellpeppers"
                        checked={formState.toppings}
                        onChange={changeHandler}
                    />
                    Bell Peppers
                </label>
                </div>
                <div className="instructions"> 
                <h3>Special Instructions?</h3>
                <label htmlFor="instructions">
                    <input 
                        type="text"
                        id="instructions"
                        name="instructions"
                        value={formState.instructions}
                        onChange={changeHandler}
                        placeholder="Anything else you would like to add?"    
                    />
                </label>
                </div>
                <button>Submit Order</button>
        </form>

    )
}