import React from "react"

interface SoundOffProps {
    color?: string
}

const SoundOff: React.FC<SoundOffProps> = ( { color = '#fff' } ) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill={color} xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
            <path d="M14.6665 6.6665L7.99984 11.9998H2.6665V19.9998H7.99984L14.6665 25.3332V6.6665Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30.6665 12L22.6665 20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.6665 12L30.6665 20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default SoundOff;