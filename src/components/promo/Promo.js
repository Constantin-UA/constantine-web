import Container from 'react-bootstrap/esm/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './promo.scss';

const Promo = () => {
	return (
		<section className="promo">
			<Container>
				<div className="title title_fz16 promo__subtitle">My name is Kostyantin</div>
				<h1 className="title title_fz48 promo__title">I am web-developer from Dnipro city</h1>
				<ButtonGroup aria-label="Buttons promo" className="promo__btns" size="sm">
					<a href="#portfolio" className="btn btn-primary">
						My works
					</a>
					<a href="#aboutme" className="btn btn-primary">
						About me
					</a>
				</ButtonGroup>
			</Container>
		</section>
	);
};
export default Promo;
