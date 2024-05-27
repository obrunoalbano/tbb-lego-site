import React from 'react';
import Image from 'next/image';
import LogoImage from '../public/logo.svg'

const Logo: React.FC = () => {
    return (
        <Image 
            alt="Lego" 
            src={LogoImage} 
        />
    )
}

export default Logo;