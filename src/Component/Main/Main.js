import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'

import '../Main/Man.css'
const Main = (props) => {
    const data = props.data;
    const {first_name,club,image,nation,salary} = data;
    return (
        <div className='clubPlayer' style={{marginTop: '10px',backgroundColor: 'grey',marginLeft: '20px',textAlign: 'center'}}>
            <img src={image} alt="" style={{width:"90%",marginTop: '10px',height:'250px',borderRadius:'200px'}}/>
            <h1>{first_name}</h1>
            <h2>Club: {club}</h2>
            <h4>Nation: {nation}</h4>
            <h1>Salary: ${salary}</h1>
            <button onClick={()=>props.buttonClick(data)}><span className="icon"><FontAwesomeIcon icon={faHeart} /></span>Add Player</button>
        </div>
    );
};

export default Main;