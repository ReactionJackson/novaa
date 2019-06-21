
import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Menu from "./components/layouts/Menu.js"
import Home from "./components/pages/Home.js"
import SocialMedia from "./components/layouts/SocialMedia.js"

const App = () =>

	<Router>
		<Menu />
		<Home />
		<SocialMedia />
	</Router>

export default App
