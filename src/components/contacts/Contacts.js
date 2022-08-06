import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import contactPhoto from '../../resources/pictures/cat2-l.jpg';

import TitleCompon from '../titleCompon/TitleCompon';
import MenuSocial from '../menuSocial/MenuSocial';
import './contacts.scss';

const Contacts = () => {
	const data = {
		title: {
			text: 'An experience',
			class: 'title title_fz24 contacts__title',
			nummber: 6,
		},
		subtitle: {
			text: 'How can I be useful',
			class: 'title title_fz36 contacts__subtitle',
		},
	};
	return (
		<section id="contacts" className="contacts">
			<Container className="contacts__wrapper">
				<Col>
					<img className="contacts__photo" src={contactPhoto} alt="My aboutPhoto"></img>
				</Col>
				<Col>
					<Stack gap={4}>
						<Row>
							<div className="contacts__descr">
								<TitleCompon data={data} />
								<div className="title title_fz14 contacts__text">
									In any way convenient for you:
								</div>
								<MenuSocial data={'contacts__social'} />
								<div className="title title_fz14 contacts__text">
									Or leave your details and I will write to you myself:
								</div>
								<Form className="contacts__form">
									<Form.Group controlId="formName" className="contacts__input">
										<Form.Label>Name</Form.Label>
										<Form.Control required type="text" placeholder="Enter your name here..." />
									</Form.Group>

									<Form.Group className="contacts__input" controlId="formEmail">
										<Form.Label>Email</Form.Label>
										<Form.Control required type="email" placeholder="Enter email here..." />
									</Form.Group>

									<Form.Group className="contacts__textarea-group">
										<Form.Label>Message</Form.Label>
										<Form.Control
											className="contacts__textarea"
											as="textarea"
											cols="30"
											rows="10"
											placeholder="Leave a message here..."
										/>
									</Form.Group>

									<Form.Group className="contacts__triggers">
										<Button className="contacts__btn btn" type="submit">
											Send message.
										</Button>
										<div className="contacts__policy">
											<input required type="checkbox" className="contacts__policy-checkbox" />
											<span>
												I agree <a href="/policy.html"> with the privacy policy</a>
											</span>
										</div>
									</Form.Group>
								</Form>
							</div>
						</Row>
					</Stack>
				</Col>
			</Container>
		</section>
	);
};
export default Contacts;

/*
 <a href="/policy.html"> /a>
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
