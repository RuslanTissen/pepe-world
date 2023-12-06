import './App.scss';
import Header from './components/header/Header.jsx';
import Stretching from './components/stretching/Stretching.jsx';
import Pictuer from './components/section-picture/Picture';
import Exercise from './components/exersize/exercise';
import Footer from './components/footer/Footer';
import Philosophie from './components/philosophie/Philosophie.jsx';
import Nutrion from './components/nutrition/Nutrion.jsx';

function App() {

	return (
		<div className="app">
			<Header />
			<div className='app-container'>

				<Pictuer />

				<Philosophie />

				<Exercise />

				<Nutrion />

				<Stretching />

			</div>

			<Footer />
		</div>
	);
}

export default App;