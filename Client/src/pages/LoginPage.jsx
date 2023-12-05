import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function LoginPage() {
    const { register, handleSubmit } = useForm();
    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center">
            <form
                onSubmit={handleSubmit((values) => {
                    console.log(values);
                }
                )}>
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
                <button type="Submit">Login</button>
                <p className='flex gap-x-2 justify-between'>
                    dont have an account? <Link to="/register" className='text-sky-500'>Register</Link>
                </p>

            </form>

        </div>
    )
}

export default LoginPage;