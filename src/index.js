import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

//1 inline style
// obj in js
// const obj = { color: "red", fontSize: "20px" }; // {key: value}
// function App() {
//    return <h1 style={{ color: "blue", fontSize: "70px" }}>Hello</h1>;
// }

//2 External CSS file

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];  

function Header() {
    return (
        <div className="header">
            <h1 style={{ color: "blue", fontSize: "40px", textTransform: "uppercase" }}>Alisya's Pizza Co.</h1>
            </div>
    )
}

function Pizza({name, ingredients, price, photoName, soldOut}) {
    return (
        <div className="pizzas">
            <div className="pizza">
            <img src={photoName} alt={name}></img>
            <h3>{name}</h3>
            <p>{ingredients}</p>
            <p>{price}</p>
            <p>{soldOut}</p>
            </div>
        </div>
    );
}

function Menu({filter}) {
    const filteredPizzas = pizzaData.filter(pizza =>
        pizza.name.toLowerCase().includes(filter.toLowerCase()) ||
        pizza.ingredients.toLowerCase().includes(filter.toLowerCase())
    );
    const listPizza = filteredPizzas.map((pizza, index) => (
        <li><Pizza 
        name={pizza.name} 
        ingredients={pizza.ingredients} 
        price={pizza.price} 
        photoName={pizza.photoName} 
        soldOut={pizza.soldOut}
        />
        </li>))
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 10 && currentHour <= 22;
    return (
        <div>
            <div className="menu">
                <h2>Our Menu</h2>
            </div>
            {isOpen && <h2 className="tagline">Authentic Italian Cuisine, all from our stone oven</h2>}
            <ul className="pizzas">{listPizza}</ul>
        </div>
    );
}

function Footer() {
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 10 && currentHour <= 22;
    return (
        <footer className="footer">
            <p className="order">{isOpen ? "We're currently open" : "Sorry, we're closed"}</p>
            {isOpen &&
            <div className="button-container">
                <button className="btn">Order</button>
            </div>}
        </footer>
    )
}

function App() {
    const [filter, setFilter] = useState("");

    return (
        <div className="container">
            <Header />
            <input 
                type="text" 
                placeholder="Search pizzas..." 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)} 
                className="search"
            />
            <Menu filter={filter} />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);