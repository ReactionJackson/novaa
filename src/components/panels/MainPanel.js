
import React, { Component } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Button from "../elements/Button.js"
import Background from "../elements/Background.js"
import { spacing, speed, easingMain } from "../styles/Base.js"
import { colorBlack } from "../styles/Colors.js"

// Primary Component:

export default class MainPanel extends Component {

	render() {

		const { sidePanelOpen } = this.props

		return (

			<Layout>
				<Overlay visible={ sidePanelOpen } />
				<VideoCTA visible={ !sidePanelOpen }>
					<Button>Watch the video</Button>
				</VideoCTA>
				<Background image="hmltm.png" />
			</Layout>	
		)
	}
}

// Styled Compnents:

const Layout = styled.section`

	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	background-color: #dadada;
`

const Overlay = styled.div`

	z-index: 200;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: ${ colorBlack };
	opacity: ${ ({ visible }) => visible ? .5 : 0 };
	transition: opacity ${ easingMain } ${ speed * 4 }ms;
	will-change: opacity;
`

const VideoCTA = styled.div`
	
	z-index: 100;
	position: relative;
	margin-bottom: ${ spacing * 2 }px;
	opacity: ${ ({ visible }) => visible ? 1 : 0 };
	transition: opacity ${ easingMain } ${ speed * 4 }ms;
	will-change: opacity;
`
