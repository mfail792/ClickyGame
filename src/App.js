import React, { Component } from 'react';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Title2 from "./components/Title2";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import games from "./games.json";
import './App.css';

//shuffling function
function shuffleIt(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//setting data values
class App extends Component {
  state = {
    games,
    topScore: 0,
    currentScore: 0,
    rightorWrong: "",
    clicked: [],
  };



  //handles increment counting for scoring
  handleIncrement = () => {
    const newTotal = this.state.currentScore + 1;
    this.setState({
      currentScore: newTotal,
      rightorWrong: "",
    });
    if (newTotal >= this.state.topScore) {
      this.setState({ topScore: newTotal });
    }
    this.handleShuffle();
  };

  //handle click event for cards
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) })
    } else {
      this.handleReset();
    }
  };

  //shuffles cards
  handleShuffle = () => {
    let shuffledIt = shuffleIt(games);
    this.setState({ games: shuffledIt });
  };

  //resets currentScore value
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightorWrong: "",
      clicked: []
    });
    this.handleShuffle();
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

          <Title>Video Game Memories
          </Title>
          <Title2>Try not to click an image twice, see if you can beat your top score!</Title2>

          {this.state.games.map(game => (
            <GameCard
              removeGame={this.removeGame}
              id={game.id}
              key={game.id}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
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


