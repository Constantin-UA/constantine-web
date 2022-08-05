import firstImg from '../../resources/pictures/portfolio/cat1-l.jpg';
import secondImg from '../../resources/pictures/portfolio/pic1-s.jpg';
import thirdImg from '../../resources/pictures/portfolio/pic1-xl.jpg';
import fourthImg from '../../resources/pictures/portfolio/pic1-xxl.jpg';
import TitleCompon from '../titleCompon/TitleCompon';
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import './portfolio.scss';
const Portfolio = (props) => {
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
				class: 'title title_fz16 title__section-title',
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
			<Container>
				<TitleCompon data={state.data} />
				<Carousel fade className="portfolio__carousel">
					{state.items.map((item, i) => {
						return (
							<Carousel.Item interval={5000} className="portfolio__carousel_item" key={i}>
								<img className="d-block w-100" src={item.src} alt={item.alt} />
								<Carousel.Caption>
									<h3>{item.title}</h3>
									<p>{item.subtitle}</p>
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
