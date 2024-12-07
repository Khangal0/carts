'use client';

import { useEffect, useState } from "react";
import Cart from "./componets/Cart";

const Page = () => {

  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  
  const fetchData = async () => { 
    const limit = 9;
    const skipCount = skip * limit;
    const JSONdata = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skipCount}`);
    const data = await JSONdata.json();
    setProducts(data.products);
  };
  
  useEffect(() => {
    fetchData();
    }, [skip]
  );

  const next = () => {
    setSkip(skip + 1);
  };

  const back = () => {
    if (skip === 0) return;
    setSkip(skip - 1);
  }

  return(
    <div className="box">
      {products.map((products) => (
        <div key={products.id}>
            <h1>{products.id}</h1>
            <Cart products={products}/>
        </div>
      ))}
      <div className="swichButton">
        <button onClick={back}>back</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  )
}

export default Page;