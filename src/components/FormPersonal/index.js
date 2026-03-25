import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";


function FormPersonal() {

    const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext);

    const cpfRef = useRef();
    const telephoneRef = useRef();
    const bdRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({
            ...user,
            cpf: cpfRef.current.value,
            telephone: telephoneRef.current.value,
            bd: bdRef.current.value
        });

        navigate('/address');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style = {{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                gap: "20px"
            }}>
                <input ref={cpfRef} placeholder="CPF" defaultValue={user.cpf}/>
                <input ref={telephoneRef} placeholder="Telephone" defaultValue={user.telephone} />
                <input ref={bdRef} type="date" placeholder="Data de Nascimento" defaultValue={user.bd}/>
                <button type="submit">Próximo</button>
            </form>
        </div>
    );
}

export default FormPersonal