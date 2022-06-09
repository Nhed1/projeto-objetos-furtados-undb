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
        <Text mb="10px" fontWeight="bold" textAlign="center">
          Informações
        </Text>
        <Flex>
          <Text fontWeight="bold" mr="6px">
            Nome:{" "}
          </Text>
          <Text> {data?.nome}</Text>
        </Flex>
        <Flex>
          <Text fontWeight="bold" mr="6px">
            Objeto furtado:{" "}
          </Text>
          <Text>{data?.nome_item}</Text>
        </Flex>
        <Flex>
          <Text fontWeight="bold" mr="6px">
            Status:
          </Text>
          <Text>{data?.status}</Text>
        </Flex>
        {!data?.localizacao == "" && (
          <Flex>
            <Text fontWeight="bold" mr="6px">
              Localização:
            </Text>
            <Text>{data?.localizacao}</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
