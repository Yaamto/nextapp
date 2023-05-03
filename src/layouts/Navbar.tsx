import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { MenuItem } from 'primereact/menuitem';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import { logout } from '@/service/auth';
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
    const end = user ? <Button label="logout" onClick={handleLogout}/> : <Link href="login"><Button label="login"/></Link> 
    return (
        <div>
             <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
        </div>
    );
};

export default Navbar;