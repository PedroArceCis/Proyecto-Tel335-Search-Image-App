import { useForm } from 'react-hook-form';
import Modal from '../components/Despliegue';

function NewSample() {

    const { register, handleSubmit } = useForm();
    return (
        <div className='flex justify-center mx-2 my-2'>
            <form onSubmit={handleSubmit((values) => {
                console.log(values)
            }
            )}>
                <header className='flex justify-between '>
                    <input type="text"
                        {...register("search", { required: true })}
                        placeholder='Voy a tener suerte'
                        className='bg-zinc-700 text-white px-4 py-2 rounded-md my-2 mx-2 w-[32rem]' />
                    <Modal />
                </header>
            </form>
        </div>
    )
}

export default NewSample;
