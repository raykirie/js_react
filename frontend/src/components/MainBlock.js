

import React from 'react';
import { Link } from 'react-scroll';
import Button from "../UI/Button/Button";
import { ReactComponent as Main } from "../image/main.svg";

function MainBlock() {
  return (
    <div className="content">
      <div className="background_img">
        <Main />
      </div>
      <div className="text-over-image">
        <p>Amazing Discounts</p>
        <p>ㅤon Garden Products!</p>
        <div className="btn_main">
          <Link to="salesSection" spy={true} smooth={true} duration={800}>
            <Button theme="green" title="Check out" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainBlock;
