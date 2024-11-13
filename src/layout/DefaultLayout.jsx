import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const DefaultLayout = () => {
    return (
        <div className={`w-full flex h-screen overflow-hidden bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white`}>
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header />
                <main>
                    <div className="w-screen p-0">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DefaultLayout