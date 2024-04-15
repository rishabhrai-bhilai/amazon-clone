import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import User from "./User";
import ProductDescription from "./ProductDescription";


const products = [
  {
    id: 1,
    title: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 955,
    rating: 3,
    description:
      "lorem ipsof to the data center provide we habe to be complian enough",
    image:
    "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",

  },

  {
    id: 2,
    title: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
    price: 7765,
    rating: 5,
    description:
      "lorem ipsof to the data center provide we habe to be complian enough",
    image:
    "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",

  },

  {
    id: 3,
    title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
    price: 66555,
    rating: 2,
    description:
      "lorem ipsof to the data center provide we habe to be complian enough",
    image:
    "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",

  },

  {
    id: 4,
    title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
    price: 7876,
    rating: 1,
    description:
      "lorem ipsof to the data center provide we habe to be complian enough",
    image:
    "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",

  },

  {
    id: 5,
    title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    price: 9989,
    rating: 4,
    description:
      "lorem ipsof to the data center provide we habe to be complian enough",
    image:
    "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",

  },

  {
    id: 6,
    title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
    price: 897,
    rating: 4,
    description:
      "lorem ipsof to the data center provide we habe to be complian enough",
    image:
    "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",

  },
  
];


function App() {
  console.log(products);
return (
  
  
    <Router>
      <div className="app">
      <Header />

      <Switch>

      <Route path="/user">  
          <User />
        </Route>


        <Route path="/checkout" >  
          <Checkout />
        </Route>

        <Route path="/productdescription">  
          <ProductDescription />
        </Route>

        <Route path="/" > 

          <Home products={products} />
        </Route>

      </Switch>
      </div>
    </Router>
  
);
}
export default App;