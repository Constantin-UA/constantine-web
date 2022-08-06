import './resume.scss';
import courses from '../../resources/icons/resume/courses.svg';
import designer from '../../resources/icons/resume/designer.svg';
import developer from '../../resources/icons/resume/developer.svg';
import university from '../../resources/icons/resume/university.svg';
import TitleCompon from '../titleCompon/TitleCompon';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';

const Resume = () => {
	const data = {
		title: {
			text: 'An experience',
			class: 'title title_fz24 title__section-title',
			nummber: 3,
		},
		subtitle: {
			text: 'How can I be useful',
			class: 'title title_fz36 title__section-subtitle',
		},
	};
	return (
		<section id="resume" className="resume">
			<Container>
				<TitleCompon data={data} />
				<Container className="resume__wrapper">
					<Col className="resume__column">
						<h3 className="title title_fz20 resume__column-title">Education</h3>
						<PareOfLi direction={[0, 1]} />
					</Col>
					<Col className="resume__column">
						<h3 className="title title_fz20 resume__column-title">Additionally</h3>
						<PareOfLi direction={[2, 3]} />
					</Col>
				</Container>
			</Container>
		</section>
	);
};
const PareOfLi = (props) => {
	const data = [
		{
			name: 'НМетАУ',
			location: 'Dnipro (2005-2009)',
			body: 'Information and control systems and technologies. Information Technology design. Programming embedded and mobile devices. Web systems programming.',
			image: {
				alt: 'university',
				url: university,
			},
		},
		{
			name: 'Udemy',
			location: 'Web development courses',
			body: 'Everything you need to create websites. 96 lectures. 33.5 hours This course is aimed at detailed training in creating sites, without water, knowledge and practice. Working with graphic editors in the context of layout: Photoshop, Figma, Avocode. Using HTML5 and CSS3 in projects. As well as Git and GitHub, Bootstrap 4/5, Sass/Scss, BEM	methodology...',
			image: {
				alt: 'courses',
				url: courses,
			},
		},
		{
			name: 'Angular 9',
			location: 'Udemy 2020',
			body: 'Development of the coolest dynamic applications. 169 lectures 17.5 hours Most Relevant knowledge of the excellent Frontend technology Angular from Google. Holistic system in all the subtleties of the framework. Including TypeScript and RxJS.',
			image: {
				alt: 'developer',
				url: developer,
			},
		},
		{
			name: 'JavaScript + React',
			location: 'Udemy 2021',
			body: 'The most popular programming language is JavaScript and the React library. 124 lectures. 41.5 hours Detailed study of JavaScript and the most popular library on	based on JavaScript - React.js with all the necessary technologies (including redux).	Algorithms, object-oriented programming, AJAX technologies, JSON, npm, Babel,	Browserify, Webpack, etc.',
			image: {
				alt: 'designer',
				url: designer,
			},
		},
	];

	const onLoadItem = (chois) => {
		return (
			<li key={chois}>
				<div className="resume__item">
					<div className="resume__item-head">
						<div className="resume__item-icon">
							<img src={data[chois].image.url} alt={data[chois].image.alt} />
						</div>
						<div className="title title_fz14">{data[chois].name}</div>
						<div className="resume__item-location">{data[chois].location}</div>
					</div>
					<div className="resume__item-body">{data[chois].body}</div>
				</div>
			</li>
		);
	};
	return <ul>{props.direction.map((el) => onLoadItem(el))}</ul>;
};
export default Resume;
