import React from 'react';
import Excercises from '../Excercises/Excercises';
import Sidebar from '../Sidebar/Sidebar';
import './Main.css';

const Main = () => {
    return (
        <div className='flex'>
            <Excercises></Excercises>
            <Sidebar></Sidebar>            
        </div>
    );
};

export default Main;