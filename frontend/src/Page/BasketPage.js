import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Basket() {
  const { items } = useSelector((store) => store.basket);



  return (
    <div>
      <h1>BASKET</h1>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <img width={160} height={150} src={"http://localhost:3333/"+item.image} />
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
