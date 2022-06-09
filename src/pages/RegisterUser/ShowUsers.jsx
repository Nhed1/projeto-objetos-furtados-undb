import { Flex, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

export default function ShowUsers() {
  const baseUrl = "http://127.0.0.1:8000/consulta/v1/cpf_request/";
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(baseUrl).then((data) => {
      setData(data?.data["Itens Recuperados"]);
    });
    setLoading(false);
  }, []);

  if (loading) {
    return "loading";
  } else {
    console.log(data);
  }

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={10}>
      {!loading &&
        data?.map((user) => {
          return <Card user={user}></Card>;
        })}
    </Grid>
  );
}
// data?.data["Itens Recuperados"].map((user) => {
