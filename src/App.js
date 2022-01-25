import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect} from 'react';

function App() {
  return (
    <div className="app">
      <Header/>
      <CollectionCard id={0} name={'Blue'} traits={[{'value': 7}]} image = 'https://ipfs.thirdweb.com/ipfs/QmfJdGALQZqfvS8rynBGb1PuJ5byyJGkq4nEoFXqH46xQr/0.jpeg'/>
    </div>
  );
}

export default App;
