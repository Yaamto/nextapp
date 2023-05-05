import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const navItem = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Spaces',
            link: '/spaces'
        },
        {
            name: 'Plans',
            link: '/plans'
        },
        {
            name: 'Contact',
            link: '/contact'
        }

    ]
    return (
        <div className='w-full dark:bg-gray-700 footer pt-[400px] '>
            <div className="flex gap-3 justify-center">
                <Image src="/facebook.png" alt="facebook" width={32} height={32} />
                <Image src="/twitter.png" alt="twitter" width={32} height={32}/>
                <Image src="/instagram.png" alt="Instagram" width={32} height={32}/>
            </div>
            <div className='flex flex-col items-center gap-1 mt-5'>
            <div className='flex gap-3 justify-center'>
                {navItem.map((item, index) => {
                    return  <Link href={item.link} key={index}><span >{item.name}</span></Link>
                })}
            </div>
            <div className='flex gap-3 justify-center'>
                <span>Term of use - Privacy policy</span>
            </div>
            <span>© 2021 SchoolFPS</span>
        </div>
        </div>
    );
};

export default Footer;