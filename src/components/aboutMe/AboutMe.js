import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import testPhoto from '../../resources/pictures/dog.jpg';
import design from '../../resources/about_me/design.svg';
import mobile from '../../resources/about_me/mobile_dev.svg';
import web from '../../resources/about_me/web_development.svg';
import './aboutMe.scss';

const AboutMe = () => {
	return (
		<section id="aboutme" className="aboutme">
			<Container className="aboutme__wrapper">
				<Stack direction="horizontal" gap={5}>
					<Col>
						<div className="aboutme__block">
							<img id="about_photo" src={testPhoto} alt="My aboutPhoto"></img>
						</div>
					</Col>
					<Col>
						<Stack gap={4}>
							<Row>
								<div className="aboutme__block">
									<div className="title title_fz16 aboutme__subtitle">About me</div>
									<h2 className="title title_fz36 aboutme__title_main">My name is Konstantin</h2>
									<p className="aboutme__descr">
										"If you want to think about something, it's best to think about it the way he
										thinks it speaks for itself".
										<br />
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nam, quos, et
										voluptas illum delectus, vel quod sed eveniet beatae laboriosam quaerat non
										molestias facilis nulla. Dolore saepe est ad sint ab, repudiandae cumque minima
										quaerat reiciendis quis nam libero dolor quisquam voluptatibus a ipsum?
										Cupiditate dolor soluta fuga harum sed molestiae aliquid delectus impedit.
										Quisquam iure consequatur magnam omnis!
										<br />
										My path to development started from childhood, when I first got acquainted with
										the computer. It was way back in 1999. And since then, my passion for languages
										of communication with machines has only intensified. What exactly do I do? A
										little more about this:
									</p>
								</div>
							</Row>
							<Row>
								<div className="aboutme__block aboutme__block_wrapper">
									<div className="aboutme__block item">
										<img className="aboutme__img" src={web} alt="web dev" />
										<div className="aboutme__title">Web-development</div>
										<p className="aboutme__descr">
											The process of creating a website or web application. The main stages of the
											process are web design, page layout, client and server side programming, and
											web server configuration.
										</p>
									</div>
									<div className="aboutme__block item">
										<img className="aboutme__img" src={mobile} alt="mobile dev" />
										<div className="aboutme__title">Application Development</div>
										<p className="aboutme__descr">
											Hybrid solutions that allow you to open the application using a mobile
											browser. At the same time, the functionality of the native application is
											fully preserved: sending push notifications; work offline; installation of a
											shortcut (icon) on the desktop of a mobile device, etc.
										</p>
									</div>
									<div className="aboutme__block item">
										<img className="aboutme__img" src={design} alt="design" />
										<div className="aboutme__title">UI/UX Design</div>
										<p className="aboutme__descr">
											Designing any user interfaces in which convenience Usage is just as important
											as appearance.
										</p>
									</div>
								</div>
							</Row>
						</Stack>
					</Col>
				</Stack>
			</Container>
		</section>
	);
};

export default AboutMe;
