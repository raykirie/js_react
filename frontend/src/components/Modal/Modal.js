import { useEffect } from 'react'
import s from './Modal.module.css'


function Modal({active, setActive}){

    const handlerEscapeKeyPress = (event) => {
        if (event.key === 'Escape'){
            setActive(false)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handlerEscapeKeyPress)
    }, [])


        const myStylesh2 = {
          color: 'var(--txt-white, #FFF)',
          fontFamily: 'Montserrat',
          fontSize: '40px',
          fontStyle: 'normal',
          marginBottom: '30px',
          fontWeight: 600,
          lineHeight: '110%',
        }

        const myStyleshp = {
            color: 'var(--txt-white, #FFF)',
            fontFamily: 'Montserrat',
            fontSize: '20px',
            marginBottom: '20px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '110%',
        }
        

    return(
        <div className={`${s.modal} ${active && s.active}`} onClick={() => setActive(false)}>
            <div onClick={(e) => e.stopPropagation()} className={`${s.modal_content} ${active && s.active}`}>
                <div className='text_order'>
                <h2 style={myStylesh2}> Congratulations! </h2>
                <p style={myStyleshp}>Your order has been successfully placed <br/> on the website.</p>
                <p style={myStyleshp}>A manager will contact you shortly <br/> to confirm your order.</p>
                </div>
                <div onClick={() => setActive(false)} className='logo_order'>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M33 11L11 33" stroke="white" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 11L33 33" stroke="white" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
            </div>
        </div>
    )
}

export default Modal