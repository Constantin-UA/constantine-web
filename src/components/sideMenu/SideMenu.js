import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuSocial from '../menuSocial/MenuSocial';
import './sideMune.scss';
function SideMune() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="sideMenu" size="sm" onClick={handleShow}>
				Navigate
			</Button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Menu</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Menu />
					<MenuSocial data={'menu__social'} />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}
const Menu = () => {
	const menuItems = [
		['#aboutme', 'ABOUT'],
		['#resume', 'RESUME'],
		['#skills', 'SKILLS'],
		['#portfolio', 'MY WORKS'],
		['#contacts', 'CONTACTS'],
	];
	let li = menuItems.map((item, idx) => {
		return (
			<li className="menu__link" key={idx}>
				<a href={item[0]}>{item[1]}</a>
			</li>
		);
	});
	return <ul className="menu__list">{li}</ul>;
};
export default SideMune;
