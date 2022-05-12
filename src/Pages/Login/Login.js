import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let signInError;
    const handleGoogleSignIn = () => {
        console.log('sign in');
        signInWithGoogle();
    };
    if (loading || gLoading) {
        return <Loading />
    }
    if (error || gError) {
        signInError = (error.message || gError.message);
    }
    if (user) {
        console.log(user);
        navigate('/');
    }
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);

    };
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Please enter a valid email'
                                    }
                                }
                                )} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password should be 6 charcters or more'
                                    }
                                }
                                )} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <p className='text-red-500 mb-1'><small>{signInError}</small></p>
                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <p className='text-sm text-center'>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create an account</Link></p>
                    <div className="divider">or</div>
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;