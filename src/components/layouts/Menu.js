
import React from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { spacing } from "../styles/Base.js"
import { Logo, MenuItem } from "../styles/Typography.js"

const Container = styled.ul`
	
	z-index: 300;
	display: flex;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	padding: ${ spacing }px;
	background-color: goldenrod;
`

const Menu = () =>

	<Container>
		<Logo><Link to="/">Novaa</Link></Logo>
		<MenuItem><Link to="/posts">Posts</Link></MenuItem>
		<MenuItem><Link to="/music">Music</Link></MenuItem>
		<MenuItem><Link to="/shows">Shows</Link></MenuItem>
		<MenuItem><Link to="/words">Words</Link></MenuItem>
	</Container>

export default Menu
