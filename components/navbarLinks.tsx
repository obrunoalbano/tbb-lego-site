import React from 'react';
import Link from 'next/link';
import ScrollToElement from './scrollToElement';
import { mainMenuLinks } from '@/content/site-content';

interface NavbarLinksProps {
    type?: string;
    onClose: () => void;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ type, onClose }) => {
    return (
        <ul className={`${type === 'vertical' ? 'flex-col flex' : 'flex-row hidden lg:flex'}`}>
            {mainMenuLinks.map((item , index) => {
                return (
                    <li key={index} className={`list-none ${type === 'vertical' ? 'my-2 text-lg' : 'text-sm mx-3'}`} onClick={onClose}>
                        <ScrollToElement targetId={item.url}>
                            <span className='text-black hover:text-primary'>{item.title}</span>
                        </ScrollToElement>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavbarLinks;