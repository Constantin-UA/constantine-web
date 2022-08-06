import firstImg from '../../resources/pictures/portfolio/cat1-l.jpg';
import secondImg from '../../resources/pictures/portfolio/pic1-s.jpg';
import thirdImg from '../../resources/pictures/portfolio/pic1-xl.jpg';
import fourthImg from '../../resources/pictures/portfolio/pic1-xxl.jpg';
import TitleCompon from '../titleCompon/TitleCompon';
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import './portfolio.scss';
const Portfolio = () => {
	const state = {
		items: [
			{
				src: firstImg,
				alt: 'First site',
				title: 'First',
				subtitle: 'This is my first win.',
			},
			{
				src: secondImg,
				alt: 'Second site',
				title: 'Second',
				subtitle: 'This is my second win.',
			},
			{
				src: thirdImg,
				alt: 'Third site',
				title: 'Third',
				subtitle: 'This is my third win.',
			},
			{
				src: fourthImg,
				alt: 'Fourth site',
				title: 'Fourth',
				subtitle: 'This is my fourth win.',
			},
		],
		data: {
			title: {
				text: 'Portfolio',
				class: 'title title_fz24 title__section-title',
				nummber: 5,
			},
			subtitle: {
				text: 'My works',
				class: 'title title_fz36 title__section-subtitle',
			},
		},
	};

	return (
		<section id="portfolio" className="portfolio">
			<Container className="portfolio__wrapper">
				<TitleCompon data={state.data} />
				<Carousel fade className="portfolio__carousel">
					{state.items.map(({ src, alt, title, subtitle }, i) => {
						return (
							<Carousel.Item className="portfolio__carousel_item" key={i}>
								<img className="d-block w-100 h-100" src={src} alt={alt} />
								<Carousel.Caption>
									<h3>{title}</h3>
									<p>{subtitle}</p>
								</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</Container>
		</section>
	);
};

export default Portfolio;
