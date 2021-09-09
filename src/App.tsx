import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {  
 const [people, setPeople] = useState<IState["people"]>([
   {
     name: "Pera Peric",
     url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
     age: 33,
     note: "Great dude"
   }
 ])



  return (
    <div className="App">
      <h1>Peeps invited to React party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
