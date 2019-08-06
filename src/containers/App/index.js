import React from 'react';
import { Provider } from 'react-redux';

import { Store } from '../../application/store';

import '../../assets/style/Stage/Stage.scss';

import Navigation from '../../components/Navigation';
import Carousel from '../../components/Carousel';

const App = () => {
	return (
		<div className="App">
			<h1>Palco:</h1>
			<Provider store={Store}>
				<Navigation direction='left' />
				<Navigation direction='right' />
				<Navigation direction='top' />
				<Navigation direction='bottom' />
				<Carousel image='' />
			</Provider>
		</div>
	);
}

export default App;
