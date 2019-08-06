import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { foto } from '../../application/actions/carouselActions';

import '../../assets/style/Components/Carousel.scss';

const Carousel = props => {
	return (
		<>
			<div className="carousel">Carousel - {props.carousel.photo}</div>
		</>
	);
}

const mapStateToProps = state => ({ carousel: state.carousel });
const mapDispatchToProps = dispatch => bindActionCreators({
	foto,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
