const Contact = ({data, onDelete}) => {
    return (
        <div>
            <p>{data.name}</p>
            <p>{data.number}</p>
            <button onClick={()=>onDelete(data.id)}>Delete</button>
        </div>
    )
}

export default Contact;