import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
import AboutCard from './AboutCard';
import TitleCompon from '../titleCompon/TitleCompon';
import testPhoto from '../../resources/pictures/cat1-l.jpg';
import design from '../../resources/icons/about_me/design.svg';
import mobile from '../../resources/icons/about_me/mobile_dev.svg';
import web from '../../resources/icons/about_me/web_development.svg';
import './aboutMe.scss';

class AboutMe extends Component {
	state = {
		title: {
			text: 'About me',
			class: 'title title_fz24 aboutme__title',
			nummber: 2,
		},
		subtitle: {
			text: 'My name is Konstantin.',
			class: 'title title_fz36 aboutme__subtitle',
		},
		cardData: [
			{
				title: 'Web-development',
				imgSrc: web,
				descr:
					'The process of creating a website or web application. The main stages of the process are web design, page layout, client and server side programming, and web server configuration.',
			},
			{
				title: 'Application Development',
				imgSrc: mobile,
				descr:
					'Hybrid solutions that allow you to open the application using a mobile browser. At the same time, the functionality of the native application is fully preserved: sending push notifications; work offline; installation of a shortcut (icon) on the desktop of a mobile device, etc.',
			},
			{
				title: 'UI/UX Design',
				imgSrc: design,
				descr:
					'Designing any user interfaces in which convenience Usage is just as important as	appearance.',
			},
		],
	};
	render() {
		const { title, subtitle, cardData } = this.state;
		return (
			<section id="aboutme" className="aboutme">
				<Container className="aboutme__wrapper">
					<Col className="aboutme__block">
						<img className="aboutme__photo" src={testPhoto} alt="My aboutPhoto"></img>
					</Col>
					<Col className="ml-10">
						<Row className="aboutme__block">
							<TitleCompon title={title} subtitle={subtitle} />
							<p className="aboutme__descr">
								"If you want to think about something, it's best to think about it the way he thinks
								it speaks for itself".
								<br />
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nam, quos, et
								voluptas illum delectus, vel quod sed eveniet beatae laboriosam quaerat non
								molestias facilis nulla. Dolore saepe est ad sint ab, repudiandae cumque minima
								quaerat reiciendis quis nam libero dolor quisquam voluptatibus a ipsum? Cupiditate
								dolor soluta fuga harum sed molestiae aliquid delectus impedit. Quisquam iure
								consequatur magnam omnis!
								<br />
								My path to development started from childhood, when I first got acquainted with the
								computer. It was way back in 1999. And since then, my passion for languages of
								communication with machines has only intensified. What exactly do I do? A little
								more about this:
							</p>
						</Row>
						<Row className="aboutme__block aboutme__block_wrapper">
							<AboutCard cardData={cardData} />
						</Row>
					</Col>
				</Container>
			</section>
		);
	}
}

export default AboutMe;
