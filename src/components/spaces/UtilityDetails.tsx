import Image from 'next/image';
import React from 'react';

const UtilityDetails = ({selectedUtility}: any) => {
    const isImage = selectedUtility.path.split('.')[1] === 'jpg' || selectedUtility.path.split('.')[1] === 'png' || selectedUtility.path.split('.')[1] === 'jpeg'
    return (
        <div className='w-1/2'>
            
                {isImage &&  <Image width={500} height={500} src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${selectedUtility.path}`} alt={selectedUtility.name} className='mx-auto' />}
                {!isImage && <video src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${selectedUtility.path}`} width="500" height="500" controls className='mx-auto'> </video>}
           
            <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4 mt-8">
                        <div className="flex flex-col items-center sm:items-start gap-3">
                            <div className="text-2xl font-bold">{selectedUtility.title}</div>
                                {/* <span className="font-semibold">{selectedUtility.category.name}</span> */}
                            <div className="text-md">{selectedUtility.description}</div>                    
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">{selectedUtility.map.name}</span>
                        </div>
            </div>
        </div>
    );
};

export default UtilityDetails;