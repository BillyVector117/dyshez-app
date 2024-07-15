'use client'
import React, { useEffect, useState } from 'react'
import './index.css'
import Image from 'next/image'
import notifier from '@/app/notifier/notifier'
import SignUpForm from '../sign-up-form'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

interface IData {
    name?: String;
    password?: String;
}
const LoginForm = () => {
    const { push } = useRouter();

    const [isLoginOrRegister, setIsLoginOrRegister] = useState('login')
    const [data, setData] = useState<IData>({})
    useEffect(() => {
        const handleNotification = (message: any) => {
            setIsLoginOrRegister(message)
        };

        notifier.subscribe(handleNotification);

        return () => {
            notifier.unsubscribe(handleNotification);
        };
    }, []);

    const handleLoginNotify = () => {
        notifier.notify('login')
    }
    const handleRegisterNotify = () => {
        notifier.notify('register')
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        push('/orders')

 /*        if (!data?.name || data?.password) {
            toast.error("Missing Data !", {
                position: "top-center"
              });

        } */

    }


    return (
        <form className='login-form' onSubmit={(event) => handleSubmit(event)}>
            <div className="labels">
                <button type='button' onClick={handleLoginNotify} className={`btn${isLoginOrRegister == 'login' ? '-active' : '-inactive'} sign-in-label`}>Login</button>
                <button type='button' onClick={handleRegisterNotify} className={`btn${isLoginOrRegister == 'register' ? '-active' : '-inactive'} sign-in-label`}>Registrer</button>
            </div>
            {
                isLoginOrRegister == 'login' ? (
                    <>
                        <span className='label-enter-data'>Ingresa con tu correo electrónico o tu número de teléfono</span>
                        <div className="input-content">
                            <div className="input-container">
                                <Image className='icon' alt='email' src={'/common/email.svg'} width={20} height={20} />

                                <input onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} type="email" name="email" id="email" placeholder='Email o teléfono' />
                            </div>
                            <div className="input-container">
                                <Image className='icon' alt='password' src={'/common/lock.svg'} width={20} height={20} />

                                <input onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} type="password" name="password" id="password" placeholder='Contraseña' />
                            </div>
                            <button className='primary-button mt-6' type='submit'>Continuar</button>

                        </div>
                        <Link href={'/login/forgot-password-form'}>
                            <span className='number-changed cursor-pointer'>¿Cambiaste tu teléfono?</span>
                        </Link>


                        <div className="company-buttons mt-20">
                            <button className="company-button"><Image alt='apple-logo' src={'./apple.svg'} width={22} height={22} /> </button>
                            <button className="company-button"><Image alt='google-logo' src={'./google.svg'} width={22} height={22} /> </button>
                            <button className="company-button"><Image alt='fb-logo' src={'./fb.svg'} width={22} height={22} /> </button>

                        </div>
                    </>
                ) : (
                    <>
                        <SignUpForm />
                    </>
                )
            }
<ToastContainer />
        </form>
    )
}

export default LoginForm