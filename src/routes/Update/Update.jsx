import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEntry } from "../../hooks/api";
import { useUser } from "../../UserContext";
import { useState, useEffect } from "react";

export default function Update() {
  const [user] = useUser();
  const { id } = useParams();
  const content = useEntry(id);
  // const { data } = useEntry(id);
  console.log(content);

  // Desestructurar data para el content --> const{ data }= useEntry(id)
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // console.log(content);

  useEffect(() => {
    if (content) {
      setTitle(content.data.title);
      setPlace(content.data.place);
      setDescription(content.data.description);
    }
  }, [content]);

  //cambiar fd porque no es necesario al no enviarse un archivo(JSON.stringify)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Subiendo:");
    const fd = new FormData();
    fd.append("title", title);
    fd.append("place", place);
    fd.append("description", description);
    const res = await fetch(
      "https://travel-diary-api.anxoso.com/entries/:entryId/edit",
      {
        method: "PUT",
        headers: { Authorization: user.token },
        body: fd,
      }
    );
    const json = await res.json();
    setSuccess(json);
    navigate("/");
  };

  if (!user) return <Navigate to="/" />;
  return (
    <div>
      <h2> Editar entrada </h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span> Título </span>
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>¿Donde has estado?</span>
          <input
            required
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </label>
        <label>
          <span> Cuéntanos más...</span>
          <input
            required
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button>Aplicar</button>
      </form>
      {success && (
        <div>
          Cambios realizados con éxito!
          <br />
          <a href={success.url} target="_blank">
            {success.url}
          </a>
        </div>
      )}
    </div>
  );
}
