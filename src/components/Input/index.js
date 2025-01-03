import "./Input.css";

const Input = ({ label, id, name, type = "text", placeholder }) => {
    return (
        <div className="input-area">
            <label htmlFor={id} className="" >{label}</label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                className=""
            />
        </div>
    );
}

export default Input
