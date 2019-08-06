const INITIAL_STATE = { directionOption: 'LEFT' }

export const NavigationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LEFT':
			return { ...state, directionOption: state.directionOption }
		case 'RIGHT':
			return { ...state, directionOption: state.directionOption }
		case 'TOP':
			return { ...state, directionOption: state.directionOption }
		case 'BOTTOM':
			return { ...state, directionOption: state.directionOption }

		default:
			return state
	}
}
