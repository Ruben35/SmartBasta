import React from 'react';

const ActualPuntuation = ({puntuation}) =>{
    return(
        <div className="actualPuntuationBar">
            <div> {/*The rectangle*/}
                <div> 
                    <span>Puntuación</span>
                    <span>{puntuation?puntuation:350}pts</span>
                </div>
            </div>
        </div>
    );
}

export default ActualPuntuation;