import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";


// validation schema
const formSchema = yup.object().shape({
    name: yup.string().min(2, "Name must be at least 2 characters").required("Please enter your name"),
    size: yup.string().required("Please choose a size"),
    original: yup.boolean(),
    garlic: yup.boolean(),
    spinach: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    jalepenos: yup.boolean(),
    bellpeppers: yup.boolean(),
    instructions: yup.string()
})


export default function Form() {

    //  to reuse
    const initialState = {
        name: "",
        size: "",
        instructions: ""
    };

    const [formState, setFormState] = useState(initialState);
    const [errorState, setErrorState] = useState(initialState);
    const [buttonDisabled, setButtonDisabled] = useState(true);


    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    const validate = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrorState({
                    ...errorState, [e.target.name]: ""
                });
            })
            .catch(err => {
                console.log(err.errors);
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                });
            });
    };


    const changeHandler = e => {
        e.persist();

        console.log("change input")

        const  newFormData = {
            ...formState, [e.target.name] :
            e.target.type === "checkbox" ? e.target.checked : e.target.value };

            validate(e);
            setFormState(newFormData);
    };



    const [orders, setOrders] = useState([]);

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("Order Submitted!");

        axios
            .post("https://reqres.in/api/users", formState)
            .then((response) => {
                setOrders([...orders, response.data]);
                setFormState(initialState);
                console.log(response);
            })
            .catch((err) => console.log(err.response));
    }

    return (
        <form onSubmit={formSubmit}>
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
                        {errorState.name.length > 0 ?(<p className="error">{errorState.name}</p>) : null}
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
                    {errorState.name.length > 0 ?(<p className="error">{errorState.size}</p>) : null}
                </label>
                </div>
            <div className="sauce"> 
                <h3>Choose Your Sauce:</h3>
                <label htmlFor="original">
                    <input 
                        type="checkbox"
                        name="original"
                        id="original"
                        checked={formState.original}
                        onChange={changeHandler}
                        value="original"
                    />
                        Original Red
                </label>
                <label htmlFor="garlic">
                    <input 
                        type="checkbox"
                        name="garlic"
                        id="garlic"
                        checked={formState.garlic}
                        onChange={changeHandler}
                        value="garlic"
                    />
                        Garlic Ranch
                </label>
                <label htmlFor="spinach">
                    <input 
                        type="checkbox"
                        name="spinach"
                        value="spinach"
                        checked={formState.spinach}
                        onChange={changeHandler}
                        value="spinach"
                    />
                        Spinach Alfredo
                </label>
                {errorState.name.length > 0 ?(<p className="error">{errorState.sauce}</p>) : null}
                </div>


                <div className="toppings">
                <h3>Add Toppings</h3>
                <label htmlFor="pepperoni">
                    <input 
                        type="checkbox"
                        value="pepperoni"
                        name="pepperoni"
                        checked={formState.pepperoni}
                        onChange={changeHandler}
                    />
                    Pepperoni
                </label>
                <label htmlFor="sausage">
                    <input 
                        type="checkbox"
                        value="sausage"
                        name="sausage"
                        checked={formState.sausage}
                        onChange={changeHandler}
                    />
                    Sausage
                </label>
                <label htmlFor="jalepenos">
                    <input 
                        type="checkbox"
                        value="jalapenos"
                        name="jalepenos"
                        checked={formState.jalepenos}
                        onChange={changeHandler}
                    />
                    Jalapeños
                </label>
                <label htmlFor="onions">
                    <input 
                        type="checkbox"
                        value="onions"
                        name="onions"
                        checked={formState.onions}
                        onChange={changeHandler}
                    />
                    Onions
                </label>
                <label htmlFor="bellpeppers">
                    <input 
                        type="checkbox"
                        value="bellpeppers"
                        name="bellpeppers"
                        checked={formState.bellpeppers}
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
                <button disabled={buttonDisabled}>Submit Order</button>
                <pre>{JSON.stringify(orders, null, 2)}</pre>
        </form>

    )
}