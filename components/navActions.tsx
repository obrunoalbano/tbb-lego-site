import React from 'react';
import Bag from './icons/bag';
import Message from './icons/message';
import Search from './icons/search';
import Home from './icons/home';
import { mainMenuActions } from '@/content/site-content'; 

interface NavActionsProps {
    type?: string,
    exclude?: string[]
}

const NavActions: React.FC<NavActionsProps> = ( { type, exclude } ) => {

    let content = mainMenuActions

    if (exclude) {
        content = mainMenuActions.filter(item =>!exclude.includes(item.title));
    } 

    return (
        <nav className='block'>
            <ul className={`flex ${type === 'vertical' ? 'flex-col' : 'flex-row items-center'}`}>
                {content.map(({ title, url, icon }, index) => (
                    <li key={index} className={`relative group list-none flex ${type === 'vertical' ? 'flex-row items-center px-4 lg:pl-24 lg:pr-14 py-2' : 'flex-col mx-2.5'} ${index === 0 && type != 'vertical' ? 'hidden lg:flex' : ''}`}>
                        <div className={`${type === 'vertical' ? 'mr-4' : 'mx-auto'}`}>
                            {icon && renderIcon(icon)}
                        </div>
                        <a className={`text-black block ${type === 'vertical' ? 'text-xl' : 'hover:text-primary text-xs mt-1.5'}`} href={url}>{title}</a>
                        <span className="absolute inset-0 bg-[#BBDCF5] transition-all duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 -z-10" />
                    </li>
                ))}
            </ul>
        </nav>
    )
}

const renderIcon = (iconName: string): JSX.Element | null => {
    switch (iconName) {
        case 'Bag':
            return <Bag />;
        case 'Message':
            return <Message />;
        case 'Search':
            return <Search />;
        case 'Home':
            return <Home />;
        default:
            return null;
    }
};

export default NavActions;