import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
// import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="containerFooter">
                <div className="columnFooter">
                    <div className="informationFooter">
                        <p>Email: giftsupport@gift.com</p>
                        <p>dir: giftsupport@gift.com</p>
                        <p>tel: 123456789</p>
                        <p>cel: 1234567889</p>
                    </div>
                </div>
                <div className="columnFooter">
                    <div className="redes">
                        <Link  to ='https://www.facebook.com/' className='enlaces'><p>F </p></Link>
                        <Link  to ='https://twitter.com/?lang=es' className='enlaces'><p>T </p></Link>
                        <Link  to ='https://www.instagram.com/' className='enlaces'><p>I </p></Link>
                    </div>
                </div>
                <div className="columnFooter">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.44367094894!2d-58.5033384559607!3d-34.61566245767745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA%2C%20Argentina!5e0!3m2!1ses!2sco!4v1659578844052!5m2!1ses!2sco" width="400" height="200" loading="lazy" ></iframe>
                </div>
            </div>
        </footer>
    )
}
