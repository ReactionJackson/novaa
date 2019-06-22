
import React, { Fragment } from "react"
import styled from "styled-components"
import { spacing } from "../styles/Base.js"
import { Logo, MenuItem } from "../styles/Typography.js"


const Container = styled.ul`

	z-index: 300;
	display: flex;
	justify-content: space-between;
	position: absolute;
	left: ${ spacing }px;
	bottom: ${ spacing }px;
	width: 200px;
`

const SocialMedia = () =>

	<Container>
		<li><a href="#" target="_blank">O</a></li>
		<li><a href="#" target="_blank">O</a></li>
		<li><a href="#" target="_blank">O</a></li>
		<li><a href="#" target="_blank">O</a></li>
		<li><a href="#" target="_blank">O</a></li>
		<li><a href="#" target="_blank">O</a></li>
	</Container>

export default SocialMedia
