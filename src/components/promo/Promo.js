import './promo.scss';
import Container from '../container/Container';
const Promo = () => {
	return (
		<section className="promo">
			<Container>
				<div className="title title_fz16 promo__subtitle">Меня зовут Константин Штанько</div>
				<h1 className="title title_fz48 promo__title">Я web-разработчик из города Днепр</h1>
				<div className="promo__btns">
					<button className="btn promo__link">Портфолио</button>
					<button className="btn promo__link">Про меня</button>
				</div>
			</Container>
		</section>
	);
};
export default Promo;
