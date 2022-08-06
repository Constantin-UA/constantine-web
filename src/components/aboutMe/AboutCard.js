const AboutCard = ({ cardData }) => {
	if (!cardData) return;
	return (
		<>
			{cardData.map(({ imgSrc, title, descr }, idx) => {
				return (
					<div className="aboutme__block item" key={idx}>
						<img className="aboutme__img" src={imgSrc} alt={imgSrc} />
						<div className="aboutme__title">{title}</div>
						<p className="aboutme__descr">{descr}</p>
					</div>
				);
			})}
		</>
	);
};
export default AboutCard;
