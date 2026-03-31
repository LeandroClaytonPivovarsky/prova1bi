import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <>
      <button 
        onClick={() => navigate(-1)} 
        className="btn custom-back-btn"
      >
        ← Voltar
      </button>

      <style>{`
        .custom-back-btn {
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          background: #ffb347;
          border: none;
          color: white;
          transition: all 0.2s ease;
        }

        .custom-back-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}

export default BackButton;