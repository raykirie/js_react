import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProdutInfo } from "../asyncAction/productInfo"
import Button from "../UI/Button/Button"
import { decrAction, incrAction } from "../store/clickerReducer"

function ProductIndoPage(){

    const {id} = useParams()
    const dispatch = useDispatch()
    const productInfo = useSelector((store) => store.productInfo)
    const count = useSelector(store => store.clicker)


    useEffect(() => {
        dispatch(fetchProdutInfo(id))
    }, [])

    return(
        <div className="product_info"> 
           
                    
            <div> 
                <img width={580} height={472} src={"http://localhost:3333/" + productInfo.image} />                
            </div> 
            
            <div className="product_info_text" style={{ display: "flex", alignItems: "baseline" }}>
            <div className="product_info_title">
                <h4>{productInfo.title}</h4>
            </div>
            <div className="product_info_price">
                {productInfo.discont_price ? (
                  <>
                    <h3 style={{ color: 'var(--txt-black, #282828)', fontSize: '40px', fontWeight: 600, lineHeight: '110%' }}>
                      ${productInfo.discont_price}
                    </h3>
                    <h3 style={{ color: 'var(--txt-grey, #8B8B8B)', fontSize: '20px', fontWeight: 500, lineHeight: '130%', textDecorationLine: 'line-through', marginLeft: '10px' }}>
                      ${productInfo.price}
                    </h3>
                  </>
                ) : (
                  <h3 style={{ color: 'var(--txt-black, #282828)', fontSize: '40px', fontWeight: 600, lineHeight: '110%' }}>
                    ${productInfo.price}
                  </h3>
                )}
                </div>
                <div className="counter_menu">
                    <button onClick={() => dispatch(decrAction(1))}>-</button>
                    <p>{count}</p>
                    <button onClick={() => dispatch(incrAction(1))}>+</button>
                    <div className="counter_menu_btn">
                    <Button theme='green' title='Add to cart'/>
                    </div>
                </div>
                <div className="product_info_descriptoin">
                <h2>Description</h2>
                </div>
                <div className="product_info_descriptoin_text">
                <p>{productInfo.description}</p>
                </div>
              </div>  
        </div>
    )
}

export default ProductIndoPage