import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

    // el data:images es para renombrar data e igual podemor llamarlo como images
    const {data:images,loading} = useFetchGifs(category);

    // Para que no se realiza la peticion muchas veces

    return (
        <>
            <h3>{category}</h3>

            { loading && <p>loading</p> }
            <div className='card-grid'>
                {
                    images.map(img => ( 
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
