import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { MenuItem } from 'primereact/menuitem';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import { logout } from '@/service/auth';
import DarkMode from '@/components/DarkMode';
import { oswald } from '@/fonts/font';


const Navbar = () => {
    const {user, update} = useUser()
    const router = useRouter()
  
    const handleLogout = async() => {
        try {
             logout().then(() => {
                update("")
            }).then(() => router.push("/login"))
        }catch(error){
            console.log(error);
        }
    }

    const items: MenuItem[] = [
        {
            label: 'Home',
            command: () => { router.push("/")}
        },
        {
            label: 'Spaces',
            command: () => { router.push("/spaces")}
        },
        {
            label: 'Contact',
            command: () => { router.push("/contact")}
        }
               
    ];
    const start = <Link href="/"><h2>LOGO</h2></Link>
    const end = 
    <div className='flex gap-3'>
        {user ? (<Button label="logout" onClick={handleLogout} className={`${oswald.className}`}/>)
        : (<Link href="login"><Button label="login" className={`${oswald.className}`}/>
        </Link>)}
        <DarkMode />
    </div>
    return (
        <div>
             <div className={`card ${oswald.className}`} >
            <Menubar className={`${oswald.className}`} model={items} start={start} end={end} />
        </div>
        </div>
    );
};

export default Navbar;