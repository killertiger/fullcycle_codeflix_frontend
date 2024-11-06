import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>layout wrapper</h1>
            <div className="border border-red-500 border-dashed">
                {children}
            </div>
        </div>
    )
}