const INITIAL_STATE = { photo: 'FOTO' }

export const CarouselReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'FOTO':
			return { ...state, photo: state.photo }

		default:
			return state
	}
}
