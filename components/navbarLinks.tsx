import React from 'react';
import Link from 'next/link';
import { mainMenuLinks } from '@/content/site-content';

interface NavbarLinksProps {
    type?: string
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ type }) => {
    return (
        <ul className={`${type === 'vertical' ? 'flex-col flex' : 'flex-row hidden lg:flex'}`}>
            {mainMenuLinks.map((item) => {
                return (
                    <li className={`list-none ${type === 'vertical' ? 'my-2 text-lg' : 'text-sm mx-3'}`}>
                        <Link href={item.url}>
                            <span className='text-black hover:text-primary'>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavbarLinks;