import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";
import  {useState}  from "react";

const App = () => {

    const [cart, setCart]= useState([
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 },
    ]);
    
    const [itemCount, setItemCount] = useState(0);

    const handleIncrement = (product) =>{
      let cartCopy = [...cart];
      const index = cartCopy.indexOf(product);
      cartCopy[index] = { ...cart[index] };
      cartCopy[index].value++;
      const itemCountSecond = getItemCount(cartCopy);
      setItemCount(itemCountSecond );
      setCart(cartCopy )
    };

    const handleDecrement = (product) => {
      let cartCopy = [...cart];
      const index = cartCopy.indexOf(product);
      cartCopy[index] = { ...cart[index] };
      cartCopy[index].value--;
      const itemCountSecond = getItemCount(cartCopy);
      setItemCount(itemCountSecond );
      setCart(cartCopy )
    }

    const getItemCount = (cart) => {
        const itemCount = cart.reduce((total, product) => total + product.value, 0);
        return itemCount;
    }

    return (
        <div className="App">
          <Navbar totalItems={itemCount} />
          <ProductsGrid
            products={products}
            cart={cart}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </div>
      );
}

export default App;