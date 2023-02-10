import React, { useState } from "react"
import { style } from "../style"
import { PrettoSlider, CustomCheck } from '../constants/indexMUI'
import { list } from '../constants/indexText';
import { passwordGenerator } from "../functions/passwordGenerator";

const Menu = () => {

    type menuT = {
        leng: number;
        uppercase: boolean;
        lowercase: boolean;
        number: boolean;
        symbols: boolean;
    }

    const [menu, setMenu] = useState<menuT>({
        leng: 5,
        uppercase: false,
        lowercase: false,
        number: false,
        symbols: false,
    });
    


    const handleLengChange = (event: any, newValue: any) => {
        const obj = {...menu, leng: newValue};
        setMenu(obj);
      };

    const handlChecks = (event: React.ChangeEvent<HTMLInputElement>) => {
        const check = event.target.id;
        setMenu({...menu, [check]:event.target.checked})
    }

    console.log(passwordGenerator(menu));


    
    return <div className="flex flex-col">
        <div className={`bg-cardDark ${style.padding} space-y-5`}>

            <div className="flex flex-col md:gap-2">
                <div className="flex flex-row justify-between items-center">
                    <p className={`${style.textRegular} text-white justify-start`} >Character Legth</p>
                    <p className='justify-end text-2xl font-bold text-green'>{menu.leng}</p>
                </div>

                <div className="">
                    <PrettoSlider
                    aria-label="custom thumb label"
                    step={1}
                    min={5}
                    max={20}
                    defaultValue={menu.leng}
                    onChange={handleLengChange}
                    />
                </div>
            </div>

            <div className="">
                <ul className="flex flex-col">
                    {list.map((item) => (
                        <li key={item.id} id={item.id} className="flex flex-row items-center space-x-2" >
                            <CustomCheck 
                            value="checkedD"
                            id={item.id}
                            onChange={(event) => handlChecks(event)}/>
                            <p className="tracking-wider text-white font-semibold">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </div>
}

export default Menu