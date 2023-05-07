import Link from 'next/link';
import { Button } from 'primereact/button';
import React from 'react';

const DefaultSpace = () => {
    return (
        <div>
            To see or create spaces, you need to be logged in.
            <Link href="/login"> <Button label="Login" className='mt-5' severity="secondary"/></Link>
        </div>
    );
};

export default DefaultSpace;