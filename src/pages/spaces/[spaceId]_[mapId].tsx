import UtilitiesMap from '@/components/spaces/UtilitiesMap';
import { getUtilityByMap } from '@/service/utility';
import React from 'react';

const Utilities = ({utilities}: any) => {
    console.log(utilities)
    return (
        <div>
            <UtilitiesMap utilities={utilities}/>
        </div>
    );
};

 export const getServerSideProps = async (context: any) => {
    const string = context.params['spaceId]_[mapId']
    const spaceId = string.split('_')[0]
    const mapId = string.split('_')[1]

    const utilities = await getUtilityByMap(spaceId, mapId, context.req.headers.cookie);
    
    return {
        props: { utilities }
    }
}

export default Utilities;