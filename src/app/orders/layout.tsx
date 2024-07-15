import React from 'react'
import './layout.css'
import Sidebar from './components/sidebar'
const Layout = ({ children }: any) => {
    return (
        <div className='container'>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout