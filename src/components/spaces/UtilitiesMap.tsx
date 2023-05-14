import { Button } from 'primereact/button';
import React from 'react';
import { DataView } from 'primereact/dataview';
import Image from 'next/image';
const UtilitiesMap = ({utilities}: any) => {
    const itemTemplate = (utility: any) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4 dark:bg-dmode dark:text-white">
                    <Image width={250} height={250} src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${utility.path}`} alt={utility.name} />
                    <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                        <div className="flex flex-col items-center sm:items-start gap-3">
                            <div className="text-2xl font-bold">{utility.title}</div>
                                <span className="font-semibold">{utility.category.name}</span>
                            <div className="text-2xl font-bold">{utility.description}</div>                    
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
        <div className="card">
            <DataView value={utilities} itemTemplate={itemTemplate} paginator rows={5} className=''/>
        </div>
    );
};

export default UtilitiesMap;