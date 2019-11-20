import React, { Component } from 'react';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import games from "./games.json";
import './App.css';

function shuffleIt(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};



//setting state
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
      <div>
        <Wrapper>
          <Navbar
            currentScore={this.state.currentScore}
            topScore={this.state.topScore}
            rightorWrong={this.state.rightorWrong}
          />

          <Title>Video Game Memories!
        </Title>
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
        <Footer />
      </div>



    );
  }
}
export default App;


