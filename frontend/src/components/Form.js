import photo from '../image/image.png';
import Input from '../UI/INput/Input.js';
import Button from '../UI/Button/Button.js';


function Form() {

const handleButtonClick = () => {
    alert('Ваш промокод на скидку отправлен на почту!')
}

  return (
    <div className="form">
      <p>5% скидка на первый заказ</p>
      <div className="form_content">
        <div className='form_img'>
          <img src={photo} alt="Description" />
        </div>
        <div className='form_right'>
        <div className='form_inp'>
          <Input  placeholder="Name" size={'i_form'} />          
          <Input  placeholder="Phone number" size={'i_form'} />
          <Input  placeholder="Email" size={'i_form'} />
          <div className='from_btn'>
          <Button 
          theme='white'
          title='Get a discount'
          onClick={handleButtonClick}
          />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
