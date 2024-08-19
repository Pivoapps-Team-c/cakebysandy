
import React, { useContext, useEffect, useState } from 'react'
import './login.styles.css'
import '../../routes/other-styles.styles.scss'
import { MdLogin, MdOutlineMail, MdOutlineMarkEmailUnread, MdOutlinePhone } from 'react-icons/md'
import { Button, Input, Spinner } from '@material-tailwind/react'
import { FcInfo } from 'react-icons/fc'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { OTPGen, createAuth, createUserDocumentFromAuth, errorToast, infoToast, 
    logGoogleUser, searchOtp, signInAuthWithEmailAndPassword, successToast, updateOTPDoc 
} from '../../utils/firebase/firebase.utils'
import { UserContext } from '../../context/user.context'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { FaRegUser } from 'react-icons/fa6'


const LoginPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { currentUser, setCurrentUser } = useAuth();
    // console.log('currentUser:');
    // var otpp = 'A'+Math.random()*107000;
    // console.log(otpp.substring(0, 5));
    
    var tempOTPstore = null;
    if (localStorage.getItem('tempOTP')) {
        tempOTPstore = JSON.parse(localStorage.getItem('tempOTP'));
    }
    const [tempOTP, setTempOTP] = useState(tempOTPstore);
    const [newUser, setNewUser] = useState(currentUser);
    const [register, setRegister] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const userReg = () => setRegister(!register);
    const spinToggle = () => setSpinner(!spinner);

    const defaultFormFields = {
        otp: '',
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const [ formFields, setFormfields ] = useState(defaultFormFields);
    const { otp, displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormfields({...formFields, [name]: value})
    }


    const handleLogin = async (event) => {
        event.preventDefault();
        // successToast('dsfdfs')
        // OTPGen(50)
        // return;

        try {
            const { user } = await signInAuthWithEmailAndPassword(email, password);
            setFormfields(defaultFormFields);
            const { displayName } = user;
            successToast('Logging you in..!');
            // setCurrentUser(user);
            setNewUser(user);
            // console.log(user.email);
            navigate(from, { replace: true })
            // console.log(user.displayName);
            
        } catch (error) {
            switch (error.code) {
                case ('auth/wrong-password'):
                    errorToast('Oops..! Wrong Password');
                    break;

                case ('auth/user-not-found'):
                    errorToast('Oops..! User not found. Check email');
                    break;

                case ('auth/invalid-login-credentials'):
                    errorToast('Oops..! Invalid login credentials');
                    break;

                case ('auth/invalid-credential'):
                    errorToast('Oops..! Invalid login credentials');
                    break;
            
                default:
                    errorToast('User Login Error: ', error);
                    console.log('User Login Error: ', error);
                    break;
            }
        }
    }


    // localStorage.removeItem('tempOTP')
    const handleRegister = async (event) => {
        event.preventDefault();

        
        // console.log(OTPfield);
        // return

        // if (tempOTP) {
                    
            // const otp = tempOTP.otp;
            const displayName = event.target.displayName.value;
            const phone = event.target.phone.value;
            const email = event.target.email.value;
            const password = event.target.password.value;
            const confirmPassword = event.target.confirmPassword.value;

            const registerFormFields = {
                // otp: otp,
                otp: '',
                displayName: displayName,
                phone: phone,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            };
            // console.log(registerFormFields)
            // return 

            if (password !== confirmPassword) {
                infoToast('Oops..! Passwords do not match');
                return;
            }

            try {
                spinToggle();
                console.log('spinToggle: '+spinner);
                // return;
                const { user } = await createAuth(email, password);
                // await (user, { displayName });
                await createUserDocumentFromAuth(user, {displayName, otp, phone});
                // setFormfields(defaultFormFields);
                // console.log(displayName)
                // return;
                console.log('Registration successful. Welcome '+displayName);
                successToast('Registration successful. Welcome '+displayName);
                localStorage.removeItem('tempOTP')
                
            } catch (error) {
                // console.log('ErrMsg: ', error);
                if (error.code === 'auth/email-already-in-use') {
                    errorToast('Oops..! Email already in use');
                    return;
                } else if (error.code === 'auth/weak-password') {
                    return infoToast('Password should not be less than 8 characters')
                }
                errorToast('Oops..! Unable to register. Check Email!')
                console.log('User creation encountered an error: ', error);
            }

        // } else { 

        //     const OTPfield = event.target.otp.value;
        //     const found = await searchOtp(OTPfield);
        //     if (found && found.status === 'no') {
        //         // A6893
        //         successToast('OTP Verified')
        //         found['status'] = 'yes';
        //         await updateOTPDoc(found).then(
        //             localStorage.setItem('tempOTP', JSON.stringify(found)),
        //             setTempOTP(found)
        //         );
        //     } else {
        //         errorToast('Oops..! Incorrect OTP');
        //     }
        // }


    }


    const registerWithOtp = async (event) => {
        event.preventDefault();

        const { target } = event;
        const dname = target.displayName.value;
        const otp = target.otp.value;

        const found = await searchOtp(otp);

        // if (found && found.status == 'no') {
        //     successToast(dname+' - '+otp)
        //     console.log(found.status); // A6893
            logGoogleUser();
        // } else {
        //     errorToast('Oops..! Incorrect OTP');
        // }
    }


    useEffect(() => {
    //     if (localStorage.getItem('curUser') !== ''){
            // if(from === '/login'){
            //     navigate('/', {replace:true})
            // } else {
                if (currentUser) {
                    navigate(from, {replace:true});
                }
            // }
    //             console.log(localStorage.getItem('curUser'));
    //     }
    }, [currentUser])



    // console.log('Page Loaded');



  return (
    <>
    {
        register === false ?
        // <div className='login-right'>
        <div className='login-content w-full sm:w-1/3 m-auto'>
            <div className='inner2'>

                <p className='sign-in'>Sign In</p>

                <form onSubmit={handleLogin}>

                    <div className='items-input-group flex'>
                        <h4 className='blue-head text-xs mx-4 tracking-wide'><FcInfo size='16' className='float-left' /> &nbsp; Enter email and password to proceed</h4>
                    </div>
        
                    <div className='items-input-group flex'>
                        <Input icon={<MdOutlineMail />} name='email' onChange={handleChange} value={email} type='email' size='lg' label='Email'className='text-gray-700 w-full' required />
                    </div>
                    
                    <div className='items-input-group flex'>
                        <Input icon={<HiOutlineLockClosed />} name='password' onChange={handleChange} value={password} type='password' label='Password'className='text-gray-700 w-full' required />
                    </div>
        
                    <div className='items-input-group'>
                        <Button type='submit' className='w-full float-center rounded-md' variant="gradient">&nbsp; Login &nbsp;<MdLogin size='18' className='float-right ml-2'/></Button>
                    </div>
                </form>

                <div id='reg2' className='register-container'>
                    <p>Don't have an account yet?</p>
                    <h3 onClick={userReg}>Register Here</h3>
                </div>

            </div>
        </div>
        :
        <div className='login-content w-full sm:w-1/3 m-auto'>
            <div className='inner2'>

                <p className='sign-in'>Register</p>

                { spinner === true ? <Spinner className='w-8 h-8 mx-[calc((100%-64px)/2)]' /> : null }

                <form onSubmit={handleRegister}>
        
                    {/* { tempOTP ? */}
                    <>
                        <div className='items-input-group flex'>
                            <h4 className='blue-head text-xs mx-4 my-1 tracking-wide'><FcInfo size='16' className='float-left' /> &nbsp; Provide details to register</h4>
                        </div>

                        <div className='items-input-group flex'>
                            <input type='hidden' name='anyName' />
                            <Input icon={<FaRegUser />} name='displayName' type='text' label='Username'className='text-gray-700 w-full' required />
                        </div>
                        
                        <div className='items-input-group flex'>
                            <Input icon={<MdOutlineMail />} name='email' type='email' label='Email'className='text-gray-700 w-full' required />
                        </div>
                        
                        <div className='items-input-group flex'>
                            <Input icon={<MdOutlinePhone />} name='phone' type='number' label='Phone'className='text-gray-700 w-full' required />
                        </div>
                        
                        <div className='items-input-group flex'>
                            <Input icon={<HiOutlineLockClosed />} name='password' type='password' label='Password'className='text-gray-700 w-full' required />
                        </div>
                        
                        <div className='items-input-group flex'>
                            <Input icon={<HiOutlineLockClosed />} name='confirmPassword' type='password' label='Confirm Password'className='text-gray-700 w-full' required />
                        </div>
            
                        <div className='items-input-group'>
                            <Button type='submit' className='w-full float-center rounded-md' variant="gradient">&nbsp; Register &nbsp;<MdLogin size='18' className='float-right ml-2'/></Button>
                        </div>
                    </>
                    
                </form>

                <div id='reg2' className='register-container'>
                    <p>Already have an account?</p>
                    <h3 onClick={userReg}>Login Here</h3>
                </div>

            </div>
        </div>
    }
    </>
  )
}

export default LoginPage