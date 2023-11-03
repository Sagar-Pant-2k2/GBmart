export default ({ children, color, handleClick }) => {
    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: color ? color : '#ce4141', // Use color or the default if not provided
        color: 'white',
        width: '100%',
        height: '40px',
        margin: '10px',
        borderRadius: '10px',
        maxWidth: '150px',
    };

    return (
        <button style={buttonStyle} onClick={handleClick}>
            {children}
        </button>
    );
}
