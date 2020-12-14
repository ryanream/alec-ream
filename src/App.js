import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
	return (
		<Router>
			<div>
				<Route path='/' component={Home} />
			</div>
		</Router>
	);
}

export default App;
