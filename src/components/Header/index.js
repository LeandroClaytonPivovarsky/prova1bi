import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Header(props) {
    const {user} = useContext(UserContext);
    return (
        <div style={{
            color: "white",
            backgroundColor: "red",
            width: "100%",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "10px"
        }}>
            <h1>{props.title}</h1>
            <span>{user.name}</span>
        </div>
    );
}

export default Header