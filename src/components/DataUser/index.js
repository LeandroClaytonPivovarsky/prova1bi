import { useContext } from "react";
import { AddressContext } from "../../context/AddressContext";
import { UserContext } from "../../context/UserContext";

function DataUser() {
  const { address } = useContext(AddressContext);
  const { user } = useContext(UserContext);

  return (
    <div className="card custom-card shadow-sm">
      <h4 className="mb-4 text-center">Dados Pessoais</h4>

      <div className="info-group">
        <span className="label">CPF</span>
        <span className="value">{user.cpf}</span>
      </div>

      <div className="info-group">
        <span className="label">Telefone</span>
        <span className="value">{user.telephone}</span>
      </div>

      <div className="info-group">
        <span className="label">Data de Nascimento</span>
        <span className="value">{user.bd}</span>
      </div>

      <hr />

      <div className="info-group">
        <span className="label">Rua</span>
        <span className="value">{address.street}</span>
      </div>

      <div className="info-group">
        <span className="label">Número</span>
        <span className="value">{address.number}</span>
      </div>

      <div className="info-group">
        <span className="label">CEP</span>
        <span className="value">{address.zip}</span>
      </div>

      <div className="info-group">
        <span className="label">Cidade</span>
        <span className="value">{address.city}</span>
      </div>

      <style>{`
        .custom-card {
          padding: 25px;
          border-radius: 16px;
          background: white;
        }

        .info-group {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }

        .label {
          font-weight: 600;
          color: #555;
        }

        .value {
          color: #333;
        }

        hr {
          margin: 15px 0;
        }
      `}</style>
    </div>
  );
}

export default DataUser;