const FormCheckBox = ({ label, onHandlerChange }) => {
    return (
        <div className="mx-2">
            <input
                id={label}
                type={"checkbox"}
                className="mx-1 accent-red-500"
                name="information"
                value={label}
                onChange={(e) => onHandlerChange(e)} />
            <label className="text-xs lg:text-base text-white lg:text-black" htmlFor={label}>{label}</label>
        </div>
    )
}

export default FormCheckBox