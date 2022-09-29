import React from 'react';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Questions = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <SingleQuestion title="How does React Work?" answer="React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code."></SingleQuestion> 

            <SingleQuestion title="Difference Between props and state" answer="State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child."></SingleQuestion>

            <SingleQuestion title="Why should use useEffect hook except data load?" answer="There are so many case you can use useEffect hook except data load. These are State management, Conditional rendering, Toggle flags,
            Live filtering, Trigger animation on new array value, Update data on fetched API etc."></SingleQuestion>
        </div>
    );
};

export default Questions;