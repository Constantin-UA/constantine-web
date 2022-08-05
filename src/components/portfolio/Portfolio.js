import firstImg from '../../resources/portfolio/lionfish.png';
import secondImg from '../../resources/pictures/portfolio/1.jpg';
import thirdImg from '../../resources/pictures/portfolio/2.jpg';
import fourthImg from '../../resources/pictures/portfolio/3.jpg';
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
		titleText: {
			title: 'Portfolio',
			subtitle: 'My works',
		},
	};

	return (
		<section id="portfolio" className="portfolio">
			<Container>
				<TitleCompon titleText={state.titleText} />
				<Carousel fade className="portfolio__carousel">
					{state.items.map((item, i) => {
						return (
							<Carousel.Item interval={5000} className="portfolio__carousel_item">
								<img className="d-block w-100" src={state.items[i].src} alt={state.items[i].alt} />
								<Carousel.Caption>
									<h3>{state.items[i].title}</h3>
									<p>{state.items[i].subtitle}</p>
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
