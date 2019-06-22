
import React, { Component } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { spacing, speed, easingMain } from "../styles/Base.js"
import { colorWhite } from "../styles/Colors.js"
import { Logo, MenuItem } from "../styles/Typography.js"

// Data:

const menuItems = [

	{ label: "Posts", path: "/posts" },
	{ label: "Music", path: "/music" },
	{ label: "Shows", path: "/shows" },
	{ label: "Words and Poems", path: "/words" },
]

// Primary Component:

export default class Navigation extends Component {

	constructor(props) {

		super(props)

		this.state = {

			activeItemIndex: -1,
			activeItemWidth: 0,
			activeItemLeft: 0
		}
	}

	componentDidMount() {

		const rect = ReactDOM.findDOMNode(this).getBoundingClientRect()

		console.log(rect)
	}

	handleClick = (event, index) => {

		this.setState({ activeItemIndex: index })
		this.props.toggleSidePanel(event)
	}

	render() {

		const { activeItem, activeItemIndex, activeItemWidth } = this.state

		return (

			<Container>
				<Logo>
					<Link to="/">Novaa</Link>
				</Logo>
				<Menu>
					{
						menuItems.map((item, index) => {

							return (

								<MenuItem
									key={ index }
									active={ activeItemIndex == index ? true : false }
									onClick={ event => this.handleClick(event, index) }
								>
									<Link to={ item.path }>{ item.label }</Link>
								</MenuItem>
							)
						})
					}
					<Underline left={ 0 } width={ `${ activeItemWidth }px` } active />
					<Underline left={ 50 } width={ `${ activeItemWidth }px` } />
				</Menu>
			</Container>
		)
	}
}

// Styled Components:

const Container = styled.div`
	
	z-index: 300;
	display: flex;
	justify-content: space-between;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	padding: ${ spacing }px;
`

const Menu = styled.ul`

	position: relative;
	top: 4px;
	height: 25px;
	display: flex;

	> li:last-child {

		margin-right: 0;
	}
`

const Underline = styled.li`

	position: absolute;
	width: ${ props => props.width || 0 }px;
	height: 3px;
	opacity: ${ props => props.active ? 1.0 : 0.5 };
	background-color: ${ colorWhite };
	transform: translate3d(${ props => props.left || 0 }px, 25px, 0);
	transition: transform ${ easingMain } ${ speed * 4 }ms,
				left ${ easingMain } ${ speed * 4 }ms;
`
