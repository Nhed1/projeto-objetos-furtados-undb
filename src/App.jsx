import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./api";
function App() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleValue(value) {
    if (value != "") {
      api.get(`/cpf_request/${value}`).then((response) => {
        response.status === 200
          ? navigate(`/user/${response.data.cpf_request._id}`)
          : alert("erro");
      });
    } else {
      alert("digite o codigo de rastreio");
    }
    
  }
  return (
    <div>
      <div>
        <label>Código de rastreio</label>
        <input
          type="text"
          placeholder="Digite seu código de rastreio"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => handleValue(value)}>Verificar</button>
      </div>
    </div>
  );
}

export default App;
