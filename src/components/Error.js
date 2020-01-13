import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <div className="card-panel error col s12 red darken-5">
            {mensaje}
        </div>
     );
}
 
export default Error;