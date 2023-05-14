import { IMap } from '@/interfaces/map';
import { getMaps } from '@/service/map';
import { GetServerSideProps, GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import Map from './Map';


const Maps = ({maps, selectedSpace}: any) => {

    return (
        <div className='mt-[70px]'>
            <h1 className='text-4xl font-bold'>Maps</h1>
            <div className='flex gap-5 items-center justify-center mt-10 flex-wrap'>
                {maps && maps.map((map: IMap) => {
                    
                    return <Map map={map} selectedSpace={selectedSpace}  />
                    })}
            </div>
        </div>
    );
};

export default Maps;