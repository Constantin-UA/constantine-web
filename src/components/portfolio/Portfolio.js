import firstImg from '../../resources/pictures/portfolio/marvel-api.png';
import secondImg from '../../resources/pictures/portfolio/coffee.png';
import thirdImg from '../../resources/pictures/portfolio/iptracker.png';
import TitleCompon from '../titleCompon/TitleCompon';
import Container from 'react-bootstrap/esm/Container';
import CarouselF from '../carousel/CarouselF';
import './portfolio.scss';
import { Component } from 'react';
class Portfolio extends Component {
	state = {
		title: {
			text: 'Portfolio',
			class: 'title title_fz24 title__section-title',
			nummber: 5,
		},
		subtitle: {
			text: 'My works',
			class: 'title title_fz36 title__section-subtitle',
		},
		items: [
			{
				srcImg: firstImg,
				alt: 'First site',
				title: 'Marvel API',
				subtitle: 'Marvel Hero and comics',
				siteUrl: 'http://marvel.constantine-web.space',
			},
			{
				srcImg: secondImg,
				alt: 'Second site',
				title: 'Coffee shop',
				subtitle: 'Coffe shop',
				siteUrl: 'http://coffee.constantine-web.space',
			},
			{
				srcImg: thirdImg,
				alt: 'Third site',
				title: 'IP Adress tracker',
				subtitle: 'Show on map ip addres',
				siteUrl: 'http://ip.constantine-web.space',
			},
		],
	};

	render() {
		const { title, subtitle, items } = this.state;
		return (
			<section id="portfolio" className="portfolio">
				<Container className="portfolio__wrapper">
					<TitleCompon title={title} subtitle={subtitle} />
					<CarouselF items={items} />
				</Container>
			</section>
		);
	}
}

export default Portfolio;
