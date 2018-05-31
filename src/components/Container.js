import React from 'react';

function Container(props) {
    return (
        <div className="App">

            {props.children}

        </div>
    )
}

export default Container;