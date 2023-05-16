import { Button } from 'primereact/button';
import React from 'react';
import { DataView } from 'primereact/dataview';
import Image from 'next/image';
const UtilitiesMap = ({utilities, setSelectedUtility}: any) => {
    const itemTemplate = (utility: any) => {
        const isImage = utility.path.split('.')[1] === 'jpg' || utility.path.split('.')[1] === 'png' || utility.path.split('.')[1] === 'jpeg'
        return (
            <div className="col-12">
                <div className="flex flex-column cursor-pointer hover:bg-gray-50 hover:dark:bg-gray-500 xl:flex-row xl:align-items-start p-4 gap-4 dark:bg-dmode dark:text-white" onClick={() => setSelectedUtility(utility)}>
                    {isImage &&  <Image width={100} height={100} src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${utility.path}`} alt={utility.name} />}
                    {!isImage && <video src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${utility.path}`} width="100" height="100" controls> </video>}
                    <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                        <div className="flex flex-col items-center sm:items-start gap-3">
                            <div className="text-2xl font-bold">{utility.title}</div>
                                <span className="font-semibold">{utility?.category?.name}</span>                                            
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">{utility.map.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="card w-2/5 mt-[50px]">
            <DataView value={utilities} itemTemplate={itemTemplate} paginator rows={5} className=''/>
        </div>
    );
};

export default UtilitiesMap;