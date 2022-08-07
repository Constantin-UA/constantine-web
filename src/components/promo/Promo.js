import Container from 'react-bootstrap/esm/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Component from 'react';
import './promo.scss';

class Promo extends Component {
	render() {
		return (
			<section className="promo">
				<Container>
					<div className="title title_fz16 promo__subtitle">My name is Konstantin</div>
					<h1 className="title title_fz48 promo__title">Web-developer I am. From Ukraine.</h1>
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
	}
}
export default Promo;
