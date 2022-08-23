import { useState } from 'react';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import Messages from '../Messages';
import { KEY_USER } from '../Main';

const Login = ({ setUser: setLoginUser }) =>
{
    const [user, setUser] = useState({
        email: ``,
        password: ``
    });
    const [error, setError] = useState('');

    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = e =>
    {

        const { name, value } = e.target;
        console.log(`name: ${name} value: ${value}`);
        setUser({
            ...user,
            [name]: value
        });
    }
    const login = async (e) =>
    {
        e.preventDefault();

        const res = await axios.post(`/login`, user);
        if (res.data.message === `Login successful`)
        {
            setLoginUser(res.data.user);
            setUser({ email: ``, password: `` });
            setLoggedIn(res.data.user ? true : false);
            localStorage.setItem(KEY_USER, res.data.user)
        } else
        {
            setError(res.data.message);
        }

    }
    return (

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ border: '1px solid #7EBCE6', marginRight: '20px', marginTop: '100px', width: '50%', boxShadow: '10px 10px 8px #20B2AA' }}>
                {loggedIn && <Navigate to="/" />}
                <form onSubmit={login} >
                    <h2 style={{ fontFamily: 'Monaco, monospace', fontSize: '40px' }}>Login</h2>
                    <label style={{ fontFamily: 'Monaco, monospace', textAlign: 'left', fontSize: '25px' }} htmlFor="email"> Email </label>
                    <input type="email" value={user.email} name="email" onChange={handleChange} style={{ width: '35%', border: 'none', backgroundColor: '#f1f3ff', borderBottom: '3px solid teal' }} /><br></br><br></br>
                    <label style={{ fontFamily: 'Monaco, monospace', textAlign: 'left', fontSize: '25px' }} htmlFor="password">Password </label>
                    <input type="password" value={user.password} name="password" onChange={handleChange} style={{ width: '35%', border: 'none', backgroundColor: '#f1f3ff', borderBottom: '3px solid teal' }} /><br></br><br></br>
                    <button type="submit">Login</button>
                </form>
                <p style={{ color: 'red' }}>{error}</p>
                <Link to="/signup">
                    <p style={{ fontFamily: 'Monaco, monospace', fontSize: '25px' }}>You don&#x27;t have an account? Register now!</p>
                </Link>
            </div>
            <div style={{ border: '1px solid #7EBCE6', marginRight: '20px', marginTop: '100px', width: '50%', boxShadow: '10px 10px 8px #20B2AA', fontFamily: 'Monaco, monospace' }}>
                <Messages />
            </div>
        </div>

    )
}

export default Login;