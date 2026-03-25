import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../context/AddressContext"

function FormAddress() {
    
    const {address, setAddress} = useContext(AddressContext);

    const navigate = useNavigate()

    const streetRef = useRef();
    const numberRef = useRef();
    const zipRef = useRef();
    const cityRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault();
        setAddress({
            ...address,
            street: streetRef.current.value,
            number: numberRef.current.value,
            zip: zipRef.current.value,
            city: cityRef.current.value
        });
        navigate("/finish");
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} style = {{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                gap: "20px"
            }}>
                <input ref={streetRef} placeholder="Rua" defaultValue={address.street} />
                <input ref={numberRef} placeholder="Número" defaultValue={address.number}/>
                <input ref={zipRef} placeholder="Cep" defaultValue={address.zip}/>
                <select ref={cityRef} >
                    <option hidden selected>Selecione a cidade</option>
                    <option value="Curitiba">
                        Curitiba
                    </option>
                    <option value="Paranaguá">
                        Paranaguá
                    </option>
                    <option value="Matinhos">
                        Matinhos
                    </option>
                </select>
                <button type="submit">Finalizar</button>
            </form>
        </div>
    );
}

export default FormAddress