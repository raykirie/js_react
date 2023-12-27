import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import { fetchAllProducts } from "../asyncAction/productsList";
import { NavLink } from "react-router-dom";
import { defaultAction, filterByPriceAction, sortByNameAction, sortByPriceAction } from "../store/productListReducer";
import { addNEwItemAction } from "../store/basketReducer";


function AllSalesPage() {
  const {categories_name, productList} = useSelector((store) => store.productList) || { productList: [] };
  const dispatch = useDispatch();

 useEffect(() => {
    dispatch(fetchAllProducts())
 }, [dispatch])

 const discountedAndFiltersedProduct = productList.filter((elem) => 
 elem.discont_price !== null && elem.isShowSale && elem.isShowPrice
);


const handleButtonClick = (event, elem) => {
  event.preventDefault();
  event.stopPropagation();
  dispatch(addNEwItemAction({...elem, count: 1 }));
}

  const handleNavLinkClick = (event, id) => {
    console.log(`NavLink clicked for product with id ${id}`);
  };


  function formHandler(e){
    let form_data = new FormData(e.target.parentElement)
    let data = Object.fromEntries(form_data)
    data.max = (data.max && +data.max >= +data.min) ? +data.max : Infinity
    data.min = (data.min) ? +data.min : 0
    dispatch(filterByPriceAction(data))
  }


  const sortHandler = (value) => {
    switch (value) {
      case 'name':
        dispatch(sortByNameAction());
        break;
      case 'price':
        dispatch(sortByPriceAction());
        break;
      default:
        dispatch(defaultAction());
    }
  };

  return (
    <div className="sales-page-container">
      <p className="sales-page-title">{categories_name}</p>
      <div className="filter_products">
        <form className="form_filter" onChange={formHandler}>
          <input style={{ marginRight: '20px' }}  placeholder="from" name="min"/>
          <input placeholder="to" name="max"/>
        </form>
        <select className="filter_default" onChange={(e) => sortHandler(e.target.value)}>
          <option value="">Default</option>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
      <div className="sales-page-grid">
        {discountedAndFiltersedProduct.map((elem) => (
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
            {elem.discont_price !== null && (
                        <div className='discount_tag'>
                            {Math.round((1 - elem.discont_price / elem.price) * 100)}%
                        </div>)}
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