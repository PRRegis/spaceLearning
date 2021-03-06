import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../astronaut.jpg'
import logoMobile from '../logoMobile.svg'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

const styles = makeStyles({
    bar: {
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: {
            flexDirection: "column"
        }
    },
    logo: {
        paddingRight: "3rem",
        width: "15%",
        ['@media (max-width:780px)']: {
            display: "none"
        }
    },
    logoMobile: {
        width: "100%",
        display: "none",
        ['@media (max-width:780px)']: {
            display: "inline-block"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#4f25c8"
        },
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"
        }
    }
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <img src={logo} className={classes.logo} />
            <Typography variant="h6" className={classes.menuItem}>
                About
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                How to play
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Priscilla (Ruiz) Seal
            </Typography>
            <Button variant="contained" color="primary" href="https://github.com/PRRegis/spaceLearning">Github</Button>
        </Toolbar>
    )
}

export default NavBar
