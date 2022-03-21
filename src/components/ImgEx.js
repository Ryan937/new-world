import Image from 'react-bootstrap/Image'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import cimg from '../assets/TA.jpg'

class ImgEx extends Component {
	render() {
		return (
			<div>
				{/* <Image src={cimg} fluid/> */}
				{/* <Image src={cimg} rounded/> */}
				{/* <Image src={cimg} roundedCircle/> */}
				<Image width='500' height='500' src={cimg} thumbnail/>
			</div>
			
		);
	}
}

export default ImgEx;