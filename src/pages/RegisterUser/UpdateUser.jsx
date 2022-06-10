import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import ButtonSubmit from "../../components/ButtonSubmit";
import emailjs from "@emailjs/browser";

export default function UpdateUser() {
  const [dados, setDados] = useState({
    localizacao: "",
    status: "Encontrado",
  });
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const baseUrl = "http://127.0.0.1:8000/consulta/v1/item_request/" + id;
    axios.put(baseUrl, dados);

    emailjs
      .send(
        "service_34w5e5x",
        "template_7bwm83h",
        {
          codigo: id,
          email: email,
        },
        "i6wtLZxOGoUBXx0q9"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl padding="20px" display="flex" flexDir="column" gap="20px">
        <Flex flexDir="column">
          <FormLabel>Código de rastreio</FormLabel>
          <Input
            id="_id"
            type="text"
            onChange={(e) => setId(e.target.value)}
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel>Email</FormLabel>
          <Input
            id="_id"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel>Localização</FormLabel>
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
