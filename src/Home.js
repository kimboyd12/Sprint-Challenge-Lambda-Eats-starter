import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="header">
            <h1>Lambda Eats</h1>
                <Link to="/order">
                    <button>Order Now!!!</button>
                </Link>
        </div>
    )
}