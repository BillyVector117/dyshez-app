import React from 'react'
import './index.css'
import Image from 'next/image'
import Link from 'next/link'
// unfinished
const ResetPasswordForm = () => {
    return (
        <form className='forgot-password-form'>
            <div className="labels">
                <h3>Reset Password</h3>
            </div>
            <span className='label-enter-data'>Enter new password</span>
            <div className="input-content">
                <div className="input-container">
                    <Image className='icon' alt='password' src={'/common/lock.svg'} width={20} height={20} />

                    <input type="password" name="password" id="password" placeholder='Contraseña*' />
                </div>
                <div className="input-container">
                    <Image className='icon' alt='password' src={'/common/lock.svg'} width={20} height={20} />

                    <input type="password" name="password" id="password" placeholder='Verificar contraseña*' />
                </div>

                <button className='primary-button mt-6' type='submit'>Continue</button>

            </div>
            <span className='number-changed'>Remember Password? <Link className='login-link' href={'/login'}>Login</Link> </span>
        </form>
    )
}

export default ResetPasswordForm