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
                
            </div>
        </footer>
    )
}
