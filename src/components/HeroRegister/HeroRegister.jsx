import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye,FaRegEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
const HeroRegister = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword ,setShowPassword] =useState(false)
    const handleRegister = e => {
        e.preventDefault();
        // console.log('submit');
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted =e.target.terms.checked;
        const name =e.target.name.value;
        console.log(email, password,accepted,name);



        // reset error
        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password should have at least one upper case charecter.')
        
            return;
        }
        else if(!accepted){
            setRegisterError('please accept our terms and conditions')
            return;
        }

        //    create user

        // update profile
        

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('user created successfully')
            //    update profile
                updateProfile(result.user, {
                    displayName:name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                .then(() =>console.log('profile updated'))
                .catch()
               
               
                // send varification email
                sendEmailVerification(result.user)
                .then(() =>{
                    alert('please check your email and verify your account')
                })
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                 name="email" 
                                 placeholder="email"
                                  className="input input-bordered"
                                   required />
                                   <br />
                                <input type="name"
                                 name="name" 
                                 placeholder="your name"
                                  className="input input-bordered"
                                   required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                               
                                <input type={showPassword?"text":"password"}
                                 name="password"
                                  placeholder="password"
                                  className="input input-bordered"
                                   required />
                                   <span onClick={()=>setShowPassword(!showPassword)} className="ml-[250px] absolute pl-10 mt-[52px]">
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                    }
                                   
                                   </span>
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <input className="mr-[300px]" type="checkbox" name="terms" id="terms" />
                            <label htmlFor="terms">Accept our <a href="">terms and conditions</a></label>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-600">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                        <p>Already have an account? please <Link to={'/login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroRegister;