import { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import './skillRating.scss';
class SkillRating extends Component {
	state = {
		data: [
			{
				title: 'Website development',
				progress: 90,
			},
			{
				title: 'Application Creation',
				progress: 84,
			},
			{
				title: 'Working with data',
				progress: 85,
			},
			{
				title: 'Creativity',
				progress: 91,
			},
			{
				title: 'Design creation',
				progress: 87,
			},
			{
				title: 'Soft Skills',
				progress: 83,
			},
		],
	};
	render() {
		const { data } = this.state;
		return (
			<div className="skills__ratings">
				{data.map(({ title, progress }, idx) => {
					return (
						<div className="skills__ratings-item" key={idx}>
							<div className="title title_fz14 skills__ratings-title">{title}</div>
							<div className="skills__ratings-counter">{progress}%</div>
							<ProgressBar
								variant="warning"
								animated
								now={progress}
								className="skills__ratings-line"
							/>
						</div>
					);
				})}
			</div>
		);
	}
}
export default SkillRating;
