import React, { useEffect, useState } from 'react';
import SingleExcercise from '../SingleExcercise/SingleExcercise';
import './Excercises.css';

const Excercises = () => {
    const [excercises, setExcercises] = useState([]);
    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setExcercises(data))
    }, []);

    return (
        <div className='w-3/4 bg-amber-100 px-36 py-20 text-left'>
            <h1 className='text-4xl font-semibold text-amber-800 uppercase'>Learn-Programming</h1>
            <h2 className='text-2xl mt-10 mb-6'>Select Today's Learning</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    excercises.map(excercise => <SingleExcercise excercise={excercise} key={excercise.name}></SingleExcercise>)
                }
            </div>
        </div>
    );
};

export default Excercises;