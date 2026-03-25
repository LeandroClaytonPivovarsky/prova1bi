import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";


function Home() {

    const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext);
    const nameRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();

        setUser({
            ...user,
            name: nameRef.current.value});

        navigate('/personal');
    }
    return (
        <div>
            <h1>Formulário de Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <input defaultValue={user.name} ref={nameRef} placeholder="Nome" />
                <button type="submit">Continuar</button>
            </form>
        </div>
    );
}

export default Home;