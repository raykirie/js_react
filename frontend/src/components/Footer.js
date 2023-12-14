import { ReactComponent as Icon_inst } from '../image/ic-instagram.svg'
import { ReactComponent as Icon_whatsapp } from '../image/ic-whatsapp.svg'

function Footer() {
    return (
        <div className="footer">
            <h5>Contact</h5>
            <div className="contact-cointainer">
                <div className="right">
                    <div className="first-right">
                        <p>Phone</p>
                        <h4>+7 (499) 350-66-04</h4>
                    </div>
                    <div className="second-right">
                        <p>Address</p>
                        <h4>Dubininskaya Ulitsa, 96, Moscow,<br/> Russia, 115093</h4>
                    </div>
                </div>
                <div className="left">
                    <div className="first-left">
                        <p>Socials</p>
                        <div className='icon_footer'>
                        <div className='first_icon'>
                        <Icon_inst/>
                        </div>
                        <div>
                        <Icon_whatsapp/>
                        </div>
                        </div>
                    </div>
                    <div className="second-left">
                        <p>Working Hours</p>
                        <h4>24 hours a day</h4>
                    </div>
                </div>
            </div>
            <div className="map" style={{ width: '100%' }}>
                <iframe
                    width="100%"
                    height="350"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=1400&amp;height=350&amp;hl=en&amp;q=ITHUB%20moscow+(ITHUB)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                    <a href="https://www.maps.ie/population/"></a>
                </iframe>
            </div>
        </div>
    );
}

export default Footer;
