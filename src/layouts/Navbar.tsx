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
import { roboto } from '@/fonts/font';


const Navbar = () => {
    const {user, update} = useUser()
    const router = useRouter()
    const currentRoute = router.pathname;
    
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
            label: 'Plans',
            command: () => { router.push("/plans")}
        },
        {
            label: 'Contact',
            command: () => { router.push("/contact")}
        }
      
               
    ];
    const start = <Link href="/"><h2 className=''>LOGO</h2></Link>
    const end = 
    <div className='flex gap-3 items-center'>
        {user ? (<Button label="Logout" onClick={handleLogout} className={`${roboto.className}`} severity="secondary"/>)
        : (<Link href="login"><Button label="Login" className={`${roboto.className}`} severity="secondary"/>
        </Link>)}
        <DarkMode />
    </div>
    return (
        <div>
             <div className={`card ${roboto.className}`} >
                <Menubar className={`${roboto.className}`} model={items} start={start} end={end}  />
            </div>
        </div>
    );
};

export default Navbar;