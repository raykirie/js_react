import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Four } from "../image/4.svg";
import { ReactComponent as Cactus } from "../image/cactus.svg";
import Button from "../UI/Button/Button"

function NotFoundPage() {

    let location = useLocation()
    console.log(location)

    let navigate = useNavigate()

  return (
    <div className="not-found-content">
      <div className="images-container">
        <Four />
        <Cactus />
        <Four />
      </div>
      <p>Page Not Found</p>
      <h5>We’re sorry, the page you requested could not be found.</h5>
      <h5>Please go back to the homepage.</h5>
      <div className="btn">
      <Button
      onClick={() => navigate('/')}
      theme='green'
      title='Go Home'
      />
      </div>
    </div>
  );
  }

export default NotFoundPage
