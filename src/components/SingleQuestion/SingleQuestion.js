import React from 'react';

const SingleQuestion = ({title, answer}) => {
    return (
        <div className='bg-white p-5 rounded-lg'>            
            <h4 className='text-2xl font-semibold my-3'>{title}</h4>
            <p className='my-1'>{answer}</p>            
        </div>
    );
};

export default SingleQuestion;