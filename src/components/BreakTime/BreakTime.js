import React from 'react';
import './BreakTime.css';

const BreakTime = () => {
    return (
        <div className='mt-8'>
            <h2 className='text-xl font-semibold'>Add a Break</h2>
            <div className='flex bg-amber-50 px-6 py-4 mt-8 rounded-lg justify-between'>
                <p className='p-2 rounded-lg bg-amber-800 hover:bg-amber-600 text-white'>10m</p>
                <p className='p-2 rounded-lg bg-amber-800 hover:bg-amber-600 text-white'>20m</p>
                <p className='p-2 rounded-lg bg-amber-800 hover:bg-amber-600 text-white'>30m</p>
                <p className='p-2 rounded-lg bg-amber-800 hover:bg-amber-600 text-white'>40m</p>
                <p className='p-2 rounded-lg bg-amber-800 hover:bg-amber-600 text-white'>50m</p>
            </div>
        </div>        
    );
};

export default BreakTime;