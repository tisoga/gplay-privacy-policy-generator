const FormInput = ({ label, onHandlerChange, type, name, value }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center my-1">
            <p className="w-80 text-xs lg:text-base text-center lg:text-left text-white lg:text-black">{label}</p>
            <p className="hidden lg:block">:</p>
            <input
                className="border w-64 border-black selection:bg-emerald-600 selection:text-white p-1 rounded lg:mx-3"
                name={name}
                type={type}
                onChange={(e) => onHandlerChange(e, name)}
                value={value} 
                required/>
        </div>
    )
}

export default FormInput