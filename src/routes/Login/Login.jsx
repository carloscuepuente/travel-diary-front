import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../UserContext";

export default function Login() {
  const [user, setUser] = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const res = await fetch("https://travel-diary-api.anxoso.com/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await res.json();
    if (res.ok) {
      setUser(json.token);
      //setEmail(json);
      //setPassword("");
    } else {
      setError(json.error);
    }
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      ruta de ingreso
      <div id="login" className="page">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Correo:</span>
            <input
              name="correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Contraseña:</span>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button>Entrar</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}
