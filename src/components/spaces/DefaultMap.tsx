import Image from 'next/image';
import React from 'react';

const DefaultMap = ({selectedMap}: any) => {
    return (
        <div className='flex gap-2 items-center wrap relative cursor-pointer map-default'>           
            <Image src={`/maps/${selectedMap.name}.jpg`} alt="Picture of the author" layout={'fill'} className='brightness-50 rounded-md' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h3 className='text-white text-xl font-bold '>{selectedMap.name}</h3>                          
            </div>
    </div>
       
    );
};

export default DefaultMap;