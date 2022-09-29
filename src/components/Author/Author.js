import React from 'react';
import './Author.css';

const Author = () => {
    return (
        <div>
            <div className="author flex">
                <img className='w-16 h-16 rounded-full' src="author.jpg" alt="" />
                <div className='ml-5'>
                    <p className='text-xl font-semibold'>Manjur Morshed</p>
                    <p className='text-sm'>Chittagong, Bangladesh</p>
                </div>
            </div>
            <div className="author-info flex bg-amber-50 px-12 py-4 mt-8 rounded-lg justify-between">
                <div>
                    <p className='font-semibold text-4xl'>60<sub className='font-normal text-gray-400'>kg</sub></p>
                    <p className='text-gray-600 mt-1'>Weight</p>
                </div>
                <div>
                    <p className='font-semibold text-4xl'>5.2</p>
                    <p className='text-gray-600 mt-1'>Height</p>
                </div>
                <div>
                    <p className='font-semibold text-4xl'>30<sub className='font-normal text-gray-400'>yrs</sub></p>
                    <p className='text-gray-600 mt-1'>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Author;