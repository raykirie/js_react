
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import { Element } from 'react-scroll';
import { fetchAllProducts } from "../asyncAction/productsList";
import { Link, NavLink } from "react-router-dom";
import { addNEwItemAction } from "../store/basketReducer";


function Sales() {
  const dispatch = useDispatch();
  const { productList } = useSelector((store) => store.productList);

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch]);

  const discountedProducts = productList.filter((elem) => elem.discont_price !== null);
  const sortedDiscountedProducts = discountedProducts.sort((a, b) => b.discont_price - a.discont_price).slice(0, 4)

  const handleButtonClick = (event, elem) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addNEwItemAction({...elem, count: 1 }))
  }

  const handleNavLinkClick = (event, id) => {
    console.log(`NavLink clicked for product with id ${id}`);
  };

  return (
    <Element name="salesSection" className="sales_main">
      <div className="navigate_sales">
      <p>Sales</p>
      <div className="navigate_sales_btn">
      <Link to={'/allsales'}>
      <Button theme='navigation' title='all sales'/>
      </Link>
      </div>
      </div>
      <div className="sales-grid_main">
        {sortedDiscountedProducts.map((elem) => (
          <NavLink
          key={elem.id}
          to={`/products/${elem.id}`}
          onClick={(event) => handleNavLinkClick(event, elem.id)}
        >
          <div key={elem.id} className="sales-card_main">
            <img
              className="sales-card-image"
              src={"http://localhost:3333/" + elem.image}
              alt={elem.title}
            />
            {elem.discont_price !== null && (
                        <div className='discount_tag'>
                            {Math.round((1 - elem.discont_price / elem.price) * 100)}%
                        </div>)}
            <div className="overlay_main">
              <Button  onClick={(event) => handleButtonClick(event, elem)} theme="green" title="Add to cart" />
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
    </Element>
  );
}

export default Sales;
