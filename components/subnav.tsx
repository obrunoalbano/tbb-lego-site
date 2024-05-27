import React from 'react';
import Logo from "./logo";
import NavActions from './navActions';
import NavbarLinks from './navbarLinks';  
import Close from './icons/close';
import Image from 'next/image';
import { mainMenuLogos } from '@/content/site-content';

interface SubNavProps {
    visible?: boolean;
    onClose: () => void;
}

const SubNav: React.FC<SubNavProps> = ( { visible, onClose } ) => {

    const excludeLinks = ['Search']

    return (
        <div className={`fixed top-0 left-0 bg-white w-full h-full transition-transform transform flex flex-wrap z-50 overflow-auto ${
            visible ? '-translate-y-0' : '-translate-y-full pointer-events-none'
          }`} style={{ transition: 'transform 300ms ease-in-out' }}>
            <div className='w-full lg:w-3/12'>
                <div className='pl-4 pr-4 pt-4 lg:pl-24 lg:pr-14'>
                    <div className="mb-10 flex items-center">
                        <Logo />
                        <span className='block cursor-pointer ml-8' onClick={onClose}>
                            <Close />
                        </span>
                    </div>      
                    <NavActions type="vertical" exclude={excludeLinks}/>
                </div>
                <div className="">
                    <div className="flex items-center mt-6 mb-6 lg:mt-10">
                        <div className="w-4 h-px bg-gray-400 mr-4 lg:w-24"></div>
                        <div className="text-black text-lg">Themes</div>
                    </div>
                    <div className="pl-4 pr-4 lg:pl-24 lg:pr-24">
                        <NavbarLinks type="vertical" onClose={onClose}/>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-9/12'>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 h-screen border-l border-gray-400'>
                    {mainMenuLogos.map((item, index) => {
                        return (
                            <div key={index} className='flex justify-center items-center border-r border-b border-gray-400 relative group'>
                                <div className="absolute inset-0 bg-cover bg-center bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundImage: 'url("bg-logos-texture.png")' }}></div>
                                <div className='relative'>
                                    <Image src={item.image} alt={item.title} width={140} height={140}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SubNav;