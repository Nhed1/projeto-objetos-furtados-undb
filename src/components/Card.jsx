import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function Card({ user }) {
  return (
    <Flex flexDir="column" border="1px teal solid" borderRadius="10px" p="10px">
      <Text>ID: {user._id}</Text>
      <Text>Nome: {user.nome}</Text>
      <Text>CPF: {user.cpf}</Text>
      <Text>Nome do item: {user.nome_item}</Text>
      <Text>Id do item: {user.id_item}</Text>
      <Text>Localizacao: {user.localizacao}</Text>
      <Text>Status: {user.status}</Text>
    </Flex>
  );
}
