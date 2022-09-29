import React from 'react';
import './BreakTime.css';

const BreakTime = ({ handleBreakTime }) => {
    return (
        <div className='mt-8'>
            <h2 className='text-xl font-semibold'>Add a Break</h2>
            <div className='flex bg-amber-50 px-6 py-4 mt-8 rounded-lg justify-between'>
                <p onClick={() => { handleBreakTime(10) }} className='p-2 rounded-lg bg-amber-800 hover:bg-amber-600 text-white'>10m</p>
                <p onClick={() => { handleBreakTime(20) }} className='p-2 rounded-lg bg-amber-800 hover:bg-amber-600 text-white'>20m</p>
                <p onClick={() => { handleBreakTime(30) }} className='p-2 rounded-lg bg-amber-800 hover:bg-amber-600 text-white'>30m</p>
                <p onClick={() => { handleBreakTime(40) }} className='p-2 rounded-lg bg-amber-800 hover:bg-amber-600 text-white'>40m</p>
                <p onClick={() => { handleBreakTime(50) }} className='p-2 rounded-lg bg-amber-800 hover:bg-amber-600 text-white'>50m</p>
            </div>
        </div>        
    );
};

export default BreakTime;