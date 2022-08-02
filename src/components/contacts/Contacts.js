import contactPhoto from '../../resources/pictures/test_photo.png';
import facebookIcon from '../../resources/social/facebook30.svg';
import telegram from '../../resources/social/telegram.svg';
import instagram from '../../resources/social/instagram30.svg';

import './contacts.scss';

const Contacts = () => {
	return (
		<section id="contacts" className="contacts">
			<div className="container">
				<div className="contacts__wrapper">
					<div className="contacts__photo">
						<img src={contactPhoto} alt="contact" />
					</div>
					<div className="contacts__descr">
						<div className="title title_fz16 contacts__subtitle">Контакты</div>
						<h2 className="title title_fz36 contacts__title_main">Свяжитесь со мной</h2>
						<div className="title title_fz14 contacts__text">Любым удобным для вас способом:</div>
						<div className="contacts__social">
							<a href="#" className="contacts__link">
								<img src={facebookIcon} alt="facebook" />
							</a>
							<a href="#" className="contacts__link">
								<img src={telegram} alt="telegram" />
							</a>
							<a href="#" className="contacts__link">
								<img src={instagram} alt="instagram" />
							</a>
						</div>
						<div className="title title_fz14 contacts__text">
							Или оставьте ваши данные и я сама вам напишу:
						</div>
						<form action="#" className="contacts__form" id="form">
							<div className="contacts__input">
								<input name="name" required type="text" id="name" />
								<label htmlFor="name">Ваше имя</label>
							</div>
							<div className="contacts__input">
								<input name="email" required type="email" id="email" />
								<label htmlFor="email">Ваша почта</label>
							</div>
							<div className="contacts__textarea">
								<textarea name="text" type="text" id="etext" cols="30" rows="10"></textarea>
								<label htmlFor="text">Ваше сообщение</label>
							</div>
							<div className="contacts__triggers">
								<button className="contacts__btn btn" type="submit">
									Отправить сообщение
								</button>
								<div className="contacts__policy">
									<input required type="checkbox" className="contacts__policy-checkbox" />
									<span>
										Я согласен(а) с <a href="/policy.html">политикой конфиденциальности</a>
									</span>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contacts;
