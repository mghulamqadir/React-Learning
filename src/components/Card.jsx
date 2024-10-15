const Card = ({ children, bg }) => {
    return (
        <div className={`${bg} p-6 rounded-lg shodow-md`}>{children}</div>
    )
}

export default Card