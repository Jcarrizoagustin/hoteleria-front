import './Footer.css'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { RiFacebookFill } from 'react-icons/ri'
function Footer() {
	return (
		<footer>
			<h3 className='brand-name'>Drak</h3>
			<div className='social-container'>
				<a
					className='social'
					target='_blank'
					rel='noreferrer'
					href='https://www.instagram.com/'
				>
					<BsInstagram />
					Instagram
				</a>
				<a
					className='social'
					target='_blank'
					rel='noreferrer'
					href='https://es-la.facebook.com/'
				>
					<RiFacebookFill />
					Facebook
				</a>
				<a
					className='social'
					target='_blank'
					rel='noreferrer'
					href='https://www.whatsapp.com/?lang=es'
				>
					<BsWhatsapp />
					WhatsApp
				</a>
			</div>
		</footer>
	)
}

export default Footer
