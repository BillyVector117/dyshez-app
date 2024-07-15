'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './layout.css'
import notifier from '../notifier/notifier'
const Layout = ({ children }: any) => {
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('login')
    useEffect(() => {
        const handleNotification = (message: any) => {
            console.log(message);
            setIsLoginOrRegister(message)
        };

        notifier.subscribe(handleNotification);

        return () => {
            notifier.unsubscribe(handleNotification);
        };
    }, []);
    console.log('isLoginOrRegister', isLoginOrRegister)
    return (
        <div className="main-content-layout">
            <div className="mark">
                <Image alt='company-label' src={'/logo.svg'} width={200} height={200} priority />
                <Image alt='name-and-address' src={'/name-and-address.svg'} width={150} height={150} />

            </div>
            <div className={`form-layout${isLoginOrRegister == 'login' ? "" : '-register'}`}>
                <div className="form-content">
                    {children}


                </div>
                {
                    
                    isLoginOrRegister == 'login' && (
                        <div className="form-layer">
                            <Image alt='login-layer' src={'/login-layer.svg'} width={1450} height={2560} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Layout