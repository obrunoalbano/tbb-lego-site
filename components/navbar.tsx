import React, { useState } from 'react';
import NavIcon from './icons/nav';
import NavbarLinks from './navbarLinks';  
import SubNav from './subnav';

const Navbar: React.FC = () => {

    // Estado para controlar a visibilidade da div
    const [isSub, setIsSub] = useState<boolean>(false);

    // Função para alternar a visibilidade
    const toggleSubNav = () => {
        setIsSub(!isSub);
    }

    const closeSubNav = () => {
        setIsSub(false);
    };

    return (
        <nav className='flex items-center font-sans'>
            <div className='flex flex-col mr-8 cursor-pointer' onClick={toggleSubNav}>
                <div className="mx-auto"><NavIcon /></div>
                <div className='block text-black text-xs mt-1.5'>Categories</div>
            </div>
            <NavbarLinks onClose={closeSubNav}/>
            <SubNav visible={isSub} onClose={closeSubNav}/>
        </nav>
    );
};

export default Navbar;
