import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import contactPhoto from '../../resources/pictures/cat2-l.jpg';
import facebookIcon from '../../resources/icons/social/facebook30.svg';
import telegram from '../../resources/icons/social/telegram.svg';
import instagram from '../../resources/icons/social/instagram30.svg';
import TitleCompon from '../titleCompon/TitleCompon';
import MenuSocial from '../menuSocial/MenuSocial';
import './contacts.scss';

const Contacts = () => {
	const data = {
		title: {
			text: 'An experience',
			class: 'title title_fz16 contacts__title',
			nummber: 6,
		},
		subtitle: {
			text: 'How can I be useful',
			class: 'title title_fz36 contacts__subtitle',
		},
	};
	return (
		<section id="contacts" className="contacts">
			<Container>
				<Stack direction="horizontal" gap={5}>
					<Col>
						<div className="contacts__photo">
							<img id="contacts_photo" src={contactPhoto} alt="My aboutPhoto"></img>
						</div>
					</Col>
					<Col>
						<Stack gap={4}>
							<Row>
								<div className="contacts__descr">
									<TitleCompon data={data} />
									<div className="title title_fz14 contacts__text">
										In any way convenient for you:
									</div>
									<MenuSocial />
									<div className="title title_fz14 contacts__text">
										Or leave your details and I will write to you myself:
									</div>
									<form action="#" className="contacts__form" id="form">
										<div className="contacts__input">
											<input name="name" required type="text" id="name" />
											<label htmlFor="name">Your name.</label>
										</div>
										<div className="contacts__input">
											<input name="email" required type="email" id="email" />
											<label htmlFor="email">Your email.</label>
										</div>
										<div className="contacts__textarea">
											<textarea name="text" type="text" id="etext" cols="30" rows="10"></textarea>
											<label htmlFor="text">Your message.</label>
										</div>
										<div className="contacts__triggers">
											<button className="contacts__btn btn" type="submit">
												Send message.
											</button>
											<div className="contacts__policy">
												<input required type="checkbox" className="contacts__policy-checkbox" />
												<span>
													I agree <a href="/policy.html"> with the privacy policy</a>
												</span>
											</div>
										</div>
									</form>
								</div>
							</Row>
						</Stack>
					</Col>
				</Stack>
			</Container>
		</section>
	);
};
export default Contacts;

/*
<div className="contacts__wrapper">
					<div className="contacts__photo">
						<img src={contactPhoto} alt="contact" />
					</div>
					<div className="contacts__descr">
						<div className="title title_fz16 contacts__subtitle">Contacts</div>
						<h2 className="title title_fz36 contacts__title_main">Get into contact with me</h2>
						<div className="title title_fz14 contacts__text">In any way convenient for you:</div>
						<div className="contacts__social">
							<a href="#" className="contacts__link">
								<img src={facebookIcon} alt="facebook" />
							</a>
							<a href="#" className="contacts__link">
								<img src={telegram} alt="telegram" />
							</a>
							<a href="#" className="contacts__link">
								<img src={instagram} alt="instagram" />
							</a>
						</div>
						<div className="title title_fz14 contacts__text">
							Or leave your details and I will write to you myself:
						</div>
						<form action="#" className="contacts__form" id="form">
							<div className="contacts__input">
								<input name="name" required type="text" id="name" />
								<label htmlFor="name">Your name.</label>
							</div>
							<div className="contacts__input">
								<input name="email" required type="email" id="email" />
								<label htmlFor="email">Your email.</label>
							</div>
							<div className="contacts__textarea">
								<textarea name="text" type="text" id="etext" cols="30" rows="10"></textarea>
								<label htmlFor="text">Your message.</label>
							</div>
							<div className="contacts__triggers">
								<button className="contacts__btn btn" type="submit">
									Send message.
								</button>
								<div className="contacts__policy">
									<input required type="checkbox" className="contacts__policy-checkbox" />
									<span>
										I agree <a href="/policy.html"> with the privacy policy</a>
									</span>
								</div>
							</div>
						</form>
					</div>
				</div>
 */
