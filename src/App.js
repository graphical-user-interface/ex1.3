import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Container, Paper, TextField } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	row: {
		padding: theme.spacing(0.5, 2)
	},
	input: {
		height: 2
	}
}))
export default function App() {
	const classes = useStyles()

	const [mouseClick, setMouseClick] = useState(0)
	const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 })
	const [wheel, setWheel] = useState(0)

	const body = document.querySelector("html")
	const handleMouseClick = () => {
		body.onmousedown = () => {
			setMouseClick(mouseClick + 1)
		}
	}
	const handleMouseMove = () => {
		body.onmousemove = (e) => {
			setMouseMove({ x: e.clientX, y: e.clientY })
		}
	}
	const handleWheel = () => {
		body.onwheel = (e) => {
			setWheel(wheel + e.deltaY)
		}
	}
	useEffect(() => {
		handleMouseClick()
		handleMouseMove()
		handleWheel()
	}, [mouseClick, mouseMove, wheel])

	return (
		<div className={classes.root}>
			<Container maxWidth='sm'>
				<Grid container>
					<Grid item xs={2}></Grid>
					<Grid item xs={8}>
						<Paper elevation={2} style={{ paddingBottom: 10 }}>
							<Grid container className={classes.row}>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										style={{ marginTop: 10 }}
										fullWidth={true}
										InputProps={{
											classes: {
												input: classes.input
											}
										}}
										value={`Mouse was clicked ${mouseClick} times`}
									/>
									<TextField
										variant='outlined'
										style={{ marginTop: 10 }}
										fullWidth={true}
										InputProps={{
											classes: {
												input: classes.input
											}
										}}
										value={`Mouse was moved to x: ${mouseMove.x} and y: ${mouseMove.y}`}
									/>
									<TextField
										variant='outlined'
										style={{ marginTop: 10 }}
										fullWidth={true}
										InputProps={{
											classes: {
												input: classes.input
											}
										}}
										value={`Mouse wheel event: ${wheel}`}
									/>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={2}></Grid>
				</Grid>
			</Container>
		</div>
	)
}
