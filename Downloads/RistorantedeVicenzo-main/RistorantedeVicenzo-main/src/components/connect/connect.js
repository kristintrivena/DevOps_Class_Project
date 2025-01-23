import React from 'react';
import '../../styling/connect.css'
import { FaInstagram, FaEnvelope} from 'react-icons/fa'
import { FaFacebook, FaWhatsapp} from 'react-icons/fa6'


const Connect = () => {
  return (
    <div>
        <div className='connect'><span>Connect Closer</span>
            <div className='icon'>
                <div className='icon-instagram'>
                <FaInstagram />
                </div>
                <div className='icon-facebook'>
                <FaFacebook />
                </div>
                <div className='icon-whatsApp'>
                <FaWhatsapp />
                </div>
                <div className='icon-email'>
                <FaEnvelope />
                </div>
            </div>
        </div>
        {/* Tambahkan teks Terima Kasih di bawah Connect Closer */}
        <div className='thank-you'>
            <p>Thank You</p>
        </div>
        {/* Tambahkan footer di bawah Connect Closer */}
        <div className='footer'>
            <p>@Ristorante de Vicenzo2024</p>
        </div>
    </div>
    
  )
}

export default Connect
