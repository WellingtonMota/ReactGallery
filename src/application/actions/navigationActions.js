import { LEFT, RIGHT, TOP, BOTTOM } from './types';

export function left() {
	// console.log('Left');
	return { type: LEFT }
}

export function right() {
	// console.log('Right');
	return { type: RIGHT }
}

export function top() {
	// console.log('Top');
	return { type: TOP }
}

export function bottom() {
	// console.log('Bottom');
	return { type: BOTTOM }
}
