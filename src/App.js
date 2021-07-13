import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core';
import './App.css';
import React, { useState } from 'react';




const mainContainer = {
  marginTop: '115px',
  backgroundColor: '#cfe8fc',
  height: '50vh',
};

class App extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     items: [],
     isLoaded: false,
   }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  }



  render() {
    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    } else {
      return(
        <div className="App">
        <NavBar />
        <Container maxWidth='lg'>
          <div style={mainContainer}>
          <h1 >Space Learning Game</h1>
          <h2 >Sample API data- Nasa JSON API in progress</h2>
          <h3>Pulling from: https://jsonplaceholder.typicode.com/users</h3>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                name. {item.name} | city : {item.city}
              </li>
            ))}
          </ul>
          </div>
          
        </Container>
       
        </div>
      )
    }
    const mystyle = {

      palette: {
        primary: {
          main: "#2e1667",
        },
        secondary: {
          main: "#c7d8ed",
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
      wrapper: {
        width: "65%",
        margin: "auto",
        textAlign: "center"
      },
      bigSpace: {
        marginTop: "5rem"
      },
      littleSpace: {
        marginTop: "2.5rem",
      },
      grid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      },


    };
    /*
    const theme = createMuiTheme {
      palette: {
        primary: {
          main: "#2e1667",
        },
        secondary: {
          main: "#c7d8ed",
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
    };
    
    const styles = makeStyles{
      wrapper: {
        width: "65%",
        margin: "auto",
        textAlign: "center"
      },
      bigSpace: {
        marginTop: "5rem"
      },
      littleSpace: {
        marginTop: "2.5rem",
      },
      grid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      },
    }*/

//    const classes = styles(); 

    return (

      <div >
        <NavBar />
        <Container maxWidth='sm'>
          <h1 style={mainContainer}>Space Learning Game</h1>
        </Container>
      </div>
    );
  }

  /*const classes = styles(); 

  return (
    <div>
        <NavBar/>
   <Container maxWidth='sm'>
     <h1 style={mainContainer}>Space Learning Game</h1>
   </Container>
    </div>

  );*/
}

export default App