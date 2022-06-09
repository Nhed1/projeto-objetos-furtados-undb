import {
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { api } from "../../api";
import ButtonSubmit from "../../components/ButtonSubmit";

export default function RegisterForm() {
  const [dados, setDados] = useState({
    cpf: "",
    nome: "",
    id_item: "",
    nome_item: "",
    localizacao: "",
    status: "Não Encontrado",
  });

  const baseUrl = "http://127.0.0.1:8000/consulta/v1/item_request/";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(baseUrl, dados);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl padding="20px" display="flex" flexDir="column" gap="20px">
        <Flex flexDir="column">
          <FormLabel htmlFor="cpf">CPF</FormLabel>
          <Input
            id="cpf"
            type="text"
            value={dados.cpf}
            onChange={(e) => setDados({ ...dados, cpf: e.target.value })}
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            type="text"
            value={dados.nome}
            onChange={(e) => setDados({ ...dados, nome: e.target.value })}
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel htmlFor="id_item">Identificador do item </FormLabel>
          <Input
            id="id_item"
            type="number"
            value={dados.id_item}
            onChange={(e) =>
              setDados({ ...dados, id_item: parseInt(e.target.value) })
            }
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel htmlFor="name_item">Nome do item</FormLabel>
          <Input
            id="name_item"
            type="text"
            value={dados.nome_item}
            onChange={(e) => setDados({ ...dados, nome_item: e.target.value })}
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel htmlFor="position">Localização</FormLabel>
          <Input
            id="position"
            value={dados.localizacao}
            onChange={(e) =>
              setDados({ ...dados, localizacao: e.target.value })
            }
            type="text"
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel htmlFor="status">Status</FormLabel>
          <Input
            value={dados.status}
            onChange={(e) => setDados({ ...dados, status: e.target.value })}
            id="status"
          ></Input>
        </Flex>

        <ButtonSubmit />
      </FormControl>
    </form>
  );
}
