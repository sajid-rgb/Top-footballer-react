import React from 'react';

const Playerdetail = (props) => {
    const player = props.item;
    console.log(player);
    return (
        <div>
            
            
           <img src={player.image} alt=""/>
           <h4>You added {player.first_name} in add list</h4>
            <p>Total Salary of  {player.first_name}: ${player.salary}</p>
           
        </div>
    );
};

export default Playerdetail;