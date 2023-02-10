import Menu from "./components/Menu"
import Password from "./components/Password"
import { style } from "./style"


const App = () => (

  

  <div className={` bg-veryDark h-screen w-full overflow-hidden flex justify-center`}>
    <div className={`container md:max-w-md mt-24 flex flex-col ${style.spaceY}`}>

      <h1 className="md:text-2xl text-xl tracking-wider text-lightGray font-semibold text-center">Password Generator</h1>

      <Password />

      <Menu />

    </div>
  </div>
)



export default App