import { getUserSpaces } from '@/service/space';
import { IMap } from '@/interfaces/map';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React from 'react';
import Maps from './Maps';
import Map from './Map';

const SelectedSpace = ({spaces, selectedSpace, maps}: any) => {

    return (
        <div>
            <div className='mt-10'>
                   <div className='flex flex-col gap-2  items-center'>
                       <div className='self-start ml-4'>
                       <h2 className='font-bold text-3xl'>{selectedSpace?.name}</h2>
                       <p>{selectedSpace?.description}</p>
                       <p className='font-bold text-xl mt-2'>Total utilities: {selectedSpace.utilities?.length}</p>
                       </div>
                       Admin : 
                       <div className='creator flex items-center gap-7 p-4 rounded-xl shadow-md dark:bg-profile'>
                           <div className='relative item-detail-admin'>
                               {selectedSpace && 
                               <Image
                               src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${selectedSpace?.creator?.profileImage}`}
                               alt="Picture of the author"
                               layout={'fill'} 
                               className='rounded-full object-cover'
                               />
                               }
                           </div>
                           <div className='flex flex-col'>
                               <h3 className='text-2xl font-bold'>{selectedSpace?.creator?.username}</h3>                              
                           </div>
                       </div>
                    </div> 
                    <div>
                        <h2 className='font-bold text-3xl'>Members</h2>
                        <p className='font-bold text-xl mt-2'>Total members: {selectedSpace?.users.length}</p>
                        <div className='flex gap-7 mt-5 flex-wrap'>
                            {selectedSpace?.users.map((member: any) => {
                            return <div className='flex items-center gap-7 dark:bg-profile shadow-md rounded-xl px-4 py-2'>
                                {member &&
                                <div className='flex gap-4 items-center'>
                                    <div className='relative item-detail-member'>
                                        <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${member.profileImage}`}
                                        alt="Picture of the author"
                                        layout={'fill'}
                                        className='rounded-full object-cover'
                                        />
                                    </div>
                                    <h3 className='text-xl font-bold'>{member.username}</h3>
                                </div>
                                }
                                    </div>
                                })}
                        </div>  
                    </div>     
               </div>
                <div>
                    <div className='mt-[70px]'>
                        <h1 className='text-4xl font-bold'>Maps</h1>
                        <div className='flex gap-5 items-center justify-center mt-10 flex-wrap'>
                            {maps && maps.map((map: IMap) => {                                
                                return <Map map={map} selectedSpace={selectedSpace}  />
                            })}
                        </div>
                    </div>
                </div>        
        </div>
    );
};

export default SelectedSpace;