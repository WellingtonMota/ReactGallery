import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { left, right, top, bottom } from '../../application/actions/navigationActions';

import '../../assets/style/Components/Navigation.scss';
import chevronLeft from '../../assets/img/chevron-left.svg';

const Navigation = props => {
	const dispatchAction = direction => {
		switch (direction) {
			case 'left':
				return props.left;
			case 'right':
				return props.right;
			case 'top':
				return props.top;
			case 'bottom':
				return props.bottom;

			default:
				return props.left;
		}
	}

	return (
		<>
			<button onClick={dispatchAction(props.direction)}>
				<img
					src={chevronLeft}
					className={`icon icon-chevron-${props.direction}`}
					alt={`Chevron ${props.direction}`} />
			</button>
		</>
	);
}

const mapStateToProps = state => ({ navigation: state.navigation });
const mapDispatchToProps = dispatch => bindActionCreators({
	left,
	right,
	top,
	bottom,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
