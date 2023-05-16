import React, { useEffect, useRef, useState } from 'react';
import { GetServerSideProps, GetStaticProps } from "next";
import { addUserToSpace, getUserSpaces } from '@/service/space';
import { ISpace } from '@/interfaces/space';
import { Button } from 'primereact/button';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { useUser } from '@/context/UserContext';
import DefaultSpace from '@/components/spaces/DefaultSpace';
import Image from 'next/image';
import { roboto } from '@/fonts/font';
import { getMaps } from '@/service/map';
import { IMap } from '@/interfaces/map';
import { getCategories } from '@/service/category';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { getUtilitiesByMap } from '@/service/utility';
import { IUtility } from '@/interfaces/utility';
import UtilitiesMap from '@/components/spaces/UtilitiesMap';
import UtilityDetails from '@/components/spaces/UtilityDetails';
import DefaultMap from '@/components/spaces/DefaultMap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { searchUser } from '@/service/user';
import { IUser } from '@/interfaces';
import { set } from 'react-hook-form';
import { Toast } from 'primereact/toast';

 const Space = ({spaces, maps, categories}: any) => {
    const {user, update} = useUser()
    const router = useRouter()
    let newSpace: any = router.query.newSpace || null
    const dropdownCategories = [{name: "All", id: null}, ...categories]
    console.log(dropdownCategories.find((category: any) => category.name === "All"))
    //Check if we just created a newSpace so put it in selectedSpace by get the last created space, if not put the first space among all spaces
    const [selectedSpace, setSelectedSpace] = useState<ISpace | null>(spaces ? newSpace ? spaces[spaces.length -1]: spaces[0]: null);
    const [selectedMap, setSelectedMap] = useState<IMap | null>(maps ? maps[0]: null);
    const [selectedCategories, setSelectedCategories] = useState<any>(dropdownCategories.find((category: any) => category.name === "All"));
    const [utilities, setUtilities] = useState<IUtility[] |null>(selectedSpace ? selectedSpace.utilities : null)
    const [selectedUtility, setSelectedUtility] = useState<IUtility | null>(null)
    const [visible, setVisible] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('')
    const [userAction, setUserAction] = useState<IUser | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const toast = useRef<Toast>(null);
    // formating all spaces to be used in dropdown
    const mySpaces = spaces && spaces.map((space: any) =>{ return {name: space.name, id: space.id, value: space}})
    // formating all maps to be used in dropdown
    const myMaps = maps && maps.map((map: any) =>{ return {name: `${map.name} (${selectedSpace?.mapUtilityCounts[map.id] || "0"})`, id: map.id, value: map}})
    

    //add categorie "All" to categories
    

    // get all utilities with queries
    const getUtilities = async () => {
        setIsLoading(true)
        const space = selectedSpace ? selectedSpace.id : null
        const map = selectedMap ? selectedMap.id : null
        const query = selectedCategories ? {spaceId: space, mapId: map, categoryId: selectedCategories ? selectedCategories.id : null}: {spaceId: space, mapId: map}
        const utilities = await getUtilitiesByMap(query)
        setUtilities(utilities)
        setIsLoading(false) 
    }
    //Fetch utilities when selectedSpace, selectedMap or selectedCategories change
    useEffect(() => {      
        getUtilities()     
    }, [selectedSpace, selectedMap, selectedCategories])

    const handleSpaceChange = (e: any) => {
        setIsLoading(true)
        setSelectedSpace(e.value)
        setSelectedUtility(null)
        setSelectedMap(maps[0])
        setIsLoading(false)
    }

    const handleMapChange = (e: any) => {
        setIsLoading(true)
        setSelectedMap(e.value)
        setSelectedUtility(null)
        setIsLoading(false)
    }
    const handleAddUser = async() => {
        
        if(selectedSpace && userAction){
            const newSpace: any = await addUserToSpace(selectedSpace?.id, userAction.id)
            if(newSpace.message){
                toast.current?.show({severity:'error', summary: 'Error', detail: newSpace.message, life: 5000});
                console.log(newSpace.message)
            } else {
                // Replace the users of the selectedSpace by the users of the newSpace (with the new user)
                const spaceToUpdate = {...selectedSpace, users: newSpace.users}
                setSelectedSpace(spaceToUpdate)
                spaces[spaces.findIndex((space: any) => space.id === selectedSpace.id)].users = spaceToUpdate.users
                setVisible(false)
            }

        
        }
    }

    const handleSearchUser = async() => {
       if(!query){
           return toast.current?.show({severity:'warn', summary: 'Info', detail: 'Please enter a username', life: 5000});
       }
        const user = await searchUser(query)
        setUserAction(user)

    }
    if(!user){
        return <DefaultSpace />
    }
    if(isLoading){
        return <div className='flex justify-center items-center h-screen'><i className="pi pi-spin pi-spinner text-5xl"></i></div>
    }
    return (       
        <div className={`mx-[100px] ${roboto.className}`}>
             <Toast ref={toast} position="top-center"/>
            <div className="flex items-center justify-between mt-10">
                <div className='selector flex gap-10'>               
                    <div className='flex gap-5'>
                        <h1 className='text-4xl font-bold'>Spaces</h1> 
                        <Dropdown value={selectedSpace} onChange={(e: DropdownChangeEvent) => handleSpaceChange(e)} options={mySpaces} optionLabel="name" 
                        placeholder="Select a Space" className="md:w-14rem" />  
                        <Link href="/spaces/create"><Button label="Create space" icon="pi pi-plus" /></Link>        
                    </div>
                    <div className='flex gap-5'>
                        <h1 className='text-4xl font-bold'>Maps</h1>
                        <Dropdown value={selectedMap} onChange={(e: DropdownChangeEvent) => handleMapChange(e)} options={myMaps} optionLabel="name" 
                        placeholder="Select a Map" className="md:w-14rem" />
                    </div>
                </div>
                <SelectButton value={selectedCategories} onChange={(e: SelectButtonChangeEvent) => setSelectedCategories(e.value)} optionLabel="name" options={dropdownCategories} />
                <Button label="Create utility" icon="pi pi-plus" />            
            </div>
            <div className='flex justify-end gap-3 items-center mt-[50px]'>
                <h2>Members ({selectedSpace?.users.length}) :</h2>
                <div className=' flex gap-5 overflow-x-auto max-w-[600px]'>
                   {selectedSpace?.users.map((member: any) => {
                            return <div className='flex items-center gap-7 dark:bg-profile shadow-md rounded-xl px-4 py-2'>
                                {member &&
                                <div className='flex gap-2 items-center'>
                                    <div className='relative item-detail-member'>
                                        <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${member.profileImage}`}
                                        alt="Picture of the author"
                                        layout={'fill'}
                                        className='rounded-full object-cover'
                                        />
                                    </div>
                                    <h3 className='text-md'>{member.username}</h3>
                                </div>
                                }
                                    </div>
                                })}
                </div>
                {user.id === selectedSpace?.creator.id && <Button label="Add" icon="pi pi-plus" onClick={() => setVisible(true)} /> }
               
                <Dialog header="Search a user" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                   <div>
                        <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText placeholder="Search" onChange={(e: any) => setQuery(e.target.value)} />
                        <Button label="Search" onClick={handleSearchUser}/>
                        </span>
                   </div>
                   <div className='flex gap-2 items-center'>
                    {userAction &&
                        <div className='flex items-center gap-7 dark:bg-profile shadow-md rounded-xl px-4 py-2 my-2'>
                            <div className='relative item-detail-member'>
                                <Image
                                src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${userAction?.profileImage}`}
                                alt="Picture of the author"
                                layout={'fill'}
                                className='rounded-full object-cover'
                                />
                            </div>
                            <h3 className='text-md'>{userAction?.username}</h3>
                            <i className="pi pi-times cursor-pointer" onClick={() => {setUserAction(null),  setQuery("")}}></i>
                        </div>
                    }
                                </div>
                    <Button label="Add user" className='mt-10' onClick={handleAddUser} />
                </Dialog>
            </div>
            <div className='flex justify-between flex-wrap'>
            {selectedUtility ? <UtilityDetails selectedUtility={selectedUtility} /> : <DefaultMap selectedMap={selectedMap} />}
            {utilities && utilities?.length > 0 ? <UtilitiesMap utilities={utilities} setSelectedUtility={setSelectedUtility}/> : <h1 className='w-'>You don't have any utilities yet, add one </h1> }
            </div>
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
    const categories = await getCategories()
    return {
         props: { spaces, maps, categories } 
        };
}

export default Space;