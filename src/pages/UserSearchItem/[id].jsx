import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";

export default function UserSearchItem() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    api.get(`/cpf_request/${id}`).then((data) => {
      setData(data?.data?.cpf_request);
    });
    console.log(data);
  }, []);

  return (
    <div>
      <p>Nome: {data?.nome}</p>
      <p>Objeto furtado: {data?.nome_item}</p>
      <p>Status: {data?.status}</p>
    </div>
  );
}
