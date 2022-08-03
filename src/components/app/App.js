import Promo from '../promo/Promo';
import AboutMe from '../aboutMe/AboutMe';
import SideMenu from '../sideMenu/SideMenu';
import Resume from '../resume/Resume';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Contacts from '../contacts/Contacts';
function App() {
	return (
		<div className="app">
			<SideMenu></SideMenu>
			<Promo></Promo>
			<AboutMe></AboutMe>
			<Resume></Resume>
			<Skills></Skills>
			<Portfolio></Portfolio>
			<Contacts></Contacts>
		</div>
	);
}
const counters = document.querySelectorAll('.skills__ratings-counter'),
	lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

export default App;
