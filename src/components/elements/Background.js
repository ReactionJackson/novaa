
import React from "react"
import styled from "styled-components"
import { colorBlack } from "../styles/Colors.js"

const Background = styled.div`

	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: url(${ props => require(`../../img/${ props.image }`) }) center no-repeat #000;
	background-size: cover;
`

export default Background
