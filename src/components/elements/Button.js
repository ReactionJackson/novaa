
import React from "react"
import styled from "styled-components"
import { spacing } from "../styles/Base.js"
import { colorWhite, colorBlack } from "../styles/Colors.js"
import { H3 } from "../styles/Typography.js"

const Container = styled.button`

	height: 60px;
	padding: 0 ${ spacing / 2 }px;
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
