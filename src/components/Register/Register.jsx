import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';


const Register = () => {
    
    const {user, createUser} = useContext(AuthContext)
    

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [accepted, setAccepted] = useState(false)

    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        setSuccess('')

        console.log(name, email, password, photoURL);


        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase')
            return
        }
       
        else if(password.length < 6){
            setError('Password must contain 6 character')
            return
        }

        createUser(email,password)
        .then(res => {
            const loggedUser = res.user
            console.log(loggedUser);
           
            setError('')
            setSuccess('Congratulation user create successfully')
            form.reset()

        })
        .catch(err=>{
            console.error(err.message)
            setError(err.message)
            setSuccess('')
        })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
        console.log(event.target.checked)
    }
 

    return (
          
        <form onSubmit={handleRegister} className='my-container w-96 bg-sky-400 rounded drop-shadow-md mt-10'>
            <p className='text-yellow-200 font-bold mb-3'>{success}</p>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="photoURL" id="floating_photoURL" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
            </div>

            <div className="flex items-center mb-4">
                <input onClick={handleAccepted} id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link  className="text-white dark:text-blue-500 hover:underline">terms and conditions</Link></label>
            </div>

           <div className='flex justify-center'>
             <button type="submit" disabled={!accepted} className="text-white bg-sky-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
           </div>

           <p className='m-4 text-red-600 font-bold'>{error}</p>

            <Link className='mt-6 flex justify-center mx-auto text-black' to='/login'>Already have an account? <span className='text-white ms-3 font-bold'> Login</span> </Link>
        </form>

        
    );
};

export default Register;