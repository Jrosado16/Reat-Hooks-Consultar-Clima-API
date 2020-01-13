import React from 'react';

const Clima = ({resultado}) => {

    const {name, main} = resultado;
    const kelvin = 273.15;

    if(!name) return null;

    return ( 
        <div className="card-panel col s12">
            <div className=" text-black">
                <h2>El Clima de {name} es:</h2>
                <p className="temperatura">
                    {parseInt(main.temp - kelvin, 10 )} <span>&#x2103;</span>
                </p>
                <p>Temperatura Maxima: {parseInt(main.temp_max - kelvin, 10 )} &#x2103;</p>
                <p>Temperatura Minima: {parseInt(main.temp_min- kelvin, 10 )} &#x2103;</p>
            </div>
        </div>
     );
}
 
export default Clima;