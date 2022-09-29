import React, { useState } from 'react';
import Excercises from '../Excercises/Excercises';
import Sidebar from '../Sidebar/Sidebar';
import './Main.css';

const Main = () => {
    const [excerciseTime, setExcerciseTime] = useState(0);

    const handleExcerciseTime = (time) => {
        let totalTime = excerciseTime + time;
        setExcerciseTime(totalTime);
    }

    console.log(excerciseTime);

    return (
        <div className='flex'>
            <Excercises handleTime={handleExcerciseTime}></Excercises>
            <Sidebar></Sidebar>            
        </div>
    );
};

export default Main;