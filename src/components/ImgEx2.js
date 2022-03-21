import Image from 'react-bootstrap/Image'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import cimg from '../assets/glass.jpg'

class ImgEx2 extends Component {
	render() {
		return (
			<div>
				<Image width='800' height='400' src={cimg} thumbnail/>
			</div>
			
		);
	}
}

export default ImgEx2;