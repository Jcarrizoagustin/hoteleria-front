import './Footer.css'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { RiFacebookFill } from 'react-icons/ri'
function Footer() {
	return (
		<footer>
			<h3 className='brand-name'>
				Spark <span style={{ fontSize: '1rem', fontWeight: '200' }}>Hotel</span>
			</h3>
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
			<div className='author'>
				<h3 className='author-text'>
					Desarrollado por:{' '}
					<a
						href='https://www.linkedin.com/in/jcarrizoagustin/'
						target='_blank'
						rel='noreferrer'
						style={{ color: 'white' }}
					>
						Agustin Carrizo
					</a>{' '}
					- 2023
				</h3>
			</div>
		</footer>
	)
}

export default Footer
