import { IMap } from '@/interfaces/map';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Map = ({map, selectedSpace}: any) => {
    return (
        <div className='flex gap-2 items-center wrap relative cursor-pointer map-detail'>
            <Link href={`/spaces/${selectedSpace.id}_${map.id}`}>
            <Image src={`/maps/${map.name}.jpg`} alt="Picture of the author" layout={'fill'} className='brightness-50 rounded-xl' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h3 className='text-white text-xl font-bold '>{map.name}</h3>
                <p className='text-white'>Utilities : {selectedSpace.mapUtilityCounts[map.id] ? selectedSpace.mapUtilityCounts[map.id] : "0"} </p>
            </div>
            </Link>
           
        </div>
    );
};

export default Map;