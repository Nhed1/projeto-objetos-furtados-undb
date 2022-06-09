import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import ButtonSubmit from "../../components/ButtonSubmit";

export default function DeleteUserForm() {
  const baseUrl = "http://127.0.0.1:8000/consulta/v1/cpf_request/";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete(baseUrl + id);
  };

  const [id, setId] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <FormControl padding="20px" display="flex" flexDir="column" gap="20px">
        <Flex flexDir="column">
          <FormLabel htmlFor="id">
            Digite o id do item que irá deletar
          </FormLabel>
          <Input
            id="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></Input>
        </Flex>
        <ButtonSubmit />
      </FormControl>
    </form>
  );
}
