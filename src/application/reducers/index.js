import { combineReducers } from 'redux';

import { NavigationReducer } from './Navigation';
import { CarouselReducer } from './Carousel';

export const Reducers = combineReducers({
	navigation: NavigationReducer,
	carousel: CarouselReducer,
});
