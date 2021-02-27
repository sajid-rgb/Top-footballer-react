import './App.css';
import Fakedata from "./Component/Fakedata/Fakedata.json";
import {useState } from 'react';
import Main from "./Component/Main/Main";
import Playercart from "./Component/Playercart/Playercart";
import Header from "./Component/Header/Header";

function App() {
 const [player, setPlayer] = useState([])
 const [user,setUser] = useState([])
  const buttonClick=(pl)=>{
    if(player.indexOf!=-1){
      const newPlayer = [...player,pl]
      setUser(pl)
      setPlayer(newPlayer)
    }
    else{
      alert("Error")
    }
   
  }
  return (
   <div>
     <Header></Header>
      <div className="playerDiv">
      
      <div className="App">
        
        {
          Fakedata.map(data=><Main data={data} buttonClick={buttonClick}></Main>)
        }
        
      </div>

      <div className="secondDiv">
      <Playercart player={player} user={user}></Playercart>
      </div>
      </div>
   </div>
  );
}

export default App;
