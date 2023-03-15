import React from "react";
import { useState, useEffect } from "react";
import productApi from "../../api/productApi";
import Card2 from "../Card2/Card2";
import "./SearchBar.scss";

function SearchBar() {
  const [search, setSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productApi.getAll();
      setSearch(productList.data);
      console.log(productList.data);
    };

    fetchProduct();
  }, []);
  return (
    <>
      <form className="form-product" action="/" method="get">
        <label htmlFor="header-search" />
        <input
          id="header-search"
          type={"text"}
          placeholder="Search item"
          name="s"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type={"submit"}>Search</button>
      </form>

      <div className="container-search">
        {search
          .filter((val) => {
            return searchTerm.toUpperCase() == "" ||
              searchTerm.toLowerCase() == ""
              ? val
              : val.name.toUpperCase().includes(searchTerm) ||
                  val.name.toLowerCase().includes(searchTerm);
          })
          .map((val) => {
            return (
              <Card2
                sale={val.sale}
                name={val.name}
                discouter={val.discouter}
                price={val.price}
              />
            );
          })}
      </div>
    </>
  );
}

export default SearchBar;
