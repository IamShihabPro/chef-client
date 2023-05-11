import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-container grid lg:grid-cols-2 justify-center text-center gap-6'>
                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>Difference between uncontrolled and controlled component?</h2>
                    <p>Uncontrolled component maintains its internal state and data is controlled by the DOM itself. Controlled component does not maintain its internal state and data is controlled by the parent component.</p>
                </div>

                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>How to validate react props using PropTypes?</h2>
                    <p>propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps. import PropTypes from 'prop-types'; They are often used after the component ends and starts with the name of the component as shown</p>
                </div>

                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>Difference between node.js and express.js?</h2>
                    <p>Express js is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
                </div>

                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>What is custom hook and why will you create a custom hook?</h2>
                    <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
                </div>

            </div>
            
        </div>
    );
};

export default Blog;