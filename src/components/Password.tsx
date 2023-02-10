import icon from "../assets/copy-icon.svg"
import { style } from "../style"

const Password = () => (
    <div className={`flex flex-col mt-24 ${style.spaceY} my-4`}>
        <h1 className="md:text-2xl text-xl tracking-wider text-lightGray font-semibold text-center">Password Generator</h1>

        <div className={`${style.padding} flex flex-row bg-cardDark justify-between items-center`}>
          <p className="md:text-2xl text-xl tracking-wider font-semibold text-white justify-start">tEsT1NG$raSe</p>
          <img src={icon} alt="copy" className="justify-end h-[32px] w-[32px] "/>
        </div>
      
      </div>
)

export default Password