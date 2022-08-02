import Container from 'react-bootstrap/esm/Container';
import './promo.scss';

const Promo = () => {
	return (
		<section className="promo">
			<Container>
				<div className="title title_fz16 promo__subtitle">Меня зовут Константин</div>
				<h1 className="title title_fz48 promo__title">Я web-разработчик из города Днепр</h1>
				<div className="promo__btns">
					<button className="btn btn-primary">Портфолио</button>
					<button className="btn btn-primary">Про меня</button>
				</div>
			</Container>
		</section>
	);
};
export default Promo;
