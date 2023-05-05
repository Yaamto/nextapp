import React from 'react';
import { oswald } from '@/fonts/font';
import { roboto } from '@/fonts/font';
import {Card} from 'primereact/card';
import { Button } from 'primereact/button';
import { Timeline } from 'primereact/timeline';
import Link from 'next/link';
const Discover = () => {
    interface TimelineEvent {
        status?: string;
        icon?: string;
        color?: string;
        text?: string;
        link: string;
        linkLabel: string;
    }
    
    const events = [
        { status: 'Create Account',  icon: 'pi pi-user', color: '#9C27B0', text: 'Get your account now by starting to register and complete the form.', link: "/register", linkLabel: "Register" },
        { status: 'Get your premium', icon: 'pi pi-shopping-cart', color: '#673AB7', text: 'Get your account premium by choosing a plan and go to payment page.', link: "/plan" , linkLabel: "See plans"},
        { status: 'Spaces', icon: 'pi pi-users', color: '#FF9800', text: 'Create space and invite your friends to learn some utilies.', link: "/space" , linkLabel: "Create space"},
        { status: 'Share utilities', icon: 'pi pi-share-alt', color: '#607D8B', text:'After joining spaces, you can share utilities with the whole space', link:"/space", linkLabel: "Go to" }
    ];
    const customizedMarker = (item: TimelineEvent) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white rounded-full border-circle z-1 shadow-1 p-2" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return (
            <Card title={item.status}>
                <p>{item.text}</p>
                <Link href={item.link} ><Button label={item.linkLabel} className='mt-5'></Button></Link>
            </Card>
        );
    };
    return (
        <>
        <div className={`lg:ml-[200px] md:ml-[100px] mt-[150px] text-center md:text-start dark:text-white text-dmode ${oswald.className}`}>
            <h2 className='text-[43px]'>Discover it !</h2>
            <p className={`text-[22px] ${roboto.className}`}>How is it working ?</p>
        </div>
        <div className="card mt-[100px] lg:mx-[200px] md:mx-[100px]">
        <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
    </div>
    </>
    );
};

export default Discover;