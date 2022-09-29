import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Author from '../Author/Author';
import BreakTime from '../BreakTime/BreakTime';
import ExcerciseDetails from '../ExcerciseDetails/ExcerciseDetails';
import './Sidebar.css';

const Sidebar = ({ excerciseTime }) => {
    const [breakTime, setBreakTime] = useState(0);
    const handleBreakTime = (breakTime) => {
        setBreakTime(breakTime);
        localStorage.setItem('break-time', breakTime);
    }
    const notify = () => toast('All Activity Completed Successfully!');
    return (
        <div className='w-1/4 p-8 bg-white'>
            <Author></Author>
            <BreakTime handleBreakTime={handleBreakTime}></BreakTime>
            <ExcerciseDetails breakTime={breakTime} excerciseTime={excerciseTime}></ExcerciseDetails>
            <button onClick={notify} className='w-full bg-amber-800 py-4 rounded-lg mt-8 hover:bg-amber-700 text-white'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Sidebar;