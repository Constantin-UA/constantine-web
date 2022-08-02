import './resume.scss';
import courses from '../../resources/resume/courses.svg';
import designer from '../../resources/resume/designer.svg';
import developer from '../../resources/resume/developer.svg';
import university from '../../resources/resume/university.svg';
const Resume = () => {
	return (
		<section id="resume" className="resume">
			<div className="container">
				<h2 className="title title_fz16 title__section-title">Опыт</h2>
				<div className="title title_fz36 title__section-subtitle">Чем я буду полезен</div>
				<div className="resume__wrapper">
					<div className="resume__column">
						<h3 className="title title_fz20 resume__column-title">Образование</h3>
						<ul>
							<li>
								<div className="resume__item">
									<div className="resume__item-head">
										<div className="resume__item-icon">
											<img src={university} alt="university" />
										</div>
										<div className="title title_fz14">НМетАУ</div>
										<div className="resume__item-location">
											Диплом бакалавра | Днепр (2005-2009)
										</div>
									</div>
									<div className="resume__item-body">
										Информационно-управляющие системы и технологии. Информационные технологии
										проектирования. Программирование встроенных и мобильных устройств.
										Программирование веб-систем.
									</div>
								</div>
							</li>
							<li>
								<div className="resume__item">
									<div className="resume__item-head">
										<div className="resume__item-icon">
											<img src={courses} alt="courses" />
										</div>
										<div className="title title_fz14">Udemy</div>
										<div className="resume__item-location">Курсы по Web-разработке</div>
									</div>
									<div className="resume__item-body">
										Все, что необходимо для создания web-сайтов. 96 лекций. 33,5 ч. Этот курс
										направлен на подробное обучение созданию сайтов, без воды, знания и практика.
										Работа с графическими редакторами в контексте верстки: Photoshop, Figma,
										Avocode. Использование HTML5 и CSS3 в проектах. А так же Git и GitHub, Bootstrap
										4/5, Sass/Scss, методология БЭМ...
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="resume__column">
						<h3 className="title title_fz20 resume__column-title">Дополнительно</h3>
						<ul>
							<li>
								<div className="resume__item">
									<div className="resume__item-head">
										<div className="resume__item-icon">
											<img src={developer} alt="developer" />
										</div>
										<div className="title title_fz14">Angular 9</div>
										<div className="resume__item-location">Udemy 2020г</div>
									</div>
									<div className="resume__item-body">
										Разработка крутейших динамических приложений. 169 лекций 17,5ч. Самые актуальные
										знания по прекрасной Frontend технологии Angular от компании Google. Целостная
										система во всех тонкостях фреймворка. Включая TypeScript и RxJS
									</div>
								</div>
							</li>
							<li>
								<div className="resume__item">
									<div className="resume__item-head">
										<div className="resume__item-icon">
											<img src={designer} alt="designer" />
										</div>
										<div className="title title_fz14">JavaScript + React</div>
										<div className="resume__item-location">Udemy 2020г</div>
									</div>
									<div className="resume__item-body">
										Самый популярный язык программирования - JavaScript и библиотека React. 124
										лекции. 41,5ч. Подробное изучение JavaScript и самой популярной библиотеки на
										основе JavaScript - React.js со всеми необходимыми технологиями (в том числе и
										Redux). Алгоритмы, объектно ориентированное программироване, технологии AJAX,
										JSON, npm, Babel, Browserify, Webpack и тд.
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Resume;
