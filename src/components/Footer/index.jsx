import { FaFacebookSquare, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { TfiGithub } from 'react-icons/tfi'
import footerLogo from '../../assets/img/Dev kg logo.svg'
import footerlogoKg from '../../assets/img/footer logo Kg.png'
function Footer() {

	return (
		<div id='footer'>
			<div className='footer'>
				<div className='container'>
					<div className='footer__content'>
						<img className='main-dev-logo' src={footerLogo} alt='img' />
						<div className='footer__info'>
							<div className='footer__h1_logoKg'>
								<h1>
									Мы — сообщество разработчиков Кыргызстана. Данный проект
									поддерживается и <br />
									администрируется членами нашего сообщества.
								</h1>
								<a href='https://www.net.kg/stat.php?id=6620&fromsite=6620'>
									<img src={footerlogoKg} alt='img' />
								</a>
							</div>
							<div className='footer__info__icons'>
								<a className='footer__info__icons-telegram'>
									<FaTelegramPlane />
								</a>
								<a className='footer__info__icons-github'>
									<TfiGithub />
								</a>
								<a className='footer__info__icons-facebook'>
									<FaFacebookSquare />
								</a>
								<a className='footer__info__icons-youtube'>
									<FaYoutube />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	)
}

export default Footer
