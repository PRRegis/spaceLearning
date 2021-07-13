import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container'
import {Typography} from '@material-ui/core';
import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

const mainContainer = {
  marginTop : '115px',
  backgroundColor: '#cfe8fc',
  height: '50vh',
};

function App() {
  const classes = styles(); 

  return (
    <div>
        <NavBar/>
   <Container maxWidth='sm'>
     <h1 style={mainContainer}>Space Learning Game</h1>
   </Container>
    </div>

  );
}

export default App