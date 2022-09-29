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

    return (
        <div className='md:flex md:flex-row-reverse'>
            <Sidebar excerciseTime={excerciseTime}></Sidebar>            
            <Excercises handleTime={handleExcerciseTime}></Excercises>            
        </div>
    );
};

export default Main;