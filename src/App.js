import React from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./componens/Wrapper";
import games from "./games.json";
import './App.css';


function App() {
  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>
      <FriendCard
        name={games[0].name}
        image={games[0].image}
        occupation={games[0].occupation}
        location={games[0].location}
      />
      <FriendCard
        name={games[1].name}
        image={games[1].image}
        occupation={games[1].occupation}
        location={games[1].location}
      />
      <FriendCard
        name={games[2].name}
        image={games[2].image}
        occupation={games[2].occupation}
        location={games[2].location}
      />
    </Wrapper>
  );
}

export default App;
