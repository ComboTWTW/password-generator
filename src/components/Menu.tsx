import { useState } from "react"
import { style } from "../style"
import { PrettoSlider } from '../constants/indexMUI'
import { CustomCheck } from '../constants/indexMUI';
import { list } from '../constants/indexText';

const Menu = () => {

    const [leng, setLeng] = useState<number>(10);

    const handlePlayersChange = (event: any, newValue: any) => {
        setLeng(newValue);
      };

    return <div className="flex flex-col">
        <div className={`bg-cardDark ${style.padding} space-y-5`}>

            <div className="flex flex-col md:gap-2">
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

            <div className="">
                <ul className="flex flex-col">
                    {list.map((item) => (
                        <li key={item.id} id={item.id} className="flex flex-row items-center space-x-2" >
                            <CustomCheck 
                            value="checkedD"
                            inputProps={{ 'aria-label': 'Checkbox D' }}/>
                            <p className="tracking-wider text-white font-semibold">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </div>
}

export default Menu