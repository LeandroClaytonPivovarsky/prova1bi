import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Header(props) {
  const { user } = useContext(UserContext);

  return (
    <header className="custom-header shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <h4 className="m-0 fw-bold text-white">{props.title}</h4>

        <div className="user-badge">
          {user.name}
        </div>
      </div>

      <style>{`
        .custom-header {
          width: 100%;
          padding: 15px 0;
          background: linear-gradient(135deg, #ff6a5b, #ffb347);
        }

        .user-badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 500;
          backdrop-filter: blur(5px);
        }
      `}</style>
    </header>
  );
}

export default Header;