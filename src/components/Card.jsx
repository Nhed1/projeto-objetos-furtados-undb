import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function Card({ user }) {
  return (
    <Flex flexDir="column" border="1px teal solid" borderRadius="10px" p="16px">
      <Text>
        <span style={{ color: "teal", fontWeight: "600" }}>
          Codigo de rastreio:{" "}
        </span>
        {user._id}
      </Text>
      <Text>
        <span style={{ color: "teal", fontWeight: "600" }}>NOME: </span>{" "}
        {user.nome}
      </Text>
      <Text>
        <span style={{ color: "teal", fontWeight: "600" }}>CPF: </span>
        {user.cpf}
      </Text>
      <Text>
        <span style={{ color: "teal", fontWeight: "600" }}>NOME DO ITEM: </span>
        {user.nome_item}
      </Text>
      <Text>
        <span style={{ color: "teal", fontWeight: "600" }}>ID DO ITEM: </span>
        {user.id_item}
      </Text>
      <Text>
        <span style={{ color: "teal", fontWeight: "600" }}>LOCALIZAÇÃO: </span>{" "}
        {user.localizacao}
      </Text>
      <Text>
        <span style={{ color: "teal", fontWeight: "600" }}>STATUS: </span>{" "}
        {user.status}
      </Text>
    </Flex>
  );
}
