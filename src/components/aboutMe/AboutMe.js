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
									<div className="title title_fz16 aboutme__subtitle">Про меня</div>
									<h2 className="title title_fz36 aboutme__title_main">Меня зовут Константин</h2>
									<p className="aboutme__descr">
										"Если хочешь подумать о чем-либо, то лучше всего думать об этом так, как думает
										про себя оно само".
										<br />
										Именно такой подход я применяю в жизни. Здравствуй, читатель! Если ты сейчас
										читаешь это, то, наверное, тебе интересно узнать о человеке, которому ты хочешь
										предложить разделить с стобой увлекательное путешествие в мир web-разработки и
										воплотить свою идею или, быть может, мечту в реальность. Проявить, создать,
										материлозовать свой проэкт на просторах интернета.
										<br />Я web-разработчик. Мой путь в эту профессию стартовал еще с детсва, когда
										я впервые познакомился с компьютером. Это был далекий 1999г. И с тех самых пор
										моя страсть к языкам общения с машинами только усиливалась. Чем конкретно я
										занимаюсь? Об этом немного подробне:
									</p>
								</div>
							</Row>
							<Row>
								<div className="aboutme__block aboutme__block_wrapper">
									<div className="aboutme__block item">
										<img className="aboutme__img" src={web} alt="web dev" />
										<div className="aboutme__title">Web-разработка</div>
										<p className="aboutme__descr">
											Процесс создания веб-сайта или веб-приложения. Основными этапами процесса
											являются веб-дизайн, вёрстка страниц, программирование на стороне клиента и
											сервера, а также конфигурирование веб-сервера.
										</p>
									</div>
									<div className="aboutme__block item">
										<img className="aboutme__img" src={mobile} alt="mobile dev" />
										<div className="aboutme__title">Разработка приложений</div>
										<p className="aboutme__descr">
											Гибридные решения, которые позволяю открыть приложение с помощью мобильного
											браузера. При этом полностью сохраняется функционал нативного приложения:
											отправка push-уведомлений; работа в режиме офлайн; установка ярлыка (иконки)
											на рабочий стол мобильного устройства, и пр.
										</p>
									</div>
									<div className="aboutme__block item">
										<img className="aboutme__img" src={design} alt="design" />
										<div className="aboutme__title">UI/UX Design</div>
										<p className="aboutme__descr">
											Проектирование любых пользовательских интерфейсов в которых удобство
											использования так же важно как и внешний вид.
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
