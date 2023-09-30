import React from 'react'
import { useForm } from 'react-hook-form';
import { LoginData } from '../../models/logindata';




interface LoginFormProps {
    onSubmit: (data: LoginData) => void
}



const LoginForm : React.FC<LoginFormProps> = (data : LoginFormProps) => {

    const {register , handleSubmit , formState: {errors}} = useForm<LoginData>()
  return (
    <div className='flex flex-col items-center'>
        <p>Login Form</p>
        <form onSubmit={handleSubmit(data.onSubmit)} className='flex flex-col space-y-4 items-center w-full'>
            <div className="flex flex-col w-full">
                <label htmlFor="username" className='mb-1'> Username</label>
                <input 
                    type="text" 
                    placeholder='Username' 
                    id='username' 
                    {...register('username', {required: true})}
                    className="p-2 border rounded"
                    />
            {errors.username && <p>Email is required</p>}
                </div>
            <div className="flex flex-col w-full">
                <label htmlFor="password" className='mb-1'>Password</label>
                <input 
                    type="password" 
                    placeholder='Password' 
                    {...register('password', {required: true})}
                    className="p-2 border rounded"
                    />
                {errors.password && <p>Password is required</p>}
            </div>
            <input type="submit" value='Login' className='bg-slate-300 border rounded-md w-full'/>
        </form>
    </div>
  )
}

export default LoginForm