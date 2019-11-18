import React, { Component } from 'react';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import games from "./games.json";
import './App.css';


//setting global props
class App extends Component {
  state = {
    games,
    topScore: 0,
    currentScore: 0,
    rightorWrong: "",
    clicked: [],

  };

  removeGame = id => {
    // Filter this.state.games for games with an id not equal to  the id being removed
    const games = this.state.games.filter(game => game.id !== id);
    // Set this.state.games equal to the new games array
    this.setState({ games });
  };

  // Rendering components
  render() {
    return (
      <Wrapper>
        <Title>Video Game Character Click!</Title>
        {this.state.games.map(game => (
          <GameCard
            removeGame={this.removeGame}
            id={game.id}
            key={game.id}
            name={game.name}
            image={game.image}
            occupation={game.occupation}
            location={game.location}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;


