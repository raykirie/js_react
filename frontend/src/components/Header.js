import { Link, useNavigate } from 'react-router-dom'
import {ReactComponent as Logo} from '../image/logo.svg'
import { ReactComponent as Basket } from '../image/basket.svg'
import { useSelector } from 'react-redux';

function Header(){


    const  {items}  = useSelector((store) => store.basket);
    const menu_data = ['Categories', 'Allproducts', 'Allsales']
    let navigate = useNavigate()

    return(
       <div className='header'>
            <div onClick={() => navigate('/')} className='logo'>
                <Logo/>
            </div>
            <div className='menu_wrapper'>
            <Link to={'/'}><p>MainPage</p></Link>
                {menu_data.map(elem => 
                    <Link to={'/'+elem} key={elem}>
                        <p>{elem}</p>
                    </Link>    
                )}
            </div>
            <Link className='basket' to={'/basket'}>
                <Basket className='i_basket'/>
            {items.length > 0 && <div className='number_itm'>{items.length}</div>}
            </Link>
       </div> 
    )
}

export default Header