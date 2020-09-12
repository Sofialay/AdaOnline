import React from 'react';
import './Secciones.scss';

const Secciones = () => {
    return (
        <section className="seccion-perritos">
            <div className="text">
                <div>
                    <h3>
                        About
                    </h3>
                    <p>
                        Doge es un término de la jerga para "perro" que se asocia principalmente con imágenes de Shiba Inus (apodado "Shibe") y leyendas de monólogos internos en Tumblr. Estas fotos pueden ser retocadas para cambiar la cara del perro o subtituladas con monólogos interiores en fuente Comic Sans. A partir de 2017, los formatos de Ironic Doge prevalecieron sobre la versión original y saludable.
                    </p>
                </div>
                <div>
                    <h3>
                        Origen del meme
                    </h3>
                    <p>
                        Las primeras apariciones de Shiba Inus en línea provienen de sitios web de información sobre el cuidado de mascotas y razas de perros, y algunas de las primeras menciones se remontan a principios de la década de 2000. Sin embargo, la raza ganó prominencia en los memes en 2010 con la aparición de Doge en 2010, que comenzó, en parte, gracias a una fotografía de un Shiba Inu mirando a la cámara (que se muestra a continuación).
                    </p>
                </div>
            </div>
            <div className="imagen-dogo">
                <img src="https://cdn.cienradios.com/wp-content/uploads/sites/4/2020/07/Meme-1.jpg"/>
                <img src="https://s5.eestatic.com/2018/04/14/social/La_Jungla_299733479_73843943_1024x576.jpg" />
            </div>
        </section>
    )

}



export default Secciones;