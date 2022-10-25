import React, { useState, useEffect } from 'react'

const useCustomHook = (type) => {
//   Setup state
const [data, setData] = useState([])
useEffect(()=>{
    const cars = [
        {
            id: 1,
            name: "Benz"
        },
        {
            id: 2,
            name: "Bently"
        }
    ] 
    const books = [
        {
            id: 1,
            name: "Python"
        },
        {
            id: 2,
            name: "C++"
        }
    ]

    if(type === "books"){
        setData(books)
    } else 
    if(type === "cars"){
        setData(cars)
    } else {
        setData([])
    }
}, [type])
    return [data]
}

const HookApp = () => {
    const [data] = useCustomHook("books")
    console.log(data);
  return (
    <div>Hi</div>
  )
}
export default HookApp;

