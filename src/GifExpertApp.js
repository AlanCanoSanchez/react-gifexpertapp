import React,{useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Ironman']);

  
  //const handleAdd = () => {
  //    // Esto anexa Thor al arreglo de categroias el ...categories para que se desestructure el arreglo y lo ponga al final
  //setCategories([...categories,'Thor']);
  //}
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>  
      <ol>
        {
          /* El punto .map es una funcion de los arreglos */
          categories.map( category => ( 
            <GifGrid 
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
}
