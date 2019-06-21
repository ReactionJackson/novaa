
import React, { Component } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Button from "../elements/Button.js"
import { spacing } from "../styles/Base.js"
import { colorBlack, colorLinkBlue, colorSpotifyGreen } from "../styles/Colors.js"

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

const VideoCTA = styled.div`

	margin-bottom: ${ spacing * 2 }px;
`

export default class Home extends Component {

	state = {

		videoOpen: false
	}

	render() {

		return (

			<Layout>
				<VideoCTA>
					<Button>Watch the video</Button>
				</VideoCTA>
			</Layout>
		)
	}
}
