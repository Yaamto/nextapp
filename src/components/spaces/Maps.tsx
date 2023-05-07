import { IMap } from '@/interfaces/map';
import { getMaps } from '@/service/map';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';

const Maps = ({maps}: any) => {
    console.log(maps)
    return (
        <div>
            <h1 className='text-4xl font-bold'>Maps</h1>
            <div className='flex gap-2  items-center justify-center mt-5 flex-wrap'>
                {maps && maps.map((map: IMap) => {
                    return <div className='flex gap-2 items-center wrap relative cursor-pointer map-detail'>
                                <Image src={`/maps/${map.name}.jpg`} alt="Picture of the author" layout={'fill'} className='brightness-50 rounded-xl' />
                                <h3 className='text-white text-xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{map.name}</h3>
                            </div>
                    })}
            </div>
        </div>
    );
};

export default Maps;