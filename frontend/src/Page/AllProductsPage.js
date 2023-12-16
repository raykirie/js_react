import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import { fetchAllProducts } from "../asyncAction/productsList";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { addToBasketAction } from "../store/basketReducer";

function AllProductsPage() {
  const { productList, filter } = useSelector((store) => store.productList);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

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
    <div className="products_all">
      <p>All products</p>
      <div className="products-container_all">
        {productList.map((elem) => (
          <Link
            key={elem.id}
            to={`/products/${elem.id}`}
            onClick={(event) => handleNavLinkClick(event, elem.id)}
          >
            <div key={elem.id} className="products-item_all">
              <div className="image-container">
                <img width={279} height={280} src={"http://localhost:3333/" + elem.image} alt={elem.title}/>
                <div className="overlay">
                  <Button onClick={(event) => handleButtonClick(event, elem)} theme="green" title="Add to card" />
                </div>
                <div className="product-title">
                <p className="sales-card-title">
                  {elem.title}
                </p>
                </div>
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

export default AllProductsPage;
