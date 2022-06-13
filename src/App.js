
import React, { Component} from 'react';
import './App.css';
import axios from 'axios';
// import { application } from 'express';

class App extends Component {
constructor(props){
  super(props)
  this.state = {players:[]
 }
}


async componentDidMount(){
  const url = "https://www.balldontlie.io/api/v1/players"
  let result = null;
  try {
    result = await axios(url, {
      headers:  {
        Accept: "application/Json"
      }
    })
  } catch(e) {
    console.log(e)
  }
  this.setState({players: result.data.data})
}
render(){
  const {players} = this.state
  console.log({players})
  let mappedArray = (players).map((player) => {
    return (
      <li>{player.first_name} {player.last_name} {player.weight_pounds}</li>
    )
  })
  return (
    <div className="App">
     <ul>{mappedArray}</ul>
    </div>
  );
}
}


export default App;
