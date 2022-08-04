import './titleCompon.scss';

const TitleCompon = (props) => {
	let title = 'title title_fz16 ' + props.classSection.title;
	let subtitle = 'title title_fz36 ' + props.classSection.subtitle;

	return (
		<>
			<h2 className={title}>An experience</h2>
			<div className={subtitle}>How can I be useful</div>
		</>
	);
};
export default TitleCompon;

//<h2 className="title title_fz16 title__section-title">An experience</h2>
//<div className="title title_fz36 title__section-subtitle">How can I be useful</div>
