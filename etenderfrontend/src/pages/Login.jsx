import {useState,useEffect} from "react";
import LoginIcon from '@mui/icons-material/Login';
function Login() {
    const [formData,setFormData]= useState({
        email:'',
        password:'',
    });

    const {email,password} = formData;
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = (e)=> {
        e.preventdefault()
    };

    return (
        <>
        <section className="heading">
            <h2><LoginIcon sx={{width:40, height:40}} /> Login</h2>
            <p>Login to your account</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
            <div className='form-group'>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name='email' 
                    value={email} 
                    placeholder='Enter your email'
                    onChange={onChange}/>
            </div>
            <div className='form-group'>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    name='password' 
                    value={password} 
                    placeholder='Enter password'
                    onChange={onChange}/>
            </div>            
            <div className="form-group">
                <button type="submit" className="btn btn-block">Submit</button>
            </div>
            </form>
        </section>
        </>
    );
}

export default Login

