import React from 'react';

const Alert = ({ type }) => {
    return(
        <div>
            <p className= {`alert alert-${type}`}>Alert</p>
        </div>
    )
}
export default Alert;