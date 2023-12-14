import { fetchCategoriesData } from "../asyncAction/categories";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AllCategoriesPage(){

    const categories = useSelector((store) => store.categories);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(fetchCategoriesData());
      }, [dispatch]);
    
    return (
        <div className="components_all">
            <p>Categories</p>
            
            <div className="category-container_all">
            {categories.map(elem => 
            <Link key={elem.id} to={`/categories/${elem.id}`}>
            <div key={elem.id} className="category-item_all">
                <img src={'http://localhost:3333/'+elem.image} alt={elem.title}/>
                <p>{elem.title}</p>   
            </div>  
            </Link>
            )}
            </div>
           
        </div>
      );
}

export default AllCategoriesPage