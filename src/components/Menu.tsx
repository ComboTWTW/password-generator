import { ReactEventHandler, useState } from "react"
import { style } from "../style"
import { PrettoSlider } from '../constants/index'


const Menu = () => {

    const [leng, setLeng] = useState<number>(10);

    const handlePlayersChange = (event: any, newValue: any) => {
        setLeng(newValue);
      };

    return <div className="flex flex-col">
        <div className={`bg-cardDark ${style.padding} ${style.spaceY}`}>

            <div className="flex flex-col md:gap-3">
                <div className="flex flex-row justify-between items-center">
                    <p className={`${style.textRegular} text-white justify-start`} >Character Legth</p>
                    <p className='justify-end text-2xl font-bold text-green'>{leng}</p>
                </div>

                <div className="">
                    <PrettoSlider
                    aria-label="custom thumb label"
                    step={1}
                    min={5}
                    max={20}
                    defaultValue={leng}
                    onChange={handlePlayersChange}
                    />
                </div>



            </div>

        </div>
    </div>
}

export default Menu