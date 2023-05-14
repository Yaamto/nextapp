import { get } from 'http';
import React, { useState } from 'react';
import { GetServerSideProps, GetStaticProps } from "next";
import { getUserSpaces } from '@/service/space';
import { ISpace } from '@/interfaces/space';
import { Button } from 'primereact/button';
import { space } from 'postcss/lib/list';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { useUser } from '@/context/UserContext';
import DefaultSpace from '@/components/spaces/DefaultSpace';
import Image from 'next/image';
import { roboto } from '@/fonts/font';
import { getMaps } from '@/service/map';
import Maps from '@/components/spaces/Maps';
import SelectedSpace from '@/components/spaces/SelectedSpace';

 const Space = ({spaces, maps}: any) => {
    const {user, update} = useUser()
    const [selectedSpace, setSelectedSpace] = useState<ISpace | null>(spaces ? spaces[0]: null);
    const mySpaces = spaces && spaces.map((space: any) =>{ return {name: space.name, id: space.id, value: space}})
    console.log(spaces)
    if(!user){
        return <DefaultSpace />
    }
    return (
        
        <div className={`mx-[100px] ${roboto.className}`}>
            <div className="flex items-center justify-between mt-10">
                <div className='flex gap-16'>
                    <h1 className='text-4xl font-bold'>Spaces</h1> 
                    <Dropdown value={selectedSpace} onChange={(e: DropdownChangeEvent) => setSelectedSpace(e.value)} options={mySpaces} optionLabel="name" 
                    placeholder="Select a Space" className="md:w-14rem" />           
                </div>
                <Button label="Create" icon="pi pi-plus" />               
            </div> 
            {!selectedSpace ? ( <h2>Select A space</h2> ) : (
                   <SelectedSpace selectedSpace={selectedSpace} maps={maps} />
            )}  
                  
        </div>
    );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookie = context.req.headers.cookie
    if(!cookie){
        return {
            props: { spaces: [] }
        }
    }
    const spaces: any = await getUserSpaces(cookie)
    if(spaces.message){
        return {
            props: { spaces: [] }
        }
    }
        
    const maps = await getMaps()
    return {
         props: { spaces, maps } 
        };
}
export default Space;