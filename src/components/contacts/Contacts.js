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
import { Component } from 'react';

class Contacts extends Component {
	state = {
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
	render() {
		const { title, subtitle } = this.state;
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
									<TitleCompon title={title} subtitle={subtitle} />
									<div className="title title_fz14 contacts__text">
										In any way convenient for you:
									</div>
									<MenuSocial classS={'contacts__social'} />
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
	}
}
export default Contacts;
