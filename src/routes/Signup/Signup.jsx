import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://travel-diary-api.anxoso.com/users/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    const json = await res.json();
    if (res.ok) {
      setEmail("");
      setPassword("");
    } else {
      setError(json.error);
    }
  };
  return (
    <div>
      ruta de registro
      <div id="signUp" className="page">
        <h1>Regístrate</h1>
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
          <button>Enviar</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}
