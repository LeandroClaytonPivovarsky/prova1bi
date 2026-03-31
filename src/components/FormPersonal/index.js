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
  <div className="d-flex justify-content-center">
    <form onSubmit={handleSubmit} className="custom-form shadow">
      
      <h4 className="text-center mb-4">Dados Pessoais</h4>

      <input
        ref={cpfRef}
        className="form-control custom-input"
        placeholder="CPF"
        defaultValue={user.cpf}
      />

      <input
        ref={telephoneRef}
        className="form-control custom-input"
        placeholder="Telefone"
        defaultValue={user.telephone}
      />

      <input
        ref={bdRef}
        type="date"
        className="form-control custom-input"
        defaultValue={user.bd}
      />

      <button type="submit" className="btn custom-btn w-100">
        Próximo
      </button>

      <style>{`
        .custom-form {
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 30px;
          border-radius: 16px;
          background: white;
        }

        .custom-input {
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #ddd;
        }

        .custom-input:focus {
          border-color: #ff6a5b;
          box-shadow: 0 0 0 0.2rem rgba(255, 106, 91, 0.25);
        }

        .custom-btn {
          border-radius: 12px;
          padding: 12px;
          font-weight: 600;
          background: linear-gradient(135deg, #ff6a5b, #ffb347);
          border: none;
          color: white;
          transition: 0.2s;
        }

        .custom-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </form>
  </div>
);
}

export default FormPersonal