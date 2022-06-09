import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";

export default function UserSearchItem() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    api.get(`/item_request/${id}`).then((data) => {
      setData(data?.data["Item Request"]);
    });
    console.log(data);
  }, []);

  return (
    <Flex justifyContent="center" alignItems="center" h="100vh" w="100vw">
      <Flex flexDir="column" fontSize="2xl">
        <Text>Nome: {data?.nome}</Text>
        <Text>Objeto furtado: {data?.nome_item}</Text>
        <Text>Status: {data?.status}</Text>
      </Flex>
    </Flex>
  );
}
