import React, {useState} from 'react'

const Toggler = ({handleTheme}) => {
    const [dark, setDark] = useState(false)
    const handleButton = () => {
        setDark(!dark)
        handleTheme()
    }
    return (
        <div className={`text-xl flex h-8 w-16 justify-center items-center relative text-white rounded-2xl bg-black border border-white`}>
            <div className={`absolute transition duration-500 ${dark? 'text-sm translate-x-[40%]':'text-sm -translate-x-[40%]'}`}>{dark? 'Dark':'Light'}</div>
            <div className={`transition duration-500 flex w-8 h-8 scale-[70%] absolute ${dark? '-translate-x-1/2': 'translate-x-1/2'} bg-white z-10 rounded-2xl`} onClick={handleButton}></div>
        </div>
  )
}

export default Toggler;