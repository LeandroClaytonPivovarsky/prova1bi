import BackButton from "../../components/BackButton";
import DataUser from "../../components/DataUser";
import FormAddress from "../../components/FormAddress";
import Header  from "../../components/Header";

function Address() {
    
    return (
        <div>
            <Header title="Endereço Residencial" />
            <FormAddress />
            <DataUser />
            <BackButton />
        </div>
    );
}

export default Address;