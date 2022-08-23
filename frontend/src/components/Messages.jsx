import { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment';
const Messages = () =>
{
    const [messages, setMessages] = useState([]);
    const loadMessages = async () =>
    {
        const res = await axios.get(`/messages`)
        setMessages(res.data.allMessages);
    }
    const messagesCards = messages.map((message) =>
    {
        const formattedDate = moment(message.timestamp).format('DD-MM-YYYY')


        return (

            <div>
                <h3 style={{ border: '2px solid #f1f3ff', borderRadius: '45px' }}>{message.text}</h3>
                <h5>{formattedDate}</h5>
                <h5>{message.username}</h5>
            </div>

        )
    })

    useEffect(() =>
    {
        loadMessages();
    });

    const content = messages.length === 0 ? <div>Loading...</div> : messagesCards;
    return (
        <div>{content}</div>
    )


}

export default Messages;