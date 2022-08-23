import Messages from "../Messages";
import SendMessage from "../SendMessage";

const Home = ({ user, setUser }) => (
    <>
        <h1 style={{ fontFamily: 'Monaco, monospace' }}>Welcome, {user.name}</h1>
        <br />
        <SendMessage />
        <button onClick={() =>
        {
            setUser(null);
            localStorage.clear();
        }}>Log Out</button>
        <Messages />
    </>
);

export default Home;

