import React from 'react';
import './style.css';
import image from './trophy.png';

function Input(){
    return(
        <body>
            <div id='container'>
                <img src={image} id='trophy' alt="Imagen de un trofeo, referencial" />
                <h1>Ingresa un número <br />
                del 1 al 10</h1>
                <form action="" onSubmit={ ev => {
                    ev.preventDefault();
                    let valor = ev.target.number.value;
                    let numRandom = Math.floor(Math.random() * 11);
                    console.log(numRandom)
                    if(valor == numRandom){
                        alert(`Ganaste, el número es ${numRandom}`);
                    }
                    else{
                        alert(`Perdiste, el número es ${numRandom}`);
                    }
                    ev.target.number.value = '';
                }
                }>
                    <input type="text" name='number' placeholder='Escribe un número' autoComplete='off'/>
                     
                </form>
            </div>
        </body>
    );
}

export default Input;