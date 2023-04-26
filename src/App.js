import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './Navbar';


class App extends Component {

  
  constructor(props){
    super(props)
    this.state = {
      playerName: null,
      showText: false,
      playerStats: {}
    }

  
  }

  handleButtonClick = () => {
    this.setState(prevState => ({ showText: !prevState.showText }));
  };

  

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

      <Navbar />
      <br /><br />
      <form onSubmit={this.handleSubmit}> 
        <div className="user-input">
        <label>
          Enter Your Player's Name <br />
          <input
          class="user-search"
           type="text"
           value={this.state.value}
           onChange={this.handleChange}
          />
          
          <br />
          <button type="submit">Submit</button>
          

        </label>

        
        </div>
      </form>
      <div className="stats">

    
      
        Games Played: {this.state.playerStats["games_played"]}
        <br />
        Points Averaged: {this.state.playerStats["pts"]}
        <br />
        Rebounds Averaged: {this.state.playerStats["reb"]}
        <br />
        Assists Averaged: {this.state.playerStats["ast"]}
        <br />

        {this.state.showText && (
          <p>
           Field Goals Made: {this.state.playerStats["fgm"]}
           <br />
           Field Goals Attempeted: {this.state.playerStats["fga"]}
           <br />
           Steals Averaged: {this.state.playerStats["stl"]}
           <br />
           Blocks Averaged: {this.state.playerStats["blk"]}
           <br />
           Turnovers Averaged: {this.state.playerStats["turnover"]}
           <br />
          </p>
        )}
        <button onClick={this.handleButtonClick}>
          {this.state.showText ? 'Show Less' : 'Show More'}
        </button>
        
     
       
      </div>
    </div>
  );
}
}


export default App;
