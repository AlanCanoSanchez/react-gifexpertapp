import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    // Que la caja de texto tenga un estado para saber cuando esta escribiendo y hacer acciones en base a eso
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // Cambia el valor de inputValue llamando a setInputValue y se le pasa el evento.target.value
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit hecho');
        setCategories( cats => [inputValue] );
    }

    return (

            <form onSubmit={handleSubmit}>
                <input 
                /* Indicar que es de tipo texto  */
                type="text"
                /* Para que tenga el valor inicial */
                value={inputValue}
                /* Cambiar cuando este escribiendo se puede poner una funcion */
                onChange={ handleInputChange }
                />
            </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}