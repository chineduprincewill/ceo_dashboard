import React from 'react'
import { useLocation } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';
import TimerComponent from '../common/TimerComponent';

const Header = () => {

    const locatn = useLocation();

    return (
        <header className='max-w-max fixed w-full top-0 right-0 z-40 h-[50px] py-2 flex justify-end bg-gray-100 dark:bg-gray-800'>
            <div className='flex flex-grow items-center justify-between p-2 md:px-3 2xl:px-11'>
                <div className='flex items-center space-x-3'>   
                </div>
                <div className='flex items-center space-x-4 md:space-x-8'>
                    <div className='flex justify-end text-white space-x-4 text-sm'>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header