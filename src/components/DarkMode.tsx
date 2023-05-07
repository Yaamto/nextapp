import { useTheme } from 'next-themes';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const DarkMode = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const [checked, setChecked] = useState<boolean>(false);
    useEffect(() => {
        setTheme(theme === "dark" ? "dark" : "light")
        setChecked(theme === "dark" ? true : false )
    }, []);
    return (
        <div className="card flex justify-content-center mx-5">
           <div className='flex items-center mx-8'>
           {!checked &&<Image src="/contrast.png" width={24} height={24} alt="" className='relative -left-8 z-10'/>} 
        <InputSwitch
          checked={checked}
          onChange={(e: InputSwitchChangeEvent) => {
            setChecked(e.value || false)
            setTheme(e.value ? 'dark' : 'light');
        }}
         className='absolute'
        />
         {checked && <Image src="/moon.png" width={24} height={20} alt="" className='relative -right-14' />}
        </div>
       
      </div>
    );
};

export default DarkMode;

