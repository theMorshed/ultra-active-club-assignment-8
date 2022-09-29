import React from 'react';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Questions = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <SingleQuestion title="How does React Work?" answer="React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab."></SingleQuestion> 
            <SingleQuestion title="Difference Between props and state" answer="React is an opensource JavaScript library that offers a visual overview of the JavaScript architecture for conventional MVC. React promises programmers a model in which substrates cannot directly influence enclosing components—data are downstream, data changes in HTML are efficiently modified, and the DOM is abstracted to boost performance using Virtual DOM. How can we access data from the previous component if the data is just being flowed from components to components? The answer is props. React uses data transmission props that we need to transfer to various components. The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child. A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable."></SingleQuestion>
            <SingleQuestion title="Why should use useEffect hook except data load?" answer="There are so many case you can use useEffect hook except data load. "></SingleQuestion>
        </div>
    );
};

export default Questions;