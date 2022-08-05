import './titleCompon.scss';
import parse from 'html-react-parser';
const TitleCompon = ({ data }) => {
	let htmlStr = `<h${data.title.nummber} className="${data.title.class}">${data.title.text}</h${data.title.nummber}>`;
	return (
		<>
			{parse(htmlStr)}
			<div className={data.subtitle.class}>{data.subtitle.text}</div>
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
