const InformationDiv = (props) => {
    return (
        <div>
            <h1 className="text-xl font-bold text-left mb-3">{props.title}</h1>
            <p className="mb-3">{props.desc}</p>
        </div>
    )
}

export default InformationDiv