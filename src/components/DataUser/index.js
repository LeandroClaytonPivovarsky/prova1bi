import { useContext } from "react";
import { AddressContext } from "../../context/AddressContext";
import { UserContext } from "../../context/UserContext";

function DataUser() {
    const {address} = useContext(AddressContext);
    const {user} = useContext(UserContext);

    return (
        <div>
            <h2>Dados Pessoais</h2>
                <p>{user.cpf}</p>
                <p>{user.telephone}</p>
                <p>{user.bd}</p>
                <p>{address.street}</p>
                <p>{address.number}</p>
                <p>{address.zip}</p>
                <p>{address.city}</p>

        </div>
    );
}

export default DataUser;