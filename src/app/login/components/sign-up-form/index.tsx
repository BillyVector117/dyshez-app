import Image from 'next/image'
import React from 'react'
import './index.css'
const SignUpForm = () => {
    return (
        <>
            <span className='label-enter-data'>Únete a la revolución, para comenzar a utilizar la plataforma ingresa los siguientes datos y se parte del <br />movimiento de Dyshez</span>
            <div className="register-content-form">
                <div className="input-container">
                    <Image className='icon' alt='user' src={'/common/user.svg'} width={20} height={20} />

                    <input type="text" name="name" id="name" placeholder='Nombre(s) *' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='user' src={'/common/user.svg'} width={20} height={20} />

                    <input type="text" name="lastName" id="lastName" placeholder='Apellidos *' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='cell-phone' src={'/common/cell-phone.svg'} width={20} height={20} />

                    <input type="text" name="cell-phone" id="cell-phone" placeholder='Teléfono movil' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='phone' src={'/common/phone.svg'} width={20} height={20} />

                    <input type="text" name="phone" id="phone" placeholder='Teléfono fijo' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='web-site' src={'/common/world.svg'} width={20} height={20} />

                    <input type="text" name="web-site" id="web-site" placeholder='Sitio web' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='email' src={'/common/email.svg'} width={20} height={20} />

                    <input type="email" name="email" id="email" placeholder='Email *' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='password' src={'/common/lock.svg'} width={20} height={20} />

                    <input type="password" name="password" id="password" placeholder='Contraseña' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='verify-password' src={'/common/lock.svg'} width={20} height={20} />

                    <input type="password" name="verify-password" id="verify-password" placeholder='Verificar contraseña *' />
                </div>


            </div>
            <div className="register-control-sign-up">
                <div className="accept-terms-sign-up">
                    <input className='terms-sign-up-check' type="checkbox" id="terms" name="terms" checked />
                    <label className='terms-label-sign-up' htmlFor="terms">Acepto los términos y condiciones</label>

                </div>
                <button className='primary-button mt-6 mb-6' type='submit'>Crear cuenta</button>
                <span className='number-changed'>Si ya tienes un restaurante en Dyshez y quieres agregar una <span className='new-spot'>nueva sucursal</span>, conoce cómo hacerlo</span>
            </div>


        </>
    )
}

export default SignUpForm