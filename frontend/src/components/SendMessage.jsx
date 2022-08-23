import axios from "axios";
import { useState } from "react";
const SendMessage = (user) =>
{
    const [message, setMessage] = useState('');
    const handleChange = (e) =>
    {
        e.preventDefault();
        setMessage(e.target.value)
    }
    const submit = async (e) =>
    {
        e.preventDefault();
        await axios.post(`/messages`, {
            text: message,
            timestamp: new Date(),
            username: user.name
        });

    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <form onSubmit={submit}>
                <input type="text" value={message.value} onChange={(e) => handleChange(e)} />
                <input type="submit" value="Post message!" />
            </form>
        </div>
    )
}

export default SendMessage;