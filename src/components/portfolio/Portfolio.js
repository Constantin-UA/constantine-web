import img_1 from '../../resources/portfolio/1.jpg';
import img_2 from '../../resources/portfolio/2.jpg';
import img_3 from '../../resources/portfolio/3.jpg';
import img_4 from '../../resources/portfolio/4.png';
import img_5 from '../../resources/portfolio/5.jpg';
import img_6 from '../../resources/portfolio/6.jpg';

import './portfolio.scss';
const Portfolio = () => {
	return (
		<section id="portfolio" className="portfolio">
			<div className="container">
				<h2 className="title title_fz16 title__section-title">Портфолио</h2>
				<div className="title title_fz36 title__section-subtitle">Мои работы</div>
				<div className="portfolio__wrapper">
					<a href="#" className="portfolio__item">
						<img src={img_1} alt="first site" />
					</a>
					<a href="#" className="portfolio__item">
						<img src={img_2} alt="first site" />
					</a>
					<a href="#" className="portfolio__item">
						<img src={img_3} alt="first site" />
					</a>
					<a href="#" className="portfolio__item vertical">
						<img src={img_4} alt="first site" />
					</a>
					<a href="#" className="portfolio__item">
						<img src={img_5} alt="first site" />
					</a>
					<a href="#" className="portfolio__item horizontal">
						<img src={img_6} alt="first site" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
