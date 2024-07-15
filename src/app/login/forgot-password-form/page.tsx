'use client'
import React from 'react'
import './index.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


const ForgotPasswordForm = () => {

    const { push } = useRouter();

    return (
        <form className='forgot-password-form'>
            <div className="labels-forgot-pass">
                <h3>Forgot Password</h3>
            </div>
            <span className='label-enter-data-pass'>Enter the email associated with your account and <br />
                we will send you an email with instructions for <br />
                forgetting your password</span>
            <div className="input-content">
                <div className="input-container">
                    <Image className='icon' alt='continue' src={'/common/email.svg'} width={20} height={20} />
                    <input type="email" name="email" id="email" placeholder='Email*' />

                </div>
                <button onClick={() => push('/login/reset-password')} className='primary-button mt-6' type='button'>Continue  <Image alt='continue' src={'/common/arrow-right.svg'} width={20} height={20} /></button>

            </div>
            <span className='number-changed'>Remember Password? <Link className='login-link' href={'/login'}>Login</Link> </span>
        </form>
    )
}

export default ForgotPasswordForm