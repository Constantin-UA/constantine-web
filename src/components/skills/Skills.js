import html from '../../resources/icons/skills/html5.svg';
import css3 from '../../resources/icons/skills/css3.svg';
import js from '../../resources/icons/skills/js.svg';
import angular from '../../resources/icons/skills/angular_skill.svg';
import reactSkill from '../../resources/icons/skills/react.svg';
import nodeJs from '../../resources/icons/skills/node.js.svg';
import mongo from '../../resources/icons/skills/mongo.db.svg';
import TitleCompon from '../titleCompon/TitleCompon';
import { Container, Row, Card, ProgressBar } from 'react-bootstrap';

import './skills.scss';
const Skills = () => {
	const data = {
		title: {
			text: 'Skills',
			class: 'title title_fz16 title__section-title',
			nummber: 4,
		},
		subtitle: {
			text: 'What do I use at work?',
			class: 'title title_fz36 title__section-subtitle',
		},
	};
	const skillsData = [
		{
			imgUrl: html,
			title: 'HTML5',
			text: 'It is he who creates the framework of your site or application, and the fifth version will allow me create a more SEO optimized structure for your product.',
		},
		{
			imgUrl: css3,
			title: 'CSS3',
			text: 'This style language allows me to create absolutely any look for your site or application. Everything is limited only by your imagination!',
		},
		{
			imgUrl: js,
			title: 'JavaScript',
			text: 'This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, receiving data from the server, and much more.',
		},
		{
			imgUrl: angular,
			title: 'Angular',
			text: 'AngularJS was a JavaScript-based open-source front-end web framework for developing single-page applications.',
		},
		{
			imgUrl: reactSkill,
			title: 'React',
			text: 'This library allows you to create web applications. We can create the most interactive product just for your goals.',
		},
		{
			imgUrl: nodeJs,
			title: 'NodeJS',
			text: 'This platform allows you to create a backend for your product - "brains" that will perform actions that the user does not see.',
		},
		{
			imgUrl: mongo,
			title: 'MongoDB',
			text: 'This is a non-relational database that will store your site or application data.',
		},
	];
	return (
		<section id="skills" className="skills">
			<Container>
				<TitleCompon data={data} />
				<Container className="mt-5">
					<Row lg={4} className="skills__wrapper">
						{skillsData.map(({ imgUrl, title, text }, idx) => {
							return (
								<Card text="light" bg="primary" className="skills__item" key={idx}>
									<Card.Img variant="top" src={imgUrl} className="skills__item-img" />
									<Card.Body>
										<Card.Title style={{ color: '#000' }}>{title}</Card.Title>
										<Card.Text className="skills__item-descr">{text}</Card.Text>
									</Card.Body>
								</Card>
							);
						})}
					</Row>
					<SkillRatings />
				</Container>
			</Container>
		</section>
	);
};

const SkillRatings = () => {
	const data = [
		{
			title: 'Website development',
			progress: 90,
		},
		{
			title: 'Application Creation',
			progress: 84,
		},
		{
			title: 'Working with data',
			progress: 85,
		},
		{
			title: 'Creativity',
			progress: 91,
		},
		{
			title: 'Design creation',
			progress: 87,
		},
		{
			title: 'Soft Skills',
			progress: 83,
		},
	];
	return (
		<div className="skills__ratings">
			{data.map(({ title, progress }, idx) => {
				return (
					<div className="skills__ratings-item" key={idx}>
						<div className="title title_fz14 skills__ratings-title">{title}</div>
						<div className="skills__ratings-counter">{progress}%</div>
						<ProgressBar
							variant="warning"
							animated
							now={progress}
							className="skills__ratings-line"
						/>
					</div>
				);
			})}
		</div>
	);
};
export default Skills;

/*
<Card className="skills__item">
<Card.Img variant="top" src={item.imgUrl} className="skills__item-img" />
<Card.Body>
	<Card.Title>{item.title}</Card.Title>
	<Card.Text className="skills__item-descr">{item.text}</Card.Text>
</Card.Body>
</Card>

			<div className="skills__ratings-item">
				<div className="title title_fz14 skills__ratings-title">Создание сайтов</div>
				<div className="skills__ratings-counter">90%</div>
				<ProgressBar variant="warning" animated now={90} className="skills__ratings-line" />
			</div>
*/
