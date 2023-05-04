import { useTheme } from 'next-themes';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import React, { useEffect, useState } from 'react';

const DarkMode = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const options: string[] = ['☽', '☼'];
    const [value, setValue] = useState<string>();
    useEffect(() => {
        setValue(theme === "dark" ? options[0] : options[1]);
    }, []);
    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value}
             onChange={(e: SelectButtonChangeEvent) => setValue(e.value)}
             options={options}
             onClick={() => theme == "dark" ? setTheme('light'): setTheme("dark")}
               />
        </div>
    );
};

export default DarkMode;

