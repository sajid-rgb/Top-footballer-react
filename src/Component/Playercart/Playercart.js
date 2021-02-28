import React from 'react';
import Playerdetail from '../Playerdetail/Playerdetail';
import './PlayerCart.css'
const Playercart = (props) => {
    const player = props.player;
    const user = props.user;
    console.log(user);
    const total=player.reduce((total,value)=>total+parseInt(value.salary),0)
    return (
        <div className="playerIncome">
           <p>You addded: {props.player.length} players in your favorite list</p>
           <p>Total Salary of added player:{total}</p>
           
            {
                player.map(item =><Playerdetail item={item}></Playerdetail>)
            }
           
        </div>
    );
};

export default Playercart;