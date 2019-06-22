
import React from "react"
import styled from "styled-components"
import { spacing, buttonSize } from "../styles/Base.js"
import { colorWhite, colorBlack } from "../styles/Colors.js"
import { H3 } from "../styles/Typography.js"

const Container = styled.button`

	height: ${ buttonSize }px;
	padding: 0 ${ buttonSize / 2 }px;
	background-color: ${ props => props.color || colorWhite };
	
	:focus {

		outline: 0;
	}
`

const Button = ({ color, children }) =>

	<Container color={ color }>
		<H3 as="span" color={ color ? colorWhite : colorBlack }>{ children }</H3>
	</Container>

export default Button
