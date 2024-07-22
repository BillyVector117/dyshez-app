'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import './index.css'
import supabase from '@/lib/supabaseClient'
import { toast } from 'react-toastify'
import Loader from '@/app/components/loader'
import { useRouter } from 'next/navigation';

interface signUpData {
    name: string;
    lastName: string;
    cellPhone: string;
    phone: string;
    email: string;
    password: string
    verifyPassword: string;
    webSite: string
    terms: boolean
}
const signUpInitialData = {
    name: "",
    lastName: "",
    cellPhone: "",
    phone: "",
    email: "",
    password: "",
    verifyPassword: "",
    webSite: "",
    terms: true
}
const SignUpForm = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<signUpData>(signUpInitialData)
    const { push } = useRouter();

    const handleSignUp = async (event: any) => {
        event.preventDefault()
        if (!data.terms) {
            return toast.error("Check data: Terms are required", {
                position: "top-center"
            });
        }
        if (data.password !== data.verifyPassword) {
            return toast.error("Check data: Revalidate your password", {
                position: "top-center"
            });
        }
        if (data.name == '' || data.lastName == '' || data.email == '' || data.password == '' || data.verifyPassword == '') {
            return toast.error("Check data: Revalidate your data", {
                position: "top-center"
            });
        }
        setLoading(true);

        const { error, data: authData } = await supabase.auth.signUp({ email: data.email, password: data.password });
        if (error) {
            toast.error(error.message, {
                position: "top-center"
            });
        } else {
            console.log('authData', authData)
            toast.success("Check your email for the confirmation link!", {
                position: "top-center"
            });

            setTimeout(() => {
                push('/login')

            }, 3000);
        }
        setLoading(false);
    }
    if (loading) return (<Loader />)
    return (
        <>
            <span className='label-enter-data'>Únete a la revolución, para comenzar a utilizar la plataforma ingresa los siguientes datos y se parte del <br />movimiento de Dyshez</span>
            <div className="register-content-form">
                <div className="input-container">
                    <Image className='icon' alt='user' src={'/common/user.svg'} width={20} height={20} />

                    <input required value={data.name} onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} type="text" name="name" id="name" placeholder='Nombre(s) *' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='user' src={'/common/user.svg'} width={20} height={20} />

                    <input required value={data.lastName} onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} type="text" name="lastName" id="lastName" placeholder='Apellidos *' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='cell-phone' src={'/common/cell-phone.svg'} width={20} height={20} />

                    <input value={data.cellPhone} onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} type="text" name="cellPhone" id="cell-phone" placeholder='Teléfono movil' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='phone' src={'/common/phone.svg'} width={20} height={20} />

                    <input value={data.phone} onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} type="text" name="phone" id="phone" placeholder='Teléfono fijo' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='web-site' src={'/common/world.svg'} width={20} height={20} />

                    <input value={data.webSite} onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} type="text" name="webSite" id="web-site" placeholder='Sitio web' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='email' src={'/common/email.svg'} width={20} height={20} />

                    <input required value={data.email} onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} type="email" name="email" id="email" placeholder='Email *' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='password' src={'/common/lock.svg'} width={20} height={20} />

                    <input required value={data.password} onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} type="password" name="password" id="password" placeholder='Contraseña' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='verify-password' src={'/common/lock.svg'} width={20} height={20} />

                    <input required value={data.verifyPassword} onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} type="password" name="verifyPassword" id="verify-password" placeholder='Verificar contraseña *' />
                </div>


            </div>
            <div className="register-control-sign-up">
                <div className="accept-terms-sign-up">
                    <input onChange={(event) => setData({ ...data, [event.target.name]: event.target.checked })} className='terms-sign-up-check' type="checkbox" id="terms" name="terms" checked={data.terms} />
                    <label className='terms-label-sign-up' htmlFor="terms">Acepto los términos y condiciones</label>

                </div>
                <button onClick={handleSignUp} className='primary-button mt-6 mb-6' type='button'>Crear cuenta</button>
                <span className='number-changed'>Si ya tienes un restaurante en Dyshez y quieres agregar una <span className='new-spot'>nueva sucursal</span>, conoce cómo hacerlo</span>
            </div>


        </>
    )
}

export default SignUpForm