#fedf-co3-programs
CO_3 Programs(FEDF)
1.
function Product(props) {
return <h2>{props.name}</h2>;
}

function App() {
return <Product name="Srujana's iPhone 15" />;
}
export default App;

 
2. 
function Product(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

function App() {
  return (
    <Product name="Srujana's Laptop" price="55000" />
  );
}
export default App;

 
3.
import { useState } from "react";

function Cart() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>Srujana's Quantity: {quantity}</h2>

      <button onClick={() => setQuantity(quantity + 1)}>
        Add More
      </button>
    </div>
  );
}

export default Cart;

 

4.
import { useState } from "react";

function Product(props) {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>{props.name}</h2>

      <p>Likes: {likes}</p>

      <button onClick={() => setLikes(likes + 1)}>
        Like Product
      </button>
    </div>
  );
}

function App() {
  return <Product name="Srujana's Headphones" />;
}
export default App;

 
5.
import { useEffect } from "react";

function ProductPage() {

  useEffect(() => {
    console.log("Fetching Product Details...");
  }, []);

  return <h1>Srujana check Product Details</h1>;
}

export default ProductPage;

 










6.
import { useEffect, useState } from "react";

function Product() {

  const [views, setViews] = useState(0);

  useEffect(() => {
    setViews(views + 1);
  }, []);

  return <h2>Srujana Check Views: {views}</h2>;
}
export default Product;

 
7.
import { useState } from "react";

function Cart() {

  const [total, setTotal] = useState(1000);

  return (
    <div>
      <h2>Total: ₹{total}</h2>

      <button onClick={() => setTotal(total + 500)}>
        Srujana-Add Item
      </button>
    </div>
  );
}

export default Cart;

 
8.
import { useState } from "react";

function Search() {

  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Product"
      />

      <p>srujana searched: {text}</p>
    </div>
  );
}

export default Search;

 
9.
import { useRef } from "react";

function Coupon() {

  const inputRef = useRef();

  function applyCoupon() {
    alert(inputRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />

      <button onClick={applyCoupon}>
        Srujana--Apply Coupon
      </button>
    </div>
  );
}

export default Coupon;


 
10.
function ProductName() {
  return <h2>Srujana's Smart Watch</h2>;
}

function ProductPrice() {
  return <p>₹3000</p>;
}

function ProductCard() {
  return (
    <div>
      <ProductName />
      <ProductPrice />
    </div>
  );
}

export default ProductCard;


 
11. function Button(props) {
  return (
    <button>
      {props.label}
    </button>
  );
}

function App() {
  return (
    <div>
      <Button label="Buy Now" />
      <Button label="Add  to Srujana's Cart" />
    </div>
  );
}
export default App;


 










12.
function Product() {

  function addToCart() {
    alert("Product Added to Cart");
  }

  return (
    <button onClick={addToCart}>
      Add to srujana Cart
    </button>
  );
}

export default Product;

 
13.
function Card(props) {
  return (
    <div style={{border:"1px solid black", padding:"10px"}}>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Srujana's Shoes</h2>
      <p>₹2000</p>
    </Card>
  );
}
export default App;


--------------------------------



 





