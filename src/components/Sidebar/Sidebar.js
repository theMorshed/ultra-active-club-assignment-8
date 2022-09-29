import React from 'react';
import Author from '../Author/Author';
import BreakTime from '../BreakTime/BreakTime';
import ExcerciseDetails from '../ExcerciseDetails/ExcerciseDetails';
import './Sidebar.css';

const Sidebar = ({ excerciseTime }) => {
    return (
        <div className='w-1/4 p-8 bg-white'>
            <Author></Author>
            <BreakTime></BreakTime>
            <ExcerciseDetails excerciseTime={excerciseTime}></ExcerciseDetails>
        </div>
    );
};

export default Sidebar;