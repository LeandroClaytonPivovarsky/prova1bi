import { useState } from "react";
import { AddressContext } from "../context/AddressContext";

function AddressProvider({children}) {
    const [address, setAddress] = useState({
        street: '',
        number: '',
        zip: '',
        city: ''
    });

    return (
        <AddressContext.Provider value={{address, setAddress}}>
            {children}
        </AddressContext.Provider>
    )

}

export default AddressProvider;