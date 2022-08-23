import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { KEY_USER } from '../Main';


const Signup = ({ setUser: setLoginUser }) =>
{
    const [user, setUser] = useState({
        name: ``,
        email: ``,
        password: ``
    });

    const [error, setError] = useState('');



    const [loggedIn, setLoggedIn] = useState(false);
    const handleChange = e =>
    {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const register = async (e) =>
    {
        e.preventDefault();
        const { name, email, password } = user;
        if (name && email && password)
        {
            const res = await axios.post(`/register`, user);
            const resMessage = res.data.message;
            if (resMessage === `User already exists`)
            {
                setError(resMessage)
            } else
            {
                setLoginUser(user);
                setLoggedIn(true);
                localStorage.setItem(KEY_USER, user)
            }


        }

    }
    return (
        <div style={{ border: '1px solid #7EBCE6', width: '40%', marginLeft: '20px', marginTop: '150px', fontFamily: 'Monaco, monospace', boxShadow: '10px 10px 8px #20B2AA' }}>
            {loggedIn && <Navigate to="/" />}
            <form onSubmit={register} >
                <h2>Sign Up</h2>
                <label htmlFor="name" style={{ fontSize: '25px' }}>Enter your name </label>
                <input type="text" required value={user.name} name="name" onChange={handleChange} style={{ border: 'none', backgroundColor: '#f1f3ff', borderBottom: '3px solid teal' }} /><br></br><br></br>
                <label htmlFor="email" style={{ fontSize: '25px' }}>Enter your email </label>
                <input type="email" required value={user.email} name="email" onChange={handleChange} style={{ border: 'none', backgroundColor: '#f1f3ff', borderBottom: '3px solid teal' }} /><br></br><br></br>
                <label htmlFor="password" style={{ fontSize: '25px' }}>Enter a password </label>
                <input type="password" required value={user.password} name="password" onChange={handleChange} style={{ border: 'none', backgroundColor: '#f1f3ff', borderBottom: '3px solid teal' }} /><br></br><br></br>
                <button type="submit">Sign Up</button>
            </form>
            <div style={{ textAlign: 'left', color: 'red' }}>{error}</div>

        </div>
    )
}

export default Signup;