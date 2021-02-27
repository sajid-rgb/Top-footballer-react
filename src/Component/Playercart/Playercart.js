import React from 'react';
import './PlayerCart.css'
const Playercart = (props) => {
    const player = props.player;
    const user = props.user;
    console.log(user);
    const total=player.reduce((total,value)=>total+parseInt(value.salary),0)
    return (
        <div className="playerIncome">
            <p>You addded: {props.player.length} players in your favorite list</p>
            <h4>Name:{user.first_name}</h4>
            <p>Total Salary of  {user.first_name}: ${user.salary}</p>
            <p>Total Salary of added player: ${total}</p>
            <img src={user.image} alt=""/>
           
        </div>
    );
};

export default Playercart;