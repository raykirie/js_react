import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import { fetchAllProducts } from "../asyncAction/productsList";
import { Link, NavLink } from "react-router-dom";
import { addToBasketAction } from "../store/basketReducer";


function AllSalesPage() {
  const {productList} = useSelector((store) => store.productList);
  const dispatch = useDispatch();

 useEffect(() => {
    dispatch(fetchAllProducts())
 }, [])

  const discountedProducts = productList.filter((elem) => elem.discont_price !== null);


  const handleButtonClick = (event, product) => {
    event.preventDefault(); 
    event.stopPropagation(); 
    
    const { id, title, discont_price, price, image } = product;
    dispatch(addToBasketAction({
      id,
      title,
      price,
      discont_price,
      image,
    }));
    
  };

  const handleNavLinkClick = (event, id) => {
    console.log(`NavLink clicked for product with id ${id}`);
  };


  return (
    <div className="sales-page-container">
      <p className="sales-page-title">All Sales</p>
      <div className="sales-page-grid">
        {discountedProducts.map((elem) => (
          <NavLink
          key={elem.id}
          to={`/products/${elem.id}`}
          onClick={(event) => handleNavLinkClick(event, elem.id)}
        >
          <div key={elem.id} className="sales-card">
            <img
              className="sales-card-image"
              src={"http://localhost:3333/" + elem.image}
              alt={elem.title}
            />
            <div className="overlay">
              <Button onClick={(event) => handleButtonClick(event, elem)} theme="green" title="Add to cart" />
            </div>
            <p className="sales-card-title">{elem.title}</p>
            <div className="sales-card-price">
              <p className="discounted-price">${elem.discont_price}</p>
              <p className="original-price">${elem.price}</p>
            </div>
          </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default AllSalesPage;
