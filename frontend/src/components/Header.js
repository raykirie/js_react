import { Link, useNavigate } from 'react-router-dom'
import {ReactComponent as Logo} from '../image/logo.svg'
import { ReactComponent as Basket } from '../image/basket.svg'

function Header(){

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
            <Link to={'/basket'}>
            <div className='basket'>
                <Basket/>
            </div>
            </Link>
       </div> 
    )
}

export default Header