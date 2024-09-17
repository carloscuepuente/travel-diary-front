import { Link, Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../UserContext";
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const [user, setUser] = useUser();
  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <Link to="/">
          <p>Portada</p>
        </Link>
        <Link to="/newentry">Comparte tus experiencias!</Link>
        <h1>Travel Diary</h1>
        {user ? (
          <>
            <span>{user.username}</span>
            <button onClick={handleLogout}> Cerrar Sesión</button>
          </>
        ) : (
          <nav>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/register">Registrarse</Link>
          </nav>
        )}
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
