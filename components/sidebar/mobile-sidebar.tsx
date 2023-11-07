import React from 'react'

interface MobileSidebarProps {
    isProPlan: boolean;
    userLimitCount: number;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isProPlan, userLimitCount }) => {
    return (
        <div>MobileSidebar</div>
    )
}

export default MobileSidebar