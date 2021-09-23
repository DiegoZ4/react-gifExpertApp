import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Superman', 'Batman', 'Dragon Ball'];
    const [categories, setCategories] = useState( ['Superman'] );

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Aquaman'] );
    //     setCategories( cats => [ ...cats, 'Manhunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category }/>
                    )
                }
            </ol>
        </>
    )
}
