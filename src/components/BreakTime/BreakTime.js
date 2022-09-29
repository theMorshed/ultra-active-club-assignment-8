import React from 'react';
import './BreakTime.css';

const BreakTime = ({ handleBreakTime }) => {
    const breakTimes = [10, 20, 30, 40, 50];
    return (
        <div className='mt-8'>
            <h2 className='text-xl font-semibold'>Add a Break</h2>
            <div className='flex bg-amber-50 px-6 py-4 mt-8 rounded-lg justify-between flex-wrap'>
                {
                    breakTimes.map(breakTime => <p key={breakTime} onClick={() => { handleBreakTime(breakTime) }} className='p-2 rounded-lg bg-amber-800 hover:bg-amber-600 text-white mb-2 cursor-pointer'>{breakTime}m</p>)
                }
            </div>
        </div>
    );
};

export default BreakTime;