import React from 'react';

function Formulario({datosConsulta, consultarAPI}){

    return(
        <form onSubmit={consultarAPI}>
            <div className="input-field col s12">
                <input type="text"
                    name="ciudad"
                    onChange={datosConsulta}
                />
                <label htmlFor="ciudad">Ingresa una Ciudad</label>
            </div>
            <div className="input-field col s12">
                <select name="pais" onChange={datosConsulta}>
                    <option value="">-- Selecciona un pais --</option>
                    <option value="HN">Honduras</option>
                    <option value="AR">Argentina</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">España</option>
                    <option value="PR">Perú</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect btn btn-sm btn-block yellow darkend-3" value="Buscar Clima"/>
            </div>
        </form>
    )
}

export default Formulario;