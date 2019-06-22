
import React, { Component } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Navigation from "./components/layouts/Navigation.js"
import MainPanel from "./components/panels/MainPanel.js"
import SidePanel from "./components/panels/SidePanel.js"
import PostPanel from "./components/panels/PostPanel.js"
import SocialMedia from "./components/layouts/SocialMedia.js"

// Primary Component:

export default class Novaa extends Component {

	state = {

		sidePanelOpen: false
	}

	toggleSidePanel = isOpen => {

		this.setState({ sidePanelOpen: !this.state.sidePanelOpen })
	}

	render() {

		const { sidePanelOpen } = this.state

		return (

			<Router>
				<Navigation toggleSidePanel={ this.toggleSidePanel } />
				<MainPanel sidePanelOpen={ sidePanelOpen } />
				<SidePanel />
				<PostPanel />
				<SocialMedia />
			</Router>
		)
	}
}

// Styled Compnents:

// ...
