import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesData } from "../asyncAction/categories";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";


function Componens() {
  const categories = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesData());
  }, [dispatch]);


  const firstFourCategories = categories.slice(0, 4)

  return (
    <div className="components">
      <div className="navigate">
        <p>Categories</p>
        <div className="navigate_btn">
        <Link to={'/categories'}>
        <Button theme='navigation' title='all categories'/>
        </Link>
        </div>
        </div>
        <div className="category-container">
        {firstFourCategories.map((elem) => (
          <Link key={elem.id} to={`/categories/${elem.id}`}>
          <div key={elem.id} className="category-item">
            <img src={'http://localhost:3333'+elem.image} alt="photo"/>
            <p>{elem.title}</p>
          </div>   
          </Link>      
        ))}   
      </div>
    </div>
  );
}

export default Componens;
