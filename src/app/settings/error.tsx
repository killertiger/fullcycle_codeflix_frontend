'use client';

import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Error({ error }: any) {
    useEffect(() => {
        console.log('logging error: ', error);
    }, [error]);

    return (
        <div className="text-red-500">
            <h1 className='border border-dashed border-red-500 p-4'>
                <p>Something went wrong</p>
            </h1>
        </div>
    )
}