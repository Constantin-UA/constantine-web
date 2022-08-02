import html from '../../resources/skills/html5.svg';
import css3 from '../../resources/skills/css3.svg';
import js from '../../resources/skills/js.svg';
import angular from '../../resources/skills/angular_skill.svg';
import react_skill from '../../resources/skills/react.svg';
import node_js from '../../resources/skills/node.js.svg';
import mongo from '../../resources/skills/mongo.db.svg';
import './skills.scss';

const Skills = () => {
	return (
		<section id="skills" className="skills">
			<div className="container">
				<h2 className="title title_fz16 title__section-title">Навыки</h2>
				<div className="title title_fz36 title__section-subtitle">Что я использую в работе</div>
				<div className="skills__wrapper">
					<div className="skills__item">
						<div className="skills__item-img">
							<img src={html} alt="HTML" />
						</div>
						<div className="title title_fz14 skills__item-title">HTML5</div>
						<div className="skills__item-descr">
							Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне
							создавать более SEO-оптимизированную структуру вашего продукта
						</div>
					</div>
					<div className="skills__item">
						<div className="skills__item-img">
							<img src={css3} alt="CSS3" />
						</div>
						<div className="title title_fz14 skills__item-title">CSS3</div>
						<div className="skills__item-descr">
							Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или
							приложения. Все ограничивается только вашей фантазией!
						</div>
					</div>
					<div className="skills__item">
						<div className="skills__item-img">
							<img src={js} alt="Java Script" />
						</div>
						<div className="title title_fz14 skills__item-title">Java Script</div>
						<div className="skills__item-descr">
							Этот язык программирования позволяет оживить все что угодно: слайдеры, окна,
							подсказки, вкладки, получение данных от сервера и многое другое
						</div>
					</div>
					<div className="skills__item">
						<div className="skills__item-img">
							<img src={angular} alt="Angular" />
						</div>
						<div className="title title_fz14 skills__item-title">Angular</div>
						<div className="skills__item-descr">
							Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в
							проект мы её не будем, но навык работы с ней присутствует
						</div>
					</div>
					<div className="skills__item">
						<div className="skills__item-img">
							<img src={react_skill} alt="React" />
						</div>
						<div className="title title_fz14 skills__item-title">React</div>
						<div className="skills__item-descr">
							Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально
							интерактивный продукт именно под ваши цели
						</div>
					</div>
					<div className="skills__item">
						<div className="skills__item-img">
							<img src={node_js} alt="node.js" />
						</div>
						<div className="title title_fz14 skills__item-title">Node</div>
						<div className="skills__item-descr">
							Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут
							выполнять действия, которые пользователь не видит
						</div>
					</div>
					<div className="skills__item">
						<div className="skills__item-img">
							<img src={mongo} alt="mongo" />
						</div>
						<div className="title title_fz14 skills__item-title">Mongo.db</div>
						<div className="skills__item-descr">
							Это нереляционная база данных, которая будет хранить данные вашего сайта или
							приложения
						</div>
					</div>
				</div>
				<div className="skills__ratings">
					<div className="skills__ratings-item">
						<div className="title title_fz14 skills__ratings-title">Создание сайтов</div>
						<div className="skills__ratings-counter">90%</div>
						<div className="skills__ratings-line">
							<span></span>
						</div>
					</div>
					<div className="skills__ratings-item">
						<div className="title title_fz14 skills__ratings-title">Создание приложений</div>
						<div className="skills__ratings-counter">85%</div>
						<div className="skills__ratings-line">
							<span></span>
						</div>
					</div>
					<div className="skills__ratings-item">
						<div className="title title_fz14 skills__ratings-title">Работа с данными</div>
						<div className="skills__ratings-counter">85%</div>
						<div className="skills__ratings-line">
							<span></span>
						</div>
					</div>
					<div className="skills__ratings-item">
						<div className="title title_fz14 skills__ratings-title">Креативность</div>
						<div className="skills__ratings-counter">95%</div>
						<div className="skills__ratings-line">
							<span></span>
						</div>
					</div>
					<div className="skills__ratings-item">
						<div className="title title_fz14 skills__ratings-title">Создание дизайна</div>
						<div className="skills__ratings-counter">80%</div>
						<div className="skills__ratings-line">
							<span></span>
						</div>
					</div>
					<div className="skills__ratings-item">
						<div className="title title_fz14 skills__ratings-title">Soft skills</div>
						<div className="skills__ratings-counter">95%</div>
						<div className="skills__ratings-line">
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
