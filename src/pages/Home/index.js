import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const nameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser({
      ...user,
      name: nameRef.current.value,
    });

    navigate("/personal");
  };

  return (
    <div class="bg d-flex justify-content-center align-items-center">
      <div class="card custom-card shadow-lg ">
        <h2 class=" d-flex justify-content-center align-items-centermb-4">Cadastrar</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control custom-input mb-3"
            placeholder="Digite seu nome"
            defaultValue={user.name}
            ref={nameRef}
          />

          <button class="btn custom-btn w-100">
            Continuar
          </button>
        </form>
      </div>

      <style>{`
        html, body, #root {
          height: 100%;
          margin: 0;
        }

        .bg {
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ff6a5b, #ffb347);
        }

        .custom-card {
          width: 100%;
          max-width: 400px;
          padding: 40px;
          border-radius: 16px;
          background: #f8f8f8;
        }

        .custom-input {
          border-radius: 20px;
          padding: 10px;
        }

        .custom-btn {
          border-radius: 20px;
          padding: 10px 20px;
          background: linear-gradient(135deg, #ff6a5b, #ffb347);
          border: none;
          color: white;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}

export default Home;