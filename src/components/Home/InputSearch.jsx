import React from 'react'
import { useForm } from 'react-hook-form'
import './style/mainInput.css'

const InputSearch = ({setProductSearch}) => {

    const { handleSubmit, register, reset } = useForm()

   

    const submit = data => {
        console.log(data)

    }


    return (
        <div className='form-container'>
        <form className='form-home' onSubmit={handleSubmit(submit)} >
            <input className='main-input' type="text" {...register('searchText')} />
            <button className='main-btn'>search</button>
        </form>
        </div>
    )
}

export default InputSearch