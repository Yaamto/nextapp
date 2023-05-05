import { oswald, roboto } from '@/fonts/font';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'primereact/button';
import React from 'react';

const Strategie = () => {
    return (
        <div className='lg:mx-[200px] md:mx-[100px] mt-[150px]'>
            <div className={`  text-center md:text-start dark:text-white text-dmode ${oswald.className}`}>
                <h2 className='text-[43px]'>Improve your strategie !</h2>
                <p className={`text-[22px] ${roboto.className}`}>Share it with your friends</p>
            </div>
            <div className='flex flex-col items-center xl:flex-row gap-10 xl:gap-[150px] mt-[170px] p-5 md:p-0'>
                <Image src="/strats.png" alt="" width={350} height={350} className='rounded-xl'/>
                <div className='flex flex-col gap-10'>
                    <h3 className='text-[28px] font-bold'>Strategie is the key</h3>
                    <p className='text-[20px]'>
                        By devising strategies, players can gain a tactical advantage over their opponents.
                        Start now with SchoolFps and play with the best players to reach the top 1 world.
                        Strategies may involve coordinated team movements, identifying chokepoints, or using utilities to set up ambushes.
                    </p>
                </div>
                
            </div>
            <div className='flex flex-col items-center xl:flex-row gap-10 xl:gap-[150px] mt-[100px] p-5 md:p-0'>
                <Image src="/strats2.png" alt="" width={350} height={350} className='rounded-xl xl:order-1'/>
                <div className='flex flex-col gap-10 '>
                    <h3 className='text-[28px] font-bold'>Strategie is the best way to improve</h3>
                    <p className='text-[20px]'>
                        By learning utilities and positions, games will feel easier, fps aren't only about aim.
                        Strategies can help bridge the gap between highly skilled players and those still developing their abilities.
                        By employing smart tactics, less skilled players can compensate for their individual weaknesses and contribute to the team's success.
                        Get an account and join a space now ! 
                    </p>
                    
                </div>
            </div>
            <div className='text-center xl:text-start mt-10'>
            <Link href="/login"><Button label="Join now" severity='secondary'></Button></Link>
            </div>
        </div>
    );
};

export default Strategie;