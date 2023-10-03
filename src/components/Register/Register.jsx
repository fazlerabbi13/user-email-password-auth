import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
const Register = () => {

    const handleRegister = e => {
        // const [registerError, setRegisterError] = useState('')
        // const [success, setSuccess] = useState('')
        // const [showPassword, setShowPassword] = useState(false)
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // // reset error
        // setRegisterError('');
        // setSuccess('');


        // if (password.length < 6) {
        //     setRegisterError('Password should be at least 6 characters')
        //     return;
        // }
        // else if (!/[A-Z]/.test(password)) {
        //     setRegisterError('Your password should have at least one upper case charecter.')

        //     return;
        // }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })

    }


    return (
        <div>
            <h2 className="text-3xl mb-10">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="mb-4 px-4 py-2 w-[500px] border" type="email" placeholder="Your Email Address" name="email" id="" />
                <br />
                <input className="mb-4 px-4 py-2  w-[500px] border" type="password" placeholder="Password" name="password" id="" />
                <br />
                <input className="btn btn-primary mb-4  w-[500px]" type="submit" value="register" />
            </form>
            
        </div>
    );
};

export default Register;