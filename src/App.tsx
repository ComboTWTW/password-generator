import Menu from "./components/Menu"
import Password from "./components/Password"
import { style } from "./style"
import { useState } from "react";


const App = () => {


  return <div className={` bg-veryDark h-screen w-full flex justify-center`}>
    <div className={`container md:max-w-md mt-10 flex flex-col ${style.spaceY}`}>

      <h1 className="md:text-2xl text-xl tracking-wider text-lightGray font-semibold text-center">Password Generator</h1>

      

      <Menu/>

      
    </div>
  </div>
}



export default App