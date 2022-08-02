const FormRadio = ({ label, name, val, onHandlerChange }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center my-1">
            <p className="w-80 text-xs lg:text-base text-center lg:text-left text-white lg:text-black">{label}</p>
            <div className="mx-2">
                <input
                    id={name+1}
                    type={"radio"}
                    className="mx-1 accent-red-500"
                    name={name}
                    checked={val}
                    onChange={(e) => onHandlerChange(e, name)}
                    value={true}
                />
                <label className="text-white lg:text-black" htmlFor={name+1}>Yes</label>
            </div>
            <div className="mx-2">
                <input
                    id={name+2}
                    type={"radio"}
                    className="mx-1 accent-red-500"
                    name={name}
                    checked={!val}
                    onChange={(e) => onHandlerChange(e, name)}
                    value={false}
                />
                <label className="text-white lg:text-black" htmlFor={name+2}>No</label>
            </div>
        </div>
    )
}

export default FormRadio