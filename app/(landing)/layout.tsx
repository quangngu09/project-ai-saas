import Topbar from '@/components/ui/topbar';
import React from 'react'

const LandingLayout = (props: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <header>
                <Topbar />
            </header>
            {props.children}
        </div>
    )
}

export default LandingLayout