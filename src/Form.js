import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";

const Error = styled.p`
    color: red;
    font-size: 0.8rem;
`

const Header = styled.h2`
    font-size: 1.4rem;
    display: flex;
    font-family: 'Montserrat';
    padding-left: 15px;
    margin-bottom: -10px;
`

const PizzaForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    border: 1px solid grey;
    margin: 0 auto;
    font-family: 'Roboto';
    margin-top: 30px;
`

const SaucesToppings = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 135px;
    justify-content: space-around;
    padding-left: 15px;
`

const CatHeads = styled.h4`
    font-size: 1rem;
    width: 97.4%;
    background-color: lightgrey;
    padding: 15px;
    margin-top: 40px;
    height: 30px;

`

const Para = styled.p`
    font-size: 0.8rem;
    color: red;
    margin-top: -44px;
    padding-left: 16px;
`

const Instructions = styled.textarea`
    width: 97%;
    resize: none;
    border-radius: 5px;
    height: 75px;
    margin-left: 12px;
    font-size: .9rem;
`

const Size = styled.select`
    font-size: 1rem;
    margin-left: 15px;
    margin-top: 25px;
    margin-bottom: -10px;
    width: 250px;
    border-radius: 2px;
    border: 1px solid black;
    background-color: transparent;
    height: 30px;
`

const Button = styled.button`
    font-size: 1rem;
    width: 97.5%;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
`

// validation schema
const formSchema = yup.object().shape({
    name: yup.string().min(2, "Name must be at least 2 characters").required("Please enter your name"),
    size: yup.string().required("Please choose a size"),
    original: yup.boolean(),
    garlic: yup.boolean(),
    bbq: yup.boolean(),
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
        <PizzaForm onSubmit={formSubmit}>
            <Header>Build Your Own Pizza</Header>
                <div className="size">
                <CatHeads>Choice of Size</CatHeads>
                <Para>Required</Para>
                <label htmlFor="size">
                    <Size
                        name="size"
                        id="size"
                        value={formState.size}
                        onChange={changeHandler}
                    >
                        <option value="">Select a size...</option>
                        <option value="small">Small...10 inch</option>
                        <option value="medium">Medium...14 inch</option>
                        <option value="large">Large...16 inch</option>
                    </Size>
                    {errorState.name.length > 0 ?(<Error className="error">{errorState.size}</Error>) : null}
                </label>
                </div>

                <CatHeads>Choose Your Sauce</CatHeads>
                <Para>Required</Para>
            <SaucesToppings> 
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
                <label htmlFor="bbq">
                    <input 
                        type="checkbox"
                        name="bbq"
                        id="bbq"
                        checked={formState.bbq}
                        onChange={changeHandler}
                        value="bbq"
                    />
                        BBQ Sauce
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
                {errorState.name.length > 0 ?(<Error className="error">{errorState.sauce}</Error>) : null}
                </SaucesToppings>


                <div className="toppings">
                <CatHeads>Add Toppings</CatHeads>
                <Para>Choose up to 5</Para>
                <SaucesToppings>
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
                </SaucesToppings>
                </div>
                <div className="instructions"> 
                <CatHeads>Special Instructions?</CatHeads>
                <label htmlFor="instructions">
                    <Instructions 
                        type="text"
                        id="instructions"
                        name="instructions"
                        value={formState.instructions}
                        onChange={changeHandler}
                        placeholder="Anything else you'd like to add?"    
                    />
                </label>
                {/* <label htmlFor="name">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={changeHandler}
                        placeholder="Full Name"
                        />
                        {errorState.name.length > 0 ?(<Error className="error">{errorState.name}</Error>) : null}
                </label> */}
                </div>
                <Button disabled={buttonDisabled}>Add to Order</Button>
                {/* <pre>{JSON.stringify(orders, null, 2)}</pre> */}
        </PizzaForm>

    )
}