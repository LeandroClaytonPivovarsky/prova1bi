import BackButton from "../../components/BackButton";
import DataUser from "../../components/DataUser";
import Header from "../../components/Header";

function Finish() {
    return (
        <div>
            <Header title="Cadastro Finalizado!">
            </Header>
            <DataUser />
            <BackButton />
        </div>
    );
}

export default Finish