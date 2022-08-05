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
			<SideMenu />
			<Promo />
			<AboutMe />
			<Resume />
			<Skills />
			<Portfolio />
			<Contacts />
		</div>
	);
}

export default App;
