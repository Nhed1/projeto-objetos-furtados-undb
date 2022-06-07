import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function DeleteUserForm() {
  return (
    <FormControl>
      <FormLabel htmlFor="id">Digite o id do item que irá deletar</FormLabel>
      <Input id="id" type="text"></Input>
    </FormControl>
  );
}
