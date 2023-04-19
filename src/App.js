import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerName: null,
      playerStats: {}
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getPlayerId()
    console.log(this.state.playerName)
  }

  handleChange = (event) => {
    const replace = event.target.value.split(" ").join("_");
    if(replace.length > 0){
      this.setState({playerName: replace})
    } else {
      alert("Please type players name")
    }
  }


getPlayerId = () => {
  axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
  .then(async res => {
    console.log(res.data.data)
    if(res.data.data[0] === undefined){
      alert("Cant search player")
    } else if(res.data.data.length > 1){
      alert("Make it more specific")
    } else{
      await this.getPlayerStats(res.data.data[0].id)
    }

  }).catch(err => {
    console.log(err)
  })
}

getPlayerStats = (playerId) => {
  axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerId}`)
  .then(async res => {
    console.log(res.data.data)
    this.setState({playerStats: res.data.data[0]})
  }).catch(err => {
    console.log(err)
  })
}

componentDidMount(){
  this.getPlayerId()
  this.getPlayerStats()
}

  render(){
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}> 
        <label>
          Name 
          <input
          className="user-search"
           type="text"
           value={this.state.value}
           onChange={this.handleChange}
           placeholder="please enter players name"
          />
          <input type="submit" value="Submit"/>
        </label>
      </form>
      <div className="stats">

      {this.state.playerName}

      <br />
      <br />


        Games Played: {this.state.playerStats["games_played"]}
        <br />
        Points Averaged: {this.state.playerStats["pts"]}
        <br />
        Rebounds Averaged: {this.state.playerStats["reb"]}
        <br />
        Assists Averaged: {this.state.playerStats["ast"]}
        <br />
      </div>
    </div>
  );
}
}
export default App;
