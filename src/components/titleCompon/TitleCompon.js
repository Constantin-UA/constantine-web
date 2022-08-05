import './titleCompon.scss';
import parse from 'html-react-parser';
const TitleCompon = (props) => {
	let htmlStr = `<h${props.data.title.nummber} className="${props.data.title.class}">${props.data.title.text}</h${props.data.title.nummber}>`;
	return (
		<>
			{parse(htmlStr)}
			<div className={props.data.subtitle.class}>{props.data.subtitle.text}</div>
		</>
	);
};

export default TitleCompon;

//<h2 className={props.data.title.class}>{props.data.title.text}</h2>
//let title = 'title title_fz16  title__section-title';
//let subtitle = 'title title_fz36 title__section-subtitle';
//<h2 className="title title_fz16 title__section-title">An experience</h2>
//<div className="title title_fz36 title__section-subtitle">How can I be useful</div>

//<h2 className="title title_fz16 title__section-title">Навыки</h2>
//<div className="title title_fz36 title__section-subtitle">Что я использую в работе</div>

//<h2 className="title title_fz16 contacts__title">Contacts</h2>
//<div className="title title_fz36 contacts__subtitle">Get into contact with me</div>
