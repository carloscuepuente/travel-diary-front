// import React from 'react'
import { useEntries } from "../../hooks/api";
import EntryCard from "./entryCard";
import { Link } from "react-router-dom";

export default function Home() {
  const entries = useEntries();

  // console.log(entries);

  return (
    <div>
      <h2>Lista de entradas</h2>
      {entries?.data.map((entry) => {
        return <EntryCard key={entry.id} entry={entry} />;
      })}
    </div>
  );
}
