import React, { useState } from "react";
import { style } from "../style";
import { PrettoSlider, CustomCheck,  } from '../constants/indexMUI';
import { list } from '../constants/indexText';
import { passwordGenerator } from "../functions/passwordGenerator";
import Password from "../components/Password"




const Menu = () => {

    type menuT = {
        leng: number;
        uppercase: boolean;
        lowercase: boolean;
        number: boolean;
        symbols: boolean;
    }

    const [menu, setMenu] = useState<menuT>({
        leng: 10,
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

    const [password, setPassword] = useState<string>("You should check at least 1");

    const wordRender = (menu:menuT) => {
        const word = passwordGenerator(menu);
        setPassword(word);
    }
    
    return <div className="flex flex-col">
        <Password password={password}/>
        <div className={`bg-cardDark ${style.padding} space-y-5 mt-6`}>

            <div className="flex flex-col gap-3 md:gap-2">
                {/* Slider Section */}
                <div className="flex flex-row justify-between items-center">
                    <p className={`${style.textRegular} text-white justify-start`} >Character Legth</p>
                    <p className='justify-end text-2xl font-bold text-green'>{menu.leng}</p>
                </div>

                <div className="mr-[15px]">
                    <PrettoSlider
                    aria-label="custom thumb label"
                    step={1}
                    min={5}
                    max={20}
                    defaultValue={10}
                    onChange={handleLengChange}
                    />
                </div>
            </div>
            {/* Checkbox Section */}
            <div className="px-1">
                <ul className="flex flex-col -mt-2 mb-3">
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
            {/* Strength Section */}

            {/* GenerateButton Section */}
            <div className="">
                <button className={`${style.button}`} onClick={() => wordRender(menu)}>
                    GENERATE
                </button>
            </div>            
            
        </div>
    </div>
}

export default Menu