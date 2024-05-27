import React from "react";

interface ArrowDownPros {
    color?: string;
    className?: string;
}

const ArrowDown: React.FC<ArrowDownPros> = ( { className, color = 'currentColor' }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12L19 12" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 19L19 12L12 5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default ArrowDown;