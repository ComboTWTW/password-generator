import icon from "../assets/copy-icon.svg"
import { style } from "../style"

const Password = (word:any) => {
    return <div className={`flex flex-col`}>
        <div className={`${style.padding} flex flex-row bg-cardDark justify-between items-center`}>
          <p className="md:text-2xl text-xl tracking-wider font-semibold text-white justify-start">{word.password}</p>
          <img src={icon} alt="copy" className="justify-end h-[32px] w-[32px] active:h-[28px] active:w-[28px] cursor-pointer" onClick={() => {navigator.clipboard.writeText(word.password)}}/>
        </div>
      
      </div>
}

export default Password