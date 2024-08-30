import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthResponse, AuthResponseError } from "../types/types";

export default function Signup() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [date_of_birth, setDateOfBrith] = useState("");    
  const idSede = "0000";
  const idRol = "24";
  const estadoUsuario = "Activo";
  const idTipoUsuario = "1";
  const idEspecialidad = "null";
  const idHojaDeVida = "null";

  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name, lastname, document, password, date_of_birth, idSede, idRol, estadoUsuario, idTipoUsuario, idEspecialidad, idHojaDeVida);

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          lastname,
          document,
          password,
          date_of_birth,
          idSede,
          idRol,
          estadoUsuario,
          idTipoUsuario,
          idEspecialidad,
          idHojaDeVida,
        }),
      });

      if (response.ok) {
        const json = (await response.json()) as AuthResponse;
        console.log(json);
        setName("");
        setLastName("");
        setDocument("");
        setPassword("");
        setDateOfBrith("");
        goTo("/");
      } else {
        const json = (await response.json()) as AuthResponseError;
        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorResponse("An unexpected error occurred. Please try again.");
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Signup</h1>
      {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
      
      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      
      <label>Last Name</label>
      <input
        type="text"
        name="lastname"
        onChange={(e) => setLastName(e.target.value)}
        value={lastname}
      />
      
      <label>Document</label>
      <input
        type="text"
        name="document"
        onChange={(e) => setDocument(e.target.value)}
        value={document}
      />
      
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      
      <label>Date of Birth</label>
      <input
        type="date"
        name="date_of_birth"
        onChange={(e) => setDateOfBrith(e.target.value)}
        value={date_of_birth}
      />

      <button>Create account</button>
    </form>
  );
}
