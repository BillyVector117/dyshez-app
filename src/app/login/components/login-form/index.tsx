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
import supabase from '@/lib/supabaseClient'
import Loader from '@/app/components/loader'

interface IData {
    email?: string;
    password?: string;
}
const LoginForm = () => {
    const { push } = useRouter();
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setLoading(true);
        if (!data?.email || !data?.password) {
            toast.error("Missing Data !", {
                position: "top-center"
            });
            setLoading(false);
        } else {

            const { error, data: authData } = await supabase.auth.signInWithPassword({ email: data.email, password: data.password });
            if (error) {
                toast.error(error.message, {
                    position: "top-center"
                });
                setLoading(false);
            } else {
                toast.success("Welcome back!", {
                    position: "top-center"
                });
                setTimeout(() => {
                    push('/orders')

                    setLoading(false);
                }, 3000);
            }

        }

    }
    const signInWithGoogle = async () => {
        const { error, data } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        if (error) {
            toast.error("Error logging in with Google", {
                position: "top-center"
            });
            console.error('Error logging in with Google:', error.message);
        } else {
            console.log('data', data)
            toast.success("Welcome back!", {
                position: "top-center"
            });
            setTimeout(() => {
                push('/orders')

                setLoading(false);
            }, 3000);
        }
    };

    const signInWithFacebook = async () => {
        const { error, data } = await supabase.auth.signInWithOAuth({
            provider: 'facebook',
        });
        if (error) {
            toast.error("Error logging in with Facebook", {
                position: "top-center"
            });
            console.error('Error logging in with Google:', error.message);
        } else {

            toast.success("Welcome back!", {
                position: "top-center"
            });
            setTimeout(() => {
                push('/orders')

                setLoading(false);
            }, 3000);
        }
    };

    return (
        <>
            {!loading ? (<form className='login-form' onSubmit={(event) => handleSubmit(event)}>
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

                                    <input value={data.email} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} type="email" name="email" id="email" placeholder='Email o teléfono' />
                                </div>
                                <div className="input-container">
                                    <Image className='icon' alt='password' src={'/common/lock.svg'} width={20} height={20} />

                                    <input value={data.password} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} type="password" name="password" id="password" placeholder='Contraseña' />
                                </div>
                                <button className='primary-button mt-6' type='submit'>Continuar</button>

                            </div>
                            <Link href={'/login/forgot-password-form'}>
                                <span className='number-changed cursor-pointer'>¿Cambiaste tu teléfono?</span>
                            </Link>


                            <div className="company-buttons mt-20">
                                <button type='button' className="company-button"><Image alt='apple-logo' src={'./apple.svg'} width={22} height={22} /> </button>
                                <button onClick={signInWithGoogle} type='button' className="company-button"><Image alt='google-logo' src={'./google.svg'} width={22} height={22} /> </button>
                                <button onClick={signInWithFacebook} type='button' className="company-button"><Image alt='fb-logo' src={'./fb.svg'} width={22} height={22} /> </button>

                            </div>
                        </>
                    ) : (
                        <>
                            <SignUpForm />
                        </>
                    )
                }
            </form>) : (<Loader />)}

            <ToastContainer />
        </>
    )
}

export default LoginForm