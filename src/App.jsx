import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import NavBarHeader from "./components/NavBar/NavBarHeader";
import "./App.scss";
import NavBarHerderSlide from "./components/NavBar/NavBarHerderSlide";
import productApi from "./api/productApi";
import CardSp from "./components/card/CardSp";

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productApi.getAll();
      setCount(productList.data);
    };

    fetchProduct();
  }, []);
  console.log(count);
  return (
    <div className="App">
      <NavBar />
      <NavBarHeader />
      <NavBarHerderSlide />
      {count.slice(0, 4).map((val) => {
        <CardSp key={val._id} name={val.name} img={val.img} />;
      })}
    </div>
  );
}

export default App;
