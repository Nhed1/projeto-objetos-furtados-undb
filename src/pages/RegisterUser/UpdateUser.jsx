import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import ButtonSubmit from "../../components/ButtonSubmit";

export default function UpdateUser() {
  const [dados, setDados] = useState({
    localizacao: "",
    status: "Encontrado",
  });
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const baseUrl = "http://127.0.0.1:8000/consulta/v1/item_request/" + id;
    console.log(baseUrl);
    axios.put(baseUrl, dados);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl padding="20px" display="flex" flexDir="column" gap="20px">
        <Flex flexDir="column">
          <FormLabel htmlFor="localizacao">Código de rastreio</FormLabel>
          <Input
            id="_id"
            type="text"
            onChange={(e) => setId(e.target.value)}
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel htmlFor="localizacao">Localização</FormLabel>
          <Input
            id="localizacao"
            type="text"
            value={dados.localizacao}
            onChange={(e) =>
              setDados({ ...dados, localizacao: e.target.value })
            }
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel htmlFor="status">Status</FormLabel>
          <Input
            id="status"
            type="text"
            value={dados.status}
            onChange={(e) => setDados({ ...dados, status: e.target.value })}
          ></Input>
        </Flex>
        <ButtonSubmit />
      </FormControl>
    </form>
  );
}
