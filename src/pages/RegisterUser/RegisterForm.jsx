import {
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../../components/ButtonSubmit";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [showPositionInput, setShowPositionInput] = useState();

  const handleCheckbox = (e) => {
    let isChecked = e.target.checked;
    return isChecked;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl padding="20px" display="flex" flexDir="column" gap="20px">
        <Flex flexDir="column">
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            type="text"
            {...register("name", { required: true })}
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            {...register("email", { required: true })}
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel htmlFor="cpf">CPF</FormLabel>
          <Input
            id="cpf"
            type="text"
            {...register("cpf", { required: true })}
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel htmlFor="name_item">Nome do item</FormLabel>
          <Input
            id="name_item"
            type="text"
            {...register("name_item", { required: true })}
          ></Input>
        </Flex>

        <Flex flexDir="column">
          <FormLabel htmlFor="status">Status</FormLabel>
          <Checkbox
            {...register("status")}
            id="status"
            type="checkbox"
            onChange={(e) => {
              if (handleCheckbox(e)) {
                setShowPositionInput(true);
              } else {
                setShowPositionInput(false);
              }
            }}
          >
            Item Encontrado
          </Checkbox>
        </Flex>

        <Flex flexDir="column" display={showPositionInput ? "flex" : "none"}>
          <FormLabel htmlFor="position">Localização</FormLabel>
          <Input id="position" type="text" {...register("position")}></Input>
        </Flex>

        <ButtonSubmit />
      </FormControl>
    </form>
  );
}
