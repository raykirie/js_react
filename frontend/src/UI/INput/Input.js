import s from './Input.module.css'

function Input(props){

    const {size, ...otherProps} = props

    return(
        <div>
            <input
            {...otherProps}
            className={`${s.inp_elem} ${s[size]}`}
            />
        </div>
    )
}

export default Input