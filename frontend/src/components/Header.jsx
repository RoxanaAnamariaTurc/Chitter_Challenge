import bird from '../bird.jpg'
const Header = () =>
{
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
                <img src={bird} alt="bird" style={{ width: '100px', borderRadius: '80px', boxShadow: '10px 10px 8px #20B2AA' }} />
            </div>
        </>
    )
}

export default Header;