import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useParams } from "react-router-dom";
import { fetchCategoryById } from "../asyncAction/categoriesList";
import Button from "../UI/Button/Button";





function CategoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {category_name, productList} = useSelector((store) => store.productList);

  useEffect(() => {
    dispatch(fetchCategoryById(id))
  }, [])


  const handleButtonClick = (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
        
  };

  const handleNavLinkClick = (event, id) => {
    console.log(`NavLink clicked for product with id ${id}`);
  };


  return (
    <div className="products_all">
      <p>{category_name}</p>
      <div className="products-container_all">
        {productList.map((elem) => (
           <Link
           key={elem.id}
           to={`/products/${elem.id}`}
           onClick={(event) => handleNavLinkClick(event, elem.id)}
         >
          <div key={elem.id} className="products-item_all">
            <div className="image-container">
              <img width={279} height={280} src={"http://localhost:3333/" + elem.image} alt={elem.title} />
              {elem.discont_price !== null && (
                        <div className='discount_tag'>
                            {Math.round((1 - elem.discont_price / elem.price) * 100)}%
                        </div>)}
              <div className="overlay">
                <Button onClick={handleButtonClick} theme="green" title="Add to card" />
              </div>

              <p className="sales-card-title">{elem.title}</p>

              <div style={{ display: "flex", alignItems: "baseline" }}>
                {elem.discont_price ? (
                  <>
                    <h3 style={{ color: 'var(--txt-black, #282828)', fontSize: '40px', fontWeight: 600, lineHeight: '110%' }}>
                      ${elem.discont_price}
                    </h3>
                    <h3 style={{ color: 'var(--txt-grey, #8B8B8B)', fontSize: '20px', fontWeight: 500, lineHeight: '130%', textDecorationLine: 'line-through', marginLeft: '10px' }}>
                      ${elem.price}
                    </h3>
                  </>
                ) : (
                  <h3 style={{ color: 'var(--txt-black, #282828)', fontSize: '40px', fontWeight: 600, lineHeight: '110%' }}>
                    ${elem.price}
                  </h3>
                )}
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;