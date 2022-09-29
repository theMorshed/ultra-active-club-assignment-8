import React from 'react';
import './SingleExcercise.css';

const SingleExcercise = (props) => {
    const { name, image, desc, time } = props.excercise;
    return (
        <div className='bg-white p-5 rounded-lg'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{ desc }</p>
            <p>Time Required: {time}</p>
            <button>Add to List</button>
        </div>
    );
};

export default SingleExcercise;