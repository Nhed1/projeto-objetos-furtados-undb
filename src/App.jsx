import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "./api";
function App() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleValue(value) {
    if (value != "") {
      api.get(`/item_request/${value}`).then((response) => {
        response.status === 200
          ? navigate(`/user/${response.data["Item Request"]._id}`)
          : alert("erro");
      });
    } else {
      alert("digite o codigo de rastreio");
    }
  }

  return (
    <Flex alignItems="center" justifyContent="center" h="100vh" w="100vw">
      <Link to="/register">
        <Button
          position="absolute"
          top="10px"
          left="20px"
          background="teal"
          color="white"
        >
          Registrar usuário
        </Button>
      </Link>
      <Flex flexDir="column" justifyContent="center">
        <FormLabel textAlign="center" fontSize="3xl">
          Código de rastreio
        </FormLabel>
        <Input
          type="text"
          placeholder="Digite seu código de rastreio"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => handleValue(value)} mt="10px">
          Verificar
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
