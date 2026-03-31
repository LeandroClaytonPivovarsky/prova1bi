import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../context/AddressContext";

function FormAddress() {
  const { address, setAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  const streetRef = useRef();
  const numberRef = useRef();
  const zipRef = useRef();
  const cityRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    setAddress({
      ...address,
      street: streetRef.current.value,
      number: numberRef.current.value,
      zip: zipRef.current.value,
      city: cityRef.current.value,
    });

    navigate("/finish");
  };

  return (
    <form onSubmit={handleSubmit} className="custom-form">
      
      <h4 className="text-center mb-4">Endereço</h4>

      <input
        ref={streetRef}
        className="form-control custom-input"
        placeholder="Rua"
        defaultValue={address.street}
      />

      <input
        ref={numberRef}
        className="form-control custom-input"
        placeholder="Número"
        defaultValue={address.number}
      />

      <input
        ref={zipRef}
        className="form-control custom-input"
        placeholder="CEP"
        defaultValue={address.zip}
      />

      <select
        ref={cityRef}
        className="form-select custom-input"
        defaultValue={address.city || ""}
      >
        <option value="" disabled>
          Selecione a cidade
        </option>
        <option value="Curitiba">Curitiba</option>
        <option value="Paranaguá">Paranaguá</option>
        <option value="Matinhos">Matinhos</option>
      </select>

      <button type="submit" className="btn custom-btn w-100">
        Finalizar
      </button>

      <style>{`
        .custom-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
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
  );
}

export default FormAddress;