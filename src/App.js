import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [ruinListData, setRuinListData] = useState([])
  useEffect(() => {
    const getNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x523853ba2d7b9d945D2Ed4258a0613b3434f0204&order_direction=asc')
      console.log(openseaData.data.assets)
    }
    return getNfts();
  }, []) 
  return (
    <div className="app">
      <Header/>
      <CollectionCard id={0} name={'Blue'} traits={[{'value': 7}]} image = 'https://ipfs.thirdweb.com/ipfs/QmfJdGALQZqfvS8rynBGb1PuJ5byyJGkq4nEoFXqH46xQr/0.jpeg'/>
    </div>
  );
}

export default App;
