// import React from 'react'
import { useEntries } from "../../hooks/api";
import UserEntries from "./UserEntries";
import { Link } from "react-router-dom";

export default function Home() {
  const entries = useEntries();

  console.log(entries);

  return (
    <div>
      <h1>Soy pagina de entries</h1>
      <Link to="/register">Registrarse</Link>
      {entries?.data.map((entry) => {
        return <UserEntries key={entry.id} entry={entry} />;
      })}
    </div>
  );
}
