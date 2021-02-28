import React from 'react';

const Playerdetail = (props) => {
    const player = props.item;
    const removePlayer = (player)=>{

    }
    return (
        <div id="div">
            
            
           <img src={player.image} alt=""/>
           <h4>You added {player.first_name} in your add list</h4>
            <p>Total Salary of  {player.first_name}: ${player.salary}</p>
            <button onClick={()=>removePlayer(player)}>Remove</button>
        </div>
    );
};

export default Playerdetail;