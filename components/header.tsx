import React from 'react';
import Navbar from './navbar';
import NavActions from './navActions';
import Logo from './logo';

const Header: React.FC = () => {

    const excludeLinks = ['Home']
    
    return (
        <header className="bg-gray-300 py-4">
            <div className="flex justify-between items-center container mx-auto px-4">
                <div className='flex items-center'>
                    <Logo />
                    <div className='flex items-center'>
                        <div className='ml-6'><Navbar /></div>
                    </div>
                </div>
                <NavActions exclude={excludeLinks}/>
            </div>
        </header>
    );
};

export default Header;
