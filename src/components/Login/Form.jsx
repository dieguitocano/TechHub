import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const [isErrorLogin, setIsErrorLogin] = useState(false)

    const { handleSubmit, reset, register } = useForm()

    const navigate = useNavigate()

    const submit = data => {
        console.log(data)
        const URL_USER = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL_USER, data)
            .then(res => {
                localStorage.setItem('token', res.data.data.token)
                navigate('/')
            })
            .catch(err => {
                localStorage.setItem('token', '')
                setIsErrorLogin(true)
                setTimeout(() => {
                    setIsErrorLogin(false)
                }, 5000)
            })

        reset({
            email: '',
            password: ''
        })
    }



    return (

        <form onSubmit={handleSubmit(submit)} className='login-form'>
            <ul className='login-test'>
                <li className='flex-login'>
                    <b>Email:</b>mason@gmail.com
                </li>
                <li className='flex-login'>
                    <b>Password:</b>mason1234
                </li>
            </ul>
            <h2 className='login-title'>Hub Access</h2>

            <ul className='login-list'>
                <li className='login-item'>
                    <label htmlFor="login-email"
                        className='login-label'>Email</label>
                    <input
                        type="email"
                        className='login-input'
                        id='login-email'
                        {...register('email')}
                    />
                </li>
                <li className='login-item'>
                    <label htmlFor="login-pass"
                        className='login-label'>Password</label>
                    <input
                        type="password"
                        className='login-input'
                        id='login-pass'
                        {...register('password')}
                    />
                </li>
            </ul>
            <div className='forgot-pass'>
                {
                    isErrorLogin && 'Invalid credentials, try again'
                }
            </div>
            <div>
                <button className='access-button'>Log In</button>
            </div>
            <div>
                <a className='forgot-pass' href="">Forgot password?</a>
            </div>
        </form>

    )
}

export default Form