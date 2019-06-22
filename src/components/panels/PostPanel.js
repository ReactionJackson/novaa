
import React, { Component } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { spacing, speed, easingMain } from "../styles/Base.js"
import { colorWhite } from "../styles/Colors.js"

const Layout = styled.section`

	z-index: 300;
	position: absolute;
	right: 0;
	top: 0;
	width: 50%;
	height: 100vh;
	background-color: ${ colorWhite };
	transform: translate3d(100%, 0, 0);
	transition: transform ${ easingMain } ${ speed * 4 }ms;
	will-change: transform;
`

export default class PostPanel extends Component {

	state = {}

	render() {

		return (

			<Layout>
				PostPanel
			</Layout>
		)
	}
}
