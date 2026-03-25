import BackButton from "../../components/BackButton";
import DataUser from "../../components/DataUser";
import FormPersonal from "../../components/FormPersonal";
import Header from "../../components/Header";

function Personal() {
    return (
        <div>
            <Header title="Dados Pessoais" />
            <FormPersonal />
            <DataUser />
            <BackButton />
        </div>
    );
}

export default Personal;