import Carousel from 'react-bootstrap/Carousel';
import './carouselF.scss';
function CarouselF({ items }) {
	return (
		<Carousel fade className="carouselF">
			{items.map(({ srcImg, alt, siteUrl, title }, idx) => {
				return (
					<Carousel.Item key={idx}>
						<img src={srcImg} alt={alt} />
						<Carousel.Caption>
							<a href={siteUrl}>{title}</a>
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}

export default CarouselF;
