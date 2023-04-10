import './App.scss';
import Header from './components/header/Header.jsx';
// import MidSection from './components/midle/Mid-section';
import Pictuer from './components/section-picture/Picture';
import Exercise from './components/exersize/exercise';
import Footer from './components/footer/Footer';
// import photo2 from "./images/photo-2.png"
// import photo3 from "./images/photo-3.png"
// import photo4 from "./images/photo-4.png"
// import personal from "./images/personal.png"
// import wa from "./images/WhatsAppButtonGreenMedium.png"
import { BsWhatsapp } from "react-icons/bs"
import Philosophie from './components/philosophie/Philosophie.jsx';
import Nutrion from './components/nutrition/Nutrion.jsx';


function App() {
	// const about = document.getElementsByClassName('')

	return (
		<div className="app">
			<Header />
			<div className='app-container'>

				<Pictuer />

				<Philosophie />

				<Exercise />

				<Nutrion />


			</div>

			<Footer />
		</div>
	);
}

export default App;



{/* <div id={'alq'} >
				<MidSection
					image={photo2}
					title={"Nuestro lema:"}
					text={"Nuestro personal tiene muchos años de experiencia. Y seguimos mejorando tanto los métodos de limpieza como los medios para mejorar el servicio."}
				/>
			</div> */}