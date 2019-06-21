
import React from "react"
import styled from "styled-components"
import * as bp from "./Breakpoints.js"
import { spacing } from "./Base.js"
import { colorBlack, colorWhite, colorGrey1, colorLinkBlue } from "./Colors.js"

// Fonts:

export const fontFallbackSansSerif = `"Helvetica Neue", "Arial", sans-serif`
export const fontFallbackSerif = `"Times New Roman", serif`
export const fontPrimary = `"Domaine", ${ fontFallbackSerif }`
export const fontSecondary = `"Gotham", ${ fontFallbackSansSerif }`
export const fontTertiary = `"PT Serif", ${ fontFallbackSerif }`

// Components:

export const Logo = styled.span`

	font: 700 36px / 36px ${ fontSecondary };
	letter-spacing: .45em;
	text-transform: uppercase;
	color: ${ props => props.color || colorWhite };
`

export const H1 = styled.h1`

	font: 700 60px / 60px ${ fontPrimary };
	letter-spacing: .1em;
	text-transform: uppercase;
	color: ${ props => props.color || colorBlack };
`

export const H2 = styled.h2`

	font: 700 30px / 30px ${ fontPrimary };
	letter-spacing: .1em;
	text-transform: uppercase;
	color: ${ props => props.color || colorGrey1 };
`

export const H3 = styled.h3`

	font: 700 14px / 14px ${ fontSecondary };
	letter-spacing: .2em;
	text-transform: uppercase;
	color: ${ props => props.color || colorBlack };
`

export const MenuItem = styled.li`

	font: 700 14px / 14px ${ fontSecondary };
	letter-spacing: .2em;
	text-transform: uppercase;
	color: ${ props => props.color || colorWhite };
	margin-right: ${ spacing / 2 }px;

	:first-of-type {

		margin-left: auto;
	}

	:last-child {

		margin-right: 0;
	}
`

export const H4 = styled.h4`

	display: flex;
	font: 700 12px / 12px ${ fontSecondary };
	letter-spacing: .3em;
	text-transform: uppercase;
	color: ${ colorBlack };

	&:before {

		content: '';
		width: 35px;
		height: 3px;
		margin: 4px ${ spacing / 2 }px 0 0;
		background-color: ${ colorBlack };
	}
`

export const P = styled.p`

	font: 400 18px / 36px ${ fontTertiary };
	margin-bottom: 30px;
	color: ${ colorBlack };

	strong {

		font-weight: 700;
	}

	a {

		color: ${ colorLinkBlue };
	}
`
