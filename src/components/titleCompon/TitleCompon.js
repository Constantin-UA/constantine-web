import './titleCompon.scss';
import parse from 'html-react-parser';
import { Component } from 'react';

class TitleCompon extends Component {
	render() {
		const { title, subtitle } = this.props;
		let htmlStr = `<h${title.nummber} className="${title.class}">${title.text}</h${title.nummber}>`;
		return (
			<>
				{parse(htmlStr)}
				<div className={subtitle.class}>{subtitle.text}</div>
			</>
		);
	}
}

export default TitleCompon;
