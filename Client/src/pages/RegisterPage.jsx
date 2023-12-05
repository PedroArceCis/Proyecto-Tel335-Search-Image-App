import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center">
            <form
                onSubmit={handleSubmit((values) => {
                    console.log(values);
                }
                )}>
                <input type="text"
                    {...register("username", { required: true })}
                    placeholder='username'
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                />
                <input type="email"
                    {...register("email", { required: true })}
                    placeholder='email'
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                />
                <input type="password"
                    {...register("password", { required: true })}
                    placeholder='password'
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                />
                <button type="Submit">Register</button>
                <p>
                    already have an account? <Link to="/login" className='text-sky-500'>Login</Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterPage;