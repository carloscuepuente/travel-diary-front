import React from "react";
import { useState } from "react";
import { useUser } from "../../UserContext";
import "./NewPost.css";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [user, setUser] = useUser();
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  //   console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Subiendo:", file);
    const fd = new FormData();
    fd.append("title", title);
    fd.append("place", place);
    fd.append("description", description);
    fd.append("image", file);
    const res = await fetch("https://travel-diary-api.anxoso.com/entries", {
      method: "POST",
      headers: { Authorization: user.token },
      body: fd,
    });
    const json = await res.json();
    setSuccess(json);
    navigate("/");
  };

  return (
    <div>
      <h2> Comparte tu experiencia </h2>
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

        <div id="upload" className="page">
          <label>
            {preview ? (
              <img className="image-preview" src={preview} />
            ) : (
              <div className="add-image" />
            )}
            <input type="file" onChange={handleFile} />
          </label>
        </div>

        <button>Publicar</button>
      </form>
    </div>
  );
}
