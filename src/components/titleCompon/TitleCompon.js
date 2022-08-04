import './titleCompon.scss';

const TitleCompon = (props) => {
	let title = 'title title_fz16  title__section-title';
	let subtitle = 'title title_fz36 title__section-subtitle';

	return (
		<>
			<h2 className={title}>{props.titleText.title}</h2>
			<div className={subtitle}>{props.titleText.subtitle}</div>
		</>
	);
};
export default TitleCompon;

//<h2 className="title title_fz16 title__section-title">An experience</h2>
//<div className="title title_fz36 title__section-subtitle">How can I be useful</div>

//<h2 className="title title_fz16 title__section-title">Навыки</h2>
//<div className="title title_fz36 title__section-subtitle">Что я использую в работе</div>
